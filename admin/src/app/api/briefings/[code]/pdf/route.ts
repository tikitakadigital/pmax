import { NextRequest, NextResponse } from 'next/server'
import { cors, findBriefing, notFound, signedPdfUrl } from '@/lib/briefings'

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 204 }), 'GET')
}

// A fresh signed link for the "PDF herunterladen" button, so the download
// still works when the page has been open longer than the link's lifetime.
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  const { code } = await params
  const token = req.nextUrl.searchParams.get('t') ?? ''

  const row = await findBriefing(code, token, 'pdf_path, pdf_filename')
  const path = row?.pdf_path as string | null | undefined
  const filename = row?.pdf_filename as string | null | undefined
  if (!row || !path || !filename) return notFound('GET')

  const url = await signedPdfUrl(path, filename)
  if (!url) return notFound('GET')
  return cors(NextResponse.json({ url, filename }), 'GET')
}
