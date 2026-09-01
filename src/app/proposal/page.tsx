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

    fetch(`https://admin.pmax.online/api/proposals/${code}`)
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
          <button className={s.btn} onClick={() => window.print()}>PDF speichern</button>
          {canAccept && (
            <button className={`${s.btn} ${s.btnPrimary}`} onClick={handleAccept}>
              Angebot annehmen
            </button>
          )}
          {isAccepted && <span className={s.pill} data-type="accepted">✓ Angenommen</span>}
          {isExpired && !isAccepted && <span className={s.pill} data-type="expired">Abgelaufen am {fmtDate(offer.valid_until)}</span>}
          {isDraft && <span className={s.pill} data-type="draft">Entwurf</span>}
        </div>
      </div>

      <div className={s.doc}>

        {/* ── Header ── */}
        <header className={s.header}>
          <div className={s.headerMeta}>
            <div className={s.logo}>
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <rect x="0" y="0" width="42" height="100" rx="8" fill="#3cffd0"/>
                <rect x="58" y="0" width="42" height="62" rx="8" fill="#3cffd0"/>
              </svg>
              <span>pmax</span>
            </div>
            <p className={s.badge}>ANGEBOT · VERTRAULICH</p>
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
              <td className={s.metaKey}>FÜR</td>
              <td>
                {offer.client_name}
                {offer.client_website && <> · {offer.client_website}</>}
                {offer.client_email && <> · {offer.client_email}</>}
                {offer.client_phone && <> · {offer.client_phone}</>}
              </td>
            </tr>
            <tr><td className={s.metaKey}>VON</td><td>PMAX Online SL, Palmanova</td></tr>
            <tr><td className={s.metaKey}>DATUM</td><td>{fmtDate(offer.date)}</td></tr>
            <tr><td className={s.metaKey}>GÜLTIG BIS</td><td>{fmtDate(offer.valid_until)}</td></tr>
            <tr><td className={s.metaKey}>KONTAKT</td><td>{offer.contact_person}</td></tr>
          </tbody>
        </table>

        <hr className={s.rule} />

        {/* ── 01 Kurz vorab ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>01</span>Kurz vorab</h2>
          <p className={s.p}>{offer.intro}</p>
        </section>

        {/* ── 02 Ausgangslage ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>02</span>Ausgangslage</h2>
          <p className={s.p}><strong>Was gut ist:</strong> {offer.situation_strengths}</p>
          <p className={s.label}>Was fehlt:</p>
          <ol className={s.ol}>
            {offer.situation_gaps.map((g, i) => <li key={i}>{g}</li>)}
          </ol>
        </section>

        {/* ── 03 Positionierung ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>03</span>Deine Positionierung — kurz festgehalten</h2>
          <p className={s.p}>Wir entwickeln nichts Neues. Wir schreiben auf, was schon da ist, damit alle Texte, Anzeigen und Inhalte in dieselbe Richtung laufen.</p>
          <p className={s.subLabel}>Kernaussage</p>
          <div className={s.coreMsg}>{offer.positioning_core}</div>
          <p className={s.subLabel}>Drei Belegsäulen</p>
          <table className={s.tbl}>
            <thead><tr><th>SÄULE</th><th>WAS DAHINTER STECKT</th><th>MÖGLICHE BOTSCHAFT</th></tr></thead>
            <tbody>
              {offer.positioning_pillars.map((p, i) => (
                <tr key={i}>
                  <td><strong>{p.pillar}</strong></td>
                  <td>{p.what}</td>
                  <td>„{p.message}"</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={s.subLabel}>Der wichtigste strategische Punkt</p>
          <p className={s.p}>{offer.positioning_strategy}</p>
          {offer.positioning_note && (
            <div className={s.hint}>
              <span className={s.hintLabel}>HINWEIS</span>
              <p>{offer.positioning_note}</p>
            </div>
          )}
        </section>

        {/* ── 04 Kanäle ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>04</span>Die Kanäle und warum</h2>
          <table className={s.tbl}>
            <thead><tr><th>KANAL</th><th>WAS ES BRINGT</th><th>WIE SCHNELL</th></tr></thead>
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
              <p className={s.subLabel} style={{ marginTop: '1.5rem' }}>Kurz erklärt:</p>
              <ul className={s.ul}>
                {offer.channels_glossary.map((g, i) => <li key={i}><strong>{g.term}:</strong> {g.short}</li>)}
              </ul>
            </>
          )}
        </section>

        {/* ── 05 Retainer ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>05</span>Der monatliche Retainer</h2>
          <p className={s.p}>Ein Retainer ist ein festes monatliches Zeitkontingent. Der Vorteil gegenüber Einzelprojekten: Wir setzen die Zeit dort ein, wo sie im jeweiligen Monat den größten Effekt hat. Ohne Nachverhandlung.</p>

          <p className={s.subLabel}>Start-Sprint (einmalig, {offer.sprint_days} Tage — {fmtPrice(offer.sprint_price)} netto)</p>
          <p className={s.p}>Bevor laufende Arbeit sinnvoll ist, muss die Basis stehen:</p>
          <ul className={s.ul}>
            {offer.sprint_includes.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          {offer.sprint_flex_note && (
            <div className={s.hint}>
              <span className={s.hintLabel}>FLEXIBLER EINSTIEG</span>
              <p>{offer.sprint_flex_note}</p>
            </div>
          )}

          <p className={s.subLabel} style={{ marginTop: '1.75rem' }}>Laufender Retainer — {offer.retainer_variants.length} Varianten</p>
          <p className={s.label}>Immer fest enthalten:</p>
          <ul className={s.ul}>
            {offer.retainer_fixed.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p className={s.label}>Variabel, nach Wirkung eingesetzt:</p>
          <ul className={s.ul}>
            {offer.retainer_variable.map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <table className={s.tbl} style={{ marginTop: '1.5rem' }}>
            <thead>
              <tr>
                <th></th>
                {offer.retainer_variants.map(v => <th key={v.label}>{v.label} — {v.days} TAGE/MONAT</th>)}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Zeit</strong></td>
                {offer.retainer_variants.map(v => <td key={v.label}>ca. {v.days * 8} Stunden</td>)}
              </tr>
              <tr>
                <td><strong>Honorar</strong></td>
                {offer.retainer_variants.map(v => <td key={v.label}><strong>{fmtPrice(v.price)} netto / Monat</strong></td>)}
              </tr>
              <tr>
                <td><strong>Schwerpunkt</strong></td>
                {offer.retainer_variants.map(v => <td key={v.label}>{v.focus}</td>)}
              </tr>
              <tr>
                <td><strong>Passt, wenn</strong></td>
                {offer.retainer_variants.map(v => <td key={v.label}>{v.fits_when}</td>)}
              </tr>
            </tbody>
          </table>
          <p className={s.p} style={{ marginTop: '1rem' }}>{offer.retainer_note}</p>
        </section>

        {/* ── 06 Wie du wählst ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>06</span>Wie du wählst</h2>
          <p className={s.p}>{offer.decision_text}</p>
        </section>

        {/* ── 07 Zeitplan ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>07</span>Zeitplan (Empfehlung, ab Freigabe)</h2>
          <table className={s.tbl}>
            <thead><tr><th>ZEITRAUM</th><th>WAS PASSIERT</th></tr></thead>
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

        {/* ── 08 Was wir messen ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>08</span>Was wir messen — und was realistisch ist</h2>
          <p className={s.label}>Kennzahlen:</p>
          <ul className={s.ul}>
            {offer.kpis.map((kpi, i) => <li key={i}>{kpi}</li>)}
          </ul>
          <p className={s.label}>Realistische Erwartung — wichtig:</p>
          <ul className={s.ul}>
            {offer.expectations.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </section>

        {/* ── 09 Kosten außerhalb ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>09</span>Kosten außerhalb des Honorars</h2>
          <p className={s.p}>{offer.external_costs_note}</p>
          <table className={s.tbl}>
            <thead><tr><th>POSTEN</th><th>EMPFEHLUNG START</th></tr></thead>
            <tbody>
              {offer.external_costs.map((row, i) => (
                <tr key={i}>
                  <td><strong>{row.item}</strong></td>
                  <td>{row.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={s.p} style={{ marginTop: '1rem' }}>Alle Werbekonten laufen auf deinen Namen. Du behältst jederzeit vollen Zugriff und Eigentum — auch wenn wir irgendwann nicht mehr zusammenarbeiten.</p>
        </section>

        {/* ── 10 Konditionen ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>10</span>Konditionen</h2>
          <ul className={s.ul}>
            {offer.conditions.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
          <p className={s.subLabel} style={{ marginTop: '2rem' }}>Übersicht</p>
          <div className={s.pricingGrid}>
            {sprintTotal3m.map(v => (
              <div key={v.label} className={s.pricingBox}>
                <div className={s.pricingLabel}>{v.label} · SPRINT + {v.days} TAGE/MONAT</div>
                <div className={s.pricingAmount}>{fmtPrice(v.price)} <span>/Monat</span></div>
                <div className={s.pricingNote}>+ {fmtPrice(offer.sprint_price)} Sprint einmalig · erste 3 Monate gesamt: {fmtPrice(v.total)}</div>
              </div>
            ))}
          </div>
          <p className={s.footnote}>Zzgl. Mediabudget. Alle Beträge netto.</p>
        </section>

        {/* ── 11 Nächster Schritt ── */}
        <section className={s.sec}>
          <h2 className={s.sh}><span className={s.n}>11</span>Nächster Schritt</h2>
          <p className={s.p}>Sag mir, welche Variante für dich passt. Danach brauchen wir für den Start:</p>
          <ol className={s.ol}>
            {offer.next_steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
          <p className={s.p}>Wenn du vorher noch etwas durchsprechen willst — melde dich einfach.</p>
        </section>

        {/* ── Accept CTA (screen only) ── */}
        {canAccept && (
          <div className={`${s.acceptBox} ${s.noPrint}`}>
            <button className={s.acceptBtn} onClick={handleAccept}>Angebot annehmen</button>
            <p>Damit bestätigst du dein Einverständnis. Wir melden uns für das Kickoff.</p>
          </div>
        )}
        {isAccepted && (
          <div className={`${s.acceptedBox} ${s.noPrint}`}>
            <span>✓</span>
            <p>Du hast das Angebot angenommen. Wir freuen uns auf die Zusammenarbeit.</p>
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
            <p className={s.label}>Glossar</p>
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
          {' — '}ANGEBOT {offer.code} · VERTRAULICH · GÜLTIG BIS {fmtDate(offer.valid_until)}
        </footer>

      </div>
    </div>
  )
}
