import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/db'

const ALLOWED_ORIGIN = process.env.PMAX_ORIGIN ?? 'https://pmax.online'

const schema = z.object({
  ref: z.string().max(20),
  name: z.string().max(200),
  email: z.string().email().max(500),
  company: z.string().max(200).optional(),
  phone: z.string().max(50).optional(),
  topic: z.string().max(500).optional(),
  message: z.string().max(5000).optional(),
  locale: z.enum(['en', 'de', 'es']).default('en'),
  sourcePage: z.string().max(500).optional(),
})

function cors(res: NextResponse) {
  res.headers.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN)
  res.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  return res
}

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 204 }))
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin') ?? ''
  if (origin !== ALLOWED_ORIGIN) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return cors(NextResponse.json({ error: 'Invalid payload' }, { status: 400 }))
  }

  const { ref, name, email, company, phone, topic, message, locale, sourcePage } = parsed.data

  const { error } = await db.from('leads').insert({
    ref,
    name,
    email: email.toLowerCase(),
    company: company ?? null,
    phone: phone ?? null,
    topic: topic ?? null,
    message: message ?? null,
    locale,
    source_page: sourcePage ?? null,
    status: 'new',
  })

  if (error) {
    // Duplicate ref is fine — form re-submissions
    if (error.code === '23505') return cors(NextResponse.json({ ok: true }))
    console.error('lead insert failed', error)
    return cors(NextResponse.json({ error: 'Server error' }, { status: 500 }))
  }

  return cors(NextResponse.json({ ok: true }))
}
