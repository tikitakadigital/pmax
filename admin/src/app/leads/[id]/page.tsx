import { requireSession } from '@/lib/session'
import { db } from '@/lib/db'
import AdminNav from '@/components/AdminNav'
import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import type { LeadStatus } from '@/lib/db'

export const metadata: Metadata = { title: 'Lead detail' }
export const revalidate = 0

const FUNNEL_STATUSES: LeadStatus[] = ['new', 'contacted', 'qualified', 'proposal_sent', 'negotiating', 'on_hold', 'won', 'lost']

const STATUS_LABELS: Record<string, string> = {
  new: 'New', contacted: 'Contacted', qualified: 'Qualified',
  proposal_sent: 'Proposal sent', negotiating: 'Negotiating', on_hold: 'On hold',
  won: 'Won', lost: 'Lost', archived: 'Archived',
  job_application: 'Job application', service_offer: 'Service offer', spam: 'Spam',
}

const ALL_STATUSES: LeadStatus[] = [
  'new', 'contacted', 'qualified', 'proposal_sent', 'negotiating', 'on_hold',
  'won', 'lost', 'archived', 'job_application', 'service_offer', 'spam',
]

// What to do next per status
const NEXT_STEP: Record<string, { action: string; detail: string; urgency: 'high' | 'medium' | 'low' }> = {
  new:           { action: 'Respond',         detail: 'Reply within 24 hours. Qualify: budget, timeline, scope. Goal is a call.',                                         urgency: 'high' },
  contacted:     { action: 'Follow up',       detail: 'No response after 3 days? Follow up once. On a call: confirm they are qualified before investing more time.',       urgency: 'medium' },
  qualified:     { action: 'Send proposal',   detail: 'You have enough to write a proposal. Do it now — momentum drops fast.',                                            urgency: 'high' },
  proposal_sent: { action: 'Follow up',       detail: 'No reply after 5 days? Send a short follow-up. Offer a 20-minute call to go through the proposal together.',       urgency: 'medium' },
  negotiating:   { action: 'Keep momentum',   detail: 'Respond quickly. Clarify open points. If it is going in circles, call them — email threads lose deals.',            urgency: 'high' },
  on_hold:       { action: 'Check in',        detail: 'Set a date to check back in. After 4 weeks without contact, send a brief note.',                                   urgency: 'low' },
  won:           { action: 'Kick off',        detail: 'Confirm kickoff date, send contract, onboard. First impression matters.',                                           urgency: 'high' },
  lost:          { action: 'Note the reason', detail: 'Log why it was lost. Consider a check-in in 3 months — situations change.',                                        urgency: 'low' },
  archived:      { action: 'Archived',        detail: 'No action needed.',                                                                                                urgency: 'low' },
  job_application: { action: 'Not a lead',   detail: 'Reply to acknowledge if appropriate. No further action needed unless hiring.',                                      urgency: 'low' },
  service_offer:   { action: 'Not a lead',   detail: 'No action needed.',                                                                                                urgency: 'low' },
  spam:            { action: 'Not a lead',   detail: 'No action needed.',                                                                                                urgency: 'low' },
}

const STALE_AFTER: Record<string, number> = {
  new: 1, contacted: 3, qualified: 7, proposal_sent: 5, negotiating: 7, on_hold: 28,
}

const URGENCY_COLOR = { high: '#fb923c', medium: '#fbbf24', low: 'var(--muted)' }

function fmt(iso: string) {
  return new Date(iso).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

function daysAgo(iso: string) {
  return Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000)
}

async function updateLead(formData: FormData) {
  'use server'
  const id    = formData.get('id') as string
  const newStatus = formData.get('status') as LeadStatus
  const newNote   = (formData.get('new_note') as string | null)?.trim() ?? ''

  const { data: current } = await db.from('leads').select('status, notes').eq('id', id).single()
  if (!current) return

  const now = new Date()
  const ts  = now.toISOString().slice(0, 16).replace('T', ' ')

  const statusChanged = newStatus !== current.status
  const parts: string[] = []
  if (current.notes?.trim()) parts.push(current.notes.trim())

  if (statusChanged && newNote) {
    parts.push(`[${ts}] → ${STATUS_LABELS[newStatus] ?? newStatus}\n${newNote}`)
  } else if (statusChanged) {
    parts.push(`[${ts}] → ${STATUS_LABELS[newStatus] ?? newStatus}`)
  } else if (newNote) {
    parts.push(`[${ts}]\n${newNote}`)
  }

  const notes = parts.join('\n\n')

  await db.from('leads').update({
    status: newStatus,
    notes,
    updated_at: now.toISOString(),
  }).eq('id', id)

  redirect(`/leads/${id}`)
}

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await requireSession()
  const { id } = await params

  const { data: lead } = await db.from('leads').select('*').eq('id', id).single()
  if (!lead) notFound()

  const days        = daysAgo(lead.updated_at)
  const threshold   = STALE_AFTER[lead.status]
  const isStale     = !!(threshold && days >= threshold)
  const nextStep    = NEXT_STEP[lead.status] ?? NEXT_STEP['archived']
  const funnelIndex = FUNNEL_STATUSES.indexOf(lead.status as LeadStatus)

  return (
    <div style={{ display: 'flex' }}>
      <AdminNav email={session.email} />
      <main style={{ marginLeft: 200, flex: 1, padding: 32, maxWidth: 960 }}>

        <a href="/leads" style={{ fontSize: 13, color: 'var(--muted)', display: 'inline-block', marginBottom: 20 }}>← All leads</a>

        {/* ── Header ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div>
            <h1 style={{ fontWeight: 900, fontSize: 22, letterSpacing: '-0.5px', marginBottom: 4 }}>{lead.name}</h1>
            <div style={{ color: 'var(--muted)', fontSize: 13 }}>
              {lead.company && <>{lead.company} · </>}
              {lead.email && <a href={`mailto:${lead.email}`}>{lead.email}</a>}
              {lead.phone && <> · <a href={`tel:${lead.phone}`}>{lead.phone}</a></>}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span className={`badge badge-${lead.status}`} style={{ fontSize: 12 }}>{STATUS_LABELS[lead.status] ?? lead.status}</span>
            <div style={{ fontSize: 11, color: isStale ? '#fb923c' : 'var(--muted)', marginTop: 6, fontWeight: isStale ? 700 : 400 }}>
              {isStale ? `⚠ ${days}d — overdue` : `Updated ${days}d ago`}
            </div>
          </div>
        </div>

        {/* ── Pipeline bar ── */}
        {funnelIndex >= 0 && (
          <div style={{ display: 'flex', gap: 0, marginBottom: 24, borderRadius: 4, overflow: 'hidden', border: '1px solid var(--border)' }}>
            {FUNNEL_STATUSES.map((s, i) => {
              const isPast    = i < funnelIndex
              const isCurrent = i === funnelIndex
              const isWonLost = s === 'won' || s === 'lost'
              const bg = isCurrent
                ? 'var(--mint)'
                : isPast
                ? 'var(--panel)'
                : 'var(--surface)'
              const color = isCurrent ? '#000' : isPast ? 'var(--muted)' : 'var(--muted)'
              return (
                <div
                  key={s}
                  style={{
                    flex: 1,
                    padding: '6px 4px',
                    background: bg,
                    borderRight: i < FUNNEL_STATUSES.length - 1 ? '1px solid var(--border)' : 'none',
                    textAlign: 'center',
                    fontSize: 10,
                    fontWeight: isCurrent ? 700 : 600,
                    color,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {STATUS_LABELS[s]}
                </div>
              )
            })}
          </div>
        )}

        {/* ── Next step ── */}
        <div style={{
          background: 'var(--panel)',
          border: `1px solid ${URGENCY_COLOR[nextStep.urgency]}40`,
          borderLeft: `3px solid ${URGENCY_COLOR[nextStep.urgency]}`,
          borderRadius: 4,
          padding: '14px 18px',
          marginBottom: 24,
          display: 'flex',
          gap: 16,
          alignItems: 'flex-start',
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: URGENCY_COLOR[nextStep.urgency], marginBottom: 4 }}>
              Next · {nextStep.action}
            </div>
            <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.55 }}>{nextStep.detail}</div>
          </div>
          {lead.email && (
            <a href={`mailto:${lead.email}`} className="btn btn-ghost" style={{ fontSize: 12, padding: '6px 14px', whiteSpace: 'nowrap', flexShrink: 0 }}>
              Email →
            </a>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 20 }}>

          {/* ── Lead details ── */}
          <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 16 }}>Enquiry</div>
            {([
              ['Ref',         lead.ref],
              ['Received',    fmt(lead.created_at)],
              ['Language',    lead.locale?.toUpperCase()],
              ['Topic',       lead.topic ?? '—'],
              ['Source page', lead.source_page ?? '—'],
            ] as [string, string][]).map(([label, value]) => (
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

          {/* ── Notes + update ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Notes history */}
            {lead.notes?.trim() && (
              <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, padding: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 12 }}>Notes</div>
                <div style={{ maxHeight: 240, overflowY: 'auto' }}>
                  {lead.notes.trim().split(/\n\n+/).reverse().map((entry: string, i: number) => {
                    const tsMatch = entry.match(/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2})\]/)
                    const ts   = tsMatch?.[1]
                    const body = ts ? entry.slice(tsMatch[0].length).trim() : entry
                    return (
                      <div key={i} style={{ borderBottom: i < lead.notes.trim().split(/\n\n+/).length - 1 ? '1px solid var(--border)' : 'none', paddingBottom: 12, marginBottom: 12 }}>
                        {ts && <div style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--muted)', marginBottom: 4 }}>{ts}</div>}
                        <div style={{ fontSize: 13, lineHeight: 1.6, whiteSpace: 'pre-wrap', color: 'var(--text)' }}>{body}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Update form */}
            <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, padding: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 16 }}>Update</div>
              <form action={updateLead} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <input type="hidden" name="id" value={lead.id} />
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Status</label>
                  <select name="status" defaultValue={lead.status}>
                    {ALL_STATUSES.map(s => <option key={s} value={s}>{STATUS_LABELS[s]}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Add note</label>
                  <textarea name="new_note" rows={4} placeholder="What happened? What is the next action?" style={{ resize: 'vertical' }} />
                  <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>Saved with timestamp. Status changes are logged automatically.</div>
                </div>
                <button type="submit">Save</button>
              </form>
            </div>

          </div>
        </div>

      </main>
    </div>
  )
}
