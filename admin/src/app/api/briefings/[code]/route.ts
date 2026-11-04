import { NextRequest, NextResponse } from 'next/server'
import { cors, findBriefing, notFound, signedPdfUrl } from '@/lib/briefings'

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 204 }), 'GET')
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  const { code } = await params
  const token = req.nextUrl.searchParams.get('t') ?? ''

  const row = await findBriefing(
    code,
    token,
    // client_contact is for us; the page doesn't need it, so it stays server-side.
    'code, lang, date, client_name, title, html, css, pdf_path, pdf_filename',
  )
  if (!row) return notFound('GET')

  const pdfPath = row.pdf_path as string | null
  const pdfFilename = row.pdf_filename as string | null
  const pdf_url = pdfPath && pdfFilename ? await signedPdfUrl(pdfPath, pdfFilename) : null

  // access_token is never part of the response; pdf_path stays server-side too.
  const { pdf_path: _path, ...briefing } = row
  return cors(NextResponse.json({ ...briefing, pdf_url }), 'GET')
}
