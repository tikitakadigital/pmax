import type { ReactNode } from 'react'
import Image from 'next/image'

export interface ServiceDetail {
  metaTitle: string
  metaDesc: string
  headline: ReactNode
  deck: string
  stats: { num: string; label: string }[]
  prose: ReactNode
  faqs: { q: string; a: string }[]
}

export interface IndustryDetail {
  metaTitle: string
  metaDesc: string
  headline: ReactNode
  deck: string
  stats: { num: string; label: string }[]
  prose: ReactNode
  faqs: { q: string; a: string }[]
}

export interface LocalizedCaseDetail {
  metaTitle?: string
  metaDesc?: string
  heroTitle?: ReactNode
  heroDeck?: string
  stats?: { num: string; label: string }[]
  prose?: ReactNode
}

export interface LocalizedBlogDetail {
  title?: string
  deck?: string
  prose?: ReactNode
  toc?: string[]
  faqs?: { q: string; a: string }[]
}

export const de = {
  lang: 'de' as const,
  htmlLang: 'de',
  locale: 'de_DE',

  nav: {
    services: 'Leistungen',
    industries: 'Branchen',
    cases: 'Referenzen',
    blog: 'Journal',
    about: 'Über uns',
    cta: 'Projekt starten',
  },

  footer: {
    tag: 'Digitales Marketing von Mallorca, für Marken in ganz Europa.',
    services: 'Leistungen',
    industries: 'Branchen',
    company: 'Unternehmen',
    office: 'Büro Mallorca',
    links: {
      about: 'Über pmax',
      cases: 'Referenzen',
      blog: 'Journal',
      contact: 'Kontakt',
    },
    copyright: '© 2026 pmax Online S.L. · USt-IdNr. ES B57948123 · Calvià, Mallorca',
  },

  home: {
    metaTitle: 'Digitalagentur Mallorca — Google Ads, SEO & KI-Sichtbarkeit | pmax',
    metaDesc: 'Google Ads, Meta, LinkedIn, SEO und KI-Sichtbarkeit — von Mallorca aus für Marken in ganz Europa. Monatliche Festpreise, keine prozentualen Mediagebühren.',
    rotator: ['Wachstum.', 'Sichtbarkeit.', 'Kunden.', 'Performance.'],
    tagline: 'Eine Digitalagentur, die auf messbare Ergebnisse baut.',
    deckEyebrow: 'Was wir tun',
    deckText: (
      <>
        pmax ist eine Agentur für digitales Marketing in Calvià, Mallorca. Wir arbeiten mit deutsch- und englischsprachigen Unternehmern auf der Insel sowie mit Marken in ganz Europa.
      </>
    ),
    statSpend: 'verwaltetes Ad-Budget',
    statBrands: 'betreute Marken seit 2023',
    statLangs: '3 Sprachen — Englisch, Deutsch, Spanisch',
    svcKicker: '01 — Was wir tun',
    svcTitle: <>Sieben Leistungen.<br />Eine Arbeitsweise.</>,
    svcAside: <>Alles, was wir tun, beantwortet dieselbe Frage: <em>Bringt es dem Unternehmen wirklich etwas?</em> Falls nicht, hören wir damit auf.</>,
    svcCta: 'Mehr erfahren',
    workKicker: '02 — Ausgewählte Referenzen',
    workTitle: 'Echte Ergebnisse.',
    workAside: 'Zehn Kundenprojekte mit echten Zahlen. Keine Eitelkeitsmetriken — nur das, was am Ende auf dem Konto zu sehen war.',
    workCta: 'Alle Referenzen →',
    industriesCta: 'Alle 10 Branchen-Strategien entdecken',
    processKicker: '03 — Unsere Arbeitsweise',
    processTitle: <>Vier Schritte.<br />Keine Überraschungen.</>,
    processAside: 'Die meisten Agenturen verkaufen Präsentationen. Wir verkaufen Lösungen. Hier ist die Reihenfolge.',
    processSteps: [
      { step: '01', word: 'Listen', time: '2w', desc: 'Zuerst verstehen wir das Geschäft. Dann die Daten, dann die Kanäle. Präsentationen kommen zuletzt.' },
      { step: '02', word: 'Fix', time: '6w', desc: 'Tracking, Feeds, strukturierte Daten, Grundlagen. Die unspektakuläre Arbeit, von der alles andere abhängt.' },
      { step: '03', word: 'Grow', time: '12w+', desc: 'Kampagnen skalieren, Creatives finden ihren Rhythmus, das Dashboard beginnt die Wahrheit zu sagen.' },
      { step: '04', word: 'Defend', time: '∞', desc: 'SEO, KI-Suche, Markenschutz. Stille Arbeit, die sich über Jahre hinweg auszahlt.' },
    ],
    journalKicker: '04 — Journal',
    journalTitle: 'Was wir gerade schreiben.',
    journalAside: 'Notizen aus der Praxis — geschrieben für Menschen, die Marketing machen, nicht für Suchroboter.',
    journalCta: 'Alle Artikel →',
    journalRead: 'Artikel lesen',
    faqKicker: '05 — FAQ',
    faqTitle: 'Häufige Fragen.',
    homeFaqs: [
      {
        q: 'Arbeiten Sie mit deutschsprachigen Unternehmen auf Mallorca?',
        a: 'Ja. pmax arbeitet mit deutschsprachigen Unternehmern auf Mallorca — Kampagnen, Reporting und die laufende Kommunikation laufen auf Deutsch. Unser Team sitzt in Calvià und betreut Kunden auf der ganzen Insel.',
      },
      {
        q: 'Können Sie Marketing auf Deutsch und Englisch umsetzen?',
        a: 'Wir setzen Marketing standardmäßig auf Deutsch und Englisch um, bei Bedarf auch auf Spanisch. Anzeigen, Landingpages, SEO-Inhalte und Reporting entstehen in der Sprache, die Ihre Kunden tatsächlich sprechen.',
      },
      {
        q: 'Wo auf Mallorca sind Sie ansässig?',
        a: 'pmax ist in Calvià auf Mallorca ansässig und betreut Kunden auf der ganzen Insel und den übrigen Balearen sowie Marken in ganz Europa.',
      },
      {
        q: 'Welche Unternehmen betreuen Sie typischerweise auf Mallorca?',
        a: 'Typischerweise unterstützen wir inhabergeführte, deutsch- und englischsprachige Unternehmen auf Mallorca — in Immobilien, Hotellerie und Gastronomie, E-Commerce, Gesundheitswesen, Boote und Yachten sowie Dienstleistungen — beim Wachstum durch bezahlte Anzeigen, SEO und Sichtbarkeit in der KI-Suche.',
      },
      {
        q: 'Wie rechnen Sie ab?',
        a: 'pmax arbeitet mit einer festen monatlichen Pauschale, nicht mit einem Prozentsatz des Werbebudgets. Die Pauschale wird im Voraus vereinbart, sodass die Kosten planbar bleiben — unabhängig davon, wie viel Sie für Anzeigen ausgeben.',
      },
    ],
    promo: {
      eyebrow: 'Gespräch vereinbaren',
      headline: <>30 Minuten.<br />Kein Pitch. Kein Deck.</>,
      deck: 'Erzählen Sie uns, was nicht funktioniert. Wir sagen Ihnen direkt, ob wir das richtige Team sind. Die meisten Gespräche enden mit einem klaren nächsten Schritt — nicht immer mit uns.',
      cta: 'Gespräch buchen',
      secondary: 'Oder: hello@pmax.online',
    },
  },

  about: {
    metaTitle: 'Über pmax — Digitalagentur aus Mallorca | pmax',
    metaDesc: 'Senior-Marketing-Team in Calvià, Mallorca. Google Ads, SEO und KI-Sichtbarkeit für Marken in Europa. Festpreise, kein Agentur-Overhead.',
    eyebrow: 'Über pmax',
    title: <>Ein kleines Team.<br />Eine <em>klare Haltung</em>.</>,
    deck: 'Ein schlankes Team aus Marketern, Analysten und Kreativen mit Sitz in Calvià, Mallorca — wir entwickeln Performance- und KI-Sichtbarkeitsprogramme für Marken in ganz Europa.',
    whyTitle: 'Warum wir existieren',
    whyText: (
      <>
        <p>
          Die meisten Digitalagenturen verkaufen Kanäle. Wir verkaufen ein System. Vor zwei Jahren war unser Gründer Philipp Enders auf Kundenseite tätig und beobachtete, wie Agenturen immer dieselbe Präsentation hielten — egal, welches Unternehmen vor ihnen saß. Er entschied sich, etwas anderes aufzubauen: ein kleines Team, das weniger Dinge tut, dafür gründlicher — mit dem technischen Know-how, ein Tracking-Setup wirklich zu reparieren oder einen Produktfeed von Grund auf neu zu bauen, anstatt nur darüber zu reden.
        </p>
        <p>
          Zwei Jahre später haben sich die Grundsätze nicht geändert. Wir wählen Kunden aus, denen wir wirklich helfen können. Wir sagen ihnen die Wahrheit — auch die Teile, die sie nicht hören wollen. Wir berechnen Festpreise, keine Prozentsätze des Mediabudgets, weil wir nie einen finanziellen Anreiz haben wollen, mehr Werbung zu empfehlen als tatsächlich sinnvoll ist.
        </p>
        <p>
          Wir akzeptieren keine Kunden, denen wir nicht helfen können. Und wir sagen Ihnen beim ersten Gespräch ehrlich, ob wir das richtige Team für Sie sind.
        </p>
      </>
    ),
    howTitle: 'Wie wir arbeiten',
    howText: (
      <>
        <p>
          Jedes Projekt beginnt mit einer zweiwöchigen Analysephase — wir öffnen die Daten, sprechen mit Ihrem Team und verstehen das Geschäft. Wir schlagen nichts vor, bis wir uns eine eigene Meinung erarbeitet haben. Danach: ein schriftlicher Plan, ein fester Leistungsumfang, ein monatlicher Festpreis und wöchentliche Arbeitstreffen, in denen Sie sehen, was aufgebaut wird.
        </p>
        <p>Keine &ldquo;Discovery Sprints&rdquo;, keine &ldquo;Co-Creation Workshops&rdquo;. Wir arbeiten, teilen es laufend und liefern.</p>
      </>
    ),
    beliefsTitle: 'Was wir glauben',
    beliefs: [
      { strong: 'Langweilige Grundlagen zuerst.', text: 'Tracking, Feeds, strukturierte Daten und Conversion-Design machen 80 % des Unterschieds aus. Alles andere verstärkt sie.' },
      { strong: 'Gewinn, nicht Umsatz.', text: 'Eine ROAS-Zahl, die den Rohertrag ignoriert, ist Marketing-Fiktion.' },
      { strong: 'Creative ist ein System, kein Anhängsel.', text: 'Der Algorithmus entscheidet, welche Anzeige gezeigt wird — aber Sie entscheiden, welche Anzeigen existieren.' },
      { strong: 'KI-Sichtbarkeit ist das neue SEO.', text: 'Marken, die 2026 bei ChatGPT und Perplexity auftauchen, werden das nächste Jahrzehnt der organischen Kundengewinnung dominieren.' },
      { strong: 'Ehrlichkeit zahlt sich aus.', text: 'Einem Kunden zu sagen, dass sein Account nicht kaputt ist — wenn er es wirklich nicht ist — ist das, was uns fünfjährige Partnerschaften einbringt.' },
    ],
    certsTitle: 'Zertifizierungen & Partnerschaften',
    certsText: 'Google Partner. Meta Business Partner. Microsoft Advertising Partner. ISO-27001-konforme Datenhaltung für Kundendaten.',
    servicesTitle: 'Was wir tun',
    servicesText: (
      <>
        Wir betreiben{' '}<a href="/de/services/google-ads/">Google Ads</a>,{' '}
        <a href="/de/services/paid-social/">Paid Social</a>,{' '}
        <a href="/de/services/seo/">SEO</a>,{' '}
        <a href="/de/services/ai-visibility/">KI-Sichtbarkeit</a>,{' '}
        <a href="/de/services/analytics/">Analytics</a>,{' '}
        <a href="/de/services/conversion-design/">Conversion Design</a> und{' '}
        <a href="/de/services/creative/">Creative Production</a> — sieben Leistungen, ein System.{' '}
        <a href="/de/services/">Alle Leistungen ansehen →</a>
      </>
    ),
    casesText: <>Ausgewählte <a href="/de/cases/">Referenzen</a> finden Sie in unserem Arbeitsarchiv — zehn Projekte mit echten Zahlen.</>,
    startTitle: 'Projekt starten',
    startDeck: 'Das erste Gespräch dauert 30 Minuten — auf unsere Kosten. Erzählen Sie uns, was Sie aufbauen wollen.',
    startCta: 'Gespräch buchen',
    contactCta: 'Gespräch buchen',
    leadershipLabel: 'Geschäftsführung',
    founderRole: 'Gründer & Geschäftsführer',
    founderBio: <>20+ Jahre Digitalmarketing. Gründer von <a href="https://tikitaka.digital" target="_blank" rel="noopener" style={{ color: 'var(--color-jelly-mint)', borderBottom: '1px solid' }}>tikitaka.digital</a> in Hamburg, bevor er pmax auf Mallorca eröffnete. Schreibt die meisten unserer Journal-Artikel und betreut Accounts persönlich.</>,
    officeLabel: 'Büro Mallorca',
  },

  contact: {
    metaTitle: 'Kontakt — Digitalagentur Mallorca | pmax',
    metaDesc: 'Starten Sie ein Gespräch über Ihr Marketing. E-Mail an hello@pmax.online oder Anruf +34 871 242 160. Erste 30 Minuten kostenfrei.',
    eyebrow: 'Sprechen Sie mit uns',
    title: <>Lassen Sie uns<br /><em>reden</em>.</>,
    deck: 'Das erste Gespräch dauert 30 Minuten — auf unsere Kosten. Erzählen Sie uns, was Sie aufbauen wollen, und wir melden uns innerhalb eines Werktages.',
    directLabel: 'Direktkontakt',
    formTitle: 'Ihr Projekt',
    officeLabel: 'Büro Mallorca',
    hoursLabel: 'Mo–Fr, 9–18 Uhr MEZ',
  },

  services: {
    metaTitle: 'Performance-Marketing-Leistungen — Google Ads, SEO & KI | pmax',
    metaDesc: 'Google Ads, Meta, LinkedIn, SEO, KI-Sichtbarkeit, Conversion Design und Analytics — sieben Leistungen für messbares, profitables Wachstum.',
    eyebrow: '01 — Was wir tun',
    title: <>Performance Marketing,<br />gebaut wie <em>Engineering</em>.</>,
    deck: 'Sieben Leistungen. Ein System. Wir verkaufen keine isolierten Kanäle — wir betreiben ein System, in dem Google Ads, Meta, SEO, KI-Suche und Analytics auf denselben Daten und dasselbe Ziel ausgerichtet sind: profitables Wachstum, das sich wirklich messen lässt.',
    allKicker: 'Alle Leistungen',
    allTitle: 'Wo möchten Sie anfangen?',
    allAside: 'Die meisten Kunden starten mit ein oder zwei Leistungen und bauen das Programm aus, sobald die Zahlen stimmen. Das ist uns genauso recht.',
    seeResults: 'Zu den Referenzen →',
    learnMore: 'Methode ansehen',
    ctaTitle: 'Über eine Leistung sprechen?',
    ctaDeck: 'Das erste Gespräch dauert 30 Minuten, auf unsere Kosten. Wir schauen gemeinsam, wo Sie gerade stehen, und sagen Ihnen ehrlich, welche ein oder zwei Leistungen den größten Hebel für Ihr Unternehmen haben.',
    ctaBtn: 'Gespräch vereinbaren',
    faqKicker: 'FAQ',
    faqTitle: 'Fragen, beantwortet.',
    faqs: [
      {
        q: 'Welche Leistungen bietet pmax an?',
        a: 'pmax bietet sieben Kernleistungen: KI-Sichtbarkeit (GEO), Google Ads (Search, Shopping, Performance Max, YouTube), Paid Social (Meta, TikTok, LinkedIn, Microsoft Ads), SEO (technisch, inhaltlich, digital PR, lokal), Conversion Design (CRO und A/B-Tests), Analytics & Tracking (GA4, server-seitiges GTM, Consent Mode v2, CRM-basierte Offline-Conversions) und Creative Production (Performance-Creatives, Landingpages, UGC-Video in hoher Kadenz).',
      },
      {
        q: 'Mit welcher Unternehmensgröße arbeitet pmax?',
        a: 'Mit allen Größen. Einige unserer besten Arbeiten haben wir für kleine Mallorca-Unternehmen gemacht, die ihre ersten Google- oder Meta-Kampagnen aufgesetzt haben. Wir betreuen auch europäische Marken, die sechsstellige Monatsbudgets bewegen. Wichtiger als das Budget ist, ob die Arbeit wirklich etwas für Ihr Unternehmen bewegen kann — das sagen wir Ihnen ehrlich im ersten Gespräch.',
      },
      {
        q: 'Warum berechnen Sie Festpreise statt Prozentsätze des Mediabudgets?',
        a: 'Weil Prozentsätze des Budgets falsche Anreize setzen — Agenturen empfehlen dann höhere Budgets, um ihre eigenen Einnahmen zu steigern. Ein Festpreis richtet uns auf das aus, was für Ihr Unternehmen wirklich richtig ist, auch wenn das manchmal bedeutet, weniger auszugeben.',
      },
      {
        q: 'Wo ist pmax ansässig und welche Märkte betreuen Sie?',
        a: 'Wir haben unseren Sitz in Calvià, Mallorca, Spanien. Wir arbeiten auf Englisch, Deutsch und Spanisch und betreuen Kunden in der DACH-Region, auf der iberischen Halbinsel, in Großbritannien, Benelux und Skandinavien. Rund 60 % unserer Kunden sind deutschsprachig.',
      },
      {
        q: 'Wie lange dauern pmax-Verträge?',
        a: 'Erstverträge laufen 6 Monate. Danach verlängern sie sich monatlich mit einer Kündigungsfrist von 60 Tagen. Unsere 12-Monats-Bindungsrate liegt bei 93 % — aber wir halten niemanden länger als fair. Wenn wir nicht liefern, sollten Sie problemlos gehen können.',
      },
    ],
    serviceItems: [
      { slug: 'ai-visibility', num: '01', badge: 'Neu 2026', title: 'KI-Sichtbarkeit (GEO)', deck: 'Immer mehr Menschen fragen ChatGPT, Perplexity oder Gemini, bevor sie Google öffnen. Wir sorgen dafür, dass Ihre Marke die Empfehlung ist — durch technische Grundlagen, strukturierte Daten und Inhalte, die KI-Modelle tatsächlich lesen können.', tags: ['Entities', 'Schema', 'llms.txt', 'Citation-Tracking'], variant: 'is-mint', featured: true },
      { slug: 'google-ads', num: '02', title: 'Google Ads & Performance Max', deck: 'Search, Shopping, Performance Max und YouTube — aufgebaut auf einem sauberen Conversion-Setup und einem Produktfeed, der wirklich verkauft. Keine Black Boxes.', tags: ['Search', 'PMax', 'Shopping', 'YouTube'], variant: 'is-slate' },
      { slug: 'paid-social', num: '03', title: 'Paid Social', deck: 'Meta, TikTok und LinkedIn — an Ihr CRM angebunden, mit einer soliden Creative-Pipeline versorgt, gemessen an der Kennzahl, die die Rechnungen bezahlt.', tags: ['Meta', 'TikTok', 'LinkedIn', 'Microsoft'], variant: 'is-outlined' },
      { slug: 'seo', num: '04', title: 'SEO', deck: 'Technisches SEO, Content und digitale PR. Wir erarbeiten Rankings auf dem langsamen, ehrlichen Weg — und dieselbe Arbeit zahlt sich auch in der KI-Suche aus.', tags: ['Technisch', 'Content', 'Local SEO', 'Digital PR'], variant: 'is-violet' },
      { slug: 'conversion-design', num: '05', title: 'Conversion Design (CRO)', deck: 'Mehr Umsatz aus demselben Traffic. Wir entwickeln, testen und liefern die Änderungen, die die Conversion Rate bewegen — nicht die, die Design-Preise gewinnen.', tags: ['A/B-Tests', 'UX-Research', 'Funnel-Design'], variant: 'is-yellow' },
      { slug: 'analytics', num: '06', title: 'Analytics & Tracking', deck: 'Server-seitiges GTM, Consent Mode v2, CRM-Conversion-Imports, Dashboards ohne Lügen. Das Fundament, auf dem alles andere steht.', tags: ['GA4', 'Server-side', 'Consent Mode', 'BI-Dashboards'], variant: 'is-outlined' },
      { slug: 'creative', num: '07', title: 'Creative Production', deck: 'Ein stetiger Strom an Anzeigen, Landingpages und Videos — gebaut zum Testen, nicht für Awards. Denn das Creative ist die Kampagne.', tags: ['Static', 'Motion', 'UGC', 'Landers'], variant: 'is-pink' },
    ],
  },

  serviceDetail: {
    'ai-visibility': {
      metaTitle: 'KI-Sichtbarkeit (GEO) — ChatGPT & Perplexity | pmax',
      metaDesc: 'Zitiert werden von ChatGPT, Perplexity, Gemini und Google AI Overviews. Wir bauen Schema, Content und Trust-Signale, die KI-Zitate für Ihre Marke generieren.',
      headline: <>KI-Sicht&shy;barkeit <em>(GEO)</em>.</>,
      deck: 'Wenn jemand ChatGPT, Perplexity, Gemini oder Googles AI Overviews nach einer Empfehlung in Ihrer Branche fragt — wir stellen sicher, dass Ihre Marke die Antwort ist. Mit Substanz, nicht mit Tricks.',
      stats: [
        { num: '61 %', label: 'der Kaufentscheidungen laufen heute über eine KI-Antwort (Gartner 2026)' },
        { num: '4/4', label: 'KI-Engines, in denen wir Kunden tracken — ChatGPT, Perplexity, Gemini, Google AI Overviews' },
        { num: '12 Wo.', label: 'typische Zeit vom Start bis zu ersten zuverlässigen Zitierungen' },
        { num: '0', label: 'Abkürzungen. KI-Sichtbarkeit wird verdient, nicht erzwungen.' },
      ],
      prose: (
        <>
          <h2>Der Wandel in der Suche</h2>
          <p>Zwanzig Jahre lang bedeutete SEO, bei Google zu ranken. Das gilt weiterhin — aber es ist nicht mehr das ganze Spiel. Ein wachsender Anteil kaufbereiter Anfragen landet heute nie auf einer klassischen Suchergebnisseite. Menschen fragen ChatGPT nach einer B2B-Software-Empfehlung, fragen Perplexity, um drei Solaranbieter zu vergleichen, oder bekommen direkt in Gmail eine Antwort von Gemini — ohne Google je zu öffnen.</p>
          <p>Die entscheidende Frage lautet nicht mehr „Ranken wir?" — sondern „Werden wir zitiert?"</p>
          <p>Generative Engine Optimisation, kurz GEO, ist die Disziplin, dafür zu sorgen, dass große Sprachmodelle Ihre Marke finden, verstehen, was Sie tun, und Sie mit Überzeugung empfehlen, wenn jemand fragt. Die technische Grundlage überschneidet sich stark mit klassischem SEO, ergänzt um strukturierte Daten, Entity-Disambiguierung und die Trust-Signale, die KI-Modelle tatsächlich gewichten.</p>
          <h2>Was wir tun</h2>
          <p>Zuerst messen wir Ihre aktuelle KI-Sichtbarkeit: Wir stellen Hunderte von Prompts zu Ihrer Kategorie durch alle vier großen Engines und protokollieren, welche Mitbewerber erwähnt werden, in welchem Kontext und mit welcher Tonalität. Das ist Ihre Ausgangsbasis. Dann beheben wir die technischen Grundlagen — Schema.org-Markup, eine klar lesbare About-Seite, llms.txt, Entity-Abdeckung. Schließlich bauen wir Evidenz auf, der KI-Modelle vertrauen: Case Studies mit verifizierbaren Zahlen, Erwähnungen in relevanten Publikationen, Expertenbeiträge mit Autorenzeilen. Monatlich wiederholen wir dieselben Prompts und berichten, was sich verändert hat.</p>
        </>
      ),
      faqs: [
        { q: 'Was ist Generative Engine Optimisation (GEO)?', a: 'GEO ist die Praxis, Ihre Marke, Produkte und Inhalte in KI-Suchantworten auffindbar zu machen — bei ChatGPT, Perplexity, Gemini und Googles AI Overviews. Es überschneidet sich mit klassischem SEO, nutzt aber andere Ranking-Signale: strukturierten Faktcontent, Zitate aus autoritativen Quellen und Schema-Markup.' },
        { q: 'Wie lange dauert es, bis man von ChatGPT zitiert wird?', a: 'Bei den meisten Kategorien erscheinen erste Zitierungen nach 6–10 Wochen eines strukturierten GEO-Programms — vorausgesetzt, Ihre Domain hat bereits eine grundlegende Autorität. Stark umkämpfte Kategorien dauern 12–16 Wochen. Wir tracken die Mention-Rate monatlich, sodass Sie Fortschritte sehen, statt darüber zu spekulieren.' },
        { q: 'Unterscheidet sich GEO von klassischem SEO?', a: 'Ja, aber beide teilen dieselbe Basis. Klassisches SEO optimiert für Googles zehn blaue Links. GEO optimiert dafür, die Antwort zu sein, die ein KI-System generiert — Faktgenauigkeit, Quellenzitate, Schema, Markenbekanntheit. Wir betreiben beides zusammen, weil sich die Arbeit gegenseitig verstärkt.' },
        { q: 'Für welche Unternehmen lohnt sich KI-Sichtbarkeit besonders?', a: 'Am schnellsten zahlt sich GEO für Unternehmen aus, bei denen Käufer vor dem Kauf recherchieren — B2B-Software, professionelle Dienstleistungen, hochpreisige Konsumgüter (Immobilien, Solar, Gesundheit, Hotellerie, Automotive). Wenn jemand etwas googelt, bevor er es kauft, fragt er heute auch KI.' },
      ],
    },
    'google-ads': {
      metaTitle: 'Google Ads Agentur — Search, Shopping & PMax | pmax',
      metaDesc: 'Google Ads auf Gewinn ausgerichtet, nicht auf ROAS. Performance Max, Search, Shopping — margenbewusstes Bidding, CRM-Offline-Conversions, saubere Struktur.',
      headline: <>Google Ads.</>,
      deck: 'Performance Max, Search, Shopping und Demand Gen — verwaltet für Gewinn, nicht für das ROAS-Dashboard. Wir erledigen die Arbeit, die die meisten Agenturen überspringen: Feed-Engineering, Brand-Exclusions, Offline-Conversion-Imports und die wöchentliche Account-Pflege, die sich langfristig auszahlt.',
      stats: [
        { num: '€8,4 M', label: 'jährliches Google Ads Budget über alle aktiven Accounts' },
        { num: '+184 %', label: 'medianer Umsatzzuwachs in den ersten 12 Monaten' },
        { num: '−31 %', label: 'mediane Streuverluste, die wir im ersten Audit identifizieren' },
        { num: 'wöchentlich', label: 'Account-Review — nie „einstellen und vergessen"' },
      ],
      prose: (
        <>
          <h2>Warum die meisten Google Ads Accounts underperformen</h2>
          <p>Fast jeder Account, den wir übernehmen, hat dieselben drei Probleme: Performance Max frisst Brand-Search und kassiert Conversions, die er nicht erzeugt hat. Asset-Groups sind zu breit — Produkte mit hohem und niedrigem Deckungsbeitrag kämpfen um dasselbe Budget. Und das Tracking ist auf Formulareinsendungen optimiert, nicht auf abgeschlossene Aufträge, also sucht der Algorithmus die billigsten Menschen, nicht die wertvollsten.</p>
          <p>Das sind keine schwierigen Probleme. Sie brauchen jemanden, der wöchentlich in den Account schaut und die unattraktive Arbeit macht.</p>
          <h2>Was wir tun</h2>
          <p>In Woche eins liefern wir eine ehrliche Diagnose der drei größten Lecks — kein Deck, nur Befunde. Dann folgen Brand-Exclusions auf PMax, Asset-Groups getrennt nach Margenstufe, Search Themes gezielt gesetzt, Tracking auf Server-side umgestellt mit korrekt implementiertem Consent Mode v2, und Offline-Conversions aus Ihrem CRM, wenn der Sales-Cycle länger als eine Woche ist. Danach: wöchentliche Pflege, monatliche Reports — was sich verändert hat, was wir gelernt haben, was wir als nächstes testen.</p>
        </>
      ),
      faqs: [
        { q: 'Wie optimieren Sie Google Ads auf Gewinn statt auf ROAS?', a: 'Wir setzen tROAS-Ziele auf Basis des Rohertrags, nicht des Umsatzes. Customer Match Lists werden monatlich mit CRM-Daten gespeist. Für B2B wird langfristige Attribution eingebunden. Die Plattform optimiert dann auf die Kunden, die Sie wirklich wollen — nicht auf die günstigsten.' },
        { q: 'Funktioniert Performance Max — oder ist es eine Black Box?', a: 'PMax funktioniert, wenn es richtig strukturiert ist. Die meisten Accounts haben PMax zu breit aufgesetzt — alle Produkte in einer Asset-Group, ohne Brand-Exclusions. Wir trennen Asset-Groups nach Margenstufe, schließen Brand-Traffic aus und setzen Search Themes gezielt. So wird PMax zu einem kalkulierbaren Kanal.' },
        { q: 'Wie hoch sollte mein Google Ads Budget sein?', a: 'Das hängt vom Markt, dem Wettbewerb und Ihrem Deckungsbeitrag pro Auftrag ab. Wir geben Ihnen eine ehrliche Einschätzung im ersten Gespräch — und wenn Ihr Budget für den gewünschten Kanal nicht ausreicht, sagen wir das.' },
        { q: 'Wie lange bis zu ersten Ergebnissen?', a: 'Die ersten 4–6 Wochen sind Aufräumarbeiten. Danach beginnt die eigentliche Optimierung. Nach 8–12 Wochen sehen wir in der Regel, ob wir auf dem richtigen Weg sind. Schnelle Wins gibt es in vielen Accounts — aber nachhaltiges Wachstum braucht Geduld.' },
      ],
    },
    'paid-social': {
      metaTitle: 'Paid Social Agentur — Meta, TikTok & LinkedIn | pmax',
      metaDesc: 'Meta, TikTok und LinkedIn Ads mit wöchentlichem Creative-Volumen. Wir betreiben die Produktionskadenz, die Accounts frisch und konversionsstark hält.',
      headline: <>Paid Social.</>,
      deck: 'Meta, TikTok und LinkedIn — an Ihr CRM angebunden, mit einer soliden Creative-Pipeline versorgt, gemessen an der Kennzahl, die die Rechnungen bezahlt.',
      stats: [
        { num: '56 %', label: 'der Performance bestimmt das Creative laut Meta-Forschung' },
        { num: 'wöchentlich', label: 'neue Creative-Varianten — nie statische Accounts' },
        { num: 'CAPI', label: 'server-seitige Conversion-API-Integration auf allen Accounts' },
        { num: 'CRM', label: 'Custom Audiences aus echten Kundendaten, keine Lookalikes ins Blaue' },
      ],
      prose: (
        <>
          <h2>Warum Creative-Volumen entscheidet</h2>
          <p>Die Algorithmen von Meta und TikTok sind besser als je zuvor im Targeting — aber sie können nur aus dem auswählen, was Sie ihnen geben. Wenn Ihr Account seit Wochen dieselben vier Creatives läuft, verlieren Sie nicht wegen des Targetings. Sie verlieren, weil der Algorithmus keine neuen Gewinner findet.</p>
          <p>Wir bauen Produktionssysteme, die wöchentlich neue Creatives liefern — UGC-Style, statische Anzeigen, kurze Videos — briefed von den Menschen, die das Media einkaufen, nicht von Kreativabteilungen, die Preise gewinnen wollen. Gewinner werden skaliert, Verlierer werden schnell aussortiert.</p>
          <h2>LinkedIn für B2B</h2>
          <p>Für B2B-Kunden ist LinkedIn oft der wichtigste Kanal. Wir betreiben Conversation Ads, Lead-Scoring-Integrationen, CRM-basierte Offline-Conversions und das Creative-Volumen, das einen B2B-Account langfristig frisch hält. Thought-Leadership-Anzeigen, die tatsächlich von echten Experten stammen, konvertieren besser — und das zeigen wir in den Daten.</p>
        </>
      ),
      faqs: [
        { q: 'Was ist CAPI und warum ist es wichtig?', a: 'CAPI (Conversions API) ist Metas server-seitige Tracking-Lösung. Sie sendet Conversion-Ereignisse direkt von Ihrem Server an Meta, ohne auf Browser-Cookies angewiesen zu sein. In einer Welt mit iOS-Tracking-Beschränkungen und Consent-Anforderungen ist CAPI die Grundlage für genaue Messung.' },
        { q: 'Wie viel Creative brauche ich pro Woche?', a: 'Das hängt vom Budget und der Plattform ab. Für Meta-Accounts mit €5.000–€20.000 monatlichem Budget empfehlen wir 3–5 neue Creatives pro Woche. Für TikTok eher 5–8. Weniger als das bedeutet, der Algorithmus lernt zu langsam.' },
        { q: 'Betreiben Sie TikTok-Werbung für B2B-Unternehmen?', a: 'Für die meisten B2B-Kategorien ist TikTok noch nicht die erste Wahl — LinkedIn oder YouTube arbeiten besser. Für B2C und E-Commerce ist TikTok oft einer der effizientesten Kanäle. Wir sagen Ihnen ehrlich, was für Ihre Kategorie Sinn macht.' },
        { q: 'Wie unterscheidet sich Ihr Ansatz für LinkedIn von anderen Agenturen?', a: 'Wir verbinden LinkedIn-Leads mit CRM-Daten und importieren Offline-Conversions zurück in die Plattform. So optimiert LinkedIn auf abgeschlossene Deals, nicht auf ausgefüllte Formulare. Dazu betreiben wir Lead-Scoring und Thought-Leadership mit nachweisbarem Business-Impact.' },
      ],
    },
    'seo': {
      metaTitle: 'SEO Agentur — technisch, lokal & Content-SEO | pmax',
      metaDesc: 'Technisches SEO, Content nach Kaufabsicht und internationale Skalierung. Organische Suche als messbarer Umsatzkanal, keine Eitelkeitsmetriken.',
      headline: <>SEO.</>,
      deck: 'Technisches SEO, Content und digitale PR. Wir erarbeiten Rankings auf dem langsamen, ehrlichen Weg — und dieselbe Arbeit zahlt sich auch in der KI-Suche aus.',
      stats: [
        { num: '+365 %', label: 'organischer Monatsumsatz für LEDXpress in 8 Monaten' },
        { num: '5.2x', label: 'mehr qualifizierte Leads für einen deutschen Energieversorger' },
        { num: 'DE+EN+ES', label: 'mehrsprachige SEO-Strukturen für internationale Kunden' },
        { num: '0', label: 'Shortcuts. Ehrliches SEO braucht Zeit.' },
      ],
      prose: (
        <>
          <h2>SEO, das tatsächlich Umsatz bringt</h2>
          <p>Die meisten SEO-Programme scheitern nicht an der Strategie — sie scheitern an der Ausführung. Technische Grundlagen, die nie wirklich behoben werden. Inhalte, die für Google geschrieben sind, nicht für Menschen. Linkbuilding aus Massenprogrammen, das mehr schadet als nutzt. Wir beginnen immer mit dem Technischen: Indexierung, Core Web Vitals, Crawl-Budget, strukturierte Daten. Dann Inhalte, die auf Kaufabsicht ausgerichtet sind — nicht weil Google es mag, sondern weil Ihre Kunden die Antworten suchen.</p>
          <p>Für <a href="/de/seo-agentur-mallorca/">Mallorca-Unternehmen</a> und DACH-Marken, die internationale Kunden ansprechen wollen, bauen wir mehrsprachige SEO-Strukturen, die auf Englisch, Deutsch und Spanisch ranken — mit korrektem hreflang-Setup, getrennten Sitemaps und inhaltlich eigenständigen Seiten pro Sprache.</p>
          <h2>SEO und KI-Suche</h2>
          <p>Dieselbe technische Arbeit, die Google-Rankings verbessert, verbessert auch Ihre Zitierbarkeit in ChatGPT und Perplexity. Saubere Strukturen, verifizierbare Fakten, klare Entity-Signale — das ist sowohl SEO als auch GEO. Wir betreiben beides als ein Programm.</p>
        </>
      ),
      faqs: [
        { q: 'Wie lange dauert es, bis SEO Ergebnisse zeigt?', a: 'Erste Bewegungen in den Rankings sind typischerweise nach 8–12 Wochen sichtbar, wenn die technischen Grundlagen in Ordnung sind. Signifikante Traffic- und Umsatzwirkung kommt meist nach 4–6 Monaten. Das ist kein Fehler — es ist die Natur eines compounding-Kanals.' },
        { q: 'Betreiben Sie auch lokales SEO für Mallorca?', a: 'Ja. Für lokale Unternehmen auf Mallorca — Hotels, Immobilienmakler, Dienstleister — optimieren wir Google Business Profile, bauen lokale Landingpages und arbeiten an deutschen und englischen Suchbegriffen, die die tatsächlichen Kunden eingeben.' },
        { q: 'Was ist der Unterschied zwischen technischem SEO und Content-SEO?', a: 'Technisches SEO stellt sicher, dass Google Ihre Seiten crawlen und indexieren kann — Ladezeiten, Core Web Vitals, Sitemaps, Canonicals, strukturierte Daten. Content-SEO sorgt dafür, dass Sie für die richtigen Suchanfragen gefunden werden — durch inhaltlich starke, auf Kaufabsicht ausgerichtete Seiten. Beide sind notwendig; keines allein reicht.' },
        { q: 'Bauen Sie auch Links?', a: 'Ja, aber selektiv. Wir verdienen Links durch echte inhaltliche Qualität, digital PR und Erwähnungen in relevanten Fachpublikationen — keine Massenprogramme, keine privaten Blog-Netzwerke. Qualität sticht Quantität, besonders seit den neuesten Google-Updates.' },
      ],
    },
    'conversion-design': {
      metaTitle: 'Conversion Design & CRO — Landingpages | pmax',
      metaDesc: 'Mehr Umsatz aus demselben Traffic. CRO und Landingpage-Design für Buchungsstrecken, Anfrage-Formulare und Checkouts.',
      headline: <>Conversion<br />Design <em>(CRO)</em>.</>,
      deck: 'Mehr Umsatz aus demselben Traffic. Wir entwickeln, testen und liefern die Änderungen, die die Conversion Rate bewegen — nicht die, die Design-Preise gewinnen.',
      stats: [
        { num: '+59 %', label: 'Conversion Rate für LEDXpress nach Checkout-Optimierung' },
        { num: '11,2 %', label: 'Formular-Conversion für PRIMUNDUS nach UX-Redesign' },
        { num: 'A/B', label: 'statistisch valide Tests — keine Bauchentscheidungen' },
        { num: 'Daten', label: 'jede Änderung basiert auf echtem Nutzerverhalten, nicht auf Meinungen' },
      ],
      prose: (
        <>
          <h2>Wo der Umsatz versteckt ist</h2>
          <p>Die meisten Marketing-Budgets werden für die Generierung von Traffic ausgegeben. Aber der Traffic, den Sie bereits haben, ist oft wertvoller — wenn Sie den Weg vom Klick zum Kunden optimieren. Ein Buchungsformular, das einen Schritt zu viel hat. Eine Landingpage, die mit der Anzeige, die dorthin führt, inhaltlich nicht übereinstimmt. Ein Checkout, der auf Mobile nicht funktioniert. Diese Probleme kosten mehr als jede Agenturgebühr.</p>
          <p>Wir beginnen mit Daten — Heatmaps, Session Recordings, Funnel-Analyse, Nutzerbefragungen. Dann entwickeln wir Hypothesen, bauen Testvarianten und messen die Ergebnisse mit statistischer Validität. Gewinner werden ausgerollt, Verlierer werden analysiert. Kein Raten.</p>
        </>
      ),
      faqs: [
        { q: 'Was ist der Unterschied zwischen CRO und UX-Design?', a: 'UX-Design zielt auf Nutzbarkeit und ästhetisches Erlebnis. CRO zielt auf messbare Geschäftsergebnisse — mehr Käufe, mehr Buchungen, mehr Anfragen. Beide überschneiden sich, aber CRO-Entscheidungen werden immer durch Daten und Tests validiert, nicht durch Designpräferenzen.' },
        { q: 'Welche Tools verwenden Sie für A/B-Tests?', a: 'Wir arbeiten mit Optimizely, VWO und Google Optimize (sowie dem Google Tag Manager für einfachere Tests). Die Wahl hängt vom Stack und Budget ab. Wichtiger als das Tool ist die Testmethodik — ausreichende Stichprobengröße, statistische Signifikanz und klar definierte primäre Metriken.' },
        { q: 'Wie viel Traffic brauche ich für CRO?', a: 'Als Faustregel: Für sinnvolle A/B-Tests auf einer Seite brauchen Sie mindestens 100–200 Conversions pro Monat auf dieser Seite. Darunter kann CRO trotzdem Sinn ergeben — durch qualitative Methoden, Heuristic Audits und technische Fixes, die keine Tests brauchen.' },
        { q: 'Arbeiten Sie auch mit bestehenden Shops oder nur mit Neuentwicklungen?', a: 'Beides. Typischerweise starten wir mit einem Audit des bestehenden Setups — Funnel-Analyse, Identifikation der größten Lecks. Dann folgen gezielte Verbesserungen. Nur wenn die Grundstruktur grundlegend falsch ist, empfehlen wir einen Neuaufbau.' },
      ],
    },
    'analytics': {
      metaTitle: 'Marketing Analytics & Tracking — GA4, Server-side GTM | pmax',
      metaDesc: 'Tracking, das iOS und DSGVO übersteht. Server-side GTM, Consent Mode v2, Conversion-APIs und CRM-Offline-Imports — echte Daten für jede Marketing-Entscheidung.',
      headline: <>Analytics &<br />Tracking.</>,
      deck: 'Server-seitiges GTM, Consent Mode v2, CRM-Conversion-Imports, Dashboards ohne Lügen. Das Fundament, auf dem alles andere steht.',
      stats: [
        { num: 'iOS', label: 'kein Datenverlust durch Apple-Tracking-Beschränkungen' },
        { num: 'DSGVO', label: 'Consent-Mode-v2-konforme Messung ohne Datenverlust' },
        { num: 'CRM', label: 'Offline-Conversions aus dem CRM zurück in die Plattformen' },
        { num: 'Wahrheit', label: 'Dashboards, die zeigen was wirklich passiert' },
      ],
      prose: (
        <>
          <h2>Warum die meisten Dashboards lügen</h2>
          <p>Nicht absichtlich — aber die Standard-GA4-Installation, die die meisten Websites haben, verliert durch iOS, Consent-Ablehnung und Bot-Traffic 30–50 % der echten Daten. Wenn Ihre Marketingentscheidungen auf diesen Zahlen basieren, optimieren Sie für Daten, die die Realität nicht abbilden.</p>
          <p>Wir bauen die Tracking-Infrastruktur, die echte Daten liefert: server-seitiges GTM, das nicht von Ad-Blockern oder iOS-Beschränkungen betroffen ist. Consent Mode v2, das DSGVO-konform Schätzungen für Nutzer ohne Consent einbezieht. Conversion-APIs für Meta, Google und LinkedIn, die Signale direkt vom Server senden. Und CRM-Offline-Conversions, die den Kreis von Marketing-Klick bis abgeschlossenem Deal schließen.</p>
          <p>Das Ergebnis: Ihre Plattformen optimieren auf echte Kunden, nicht auf das nächstgünstige Rauschen im System.</p>
        </>
      ),
      faqs: [
        { q: 'Was ist der Unterschied zwischen client-seitigem und server-seitigem Tracking?', a: 'Client-seitiges Tracking (Standard) funktioniert über JavaScript im Browser — angreifbar durch Ad-Blocker, iOS-Einschränkungen und Consent-Ablehnung. Server-seitiges Tracking schickt Events direkt von Ihrem Server an die Plattformen — robuster, datenschutzkonformer und genauer.' },
        { q: 'Was ist Consent Mode v2 und brauche ich es?', a: 'Consent Mode v2 ist Googles Reaktion auf europäische Datenschutzanforderungen. Es erlaubt Google, statistisch modellierte Conversions für Nutzer einzubeziehen, die Tracking abgelehnt haben — ohne deren Daten zu erfassen. Für EU-Kunden ist es seit März 2024 für Performance-Kampagnen de facto verpflichtend.' },
        { q: 'Wie funktionieren CRM-Offline-Conversions?', a: 'Sie importieren abgeschlossene Deals aus Ihrem CRM (HubSpot, Salesforce etc.) zurück in Google Ads und Meta. Damit optimiert die Plattform auf tatsächlichen Umsatz statt auf Formulareinsendungen. Für B2B-Unternehmen ist das oft die wirkungsvollste Einzelmaßnahme.' },
        { q: 'Arbeiten Sie mit jedem CRM?', a: 'Mit den meisten gängigen Systemen: HubSpot, Salesforce, Pipedrive, Zoho, und auch mit maßgeschneiderten Lösungen. Wir benötigen Lesezugriff auf die abgeschlossenen Deals und ein definiertes Event für den Conversion-Import.' },
      ],
    },
    'creative': {
      metaTitle: 'Creative Production — Video, UGC & Static in Kadenz | pmax',
      metaDesc: 'Ad Creative im Performance-Tempo — UGC, Video und Static in wöchentlichem Volumen. Briefed von Media-Experten, gebaut um zu konvertieren.',
      headline: <>Creative<br />Production.</>,
      deck: 'Ein stetiger Strom an Anzeigen, Landingpages und Videos — gebaut zum Testen, nicht für Awards. Denn das Creative ist die Kampagne.',
      stats: [
        { num: 'wöchentlich', label: 'neue Creative-Varianten in Produktion' },
        { num: 'UGC', label: 'authentische Nutzer-Content-Formate für Meta und TikTok' },
        { num: 'Daten', label: 'jedes Creative-Brief basiert auf Media-Performance-Daten' },
        { num: 'schnell', label: 'Verlierer werden aussortiert, Gewinner werden skaliert' },
      ],
      prose: (
        <>
          <h2>Warum Creative das entscheidende Hebel ist</h2>
          <p>Targeting ist heute weitgehend Commodity. Die großen Plattformen — Meta, TikTok, Google — sind besser als je zuvor darin, die richtigen Menschen zu finden. Was sie nicht können: die richtigen Creatives selbst produzieren. Das Creative ist die Kampagne. Und die meisten Unternehmen produzieren zu wenig davon, zu selten.</p>
          <p>Wir bauen kreative Produktionssysteme, die wöchentlich liefern. Nicht ästhetisch beeindruckend, sondern konversionsstark — briefed von den Menschen, die das Media einkaufen und die Zahlen kennen. UGC-Style-Videos, die authentisch wirken, weil sie es sind. Statische Anzeigen, die in 1,5 Sekunden eine Botschaft vermitteln. Landingpages, die mit der Anzeige eine inhaltliche Einheit bilden.</p>
          <p>Gewinner werden skaliert. Verlierer werden schnell aussortiert — nicht nach Monaten, sondern nach Wochen. Das ist der Rhythmus, den Performance-Marketing heute braucht.</p>
        </>
      ),
      faqs: [
        { q: 'Was ist UGC und warum funktioniert es?', a: 'UGC steht für User Generated Content — Videos oder Bilder, die so wirken, als hätten echte Nutzer sie erstellt, nicht Agenturen. Sie performen auf Meta und TikTok oft besser als hochproduzierte Werbung, weil sie authentischer wirken und dem nativen Feed-Inhalt ähneln. Wir produzieren UGC-Style-Content mit echten Creators oder Brief-basierten Eigenproduktionen.' },
        { q: 'Wie viel Creative brauche ich monatlich?', a: 'Das hängt vom Budget und der Plattform ab. Als Orientierung: Für Meta-Accounts mit €5.000–€20.000 monatlichem Budget empfehlen wir 10–20 neue Creative-Varianten pro Monat. Darunter hat der Algorithmus nicht genug zum Lernen. Darüber beginnt die Produktion Engpässe zu schaffen.' },
        { q: 'Arbeiten Sie mit unseren internen Designern zusammen?', a: 'Ja, gern. Wir können als Creative-Direktion und Brief-Ersteller fungieren, während Ihr Team die Produktion übernimmt. Oder wir liefern alles vollständig — Strategie, Brief, Produktion, Daten-Auswertung. Beides funktioniert; wir passen uns Ihrem Setup an.' },
        { q: 'Gibt es Mindestvolumen für Creative Production?', a: 'Nein. Aber unter einer bestimmten Schwelle macht ein laufendes Creative-Programm wirtschaftlich keinen Sinn. Für kleinere Accounts kann es sinnvoller sein, alle 4–6 Wochen einen Creative-Sprint zu machen statt wöchentlich zu produzieren.' },
      ],
    },
  } as Record<string, ServiceDetail>,

  industries: {
    metaTitle: '10 Branchen-Strategien — digitales Marketing | pmax',
    metaDesc: 'Maßgeschneidertes Digitalmarketing für 10 Branchen: E-Commerce, Immobilien, Gesundheit, Hotellerie, Erneuerbare, Yachting, HR, Einzelhandel, Automotive und Energie.',
    eyebrow: 'Branchen, mit denen wir arbeiten',
    title: <>Dieselbe Methode.<br />Zehn <em>Branchen</em>.</>,
    deck: 'Wir spielen keine Generalisten. In sechs Jahren haben wir tiefe Playbooks für zehn Branchen aufgebaut — jede mit eigenem Kaufzyklus, eigenen Regularien, eigener Wettbewerbsdynamik und eigener Definition eines guten Leads.',
    items: [
      { slug: 'ecommerce', num: '01', badge: 'Am aktivsten', title: 'E-Commerce', deck: 'DTC, Marktplatz und Omni-Channel-Handel. Feed-Optimierung, Performance Max, Paid-Social-Creative — der komplette Umsatz-Stack.', variant: 'is-mint', featured: true },
      { slug: 'real-estate', num: '02', title: 'Immobilien', deck: 'Bewertungs-Lead-Gen, Listing-Portale, CRM-Integration. Agenturen auf Mallorca, in Madrid, Hamburg und Wien.', variant: 'is-slate' },
      { slug: 'healthcare', num: '03', title: 'Gesundheit', deck: 'DTC-Kliniken, Telemedizin und ästhetische Medizin. Regulatorik-bewusste Texte, DSGVO-konformes Tracking, mehrsprachige Patientenreisen.', variant: 'is-outlined' },
      { slug: 'renewables', num: '04', title: 'Erneuerbare Energien', deck: 'Solar, Wärmepumpen und EV-Infrastruktur. Lange Kaufzyklen, technische Käufer, sechsstellige Lead-Werte.', variant: 'is-violet' },
      { slug: 'boating', num: '05', title: 'Yachting & Bootssport', deck: 'Charter, Brokerage und Marinas auf den Balearen und im Mittelmeer. Saisonale Mediaplanung in elf Sprachen.', variant: 'is-yellow' },
      { slug: 'hr', num: '06', title: 'HR & Recruiting', deck: 'B2B-SaaS, Recruiting-Marketing, Employer Branding. LinkedIn ist meist der Leitkanal; alles andere unterstützt ihn.', variant: 'is-pink' },
      { slug: 'retail', num: '07', title: 'Einzelhandel', deck: 'Multi-Location-Einzelhandel. Local Inventory Ads, In-Store-Conversion-Tracking, geo-getargeted Meta und Google.', variant: 'is-blue' },
      { slug: 'automotive', num: '08', title: 'Automotive', deck: 'Neu, gebraucht, EV. Händlergruppen in drei Ländern — mehr Probefahrten ohne mehr Headcount.', variant: 'is-orange' },
      { slug: 'energy', num: '09', title: 'Energie', deck: 'Versorgermarketing, Demand Response, B2B-Energiedienstleistungen. Lange Sales-Cycles, komplexe Value Propositions.', variant: 'is-slate' },
      { slug: 'hospitality', num: '10', title: 'Hotellerie', deck: 'Hotels, Resorts und Ferienvermietung. Direktbuchungen, OTA-Abhängigkeit reduzieren, mehrsprachige Creatives.', variant: 'is-outlined' },
    ],
  },

  industryDetail: {
    ecommerce: {
      metaTitle: 'E-Commerce Marketing — Shopify, DTC & Performance Max | pmax',
      metaDesc: 'Wachstumssystem für DTC-, Marktplatz- und Omni-Channel-Händler — Feed-Optimierung, Performance Max, Paid Social, SEO und KI-Shopping-Sichtbarkeit.',
      headline: <>E-Commerce,<br />der wirklich <em>skaliert</em>.</>,
      deck: 'Ein Wachstumssystem für DTC-, Marktplatz- und Omni-Channel-Händler — aufgebaut auf sauberen Conversion-Daten, margenbewusstem Bidding und Creative-Volumen, das mit dem Algorithmus Schritt hält.',
      stats: [{ num: '42+', label: 'E-Commerce-Marken betreut' }, { num: '€38 M', label: 'verwaltetes Ad-Budget 2025' }, { num: '+365 %', label: 'organischer Monatsumsatz für LEDXpress in 8 Monaten' }, { num: 'DACH', label: 'Hauptmarkt — aber wir skalieren in 14 Länder' }],
      prose: (<><p>Die meisten E-Commerce-Accounts verlieren Geld, ohne es zu wissen. PMax optimiert auf Conversions statt Deckungsbeitrag. Feeds haben veraltete Preise oder fehlende Attribute. Creative-Zyklen sind zu langsam für die Plattform-Algorithmen. Tracking erfasst Bestellungen, nicht Retouren. Jedes dieser Probleme ist behebbar — aber nur, wenn jemand wöchentlich hinschaut.</p><p>Wir bauen E-Commerce-Wachstumssysteme, die auf allen Ebenen ansetzen: Feed-Engineering, das jedem Produkt die richtigen Attribute gibt. Performance Max, das nach Margenstufen getrennt ist, nicht nach Produktkategorien. Paid Social mit dem Creative-Volumen, das Meta und TikTok für echtes Lernen brauchen. SEO, das organischen Traffic aufbaut, während Paid skaliert. Und Tracking, das Rückgaben berücksichtigt und echten Gewinn misst.</p></>),
      faqs: [
        { q: 'Arbeiten Sie mit Shopify oder auch anderen Plattformen?', a: 'Mit Shopify, WooCommerce, Shopware, Magento und maßgeschneiderten Systemen. Für Feed-Optimierung arbeiten wir direkt mit dem Merchant Center und DataFeedWatch oder ähnlichen Tools.' },
        { q: 'Was ist Feed-Optimierung und warum ist sie wichtig?', a: 'Ihr Produktfeed ist die Grundlage für Google Shopping und Performance Max. Fehlende Attribute, unklare Produkttitel oder veraltete Preise senken die Sichtbarkeit direkt. Feed-Optimierung bedeutet, jedem Produkt die Attribute zu geben, die Google braucht, um es im richtigen Moment auszuspielen.' },
        { q: 'Wie gehen Sie mit saisonalen Schwankungen um?', a: 'Durch Budget-Pacing, saisonale Gebotsanpassungen und rechtzeitige Creative-Produktion für Saisonthemen. Für E-Commerce-Kunden planen wir das Jahr voraus und passen Budgets und Creative-Kadenz an bekannte Saisonspitzen an.' },
      ],
    },
    'real-estate': {
      metaTitle: 'Immobilien-Marketing — Bewertungs-Leads & SEO | pmax',
      metaDesc: 'Performance-Marketing für Immobilienmakler — Bewertungs-Lead-Gen, Listing-Portal-SEO und CRM-Integration. Spezialisten auf Mallorca und in Spanien.',
      headline: <>Immobilien&shy;marketing.</>,
      deck: 'Bewertungs-Lead-Gen, Listing-Portale, CRM-Integration. Wir verstehen den Mallorca-Immobilienmarkt und die DACH-Käufer, die auf der Insel suchen.',
      stats: [{ num: '+183 %', label: 'Anruf-Leads für Unisono Luxury Homes' }, { num: 'DE+EN', label: 'Zweisprachige Kampagnen für deutschsprachige Käufer' }, { num: 'CRM', label: 'Lead-Scoring bis zum Notartermin' }, { num: 'Local', label: 'Google Business + Listing-Portal-Optimierung' }],
      prose: (<><p>Der Immobilienmarkt auf Mallorca ist ein Käufermarkt mit langen Entscheidungszyklen und internationalen Kunden. Ein deutsches Paar, das ein Ferienhaus sucht, verhält sich anders als ein spanischer Investor, der ein Renditeobjekt sucht — beide brauchen andere Botschaften, andere Kanäle und andere Nachfolgeketten im CRM.</p><p>Wir bauen Systeme, die jeden dieser Käufertypen ansprechen: deutschsprachige Google-Kampagnen, die auf Kaufabsichtsbegriffe wie „Finca kaufen Mallorca" ausgerichtet sind. SEO-Strukturen, die für lokale und internationale Suchen ranken. CRM-basierte Nurture-Sequenzen, die Interessenten über Wochen warm halten. Und Tracking, das Anfragen nach Lead-Qualität bewertet, nicht nur nach Volumen.</p><p>Immobilienbüros auf Mallorca, die Google Ads, SEO und Paid Social unter einem Retainer bündeln möchten, finden den Full-Service-Ansatz auf unserer <a href="/de/marketing-agentur-mallorca/">Marketing Agentur Mallorca</a> Seite.</p></>),
      faqs: [
        { q: 'Haben Sie Erfahrung mit dem Mallorca-Markt?', a: 'Ja. Unisono Luxury Homes ist einer unserer direkten Kunden auf Mallorca — mit +183 % Anruf-Leads und +138 % organischer Klickrate nach unserem Programm. Wir verstehen den lokalen Markt und die internationalen Käuferprofile, die ihn prägen.' },
        { q: 'Wie funktioniert Bewertungs-Lead-Gen für Immobilienmakler?', a: 'Wir bauen Landingpages für Bewertungsanfragen, die auf gezielten Suchbegriffen basieren, und verbinden sie mit einem CRM-basierten Nurture-System. Wichtig ist, den Lead nicht nur zu generieren, sondern auch zu qualifizieren — Verkaufsabsicht, Zeitrahmen, Preissegment.' },
        { q: 'Betreiben Sie auch internationale Kampagnen für Nicht-Mallorca-Märkte?', a: 'Ja. Wir betreuen Immobilienmakler in Deutschland, Österreich und der Schweiz mit denselben Methoden — regionale SEO-Strukturen, CRM-Integration, mehrsprachige Kampagnen.' },
      ],
    },
    healthcare: {
      metaTitle: 'Healthcare-Marketing — Kliniken, Telemedizin & DTC | pmax',
      metaDesc: 'Performance-Marketing für Gesundheitsmarken — DTC-Kliniken, Telemedizin, ästhetische Medizin. DSGVO-konformes Tracking und mehrsprachige Patientenreisen.',
      headline: <>Healthcare-<br /><em>Marketing</em>.</>,
      deck: 'DTC-Kliniken, Telemedizin und ästhetische Medizin. Regulatorik-bewusste Texte, DSGVO-konformes Tracking, mehrsprachige Patientenreisen.',
      stats: [{ num: 'DSGVO', label: 'konforme Tracking-Infrastruktur auf allen Health-Accounts' }, { num: 'PRIMUNDUS', label: '4.2x mehr qualifizierte Pflegeanfragen in 9 Monaten' }, { num: 'DE+EN+ES', label: 'mehrsprachige Patientenreisen' }, { num: '0', label: 'regulatorische Grenzüberschreitungen — wir kennen die Regeln' }],
      prose: (<><p>Healthcare-Marketing bewegt sich in einem engen regulatorischen Rahmen — besonders in Deutschland und Spanien. Was Sie sagen dürfen und was nicht, unterscheidet sich je nach Fachrichtung, Medium und Zielgruppe. Wir kennen diese Grenzen und bleiben auf der richtigen Seite davon — ohne auf Performance zu verzichten.</p><p>Für DTC-Kliniken bauen wir Patientenreisen, die von der ersten Suchanfrage bis zur Buchung führen. Für Telemedizin-Plattformen skalieren wir Paid Social mit DSGVO-konformer Tracking-Infrastruktur. Für ästhetische Medizin produzieren wir Inhalte, die ehrlich, präzise und ansprechend sind — keine übertriebenen Versprechen, aber klare Botschaften.</p></>),
      faqs: [
        { q: 'Was sind die wichtigsten rechtlichen Einschränkungen für Healthcare-Marketing?', a: 'Das Heilmittelwerbegesetz (HWG) in Deutschland regelt, was gezeigt und behauptet werden darf. Vorher-Nachher-Fotos sind in vielen Fällen verboten, Erfolgsversprechen müssen nachweisbar sein, und bestimmte Fachrichtungen unterliegen strengeren Regeln. Wir kennen diese Grenzen und arbeiten immer mit juristisch abgestimmten Templates.' },
        { q: 'Wie handhaben Sie den Datenschutz für Patienten-Leads?', a: 'Server-seitig. Alle Patientendaten werden über sichere, DSGVO-konforme Server-Infrastruktur verarbeitet — keine pixel-basierten Weitergaben an Meta oder Google ohne explizite Einwilligung. Wir arbeiten mit Data Clean Rooms und aggregierten Matching-Methoden.' },
        { q: 'Betreiben Sie auch internationales Healthcare-Marketing?', a: 'Ja, besonders für Mallorca-Kliniken mit internationalen Patienten — mehrsprachige Kampagnen auf Deutsch, Englisch und Spanisch, SEO für medizinstudentische Fachbegriffe und Patientenreisen in allen drei Sprachen.' },
      ],
    },
    renewables: {
      metaTitle: 'Erneuerbare-Energie-Marketing — Solar, EV & Wärmepumpen | pmax',
      metaDesc: 'Digitalmarketing für Solar, Wärmepumpen und EV-Marken. Lange Kaufzyklen, technische Käufer, sechsstellige Lead-Werte — für den vollen Funnel gebaut.',
      headline: <>Erneuerbare<br /><em>Energien</em>.</>,
      deck: 'Solar, Wärmepumpen und EV-Infrastruktur. Lange Kaufzyklen, technische Käufer, sechsstellige Lead-Werte — wir sind auf den vollen Weg eingestellt.',
      stats: [{ num: '€40 K+', label: 'durchschnittlicher Lead-Wert bei Solar-Installationen' }, { num: '6–18 Mo.', label: 'typischer Kaufzyklus für erneuerbare Energiesysteme' }, { num: 'DE+ES', label: 'DACH- und Iberia-Markt-Expertise' }, { num: 'B2B+B2C', label: 'sowohl Privatkunden als auch gewerbliche Installateure' }],
      prose: (<><p>Der Markt für erneuerbare Energien hat ein Marketing-Problem: lange Kaufzyklen, skeptische Käufer und hohe Investitionswerte machen es schwer, Performance-Metriken sinnvoll zu definieren. Ein Solar-Lead, der heute generiert wird, kauft vielleicht in sechs Monaten — oder gar nicht. Wie misst man das?</p><p>Wir bauen Attribution-Systeme, die den vollen Weg tracken: vom ersten Klick auf eine Google-Anzeige bis zur Unterschrift beim Energieberater. CRM-basierte Offline-Conversions fließen zurück in die Plattformen, sodass die Algorithmen auf echte Abschlüsse optimieren, nicht auf Formulareinsendungen. Für technisch versierte Käufer produzieren wir Inhalte, die wirklich informieren — keine Greenspeak-Versprechen, sondern Fakten über Amortisationszeiten, Einspeisevergütungen und technische Spezifikationen.</p></>),
      faqs: [
        { q: 'Wie messen Sie Erfolg bei so langen Sales-Cycles?', a: 'Durch CRM-Integration und Offline-Conversion-Imports. Wir definieren mehrere Conversion-Punkte — erste Anfrage, Beratungsgespräch, Angebot, Abschluss — und tracken alle zurück zur ursprünglichen Marketingquelle. Das erlaubt echte Attributionsmodelle auch bei 6–18-monatigen Cycles.' },
        { q: 'Welche Kanäle funktionieren am besten für Solar-Marketing?', a: 'Google Ads für High-Intent-Suchen wie „Solaranlage installieren [Stadt]". SEO für informationelle Anfragen über Kosten und Amortisation. Meta und YouTube für Awareness und Remarketing. LinkedIn für B2B-Installateure und gewerbliche Kunden. Die richtige Mischung hängt von Ihrem Ticket-Size und Zielmarkt ab.' },
        { q: 'Betreiben Sie auch Kampagnen auf Mallorca für Solar?', a: 'Ja. Der balearische Markt hat besondere Merkmale — hohe Sonnenintensität, Inselstrompreis und eine mixte internationale Zielgruppe. Wir betreiben mehrsprachige Kampagnen für Mallorca-Solar-Unternehmen auf Deutsch, Englisch und Spanisch.' },
      ],
    },
    boating: {
      metaTitle: 'Yachting & Bootssport Marketing | pmax',
      metaDesc: 'Mehrsprachiges Performance-Marketing für Yacht-Charter, Brokerage und Marinas. Saisonale Mediaplanung im Mittelmeer in 11 Sprachen.',
      headline: <>Yachting &<br /><em>Bootssport</em>.</>,
      deck: 'Charter, Brokerage und Marinas auf den Balearen und im Mittelmeer. Saisonale Mediaplanung in elf Sprachen.',
      stats: [{ num: '11', label: 'Sprachen in aktiven Yachting-Kampagnen' }, { num: 'Apr–Okt', label: 'Hauptsaison im Mittelmeer — der entscheidende Buchungszeitraum' }, { num: '€200 K+', label: 'durchschnittliche Buchungswerte bei Luxus-Charter-Kampagnen' }, { num: 'Mallorca', label: 'unser Heimatmarkt, mit direkten lokalen Kontakten' }],
      prose: (<><p>Das Yachting-Geschäft hat ein besonderes Timing-Problem: Die Buchungen konzentrieren sich auf einen engen Zeitraum, aber die Entscheidungen fallen oft Monate im Voraus. Wer im März nicht sichtbar ist, verliert die Sommersaison. Gleichzeitig kommen Kunden aus Deutschland, Großbritannien, Russland, dem Nahen Osten — alle mit anderen Sprachen und anderen Buchungsgewohnheiten.</p><p>Wir planen Yachting-Kampagnen auf Basis des Buchungskalenders, nicht auf Basis von Jahresdurchschnitten. Creatives für Frühbucher-Awareness im Februar. Performance-Kampagnen für Last-Minute-Buchungen im Juli. Remarketing für die Stammkunden, die letztes Jahr gebucht haben. Mehrsprachige Landingpages, die in der Sprache des Kunden überzeugen.</p></>),
      faqs: [
        { q: 'In wie vielen Sprachen können Sie Yachting-Kampagnen betreiben?', a: 'Aktiv und effektiv in Englisch, Deutsch, Spanisch, Französisch und Russisch. Für weitere Sprachen arbeiten wir mit muttersprachlichen Textern zusammen. Die Übersetzung allein reicht nicht — Buchungsverhalten und bevorzugte Kanäle unterscheiden sich je nach Markt.' },
        { q: 'Was ist der beste Kanal für Yacht-Charter-Buchungen?', a: 'Für Direktbuchungen ist Google Ads der stärkste Kanal. Für Awareness und Inspiration sind Instagram und YouTube besonders effektiv. E-Mail-Marketing für Stammkunden hat oft den höchsten ROI. Die richtige Mischung hängt von Ihrer Bootsgröße und Preissegment ab.' },
        { q: 'Arbeiten Sie auch mit Charter-Plattformen wie Click & Boat oder YachtCharterFleet?', a: 'Ja. Wir optimieren sowohl den Direktbuchungskanal als auch die Präsenz auf den großen Charter-Portalen — Listings, Bewertungen, Preisstrategie. Direktbuchungen haben höhere Margen, aber Portale bringen Volumen. Beides gehört zur Strategie.' },
      ],
    },
    hr: {
      metaTitle: 'HR & Recruiting Marketing — LinkedIn & Employer Brand | pmax',
      metaDesc: 'LinkedIn Demand Generation für HR-Tech, Recruiting-Plattformen und große Arbeitgeber. CRM-Lead-Scoring, Offline-Conversions und Employer-Brand-Content.',
      headline: <>HR &<br /><em>Recruiting</em>.</>,
      deck: 'B2B-SaaS, Recruiting-Marketing, Employer Branding. LinkedIn ist meist der Leitkanal; alles andere unterstützt ihn.',
      stats: [{ num: 'LinkedIn', label: 'primärer Kanal für HR-Tech und Recruiting-Marketing' }, { num: 'CRM', label: 'Lead-Scoring bis zum SAL — nicht nur MQL' }, { num: 'B2B', label: 'komplexe Sales-Cycles mit mehreren Entscheidern' }, { num: '+312 %', label: 'qualifizierte Event-Anmeldungen für einen VC-Investor via LinkedIn' }],
      prose: (<><p>HR-Tech und Recruiting-Marketing sind B2B-Kategorien mit langen Entscheidungszyklen und mehreren Stakeholdern. Der HR-Manager will eine andere Botschaft als der CFO, der das Budget freigibt. Gleichzeitig ist der Markt hart umkämpft — viele Anbieter, ähnliche Versprechen, wenig Differenzierung.</p><p>Wir bauen LinkedIn-Programme, die auf echte Kaufabsicht optimieren — nicht auf LinkedIn-Metriken wie Impressionen oder Follower-Wachstum. Conversation Ads für Direktansprache. Content-Anzeigen für Thought Leadership. CRM-Integration, die MQLs mit dem SAL-Outcome verknüpft, damit LinkedIn auf abgeschlossene Deals lernt, nicht auf ausgefüllte Formulare.</p></>),
      faqs: [
        { q: 'Warum ist LinkedIn für HR-Marketing besser als andere Kanäle?', a: 'LinkedIn hat die präziseste Berufs- und Unternehmens-Targeting-Option aller Plattformen. Sie können nach Jobtitel, Unternehmensgröße, Branche und Seniorität targeten — und damit genau die People-Leaders, HR-VPs oder Talent-Acquisition-Manager erreichen, die Ihre Entscheider sind.' },
        { q: 'Was ist der Unterschied zwischen MQL und SAL, und warum ist es wichtig?', a: 'MQL (Marketing Qualified Lead) ist ein Lead, der Marketingkriterien erfüllt — z.B. ein ausgefülltes Formular. SAL (Sales Accepted Lead) ist ein Lead, den der Vertrieb als qualifiziert bestätigt hat. Die meisten Marketing-Programme optimieren auf MQLs; die besten auf SALs oder sogar auf Closed Won. Das verändert, welche Kampagnen wirklich skaliert werden.' },
        { q: 'Betreiben Sie auch Employer Branding?', a: 'Ja. Employer Branding auf LinkedIn bedeutet: authentischen Content von echten Mitarbeitern, gezielte Sponsored Content-Kampagnen für relevante Kandidaten-Segmente, und Retargeting für Personen, die die Karriereseite besucht haben. Wir messen Employer Branding an Bewerbungsqualität, nicht an Follower-Zahlen.' },
      ],
    },
    retail: {
      metaTitle: 'Multi-Location Retail Marketing — Local Inventory Ads | pmax',
      metaDesc: 'Performance-Marketing für Filialbetriebe. Local Inventory Ads, In-Store-Conversion-Tracking, geo-getargeted Meta und Google über 60+ Standorte.',
      headline: <>Einzelhandel.</>,
      deck: 'Multi-Location-Einzelhandel. Local Inventory Ads, In-Store-Conversion-Tracking, geo-getargeted Meta und Google.',
      stats: [{ num: '60+', label: 'Franchise-Standorte im Luxaflex-Netzwerk koordiniert' }, { num: '+184 %', label: 'Filialbesuche netzwerkweit' }, { num: 'LIA', label: 'Local Inventory Ads für aktuelle Produktverfügbarkeit' }, { num: 'Geo', label: 'standortgenaue Aussteuerung auf Filialeinzugsgebiete' }],
      prose: (<><p>Multi-Location-Einzelhandel hat andere Marketing-Probleme als E-Commerce: Kunden suchen lokal, kaufen in der Filiale, und das Tracking endet oft an der Ladentür. Wir schließen diese Lücke mit In-Store-Conversion-Tracking, das Filialbesuche mit Kampagnen verknüpft.</p><p>Für Filialnetze mit 10+ Standorten bauen wir zentralisierte Performance-Marketing-Systeme mit lokaler Aussteuerung: Google Local Campaigns, Local Inventory Ads mit echten Bestandsdaten, und Meta-Kampagnen, die nach Standort-Einzugsgebieten getrennt sind. Jede Filiale bekommt das richtige Budget auf Basis ihres Potenzials, nicht auf Basis historischer Gewohnheiten.</p></>),
      faqs: [
        { q: 'Was sind Local Inventory Ads und wie funktionieren sie?', a: 'Local Inventory Ads zeigen Produktverfügbarkeit in der nächstgelegenen Filiale direkt in den Google-Suchergebnissen. Kunden sehen, ob das Produkt, das sie suchen, in ihrer Nähe auf Lager ist — was die Filialbesuche signifikant steigert. Voraussetzung ist ein aktuell gehaltener Local Inventory Feed.' },
        { q: 'Wie messen Sie Filialbesuche aus Online-Kampagnen?', a: 'Über Google Store Visits, die auf Basis von Google-Account-Daten und GPS-Signalen modelliert werden. Für genauere Daten setzen wir Point-of-Sale-Integration oder dedizierte Einlösecodes ein, die Kampagnen direkt mit Käufen verknüpfen.' },
        { q: 'Wie handhaben Sie Budgetverteilung über viele Standorte?', a: 'Wir nutzen standortbasierte Biddingregeln und Performance-Daten pro Filiale. Standorte mit höherem Umsatzpotenzial erhalten proportional mehr Budget. Wir empfehlen, von einer gleichmäßigen Verteilung wegzukommen — nicht alle Standorte haben dasselbe Marktpotenzial.' },
      ],
    },
    automotive: {
      metaTitle: 'Automotive-Marketing — Neu, Gebraucht & EV | pmax',
      metaDesc: 'Performance-Marketing für Automobilhersteller, Händlergruppen und EV-Marken. Brand-Lift-Studien, Händlernetzwerk-Konsolidierung und Probefahrt-Lead-Gen.',
      headline: <>Automotive<br /><em>Marketing</em>.</>,
      deck: 'Neu, gebraucht, EV. Händlergruppen in drei Ländern — mehr Probefahrten ohne mehr Headcount.',
      stats: [{ num: '+38 %', label: 'Kaufabsichts-Lift für einen europäischen Automobilhersteller' }, { num: '+22 %', label: 'Markenbekanntheit nach Meta-Brand-Kampagne' }, { num: '3', label: 'Länder in einer koordinierten Händlergruppen-Kampagne' }, { num: 'EV', label: 'Spezialprogramme für Elektrofahrzeug-Hersteller und -händler' }],
      prose: (<><p>Automobilmarketing spannt sich von Markenbekanntheit bis zum Probefahrt-Lead — ein Funnel, der oft Monate dauert und mehrere Touchpoints umfasst. Die Herausforderung: jeder Kanal misst anders, jeder Händler will eigene Zahlen, und der Hersteller will Konsistenz über das gesamte Netz.</p><p>Für Händlergruppen bauen wir zentralisierte Systeme mit lokaler Aussteuerung: Modell-spezifische Kampagnen auf Händlerebene, Brand-Keyword-Schutz über das gesamte Netz, und gemeinsames Attribution-System, das den Weg vom ersten Impression bis zur Probefahrt-Buchung trackt. Für Hersteller konzipieren und messen wir Brand-Kampagnen mit Brand-Lift-Studien — echte Messung, keine angenommene Wirkung.</p></>),
      faqs: [
        { q: 'Wie funktionieren Brand-Lift-Studien?', a: 'Brand-Lift-Studien messen die Wirkung von Brand-Kampagnen durch Umfragen: Nutzer, die der Kampagne ausgesetzt waren, werden mit einer Kontrollgruppe verglichen, die sie nicht gesehen hat. Gemessen wird Markenbekanntheit, Kaufabsicht und Ad Recall. Meta, YouTube und LinkedIn bieten native Brand-Lift-Messungen an.' },
        { q: 'Wie koordinieren Sie Marketing über ein Händlernetz?', a: 'Durch zentralisierte Kampagnen-Management auf Markenebene mit lokalen Budget-Slots für einzelne Händler. Standardisierte Creative-Templates, die lokal angepasst werden. Gemeinsames Reporting, das sowohl Netz-KPIs als auch Einzelhändler-Performance zeigt.' },
        { q: 'Haben Sie Erfahrung mit EV-Marketing?', a: 'Ja. EV-Marketing hat besondere Herausforderungen: Reichweiten-Angst, Ladeinfrastruktur-Fragen, höhere Preispunkte und eine Käuferschaft, die intensiv recherchiert. Wir haben Kampagnen für EV-Händler und -hersteller gefahren und kennen die Botschaften, die konvertieren.' },
      ],
    },
    energy: {
      metaTitle: 'Energie & Versorger Marketing — B2B SEO & Search | pmax',
      metaDesc: 'B2B-Digitalmarketing für Energieversorger. Lange Kaufzyklen, CRM-Attribution, LinkedIn Demand Generation und technischer Content.',
      headline: <>Energie &<br /><em>Versorger</em>.</>,
      deck: 'Versorgermarketing, Demand Response, B2B-Energiedienstleistungen. Lange Sales-Cycles, komplexe Value Propositions.',
      stats: [{ num: '5.2x', label: 'mehr Sales-Qualified Leads für einen deutschen Versorger in 12 Monaten' }, { num: '−34 %', label: 'Kosten pro SQL nach CRM-Offline-Conversion-Integration' }, { num: '12 Mo.', label: 'typischer Programmzeitraum' }, { num: 'B2B', label: 'fokussiert auf Geschäftskunden und Industrieanlagen' }],
      prose: (<><p>Energieversorger und B2B-Energiedienstleister haben Marketingprobleme, die Standardlösungen nicht lösen. Kaufzyklen von 12+ Monaten machen Standard-Attribution sinnlos. Technische Entscheider wollen keine Hochglanzversprechen, sondern belastbare Zahlen. Und der Wettbewerb ist oft nur bedingt differenzierbar — alle bieten Strom oder Gas an.</p><p>Wir bauen B2B-SEO-Programme, die auf den tatsächlichen Recherchepfad von Energie-Entscheidern ausgerichtet sind. Content, der echte technische Fragen beantwortet. CRM-Integration, die den Weg vom ersten Content-Konsum bis zum Vertragsabschluss trackt. LinkedIn-Kampagnen, die technische Buying-Center-Mitglieder ansprechen — nicht Einzelpersonen, sondern Entscheider-Gruppen.</p></>),
      faqs: [
        { q: 'Wie messen Sie Marketing-Wirkung bei 12+ monatigen Sales-Cycles?', a: 'Durch CRM-Integration und Mehrstufen-Attribution. Wir definieren Micro-Conversions auf dem Weg zum Abschluss — z.B. Content-Downloads, Webinar-Teilnahmen, Anfragen — und tracken jeden Schritt zurück zur Kampagne. So sehen Sie frühzeitig, welche Kanäle qualifizierte Opportunities generieren.' },
        { q: 'Welche Rolle spielt SEO im B2B-Energie-Marketing?', a: 'Eine große. Energie-Entscheider recherchieren intensiv vor Kaufentscheidungen — technische Whitepapers, Vergleiche, Fallstudien. SEO, das auf informationelle Anfragen in der frühen Recherchephase abzielt, generiert qualifizierte Touchpoints lange vor dem ersten Vertriebsgespräch.' },
        { q: 'Betreiben Sie auch internationale Energie-Kampagnen?', a: 'Ja. Besonders für den DACH-Markt und Iberia haben wir aktive Programme. Wir kennen die regulatorischen Unterschiede zwischen den Märkten und passen Botschaften und Kanäle entsprechend an.' },
      ],
    },
    hospitality: {
      metaTitle: 'Hotel & Hotellerie Marketing — Direktbuchungen & OTA | pmax',
      metaDesc: 'Performance-Marketing für Hotels und Resorts mit Fokus auf Direktbuchungen. OTA-Abhängigkeit reduzieren, Google Hotel Ads, Meta, mehrsprachige Creatives.',
      headline: <>Hotellerie<br /><em>Marketing</em>.</>,
      deck: 'Hotels, Resorts und Ferienvermietung. Direktbuchungen, OTA-Abhängigkeit reduzieren, mehrsprachige Creatives.',
      stats: [{ num: '+52 %', label: 'Direktbuchungen für ein Mallorca-Hotel in 11 Wochen' }, { num: 'Google', label: 'Hotel Ads als Direktbuchungskanal neben OTAs' }, { num: 'OTA', label: 'Abhängigkeit reduzieren — 30 % OTA-Provision einsparen' }, { num: 'DE+EN+ES', label: 'Gäste aus drei Märkten mit drei Sprachen erreichen' }],
      prose: (<><p>Booking.com und Expedia nehmen 20–30 % Provision auf jede Buchung. Das ist kein Geheimnis — aber die meisten Hotels haben keine Alternative aufgebaut. Direktbuchungen sind günstiger, ermöglichen direkte Gästekommunikation und schaffen Stammkunden-Loyalität, die OTAs nie liefern können.</p><p>Wir bauen Direktbuchungsprogramme für Hotels: Google Hotel Ads, die neben OTA-Listings erscheinen und oft günstiger konvertieren. Meta-Kampagnen mit saisonalen Botschaften in der Sprache des Gastes. Remarketing für Seitenbesucher, die noch nicht gebucht haben. E-Mail-Programme für bestehende Gäste. Und Tracking, das Direktbuchungen gegen OTA-Buchungen stellt — damit Sie die echte Kosten-pro-Buchung vergleichen können.</p></>),
      faqs: [
        { q: 'Was sind Google Hotel Ads und wie funktionieren sie?', a: 'Google Hotel Ads zeigen Ihr Hotel direkt in der Google-Suche mit Preisen und Verfügbarkeit — neben OTA-Angeboten. Sie zahlen entweder per Klick oder als Provision auf abgeschlossene Buchungen. Hotels mit eigenem Buchungssystem können direkt konkurrieren, oft mit besseren Preisen als die OTAs.' },
        { q: 'Wie stark kann ich OTA-Abhängigkeit realistisch reduzieren?', a: 'In unserer Erfahrung können Hotels innerhalb von 6–12 Monaten ihren Direktbuchungsanteil von typischen 20–30 % auf 40–55 % steigern. Das ist kein OTA-Ausstieg, aber eine signifikante Verbesserung der Margen und der Gästebeziehung.' },
        { q: 'Haben Sie Erfahrung mit Hotels auf Mallorca?', a: 'Ja. Einer unserer Kunden, Mar y Roca auf Mallorca, steigerte seine Direktbuchungen um 52 % in 11 Wochen. Wir kennen den Mallorca-Hotelmarkt, die saisonalen Buchungsmuster und die deutschen, britischen und spanischen Gästesegmente.' },
      ],
    },
  } as Record<string, IndustryDetail>,

  cases: {
    metaTitle: 'Referenzen — digitale Marketing-Ergebnisse | pmax',
    metaDesc: '10 Fallstudien: +365 % SEO-Umsatz, −93 % Kosten pro Lead, +307 % Anmeldungen. Echte Ergebnisse aus E-Commerce, Immobilien, SaaS, Einzelhandel und mehr.',
    eyebrow: 'Ausgewählte Referenzen · 2024–2026',
    title: <>Echte <em>Zahlen</em><br />von echten Kunden.</>,
    deck: 'Zehn Projekte, bei denen die richtige kleine Änderung das Unternehmen bewegt hat. Wir zeigen, was wir gebaut haben, was funktioniert hat — und, wo es nützlich ist, was nicht.',
    allKicker: 'Alle Referenzen · 2024–2026',
    allTitle: 'Zehn Projekte.',
    seeServices: 'Alle Leistungen →',
    promoEyebrow: 'Ähnliche Ergebnisse gewünscht?',
    promoHeadline: 'Erzählen Sie uns, was Sie aufbauen wollen.',
    promoDeck: 'Wir schauen auf Ihre Zahlen, Ihre Mitbewerber und Ihre Kategorie — und sagen Ihnen ehrlich, ob wir das richtige Team sind.',
    promoBtn: 'Projekt starten',
    items: [
      { slug: 'unisono', stamp: 'MAI 2026', kicker: 'Luxus-Immobilien · Villenvermietung · Mallorca', title: 'Unisono Luxury Homes: +138 % CTR, +183 % Anruf-Leads — ein Multi-Channel-Programm', deck: 'SEO, Google Ads, Microsoft Ads und Webentwicklung als wöchentliches Programm — für eine unabhängige Luxus-Villa-Marke in einer Kategorie, die von internationalen Portalen dominiert wird.', result: { num: '+183 %', label: 'Anruf-Leads YoY' }, variant: 'is-pink' },
      { slug: 'imero', stamp: 'APR 2026', kicker: 'SaaS · Wein- & Spirituosen-Compliance', title: 'IMERO e-label: −60 % CPC und +307 % Anmeldungen durch Google Ads Rebuild', deck: 'Smart Bidding, Display + YouTube-Expansion und Landingpage-Arbeit — aus Google Ads eine Anmeldemaschine für ein reguliertes SaaS über 11 Sprachen.', result: { num: '+307 %', label: 'Anmeldungen YoY' }, variant: 'is-yellow' },
      { slug: 'ledxpress', stamp: 'MRZ 2026', kicker: 'E-Commerce · LED-Beleuchtung · DACH', title: 'LEDXpress: +365 % Umsatz durch SEO in acht Monaten', deck: 'Ein vollständiger SEO-Neuaufbau für einen europäischen LED-Onlineshop — Wachstum von der Paid-Ads-Tretmühle in compoundierenden organischen Traffic verlagert.', result: { num: '+365 %', label: 'Monatsumsatz, 8 Monate' }, variant: 'is-mint' },
      { slug: 'gabionas', stamp: 'JAN 2026', kicker: 'E-Commerce · Garten & Outdoor', title: 'Gabiona: durchschnittlicher Bestellwert +41 %, ROAS 6,8x', deck: 'Google Shopping nach Marge neu aufgebaut, kombiniert mit Remarketing, das die lohnenden Warenkörbe zurückgewinnt — nicht jeden.', result: { num: '+41 %', label: 'Durchschnittlicher Bestellwert' }, variant: 'is-violet' },
      { slug: 'primundus', stamp: 'DEZ 2025', kicker: 'Gesundheit · Regionale Pflege', title: 'PRIMUNDUS: regionales SEO steigerte Anfragen auf 4,2x in neun Monaten', deck: 'Eine Local-First-SEO-Strategie für einen deutschen Pflegeanbieter — stadtweise Seiten, Vertrauenssignale und Inhalte, die wirklich helfen.', result: { num: '4,2x', label: 'Qualifizierte Pflegeanfragen' }, variant: 'is-pink' },
      { slug: 'preo', stamp: 'OKT 2025', kicker: 'B2B SaaS · Software-Wiederverkauf', title: 'PREO Software AG: Brand-Suchanfragen in zwölf Monaten verdreifacht', deck: 'Ein B2B-SEO-Programm für einen Kategorie-Schöpfer: nicht „für Keywords ranken", sondern „der Name werden, den Käufer eintippen".', result: { num: '3,1x', label: 'Branded Search Volume' }, variant: 'is-yellow' },
      { slug: 'energy-utility', stamp: 'JUL 2025', kicker: 'Energie · B2B-Versorger', title: 'B2B-Energieversorger: 5,2x mehr Sales-Qualified Leads aus der organischen Suche', deck: 'Ein geduldiges, technisches SEO-Programm für einen deutschen Energieversorger — für Käufer gebaut, die zwölf Monate recherchieren, bevor sie etwas unterschreiben.', result: { num: '5,2x', label: 'Sales-Qualified Leads' }, variant: 'is-blue' },
      { slug: 'vc-investor', stamp: 'MAI 2025', kicker: 'Finance · Venture Capital', title: 'VC-Investor: 312 % mehr qualifizierte Event-Anmeldungen via LinkedIn', deck: 'LinkedIn-Marketing für einen Venture-Capital-Fonds — Awareness, Consideration und eine einzige hochwertige Conversion: Gründer, die sich für Invitation-Only-Events anmelden.', result: { num: '+312 %', label: 'Qualifizierte Event-Anmeldungen' }, variant: 'is-mint' },
      { slug: 'automotive', stamp: 'FEB 2025', kicker: 'Automotive · Brand', title: 'Automobilhersteller: Brand-Awareness-Kampagne steigerte Kaufabsicht um 38 %', deck: 'Eine Meta + Instagram-Brand-Kampagne für einen großen europäischen Automobilhersteller — mit Brand-Lift-Studie, die bewies, dass sie funktioniert hat.', result: { num: '+38 %', label: 'Kaufabsichts-Lift' }, variant: 'is-slate' },
      { slug: 'luxaflex', stamp: 'NOV 2024', kicker: 'Einzelhandel · Sonnenschutz', title: 'Luxaflex Händlernetz: Performance-Marketing über 60+ Franchisenehmer skaliert', deck: 'Ein Multi-Location-Performance-Marketing-System für das europäische Luxaflex-Händlernetz — zentrale Qualitätssicherung, lokale Relevanz.', result: { num: '+184 %', label: 'Filialbesuche netzwerkweit' }, variant: 'is-orange' },
    ],
  },

  blog: {
    metaTitle: 'Journal — Leitfäden zu digitalem Marketing | pmax',
    metaDesc: '18 praxisnahe Leitfäden zu Google Ads, Meta, SEO, KI-Sichtbarkeit und Analytics. Geschrieben von den Menschen, die die Kampagnen betreiben.',
    eyebrow: 'Das Journal',
    title: <>Klartext über<br /><em>digitales Marketing</em>.</>,
    deck: 'Praxisnotizen, Playbooks und Meinungen. Geschrieben von den Menschen, die die Arbeit machen, für die Menschen, die die Arbeit machen. Kein Content-Marketing-Bullshit.',
    langNotice: 'Dieser Artikel ist auf Englisch verfügbar.',
    readInEn: 'Auf Englisch lesen →',
    promoEyebrow: 'Thema vorschlagen',
    promoHeadline: <>Kein Newsletter.<br />Aber fragen Sie gern.</>,
    promoDeck: 'Wir betreiben keine E-Mail-Liste — aber wenn Sie ein Thema haben, über das wir schreiben sollen, lassen Sie es uns wissen.',
    promoBtn: 'Thema einreichen',
    posts: [
      { slug: 'pinterest-ads-home-interiors-local-2026', title: 'Pinterest Ads 2026: wer sie wirklich schalten kann — und wer sollte.', deck: 'Für welche Branchen Pinterest Ads funktionieren, wie Retargeting wirklich funktioniert und warum ein lokales Rollo-Studio dem Sweet Spot der Plattform näher ist als die meisten E-Commerce-Shops.' },
      { slug: 'google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026', title: 'Google Ads vs. Meta Ads vs. TikTok Ads für E-Commerce 2026.', deck: 'Kein Marketing-Lehrbuch. Keine Hersteller-Folien. Ein brutal praktischer Side-by-Side-Vergleich, wo jede Plattform 2026 wirklich Geld einbringt — und wo sie still und leise Budget verbrennt.' },
      { slug: 'how-to-get-mentioned-by-chatgpt', title: 'So wird Ihr Unternehmen von ChatGPT, Perplexity und Gemini empfohlen', deck: 'Ein verständlicher Leitfaden zur KI-Sichtbarkeit 2026 — was es ist, warum es wichtig ist und fünf Maßnahmen für diesen Monat.' },
      { slug: 'performance-max-2026', title: 'Performance Max 2026: Was sich geändert hat — und was wir jetzt tun', deck: 'Ein praktischer Überblick über die sieben Performance-Max-Einstellungen, die wir bei jedem neuen Kunden-Account zuerst ändern.' },
      { slug: 'tracking-setup-guide', title: 'Ein klarer Leitfaden zum richtigen Aufbau von Marketing-Tracking', deck: 'Warum die meisten Dashboards ein bisschen lügen, wo die Abweichung herkommt und wie Sie Tracking so aufbauen, dass die Zahlen stimmen.' },
      { slug: 'meta-creative-volume', title: 'Meta sagt, Creative ist 56 % der Performance. So produzieren Sie wirklich so viel.', deck: 'Ein wöchentliches Creative-Produktionssystem, das läuft, ohne Ihre Designer zu überlasten.' },
      { slug: 'google-ads-mallorca', title: 'Google Ads gewinnen, wenn Ihre Kunden auf Mallorca leben und Ihre Mitbewerber nicht', deck: 'Geo-Targeting, Sprachsignale, lokales Conversion-Tracking und die kleinen Einstellungen, die einen großen Unterschied machen.' },
      { slug: 'shopify-seo-2026', title: 'Shopify SEO 2026: Die acht Änderungen, die sich lohnen', deck: 'Die meisten Shopify-Shops verlieren standardmäßig SEO-Wert. Die wenigen Theme- und Struktur-Fixes, die den organischen Traffic am stärksten bewegen.' },
      { slug: 'b2b-linkedin-playbook', title: 'Das B2B-LinkedIn-Playbook, das wir an jeden neuen SaaS-Kunden liefern', deck: 'Conversation Ads, Lead Scoring, CRM-basierte Offline-Conversions und der Creative-Rhythmus, der einen B2B-Account frisch hält.' },
      { slug: 'cookieless-tracking', title: 'Cookieless Tracking ist da. Die meisten Marketer sind nicht bereit.', deck: 'Was Consent Mode v2, server-seitiges Tagging und das Ende von Third-Party-Cookies für Ihre Conversion-Daten bedeuten.' },
      { slug: 'hotel-direct-bookings', title: 'Wie ein Mallorca-Hotel Direktbuchungen in 11 Wochen um 52 % steigerte', deck: 'Eine kurze Fallstudie darüber, was Mar y Roca tat, um die Abhängigkeit von Booking.com zu durchbrechen.' },
      { slug: 'real-estate-lead-gen', title: 'Immobilien-Lead-Gen 2026: Warum Ihr Formular das Problem ist', deck: 'Die meisten Immobilien-Websites verlieren 80 % der kaufbereiten Interessenten am Formular. Fünf Fixes, die funktionieren.' },
      { slug: 'tiktok-organic-paid', title: 'TikToks Organic-Paid-Loop: Was 2026 wirklich funktioniert', deck: 'Die drei TikTok-Content-Muster, die Impressionen generieren, und das Paid-Setup, das wir darüber legen.' },
      { slug: 'solar-marketing-spain', title: 'Solar-Marketing in Spanien: Die unspektakuläre Arbeit, die den Ausschlag gibt', deck: 'Warum die meisten Solar-Installateure auf Meta Geld verlieren — und die Funnel-Struktur, die aus einem €40-Klick eine €6.000-Installation macht.' },
      { slug: 'creative-testing-framework', title: 'Ein Creative-Testing-Framework, das sich wirklich aufbaut', deck: 'Wie man Ad-Creative so testet, dass man eine Bibliothek von Gewinnern aufbaut — keinen Friedhof von Einmal-Launches.' },
      { slug: 'gpt-shopping', title: 'Was „ChatGPT Shopping" für E-Commerce-Marken 2026 bedeutet', deck: 'OpenAI baut still eine Shopping-Schnittstelle in ChatGPT. So stellen Sie sicher, dass Ihre Produkte auftauchen.' },
      { slug: 'ga4-mistakes', title: 'Die sieben GA4-Setups, die wir bei jedem neuen Kunden korrigieren', deck: 'GA4 ist gut. Die meisten GA4-Installationen sind es nicht. Die sieben spezifischen Dinge, die wir in Woche eins immer ändern.' },
      { slug: 'crm-conversion-imports', title: 'Hören Sie auf, auf Formulareinsendungen zu optimieren. Optimieren Sie auf Umsatz.', deck: 'Warum das Importieren von Offline-Conversions aus Ihrem CRM die wirkungsstärkste Einzelmaßnahme ist, die ein B2B-Marketing-Team dieses Jahr ergreifen kann.' },
      { slug: 'yachting-marketing', title: 'Ein Yachting-Charter-Unternehmen vermarkten: ein Acht-Sprachen-, Zwölf-Monats-Problem', deck: 'Wie wir Media für ein Saisongeschäft mit sechsstelligem Durchschnittsbuchungswert und Kunden in drei Zeitzonen planen.' },
      { slug: 'agency-pricing-honest', title: 'Warum wir Festpreise berechnen, keine Prozentsätze des Mediabudgets', deck: 'Eine kurze Notiz über die perversen Anreize, unter denen die meisten Agenturen operieren — und warum wir das nicht tun.' },
    ],
  },

  caseDetail: {
    automotive: {
      metaTitle: 'Jaguar Land Rover — +9,4 % Werbeerinnerung via Meta | pmax',
      metaDesc: 'Brand-Awareness-Kampagne für Jaguar Land Rover auf Facebook und Instagram. +9,4 % Werbeerinnerungslift und −68 % Kosten pro Landingpage-Aufruf über 8 Monate.',
      heroTitle: 'Wie wir die Werbeerinnerung für Jaguar Land Rover um 9,4 % steigerten — und die Kosten pro Landingpage-Aufruf um 68 % senkten.',
      stats: [
        { num: '+9,4 %', label: 'Geschätzter Werbeerinnerungslift' },
        { num: '−8,5 %', label: 'Kosten pro Werbeerinnerungslift (pro Person)' },
        { num: '−68 %', label: 'Kosten pro Landingpage-Aufruf' },
        { num: '2,38 Mrd.', label: 'Monatlich aktive Nutzer auf Meta' },
      ],
      prose: (<>
        <div className="case-brief"><p>Einer der ursprünglichen Allradantrieb-Hersteller — seit 65+ Jahren im Bau robuster, leistungsstarker SUVs — wollte Metas Reichweite nutzen, um bei kaufbereiten Autokäufern über mehrere Modelllinien hinweg präsent zu bleiben. Das Briefing lautete: Awareness. Aber der CMO wollte es sauber gemessen haben — nicht Impressionen und Reichweite, sondern ob die Anzeigen tatsächlich verändert haben, was die Menschen in Erinnerung behielten.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>Das Briefing — Marke messbar machen</h2><p>Mit 2,38 Milliarden monatlich aktiven Nutzern waren Facebook und Instagram die offensichtliche Skalierungsoption für einen SUV-Launch. Die schwierigere Frage war, wie man beweist, dass das Budget wirkte. Wir wählten Ad Recall als primäre KPI — eine Brand-Lift-Kennzahl, die misst, wie einprägsam eine Anzeige für ihr Publikum ist — weil sie der sauberste Frühindikator dafür ist, dass das Creative seinen Job im Feed macht. Kosten pro Landingpage-Aufruf saßen daneben als Effizienz-Plausibilitätsprüfung.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>Die richtigen Fragen stellen, dann testen</h2><p>Die Arbeit begann als Prozess, nicht als Mediaplan. Wir schrieben die Fragen auf, die wirklich zählten, und entwickelten Tests, um sie zu beantworten:</p><ul><li>Welche Inhalte engagiert dieses Publikum bereits auf den organischen Facebook- und Instagram-Seiten von Jaguar Land Rover?</li><li>Welche Anzeigenformate performen besser — Video, Einzelbild, Karussell, dynamische Anzeigen?</li><li>Welche Gebotsoption liefert den günstigsten zuverlässigen Werbeerinnerungslift?</li><li>Wie schneiden interessenbasierte Zielgruppen gegenüber breiteren verhaltensbezogenen im großen Maßstab ab?</li></ul><p>Eine datengetriebene Drittanbieter-Testplattform führte die Experimente durch. Jedes Publikum und Format lief gegen eine Hold-out-Gruppe, damit die Lift-Zahlen verteidigbar und nicht nur richtungsweisend waren.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>Das Creative-System</h2><p>Die Kreativagentur von Jaguar Land Rover produzierte Videos und Fotos. Wir überführten sie in eine funktionierende Anzeigenbibliothek über Facebook Feed, Instagram Feed und Instagram Stories — gebaut, um in den Placements zu performen, in denen Käufer tatsächlich scrollen, nicht nur gut in Deck-Vorschauen aussehen.</p><p>Die Kampagnen zielten auf potenzielle Autokäufer ab 25 Jahren ab, dann verengten wir, sobald sich Zielgruppen bewiesen hatten. Interest-Targeting schichtete Personen mit angrenzenden Interessen hinzu — Outdoor-Sport, Premium-Automotive-Content, Off-Road-Communities — damit das Budget auf Menschen floß, deren Leben zum Produkt passt.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>Automatische Placements, bewusster Split</h2><p>Wir ließen Metas automatische Placements ihre Effizienzarbeit tun, aber das Budget landete am Ende grob 60/40 zugunsten von Facebook — was dem Ort entsprach, wo Werbeerinnerung am günstigsten einzukaufen war. Die Kampagnen fügten sich in Jaguar Land Rovers breiteren integrierten Launch neben TV, Print und Out-of-Home ein — die Brand-Lift-Studie erfasste den kanalübergreifenden Halo-Effekt.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">05</span><h2>Ergebnisse — April bis November 2020</h2><p>Acht Monate Always-on-Awareness- und Engagement-Kampagnen auf Facebook und Instagram, sauber gemessen:</p><ul><li><strong>+9,4 %</strong> geschätzter Werbeerinnerungslift</li><li><strong>−8,5 %</strong> Kosten pro Werbeerinnerungslift (pro Person)</li><li><strong>−68 %</strong> Kosten pro Landingpage-Aufruf</li></ul><p>Der Werbeerinnerungslift war am bedeutsamsten. Er ist die Kennzahl, die beweist, dass eine Markenausgabe Markenarbeit leistet — nicht nur Reichweite kauft, die verschwindet, sobald die Kampagne endet.</p></section>
        <div className="prose-callout"><div className="prose-callout-kicker">Das Fazit</div><p>Brand auf Meta funktioniert nur, wenn jemand jede Woche die richtigen Fragen stellt. Die Plattform gibt gerne ein sechsstelliges monatliches Budget für Impressionen aus, an die sich niemand erinnert. Die Arbeit, die die Werbeerinnerung um 9,4 % hebt, ist die Arbeit, die niemand sieht: wöchentliche Format-Auswertungen, Zielgruppen-Schnitte, Bid-Strategie-Tests, Creative-Refreshes. Nichts davon ist glamourös. Alles davon akkumuliert sich.</p></div>
      </>),
    },
    'energy-utility': {
      metaTitle: 'B2B-Energieversorger — SEO & Paid Search Fallstudie | pmax',
      metaDesc: 'Wie geduldige B2B-Suchstrategie die organischen Impressionen um 31 % steigerte und Paid-Conversions um 52 % erhöhte — für einen deutschen Energieversorger mit Industriekunden.',
      heroTitle: '+31 % organische Impressionen, +52 % Paid-Conversions — was passiert, wenn eine B2B-SEO-Agentur auf einen börsennotierten Energiekonzern trifft.',
      stats: [
        { num: '+31 %', label: 'Organische Impressionen YoY' },
        { num: '+24,4 %', label: 'Verbesserung der durchschnittlichen Rankingposition' },
        { num: '−15 %', label: 'Absprungrate vs. Vorjahr' },
        { num: '+52 %', label: 'Paid-Search-Conversions' },
      ],
      prose: (<>
        <div className="case-brief"><p>Ein börsennotierter deutscher Energieversorger, der Strom und Erdgas an Industriekunden sowie ein Portfolio an B2B-Energiepartnern liefert. Das Briefing umfasste sowohl organische als auch bezahlte Suche — organisch war die schwerere, langsamere, interessantere Hälfte der Aufgabe. Innerhalb einer hochregulierten Branche, mit einer enormen internen Stakeholder-Landschaft und einer Website-Architektur aus Jahren von Fusionen und Rebrandings.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>Der Ausgangspunkt: kein technisches Problem, sondern ein Koordinationsproblem</h2><p>Energieversorger mit Industriekunden haben sehr spezifische Anforderungen an Performance Marketing. Lange Entscheidungszyklen, vergabegeleitete Entscheidungen, regulierte Sprache, vertragsintensiver Kauf. Wir wurden hinzugezogen, um organischen Traffic und qualifizierte Leads zu steigern — lernten aber schnell, dass die technischen Fixes der einfache Teil waren. Die eigentliche Einschränkung war intern: Änderungen in einer regulierten, börsennotierten Organisation werden im Tempo des langsamsten Stakeholders umgesetzt, nicht im Tempo der schnellsten SEO-Empfehlung.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>Die Erkenntnis: „Rom wurde nicht an einem Tag gebaut"</h2><p>Eine vertraute Idee in jedem großen Unternehmen — weniger vertraut für die agilen, kleineren Agenturen, die mit ihnen zusammenarbeiten. Organisches Wachstum für diesen Versorger erforderte mehr als Metadaten-Bereinigung, Mobile-Friendliness-Fixes und Core-Web-Vitals-Korrekturen. Es erforderte Geduld und Beziehungsaufbau genauso wie technisches SEO-Know-how.</p><p>Wir wurden anfangs nicht beauftragt, Content-Änderungen oder On-Page-Optimierung zu empfehlen. Aber jeder gute B2B-SEO-Partner weiß, dass technische Korrektheit allein die Kurve nicht bewegt — guter Content und eine starke User Experience tun es. Also erweiterten wir den Gesprächsumfang, langsam, durch verdienstbasiertes Vertrauen.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>Die Realität: reguliert, börsennotiert, vorsichtig</h2><p>Es klingt einfach. Einige Änderungen an einer Website und die Metriken verbessern sich. In einem börsennotierten Goliath dieser Größe, in einer regulierten Branche, sind die Stakeholder vorsichtig, die Systeme und Prozesse starr, und Veränderungen brauchen Zeit.</p><p>Durch geduldige, konsistente Zusammenarbeit mit vielen internen Stakeholdern begannen Änderungen zu greifen — zunächst langsam, dann in einem gleichmäßigeren Rhythmus, als die Beziehung stärker wurde.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>Die Methodik: Organisch und Paid als eine Einheit</h2><p>Parallel zum SEO-Programm betrieben wir eine B2B-Performance-Marketing-Strategie, die Paid Search auf Google Ads und Bing Ads mit bezahlten LinkedIn- und Xing-Kampagnen kombinierte — den Kanälen, die Beschaffungsentscheider in deutschen Industrieunternehmen tatsächlich nutzen.</p><ul><li>Technisches SEO (Metadaten, Mobile-Friendliness, Core Web Vitals, Schema, interne Verlinkung)</li><li>Content und On-Page-Optimierung, im Laufe der Zeit in den Scope gebracht</li><li>Paid Search auf Google Ads &amp; Bing Ads mit B2B-spezifischer Bid- und Zielgruppenstrategie</li><li>Bezahlte LinkedIn- und Xing-Kampagnen für industrielle Beschaffung und Energieeinkäufer</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">05</span><h2>Das Ergebnis: Charts bewegen, langsam, dann stetig</h2><ul><li><strong>+31 % organische Impressionen YoY</strong> — gezielt aufgebaute Sichtbarkeit in den relevanten Suchanfragen.</li><li><strong>+24,4 % durchschnittliche Rankingposition</strong> — ein struktureller Lift, keine Spitze.</li><li><strong>−15 % Absprungrate</strong> — die On-Page-Arbeit matchte Landingpages mit der Suchintention.</li><li><strong>+52 % Paid-Search-Conversions</strong> — das Paid-Programm verstärkte das organische, ohne es zu kannibalisieren.</li></ul></section>
        <div className="case-callout"><span className="case-callout-kicker">Kundenstimme</span><p>„Wir können nur Positives über die Zusammenarbeit mit pmax berichten. Sie haben Google Ads, Bing und LinkedIn Ads übernommen und kombinierte kanalübergreifende Kampagnen gefahren. Wir sind ein reiner B2B-Energieversorger, also kein einfaches Umfeld. Philipp hat eine sehr sorgfältige Zielgruppenanalyse durchgeführt und wir konnten einige sehr interessante Leads generieren. Die Zusammenarbeit war eine Freude."</p><span className="case-callout-attr">— Marketing-Leitung, B2B-Energieversorger (Deutschland)</span></div>
        <div className="case-takeaway"><span className="case-takeaway-kicker">Was es zum Erfolg gemacht hat</span><p>Ein guter Partner sein bedeutet, viele Hüte zu tragen — viele, die nicht passen, viele, die man nicht gewohnt ist. Es bedeutet, den Anruf um 17:30 Uhr an einem Freitag anzunehmen, eine einstündige Diskussion über etwas zu führen, wofür man kein Briefing hatte, und zu verstehen, dass Menschen in großen Organisationen oft viele Hürden überwinden müssen, um irgendetwas voranzubringen. Geduld, Verständnis und der stetige Aufbau guter Beziehungen. Das ist es, was den Chart bewegt, wenn das Briefing lautet: „Ranke dieses regulierte, börsennotierte, komplexe Unternehmen."</p></div>
      </>),
    },
    gabionas: {
      metaTitle: 'Gabiona — +27 % Google-Ads-Umsatz bei gleichem Budget | pmax',
      metaDesc: 'Google Shopping und dynamisches Remarketing steigerten Gabionas Umsatz um 27 % und den durchschnittlichen Bestellwert um 33 % — über fünf europäische Märkte bei gleichem Budget.',
      heroTitle: '+27 % Umsatz, +33 % durchschnittlicher Bestellwert — bei gleichem Google-Ads-Budget.',
      stats: [
        { num: '+33 %', label: 'Durchschnittlicher Bestellwert YoY' },
        { num: '+27 %', label: 'Google-Ads-Umsatz YoY (gleiches Budget)' },
        { num: '+79 %', label: 'Klicks YoY (gleiches Budget)' },
        { num: '5', label: 'Europäische Märkte, eine Strategie' },
      ],
      prose: (<>
        <div className="case-brief"><p>Gabiona ist ein deutscher Hersteller und Online-Händler von Gabionen-Produkten — Körbe, Zäune, Mauern und Zubehör für Landschaftsbau, Gartengestaltung und Architektur. Sie verkaufen europaweit, aber Deutschland ist der Heimatmarkt und bindet den Großteil der internen Ressourcen. Unser Auftrag umfasste alles außerhalb des Heimatmarktes: die Märkte mit niedrigerer interner Priorität, den schwereren Wirtschaftlichkeiten und demselben Budget wie im Vorjahr.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>Der Ausgangspunkt: schwerere Wirtschaftlichkeiten außerhalb Deutschlands</h2><p>Gabionen europaweit zu verkaufen klingt unkompliziert, bis man sich die operative Realität ansieht. Mehrsprachige Website-Ressourcen waren begrenzt — die meiste Produkttiefe existierte nur auf Deutsch. Der Versand aus Deutschland in andere europäische Länder war langsamer und teurer als moderne Käufer erwarten. Trusted Shops, ein bedeutendes Vertrauenssignal in dieser Kategorie, war nur auf dem Heimatmarkt implementiert.</p><p>Nichts davon lag in unserem Einflussbereich. Das Briefing war daher anders: Mit demselben Budget wie im Vorjahr Umsatz und durchschnittlichen Bestellwert in den Märkten steigern, die wir bespielten — mit Google-Ads-Strategie allein.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>Die zwei Hebel: Google Shopping und dynamisches Remarketing</h2><p>Wir entschieden früh, uns auf zwei Kanäle zu konzentrieren statt das Budget dünn über den gesamten Google-Bestand zu verteilen. Shopping für neue Nachfrage. Dynamisches Remarketing für die Käufer, die Shopping bereits mit der Marke bekannt gemacht hatte.</p><h3>Google Shopping — der primäre Umsatztreiber</h3><p>Smart Shopping war das Arbeitspferd. Wir identifizierten gemeinsam mit der Marke die Produktlinien und Kategorie-Chancen, die die schwerste Budgetzuteilung rechtfertigten — nicht nach Bauchgefühl, sondern durch strukturierte Marktforschung darüber, wo die grenzüberschreitende Nachfrage tatsächlich war.</p><h3>Dynamisches Remarketing — die Lücke schließen</h3><p>Gabionen sind kein Impulskauf. Der Entscheidungszyklus ist lang, der Warenkorb groß, und die meisten Käufer kehren mehrfach zur Website zurück. Dynamisches Remarketing gab uns die Touchpoints, um diese zurückkehrenden Käufer zu den exakten Produkten zurückzubringen, die sie bereits angesehen hatten — nicht generisches Brand-Creative, sondern die tatsächliche SKU. Dort kam der AOV-Lift her.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>Zielgruppenstrategie: auf echtem Nutzerverhalten aufgebaut</h2><p>Um Display-Remarketing wirklich rentabel zu machen, erstellten wir Kundenlisten in Google Analytics, die abbildeten, wo sich jeder Nutzer im Entscheidungszyklus befand — nicht nur „hat die Website in den letzten 30 Tagen besucht". Dann nutzten wir die Marktforschung, um Remarketing-Creative an den Momenten entlang der User Journey zu positionieren, an denen die Intention stieg.</p></section>
        <div className="case-quote"><blockquote>„Wir arbeiten schon seit einer Weile mit dem Team zusammen und sind sehr zufrieden mit den Ergebnissen. Philipp ist ein durchdachter, kenntnisreicher Partner für alles rund um Performance Marketing — weshalb wir die Partnerschaft fortführen."</blockquote><cite>Nelson Vollertsen · Ibendahl &amp; Thomsen GmbH</cite></div>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>Das Ergebnis: mehr Käufe, größere Warenkörbe, gleiche Ausgaben</h2><p>Über das Jahr hinweg, ohne Budgeterhöhung, lieferte die Arbeit drei akkumulierende Dinge:</p><ul><li><strong>+79 % Klicks YoY</strong> — die strukturelle Shopping- und Bidding-Arbeit ließ jeden Euro deutlich mehr Käufer erreichen.</li><li><strong>+27 % Umsatz YoY</strong> — die zusätzlichen Klicks waren kein günstiger Traffic; sie konvertierten.</li><li><strong>+33 % durchschnittlicher Bestellwert YoY</strong> — Remarketing machte seinen Job. Käufer kamen zurück, kauften mehr pro Bestellung.</li></ul></section>
        <div className="case-takeaway"><span className="case-takeaway-kicker">Was es zum Erfolg gemacht hat</span><p>Disziplin über Breite. Smart Shopping als Kern-Revenue-Engine, gespeist mit Marktforschung darüber, wo die echte grenzüberschreitende Chance lag. Dynamisches Remarketing auf den Entscheidungszyklus einer High-Consideration-Kategorie abgestimmt. Zielgruppen aus echtem Nutzerverhalten aufgebaut, nicht aus Plattform-Defaults. Und ein mehrsprachiges Setup, das über jeden Markt hinweg funktionierte.</p></div>
      </>),
    },
    imero: {
      metaTitle: 'IMERO — −60 % CPC und +307 % Anmeldungen via Google Ads | pmax',
      metaDesc: 'Google-Ads-Neuaufbau — Smart Bidding, Display, YouTube und Landingpage-CRO — senkte CPC um 60 % und verdreifachte Anmeldungen für ein reguliertes SaaS in 11 Sprachen.',
      heroTitle: '−60 % CPC, +307 % Anmeldungen — ein Google-Ads-Neuaufbau für ein reguliertes SaaS, in 11 Sprachen.',
      stats: [
        { num: '−59,95 %', label: 'Durchschnittlicher Cost-per-Click' },
        { num: '+306,75 %', label: 'Anmeldungen beim E-Label-Tool' },
        { num: '−62,19 %', label: 'Kosten pro Conversion (Anmeldung)' },
        { num: '11', label: 'Sprachen parallel im Betrieb' },
      ],
      prose: (<>
        <div className="case-brief"><p>IMERO Technologies baut e-label, ein digitales Etikettierungstool, das QR-Code-Etiketten für Nährwert- und Zutatendaten auf Wein und anderen alkoholischen Getränken erzeugt — die regulatorische Schicht, die die EU jetzt von Produzenten verlangt. Ein echtes Produkt, das ein echtes Compliance-Problem löst, in einem Markt, der noch nicht weiß, dass er die Antwort braucht. Unser Auftrag: Google Ads in eine Anmeldemaschine verwandeln.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>Der Ausgangspunkt: ein Account, der auf das Falsche optimierte</h2><p>Als wir den Account übernahmen, waren die Ineffizienzen vertraut aber teuer. Unstrukturiertes Setup. Unklare Kampagnenziele. Unvollständige Keyword-Recherche. Eine Bid-Strategie, die Cost-per-Click anstatt Conversions jagte. Die Plattform tat, was ihr gesagt wurde — günstige Klicks liefern — nicht was das Business brauchte: qualifizierte Anmeldungen für ein Nischen-SaaS-Tool. Unser Ziel: Account restrukturieren, Anzeigenrelevanz steigern, datengetriebene Bid-Strategie für maximale e-label-Anmeldungen einführen.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>Die Methodik: eine datengetriebene Google-Ads-Strategie</h2><p>Fünf parallele Arbeitsstränge, wöchentlich auditiert:</p><ul><li><strong>Google Search priorisiert.</strong> Wir starteten mit Search, um Unternehmen zu erfassen, die aktiv nach digitalen Etikettierungslösungen suchen. Kampagnen nach Kernangebot und Zielgruppe segmentiert.</li><li><strong>Anzeigenrelevanz und Targeting neu aufgebaut.</strong> Anzeigentexte für IMEROs echten Käufer umgeschrieben — Produzenten vor der neuen EU-Anforderung — mit Botschaften, die auf die Suchintention abgestimmt sind.</li><li><strong>Smart Bidding (Target CPA).</strong> Von CPC-Bidding auf Target CPA umgestellt, damit die Plattform auf hochwertige Leads zum richtigen Preis optimiert.</li><li><strong>Display und YouTube-Expansion.</strong> Display und YouTube hinzugefügt — nicht für Vanity-Reichweite, sondern um potenzielle Käufer in der Awareness- und Consideration-Phase zu erreichen.</li><li><strong>Kontinuierliche Optimierung.</strong> Bids wöchentlich angepasst. Gewinnende Keyword-Sets erweitert, verlierende gestrichen. Landingpages iteriert.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>Retargeting und Anzeigenerweiterungen für Sichtbarkeit</h2><p>Die meisten Besucher konvertieren nicht beim ersten Besuch — besonders wenn das Produkt eine Regulierung löst, über die sie gerade erst anfangen zu lesen. Wir starteten Retargeting-Kampagnen für Besucher, die die Website berührt aber nicht konvertiert hatten, und fügten Sitelinks und Callout-Erweiterungen hinzu.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>Das Ergebnis: günstigere Klicks, mehr Anmeldungen, Kategorie-Fußabdruck</h2><ul><li><strong>−59,95 % durchschnittlicher CPC</strong> — gleiche Bids, klügere Plattformsignale.</li><li><strong>+306,75 % Anmeldungen</strong> beim e-label-Tool YoY.</li><li><strong>−62,19 % Kosten pro Conversion</strong> — der Hebel, der den CFO wirklich interessiert.</li><li><strong>~22 % Click-through-Rate</strong> auf Search-Kampagnen — weit über Kategorie-Benchmarks.</li><li><strong>11 Sprachen</strong> parallel im Betrieb, entsprechend IMEROs europäischem Marktfußabdruck.</li></ul></section>
        <div className="case-takeaway"><span className="case-takeaway-kicker">Was es zum Erfolg gemacht hat</span><p>Google Ads als Engineering-Problem behandeln, nicht als Media-Buying-Problem. Struktur neu aufbauen. Bid-Strategie an das eigentliche Geschäftsziel anpassen. Display und YouTube hinzufügen, um einen Käufer zu erreichen, der noch nicht wusste, dass er das Problem hat. Hart retargeten, wöchentlich optimieren, Landingpages fixen, wann immer eine CRO-Chance auftaucht. So wird ein Google-Ads-Account zur Anmeldemaschine.</p></div>
      </>),
    },
    ledxpress: {
      metaTitle: 'LEDXpress — +365 % SEO-Umsatz in 8 Monaten | pmax',
      metaDesc: 'Strukturiertes SEO-Programm steigerte LEDXpress-Umsatz in 8 Monaten um 365 % — technische Grundlagen, intentionsorientierter Content und Paid-Daten-Validierung.',
      heroTitle: <>+365 % Umsatz in 8 Monaten — wie strukturiertes SEO den Channel-Mix von LEDXpress neu aufbaute.</>,
      stats: [
        { num: '+365 %', label: 'Monatliches Umsatzwachstum in 8 Monaten' },
        { num: '+230 %', label: 'Organische Klicks (1.030 → 3.430 / Monat)' },
        { num: '+59 %', label: 'Conversion Rate (1,45 % → 2,30 %)' },
        { num: '+46 %', label: 'Durchschn. Rankingposition (41,6 → 22,3)' },
      ],
      prose: (<>
        <div className="case-brief"><p>LEDXpress ist ein europäischer Online-Shop für LED-Beleuchtung, Lampen und elektrische Komponenten. Als sie zu uns kamen, wuchs das Business — aber das Wachstum wurde eingekauft, nicht verdient. Der Großteil des Umsatzes wurde durch Paid Ads generiert, und steigende Anzeigenkosten begannen die Marge zu komprimieren. Das Briefing war einfach: ein skalierbares SEO-Programm aufbauen, das nachhaltiges Wachstum unabhängig von stetig steigenden Media-Ausgaben liefert.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>Der Ausgangspunkt: ungenutztes SEO-Potenzial</h2><p>Das Bild beim Kickoff war vertraut für jeden, der einen mittelgroßen E-Commerce-Shop auditiert hat. Wichtige kommerzielle Keywords hatten keine Top-Rankings. Kategorie- und Produktseiten waren nicht auf tatsächliche Suchintention ausgerichtet. Technische SEO-Basics — Crawl, Indexierung, interne Verlinkung, strukturierte Daten — waren nur teilweise vorhanden.</p><p>Unser Ziel war es, das umzukehren. Nicht nur mehr organischer Traffic, sondern der richtige Traffic — Besucher mit Kaufintention, die konvertieren und sich über die Zeit akkumulieren.</p></section>
        <div className="case-quote"><blockquote>„Wir sind wirklich zufrieden mit der Partnerschaft. Was auffällt ist, dass das Team nicht nur ausführt — sie denken mit und hinterfragen unsere Annahmen. Zusammen haben wir echte Fortschritte bei unserer Website und unserer Werbung gemacht, immer mit Fokus auf nachhaltiges, messbares Wachstum."</blockquote><cite>Harrie Staps · LEDXpress</cite></div>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>Technisches SEO als Fundament</h2><p>Keine Content- oder Ranking-Arbeit akkumuliert sich auf einer kaputten technischen Basis. Also begannen wir dort:</p><ul><li>Crawling und Indexierung — Parameter-URLs, Facetten-Nav-Lecks, Canonical-Ketten und Seiten bereinigt, die Crawl-Budget absorbierten, ohne je zu konvertieren.</li><li>Page Speed — Core-Web-Vitals-Arbeit über Templates, Image-Pipeline und Third-Party-Tag-Bloat. Mobile Ladezeit sank messbar.</li><li>Interne Verlinkung — Kategorie-zu-Produkt-Fluss restrukturiert, damit Authority endlich zu den Seiten floß, die sie brauchten.</li><li>Strukturierte Daten — Product-, Offer-, BreadcrumbList-, Organization- und Review-Schema über den gesamten Katalog. Rich Results folgten innerhalb von Wochen.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>Keyword-Recherche auf Intention ausgerichtet</h2><p>Der Fehler der meisten E-Commerce-SEO-Programme ist die Optimierung auf Traffic. Wir optimierten auf Umsatz. Jedes Keyword wurde gegen drei Dinge bewertet: kommerzielle Intention, Traffic-Potenzial und die Marge der Produkte, die es surfacen würde.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>Content &amp; On-Page — zum Konvertieren gebaut</h2><p>Jede Kategorie und wichtige Landingpage wurde mit dem Käufer im Sinn neu geschrieben, nicht für den Algorithmus. Neue Kategorienseiten dort, wo die alte Struktur ganze kommerzielle Cluster fehlte. Überarbeitete Metadaten, Überschriften und On-Page-Copy über das bestehende Inventar.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">05</span><h2>Der Hebel, den die meisten SEO-Agenturen übersehen: Paid-Daten</h2><p>Der schnellste Weg herauszufinden, welche Keywords tatsächlich Umsatz generieren, ist auf die zu schauen, die bereits in Google Ads konvertieren. Wir nutzten den Paid-Account als permanenten A/B-Test für die SEO-Ausrichtung:</p><ul><li>Keyword-kommerzieller Wert mit Live-Conversion-Daten validiert, nicht mit Schätzungen.</li><li>Profitable Long-Tail-Terms identifiziert, auf die die organische Strategie dann verdoppelte.</li><li>Lernzyklus von Quartalen auf Wochen verkürzt — Paid sagte uns, was funktioniert, Organisch verstärkte die Gewinner.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">06</span><h2>Die Ergebnisse, 8 Monate später</h2><p>Die Headline-Zahl ist der Umsatz: <strong>+365 % monatliches Umsatzwachstum in 8 Monaten</strong>. Aber die Aufschlüsselung zeigt, dass das Wachstum strukturell ist, keine Spitze:</p><ul><li><strong>+230 % organische Klicks</strong> — von 1.030 auf 3.430 pro Monat.</li><li><strong>+59 % Conversion Rate</strong> — von 1,45 % auf 2,30 %.</li><li><strong>+46 % Verbesserung der durchschnittlichen Rankingposition</strong> — von 41,6 auf 22,3.</li></ul><p>Traffic rauf. Qualität des Traffics rauf. Conversion rauf. So sieht akkumulierendes SEO tatsächlich aus.</p></section>
        <div className="case-takeaway"><span className="case-takeaway-kicker">Was es zum Erfolg gemacht hat</span><p>Ein Full-Stack-SEO-Programm — technisch, Content und Off-Page als ein Workstream betrieben. Datengetriebene Priorisierung, die Paid-Conversion-Daten nutzte, um jede organische Wette zu entrisiken. Und ein unerbittlicher Fokus auf Conversion-qualitäts-Traffic statt Vanity-Volumen.</p></div>
      </>),
    },
    luxaflex: {
      metaTitle: 'Luxaflex — −93 % Lead-Kosten, +3.191 % Kontaktanfragen | pmax',
      metaDesc: 'Lokale Paid-Search verwandelte ein scheiterndes Luxaflex-Franchise in eine 3.191%-Wachstumsmaschine — Kosten pro Lead in drei Jahren um 93 % gesenkt.',
      heroTitle: <>Ein scheiterndes Paid-Search-Programm, zur 3.191%-Wachstumsmaschine umgebaut — durch wirklich <em>lokales</em> Vorgehen.</>,
      heroDeck: 'Luxaflex® ist Marktführer für Rollläden, Markisen und Jalousien und einer der größten Händler bekannter Vorhangsmarken. Wir wurden beauftragt, ein Franchise-Paid-Search-Programm zu reparieren, bei dem die Kosten zu hoch und die Verkäufe zu niedrig waren.',
      stats: [
        { num: '−93 %', label: 'Kosten pro Lead — Kontaktformulare und Anrufe kombiniert' },
        { num: '+3.191 %', label: 'Wachstum monatlicher Kontaktanfragen über drei Jahre' },
        { num: '+527 %', label: 'Steigerung des Conversion-Werts im Franchise-Netzwerk' },
        { num: '+270 %', label: 'Verbesserung der Conversion Rate trotz dramatisch gestiegenem Traffic' },
      ],
      prose: (<>
        <div className="case-brief"><p>Luxaflex®-Franchisenehmer hatten bereits Paid Media betrieben. Es hatte nicht funktioniert — der Kosten-pro-Akquisition war zu hoch und die resultierenden Verkäufe zu dünn, um die Investition zu rechtfertigen. Wir wurden gebeten, die Aufgabe ordentlich zu erledigen: ein Paid-Search-Programm aufzubauen, das sich selbst finanzieren und über ein nationales Franchise-Netzwerk skalieren kann, in dem jeder Händler verschiedene Bestände, verschiedene Lieferzeiten und verschiedenen lokalen Wettbewerb hat.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>Erstmal in die Daten schauen, bevor man die Anzeigen anfasst</h2><p>Das Erste, was wir taten, war nichts Sichtbares. Wir saßen mit jedem Franchisenehmer und lernten ihr kommerzielles, operatives und Promotions-Ökosystem von innen kennen — Fertigungsprozess, Lieferzeiten, Bruttomarge pro Produktfamilie, und was der typische Luxaflex-Kunde wirklich will, wenn er zum Telefon greift.</p><p>Erst wenn wir die Unit Economics jedes Händlers verstanden hatten, entschieden wir, auf welche Kanäle wir uns stützten. Die Antwort war nicht mehr Kanäle; es war Paid Search, richtig gemacht, fokussiert auf hochvolumige, günstige Leads, die die Händler tatsächlich erfüllen konnten.</p></section>
        <blockquote className="case-pullquote"><p>„Das Verständnis der Bedeutung lokaler Suche für diese Franchise-Operation war der einzige wichtigste Durchbruch — und das Ding, das frühere Agenturen immer wieder verpassten."</p><cite>— LUXAFLEX FRANCHISE MARKETING TEAM</cite></blockquote>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>46 % der Google-Suchen sind lokal. Der Großteil unseres Keyword-Budgets war es nicht.</h2><p>Brand-Terms waren wertvoll, aber gedeckelt. Das Suchvolumen — und die wirklich inkrementelle Nachfrage — saß in Long-Tail-Non-Brand-Anfragen, die dennoch geografisch verankert waren: „Rollos Hamburg", „Markisen München", „Jalousien in meiner Nähe".</p><p>Wir bauten die Account-Struktur um vier sich überlappende Keyword-Layer neu auf:</p><ul><li><strong>Brand</strong> — defensiv, gedeckeltes Budget, hohe Intention</li><li><strong>Generisches Produkt</strong> — Nachfrage auf Kategorieebene, durch Landing-Page-Targeting qualifiziert</li><li><strong>Hyper-lokal</strong> — Long-Tail-Geo-Modifier, auf den nächsten Franchisenehmer gemapped</li><li><strong>Angebots-basiert</strong> — saisonale Promotionen synchronisiert mit Franchisenehmerlager und -kapazität</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>Saisonalität und Händler-Koordination erledigten den Rest</h2><p>Sonnenschutz ist ein saisonales Geschäft — Markisen verkaufen sich im Frühling, Rollläden im Herbst, Jalousien ganzjährig aber mit regionalen Spitzen. Wir modellierten Saisonalität pro Produktfamilie und pro Franchisenehmerbezirk, dann bauten wir Creative- und Budget-Pacing-Pläne vorab darum.</p><p>Die andere Hälfte der Arbeit war unglamouröse Koordination: wöchentliche Check-ins mit Franchisenehmern, um Promotionen konsistent über Anzeigen, Landingpages und Lager zu halten. Wenn eine Anzeige „20 % Rabatt auf Außenrollläden dieses Wochenende" versprach, stand dasselbe auf der Landingpage, der Händler hatte das Produkt verfügbar, und das Team am Telefon wusste von dem Angebot.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>Was die Zahlen taten</h2><p>Nach drei Jahren sah dasselbe Netzwerk über denselben Google-Ads-Account wie ein anderes Business aus:</p><ul><li>Conversion Rate um <strong>+270 %</strong> gestiegen, obwohl der Traffic stark stieg</li><li>Conversion Value um <strong>+527 %</strong> gestiegen</li><li>Monatliche Conversions um <strong>+3.191 %</strong> gestiegen</li><li>Kosten pro Conversion um <strong>−93 %</strong> gefallen</li></ul><p>Kein neuer Mediakanal. Kein Wunderprodukt. Nur ein sauber strukturierter Account, ehrliches lokales Targeting und die Disziplin, Anzeigen, Landingpages und Händler-Realität synchron zu halten.</p></section>
      </>),
    },
    preo: {
      metaTitle: 'PREO Software — +72 % organische Klicks, +143 % Seite 1 | pmax',
      metaDesc: 'Content-getriebenes SEO öffnete die gebrauchte Software-Lizenzkategorie für PREO — organische Klicks um 72 % und Seite-1-Keyword-Rankings um 143 % gesteigert.',
      heroTitle: '+72 % organische Klicks, +143 % Seite-1-Keywords — wie content-getriebenes SEO eine B2B-Nischenkategorie erschloss.',
      stats: [
        { num: '+72,2 %', label: 'Organische Klicks YoY' },
        { num: '+17,7 %', label: 'Verbesserung der Durchschnittsposition YoY' },
        { num: '+143 %', label: 'Seite-1-Keyword-Rankings vs. Vorjahr' },
        { num: '132', label: 'Keywords auf Seite 1, 41 in Top 5, 25 in Top 3' },
      ],
      prose: (<>
        <div className="case-brief"><p>PREO Software AG ist ein Spezialhandel für gebrauchte Software-Lizenzen — eine Kategorie, die die meisten Beschaffungsteams nicht kennen, bis jemand sie darauf hinweist. Die Gründer bauten das Business auf der Erkenntnis auf, dass Unternehmen jeder Größe Lizenzen tragen, die sie nicht mehr brauchen, und andere Unternehmen Lizenzen brauchen, für die sie keinen Vollpreis zahlen wollen. Der Markt funktioniert. Das Problem war, dass fast niemand danach suchte — weil fast niemand wusste, wie.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>Der Ausgangspunkt: ein funktionierendes Business mit einer Brand-Awareness-Decke</h2><p>PREO hatte echte Enterprise-Accounts durch Outbound und Direktvertrieb gewonnen. Das Produkt funktionierte, die Wirtschaftlichkeit funktionierte, die Referenzen waren stark. Was nicht funktionierte, war Inbound: das Nischenprodukt-Problem deckelierte organische Nachfrage, weil Beschaffungsteams nicht nach „gebrauchten Software-Lizenzen" googelten. Unser Auftrag: organische Suche in eine zweite Wachstumsmaschine verwandeln, nachhaltig, ohne Abkürzungen.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>Die Erkenntnis: Content muss das Educating übernehmen</h2><p>In einer Kategorie, in der der Käufer noch nicht weiß, dass die Kategorie existiert, kann SEO kein Keyword-Volumen-Spiel sein. Es muss ein Bildungsspiel sein. Der Content muss Beschaffungs- und IT-Entscheider darüber aufklären, was eine gebrauchte Lizenz ist, wann sie legal ist, wie sie in der Praxis funktioniert, wie die Einsparungen tatsächlich aussehen — und erst dann wird die „Von PREO kaufen"-Suchanfrage möglich.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>Die Methodik: Content + Keyword-Struktur als eine Einheit</h2><ul><li>Intensive Keyword-Recherche kartierte die echte Käuferreise — von „Wie funktionieren gebrauchte Software-Lizenzen" bis „Ist der Kauf von gebrauchtem Microsoft 365 legal" bis hin zu Bottom-of-Funnel-kommerziellen Anfragen.</li><li>Ein Content-Programm um diese Map herum aufgebaut — Langform-Stücke, Vergleichsseiten, rechtliche Explainer, Einsparkalkulator — jedes an eine spezifische Suchintention gebunden.</li><li>Website-Copy neu geschrieben, um Ziel-Keywords gezielt einzusetzen, im Dienst der Klarheit für den Leser — nie gestopft.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>Das Ergebnis: Klicks, Positionen und Kategorie-Fußabdruck</h2><ul><li><strong>+72,2 % organische Klicks YoY</strong> — keine Vanity-Impressionen, echte Besuche von Menschen, die die Kategorie recherchieren.</li><li><strong>+17,7 % Durchschnittsposition</strong> — struktureller Ranking-Lift über das gesamte getrackte Keyword-Set.</li><li><strong>+143 % Seite-1-Keywords vs. Vorjahr</strong> — der Kategorie-Fußabdruck wuchs, nicht nur das Ranking auf bestehenden Terms.</li><li><strong>132 Keywords auf Seite 1, 41 in den Top 5, 25 in den Top 3</strong> — verteidigbare Positionen auf den kommerziellen Anfragen, die tatsächlich Anfragen generieren.</li></ul></section>
        <div className="case-takeaway"><span className="case-takeaway-kicker">Was es zum Erfolg gemacht hat</span><p>Akzeptieren, dass eine B2B-Nischenkategorie Content braucht, der aufklärt, bevor er verkauft — und das mit einer Keyword-Strategie zu koppeln, die den Käufer von Awareness zu Intention führt. Dann die unglamouröse Disziplin monatlichen technischen SEOs und gezielter Off-Page-Arbeit, jeden Monat, ohne Unterbrechungen. Für Kategorien, in denen der Käufer noch nicht weiß, dass deine Kategorie existiert, ist das der einzige ehrliche Weg, wie SEO skaliert.</p></div>
      </>),
    },
    primundus: {
      metaTitle: 'PRIMUNDUS — regionales SEO, +535 % Impressionen | pmax',
      metaDesc: 'Regionales SEO, neu ausgerichtet am echten Käufer, steigerte die Impressionen von PRIMUNDUS um 535 % und die Klicks um 182 % — für einen deutschen 24-Stunden-Pflegeanbieter.',
      heroTitle: '+535 % Impressionen, +182 % Klicks — durch eine regionale SEO-Strategie, die auf dem echten Suchverhalten von Pflegefamilien aufgebaut wurde.',
      stats: [
        { num: '+535 %', label: 'Impressionen, letzte 6 Monate vs. Vorperiode' },
        { num: '+182 %', label: 'Klicks, letzte 6 Monate vs. Vorperiode' },
        { num: '−9,95', label: 'Verbesserung der durchschn. Rankingposition' },
        { num: '193', label: 'Keywords auf Seite 1' },
      ],
      prose: (<>
        <div className="case-brief"><p>PRIMUNDUS ist ein deutscher Pflegeanbieter im 24-Stunden-Pflegesegment, der polnische Pflegekräfte an Familien in ganz Deutschland vermittelt. Die Pflegekräfte werden intern ausgebildet, sprechen gutes Deutsch und übernehmen Pflege, Begleitung und Haushaltsführung. Das Unternehmen hat über 10.000 Pflegekräfte in mehr als einem Jahrzehnt vermittelt — aber der Großteil dieses Wachstums kam durch Empfehlungen, nicht durch Online-Präsenz. Unser Auftrag: organische Suche zur zweiten Wachstumsmaschine machen.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>Der Ausgangspunkt: starkes Business, dünner Online-Fußabdruck</h2><p>PRIMUNDUS ist nach Volumen einer der führenden Anbieter im Segment, aber die organische Präsenz der Website spiegelte das nicht wider. Wer außerhalb von Markensuchanfragen suchte, hätte sie nicht gefunden. Das Ziel war nachhaltig: organischen Traffic steigern und — wichtiger noch — den Anteil qualifizierter Anfragen aus organischer Suche erhöhen. Dafür brauchten wir eine regionale SEO-Strategie, die die Website darauf ausrichtete, wie Familien in bestimmten Städten und Regionen tatsächlich suchen, wenn ein Elternteil plötzlich Rund-um-die-Uhr-Pflege braucht.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>Die Erkenntnis: Der Käufer ist nicht der Patient</h2><p>Eine frühe Erkenntnis, die die gesamte Strategie neu formte. In dieser Kategorie ist die suchende Person fast nie die gepflegte Person. Es ist das erwachsene Kind, der Ehepartner, die Nichte, die die Familienlogistik übernimmt. Sie suchen mit anderer Sprache, in anderen Momenten, mit anderen Einwänden als der Patient. Die alte Website war für den Patienten geschrieben. Die neue musste für den Käufer geschrieben werden.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>Die Methodik: regionale Seiten auf echter Nachfrage aufgebaut</h2><p>Sobald wir die Keyword-Landschaft kartiert hatten, wurde ein klares Muster sichtbar: Best Practice in dieser Kategorie ist keine einzelne nationale Seite für „24-Stunden-Pflege". Es ist ein Netzwerk regionaler Seiten, jede auf eine bestimmte Stadt oder ein Einzugsgebiet ausgerichtet, jede für den Käufer in der Region geschrieben.</p><ul><li>Intensive Keyword-Recherche auf Stadtebene — welche Regionen hatten echte Suchnachfrage, die eine eigene Seite rechtfertigte.</li><li>Neue Informationsarchitektur — um Regionen, Pflegebedarf und Käufer-Entscheidungsmomente herum neu aufgebaut.</li><li>On-Page-Content neu geschrieben mit Ziel-Keywords gezielt eingesetzt — geschrieben, um natürlich für das suchende Familienmitglied zu lesen.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>Die technische und Off-Page-Ebene</h2><p>Keine regionale Arbeit akkumuliert sich ohne die Grundlagen darunter. Technisches SEO — Crawl, Indexierung, interne Verlinkung, strukturierte Daten, Page Speed — überlagert mit einem gezielten, langfristigen Off-Page-Programm, das qualitätsvolle Backlinks aus Quellen aufbaut, die in der deutschen Healthcare- und Seniorenpflege-Landschaft relevant sind. Vertrauenssignale (echte Autoren, echte Bewertungen, datierter Content) verstärkten die E-E-A-T-Signale, die Google braucht, um eine YMYL-Website in einer sensiblen Kategorie sicher empfehlen zu können.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">05</span><h2>Das Ergebnis: Sichtbarkeit, die in Anfragen umgewandelt wurde</h2><ul><li><strong>+535 % Impressionen</strong> in den letzten sechs Monaten vs. den vorherigen sechs.</li><li><strong>+182 % Klicks</strong> im gleichen Zeitraum — Sichtbarkeit, die in qualifizierten Traffic umgewandelt wurde.</li><li><strong>Durchschnittliche Rankingposition um 9,95 verbessert</strong> — die Art von strukturellem Shift, den man schwer wieder verliert.</li><li><strong>193 Keywords auf Seite 1</strong>, <strong>79 in den Top 3</strong>, <strong>22 auf Position eins</strong>.</li></ul></section>
        <div className="case-takeaway"><span className="case-takeaway-kicker">Was es zum Erfolg gemacht hat</span><p>Eine regionale SEO-Strategie, die das echte Verhalten der Kategorie respektierte — ein Käufer, viele Einzugsgebiete, alle tief lokal. Eine Site-Architektur, die um den Käufer herum neu aufgebaut wurde, nicht um den Patienten. Und die Disziplin, unglamouröse technische Grundlagen mit einem gezielten Off-Page-Programm zu kombinieren.</p></div>
      </>),
    },
    unisono: {
      metaTitle: 'Unisono Luxury Homes — +183 % Anruf-Leads, +138 % CTR | pmax',
      metaDesc: 'SEO, Google Ads, Microsoft Ads und Website-Neuaufbau für eine Mallorca-Luxusvilla-Marke. +183 % Telefonnummer-Klicks, +138 % organische CTR im Jahresvergleich.',
      heroTitle: 'Unisono Luxury Homes — ein Multi-Channel-Programm, aufgebaut darum, wie ein Luxus-Kunde tatsächlich bucht.',
      stats: [
        { num: '+138 %', label: 'Organische CTR YoY (0,8 % → 1,9 %)' },
        { num: '+14,7', label: 'Durchschnittliche Rankingpositionen gewonnen (34,9 → 20,2)' },
        { num: '+183 %', label: 'Telefonnummer-Klicks YoY' },
        { num: '+8,8 %', label: 'Miet-Kontaktanfragen YoY' },
      ],
      prose: (<>
        <div className="case-brief"><p>Unisono Luxury Homes ist eine Mallorca-basierte Luxusvilla-Marke — Verkauf und hochwertiger Saisonmietvertrieb, mit einer Kundschaft, die in drei Sprachen recherchiert und telefonisch bucht. Unser Auftrag: organische Sichtbarkeit in einer von internationalen Portalen dominierten Kategorie besitzen, Google und Microsoft Ads als Profitkanal statt Kostenlinie betreiben, und die Website neu aufbauen, damit die obige Arbeit sich auszahlt.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>Der Ausgangspunkt: eine von Portalen dominierte Kategorie</h2><p>Luxusmiet-Suchen auf Mallorca gehören einer Handvoll internationaler Plattformen mit achtstelligen Anzeigenbudgets. Für eine unabhängige Marke — ein kleines Team, ein kuratiertes Portfolio, eine Telefonnummer, die die Leute tatsächlich nutzen — sieht organisches Ranking gegen sie auf dem Papier unmöglich aus.</p><p>Ist es nicht. Es braucht nur andere Spielregeln: engere Intention, schnellere Seiten, besserer Content, echtes Schema und die Geduld, ein 12-Monats-Spiel zu spielen, wenn die Portale ein 12-Wochen-Spiel spielen.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>Die Methodik: vier Kanäle, ein Kalender</h2><p>Vier Disziplinen, als ein Programm betrieben, wöchentlich auditiert:</p><ul><li><strong>SEO.</strong> Topic-Cluster um Käuferintention aufgebaut. Property-Seiten mit echtem Schema, echter Fotografie und Copy, die die Frage beantwortet, die ein HNW-Mieter tatsächlich hat. Hreflang sauber über Englisch, Deutsch und Spanisch.</li><li><strong>Google Ads.</strong> Markenschutz plus eng segmentierte Non-Brand-Search rund um Langzeitmiet- und Kaufintention. Offline-Conversion-Imports aus dem CRM.</li><li><strong>Microsoft Ads.</strong> Oft bei Luxus übersprungen, sollte es nie sein. Bings Publikum über-indexiert auf genau die Demografik, die diese Marke verkauft. Niedrigere CPCs, höherer AOV, 30–40 % bessere Conversion Economics als Google in mehreren Mietsegmenten.</li><li><strong>Web-Entwicklung.</strong> Vollständiger Site-Neuaufbau — gleiches visuelles Design, neuer Tech-Stack — nachdem wir diagnostiziert hatten, dass die Legacy-Plattform die einzige größte Bremse bei der Conversion war.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>Die organischen Ergebnisse: gleiche Site, dramatisch effizienter</h2><ul><li><strong>Organische CTR: 0,8 % → 1,9 %.</strong> Ein relativer Lift von 138 %. Dieselbe Fläche in Google konvertiert jetzt einen viel höheren Anteil von Impressionen in Klicks.</li><li><strong>Durchschnittsposition: 34,9 → 20,2.</strong> Von Seite vier auf Seite zwei im Durchschnitt.</li><li><strong>Impressionen auf 19,8k normalisiert</strong> — absichtlich, als wir dünne und intention-fremde Seiten beschnitten. Weniger Impressionen auf Anfragen, die nie konvertieren; mehr auf denen, die es tun.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>Die Conversion-Ergebnisse: wo es sich wirklich zeigt</h2><ul><li><strong>Telefonnummer-Klicks: +183,33 % YoY.</strong> Das einzeln prädiktivste Event für dieses Business. Wer die Telefonnummer klickt, bucht.</li><li><strong>Miet-Anfrage-Einreichungen: +8,77 % YoY.</strong> Das primäre Formular-Fill, wachsend auf einer bereits starken Basis.</li><li><strong>Deutsche Kontaktseiten-Einreichungen: +25 % YoY.</strong> Ein gezieltes Wachstumsgebiet — einer der margenstarks­ten Quellmärkte für die Marke.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">05</span><h2>Warum es funktionierte: die langweiligen Antworten</h2><ul><li><strong>Ein Kalender.</strong> SEO, Google, Microsoft und Web liefen von einem gemeinsamen wöchentlichen Rhythmus — nicht vier Agenturen, vier Roadmaps, vier Prioritätensätze.</li><li><strong>Neuaufbau vor Optimierung.</strong> Kein SEO oder Paid-Spend würde eine Site reparieren, die unter Last crawlte und Formular-Einreichungen stillschweigend verlor.</li><li><strong>Telefon ist ein Kanal.</strong> Im Luxusmietgeschäft ist der Anruf die Conversion. Den Weg dorthin zu optimieren — sichtbar, anklickbar, sprachbewusst — produzierte den größten Einzellift im Programm.</li></ul></section>
        <div className="case-takeaway"><span className="case-takeaway-kicker">Was es zum Erfolg gemacht hat</span><p>Unisono als eine Marke mit vier ineinandergreifenden Wachstumsflächen zu behandeln statt als vier Kanäle hintereinander. Organische Sichtbarkeit verdoppelte die Click-through-Rate jedes Auftritts in Google. Paid übernahm den ungebrandeten Long-Tail. Microsoft Ads erfasste das hochwertige Publikum, das Google falsch bepreist. Und der Website-Neuaufbau ließ alle drei Investitionen bei der Landung härter arbeiten.</p></div>
      </>),
    },
    'vc-investor': {
      metaTitle: 'VC-Investor LinkedIn-Kampagne — +50 % VTR, −48 % CPM | pmax',
      metaDesc: 'Phasenweise LinkedIn-Awareness-zu-Conversion-Kampagne für einen führenden Frühphasen-VC. +50 % View-through-Rate über LinkedIns globalem Benchmark, −48 % CPM.',
      heroTitle: 'Wie eine phasenweise LinkedIn-Kampagne +50 % VTR und −48 % CPM für einen führenden Frühphasen-VC-Investor erreichte.',
      stats: [
        { num: '+50 %', label: 'Video-View-through-Rate über LinkedIns globalem Benchmark' },
        { num: '−48 %', label: 'CPM unter LinkedIns globalem Benchmark' },
        { num: '+45 %', label: 'Video-CTR der Conversion-Phase über Standard für Sponsored-Content-Video' },
        { num: '+250 %', label: 'Conversion-CTR vs. Awareness-Phase' },
      ],
      prose: (<>
        <div className="case-brief"><p>Einer der größten und aktivsten Frühphasen-VC-Investoren in Deutschland — bekannt für seine Arbeit mit Tech-Unternehmen — musste während der Pandemie Flaggschiff-Präsenz-Netzwerk-Events online verlagern. Das Briefing: kosteneffiziente digitale Anmeldungen für ein Event, das Startups, innovative Denker, Top-Operatoren, Experten und Visionäre verbinden sollte. LinkedIn war die richtige Plattform; die Frage war, wie man sie richtig nutzt.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>Phasenstrategie — Awareness, Consideration, Conversion</h2><p>LinkedIns Campaign Manager ist ausgefeilter als die meisten Leute ihm zutrauen. Wir nutzten sein erweitertes Targeting, um eine sechswöchige Phasenkampagne zu fahren: Sichtbarkeit in Phase eins aufbauen, in Phase zwei auf engagierte Zielgruppen verengen, in Phase drei auf hochintentionierte Anmeldungen drängen.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>Awareness — die relevanten Räume finden</h2><p>Phase eins zielte auf CTOs, CEOs, Gründer und Senior-Leute in Business Development, IT, Operations und Projektmanagement ab — plus Custom Audiences aus den eigenen First-Party-Listen des Kunden. Wir zeigten ihnen ein poliertes 30-Sekunden-Video, das das Event mit direktem „Anmelden"-CTA vorstellte.</p><div className="prose-callout"><div className="prose-callout-kicker">Hinweis zum Aufbau von Zielgruppen</div><p>Nicht sicher, wen man targeten soll? Fragen Sie Ihr eigenes Team. Anstatt in einem Meetingraum zu spekulieren, sprechen Sie mit den Leuten in Ihrem Call Center oder Vertrieb — die, die Ihre Kunden wirklich kennen.</p></div></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>Consideration — wo es interessant wurde</h2><p>Für Phase zwei schalteten wir einen frischen Schnitt des Videos ein, um Creative-Ermüdung zu vermeiden, und schichteten mehr „Reasons to Believe" auf. Neue Copy-Varianten fügten einen zeitbasierten Push hinzu. Die Zielgruppe wurde enger: Wir retargeteten alle, die sich mit dem Awareness-Video oder der Company-Page des Kunden engagiert hatten, und spalteten Video-Zuschauer in zwei Kohorten — 50 % und 75 % angesehen.</p><div className="prose-callout"><div className="prose-callout-kicker">CTR-Steigerung</div><p>Phase-zwei-CTR lief 200 % höher als Phase eins. Der ganze Sinn von Phasing ist, dass man vermeidet, die zweite Hälfte des Budgets für Leute auszugeben, die einem bereits gesagt haben, dass sie nicht interessiert sind.</p></div></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>Conversion — letzter Push, engste Zielgruppe</h2><p>Phase drei startete ein drittes Video gegen die engste Kohorte — Zuschauer, die 75 % und 97 % des vorherigen Assets angesehen hatten. Interessanterweise übertraf die 75-%-Kohorte die 97-%-Kohorte. Wir haben noch keine vollständig befriedigende Erklärung dafür und berichten es, weil jede ehrliche Fallstudie mindestens ein Ergebnis haben sollte, das man nicht ordentlich erklären kann.</p><p>Conversion-Phase-CTR lief +250 % höher als die Awareness-Phase und +17 % höher als die Consideration-Phase — sauberer Beweis, dass progressive Zielgruppen-Verengung die Arbeit tat, die sie tun sollte.</p></section>
        <div className="prose-callout"><div className="prose-callout-kicker">Das Ergebnis</div><p>Ticket-Verkaufsziele des Kunden wurden übertroffen. Kosten pro Anmeldung lagen deutlich unter dem internen Benchmark des Kunden, und die Kampagne wurde zur Vorlage für jedes nachfolgende Event, das das Unternehmen in den folgenden 18 Monaten online durchführte. Das Entscheidende war die phasenweise Struktur: dasselbe Mediabudget, mit progressiv engeren Zielgruppen eingesetzt, produzierte 250 % höhere CTR in der Abschlussphase als ein einzelner Broadcast-Äquivalent erzielt hätte.</p></div>
      </>),
    },
  } as Record<string, LocalizedCaseDetail>,

  blogPostDetail: {
    'performance-max-bidding-change-august-2026': {
      toc: ['Die Änderung: Bidding Target Optimization', 'Ihr Sechs-Wochen-Fenster', 'Die zwei Betas', 'Was wir vor dem 17. August tun', 'Häufige Fragen'],
      faqs: [
        { q: 'Wann tritt die Gebotsänderung von Performance Max in Kraft?', a: 'Am 17. August 2026. Das Bid Target Adjustment Tool kommt am 6. Juli, also bleibt ein Fenster von rund sechs Wochen, um die Ziele zu setzen, bevor die Änderung automatisch greift.' },
        { q: 'Was ist Bidding Target Optimization?', a: 'Eine Backend-Gebotsänderung von Google. Budgetlimitierte Kampagnen, die ihren Ziel-CPA oder Ziel-ROAS übertroffen haben, werden zurück zum festgelegten Ziel gesteuert.' },
        { q: 'Welche Kampagnen sind betroffen?', a: 'Budgetlimitierte Kampagnen für Suche, Shopping, Performance Max, Demand Gen, Reise und Display. App, Video Reach und Video View sind ausgenommen; Hotel und Display laufen bereits so.' },
        { q: 'Ist es Opt-out, oder muss ich etwas tun?', a: 'Kein Opt-out: Es greift am 17. August automatisch, und Google passt deine Ziele oder Budgets nicht für dich an. Nichtstun bedeutet meist höhere Kosten pro Conversion.' },
        { q: 'Steigen dadurch meine Kosten pro Conversion?', a: 'Bei Kampagnen, die das Ziel übertroffen haben, sehr wahrscheinlich, außer Sie senken das Ziel vor dem 17. August. Mit dem Tool vom 6. Juli können Sie behalten, angleichen oder ein eigenes Ziel setzen.' },
      ],
      prose: (
        <>
          <p>Am 15. Juni hat Google drei Änderungen bei Geboten und Budgets in einem einzigen Beitrag angekündigt. Zwei sind optionale Betas. Die dritte ist nicht optional, greift am <strong>17. August</strong> automatisch und bedeutet für viele Konten höhere Kosten pro Conversion. Wenn Sie Performance Max nutzen, ist das die, die Sie lesen sollten.</p>
          <p>Kurz gesagt: Kampagnen, die ihren Ziel-CPA oder Ziel-ROAS bisher <em>übertroffen</em> haben, werden zurück in Richtung des Ziels gesteuert, das Sie festgelegt haben. Es gibt ein Sechs-Wochen-Fenster, um vorher selbst zu handeln &mdash; und ein Tool, das am <strong>6. Juli</strong> kommt. Unten: was sich ändert, wen es trifft und die Checkliste, die wir vor dem Stichtag über die von uns betreuten Konten laufen lassen.</p>

          <h2>Die entscheidende Änderung: Bidding Target Optimization</h2>
          <p>Aktuell kann eine budgetlimitierte Kampagne problemlos deutlich unter ihrem Ziel liefern. Googles eigenes Beispiel: eine Kampagne mit einem Ziel-CPA von 10&nbsp;$, die Conversions für rund 5&nbsp;$ holt &mdash; die Hälfte des Ziels. Ab dem 17. August zielt diese Kampagne darauf, näher an den festgelegten 10&nbsp;$ zu liefern, statt weiter bei 5&nbsp;$ zu bleiben. (Diese Zahlen sind Googles Illustration, kein gemessenes Ergebnis &mdash; Ihre echten Zahlen liefert das Tool.)</p>
          <p>Gleiche Logik beim Wert: Eine Kampagne mit 300&nbsp;% Ziel-ROAS, die zuletzt eher bei 400&nbsp;% lag, wird Richtung 300&nbsp;% zurückgesteuert.</p>
          <p>Drei Dinge, die Sie klar haben sollten &mdash; denn genau hier werden Konten kalt erwischt:</p>
          <ul>
            <li><strong>Es betrifft nur budgetlimitierte Kampagnen</strong> &mdash; die, die durch ihr Tages- oder Gesamtbudget gebremst werden, nicht durch ihr Ziel. Ist eine Kampagne durch das Ziel selbst limitiert, steht sie nicht im Fokus.</li>
            <li><strong>Es ist automatisch. Kein Opt-out.</strong> Google hat gesagt, dass es Ihre Ziele oder Budgets nicht für Sie anpasst. Tun Sie nichts, kommt die Änderung trotzdem: Ihre übererfüllenden Kampagnen driften zu veralteten Zielen, und für die meisten Konten heißt das höhere Kosten pro Conversion. Nichtstun ist hier eine Entscheidung, kein Standard.</li>
            <li><strong>Es deckt fast alle Kampagnentypen ab</strong> &mdash; Performance Max, Suche, Shopping, Demand Gen, Reise und Display. App-, Video-Reach- und Video-View-Kampagnen sind ausgenommen. Hotel und Display laufen bereits so.</li>
          </ul>
          <p>Das ist das übliche Thema der langweiligen Grundlagen: Die Änderung belohnt Konten mit Zielen, die der Realität entsprechen, und bestraft die, die mit Zahlen laufen, die seit Monaten niemand angefasst hat. Unsere <a href="/de/blog/performance-max-2026/">Übersicht zu Performance Max 2026</a> erklärt die Struktur, die das Zielmanagement dauerhaft einfacher macht.</p>

          <h2>Ihr Sechs-Wochen-Fenster &mdash; und das Tool vom 6. Juli</h2>
          <p>Zwischen dem <strong>6. Juli</strong> und dem <strong>17. August</strong> liegt der einzige Zeitraum, in dem Sie entscheiden, nicht der Algorithmus.</p>
          <p>Am 6. Juli rollt Google ein Tool zur Anpassung der Gebotsziele aus (<strong>Bid Target Adjustment Tool</strong>), das per Kontobenachrichtigung bei allen erscheint, die in den letzten 12 Monaten budgetlimitierte, zielbasierte Kampagnen hatten. Es zeigt Ihre bisherige Performance und gibt drei Optionen pro Kampagne:</p>
          <ol>
            <li><strong>Aktuelles Ziel behalten</strong> &mdash; und die Rücksteuerung dorthin am 17. August akzeptieren.</li>
            <li><strong>Ziel an die jüngste Performance angleichen</strong> &mdash; die niedrigeren Kosten pro Conversion festschreiben, die Sie ohnehin schon erzielen.</li>
            <li><strong>Eigenes Ziel festlegen.</strong></li>
          </ol>
          <p>Die eigentliche Entscheidung dahinter ist das, was wir die <em>Absichtslücke</em> nennen: <strong>Waren Ihre konservativen Ziele Absicht oder einfach veraltet?</strong></p>
          <ul>
            <li>Haben Sie einen hohen Ziel-CPA (oder einen niedrigen Ziel-ROAS) <em>bewusst</em> gesetzt, damit eine Kampagne kräftig skaliert, wird dieser Hebel gleich schwächer. Senken Sie das Ziel vor dem 17. August, um das Volumen zu halten.</li>
            <li>Sind die Ziele einfach veraltet, während sich die Performance verbessert hat, können Sie die Änderung akzeptieren und beobachten &mdash; das Konto korrigiert sich von selbst zu Zahlen, die Sie ohnehin gesetzt hätten.</li>
          </ul>
          <p>Keine Antwort ist falsch. Keine Antwort pro Kampagne zu haben, schon.</p>

          <h2>Die zwei Betas, die Sie kennen sollten</h2>
          <p><strong>Smart Bidding Exploration ist jetzt für Performance Max live.</strong> Global verfügbar für Performance-Max-Kampagnen <em>ohne</em> Produktfeed. Für Shopping und Performance Max <em>mit</em> Feed ist es in der Beta. Die Funktion lässt den Algorithmus auf Suchanfragen ohne erprobte Conversion-Historie bieten, innerhalb einer ROAS-Toleranz, um echte neue Nachfrage zu finden. Google meldet interne Zuwächse im hohen Zehnerbereich; behandeln Sie das als Herstellerangabe, bis Sie es in Ihrem Konto gegen eine saubere Baseline belegt haben.</p>
          <p><strong>Promotion Mode</strong> ist eine neue Beta nur für <strong>Suche und Performance Max</strong> (vorerst nicht Shopping oder Display). Sie plant eine zeitweise Lockerung Ihrer ROAS-Toleranz plus zusätzliches Tagesbudget über ein festes Fenster &mdash; ein Flash-Sale, ein saisonaler Peak, ein Launch. Das ist nicht dasselbe wie saisonale Anpassungen; verwechseln Sie beides nicht.</p>
          <p>Eine Randnotiz: Google hat im Juni außerdem zwei Strategien umbenannt, ohne ihr Verhalten zu ändern. &bdquo;Conversions maximieren mit einem Ziel-CPA&ldquo; heißt jetzt schlicht <strong>Ziel-CPA</strong>; &bdquo;Conversion-Wert maximieren mit einem Ziel-ROAS&ldquo; wird zu <strong>Ziel-ROAS</strong>. Rein kosmetisch &mdash; nichts zu tun.</p>

          <h2>Was wir vor dem 17. August tun</h2>
          <p>Das ist die Reihenfolge, die wir über die von uns betreuten Konten laufen lassen. Sie funktioniert genauso, wenn Sie Ihr Konto selbst führen.</p>
          <ol>
            <li><strong>Vor dem 6. Juli &mdash; Baseline festlegen.</strong> Ziehen Sie 90 Tage CPA/ROAS für jede budgetlimitierte Kampagne und markieren Sie die, die ihr Ziel konstant übertreffen. Das sind die Kampagnen, die die August-Änderung trifft.</li>
            <li><strong>Absicht von Drift trennen.</strong> Schreiben Sie für jede markierte Kampagne eine Zeile: bewusster Skalierungshebel oder veraltetes Ziel? Diese eine Entscheidung steuert alles Weitere.</li>
            <li><strong>Ab dem 6. Juli &mdash; das Bid Target Adjustment Tool öffnen.</strong> Gleichen Sie Googles Sicht mit Ihrer ab. Akzeptieren Sie nicht die Voreinstellung &mdash; wählen Sie behalten / angleichen / eigenes Ziel bewusst.</li>
            <li><strong>Ziele senken, wo Volumen zählt.</strong> Bei den bewussten Hebel-Kampagnen das Ziel vor dem 17. August neu setzen, damit der Algorithmus weiter Volumen schiebt.</li>
            <li><strong>Smart Bidding Exploration testen</strong> an ein oder zwei Performance-Max-Kampagnen und inkrementelle Conversions messen &mdash; nicht kontoweit ausrollen, nur wegen eines gemeldeten Zuwachses.</li>
            <li><strong>Promotion-Mode-Fenster vorab vorbereiten</strong> für bekannte Peaks (Sommer-Sale, Q4), damit Sie später nicht unter Druck konfigurieren.</li>
            <li><strong>Den 17. August notieren.</strong> CPA/ROAS und Ausgaben ein bis zwei Wochen danach beobachten und korrigieren, was in die falsche Richtung läuft.</li>
          </ol>

          <div className="prose-callout">
            <div className="prose-callout-kicker">Fazit</div>
            <p>Das ist keine Funktion, die Sie einschalten. Es ist eine Verhaltensänderung, die am 17. August von selbst kommt und leise die belohnt, die ihre Ziele ehrlich gehalten haben. Gehen Sie mit einem Plan pro Kampagne rein und Sie behalten Effizienz und Volumen. Gehen Sie mit Zielen rein, die seit dem Frühjahr niemand angesehen hat, und Sie werden wahrscheinlich zusehen, wie Ihre Kosten pro Conversion zu Zahlen hochdriften, die Sie vor Monaten gesetzt haben.</p>
          </div>

          <p>Wenn Sie nicht jede Kampagne von Hand vor dem Stichtag prüfen wollen &mdash; genau das ist unsere Arbeit. Wir betreuen <a href="/de/services/google-ads/">Google Ads und Performance Max</a> zum festen Monatshonorar &mdash; nie als Prozentsatz Ihrer Ausgaben &mdash; damit es nie einen Anreiz gibt, mehr Werbung zu empfehlen, als das Konto braucht. Erstgespräch sind 30 Minuten, auf unsere Rechnung: <a href="/de/contact/">Erzählen Sie uns, was Sie wachsen lassen möchten &rarr;</a></p>
          <p>Weiterlesen: <a href="/de/blog/performance-max-2026/">Performance Max 2026 &mdash; die Einstellungen, die wir zuerst ändern</a> &middot; <a href="/de/blog/cookieless-tracking/">Cookieless Tracking: Was sich geändert hat</a></p>
        </>
      ),
    },
    'perplexity-visibility': {
      title: 'So verbessern Sie Ihre Perplexity-Sichtbarkeit (und warum das nicht ChatGPT ist)',
      deck: 'Ein verständlicher Leitfaden zur Perplexity-Sichtbarkeit 2026 — was sie ist, warum sie sich anders verhält als ChatGPT und fünf Maßnahmen, die Sie diesen Monat starten können.',
      toc: ['Was ist Perplexity-Sichtbarkeit?', 'Warum Perplexity ein eigenes Thema ist', 'Fünf Maßnahmen für diesen Monat', 'Wie pmax helfen kann', 'Häufige Fragen'],
      faqs: [
        { q: 'Wie werde ich von Perplexity zitiert?', a: 'Sorgen Sie dafür, dass PerplexityBot Ihre Website crawlen kann, veröffentlichen Sie antwortorientierte, leicht zitierbare Inhalte und verdienen Sie Nennungen auf den Quellen, denen Perplexity vertraut — Wikipedia, etablierte Bewertungsseiten, seriöse Publikationen und relevante Reddit-Threads. Dann messen Sie monatlich und bleiben dran.' },
        { q: 'Warum erscheint mein Unternehmen nicht in Perplexity, obwohl es bei Google rankt?', a: 'Weil es unterschiedliche Systeme sind. Perplexity bevorzugt Seiten, die es live abrufen und sauber zitieren kann, und stützt sich auf einen engen Kreis vertrauenswürdiger Domains zur Validierung. Eine Seite kann bei Google ranken und trotzdem schwer crawlbar, schwer zitierbar oder durch die Drittanbieter-Signale, die Perplexity sucht, nicht gestützt sein.' },
        { q: 'Ist Perplexity-Sichtbarkeit dasselbe wie ChatGPT-Sichtbarkeit?', a: 'Nein. Die von beiden Maschinen zitierten Domains überschneiden sich erstaunlich wenig, daher brauchen beide eigene Bestandsaufnahmen und oft eigene Taktiken. In der einen aufzutauchen überträgt sich nicht auf die andere.' },
        { q: 'Wie lange dauert Perplexity-Sichtbarkeit?', a: 'Technische und strukturelle Korrekturen können innerhalb von Wochen sichtbar werden, weil Perplexity laufend neu crawlt und neu beantwortet. Das Drittanbieter-Vertrauen aufzubauen, das Zitate verlässlich macht, dauert in der Regel etwa zwei bis drei Monate stetiger Arbeit.' },
      ],
      prose: (
        <>
          <p>Ein Kunde sagte kürzlich etwas zu uns, das hängenblieb: „Wir tauchen endlich in ChatGPT auf &mdash; aber mein Mitgründer nutzt den ganzen Tag Perplexity, und da sind wir nirgends." Diese Lücke ist real, und sie überrascht viele. Von einer KI-Antwortmaschine empfohlen zu werden, garantiert fast nichts für die nächste.</p>
          <p>Das ist ein kurzer, praktischer Leitfaden &mdash; kein Jargon, keine Panikmache. Am Ende wissen Sie, was Perplexity-Sichtbarkeit ist, warum sie ein eigenes Thema neben ChatGPT ist und welche fünf Dinge jedes Unternehmen diesen Monat beginnen kann, um zitiert zu werden.</p>

          <h2>Was ist Perplexity-Sichtbarkeit?</h2>
          <p>Wenn jemand Perplexity fragt „Was ist die beste Digitalagentur auf Mallorca?" oder „Vergleiche drei Solarinstallateure in Spanien", schreibt es eine Antwort und versieht sie mit nummerierten Quellenangaben &mdash; den konkreten Webseiten, aus denen es geschöpft hat. Perplexity-Sichtbarkeit ist die Praxis, dafür zu sorgen, dass Ihr Unternehmen eine dieser zitierten Quellen ist &mdash; idealerweise einer der Namen in der Antwort selbst.</p>
          <p>Sie gehört zur selben Familie wie die Generative Engine Optimisation (GEO), aber die Mechanik ist Perplexity-eigen. Die klassischen SEO-Grundlagen gelten weiterhin &mdash; sie sind das Fundament, nicht die Decke.</p>

          <h2>Warum Perplexity ein eigenes Thema ist</h2>
          <p>Die Versuchung ist groß, „KI-Sichtbarkeit" als eine einzige Aufgabe zu behandeln. Das ist sie nicht. Perplexity unterscheidet sich in drei Punkten von ChatGPT, die verändern, was Sie konkret tun:</p>
          <ol>
            <li><strong>Es ist abruforientiert.</strong> Perplexity führt für fast jede Frage eine Live-Websuche durch und baut seine Antwort aus dem, was es genau jetzt findet &mdash; mit sichtbaren Quellen. Es stützt sich weniger auf das, was ein Modell „erinnert", und mehr auf das, was heute crawlbar, aktuell und zitierbar ist. Frische, gut strukturierte Seiten zählen hier mehr als fast überall sonst.</li>
            <li><strong>Die Überschneidung mit ChatGPT ist gering.</strong> In unserer eigenen Bestandsaufnahme &mdash; und in unabhängigen Analysen, die zehntausende Prompts vergleichen &mdash; überschneidet sich die Menge der von Perplexity zitierten Domains kaum mit der von ChatGPT zitierten, oft nur etwa eine von zehn. Sie können die eine dominieren und in der anderen unsichtbar sein. Deshalb sagt „Wir sind in ChatGPT" nichts über Perplexity aus.</li>
            <li><strong>Zitate haben direkten Wert.</strong> Weil Perplexity seine Quellen prominent anzeigt und Menschen darauf klicken, ist ein Zitat keine Eitelkeitskennzahl &mdash; es ist eine Empfehlung mit messbarem Traffic.</li>
          </ol>

          <h2>Fünf Maßnahmen für diesen Monat</h2>
          <h3>1. Bestandsaufnahme gezielt in Perplexity</h3>
          <p>Lassen Sie eine Stunde lang 20 echte Kaufentscheidungsfragen durch Perplexity selbst laufen &mdash; nicht ChatGPT, nicht Gemini. Nutzen Sie Fragen, die ein echter Kunde stellen würde: „Bestes X in Y für Budget Z", „Vergleich A und B". Schreiben Sie auf, welche Mitbewerber genannt und welche Seiten zitiert werden. Diese Liste ist Ihre Ausgangsbasis &mdash; und sie sieht anders aus als Ihre ChatGPT-Basis.</p>

          <h3>2. PerplexityBot crawlen lassen</h3>
          <p>Weil Perplexity abruforientiert arbeitet, ist eine Seite, die es nicht abrufen kann, eine Seite, die es nicht zitieren kann. Prüfen Sie, dass Ihre <code>robots.txt</code> weder <code>PerplexityBot</code> noch <code>Perplexity-User</code> blockiert, dass wichtige Seiten sauber mit 200 antworten und dass relevante Inhalte nicht hinter Skripten verborgen sind, die ein Crawler nicht ausführt. Das ist unspektakulär &mdash; und der häufigste Grund, warum eine gute Seite nie auftaucht.</p>

          <h3>3. Antwort zuerst, in Häppchen schreiben</h3>
          <p>Perplexity übernimmt Inhalte stückweise &mdash; also strukturieren Sie dafür. Setzen Sie die direkte Antwort in die ersten ein bis zwei Sätze unter jeder Überschrift, vor den Kontext. Nutzen Sie kurze Absätze, klare Listen und dort, wo es passt, eine Vergleichstabelle. Eine Seite, die mit „Die drei besten Optionen sind …" beginnt, lässt sich weit leichter zitieren als eine, die sich erst vier Absätze lang warmläuft.</p>

          <h3>4. Dort zitiert werden, wo Perplexity bereits vertraut</h3>
          <p>Perplexity gewichtet einen relativ kleinen Kreis von Quellen stark &mdash; Wikipedia und Wikidata für Entitätsfakten, etablierte Bewertungsplattformen (G2, Capterra, Trustpilot), seriöse Fachpublikationen und insbesondere Reddit, eine seiner meistzitierten Domains. In diesem Kreis ehrliche Nennungen zu verdienen, bringt Ihrer Perplexity-Sichtbarkeit mehr als eine weitere Seite auf Ihrer eigenen Website. PR, die auf überprüfbaren Aussagen beruht, gewinnt diese Nennungen.</p>

          <h3>5. Monatlich messen</h3>
          <p>Führen Sie dieselben 20 Prompts jeden Monat erneut aus. Verfolgen Sie, welche Antworten Sie nun nennen und welche noch nicht. <a href="https://crunchjunky.io/">CrunchJunky</a> automatisiert das über mehrere Maschinen hinweg &mdash; oder machen Sie es manuell in einer Tabelle. Was Sie nicht messen, können Sie nicht verbessern.</p>

          <div className="prose-callout">
            <div className="prose-callout-kicker">Die ehrliche Version</div>
            <p>Perplexity-Sichtbarkeit wird verdient, nicht gehackt. Weil die Maschine abruforientiert ist, sehen Sie nach behobenen Crawl- und Strukturproblemen manchmal schneller Bewegung als bei anderen Plattformen &mdash; eine dauerhafte Präsenz braucht aber weiterhin ein paar Monate konsequenter Arbeit an Content, Struktur und Drittanbieter-Vertrauen. Wer Ihnen sofortige Zitate verspricht, verkauft Ihnen etwas.</p>
          </div>

          <h2>Wie pmax helfen kann</h2>
          <p>Wir betreiben KI-Sichtbarkeitsprogramme für Unternehmen in ganz Europa und behandeln Perplexity, ChatGPT und Googles KI-Overviews als getrennte Oberflächen mit getrennten Bewertungen &mdash; weil sie es sind. Das heißt: ein Audit pro Maschine, die technischen Grundlagen, Content und PR sowie eine monatliche Messung, die Sie tatsächlich lesen können. Wenn Sie eine kostenlose einseitige Perplexity-Sichtbarkeitsanalyse für Ihre Marke möchten, <a href="/de/contact/?topic=perplexity-audit">schildern Sie uns kurz Ihre Situation</a> und wir senden sie innerhalb einer Woche zurück.</p>

          <h2>Häufige Fragen</h2>
          <h3>Wie werde ich von Perplexity zitiert?</h3>
          <p>Sorgen Sie dafür, dass PerplexityBot Ihre Website crawlen kann, veröffentlichen Sie antwortorientierte, leicht zitierbare Inhalte und verdienen Sie Nennungen auf den Quellen, denen Perplexity vertraut &mdash; Wikipedia, etablierte Bewertungsseiten, seriöse Publikationen und relevante Reddit-Threads. Dann messen Sie monatlich und bleiben dran.</p>

          <h3>Warum erscheint mein Unternehmen nicht in Perplexity, obwohl es bei Google rankt?</h3>
          <p>Weil es unterschiedliche Systeme sind. Perplexity bevorzugt Seiten, die es live abrufen und sauber zitieren kann, und stützt sich auf einen engen Kreis vertrauenswürdiger Domains zur Validierung. Eine Seite kann bei Google ranken und trotzdem schwer crawlbar, schwer zitierbar oder durch die Drittanbieter-Signale, die Perplexity sucht, nicht gestützt sein.</p>

          <h3>Ist Perplexity-Sichtbarkeit dasselbe wie ChatGPT-Sichtbarkeit?</h3>
          <p>Nein. Die von beiden Maschinen zitierten Domains überschneiden sich erstaunlich wenig, daher brauchen beide eigene Bestandsaufnahmen und oft eigene Taktiken. In der einen aufzutauchen überträgt sich nicht auf die andere.</p>

          <h3>Wie lange dauert Perplexity-Sichtbarkeit?</h3>
          <p>Technische und strukturelle Korrekturen können innerhalb von Wochen sichtbar werden, weil Perplexity laufend neu crawlt und neu beantwortet. Das Drittanbieter-Vertrauen aufzubauen, das Zitate verlässlich macht, dauert in der Regel etwa zwei bis drei Monate stetiger Arbeit.</p>

          <h2>Weiterführende Links</h2>
          <ul>
            <li><a href="/de/services/ai-visibility/">Unsere KI-Sichtbarkeits-Leistungsseite</a> — was in einem Programm steckt</li>
            <li><a href="/de/blog/how-to-get-mentioned-by-chatgpt/">So wird Ihr Unternehmen von ChatGPT empfohlen</a> — der Begleitleitfaden für die andere große Maschine</li>
            <li><a href="/de/blog/gpt-shopping/">Was „ChatGPT Shopping" für E-Commerce 2026 bedeutet</a></li>
          </ul>
        </>
      ),
    },
    'how-to-get-mentioned-by-chatgpt': {
      toc: ['Was ist KI-Sichtbarkeit', 'Warum es jetzt wichtig ist', '5 Maßnahmen für diesen Monat', 'Wie pmax helfen kann', 'Weiterführende Links'],
      prose: (<>
        <p>Jede Woche stellt uns ein Kunde dieselbe Frage: „Wir sehen weniger Klicks von Google. Liegt das an ChatGPT?" Die ehrliche Antwort: wahrscheinlich ja, teilweise. Und es wird so weitergehen. Statt dagegen anzukämpfen ist der kluge Zug, dafür zu sorgen, dass Ihr Unternehmen das ist, was ChatGPT, Perplexity und Gemini tatsächlich empfehlen.</p>
        <p>Das ist ein kurzer, praktischer Leitfaden. Kein Jargon, keine Panikmache. Am Ende wissen Sie, was KI-Sichtbarkeit ist, warum es wichtig ist und welche fünf Maßnahmen jedes Unternehmen — auch Ihres — diesen Monat beginnen kann.</p>
        <h2>Was ist KI-Sichtbarkeit überhaupt?</h2>
        <p>Wenn jemand ChatGPT fragt „Was ist die beste Digitalagentur auf Mallorca?" oder Perplexity „Vergleiche drei Solarinstallateure in Spanien", generiert die KI eine Antwort, die bestimmte Unternehmen namentlich nennt. Manchmal verlinkt sie sie. Manchmal fasst sie ihr Angebot zusammen. Manchmal empfiehlt sie sie einfach.</p>
        <p>KI-Sichtbarkeit (auch Generative Engine Optimisation oder GEO genannt) ist die Praxis, dafür zu sorgen, dass Ihr Unternehmen in dieser Antwort vorkommt. Es ist eine neue Schicht über dem klassischen SEO — die technischen Grundlagen sind dieselben — aber es kommt Arbeit rund um strukturierte Daten, Content-Qualität und Vertrauenssignale hinzu.</p>
        <h2>Warum ist es jetzt wichtig?</h2>
        <ol>
          <li><strong>Menschen nutzen KI zum Recherchieren vor dem Kauf.</strong> Gartner schätzt, dass 61 % der Käuferreisen 2026 durch mindestens eine KI-Antwortoberfläche laufen.</li>
          <li><strong>KI-Tools werden quellenehrlicher.</strong> ChatGPT, Perplexity und Gemini zeigen jetzt ihre Quellen. Zitierungen haben damit direkten, messbaren Wert.</li>
          <li><strong>Google selbst wird zur KI-Oberfläche.</strong> KI-Overviews erscheinen für die meisten informativen Anfragen über den traditionellen Ergebnissen.</li>
        </ol>
        <h2>Fünf Maßnahmen für diesen Monat</h2>
        <h3>1. Den Status quo prüfen</h3>
        <p>Verbringen Sie eine Stunde damit, 20 Fragen zu Ihrer Kategorie durch ChatGPT, Perplexity und Gemini laufen zu lassen. Fragen, die ein echter Käufer stellen würde: „Bestes X in Y für Budget Z", „Vergleich A und B". Schreiben Sie auf, welche Mitbewerber genannt werden — das ist Ihre Ausgangsbasis.</p>
        <h3>2. Die About-Seite sachlich gestalten</h3>
        <p>KI-Modelle zitieren Unternehmen, deren Identität sie verifizieren können. Ihre About-Seite sollte klar angeben: was Sie tun, wo Sie sitzen, wer gegründet hat, wann, wer leitet und wer Ihre typischen Kunden sind. Klares Deutsch, überprüfbare Fakten, kein Marketing-Fluff.</p>
        <h3>3. Die richtigen strukturierten Daten hinzufügen</h3>
        <p>Schema.org-Markup teilt KI-Crawlern mit, was jede Seite ist. Mindestens: <code>Organization</code> seitenübergreifend, <code>Service</code> oder <code>Product</code> auf den Seiten, <code>FAQPage</code> auf der FAQ. Für standortabhängige Unternehmen: <code>LocalBusiness</code> mit vollständiger Adresse.</p>
        <h3>4. An Orten zitiert werden, denen KI vertraut</h3>
        <p>Große Sprachmodelle vertrauen Quellen, denen ihre Trainingsdaten vertrauen: Wikipedia, Fachpublikationen, etablierte Bewertungsseiten (G2, Capterra, Trustpilot), hochkarätige Pressemeldungen. PR, die auf verifizierbaren Behauptungen basiert, gewinnt diese Nennungen.</p>
        <h3>5. Monatlich messen</h3>
        <p>Führen Sie dieselben 20 Prompts jeden Monat erneut aus. <a href="https://crunchjunky.io/">CrunchJunky</a> kann das automatisieren — oder machen Sie es manuell. Was Sie nicht messen, können Sie nicht verbessern.</p>
        <div className="prose-callout">
          <div className="prose-callout-kicker">Die ehrliche Version</div>
          <p>KI-Sichtbarkeit ist kein Hack. Sie wird verdient. Die meisten Unternehmen sehen ihre ersten zuverlässigen Nennungen nach 8–12 Wochen disziplinierter Arbeit.</p>
        </div>
        <h2>Wie pmax helfen kann</h2>
        <p>Wir betreiben KI-Sichtbarkeitsprogramme für Unternehmen in ganz Europa — das vollständige Audit, die technischen Grundlagen, Content und PR sowie die monatliche Messung. Wenn Sie ein kostenloses einseitiges Audit wünschen, <a href="/de/contact/?topic=ki-audit">schildern Sie uns kurz Ihre Situation</a> und wir senden es innerhalb einer Woche zurück.</p>
        <h2>Weiterführende Links</h2>
        <ul>
          <li><a href="/de/services/ai-visibility/">Unsere KI-Sichtbarkeits-Leistungsseite</a> — was in einem Programm steckt</li>
          <li><a href="/de/blog/perplexity-visibility/">Perplexity-Sichtbarkeit verbessern</a> — Perplexity ist retrieval-first und braucht eigene Taktiken</li>
          <li><a href="/de/blog/gpt-shopping/">Was „ChatGPT Shopping" für E-Commerce 2026 bedeutet</a></li>
          <li><a href="/de/blog/tracking-setup-guide/">Leitfaden zum richtigen Aufbau von Tracking</a></li>
        </ul>
      </>),
    },
    'performance-max-2026': {
      toc: ['Brand-Ausschlüsse sind jetzt Standard', 'Kampagnen-Value-Rules', 'Asset-Gruppen-Struktur', 'Search Themes', 'Gewinnbasierte tROAS-Ziele', 'Listing-Gruppen für Katalogkontrolle', 'First-Party-Audience-Signale'],
      prose: (<>
        <p>Performance Max begann als Black Box. 2026 ist es eine etwas weniger undurchsichtige Black Box mit deutlich mehr Steuerrädern. Hier ist, was wir tatsächlich als Erstes ändern.</p>
        <h2>Brand-Ausschlüsse sind jetzt Standard</h2>
        <p>Die wichtigste Änderung seit dem Launch: Sie können endlich Brand-Suchbegriffe von PMax ausschließen. Nutzen Sie es. Legen Sie am ersten Tag jeder PMax-Kampagne eine Brand-Ausschlussliste an und leiten Sie Brand-Traffic in eine gut verwaltete Search-Kampagne. Wir sehen Kunden, die innerhalb des ersten Monats allein dadurch 15–25 % ihres PMax-Budgets einsparen.</p>
        <h2>Kampagnen-Value-Rules</h2>
        <p>Value Rules ermöglichen es Ihnen, PMax mitzuteilen, dass ein Kunde in Deutschland 1,3-mal so viel wert ist wie ein Kunde in Italien — oder dass ein Bestandskunde 0,6-mal so viel wert ist wie ein Neukunde. Kombiniert mit First-Party-Datensegmenten ist das der am stärksten unterschätzte Hebel auf der Plattform.</p>
        <h2>Asset-Gruppen-Struktur</h2>
        <p>Legen Sie nicht Ihren gesamten Katalog in eine Asset-Gruppe. Teilen Sie nach Margen-Tier oder Produktkategorie auf — jede Gruppe bekommt ihr eigenes Creative, ihr eigenes Audience-Signal, ihr eigenes tROAS-Ziel. Das allein bewegt typischerweise den gemischten ROAS um 20–30 %.</p>
        <h2>Search Themes</h2>
        <p>Nutzen Sie sie, aber sparsam. PMax neigt dazu, Search Themes zu übergewichten und Budget für benachbarte Suchanfragen zu verschwenden. Setzen Sie Themes nur für klar unterversorgte Anfragen, bei denen Sie nachweisen können, dass sie von Ihren bestehenden Search-Kampagnen nicht bedient werden.</p>
        <h2>Gewinnbasierte tROAS-Ziele</h2>
        <p>tROAS auf Basis von Umsatz zu setzen ist ein Kategorienirrtum. Berechnen Sie ihn auf der Bruttogewinnmarge, speisen Sie Bruttogewinnwerte als Conversion-Value ein und beobachten Sie, wie der Algorithmus endlich die Kunden jagt, die Sie tatsächlich wollen.</p>
        <h2>Listing-Gruppen für Katalogkontrolle</h2>
        <p>Listing-Gruppen in PMax ermöglichen es Ihnen zu steuern, welche Produkte priorisiert werden. Wir nutzen sie, um margenstarke, niedrig bestandene, saisonale Produkte zu bestimmten Zeiten zu pushen — ein kleiner Hebel, große Auswirkung auf den Gewinn.</p>
        <h2>First-Party-Audience-Signale</h2>
        <p>Laden Sie Ihre Customer-Match-Liste, Ihr High-LTV-Cohort, Ihr Segment der jüngsten Käufer hoch. PMax nutzt diese nicht als Targeting — aber als starkes Signal für den Algorithmus. Der Lift ist real.</p>
        <p>Verwandte Leistungen: <a href="/de/services/google-ads/">Google Ads &amp; Performance Max</a> &mdash; und wie PMax in den größeren <a href="/de/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/">Google vs. Meta vs. TikTok Channel-Mix</a> passt. Außerdem: <a href="/de/blog/performance-max-bidding-change-august-2026/">Gebotsänderung am 17. August</a> &mdash; was vor dem Stichtag zu tun ist.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=performance-max-2026">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'tracking-setup-guide': {
      toc: ['Warum Dashboards lügen', 'Server-seitiges Tagging', 'Consent Mode v2', 'Enhanced Conversions', 'Offline-Conversion-Imports', 'Abgleich'],
      prose: (<>
        <p>Wenn Sie Ihren Marketingdaten nicht vertrauen können, können Sie keine Entscheidungen damit treffen. Hier ist ein verständlicher Leitfaden zum Aufbau von Tracking, das nicht lügt.</p>
        <h2>Warum Dashboards lügen</h2>
        <p>Marketing-Tracking hat 2026 drei große Feinde: iOS-Datenschutzbeschränkungen, Cookie-Einwilligung und die Lücke zwischen dem Klick und dem tatsächlichen Umsatz. Das Standardsetup der meisten Websites wurde für 2018 konzipiert. Es funktioniert jetzt nicht mehr.</p>
        <h2>Server-seitiges Tagging</h2>
        <p>Hören Sie auf, Daten direkt vom Browser des Nutzers an Google, Meta und andere zu senden. Richten Sie einen server-seitigen Google Tag Manager-Container ein — üblicherweise auf einer Subdomain wie <code>track.ihredomain.com</code> — und leiten Sie alles darüber. Performance verbessert sich, Datenschutz verbessert sich, Datenqualität verbessert sich.</p>
        <h2>Consent Mode v2</h2>
        <p>Wenn Sie in der EU tätig sind und Consent Mode v2 nicht implementiert haben, sind Ihre Google Ads-Daten wesentlich schlechter als nötig. Consent Mode ermöglicht Google, modellierte Conversions für nicht einwilligende Nutzer aufzufüllen — 30–50 % der verlorenen Daten werden so zurückgewonnen.</p>
        <h2>Enhanced Conversions</h2>
        <p>Übergeben Sie gehashte E-Mail-Adressen (mit Einwilligung) an die <a href="/de/services/analytics/">Conversion-APIs</a> von Google und Meta. Diese einzelne Änderung verbessert das gemessene Conversion-Volumen in iOS-lastigen Kategorien typischerweise um 15–25 %.</p>
        <h2>Offline-Conversion-Imports</h2>
        <p>Wenn Ihr Verkaufszyklus länger als eine Woche ist, benötigen Sie Offline-Conversion-Imports. Verbinden Sie Ihr CRM mit den Offline-Events-APIs und speisen Sie tatsächlich abgeschlossene Umsätze zurück. Die Plattformen beginnen dann, für die richtigen Menschen zu optimieren.</p>
        <h2>Abgleich</h2>
        <p>Vergleichen Sie einmal im Monat den von der Anzeigenplattform gemeldeten Umsatz mit Ihrer tatsächlichen Buchhaltung. Streben Sie eine Abweichung von unter 15 % an. Alles darüber bedeutet, dass irgendetwas in der Kette defekt ist.</p>
        <p>Weiterführende Links: <a href="/de/blog/cookieless-tracking/">Cookieless Tracking 2026</a> — und <a href="/de/blog/crm-conversion-imports/">CRM-Daten für bessere Offline-Conversions nutzen</a>.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=tracking-setup-guide">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'meta-creative-volume': {
      title: 'Meta Creative in Volumen produzieren — das System',
      toc: ['Das Volumenproblem', 'Brand als Template nicht als Asset', 'Hooks Hooks Hooks', 'UGC in großem Maßstab', 'Performance-Creative-Briefing', 'Wöchentlich aussortieren monatlich skalieren'],
      prose: (<>
        <p>Metas eigene Forschung besagt, dass Creative der größte Einzeltreiber der Paid-Social-Performance ist. Die meisten Creative-Pipelines von Marken wurden für eine Welt gebaut, in der das nicht so war. Hier ist, wie man eine aufbaut, die für 2026 geeignet ist.</p>
        <h2>Das Volumenproblem</h2>
        <p>Metas Creative-Bibliothek benötigt jetzt 10–20 neue Assets pro Woche, um die Performance stabil zu halten. Die meisten Marken liefern 2–3. Die Lücke zeigt sich als steigende Frequenz, fallende CTR und ein CPM, der jedes Quartal nach oben driftet.</p>
        <h2>Brand als Template, nicht als Asset</h2>
        <p>Bauen Sie ein eng templated Brand-System — Schriften, Farben, Motion-Primitives, Layouts — und lassen Sie dann Kreative schnell darin arbeiten. Die Brand wird durch das Template durchgesetzt; die Kreative bringen die Ideen. So liefern Sie 15 Assets pro Woche ohne 15 Brand-Reviews.</p>
        <h2>Hooks, Hooks, Hooks</h2>
        <p>Die ersten drei Sekunden jedes Videos sind die einzigen, die zählen. Wir testen Hooks mehr als alles andere — gleicher Body, sechs verschiedene Eröffnungssekunden. Der gewinnende Hook wird in der nächsten Woche wiederverwendet.</p>
        <h2>UGC in großem Maßstab</h2>
        <p>Führen Sie ein kleines, laufendes <a href="/de/services/creative/">Creator-Programm</a> durch — 5–10 Creator auf Retainer, wöchentlich gebrieft. Günstiger als Agentur-Creative, schneller als internes Creative, und Metas Algorithmus bevorzugt es tendenziell.</p>
        <h2>Performance-Creative-Briefing</h2>
        <p>Briefs gehen von Ihrem Media-Team an Ihr Creative-Team, nicht umgekehrt. Das Brief enthält: für welches Ad-Set, was der Hook testen soll, was der Proof Point ist, was der CTA antreiben muss. Brand-Input kommt danach.</p>
        <h2>Wöchentlich aussortieren, monatlich skalieren</h2>
        <p>Jeden Freitag alles unter der Performance-Schwelle beenden. Einmal im Monat die drei besten Creative-Muster identifizieren und das Creative des nächsten Monats darum herum briefen. Die Erkenntnisse kompoundieren.</p>
        <p>Weiterführende Links: <a href="/de/blog/creative-testing-framework/">Creative-Tests, die sich wirklich aufbauen</a> — und unsere <a href="/de/services/paid-social/">Paid Social Leistung</a>.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=meta-creative-volume">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'google-ads-mallorca': {
      title: 'Google Ads Mallorca — lokales Targeting-Playbook',
      toc: ['Die Standard-Geo-Einstellungen sind falsch', 'Spracheinstellungen schneiden in beide Richtungen', 'Lokales Conversion-Tracking', 'Bidding für touristische Saisonalität', 'Local Pack und Maps'],
      prose: (<>
        <p>Anzeigen von Mallorca aus zu schalten ist anders. Ihre Kunden googeln in fünf Sprachen, Ihre Mitbewerber sitzen in Madrid, und Googles Standard-Geo-Targeting ist für Sie falsch. Hier ist, was zu korrigieren ist.</p>
        <h2>Die Standard-Geo-Einstellungen sind falsch</h2>
        <p>Google Ads wird standardmäßig mit „Präsenz oder Interesse" geliefert. Für lokale Mallorca-Unternehmen bedeutet das, Anzeigen jedem in Spanien zu zeigen, der jemals „Interesse" an Mallorca gezeigt hat — Millionen von Menschen, die niemals Kunden werden. Wechseln Sie am ersten Tag zu „Nur Präsenz".</p>
        <h2>Spracheinstellungen schneiden in beide Richtungen</h2>
        <p>Mallorca-Kunden googeln auf Spanisch, Katalanisch, Deutsch und Englisch — manchmal alle vier in einer einzigen Session. Entscheiden Sie sich nicht für eine Sprache. Bauen Sie separate Kampagnen pro Sprache auf, mit übersetzten Keywords, Anzeigen und Landingpages. Auto-übersetzte Kopien kosten Sie 30–40 % der Performance.</p>
        <h2>Lokales Conversion-Tracking</h2>
        <p>Für Unternehmen an physischen Standorten sind Anruf-Tracking und Besuchs-Tracking wichtiger als Formular-Ausfüllungen. Richten Sie sie ein. Googles „Store Visits"-Conversion ist kostenlos und wird zu wenig genutzt.</p>
        <h2>Bidding für touristische Saisonalität</h2>
        <p>50 % der kommerziellen Suchanfragen auf Mallorca finden zwischen April und September statt. Fahren Sie keine flachen Gebote das ganze Jahr. Bauen Sie tages- und saisonparted Bidding-Strategien, die der tatsächlichen Nachfragekurve entsprechen.</p>
        <h2>Local Pack und Maps</h2>
        <p>Wenn Sie ein Dienstleistungsunternehmen sind, generiert Ihr Google-Unternehmensprofil mehr Umsatz als Ihre Anzeigen. Optimieren Sie es ordentlich: Fotos monatlich aktualisiert, Reviews vierteljährlich angefragt, Leistungen richtig kategorisiert. Die Arbeit kompoundiert.</p>
        <p>Unsere <a href="/de/services/google-ads/">Google Ads &amp; Performance Max Leistung</a> — gebaut für Mallorcas mehrsprachige, saisonale Nachfrage. Kampagnen in Spanien insgesamt? Sehen Sie unsere <a href="/de/google-ads-agentur-spanien/">Google Ads Agentur Spanien</a>. Full-Service — Paid, SEO und Social unter einem Retainer? Sehen Sie unsere <a href="/de/marketing-agentur-mallorca/">Marketing Agentur Mallorca</a>.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=google-ads-mallorca">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'shopify-seo-2026': {
      toc: ['Collection-Page-Metadaten', 'Facettierte Navigation', 'Produkt-Schema', 'Bild-Alt-Texte', 'Seitengeschwindigkeit', 'Blog-Content der wirklich rankt', 'Interne Verlinkung von Collection-Seiten', 'Hreflang für mehrsprachige Shops'],
      prose: (<>
        <p>Shopify ist eine hervorragende Commerce-Plattform mit mittelmäßigen SEO-Standardeinstellungen. Acht spezifische Fixes, die nach unserer Erfahrung den organischen Traffic mehr bewegen als der Rest zusammen.</p>
        <h2>Collection-Page-Metadaten</h2>
        <p>Shopifys Standard-Meta-Titles für Collection-Seiten sind normalerweise nur der Collection-Name. Schlecht. Schreiben Sie jeden neu nach dem Muster <code>{'{Collection-Name} | {USP} | {Marke}'}</code> — und schreiben Sie eine echte Meta-Description, keine abgekürzte Description-Tag.</p>
        <h2>Facettierte Navigation</h2>
        <p>Wenn Ihre Collections Filter haben (Größe, Farbe, Preis), erzeugt das Standard-Shopify-Setup unendliche doppelte URLs, die Crawl-Budget verwässern. Nutzen Sie Canonical-Tags aggressiv und setzen Sie Filter-URLs auf noindex, die keinen SEO-Wert hinzufügen.</p>
        <h2>Produkt-Schema</h2>
        <p>Die meisten Shopify-Themes liefern Produkt-Schema, aber es ist normalerweise unvollständig. Fügen Sie aggregateRating, Review-Anzahl, Marke, GTIN, Zustand und Verfügbarkeitsfelder zu jedem Produkt hinzu. KI-Shopping-Interfaces gewichten diese besonders stark.</p>
        <h2>Bild-Alt-Texte</h2>
        <p>Das am häufigsten übersprungene Ding in Shopify. Jedes Produktbild sollte beschreibenden Alt-Text haben, der den Produktnamen und ein relevantes Attribut enthält. Nutzen Sie Shopifys Bulk-Editor — eine Stunde Arbeit, dauerhafter SEO-Effekt.</p>
        <h2>Seitengeschwindigkeit</h2>
        <p>Shopify-Themes sind aufgebläht. Führen Sie Lighthouse aus, identifizieren Sie die 3–5 schwersten Apps und entfernen Sie sie. Nutzen Sie Shopifys native Sections statt App-basierter wo immer möglich. Ziel: LCP unter 2,5 Sekunden auf Mobilgeräten.</p>
        <h2>Blog-Content, der wirklich rankt</h2>
        <p>Nutzen Sie Shopifys Blog nicht für Pressemeldungen. Bauen Sie kategoriedefinierenden Content auf — Käuferführer, Vergleichsinhalte, Experten-Anleitungen — der auf relevante Produkt-Collections verlinkt. Hier kompoundiert Shopify-SEO.</p>
        <h2>Interne Verlinkung von Collection-Seiten</h2>
        <p>Fügen Sie echten Redaktionstext am Anfang jeder Collection-Seite hinzu (300–500 Wörter) und verlinken Sie auf verwandte Collections. Die meisten Shopify-Themes verstecken das — finden Sie den Bereich, aktivieren Sie ihn, schreiben Sie echten Content.</p>
        <h2>Hreflang für mehrsprachige Shops</h2>
        <p>Wenn Sie in mehreren Sprachen verkaufen, richten Sie Hreflang richtig ein. Shopify Markets handhabt das, wenn korrekt konfiguriert, aber die Standardeinstellungen sind normalerweise falsch. Auditieren Sie jeden Markt auf korrekte Hreflang-Tags.</p>
        <p>Weiterführende Links: unsere <a href="/de/services/seo/">SEO-Leistung</a>, unser <a href="/de/industries/ecommerce/">E-Commerce-Marketing-Playbook</a> — und <a href="/de/blog/how-to-get-mentioned-by-chatgpt/">wie strukturierte Daten auch ChatGPT-Nennungen erzeugen</a>.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=shopify-seo-2026">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'hotel-direct-bookings': {
      title: 'Mallorca-Hotel: +52 % Direktbuchungen in 11 Wochen',
      toc: ['Der Ausgangspunkt', 'Die Vier-Wochen-Diagnose', 'Der Buchungsfluss-Neuaufbau', 'Die Paid-Media-Verschiebung', 'Die Zahlen'],
      prose: (<>
        <p>Die meisten unabhängigen Hotels verlieren 17–22 % ihres Umsatzes an OTA-Provisionen. Hier ist die echte Geschichte eines Mallorca-Hotels, das den Großteil davon in weniger als drei Monaten zurückgewann.</p>
        <h2>Der Ausgangspunkt</h2>
        <p>Mar y Roca ist ein 34-Zimmer-Boutique-Hotel in Port d&rsquo;Andratx. Im Jahr 2024 kamen 78 % ihrer Buchungen über Booking.com und Expedia — mit einer durchschnittlichen Provision von 18 %. Direktbuchungen lagen bei rund 22 %, obwohl die Website modern genug aussah.</p>
        <h2>Die Vier-Wochen-Diagnose</h2>
        <p>Die Website sah modern aus, konvertierte aber schlecht: ein fünfstufiger Buchungsfluss, keine Ratenparität, langsam auf Mobilgeräten und eine Hero-Galerie, die nicht zum tatsächlichen Gefühl des Hotels passte. Meta- und Google-Anzeigen waren generisch und erwähnten keine Preisvorteile gegenüber OTAs.</p>
        <h2>Der Buchungsfluss-Neuaufbau</h2>
        <p>Fünf Schritte wurden zu drei. Mobile-First. Eine klare Botschaft „Bester Preis garantiert — direkt buchen und X € sparen", verknüpft mit Live-OTA-Rate-Scraping, damit die Ersparnis immer real war. Die Conversion-Rate vom Buchungsmaschinen-Einstieg bis zur bestätigten Buchung stieg von 2,1 % auf 8,4 %.</p>
        <h2>Die Paid-Media-Verschiebung</h2>
        <p><a href="/de/services/paid-social/">Meta</a> und <a href="/de/services/google-ads/">Google Hotel Ads</a>. Das Meta-Creative konzentrierte sich auf die Zimmer und Ausblicke, für die das Hotel wirklich bekannt war, nicht auf generische Reisebilder. Google Hotel Ads wurden nur auf Datumsbereiche geboten, an denen das Hotel Verfügbarkeit hatte.</p>
        <h2>Die Zahlen</h2>
        <p>Nach 11 Wochen waren Direktbuchungen um 52 % gewachsen und Gesamtbuchungen um 11 %. Bei rund 350.000 € monatlichem Direktumsatz gegenüber der vorherigen Verlaufsrate betrug die jährlich eingesparte OTA-Provision etwa 184.000 €.</p>
        <p>Wir nutzten <a href="/de/services/conversion-design/">Conversion Design (CRO)</a>, <a href="/de/services/google-ads/">Google Ads</a> und <a href="/de/services/paid-social/">Meta Ads</a>. Mehr in unserem <a href="/de/industries/hospitality/">Hospitality-Marketing-Playbook</a> und unseren <a href="/de/cases/">Referenzen</a>. Auf Mallorca ansässig und suchen eine Full-Service-Agentur? Sehen Sie unsere <a href="/de/marketing-agentur-mallorca/">Marketing Agentur Mallorca</a>.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=hotel-direct-bookings">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'b2b-linkedin-playbook': {
      title: 'B2B-LinkedIn-Playbook für SaaS-Kunden',
      toc: ['Zielgruppendesign', 'Drei Kampagnenziele drei Zielgruppen', 'Thought-Leader-Ads werden unterschätzt', 'Document Ads für die Consideration-Phase', 'Conversation Ads für hohe Intention', 'CRM-gespeiste Offline-Conversions', 'Lead-Scoring vor der Plattform'],
      prose: (<>
        <p>LinkedIn ist auf CPM-Basis die teuerste Werbeplattform — und der günstigste Ort, einen B2B-Käufer zu finden, wenn man es richtig macht. Hier ist das Playbook, das wir am ersten Tag jedes B2B-SaaS-Retainers einsetzen.</p>
        <h2>Zielgruppendesign — Grundprinzipien</h2>
        <p>„Senior-Entscheider in [Branche]" ist keine Zielgruppe. Es ist eine Stellenbeschreibung. Bauen Sie Zielgruppen aus echten Kunden-LTV-Daten auf: wer kauft ab, wer bleibt, wer upgradet. Dann bauen Sie LinkedIn-Zielgruppen, die diese Muster spiegeln — Jobfunktion + Seniorität + Unternehmensgröße + Tech-Stack + Geografie.</p>
        <h2>Drei Kampagnenziele, drei Zielgruppen</h2>
        <p>Eine Awareness-Kampagne, eine Consideration-Kampagne, eine Conversion-Kampagne. Jede bekommt eine andere Zielgruppengröße, ein anderes Creative-Format, eine andere Bidding-Strategie. Kollabieren Sie sie nicht in eine — LinkedIns Algorithmus braucht die Trennung.</p>
        <h2>Thought-Leader-Ads werden unterschätzt</h2>
        <p>Wenn Sie einen Gründer oder Senior-Leader haben, der auf LinkedIn postet, übertreffen Thought-Leader-Ads (bei denen Sie seinen organischen Post als bezahlte Anzeige promoten) Marken-Konto-Anzeigen 2–3x beim Engagement.</p>
        <h2>Document Ads für die Consideration-Phase</h2>
        <p>Ein echter Branchenbericht oder Leitfaden, geliefert als Document Ad, ist das beste Mid-Funnel-Asset, das LinkedIn je veröffentlicht hat. Einmal gebrieft, sechs Monate laufen, Leads kompoundieren beobachten.</p>
        <h2>Conversation Ads für hohe Intention</h2>
        <p>Für Events, Demos und ABM kosten Conversation Ads (in LinkedIn Messaging) routinemäßig 40–60 % weniger pro qualifiziertem Meeting als Form-Fills. Sie funktionieren am besten, wenn sie wie eine echte Person geschrieben sind — nicht wie eine Marketing-E-Mail.</p>
        <h2>CRM-gespeiste Offline-Conversions</h2>
        <p>Das größte Unlock. Verbinden Sie LinkedIns Offline-Conversion-API mit Ihrem CRM. Speisen Sie MQL, SQL, Opportunity Created und Closed-Won-Events mit ihren Werten zurück. LinkedIns Algorithmus beginnt, für tatsächliche Einnahmen zu optimieren.</p>
        <h2>Lead-Scoring vor der Plattform</h2>
        <p>Nutzen Sie ein Tool wie Clearbit / 6sense / Ihre eigene Anreicherung, um Leads zu bewerten, bevor sie als Conversions in LinkedIn feuern. Feuern Sie „qualifizierter Lead"-Conversions nur für Leads, die es wert sind. Der Algorithmus wird dramatisch genauer.</p>
        <p>Weiterführende Links: unsere <a href="/de/services/paid-social/">Paid Social Leistung</a> (LinkedIn, Meta, TikTok), unser <a href="/de/industries/hr/">HR &amp; Recruiting Marketing-Playbook</a> — und <a href="/de/blog/crm-conversion-imports/">CRM-Offline-Conversions für einen intelligenteren Algorithmus</a>.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=b2b-linkedin-playbook">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'cookieless-tracking': {
      toc: ['Was sich wirklich geändert hat', 'Server-seitiges Tagging', 'Consent Mode v2', 'Conversion-APIs', 'First-Party-Datenstrategie', 'Modellierte Conversions'],
      prose: (<>
        <p>Third-Party-Cookies sind funktional tot. Apple hat sie auf iOS vor fünf Jahren eliminiert, Chrome beendet den Job jetzt. Hier ist, wie man Conversions im Jahr 2026 verfolgt, ohne gegen das Gesetz zu verstoßen oder alle Daten zu verlieren.</p>
        <h2>Was sich wirklich geändert hat</h2>
        <p>Apples ITP, Chromes Privacy Sandbox und der DSGVO-Durchsetzungsdruck haben die Lebensdauer eines Tracking-Cookies kollektiv von ~2 Jahren auf ~7 Tage auf den meisten Browsern reduziert. Jede Conversion, die mehr als eine Woche nach dem Klick stattfindet, ist für Standard-Tracking unsichtbar.</p>
        <h2>Server-seitiges Tagging</h2>
        <p>Verlagern Sie Ihren Tag Manager vom Browser des Nutzers auf Ihren eigenen Server. Dies stellt die Cookie-Lebensdauer auf alles wieder her, was Ihre Domain erlaubt (üblicherweise 30–90+ Tage), verbessert die Seitengeschwindigkeit und gibt Ihnen eine datenschutzkonforme Möglichkeit, First-Party-Daten zu übergeben.</p>
        <h2>Consent Mode v2</h2>
        <p>Googles Consent Mode v2 ermöglicht es Ihnen, Google mitzuteilen, ob der Nutzer in Anzeigen- und Analytics-Cookies eingewilligt hat. Falls nicht, erhält Google anonymisierte Signale zur Modellierung der Conversion. Korrekt implementiert, erholen Sie 30–50 % der Daten, die Sie sonst verlieren würden.</p>
        <h2>Conversion-APIs</h2>
        <p>Meta CAPI, TikTok Events API, LinkedIn Conversions API, <a href="/de/services/analytics/">Google Enhanced Conversions</a>. Alle ermöglichen es Ihnen, gehashte First-Party-Daten von Ihrem Server an die Plattform zu senden. Alle verbessern die Datenqualität. Alle werden zu wenig genutzt.</p>
        <h2>First-Party-Datenstrategie</h2>
        <p>Wenn Sie keine First-Party-Datenstrategie haben, bauen Sie eine. E-Mail-Captures, Kontoerstellung, Treueprogramme, Gated Content — was auch immer zu Ihrem Unternehmen passt. First-Party-Daten sind jetzt das Fundament, von dem alles andere abhängt.</p>
        <h2>Modellierte Conversions</h2>
        <p>Erwarten Sie, dass 20–40 % Ihrer Conversion-Daten 2026 modelliert statt direkt beobachtet werden. Das ist normal und kein Problem, wenn das Modell gut gespeist ist. Präzise tägliche Attribution ist aber vorbei — akzeptieren Sie das.</p>
        <p>Weiterführende Links: <a href="/de/blog/tracking-setup-guide/">Tracking richtig aufbauen</a> — und unsere <a href="/de/services/analytics/">Analytics &amp; Tracking Leistung</a>.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=cookieless-tracking">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'real-estate-lead-gen': {
      toc: ['Das Problem des kaufbereiten Käufers', 'Mehrschrittig schlägt einschrittig', 'Die einfachen Fragen zuerst stellen', 'Fortschritt anzeigen', 'Vorqualifizierung reduziert Rauschen', 'Mobile-Tastatur-Hygiene'],
      prose: (<>
        <p>Immobilien ist eine der kaufintentionsstärksten Suchkategorien im Internet. Warum konvertieren dann die meisten Makler-Websites unter 1 %? Normalerweise liegt es am Formular.</p>
        <h2>Das Problem des kaufbereiten Käufers</h2>
        <p>Ein Nutzer, der auf der „Kostenlose Bewertung"-Seite einer Immobilienagentur landet, hat hohe Absicht. Er hat bereits entschieden, dass er vielleicht verkaufen möchte. Das Formular ist das Einzige, was zwischen Ihnen und einem qualifizierten Lead steht — und die meisten Formulare sind so gestaltet, dass sie diese Menschen verlieren.</p>
        <h2>Mehrschrittig schlägt einschrittig</h2>
        <p>Ein 8-Felder-Formular auf einer einzelnen Seite konvertiert bei rund 1,5 %. Die gleichen 8 Felder auf 3 logische Schritte verteilt konvertieren bei 6–10 %. Jeder Schritt ist eine kleine Verpflichtung; sobald ein Nutzer die erste Frage beantwortet hat, ist er eher geneigt fertigzumachen.</p>
        <h2>Die einfachen Fragen zuerst stellen</h2>
        <p>„Was ist der Immobilientyp?" vor „Was ist Ihre E-Mail-Adresse?". Der Nutzer füllt seine persönlichen Daten zuletzt aus, nachdem er bereits Aufwand investiert hat. Drehen Sie das um und Sie werden Conversion-Rates einbrechen sehen.</p>
        <h2>Fortschritt anzeigen</h2>
        <p>Eine Fortschrittsleiste oben im Formular („Schritt 2 von 4") verbessert die Vervollständigung merklich. Menschen sind eher bereit, das zu beenden, was sie begonnen haben.</p>
        <h2>Vorqualifizierung reduziert Rauschen</h2>
        <p>Nutzen Sie das Formular zur Vorqualifizierung: Budgetbereich, Verkaufszeitplan, aktueller Immobilientyp. Der 30-%-Rückgang bei Leads lohnt sich — die 70 %, die fertigmachen, sind für Ihre Makler dramatisch nützlicher.</p>
        <h2>Mobile-Tastatur-Hygiene</h2>
        <p>E-Mail-Felder sollten E-Mail-Tastaturen auslösen. Telefonfelder sollten numerische Tastaturen auslösen. Machen Sie einem mobilen Nutzer nicht das dreifache Tastaturwechseln beim Ausfüllen Ihres Formulars.</p>
        <p>Das ist Kern unserer <a href="/de/services/conversion-design/">Conversion Design (CRO) Leistung</a>. Mehr in unserem <a href="/de/industries/real-estate/">Immobilien-Marketing-Playbook</a>.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=real-estate-lead-gen">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'tiktok-organic-paid': {
      toc: ['Content-Muster die Impressionen verdienen', 'Spark Ads nicht geboostete Posts', 'Creator-geführt nicht markengeführt', 'Die Compounding-Schleife'],
      prose: (<>
        <p>TikTok ist für die meisten Marken kein „Sollten wir da sein?"-Kanal mehr. Es ist ein „Wie sind wir da effizient?"-Kanal. Hier ist, was 2026 funktioniert.</p>
        <h2>Die Content-Muster, die Impressionen verdienen</h2>
        <p>Drei Muster dominieren 2026 das Organic: <strong>Hinter-den-Kulissen-Prozess</strong> (Menschen beim Zusehen, wie Dinge gemacht werden), <strong>Gründer vor der Kamera</strong> (authentisch, ungeschrieben, geringe Produktion) und <strong>Produkt im Kontext</strong> (zeigen, wie das Produkt in ein echtes Leben passt, nicht ein perfektes). Fast alles andere liefert unterdurchschnittliche Ergebnisse.</p>
        <h2>Spark Ads, nicht geboostete Posts</h2>
        <p>Nutzen Sie Spark Ads, um organischen Content zu promoten, der bereits Engagement erzielt hat. Boosten Sie keine Posts — Spark Ads tragen den vollen Social Proof des ursprünglichen organischen Engagements, was sie deutlich besser funktionieren lässt.</p>
        <h2>Creator-geführt, nicht markengeführt</h2>
        <p>Die meisten Marken-Konto-Creatives auf TikTok sterben. Lassen Sie Creator Content für Sie erstellen, holen Sie sich Usage Rights und schalten Sie diese Creatives als Spark Ads. Der Lift gegenüber Marken-Konto-Creatives ist normalerweise 3–5x.</p>
        <h2>Die Compounding-Schleife</h2>
        <p>Identifizieren Sie jeden Monat Ihre Top-3-organischen Videos. Spark-Ad-schalten Sie sie. Nutzen Sie die Erkenntnisse, um den Creator-Content des nächsten Monats zu briefen. Wiederholen. Die Marken, die TikTok knacken, kompoundieren diese Schleife Monat für Monat.</p>
        <p>Weiterführende Links: unsere <a href="/de/services/paid-social/">Paid Social Leistung</a> und <a href="/de/services/creative/">Creative Production</a>, unser <a href="/de/industries/ecommerce/">E-Commerce-Marketing-Playbook</a> — und <a href="/de/blog/meta-creative-volume/">wie man eine Meta-Creative-Pipeline aufbaut</a> (die Prinzipien sind auf TikTok identisch).</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=tiktok-organic-paid">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'crm-conversion-imports': {
      title: 'CRM-Offline-Conversions: auf Umsatz optimieren',
      toc: ['Die Formulareinsendungs-Falle', 'Offline-Conversions erklärt', 'Implementierung', 'Was sich verändert', 'Häufige Fallstricke'],
      prose: (<>
        <p>B2B-Marketing-Teams optimieren für das, was sie messen können. Was sie messen können, sind normalerweise Formulareinsendungen. Deshalb produzieren so viele B2B-Werbekonten Hunderte von MQLs und keinen Umsatz.</p>
        <h2>Die Formulareinsendungs-Falle</h2>
        <p>Wenn Sie eine Anzeigenplattform für „Formulareinsendung"-Conversions optimieren, wird sie Ihnen die günstigstmöglichen Formulareinsendungen finden. Das bedeutet normalerweise: die niedrigst-intentionellen Nutzer, die kleinsten Unternehmen, die falschen Jobtitel. Die Plattform macht ihren Job richtig — Sie geben ihr den falschen Job.</p>
        <h2>Offline-Conversions erklärt</h2>
        <p>Jede große Anzeigenplattform ermöglicht jetzt den Import von Offline-Events: MQLs, SQLs, Opportunity Created, Closed-Won. Jedes Event kann einen angehängten Wert haben. Die Plattform hört auf, für Formulareinsendungen zu optimieren und beginnt, für Events zu optimieren, die tatsächlich mit Umsatz korrelieren.</p>
        <h2>Implementierung</h2>
        <p>Drei Teile: eine Click-ID, die bei der Formulareinsendung erfasst wird (gclid für Google, fbclid für Meta, li_fat_id für LinkedIn), ein CRM-Feld, das sie speichert, und ein täglicher Export vom CRM zur Anzeigenplattform mit Click-ID, Event-Name und Wert.</p>
        <h2>Was sich verändert</h2>
        <p>Innerhalb von 2–3 Wochen nach der ordentlichen Implementierung sehen die meisten B2B-Konten: 30–50 % geringeres MQL-Volumen, aber 2–3x mehr SQLs und dramatisch höhere Pipeline-Werte. Dasselbe Werbebudget, dramatisch besseres Geschäftsergebnis.</p>
        <h2>Häufige Fallstricke</h2>
        <p>Stellen Sie sicher, dass die Werte, die Sie zurückspeisen, wirtschaftlich bedeutsam sind. Ein „Closed-Won"-Event sollte den tatsächlichen Vertragswert tragen, nicht einen festen 100-€-Platzhalter. Die Plattform optimiert gegen die Werte, die Sie ihr geben.</p>
        <p>Weiterführende Links: <a href="/de/blog/tracking-setup-guide/">Tracking richtig aufbauen</a> und unsere <a href="/de/services/analytics/">Analytics &amp; Tracking Leistung</a>.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=crm-conversion-imports">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'solar-marketing-spain': {
      title: 'Solar-Marketing Spanien — was wirklich funktioniert',
      toc: ['Das Meta-Problem', 'Vorqualifizierung auf der Landingpage', 'Regionsspezifische Förderungen', 'Langzyklus-Attribution', 'Google Ads ist meist der hochintentionelle Kanal'],
      prose: (<>
        <p>Spanien ist einer der besten Solarmärkte in Europa — und einer der wettbewerbsintensivsten. Hier ist, warum die meisten Solar-Installateure mit Paid Media zu kämpfen haben und was die erfolgreichen tun.</p>
        <h2>Das Meta-Problem</h2>
        <p>Solar-Leads von Meta kommen günstig. Sie kommen auch unqualifiziert. Der Standard-Solar-Meta-Funnel — „Kostenloses Solar-Angebot" → Formulareinsendung → Anruf vom Vertrieb — verschwendet 70–80 % der Zeit des Vertriebsteams mit Menschen, die nie kaufen werden.</p>
        <h2>Vorqualifizierung auf der Landingpage</h2>
        <p>Fügen Sie vor dem Formular ein 3-Fragen-Quiz hinzu: Dachtyp, monatliche Stromrechnung, Eigentümerstatus. Der Nutzer, der das abschließt, ist 4–5x wahrscheinlicher zu kaufen. Der Nutzer, der es nicht abschließt, spart Ihrem Vertriebsteam einen Anruf.</p>
        <h2>Regionsspezifische Förderungen</h2>
        <p>Spanische Solar-Förderungen unterscheiden sich nach Region — Andalucía, Cataluña, Madrid haben alle unterschiedliche Systeme. Generische nationale Landingpages verschwenden Budget. Bauen Sie regionale Landingpages, die mit der spezifischen Förderung führen, die anwendbar ist.</p>
        <h2>Langzyklus-Attribution</h2>
        <p>Die durchschnittliche spanische Solarinstallation dauert 4–6 Monate vom ersten Anzeigenklick bis zum unterzeichneten Vertrag. Wenn Sie für First-Touch-Attribution optimieren, optimieren Sie für die falschen Kunden. Verbinden Sie CRM-gespeiste Offline-Conversions und lassen Sie den Algorithmus von tatsächlichen Installationen lernen.</p>
        <h2>Google Ads ist meist der hochintentionelle Kanal</h2>
        <p>Für Solar erfasst <a href="/de/services/google-ads/">Google Ads</a> höhere Intention als <a href="/de/services/paid-social/">Meta</a>. Die Budgetgewichtung, die die meisten Installateure fahren (60 % Meta, 40 % Google), ist normalerweise umgekehrt. Testen Sie das Gegenteil.</p>
        <p>Mehr in unserem <a href="/de/industries/renewables/">Erneuerbare Energien &amp; Cleantech Marketing-Playbook</a>.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=solar-marketing-spain">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'creative-testing-framework': {
      toc: ['Eine Variable auf einmal isolieren', 'Hooks sind die wirkungsstärkste Variable', 'Eine Gewinner-Vorlage aufbauen', 'Statistische Signifikanz ist real', 'Kanalübergreifende Erkenntnisse'],
      prose: (<>
        <p>Die meisten „Creative-Testing"-Frameworks sind nur „viel Zeug starten und schauen, was funktioniert". Das ist kein Framework — das ist Glücksspiel. Hier ist, wie man Creative testet, damit sich die Erkenntnisse kompoundieren.</p>
        <h2>Eine Variable auf einmal isolieren</h2>
        <p>Wenn Sie Hook, Visual und Angebot im selben Test ändern, haben Sie nichts darüber gelernt, was die Nadel bewegt hat. Halten Sie alles außer der einen Variable, die Sie testen, konstant. Langsamer, aber die Erkenntnisse sind real.</p>
        <h2>Hooks sind die wirkungsstärkste Variable</h2>
        <p>Die ersten drei Sekunden eines Videos oder die erste Überschrift eines Statics bestimmen 80 % der Performance. Testen Sie Hooks mehr als alles andere.</p>
        <h2>Eine Gewinner-Vorlage aufbauen</h2>
        <p>Wenn Sie eine gewinnende Hook + Format-Kombination gefunden haben, dokumentieren Sie sie. Bauen Sie das Creative des nächsten Monats um Variationen dieser Vorlage herum auf. Die Bibliothek der Gewinnmuster ist das eigentliche Asset.</p>
        <h2>Statistische Signifikanz ist real</h2>
        <p>Beenden Sie Creatives nicht nach einem Tag. Skalieren Sie Gewinner auch nicht nach einem Tag. Warten Sie auf mindestens 200 Conversions pro Variante, bevor Sie einen Gewinner erklären. Die meisten Creative-Tests werden zu früh beendet.</p>
        <h2>Kanalübergreifende Erkenntnisse</h2>
        <p>Ein Hook, der auf TikTok funktioniert, funktioniert normalerweise auf Meta. Ein Visual, das auf Meta funktioniert, funktioniert normalerweise auf Instagram. Testen Sie auf der günstigsten Plattform, deployen Sie auf den anderen.</p>
        <p>Unsere <a href="/de/services/creative/">Creative Production Leistung</a> liefert den wöchentlichen Rhythmus, der das möglich macht — und <a href="/de/blog/meta-creative-volume/">wie man eine nachhaltige Meta-Creative-Pipeline aufbaut</a>.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=creative-testing-framework">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'gpt-shopping': {
      toc: ['Was ChatGPT-Shopping wirklich ist', 'Produktfeed-Qualität ist wichtiger denn je', 'Schema.org-Produkt-Markup', 'Bewertungen als Rankingsignal', 'Markenreputation zählt'],
      prose: (<>
        <p>OpenAI hat Ende 2025 Shopping in ChatGPT eingeführt. Für E-Commerce-Marken ist es ein neuer Akquisitionskanal — und einer, auf den sich die meisten nicht vorbereitet haben.</p>
        <h2>Was ChatGPT-Shopping wirklich ist</h2>
        <p>Wenn ein Nutzer ChatGPT fragt „Ich suche einen guten Wollpullover unter 200 €", generiert ChatGPT jetzt Produktempfehlungen mit Bildern, Preisen und direkten Händlerlinks. Es ist keine Werbung — es ist organisch. Und es wächst schnell.</p>
        <h2>Produktfeed-Qualität ist wichtiger denn je</h2>
        <p>ChatGPT zieht Produktdaten aus Google Shopping-Feeds, Bing Shopping-Feeds und Schema.org-Produkt-Markup auf Händlerseiten. Die Marken mit den saubersten Produktdaten tauchen auf. Die Marken mit unordentlichen Feeds nicht.</p>
        <h2>Schema.org-Produkt-Markup</h2>
        <p>Fügen Sie umfassendes Produkt-Schema zu jeder Produktseite hinzu: Name, Marke, Bild, Beschreibung, Angebote (Preis, Währung, Verfügbarkeit), aggregateRating, Review-Anzahl, GTIN. Das sind die Daten, die KI-Shopping-Interfaces verwenden, um Sie zu ranken.</p>
        <h2>Bewertungen als Rankingsignal</h2>
        <p>KI-Shopping-Interfaces scheinen aggregierte Review-Scores und Review-Anzahlen stark zu gewichten. Wenn Ihre Produkte keine Bewertungen haben, ranken sie nicht im KI-Shopping. Starten Sie ein Review-Sammlungsprogramm.</p>
        <h2>Markenreputation zählt</h2>
        <p>KI-Modelle zitieren Marken, denen ihre Trainingsdaten vertrauen. Echte Markenbekanntheit aufzubauen — durch PR, Content, Social Proof — zahlt sich in KI-Shopping-Sichtbarkeit aus, nicht nur in klassischen Markenmetriken.</p>
        <p>Weiterführende Links: unsere <a href="/de/services/ai-visibility/">KI-Sichtbarkeits-Leistung</a>, unser <a href="/de/industries/ecommerce/">E-Commerce-Marketing-Playbook</a> — und <a href="/de/blog/how-to-get-mentioned-by-chatgpt/">wie ChatGPT und Perplexity auf Sie aufmerksam werden</a>.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=gpt-shopping">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'ga4-mistakes': {
      toc: ['Cross-Domain-Tracking', 'Interne Traffic-Filter', 'Custom Events für das Wesentliche', 'Conversion-Definitionen', 'Kanal-Gruppierung', 'Zielgruppen-Definitionen', 'Datenspeicherung'],
      prose: (<>
        <p>Google Analytics 4 gibt es seit Jahren und die meisten Setups machen noch immer dieselbe Handvoll Fehler. Hier sind die sieben, die wir bei jedem neuen Kunden korrigieren.</p>
        <h2>Cross-Domain-Tracking</h2>
        <p>Wenn Ihre Website mehrere Domains umfasst (z. B. Haupt-Website + Buchungssubsystem), bricht Cross-Domain-Tracking bei 70 % der GA4-Installationen. Der Fix sind zwei Einstellungen in Admin — aber er ist kritisch für korrekte Attribution.</p>
        <h2>Interne Traffic-Filter</h2>
        <p>Ihr Team, das die Website durchsucht, sollte nicht als Conversions zählen. Richten Sie interne Traffic-Filter ein. Ja, es erfordert die Konfiguration Ihrer Büro-IPs. Tun Sie es trotzdem.</p>
        <h2>Custom Events für das Wesentliche</h2>
        <p>Die Standard-Events, die GA4 feuert, verpassen die Events, die für Ihr Unternehmen tatsächlich wichtig sind. Richten Sie Custom Events ein für: Formularstarts, Formularabschlüsse, Video-Plays, Suchanfragen, Add-to-Cart, Checkout-Schritte. Nutzen Sie Google Tag Manager.</p>
        <h2>Conversion-Definitionen</h2>
        <p>Markieren Sie nur die Events als Conversions, die echten Geschäftswert signalisieren. „Seitenaufruf der Kontaktseite" ist keine Conversion. „Kontaktformular abgeschickt" ist eine. Loose Conversion-Definitionen korrumpieren jeden nachgelagerten Bericht.</p>
        <h2>Kanal-Gruppierung</h2>
        <p>GA4-Standard-Kanal-Gruppierung kategorisiert schlecht. Richten Sie eine Custom Channel Group ein, die widerspiegelt, wie Sie tatsächlich über Ihre Kanäle nachdenken.</p>
        <h2>Zielgruppen-Definitionen</h2>
        <p>Bauen Sie Remarketing-Zielgruppen in GA4 für die Kohorten auf, die wichtig sind — Warenkorbabbrecher, Blog-Leser, Lead-Formular-Starter. Diese können automatisch mit Google Ads geteilt werden.</p>
        <h2>Datenspeicherung</h2>
        <p>GA4 speichert Event-Level-Daten standardmäßig 2 Monate lang. Ändern Sie es in Admin auf 14 Monate. Sie werden sich in einem Jahr dafür bedanken.</p>
        <p>Weiterführende Links: unsere <a href="/de/services/analytics/">Analytics &amp; Tracking Leistung</a> — und <a href="/de/blog/tracking-setup-guide/">der vollständige Tracking-Leitfaden</a>.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=ga4-mistakes">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'yachting-marketing': {
      title: 'Yachting-Charter vermarkten — 8 Sprachen, 12 Monate',
      toc: ['Der Vier-Phasen-Kalender', 'Acht Sprachen nicht eine', 'Langzyklus-Remarketing', 'Hochwertige Lead-Bearbeitung', 'Brand vs. Performance'],
      prose: (<>
        <p>Yacht-Charter-Marketing ist ungleich jeder anderen Kategorie, in der wir arbeiten. Das Buchungsfenster ist lang, der durchschnittliche Ticketpreis enorm, und der Kunde ist wirklich global. Hier ist, wie der Media-Plan tatsächlich funktioniert.</p>
        <h2>Der Vier-Phasen-Kalender</h2>
        <p>Eine Charter-Saison hat vier unterschiedliche Phasen: <strong>Frühbucher</strong> (Sep–Dez, nächstes Jahr einbuchen), <strong>Hauptbuchung</strong> (Jan–Apr, wenn die meisten entscheiden), <strong>Spätverfügbarkeit</strong> (Mai–Jul, Last-Minute), <strong>Schulter</strong> (Aug–Sep, Nebensaison-Wochen). Jede Phase braucht anderes Creative, andere Gebote, andere Zielgruppen. Die gesamte Saison als eine Kampagne zu behandeln kostet 30–40 % der Effizienz.</p>
        <h2>Acht Sprachen, nicht eine</h2>
        <p>Charter-Kunden googeln auf Englisch, Deutsch, Französisch, Italienisch, Spanisch, Russisch, Niederländisch und Polnisch. Eine englische Kampagne zu fahren und auf das Beste zu hoffen, kostet Sie die Mehrheit der europäischen Nachfrage. Bauen Sie separate, ordentlich lokalisierte Konten pro Sprache.</p>
        <h2>Langzyklus-Remarketing</h2>
        <p>Der typische Med-Charter wird 6–12 Wochen vor der Buchung recherchiert. Das Standard-30-Tage-Meta-Remarketing-Fenster verpasst das Herzstück der Journey. Bauen Sie 60–90-Tage-Remarketing-Fenster mit Frequency Caps.</p>
        <h2>Hochwertige Lead-Bearbeitung</h2>
        <p>Eine eingehende Charter-Anfrage ist im Durchschnitt 38.000 € + wert. Die Follow-up-Geschwindigkeit ist enorm wichtig. Wir verbinden Buchungssysteme (MMK, Booking Manager) normalerweise direkt mit Slack, damit das Vertriebsteam Anfragen in Sekunden sieht.</p>
        <h2>Brand vs. Performance</h2>
        <p>Die meisten Charter-Unternehmen geben zu viel für <a href="/de/services/google-ads/">Google Search</a> und zu wenig für Brand-Building-<a href="/de/services/paid-social/">Meta</a> aus. Charter ist ein Hochüberlegungskauf — der Kunde muss Ihre Marke Monate kennen, bevor er sucht. Das Budget sollte das widerspiegeln.</p>
        <p>Mehr in unserem <a href="/de/industries/boating/">Boating &amp; Yachting Marketing-Playbook</a>. Für Charter-Unternehmen auf Mallorca, die Paid Search, SEO und Paid Social in einem Retainer führen möchten, sehen Sie unsere <a href="/de/marketing-agentur-mallorca/">Marketing Agentur Mallorca</a>.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=yachting-marketing">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'agency-pricing-honest': {
      toc: ['Das Anreizproblem', 'Wann das wichtig ist', 'Festpreise lösen das Problem', 'Was uns das kostet', 'Was uns das bringt'],
      prose: (<>
        <p>Die meisten Digitalagenturen berechnen einen Prozentsatz des Mediabudgets. Die meisten Digitalagenturen haben einen Anreiz, mehr Mediaausgaben zu empfehlen. Die Verbindung ist nicht kompliziert.</p>
        <h2>Das Anreizproblem</h2>
        <p>Wenn eine Agentur 10 % Ihrer Mediaausgaben berechnet, sind jede zusätzlichen 100.000 € Media, die Sie ausgeben, 10.000 € mehr in deren Tasche. Diese Gebühr wird gezahlt <em>unabhängig davon, ob die zusätzlichen Medien eine gute Idee waren</em>. Der strukturelle Anreiz ist, mehr Media zu empfehlen — selbst wenn mehr nicht die richtige Antwort ist.</p>
        <h2>Wann das wichtig ist</h2>
        <p>Oft ist das Richtige für einen Kunden, die Mediaausgaben zu <em>reduzieren</em>. Verschwenderisches PMax kürzen. Kampagnen mit niedrigen Margen pausieren. Von Paid zu SEO umverteilen. Jede dieser Empfehlungen kostet eine prozentualsbasierte Agentur echtes Geld. Wir haben Agenturen gesehen, die jahrelang auf Konten saßen, von denen sie wussten, dass sie zu viel ausgaben.</p>
        <h2>Festpreise lösen das Problem</h2>
        <p>Wenn wir eine monatliche Pauschale berechnen, ist unser Anreiz, den Kunden zu behalten. Unser Anreiz, den Kunden zu behalten, ist, Ergebnisse zu liefern. Die richtige Menge an Media ist alles, was das beste Geschäftsergebnis liefert — und wir haben kein finanzielles Interesse daran, dass das eine größere oder kleinere Zahl ist.</p>
        <h2>Was uns das kostet</h2>
        <p>Festpreise bedeuten, dass eine kleinere Agentur den Umsatz nicht so schnell skalieren kann wie eine prozentualsbasierte. Eine prozentualsbasierte Agentur, die einen Kunden von 100.000 € auf 1 Mio. € monatliche Ausgaben steigert, steigert ihren eigenen Umsatz 10-fach. Wir nicht. Das ist uns recht.</p>
        <h2>Was uns das bringt</h2>
        <p>Eine 93-%-Zwölf-Monats-Kundenbindungsrate und eine Inbound-Pipeline, die fast vollständig aus Empfehlungen besteht. Der langsame Weg funktioniert. Sehen Sie unsere <a href="/de/cases/">Referenzen</a> — oder unsere <a href="/de/marketing-agentur-mallorca/">Marketing Agentur Mallorca</a> Seite, wenn Sie verstehen möchten, wie wir Full-Service-Retainer strukturieren und abrechnen.</p>
        <h2>Brauchen Sie dabei Unterstützung?</h2>
        <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=agency-pricing-honest">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
      </>),
    },
    'google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026': {
      title: 'Google Ads vs. Meta Ads vs. TikTok Ads für E-Commerce 2026.',
      deck: 'Kein Marketing-Lehrbuch. Keine Hersteller-Folien. Ein brutal praktischer Side-by-Side-Vergleich, wo jede Plattform 2026 wirklich Geld einbringt — und wo sie still und leise Budget verbrennt.',
      toc: ['Kurzfassung', 'CPC & CPM', 'High vs. Low AOV', 'Attribution', 'Creative-Aufwand', 'Skalierung', 'Remarketing', 'Wann PMax gewinnt', 'Der ehrliche Mix', 'FAQs'],
      prose: (<>
        <p><strong>Wer 2026 online verkauft, fährt mindestens eines davon: Google Ads, Meta Ads, TikTok Ads.</strong> Die meisten E-Commerce-Marken fahren alle drei gleichzeitig &mdash; ohne ehrliches Framework, welcher Kanal den nächsten Euro verdient. Dieser Beitrag ist genau dieses Framework, auf Basis von rund &euro;2,1 Mio. pmax-gemanagtem E-Commerce-Spend in Q1 2026 über 14 aktive Retainer in EU und UK.</p>
        <p>Meinungsstark. Wenig schmeichelhaft. Sprung zur Vergleichstabelle für die 30-Sekunden-Version.</p>

        <h2 id="tldr">Kurzfassung &mdash; eine Zeile pro Plattform</h2>
        <ul>
          <li><strong>Google Ads</strong> ist der günstigste Ort, jemanden zu finden, der dein Produkt bereits will.</li>
          <li><strong>Meta Ads</strong> ist der günstigste Ort, Nachfrage zu erzeugen &mdash; wenn du das Creative-Volumen liefern kannst.</li>
          <li><strong>TikTok Ads</strong> hat den günstigsten CPM im Raum &mdash; und ist der einfachste Ort, Geld zu verlieren, wenn dein Creative-Tempo zu langsam ist.</li>
        </ul>

        <h2 id="cpc-cpm">CPC und CPM in der Realität &mdash; was wir 2026 wirklich zahlen</h2>
        <p>Veröffentlichte Benchmarks sind nutzlos, weil die Streuung gigantisch ist. Was folgt, ist die Median-Range über unsere aktiven EU-E-Commerce-Accounts in Q1 2026 &mdash; nicht theoretisch, nicht offiziell, einfach was die Spend-Reports ausgespuckt haben.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Metrik (EU-Median, Q1 2026)</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>CPM (&euro;)</th><td>&euro;15&ndash;&euro;55 Shopping &middot; &euro;30&ndash;&euro;120 Brand</td><td>&euro;8&ndash;&euro;18 Prospecting &middot; &euro;18&ndash;&euro;35 Retargeting</td><td>&euro;3&ndash;&euro;8 Prospecting</td></tr>
              <tr><th>CPC (&euro;)</th><td>&euro;0,40&ndash;&euro;2,20 Shopping &middot; &euro;1,20&ndash;&euro;6,50 Brand</td><td>&euro;0,35&ndash;&euro;1,10</td><td>&euro;0,18&ndash;&euro;0,55</td></tr>
              <tr><th>CTR</th><td>3,5&ndash;9% Shopping</td><td>0,9&ndash;2,2%</td><td>0,6&ndash;1,5%</td></tr>
              <tr><th>Median-Conversion-Rate (vom Klick)</th><td>2,4&ndash;5,8%</td><td>0,9&ndash;2,2%</td><td>0,4&ndash;1,4%</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>Was das wirklich heißt:</strong> Ein Google-Shopping-Klick ist 4&ndash;8&times; teurer als ein TikTok-Klick &mdash; aber auch 4&ndash;10&times; wahrscheinlicher, in einen Kauf umzuschlagen. CPM ist die falsche Einheit für E-Commerce. CPA (oder besser: CAC-Payback) ist die einzig ehrliche.</p>

        <div className="cmp-takeaway">
          <span className="k">Die Lektion</span>
          <p><strong>Wer Channels nur nach CPM bewertet, gibt zu viel auf TikTok aus und zu wenig auf Google.</strong> Reichweite ist nicht das Ziel. Bezahlte Aufmerksamkeit von Menschen, die das Produkt wollen und sich leisten können, ist das Ziel.</p>
        </div>

        <h2 id="aov">High AOV vs. Low AOV &mdash; der unterschätzte Hebel</h2>
        <p>Welche Plattform gewinnt, hängt fast genauso stark vom Average Order Value ab wie von der Kategorie.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Average Order Value</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>&euro;20&ndash;&euro;60 (Impuls)</th><td><span className="pill pill-mid">Mittel</span> Margen vom CPC aufgefressen</td><td><span className="pill pill-good">Gut</span> Sweet Spot für Advantage+</td><td><span className="pill pill-good">Gut</span> Native viraler Pfad</td></tr>
              <tr><th>&euro;60&ndash;&euro;200 (überlegt)</th><td><span className="pill pill-good">Gut</span> Beste Gesamtpassung</td><td><span className="pill pill-good">Gut</span> Stark mit Creative</td><td><span className="pill pill-mid">Mittel</span> Hohe Iteration nötig</td></tr>
              <tr><th>&euro;200&ndash;&euro;800 (bewusst)</th><td><span className="pill pill-good">Exzellent</span> Brand Search dominiert</td><td><span className="pill pill-mid">Mittel</span> Lange Entscheidung</td><td><span className="pill pill-bad">Schwach</span> Falsche Intent</td></tr>
              <tr><th>&euro;800+ (Luxus / B2B-nah)</th><td><span className="pill pill-good">Exzellent</span> Microsoft Ads auch relevant</td><td><span className="pill pill-mid">Mittel</span> Lange Zyklen</td><td><span className="pill pill-bad">Schwach</span> Audience-Mismatch</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="attribution">Attribution &mdash; was jede Plattform überbewertet</h2>
        <p>Alle drei Plattformen schreiben sich Conversions zu, die nicht ihre sind. Sie unterscheiden sich darin, wie stark &mdash; und wie leicht man gegensteuern kann.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Attribution</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>Default-Klick-Fenster</th><td>30 Tage Klick, 1 Tag View</td><td>7 Tage Klick, 1 Tag View</td><td>7 Tage Klick, 1 Tag View</td></tr>
              <tr><th>Server-Side-Fix</th><td>Enhanced Conversions + Offline-Import</td><td>CAPI + Offline Events</td><td>Events API (noch jung)</td></tr>
              <tr><th>Über-Zuweisung (QoQ-Messung)</th><td>~15&ndash;25%</td><td>~25&ndash;40%</td><td>~35&ndash;55%</td></tr>
              <tr><th>Ehrlichkeits-Score (subjektiv)</th><td>6/10</td><td>4/10</td><td>3/10</td></tr>
            </tbody>
          </table>
        </div>

        <p className="cmp-quote">&bdquo;2026 ist Attribution kein Reporting-Problem mehr. Sie ist die gesamte Performance-Lücke.&ldquo;</p>

        <h2 id="creative">Creative-Anforderungen &mdash; was jede Plattform wirklich frisst</h2>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Creative-Anforderung</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>Produktionsfrequenz für stabile Performance</th><td>1&ndash;3 neue Assets pro Quartal</td><td>10&ndash;20 frische Assets pro <em>Woche</em></td><td>15&ndash;30 native Assets pro <em>Woche</em></td></tr>
              <tr><th>Best-Performing-Creative</th><td>Produkt-Feed + Responsive Text</td><td>UGC-Style-Video, gründergetrieben</td><td>Native UGC, hook-led</td></tr>
              <tr><th>Creative-Fatigue-Fenster</th><td>3&ndash;6 Monate</td><td>2&ndash;4 Wochen</td><td>5&ndash;14 Tage</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cmp-takeaway">
          <span className="k">Die Lektion</span>
          <p><strong>Wer keine 10 frischen Meta-Format-Assets pro Woche liefern kann, sollte Meta Ads nicht starten.</strong> Wer keine 15 nativen TikTok-Assets pro Woche liefern kann, ebenso nicht. Wir sagen das Kunden höflich; sie hören selten beim ersten Mal zu. Dann führen wir das Gespräch in Monat drei erneut.</p>
        </div>

        <h2 id="pmax">Wann Performance Max gewinnt &mdash; und wann es verliert</h2>
        <h3>PMax gewinnt, wenn &hellip;</h3>
        <ul>
          <li>die Marke bereits <strong>starke organische und Brand-Search-Nachfrage</strong> hat;</li>
          <li>der Katalog <strong>konsistente Marge</strong> über SKUs zeigt und der Feed sauber ist;</li>
          <li>du <strong>tiefe Conversion-Daten</strong> hast &mdash; First-Party-Signale, Offline-Events, value-based Bidding;</li>
          <li>du bereit bist, <strong>Brand Search auszuschließen</strong> und separat manuell zu fahren.</li>
        </ul>
        <h3>PMax verliert, wenn &hellip;</h3>
        <ul>
          <li>der Katalog <strong>stark unterschiedliche Margen</strong> enthält;</li>
          <li>du <strong>chirurgische Keyword-Kontrolle</strong> brauchst &mdash; die liefert PMax nicht;</li>
          <li>Brand Search <strong>absorbiert und doppelt gezählt</strong> wird;</li>
          <li>die Conversion-Daten <strong>flach</strong> sind &mdash; nur Form-Fills, keine Offline-Events.</li>
        </ul>

        <figure className="cmp-screenshot">
          <Image
            src="/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/pmax-branded-search-absorbed-attribution-2026.webp"
            alt="Google Ads Suchanfragebericht: Performance-Max-Kampagne absorbiert Marken-Keywords und schreibt sich die Conversions gut — häufige Ursache für überhöhten ROAS in E-Commerce-Accounts 2026"
            title="Performance Max absorbiert Brand-Search — Google Ads Suchanfragebericht Q1 2026"
            width={1600}
            height={900}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            loading="lazy"
          />
          <figcaption>Abb. 1 — Echter Account: Marken-Suchanfragen, die von Performance Max absorbiert und als PMax-Conversions gewertet werden. Der ROAS sieht auf dem Papier stark aus &mdash; der Großteil davon ist eingefangene Brand-Nachfrage, keine durch Paid Media gewonnenen Neukunden.</figcaption>
        </figure>

        <p className="cmp-quote">&bdquo;PMax schlägt Meta meist dann, wenn bereits Brand-Search-Nachfrage existiert. Fehlt sie, gewinnt meist Meta &mdash; vorausgesetzt das Creative-Volumen stimmt.&ldquo;</p>

        <h2 id="the-honest-mix">Der ehrliche Mix &mdash; unsere Standardempfehlung</h2>
        <p>Wenn uns ein neuer E-Commerce-Kunde heute fragt, wie er &euro;30.000 Monatsbudget aufteilen soll, ohne weiteren Kontext:</p>
        <ul>
          <li><strong>~55% Google Ads</strong> &mdash; Performance Max + sauber strukturierte Search, Brand separat.</li>
          <li><strong>~35% Meta Ads</strong> &mdash; Advantage+ Shopping fürs Prospecting, DPA fürs Retargeting, 10+ neue Creatives/Woche.</li>
          <li><strong>~10% TikTok Ads</strong> &mdash; Spark Ads auf Creator-Content, nur mit funktionierender Creative-Pipeline.</li>
        </ul>

        <h2 id="closing">Abschluss &mdash; wähle, was zum Geschäft passt, nicht was am lautesten ist</h2>
        <p>Die meisten E-Commerce-Marken haben kein &bdquo;Meta-Problem&ldquo; oder &bdquo;TikTok-Problem&ldquo;. Sie haben ein <strong>Creative-Throughput-Problem</strong>, ein <strong>Attributionsproblem</strong> oder ein <strong>Katalogproblem</strong> &mdash; und beschuldigen die Plattform. Fixe die zugrundeliegende Einschränkung, und der Channel-Mix ordnet sich meist innerhalb eines Quartals von selbst.</p>
        <p>Wenn du eine einseitige Diagnose willst, wo dein Media-Budget über Google, Meta und TikTok leckt: <a href="/de/contact/?topic=channel-mix-audit">30 Minuten kostenlos buchen</a>. Keine Folien, kein Sales-Pitch.</p>
        <p>Verwandte Leistungen: unser <a href="/de/services/google-ads/">Google Ads &amp; Performance Max Service</a>, unser <a href="/de/services/paid-social/">Paid Social Service</a> (Meta &amp; TikTok), unser <a href="/de/services/analytics/">Analytics &amp; Attribution Setup</a>, unser <a href="/de/industries/ecommerce/">E-Commerce Marketing Playbook</a> &mdash; und <a href="/de/blog/pinterest-ads-home-interiors-local-2026/">für wen Pinterest Ads wirklich funktionieren</a>.</p>
        <p style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6a6a6a' }}>Zuletzt aktualisiert 26. Mai 2026 &middot; Monatlich geprüft &middot; Basis &euro;2,1 Mio. E-Com-Spend Q1 2026</p>
      </>),
    },
    'pinterest-ads-home-interiors-local-2026': {
      toc: ["Kann jeder Pinterest Ads schalten?", "Für wen es funktioniert", "Rollos &amp; Sonnenschutz", "Retargeting", "Cross-Platform-Strategie", "Creative-Regeln", "Kosten", "Fazit", "FAQs"],
      faqs: [
        { q: 'Kann jeder Pinterest Ads schalten?', a: 'Fast. Sie benötigen ein kostenloses Pinterest-Business-Konto und eine verifizierbare Website. Ads Manager ist Self-Serve, sodass ein Solo-Inhaber ohne Agentur starten kann. Die einzige echte Hürde ist geografisch: Pinterest Ads sind nicht in jedem Land verfügbar, aber in den meisten europäischen Ländern, darunter Spanien, Deutschland, UK und die gesamte EU.' },
        { q: 'Für wen funktionieren Pinterest Ads wirklich?', a: 'Visuell geplante, durchdachte Käufe: Wohneinrichtung, Sonnenschutz und Möbel, Hochzeiten, Mode und Beauty, Food und DIY, Reisen. Der gemeinsame Nenner sind Menschen, die einen zukünftigen Kauf Wochen im Voraus planen. Impulskauf-, Commodity- und preisgetriebene Kategorien tendieren zur Underperformance.' },
        { q: 'Wie funktioniert Pinterest Retargeting?', a: 'Installieren Sie den Pinterest Tag (oder die Conversions API) und Sie können Website-Besucher retargetieren, eine gehashte Kundenliste hochladen (mindestens ~100 Matches), Personen retargetieren, die mit Ihren organischen Pins interagiert haben, Actalike-Zielgruppen erstellen und dynamisches Retargeting betreiben, das Personen die genauen Produkte aus einem Catalog-Feed zeigt.' },
        { q: 'Kann ein lokales Unternehmen mit einem Showroom Pinterest Ads nutzen?', a: 'Ja. Geo-targetieren Sie die Auslieferung auf die Stadt des Showrooms, Postleitzahlen oder einen Radius um das Geschäft, und verwenden Sie ortsspezifisches Creative — idealerweise mit der Geschäftsadresse. Für einen lokalen Showroom funktioniert Pinterest am besten als eine Schicht einer Cross-Platform-Retargeting-Strategie neben YouTube-Video und statischem Display.' },
        { q: 'Was kosten Pinterest Ads 2026?', a: 'Günstig auf Media-Basis: CPC typischerweise €0,10–€1,50, CPM etwa €2–€5. Der niedrige Preis ist ein zweischneidiges Schwert — es ist einfach, Geld für Reichweite auszugeben, die nie konvertiert, also sind Kosten pro Akquisition (oder pro qualifiziertem Showroom-Besuch) die einzige Zahl, die zählt.' },
      ],
      prose: (<>
        <p><strong>„Kann irgendjemand Pinterest Ads schalten?"</strong> ist die Frage, die wir bekommen. Die kurze Antwort: ja &mdash; und genau deshalb sollten die meisten, die sie schalten, es nicht tun. Die Plattform ist Self-Serve, das Media ist günstig, und die Einstiegshürde ist fast null. Das sagt nichts darüber aus, ob es für <em>Ihr</em> Unternehmen funktioniert. Dieser Beitrag beantwortet die eigentliche Frage: Für wen ist Pinterest wirklich gut &mdash; und wie betreibt man es, damit es sich rechnet?</p>

        <h2 id="can-anyone">Kann jeder Pinterest Ads schalten? Technisch: fast.</h2>
        <p>Drei Dinge trennen Sie von einer laufenden Pinterest-Kampagne &mdash; und nur eines davon ist eine echte Hürde.</p>
        <ul>
          <li><strong>Ein kostenloses Pinterest-Business-Konto.</strong> Fünf Minuten. Jeder kann eines erstellen.</li>
          <li><strong>Eine verifizierte Website.</strong> Ein kleiner DNS- oder Meta-Tag-Schritt. Keine Hürde.</li>
          <li><strong>Verfügbarkeit in Ihrem Land.</strong> Das ist die einzige echte Hürde. Pinterest Ads sind nicht in jeder Region aktiv &mdash; aber sie sind in den meisten europäischen Ländern verfügbar, darunter Spanien, Deutschland, Österreich, UK und die gesamte EU. Wenn Sie im Ads Manager eine Meldung „In Ihrer Region nicht verfügbar" sehen, haben Sie Ihren Blocker gefunden. Ansonsten sind Sie frei.</li>
        </ul>
        <p>Beachten Sie, was <em>nicht</em> auf dieser Liste steht: Mindestbudgets, Unternehmensgröße, eine Agentur. Ein Solo-Gründer mit &euro;300 im Monat und einer verifizierten Website kann heute Nachmittag eine Pinterest-Kampagne starten.</p>

        <div className="cmp-takeaway">
          <span className="k">Das Fazit</span>
          <p><strong>„Kann ich Pinterest Ads schalten?" ist die falsche Frage.</strong> Jeder kann. Die richtige Frage ist, ob die Menschen, die das kaufen, was Sie verkaufen, Pinterest nutzen, um diesen Kauf zu planen. Bei manchen Kategorien lautet die Antwort ein klares Ja. Bei anderen geben Sie günstiges Geld für Aufmerksamkeit aus, die nie konvertiert.</p>
        </div>

        <h2 id="who-its-for">Für wen Pinterest wirklich funktioniert</h2>
        <p>Pinterest ist eine visuelle Planungsmaschine. Menschen kommen hierher, um ein zukünftiges Projekt zu planen &mdash; eine Renovierung, eine Hochzeit, eine Garderobe, ein Abendessen, einen Urlaub &mdash; oft Wochen vor dem Kauf. Diese eine Verhaltenstatsache entscheidet, wer auf der Plattform gewinnt und wer Geld verschwendet.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Kategorie</th><th>Pinterest-Fit</th><th>Warum</th></tr></thead>
            <tbody>
              <tr><th>Wohnen &amp; Einrichten</th><td><span className="pill pill-good">Ausgezeichnet</span></td><td>Die native Pinterest-Kategorie. Sonnenschutz, Möbel, Beleuchtung, Farbe &mdash; alles visuell geplant, Wochen im Voraus.</td></tr>
              <tr><th>Hochzeiten &amp; Events</th><td><span className="pill pill-good">Ausgezeichnet</span></td><td>Das längste Planungsfenster jedes Verbraucherkaufs. Pinterest ist das Standard-Moodboard.</td></tr>
              <tr><th>Mode, Beauty &amp; Schmuck</th><td><span className="pill pill-good">Stark</span></td><td>Hochvisuell, aspirational, Speichern-und-zurückkehren-Verhalten.</td></tr>
              <tr><th>Food, Rezepte &amp; DIY</th><td><span className="pill pill-good">Stark</span></td><td>Speichern-für-später-Intent; gut für content-getriebene Marken.</td></tr>
              <tr><th>Reisen &amp; Hotellerie</th><td><span className="pill pill-mid">Gut</span></td><td>Stark für Inspiration, schwächer bei direkter Buchungsattribution.</td></tr>
              <tr><th>B2B &amp; SaaS</th><td><span className="pill pill-mid">Nische</span></td><td>Geringeres Volumen, aber die B2B-Nutzer, die dort sind, zeigen echte Absicht. Selten primärer Kanal.</td></tr>
              <tr><th>Impulskauf / Commodity / preisgetrieben</th><td><span className="pill pill-bad">Schwach</span></td><td>Falsche Denkweise. Pinterest-Nutzer planen &mdash; sie kaufen keine Impulse.</td></tr>
            </tbody>
          </table>
        </div>

        <p>Wenn Sie etwas aus den oberen zwei Reihen verkaufen, verdient Pinterest ein Testbudget vor fast jedem anderen „sekundären" Kanal. Wenn Sie in der unteren Reihe sind, stecken Sie das Geld in Google und Meta.</p>

        <h2 id="window-coverings">Warum ein Sonnenschutz-Showroom näher am Sweet Spot ist als die meisten E-Commerce-Shops</h2>
        <p>Hier ist der Teil, den die meisten Guides übersehen. Pinterests stärkste Einzelkategorie &mdash; Inneneinrichtung &mdash; wird von genau der Art von durchdachtem, hochpreisigem, visuell geplantem Kauf dominiert, den ein Rollladen-, Markisen- oder Rollodepot verkauft. Jemand, der neue Beschattungslösungen plant, verbringt Wochen damit, Räume zu speichern, die ihm gefallen, bevor er je ein Fachgeschäft anruft.</p>
        <p>Was den lokalen Showroom zu einem ungewöhnlich guten Fit macht: Der Käufer ist bereits auf Pinterest, bereits im Planungsmodus, bereits dabei, die Ästhetik zu speichern, die Sie verkaufen. Die Aufgabe ist nicht, Nachfrage zu schaffen &mdash; sondern lokal präsent zu sein, während er plant, und ihn zurückzuholen, sobald er Ihre Website oder Ihren Showroom besucht hat.</p>

        <div className="cmp-quote">&bdquo;Für Inneneinrichtung und Sonnenschutz ist Pinterest kein Demand-Generation-Kanal. Es ist ein Demand-Capture-Kanal, der zufällig wie Inspiration aussieht.&ldquo;</div>

        <h2 id="retargeting">Wie Pinterest Retargeting wirklich funktioniert</h2>
        <p>Retargeting ist der Kern von Pinterest für durchdachte Kaufentscheidungen, weil das Planungsfenster so lang ist, dass ein einzelner Kontaktpunkt fast nie reicht. Es gibt fünf Mechanismen, und die meisten Marken nutzen einen und ignorieren den Rest.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Zielgruppentyp</th><th>Was es tut</th><th>Setup-Anforderung</th></tr></thead>
            <tbody>
              <tr><th>Website-Besucher-Retargeting</th><td>Erreicht erneut Personen, die Ihre Website oder bestimmte Seiten besucht haben.</td><td>Pinterest Tag (oder Conversions API) auf der gesamten Website installiert.</td></tr>
              <tr><th>Kundenlisten-Targeting</th><td>Gehashte E-Mails oder Mobile-Ad-IDs hochladen, um bestehende Kunden zu targetieren oder auszuschließen.</td><td>CSV mit gehashten Kontakten; mindestens ~100 Matches zum Aktivieren.</td></tr>
              <tr><th>Engagement-Zielgruppen</th><td>Erreicht Personen, die Ihre organischen Pins oder Ads gespeichert, angeklickt oder angesehen haben.</td><td>Bestätigte Domain und organische Pin-Aktivität.</td></tr>
              <tr><th>Actalike-Zielgruppen</th><td>Pinterests Lookalike &mdash; neue Nutzer finden, die Ihren besten Kunden ähneln.</td><td>Eine Quellzielgruppe (Kunden, Website-Besucher oder Engager).</td></tr>
              <tr><th>Dynamisches Retargeting</th><td>Zeigt Personen die genauen Produkte, die sie angesehen haben, live aus einem Catalog-Feed.</td><td>Catalog-Feed + Pinterest Tag mit Checkout-, AddToCart- und PageVisit-Events. Catalog Sales Ziel. Nicht im Search-Placement verfügbar.</td></tr>
            </tbody>
          </table>
        </div>

        <p>Für ein Produktfeed-Unternehmen ist dynamisches Retargeting der ROI-stärkste der fünf &mdash; es zeigt Personen genau den Rollladen, das Sofa oder die Lampe, die sie sich bereits angesehen haben, mit Live-Preisen. Für einen lokalen Showroom ohne E-Commerce-Katalog übernehmen Website-Besucher-Retargeting plus Engagement-Zielgruppen die Hauptarbeit.</p>

        <div className="cmp-takeaway">
          <span className="k">Das Fazit</span>
          <p><strong>Installieren Sie den Pinterest Tag, bevor Sie einen Euro ausgeben.</strong> Ohne ihn haben Sie keine Website-Besucher-Zielgruppen, kein dynamisches Retargeting, keine Conversion-Daten und keine Möglichkeit zu wissen, ob irgendetwas davon funktioniert hat. Die Marken, die bei Pinterest scheitern, haben diesen Schritt fast immer übersprungen.</p>
        </div>

        <h2 id="cross-platform">Die Cross-Platform-Retargeting-Strategie &mdash; Pinterest, YouTube und Display, gemeinsam</h2>
        <p>Nehmen Sie einen lokalen Luxaflex-Händler mit einem Showroom. Er betreibt bereits statisches Display-Retargeting für Website-Besucher. Der nächste Schritt &mdash; ein guter &mdash; ist, <em>Video</em>-Retargeting auf YouTube mit neuem Showroom-Material hinzuzufügen, das die tatsächliche Adresse des Geschäfts trägt. Pinterest ist die dritte Schicht derselben Idee.</p>
        <p>Die Logik ist einfach: Das Retargeting einer Plattform ist ein Anstoß. Drei koordinierte Plattformen sind eine Präsenz. Eine Person, die die Showroom-Website einmal besucht hat, sieht in den folgenden Wochen:</p>
        <ul>
          <li><strong>Auf YouTube</strong> &mdash; kurzes Showroom-Videomaterial, die Produkte in einem echten Raum, die Adresse des Geschäfts auf dem Bildschirm.</li>
          <li><strong>Auf Pinterest</strong> &mdash; dieselben Räume als speicherbare, planungsfreundliche Pins, geo-targetiert auf das Einzugsgebiet des Showrooms.</li>
          <li><strong>Im statischen Display</strong> &mdash; die Always-on-Erinnerung, die die Marke zwischen den größeren Touchpoints präsent hält.</li>
        </ul>

        <div className="cmp-takeaway">
          <span className="k">Das lokale Detail, das zählt</span>
          <p><strong>Geo-targetieren Sie alles auf das Einzugsgebiet des Showrooms.</strong> Pinterest ermöglicht es, die Auslieferung auf Städte, Postleitzahlen oder einen Radius um das Geschäft einzugrenzen. Es hat keinen Sinn, jemanden 400&nbsp;km entfernt mit Footage eines Showrooms zu retargetieren, den er nie besuchen wird.</p>
        </div>

        <h2 id="creative">Creative &mdash; was Pinterest belohnt, und was abgelehnt wird</h2>
        <p>Pinterest ist die toleranteste Plattform nicht &mdash; wenn es um „werblich aussehende" Werbung geht. Es ist eine Discovery-Umgebung; Menschen sind dort zum Planen, nicht um verkauft zu werden.</p>
        <ul>
          <li><strong>Vertikal, 1000&times;1500px (2:3).</strong> Die Plattform ist dafür gebaut.</li>
          <li><strong>Minimaler Text-Overlay.</strong> Pinterest bevorzugt saubere Bilder. Nur kurze Phrasen.</li>
          <li><strong>Warmes, natürliches Licht; echte Räume.</strong> Lifestyle-Kontext schlägt Produkt-auf-weiß jedes Mal in Inneneinrichtung.</li>
          <li><strong>Logo vorhanden, aber dezent.</strong> Markenidentität, aber nicht aufdringlich.</li>
          <li><strong>Ideen-fokussiert, nicht aggressiv.</strong> „Hier ist ein Raum, den Sie haben könnten" übertrifft „50% Rabatt dieses Wochenende".</li>
          <li><strong>Eine Landing Page, die zum Pin passt.</strong> Pinterest prüft die gesamte Customer Journey. Eine Abweichung zwischen Anzeige und Seite ist der häufigste Ablehnungsgrund.</li>
        </ul>

        <h2 id="what-it-costs">Was es kostet &mdash; und die Falle, die damit verbunden ist</h2>
        <p>Pinterest ist günstig auf Media-Basis &mdash; CPC typischerweise etwa &euro;0,10&ndash;&euro;1,50, CPM etwa &euro;2&ndash;&euro;5. Das ist ein Bruchteil von Google Search und oft unter Meta.</p>
        <p>Das günstige Media ist genau die Falle. Niedriger Preis macht es gefährlich einfach, Geld für Reichweite auszugeben, die sich produktiv anfühlt und nichts konvertiert. <strong>Kosten pro Akquisition &mdash; oder für einen Showroom, Kosten pro qualifiziertem Besuch oder Anfrage &mdash; ist die einzige Zahl, die entscheidet, ob Pinterest im Mix bleibt.</strong></p>

        <h2 id="verdict">Das ehrliche Fazit</h2>
        <p>Pinterest Ads sind 2026 wirklich gut für eine spezifische, identifizierbare Gruppe von Unternehmen: Wohnen und Einrichten, Hochzeiten, Mode, Food, DIY &mdash; alles, was durch visuelle Planung über ein langes Zeitfenster gekauft wird. Für diese ist es einer der günstigsten Kanäle im Paid Media, und die Retargeting-Tools sind besser als der Ruf der „Inspirationsplattform" vermuten lässt. Für einen lokalen Einrichtungs- oder Sonnenschutz-Showroom ist es kein langer Schuss &mdash; es ist nah am Kernnutzen der Plattform.</p>
        <p>Für alle anderen &mdash; Commodity-E-Commerce, Impulskäufe, die meisten B2B-Fälle, alles Preisgetriebene &mdash; ist es ein „vielleicht später"-Kanal. Fahren Sie zuerst Google und Meta ordentlich.</p>

        <h2 id="faqs">Häufige Fragen</h2>
        <details className="cmp-faq" open>
          <summary>Kann jeder Pinterest Ads schalten?</summary>
          <p>Fast. Sie benötigen ein kostenloses Pinterest-Business-Konto und eine verifizierbare Website &mdash; Ads Manager ist Self-Serve, sodass ein Solo-Inhaber ohne Agentur starten kann. Die einzige echte Hürde ist die Geografie: Pinterest Ads sind nicht in jedem Land verfügbar, aber in den meisten europäischen Ländern, darunter Spanien, Deutschland, UK und die gesamte EU.</p>
        </details>
        <details className="cmp-faq">
          <summary>Für wen funktionieren Pinterest Ads wirklich?</summary>
          <p>Visuell geplante, durchdachte Käufe: Wohneinrichtung, Sonnenschutz und Möbel, Hochzeiten, Mode und Beauty, Food und DIY, Reisen. Der gemeinsame Nenner sind Menschen, die einen zukünftigen Kauf Wochen im Voraus planen. Impulskauf-, Commodity- und preisgetriebene Kategorien tendieren zur Underperformance.</p>
        </details>
        <details className="cmp-faq">
          <summary>Wie funktioniert Pinterest Retargeting?</summary>
          <p>Installieren Sie den Pinterest Tag (oder die Conversions API) und Sie können Website-Besucher retargetieren, eine gehashte Kundenliste hochladen (mindestens ~100 Matches), Personen retargetieren, die mit Ihren organischen Pins interagiert haben, Actalike-Zielgruppen erstellen und dynamisches Retargeting betreiben, das Personen die genauen Produkte zeigt, die sie aus einem Catalog-Feed angesehen haben.</p>
        </details>
        <details className="cmp-faq">
          <summary>Kann ein lokales Unternehmen mit einem Showroom Pinterest Ads nutzen?</summary>
          <p>Ja. Geo-targetieren Sie die Auslieferung auf die Stadt des Showrooms, Postleitzahlen oder einen Radius um das Geschäft, und verwenden Sie ortsspezifisches Creative &mdash; idealerweise mit der Geschäftsadresse darauf. Für einen lokalen Showroom funktioniert Pinterest am besten als eine Schicht einer Cross-Platform-Retargeting-Strategie neben YouTube-Video und statischem Display.</p>
        </details>
        <details className="cmp-faq">
          <summary>Was kosten Pinterest Ads 2026?</summary>
          <p>Günstig auf Media-Basis: CPC typischerweise &euro;0,10&ndash;&euro;1,50, CPM etwa &euro;2&ndash;&euro;5. Der niedrige Preis ist ein zweischneidiges Schwert &mdash; es ist einfach, Geld für Reichweite auszugeben, die nie konvertiert, also sind Kosten pro Akquisition (oder pro qualifiziertem Showroom-Besuch) die einzige Zahl, die zählt.</p>
        </details>

        <h2 id="closing">Möchten Sie wissen, ob Pinterest zu Ihrem Unternehmen passt?</h2>
        <p>Wir betreiben Paid Media &mdash; Google, Meta, Microsoft, TikTok und Pinterest &mdash; für Marken in ganz Europa und sagen Ihnen ehrlich, ob Pinterest in Ihren Mix gehört oder ob das Budget besser anderswo eingesetzt wird. <a href="/de/contact/?topic=pinterest-ads">Kostenloses 30-Minuten-Gespräch buchen</a>. Keine Folien, kein Sales-Pitch.</p>
        <p>Verwandte Lektüre: unser <a href="/de/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/">Google Ads vs. Meta vs. TikTok Vergleich für E-Commerce</a> und unser <a href="/de/services/paid-social/">Paid Social Service</a>.</p>
        <p style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6a6a6a' }}>Zuletzt aktualisiert 1. Juni 2026 &middot; Monatlich geprüft &middot; pmax &middot; Calvi&agrave;, Mallorca</p>
      </>),
    },
  } as Record<string, LocalizedBlogDetail>,
}

export type DeTranslations = typeof de
