import { timingSafeEqual } from 'node:crypto'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

const ALLOWED_ORIGIN = process.env.PMAX_ORIGIN ?? 'https://pmax.online'

/** Signed PDF links expire after 10 minutes; the page asks for a fresh one on every click. */
export const PDF_URL_TTL = 600

export function cors(res: NextResponse, methods: string) {
  res.headers.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN)
  res.headers.set('Access-Control-Allow-Methods', `${methods}, OPTIONS`)
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  // Client documents: never cached by a proxy or the browser.
  res.headers.set('Cache-Control', 'no-store')
  res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  return res
}

export const notFound = (methods: string) =>
  cors(NextResponse.json({ error: 'Not found' }, { status: 404 }), methods)

function tokenMatches(expected: string | null, given: string) {
  if (!expected || !given) return false
  const a = Buffer.from(expected)
  const b = Buffer.from(given)
  return a.length === b.length && timingSafeEqual(a, b)
}

/**
 * The briefing row for a code, or null when the code is unknown or the token
 * doesn't match. Callers answer both cases with the same 404, so a wrong token
 * reveals nothing about whether the code exists.
 */
export async function findBriefing(code: string, token: string, columns: string) {
  const { data, error } = await db
    .from('briefings')
    .select(`${columns}, access_token, status`)
    .eq('code', code.toUpperCase())
    .neq('status', 'archived')
    .maybeSingle()

  if (error || !data) return null
  const row = data as unknown as Record<string, unknown> & { access_token: string | null }
  if (!tokenMatches(row.access_token, token)) return null
  const { access_token: _omit, ...rest } = row
  return rest
}

export async function signedPdfUrl(path: string, filename: string) {
  const { data, error } = await db.storage
    .from('briefings')
    .createSignedUrl(path, PDF_URL_TTL, { download: filename })
  return error ? null : data.signedUrl
}
