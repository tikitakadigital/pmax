import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

const ALLOWED_ORIGIN = process.env.PMAX_ORIGIN ?? 'https://pmax.online'

function cors(res: NextResponse) {
  res.headers.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN)
  res.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  return res
}

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 204 }))
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  const { code } = await params

  const { data, error } = await db
    .from('offers')
    .select('*')
    .eq('code', code.toUpperCase())
    .single()

  if (error || !data) {
    return cors(NextResponse.json({ error: 'Not found' }, { status: 404 }))
  }

  // Merge metadata columns + content jsonb into the shape the frontend expects
  const offer = {
    code: data.code,
    status: data.status,
    date: data.date,
    valid_until: data.valid_until,
    viewed_at: data.viewed_at,
    client_name: data.client_name,
    client_website: data.client_website,
    client_email: data.client_email,
    client_phone: data.client_phone,
    contact_person: data.contact_person,
    title: data.title,
    ...data.content,
  }

  return cors(NextResponse.json(offer))
}
