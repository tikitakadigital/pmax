import type { OfferContent } from './db'

export const DEFAULT_CONTENT: OfferContent = {
  intro: '',
  situation_strengths: '',
  situation_gaps: [],
  positioning_core: '',
  positioning_pillars: [
    { pillar: 'Ehrlichkeit', what: '', message: '' },
    { pillar: 'Concierge statt Makler', what: '', message: '' },
    { pillar: 'Rechtssicherheit', what: '', message: '' },
  ],
  positioning_strategy: '',
  positioning_note: 'Alle Botschaften sind Vorschläge und müssen für EN und ES nicht übersetzt, sondern neu formuliert werden. Ein deutscher Käufer, ein britischer Investor und ein spanischer Interessent kaufen aus unterschiedlichen Gründen.',
  channels: [
    { name: 'Google Ads (Suche)', benefit: 'Menschen, die aktiv suchen, jetzt. Der schnellste Weg zu Anfragen.', timeframe: '2–4 Wochen' },
    { name: 'Google Unternehmensprofil', benefit: 'Kostenlos, wirkt bei lokalen Suchen und in Google Maps.', timeframe: '2–6 Wochen' },
    { name: 'Website-Optimierung', benefit: 'Mehr Anfragen aus dem gleichen Traffic. Günstigster Hebel überhaupt.', timeframe: 'sofort' },
    { name: 'SEO', benefit: 'Suchmaschinenoptimierung. Unbezahlte Sichtbarkeit bei Google. Baut sich langsam auf.', timeframe: '3–6 Monate' },
    { name: 'AEO / GEO', benefit: 'Sichtbarkeit in KI-Antworten (ChatGPT, Perplexity, Google AI Overviews). Wächst gerade stark, Wettbewerb ist noch gering.', timeframe: '2–5 Monate' },
    { name: 'Content', benefit: 'Der Beweis für deine Positionierung. Liefert gleichzeitig SEO und AEO.', timeframe: 'laufend' },
    { name: 'Meta Ads', benefit: 'Facebook/Instagram. Gut für Retargeting und Bildsprache, schlechter für Kaufabsicht.', timeframe: 'später', optional: true },
  ],
  channels_glossary: [
    { term: 'SEO', short: 'Technik und Inhalte so aufbauen, dass Google die Seite versteht und weit oben zeigt.' },
    { term: 'AEO', short: 'Inhalte so strukturieren, dass sie als direkte Antwort ausgespielt werden — im Google-Antwortkasten oder in einem Chatbot.' },
    { term: 'GEO', short: 'Dasselbe Ziel für generative KI-Systeme. In der Praxis überschneiden sich AEO und GEO stark; wir behandeln sie als einen Arbeitsbereich.' },
    { term: 'Tracking', short: 'Messung, welche Anfrage über welchen Kanal kam. Grundlage für jede Budgetentscheidung.' },
    { term: 'Retargeting', short: 'Werbung gezielt an Menschen, die schon einmal auf deiner Website waren.' },
  ],
  sprint_price: 1200,
  sprint_days: 2,
  sprint_includes: [
    'Google Ads Konto, GA4 (Google Analytics 4) und Conversion-Tracking einrichten',
    'Consent Mode v2 prüfen (rechtlich erforderliche Einwilligungssteuerung für Tracking in der EU)',
    'Google Unternehmensprofil anlegen und optimieren',
    'Keyword-Recherche und Kampagnenstruktur',
    'Conversion-Check der Website: Kontaktwege, WhatsApp, Formular, Handynutzung',
    'Priorisierter Maßnahmenplan für die ersten 90 Tage',
  ],
  sprint_flex_note: 'Wenn dir das zu viel auf einmal ist: Wir können den Sprint auch auf die ersten beiden Retainer-Monate verteilen. Dann startet Google Ads etwa drei Wochen später, die Anfangsinvestition ist aber niedriger.',
  retainer_fixed: [
    'Google Ads Management: Kampagnen, Suchbegriffe, Anzeigentexte, Ausschlusslisten, Gebote',
    'Monitoring der Zahlen',
    'Monatsreport auf einer Seite plus 30 Minuten Call',
  ],
  retainer_variable: [
    'SEO: Technik, Seitentexte, interne Verlinkung',
    'AEO/GEO: FAQ-Ausbau, strukturierte Daten, Prüfung der Sichtbarkeit in KI-Antworten',
    'Website-Updates und Landingpages',
    'Content-Produktion (Texte, Ratgeberinhalte, Objektbeschreibungen)',
    'Meta Ads Aufbau, sobald sinnvoll',
  ],
  retainer_variants: [
    {
      label: 'B1',
      days: 2,
      price: 1200,
      focus: 'Google Ads, Reporting, laufende Website- und SEO-Verbesserungen in kleinen Schritten',
      fits_when: 'du mit überschaubarem Budget starten und Schritt für Schritt aufbauen willst',
    },
    {
      label: 'B2',
      days: 4,
      price: 2400,
      focus: 'zusätzlich Content-Produktion, AEO/GEO-Ausbau und größere Website-Themen',
      fits_when: 'du schneller auch unbezahlte Sichtbarkeit aufbauen willst',
    },
  ],
  retainer_note: 'Der Unterschied zu B2 ist vor allem Tempo: Mit vier Tagen bauen wir Inhalte und Sichtbarkeit schneller auf, mit zwei Tagen dauert derselbe Weg länger. Aus unserer Sicht spricht nichts dagegen, mit B1 zu starten und später zu erhöhen. Ein Wechsel ist jederzeit zum Folgemonat möglich.',
  decision_text: 'Beide Retainer-Varianten führen zum selben Ziel, nur unterschiedlich schnell.\n\nB1 (2 Tage) ist der ruhige Einstieg: Google Ads bringen die ersten Anfragen, parallel verbessern wir Website und Sichtbarkeit in kleinen Schritten. Nach drei Monaten hast du echte Zahlen und kannst auf dieser Basis entscheiden, ob du aufstockst.\n\nB2 (4 Tage) ist derselbe Weg mit mehr Tempo. Sinnvoll, wenn du früher unabhängiger von bezahlter Werbung sein willst.',
  timeline: [
    { period: 'Woche 1–2', description: 'Start-Sprint: Tracking, Konten, Keywords, Unternehmensprofil, Website-Check' },
    { period: 'Woche 3', description: 'Google Ads gehen live, klein und eng gesteuert. Erste Anfragen möglich.' },
    { period: 'Woche 4–8', description: 'Ads-Optimierung nach echten Daten. Erste zwei Ratgeberinhalte. FAQ-Ausbau für KI-Antworten.' },
    { period: 'Monat 3', description: 'Erste organische Rankings sichtbar. Landingpages je Region. Reporting mit belastbaren Zahlen.' },
    { period: 'Monat 4–6', description: 'Entscheidung: Budget hochfahren, Meta-Retargeting starten, Content skalieren.' },
  ],
  kpis: [
    'Qualifizierte Anfragen pro Monat (Formular, WhatsApp, Anruf)',
    'Kosten pro Anfrage (Cost per Lead)',
    'Conversion Rate der Website — wie viele Besucher Kontakt aufnehmen',
    'Sichtbarkeit: Rankings bei Google, Erwähnungen in KI-Antworten',
  ],
  expectations: [
    'Google Ads liefert die ersten Anfragen typischerweise in Woche 3–6.',
    'Erfahrungsgemäß liegen die Kosten pro Anfrage in diesem Markt anfangs bei etwa 50–150 €. Das sind Schätzwerte, die wir in Monat 1 mit echten Zahlen ersetzen.',
    'SEO und KI-Sichtbarkeit brauchen 3–6 Monate. Wer dir etwas anderes verspricht, verkauft dir etwas.',
    'Der Verkaufszyklus ist lang. Eine Anfrage im Oktober kann im Frühjahr zum Abschluss werden. Wir bewerten die ersten Monate an Anfragen und Anfragequalität, nicht an Abschlüssen.',
  ],
  external_costs: [
    { item: 'Google Ads Mediabudget', recommendation: '750–1.500 € / Monat. Wir starten am unteren Ende und erhöhen nur, wenn die Zahlen es rechtfertigen.' },
    { item: 'Meta Ads Mediabudget', recommendation: 'erst ab ca. Monat 4 relevant, dann 300–500 € / Monat' },
    { item: 'Tools', recommendation: 'ggf. kleine Lizenzkosten für Rank- und KI-Sichtbarkeits-Monitoring, ca. 30–80 € / Monat' },
    { item: 'Fotografie / Video', recommendation: 'nach Bedarf, separates Angebot' },
  ],
  external_costs_note: 'Diese Beträge zahlst du direkt an die Anbieter, nicht an uns. Sie sind nicht im Retainer enthalten.',
  conditions: [
    'Alle Preise netto, zzgl. gesetzlicher Umsatzsteuer / IVA.',
    'Tagessatz regulär 700 €. Für lokale Unternehmen gewähren wir 100 € Nachlass, daher 600 € pro Agenturtag.',
    'Ein Agenturtag entspricht 8 Arbeitsstunden.',
    'Retainer: Mindestlaufzeit 3 Monate, danach monatlich kündbar mit 30 Tagen Frist.',
    'Abrechnung monatlich im Voraus, Zahlungsziel 14 Tage.',
    'Nicht genutzte Zeit: bis zu 1 Tag kann in den Folgemonat übertragen werden, danach verfällt sie.',
    'Mehrbedarf wird vorher abgestimmt und zum gleichen Tagessatz abgerechnet.',
    'Reisezeit innerhalb Mallorcas berechnen wir nicht.',
  ],
  next_steps: [
    'Zugang zur Website (Redaktionssystem)',
    'Bestehende Konten, falls vorhanden: Google Analytics, Google Ads, Google Unternehmensprofil, Meta',
    'Eine Entscheidung zum Mediabudget für Monat 1',
    '60 Minuten für ein Kickoff-Gespräch',
  ],
  glossary: [
    { term: 'GA4', definition: 'Google Analytics 4, das Messsystem von Google für Website-Nutzung.' },
    { term: 'Conversion', definition: 'Eine gewünschte Handlung auf der Website, hier: eine Anfrage.' },
    { term: 'Cost per Lead (CPL)', definition: 'Was eine einzelne Anfrage im Schnitt an Werbekosten gekostet hat.' },
    { term: 'Landingpage', definition: 'Eine Seite, die für genau eine Zielgruppe oder Anzeige gebaut ist.' },
    { term: 'Ausschlussliste (Negative Keywords)', definition: 'Suchbegriffe, bei denen die Anzeige bewusst nicht erscheint. Spart Geld.' },
    { term: 'Strukturierte Daten', definition: 'Technische Zusatzinfos im Website-Code, damit Suchmaschinen und KI-Systeme Inhalte sicher zuordnen können.' },
    { term: 'Consent Mode v2', definition: 'Von Google vorgeschriebene Technik, die Tracking an die Cookie-Einwilligung der Nutzer koppelt. In der EU verpflichtend.' },
  ],
}

// ─── Form ↔ content helpers ───────────────────────────────────────────────────

function splitLines(s: string): string[] {
  return s.split('\n').map(l => l.trim()).filter(Boolean)
}

function splitPiped(s: string, keys: string[]): Record<string, string>[] {
  return splitLines(s).map(line => {
    const parts = line.split('|').map(p => p.trim())
    return Object.fromEntries(keys.map((k, i) => [k, parts[i] ?? '']))
  })
}

export function contentToForm(c: OfferContent) {
  return {
    intro: c.intro,
    situation_strengths: c.situation_strengths,
    situation_gaps: c.situation_gaps.join('\n'),
    positioning_core: c.positioning_core,
    positioning_pillars: c.positioning_pillars.map(p => `${p.pillar} | ${p.what} | ${p.message}`).join('\n'),
    positioning_strategy: c.positioning_strategy,
    positioning_note: c.positioning_note ?? '',
    sprint_price: String(c.sprint_price),
    sprint_days: String(c.sprint_days),
    sprint_includes: c.sprint_includes.join('\n'),
    sprint_flex_note: c.sprint_flex_note ?? '',
    retainer_b1_days: String(c.retainer_variants[0]?.days ?? 2),
    retainer_b1_price: String(c.retainer_variants[0]?.price ?? 1200),
    retainer_b1_focus: c.retainer_variants[0]?.focus ?? '',
    retainer_b1_fits: c.retainer_variants[0]?.fits_when ?? '',
    retainer_b2_days: String(c.retainer_variants[1]?.days ?? 4),
    retainer_b2_price: String(c.retainer_variants[1]?.price ?? 2400),
    retainer_b2_focus: c.retainer_variants[1]?.focus ?? '',
    retainer_b2_fits: c.retainer_variants[1]?.fits_when ?? '',
    retainer_fixed: c.retainer_fixed.join('\n'),
    retainer_variable: c.retainer_variable.join('\n'),
    retainer_note: c.retainer_note,
    decision_text: c.decision_text,
    channels: c.channels.map(ch => [ch.name, ch.benefit, ch.timeframe, ch.optional ? 'optional' : ''].join(' | ')).join('\n'),
    timeline: c.timeline.map(t => `${t.period} | ${t.description}`).join('\n'),
    kpis: c.kpis.join('\n'),
    expectations: c.expectations.join('\n'),
    external_costs: c.external_costs.map(e => `${e.item} | ${e.recommendation}`).join('\n'),
    external_costs_note: c.external_costs_note,
    conditions: c.conditions.join('\n'),
    next_steps: c.next_steps.join('\n'),
    glossary: (c.glossary ?? []).map(g => `${g.term} | ${g.definition}`).join('\n'),
  }
}

export function formToContent(fd: FormData): OfferContent {
  const g = (k: string) => (fd.get(k) as string | null) ?? ''

  const channelLines = splitPiped(g('channels'), ['name', 'benefit', 'timeframe', 'flag'])
  const channels = channelLines.map(({ name, benefit, timeframe, flag }) => ({
    name,
    benefit,
    timeframe,
    ...(flag?.toLowerCase() === 'optional' ? { optional: true } : {}),
  }))

  return {
    intro: g('intro'),
    situation_strengths: g('situation_strengths'),
    situation_gaps: splitLines(g('situation_gaps')),
    positioning_core: g('positioning_core'),
    positioning_pillars: splitPiped(g('positioning_pillars'), ['pillar', 'what', 'message']) as { pillar: string; what: string; message: string }[],
    positioning_strategy: g('positioning_strategy'),
    positioning_note: g('positioning_note') || undefined,
    channels,
    channels_glossary: DEFAULT_CONTENT.channels_glossary,
    sprint_price: Number(g('sprint_price')) || 1200,
    sprint_days: Number(g('sprint_days')) || 2,
    sprint_includes: splitLines(g('sprint_includes')),
    sprint_flex_note: g('sprint_flex_note') || undefined,
    retainer_fixed: splitLines(g('retainer_fixed')),
    retainer_variable: splitLines(g('retainer_variable')),
    retainer_variants: [
      { label: 'B1', days: Number(g('retainer_b1_days')) || 2, price: Number(g('retainer_b1_price')) || 1200, focus: g('retainer_b1_focus'), fits_when: g('retainer_b1_fits') },
      { label: 'B2', days: Number(g('retainer_b2_days')) || 4, price: Number(g('retainer_b2_price')) || 2400, focus: g('retainer_b2_focus'), fits_when: g('retainer_b2_fits') },
    ],
    retainer_note: g('retainer_note'),
    decision_text: g('decision_text'),
    timeline: splitPiped(g('timeline'), ['period', 'description']) as { period: string; description: string }[],
    kpis: splitLines(g('kpis')),
    expectations: splitLines(g('expectations')),
    external_costs: splitPiped(g('external_costs'), ['item', 'recommendation']) as { item: string; recommendation: string }[],
    external_costs_note: g('external_costs_note'),
    conditions: splitLines(g('conditions')),
    next_steps: splitLines(g('next_steps')),
    glossary: splitPiped(g('glossary'), ['term', 'definition']) as { term: string; definition: string }[],
  }
}

export function generateCode(): string {
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const letter = letters[Math.floor(Math.random() * letters.length)]
  const rest = Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
  return `${letter}-${rest}`
}
