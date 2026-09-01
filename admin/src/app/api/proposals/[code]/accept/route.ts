import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

const ALLOWED_ORIGIN = process.env.PMAX_ORIGIN ?? 'https://pmax.online'

function cors(res: NextResponse) {
  res.headers.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN)
  res.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  return res
}

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 204 }))
}

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  const { code } = await params

  const { error } = await db
    .from('offers')
    .update({ status: 'accepted', accepted_at: new Date().toISOString() })
    .eq('code', code.toUpperCase())
    .in('status', ['sent'])  // only accept if currently sent

  if (error) {
    return cors(NextResponse.json({ error: 'Could not accept offer' }, { status: 400 }))
  }

  return cors(NextResponse.json({ ok: true }))
}
