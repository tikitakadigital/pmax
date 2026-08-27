import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { createHash } from 'crypto'
import { z } from 'zod'
import { db } from '@/lib/db'
import { sendPasswordReset } from '@/lib/email'

const schema = z.object({ email: z.string().email() })

// Always return 200 so we don't leak whether an email exists.
const OK = NextResponse.json({ ok: true })

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })

  const email = parsed.data.email.toLowerCase()
  const { data: user } = await db
    .from('admin_users')
    .select('id, email')
    .eq('email', email)
    .single()

  if (!user) return OK  // no-op — don't reveal existence

  const token = randomUUID()
  const tokenHash = createHash('sha256').update(token).digest('hex')
  const expires = new Date(Date.now() + 60 * 60 * 1000).toISOString() // 1 hour

  await db.from('admin_users').update({
    reset_token_hash: tokenHash,
    reset_token_expires: expires,
  }).eq('id', user.id)

  await sendPasswordReset(user.email, token)
  return OK
}
