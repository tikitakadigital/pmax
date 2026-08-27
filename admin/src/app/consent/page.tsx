import { requireSession } from '@/lib/session'
import { db } from '@/lib/db'
import AdminNav from '@/components/AdminNav'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Consent log' }
export const revalidate = 0

function fmt(iso: string) {
  return new Date(iso).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

const TYPE_LABEL: Record<string, string> = {
  accept_all: 'Accept all',
  reject_all: 'Reject all',
  custom: 'Custom',
}

export default async function ConsentPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; country?: string; from?: string; to?: string }>
}) {
  const session = await requireSession()
  const { type, country, from, to } = await searchParams

  const [
    { count: totalAccept },
    { count: totalReject },
    { count: totalCustom },
    logsResult,
  ] = await Promise.all([
    db.from('consent_logs').select('*', { count: 'exact', head: true }).eq('consent_type', 'accept_all'),
    db.from('consent_logs').select('*', { count: 'exact', head: true }).eq('consent_type', 'reject_all'),
    db.from('consent_logs').select('*', { count: 'exact', head: true }).eq('consent_type', 'custom'),
    (() => {
      let q = db.from('consent_logs')
        .select('id, session_id, page_url, consent_type, analytics, marketing, country_code, created_at')
        .order('created_at', { ascending: false })
        .limit(500)
      if (type && type !== 'all') q = q.eq('consent_type', type)
      if (country) q = q.eq('country_code', country.toUpperCase())
      if (from) q = q.gte('created_at', new Date(from).toISOString())
      if (to) q = q.lte('created_at', new Date(to + 'T23:59:59').toISOString())
      return q
    })(),
  ])

  const logs = logsResult.data ?? []
  const total = (totalAccept ?? 0) + (totalReject ?? 0) + (totalCustom ?? 0)
  const acceptRate = total > 0 ? Math.round(((totalAccept ?? 0) / total) * 100) : 0

  return (
    <div style={{ display: 'flex' }}>
      <AdminNav email={session.email} />
      <main style={{ marginLeft: 200, flex: 1, padding: 32 }}>
        <h1 style={{ fontWeight: 900, fontSize: 22, letterSpacing: '-0.5px', marginBottom: 24 }}>Consent log</h1>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
          {[
            { label: 'Total events', value: total },
            { label: 'Accept all', value: totalAccept ?? 0 },
            { label: 'Reject all', value: totalReject ?? 0 },
            { label: 'Accept rate', value: `${acceptRate}%` },
          ].map(s => (
            <div key={s.label} style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, padding: '16px 20px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-1px' }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <form method="GET" style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
          <select name="type" defaultValue={type ?? 'all'} style={{ width: 160 }}>
            <option value="all">All types</option>
            <option value="accept_all">Accept all</option>
            <option value="reject_all">Reject all</option>
            <option value="custom">Custom</option>
          </select>
          <input name="country" defaultValue={country} placeholder="Country (DE, ES…)" style={{ width: 160 }} />
          <input name="from" type="date" defaultValue={from} style={{ width: 140 }} />
          <input name="to" type="date" defaultValue={to} style={{ width: 140 }} />
          <button type="submit" className="btn">Filter</button>
          {(type || country || from || to) && <a href="/consent" className="btn btn-ghost">Clear</a>}
        </form>

        {/* Table */}
        <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, overflow: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Session ID</th>
                <th>Page</th>
                <th>Type</th>
                <th>Analytics</th>
                <th>Marketing</th>
                <th>Country</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {logs.map(l => (
                <tr key={l.id}>
                  <td style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--muted)' }}>{l.session_id.slice(0, 8)}…</td>
                  <td style={{ fontSize: 12, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'var(--muted)' }} title={l.page_url}>{l.page_url.replace(/^https?:\/\/[^/]+/, '')}</td>
                  <td><span className={`badge ${l.consent_type === 'accept_all' ? 'badge-won' : l.consent_type === 'reject_all' ? 'badge-lost' : 'badge-contacted'}`}>{TYPE_LABEL[l.consent_type]}</span></td>
                  <td style={{ textAlign: 'center' }}>{l.analytics ? '✓' : '—'}</td>
                  <td style={{ textAlign: 'center' }}>{l.marketing ? '✓' : '—'}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: 12 }}>{l.country_code ?? '—'}</td>
                  <td style={{ fontSize: 12, fontFamily: 'monospace', color: 'var(--muted)' }}>{fmt(l.created_at)}</td>
                </tr>
              ))}
              {!logs.length && (
                <tr><td colSpan={7} style={{ textAlign: 'center', color: 'var(--muted)', padding: 40 }}>No events found</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>Showing {logs.length} of {total} total events</span>
          <a href="/api/consent/export" style={{ fontSize: 12, color: 'var(--muted)' }}>Export CSV →</a>
        </div>
      </main>
    </div>
  )
}
