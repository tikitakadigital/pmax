import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/db'

const ALLOWED_ORIGIN = process.env.PMAX_ORIGIN ?? 'https://pmax.online'

const schema = z.object({
  sessionId: z.string().uuid(),
  pageUrl: z.string().url().max(2048),
  consentType: z.enum(['accept_all', 'reject_all', 'custom']),
  analytics: z.boolean(),
  marketing: z.boolean(),
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

  const { sessionId, pageUrl, consentType, analytics, marketing } = parsed.data
  const countryCode = req.headers.get('cf-ipcountry') ?? req.headers.get('x-vercel-ip-country') ?? null

  const { error } = await db.from('consent_logs').insert({
    session_id: sessionId,
    page_url: pageUrl,
    consent_type: consentType,
    analytics,
    marketing,
    country_code: countryCode,
  })

  if (error) {
    console.error('consent log insert failed', error)
    return cors(NextResponse.json({ error: 'Server error' }, { status: 500 }))
  }

  return cors(NextResponse.json({ ok: true }))
}
