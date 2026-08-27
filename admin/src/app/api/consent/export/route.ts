import { NextResponse } from 'next/server'
import { getSession } from '@/lib/session'
import { db } from '@/lib/db'

export async function GET() {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data } = await db
    .from('consent_logs')
    .select('id, session_id, page_url, consent_type, analytics, marketing, country_code, created_at')
    .order('created_at', { ascending: false })

  const rows = [
    ['id', 'session_id', 'page_url', 'consent_type', 'analytics', 'marketing', 'country_code', 'created_at'],
    ...(data ?? []).map(r => [r.id, r.session_id, r.page_url, r.consent_type, r.analytics, r.marketing, r.country_code ?? '', r.created_at]),
  ]

  const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n')

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="consent-log-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  })
}
