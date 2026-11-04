'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import s from './briefing.module.css'

// Token-gated client briefing. The document itself (HTML fragment scoped under
// .brf, its CSS and the reviewed PDF) lives in Supabase and comes from the
// admin API; this page is only the shell around it. See
// admin/scripts/load-briefing.mjs for how a briefing gets there.

const API = process.env.NEXT_PUBLIC_ADMIN_API ?? 'https://admin.pmax.online'

interface Briefing {
  code: string
  lang: 'de' | 'en' | 'es'
  status: 'draft' | 'sent'
  date: string
  client_name: string
  title: string
  html: string
  css: string
  pdf_filename: string | null
  pdf_url: string | null
}

const LABELS = {
  de: { pdf: 'PDF herunterladen', pdfBusy: 'PDF wird vorbereitet…', draft: 'Entwurf', loading: 'Briefing wird geladen…', notFound: 'Dieses Briefing wurde nicht gefunden.', error: 'Fehler beim Laden. Bitte schreib uns an hello@pmax.online.', pdfError: 'Das PDF konnte nicht geladen werden. Bitte lade die Seite neu.' },
  en: { pdf: 'Download PDF', pdfBusy: 'Preparing PDF…', draft: 'Draft', loading: 'Loading briefing…', notFound: 'This briefing was not found.', error: 'Something went wrong. Please email us at hello@pmax.online.', pdfError: 'The PDF could not be loaded. Please reload the page.' },
  es: { pdf: 'Descargar PDF', pdfBusy: 'Preparando el PDF…', draft: 'Borrador', loading: 'Cargando el briefing…', notFound: 'No hemos encontrado este briefing.', error: 'Algo ha fallado. Escríbenos a hello@pmax.online.', pdfError: 'No se ha podido cargar el PDF. Recarga la página.' },
}

type State = 'loading' | 'not_found' | 'error' | 'ok'

/**
 * The token travels in the fragment (#t=…): browsers never send it to a server
 * and GA4 leaves it out of page_location. ?t= still works for links in the
 * proposal style, but is moved into the fragment straight away.
 */
function readToken(): string {
  const fromHash = new URLSearchParams(window.location.hash.slice(1)).get('t')
  if (fromHash) return fromHash
  const fromQuery = new URLSearchParams(window.location.search).get('t')
  if (fromQuery) {
    window.history.replaceState(null, '', `${window.location.pathname}#t=${encodeURIComponent(fromQuery)}`)
    return fromQuery
  }
  return ''
}

export default function BriefingPage() {
  const pathname = usePathname()
  const code = pathname.split('/').filter(Boolean).at(-1) ?? null
  const [briefing, setBriefing] = useState<Briefing | null>(null)
  const [pageState, setPageState] = useState<State>('loading')
  const [token, setToken] = useState('')
  const [pdfBusy, setPdfBusy] = useState(false)
  const [pdfError, setPdfError] = useState(false)

  useEffect(() => {
    if (!code || code === 'briefing') { setPageState('not_found'); return }
    const t = readToken()
    if (!t) { setPageState('not_found'); return }
    setToken(t)

    fetch(`${API}/api/briefings/${encodeURIComponent(code)}?t=${encodeURIComponent(t)}`, { cache: 'no-store' })
      .then(r => {
        if (r.status === 404) { setPageState('not_found'); return null }
        if (!r.ok) { setPageState('error'); return null }
        return r.json() as Promise<Briefing>
      })
      .then(data => {
        if (!data) return
        setBriefing(data)
        setPageState('ok')
        fetch(`${API}/api/briefings/${encodeURIComponent(code)}/viewed?t=${encodeURIComponent(t)}`, { method: 'POST' }).catch(() => {})
      })
      .catch(() => setPageState('error'))
  }, [code])

  // Named after the PDF, so a bookmark or a browser print matches the download.
  useEffect(() => {
    if (!briefing) return
    const previous = document.title
    document.title = briefing.pdf_filename?.replace(/\.pdf$/i, '') ?? `${briefing.code} — ${briefing.client_name}`
    return () => { document.title = previous }
  }, [briefing])

  // The stored PDF is the reviewed version, identical on every device, so the
  // button downloads that file rather than printing the page. Signed links
  // expire after 10 minutes; a fresh one is fetched on every click.
  async function downloadPdf() {
    if (!code || !briefing) return
    setPdfBusy(true)
    setPdfError(false)
    try {
      const r = await fetch(`${API}/api/briefings/${encodeURIComponent(code)}/pdf?t=${encodeURIComponent(token)}`, { cache: 'no-store' })
      if (!r.ok) throw new Error(String(r.status))
      const { url } = await r.json() as { url: string }
      // The signed link answers with Content-Disposition: attachment and the
      // stored filename, so this downloads the file without leaving the page.
      window.location.assign(url)
    } catch {
      setPdfError(true)
    } finally {
      setPdfBusy(false)
    }
  }

  const L = LABELS[briefing?.lang ?? 'de']
  if (pageState === 'loading') return <div className={s.state}><span>{L.loading}</span></div>
  if (pageState === 'not_found') return <div className={s.state}><span>{L.notFound}</span></div>
  if (pageState === 'error' || !briefing) return <div className={s.state}><span>{L.error}</span></div>

  return (
    <div className={s.page} lang={briefing.lang}>
      <div className={s.actions}>
        <div className={s.actionsInner}>
          <a className={s.logo} href="https://pmax.online/" aria-label="pmax">
            <span>pmax</span><span className={s.logoDot} aria-hidden="true" />
          </a>
          {briefing.status === 'draft' && <span className={s.pill}>{L.draft}</span>}
          {pdfError && <span className={s.pdfError} role="alert">{L.pdfError}</span>}
          {briefing.pdf_filename && (
            <button className={s.btn} onClick={downloadPdf} disabled={pdfBusy}>
              {pdfBusy ? L.pdfBusy : L.pdf}
            </button>
          )}
        </div>
      </div>

      {/* Our own content, loaded by admin/scripts/load-briefing.mjs, which
          rejects scripts and event handlers and scopes all CSS under .brf. */}
      <style dangerouslySetInnerHTML={{ __html: briefing.css }} />
      <div className="brf" dangerouslySetInnerHTML={{ __html: briefing.html }} />
    </div>
  )
}
