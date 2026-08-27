import { NextRequest, NextResponse } from 'next/server'
import { compare } from 'bcryptjs'
import { createHash } from 'crypto'
import { z } from 'zod'
import { db } from '@/lib/db'
import { createSession, sessionCookieOptions } from '@/lib/session'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

const WINDOW_MS = 15 * 60 * 1000   // 15 minutes
const MAX_ATTEMPTS = 10

function ipHash(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  return createHash('sha256').update(ip).digest('hex')
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  const { email, password } = parsed.data
  const hash = ipHash(req)

  // Rate limit: count recent failed attempts from this IP
  const since = new Date(Date.now() - WINDOW_MS).toISOString()
  const { count } = await db
    .from('login_attempts')
    .select('*', { count: 'exact', head: true })
    .eq('ip_hash', hash)
    .eq('success', false)
    .gte('created_at', since)

  if ((count ?? 0) >= MAX_ATTEMPTS) {
    return NextResponse.json({ error: 'Too many attempts. Try again in 15 minutes.' }, { status: 429 })
  }

  // Fetch user
  const { data: user } = await db
    .from('admin_users')
    .select('id, email, password_hash')
    .eq('email', email.toLowerCase())
    .single()

  const valid = user ? await compare(password, user.password_hash) : false

  // Record attempt (always, to avoid timing attacks)
  await db.from('login_attempts').insert({ ip_hash: hash, success: valid })

  if (!valid) {
    // Constant-time delay to resist timing attacks when user doesn't exist
    await new Promise(r => setTimeout(r, 200))
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
  }

  // Update last login
  await db.from('admin_users').update({ last_login_at: new Date().toISOString() }).eq('id', user!.id)

  const token = await createSession({ userId: user!.id, email: user!.email })
  const res = NextResponse.json({ ok: true })
  res.cookies.set(sessionCookieOptions(token))
  return res
}
