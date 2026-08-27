import { requireSession } from '@/lib/session'
import { db } from '@/lib/db'
import AdminNav from '@/components/AdminNav'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Leads' }
export const revalidate = 0

const STATUS_LABELS: Record<string, string> = {
  new: 'New', contacted: 'Contacted', qualified: 'Qualified',
  won: 'Won', lost: 'Lost', archived: 'Archived',
}

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string }>
}) {
  const session = await requireSession()
  const { status, q } = await searchParams

  let query = db.from('leads').select('id, ref, name, email, company, topic, status, locale, created_at').order('created_at', { ascending: false })
  if (status && status !== 'all') query = query.eq('status', status)
  if (q) query = query.or(`name.ilike.%${q}%,email.ilike.%${q}%,company.ilike.%${q}%`)

  const { data: leads } = await query.limit(200)

  return (
    <div style={{ display: 'flex' }}>
      <AdminNav email={session.email} />
      <main style={{ marginLeft: 200, flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 style={{ fontWeight: 900, fontSize: 22, letterSpacing: '-0.5px' }}>Leads</h1>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <form method="GET" style={{ display: 'flex', gap: 8 }}>
              <input name="q" defaultValue={q} placeholder="Search name, email, company…" style={{ width: 240 }} />
              <select name="status" defaultValue={status ?? 'all'}>
                <option value="all">All statuses</option>
                {Object.entries(STATUS_LABELS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
              <button type="submit" className="btn">Filter</button>
              {(status || q) && <a href="/leads" className="btn btn-ghost">Clear</a>}
            </form>
          </div>
        </div>

        <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
          <table>
            <thead>
              <tr>
                <th>Name / Company</th>
                <th>Email</th>
                <th>Topic</th>
                <th>Lang</th>
                <th>Status</th>
                <th>Received</th>
              </tr>
            </thead>
            <tbody>
              {(leads ?? []).map(l => (
                <tr key={l.id} style={{ cursor: 'pointer' }}>
                  <td>
                    <a href={`/leads/${l.id}`} style={{ fontWeight: 600, color: 'var(--text)', textDecoration: 'none', display: 'block' }}>{l.name}</a>
                    {l.company && <span style={{ fontSize: 12, color: 'var(--muted)' }}>{l.company}</span>}
                  </td>
                  <td style={{ fontFamily: 'monospace', fontSize: 13 }}>{l.email}</td>
                  <td style={{ maxWidth: 180, fontSize: 12, color: 'var(--muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.topic ?? '—'}</td>
                  <td style={{ fontSize: 12, fontFamily: 'monospace', textTransform: 'uppercase' }}>{l.locale}</td>
                  <td><span className={`badge badge-${l.status}`}>{l.status}</span></td>
                  <td style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'monospace' }}>{fmt(l.created_at)}</td>
                </tr>
              ))}
              {!leads?.length && (
                <tr><td colSpan={6} style={{ textAlign: 'center', color: 'var(--muted)', padding: 40 }}>No leads found</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 12, fontSize: 12, color: 'var(--muted)' }}>{leads?.length ?? 0} result{leads?.length !== 1 ? 's' : ''}</div>
      </main>
    </div>
  )
}
