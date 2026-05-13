import { NextResponse } from 'next/server'

// ── In-memory rate limiter ────────────────────────────────────────────────────
// 3 submissions per IP per 15-minute window.
// Resets on serverless cold-starts — the other layers cover that gap.
const WINDOW_MS = 15 * 60 * 1000
const MAX_PER_WINDOW = 3
const rateMap = new Map<string, { count: number; reset: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + WINDOW_MS })
    return false
  }
  if (entry.count >= MAX_PER_WINDOW) return true
  entry.count++
  return false
}

function maybePrune() {
  if (Math.random() > 0.05) return
  const now = Date.now()
  for (const [key, val] of rateMap) {
    if (now > val.reset) rateMap.delete(key)
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const URL_RE = /https?:\/\/|www\./gi

function getIp(req: Request): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

// Silent 200 so bots think they succeeded
function silentDrop() {
  return NextResponse.json({ ok: true })
}

// ── Handler ───────────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    // 1. Origin — must come from our own domain (localhost allowed in dev)
    const origin = req.headers.get('origin') ?? ''
    if (origin && !origin.match(/^https?:\/\/(localhost|pmax\.online)/)) {
      return silentDrop()
    }

    const body = await req.json()

    // 2. Honeypot — bots fill the hidden "website" field
    if (body.website) return silentDrop()

    // 3. Time-gate — bots submit instantly; real users take > 3 s
    //    Also reject tokens older than 2 hours (stale tab / replayed request)
    const loadedAt = parseInt(body._t ?? '0', 10)
    const elapsed = Date.now() - loadedAt
    if (!loadedAt || elapsed < 3000 || elapsed > 2 * 60 * 60 * 1000) {
      return silentDrop()
    }

    // 4. Rate limit per IP
    const ip = getIp(req)
    maybePrune()
    if (isRateLimited(ip)) {
      return NextResponse.json({ ok: false, error: 'Too many requests — please try again later.' }, { status: 429 })
    }

    // 5. Required fields
    const { name, company, email, message } = body
    if (!name?.trim() || !company?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    // 6. Email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email address' }, { status: 400 })
    }

    // 7. URL density — more than 2 links in a message is a strong spam signal
    const urlCount = ((message + name).match(URL_RE) ?? []).length
    if (urlCount > 2) return silentDrop()

    // ── Send email ────────────────────────────────────────────────────────────
    // Wire up Resend when SMTP is configured:
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'pmax website <noreply@pmax.online>',
    //   to: 'hello@pmax.online',
    //   replyTo: email,
    //   subject: `New enquiry from ${company}`,
    //   text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${body.phone ?? '—'}\nTopic: ${body.topic ?? '—'}\n\n${message}`,
    // })

    console.log('[contact form]', { name, company, email, phone: body.phone, topic: body.topic, message })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
