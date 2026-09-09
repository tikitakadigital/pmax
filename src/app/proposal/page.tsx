'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import s from './proposal.module.css'

// ─── Types ────────────────────────────────────────────────────────────────────

type OfferStatus = 'draft' | 'sent' | 'accepted' | 'expired'

export interface Offer {
  code: string
  status: OfferStatus
  date: string
  valid_until: string

  client_name: string
  client_website?: string
  client_email: string
  client_phone?: string
  contact_person: string

  title: string
  intro: string

  situation_strengths: string
  situation_gaps: string[]

  positioning_core: string
  positioning_pillars: { pillar: string; what: string; message: string }[]
  positioning_strategy: string
  positioning_note?: string

  channels: { name: string; benefit: string; timeframe: string; optional?: boolean }[]
  channels_glossary?: { term: string; short: string }[]

  sprint_price: number
  sprint_days: number
  sprint_includes: string[]
  sprint_flex_note?: string

  retainer_fixed: string[]
  retainer_variable: string[]
  retainer_variants: {
    label: string
    days: number
    price: number
    focus: string
    fits_when: string
  }[]
  retainer_note: string

  decision_text: string

  timeline: { period: string; description: string }[]

  kpis: string[]
  expectations: string[]

  external_costs: { item: string; recommendation: string }[]
  external_costs_note: string

  conditions: string[]

  next_steps: string[]

  glossary?: { term: string; definition: string }[]
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function fmtPrice(n: number) {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)
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

  const isExpired = new Date(offer.valid_until) < new Date()
  const isAccepted = offer.status === 'accepted' || accepted
  const isDraft = offer.status === 'draft'
  const canAccept = !isAccepted && !isExpired && !isDraft

  const sprintTotal3m = offer.retainer_variants.map(v => ({
    ...v,
    total: v.price * 3 + offer.sprint_price,
  }))

  return (
    <div className={s.page}>

      {/* ── Actions bar (screen only) ── */}
      <div className={s.actions}>
        <div className={s.actionsInner}>
          <button className={s.btn} onClick={() => window.print()}>Save as PDF</button>
          {canAccept && (
            <button className={`${s.btn} ${s.btnPrimary}`} onClick={handleAccept}>
              Accept proposal
            </button>
          )}
          {isAccepted && <span className={s.pill} data-type="accepted">✓ Accepted</span>}
          {isExpired && !isAccepted && <span className={s.pill} data-type="expired">Expired on {fmtDate(offer.valid_until)}</span>}
          {isDraft && <span className={s.pill} data-type="draft">Draft</span>}
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
            <tr>
              <td className={s.metaKey}>FOR</td>
              <td>
                {offer.client_name}
                {offer.client_website && <> · {offer.client_website}</>}
                {offer.client_email && <> · {offer.client_email}</>}
                {offer.client_phone && <> · {offer.client_phone}</>}
              </td>
            </tr>
            <tr><td className={s.metaKey}>FROM</td><td>PMAX Online SL, Palmanova</td></tr>
            <tr><td className={s.metaKey}>DATE</td><td>{fmtDate(offer.date)}</td></tr>
            <tr><td className={s.metaKey}>VALID UNTIL</td><td>{fmtDate(offer.valid_until)}</td></tr>
            <tr><td className={s.metaKey}>CONTACT</td><td>{offer.contact_person}</td></tr>
          </tbody>
        </table>

        <hr className={s.rule} />

        {/* ── 01 Opening ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>01</span>Opening</h2>
          <p className={s.p}>{offer.intro}</p>
        </section>

        {/* ── 02 Situation ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>02</span>Situation</h2>
          <p className={s.p}><strong>Strengths:</strong> {offer.situation_strengths}</p>
          <p className={s.label}>Gaps:</p>
          <ol className={s.ol}>
            {offer.situation_gaps.map((g, i) => <li key={i}>{g}</li>)}
          </ol>
        </section>

        {/* ── 03 Positioning ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>03</span>Your Positioning — a brief note</h2>
          <p className={s.p}>We are not inventing anything new. We are writing down what is already there, so that all content, ads and copy pull in the same direction.</p>
          <p className={s.subLabel}>Core message</p>
          <div className={s.coreMsg}>{offer.positioning_core}</div>
          <p className={s.subLabel}>Three pillars</p>
          <table className={s.tbl}>
            <thead><tr><th>PILLAR</th><th>WHAT IS BEHIND IT</th><th>MESSAGE</th></tr></thead>
            <tbody>
              {offer.positioning_pillars.map((p, i) => (
                <tr key={i}>
                  <td><strong>{p.pillar}</strong></td>
                  <td>{p.what}</td>
                  <td>"{p.message}"</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={s.subLabel}>The key strategic point</p>
          <p className={s.p}>{offer.positioning_strategy}</p>
          {offer.positioning_note && (
            <div className={s.hint}>
              <span className={s.hintLabel}>NOTE</span>
              <p>{offer.positioning_note}</p>
            </div>
          )}
        </section>

        {/* ── 04 Channels ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>04</span>The Channels and Why</h2>
          <table className={s.tbl}>
            <thead><tr><th>CHANNEL</th><th>WHAT IT DELIVERS</th><th>HOW SOON</th></tr></thead>
            <tbody>
              {offer.channels.map((c, i) => (
                <tr key={i}>
                  <td><strong>{c.name}{c.optional ? ' (optional)' : ''}</strong></td>
                  <td>{c.benefit}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{c.timeframe}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {offer.channels_glossary && offer.channels_glossary.length > 0 && (
            <>
              <p className={s.subLabel} style={{ marginTop: '1.5rem' }}>In brief:</p>
              <ul className={s.ul}>
                {offer.channels_glossary.map((g, i) => <li key={i}><strong>{g.term}:</strong> {g.short}</li>)}
              </ul>
            </>
          )}
        </section>

        {/* ── 05 Retainer ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>05</span>The Monthly Retainer</h2>
          <p className={s.p}>A retainer is a fixed monthly time budget. The advantage over project-by-project work: we allocate the time where it has the most impact that month. No renegotiation.</p>

          <p className={s.subLabel}>Launch Sprint (one-off, {offer.sprint_days} days — {fmtPrice(offer.sprint_price)} net)</p>
          <p className={s.p}>Before ongoing work makes sense, the foundation has to be in place:</p>
          <ul className={s.ul}>
            {offer.sprint_includes.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          {offer.sprint_flex_note && (
            <div className={s.hint}>
              <span className={s.hintLabel}>FLEXIBLE START</span>
              <p>{offer.sprint_flex_note}</p>
            </div>
          )}

          <p className={s.subLabel} style={{ marginTop: '1.75rem' }}>Monthly Retainer — {offer.retainer_variants.length} options</p>
          <p className={s.label}>Always included:</p>
          <ul className={s.ul}>
            {offer.retainer_fixed.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p className={s.label}>Variable, allocated by impact:</p>
          <ul className={s.ul}>
            {offer.retainer_variable.map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <table className={s.tbl} style={{ marginTop: '1.5rem' }}>
            <thead>
              <tr>
                <th></th>
                {offer.retainer_variants.map(v => <th key={v.label}>{v.label} — {v.days} DAYS/MONTH</th>)}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Time</strong></td>
                {offer.retainer_variants.map(v => <td key={v.label}>ca. {v.days * 8} hours</td>)}
              </tr>
              <tr>
                <td><strong>Fee</strong></td>
                {offer.retainer_variants.map(v => <td key={v.label}><strong>{fmtPrice(v.price)} net / month</strong></td>)}
              </tr>
              <tr>
                <td><strong>Focus</strong></td>
                {offer.retainer_variants.map(v => <td key={v.label}>{v.focus}</td>)}
              </tr>
              <tr>
                <td><strong>Best when</strong></td>
                {offer.retainer_variants.map(v => <td key={v.label}>{v.fits_when}</td>)}
              </tr>
            </tbody>
          </table>
          <p className={s.p} style={{ marginTop: '1rem' }}>{offer.retainer_note}</p>
        </section>

        {/* ── 06 How to choose ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>06</span>How to Choose</h2>
          <p className={s.p}>{offer.decision_text}</p>
        </section>

        {/* ── 07 Timeline ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>07</span>Timeline (recommendation, from approval)</h2>
          <table className={s.tbl}>
            <thead><tr><th>PERIOD</th><th>WHAT HAPPENS</th></tr></thead>
            <tbody>
              {offer.timeline.map((row, i) => (
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
          <h2 className={s.sh}><span className={s.n}>08</span>What We Measure — and what is realistic</h2>
          <p className={s.label}>KPIs:</p>
          <ul className={s.ul}>
            {offer.kpis.map((kpi, i) => <li key={i}>{kpi}</li>)}
          </ul>
          <p className={s.label}>Realistic expectations — important:</p>
          <ul className={s.ul}>
            {offer.expectations.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </section>

        {/* ── 09 External costs ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>09</span>External Costs</h2>
          <p className={s.p}>{offer.external_costs_note}</p>
          <table className={s.tbl}>
            <thead><tr><th>ITEM</th><th>RECOMMENDATION</th></tr></thead>
            <tbody>
              {offer.external_costs.map((row, i) => (
                <tr key={i}>
                  <td><strong>{row.item}</strong></td>
                  <td>{row.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={s.p} style={{ marginTop: '1rem' }}>All advertising accounts run in your name. You retain full access and ownership at all times — even if we stop working together.</p>
        </section>

        {/* ── 10 Terms ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>10</span>Terms</h2>
          <ul className={s.ul}>
            {offer.conditions.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
          <p className={s.subLabel} style={{ marginTop: '2rem' }}>Overview</p>
          <div className={s.pricingGrid}>
            {sprintTotal3m.map(v => (
              <div key={v.label} className={s.pricingBox}>
                <div className={s.pricingLabel}>{v.label} · SPRINT + {v.days} DAYS/MONTH</div>
                <div className={s.pricingAmount}>{fmtPrice(v.price)} <span>/month</span></div>
                <div className={s.pricingNote}>+ {fmtPrice(offer.sprint_price)} Sprint one-off · first 3 months total: {fmtPrice(v.total)}</div>
              </div>
            ))}
          </div>
          <p className={s.footnote}>Media budget not included. All amounts net.</p>
        </section>

        {/* ── 11 Next step ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>11</span>Next Step</h2>
          <p className={s.p}>To get started, we will need:</p>
          <ol className={s.ol}>
            {offer.next_steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
          <p className={s.p}>If you want to discuss anything before deciding — just reach out.</p>
        </section>

        {/* ── Accept CTA (screen only) ── */}
        {canAccept && (
          <div className={`${s.acceptBox} ${s.noPrint}`}>
            <button className={s.acceptBtn} onClick={handleAccept}>Accept Proposal</button>
            <p>By clicking you confirm your agreement. We will be in touch to arrange the kickoff.</p>
          </div>
        )}
        {isAccepted && (
          <div className={`${s.acceptedBox} ${s.noPrint}`}>
            <span>✓</span>
            <p>You have accepted the proposal. We look forward to working together.</p>
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
            <p className={s.label}>Glossary</p>
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
          {' — '}PROPOSAL {offer.code} · CONFIDENTIAL · VALID UNTIL {fmtDate(offer.valid_until)}
        </footer>

      </div>
    </div>
  )
}
