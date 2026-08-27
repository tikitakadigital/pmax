import { requireSession } from '@/lib/session'
import { db } from '@/lib/db'
import AdminNav from '@/components/AdminNav'
import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import type { LeadStatus } from '@/lib/db'

export const metadata: Metadata = { title: 'Lead detail' }
export const revalidate = 0

const STATUSES: LeadStatus[] = ['new', 'contacted', 'qualified', 'won', 'lost', 'archived']

function fmt(iso: string) {
  return new Date(iso).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

async function updateLead(formData: FormData) {
  'use server'
  const id = formData.get('id') as string
  const status = formData.get('status') as LeadStatus
  const notes = formData.get('notes') as string
  await db.from('leads').update({ status, notes }).eq('id', id)
  redirect(`/leads/${id}`)
}

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await requireSession()
  const { id } = await params

  const { data: lead } = await db.from('leads').select('*').eq('id', id).single()
  if (!lead) notFound()

  return (
    <div style={{ display: 'flex' }}>
      <AdminNav email={session.email} />
      <main style={{ marginLeft: 200, flex: 1, padding: 32, maxWidth: 900 }}>
        <a href="/leads" style={{ fontSize: 13, color: 'var(--muted)', display: 'inline-block', marginBottom: 20 }}>← All leads</a>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontWeight: 900, fontSize: 22, letterSpacing: '-0.5px', marginBottom: 4 }}>{lead.name}</h1>
            <div style={{ color: 'var(--muted)', fontSize: 13 }}>{lead.company} · {lead.email}{lead.phone ? ` · ${lead.phone}` : ''}</div>
          </div>
          <span className={`badge badge-${lead.status}`} style={{ fontSize: 12 }}>{lead.status}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Lead details */}
          <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 16 }}>Enquiry details</div>
            {[
              ['Ref', lead.ref],
              ['Received', fmt(lead.created_at)],
              ['Language', lead.locale?.toUpperCase()],
              ['Topic', lead.topic ?? '—'],
              ['Source page', lead.source_page ?? '—'],
            ].map(([label, value]) => (
              <div key={label} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: 13, wordBreak: 'break-all' }}>{value}</div>
              </div>
            ))}
            {lead.message && (
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Message</div>
                <div style={{ background: 'var(--surface)', borderRadius: 4, padding: '12px 14px', fontSize: 13, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{lead.message}</div>
              </div>
            )}
          </div>

          {/* Status + notes */}
          <div>
            <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, padding: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 16 }}>Update</div>
              <form action={updateLead} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <input type="hidden" name="id" value={lead.id} />
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Status</label>
                  <select name="status" defaultValue={lead.status}>
                    {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Notes</label>
                  <textarea name="notes" rows={6} defaultValue={lead.notes ?? ''} placeholder="Add internal notes…" style={{ resize: 'vertical' }} />
                  <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>Appended to history, not replaced.</div>
                </div>
                <button type="submit">Save changes</button>
              </form>
            </div>

            {/* Quick links */}
            <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
              <a href={`mailto:${lead.email}`} className="btn btn-ghost" style={{ flex: 1, textAlign: 'center', fontSize: 12, padding: '8px 12px', display: 'block' }}>
                Email →
              </a>
              {lead.phone && (
                <a href={`tel:${lead.phone}`} className="btn btn-ghost" style={{ flex: 1, textAlign: 'center', fontSize: 12, padding: '8px 12px', display: 'block' }}>
                  Call →
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
