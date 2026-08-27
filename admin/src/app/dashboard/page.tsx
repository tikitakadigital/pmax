import { requireSession } from '@/lib/session'
import { db } from '@/lib/db'
import AdminNav from '@/components/AdminNav'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Dashboard' }
export const revalidate = 60

const STATUS_ORDER = ['new', 'contacted', 'qualified', 'won', 'lost', 'archived']

export default async function DashboardPage() {
  const session = await requireSession()

  const [
    { count: totalLeads },
    { count: newLeads },
    { count: totalConsent },
    { data: recentLeads },
    { data: statusBreakdown },
  ] = await Promise.all([
    db.from('leads').select('*', { count: 'exact', head: true }),
    db.from('leads').select('*', { count: 'exact', head: true }).eq('status', 'new'),
    db.from('consent_logs').select('*', { count: 'exact', head: true }),
    db.from('leads').select('id, ref, name, company, status, created_at').order('created_at', { ascending: false }).limit(5),
    db.from('leads').select('status').then(({ data }) => {
      const counts: Record<string, number> = {}
      for (const r of data ?? []) counts[r.status] = (counts[r.status] ?? 0) + 1
      return { data: STATUS_ORDER.map(s => ({ status: s, count: counts[s] ?? 0 })) }
    }),
  ])

  const stats = [
    { label: 'Total leads', value: totalLeads ?? 0, highlight: false },
    { label: 'New / unread', value: newLeads ?? 0, highlight: true },
    { label: 'Consent events', value: totalConsent ?? 0, highlight: false },
  ]

  return (
    <div style={{ display: 'flex' }}>
      <AdminNav email={session.email} />
      <main style={{ marginLeft: 200, flex: 1, padding: 32 }}>
        <h1 style={{ fontWeight: 900, fontSize: 22, letterSpacing: '-0.5px', marginBottom: 28 }}>Dashboard</h1>

        {/* Stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
          {stats.map(s => (
            <div key={s.label} style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, padding: '20px 24px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>{s.label}</div>
              <div style={{ fontSize: 36, fontWeight: 900, letterSpacing: '-1px', color: s.highlight ? 'var(--mint)' : 'var(--text)' }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Recent leads */}
          <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, fontSize: 13 }}>Recent leads</span>
              <a href="/leads" style={{ fontSize: 12, color: 'var(--muted)' }}>View all →</a>
            </div>
            <table>
              <tbody>
                {(recentLeads ?? []).map(l => (
                  <tr key={l.id}>
                    <td><a href={`/leads/${l.id}`} style={{ fontWeight: 600, color: 'var(--text)', textDecoration: 'none' }}>{l.name}</a><br /><span style={{ fontSize: 12, color: 'var(--muted)' }}>{l.company ?? '—'}</span></td>
                    <td style={{ textAlign: 'right' }}><span className={`badge badge-${l.status}`}>{l.status}</span></td>
                  </tr>
                ))}
                {!recentLeads?.length && <tr><td colSpan={2} style={{ color: 'var(--muted)', textAlign: 'center' }}>No leads yet</td></tr>}
              </tbody>
            </table>
          </div>

          {/* Pipeline breakdown */}
          <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontWeight: 700, fontSize: 13 }}>Pipeline</span>
            </div>
            <div style={{ padding: '12px 20px' }}>
              {(statusBreakdown ?? []).map(({ status, count }) => (
                <div key={status} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                  <span className={`badge badge-${status}`}>{status}</span>
                  <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: 15 }}>{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
