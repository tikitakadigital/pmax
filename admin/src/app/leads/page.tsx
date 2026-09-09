import { requireSession } from '@/lib/session'
import { db } from '@/lib/db'
import AdminNav from '@/components/AdminNav'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Leads' }
export const revalidate = 0

// Statuses that represent active pipeline (shown in funnel summary)
const FUNNEL: { key: string; label: string }[] = [
  { key: 'new',           label: 'New' },
  { key: 'contacted',     label: 'Contacted' },
  { key: 'qualified',     label: 'Qualified' },
  { key: 'proposal_sent', label: 'Proposal sent' },
  { key: 'negotiating',   label: 'Negotiating' },
  { key: 'on_hold',       label: 'On hold' },
]

const STATUS_LABELS: Record<string, string> = {
  new: 'New', contacted: 'Contacted', qualified: 'Qualified',
  proposal_sent: 'Proposal sent', negotiating: 'Negotiating', on_hold: 'On hold',
  won: 'Won', lost: 'Lost', archived: 'Archived',
  job_application: 'Job application', service_offer: 'Service offer', spam: 'Spam',
}

// How many days without activity before a lead is considered stale
const STALE_AFTER: Record<string, number> = {
  new: 1, contacted: 3, qualified: 7, proposal_sent: 5, negotiating: 7, on_hold: 28,
}

// Non-lead / noise statuses — hidden by default
const NOISE = new Set(['job_application', 'service_offer', 'spam', 'archived'])

function daysAgo(iso: string) {
  return Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000)
}

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string; all?: string }>
}) {
  const session = await requireSession()
  const { status, q, all } = await searchParams

  let query = db
    .from('leads')
    .select('id, ref, name, email, company, topic, status, locale, notes, created_at, updated_at')
    .order('updated_at', { ascending: false })

  if (status && status !== 'all') {
    query = query.eq('status', status)
  } else if (!all && !status) {
    // Default: hide noise
    query = query.not('status', 'in', '("job_application","service_offer","spam","archived","won","lost")')
  }
  if (q) query = query.or(`name.ilike.%${q}%,email.ilike.%${q}%,company.ilike.%${q}%`)

  const { data: leads } = await query.limit(200)

  // Pipeline counts (always from full dataset)
  const { data: allLeads } = await db.from('leads').select('status')
  const counts: Record<string, number> = {}
  for (const l of allLeads ?? []) counts[l.status] = (counts[l.status] ?? 0) + 1
  const wonCount  = counts['won']  ?? 0
  const lostCount = counts['lost'] ?? 0

  const needsAttention = (leads ?? []).filter(l => {
    const threshold = STALE_AFTER[l.status]
    if (!threshold) return false
    return daysAgo(l.updated_at) >= threshold
  })

  const showingAll = !!all || !!status

  return (
    <div style={{ display: 'flex' }}>
      <AdminNav email={session.email} />
      <main style={{ marginLeft: 200, flex: 1, padding: 32 }}>

        {/* ── Header ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 style={{ fontWeight: 900, fontSize: 22, letterSpacing: '-0.5px' }}>Leads</h1>
          <form method="GET" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input name="q" defaultValue={q} placeholder="Search name, email, company…" style={{ width: 220 }} />
            <select name="status" defaultValue={status ?? ''}>
              <option value="">Active pipeline</option>
              <option value="all">All statuses</option>
              {Object.entries(STATUS_LABELS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
            </select>
            {all && <input type="hidden" name="all" value="1" />}
            <button type="submit" className="btn">Filter</button>
            {(status || q || all) && <a href="/leads" className="btn btn-ghost">Clear</a>}
          </form>
        </div>

        {/* ── Pipeline funnel ── */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 28, background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
          {FUNNEL.map(({ key, label }, i) => {
            const n = counts[key] ?? 0
            const isLast = i === FUNNEL.length - 1
            return (
              <a
                key={key}
                href={`/leads?status=${key}`}
                style={{
                  flex: 1,
                  padding: '14px 12px 12px',
                  borderRight: isLast ? 'none' : '1px solid var(--border)',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'background .12s',
                }}
                className="pipeline-cell"
              >
                <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>{label}</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: n > 0 ? 'var(--text)' : 'var(--muted)', letterSpacing: '-0.03em' }}>{n}</div>
              </a>
            )
          })}
          {/* Won / Lost summary */}
          <div style={{ padding: '14px 16px 12px', borderLeft: '1px solid var(--border)', minWidth: 90 }}>
            <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>Closed</div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>
              <span style={{ color: '#34d399' }}>{wonCount}W</span>
              <span style={{ color: 'var(--muted)', margin: '0 4px' }}>/</span>
              <span style={{ color: '#f87171' }}>{lostCount}L</span>
            </div>
          </div>
        </div>

        {/* ── Needs attention banner ── */}
        {needsAttention.length > 0 && (
          <div style={{ background: '#2a1a0a', border: '1px solid #fb923c40', borderRadius: 6, padding: '12px 16px', marginBottom: 20, display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: '#fb923c', fontSize: 14, fontWeight: 700 }}>⚠ {needsAttention.length} lead{needsAttention.length > 1 ? 's need' : ' needs'} attention</span>
            <span style={{ color: '#fb923c80', fontSize: 13 }}>—</span>
            <span style={{ color: '#fb923c', fontSize: 13 }}>
              {needsAttention.map(l => l.name).join(', ')}
            </span>
          </div>
        )}

        {/* ── Leads table ── */}
        <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
          <table>
            <thead>
              <tr>
                <th>Name / Company</th>
                <th>Status</th>
                <th style={{ width: 60 }}>Days</th>
                <th>Topic</th>
                <th>Last note</th>
                <th style={{ width: 110 }}>Received</th>
              </tr>
            </thead>
            <tbody>
              {(leads ?? []).map(l => {
                const days = daysAgo(l.updated_at)
                const threshold = STALE_AFTER[l.status]
                const isStale = threshold && days >= threshold
                const lastNote = l.notes?.trim().split('\n').filter(Boolean).at(-1) ?? ''

                return (
                  <tr key={l.id} style={{ cursor: 'pointer' }}>
                    <td>
                      <a href={`/leads/${l.id}`} style={{ fontWeight: 600, color: 'var(--text)', textDecoration: 'none', display: 'block' }}>{l.name}</a>
                      {l.company && <span style={{ fontSize: 12, color: 'var(--muted)' }}>{l.company}</span>}
                    </td>
                    <td>
                      <span className={`badge badge-${l.status}`}>{STATUS_LABELS[l.status] ?? l.status}</span>
                    </td>
                    <td style={{ fontFamily: 'monospace', fontSize: 12, color: isStale ? '#fb923c' : 'var(--muted)', fontWeight: isStale ? 700 : 400 }}>
                      {days}d{isStale ? ' !' : ''}
                    </td>
                    <td style={{ maxWidth: 160, fontSize: 12, color: 'var(--muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {l.topic ?? '—'}
                    </td>
                    <td style={{ maxWidth: 220, fontSize: 12, color: 'var(--muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {lastNote || '—'}
                    </td>
                    <td style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>
                      {fmt(l.created_at)}
                    </td>
                  </tr>
                )
              })}
              {!leads?.length && (
                <tr><td colSpan={6} style={{ textAlign: 'center', color: 'var(--muted)', padding: 40 }}>No leads found</td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 10, fontSize: 12, color: 'var(--muted)', display: 'flex', gap: 16 }}>
          <span>{leads?.length ?? 0} result{leads?.length !== 1 ? 's' : ''}</span>
          {!showingAll && <a href="/leads?all=1" style={{ color: 'var(--muted)' }}>Show all including won / lost / noise →</a>}
        </div>

      </main>
    </div>
  )
}
