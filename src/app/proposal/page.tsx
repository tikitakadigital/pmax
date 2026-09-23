'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import s from './proposal.module.css'

// ─── Types ────────────────────────────────────────────────────────────────────

type OfferStatus = 'draft' | 'sent' | 'accepted' | 'expired'


// ─── Blocks ───────────────────────────────────────────────────────────────────
// A blocks-based offer composes its own sections, in its own order. Offers
// without blocks fall back to the fixed sprint/retainer layout below.

export type Block =
  | { type: 'text'; title?: string; paragraphs: string[] }
  | { type: 'statement'; title?: string; text: string }
  | { type: 'list'; title?: string; intro?: string; items: string[]; ordered?: boolean }
  | { type: 'packages'; title?: string; intro?: string; items: { name: string; meta?: string; price?: string; price_note?: string; includes?: string[]; note?: string }[] }
  | { type: 'table'; title?: string; intro?: string; headers: string[]; rows: string[][]; note?: string }
  | { type: 'summary'; title?: string; intro?: string; rows: { label: string; value: string; note?: string }[]; footnote?: string }
  | { type: 'note'; label?: string; text: string }

export interface Offer {
  code: string
  /** Language of the offer content — drives the UI labels. Defaults to English. */
  lang?: 'de' | 'en'
  status: OfferStatus
  date: string
  valid_until: string

  client_name: string
  client_website?: string
  client_address?: string
  client_email: string
  client_phone?: string
  contact_person: string

  title: string

  /** Composed sections. When present, they replace the fixed layout below. */
  blocks?: Block[]

  intro?: string

  situation_strengths?: string
  situation_gaps?: string[]

  positioning_core?: string
  positioning_pillars?: { pillar: string; what: string; message: string }[]
  positioning_strategy?: string
  positioning_note?: string

  channels?: { name: string; benefit: string; timeframe: string; optional?: boolean }[]
  channels_glossary?: { term: string; short: string }[]

  sprint_price?: number
  sprint_days?: number
  /** Hour-based packages: shown instead of days when set. */
  sprint_hours?: number
  sprint_includes?: string[]
  sprint_flex_note?: string

  retainer_fixed?: string[]
  retainer_variable?: string[]
  retainer_variants?: {
    label: string
    days: number
    /** Hour-based retainer: shown instead of days when set. */
    hours?: number
    price: number
    focus: string
    fits_when: string
  }[]
  retainer_note?: string

  decision_text?: string

  timeline?: { period: string; description: string }[]

  kpis?: string[]
  expectations?: string[]

  external_costs?: { item: string; recommendation: string }[]
  external_costs_note?: string

  conditions?: string[]

  next_steps?: string[]

  glossary?: { term: string; definition: string }[]
}


// ─── UI labels ────────────────────────────────────────────────────────────────
// The offer content (intro, channels, conditions …) is written in the client's
// language; these labels follow it via offer.lang. English is the default.

const LABELS = {
  en: {
    savePdf: 'Save as PDF', acceptBar: 'Accept proposal', accepted: '✓ Accepted',
    expiredOn: 'Expired on', draft: 'Draft',
    metaCode: 'PROPOSAL NO.', metaFor: 'FOR', metaFrom: 'FROM', metaDate: 'DATE', metaValid: 'VALID UNTIL', metaContact: 'CONTACT',
    s01: 'Opening',
    s02: 'Situation', strengths: 'Strengths:', gaps: 'Gaps:',
    s03: 'Your Positioning — a brief note',
    posIntro: 'We are not inventing anything new. We are writing down what is already there, so that all content, ads and copy pull in the same direction.',
    coreMessage: 'Core message', threePillars: 'Three pillars',
    thPillar: 'PILLAR', thBehind: 'WHAT IS BEHIND IT', thMessage: 'MESSAGE',
    keyPoint: 'The key strategic point', note: 'NOTE',
    s04: 'The Channels and Why',
    thChannel: 'CHANNEL', thDelivers: 'WHAT IT DELIVERS', thSoon: 'HOW SOON', inBrief: 'In brief:',
    s05: 'The Monthly Retainer',
    retainerIntro: 'A retainer is a fixed monthly time budget. The advantage over project-by-project work: we allocate the time where it has the most impact that month. No renegotiation.',
    sprintTitle: (d: number, price: string) => `Launch Sprint (one-off, ${d} days — ${price} net)`,
    sprintTitleHours: (h: number, price: string) => `Launch Sprint (one-off, ${h} hours — ${price} net)`,
    sprintIntro: 'Before ongoing work makes sense, the foundation has to be in place:',
    flexStart: 'FLEXIBLE START',
    retainerOptions: (n: number) => (n === 1 ? 'Monthly Retainer' : `Monthly Retainer — ${n} options`),
    alwaysIncluded: 'Always included:', variableLabel: 'Variable, allocated by impact:',
    daysMonth: 'DAYS/MONTH', hoursMonth: 'HOURS/MONTH', time: 'Time', hours: (h: number) => `ca. ${h} hours`,
    fee: 'Fee', perMonthNet: (p: string) => `${p} net / month`,
    focus: 'Focus', bestWhen: 'Best when',
    s06: 'How to Choose',
    s07: 'Timeline (recommendation, from approval)', thPeriod: 'PERIOD', thHappens: 'WHAT HAPPENS',
    s08: 'What We Measure — and what is realistic', kpis: 'KPIs:', expectations: 'Realistic expectations — important:',
    s09: 'External Costs', thItem: 'ITEM', thRecommendation: 'RECOMMENDATION',
    accountsNote: 'All advertising accounts run in your name. You retain full access and ownership at all times — even if we stop working together.',
    s10: 'Terms', overview: 'Overview',
    pricingLabel: (label: string, d: number) => `${label} · SPRINT + ${d} DAYS/MONTH`,
    pricingLabelHours: (label: string, h: number) => `${label} · SPRINT + ${h} HOURS/MONTH`,
    perMonth: '/month',
    pricingNote: (sprint: string, total: string) => `+ ${sprint} Sprint one-off · first 3 months total: ${total}`,
    footnote: 'Media budget not included. All amounts net.',
    s11: 'Next Step', nextIntro: 'To get started, we will need:',
    discuss: 'If you want to discuss anything before deciding — just reach out.',
    acceptBtn: 'Accept Proposal', acceptHint: 'By clicking you confirm your agreement. We will be in touch to arrange the kickoff.',
    acceptedMsg: 'You have accepted the proposal. We look forward to working together.',
    glossary: 'Glossary',
    footerMeta: (code: string, until: string) => `PROPOSAL ${code} · CONFIDENTIAL · VALID UNTIL ${until}`,
  },
  de: {
    savePdf: 'PDF speichern', acceptBar: 'Angebot annehmen', accepted: '✓ Angenommen',
    expiredOn: 'Abgelaufen am', draft: 'Entwurf',
    metaCode: 'ANGEBOTSNUMMER', metaFor: 'FÜR', metaFrom: 'VON', metaDate: 'DATUM', metaValid: 'GÜLTIG BIS', metaContact: 'KONTAKT',
    s01: 'Kurz vorab',
    s02: 'Ausgangslage', strengths: 'Was gut ist:', gaps: 'Was fehlt:',
    s03: 'Deine Positionierung — kurz festgehalten',
    posIntro: 'Wir entwickeln nichts Neues. Wir schreiben auf, was schon da ist, damit alle Texte, Anzeigen und Inhalte in dieselbe Richtung laufen.',
    coreMessage: 'Kernaussage', threePillars: 'Drei Belegsäulen',
    thPillar: 'SÄULE', thBehind: 'WAS DAHINTER STECKT', thMessage: 'MÖGLICHE BOTSCHAFT',
    keyPoint: 'Der wichtigste strategische Punkt', note: 'HINWEIS',
    s04: 'Die Kanäle und warum',
    thChannel: 'KANAL', thDelivers: 'WAS ES BRINGT', thSoon: 'WIE SCHNELL', inBrief: 'Kurz erklärt:',
    s05: 'Der monatliche Retainer',
    retainerIntro: 'Ein Retainer ist ein festes monatliches Zeitkontingent. Der Vorteil gegenüber Einzelprojekten: Wir setzen die Zeit dort ein, wo sie im jeweiligen Monat den größten Effekt hat. Ohne Nachverhandlung.',
    sprintTitle: (d: number, price: string) => `Start-Sprint (einmalig, ${d} Tage — ${price} netto)`,
    sprintTitleHours: (h: number, price: string) => `Einmalige Leistungen (${h} Stunden — ${price} netto)`,
    sprintIntro: 'Bevor laufende Arbeit sinnvoll ist, muss die Basis stehen:',
    flexStart: 'FLEXIBLER EINSTIEG',
    retainerOptions: (n: number) => (n === 1 ? 'Laufende Leistung' : `Laufender Retainer — ${n} Varianten`),
    alwaysIncluded: 'Immer fest enthalten:', variableLabel: 'Variabel, nach Wirkung eingesetzt:',
    daysMonth: 'TAGE/MONAT', hoursMonth: 'STD./MONAT', time: 'Zeit', hours: (h: number) => `ca. ${h} Stunden`,
    fee: 'Honorar', perMonthNet: (p: string) => `${p} netto / Monat`,
    focus: 'Schwerpunkt', bestWhen: 'Passt, wenn',
    s06: 'Wie du wählst',
    s07: 'Zeitplan (Empfehlung, ab Freigabe)', thPeriod: 'ZEITRAUM', thHappens: 'WAS PASSIERT',
    s08: 'Was wir messen — und was realistisch ist', kpis: 'Kennzahlen:', expectations: 'Realistische Erwartung — wichtig:',
    s09: 'Kosten außerhalb des Honorars', thItem: 'POSTEN', thRecommendation: 'EMPFEHLUNG START',
    accountsNote: 'Alle Werbekonten laufen auf deinen Namen. Du behältst jederzeit vollen Zugriff und Eigentum — auch wenn wir irgendwann nicht mehr zusammenarbeiten.',
    s10: 'Konditionen', overview: 'Übersicht',
    pricingLabel: (label: string, d: number) => `${label} · SPRINT + ${d} TAGE/MONAT`,
    pricingLabelHours: (label: string, h: number) => `${label} · EINMALIG + ${h} STD./MONAT`,
    perMonth: '/Monat',
    pricingNote: (sprint: string, total: string) => `+ ${sprint} Sprint einmalig · erste 3 Monate gesamt: ${total}`,
    footnote: 'Zzgl. Mediabudget. Alle Beträge netto.',
    s11: 'Nächster Schritt', nextIntro: 'Für den Start brauchen wir:',
    discuss: 'Wenn du vorher noch etwas durchsprechen willst — melde dich einfach.',
    acceptBtn: 'Angebot annehmen', acceptHint: 'Damit bestätigst du dein Einverständnis. Wir melden uns für das Kickoff.',
    acceptedMsg: 'Du hast das Angebot angenommen. Wir freuen uns auf die Zusammenarbeit.',
    glossary: 'Glossar',
    footerMeta: (code: string, until: string) => `ANGEBOT ${code} · VERTRAULICH · GÜLTIG BIS ${until}`,
  },
} as const

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function fmtPrice(n: number) {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)
}


// ─── Block renderer ───────────────────────────────────────────────────────────

function Block({ block: b, num }: { block: Block; num: string }) {
  const head = 'title' in b && b.title
    ? <h2 className={s.sh}>{num && <span className={s.n}>{num}</span>}{b.title}</h2>
    : null

  if (b.type === 'note') {
    return (
      <div className={s.hint}>
        {b.label && <span className={s.hintLabel}>{b.label}</span>}
        <p>{b.text}</p>
      </div>
    )
  }

  return (
    <section className={s.sec}>
      {head}

      {b.type === 'text' && b.paragraphs.map((t, i) => <p key={i} className={s.p}>{t}</p>)}

      {b.type === 'statement' && <div className={s.coreMsg}>{b.text}</div>}

      {b.type === 'list' && (
        <>
          {b.intro && <p className={s.p}>{b.intro}</p>}
          {b.ordered
            ? <ol className={s.ol}>{b.items.map((t, i) => <li key={i}>{t}</li>)}</ol>
            : <ul className={s.ul}>{b.items.map((t, i) => <li key={i}>{t}</li>)}</ul>}
        </>
      )}

      {b.type === 'packages' && (
        <>
          {b.intro && <p className={s.p}>{b.intro}</p>}
          {b.items.map((pkg, i) => (
            <article key={i} className={s.pkg}>
              <header className={s.pkgHead}>
                <div>
                  <h3 className={s.pkgName}>{pkg.name}</h3>
                  {pkg.meta && <p className={s.pkgMeta}>{pkg.meta}</p>}
                </div>
                {pkg.price && (
                  <div className={s.pkgPriceBox}>
                    <span className={s.pkgPrice}>{pkg.price}</span>
                    {pkg.price_note && <span className={s.pkgPriceNote}>{pkg.price_note}</span>}
                  </div>
                )}
              </header>
              {pkg.includes && pkg.includes.length > 0 && (
                <ul className={s.ul}>{pkg.includes.map((t, j) => <li key={j}>{t}</li>)}</ul>
              )}
              {pkg.note && <p className={s.pkgNote}>{pkg.note}</p>}
            </article>
          ))}
        </>
      )}

      {b.type === 'table' && (
        <>
          {b.intro && <p className={s.p}>{b.intro}</p>}
          <table className={s.tbl}>
            <thead><tr>{b.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
            <tbody>
              {b.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j}>{j === 0 ? <strong>{cell}</strong> : cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          {b.note && <p className={s.p} style={{ marginTop: '1rem' }}>{b.note}</p>}
        </>
      )}

      {b.type === 'summary' && (
        <>
          {b.intro && <p className={s.p}>{b.intro}</p>}
          <div className={s.pricingGrid}>
            {b.rows.map((row, i) => (
              <div key={i} className={s.pricingBox}>
                <div className={s.pricingLabel}>{row.label}</div>
                <div className={s.pricingAmount}>{row.value}</div>
                {row.note && <div className={s.pricingNote}>{row.note}</div>}
              </div>
            ))}
          </div>
          {b.footnote && <p className={s.footnote}>{b.footnote}</p>}
        </>
      )}
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

type State = 'loading' | 'not_found' | 'error' | 'ok'

export default function ProposalPage() {
  const pathname = usePathname()
  const [offer, setOffer] = useState<Offer | null>(null)
  const [pageState, setPageState] = useState<State>('loading')
  const [accepted, setAccepted] = useState(false)

  const code = pathname.split('/').filter(Boolean).at(-1) ?? null

  useEffect(() => {
    if (!code || code === 'proposal') { setPageState('not_found'); return }

    const token = new URLSearchParams(window.location.search).get('t') ?? ''
    fetch(`https://admin.pmax.online/api/proposals/${code}?t=${encodeURIComponent(token)}`)
      .then(r => {
        if (r.status === 404) { setPageState('not_found'); return null }
        if (!r.ok) { setPageState('error'); return null }
        return r.json() as Promise<Offer>
      })
      .then(data => {
        if (!data) return
        setOffer(data)
        setPageState('ok')
        fetch(`https://admin.pmax.online/api/proposals/${code}/viewed`, { method: 'POST' }).catch(() => {})
      })
      .catch(() => setPageState('error'))
  }, [code])

  // Browsers name a print-to-PDF file after document.title, so the download
  // reads "KVA165 — rasten projects — Angebot" instead of "pmax".
  useEffect(() => {
    if (!offer) return
    const label = offer.lang === 'de' ? 'Angebot' : 'Proposal'
    const parts = [offer.code, offer.client_name, label].filter(Boolean)
    const previous = document.title
    document.title = parts.join(' — ')
    return () => { document.title = previous }
  }, [offer])

  async function handleAccept() {
    if (!code) return
    try {
      await fetch(`https://admin.pmax.online/api/proposals/${code}/accept`, { method: 'POST' })
      setAccepted(true)
    } catch { /* handled gracefully */ }
  }

  if (pageState === 'loading') return <div className={s.state}><span>Angebot wird geladen…</span></div>
  if (pageState === 'not_found') return <div className={s.state}><span>Dieses Angebot wurde nicht gefunden.</span></div>
  if (pageState === 'error') return <div className={s.state}><span>Fehler beim Laden. Bitte kontaktiere uns unter hello@pmax.online.</span></div>
  if (!offer) return null

  const L = LABELS[offer.lang === 'de' ? 'de' : 'en']
  const blocks = offer.blocks ?? []
  // Numbered section headings, counted across the blocks that carry a title.
  let n = 0
  const sectionNumbers = blocks.map(b => ('title' in b && b.title ? String(++n).padStart(2, '0') : ''))
  const hasBlocks = blocks.length > 0
  // Offers without blocks always carry the full legacy content.
  const lo = offer as Required<Offer>
  const isExpired = new Date(offer.valid_until) < new Date()
  const isAccepted = offer.status === 'accepted' || accepted
  const isDraft = offer.status === 'draft'
  const canAccept = !isAccepted && !isExpired && !isDraft

  const sprintTotal3m = hasBlocks
    ? []
    : lo.retainer_variants.map(v => ({ ...v, total: v.price * 3 + lo.sprint_price }))

  return (
    <div className={s.page}>

      {/* ── Actions bar (screen only) ── */}
      <div className={s.actions}>
        <div className={s.actionsInner}>
          <button className={s.btn} onClick={() => window.print()}>{L.savePdf}</button>
          {canAccept && (
            <button className={`${s.btn} ${s.btnPrimary}`} onClick={handleAccept}>
              {L.acceptBar}
            </button>
          )}
          {isAccepted && <span className={s.pill} data-type="accepted">{L.accepted}</span>}
          {isExpired && !isAccepted && <span className={s.pill} data-type="expired">{L.expiredOn} {fmtDate(offer.valid_until)}</span>}
          {isDraft && <span className={s.pill} data-type="draft">{L.draft}</span>}
        </div>
      </div>

      <div className={s.doc}>

        {/* ── Header ── */}
        <header className={s.header}>
          <div className={s.headerMeta}>
            <div className={s.logo}>
              <span>pmax</span><span className={s.logoDot} aria-hidden="true" />
            </div>
            <h1 className={s.docTitle}>{offer.title}</h1>
          </div>
          <address className={s.headerAddr}>
            <strong>PMAX ONLINE SL</strong>
            <span>Calle Cordova 5 · 07184 Calvià</span>
            <span>hello@pmax.online</span>
            <span>+34 871 242 160</span>
            <span>pmax.online</span>
          </address>
        </header>

        <table className={s.metaTable}>
          <tbody>
            <tr><td className={s.metaKey}>{L.metaCode}</td><td style={{ fontFamily: 'var(--font-mono, monospace)' }}>{offer.code}</td></tr>
            <tr>
              <td className={s.metaKey}>{L.metaFor}</td>
              <td>
                {offer.client_name}
                {offer.client_address && offer.client_address.split('\n').filter(Boolean).map((line, i) => (
                  <span key={i} className={s.metaAddrLine}>{line}</span>
                ))}
                {(offer.client_website || offer.client_email || offer.client_phone) && (
                  <span className={s.metaAddrLine}>
                    {[offer.client_website, offer.client_email, offer.client_phone].filter(Boolean).join(' · ')}
                  </span>
                )}
              </td>
            </tr>
            <tr><td className={s.metaKey}>{L.metaFrom}</td><td>PMAX Online SL, Palmanova</td></tr>
            <tr><td className={s.metaKey}>{L.metaDate}</td><td>{fmtDate(offer.date)}</td></tr>
            <tr><td className={s.metaKey}>{L.metaValid}</td><td>{fmtDate(offer.valid_until)}</td></tr>
            <tr><td className={s.metaKey}>{L.metaContact}</td><td>{offer.contact_person}</td></tr>
          </tbody>
        </table>

        <hr className={s.rule} />

        {/* ── Composed blocks ── */}
        {hasBlocks && blocks.map((b, i) => (
          <Block key={i} block={b} num={sectionNumbers[i]} />
        ))}

        {!hasBlocks && (<>
        {/* ── 01 Opening ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>01</span>{L.s01}</h2>
          <p className={s.p}>{lo.intro}</p>
        </section>

        {/* ── 02 Situation ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>02</span>{L.s02}</h2>
          <p className={s.p}><strong>{L.strengths}</strong> {lo.situation_strengths}</p>
          <p className={s.label}>{L.gaps}</p>
          <ol className={s.ol}>
            {lo.situation_gaps.map((g, i) => <li key={i}>{g}</li>)}
          </ol>
        </section>

        {/* ── 03 Positioning ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>03</span>{L.s03}</h2>
          <p className={s.p}>{L.posIntro}</p>
          <p className={s.subLabel}>{L.coreMessage}</p>
          <div className={s.coreMsg}>{lo.positioning_core}</div>
          <p className={s.subLabel}>{L.threePillars}</p>
          <table className={s.tbl}>
            <thead><tr><th>{L.thPillar}</th><th>{L.thBehind}</th><th>{L.thMessage}</th></tr></thead>
            <tbody>
              {lo.positioning_pillars.map((p, i) => (
                <tr key={i}>
                  <td><strong>{p.pillar}</strong></td>
                  <td>{p.what}</td>
                  <td>"{p.message}"</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={s.subLabel}>{L.keyPoint}</p>
          <p className={s.p}>{lo.positioning_strategy}</p>
          {lo.positioning_note && (
            <div className={s.hint}>
              <span className={s.hintLabel}>{L.note}</span>
              <p>{lo.positioning_note}</p>
            </div>
          )}
        </section>

        {/* ── 04 Channels ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>04</span>{L.s04}</h2>
          <table className={s.tbl}>
            <thead><tr><th>{L.thChannel}</th><th>{L.thDelivers}</th><th>{L.thSoon}</th></tr></thead>
            <tbody>
              {lo.channels.map((c, i) => (
                <tr key={i}>
                  <td><strong>{c.name}{c.optional ? ' (optional)' : ''}</strong></td>
                  <td>{c.benefit}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{c.timeframe}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {lo.channels_glossary && lo.channels_glossary.length > 0 && (
            <>
              <p className={s.subLabel} style={{ marginTop: '1.5rem' }}>{L.inBrief}</p>
              <ul className={s.ul}>
                {lo.channels_glossary.map((g, i) => <li key={i}><strong>{g.term}:</strong> {g.short}</li>)}
              </ul>
            </>
          )}
        </section>

        {/* ── 05 Retainer ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>05</span>{L.s05}</h2>
          <p className={s.p}>{L.retainerIntro}</p>

          <p className={s.subLabel}>{lo.sprint_hours ? L.sprintTitleHours(lo.sprint_hours, fmtPrice(lo.sprint_price)) : L.sprintTitle(lo.sprint_days, fmtPrice(lo.sprint_price))}</p>
          <p className={s.p}>{L.sprintIntro}</p>
          <ul className={s.ul}>
            {lo.sprint_includes.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          {lo.sprint_flex_note && (
            <div className={s.hint}>
              <span className={s.hintLabel}>{L.flexStart}</span>
              <p>{lo.sprint_flex_note}</p>
            </div>
          )}

          <p className={s.subLabel} style={{ marginTop: '1.75rem' }}>{L.retainerOptions(lo.retainer_variants.length)}</p>
          <p className={s.label}>{L.alwaysIncluded}</p>
          <ul className={s.ul}>
            {lo.retainer_fixed.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p className={s.label}>{L.variableLabel}</p>
          <ul className={s.ul}>
            {lo.retainer_variable.map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <table className={s.tbl} style={{ marginTop: '1.5rem' }}>
            <thead>
              <tr>
                <th></th>
                {lo.retainer_variants.map(v => <th key={v.label}>{v.label} — {v.hours ? `${v.hours} ${L.hoursMonth}` : `${v.days} ${L.daysMonth}`}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{L.time}</strong></td>
                {lo.retainer_variants.map(v => <td key={v.label}>{L.hours(v.hours ?? v.days * 8)}</td>)}
              </tr>
              <tr>
                <td><strong>{L.fee}</strong></td>
                {lo.retainer_variants.map(v => <td key={v.label}><strong>{L.perMonthNet(fmtPrice(v.price))}</strong></td>)}
              </tr>
              <tr>
                <td><strong>{L.focus}</strong></td>
                {lo.retainer_variants.map(v => <td key={v.label}>{v.focus}</td>)}
              </tr>
              <tr>
                <td><strong>{L.bestWhen}</strong></td>
                {lo.retainer_variants.map(v => <td key={v.label}>{v.fits_when}</td>)}
              </tr>
            </tbody>
          </table>
          <p className={s.p} style={{ marginTop: '1rem' }}>{lo.retainer_note}</p>
        </section>

        {/* ── 06 How to choose ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>06</span>{L.s06}</h2>
          <p className={s.p}>{lo.decision_text}</p>
        </section>

        {/* ── 07 Timeline ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>07</span>{L.s07}</h2>
          <table className={s.tbl}>
            <thead><tr><th>{L.thPeriod}</th><th>{L.thHappens}</th></tr></thead>
            <tbody>
              {lo.timeline.map((row, i) => (
                <tr key={i}>
                  <td style={{ whiteSpace: 'nowrap' }}><strong>{row.period}</strong></td>
                  <td>{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ── 08 What we measure ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>08</span>{L.s08}</h2>
          <p className={s.label}>{L.kpis}</p>
          <ul className={s.ul}>
            {lo.kpis.map((kpi, i) => <li key={i}>{kpi}</li>)}
          </ul>
          <p className={s.label}>{L.expectations}</p>
          <ul className={s.ul}>
            {lo.expectations.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </section>

        {/* ── 09 External costs ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>09</span>{L.s09}</h2>
          <p className={s.p}>{lo.external_costs_note}</p>
          <table className={s.tbl}>
            <thead><tr><th>{L.thItem}</th><th>{L.thRecommendation}</th></tr></thead>
            <tbody>
              {lo.external_costs.map((row, i) => (
                <tr key={i}>
                  <td><strong>{row.item}</strong></td>
                  <td>{row.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={s.p} style={{ marginTop: '1rem' }}>{L.accountsNote}</p>
        </section>

        {/* ── 10 Terms ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>10</span>{L.s10}</h2>
          <ul className={s.ul}>
            {lo.conditions.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
          <p className={s.subLabel} style={{ marginTop: '2rem' }}>{L.overview}</p>
          <div className={s.pricingGrid}>
            {sprintTotal3m.map(v => (
              <div key={v.label} className={s.pricingBox}>
                <div className={s.pricingLabel}>{v.hours ? L.pricingLabelHours(v.label, v.hours) : L.pricingLabel(v.label, v.days)}</div>
                <div className={s.pricingAmount}>{fmtPrice(v.price)} <span>{L.perMonth}</span></div>
                <div className={s.pricingNote}>{L.pricingNote(fmtPrice(lo.sprint_price), fmtPrice(v.total))}</div>
              </div>
            ))}
          </div>
          <p className={s.footnote}>{L.footnote}</p>
        </section>

        {/* ── 11 Next step ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>11</span>{L.s11}</h2>
          <p className={s.p}>{L.nextIntro}</p>
          <ol className={s.ol}>
            {lo.next_steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
          <p className={s.p}>{L.discuss}</p>
        </section>

        </>)}

        {/* ── Accept CTA (screen only) ── */}
        {canAccept && (
          <div className={`${s.acceptBox} ${s.noPrint}`}>
            <button className={s.acceptBtn} onClick={handleAccept}>{L.acceptBtn}</button>
            <p>{L.acceptHint}</p>
          </div>
        )}
        {isAccepted && (
          <div className={`${s.acceptedBox} ${s.noPrint}`}>
            <span>✓</span>
            <p>{L.acceptedMsg}</p>
          </div>
        )}

        {/* ── Signature ── */}
        <div className={s.sig}>
          <p><strong>{offer.contact_person}</strong></p>
          <p>PMAX ONLINE SL · PALMANOVA · MALLORCA<br />hello@pmax.online · +34 871 242 160</p>
        </div>

        {/* ── Glossary ── */}
        {offer.glossary && offer.glossary.length > 0 && (
          <section className={s.glossary}>
            <p className={s.label}>{L.glossary}</p>
            <table className={s.glossaryTbl}>
              <tbody>
                {offer.glossary.map((g, i) => (
                  <tr key={i}>
                    <td><strong>{g.term}</strong></td>
                    <td>{g.definition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* ── Footer ── */}
        <footer className={s.footer}>
          PMAX ONLINE SL · CALLE CORDOVA 5 · 07184 CALVIÀ · MALLORCA · CIF ES B57948123 · PMAX.ONLINE
          {' — '}{L.footerMeta(offer.code, fmtDate(offer.valid_until))}
        </footer>

      </div>
    </div>
  )
}
