import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { hash } from 'bcryptjs'
import { z } from 'zod'
import { db } from '@/lib/db'

const schema = z.object({
  token: z.string().uuid(),
  password: z.string().min(12, 'Password must be at least 12 characters'),
})

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message ?? 'Invalid request'
    return NextResponse.json({ error: msg }, { status: 400 })
  }

  const { token, password } = parsed.data
  const tokenHash = createHash('sha256').update(token).digest('hex')

  const { data: user } = await db
    .from('admin_users')
    .select('id, reset_token_expires')
    .eq('reset_token_hash', tokenHash)
    .single()

  if (!user) {
    return NextResponse.json({ error: 'Invalid or expired reset link' }, { status: 400 })
  }

  if (!user.reset_token_expires || new Date(user.reset_token_expires) < new Date()) {
    return NextResponse.json({ error: 'Reset link has expired' }, { status: 400 })
  }

  const passwordHash = await hash(password, 12)

  await db.from('admin_users').update({
    password_hash: passwordHash,
    reset_token_hash: null,
    reset_token_expires: null,
  }).eq('id', user.id)

  return NextResponse.json({ ok: true })
}
