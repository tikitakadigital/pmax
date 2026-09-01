import { requireSession } from '@/lib/session'
import AdminNav from '@/components/AdminNav'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import { DEFAULT_CONTENT, contentToForm, formToContent, generateCode } from '@/lib/offer-defaults'
import { OfferForm } from '@/components/OfferForm'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'New offer' }

async function createOffer(fd: FormData) {
  'use server'

  const code = (fd.get('code') as string).toUpperCase().trim()
  const content = formToContent(fd)

  const { data, error } = await db.from('offers').insert({
    code,
    status: fd.get('status') as string,
    date: fd.get('date') as string,
    valid_until: fd.get('valid_until') as string,
    client_name: fd.get('client_name') as string,
    client_website: (fd.get('client_website') as string) || null,
    client_email: fd.get('client_email') as string,
    client_phone: (fd.get('client_phone') as string) || null,
    contact_person: fd.get('contact_person') as string,
    title: fd.get('title') as string,
    content,
  }).select('id').single()

  if (error) throw new Error(error.message)
  redirect(`/offers/${data.id}`)
}

export default async function NewOfferPage() {
  const session = await requireSession()
  const defaults = contentToForm(DEFAULT_CONTENT)
  const today = new Date().toISOString().slice(0, 10)
  const nextMonth = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)

  return (
    <div style={{ display: 'flex' }}>
      <AdminNav email={session.email} />
      <main style={{ marginLeft: 200, flex: 1, padding: 32, maxWidth: 1100 }}>
        <a href="/offers" style={{ fontSize: 13, color: 'var(--muted)', display: 'inline-block', marginBottom: 20 }}>← All offers</a>
        <h1 style={{ fontWeight: 900, fontSize: 22, letterSpacing: '-0.5px', marginBottom: 24 }}>New offer</h1>
        <form action={createOffer}>
          <OfferForm
            defaults={{
              code: generateCode(),
              status: 'draft',
              date: today,
              valid_until: nextMonth,
              client_name: '',
              client_website: '',
              client_email: '',
              client_phone: '',
              contact_person: 'Philipp Enders',
              title: '',
              ...defaults,
            }}
          />
        </form>
      </main>
    </div>
  )
}
