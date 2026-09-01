import { requireSession } from '@/lib/session'
import { db } from '@/lib/db'
import AdminNav from '@/components/AdminNav'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Offers' }
export const revalidate = 0

const STATUS_COLORS: Record<string, string> = {
  draft: '#854d0e',
  sent: '#1d4ed8',
  accepted: '#15803d',
  expired: '#b91c1c',
}

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

function fmtDatetime(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

export default async function OffersPage() {
  const session = await requireSession()

  const { data: offers } = await db
    .from('offers')
    .select('id, code, status, date, valid_until, viewed_at, accepted_at, client_name, client_email, title')
    .order('created_at', { ascending: false })
    .limit(200)

  return (
    <div style={{ display: 'flex' }}>
      <AdminNav email={session.email} />
      <main style={{ marginLeft: 200, flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 style={{ fontWeight: 900, fontSize: 22, letterSpacing: '-0.5px' }}>Offers</h1>
          <a href="/offers/new" className="btn" style={{ fontSize: 13, padding: '8px 16px' }}>+ New offer</a>
        </div>

        <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Client</th>
                <th>Title</th>
                <th>Status</th>
                <th>Valid until</th>
                <th>Viewed</th>
                <th>Accepted</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {(offers ?? []).map(o => (
                <tr key={o.id}>
                  <td>
                    <a href={`/offers/${o.id}`} style={{ fontWeight: 700, fontFamily: 'monospace', fontSize: 13, color: 'var(--mint)' }}>
                      {o.code}
                    </a>
                  </td>
                  <td>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>{o.client_name}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>{o.client_email}</div>
                  </td>
                  <td style={{ fontSize: 12, color: 'var(--muted)', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{o.title}</td>
                  <td>
                    <span style={{
                      fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 12,
                      background: STATUS_COLORS[o.status] + '22',
                      color: STATUS_COLORS[o.status],
                    }}>
                      {o.status}
                    </span>
                  </td>
                  <td style={{ fontSize: 12, fontFamily: 'monospace', color: new Date(o.valid_until) < new Date() ? '#b91c1c' : 'var(--text)' }}>
                    {fmt(o.valid_until)}
                  </td>
                  <td style={{ fontSize: 12, color: 'var(--muted)' }}>{o.viewed_at ? fmtDatetime(o.viewed_at) : '—'}</td>
                  <td style={{ fontSize: 12, color: 'var(--muted)' }}>{o.accepted_at ? fmtDatetime(o.accepted_at) : '—'}</td>
                  <td>
                    <a
                      href={`https://pmax.online/proposal/${o.code}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: 11, color: 'var(--muted)' }}
                    >
                      ↗ Open
                    </a>
                  </td>
                </tr>
              ))}
              {!offers?.length && (
                <tr><td colSpan={8} style={{ textAlign: 'center', color: 'var(--muted)', padding: 40 }}>No offers yet</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 12, fontSize: 12, color: 'var(--muted)' }}>{offers?.length ?? 0} offer{offers?.length !== 1 ? 's' : ''}</div>
      </main>
    </div>
  )
}
