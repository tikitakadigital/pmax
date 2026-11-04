import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { cors, findBriefing, notFound } from '@/lib/briefings'

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 204 }), 'POST')
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  const { code } = await params
  const token = req.nextUrl.searchParams.get('t') ?? ''

  // Unlike proposals, this needs the token: without it anyone who guessed a
  // code could mark a briefing as read.
  const row = await findBriefing(code, token, 'code')
  if (!row) return notFound('POST')

  // First view only, and only once the briefing has been sent: our own
  // previews of a draft shouldn't count as the client having opened it.
  await db
    .from('briefings')
    .update({ viewed_at: new Date().toISOString() })
    .eq('code', code.toUpperCase())
    .eq('status', 'sent')
    .is('viewed_at', null)

  return cors(NextResponse.json({ ok: true }), 'POST')
}
