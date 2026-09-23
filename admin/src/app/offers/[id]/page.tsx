import { requireSession } from '@/lib/session'
import { db } from '@/lib/db'
import AdminNav from '@/components/AdminNav'
import { notFound, redirect } from 'next/navigation'
import { contentToForm, formToContent } from '@/lib/offer-defaults'
import { OfferForm } from '@/components/OfferForm'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Offer detail' }
export const revalidate = 0

function fmt(iso: string) {
  return new Date(iso).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

async function updateOffer(fd: FormData) {
  'use server'
  const id = fd.get('_id') as string
  // Keep content the form doesn't know about (blocks, lang, hour-based pricing).
  const { data: existing } = await db.from('offers').select('content').eq('id', id).single()
  const content = { ...(existing?.content ?? {}), ...formToContent(fd) }

  await db.from('offers').update({
    code: (fd.get('code') as string).toUpperCase().trim(),
    status: fd.get('status') as string,
    date: fd.get('date') as string,
    valid_until: fd.get('valid_until') as string,
    client_name: fd.get('client_name') as string,
    client_website: (fd.get('client_website') as string) || null,
    client_address: (fd.get('client_address') as string) || null,
    client_email: fd.get('client_email') as string,
    client_phone: (fd.get('client_phone') as string) || null,
    contact_person: fd.get('contact_person') as string,
    title: fd.get('title') as string,
    content,
    updated_at: new Date().toISOString(),
  }).eq('id', id)

  redirect(`/offers/${id}`)
}

export default async function OfferDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await requireSession()
  const { id } = await params

  const { data: offer } = await db.from('offers').select('*').eq('id', id).single()
  if (!offer) notFound()

  const formDefaults = {
    code: offer.code,
    status: offer.status,
    date: offer.date,
    valid_until: offer.valid_until,
    client_name: offer.client_name,
    client_website: offer.client_website ?? '',
    client_address: offer.client_address ?? '',
    client_email: offer.client_email,
    client_phone: offer.client_phone ?? '',
    contact_person: offer.contact_person,
    title: offer.title,
    ...contentToForm(offer.content),
  }

  const proposalUrl = `https://pmax.online/proposal/${offer.code}?t=${offer.access_token ?? ''}`

  return (
    <div style={{ display: 'flex' }}>
      <AdminNav email={session.email} />
      <main style={{ marginLeft: 200, flex: 1, padding: 32, maxWidth: 1100 }}>
        <a href="/offers" style={{ fontSize: 13, color: 'var(--muted)', display: 'inline-block', marginBottom: 20 }}>← All offers</a>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontWeight: 900, fontSize: 22, letterSpacing: '-0.5px', marginBottom: 4 }}>
              {offer.client_name || '—'}
            </h1>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>
              {offer.code} · {offer.status}
              {offer.viewed_at && <> · Viewed {fmt(offer.viewed_at)}</>}
              {offer.accepted_at && <> · <span style={{ color: '#22c55e' }}>Accepted {fmt(offer.accepted_at)}</span></>}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <a href={proposalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: 12 }}>
              Preview ↗
            </a>
            <button
              type="button"
              className="btn"
              style={{ fontSize: 12 }}
              onClick={undefined}
              // Copy link — handled client-side below via data attr
              data-copy={proposalUrl}
            >
              Copy link
            </button>
          </div>
        </div>

        {/* Copy-link script */}
        <script dangerouslySetInnerHTML={{ __html: `
          document.querySelectorAll('[data-copy]').forEach(btn => {
            btn.addEventListener('click', () => {
              navigator.clipboard.writeText(btn.dataset.copy).then(() => {
                btn.textContent = 'Copied!';
                setTimeout(() => btn.textContent = 'Copy link', 2000);
              });
            });
          });
        `}} />

        {Array.isArray(offer.content?.blocks) && offer.content.blocks.length > 0 && (
          <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderLeft: '3px solid #3cffd0', borderRadius: 6, padding: '12px 16px', marginBottom: 16, fontSize: 12, lineHeight: 1.6 }}>
            <strong>Blocks-based offer ({offer.content.blocks.length} blocks).</strong> The proposal page renders those blocks, not the fields below.
            Client details, dates and status here still apply. The blocks themselves are edited in SQL — saving this form keeps them untouched.
          </div>
        )}

        <form action={updateOffer}>
          <input type="hidden" name="_id" value={offer.id} />
          <OfferForm defaults={formDefaults} />
        </form>
      </main>
    </div>
  )
}
