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
        <a href="/de/seo-agentur-mallorca/">SEO</a>,{' '}
        <a href="/de/services/ai-visibility/">KI-Sichtbarkeit</a>,{' '}
        <a href="/de/services/analytics/">Analytics</a>,{' '}
        <a href="/de/services/conversion-design/">Conversion Design</a> und{' '}
        <a href="/de/services/creative/">Creative Production</a> und{' '}
        <a href="/de/services/visibility-engineering/">Visibility Engineering</a> — neun Leistungen, ein System.{' '}
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
    metaDesc: 'Google Ads, Meta, LinkedIn, SEO, KI-Sichtbarkeit, Conversion Design, Analytics und GEO-Audit — neun Leistungen für messbares, profitables Wachstum.',
    eyebrow: '01 — Was wir tun',
    title: <>Performance Marketing,<br />gebaut wie <em>Engineering</em>.</>,
    deck: 'Neun Leistungen. Ein System. Wir verkaufen keine isolierten Kanäle — wir betreiben ein System, in dem Google Ads, Meta, SEO, KI-Suche und Analytics auf denselben Daten und dasselbe Ziel ausgerichtet sind: profitables Wachstum, das sich wirklich messen lässt.',
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
        a: 'pmax bietet neun Kernleistungen: Visibility Engineering (unser Flagship-Programm aus GEO, SEO, digitaler PR und Reputation), GEO-Audit (kostenlose erste Analyse, was ChatGPT, Perplexity und Gemini über Ihre Marke sagen), KI-Sichtbarkeit (GEO), Google Ads (Search, Shopping, Performance Max, YouTube), Paid Social (Meta, TikTok, LinkedIn, Microsoft Ads), SEO (technisch, inhaltlich, digital PR, lokal), Conversion Design (CRO und A/B-Tests), Analytics & Tracking (GA4, server-seitiges GTM, Consent Mode v2, CRM-basierte Offline-Conversions) und Creative Production (Performance-Creatives, Landingpages, UGC-Video in hoher Kadenz).',
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
      { slug: 'visibility-engineering', num: '08', badge: 'Flagship', title: 'Visibility Engineering', deck: 'GEO, SEO, digitale PR und Reputationsmanagement — koordiniert zu einer Strategie. Weil Suchmaschinen und KI-Plattformen Marken ganzheitlich beurteilen, nicht anhand isolierter Signale.', tags: ['GEO', 'SEO', 'Digitale PR', 'Reputation'], variant: 'is-mint', featured: true },
    ],
  },

  serviceDetail: {
    'ai-visibility': {
      metaTitle: 'KI-Sichtbarkeit (GEO) — ChatGPT & Perplexity | pmax',
      metaDesc: 'Zitiert werden von ChatGPT, Perplexity, Gemini und Google AI Overviews. Wir bauen Schema, Content und Trust-Signale, die KI-Zitate für Ihre Marke generieren.',
      headline: <>KI-Sicht&shy;barkeit <em>(GEO)</em>.</>,
      deck: 'Wenn jemand ChatGPT, Perplexity, Gemini oder Googles AI Overviews nach einer Empfehlung in Ihrer Branche fragt — wir stellen sicher, dass Ihre Marke die Antwort ist. Mit Substanz, nicht mit Tricks.',
      stats: [
        { num: '61 %', label: 'der Kaufentscheidungen laufen heute über eine KI-Antwortoberfläche' },
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
    'visibility-engineering': {
      metaTitle: 'Generative Engine Optimisation Agentur | Visibility Engineering',
      metaDesc: 'Visibility Engineering von pmax: GEO, SEO, digitale PR und Reputationsmanagement. Entdeckt, vertraut und gewählt werden — in Google und KI-Suche.',
      headline: <>Visibility<br />Engineering.</>,
      deck: 'Wir helfen Ihnen, die Autorität aufzubauen, durch die Ihre Marke gefunden, vertraut und gewählt wird — in Google und auf allen relevanten KI-Suchplattformen.',
      stats: [
        { num: '51 %', label: 'der Verbraucher sagen, generative KI hat ihre Recherche-Gewohnheiten verändert' },
        { num: '45 %', label: 'weniger minderwertige Inhalte in Google nach dem größten Qualitäts-Update seit Jahren' },
        { num: '60+', label: 'Jahre kombinierte Erfahrung in SEO, digitaler PR und Marken-Reputation' },
        { num: '4', label: 'Disziplinen in einer Strategie — GEO, SEO, digitale PR, Reputationsmanagement' },
      ],
      prose: (
        <>
          <p>
            Digitale Markensichtbarkeit aufzubauen und zu halten wird immer komplexer. Kaum haben Sie Keywords gemeistert, verändern ChatGPT, Claude und Gemini die Spielregeln grundlegend.{' '}
            <a href="https://www.gartner.com/en/newsroom/press-releases/gartner-survey-finds-only-one-third-of-consumers-say-genai-rivals-search-engines-marketers-must-optimize-for-both-ai-driven-and-traditional-search" target="_blank" rel="noopener noreferrer">Laut Gartner haben 51 % der Verbraucher ihre Recherche-Gewohnheiten wegen generativer KI geändert</a> — mehr als die Hälfte nutzt KI heute parallel zur klassischen Suche und erwartet fundierte, vertrauenswürdige Antworten.
          </p>
          <p>
            Ihre Kunden bewegen sich nahtlos zwischen Suchmaschinen, KI-Assistenten, Medienberichten, Bewertungsportalen, Fachpublikationen und Weiterempfehlungen. Jeder Touchpoint beeinflusst, ob Ihre Marke gefunden, vertraut und letztendlich gewählt wird.
          </p>
          <p>
            Die klassische Suche verschwindet nicht. Sie entwickelt sich zu KI-gestützter Entdeckung. Und genau das ist der entscheidende Punkt: Ihre Kunden werden Google weiterhin nutzen — die Frage ist, ob Ihre Marke präsent ist, wenn es darauf ankommt.
          </p>
          <h2>SEO ist nicht tot — SEO ist das Fundament von GEO</h2>
          <p>
            Entgegen mancher LinkedIn-Posts ist <a href="/de/seo-agentur-mallorca/">SEO nicht tot</a>. Kunden nutzen weiterhin Google, und gutes SEO ist eine der tragenden Säulen der <a href="/de/services/ai-visibility/">Generative Engine Optimisation (GEO)</a> — beides lässt sich nicht isoliert betreiben, wenn man digital dominieren will.
          </p>
          <p>
            Nach seinem größten Qualitäts-Update seit Jahren meldet Google, dass Nutzer 45 % weniger minderwertige, unoriginelle Inhalte sehen. Die Botschaft ist klar: Sichtbarkeit gehört Marken, die echte Expertise, Erfahrung, Autorität und Vertrauen nachweisen.
          </p>
          <div className="prose-callout">
            <span className="prose-callout-kicker">Die neue Kernfrage</span>
            <p>Die Frage lautet nicht mehr: <em>„Für wie viele Keywords ranken wir?"</em></p>
            <p>Die bessere Frage ist: <strong>Warum sollte man Ihre Marke wählen?</strong></p>
            <p>
              Wenn ChatGPT Ihr Unternehmen mit fünf Wettbewerbern vergleicht, wenn Google entscheidet, wer verdient zu ranken, wenn ein Journalist eine Expertenmeinung sucht, wenn ein potenzieller Kunde seine Optionen recherchiert — leuchtet Ihre Expertise wirklich hervor? Stützt Ihr Ruf Ihre Aussagen? Bestätigen Bewertungen, Medienberichte und Online-Präsenz Ihre Glaubwürdigkeit?
            </p>
          </div>
          <h2>Visibility Engineering — der pmax-Ansatz</h2>
          <p>
            Bei pmax sind wir überzeugt: Sichtbarkeit wird heute nicht mehr allein durch Optimierung verdient. Sie wird durch Autorität engineered. Visibility Engineering vereint alles, was beeinflusst, ob Ihre Marke gefunden, vertraut und empfohlen wird — nicht nur SEO, nicht nur GEO, nicht nur PR, nicht nur Reputation. Alles zusammen.
          </p>
          <p>
            Denn Kunden — und zunehmend auch KI-Systeme — beurteilen Ihre Website nicht isoliert. Sie beurteilen Ihre Marke. Sie sehen sich Ihre Website an, Ihre Medienberichte, Ihre Bewertungen, Ihre Thought Leadership, Ihre Executive Profile, Ihre Social-Media-Präsenz, Erwähnungen durch Dritte und die Konsistenz Ihres digitalen Fußabdrucks.
          </p>
          <p>Diese Signale existieren nicht in Silos. Ihre Strategie sollte es auch nicht.</p>
          <h2>Unsere Visibility Engineering Leistungen</h2>
          <h3>KI-Suche &amp; Discovery-Optimierung</h3>
          <p>
            Als spezialisierte <a href="/de/services/ai-visibility/">Generative Engine Optimisation Agentur</a> helfen wir Marken, ihre Sichtbarkeit auf KI-gestützten Suchplattformen wie ChatGPT, Google AI Overviews, Gemini, Claude und Perplexity zu verbessern.
            Unsere Guides: <a href="/de/blog/how-to-get-mentioned-by-chatgpt/">Wie Sie von ChatGPT, Perplexity und Gemini zitiert werden</a> und <a href="/de/blog/perplexity-visibility/">wie Sie Ihre Perplexity-Sichtbarkeit gezielt verbessern</a>.
            Wir führen für jede Marke, die eine Zusammenarbeit erwägt, einen <a href="/de/services/geo-audit/">kostenlosen ersten GEO-Audit</a> durch.
          </p>
          <ul>
            <li>Search Engine Optimisation (SEO)</li>
            <li>Generative Engine Optimisation (GEO)</li>
            <li>LLM-Marketing</li>
            <li>Entity-Optimierung</li>
            <li>Strukturierte Content-Strategie</li>
            <li>Knowledge-Graph-Optimierung</li>
            <li>KI-Zitatanalyse, -Tracking und Reporting durch <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">crunchjunkie</a></li>
            <li>Search-Authority-Aufbau</li>
          </ul>
          <h3>Markenautorität &amp; Online-Reputationsmanagement</h3>
          <p>KI-Systeme vertrauen zunehmend auf etablierte Quellen. Wir kombinieren technische Optimierung mit strategischer Kommunikation, um die Glaubwürdigkeit aufzubauen, die Journalisten, Kunden, Analysten und KI-Modelle gleichermaßen überzeugt.</p>
          <ul>
            <li>Digitale PR</li>
            <li>Nachrichten- und Medienberichterstattung</li>
            <li>Fachpublikationen</li>
            <li>Executive Thought Leadership</li>
            <li>Bewertungen und Reputationsmanagement</li>
            <li>Markenerwähnungen</li>
            <li>Aufbau digitaler Autorität</li>
          </ul>
          <h3>Suche, Autorität &amp; Entscheidung</h3>
          <p>Unser Flagship-Retainer-Programm integriert alle Disziplinen in eine koordinierte Strategie — für mehr Auffindbarkeit, stärkere Reputation und bessere Geschäftsergebnisse.</p>
          <ul>
            <li>SEO</li>
            <li>GEO-Marketing</li>
            <li>LLM-Marketing</li>
            <li>Digitale PR</li>
            <li>Online-Reputationsmanagement</li>
            <li>Executive Visibility</li>
            <li>Authority Building</li>
          </ul>
          <h2>Warum pmax?</h2>
          <p>
            Die meisten Agenturen sind Spezialisten in einer Disziplin — SEO, PR, digitales Marketing oder Brand. Wir glauben nicht, dass die heutige Suchlandschaft in Silos gelöst werden kann. Mit mehr als 60 Jahren kombinierter Erfahrung in Suchmarketing, digitaler Strategie, Public Relations und Marken-Reputation helfen wir Unternehmen, nachhaltige Autorität aufzubauen — keine kurzfristigen Rankings.
          </p>
          <p>
            Denn Sichtbarkeit bedeutet heute nicht mehr nur Ranking. Es geht darum, die Marke zu werden, der Google vertraut, die KI zitiert und die Kunden wählen.
          </p>
          <p>Das ist Visibility Engineering.</p>
        </>
      ),
      faqs: [
        { q: 'Ist pmax eine Generative Engine Optimisation Agentur?', a: 'Ja — GEO ist eine der Kerndisziplinen, die wir anbieten, eingebettet in unseren breiteren Visibility-Engineering-Ansatz gemeinsam mit SEO, digitaler PR und Reputationsmanagement. Wir betrachten KI-Sichtbarkeit als Teil einer umfassenderen Autoritätsstrategie, nicht als isolierte Leistung.' },
        { q: 'Was ist der Unterschied zwischen SEO und Generative Engine Optimisation (GEO)?', a: 'SEO fokussiert auf das Ranking in klassischen Suchmaschinen wie Google. GEO fokussiert darauf, wie KI-Plattformen wie ChatGPT, Gemini und Perplexity Marken entdecken, zitieren und empfehlen. Beides sind keine Gegensätze — gutes SEO ist eine der Grundlagen von GEO, da KI-Modelle weiterhin stark auf gut optimierte, autoritative Web-Inhalte zurückgreifen.' },
        { q: 'Brauche ich SEO noch, wenn ich in GEO investiere?', a: 'Ja. KI-Suchplattformen zitieren und fassen dieselbe Gruppe autoritativer, gut strukturierter Inhalte zusammen, die auch in der klassischen Suche ranken. Wer SEO zugunsten von GEO vernachlässigt, schwächt typischerweise beides.' },
        { q: 'Wie messen Sie Erfolg in der Generative Engine Optimisation?', a: 'Wir nutzen crunchjunkie (crunchjunkie.io), um KI-Zitierungshäufigkeit, Share of Voice auf KI-Plattformen, Sentiment in KI-generierten Antworten und die Häufigkeit zu tracken, mit der eine Marke erscheint, wenn KI-Tools sie mit Wettbewerbern vergleichen. crunchjunkie ist auf KI-Sichtbarkeits-Tracking und -Reporting spezialisiert — Analysen, Daten und Insights sind im Rahmen jedes über pmax gebuchten Visibility-Engineering-Retainers kostenlos enthalten.' },
        { q: 'Was ist Visibility Engineering?', a: 'Visibility Engineering ist der integrierte pmax-Ansatz für moderne Suchsichtbarkeit, der SEO, Generative Engine Optimisation (GEO), digitale PR und Online-Reputationsmanagement kombiniert. Anstatt diese als separate Leistungen zu behandeln, managen wir sie als eine koordinierte Strategie — denn Suchmaschinen und KI-Plattformen beurteilen Marken ganzheitlich, nicht anhand isolierter Signale.' },
        { q: 'Kann ein Unternehmen ohne starkes SEO-Fundament in ChatGPT oder Google AI Overviews erscheinen?', a: 'Das ist unwahrscheinlich, zumindest nicht konsistent. KI-Plattformen bevorzugen Quellen, die bereits Expertise, Autorität und Trust-Signale im Web nachweisen — dieselben Signale, die traditionelles SEO und digitale PR aufzubauen anstreben.' },
        { q: 'Wie lange dauert es, bis Generative Engine Optimisation Ergebnisse zeigt?', a: 'Die Zeiträume variieren je nach Branche und Ausgangspunkt. Da GEO auf denselben Trust- und Autoritätssignalen wie SEO und digitale PR basiert, sehen die meisten Marken spürbare Verbesserungen bei KI-Zitierungen über einen ähnlichen mehrmonatigen Zeitraum wie bei organischen SEO-Gewinnen — nicht über Nacht.' },
      ],
    },
    'geo-audit': {
      metaTitle: 'GEO-Audit — KI-Sichtbarkeit Ihrer Marke prüfen | pmax',
      metaDesc: 'pmax führt GEO-Audits durch: Wir zeigen Ihnen, was ChatGPT, Perplexity und Gemini über Ihre Marke sagen — und was Sie zuerst verbessern sollten. Erster Audit kostenlos.',
      headline: <>GEO&#8209;Audit.</>,
      deck: 'Finden Sie heraus, was ChatGPT, Perplexity und Gemini über Ihre Marke wissen — und ob davon irgendetwas stimmt.',
      stats: [
        { num: '51 %', label: 'der Verbraucher haben ihr Rechercheverhalten wegen generativer KI verändert — Gartner' },
        { num: '4', label: 'KI-Plattformen, die wir prüfen: ChatGPT, Perplexity, Claude, Gemini' },
        { num: '23+', label: 'KI-Assistenten und Suchtools, in denen Markenpräsenz heute zählt' },
        { num: '0', label: 'Marken, die wissen, was KI über sie sagt — bevor sie es fragen' },
      ],
      prose: (
        <>
          <h2>Was ein GEO-Audit ist</h2>
          <p>
            Ein GEO-Audit ist eine strukturierte Analyse der Art und Weise, wie KI-Plattformen Ihre Marke darstellen. Nicht was Ihre Website über Sie sagt &mdash; sondern was <em>ChatGPT, Perplexity, Claude und Gemini</em> über Sie sagen, wenn jemand danach fragt. Das ist nicht dasselbe, und die Lücke dazwischen ist oft größer, als Marken erwarten.
          </p>
          <p>
            Im Unterschied zu einem SEO-Audit, der prüft, ob Suchmaschinen Ihre Seiten finden und ranken können, untersucht ein GEO-Audit, ob KI-Plattformen ein genaues, kohärentes Bild davon haben, wer Sie sind, was Sie tun und warum Sie relevant sind. Eine technisch einwandfreie Website kann trotzdem zu falschen, unvollständigen oder fehlenden KI-Antworten führen, wenn die zugrundeliegenden Autoritätssignale fehlen.
          </p>
          <p>
            Das Ergebnis ist konkret: ein schriftlicher Bericht mit dem, was die KI über Sie sagt, welche Quellen sie heranzieht, wo sie Fehler macht, und eine priorisierte Liste der Maßnahmen. Wir zeigen auch, wo Mitbewerber erscheinen, wo Sie es nicht tun &mdash; das ist meistens der Befund, der am stärksten wirkt.
          </p>

          <h2>Was wir prüfen</h2>

          <h3>KI-Crawlbarkeit</h3>
          <p>
            Können KI-Bots Ihre Inhalte überhaupt abrufen? Wir prüfen <code>robots.txt</code> auf Sperren für die Retrieval-Bots, die Live-KI-Zitate ermöglichen &mdash; <code>OAI-SearchBot</code>, <code>PerplexityBot</code>, <code>Claude-SearchBot</code> &mdash; sowie für Training-Crawler wie <code>GPTBot</code> und <code>Google-Extended</code>. Jede dieser Sperren ist in der Regel ein Fehler, und sie kommt häufiger vor als man denkt.
          </p>

          <h3>Content-Struktur und Zitierbarkeit</h3>
          <p>
            KI-Modelle zitieren, was sich zitieren lässt. Vage Markentexte finden nicht den Weg in KI-Antworten; spezifische, faktische, gut strukturierte Inhalte schon. Wir prüfen Ihre Website auf Definitionsparagraphen, konsistente Markenfakten, FAQ-Inhalte und kritischen Content, der JavaScript-abhängig gerendert wird &mdash; und damit für die meisten KI-Crawler unsichtbar ist.
          </p>

          <h3>Entity-Abdeckung</h3>
          <p>
            Wir prüfen schema.org-Markup (Organisation, Service, FAQPage, Person), NAP-Konsistenz in Verzeichnissen und Drittquellen-Erwähnungen in Quellen, denen KI-Plattformen vertrauen. Widersprüchliche Informationen über verschiedene Kanäle erhöhen das Halluzinationsrisiko. Wir finden, wo sie auftreten.
          </p>

          <h3>KI-Repräsentation</h3>
          <p>
            Wir führen einen strukturierten Prompt-Satz über ChatGPT, Perplexity, Claude und Gemini aus: direkte Markenanfragen, Kategorie-Anfragen, Wettbewerbsvergleiche und problemorientierte Fragen, die Ihre Kunden tatsächlich stellen. Wir dokumentieren, was die KI sagt, wie genau sie Sie beschreibt und welche Quellen sie zitiert. Das ist Ihre Ausgangslinie.
          </p>

          <h3>Wettbewerbspositionierung</h3>
          <p>
            Wo erscheinen Ihre Mitbewerber in KI-Antworten, wo Sie es nicht tun? Welche Drittquellen haben das meiste Gewicht in Ihrer Branche? Wir kartieren die Lücke zwischen Ihrem aktuellen Stand und dem, wo Sie sein sollten, und identifizieren die Maßnahmen mit dem höchsten Hebel.
          </p>

          <h2>crunchjunkie &mdash; das Tool, das wir nutzen</h2>
          <p>
            Wir verwenden <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">crunchjunkie</a> für das KI-Sichtbarkeits-Tracking. Es überwacht die Zitierungshäufigkeit auf KI-Plattformen, verfolgt den Share of Voice gegenüber Wettbewerbern und misst das Brand-Sentiment in KI-generierten Antworten. Es ist das Nächste, was es derzeit zu Search Console für KI-Suche gibt &mdash; vor wenigen Wochen öffentlich verfügbar geworden, und wir setzen es seitdem in der Kundenarbeit ein.
          </p>
          <p>
            Beim kostenlosen ersten Audit führen wir Ihre Domain durch crunchjunkie, bevor wir irgendetwas anderes tun. Das gibt uns einen Sichtbarkeits-Snapshot, der den Rest des Audits auf eine belastbare Grundlage stellt statt auf Eindrücke.
          </p>
          <p>
            Für Kunden, die in ein laufendes Programm wechseln, ist crunchjunkie-Tracking inklusive. Monatliche Berichte zeigen, ob die Maßnahmen wirken, welche Plattformen zuerst reagieren und wo neue Lücken entstehen, wenn KI-Modelle aktualisiert werden.
          </p>
        </>
      ),
      faqs: [
        { q: 'Was ist in einem GEO-Audit von pmax enthalten?', a: 'Ein GEO-Audit von pmax umfasst fünf Ebenen: KI-Crawlbarkeit (robots.txt, Bot-Zugang), Content-Zitierbarkeit (strukturierte, zitierfähige Inhalte und Schema-Markup), Entity-Abdeckung (konsistente Markenpräsenz in Verzeichnissen und Drittquellen), KI-Repräsentation (was ChatGPT, Perplexity, Claude und Gemini über Sie sagen) und Wettbewerbspositionierung (wo Mitbewerber erscheinen, wo Sie es nicht tun). Der erste Audit umfasst einen schriftlichen Bericht und ein 30-minütiges Gespräch zur Erläuterung der Befunde.' },
        { q: 'Wie lange dauert ein GEO-Audit?', a: 'Der erste Audit dauert fünf bis sieben Werktage ab dem Zeitpunkt, an dem wir Zugang zu Ihrer Domain und den nötigen Informationen haben. Schriftlicher Bericht und Auswertungsgespräch folgen innerhalb derselben Woche.' },
        { q: 'Ist der erste Audit wirklich kostenlos?', a: 'Ja. Für jede Marke, die eine Zusammenarbeit mit pmax erwägt, führen wir einen kostenlosen ersten GEO-Sichtbarkeits-Snapshot durch — mit crunchjunkie, unserem eigenen KI-Tracking-Tool. Er zeigt Ihre aktuelle Zitierrate auf den wichtigsten KI-Plattformen, welche Quellen KI über Sie heranzieht und wo die größten Lücken sind. Kein Auftrag, kein Sales-Pitch.' },
        { q: 'Was benötigen Sie von uns für den Audit?', a: 'Ihren Domainnamen und die fünf bis zehn Suchanfragen, die Ihre Kunden Ihrer Meinung nach stellen, bevor sie kaufen. Den Rest recherchieren wir selbst.' },
        { q: 'Was passiert nach dem Audit?', a: 'Sie erhalten einen schriftlichen Bericht mit konkreten Befunden für jede Ebene, eine priorisierte Liste der wichtigsten Maßnahmen und eine ehrliche Einschätzung, wie lange eine Verbesserung angesichts Ihrer aktuellen Autoritätsbasis realistischerweise dauert. Falls Sie die Umsetzung gemeinsam angehen möchten, besprechen wir das gerne. Falls Sie die Befunde intern weiterverarbeiten möchten, ist das ebenfalls in Ordnung.' },
        { q: 'Brauche ich eine laufende Zusammenarbeit, oder reicht ein einmaliger Audit?', a: 'Ein einmaliger Audit ist möglich. Die meisten Kunden, die beim Audit erhebliche Lücken finden, entscheiden sich für ein laufendes Programm — weil der Audit das Problem diagnostiziert und das Retainer es behebt. Eine Verpflichtung entsteht durch den kostenlosen ersten Audit nicht.' },
        { q: 'Ist ein GEO-Audit für eine junge Marke sinnvoll?', a: 'Das kommt darauf an. Wenn Sie noch kaum Web-Präsenz haben, wird der Audit das bestätigen — und die Priorität liegt dann beim Aufbau dieser Präsenz, nicht bei der KI-Repräsentation. Haben Sie bereits eine etablierte Online-Präsenz und wissen noch nicht, wie KI Sie beschreibt, ist der Audit meist aufschlussreich. Wir sagen Ihnen ehrlich vorab, ob es der richtige Schritt ist.' },
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
      { slug: 'how-to-advertise-business-mallorca', title: 'Werbung auf Mallorca: Der vollständige Leitfaden für Unternehmen', deck: 'Mallorca hat 900.000 Einwohner und fast 10 Millionen Besucher pro Jahr. Deutsche Touristen geben im Schnitt 1.200 € pro Aufenthalt aus. Der vollständige Leitfaden zu digitaler Werbung auf Mallorca — alle wichtigen Kanäle, mit konkreten Budgets und Mallorca-spezifischem Kontext.' },
      { slug: 'was-kostet-google-ads', title: 'Google Ads Kosten 2026: Was Sie wirklich zahlen', deck: 'Ein ehrlicher, konkreter Leitfaden zu Google Ads Kosten 2026. Durchschnittliche Klickpreise nach Branche in Deutschland, die Gesamtkosten-Gleichung, drei Budgetszenarien — und eine Immobilienagentur in Palma, die den Cost-per-Lead von 200 € auf 83 € senkte.' },
      { slug: 'conversion-rate-optimisation-checklist', title: 'Conversion-Rate-Optimierung Checkliste 2026: 15 Punkte, die wirklich etwas bewegen', deck: 'Eine praktische 15-Punkte-CRO-Checkliste für Unternehmer und Marketer. Branchenbenchmarks, Quick Wins, strukturelle Fixes — und ein echtes Fallbeispiel: von 28 auf 71 qualifizierte Leads pro Monat, ohne das Werbebudget zu erhöhen.' },
      { slug: 'what-is-generative-engine-optimisation', title: 'Was ist Generative Engine Optimisation (GEO)?', deck: 'GEO ist nicht SEO mit neuem Namen. Es ist eine andere Disziplin für ein neues Such-Paradigma — und die Forschung belegt: Gezielte Maßnahmen steigern Ihre Zitationsrate um bis zu 40 %. Das definitive Handbuch inklusive Acht-Schritte-Framework.' },
      { slug: 'performance-marketing-agency-vs-in-house', title: 'Performance-Marketing-Agentur oder In-House-Team: Unsere ehrliche Einschätzung', deck: 'Die meisten Agenturen empfehlen sich selbst. Wir nicht immer. Eine ehrliche Analyse der echten Kosten, des Break-even-Punkts — und wann der Aufbau eines eigenen Teams die richtige Entscheidung ist.' },
      { slug: 'linkedin-ads-b2b-spain', title: 'LinkedIn Ads für B2B in Spanien: CPL-Benchmarks, Targeting und was wirklich funktioniert', deck: 'Realistische CPL-Benchmarks nach Branche, die LinkedIn-Targeting-Checkliste und eine Palma-Anwaltskanzlei, die den Cost-per-Lead in 16 Wochen von 184 € auf 67 € senkte.' },
      { slug: 'google-shopping-kampagne-leitfaden', title: 'Google Shopping Kampagnen 2026: Der Setup-Leitfaden', deck: 'Standard Shopping vs. Performance Max, Merchant-Center-Feed-Anforderungen und ROAS-Benchmarks nach Kategorie — ein praxisnaher Schritt-für-Schritt-Leitfaden.' },
      { slug: 'tiktok-ads-mallorca-tourism', title: 'TikTok Ads für Gastgewerbe und Tourismus auf Mallorca: Was wirklich funktioniert', deck: 'CPM-Benchmarks, Creative-Formate und die Zielgruppen-Analyse, die Mallorca-Tourismus-Content in echte Charter- und Hotelbuchungen auf TikTok verwandelt.' },
      { slug: 'ki-sichtbarkeit-ai-visibility', title: 'KI-Sichtbarkeit: Wie Ihre Marke von ChatGPT und anderen KI-Engines zitiert wird', deck: 'Die meisten Marken wissen nicht, was ChatGPT über sie sagt — oder warum. Der datenbasierte Leitfaden zur KI-Sichtbarkeit: wie Zitierungen funktionieren, welche Hebel wirken und was unsere eigenen Zahlen über 10 Engines zeigen.' },
      { slug: 'meta-ads-agency-vs-in-house', title: 'Meta Ads Agentur oder In-House? Ein ehrlicher Vergleich.', deck: 'Agentur-Retainer, In-House-Stelle oder Freelancer — echte Kosten, realistische ROAS-Benchmarks und wann welche Option wirklich die richtige ist.' },
      { slug: 'free-website-design', title: 'Wir bauen Ihre Website kostenlos neu. Das ist unser Deal.', deck: 'Wir gestalten und bauen Websites ohne Vorabkosten – im Gegenzug übernehmen wir Ihre Paid-Media-Kampagnen. Der vollständige Deal: wie er funktioniert, für wen er passt und wie ein echter Neuaufbau in der Praxis aussieht.' },
      { slug: 'ai-visibility-tracking-tools-2026', title: 'KI-Sichtbarkeits-Tools 2026: Was Sie prüfen sollten, bevor Sie zahlen', deck: 'Wie die meisten KI-Sichtbarkeits-Tools still einschränken, was Sie tracken können — und was Sie vor dem Kauf fragen sollten. Ein Käuferführer mit verifizierten Preisen.' },
      { slug: 'google-ads-ai-disclosure-label', title: 'Googles KI-Label steht auf Ihren Anzeigen. Sie haben das wahrscheinlich nicht entschieden.', deck: 'Seit Juli 2026 erscheint auf europäischen SERPs: „KI-Offenlegung: Anzeige wurde mit KI erstellt oder bearbeitet." Die meisten Werbetreibenden, die das Label tragen, haben es nicht bewusst gewählt — Performance Max hat es für sie gesetzt.' },
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
'how-to-advertise-business-mallorca': {
      toc: [
        'Der Mallorca-Markt: Was ihn besonders macht',
        'Google Ads auf Mallorca',
        'Meta Ads für Mallorca-Unternehmen',
        'TikTok Ads für Tourismus und Hotellerie',
        'LinkedIn Ads für B2B und professionelle Dienstleistungen',
        'Eine Multi-Channel-Strategie aufbauen',
      ],
      faqs: [
        {
          q: 'Was ist die beste Möglichkeit, ein Unternehmen auf Mallorca zu bewerben?',
          a: 'Es gibt keinen einzelnen besten Kanal — die richtige Antwort hängt von Ihrem Unternehmenstyp, Ihrer Zielgruppe und der Jahreszeit ab. Für Suchanfragen mit hoher Kaufabsicht (Immobilien, professionelle Dienstleistungen) funktioniert Google Ads am besten. Für Discovery-Marketing in Tourismus und Hotellerie liefern Meta und TikTok im Pre-Trip-Fenster (Februar–Juni) die stärksten Ergebnisse. Für B2B-Dienstleistungen, die die deutschsprachige Expat-Community ansprechen, ist LinkedIn der einzige Kanal mit der nötigen Targeting-Präzision.',
        },
        {
          q: 'Wie viel sollte ein Mallorca-Unternehmen für digitale Werbung ausgeben?',
          a: 'Mindestbudgets auf dem Mallorca-Markt: Google Ads 800 €/Monat, Meta Ads 500 €/Monat (saisonal), TikTok Ads 400 €/Monat (saisonal, März–Oktober), LinkedIn Ads 1.000 €/Monat. Darunter generieren Sie zu wenig Daten für sinnvolle Optimierungsentscheidungen. Die meisten unserer etablierten Kunden mit saisonalen Unternehmen geben in der Hochsaison 1.500–4.000 €/Monat aus und reduzieren im Winter deutlich.',
        },
        {
          q: 'Funktionieren Google Ads auf Mallorca?',
          a: 'Ja, für die richtigen Kategorien. Google Ads funktioniert stark für Immobilien, Rechtsdienstleistungen, Privatmedizin, Steuerberater und alle Unternehmen, bei denen Kunden mit konkreter Kaufabsicht suchen. Es funktioniert weniger gut für entdeckungsgetriebene Unternehmen — niemand sucht vor der Landung auf Mallorca nach „schönem Restaurant"; das passiert über Instagram oder Google Maps vor Ort. Geo-Targeting muss sorgfältig konfiguriert sein: breites Spanien-Targeting verschwendet Budget für Klicks vom Festland ohne Mallorca-Bezug.',
        },
        {
          q: 'Welche Plattform eignet sich am besten, um deutsche Touristen auf Mallorca zu erreichen?',
          a: 'Deutsche Touristen erreicht man am besten an der Quelle — in Deutschland, Österreich oder der Schweiz, bevor sie buchen. Meta (Instagram und Facebook) mit deutschsprachigen Creatives, gezielt nach Reiseinteressen und geografischen Signalen, ist der kosteneffizienteste Awareness-Kanal. Google Search auf Deutsch für Mallorca-spezifische Anfragen ("Finca Mallorca mieten", "Hotel Mallorca buchen") erfasst kaufbereite Suchanfragen in der Consideration-Phase. Deutschsprachige Kampagnen erfordern Texte, Creatives und Landingpages auf Deutsch — genau hier scheitern die meisten Mallorca-Werbetreibenden.',
        },
        {
          q: 'Ist Social-Media-Werbung für saisonale Mallorca-Unternehmen effektiv?',
          a: 'Ja, aber der Zeitpunkt ist entscheidend. Social-Media-Werbung für saisonale Mallorca-Unternehmen funktioniert am besten als Pre-Season-Awareness-Maßnahme — von Februar bis Mai, um Touristen in der Consideration-Phase zu erreichen, bevor sie buchen. Ab Juni gegen bereits etablierte Awareness-Brands zu konkurrieren kostet mehr und bringt weniger. Die Unternehmen, die auf Mallorca den größten Nutzen aus Meta und TikTok ziehen, planen ihren Creative-Kalender im Januar und gehen im Februar live.',
        },
      ],
      prose: (
        <>
          <p>Mallorca ist kein normaler lokaler Markt. Die st&auml;ndige Bev&ouml;lkerung betr&auml;gt rund 900.000 &mdash; klein nach europ&auml;ischen Ma&szlig;st&auml;ben. Doch der Tourismus macht rund 70&nbsp;% des BIP der Balearen aus. Fast 10 Millionen Besucher kommen j&auml;hrlich auf die Insel.</p>
          <p>Deutsche Touristen: 3,7 Millionen pro Jahr, 37&nbsp;% der Gesamtbesucher, durchschnittlich 1.200&nbsp;&euro; Ausgaben pro Aufenthalt laut Balearischen Tourismusstatistiken. UK-Touristen: 1,6 Millionen pro Jahr (16&nbsp;%). Diese Gruppen unterscheiden sich in Kaufverhalten, Sprache und Plattformnutzung so stark, dass eine gemeinsame Werbestrategie fast nie funktioniert.</p>
          <p>Dieser Leitfaden richtet sich an Unternehmer auf Mallorca &mdash; insbesondere deutschsprachige Gesch&auml;ftsinhaber, Expats und Unternehmen, die deutsche Touristen als Zielgruppe haben. Wir sind eine <a href="/de/marketing-agency-mallorca">Marketingagentur mit Sitz in Calvi&agrave;</a>. Das ist der Markt, in dem wir t&auml;glich arbeiten.</p>

          <h2 id="mallorca-market">Der Mallorca-Markt: Was ihn besonders macht</h2>
          <p>Drei Fakten bestimmen die Mallorca-Werbelandschaft.</p>
          <p><strong>Zwei M&auml;rkte, eine Insel.</strong> Die einheimische Bev&ouml;lkerung z&auml;hlt rund 900.000 &mdash; ein kleiner Markt. Der Tourismus &mdash; rund 70&nbsp;% des BIP der Balearen &mdash; bringt fast 10 Millionen Besucher pro Jahr. Deutsche Touristen sind die gr&ouml;&szlig;te Gruppe: 3,7 Millionen j&auml;hrlich, 1.200&nbsp;&euro; durchschnittlicher Ausgaben pro Aufenthalt. Dauereinwohner und kaufkr&auml;ftige Touristen haben nahezu nichts gemein in Kaufverhalten, Sprache und Plattformnutzung. Ihre Werbestrategie muss beide separat adressieren.</p>
          <p><strong>Die Saison komprimiert das Fenster.</strong> Die Tourismussaison l&auml;uft von April bis Oktober. Juli und August sind Hochsaison. Ein Unternehmen, das seine Tourismus-Werbung im Juni startet, hat das Pre-Trip-Consideration-Window bereits verpasst &mdash; deutsche und britische Touristen recherchieren und buchen 4 bis 12 Wochen im Voraus. Die leistungsst&auml;rksten Mallorca-Kampagnen, die wir betreuen, starten im Februar.</p>
          <p><strong>Deutsch ist ein unterversorgter Wettbewerbsvorteil.</strong> 37&nbsp;% der j&auml;hrlichen Mallorca-Besucher kommen aus dem deutschsprachigen Raum. Die meisten suchen, surfen und buchen auf Deutsch. Dennoch l&auml;uft der Gro&szlig;teil der digitalen Werbung auf Mallorca auf Spanisch oder Englisch. Gut strukturierte deutschsprachige Kampagnen &mdash; die deutsche Touristen an der Quelle, vor ihrer Buchung, in ihrer eigenen Sprache ansprechen &mdash; sind die am meisten unterschätzte Chance im Mallorca-Markt. Die meisten englischsprachigen und spanischen Agenturen betreiben kein Deutsch-Marketing auf diesem Niveau.</p>

          <h2 id="google-ads-mallorca">Google Ads auf Mallorca</h2>
          <p>Google Ads ist der richtige Kanal f&uuml;r Suchanfragen mit hoher Kaufabsicht: Immobilien, Rechtsdienstleistungen, Steuerberater, Privatmedizin, professionelle Dienstleistungen aller Art. Wer mit konkreter Absicht und Handlungsbereitschaft sucht, erscheint zuerst in der Google-Suche.</p>
          <p><strong>Geo-Targeting erfordert Pr&auml;zision.</strong> Das Targeting auf &bdquo;Spanien&ldquo; zieht Traffic aus Madrid und Barcelona an, der keine Absicht hat, Ihr Mallorca-Unternehmen zu besuchen. Wir bauen Kampagnen mit inselspezifischem Geo-Targeting plus erweiterter Abdeckung f&uuml;r Touristen, die vor ihrer Abreise aus Deutschland und dem Vereinigten K&ouml;nigreich suchen &mdash; zwei sehr verschiedene Konfigurationen, die die meisten Standard-Setups verpassen.</p>
          <p><strong>Deutschsprachiges Suchvolumen ist unterversorgt.</strong> &bdquo;Finca mieten Mallorca&ldquo;, &bdquo;Immobilien Mallorca kaufen&ldquo;, &bdquo;Zahnarzt Mallorca&ldquo; &mdash; deutschsprachige Suchanfragen f&uuml;r Mallorca-spezifische Dienstleistungen erzeugen relevantes Volumen und stehen vor deutlich weniger Wettbewerb als englische Pendants. Deutschsprachige Anzeigen auf deutschsprachige Landingpages, ausgeliefert an Nutzer in Deutschland vor ihrem Urlaub, konvertieren auf Raten, die die meisten Mallorca-Werbetreibenden nicht aussch&ouml;pfen.</p>
          <p>Mindestbudget: 800&nbsp;&euro;/Monat. Darunter sind die Daten zu d&uuml;nn f&uuml;r sinnvolle Optimierungsentscheidungen. Unser ausf&uuml;hrlicher Leitfaden: <a href="/de/blog/google-ads-mallorca/">Google Ads auf Mallorca</a>.</p>

          <h2 id="meta-ads-mallorca">Meta Ads f&uuml;r Mallorca-Unternehmen</h2>
          <p>Meta ist der dominante Discovery-Kanal f&uuml;r Hotellerie, Tourismus und B2C-Unternehmen auf Mallorca. Hier finden Menschen Restaurants, Erlebnisse und Ferienunterk&uuml;nfte, bevor sich eine konkrete Kaufabsicht gebildet hat.</p>
          <p><strong>Das Pre-Trip-Fenster f&uuml;r deutsche Touristen.</strong> Deutsche Instagram-Nutzer, die nach Mallorca reisen, sind 4 bis 8 Wochen vor der Abreise aktiv auf der Plattform. Instagram Stories und Reels, die deutschsprachige Zielgruppen nach Reiseinteressen und geografischen Signalen ansprechen, &uuml;bertreffen konsistent das En-Route-Targeting f&uuml;r Hospitality-Kunden. Ein Nutzer in M&uuml;nchen, der Mallorca-Strandclubs recherchiert, ist erheblich mehr wert als ein Nutzer, der bereits gebucht hat und gelandet ist.</p>
          <p><strong>Saisonales Timing ist entscheidend.</strong> Auf Touristen ausgerichtete Meta-Kampagnen sollten von Februar bis M&auml;rz hochlaufen, im Mai bis Juni f&uuml;r Pre-Trip-Buchungen ihren H&ouml;hepunkt erreichen und bis Oktober weiterlaufen. Gleichm&auml;&szlig;ige Ganzjahresbudgets bei saisonalen Unternehmen verschwenden Geld im Winter und verpassen das Consideration-Window.</p>
          <p><strong>Ganzj&auml;hrige Lokalkampagnen.</strong> Unternehmen, die Dauereinwohner bedienen &mdash; Zahnärzte, Fitnessstudios, Rechtsdienstleister &mdash; fahren grundlegend andere Strategien: lokaler Radius, ganzj&auml;hriges Budget, keine saisonale Eskalation.</p>
          <p>Mindestbudget: 500&nbsp;&euro;/Monat in der Saison. Mehr dazu auf unserer <a href="/de/industries/hospitality">Hospitality-Branchenseite</a>.</p>

          <h2 id="tiktok-ads-mallorca">TikTok Ads f&uuml;r Tourismus und Hotellerie</h2>
          <p>TikTok hat sich f&uuml;r Tourismus- und Erlebnisunternehmen auf Mallorca zu einem ernstzunehmenden Paid-Kanal entwickelt. Die organischen Inhalte mit den meisten Views &mdash; Katamaran-Tagestouren, Beach Clubs, Bergrestaurants &mdash; passen direkt zu den TikTok-Anzeigenformaten, die performen.</p>
          <p>TikTok funktioniert f&uuml;r Mallorca-Unternehmen, wenn Sie ein visuell starkes Produkt haben, Kunden zwischen 18 und 34 Jahren ansprechen und Kurzvideos in konsistenter Menge produzieren k&ouml;nnen. F&uuml;r B2B-Dienstleistungen, professionelle Dienstleistungen mit langen Verkaufszyklen oder hochpreisige Immobilien ist es der falsche Kanal.</p>
          <p><strong>Saisonale Dringlichkeit</strong> ist die leistungsst&auml;rkste TikTok-Mechanik f&uuml;r den Mallorca-Tourismus: &bdquo;Jetzt buchen &mdash; noch 3 Pl&auml;tze im Juli frei.&ldquo; Verf&uuml;gbarkeitsbasierte Creatives erzeugen Dringlichkeit, die statische Bildanzeigen nicht replizieren k&ouml;nnen.</p>
          <p>Mindestbudget: 400&nbsp;&euro;/Monat, M&auml;rz bis Oktober.</p>

          <h2 id="linkedin-ads-mallorca">LinkedIn Ads f&uuml;r B2B und professionelle Dienstleistungen</h2>
          <p>LinkedIn-Anzeigen sind teuer &mdash; auch auf Mallorca. Typische CPCs liegen bei 4 bis 8&nbsp;&euro;. Aber f&uuml;r bestimmte Anwendungsf&auml;lle sind sie das einzige Instrument mit der n&ouml;tigen Targeting-Pr&auml;zision.</p>
          <p>Mallorca-spezifische LinkedIn-Einsatzf&auml;lle:</p>
          <ul>
            <li><strong>B2B-Dienstleistungen f&uuml;r die deutschsprachige Expat-Community</strong> &mdash; Steuerberater, Rechtsanw&auml;lte, Unternehmensberater, die deutsche und britische Gesch&auml;ftsinhaber auf der Insel betreuen</li>
            <li><strong>Immobilien f&uuml;r kaufkr&auml;ftige DACH-K&auml;ufer</strong> &mdash; Targeting leitender Fachleute in Deutschland, &Ouml;sterreich und der Schweiz, die im Mallorca-Luxusimmobilienmarkt aktiv sind</li>
            <li><strong>Professionelle Dienstleistungen f&uuml;r Unternehmen mit Mallorca-Pr&auml;senz</strong> &mdash; Maritime Dienstleistungen, Logistik, Unternehmensreisen</li>
          </ul>
          <p>Der Mallorca-B2B-Markt ist auf LinkedIn klein. Planen Sie Frequenz statt Reichweite &mdash; wiederholte Kontakte mit einer definierten Zielgruppe von 5.000 bis 15.000 Personen funktionieren besser als breite Streuung bei niedriger Frequenz.</p>
          <p>Mindestbudget: 1.000&nbsp;&euro;/Monat. Mehr in unserem <a href="/de/blog/linkedin-ads-b2b-spain/">B2B-LinkedIn-Leitfaden f&uuml;r Spanien</a>.</p>

          <h2 id="multi-channel">Eine Multi-Channel-Strategie aufbauen</h2>
          <p>Kein einzelner Kanal deckt die gesamte Mallorca-Customer-Journey ab. Die Unternehmen, die am schnellsten wachsen, kombinieren Kan&auml;le gezielt &mdash; jeden auf die richtige Phase abgestimmt.</p>
          <p>Ein vereinfachtes Framework f&uuml;r die meisten Mallorca-Tourismus- oder Hospitality-Unternehmen:</p>
          <ul>
            <li><strong>Awareness (Februar&ndash;April):</strong> Meta und TikTok, deutschsprachige und britische Zielgruppen vor der Reise</li>
            <li><strong>Consideration (M&auml;rz&ndash;Juni):</strong> Google Search f&uuml;r intentionsgesteuerte Anfragen; Meta-Retargeting von Website-Besuchern</li>
            <li><strong>Conversion (Mai&ndash;August):</strong> Google Performance Max mit echten Buchungsdaten als Offline-Conversions</li>
            <li><strong>Retention (Oktober&ndash;November):</strong> E-Mail an fr&uuml;here G&auml;ste; Meta Custom Audiences f&uuml;r Direktbuchungen</li>
          </ul>
          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Plattform</th>
                  <th style={{ textAlign: 'left', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Geeignet f&uuml;r</th>
                  <th style={{ textAlign: 'left', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Saison</th>
                  <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Mindestbudget</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { platform: 'Google Ads', best: 'Immobilien, professionelle Dienstleistungen', season: 'Ganzjährig', budget: '800 €/Monat' },
                  { platform: 'Meta Ads', best: 'Hotellerie, Restaurants, B2C', season: 'Apr–Okt', budget: '500 €/Monat' },
                  { platform: 'TikTok Ads', best: 'Tourismus, Bootstouren, Erlebnisse', season: 'Mrz–Okt', budget: '400 €/Monat' },
                  { platform: 'LinkedIn Ads', best: 'B2B, Expats, Fachkräfte', season: 'Ganzjährig', budget: '1.000 €/Monat' },
                  { platform: 'Pinterest Ads', best: 'Wohndesign, Hochzeiten, Lifestyle', season: 'Ganzjährig', budget: '300 €/Monat' },
                ].map(row => (
                  <tr key={row.platform} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8', fontWeight: 500 }}>{row.platform}</td>
                    <td style={{ padding: '10px 16px', color: '#949494', fontSize: 12 }}>{row.best}</td>
                    <td style={{ padding: '10px 16px', color: '#949494', fontSize: 12, whiteSpace: 'nowrap' }}>{row.season}</td>
                    <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Das ist ein Ausgangspunkt, keine Vorschrift. Ein Boutique-Hotel mit zw&ouml;lf Zimmern f&auml;hrt eine grundlegend andere Strategie als eine Restaurantgruppe mit drei Standorten. Was f&uuml;r eine Immobilienagentur funktioniert, hat kaum &Auml;hnlichkeit mit dem, was f&uuml;r ein Boot-Charter-Unternehmen funktioniert.</p>
          <p>Wir arbeiten mit Unternehmen auf allen diesen Kan&auml;len &mdash; von unserem B&uuml;ro in Calvi&agrave; aus. Falls Sie wissen m&ouml;chten, welche Kombination f&uuml;r Ihr Unternehmen sinnvoll ist, ist ein erstes Gespr&auml;ch der richtige Ausgangspunkt. Die Fallstudie zu <a href="/de/blog/hotel-direct-bookings/">Hotel-Direktbuchungen</a> zeigt, wie ein Mallorca-Hotel die OTA-Abh&auml;ngigkeit in 11 Wochen deutlich reduziert hat.</p>
          <h2>Haben Sie Fragen dazu?</h2>
          <p>Falls das auf Ihr Unternehmen zutrifft, <a href="/de/contact/?topic=how-to-advertise-business-mallorca">schildern Sie uns kurz Ihre Situation</a> &mdash; wir melden uns innerhalb eines Werktages. Das erste Gespr&auml;ch: 30 Minuten, auf unsere Rechnung.</p>
        </>
      ),
    },
'was-kostet-google-ads': {
      title: 'Google Ads Kosten 2026: Was Sie wirklich zahlen',
      deck: 'Ein ehrlicher, konkreter Leitfaden zu Google-Ads-Kosten 2026. Durchschnittliche Klickpreise nach Branche in Deutschland, die Gesamtkosten-Gleichung, drei Budgetszenarien &mdash; und ein Palma-Fall mit 58,5&thinsp;% niedrigerem Cost-per-Lead.',
      toc: [
        'Wie Google-Ads-Preise tats&auml;chlich funktionieren',
        'Durchschnittliche Klickpreise nach Branche in Deutschland',
        'Die Gesamtkosten-Gleichung',
        'Budgetszenarien: Was 500&thinsp;&euro;, 2.000&thinsp;&euro; und 5.000&thinsp;&euro; bringen',
        'Der Palma-Fall: Immobilienagentur',
        'Billige Klicks sind keine profitablen Klicks',
      ],
      faqs: [
        {
          q: 'Was kostet Google Ads pro Monat in Deutschland?',
          a: 'Es gibt keinen festen Monatspreis &mdash; Google Ads l&auml;uft auf einer Auktion. Ihre monatlichen Ausgaben ergeben sich aus CPC &times; Klicks, begrenzt durch Ihr Tagesbudget. Ein kleines lokales Unternehmen kann mit 500&thinsp;&euro; Werbebudget monatlich starten und relevante Leads generieren. Ein wettbewerbsintensives E-Commerce-Konto ben&ouml;tigt m&ouml;glicherweise 5.000&thinsp;&euro;+ monatlich f&uuml;r statistisch aussagekr&auml;ftiges Volumen. Die meisten KMU, mit denen wir arbeiten, bewegen sich zwischen 1.500&thinsp;&euro; und 8.000&thinsp;&euro; monatlichem Werbebudget.',
        },
        {
          q: 'Was ist der durchschnittliche Klickpreis auf Google Ads in Spanien?',
          a: 'Spanische CPCs liegen aufgrund niedrigerer Wettbewerbsdichte in der Regel 15&ndash;25&thinsp;% unter deutschen CPCs in vergleichbaren Branchen. Eine Immobilienagentur in Palma zahlt f&uuml;r Immobilien-Keywords oft 1,80&thinsp;&euro;&ndash;2,20&thinsp;&euro; pro Klick, verglichen mit 2,40&thinsp;&euro;&ndash;3,00&thinsp;&euro; f&uuml;r eine vergleichbare Kampagne in M&uuml;nchen. Ihr tats&auml;chlicher CPC h&auml;ngt vom Qualit&auml;tsfaktor, der Keyword-Spezifizit&auml;t und der Auktionsdynamik ab.',
        },
        {
          q: 'Was ist das Mindestbudget, mit dem sich Google Ads lohnt?',
          a: '500&thinsp;&euro;/Monat Werbebudget k&ouml;nnen f&uuml;r ein eng ausgerichtetes lokales Dienstleistungsunternehmen mit hochmargiger Conversion und optimierter Landingpage funktionieren. Unter 500&thinsp;&euro;/Monat generieren Sie selten gen&uuml;gend Daten f&uuml;r eine sinnvolle algorithmische Optimierung. Wir empfehlen 1.000&thinsp;&euro;/Monat als realistisches Minimum f&uuml;r eine Kampagne, die lernen und sich verbessern kann.',
        },
        {
          q: 'Was kostet Google Ads Management?',
          a: 'Agenturhonorare variieren stark. Der Branchenstandard ist entweder eine prozentuale Mediaef&uuml;hr (10&ndash;15&thinsp;% des Budgets) oder eine monatliche Pauschale. Prozentmodelle schaffen Anreize, das Budget zu vergr&ouml;&szlig;ern statt die Effizienz zu steigern &mdash; pmax berechnet Monatspauschalen, um diesen Interessenkonflikt zu vermeiden. Pauschalen f&uuml;r KMU-Konten liegen typischerweise bei 500&thinsp;&euro;&ndash;2.000&thinsp;&euro;/Monat, abh&auml;ngig von Kontokomplexit&auml;t und Kanalanzahl.',
        },
        {
          q: 'Ist Google Ads g&uuml;nstiger als Meta Ads?',
          a: 'Meta Ads haben in der Regel niedrigere CPCs &mdash; oft 0,30&thinsp;&euro;&ndash;0,80&thinsp;&euro; auf breite Zielgruppen &mdash; aber niedrigere Conversion-Absicht. Google Search Ads erreichen Menschen, die aktiv nach Ihrem Angebot suchen; Meta Ads unterbrechen Menschen beim Scrollen. F&uuml;r Direct-Response-Kampagnen mit kaufbereitem Traffic generiert Google Search trotz h&ouml;herem CPC oft niedrigere Cost-per-Lead, weil die Traffic-Qualit&auml;t h&ouml;her ist.',
        },
      ],
      prose: (
        <>
          <p>Die h&auml;ufigste Frage von Unternehmen, die Google Ads erw&auml;gen: &bdquo;Was kostet das?&ldquo; Die ehrliche Antwort: es kommt darauf an &mdash; und es ist komplizierter, als die meisten Ratgeber zugeben.</p>
          <p>Es gibt keine Flatrate. Google Ads l&auml;uft auf einer Auktion. Sie zahlen, wenn jemand auf Ihre Anzeige klickt &mdash; zu einem Preis, der in Echtzeit durch Wettbewerb, Relevanz und Ihre eigene Kontoqualit&auml;t bestimmt wird. Dieser Leitfaden erkl&auml;rt, wie das tats&auml;chlich funktioniert, was durchschnittliche Klickpreise nach Branche in Deutschland kosten und was drei verschiedene Monatsbudgets realistisch liefern.</p>

          <h2 id="how-pricing-works">Wie Google-Ads-Preise tats&auml;chlich funktionieren</h2>
          <p>Google Ads ist kein Werbeplatz-Kauf. Jedes Mal, wenn jemand eine Suche ausf&uuml;hrt, l&auml;uft eine automatisierte Auktion. Jeder Werbetreibende, der auf relevante Keywords bietet, nimmt teil. Google bewertet alle und entscheidet: Wer wird gezeigt &mdash; in welcher Position, zu welchem Preis?</p>
          <p>Gewinner ist nicht automatisch der H&ouml;chstbietende. Google nutzt den sogenannten Ad Rank &mdash; eine Kombination aus Gebot, Qualit&auml;tsfaktor (1&ndash;10, eine Ma&szlig;zahl f&uuml;r Anzeigen-Relevanz und Landingpage-Qualit&auml;t) und weiteren Faktoren wie Anzeigenerweiterungen und erwarteter Klickrate. Ein Qualit&auml;tsfaktor von 8 bedeutet: Sie zahlen weniger pro Klick als ein Wettbewerber mit Faktor 4, selbst bei gleichem Gebot. Das ist kein Detail &mdash; es bestimmt ma&szlig;geblich, was Sie pro Klick zahlen.</p>
          <p>Die meisten Search-Kampagnen f&uuml;r KMU laufen auf Cost-per-Click-Basis (CPC). Sie setzen ein maximales CPC-Gebot &mdash; das H&ouml;chstgebot pro Klick &mdash; und der tats&auml;chlich gezahlte Betrag wird durch die Auktion bestimmt, oft darunter. Smart-Bidding-Strategien &mdash; Target CPA, Target ROAS, Conversions maximieren &mdash; automatisieren das Bieten, ben&ouml;tigen aber gen&uuml;gend Conversion-Daten (ca. 30&ndash;50 in 30 Tagen), um effektiv zu optimieren.</p>

          <h2 id="cpc-by-industry">Durchschnittliche Klickpreise nach Branche in Deutschland</h2>
          <p>CPC-Durchschnittswerte variieren erheblich nach Branche &mdash; weil der Wettbewerb variiert. In Branchen, in denen ein einziger Klick mit hoher Wahrscheinlichkeit zu einem Auftrag im f&uuml;nfstelligen Bereich f&uuml;hrt, bieten Werbetreibende aggressiv. In Branchen mit hohem Volumen und niedrigen Margen deutlich konservativer.</p>
          <p>Durchschnittliche Klickpreise in Deutschland nach Branche (WordStream 2024 Google Ads Benchmarks):</p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <svg viewBox="0 0 560 280" style={{ width: '100%', maxWidth: 560, display: 'block' }} aria-label="Durchschnittlicher Google Ads CPC nach Branche in Deutschland">
              {([['€4', 50], ['€3', 95], ['€2', 140], ['€1', 185]] as [string, number][]).map(([label, y]) => (
                <g key={label}>
                  <line x1={65} y1={y} x2={498} y2={y} stroke="#1e1e28" strokeWidth={1} />
                  <text x={58} y={y + 4} fontSize={9} fill="#6b6b6b" textAnchor="end" fontFamily="var(--font-mono)">{label}</text>
                </g>
              ))}
              {([
                ['Recht', 3.80, 65],
                ['Finanzen', 3.40, 121],
                ['B2B SaaS', 2.90, 177],
                ['Immobilien', 2.60, 233],
                ['Gesundheit', 2.10, 289],
                ['Handwerk', 1.70, 345],
                ['Hospitality', 1.30, 401],
                ['E-Commerce', 0.90, 457],
              ] as [string, number, number][]).map(([industry, cpc, bx]) => {
                const h = Math.round(180 * cpc / 4)
                const by = 230 - h
                return (
                  <g key={industry}>
                    <rect x={bx} y={by} width={38} height={h} fill="#3cffd0" rx={2} />
                    <text x={bx + 19} y={by - 6} fontSize={10} fill="#3cffd0" textAnchor="middle" fontFamily="var(--font-mono)">&euro;{cpc.toFixed(2)}</text>
                    <text
                      x={bx + 19}
                      y={248}
                      fontSize={9}
                      fill="#6b6b6b"
                      textAnchor="end"
                      fontFamily="var(--font-mono)"
                      transform={`rotate(-42 ${bx + 19} 248)`}
                    >{industry}</text>
                  </g>
                )
              })}
              <line x1={65} y1={230} x2={498} y2={230} stroke="#2d2d2d" strokeWidth={1} />
            </svg>
            <p style={{ fontSize: 11, color: '#6b6b6b', fontFamily: 'var(--font-mono)', marginTop: 8 }}>Quelle: WordStream 2024 Google Ads Benchmarks &middot; Deutschland &middot; Richtwerte</p>
          </div>

          <p>Rechtsberatung und Finanzdienstleistungen haben die h&ouml;chsten CPCs, weil ein einzelner konvertierter Kunde Tausende von Euro wert ist. E-Commerce liegt am anderen Ende &mdash; niedrigere CPCs, aber auch niedrigere Durchschnittsbestellwerte. Hospitality liegt im unteren Bereich, aber Saisonspitzen k&ouml;nnen CPCs in Buchungshochzeiten deutlich &uuml;ber den Jahresdurchschnitt treiben.</p>
          <p>Dies sind Richtwerte, keine Garantien. Ihr tats&auml;chlicher CPC h&auml;ngt von Qualit&auml;tsfaktor, Keyword-Spezifizit&auml;t, geografischer Ausrichtung und Wettbewerbsintensit&auml;t ab. Reale CPCs k&ouml;nnen 30&ndash;40&thinsp;% &uuml;ber oder unter diesen Werten liegen.</p>

          <h2 id="total-cost-equation">Die Gesamtkosten-Gleichung</h2>
          <p>Der CPC allein sagt nicht, was Google Ads kostet. Die vollst&auml;ndige Gleichung hat mehr Variablen.</p>
          <p><strong>Werbeausgaben</strong> = CPC &times; Klicks. Bei 2,10&thinsp;&euro; CPC und 500 Klicks im Monat: 1.050&thinsp;&euro; Werbeausgaben.</p>
          <p><strong>Klicks sind keine Conversions.</strong> Bei 4&thinsp;% Landingpage-CVR erzeugen 500 Klicks 20 Leads. Cost-per-Lead: 52,50&thinsp;&euro;.</p>
          <p><strong>Der Qualit&auml;tsfaktor beeinflusst alles.</strong> Ein niedriger Qualit&auml;tsfaktor erh&ouml;ht Ihren CPC, was den Cost-per-Lead steigert &mdash; selbst bei gleichbleibender Conversion-Rate. Qualit&auml;tsfaktor von 4/10 auf 7/10 zu verbessern, kann den CPC um 30&ndash;40&thinsp;% senken &mdash; das bedeutet 30&ndash;40&thinsp;% mehr Klicks f&uuml;r dasselbe Budget.</p>
          <p><strong>Agenturhonorar.</strong> pmax berechnet Monatspauschalen &mdash; keine prozentualen Mediageb&uuml;hren. Mehr zur Begr&uuml;ndung auf unserer <a href="/de/google-ads-agentur-spanien/">Google-Ads-Agentur-Seite</a>. Das Gesamtbudget ist Werbeausgaben plus Honorar &mdash; das ist die Zahl, die beim Return z&auml;hlt.</p>

          <h2 id="budget-scenarios">Budgetszenarien: Was 500&thinsp;&euro;, 2.000&thinsp;&euro; und 5.000&thinsp;&euro; tats&auml;chlich bringen</h2>
          <p><strong>500&thinsp;&euro;/Monat Werbebudget.</strong> Bei 2,00&thinsp;&euro; CPC rund 250 Klicks pro Monat. Bei 4&thinsp;% CVR: 10 Leads. Cost-per-Lead: 50&thinsp;&euro;. Funktioniert f&uuml;r lokale Dienstleister mit hochmargiger Conversion, engem geografischem Targeting und optimierter Landingpage. Funktioniert nicht f&uuml;r wettbewerbsintensiven E-Commerce oder f&uuml;r Unternehmen, die gleichzeitig mehrere Regionen abdecken m&ouml;chten. Bei 500&thinsp;&euro;/Monat m&uuml;ssen Targeting und Landingpage sehr pr&auml;zise sein. Smart Bidding ist bei diesem Volumen selten verl&auml;sslich &mdash; manueller CPC oder Enhanced CPC ist die stabilere Wahl.</p>
          <p><strong>2.000&thinsp;&euro;/Monat Werbebudget.</strong> Bei 2,00&thinsp;&euro; CPC rund 1.000 Klicks. Bei 4&thinsp;% CVR: 40 Leads. Cost-per-Lead: 50&thinsp;&euro;. Der Unterschied zu 500&thinsp;&euro;/Monat liegt nicht nur im Volumen. Bei 2.000&thinsp;&euro;/Monat haben Sie gen&uuml;gend Daten f&uuml;r sinnvolle Anzeigentext-A/B-Tests, f&uuml;r die Identifikation konvertierender Keyword-Themen und f&uuml;r den Aufbau von Remarketing-Zielgruppen. Der Algorithmus hat mehr Signal f&uuml;r die Gebotsoptimierung. Smart Bidding beginnt, effektiv zu arbeiten.</p>
          <p><strong>5.000&thinsp;&euro;/Monat Werbebudget.</strong> Auf diesem Niveau werden die meisten Kampagnen nicht mehr durch das Budget eingeschr&auml;nkt. Sie haben gen&uuml;gend Volumen f&uuml;r Performance Max neben Search, f&uuml;r simultane Tests mehrerer Landingpage-Varianten und f&uuml;r segmentiertes Remarketing &uuml;ber Googles gesamtes Inventar. Bei 5.000&thinsp;&euro;/Monat sind Kampagnenstruktur und Bidding-Strategie wichtiger als das Budget &mdash; denn das Budget ist selten der Engpass. Sie k&ouml;nnen Zielgruppensignale schichten, Mitbewerber-Kampagnen fahren und Asset-Group-Tests in Performance Max mit aussagekr&auml;ftigen Ergebnissen durchf&uuml;hren.</p>

          <h2 id="palma-real-estate">Der Palma-Fall: Immobilienagentur</h2>
          <p>Einer unserer Kunden ist eine Immobilienagentur in Palma. Als sie zu uns kamen, gaben sie 800&thinsp;&euro;/Monat f&uuml;r Google Ads aus und generierten etwa vier Leads pro Monat. Cost-per-Lead: 200&thinsp;&euro;.</p>
          <p>Das Problem war nicht das Budget. Es war die Struktur. Das Konto lief auf Broad-Match-Keywords ohne Ausschlussliste. Der Traffic landete auf einer Homepage mit elf Formularfeldern und ohne klaren Call-to-Action. Die Qualit&auml;tsfaktoren lagen im Durchschnitt bei 3&ndash;4/10 &mdash; was die CPCs deutlich &uuml;ber das marktgerechte Niveau trieb.</p>
          <p>Wir restrukturierten: Exact- und Phrase-Match auf hochintentionale Keywords, eine vereinfachte Landingpage mit Zwei-Felder-Formular und einem einzigen CTA, eine Ausschlussliste mit 240 Begriffen sowie Gebotsanpassungen nach Tageszeit und Ger&auml;t. Das Budget wurde auf 1.500&thinsp;&euro;/Monat erh&ouml;ht &mdash; nicht weil mehr Budget das Problem l&ouml;st, sondern weil ein gut strukturiertes Konto gen&uuml;gend Volumen f&uuml;r Smart Bidding ben&ouml;tigt.</p>
          <p>Nach 60 Tagen: 18 Leads pro Monat bei 83&thinsp;&euro; Cost-per-Lead. Gleicher Markt, gleiche Agentur, gleiches Produkt. Werbeausgaben stiegen um 87,5&thinsp;%. Leads stiegen um 350&thinsp;%. Cost-per-Lead sank um 58,5&thinsp;%. Das ist der Unterschied zwischen mehr Geld in eine kaputte Struktur pumpen und zuerst die Struktur fixen. Weitere Ergebnisse finden Sie in unseren <a href="/de/cases/">Referenzen</a>.</p>

          <h2 id="cheap-clicks">Billige Klicks sind keine profitablen Klicks</h2>
          <p>Lohnt sich Google Ads f&uuml;r mein Unternehmen? Es kommt darauf an &mdash; aber nicht auf den CPC allein.</p>
          <p>Wir haben Konten auditiert mit 0,50&thinsp;&euro; CPC und 400&thinsp;&euro; Cost-per-Lead &mdash; weil Keywords zu breit waren, Landingpages zur Suchintention nicht passten und kein Conversion-Ziel gesetzt war, das die Kampagne h&auml;tte optimieren k&ouml;nnen. G&uuml;nstige Klicks ohne Relevanz liefern keinen Return.</p>
          <p>Profitabilit&auml;t in Google Ads ist eine Funktion: CPC &times; (1&thinsp;&divide;&thinsp;CVR) = Cost-per-Lead. Dann: Cost-per-Lead &times; (1&thinsp;&divide;&thinsp;Abschlussrate) = Kundenakquisitionskosten. Im Vergleich mit dem Kundenwert.</p>
          <p>Wenn ein durchschnittlicher Kunde 5.000&thinsp;&euro; wert ist und Sie jeden f&uuml;nften Lead abschlie&szlig;en, ergeben 200&thinsp;&euro; Cost-per-Lead Kundenakquisitionskosten von 1.000&thinsp;&euro; &mdash; ein 5:1-Return. Wenn ein durchschnittlicher Kunde 500&thinsp;&euro; wert ist und Sie jeden zehnten Lead abschlie&szlig;en, ergeben 30&thinsp;&euro; Cost-per-Lead Kosten von 300&thinsp;&euro; &mdash; ein 1,7:1-Return. Das zweite Szenario hat billigere Klicks. Es ist deutlich weniger profitabel.</p>
          <p>Die richtige Frage ist nicht: &bdquo;Was kostet Google Ads?&ldquo; Die richtige Frage ist: &bdquo;Was ist ein Kunde wert &mdash; und was kostet seine Gewinnung?&ldquo; Beantworten Sie die zweite Frage zuerst. Dann beantwortet sich die erste von selbst.</p>
          <p>Weiterlesen: <a href="/de/blog/google-shopping-kampagne-leitfaden/">Google Shopping Kampagnen Leitfaden</a> &middot; <a href="/de/google-ads-agentur-spanien/">Google Ads Agentur Spanien</a></p>

          <h2>Haben Sie Fragen dazu?</h2>
          <p>Falls das auf Ihr Unternehmen zutrifft, <a href="/de/contact/?topic=was-kostet-google-ads">schildern Sie uns kurz Ihre Situation</a> &mdash; wir melden uns innerhalb eines Werktages. Das erste Gespr&auml;ch: 30 Minuten, auf unsere Rechnung.</p>
        </>
      ),
    },
'conversion-rate-optimisation-checklist': {
  title: 'Conversion-Rate-Optimierung Checkliste 2026: 15 Punkte, die wirklich etwas bewegen',
  deck: 'Eine praktische 15-Punkte-CRO-Checkliste für Unternehmer und Marketer auf Mallorca. Branchenbenchmarks, Quick Wins, strukturelle Fixes — und ein echtes Fallbeispiel: von 28 auf 71 qualifizierte Leads pro Monat, ohne das Werbebudget zu erhöhen.',
  toc: [
    'Was Conversion-Rate-Optimierung wirklich bedeutet',
    'Branchenbenchmarks: Wo stehen Sie?',
    'Die 15-Punkte-CRO-Checkliste',
    'Quick Wins vs. strukturelle Fixes',
    'Ein CRO-Fallbeispiel: Portals Properties',
    'Wie man priorisiert',
  ],
  faqs: [
    {
      q: 'Was ist eine gute Conversion Rate für eine Unternehmenswebsite?',
      a: 'Das hängt von der Branche ab. Laut Unbounce Conversion Benchmark Report 2024 liegen die medianen Conversion Rates bei: Immobilien 1,4 %, E-Commerce 2,9 %, Gesundheitswesen 3,4 %, Hotellerie 3,6 %, professionelle Dienstleistungen 4,8 %, Finanzen 5,0 %. Das sind Medianwerte — das obere Viertel jeder Branche liegt typischerweise beim Zwei- bis Dreifachen. Wenn Sie deutlich unter dem Branchenmedian liegen, haben Sie ein strukturelles Problem.',
    },
    {
      q: 'Wie verbessere ich die Conversion Rate meiner Website ohne Entwickler?',
      a: 'Mehrere der wirkungsstärksten CRO-Maßnahmen erfordern keinen Code. Schreiben Sie den Text Ihres CTA-Buttons um: von "Absenden" zu "Kostenloses Angebot anfordern". Platzieren Sie ein echtes Kundenfeedback direkt neben Ihr Kontaktformular. Entfernen Sie nicht notwendige Felder aus Ihrem Formular — jedes gestrichene Feld steigert die Abschlussrate um ca. 11 %. Fügen Sie eine Telefonnummer in die Kopfzeile ein. Komprimieren Sie Bilder über 200 KB. Diese fünf Maßnahmen kosten weniger als zwei Stunden und beheben die häufigsten Conversion-Probleme.',
    },
    {
      q: 'Was kostet Conversion-Rate-Optimierung?',
      a: 'Das hängt stark vom Umfang ab. Quick-Win-CRO — Texte, Formular-Optimierung, Bildkomprimierung, CTA-Platzierung — kostet oft nur die Zeit zur Umsetzung. Strukturelle CRO — Seitenumbau, Mobile-UX-Überarbeitung, A/B-Test-Infrastruktur — kostet typischerweise 2.000–15.000 €. Laufende CRO-Programme mit regelmäßigen A/B-Tests und Analyse liegen bei 1.000–3.000 €/Monat. Unsere Conversion-Design-Leistung beschreiben wir unter /de/services/conversion-design/.',
    },
    {
      q: 'Was ist der häufigste Grund für eine niedrige Conversion Rate?',
      a: 'Nach unserer Erfahrung aus Dutzenden von Website-Audits ist die häufigste Ursache Formular-Reibung — zu viele Felder, vager CTA-Text, keine Bestätigung, was nach dem Absenden passiert. Die zweithäufigste Ursache ist Seitengeschwindigkeit: ein LCP-Wert über 3 Sekunden verliert messbar Besucher, bevor ein Inhalt gelesen wird. Drittens: fehlendes Vertrauen — keine sichtbare Telefonnummer, keine aktuellen Bewertungen, kein benannter Ansprechpartner.',
    },
    {
      q: 'Wie lange dauert es, bis CRO-Maßnahmen Ergebnisse zeigen?',
      a: 'Quick Wins — Formular-Vereinfachung, CTA-Texte, Vertrauenssignale — können bei ausreichend Traffic innerhalb von ein bis zwei Wochen messbare Ergebnisse liefern. Strukturelle Änderungen benötigen typischerweise vier bis acht Wochen zur Umsetzung und weitere zwei bis vier Wochen zur Messung. A/B-Tests brauchen statistische Signifikanz: bei weniger besuchten Seiten kann das sechs bis acht Wochen pro Test bedeuten. Die schnellsten CRO-Gewinne entstehen durch das Beheben offensichtlicher struktureller Probleme — danach folgt iteratives Testen.',
    },
  ],
  prose: (
    <>
      <p>Conversion-Rate-Optimierung ist die Praxis, den Anteil der Besucher zu erh&ouml;hen, die eine gew&uuml;nschte Handlung ausf&uuml;hren &mdash; ein Formular ausf&uuml;llen, einen Kauf abschlie&szlig;en, ein Gespr&auml;ch buchen. Sie brauchen daf&uuml;r keinen zus&auml;tzlichen Traffic und kein gr&ouml;&szlig;eres Werbebudget.</p>
      <p>Sie m&uuml;ssen Reibung beseitigen.</p>
      <p>Eine Website mit 2&nbsp;% Conversion Rate schickt 98 von 100 Besuchern weg, ohne dass etwas passiert. Verbessert man das auf 4&nbsp;%, verdoppelt sich der Output des Werbebudgets &mdash; ohne zus&auml;tzliche Ausgaben. Das ist kein theoretisches Szenario. Das ist das Ergebnis strukturierter, methodischer CRO-Arbeit auf echten Unternehmenswebsites. Unsere <a href="/de/services/conversion-design/">Conversion-Design-Leistung</a> baut auf denselben 15 Punkten dieser Checkliste auf.</p>

      <h2 id="what-is-cro">Was Conversion-Rate-Optimierung wirklich bedeutet</h2>
      <p>Ihre Conversion Rate ist die Anzahl der Conversions geteilt durch die Anzahl der Besucher, ausgedr&uuml;ckt als Prozentsatz. Wenn 1.000 Menschen im Monat Ihre Website besuchen und 30 ein Formular ausf&uuml;llen, betr&auml;gt Ihre Conversion Rate 3&nbsp;%.</p>
      <p>CRO ist die Arbeit, die diese Zahl verschiebt. Es ist kein Raten. Es ist ein strukturierter Prozess: messen, was passiert; identifizieren, wo Besucher abspringen; eine Hypothese aufstellen, warum; eine &Auml;nderung testen; neu messen. Richtig gemacht, summiert sich das. Eine Verbesserung um 0,5&nbsp;% in einem Monat, gefolgt von weiteren 0,5&nbsp;% im n&auml;chsten, f&uuml;hlt sich nicht dramatisch an &mdash; &uuml;ber zw&ouml;lf Monate ist es transformativ.</p>
      <p>Das Wichtigste bei CRO: Sie brauchen keinen zus&auml;tzlichen Traffic. Wenn Ihre Website bei 1,5&nbsp;% konvertiert und der Branchenmedian bei 4,8&nbsp;% liegt, haben Sie kein Traffic-Problem. Sie haben ein Reibungsproblem. Und Reibungsprobleme sind l&ouml;sbar.</p>

      <h2 id="cro-benchmarks">Branchenbenchmarks: Wo stehen Sie?</h2>
      <p>Bevor Sie beurteilen, ob Ihre Conversion Rate Arbeit braucht, ben&ouml;tigen Sie einen Referenzpunkt. Diese Werte stammen aus dem Unbounce Conversion Benchmark Report 2024 und zeigen mediane Conversion Rates &uuml;ber Landing Pages in sechs Branchen.</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Branche</th>
              <th style={{ textAlign: 'right', padding: '8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Medianer CVR (Unbounce 2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { sector: 'Immobilien', cvr: '1,4 %' },
              { sector: 'E-Commerce', cvr: '2,9 %' },
              { sector: 'Gesundheitswesen', cvr: '3,4 %' },
              { sector: 'Hotellerie', cvr: '3,6 %' },
              { sector: 'Professionelle Dienstleistungen', cvr: '4,8 %' },
              { sector: 'Finanzen', cvr: '5,0 %' },
            ].map(row => (
              <tr key={row.sector} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.sector}</td>
                <td style={{ padding: '10px 0', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.cvr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Wenn Sie deutlich unter dem Branchenmedian liegen, haben Sie ein strukturelles Problem &mdash; Seitengeschwindigkeit, Vertrauen, Formularl&auml;nge oder CTA-Platzierung. Wenn Sie in der N&auml;he des Medians liegen, werden gezielte Verbesserungen die Zahl verschieben. Wenn Sie dar&uuml;ber liegen, sind Sie im Bereich des iterativen A/B-Testens.</p>

      <h2 id="cro-checklist">Die 15-Punkte-CRO-Checkliste</h2>
      <p>Arbeiten Sie diese Liste der Reihe nach durch. Die ersten Punkte haben die h&ouml;chste Wirkung bei den geringsten Implementierungskosten.</p>
      <ol>
        <li><strong>Seitengeschwindigkeit.</strong> Pr&uuml;fen Sie Ihre Core Web Vitals in der Google Search Console: Largest Contentful Paint (LCP) unter 2,5 Sekunden, Interaction to Next Paint (INP) unter 200 ms, Cumulative Layout Shift (CLS) unter 0,1. Jede zus&auml;tzliche Sekunde Ladezeit reduziert Conversions um ca. 7&nbsp;%. Mobilger&auml;te haben Vorrang &mdash; der gr&ouml;&szlig;te Teil Ihres Traffics kommt von Smartphones.</li>
        <li><strong>CTA oberhalb des Faltbereichs.</strong> Ihr prim&auml;rer Call-to-Action muss auf einem Mobilger&auml;t ohne Scrollen sichtbar sein. Wenn ein Besucher erst suchen muss, was er tun soll, werden viele es nicht tun. Das ist einer der h&auml;ufigsten Conversion-Fehler, den wir in Website-Audits finden.</li>
        <li><strong>Formularl&auml;nge.</strong> HubSpot-Daten zeigen: Formulare mit mehr als f&uuml;nf Feldern verlieren 50&nbsp;% der Ausf&uuml;llungen. Jedes zus&auml;tzliche Feld reduziert die Conversion um ca. 11&nbsp;%. F&uuml;r die meisten Lead-Generation-Szenarien reichen Name, E-Mail und eine qualifizierende Frage.</li>
        <li><strong>Headline-Klarheit.</strong> Ihre Headline sollte in einem Satz kommunizieren, was Sie tun. &bdquo;Preisgekr&ouml;nte digitale L&ouml;sungen&ldquo; sagt einem Besucher nichts. &bdquo;Google-Ads-Management f&uuml;r Unternehmen auf Mallorca&ldquo; sagt genau das Richtige.</li>
        <li><strong>Social-Proof-Platzierung.</strong> Kundenstimmen und Bewertungen geh&ouml;ren neben Ihren CTA &mdash; nicht auf eine separate Testimonials-Seite. Ein echter Name, ein konkretes Ergebnis und ein Unternehmensname, positioniert neben Ihrem Kontaktformular, reduzieren Unsicherheit im Entscheidungsmoment.</li>
        <li><strong>Mobile UX.</strong> Testen Sie auf echten Ger&auml;ten, nicht nur in Chrome DevTools. Tipp-Ziele sollten mindestens 44&times;44 px gro&szlig; sein. Text muss ohne Pinch-to-Zoom lesbar sein. Mobile Nutzer k&auml;mpfen sich nicht durch schlechte UX &mdash; sie verlassen die Seite.</li>
        <li><strong>Vertrauenssignale.</strong> SSL-Zertifikat (sichtbares Schloss), eine echte Telefonnummer in der Kopfzeile, eine Adresse und aktuelle, datierte Bewertungen. Jedes Vertrauenssignal beseitigt einen Grund, nicht zu konvertieren.</li>
        <li><strong>Bild-Optimierung.</strong> Nicht optimierte gro&szlig;e Bilder sind eine der h&auml;ufigsten Ursachen schlechter LCP-Werte. Komprimieren Sie Bilder &uuml;ber 200&nbsp;KB, konvertieren Sie zu WebP und f&uuml;gen Sie beschreibende Alt-Texte hinzu &mdash; sowohl f&uuml;r Barrierefreiheit als auch f&uuml;r SEO.</li>
        <li><strong>Seitenstruktur.</strong> Verwenden Sie eine klare H1&rarr;H2&rarr;H3-Hierarchie. Ein Besucher, der die Seite &uuml;berfliegt, sollte Ihr Kernversprechen innerhalb von zehn Sekunden verstehen, ohne jeden Satz zu lesen.</li>
        <li><strong>CTA-Text.</strong> &bdquo;Kostenloses Angebot anfordern&ldquo; &uuml;bertrifft &bdquo;Absenden&ldquo; messbar. &bdquo;30-min&uuml;tiges Gespr&auml;ch buchen&ldquo; &uuml;bertrifft &bdquo;Kontakt&ldquo;. Spezifizit&auml;t reduziert die Angst vor dem, was nach dem Klick kommt.</li>
        <li><strong>Analytics und Tracking.</strong> Sie k&ouml;nnen nicht optimieren, was Sie nicht messen. Richten Sie GA4-Event-Tracking f&uuml;r jede Formular-Einsendung, jeden Button-Klick und relevante Scroll-Tiefen ein, bevor Sie mit Tests beginnen. Unser <a href="/de/blog/tracking-setup-guide/">Tracking-Leitfaden</a> erkl&auml;rt den Aufbau Schritt f&uuml;r Schritt.</li>
        <li><strong>Heat Maps und Session-Recordings.</strong> Tools wie Microsoft Clarity (kostenlos) zeigen, wo Nutzer klicken, wo sie aufh&ouml;ren zu scrollen und wo sie abspringen. Hier entstehen echte CRO-Erkenntnisse &mdash; nicht aus Annahmen, sondern aus aufgezeichnetem Verhalten echter Besucher auf Ihren spezifischen Seiten.</li>
        <li><strong>Interne Verlinkung.</strong> Verlinken Sie von stark besuchten Seiten auf Ihre Seiten mit der h&ouml;chsten Conversion Rate. Ein Besucher, der f&uuml;r eine Leistung gekommen ist, sollte verwandte Leistungen entdecken k&ouml;nnen, ohne die Website zu verlassen.</li>
        <li><strong>A/B-Test-Disziplin.</strong> Testen Sie immer nur eine Variable gleichzeitig. &Auml;ndern Sie Headline, CTA und Layout gleichzeitig, k&ouml;nnen Sie kein Ergebnis einer spezifischen &Auml;nderung zuordnen. F&uuml;hren Sie Tests bis zur statistischen Signifikanz durch &mdash; in der Regel mindestens 100 Conversions pro Variante.</li>
        <li><strong>Exit-Intent und Scroll-Trigger.</strong> Ein gut getimter sekund&auml;rer CTA, der ausgel&ouml;st wird, wenn ein Besucher die Seite verlassen m&ouml;chte, rettet durchschnittlich 3&ndash;8&nbsp;% der sonst verlorenen Sessions. Sparsam einsetzen &mdash; maximal einen sekund&auml;ren CTA pro Seite.</li>
      </ol>

      <h2 id="quick-wins">Quick Wins vs. strukturelle Fixes</h2>
      <p>Nicht jede CRO-Ma&szlig;nahme erfordert einen Entwickler. Manche &Auml;nderungen dauern 15 Minuten und verschieben die Zahl sofort.</p>
      <p><strong>Quick Wins (kein Entwickler n&ouml;tig):</strong> CTA-Button-Text umschreiben. Eine Kundenstimme neben das Kontaktformular verschieben. Bilder &uuml;ber 200&nbsp;KB komprimieren. Telefonnummer in die Kopfzeile einf&uuml;gen. Nicht notwendige Felder aus dem Formular entfernen.</p>
      <p><strong>Strukturelle Fixes (Entwickler erforderlich):</strong> Seite auf einem schnelleren Framework neu aufbauen. Mobile Anfrage- oder Checkout-Strecke neu gestalten. Server-seitiges Rendering implementieren. Informationsarchitektur so umstrukturieren, dass der prim&auml;re CTA auf Mobilger&auml;ten oberhalb des Faltbereichs erscheint. Diese Ma&szlig;nahmen dauern l&auml;nger und kosten mehr, liefern aber dauerhaft gr&ouml;&szlig;ere Verbesserungen.</p>
      <p>Die praktische Reihenfolge: erst Quick Wins umsetzen. Sie kosten fast nichts und produzieren oft innerhalb von Wochen messbare Verbesserungen. Nutzen Sie diese Daten, um den Business Case f&uuml;r die strukturelle Arbeit zu begr&uuml;nden.</p>

      <h2 id="portals-properties">Ein CRO-Fallbeispiel: Portals Properties</h2>
      <p>Portals Properties ist eine Boutique-Immobilienagentur in Puerto Portals, Mallorca, spezialisiert auf Immobilienverkauf f&uuml;r britische K&auml;ufer. Als das Unternehmen in Q4 2025 zu uns kam, gab es 6.200 &pound;/Monat f&uuml;r Google Ads aus und generierte rund 28 qualifizierte Anfragen pro Monat &mdash; bei einem Cost per qualifiziertem Lead von 221 &pound;.</p>
      <p>Die Kampagnen waren ordentlich strukturiert. Das Problem war die Website: gebaut 2019, Core-Web-Vitals-Score 42 auf Mobilger&auml;ten, vier Klicks bis zum Kontaktformular, elf Formularfelder.</p>
      <p>Wir haben die Website in acht Wochen neu aufgebaut. Die neue Seite l&auml;dt in unter 1,5 Sekunden auf Mobilger&auml;ten (Core Web Vitals: 91), zeigt auf jeder Seite ein zweifeldiges Formular und ersetzt Stockfotos durch eigene Team-Aufnahmen. Echte Verkaufspreise und Kundenstimmen erscheinen auf jeder Objektseite.</p>
      <p>Nach 14 Wochen: qualifizierte Leads von 28 auf 71 pro Monat, Cost per Lead von 221 &pound; auf 94 &pound;. Das Werbebudget blieb unver&auml;ndert. Den vollst&auml;ndigen Bericht lesen Sie in unserem <a href="/de/blog/free-website-design/">kostenlosen Website-Design-Artikel</a>.</p>

      <div className="prose-callout" style={{ marginTop: 32 }}>
        <span className="prose-callout-kicker">Das Fazit</span>
        <p>Das Werbebudget blieb unver&auml;ndert. Was sich &auml;nderte, war das, was passierte, wenn der Traffic ankam. Das ist die gesamte Pr&auml;misse von CRO.</p>
      </div>

      <h2 id="how-to-prioritise">Wie man priorisiert</h2>
      <p>Nicht alle CRO-Arbeit ist gleich wertvoll. Das Standardframework f&uuml;r die Priorisierung multipliziert drei Faktoren: potenzieller Impact (wie viele Besucher betrifft diese Seite oder dieser Schritt?), Konfidenz (wie stark ist die Evidenz, dass diese &Auml;nderung hilft?) und Aufwand (wie schnell l&auml;sst sie sich umsetzen und testen?).</p>
      <p>In der Praxis lautet die Reihenfolge meist so: Beheben Sie zuerst die Seite mit dem h&ouml;chsten Traffic und den meisten Conversions. Beginnen Sie mit &Auml;nderungen ohne Entwickler. Messen Sie das Ergebnis. Dann gehen Sie zu strukturellen Ma&szlig;nahmen &uuml;ber, sobald Daten die Investition rechtfertigen.</p>
      <p>Die meisten Unternehmen haben eine oder zwei Seiten, die 70&ndash;80&nbsp;% aller Conversions ausmachen. Diese Seiten um 1&nbsp;% zu verbessern hat mehr Wirkung als zwanzig sekund&auml;re Seiten um je 5&nbsp;% zu verbessern. Finden Sie zuerst die Seite mit dem gr&ouml;&szlig;ten Hebel &mdash; und arbeiten Sie von dort aus.</p>
      <p>Schauen Sie sich unsere <a href="/de/cases/">Referenzen</a> an oder sprechen Sie mit uns &uuml;ber CRO auf Ihrer Website. Wir sagen Ihnen direkt, wo der gr&ouml;&szlig;te Hebel liegt.</p>

      <h2>Haben Sie Fragen dazu?</h2>
      <p>Falls das auf Ihr Unternehmen zutrifft, <a href="/de/contact/?topic=conversion-rate-optimisation-checklist">schildern Sie uns kurz Ihre Situation</a> &mdash; wir melden uns innerhalb eines Werktages. Das erste Gespr&auml;ch: 30 Minuten, auf unsere Rechnung.</p>
    </>
  ),
},
'what-is-generative-engine-optimisation': {
      toc: [
        'GEO ist nicht SEO mit neuem Namen',
        'Was die Forschung zeigt',
        'Wie KI-Engines entscheiden, was sie zitieren',
        'Das Acht-Schritte-GEO-Framework',
        'GEO-Fortschritte messen',
        'Was wir bei pmax tun',
      ],
      faqs: [
        {
          q: 'Was ist Generative Engine Optimisation (GEO)?',
          a: 'GEO ist die Praxis, Website-Inhalte so zu gestalten, dass sie in KI-generierten Suchantworten — von Engines wie ChatGPT, Perplexity und Gemini — häufiger zitiert werden. Anders als klassisches SEO, das auf eine Position in einer Ergebnisliste optimiert, optimiert GEO auf Inklusion in einer synthetisierten Antwort. Die entscheidenden Hebel sind andere: zitierte Statistiken, direkte Expertenaussagen, server-gerenderter Inhalt und KI-Crawler-Zugang — statt Linkaufbau und Keyword-Dichte.',
        },
        {
          q: 'Wie unterscheidet sich GEO von SEO?',
          a: 'SEO optimiert für eine Ranking-Position in einer Ergebnisliste. GEO optimiert für Inklusion in einer synthetisierten KI-Antwort — es gibt keine Liste, nur Inklusion oder Exklusion. SEO belohnt Backlinks, Domain-Authority und Keyword-Relevanz. GEO belohnt zitierte Statistiken, direkte Expertenaussagen, extrahierbare Inhaltsstrukturen und technische Crawler-Zugänglichkeit. Einige Inputs überschneiden sich — eine schnelle, gut strukturierte Website hilft beiden — aber die spezifischen Maßnahmen, die die Zitationsrate bewegen, sind verschieden.',
        },
        {
          q: 'Wie optimiere ich meine Website für ChatGPT und Perplexity?',
          a: 'Beginnen Sie mit technischen Grundlagen: Stellen Sie sicher, dass GPTBot und PerplexityBot nicht in Ihrer robots.txt oder WAF blockiert sind, und dass Ihre Seiten server-gerendert statt JavaScript-only sind. Dann zu den Inhalten: Fügen Sie auf jeder Schlüsselseite zitierte Statistiken mit namentlich genannten Quellen ein, ergänzen Sie direkte Expertenaussagen, strukturieren Sie Inhalte mit nummerierten Listen und Vergleichstabellen, und implementieren Sie FAQPage-JSON-LD-Schema. Erstellen Sie abschließend eine llms.txt-Datei und beginnen Sie, Ihre Zitationsrate zu messen.',
        },
        {
          q: 'Welche GEO-Technik ist laut Forschung am wirksamsten?',
          a: 'Aggarwal et al. (2024), veröffentlicht auf der KDD 2024, fanden, dass das Hinzufügen direkter Expertenaussagen die KI-Zitationsrate um 27,8 % verbesserte — der größte Einzeleffekt aller getesteten Techniken. Zitierte Statistiken steigerten die Zitationsrate um 25,9 %. Beide übertrafen Autoritätssignale, Keyword-Optimierung und Verbesserungen der Textflüssigkeit.',
        },
        {
          q: 'Wie erfahre ich, ob meine Website von KI-Engines zitiert wird?',
          a: 'Sie brauchen ein KI-Sichtbarkeits-Tracking-Tool, das konfigurierte Prompts über mehrere KI-Engines laufen lässt und misst, ob Ihre Marke oder Ihre Inhalte in den Antworten erscheinen. Wir verwenden CrunchJunkie, das 10 Engines trackt — ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews, Google AI Mode, Microsoft Copilot, Grok, Meta AI und DeepSeek — mit automatisierten wöchentlichen Scans und statistischen Konfidenzintervallen für jede Metrik.',
        },
        {
          q: 'Was ist eine llms.txt-Datei?',
          a: 'Eine llms.txt-Datei ist ein aufkommender Standard — analog zu robots.txt — der KI-Crawlern Hinweise zu Ihren Website-Inhalten, Schlüsselseiten und bevorzugten Zusammenfassungen gibt. Sie liegt im Root-Verzeichnis Ihrer Domain. Noch nicht universell verbreitet, aber die Adoption wächst schnell. Sie jetzt zu erstellen kostet nahezu nichts und signalisiert KI-Crawlern, dass Ihre Website für KI-Indexierung vorbereitet ist.',
        },
      ],
      prose: (
        <>
          <p>Wer eine Frage in ChatGPT oder Perplexity eingibt, bekommt keine zehn blauen Links. Er bekommt eine direkte Antwort. Diese Antwort zieht Quellen heran &mdash; manche namentlich genannt, manche nicht. Die zitierten Websites sind nicht zwangsläufig die, die auf Seite eins von Google ranken. Es sind die, die KI-Systeme am einfachsten lesen, extrahieren und einordnen können.</p>
          <p>Das ist der Kern von Generative Engine Optimisation. GEO ist die Praxis, Inhalte so zu gestalten, dass sie in KI-generierten Antworten h&auml;ufiger zitiert werden. Es ist keine Umbenennung von SEO. Es ist eine andere Disziplin f&uuml;r ein anderes Such-Paradigma.</p>

          <h2 id="geo-is-not-seo">GEO ist nicht SEO mit neuem Namen</h2>
          <p>Klassisches SEO funktioniert nach einem Mechanismus: Ranking in einer Ergebnisliste. Google bewertet Ihre Seite und zeigt sie Nutzern an. Erfolg wird durch Position gemessen &mdash; Platz eins, zwei, zehn.</p>
          <p>GEO funktioniert anders. Es gibt keine Liste. Eine KI-Engine synthetisiert eine einzelne Antwort aus mehreren Quellen. Ob Ihr Inhalt zu dieser Antwort beitr&auml;gt, h&auml;ngt nicht von der Ranking-Position ab, sondern davon, ob die KI extrahieren, vertrauen und zuschreiben kann, was Sie geschrieben haben.</p>
          <p>SEO belohnt Backlinks, Domain-Authority und Ladegeschwindigkeit. GEO belohnt zitierte Statistiken, direkte Expertenaussagen und strukturierten, extrahierbaren Inhalt. SEO optimiert f&uuml;r Position. GEO optimiert f&uuml;r Inklusion.</p>
          <p>Eine Seite auf Platz&nbsp;1 bei Google erscheint m&ouml;glicherweise nie in einer Perplexity-Antwort. Eine Seite, die Google nicht unter den Top&nbsp;100 zeigt, kann von ChatGPT bei jeder relevanten Anfrage zitiert werden. Beides haben wir beobachtet. Die L&uuml;cke zwischen diesen Ergebnissen ist fast immer technischer und struktureller Natur &mdash; keine Frage besserer Produkte.</p>
          <p>pmax sch&auml;tzt auf Basis aktueller Traffic-Daten und der beobachteten Entwicklung, dass KI-Suchmaschinen bis 2027 rund 30&nbsp;% aller Suchanfragen abwickeln werden. Sichtbarkeit jetzt aufzubauen kostet erheblich weniger als sp&auml;ter aufzuholen.</p>

          <h2 id="what-research-shows">Was die Forschung zeigt</h2>
          <p>Die grundlegende wissenschaftliche Studie zu GEO wurde 2024 auf der KDD von Aggarwal et&nbsp;al. ver&ouml;ffentlicht: &bdquo;GEO: Generative Engine Optimization.&ldquo; Sie ist die bislang rigoros&shy;este Untersuchung, welche Ma&szlig;nahmen Zitationsraten in KI-generierten Antworten tats&auml;chlich bewegen.</p>
          <p>Das Hauptergebnis: &bdquo;GEO kann die Quell-Sichtbarkeit in KI-generierten Antworten um bis zu 40&nbsp;% steigern, durch Optimierungsmethoden wie Zitationen, Statistiken und direkte Zitate.&ldquo;</p>
          <p>Drei konkrete Techniken erzielten die gr&ouml;&szlig;ten messbaren Verbesserungen:</p>
          <ul>
            <li>Zitierte Statistiken in Inhalten: <strong>+25,9&nbsp;%</strong> Zitationsrate</li>
            <li>Direkte Expertenaussagen: <strong>+27,8&nbsp;%</strong> Zitationsrate</li>
            <li>Verbesserung der Textfl&uuml;ssigkeit: <strong>+15,9&nbsp;%</strong> Zitationsrate</li>
          </ul>
          <p>Eine Steigerung um 27,8&nbsp;% durch das Hinzuf&uuml;gen direkter Zitate ist kein marginaler Effekt. Es ist auch eine der einfachsten &Auml;nderungen, die man vornehmen kann. Die Studie testete auch Autorit&auml;tssignale &mdash; die Bezugnahme auf namentlich genannte Quellen, Institutionen und ver&ouml;ffentlichte Forschung. Diese schnitten konsistent gut ab.</p>
          <p>Was die Nadel <em>nicht</em> bewegt: Keyword-Dichte, Meta-Description-L&auml;nge, interne Linkanzahl. Die Signale, f&uuml;r die SEO Marketer trainiert hat, sind f&uuml;r GEO bestenfalls neutral.</p>
          <div className="prose-callout" style={{ marginTop: 32 }}>
            <span className="prose-callout-kicker">Kernaussage</span>
            <p>Die Techniken, die AI-Zitierbarkeit am st&auml;rksten verbessern, erfordern echtes Fachwissen. Zitierte Statistiken und direkte Expertenaussagen k&ouml;nnen nicht erfunden werden. GEO belohnt Substanz &mdash; nicht SEO-optimierte Struktur.</p>
          </div>

          <h2 id="how-ai-decides">Wie KI-Engines entscheiden, was sie zitieren</h2>
          <p>KI-Engines ziehen Informationen aus zwei Quellen: Trainingsdaten (Inhalte, auf denen das Modell trainiert wurde) und Live-Web-Retrieval (Seiten, die in Echtzeit f&uuml;r eine Anfrage abgerufen werden).</p>
          <p>Das Live-Retrieval ist der Bereich, in dem GEO die unmittelbarste Wirkung hat. Wenn ChatGPT, Perplexity oder Gemini live Ergebnisse abruft, l&auml;sst es Crawler &uuml;ber Retrieval-Pipelines laufen, extrahiert zitierbare Passagen und synthetisiert diese zu einer Antwort.</p>
          <p>Damit eine Seite zitiert wird, m&uuml;ssen drei Bedingungen erf&uuml;llt sein:</p>
          <ol>
            <li>Der KI-Crawler muss Ihre Seite erreichen k&ouml;nnen &mdash; keine robots.txt-Bl&ouml;cke, keine WAF-Regeln, die GPTBot, ClaudeBot oder PerplexityBot blockieren</li>
            <li>Der Inhalt muss server-gerendert sein &mdash; KI-Crawler f&uuml;hren JavaScript in der Regel nicht aus</li>
            <li>Der Inhalt muss zuschreibbare, zitierbare Aussagen enthalten &mdash; Statistiken mit genannten Quellen, direkte Zitate, strukturierte Daten</li>
          </ol>
          <p>Wenn eine dieser Bedingungen nicht erf&uuml;llt ist, wird die Seite ausgeschlossen &mdash; unabh&auml;ngig von allen anderen Optimierungen. Die dritte Bedingung wird am h&auml;ufigsten &uuml;bersehen. Die meisten Seiten sind voll von nicht zuschreibbaren Aussagen: &bdquo;Marktf&uuml;hrer in unserem Bereich.&ldquo; &bdquo;Erstklassiger Service.&ldquo; Solche Aussagen k&ouml;nnen nicht extrahiert, verifiziert oder zugewiesen werden.</p>
          <p>Ersetzen Sie diese durch: &bdquo;Laut Balearischen Tourismusstatistiken geben deutsche Touristen im Schnitt 1.200&nbsp;&euro; pro Aufenthalt auf Mallorca aus.&ldquo; Das ist zuschreibbar. Das ist zitierbar. Das ist GEO.</p>

          <h2 id="geo-framework">Das Acht-Schritte-GEO-Framework</h2>
          <p>Das ist die Implementierungs-Checkliste, die wir bei jedem Kunden-Audit durcharbeiten &mdash; nach Priorität:</p>
          <ol>
            <li><strong>KI-Crawler-Zugang sicherstellen.</strong> &Uuml;berpr&uuml;fen Sie Ihre robots.txt auf pauschale Bl&ouml;cke. Pr&uuml;fen Sie Ihre WAF auf Regeln, die GPTBot, ClaudeBot oder PerplexityBot per User-Agent blockieren. KI-Crawler k&uuml;ndigen sich an &mdash; wer sie blockiert, ist f&uuml;r KI-Suche unsichtbar.</li>
            <li><strong>Inhalte server-seitig rendern.</strong> KI-Crawler f&uuml;hren JavaScript nicht aus. Wenn wichtige Seiten client-seitig gerendert werden, k&ouml;nnen KI-Systeme sie nicht lesen. Die L&ouml;sung: Server-Side-Rendering oder statische Generierung f&uuml;r alle inhaltlichen Seiten.</li>
            <li><strong>Zitierte Statistiken auf jede Schl&uuml;sselseite.</strong> Jede wesentliche Aussage braucht eine namentlich genannte Quelle. &bdquo;Die Forschung von Aggarwal et&nbsp;al. zeigt eine Steigerung der KI-Zitationsrate um 25,9&nbsp;% durch zitierte Statistiken.&ldquo; Benannte, zugeschriebene Statistiken sind die wirksamste GEO-Ma&szlig;nahme.</li>
            <li><strong>Direkte Expertenaussagen einf&uuml;gen.</strong> Pull-Zitate von namentlich genannten Personen &mdash; Teammitglieder, Branchenexperten, Kunden mit Einwilligung. &bdquo;Claire Enders, Performance-Strategin bei pmax: &sbquo;Die meisten Websites sind f&uuml;r KI-Engines nicht wegen schlechter Inhalte unsichtbar, sondern wegen der Art, wie diese Inhalte strukturiert sind.&lsquo;&ldquo; Das ist zitierbar. Eine Seite voller &bdquo;wir glauben&ldquo; ist es nicht.</li>
            <li><strong>Inhalte mit extrahierbaren Listen und Tabellen strukturieren.</strong> KI-Modelle bevorzugen strukturierten Inhalt &mdash; nummerierte Listen, Vergleichstabellen, Schritt-f&uuml;r-Schritt-Prozesse. Reine Fliestext-Seiten sind schwerer zu synthetisieren.</li>
            <li><strong>FAQPage-JSON-LD-Schema implementieren.</strong> FAQPage-Strukturdaten werden bereits von Google f&uuml;r Featured Snippets verwendet. KI-Engines nutzen dieselben Signale. Jede Seite mit einem FAQ-Abschnitt sollte dieses Schema tragen.</li>
            <li><strong>Eine llms.txt-Datei erstellen.</strong> Ein aufkommender Standard &mdash; &auml;hnlich wie robots.txt &mdash; der KI-Crawlern Hinweise zu Ihren Inhalten, Schl&uuml;sselseiten und bevorzugten Zusammenfassungen gibt. Liegt im Root-Verzeichnis Ihrer Domain. Die Adoption w&auml;chst schnell; sie jetzt zu erstellen kostet fast nichts. Details in unserem <a href="/de/blog/what-is-a-geo-audit/">GEO-Audit-Leitfaden</a>.</li>
            <li><strong>KI-Sichtbarkeit messen.</strong> Tracken Sie, welche Engines Sie zitieren, mit welcher Rate, auf welche Prompts hin und wie sich das Sentiment entwickelt. Ohne Messung operieren Sie blind. Wir nutzen <a href="https://crunchjunkie.io/" target="_blank" rel="noopener">CrunchJunkie</a>, um pmax.online &uuml;ber 10 KI-Engines und 35 konfigurierte Prompts zu tracken. Mehr dazu unter <a href="/de/services/ai-visibility">KI-Sichtbarkeit &amp; AI Visibility</a>.</li>
          </ol>

          <h2 id="how-to-measure">GEO-Fortschritte messen</h2>
          <p>Die wichtigsten Kennzahlen f&uuml;r GEO:</p>
          <ul>
            <li><strong>Zitationsrate:</strong> Prozentsatz der KI-Antworten, in denen Ihre Marke oder Ihr Inhalt zitiert wird</li>
            <li><strong>Share of Voice:</strong> wie oft Sie im Vergleich zu namentlich genannten Wettbewerbern zitiert werden</li>
            <li><strong>Durchschnittliche Position:</strong> wo Sie in Antworten erscheinen, die Sie zitieren</li>
            <li><strong>Sentiment:</strong> wie KI-Engines Sie beschreiben &mdash; positiv, neutral oder eingeschr&auml;nkt</li>
          </ul>
          <p>Messung erfordert das wiederholte Ausf&uuml;hren gleicher Prompts &uuml;ber mehrere KI-Engines hinweg. Ein einzelner Lauf ist statistisch nicht aussagekr&auml;ftig. Wir benchmarken auf 35&nbsp;Prompts &uuml;ber 10&nbsp;Engines, mit automatisierten w&ouml;chentlichen Scans via <a href="https://crunchjunkie.io/" target="_blank" rel="noopener">CrunchJunkie</a>.</p>
          <p>Ein Hinweis: Die meisten KI-Sichtbarkeits-Tools rechnen nach Prompt-Kontingent ab, was einen Anreiz schafft, weniger Anfragen zu tracken als sinnvoll w&auml;re. Das haben wir in unserem <a href="/de/blog/ai-visibility-tracking-tools-2026/">KI-Sichtbarkeits-Tools-Leitfaden</a> ausf&uuml;hrlich behandelt.</p>

          <h2 id="what-pmax-does">Was wir bei pmax tun</h2>
          <p>Wir tracken pmax.online &uuml;ber 10 KI-Engines &mdash; ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews, Google AI Mode, Microsoft Copilot, Grok, Meta AI und DeepSeek &mdash; mit 35 konfigurierten Prompts via CrunchJunkie. Stand September 2026: GEO-Audit-Score 97/100 (Band &bdquo;AI-ready&ldquo;), zitiert in 1.107 Runs der letzten 30&nbsp;Tage.</p>
          <p>Das Framework in diesem Artikel ist das, was wir eingesetzt haben, um dorthin zu kommen. Es ist nicht propriet&auml;r. Der Unterschied zwischen Marken, die in KI-Antworten erscheinen, und solchen, die es nicht tun, ist fast immer technischer und struktureller Natur.</p>
          <h2>Haben Sie Fragen dazu?</h2>
          <p>Falls das auf Ihr Unternehmen zutrifft, <a href="/de/contact/?topic=what-is-generative-engine-optimisation">schildern Sie uns kurz Ihre Situation</a> &mdash; wir melden uns innerhalb eines Werktages. Das erste Gespr&auml;ch: 30 Minuten, auf unsere Rechnung.</p>
        </>
      ),
    },
'performance-marketing-agency-vs-in-house': {
  title: 'Performance-Marketing-Agentur oder In-House-Team: Unsere ehrliche Einschätzung',
  deck: 'Die meisten Agenturen empfehlen sich selbst. Wir nicht immer. Eine ehrliche Analyse der echten Kosten, des Break-even-Punkts — und wann der Aufbau eines eigenen Teams die richtige Entscheidung ist.',
  toc: [
    'Die Frage, die niemand ehrlich stellt',
    'Die echten Kosten von In-House',
    'Die echten Kosten einer Agentur',
    'Wie man fair vergleicht',
    'Wann In-House die richtige Wahl ist',
    'Unsere ehrliche Empfehlung',
  ],
  faqs: [
    {
      q: 'Wann sollte ein Unternehmen eine Performance-Marketing-Agentur beauftragen?',
      a: 'Eine Agentur ist in der Regel günstiger als eine Inhouse-Stelle, wenn das monatliche Werbebudget unter 20.000 € liegt. Darunter übersteigen die Gesamtkosten einer Inhouse-Stelle — Gehalt, Tools, Recruiting, Einarbeitung und Nebenkosten — fast immer die Agenturkosten. Agenturen sind außerdem sinnvoll, wenn mehrere Kanäle gleichzeitig bespielt werden müssen oder schnelle Ergebnisse gefragt sind.',
    },
    {
      q: 'Was kostet eine Performance-Marketing-Agentur in Europa?',
      a: 'Monatliche Retainer für KMUs liegen in Europa typischerweise bei 2.000–6.000 € — das sind reine Managementgebühren. Das Werbebudget wird direkt an die Plattformen (Google, Meta, TikTok, LinkedIn) überwiesen und ist davon getrennt. pmax berechnet monatliche Pauschalen, keine prozentualen Mediagebühren.',
    },
    {
      q: 'Was ist der Break-even-Punkt zwischen Agentur und Inhouse?',
      a: 'Der Break-even liegt in der Regel bei etwa 20.000 € Werbebudget pro Monat. Darunter gewinnt die Agentur auf Kostenbasis fast immer, wenn man Gehalt (45.000–75.000 €/Jahr), Arbeitgebernebenkosten (ca. 30 %), Tools (8.000–15.000 €/Jahr) und Recruitingkosten (1–2× Jahresgehalt) zusammenrechnet. Ab 50.000 €/Monat verschiebt sich die Rechnung, und ein Hybridmodell — Agentur plus eine starke Inhouse-Führungskraft — übertrifft oft beide Optionen allein.',
    },
    {
      q: 'Was macht eine Performance-Marketing-Agentur konkret?',
      a: 'Sie plant, baut und betreibt bezahlte Werbekampagnen auf digitalen Kanälen — typischerweise Google Ads, Meta, TikTok, LinkedIn, Pinterest und Microsoft Ads. Die tägliche Arbeit umfasst Kampagnenstruktur, Keyword-Recherche, Zielgruppenauswahl, Creative-Briefings, Gebotsmanagement, Landingpage-Analyse, Conversion-Tracking und regelmäßiges Reporting. Gute Agenturen arbeiten auch an der Conversion-Infrastruktur — Website-Performance, Tracking-Setup, Formular-Design — weil dort oft der größte Hebel liegt.',
    },
    {
      q: 'Kann sich ein kleines Unternehmen eine Agentur leisten?',
      a: 'In den meisten Fällen ja. Für Unternehmen mit 1.500–20.000 €/Monat Werbebudget ist ein Agentur-Retainer von 2.000–4.000 €/Monat meist günstiger als eine Vollzeitstelle. Ausnahme: sehr kleine Budgets unter 1.000 €/Monat erzeugen oft zu wenig Daten für sinnvolle Optimierung. In diesem Stadium ist ein einmaliges Setup-Projekt mit einem Freelancer meist der richtige Einstieg.',
    },
  ],
  prose: (
    <>
      <p>Die meisten Agenturen empfehlen eine Agentur. Nat&uuml;rlich tun sie das &mdash; wir auch. Aber wir sind nicht immer dieser Meinung. Und wir sagen Ihnen das lieber sofort, als einen Kunden zu gewinnen, dem wir nicht wirklich helfen k&ouml;nnen.</p>
      <p>Hier ist unsere ehrliche Einsch&auml;tzung.</p>

      <h2 id="honest-question">Die Frage, die niemand ehrlich stellt</h2>
      <p>Wenn ein Unternehmer fragt &bdquo;Sollen wir eine Agentur beauftragen oder ein In-House-Team aufbauen?&ldquo;, bekommt er meist eine von zwei Antworten. Die Agentur sagt: beauftragen Sie uns. Die Personalberatung sagt: stellen Sie ein Team zusammen. Keiner hat einen finanziellen Anreiz zur Wahrheit.</p>
      <p>Die richtige Antwort h&auml;ngt von Ihrem monatlichen Werbebudget, der Komplexit&auml;t Ihres Produkts und Ihrer Wachstumsphase ab. Wir haben regelm&auml;&szlig;ig Gespr&auml;che mit Unternehmern, die in beide Richtungen die falsche Entscheidung getroffen haben. Manche haben zu fr&uuml;h eine Agentur beauftragt. Andere haben intern aufgebaut und festgestellt, dass eine Person nicht sechs Disziplinen gleichzeitig auf professionellem Niveau ausf&uuml;hren kann.</p>

      <h2 id="cost-of-in-house">Die echten Kosten von In-House</h2>
      <p>Der sichtbare Kostenfaktor ist das Gehalt. Eine erfahrene Performance-Marketing-Managerin verdient in Europa 45.000&ndash;75.000 &euro; pro Jahr. Seniorspezialisten mit starker Google-Ads- oder Meta-Erfahrung tendieren zum oberen Rand. Juniorkr&auml;fte kosten weniger, ben&ouml;tigen aber deutlich mehr F&uuml;hrungsaufwand, bevor sie selbst&auml;ndig arbeiten.</p>
      <p>Die unsichtbaren Kosten sind meist gr&ouml;&szlig;er als das Gehalt.</p>
      <p><strong>Recruiting.</strong> Eine geeignete Fachkraft zu finden, zu evaluieren und einzuarbeiten dauert 8&ndash;16 Wochen. &Uuml;ber eine Personalvermittlung: 15&ndash;25&nbsp;% des Jahresgehalts als Geb&uuml;hr. Direkt gesucht: 6&ndash;10 Wochen interner Zeitaufwand. Gesamtkosten des Recruitings: rund das Ein- bis Zweifache des Jahresgehalts, inklusive Opportunit&auml;tskosten der offenen Stelle.</p>
      <p><strong>Tools.</strong> Ein vollst&auml;ndiges Performance-Marketing-Stack &mdash; Semrush, Feed-Management-Tool, Creative-Testing-Suite, Reporting-Schicht &mdash; kostet 8.000&ndash;15.000 &euro; pro Jahr. Agenturen teilen diese Lizenzen unter Kunden. Ihre Inhouse-Fachkraft ben&ouml;tigt eigene.</p>
      <p><strong>Einarbeitungszeit.</strong> Eine neue Mitarbeiterin arbeitet in den ersten 3&ndash;6 Monaten noch nicht auf vollem Effizienzniveau. Bei einem Werbebudget von 10.000 &euro;/Monat kann eine 20-prozentige Effizienzl&uuml;cke w&auml;hrend der Einarbeitung 6.000&ndash;12.000 &euro; kosten &mdash; ohne Rechnung, weshalb sie oft &uuml;bersehen wird.</p>
      <p><strong>Arbeitgebernebenkosten.</strong> Sozialversicherungsbeitr&auml;ge, betriebliche Altersvorsorge und sonstige Nebenleistungen: in Deutschland typischerweise 20&ndash;25&nbsp;%, in Spanien rund 30&ndash;35&nbsp;% auf das Bruttogehalt.</p>
      <p><strong>Fachliche Breite.</strong> Eine Inhouse-Fachkraft ist in einer bis zwei Disziplinen stark. Die wenigsten decken Google Ads, Meta, SEO, Analytics und Conversion Design auf professionellem Niveau gleichzeitig ab. Sie zahlen ein volles Gehalt und erhalten eine Spezialisierung.</p>

      <h2 id="cost-of-agency">Die echten Kosten einer Agentur</h2>
      <p>Die Kosten einer Agentur sind einfacher zu berechnen. Ein Performance-Marketing-Retainer f&uuml;r KMUs in Europa liegt bei 2.000&ndash;6.000 &euro; pro Monat an Managementgeb&uuml;hren. Das Werbebudget wird direkt an die Plattformen gezahlt und ist davon getrennt.</p>
      <p>Wir berechnen monatliche Pauschalen, keine prozentualen Mediakosten. Den Grund haben wir <a href="/de/blog/agency-pricing-honest/">in diesem Artikel</a> erkl&auml;rt. Kurzversion: Ein Prozentmodell gibt einer Agentur einen direkten Anreiz, mehr Werbung zu empfehlen, als Ihr Unternehmen braucht. Diesen Anreiz wollen wir nicht.</p>
      <p>Was eine Agentur kostet, was In-House nicht kostet: Sie sind nicht t&auml;glich die oberste Priorit&auml;t. Kommunikation findet in geplanten Calls statt. Eine externe Agentur wird Ihr Produkt nie so tief verstehen wie jemand, der t&auml;glich darin arbeitet.</p>
      <p>Was eine Agentur spart: keine Recruitingkosten, keine Toolkosten, keine lange Einarbeitung, keine Arbeitgebernebenkosten &mdash; und Zugang zu einem Team mit Erfahrung aus mehreren Branchen und Phasen.</p>

      <h2 id="how-to-compare">Wie man fair vergleicht</h2>
      <p>Der ehrliche Vergleich ist nicht Gehalt gegen Retainer. Es ist der Gesamtbesitz&uuml;berblick &uuml;ber alle vier realistischen Optionen.</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 12px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Kostenfaktor</th>
              <th style={{ textAlign: 'right', padding: '8px 12px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Agentur</th>
              <th style={{ textAlign: 'right', padding: '8px 12px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>In-House</th>
              <th style={{ textAlign: 'right', padding: '8px 12px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Freelancer</th>
              <th style={{ textAlign: 'right', padding: '8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Hybrid</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: 'Monatliche Kosten', agency: '2.000–6.000 €', inhouse: '3.750–6.250 € Gehalt', freelancer: '1.500–4.000 €', hybrid: '2k–4k + Gehalt' },
              { label: 'Toolkosten', agency: '0 € (inklusive)', inhouse: '670–1.250 €/Mo extra', freelancer: '0–500 €/Mo', hybrid: 'Geteilt' },
              { label: 'Recruitingkosten', agency: '0 €', inhouse: '1–2× Jahresgehalt', freelancer: 'Gering', hybrid: 'Moderat' },
              { label: 'Einarbeitungszeit', agency: '2–4 Wochen', inhouse: '3–6 Monate', freelancer: '2–6 Wochen', hybrid: '4–8 Wochen' },
              { label: 'Kanalabdeckung', agency: 'Mehrere', inhouse: '1–2 tief', freelancer: '1 Kanal', hybrid: 'Mehrere' },
              { label: 'Produktwissen', agency: 'Mittel', inhouse: 'Hoch', freelancer: 'Gering–mittel', hybrid: 'Hoch' },
              { label: 'Ideal bei', agency: '<20k €/Mo Budget', inhouse: '50k+ €/Mo Budget', freelancer: 'Einzelkanal', hybrid: '25–50k €/Mo' },
            ].map(row => (
              <tr key={row.label} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 12px 10px 0', color: '#c8c8c8' }}>{row.label}</td>
                <td style={{ padding: '10px 12px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.agency}</td>
                <td style={{ padding: '10px 12px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.inhouse}</td>
                <td style={{ padding: '10px 12px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.freelancer}</td>
                <td style={{ padding: '10px 0', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.hybrid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="when-in-house">Wann In-House die richtige Wahl ist</h2>
      <p>Wir meinen das ernst. Es gibt Situationen, in denen ein eigenes Team die bessere Entscheidung ist &mdash; und wir sagen das, wenn es zutrifft.</p>
      <p><strong>Ihr Werbebudget liegt &uuml;ber 50.000 &euro;/Monat.</strong> Bei diesem Volumen brauchen Sie wahrscheinlich ohnehin eine interne F&uuml;hrungskraft &mdash; nicht statt einer Agentur, sondern erg&auml;nzend. Die Account-Komplexit&auml;t und das interne Abstimmungsbed&uuml;rfnis rechtfertigen dann jemanden, der t&auml;glich im Unternehmen pr&auml;sent ist.</p>
      <p><strong>Ihr Produkt ist hochspezialisiert oder reguliert.</strong> Medizintechnik, industrielles B2B, hochspezialisierte Dienstleistungen. Effektive Werbung setzt Produktwissen voraus, das eine externe Agentur erst aufbauen muss. Eine Inhouse-Fachkraft, die es bereits hat, wird in dieser Hinsicht besser abschneiden.</p>
      <p><strong>Sie haben bereits eine starke interne Marketingfunktion.</strong> Wenn Sie eine erfahrene Marketingleitung mit echtem Paid-Media-Know-how haben, erg&auml;nzt eine Inhouse-Spezialistin das Team sinnvoll. Die Koordinationsreibung, die Agenturbeziehungen manchmal erschwert, entf&auml;llt, wenn alle im selben B&uuml;ro sitzen.</p>
      <p><strong>Sie planen langfristig ohnehin ein eigenes Team.</strong> Die Transitionskosten sind real &mdash; Recruiting, Einarbeitung, tempor&auml;re Effizienzl&uuml;cke. Aber ab 30.000 &euro;/Monat Werbebudget beginnt sich die Kalkulation zu verschieben. Fr&uuml;h damit anfangen gibt Ihnen Zeit, gut statt dringend einzustellen.</p>

      <h2 id="honest-recommendation">Unsere ehrliche Empfehlung</h2>
      <p>Der Break-even-Punkt zwischen In-House und Agentur liegt in der Regel bei etwa 20.000 &euro; monatlichem Werbebudget. Darunter gewinnt die Agentur auf Kostenbasis fast immer, wenn man die Vollkosten einer Inhouse-Stelle einrechnet. &Uuml;ber 50.000 &euro;/Monat &auml;ndert sich die Rechnung &mdash; ein Hybridmodell &uuml;bertrifft dann oft beide Optionen allein.</p>
      <p>Wir haben mit einem Dienstleistungsunternehmen in Calvi&agrave;, Mallorca, gearbeitet, das das auf eigene Kosten gelernt hat. Das Unternehmen gab 6.000 &pound; pro Monat f&uuml;r Google Ads aus. Es stellte eine erfahrene Marketingmanagerin ein, gab ihr sechs Monate und ein ordentliches Budget. Die Ergebnisse waren entt&auml;uschend &mdash; nicht wegen der Person, sondern weil eine Mitarbeiterin strukturell nicht Google Ads, Meta, Website, Content-Kalender und Monatsanalyse gleichzeitig professionell betreuen kann. Das ist kein Einstellungsproblem. Es ist ein Umfangsproblem.</p>
      <p>Das Unternehmen wechselte in Q1 2026 zu pmax. Innerhalb von 12 Wochen sank der Cost per qualifiziertem Lead um 38&nbsp;%. Das Budget blieb unver&auml;ndert. Was sich &auml;nderte: Kanalkonzentration, Account-Struktur und Spezialistinnen auf jedem Element &mdash; statt einer Generalistin f&uuml;r alles.</p>
      <p>Wenn Sie 3.000 &euro;/Monat f&uuml;r Werbung ausgeben und fragen, ob Sie inhouse einstellen sollen: noch nicht. Bauen Sie die Kan&auml;le zuerst mit einer Agentur auf. Lernen Sie, was f&uuml;r Ihr Unternehmen wirklich funktioniert. Wenn das Budget eine Vollzeitstelle rechtfertigt und Sie die Disziplin gut genug kennen, um Kandidatinnen richtig zu bewerten &mdash; dann stellen Sie ein. Das k&ouml;nnte 18 Monate dauern. Das ist in Ordnung.</p>

      <div className="prose-callout" style={{ marginTop: 32 }}>
        <span className="prose-callout-kicker">Das Fazit</span>
        <p>Unter 20.000 &euro;/Monat Werbebudget gewinnt die Agentur beim Gesamtkostenvergleich fast immer. &Uuml;ber 50.000 &euro;/Monat ist ein Hybridmodell meist besser. Dazwischen h&auml;ngt die Antwort von Ihrem Produkt, Ihrem Team und Ihrem Wachstumstempo ab.</p>
      </div>

      <h2>Haben Sie Fragen dazu?</h2>
      <p>Falls das auf Ihr Unternehmen zutrifft, <a href="/de/contact/?topic=performance-marketing-agency-vs-in-house">schildern Sie uns kurz Ihre Situation</a> &mdash; wir melden uns innerhalb eines Werktages. Das erste Gespr&auml;ch: 30 Minuten, auf unsere Rechnung.</p>
    </>
  ),
},
'linkedin-ads-b2b-spain': {
  title: 'LinkedIn Ads f&uuml;r B2B in Spanien: was f&uuml;r deutschsprachige Unternehmer auf Mallorca wirklich funktioniert',
  deck: 'CPL-Benchmarks nach Branche, die Targeting-Checkliste und eine Palma-Kanzlei, die den Cost-per-Lead von 184 &euro; auf 67 &euro; senkte &mdash; in 16 Wochen.',
  toc: ['LinkedIn vs. Meta f&uuml;r B2B', 'CPL-Benchmarks in Spanien', 'Die Targeting-Checkliste', 'Warum die meisten Kampagnen scheitern', 'Fallstudie Palma: von 184 &euro; auf 67 &euro;', 'Bevor Sie starten'],
  faqs: [
    {
      q: 'Was kosten LinkedIn Ads in Spanien?',
      a: 'LinkedIn-CPMs für B2B-Zielgruppen in Spanien liegen typischerweise bei 25–65 €, CPCs bei 4–12 €. Sponsored Content im Feed ist teurer als Text Ads oder Message Ads. Die Gesamtkosten hängen stark von der Zielgruppengröße ab: Engeres, intention­sstarkes Targeting kostet mehr pro Impression — aber weniger pro qualifiziertem Lead.',
    },
    {
      q: 'Welchen CPL kann ich mit LinkedIn Ads für professionelle Dienstleistungen in Spanien erwarten?',
      a: 'Für professionelle Dienstleister in Spanien — Kanzleien, Unternehmensberatungen, Steuerberater — schätzt pmax einen realistischen LinkedIn-CPL von 45–120 €, sobald Kampagnen strukturiert aufgebaut sind. Unkonfigurierte Erstkampagnen landen häufig bei 150–250 €. Der Unterschied liegt fast immer an Targeting-Disziplin und Anzeigenformat, nicht am Budget.',
    },
    {
      q: 'Lohnen sich LinkedIn Ads für kleine B2B-Unternehmen auf Mallorca?',
      a: 'Das hängt vom durchschnittlichen Auftragswert ab. Wenn ein neuer Kunde 5.000 € oder mehr wert ist, ist LinkedIn-CPL fast immer gerechtfertigt. Darunter funktioniert Google Search oft besser — insbesondere für Suchanfragen mit klarer Kaufabsicht wie "Steuerberater Mallorca" oder "Anwalt Palma deutsch".',
    },
    {
      q: 'Was ist das Mindestbudget für LinkedIn Ads in Spanien?',
      a: 'LinkedIn-Minimum ist 10 €/Tag pro Kampagne — zu wenig für verwertbare Daten. Realistisches Mindestbudget für eine Einzelkampagne in Spanien: 2.500 €/Monat Mediabudget. Darunter befinden Sie sich dauerhaft in der Lernphase, ohne genug Signal für Optimierungen.',
    },
  ],
  prose: (
    <>
      <p>LinkedIn ist die teuerste B2B-Werbeplattform nach CPM. Und gleichzeitig &mdash; f&uuml;r das richtige Briefing &mdash; der g&uuml;nstigste Ort, einen qualifizierten Unternehmenseink&auml;ufer zu finden. Der Unterschied zwischen diesen beiden Aussagen hei&szlig;t Targeting-Disziplin und Anzeigenformat &mdash; nicht Budget.</p>
      <p>Dieser Leitfaden richtet sich an deutschsprachige Unternehmer und Gesch&auml;ftsf&uuml;hrer, die auf Mallorca oder in Spanien B2B-Kunden gewinnen wollen: Kanzleien, Beratungen, Immobiliendienstleister, SaaS-Anbieter mit Pr&auml;senz auf der Insel. Wir zeigen, was LinkedIn hier wirklich kostet, warum die meisten Kampagnen scheitern &mdash; und was eine Kanzlei in Palma in 16 Wochen aus einem unterperformenden Account gemacht hat.</p>

      <h2 id="linkedin-vs-meta">LinkedIn vs. Meta f&uuml;r B2B</h2>
      <p>Der entscheidende Unterschied ist nicht Format oder Placement. Es ist die Zielgruppenintention.</p>
      <p>Auf LinkedIn ist der Nutzer im professionellen Modus. Er liest Branchennews, folgt Fachkollegen, pflegt sein Karriereprofil. Eine Anzeige f&uuml;r eine Unternehmensberatung oder Steuerkanzlei landet in einem Kontext, der Sinn ergibt. Auf Meta scrollt dieselbe Person durch Urlaubsfotos und Reels. Dieselbe Anzeige ist eine Unterbrechung.</p>
      <p>Konkreter: LinkedIn-Targeting basiert auf selbst deklarierten Profildaten &mdash; Berufsbezeichnung, Unternehmensgr&ouml;&szlig;e, Branche, Seniorit&auml;t. Wenn Sie &bdquo;Gesch&auml;ftsf&uuml;hrer + Rechtsdienstleistungen + Spanien&ldquo; targetieren, erreichen Sie genau diese Personen. Auf Meta w&uuml;rden Sie Personen erreichen, deren Interessensignale auf dieses Profil schlie&szlig;en lassen &mdash; ein anderes Datenfundament mit anderer Konversionsrate.</p>
      <p>LinkedIn Lead-Gen-Formulare verst&auml;rken diesen Vorteil: Sie werden aus dem Profil vorausgef&uuml;llt, erfordern keinen Redirect auf eine Landing Page und konvertieren 3&ndash;4&times; h&auml;ufiger als &auml;quivalente B2B-Landing-Page-Formulare. Der Trade-off ist der CPM: LinkedIn-CPMs in Spanien liegen bei 25&ndash;65 &euro;, Meta bei 8&ndash;15 &euro; f&uuml;r eine vergleichbare B2B-Zielgruppe. Aber CPM ist nicht die Kennzahl, die z&auml;hlt &mdash; CPL ist es.</p>

      <h2 id="cpl-spain">CPL-Benchmarks in Spanien</h2>
      <p>Die folgenden Spannen basieren auf pmax-Sch&auml;tzungen aus Kampagnen in Spanien 2024&ndash;2026. Sie setzen strukturiert aufgebaute Kampagnen voraus: richtiges Ziel, Zielgruppe unter 500.000 Mitglieder, relevantes Creative, Mindest-Mediabudget 2.500 &euro;/Monat. Unkonfigurierte Erstkampagnen liegen regelm&auml;&szlig;ig doppelt so hoch.</p>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Branche (Spanien)</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>LinkedIn CPL</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Google Search CPL</th>
              <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Meta CPL</th>
            </tr>
          </thead>
          <tbody>
            {[
              { sector: 'Beratung / Kanzlei', li: '45–120 €', gs: '35–95 €', meta: '25–65 €' },
              { sector: 'SaaS / B2B-Software', li: '80–200 €', gs: '60–150 €', meta: '40–90 €' },
              { sector: 'Gewerbeimmobilien', li: '60–150 €', gs: '45–120 €', meta: '30–75 €' },
              { sector: 'Finanzberatung', li: '70–170 €', gs: '55–130 €', meta: '35–85 €' },
            ].map(row => (
              <tr key={row.sector} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.sector}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.li}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.gs}</td>
                <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.meta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>Die Tabelle macht LinkedIn nicht automatisch zur richtigen Wahl. Google Search liefert in Branchen mit klaren, kaufintentionsstarken Suchanfragen &mdash; &bdquo;Steuerberater Mallorca deutsch&ldquo; oder &bdquo;Gewerbefl&auml;che Palma kaufen&ldquo; &mdash; oft bessere CPLs. F&uuml;r Unternehmen mit etablierter Suchnachfrage sollte <a href="/de/google-ads-agentur-spanien/">Google Ads in Spanien</a> parallel zu LinkedIn laufen, nicht stattdessen.</p>
      <p>F&uuml;r deutschsprachige B2B-Anbieter auf Mallorca gilt ein besonderer Vorteil: LinkedIn erlaubt Sprach-Targeting nach Profilsprache. Wer nur deutschsprachige Entscheider auf der Insel und in Spanien erreichen will, kann diese Zielgruppe sauber isolieren &mdash; ohne die breitere spanischsprachige Masse zu bezahlen.</p>

      <h2 id="targeting-checklist">Die LinkedIn-Targeting-Checkliste</h2>
      <p>Diese Checkliste arbeiten wir bei jedem neuen LinkedIn-B2B-Account in Spanien durch. Nicht &bdquo;die richtigen Leute targetieren&ldquo; &mdash; sondern welche Einstellungen in welcher Reihenfolge ge&auml;ndert werden m&uuml;ssen.</p>
      <ul>
        <li><strong>Berufsbezeichnung:</strong> Spezifisch bleiben. &bdquo;Gesch&auml;ftsf&uuml;hrer&ldquo; und &bdquo;Gesch&auml;ftsf&uuml;hrender Gesellschafter&ldquo; sind verschiedene Personen mit verschiedenen Mandaten. Nicht in einem Ad-Set zusammenfassen. Mit drei bis f&uuml;nf pr&auml;zisen Titeln beginnen, bevor breite Jobfunktionen hinzugef&uuml;gt werden.</li>
        <li><strong>Unternehmensgr&ouml;&szlig;e:</strong> Passend zur ICP. Wer den Mittelstand bedient (50&ndash;500 Mitarbeiter), sollte genau diesen Bereich setzen. Enterprise-Targeting ver&auml;ndert Botschaft und Format vollst&auml;ndig.</li>
        <li><strong>Branche:</strong> LinkedIns eigene Taxonomie verwenden, nicht Meta-Interessenskategorien als Proxy. &bdquo;Rechtsdienstleistungen&ldquo; auf LinkedIn ist eine selbst deklarierte Branche &mdash; kein Inferenzmodell.</li>
        <li><strong>Geografie:</strong> F&uuml;r Mallorca-fokussierte Kampagnen: &bdquo;Spanien&ldquo; auf L&auml;nderebene setzen, separat testen mit Filterung auf Balearen. Mallorca allein hat unter 50.000 Senior Professionals &mdash; f&uuml;r ausreichend Volumen braucht es Spanien-weites Targeting.</li>
        <li><strong>Seniorit&auml;t:</strong> Direktor-Ebene und dar&uuml;ber f&uuml;r Kaufentscheidungen. Manager-Ebene f&uuml;r Beeinflusser. Getrennte Kampagnen &mdash; Creative und CTA unterscheiden sich erheblich.</li>
        <li><strong>Sprache:</strong> Profilsprache auf Deutsch setzen, um deutschsprachige Entscheider in Spanien isoliert zu erreichen. Besonders wirkungsvoll f&uuml;r Anbieter, die deutsche Mandanten auf Mallorca oder in Madrid suchen.</li>
        <li><strong>Ausschl&uuml;sse:</strong> Kundenliste als Suppression-Audience hochladen. Studenten ausschlie&szlig;en. Berufseinsteiger ausschlie&szlig;en. Jede unqualifizierte Impression kostet denselben CPM wie eine qualifizierte.</li>
        <li><strong>Matched-Audiences-Test:</strong> Ein Ad-Set gegen attributbasiertes Targeting, ein paralleles gegen eine Matched Audience (Website-Besucher oder CRM-Upload). Das Gewinnersignal bestimmt alle k&uuml;nftigen Skalierungsentscheidungen.</li>
      </ul>

      <h2 id="why-campaigns-fail">Warum die meisten Kampagnen scheitern</h2>
      <p>Vier strukturelle Fehler erkl&auml;ren den Gro&szlig;teil der unterperformenden LinkedIn-B2B-Kampagnen, die wir &uuml;bernehmen.</p>
      <p><strong>Falsches Kampagnenziel.</strong> LinkedIns Algorithmus optimiert auf das Signal, das Sie ihm geben. &bdquo;Website-Besuche&ldquo; trainiert ihn, Klicker zu finden. &bdquo;Lead-Generierung&ldquo; trainiert ihn, Formular-Einreicher zu finden. Die meisten &uuml;bernommenen Kampagnen laufen auf Traffic-Ziel &mdash; und fragen sich, warum der CPL hoch ist. Die Korrektur dauert drei Klicks.</p>
      <p><strong>Zielgruppe zu breit.</strong> Spanien hat rund 17 Millionen LinkedIn-Mitglieder. Eine Zielgruppe &bdquo;alle Professionals in Spanien&ldquo; gibt das Budget effizient aus &mdash; aber nach LinkedIns Signal, nicht nach Ihrem. Zielgruppen &uuml;ber einer Million Mitglieder unterperformen f&uuml;r B2B-CPL fast immer. Unter 50.000 wird Frequenz zum Problem. 80.000&ndash;400.000 Mitglieder ist der beste Rahmen f&uuml;r Spanien-B2B.</p>
      <p><strong>Kein Conversions-API-Anschluss.</strong> Pixelbasierte Attribution allein verf&auml;lscht 30&ndash;40 % der Conversions in Consent-intensiven Umgebungen. Ohne API-Verbindung optimieren Sie auf unvollst&auml;ndige Daten &mdash; und zahlen daf&uuml;r mit schlechteren Ergebnissen.</p>
      <p><strong>Budget unter der Lernschwelle.</strong> LinkedIn empfiehlt mindestens 50 &euro;/Tag pro Kampagne, um die Lernphase mit verwertbaren Daten zu verlassen. Darunter stabilisiert sich der Algorithmus nie. Viele Kampagnen in Spanien laufen bei 15&ndash;25 &euro;/Tag und stagnieren monatelang.</p>

      <h2 id="palma-case">Fallstudie Palma: von 184 &euro; auf 67 &euro; CPL</h2>
      <p>Eine internationale Kanzlei mit B&uuml;ro in Palma und Mandanten in ganz Europa kam im Q4 2025 zu uns. Die LinkedIn-Kampagne lief seit sieben Monaten. CPL: 184 &euro;, unver&auml;ndert seit dem Start. Der Account-Manager der Vorg&auml;ngeragentur bezeichnete die Kampagne als &bdquo;in der Optimierung&ldquo;.</p>
      <p>Die Probleme waren strukturell. Kampagnenziel: Website-Besuche. Zielgruppe: &bdquo;Juristen in Spanien&ldquo; &mdash; 2,3 Millionen Mitglieder. Ein einziges Sponsored-Content-Asset lief unver&auml;ndert &uuml;ber die gesamte Zielgruppe. Kein Lead-Gen-Formular, kein Retargeting, kein Conversions-API-Anschluss. Der Pixel feuerte beim Seitenaufruf, nicht bei qualifizierten Aktionen.</p>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Kennzahl</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Vorher</th>
              <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Nachher (16 Wochen)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { metric: 'Cost per Lead (CPL)', before: '184 €', after: '67 €' },
              { metric: 'Kampagnenziel', before: 'Website-Besuche', after: 'Lead-Generierung' },
              { metric: 'Zielgruppengröße', before: '2,3 Mio.', after: '190.000' },
              { metric: 'Qualifizierte Leads/Monat', before: '6', after: '21' },
              { metric: 'Monatliches Ad-Budget', before: '2.200 €', after: '2.800 €' },
            ].map(row => (
              <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.before}</td>
                <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0', fontWeight: 700 }}>{row.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>Die strukturellen &Auml;nderungen: Ziel auf Lead-Generierung umgestellt mit LinkedIns nativem Lead-Gen-Formular; Zielgruppe auf Gesch&auml;ftsf&uuml;hrer, Partner und C-Suite in Kanzleien, Unternehmensberatungen und Finanzberatungen in Spanien mit 10&ndash;500 Mitarbeitern verengt (190.000 Mitglieder); Creative auf drei Varianten aufgeteilt, die verschiedene Glaubw&uuml;rdigkeitssignale testen; Conversions API mit dem CRM verbunden, sodass gebuchte Erstgespr&auml;che &mdash; nicht Seitenaufrufe &mdash; als Conversion-Events zur&uuml;ckflie&szlig;en.</p>
      <p>Das Budget stieg leicht von 2.200 &euro; auf 2.800 &euro; pro Monat. Qualifizierte Leads stiegen von 6 auf 21 monatlich. Der CPL sank in 16 Wochen von 184 &euro; auf 67 &euro;. Die Definition von &bdquo;qualifiziert&ldquo; blieb konstant: ein gebuchtes Erstgespr&auml;ch mit einem Interessenten, der dem ICP der Kanzlei entspricht &mdash; keine rohe Formulareinreichung.</p>

      <h2 id="before-you-start">Bevor Sie starten</h2>
      <p>Drei Dinge sollten vor dem Start von LinkedIn Ads f&uuml;r B2B in Spanien klar sein.</p>
      <p><strong>Ein definiertes ICP mit LinkedIn-f&auml;higen Attributen.</strong> &bdquo;Senior-Entscheider in professionellen Dienstleistungen&ldquo; ist keine Targeting-Grundlage. &bdquo;Gesch&auml;ftsf&uuml;hrende Gesellschafter in Kanzleien mit 20&ndash;200 Mitarbeitern in Spanien, deutschsprachiges Profil&ldquo; ist es. Sie brauchen Berufsbezeichnungsliste, Branche, Unternehmensgr&ouml;&szlig;enbereich und Geografie, bevor Sie den Campaign Manager &ouml;ffnen.</p>
      <p><strong>Mindestens 2.500 &euro;/Monat Mediabudget.</strong> Darunter zahlen Sie LinkedIns Lernphasen-Steuer, ohne genug Signal f&uuml;r Optimierungen zu generieren. Wenn das Budget niedriger ist: mit Google Search starten, LinkedIn hinzuf&uuml;gen, sobald die Auftragswerte den CPL rechtfertigen.</p>
      <p><strong>Ein Offline-Conversion-Plan.</strong> LinkedIns natives Reporting misst Formulareinreichungen. Ihr Erfolgsma&szlig;stab ist qualifizierte Pipeline und geschlossener Umsatz. Verbinden Sie die Conversions API mit Ihrem CRM vor dem Kampagnenstart &mdash; nicht drei Monate sp&auml;ter, wenn die Daten bereits l&uuml;cken.</p>

      <p>Unsere <a href="/de/services/paid-social/">Paid-Social-Leistung</a> umfasst LinkedIn Ads f&uuml;r B2B &mdash; Strategie, Kampagnenaufbau, Creative und laufende Optimierung. Wir arbeiten in den Branchen <a href="/de/industries/">professionelle Dienstleistungen und Immobilien</a> in Spanien. Ausgew&auml;hlte Ergebnisse mit echten Zahlen finden Sie in unseren <a href="/de/cases/">Referenzen</a>.</p>

      <h2>Haben Sie Fragen dazu?</h2>
      <p>Falls das auf Ihr Unternehmen zutrifft, <a href="/de/contact/?topic=linkedin-ads-b2b-spain">schildern Sie uns kurz Ihre Situation</a> &mdash; wir melden uns innerhalb eines Werktages. Das erste Gespr&auml;ch: 30 Minuten, auf unsere Rechnung.</p>
    </>
  ),
},
'google-shopping-kampagne-leitfaden': {
  title: 'Google Shopping Kampagne 2026: Der Setup-Leitfaden',
  toc: ['Standard Shopping vs. Performance Max', 'Merchant-Center-Feed-Anforderungen', 'Die 6-Schritte-Kampagnenkonfiguration', 'ROAS-Benchmarks nach Kategorie', 'Ein Mallorca-Fall: Mallorca Artesan&iacute;a', 'H&auml;ufige Fehler'],
  faqs: [
    {
      q: 'Was ist der Unterschied zwischen Google Shopping und Performance Max?',
      a: 'Standard-Shopping-Kampagnen bieten explizite Kontrolle: Sie legen Gebote pro Produkt oder Produktgruppe fest, sehen einzelne Suchbegriffsdaten und k&ouml;nnen unn&ouml;tige Anfragen ausschlie&szlig;en. Performance Max ist ein kanalübergreifender Kampagnentyp (Shopping, Display, YouTube, Gmail, Maps), der von Googles maschinellem Lernen optimiert wird. Sie geben granulare Kontrolle ab, gewinnen aber kanalübergreifende Reichweite und Googles F&auml;higkeit, neue Nachfrage zu entdecken. Standard Shopping eignet sich besser f&uuml;r neue Konten oder Produkte mit engen Margen; Performance Max &uuml;bertrifft in der Regel bei etablierten Konten mit 50+ monatlichen Conversions.',
    },
    {
      q: 'Welche ROAS kann ich mit Google Shopping in Deutschland erwarten?',
      a: 'Basierend auf pmax-internen Benchmarks aus verwalteten Konten in Deutschland, 2024&ndash;2026: Bekleidung 2,8&ndash;4,2&times;, Haus &amp; Garten 3,1&ndash;5,0&times;, Elektronik 1,8&ndash;3,2&times;, Sport 2,5&ndash;3,8&times;. Elektronik sieht niedrig aus, weil die Margen d&uuml;nn und der Wettbewerb intensiv ist. Berechnen Sie Ihre Break-even-ROAS, bevor Sie ein Ziel festlegen: bei 35&nbsp;% Bruttomarge liegt der Break-even bei 2,86&times;.',
    },
    {
      q: 'Was kostet eine Google-Shopping-Kampagne in Spanien?',
      a: 'Google Shopping funktioniert nach einem Cost-per-Click-Modell. CPCs im spanischen E-Commerce liegen typischerweise zwischen &euro;0,15&ndash;0,80 f&uuml;r allgemeinen Handel und &euro;0,40&ndash;2,50 f&uuml;r hochwertigere Kategorien. Sinnvolles Mindesttest-Budget: &euro;500&ndash;1.000 pro Monat f&uuml;r vier Wochen, um gen&uuml;gend Conversion-Daten f&uuml;r eine algorithmische Optimierung zu sammeln.',
    },
    {
      q: 'Wie lange dauert es, bis Google Shopping Ergebnisse zeigt?',
      a: 'Technisch k&ouml;nnen Shopping-Anzeigen innerhalb von Stunden nach Kampagnengenehmigung erscheinen. Sinnvolle Optimierung dauert 4&ndash;6 Wochen &mdash; Googles Smart Bidding ben&ouml;tigt etwa 50 Conversions pro 30-Tage-Zeitraum, um die Lernphase zu verlassen und effizient zu optimieren. Performance Max ben&ouml;tigt in der Regel l&auml;nger als Standard Shopping zur Stabilisierung.',
    },
    {
      q: 'Brauche ich ein Google-Merchant-Center-Konto f&uuml;r Shopping-Anzeigen?',
      a: 'Ja, unbedingt. Google Merchant Center ist der Ort, an dem Ihr Produkt-Feed liegt &mdash; die strukturierte Datendatei, die Google mitteilt, was Sie zu welchem Preis und mit welcher Verf&uuml;gbarkeit verkaufen. Ohne einen genehmigten Merchant-Center-Feed k&ouml;nnen Shopping-Anzeigen nicht ausgespielt werden. Merchant Center ist kostenlos; der Aufwand liegt in der Zeit, die ben&ouml;tigt wird, um einen qualitativ hochwertigen Feed zu genehmigen und aktuell zu halten.',
    },
  ],
  prose: (
    <>
      <p>Google Shopping ist 2026 nicht mehr das, was es 2022 war. Die Einf&uuml;hrung von Performance Max, die Abschaffung von Smart Shopping und drei Jahre maschinelles Lernen haben die Entscheidungsstruktur grundlegend ver&auml;ndert. Die zentrale Frage ist nicht mehr &ldquo;Wie richte ich Shopping-Anzeigen ein?&rdquo;, sondern &ldquo;Welcher Kampagnentyp &mdash; und warum?&rdquo;</p>
      <p>Dieser Leitfaden gilt prim&auml;r f&uuml;r E-Commerce-Unternehmen in Deutschland und Spanien, die Google Shopping professionell aufsetzen oder bestehende Kampagnen auf ein belastbares Fundament stellen wollen. Zum Thema Kosten lesen Sie auch unseren Leitfaden <a href="/de/blog/was-kostet-google-ads/">Was kostet Google Ads?</a></p>

      <h2>Standard Shopping vs. Performance Max</h2>
      <p>Standard-Shopping-Kampagnen geben Ihnen Kontrolle. Sie legen Gebote auf Produkt- oder Produktgruppenebene fest. Sie sehen die Suchbegriffe, die Ihre Anzeigen ausgel&ouml;st haben. Sie k&ouml;nnen Anfragen ausschlie&szlig;en, die Budget verschwenden, und Anzeigengruppen-Strukturen aufbauen, die Ihrer Kataloglogik entsprechen.</p>
      <p>Performance Max gibt Google die Kontrolle. Es schaltet Shopping-Anzeigen, aber auch Display, YouTube, Gmail und Maps &mdash; alles aus einer Kampagne, optimiert durch maschinelles Lernen auf Ihre angegebene Conversion. Sie k&ouml;nnen keine einzelnen Suchbegriffsdaten einsehen. Sie k&ouml;nnen keine produktspezifischen Gebote setzen.</p>
      <p><strong>Standard Shopping zuerst, wenn:</strong> Ihr Konto weniger als 50 Conversions pro Monat generiert; Ihre Margen stark nach Produkt variieren und Sie granulare Gebotssteuerung zur Rentabilit&auml;t brauchen; oder Ihr Feed noch Qualit&auml;tsprobleme hat &mdash; PMax verst&auml;rkt Feed-Signale, gute wie schlechte.</p>
      <p><strong>Performance Max testen, wenn:</strong> Ihr Konto konstant 50+ monatliche Conversions mit echten Umsatzwerten generiert; Sie einen breiten Katalog haben, bei dem produktgruppenbasiertes Bieten in Standard Shopping operativ nicht mehr skalierbar ist; oder Sie in neue M&auml;rkte expandieren, wo Sie noch nicht wissen, welche Suchanfragen konvertieren.</p>

      <h2>Merchant-Center-Feed-Anforderungen</h2>
      <p>Der Feed ist das Creative im Shopping. Ein gut strukturierter Feed in einer mittelm&auml;&szlig;igen Kampagne &uuml;bertrifft eine brillante Kampagnenstruktur mit schlechtem Feed. Alle Pflichtfelder m&uuml;ssen vor dem Kampagnenstart vorhanden und korrekt sein:</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Feld</th>
              <th style={{ textAlign: 'left', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Anforderung</th>
            </tr>
          </thead>
          <tbody>
            {[
              { field: 'id', req: 'Eindeutig pro Produkt, max. 50 Zeichen, nach L\u00f6schung nie wiederverwenden' },
              { field: 'title', req: 'Marke, Hauptattribute (Farbe, Gr\u00f6\u00dfe, Material) einschlie\u00dfen \u2014 nicht nur Produktname' },
              { field: 'description', req: '500\u20131.000 Zeichen; sachlich, keyword-reich, keine Werbesprache' },
              { field: 'price', req: 'Muss exakt mit der Landingpage \u00fcbereinstimmen; sale_price f\u00fcr Aktionen nutzen' },
              { field: 'availability', req: 'in_stock / out_of_stock / preorder \u2014 in Echtzeit aktualisieren' },
              { field: 'link', req: 'Direkte Produkt-URL, nicht Startseite; muss in unter 3 Sekunden laden' },
              { field: 'image_link', req: 'Mindestens 800\u00d7800 px; wei\u00dfer oder neutraler Hintergrund; Produkt f\u00fcllt 75\u202f% des Bildbereichs' },
              { field: 'gtin', req: 'EAN, ISBN oder UPC \u2014 f\u00fcr die meisten Kategorien Pflicht; fehlende GTIN reduziert Impression Share' },
            ].map(row => (
              <tr key={row.field} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#3cffd0', fontFamily: 'var(--font-mono)', fontSize: 12 }}>{row.field}</td>
                <td style={{ padding: '10px 0 10px 16px', color: '#c8c8c8' }}>{row.req}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Der h&auml;ufigste Feed-Fehler, der zu Merchant-Center-Sperrungen f&uuml;hrt: abweichende Preise zwischen Feed und Landingpage. Der Preis im Feed muss exakt dem entsprechen, was der Nutzer beim Aufruf sieht &mdash; einschlie&szlig;lich MwSt. Das ist der h&auml;ufigste Grund f&uuml;r Kontosperrungen und der am leichtesten vermeidbare.</p>

      <h2>Die 6-Schritte-Kampagnenkonfiguration</h2>
      <p>Die folgende Reihenfolge vermeidet die h&auml;ufigsten Launch-Fehler. Schritte 1 und 2 sind Voraussetzungen &mdash; wer sie &uuml;berspringt, startet eine Kampagne, die Budget ausgibt, bevor sie lernen kann:</p>
      <ol>
        <li><strong>Feed pr&uuml;fen und bereinigen.</strong> Alle Pflichtfelder vorhanden, Preise mit Landingpages abgeglichen, GTIN wo m&ouml;glich bef&uuml;llt. Merchant Center Diagnostics ausf&uuml;hren und alle Fehler und Warnungen vor der Kampagnenerstellung beheben.</li>
        <li><strong>Conversion-Tracking mit Transaktionswerten einrichten.</strong> Kauf-Events mit echten Umsatzwerten sind f&uuml;r die ROAS-Optimierung zwingend erforderlich. GA4 mit Google Ads verkn&uuml;pfen und das Kauf-Event mit dem <code>value</code>-Parameter importieren. Sicherstellen, dass echte Ums&auml;tze, keine festen Platzhalter, &uuml;bergeben werden.</li>
        <li><strong>Standard Shopping oder Performance Max w&auml;hlen.</strong> Die oben genannten Kriterien anwenden. F&uuml;r Konten unter 50 Conversions pro Monat: Standard Shopping zuerst. F&uuml;r etablierte Konten: beide parallel mit klarer Budget-Aufteilung und einem 6-Wochen-Bewertungszeitraum testen.</li>
        <li><strong>Standard-Shopping-Kampagnen nach Produktkategorie strukturieren.</strong> Eine Kampagne pro Hauptkategorie (Bekleidung, Elektronik, Haus &amp; Garten), mit Anzeigengruppen f&uuml;r Unterkategorien. So erhalten Sie Budget- und Gebotssteuerung auf der Ebene, die z&auml;hlt &mdash; entscheidend, wenn Margen in Ihrem Katalog stark variieren.</li>
        <li><strong>Anf&auml;ngliches ROAS-Ziel konservativ setzen.</strong> Ein zu aggressives ROAS-Ziel verhungert die Kampagne in der Lernphase. 20&ndash;30&nbsp;% unter dem eigentlichen Ziel-ROAS starten und nach vier Wochen stabiler Conversion-Daten anpassen.</li>
        <li><strong>Negative Keywords und Marken-Ausschl&uuml;sse hinzuf&uuml;gen.</strong> Bei Standard Shopping eine Liste negativer Keywords hochladen. Bei Performance Max Marken-Ausschl&uuml;sse hinzuf&uuml;gen &mdash; sonst konkurriert PMax mit Ihren eigenen Brand-Search-Kampagnen um markenspezifische Suchanfragen.</li>
      </ol>

      <h2>ROAS-Benchmarks nach Kategorie</h2>
      <p>Pmax-interne Benchmarks aus verwalteten Konten in Deutschland und Spanien, 2024&ndash;2026. Als Orientierung nutzen, nicht als Ziel &mdash; Ihre Bruttomarge, Ihren durchschnittlichen Bestellwert und Ihre Retourenquote m&uuml;ssen Sie selbst einrechnen:</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Kategorie</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>ROAS-Spanne</th>
              <th style={{ textAlign: 'left', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Hinweis</th>
            </tr>
          </thead>
          <tbody>
            {[
              { cat: 'Bekleidung', roas: '2,8–4,2×', note: 'Hohe R\u00fcckgabequote; Netto-ROAS nach Retouren optimieren' },
              { cat: 'Haus & Garten', roas: '3,1–5,0×', note: 'L\u00e4ngerer Kaufzyklus; Retargeting liefert +0,5\u20131,0\u00d7' },
              { cat: 'Elektronik', roas: '1,8–3,2×', note: 'D\u00fcnne Margen, hoher Wettbewerb; Break-even zuerst berechnen' },
              { cat: 'Sport', roas: '2,5–3,8×', note: 'Saisonale Peaks; Budget rechtzeitig vorladen' },
            ].map(row => (
              <tr key={row.cat} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.cat}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.roas}</td>
                <td style={{ padding: '10px 0 10px 16px', color: '#949494', fontSize: 12 }}>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Die Elektronik-Spanne sieht niedrig aus. Das stimmt so. Elektronik hat die d&uuml;nnsten Margen und die preissensitivsten K&auml;ufer im deutschen E-Commerce. Ein ROAS von 2,5&times; bei einem Produkt mit 12&nbsp;% Bruttomarge ist unrentabel. Break-even-ROAS zuerst berechnen: 1 geteilt durch die Bruttomarge in Dezimalform. Bei 35&nbsp;% Marge liegt der Break-even bei 2,86&times;. Erst dann ein Ziel setzen.</p>

      <h2>Ein Mallorca-Fall: Mallorca Artesan&iacute;a</h2>
      <p>Mallorca Artesan&iacute;a ist ein E-Commerce-Unternehmen mit Sitz in Palma, das handgefertigte Keramik, Textilien und Lederwaren an europ&auml;ische Kunden verkauft. Das Unternehmen kam zu uns mit Standard Shopping und einem Konto-ROAS von 2,2&times; &mdash; technisch profitabel, aber weit unter dem, was der Katalog und die Margen erm&ouml;glichen.</p>
      <p>Die Diagnose war strukturell: 38 Anzeigengruppen, die meisten davon chronisch unterfinanziert. Google sammelte aus keiner einzelnen Gruppe gen&uuml;gend Conversion-Daten, um effektiv zu optimieren. Die Kampagnen waren so fragmentiert, dass kein Lernfortschritt m&ouml;glich war.</p>
      <p>Zuerst kam ein Feed-Qualit&auml;ts-Durchlauf: 23 fehlende GTINs erg&auml;nzt, 140 Produkttitel umgeschrieben, um Schlu&szlig;sselattribute (Material, Farbe, Herkunft) einzuschlie&szlig;en, und Lifestyle-Bilder neben den Produktfotos hinzugef&uuml;gt. Erst dann die Konsolidierung auf Performance Max.</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Kennzahl</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Vorher</th>
              <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Nachher (10 Wochen)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { metric: 'Konto-ROAS', before: '2,2×', after: '4,1×' },
              { metric: 'Conversion-Rate', before: '1,9\u202f%', after: '3,4\u202f%' },
              { metric: 'Impression Share', before: '31\u202f%', after: '58\u202f%' },
              { metric: 'Umsatz (Wochendurchschnitt)', before: '€4.100', after: '€8.800' },
            ].map(row => (
              <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.before}</td>
                <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0', fontWeight: 700 }}>{row.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Der PMax-Wechsel war nicht die eigentliche Ma&szlig;nahme. Feed-Qualit&auml;ts-Durchlauf und Conversion-Signal-Bereinigung waren die Ma&szlig;nahme. Ohne beides h&auml;tte die Konsolidierung von 38 unterfinanzierten Anzeigengruppen in Performance Max eine ebenso schwache PMax-Kampagne produziert &mdash; mit weniger Hebeln zur Diagnose. Weitere F&auml;lle finden Sie in unseren <a href="/de/cases/">Referenzen</a>.</p>

      <h2>H&auml;ufige Fehler</h2>
      <p><strong>Performance Max auf einem neuen Konto schalten.</strong> PMax ohne Conversion-Historie optimiert auf nichts Sinnvolles. Budget wird in der Lernphase ausgegeben, bevor Google ein Signal hat. Standard Shopping zuerst &mdash; 50 Conversions sammeln, dann PMax evaluieren.</p>
      <p><strong>Feed-Qualit&auml;t ignorieren.</strong> Der Feed-Titel ist das wichtigste Relevanzsignal im Shopping. &ldquo;Blaues Kleid 123&rdquo; verliert gegen &ldquo;Damen Blumenkleid Maxi &mdash; Marineblau &mdash; Gr&ouml;&szlig;en 36&ndash;48&rdquo; bei jeder relevanten Suchanfrage. Titel- und Beschreibungs-Umschreibungen erzielen konsistent den h&ouml;chsten ROI aller Feed-Optimierungsma&szlig;nahmen.</p>
      <p><strong>ROAS-Ziele ohne Kenntnis des Break-even setzen.</strong> Ziel-ROAS ohne Kenntnis Ihrer Bruttomarge ist Sch&auml;tzen. Break-even zuerst berechnen (1 geteilt durch Bruttomarge), dann Ziel dar&uuml;ber setzen &mdash; mit Puffer f&uuml;r Retourenquote und Saisonali&auml;t.</p>
      <p><strong>Fehlende Marken-Ausschl&uuml;sse in Performance Max.</strong> Ohne Marken-Ausschl&uuml;sse konkurriert PMax mit Ihren eigenen Brand-Search-Kampagnen um markenbezogene Suchanfragen. Sie zahlen zweimal f&uuml;r Nachfrage, die Sie bereits besitzen. Marken-Ausschl&uuml;sse ab dem ersten Tag hinzuf&uuml;gen.</p>
      <p>Unsere <a href="/de/services/google-ads/">Google Ads &amp; Performance Max Leistung</a> umfasst Shopping-Kampagnen, Feed-Engineering und Conversion-Setup. F&uuml;r Unternehmen mit Sitz in Deutschland oder mit Kampagnen f&uuml;r den deutschen Markt: <a href="/de/google-ads-agentur-spanien/">Google Ads Agentur Spanien</a> &mdash; mit Erfahrung in beiden M&auml;rkten.</p>
      <h2>Haben Sie Fragen dazu?</h2>
      <p>Falls das auf Ihr Unternehmen zutrifft, <a href="/de/contact/?topic=google-shopping-kampagne-leitfaden">schildern Sie uns kurz Ihre Situation</a> &mdash; wir melden uns innerhalb eines Werktages. Das erste Gespr&auml;ch: 30 Minuten, auf unsere Rechnung.</p>
    </>
  ),
},
'tiktok-ads-mallorca-tourism': {
  title: 'TikTok Ads f&uuml;r Gastgewerbe und Tourismus auf Mallorca',
  toc: ['Warum TikTok Tourismus-Marketing anders macht', 'Die Formate, die Buchungen generieren', 'Was TikTok-Anzeigen auf Mallorca kosten', 'Wer TikTok-Anzeigen nicht schalten sollte', 'Ein Boot-Charter-Fall: Boat Escape Mallorca', 'So starten Sie'],
  faqs: [
    {
      q: 'Was kosten TikTok-Anzeigen f&uuml;r ein Tourismusunternehmen in Spanien?',
      a: 'In-Feed-Anzeigen f&uuml;r Gastgewerbe und Tourismus auf den Balearen kosten typischerweise &euro;4&ndash;12 CPM und &euro;0,02&ndash;0,08 CPV. Ein sinnvoller Vier-Wochen-Test erfordert rund &euro;50 pro Tag &mdash; etwa &euro;1.400 Gesamtbudget. In der Hochsaison (Juni&ndash;August) steigen die CPMs auf allen Paid-Kan&auml;len, TikTok eingeschlossen.',
    },
    {
      q: 'Welches TikTok-Anzeigenformat funktioniert am besten f&uuml;r das Gastgewerbe?',
      a: 'Spark Ads haben f&uuml;r die meisten Gastgewerbe-Betriebe den h&ouml;chsten ROI. Sie bewerben vorhandenen organischen Content, der bereits Engagement erzielt hat &mdash; die Social Signals (Likes, Kommentare, Shares) bleiben erhalten. Branded Content Ads von lokalen Creatorn erzielen typischerweise das 3&ndash;5-fache der Engagement-Rate von Marken-Account-Creative f&uuml;r Tourismus-Content.',
    },
    {
      q: 'Kann ein kleines Tourismusunternehmen auf Mallorca TikTok-Anzeigen finanzieren?',
      a: 'Ja. Das Mindest-Kampagnenbudget auf TikTok ist niedriger als bei Meta oder Google. Eine Spark-Ads-Kampagne mit &euro;50 pro Tag auf drei organischen Videos ist ein realistischer Einstieg. Voraussetzung ist Video-Content, der es wert ist, beworben zu werden &mdash; TikTok belohnt kreative Qualit&auml;t mehr als Budgetgr&ouml;&szlig;e.',
    },
    {
      q: 'Was ist das Mindestbudget f&uuml;r einen sinnvollen TikTok-Ads-Test?',
      a: '&euro;1.400&ndash;1.800 f&uuml;r einen Vier-Wochen-Test liefern einen statistisch verwertbaren Signal &uuml;ber Creative- und Zielgruppen-Performance. Unter &euro;800 ist die Stichprobe zu klein f&uuml;r belastbare Schl&uuml;sse. Ab &euro;3.000 pro Monat sollten gen&uuml;gend Conversion-Daten vorliegen, um direkt auf Buchungs-Events zu optimieren.',
    },
    {
      q: 'Funktionieren TikTok-Anzeigen f&uuml;r Saisonbetriebe?',
      a: 'Saisonbetriebe k&ouml;nnen TikTok-Anzeigen effektiv nutzen, aber Kontinuit&auml;t ist entscheidend. Wer nur in der Hochsaison (Juni&ndash;September auf Mallorca) schaltet, startet jedes Jahr bei null &mdash; TikToks Algorithmus hat kein Ged&auml;chtnis f&uuml;r vergangene Kampagnen. Die effizienteste Struktur ist eine Budget-reduzierte Awareness-Kampagne ab Februar, die Audiences aufbaut, die man in der Hochsaison retargetest.',
    },
  ],
  prose: (
    <>
      <p>3,7 Millionen deutsche Touristen kommen jedes Jahr nach Mallorca. Das sind 37&nbsp;% aller Besucher der Insel &mdash; die gr&ouml;&szlig;te Besuchergruppe, mit Abstand. Wenn Sie ein Unternehmen auf Mallorca betreiben, das Touristen bedient, ist das keine abstrakte Statistik. Es ist Ihre wichtigste Zielgruppe.</p>
      <p>TikTok ist der Kanal, &uuml;ber den Sie diese Zielgruppe am fr&uuml;hesten im Entscheidungsprozess erreichen &mdash; lange bevor jemand &ldquo;Mallorca Bootsverleih&rdquo; googelt oder ein Hotel auf Booking.com sucht. Der Grund liegt in der Art, wie TikToks Algorithmus funktioniert.</p>

      <h2>Warum TikTok f&uuml;r Tourismus-Marketing anders funktioniert</h2>
      <p>Google Search f&auml;ngt Nachfrage auf, die bereits vorhanden ist. TikTok erzeugt Nachfrage. Ein 20-Sekunden-Video einer Catamaran-Ausfahrt bei Cala Figuera pflanzt eine Reiseidee in den Kopf von jemandem, der gar nicht aktiv nach etwas gesucht hat.</p>
      <p>Das ist der Unterschied zwischen Intent und Discovery. F&uuml;r ein Tourismusunternehmen &mdash; ein Hotel, eine Strandbar, ein Restaurant, ein Charter-Unternehmen &mdash; liegt der eigentliche Hebel in der Discovery-Phase. Sie verkaufen eine Erfahrung, keine Commodity.</p>
      <p>TikToks Algorithmus lernt aus Watch Time, Replays, Shares und Saves. Wenn ein deutsches Familienmitglied in M&uuml;nchen ein 25-Sekunden-Video &uuml;ber einen Mallorca-Charter sieht und bis zum Ende schaut, ist das ein Signal. Der Algorithmus zeigt das Video als n&auml;chstes jemandem mit &auml;hnlichen Mustern. F&uuml;r visuell ansprechende, aspirationale Inhalte &mdash; also genau das, was Tourismus ist &mdash; funktioniert dieses Compounding-Signal besser als auf jeder anderen Plattform.</p>
      <p>Ein wichtiger Zielgruppen-Split: Die 18&ndash;35-J&auml;hrigen sind die gr&ouml;&szlig;te TikTok-Demografiegruppe f&uuml;r Mallorca-Content. Aber die 25&ndash;44-J&auml;hrigen generieren die meisten Buchungs-Conversions. Diese Gruppe hat verf&uuml;gbares Einkommen, k&uuml;rzere Entscheidungszyklen und bucht im Durchschnitt h&ouml;herwertige Produkte. Wenn Sie auf Ums&auml;tze optimieren, ist das Ihr prim&auml;res Segment.</p>
      <p><strong>Der Deutsche-Touristen-Vorteil.</strong> TikTok erlaubt Sprach-Targeting. Wenn Ihr Content auf Deutsch produziert ist, zeigt TikTok ihn vorrangig deutschsprachigen Nutzern. Das bedeutet: Ein Mallorca-Hotel, das deutsche Videos postet, erreicht org anisch deutsche Urlauber &mdash; ohne explizites Geo-Targeting. Die Kombination aus Sprach-Signal und Interesse-Signal ist f&uuml;r die Ansprache deutscher Touristen effektiver als auf Meta oder Google.</p>

      <h2>Die Formate, die Buchungen generieren</h2>
      <p>F&uuml;nf Formate, die f&uuml;r Mallorca-Hospitality-Unternehmen relevant sind:</p>
      <ol>
        <li><strong>Spark Ads</strong> &mdash; bewirbt vorhandenen organischen Content, der bereits Engagement erzielt hat; die Likes, Kommentare und Shares bleiben sichtbar, was die Anzeige wie echten Content aussehen l&auml;sst.</li>
        <li><strong>In-Feed Ads</strong> &mdash; native Videos im For-You-Feed; 9&ndash;60 Sekunden, nach 2 Sekunden &uuml;berspringbar; das Arbeitsformat f&uuml;r Reichweite und Awareness zum niedrigsten CPM.</li>
        <li><strong>TopView</strong> &mdash; Vollbild-&Uuml;bernahme beim App-&Ouml;ffnen; h&ouml;chste Sichtbarkeit und deutlich h&ouml;herer CPM; am sinnvollsten f&uuml;r saisonale Kampagnen-Launches.</li>
        <li><strong>Branded Content Ads</strong> &mdash; Creator-produzierter Content, der als Anzeige &uuml;ber Ihren Account ausgespielt wird; typischerweise 3&ndash;5&times; h&ouml;here Engagement-Rate als Marken-Account-Creative f&uuml;r Tourismus-Content.</li>
        <li><strong>Collection Ads</strong> &mdash; ein Video kombiniert mit swipebaren Produkt-Kacheln darunter; n&uuml;tzlich f&uuml;r Betriebe mit mehreren buchbaren Produkten (Zimmertypen, Charter-Pakete, Dinner-Erlebnisse).</li>
      </ol>
      <p>F&uuml;r die meisten Mallorca-Betriebe, die auf TikTok starten, empfehlen wir Spark Ads zuerst. Vier Wochen organischen Content aufbauen, identifizieren, was echte Watch Time verdient, dann Budget hinter die Gewinner legen.</p>

      <h2>Was TikTok-Anzeigen auf Mallorca kosten</h2>
      <p>Benchmarks f&uuml;r Hospitality- und Tourismus-Kampagnen auf den Balearen, 2025&ndash;2026:</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Format</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>CPM-Spanne</th>
              <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>CPV-Spanne</th>
            </tr>
          </thead>
          <tbody>
            {[
              { format: 'In-Feed (Awareness)', cpm: '€4–10', cpv: '€0,03–0,07' },
              { format: 'In-Feed (Conversion)', cpm: '€7–12', cpv: '€0,04–0,08' },
              { format: 'Spark Ads', cpm: '€4–9', cpv: '€0,02–0,06' },
              { format: 'TopView', cpm: '€18–35', cpv: 'entf.' },
            ].map(row => (
              <tr key={row.format} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.format}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.cpm}</td>
                <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.cpv}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Minimales sinnvolles Testbudget: &euro;50 pro Tag &uuml;ber vier Wochen &mdash; etwa &euro;1.400 Gesamtbudget, um einen statistisch verwertbaren Signal zu erhalten. Darunter ist die Stichprobe zu klein f&uuml;r belastbare Schl&uuml;sse.</p>
      <p>Zur Saisonalit&auml;t: Mallorcas Tourismus-Hochphase (Mai&ndash;September) treibt die CPMs auf allen Paid-Kan&auml;len nach oben. Wer im Februar&ndash;April startet, baut Audiences zu niedrigeren Kosten auf und kann diese in der Hochsaison retargeten. Das ist die Media-Planung, die effiziente von teuren Saisonkampagnen unterscheidet.</p>

      <h2>Wer TikTok-Anzeigen nicht schalten sollte</h2>
      <p><strong>B2B-Unternehmen.</strong> TikToks Audience-Index f&uuml;r B2B-Kaufabsicht ist gering. LinkedIn ist f&uuml;r dieses Ziel die sinnvollere Investition.</p>
      <p><strong>Stark saisonale Betriebe ohne Ganzjahresbudget.</strong> TikToks Algorithmus braucht Kontinuit&auml;t. Wer acht Wochen im Sommer schaltet und neun Monate pausiert, verliert jedes Jahr das gesamte algorithmische Lernkapital. Die Ekonomik funktioniert ohne Kontinuit&auml;t selten.</p>
      <p><strong>Betriebe ohne Video-Produktionskapazit&auml;t.</strong> TikTok ist Video-First. Statische Bildanzeigen liefern deutlich schwachere Ergebnisse. Wer keine 2&ndash;4 neuen Video-Pieces pro Monat produzieren kann, wird &mdash; unabh&auml;ngig vom Budget &mdash; keine guten Ergebnisse sehen.</p>

      <h2>Ein Boot-Charter-Fall: Boat Escape Mallorca</h2>
      <p>Boat Escape Mallorca ist ein Charter-Unternehmen mit Sitz in Palma, das eine Flotte von 12 Booten betreibt. Im Februar 2026 hatte das Unternehmen keinerlei TikTok-Pr&auml;senz &mdash; weder organisch noch bezahlt.</p>
      <p>Wir bauten eine Organic-First-Strategie auf: drei Videos pro Woche, die echte Abfahrten, echte G&auml;ste und echte K&uuml;stenlinien zeigen. Kein Stockmaterial, keine Drohnenaufnahmen leerer Boote. Ein Teil des Contents wurde bewusst auf Deutsch produziert, um den gr&ouml;&szlig;ten Incoming-Markt direkt anzusprechen.</p>
      <p>Nach f&uuml;nf Wochen organisch identifizierten wir drei Videos mit &uuml;ber 35&nbsp;% durchschnittlicher Watch Rate. Wir schalteten Spark Ads auf genau diese drei Videos. Budget: &euro;1.200 pro Monat. Die Kampagne lief von Februar bis Oktober.</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Kennzahl</th>
              <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Ergebnis</th>
            </tr>
          </thead>
          <tbody>
            {[
              { metric: 'Charter-Buchungen / Monat', result: '0 → 28' },
              { metric: 'Kosten pro Buchung (CPB)', result: '€38' },
              { metric: 'Durchschnittlicher Buchungswert', result: '€620' },
              { metric: 'TikTok-Follower (organisch)', result: '0 → 4.100' },
            ].map(row => (
              <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Ein CPB von &euro;38 bei einem durchschnittlichen Buchungswert von &euro;620 entspricht einem 16-fachen Return auf Buchungsebene &mdash; ohne Folgebuchungen oder Empfehlungen zu ber&uuml;cksichtigen. Der entscheidende Faktor war nicht das Anzeigenformat, sondern f&uuml;nf Wochen organischer Content, der zeigte, welches Creative es wert war, mit Budget unterst&uuml;tzt zu werden.</p>

      <h2>So starten Sie</h2>
      <p>Vier Schritte, in dieser Reihenfolge. Die Sequenz ist entscheidend &mdash; wer Schritt eins &uuml;berspringt, bekommt die Ergebnisse von Schritt vier nicht:</p>
      <ol>
        <li><strong>Vier Wochen organischen Content aufbauen.</strong> Drei Videos pro Woche posten. Noch kein Paid-Budget einsetzen. Den Algorithmus entscheiden lassen, was Watch Time verdient.</li>
        <li><strong>Die drei besten organischen Videos identifizieren.</strong> TikTok Business Suite nach durchschnittlicher Watch Time und Completion Rate filtern &mdash; nicht nach Likes oder Follower-Zuwachs.</li>
        <li><strong>Spark Ads auf diese drei Videos schalten.</strong> Mit &euro;50 pro Tag, aufgeteilt auf die drei Videos, starten. Drei Wochen laufen lassen, bevor &Auml;nderungen vorgenommen werden.</li>
        <li><strong>Auf Buchungen, nicht auf Traffic optimieren.</strong> TikTok Pixel installieren, Buchungs-Event konfigurieren, dem Algorithmus eine Conversion zum Optimieren geben.</li>
      </ol>
      <p>Weiterf&uuml;hrend: unsere <a href="/de/services/paid-social/">Paid Social Leistung</a> (TikTok, Meta, LinkedIn), unser <a href="/de/industries/hospitality/">Hospitality-Marketing-Playbook</a> f&uuml;r Hotels, Restaurants und Erlebnisbetriebe auf Mallorca &mdash; und unsere <a href="/de/services/creative/">Creative Production</a> f&uuml;r Betriebe ohne eigene Video-Kapazit&auml;t.</p>
      <h2>Haben Sie Fragen dazu?</h2>
      <p>Falls das auf Ihr Unternehmen zutrifft, <a href="/de/contact/?topic=tiktok-ads-mallorca-tourism">schildern Sie uns kurz Ihre Situation</a> &mdash; wir melden uns innerhalb eines Werktages. Das erste Gespr&auml;ch: 30 Minuten, auf unsere Rechnung.</p>
    </>
  ),
},
'ki-sichtbarkeit-ai-visibility': {
      title: 'KI-Sichtbarkeit: Wie Ihre Marke von KI-Engines zitiert wird',
      deck: 'Die meisten Marken wissen nicht, was ChatGPT &uuml;ber sie sagt &mdash; oder warum. Der datenbasierte Leitfaden zur KI-Sichtbarkeit: wie Zitierungen funktionieren, welche Hebel wirken und was unsere eigenen Zahlen &uuml;ber 10 Engines zeigen.',
      toc: [
        'KI-Sichtbarkeit ist kein SEO',
        'Wie KI-Engines entscheiden, wen sie zitieren',
        'pmax-Sichtbarkeit &uuml;ber 10 Engines',
        'Die sieben Hebel',
        'Was ein technisches GEO-Audit pr&uuml;ft',
        'Wie Sie Ihre eigene KI-Sichtbarkeit tracken',
      ],
      faqs: [
        {
          q: 'Was ist KI-Suchsichtbarkeit und wie wird sie gemessen?',
          a: 'KI-Suchsichtbarkeit ist der prozentuale Anteil der KI-generierten Antworten &mdash; f&uuml;r eine definierte Menge von Suchanfragen &mdash;, in denen Ihre Marke zitiert oder empfohlen wird. Gemessen wird sie, indem jeder getrackte Prompt mehrfach &uuml;ber Ziel-Engines ausgef&uuml;hrt wird, die erscheinenden Marken erfasst werden und eine Zitierungsrate mit statistischem Fehlerbereich berechnet wird. F&uuml;nfzehn bis zwanzig Runs pro Prompt sind das Minimum f&uuml;r eine aussagekr&auml;ftige Messung.',
        },
        {
          q: 'Wie kommt mein Unternehmen in ChatGPT-Empfehlungen?',
          a: 'Die forschungsgest&uuml;tzten Hebel sind: konkrete, zitierbare Inhalte mit pr&uuml;fbaren Fakten und belegten Statistiken; FAQ-Inhalte, die Suchanfragen widerspiegeln; KI-Crawler-Zugang (WAF-Regeln f&uuml;r OAI-SearchBot und PerplexityBot &uuml;berpr&uuml;fen); konsistente Entit&auml;tsdaten &uuml;ber alle Kan&auml;le; und Drittanbieter-Erw&auml;hnungen in Quellen, die KI-Engines bereits als autorit&auml;tiv einstufen. Generische Markensprache hat keine messbare Wirkung auf Zitierungsraten.',
        },
        {
          q: 'Was ist ein GEO-Audit und warum ist er wichtig?',
          a: 'Ein GEO-Audit ist eine strukturierte Diagnose, wie bereit Ihre Website ist, von KI-Suchmaschinen gecrawlt und zitiert zu werden. Er umfasst f&uuml;nf nach Evidenzst&auml;rke gewichtete Kategorien: KI-Crawler-Zugang (30/100), Content-Zug&auml;nglichkeit (30/100), strukturierte Daten (20/100), technische SEO-Hygiene (15/100) und llms.txt (5/100).',
        },
        {
          q: 'Was ist der Unterschied zwischen KI-Sichtbarkeit und klassischem SEO?',
          a: 'SEO optimiert f&uuml;r eine Rangposition in einer Linkliste. KI-Sichtbarkeit bestimmt, ob Ihre Marke in einer synthetisierten Antwort erscheint &mdash; oft eine kurze Liste empfohlener Marken oder eine einzelne genannte Option. Es gibt keine Ergebnisliste zum Scrollen. Eine Marke mit starker SEO kann in KI-Antworten vollst&auml;ndig fehlen, wenn ihr konkrete, zitierbare Inhalte und Drittanbieter-Best&auml;tigung fehlen.',
        },
        {
          q: 'Auf welche KI-Engines sollte ich mich f&uuml;r Markensichtbarkeit konzentrieren?',
          a: 'Tracken Sie alle gro&szlig;en Engines &mdash; das Zitierungsverhalten unterscheidet sich erheblich. Unsere eigenen Daten zeigen 51,4&thinsp;% Zitierungsrate auf GPT-4o Search, aber nur 11,4&thinsp;% auf Claude &mdash; dieselbe Marke, dieselben Prompts, sehr unterschiedliche Ergebnisse. Nur eine Engine zu tracken bedeutet, einen Bruchteil eines zunehmend fragmentierten Marktes zu messen.',
        },
      ],
      prose: (
        <>
          <p>Die meisten Marken, die wir auditieren, wissen nicht, was ChatGPT &uuml;ber sie sagt. Manche haben es noch nie gefragt. Andere haben es einmal probiert, eine vage Antwort erhalten und das Thema fallen lassen. Kaum eine Marke trackt es systematisch &mdash; &uuml;ber mehrere Engines, verschiedene Fragetypen und einen l&auml;ngeren Zeitraum.</p>
          <p>Diese L&uuml;cke hat Folgen. KI-Suche ist kein Nischenkanal mehr. Google AI Mode ist heute die prim&auml;re Oberfl&auml;che f&uuml;r kommerzielle Suchanfragen in weiten Teilen Europas. ChatGPT ist f&uuml;r viele unter 45 der erste Anlaufpunkt bei Produkt- und Dienstleistungsrecherchen. Wer in diesen Antworten unsichtbar ist, verliert potenzielle Kunden, bevor sie &uuml;berhaupt Ihre Website erreichen.</p>
          <p>Dieser Beitrag erkl&auml;rt, wie KI-Engines entscheiden, wen sie zitieren, was die Forschung &uuml;ber wirksame Hebel sagt &mdash; und wie unsere eigene Sichtbarkeit &uuml;ber 10 Engines aussieht. Claire Enders, die bei pmax die <a href="/de/services/ai-visibility/">KI-Sichtbarkeits-Leistung</a> leitet und am <a href="https://crunchjunkie.io/" target="_blank" rel="noopener">CrunchJunkie</a>-Produkt mitarbeitet, hat diesen Beitrag aus Live-Tracking-Daten geschrieben.</p>

          <h2 id="ai-visibility-vs-seo">KI-Sichtbarkeit ist kein SEO</h2>
          <p>Der Reflex ist, KI-Suchsichtbarkeit als SEO in neuem Format zu behandeln. Beide haben gemeinsame Grundlagen &mdash; Crawlbarkeit, strukturierte Daten, Inhaltsqualit&auml;t &mdash; aber der Mechanismus unterscheidet sich genug, dass identische Ma&szlig;nahmen sehr unterschiedliche Ergebnisse liefern.</p>
          <p>Google Search rankt Seiten. Es bewertet Signale und gibt eine gerankte Linkliste zur&uuml;ck. Ihre Aufgabe bei SEO: h&ouml;her ranken als Ihre Wettbewerber. Der Nutzer w&auml;hlt aus der Liste.</p>
          <p>KI-Engines synthetisieren Antworten. Sie ziehen aus Quellen, die sie als glaubw&uuml;rdig und belegt einsch&auml;tzen, formulieren eine Antwort in eigenen Worten und geben eine Empfehlung &mdash; oft eine kurze Liste, manchmal eine einzelne Marke. Es gibt keine Ergebnisliste. Sie sind entweder in der Antwort oder nicht. Wenn nicht, sieht der Nutzer keinen Link zu Ihnen.</p>
          <p>Eine Marke mit hoher Domain-Authority und jahrelanger SEO-Investition kann in ihrer Kategorie aus KI-Antworten vollst&auml;ndig fehlen. Das beobachten wir regelm&auml;&szlig;ig. Ein kleinerer Wettbewerber mit klaren, spezifischen, konsistent belegten Inhalten taucht dagegen in jeder Antwort auf. Der Unterschied liegt nicht in der SEO-Performance. Er liegt in der Klarheit des Markenprofils und der Zitierungsbereitschaft der Inhalte.</p>
          <p>SEO bleibt relevant &mdash; es schafft die technische Grundlage, die KI-Crawler ben&ouml;tigen. Aber es ist notwendig, nicht hinreichend.</p>

          <h2 id="how-ai-decides">Wie KI-Engines entscheiden, wen sie zitieren</h2>
          <p>Die aufschlussreichste Forschung dazu ist Aggarwal et al. (KDD 2024), die gemessen hat, welche Inhaltseigenschaften die Zitierungsrate in KI-generierten Antworten tats&auml;chlich verbessern. Zwei Befunde stechen heraus.</p>
          <p>Direkte Zitate im Content verbesserten die Zitierungsrate um 27,8&thinsp;%. Belegte Statistiken &mdash; konkrete, pr&uuml;fbare Zahlen im Flie&szlig;text &mdash; verbesserten sie um 25,9&thinsp;%. Autorit&auml;tive externe Quellenangaben: +24,9&thinsp;%. Generische Markensprache zeigte keine messbare Wirkung.</p>
          <p>Das Muster ist eindeutig. KI-Engines bevorzugen Content, der wie ein Beleg funktioniert. Nicht Marketing-Texte &mdash; referenzierte Aussagen, konkrete Zahlen, pr&uuml;fbare Fakten. &bdquo;pmax verwaltet &uuml;ber 2&thinsp;Mio.&thinsp;&euro; j&auml;hrliches Paid-Media-Budget in Google Ads und Meta&ldquo; ist zitierbar. &bdquo;Wir liefern au&szlig;ergew&ouml;hnliche Ergebnisse f&uuml;r ambitionierte Marken&ldquo; nicht.</p>
          <p>Drei strukturelle Faktoren erg&auml;nzen die Inhaltsqualit&auml;t. Erstens: KI-Crawler m&uuml;ssen Ihre Website erreichen k&ouml;nnen. Etwa 13&thinsp;% der KI-Crawler-Zugriffe werden durch WAF-Regeln (Web Application Firewall) blockiert, die f&uuml;r Scraper-Traffic geschrieben wurden &mdash; ohne zwischen b&ouml;swilligen Bots und legitimen KI-Retrieval-Bots wie OAI-SearchBot oder PerplexityBot zu unterscheiden. Zweitens: Entit&auml;tskonsistenz &mdash; identischer Markenname, Standort, Gr&uuml;ndungsjahr und Leistungen &uuml;ber alle Kan&auml;le. Widerspr&uuml;chliche Informationen erh&ouml;hen das Halluzinationsrisiko. Drittens: Erw&auml;hnungen in Quellen, die KI-Engines bereits als autorit&auml;tiv einstufen.</p>

          <h2 id="pmax-visibility-data">pmax-Sichtbarkeit &uuml;ber 10 Engines</h2>
          <p>Wir tracken unsere eigene KI-Sichtbarkeit mit <a href="https://crunchjunkie.io/" target="_blank" rel="noopener">CrunchJunkie</a> &mdash; 35 Prompts &uuml;ber 10 KI-Engines, kontinuierlich. In den 30 Tagen bis zum 7. September 2026 wurde pmax in 1.107 von 3.198 Runs zitiert: eine Gesamt-Zitierungsrate von 34,6&thinsp;%.</p>
          <p>Die Aufschl&uuml;sselung nach Engine &mdash; im Vergleich mit unserem gr&ouml;&szlig;ten Wettbewerber rex4media. Wir f&uuml;hren den Gesamtvorsprung 2,4:1 (1.107 vs. 470 zitierte Runs). Wo rex4medias Balken orange wird, &uuml;bertrifft uns der Wettbewerber.</p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', marginBottom: 12, display: 'flex', gap: 20 }}>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 2, background: '#3cffd0', marginRight: 6, verticalAlign: 'middle' }}></span>pmax</span>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 2, background: '#6b6b8b', marginRight: 6, verticalAlign: 'middle' }}></span>rex4media</span>
            </div>
            <svg viewBox="0 0 520 300" style={{ width: '100%', maxWidth: 520, display: 'block' }} aria-label="KI-Engine-Sichtbarkeit: pmax vs. rex4media">
              {[
                ['GPT-4o Search', 51.4, 24.3, false],
                ['DeepSeek', 45.7, 31.4, false],
                ['Perplexity', 42.9, 28.6, false],
                ['Meta AI', 37.1, 17.1, false],
                ['Grok-3', 31.4, 22.9, false],
                ['Gemini Flash', 25.7, 8.6, false],
                ['Google AI Mode', 17.1, 34.3, true],
                ['AI Overview', 14.3, 0, false],
                ['Claude', 11.4, 22.9, true],
                ['Bing Copilot', 2.9, 0, false],
              ].map(([engine, pmax, rex, rexWins], i) => {
                const y = (i as number) * 29 + 10
                const barW = 300
                const scale = barW / 55
                const pmaxW = Math.round((pmax as number) * scale)
                const rexW = Math.round((rex as number) * scale)
                const rexColor = rexWins ? '#f5a14a' : '#6b6b8b'
                return (
                  <g key={engine as string}>
                    <text x={0} y={y + 8} fontSize={10} fill="#6b6b6b" fontFamily="var(--font-mono)">{engine as string}</text>
                    <rect x={120} y={y} width={pmaxW} height={11} fill="#3cffd0" rx={2} />
                    <rect x={120} y={y + 13} width={rexW} height={11} fill={rexColor} rx={2} />
                    <text x={122 + pmaxW} y={y + 9} fontSize={9} fill="#3cffd0" fontFamily="var(--font-mono)">{(pmax as number).toFixed(1)}%</text>
                    {(rex as number) > 0 && <text x={122 + rexW} y={y + 22} fontSize={9} fill={rexColor} fontFamily="var(--font-mono)">{(rex as number).toFixed(1)}%</text>}
                  </g>
                )
              })}
            </svg>
            <p style={{ fontSize: 11, color: '#6b6b6b', fontFamily: 'var(--font-mono)', marginTop: 8 }}>Quelle: CrunchJunkie AI Visibility Tracking &middot; 35 Prompts &middot; 7. Sep. 2026 &middot; <a href="https://crunchjunkie.io/" style={{ color: '#6b6b6b' }} target="_blank" rel="noopener">crunchjunkie.io</a></p>
          </div>

          <p>Unsere st&auml;rkste Engine ist GPT-4o Search mit 51,4&thinsp;%. Das spiegelt eine konsistente Pr&auml;senz in den Quellen wider, aus denen ChatGPTs Retrieval-Schicht sch&ouml;pft: unser Blog, Verzeichniseintr&auml;ge und eigene Social-Kan&auml;le.</p>
          <p>Google AI Mode (17,1&thinsp;%) und Claude (11,4&thinsp;%) sind unsere schwachen Punkte. Rex4media &uuml;bertrifft uns dort mit 34,3&thinsp;% bzw. 22,9&thinsp;% &mdash; die orangen Balken. Die Quellen-Pools, die diese Engines gewichten, unterscheiden sich von jenen, die uns bei GPT-4o beg&uuml;nstigen. Daran arbeiten wir aktiv.</p>
          <p>Der 2,4:1-Gesamtvorsprung darf nicht tr&uuml;gen. Engine-Mix z&auml;hlt genauso viel wie die Gesamt-Zitierungsrate. Wenn Google AI Mode zur prim&auml;ren kommerziellen Suche in Europa wird &mdash; und die Signale deuten darauf hin &mdash; ist unsere schw&auml;chere Position dort die relevantere Zahl.</p>

          <h2 id="seven-levers">Die sieben Hebel</h2>
          <p>Was die Forschung belegt und wir in unseren eigenen Tracking-Daten sehen:</p>
          <p><strong>1. Konkrete, zitierbare Inhalte.</strong> Ersetzen Sie generische Markenaussagen durch exakte, pr&uuml;fbare Fakten. Ihre &Uuml;ber-uns-Seite und Leistungsbeschreibungen sollten eher wie ein Wikipedia-Eintrag klingen als wie eine Brosch&uuml;re. &bdquo;pmax ist eine Performance-Marketing-Agentur in Calvi&agrave;, Mallorca, gegr&uuml;ndet 2023&ldquo; ist zitierbar. &bdquo;Wir liefern au&szlig;ergew&ouml;hnliche Ergebnisse f&uuml;r ambitionierte Marken&ldquo; nicht.</p>
          <p><strong>2. Belegte Statistiken.</strong> Untermauern Sie jede wesentliche Aussage mit Zahlen. Nicht &bdquo;die meisten Werbetreibenden&ldquo;, sondern &bdquo;13&thinsp;% der KI-Crawler-Zugriffe werden standardm&auml;&szlig;ig durch WAF-Regeln blockiert.&ldquo; Belegte Statistiken verbessern Zitierungsraten um 25,9&thinsp;% (KDD 2024).</p>
          <p><strong>3. FAQ-Inhalte.</strong> KI-Engines synthetisieren h&auml;ufig Frage-Antwort-Inhalte, weil sie direkt auf Suchanfragen passen. Jede Leistungsseite sollte einen strukturierten FAQ-Abschnitt mit echten Kundenfragen haben. FAQPage-Schema erg&auml;nzend einsetzen.</p>
          <p><strong>4. KI-Crawler-Zugang.</strong> Pr&uuml;fen Sie robots.txt und vor allem Ihre WAF-Konfiguration. OAI-SearchBot, PerplexityBot, Claude-SearchBot, ChatGPT-User und Google-Extended d&uuml;rfen nicht blockiert sein. Bei einem Kunden fanden wir alle f&uuml;nf unbeabsichtigt durch eine Cloudflare-Regel blockiert. Nach der Entsperrung verbesserte sich die Sichtbarkeit innerhalb von 30 Tagen.</p>
          <p><strong>5. Entit&auml;tskonsistenz.</strong> Markenname, Gr&uuml;ndungsjahr, Team, Standort und Leistungen m&uuml;ssen &uuml;ber alle Kan&auml;le identisch sein. Widerspr&uuml;chliche Informationen erh&ouml;hen das Halluzinationsrisiko und reduzieren das Vertrauen der KI-Engines in Ihre Entit&auml;tsdaten.</p>
          <p><strong>6. Drittanbieter-Erw&auml;hnungen.</strong> Eine Erw&auml;hnung in einer anerkannten Branchenpublikation bringt mehr f&uuml;r die Zitierungsrate als zehn selbst ver&ouml;ffentlichte Beitr&auml;ge. KI-Engines gewichten Quellen, denen sie bereits vertrauen. Digitale PR, Podcast-Auftritte und gemeinsam ver&ouml;ffentlichte Fallstudien bauen die Drittanbieter-Best&auml;tigung auf, die nachhaltige Zitierungsraten erm&ouml;glicht.</p>
          <p><strong>7. Eigene Off-Site-Kan&auml;le.</strong> YouTube, LinkedIn, Substack &mdash; Content auf eigenen Kan&auml;len au&szlig;erhalb Ihrer Hauptdomain wird separat getrackt und zitiert. CrunchJunkies Off-Site-Zitations-Tracking zeigt, welche Ihrer Kan&auml;le jede Engine zu welchen Themen heranzieht und wo Ihnen Themen-Cluster fehlen.</p>

          <h2 id="geo-audit">Was ein technisches GEO-Audit pr&uuml;ft</h2>
          <p>Ein GEO-Audit ist die strukturierte Diagnose f&uuml;r die oben genannten Zugangs- und Content-Faktoren. Das Audit, das wir &uuml;ber unsere <a href="/de/services/ai-visibility/">KI-Sichtbarkeits-Leistung</a> anbieten, umf asst f&uuml;nf Kategorien &mdash; gewichtet nach Evidenzst&auml;rke.</p>
          <p><strong>KI-Crawler-Zugang (30/100).</strong> K&ouml;nnen Retrieval-Bots Ihre wichtigsten Seiten erreichen? robots.txt-Review, WAF-Audit und Live-Crawl-Verifikation mit den User-Agent-Strings von OAI-SearchBot, PerplexityBot und Claude-SearchBot. Die 13&thinsp;%-Blockierungsrate ist real und meist der wirkungsvollste Fix.</p>
          <p><strong>Content-Zug&auml;nglichkeit (30/100).</strong> Sind kritische Inhalte server-gerendert? JavaScript-abh&auml;ngige Inhalte sind f&uuml;r KI-Crawler, die JS nicht ausf&uuml;hren, oft unsichtbar. Wenn Ihre Leistungsbeschreibungen &uuml;ber eine React-Komponente geladen werden, die Browser-Rendering erfordert, m&ouml;glicherweise nicht im crawlbaren DOM.</p>
          <p><strong>Strukturierte Daten (20/100).</strong> JSON-LD-Qualit&auml;t und -Abdeckung: Organisation bzw. LocalBusiness, Service, FAQPage, Person f&uuml;r benannte Teammitglieder. Schema hilft KI-Engines, Ihre Marke als definierte Entit&auml;t mit konsistenten Attributen aufzul&ouml;sen.</p>
          <p><strong>Technische SEO-Hygiene (15/100).</strong> Canonical-Tags, Sitemap-Aktualit&auml;t, Title- und Description-L&auml;ngen. Grundlagenarbeit, die verhindert, dass Crawl-Probleme sonst solide Inhalte untergraben.</p>
          <p><strong>llms.txt (5/100).</strong> Bewusst niedrig gewichtet. Google best&auml;tigte im August 2026, dass Google Search llms.txt ignoriert. Rund 97&thinsp;% der ver&ouml;ffentlichten llms.txt-Dateien erhalten null Crawler-Anfragen. Haben ist besser als nicht haben &mdash; aber kein Priorit&auml;tsthema. Unser GEO-Audit-Score f&uuml;r pmax.online liegt bei 97/100.</p>

          <h2 id="how-to-track">Wie Sie Ihre eigene KI-Sichtbarkeit tracken</h2>
          <p>Manuelles Tracking &mdash; eigene Prompts in ChatGPT, Perplexity, Claude und Gemini &mdash; ist der Einstieg f&uuml;r jedes KI-Sichtbarkeits-Programm. Die Einschr&auml;nkung: KI-Antworten sind nicht-deterministisch. Ein einzelner Run ist ein Datenpunkt, kein Trend.</p>
          <p>F&uuml;r aussagekr&auml;ftiges Tracking ben&ouml;tigen Sie drei Dinge. <strong>Mehrere Runs pro Prompt</strong> &mdash; mindestens 15&ndash;20, um eine Zitierungsrate mit verl&auml;sslichem Fehlerbereich zu erhalten. &bdquo;34,5&thinsp;% &plusmn; 3,3&thinsp;% basierend auf 2.591 Runs&ldquo; ist eine Messung. &bdquo;34,5&thinsp;%&ldquo; ist eine Zahl. <strong>Abdeckung &uuml;ber mehrere Engines</strong> &mdash; jede Engine hat ein anderes Zitierungsverhalten. Nur ChatGPT zu tracken bedeutet, einen Bruchteil des Marktes zu messen. <strong>Trenddaten &uuml;ber Zeit</strong> &mdash; ein einmaliges Audit zeigt, wo Sie heute stehen. Systematisches Tracking &uuml;ber Wochen und Monate zeigt, ob Ihre Ma&szlig;nahmen tats&auml;chlich wirken.</p>
          <p>Wir nutzen <a href="https://crunchjunkie.io/" target="_blank" rel="noopener">CrunchJunkie</a> daf&uuml;r: alle 35 Prompts, alle 10 Engines, kontinuierliches Tracking mit Fehlerbereichs-Reporting und Wettbewerbs-Benchmarking. Unsere <a href="/de/services/ai-visibility/">KI-Sichtbarkeits-Leistung</a> umfasst Tracking-Einrichtung, ein vollst&auml;ndiges GEO-Audit und monatliches Reporting.</p>

          <h2>Haben Sie Fragen dazu?</h2>
          <p>Falls das auf Ihr Unternehmen zutrifft, <a href="/de/contact/?topic=ki-sichtbarkeit-ai-visibility">schildern Sie uns kurz Ihre Situation</a> &mdash; wir melden uns innerhalb eines Werktages. Das erste Gespr&auml;ch: 30 Minuten, auf unsere Rechnung.</p>
        </>
      ),
    },
'meta-ads-agency-vs-in-house': {
  title: 'Meta Ads Agentur oder In-House? Ein ehrlicher Vergleich.',
  deck: 'Agentur-Retainer, In-House-Stelle oder Freelancer &mdash; echte Kosten, realistische ROAS-Benchmarks und wann welche Option wirklich die richtige ist.',
  toc: ['Die Kernfrage', 'Was es wirklich kostet', 'Wann In-House gewinnt', 'Wann die Agentur gewinnt', 'Finca Es Pinar: ein echter Wechsel', 'Sechs Fragen vor der Entscheidung'],
  faqs: [
    {
      q: 'Was kostet eine Meta Ads Agentur in Deutschland oder Spanien?',
      a: 'Ein professioneller Meta-Ads-Retainer liegt in Deutschland typischerweise bei 1.500–4.500 € pro Monat — inklusive Strategie, Kampagnenmanagement, Creative-Briefing und Reporting. Spanische Agenturen arbeiten in einer ähnlichen Spanne. Prozentuale Modelle (10–15 % des Mediabudgets) existieren, schaffen aber perverse Anreize: Die Agentur verdient mehr, wenn Sie mehr ausgeben — unabhängig vom Ergebnis.',
    },
    {
      q: 'Welchen ROAS kann ich mit Meta Ads im Hospitality-Bereich erwarten?',
      a: 'Gut strukturierte Hospitality-Kampagnen auf Meta erzielen typischerweise einen ROAS von 2,5× bis 5×. Der WordStream-2024-Facebook-Ads-Benchmark-Report weist branchenübergreifend etwa 2,87× aus. Hospitality liegt leicht darüber, wenn Creative und Landing Pages konversionsorientiert aufgebaut sind.',
    },
    {
      q: 'Kann ich Meta Ads selbst verwalten, ohne eine Agentur?',
      a: 'Ja — und bei einem Monatsbudget unter 1.500 € lohnt sich ein Agentur-Retainer wirtschaftlich für keine Seite. Meta Ads Manager ist zugänglich, und Meta Blueprint bietet kostenlose Zertifizierungskurse. Der ehrliche Engpass ist Zeit: Ein Account sauber zu führen — Creative testen, Frequenz überwachen, Zielgruppen anpassen — erfordert 8–12 Stunden pro Woche.',
    },
    {
      q: 'Ab welchem Budget lohnt sich eine Meta Ads Agentur?',
      a: 'Ab 1.500 € monatlichem Mediabudget beginnt die Retainer-Wirtschaftlichkeit zu greifen. Unter 1.000 € ist Selbstverwaltung oder eine Einmalberatung sinnvoller als ein laufendes Mandat.',
    },
  ],
  prose: (
    <>
      <p>Eine universell richtige Antwort gibt es hier nicht &mdash; das ist das Ehrlichste, was wir vorwegnehmen k&ouml;nnen. Agenturen gewinnen in bestimmten Situationen. In-House-Teams in anderen. Und Freelancer sind f&uuml;r bestimmte Projektscopes wirklich die richtige Wahl.</p>
      <p>Was wir Ihnen geben: echte Zahlen, echte Trade-offs und eine Fallstudie eines Mallorca-Hotels, das von In-House zu pmax gewechselt hat &mdash; damit Sie etwas Konkretes zum Vergleichen haben, keine Agenturmeinung im Framework-Gewand.</p>

      <h2 id="in-house-vs-agency">Die Kernfrage</h2>
      <p>Die meisten Unternehmen, mit denen wir sprechen, haben vor dem Erstkontakt bereits eine vorl&auml;ufige Entscheidung getroffen. Entweder sind sie mit einer Agentur unzufrieden oder mit dem eigenen Team. Beides kann eine valide Einsch&auml;tzung sein &mdash; und beides kann eine Fehldiagnose sein.</p>
      <p>Das Agenturmodell b&uuml;ndelt Expertise, Tools und Kontinuit&auml;t in einem monatlichen Retainer. Sie zahlen f&uuml;r ein Team, das Dutzende Accounts betreut, plattform&uuml;bergreifend testet und Muster erkennt, die ein Einzelaccount nicht hervorbringt. Der Trade-off ist Aufmerksamkeit: Ein solider Mid-Market-Agentur-Manager betreut 15&ndash;20 Kunden gleichzeitig. Ihr Account bekommt einen Bruchteil einer Arbeitswoche.</p>
      <p>Das In-House-Modell bietet volle Aufmerksamkeit, tiefes Markenwissen und enge interne Abstimmung. Der Trade-off: Lernkurve, Recruiting-Aufwand und Gesamtkosten. Eine qualifizierte Meta-Ads-Fachkraft kostet in Deutschland 45.000&ndash;70.000 &euro; all-in pro Jahr &mdash; Lohnnebenkosten, Tools und Weiterbildung eingerechnet.</p>

      <h2 id="real-costs">Was es wirklich kostet</h2>
      <p>Laut WordStream-2024-Facebook-Ads-Benchmark-Report lag der durchschnittliche CPM auf Meta bei 9,40 &euro;, die Klickrate bei 0,9&nbsp;% und der CPC bei rund 1,12 &euro;. Das sind Anzeigenkosten. Was Sie zus&auml;tzlich f&uuml;r das Management zahlen, variiert stark.</p>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Modell</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>J&auml;hrl. Managementkosten</th>
              <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Passt f&uuml;r</th>
            </tr>
          </thead>
          <tbody>
            {[
              { model: 'Agentur', cost: '18.000–54.000 €/Jahr', suits: '1.500–25.000 €/Monat Budget' },
              { model: 'In-House-Stelle', cost: '45.000–70.000 €/Jahr all-in', suits: '>50.000 €/Monat Budget' },
              { model: 'Freelancer', cost: '10.000–28.000 €/Jahr', suits: 'Sprints, einzelne Kanäle' },
              { model: 'Selbstverwaltung', cost: '0 + Tools ~200 €/Monat', suits: '<1.500 €/Monat Budget' },
            ].map(row => (
              <tr key={row.model} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.model}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.cost}</td>
                <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontSize: 12, color: '#949494' }}>{row.suits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>&bdquo;Die wirklichen Kosten einer In-House-Stelle erkennen die meisten Unternehmen erst nach zw&ouml;lf Monaten&ldquo;, sagt Philipp Enders, Gr&uuml;nder von pmax. &bdquo;Recruiting, Onboarding, Lernkurve &mdash; und dann die Erkenntnis, dass eine Person Creative, Strategie, Analyse und Plattformmanagement nicht gleichzeitig stemmen kann.&ldquo;</p>

      <h2 id="when-in-house-wins">Wann In-House gewinnt</h2>
      <p>Nehmen Sie das nicht unkritisch von einer Agentur. In-House ist in konkreten Situationen die richtige Wahl.</p>
      <p><strong>Sie investieren mehr als 50.000 &euro; pro Monat allein in Meta.</strong> Bei diesem Volumen wird geteilte Agenturaufmerksamkeit zum Engpass. Ein dediziertes In-House-Team iteriert schneller, brieft Creative auf k&uuml;rzeren Zyklen und h&auml;lt mehr Account-Kontext.</p>
      <p><strong>Ihre Produktdaten sind vertraulich.</strong> Wenn Ihre besten Creative-Ans&auml;tze auf internen Kundendaten oder propriet&auml;rer Marktforschung basieren, die Sie nicht teilen k&ouml;nnen oder wollen, gewinnt In-House per Definition.</p>
      <p><strong>Sie sind in einem schnelldrehenden DTC- oder Mode-Vertical.</strong> Marken, die drei Kollektionen pro Saison droppen und w&ouml;chentlich neuen Content produzieren, brauchen Creative-Operations im selben Rhythmus. Das ist &uuml;ber eine Agenturbeziehung schwerer zu halten.</p>
      <p>Ein ehrlicher Vorbehalt: Ein kompetentes In-House-Team aufzubauen dauert 6&ndash;12 Monate ab der Einstellungsentscheidung. Bis dahin lernen Sie auf lebendem Budget. Viele Unternehmen, die In-House versuchen, kommen die ersten zw&ouml;lf Monate trotzdem zur Agentur zur&uuml;ck &mdash; ein teurer Weg zum selben Ziel.</p>

      <h2 id="when-agency-wins">Wann die Agentur gewinnt</h2>
      <p>F&uuml;r die meisten Unternehmen mit 1.500&ndash;25.000 &euro;/Monat Meta-Budget liefert eine Agentur bessere Ergebnisse als die Alternativen. Die Arithmetik ist eindeutig: Account-Struktur, Creative-Strategie, Audience-Architektur, Attribution-Setup &mdash; das einzeln einzustellen kostet mehr als ein Retainer.</p>
      <p>Agenturen bringen auch plattform&uuml;bergreifende Mustererkennung. Wir verwalten Meta neben Google Ads, TikTok, LinkedIn und Pinterest f&uuml;r Kunden aus verschiedenen Branchen. Ver&auml;nderungen in Metas Algorithmus sehen wir im Portfolio fr&uuml;her als jede einzelne Marke.</p>
      <p>Unsere <a href="/de/services/paid-social/">Paid-Social-Leistung</a> deckt Meta, LinkedIn, TikTok und Pinterest ab. Ausgew&auml;hlte Ergebnisse mit echten Zahlen finden Sie in unseren <a href="/de/cases/">Referenzen</a>.</p>

      <h2 id="finca-es-pinar">Finca Es Pinar: ein echter Wechsel</h2>
      <p>Finca Es Pinar ist ein Boutique-Landhotel in Calvi&agrave;, Mallorca. Elf Zimmer, starke Stammgastbasis, saisonale Spitzen in Mai&ndash;Juni und September&ndash;Oktober. Als sie Anfang 2026 zu uns kamen, hatten sie 18 Monate lang Meta Ads intern gemanagt &mdash; durch eine Teilzeit-Koordinatorin, die gleichzeitig Social Media und Newsletter betreute.</p>
      <p>Die Kampagnen liefen. Die Ergebnisse waren m&auml;&szlig;ig: ROAS 2,1&times; bei 2.400 &euro; monatlichem Budget, rund 68 &euro; pro Buchungs-Lead. Die besten Direktbuchungsmonate h&auml;ngten trotzdem noch vom OTA-Traffic ab.</p>
      <p>Die Probleme waren struktureller Natur: Zielgruppen zu breit und nie gek&uuml;hlt, Creative aus Instagram-Posts recycelt statt f&uuml;r Conversion gebaut, Attribution mit Doppelz&auml;hlung OTA-gest&uuml;tzter Conversions durch einen falsch konfigurierten Pixel. Keine systematische Creative-Rotation, keine Frequency Caps, kein Retargeting-Trichter jenseits einer generischen Website-Besucher-Zielgruppe.</p>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Kennzahl</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Vorher</th>
              <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Nachher (12 Wochen)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { metric: 'Meta Ads ROAS', before: '2,1×', after: '4,3×' },
              { metric: 'Kosten pro Buchungs-Lead', before: '68 €', after: '31 €' },
              { metric: 'Monatliches Ad-Budget', before: '2.400 €', after: '2.400 €' },
              { metric: 'Direktbuchungsanteil', before: '22 %', after: '38 %' },
              { metric: 'Aktive Creative-Varianten', before: '3', after: '14' },
            ].map(row => (
              <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.before}</td>
                <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0', fontWeight: 700 }}>{row.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>Das Budget blieb unver&auml;ndert. Was sich &auml;nderte: Zielgruppensegmentierung nach Lead-Quelle und Geografie, Conversion-fokussiertes Creative von Grund auf neu, Frequency Capping pro Funnel-Stufe und eine Retargeting-Sequenz, die die Botschaft an den Buchungsfortschritt der G&auml;ste anpasste. Die Attribution wurde &uuml;ber die Meta Conversions API, direkt verbunden mit dem Property-Management-System, korrigiert.</p>

      <h2 id="what-to-ask">Sechs Fragen vor der Entscheidung</h2>
      <ol>
        <li><strong>Wie hoch ist Ihr monatliches Ad-Budget?</strong> Unter 1.500 &euro;: Selbstverwaltung oder Freelancer. 1.500&ndash;25.000 &euro;: Agentur-Wirtschaftlichkeit greift klar. &Uuml;ber 50.000 &euro;: In-House beginnt Sinn zu ergeben.</li>
        <li><strong>Haben Sie intern jemanden, der Creative briefen kann?</strong> Strategie liefert die Agentur. Creative-Briefing erfordert Markenwissen, das im Unternehmen sitzt.</li>
        <li><strong>Wie ist Ihr Attribution-Setup?</strong> Wenn Sie nicht wissen, ob Ihr ROAS View-Through oder Click-Through misst, sind Ihre aktuellen Zahlen m&ouml;glicherweise unzuverl&auml;ssig. Zuerst Attribution reparieren, dann Modelle vergleichen.</li>
        <li><strong>Sind Sie auf mehreren Paid-Kan&auml;len aktiv?</strong> Wenn ja, l&ouml;st eine Mehrkanal-Agentur die Koordination und Budget-Allokation besser als parallele In-House-Spezialisten in Silos.</li>
        <li><strong>Was kostet eine Fehlbesetzung?</strong> Eine falsche In-House-Stelle kostet 6&ndash;12 Monatsgeh&auml;lter plus Recruiting-Fees &mdash; typischerweise 40.000&ndash;70.000 &euro; Risiko. Das geh&ouml;rt ehrlich in den Vergleich.</li>
        <li><strong>Sind Sie ein Saisonbetrieb?</strong> Hotellerie, Tourismus und Events brauchen schnelle Budget-Skalierung. Agenturen skalieren leichter als Headcount.</li>
      </ol>

      <h2>Haben Sie Fragen dazu?</h2>
      <p>Falls das auf Ihr Unternehmen zutrifft, <a href="/de/contact/?topic=meta-ads-agency-vs-in-house">schildern Sie uns kurz Ihre Situation</a> &mdash; wir melden uns innerhalb eines Werktages. Das erste Gespr&auml;ch: 30 Minuten, auf unsere Rechnung.</p>
    </>
  ),
},
    'ai-visibility-tracking-tools-2026': {
      toc: [
        'Das Abrechnungsproblem, das kein Anbieter bewirbt',
        'Was BYOK wirklich ändert',
        'Warum Sichtbarkeits-Prozentsätze ohne Stichprobengrößen lügen',
        'Eine Metrik, die kein anderes Tool erfasst: Follow-up Survival',
        'GEO-Audits: warum die Evidenzbasis zählt',
        'Eigene Off-Site-Zitationen',
        'Wann CrunchJunkie nicht die richtige Wahl ist',
        'Das ehrliche Fazit',
      ],
      faqs: [
        {
          q: 'Was ist BYOK beim KI-Sichtbarkeits-Tracking?',
          a: 'BYOK steht für Bring Your Own Key. Anstatt API-Aufrufe in ein Prompt-Kontingent zu verpacken und pauschal mit Aufschlag zu berechnen, lässt ein BYOK-Modell Sie Ihre eigenen API-Keys direkt mit den Modell-Anbietern verbinden (OpenAI, Google, Anthropic usw.). Sie zahlen die Anbieter zu Einkaufspreisen; die Plattform berechnet ein Abonnement auf anderer Basis — bei CrunchJunkie: die Anzahl der getrackten Marken. Die praktische Konsequenz: kein Prompt-Limit und transparente Kosten.',
        },
        {
          q: 'Was ist Follow-up Survival in der KI-Suche?',
          a: 'Follow-up Survival ist eine Multi-Turn-KI-Sichtbarkeitsmetrik, die misst, ob eine Markenempfehlung standhält, wenn ein Käufer seine Anfrage in derselben Unterhaltung eingrenzt. Standard-KI-Sichtbarkeits-Tracking erfasst, ob eine Marke als Reaktion auf einen breiten Discovery-Prompt erschien (Turn 1). Follow-up Survival sendet eine konfigurierte, engere Folgefrage in derselben Unterhaltung (Turn 2) und misst, welche Marken die Verfeinerung überstehen. Eine Marke kann in der breiten Anfrage sichtbar sein und in dem Moment verschwinden, wenn eine reale Einschränkung angewendet wird. CrunchJunkie ist das einzige KI-Sichtbarkeits-Tool, das diese Metrik produktisiert.',
        },
        {
          q: 'Wie viele KI-Engines trackt CrunchJunkie?',
          a: 'CrunchJunkie trackt zehn KI-Engines: ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews, Google AI Mode, Microsoft Copilot, Grok, Meta AI und DeepSeek. Alle zehn sind in jedem Plan enthalten — es gibt keine Engine-Add-ons oder gestufte Engine-Zugänge.',
        },
        {
          q: 'Was prüft ein GEO-Audit?',
          a: 'Ein GEO-Audit bewertet, wie bereit eine Website ist, von KI-Suchmaschinen gecrawlt und zitiert zu werden. CrunchJunkies Audit umfasst fünf Kategorien: Crawler-Zugang (ob KI-Bots Ihre Seiten erreichen können), Content-Zugänglichkeit (ob Content server-gerendert und für die Extraktion strukturiert ist), strukturierte Daten (JSON-LD-Qualität und -breite), technische SEO-Hygiene (Canonical, Sitemap, Title/Description-Längen) und llms.txt (das entstehende Dateiformat für KI-Crawler-Anleitungen). Jedem Check wird eine Evidenzbasis zugewiesen — Research, Documented, Convention oder Heuristic — die bestimmt, wie er im Gesamtscore von 0–100 gewichtet wird.',
        },
        {
          q: 'Welches KI-Sichtbarkeits-Tool ist am günstigsten für das Tracking mehrerer Marken?',
          a: 'Bei einer Konfiguration von 50 Prompts pro Marke, 5 Engines und wöchentlichem Scannen ist CrunchJunkie die günstigste Option, die über mehrere Marken skaliert. Bei 5 Marken betragen die Jahreskosten etwa $2.873 (Plattformgebühr plus BYOK-API-Kosten) gegenüber $3.229 für LLM Pulse, $4.884 für OtterlyAI und $9.636 für Peec AI. LLM Pulse ist bei einer einzelnen Marke günstiger (~$529/Jahr vs. CrunchJunkies ~$601), setzt aber Prompt-Limits und behandelt mehrere Engines als kostenpflichtige Add-ons. Preise verifiziert August 2026.',
        },
      ],
      prose: (
        <>
          <p>Der Markt für KI-Sichtbarkeits-Tools hat ein spezifisches Problem: Er entwickelt sich schnell genug, dass die meisten Käufer noch nicht wissen, welche Fragen sie stellen sollen. Anbieter wissen das, und manche nutzen es aus.</p>
          <p>Ich habe die letzten Monate damit verbracht, diese Plattformen zu testen &mdash; nicht Demo-Calls anzuschauen, sondern sie tatsächlich auf Kundenkonten laufen zu lassen, zu prüfen, ob die Zahlen stimmen, und Fragen zu stellen, die in Verkaufsgesprächen nicht auftauchen. Das sind meine Erkenntnisse.</p>

          <h2 id="metering-problem">Das Abrechnungsproblem, das kein Anbieter bewirbt</h2>
          <p>Bevor Sie Features vergleichen, verstehen Sie, wie jedes Tool abrechnet. Das Preismodell bestimmt, was Sie sich leisten können zu tracken &mdash; und das bestimmt, was Sie tatsächlich über Ihre KI-Suchpräsenz wissen.</p>
          <p>Drei Modelle dominieren den Markt.</p>
          <p><strong>Prompt-basierte Abrechnung.</strong> Sie kaufen ein Prompt-Kontingent. 50 auf Einsteigerniveau, vielleicht 150 im nächsten Tier, 350 wenn Sie bereit sind, dafür zu zahlen. Jede Anfrage, die Sie monitoren möchten, verbraucht einen Prompt. Wollen Sie mehr kaufreisebezogene Fragen tracken? Mehr Prompts. Wollen Sie die Liste aktualisieren, wenn sich das KI-Suchverhalten ändert? Sie schöpfen aus demselben Kontingent.</p>
          <p>Die praktische Konsequenz: Sie beginnen, Ihr eigenes Tracking zu rationieren. Sie wählen 50 Prompts und hoffen, dass es die richtigen sind. Sie lassen die Long-Tail-Anfragen weg. Sie aktualisieren die Liste nicht, wenn sich etwas am Markt verändert. Am Ende haben Sie ein ordentliches Dashboard, das widerspiegelt, was Sie sich leisten konnten zu tracken &mdash; nicht das, was tatsächlich passiert.</p>
          <p><strong>Engine-basierte Abrechnung.</strong> Viele Tools inkludieren 3&ndash;4 KI-Engines im Basispaket und berechnen den Rest extra. Claude kostet oft Aufpreis. Gemini ist möglicherweise gesperrt. Copilot ist manchmal in Standard-Plänen gar nicht verfügbar.</p>
          <p>OtterlyAI berechnet je nach Plan $29&ndash;$439 extra pro Monat für Claude-Tracking. Peec AI gibt Ihnen drei der sechs unterstützten Engines pro Plan &mdash; jede weitere Engine kostet $30&ndash;$140 extra pro Monat on top. Wenn Sie einen Listenpreis sehen, müssen Sie erst die Engine-Rechnung aufmachen, bevor Sie ihn akzeptieren.</p>
          <p><strong>Abrechnung pro Domain oder Marke.</strong> Semrush&rsquo;s AI Visibility Toolkit berechnet $99 pro Domain und Monat. Transparent und planbar bei einer Marke; brutal, wenn Sie das über eine Agentur-Kundenliste multiplizieren.</p>

          <h2 id="byok">Was BYOK wirklich ändert</h2>
          <p>CrunchJunkie geht die ganze Preisfrage anders an. Statt API-Aufrufe in ein Prompt-Kontingent zu verpacken und mit Aufschlag pauschal zu berechnen, lässt es Sie eigene API-Keys verbinden. Ihre Anfragen gehen direkt an OpenAI, Google, Anthropic und die anderen Anbieter &mdash; Sie zahlen diese zu Einkaufspreisen. Die Plattform berechnet ein Abonnement auf Basis der Anzahl getrackter Marken, nicht der Prompt-Menge.</p>
          <p>Das Ergebnis: kein Prompt-Limit. Alle zehn Engines &mdash; ChatGPT, Gemini, <a href="/de/blog/perplexity-visibility/">Perplexity</a>, Claude, Google AI Overviews, Google AI Mode, Microsoft Copilot, Grok, Meta AI und DeepSeek &mdash; sind in jedem Plan ab der untersten Stufe enthalten. Keine Engine-Add-ons.</p>
          <p>Das verändert die Anreizstruktur konkret. Mit einem Prompt-Limit haben Sie einen Grund, weniger Anfragen zu tracken als Sie sollten. Mit BYOK ohne Limit tracken Sie, was tatsächlich sinnvoll ist.</p>
          <p>So sehen die Jahreskosten bei einer konsistenten Konfiguration &mdash; 50 Prompts pro Marke, 5 Engines, wöchentliches Scannen, Jahresabrechnung &mdash; für Tools mit öffentlichen Preisangaben aus:</p>

          <div style={{ overflowX: 'auto', margin: '24px 0 8px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>Tool</th>
                  <th style={{ textAlign: 'left', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>Abrechnung</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>1 Marke / J.</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>5 Marken / J.</th>
                  <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>10 Marken / J.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tool: 'CrunchJunkie', href: 'https://crunchjunkie.io/pricing', meter: 'nur Marken', one: '$601', five: '$2,873', ten: '$6,105', highlight: true },
                  { tool: 'LLM Pulse', href: 'https://llmpulse.ai/pricing', meter: 'Prompts + Projekt', one: '$529', five: '$3,229', ten: '$7,763', highlight: false },
                  { tool: 'Peec AI', href: 'https://peec.ai/pricing', meter: 'Prompts + Engine', one: '$1,932', five: '$9,636', ten: '—', highlight: false },
                  { tool: 'Semrush', href: 'https://www.semrush.com/prices/', meter: 'Domain', one: '$1,908 +Abo', five: '$9,540 +Abo', ten: '$19,080 +Abo', highlight: false },
                  { tool: 'OtterlyAI', href: 'https://otterly.ai/pricing', meter: 'Prompts + Engine', one: '$2,508', five: '$4,884', ten: '$7,260', highlight: false },
                  { tool: 'Scrunch *', href: 'https://scrunch.com', meter: 'Marken-Workspace', one: '~$3,000', five: '—', ten: '—', highlight: false },
                  { tool: 'Evertune', href: 'https://www.evertune.ai', meter: 'Flatrate (Prompt-Vol.)', one: '$9,600', five: '$9,600', ten: '$9,600', highlight: false },
                  { tool: 'Ahrefs †', href: 'https://ahrefs.com/pricing', meter: 'Basis + Add-on', one: '$9,936 +Abo', five: '$9,936 +Abo', ten: '$9,936 +Abo', highlight: false },
                  { tool: 'GEOly ‡', href: 'https://www.geoly.ai', meter: 'Tier + Engine-Gate', one: '$11,988', five: '$11,988', ten: '—', highlight: false },
                ].map(({ tool, href, meter, one, five, ten, highlight }) => (
                  <tr key={tool} style={{ borderBottom: '1px solid #1e1e1e' }}>
                    <td style={{ padding: '10px 16px 10px 0', fontWeight: highlight ? 600 : 400, color: highlight ? '#f6f4ef' : '#b4b4b4', whiteSpace: 'nowrap' }}><a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{tool}</a></td>
                    <td style={{ padding: '10px 16px', fontSize: 12, color: '#6a6a6a', whiteSpace: 'nowrap' }}>{meter}</td>
                    <td style={{ textAlign: 'right', padding: '10px 16px', fontFamily: 'var(--font-mono)', fontSize: 12, color: highlight ? '#3cffd0' : '#b4b4b4', whiteSpace: 'nowrap' }}>{one}</td>
                    <td style={{ textAlign: 'right', padding: '10px 16px', fontFamily: 'var(--font-mono)', fontSize: 12, color: highlight ? '#3cffd0' : '#b4b4b4', whiteSpace: 'nowrap' }}>{five}</td>
                    <td style={{ textAlign: 'right', padding: '10px 0 10px 16px', fontFamily: 'var(--font-mono)', fontSize: 12, color: highlight ? '#3cffd0' : '#b4b4b4', whiteSpace: 'nowrap' }}>{ten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ fontSize: 12, color: '#949494', lineHeight: 1.75, marginBottom: 24, borderTop: '1px solid #2d2d2d', paddingTop: 16 }}>
            <p style={{ margin: '0 0 8px', color: '#b4b4b4', fontWeight: 500 }}>So lesen Sie diese Tabelle</p>
            <p style={{ margin: '0 0 6px' }}>Jedes Tool ist bei identischer Konfiguration bewertet, damit die Zahlen direkt vergleichbar sind: <strong style={{ color: '#f6f4ef' }}>50 Prompts pro Marke, 5 KI-Engines, wöchentliches Scannen, Jahresabrechnung</strong>. Nur die Plankosten bei dieser genauen Konfiguration werden gezeigt &mdash; kein Rosinenpicken bei günstigeren Tiers, die die Anforderungen nicht erfüllen würden.</p>
            <p style={{ margin: '0 0 6px' }}>CrunchJunkies Zahl ist das Plattform-Abonnement <em>plus</em> geschätzte BYOK-API-Kosten (was Sie OpenAI, Google, Anthropic usw. direkt zahlen). Die Schätzung ist konservativ &mdash; die tatsächlichen API-Kosten bei 50 Prompts/Woche sind typischerweise niedriger, und Sie sehen genau, was Sie ausgeben, weil Sie die Anbieter direkt zu Einkaufspreisen ohne Aufschlag zahlen.</p>
            <p style={{ margin: '0 0 12px' }}>Ein Strich (&mdash;) bedeutet, dass kein Self-Serve-Plan diese Konfiguration abdeckt &mdash; Sie bräuchten ein Custom-Enterprise-Angebot.</p>
            <p style={{ margin: '0 0 4px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.5px' }}>* Scrunch-Preise ändern sich häufig; Angabe vom August 2026 &mdash; vor dem Zitieren auf scrunch.com prüfen.</p>
            <p style={{ margin: '0 0 4px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.5px' }}>&dagger; Ahrefs: Basisplan ($129/Mo.) + Brand-Radar-Add-on mit allen Engines ($699/Mo.). Das enthaltene Brand-Radar-Prompt-Kontingent umfasst nur 5&ndash;20 Prompts &mdash; das Add-on ist erforderlich, um 50+ zu tracken.</p>
            <p style={{ margin: '0 0 4px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.5px' }}>&Dagger; GEOly: 5-Engine-Abdeckung erfordert den $999/Mo.-Tier; max. 5 Marken. 10-Marken-Konfiguration nicht im Self-Serve-Plan verfügbar.</p>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.5px' }}>Mitbewerberpreise von öffentlichen Preisseiten verifiziert, wo zugänglich; andernfalls aus sekundären Quellen. Preise ändern sich häufig &mdash; vor dem Abschluss prüfen.</p>
          </div>

          <p>Ein ehrlicher Vorbehalt, den diese Tabelle nicht verstecken sollte: <strong>LLM Pulse ist bei einer Marke günstiger</strong> (&sim;$529/Jahr vs. CrunchJunkies &sim;$601). Wenn Sie ein kleines Programm betreiben, keine Multi-Engine-Abdeckung brauchen und mit einem Prompt-Limit leben können, ist es neben CrunchJunkie einen Blick wert. LLM Pulse setzt Prompt-Limits und behandelt Copilot und Claude als kostenpflichtige Add-ons &mdash; bei einer Marke mit begrenzten Prompts und wenigen Engines beißen diese Einschränkungen möglicherweise nicht.</p>
          <p>Ab fünf Marken dreht sich die Rechnung um. Ab zehn Marken kann Peec AI die Konfiguration nicht einmal ohne Custom-Enterprise-Gespräch anbieten. Semrush läuft bei $19.000+ pro Jahr, bevor das erforderliche Basis-Abonnement hinzukommt.</p>
          <p>CrunchJunkie-Pläne (EUR, Jahresabrechnung): <strong>Solo &euro;9/Monat</strong> (1 Marke) &middot; <strong>Starter &euro;39/Monat</strong> (5 Marken) &middot; <strong>Pro &euro;99/Monat</strong> (20 Marken) &middot; <strong>Agency &euro;149/Monat</strong> (40 Marken), plus Ihre BYOK-API-Kosten.</p>

          <h2 id="sample-sizes">Warum Sichtbarkeits-Prozentsätze ohne Stichprobengrößen lügen</h2>
          <p>Das Problem mit KI-Antwortsystemen, das die meisten Sichtbarkeits-Dashboards still übergehen: Sie sind nicht-deterministisch.</p>
          <p>Führen Sie denselben Prompt zweimal in ChatGPT aus, mit demselben Account, fünf Minuten auseinander. Sie können unterschiedliche Marken in der Antwort, unterschiedliches Framing, unterschiedliche Quellenlisten erhalten. <a href="https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/" target="_blank" rel="noopener noreferrer">Eine SparkToro-Studie</a> fand weniger als 1&thinsp;% Überschneidung zwischen ChatGPT und Google AI, die in zwei separaten Antworten auf dieselbe Anfrage dieselbe Markenliste nannten.</p>
          <p>Das ist kein Randfall. So funktionieren diese Systeme &mdash; sie samplen aus Wahrscheinlichkeitsverteilungen, aktualisieren sich kontinuierlich, personalisieren basierend auf Kontext. Jede KI-Sichtbarkeitszahl, die Sie sehen, basiert auf einer Stichprobe von Antworten, nicht einer vollständigen Erhebung.</p>
          <p>Wenn ein Tool Ihnen &bdquo;34&thinsp;% Sichtbarkeit&ldquo; zeigt &mdash; was bedeutet das genau? Haben sie den Prompt einmal ausgeführt? Dreimal? Zwanzig Mal? Ist 34&thinsp;% eine stabile Messung mit schmalem Fehlerbereich, oder ein einzelner Datenpunkt, der überall zwischen 10&thinsp;% und 60&thinsp;% hätte landen können?</p>
          <p>Die meisten Tools sagen es Ihnen nicht. Sie zeigen die Zahl.</p>
          <p>CrunchJunkie führt jeden Prompt mehrfach aus und zeigt Stichprobengröße und Fehlerbereich neben jeder Sichtbarkeitszahl. Die Produktphilosophie ist explizit: Eine einzelne KI-Antwort ist eine Stichprobe, kein Trend. Jede Metrikänderung wird gegen ihren Fehlerbereich abgewogen, bevor sie als handlungsrelevante Bewegung gilt.</p>
          <p>Das spielt für Agenturen die größte Rolle. Wenn Sie einem Kunden KI-Sichtbarkeit berichten und die Zahl um vier Punkte fällt, müssen Sie wissen, ob das ein echtes Signal ist oder Rauschen. Ohne Stichprobengröße und Fehlerbereiche zeigen Sie einem Kunden ein Diagramm, das möglicherweise nichts bedeutet. Mit ihnen können Sie mit Gewissheit sagen, ob sich wirklich etwas bewegt hat.</p>

          <h2 id="follow-up-survival">Eine Metrik, die kein anderes Tool erfasst: Follow-up Survival</h2>
          <p>Überlegen Sie, wie Menschen KI tatsächlich für kommerzielle Entscheidungen nutzen.</p>
          <p>Jemand fragt ChatGPT: <em>&bdquo;Was sind die besten Projektmanagement-Tools für verteilte Teams?&ldquo;</em> Ihre Marke erscheint. Sichtbarkeit: erfasst. Gewonnen.</p>
          <p>Aber die Unterhaltung geht weiter. Die Nachfrage: <em>&bdquo;Welches davon eignet sich am besten für ein Team unter fünfzehn Personen, das nicht pro Nutzer zahlen möchte?&ldquo;</em></p>
          <p>Ihre Marke verschwindet.</p>
          <p>Sie haben die breite Discovery-Anfrage gewonnen und verloren, sobald eine echte Einschränkung angewendet wurde. Das Standard-Sichtbarkeits-Dashboard hat das nie erfasst &mdash; es hat Turn&nbsp;1 gemessen und aufgehört.</p>
          <p>CrunchJunkie nennt das <strong>Follow-up Survival</strong>: eine Multi-Turn-Metrik, die misst, ob eine Empfehlung standhält, wenn ein Käufer seine Frage in derselben Unterhaltung eingrenzt. Die Plattform führt den Discovery-Prompt aus, erfasst, welche Marken erscheinen (Turn&nbsp;1), sendet eine konfigurierte Folgefrage in derselben Unterhaltung (Turn&nbsp;2) und misst, welche Marken die Verfeinerung überstehen.</p>
          <p>Kein anderes Tool in der Kategorie produktisiert das. Es ist als Opt-in-Pilotfeature auf bezahlten Plänen verfügbar und kostet ungefähr doppelt so viel pro Prompt &mdash; weil es zwei Konversations-Turns statt eines benötigt.</p>
          <p>Ein Design-Detail, das wichtig ist: Die Folgefrage wird pro Prompt konfiguriert, nicht generisch angewendet. Ein Narrower, der nach &bdquo;beste Projektmanagement-Tools für verteilte Teams?&ldquo; Sinn ergibt, ist nach &bdquo;beste Espressomaschinen unter &euro;200&ldquo; sinnlos. CrunchJunkie erfordert eine per-Prompt-Folgefrage, bietet einen KI-entworfenen Vorschlag zum Überprüfen und Bearbeiten an, und erfasst den genauen verwendeten Text bei jedem Run als Nachweis &mdash; damit Sie genau wissen, was gefragt wurde, und Ergebnisse über Zeit vergleichen können, weil die Frage konsistent bleibt.</p>
          <p>Wenn Ihre Käufer Multi-Turn-KI-Unterhaltungen zur Recherche nutzen &mdash; und B2B-Käufer tun das zunehmend &mdash; ist das Überleben in Turn&nbsp;2 kommerziell aussagekräftiger als Sichtbarkeit in Turn&nbsp;1.</p>

          <h2 id="geo-audits">GEO-Audits: warum die Evidenzbasis zählt</h2>
          <p>Jedes KI-Sichtbarkeits-Tool enthält etwas, das sich <a href="/de/blog/what-is-a-geo-audit/">GEO-Audit</a> nennt &mdash; eine Diagnose, wie bereit Ihre Website ist, von KI-Engines gecrawlt und zitiert zu werden. Die Qualität dieser Audits variiert enorm, aus einem Grund, der erst offensichtlich wird, wenn man genauer hinsieht.</p>
          <p>Die ehrliche Wahrheit zur KI-Suchoptimierung: Wir haben noch keine jahrzehntelange kontrollierte Evidenzbasis. Wir haben einige Peer-Review-Forschungen, veröffentlichte Dokumentationen von Crawler-Anbietern und viel &bdquo;das könnte helfen&ldquo;-Logik, die niemand tatsächlich gemessen hat. Die guten Audit-Tools sind explizit darüber, in welche Kategorie jeder ihrer Checks fällt. Die schlechten nicht.</p>
          <p>CrunchJunkie strukturiert seinen Audit um eine formale Evidenzleiter:</p>
          <ul>
            <li><strong>Research</strong> &mdash; durch Peer-Review-Messung von Zitatraten-Effekten belegt</li>
            <li><strong>Documented</strong> &mdash; veröffentlichtes Plattformverhalten der Crawler-Anbieter selbst</li>
            <li><strong>Convention</strong> &mdash; entstehende Praxis, noch nicht belegt als von KI-Engines konsumiert</li>
            <li><strong>Heuristic</strong> &mdash; sinnvoller Proxy, kein direkter Nachweis</li>
          </ul>
          <p>Die Gewichtung jedes Checks im Gesamtscore skaliert mit seinem Evidenzlevel. Heuristiken können eine Kategorie nicht dominieren. Convention-basierte Checks tragen bewusst geringere Gewichtung.</p>
          <p>Ein konkretes Beispiel: llms.txt. Das war ein stark gehyptes Thema. CrunchJunkie gibt ihm eine Gewichtung von 5 von 100 im Gesamtscore &mdash; bewusst niedrig. Die quartalsweise Forschungsüberprüfung ergab, dass etwa 97&thinsp;% der veröffentlichten llms.txt-Dateien null Crawler-Anfragen erhalten, und Claude Code ist der einzige bestätigte reale Leser des Standards im Maßstab. <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">Googles eigene Leitlinien</a>, aktualisiert im August 2026, stellen explizit fest, dass Google Search llms.txt ignoriert.</p>
          <p>Ein Audit-Tool, das llms.txt mit 15 oder 20 Punkten bewertet, sagt Ihnen, dass es mehr bedeutet als die Evidenz stützt. Das bläht Ihren Score auf für etwas, das Ihnen wahrscheinlich noch nicht hilft, und begräbt die Checks, die tatsächlich relevant sind.</p>
          <p>Auf der Inhaltsseite werden die Checks mit echtem Gewicht durch die <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer">KDD-2024-Studie &bdquo;GEO: Generative Engine Optimization&ldquo;</a> (Aggarwal et al., Princeton/IIT Delhi) gestützt, die tatsächliche Zitatraten-Effekte gemessen hat. Zitate im Content verbesserten Zitatraten um 27,8&thinsp;%. Belegte Statistiken: +25,9&thinsp;%. Autoritative externe Zitate: +24,9&thinsp;%.</p>
          <p>Der Audit umfasst fünf Kategorien &mdash; Crawler-Zugang (Gewichtung 30), Content-Zugänglichkeit (30), strukturierte Daten (20), technische SEO-Hygiene (15) und llms.txt (5) &mdash; und erzeugt einen 0&ndash;100-Gesamtscore. Diagnostisch, keine Garantie, und ehrlich darüber, was er nicht weiß.</p>

          <h2 id="off-site-citations">Eigene Off-Site-Zitationen</h2>
          <p>Wenn eine KI-Engine Ihre Marke zitiert, zieht sie oft aus Inhalten, die außerhalb Ihrer Hauptdomain leben: einem YouTube-Kanal, einer LinkedIn-Unternehmensseite, einem Substack-Beitrag, einem Reddit-Thread, an dem Sie teilnehmen.</p>
          <p>&bdquo;Brand Radar&ldquo;-Tools aus dem traditionellen SEO lösen das per Web-Index-Matching &mdash; sie crawlen das offene Web und suchen nach Ihrem Markennamen. Das ist breite Abdeckung, aber rauschig: Sie krediten Ihnen Erwähnungen, die Sie nicht kontrollieren, Inhalte, die andere über Sie geschrieben haben, und Markennamen-Verwechslungen.</p>
          <p>CrunchJunkies Off-Site-Zitations-Tracking funktioniert umgekehrt. Sie deklarieren Ihre eigenen Kanäle &mdash; <code>youtube.com/@ihreMarke</code>, <code>linkedin.com/company/ihreMarke</code>, Ihr Substack, Ihr Medium-Handle. Die Plattform schreibt Ihnen eine Zitation nur zu, wenn sie auf einer URL liegt, die einem deklarierten Kanal entspricht, mit handle-präzisem Matching. Ein YouTube-Video eines anderen Erstellers mit Ihrem Markennamen im Titel zählt nicht.</p>
          <p>Die Konsequenz ist eine wesentlich handlungsrelevantere Ansicht. Sie sehen exakt, welche Ihrer eigenen Kanäle KI-Engines für welche Themen verwenden, und wo Sie Lücken haben. Das lässt sich direkt in Content-Investitionsentscheidungen übersetzen: nicht &bdquo;bauen Sie eine LinkedIn-Präsenz auf&ldquo; (die haben Sie vielleicht schon und sie funktioniert), sondern &bdquo;stärken Sie Ihre YouTube-Abdeckung für diesen spezifischen Themencluster&ldquo;.</p>

          <h2 id="cj-limits">Wann CrunchJunkie nicht die richtige Wahl ist</h2>
          <p>Ein Tool-Leitfaden, der das nicht sagt, ist ein Verkaufspitch.</p>
          <p><strong>Bei einer Marke mit knappem Budget:</strong> LLM Pulse unterbietet CrunchJunkie auf Einzelmarken-Niveau. Wenn Sie ein kleines Programm betreiben, keine Multi-Engine-Abdeckung brauchen und mit einem Prompt-Limit leben können, ist es neben CrunchJunkie einen Blick wert.</p>
          <p><strong>Wenn Sie SEO und KI-Sichtbarkeit in einer Plattform benötigen:</strong> Semrush&rsquo;s AI Visibility Toolkit sitzt in einer vollständigen SEO-Suite &mdash; Keyword-Recherche, Backlink-Analyse, Rank-Tracking, Site-Audits. Wenn Ihr Team bereits in Semrush arbeitet und KI-Sichtbarkeit ohne ein separates Tool möchte, hat diese Integration echten Wert, auch zum höheren Per-Domain-Preis. CrunchJunkie macht kein traditionelles Rank-Tracking. Es ist zweckgebaut für KI-Sichtbarkeit.</p>
          <p><strong>Wenn Sie alles vollständig verwaltet möchten:</strong> Das BYOK-Modell erfordert das Einrichten von API-Keys bei einzelnen Anbietern. Für Teams, die eine vollständig verwaltete Option bevorzugen, bietet CrunchJunkie das ebenfalls an &mdash; der Preisvorteil ist aber am größten bei BYOK.</p>

          <h2 id="summary">Das ehrliche Fazit</h2>
          <p>Die meisten KI-Sichtbarkeits-Tools 2026 wurden für den Einzelmarken-Fall entwickelt und passen ihre Preise und Architektur unbeholfen für Multi-Marken-Nutzung an. Engine-Gating und Prompt-Limits sind die Art, wie sie Kosten verwalten, die sie nicht transparent an Sie weitergeben können.</p>
          <p>CrunchJunkie wurde mit Multi-Marken-Tracking als First-Class-Case gebaut. BYOK bedeutet, Ihre Kosten skalieren linear und transparent mit der tatsächlichen Nutzung. Kein Prompt-Rationieren, keine Engine-Add-ons, keine Kontakt-Sales-Mauer ab fünf Kunden.</p>
          <p>Was es in der Praxis unterscheidet, hat weniger mit Feature-Listen zu tun und mehr mit intellektueller Ehrlichkeit: Follow-up Survival, weil Empfehlungsbeständigkeit unter Verfeinerung kommerziell wichtiger ist als Headline-Sichtbarkeit; Stichprobengrößen und Fehlerbereiche, weil KI-Antworten volatil sind; ein evidenzbasierter Audit, weil nicht alles, was Anbieter als &bdquo;GEO-Signal&ldquo; bezeichnen, tatsächlich gemessen wurde.</p>
          <p>Das sind die Dinge, die bestimmen, ob Sie darauf eine Reporting-Praxis aufbauen können &mdash; und ob das, was Sie Kunden zeigen, etwas bedeutet.</p>
          <p style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6a6a6a' }}>Preise verifiziert August 2026 von öffentlichen Preisseiten und für CrunchJunkie direkt aus dem Produktionscode. Mitbewerberpreise gegen öffentliche Preisseiten verifiziert, wo zugänglich; andernfalls aus sekundären Quellen. Preise in dieser Kategorie ändern sich häufig &mdash; vor dem Abschluss prüfen.</p>
          <p>Möchten Sie wissen, wie Ihre Marke in der KI-Suche abschneidet? <a href="/de/contact/?topic=geo-audit">Schildern Sie uns kurz Ihre Situation</a> &mdash; wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
          <p>Weiterlesen: <a href="/de/blog/what-is-a-geo-audit/">Was ist ein GEO-Audit?</a> &middot; <a href="/de/blog/perplexity-visibility/">Perplexity-Sichtbarkeit</a> &middot; <a href="/de/services/ai-visibility/">Unser KI-Sichtbarkeits-Service</a></p>
        </>
      ),
    },
    'google-ads-ai-disclosure-label': {
      title: 'Google Ads KI-Label — Ursachen, Risiken und Reaktion',
      toc: ['Das Label in der Praxis', 'Wie Performance Max es ausgelöst hat', 'Drei Wege zum Label', 'Die CTR-Frage', 'Was jetzt im Konto zu tun ist', 'Häufige Fragen'],
      faqs: [
        {
          q: 'Was ist das Google-Ads-Label „KI-Offenlegung: Anzeige wurde mit KI erstellt oder bearbeitet"?',
          a: 'Eine Offenlegung, die Google zu Anzeigen hinzufügt, bei denen KI an der Erstellung oder Bearbeitung beteiligt war. Seit dem 9. Juli 2026 erscheint es unter der Anzeigenbeschreibung in Google Suche, YouTube und Discover — sichtbar ohne jede Interaktion. Der Rollout folgt auf Artikel 50 der EU-KI-Verordnung zu Transparenzpflichten bei KI-generierten Inhalten, der am 2. August 2026 in Kraft getreten ist.',
        },
        {
          q: 'Löst Performance Max das KI-Offenlegungslabel automatisch aus?',
          a: 'Ja, in den meisten Standardkonfigurationen. Wenn „Automatisch erstellte Assets" aktiviert ist oder Sie AI Max for Search nutzen, generiert Googles eigene KI Anzeigenvarianten, die das Label automatisch auslösen. Das Label selbst lässt sich nicht deaktivieren — nur die Asset-Generierung, die es verursacht.',
        },
        {
          q: 'Kann ich das KI-Offenlegungslabel in Google Ads deaktivieren?',
          a: 'Nicht direkt. Automatisch erstellte Assets zu deaktivieren und KI-Tools für Anzeigeninhalte zu meiden, beseitigt den Mechanismus, der das Label auslöst — aber es gibt keine Einstellung, die das Label unterdrückt, während KI-generierte Inhalte weiterhin geschaltet werden. Den KI-Inhalt zu entfernen ist der einzig wirksame Weg.',
        },
        {
          q: 'Wirkt sich das KI-Offenlegungslabel auf die Klickrate aus?',
          a: 'Es gibt noch keine statistisch belastbaren Daten. Die prominente Platzierung befindet sich scheinbar in einer Testphase, und das Label ist zu neu, um Schlüsse daraus zu ziehen. Der Bereich, den es am ehesten zu beobachten gilt, sind Branchen mit hohem Vertrauensbedarf — Gesundheit, Finanzen, Rechtsberatung — wo „KI-erstellt" als Reibungssignal wirken könnte. Die praktische Maßnahme: CTR nach Kampagnentyp und Zeitraum ab dem Erscheinen des Labels auf Ihren SERPs segmentieren.',
        },
        {
          q: 'Was ist der Unterschied zwischen automatischer und selbst deklarierter KI-Offenlegung in Google Ads?',
          a: 'Die automatische Offenlegung wird von Google vergeben, wenn eigene KI-Tools — automatisch erstellte Assets, Performance-Max-Asset-Generierung, AI Max for Search — Ihren Inhalt bearbeitet haben. Die selbst deklarierte Offenlegung ist eine neue Kontoeinstellung für Werbetreibende, die externe KI-Tools (ChatGPT, Claude, Bildgeneratoren) eingesetzt und die Ergebnisse in Google Ads hochgeladen haben. Google hat erklärt, Selbstdeklarationen nicht unabhängig zu überprüfen.',
        },
      ],
      prose: (
        <>
          <p>Eine Suche nach <em>Rezept online einlösen</em> &mdash; letzte Woche. Zwei gesponserte Ergebnisse. Beides Online-Apotheken. Beide mit einer Zeile, die vor einem Monat noch nicht dort stand: <strong>„KI-Offenlegung: Anzeige wurde mit KI erstellt oder bearbeitet."</strong> Nicht hinter dem Drei-Punkte-Menü. Direkt zwischen Anzeigentext und Sternebewertung &mdash; sichtbar für alle, die gerade entscheiden, wo sie ihr Rezept einlösen.</p>
          <p>DoktorABC. Shop Apotheke. Zusammen über 1,2 Millionen Bewertungen, beide über 4,7 Sterne. Und beide jetzt öffentlich als KI-erstellt gekennzeichnet &mdash; ausgerechnet in einer Branche, in der jedes Vertrauenssignal, das ein Werbetreibender über Jahre aufgebaut hat, neben einem kurzen Hinweis auf die Entstehung seiner Anzeigentexte steht.</p>
          <p>Das Interessante daran ist nicht, dass diese Apotheken etwas Ungewöhnliches getan haben. Es ist interessant, weil sie es höchstwahrscheinlich gar nicht getan haben &mdash; jedenfalls nicht bewusst. Sie machen das, was Google seit zwei Jahren empfiehlt: Performance Max laufen lassen, Asset-Generierung aktivieren, den Algorithmus optimieren lassen. Nicht sie haben entschieden, ihre Anzeigen mit dem KI-Label zu versehen. Performance Max hat das für sie getan.</p>

          <h2>Das Label in der Praxis</h2>
          <p>Google hat das KI-Offenlegungslabel am 9. Juli 2026 offiziell eingeführt &mdash; für Suchanzeigen, YouTube und Discover. Die Ankündigung klang zunächst unspektakulär: ein neuer Eintrag im Anzeigendetailbereich, sichtbar für Nutzer, die auf das Drei-Punkte-Menü tippen.</p>
          <p>Was der Screenshot oben zeigt, geht einen Schritt weiter: das Label erscheint direkt in der Anzeigenlistung, ohne jede Nutzerinteraktion. Das ist prominenter als das im Juli Angekündigte &mdash; und entspricht exakt dem Testmuster, das Google üblicherweise vor einer breiteren Einführung fährt. Wer das Label heute so sieht, weiß, wo das endet.</p>
          <p>Der regulatorische Hintergrund ist eindeutig. Artikel 50 der EU-KI-Verordnung &mdash; mit Transparenzpflichten für KI-generierte Inhalte &mdash; trat am 2. August 2026 in Kraft. Drei Wochen später erscheinen gut sichtbare KI-Labels auf europäischen SERPs. Google bewegt sich in Richtung EU-Compliance erfahrungsgemäß vor der formalen Durchsetzung, nicht danach.</p>

          <h2>Wie Performance Max es ausgelöst hat</h2>
          <p>Die meisten Kommentare zu diesem Thema behandeln die KI-Offenlegung so, als ob Werbetreibende aktiv entschieden hätten, KI-Tools zu nutzen. Für die Mehrzahl größerer Google-Ads-Konten ist die genauere Beschreibung: Sie haben sich für Performance Max entschieden &mdash; und Performance Max hat sich für KI entschieden.</p>
          <p>Die Asset-Generierungskette funktioniert so: Sie liefern Headlines, Beschreibungen, Bilder und eine URL. Google nutzt sie, um Anzeigenkombinationen zu bauen. Was viele dabei nicht bemerkt haben: Google generiert darüber hinaus <em>zusätzliche</em> Assets &mdash; neue Headline-Varianten, andere Beschreibungsformulierungen &mdash; auf Basis Ihrer Landingpage, testet sie und schaltet sie, ohne Ihre ausdrückliche Freigabe. Diese Funktion heißt „Automatisch erstellte Assets": ein separater Schalter, in vielen Konfigurationen standardmäßig aktiviert.</p>
          <p>Haben diese automatisch erstellten Assets auf Ihren Kampagnen gelaufen, gilt das Label. Sie haben die Vorgaben geliefert. Google hat die Texte geschrieben. Google legt das jetzt offen.</p>
          <p>AI Max for Search geht noch weiter: Es schreibt die Ziel-URL passend zur Suchabsicht um, generiert Keyword-Kombinationen über Ihre eingereichte Liste hinaus und erstellt Anzeigenvarianten, die Sie nicht verfasst haben. In den richtigen Konten bringt es echte Performance-Vorteile. Strukturell ist es KI-erstellte Werbung.</p>

          <h2>Drei Wege zum Label</h2>
          <p>Nicht alle Anzeigen mit dem Label haben es auf demselben Weg bekommen &mdash; das macht einen Unterschied für die Reaktion.</p>
          <p><strong>Weg 1 &mdash; Googles eigene KI-Tools.</strong> Automatisch erstellte Assets, Performance-Max-Asset-Generierung, AI Max for Search. Das Label wird automatisch vergeben, ohne Zutun des Werbetreibenden. Das ist der Hauptweg für die meisten Konten &mdash; und der, den die meisten nicht bewusst gewählt haben.</p>
          <p><strong>Weg 2 &mdash; Externe KI, selbst deklariert.</strong> Wer Anzeigentexte mit ChatGPT, Claude, Midjourney oder anderen externen Tools erstellt und dann in Google Ads hochgeladen hat, soll das über eine neue Kontoeinstellung selbst melden. Google hat ausdrücklich angekündigt, Selbstdeklarationen nicht zu überprüfen. Das ist Compliance auf Vertrauensbasis.</p>
          <p><strong>Weg 3 &mdash; Vollständig manuell verfasst.</strong> Jede Headline, jede Beschreibung ohne KI-Unterstützung geschrieben, automatisch erstellte Assets deaktiviert. Kein Label. Auf großen Konten, die Performance Max im Maßstab betreiben, ist das eine zunehmend seltene Position.</p>
          <p>Es gibt eine vierte Kategorie, für die noch keine klare Linie gezogen ist: Werbetreibende, die KI informell eingesetzt haben &mdash; Texte durch ein Grammatik-Tool laufen lassen, um erste Ideen gebeten und dann umgeschrieben, oder KI-Bildtools für eine Größenanpassung genutzt. Google hat diese Grenze noch nicht definiert.</p>

          <h2>Die CTR-Frage</h2>
          <p>Ehrliche Antwort: Es gibt noch keine belastbaren Daten. Die prominente Platzierung ist ein laufender Test, das Label ist zu neu, und die normale CTR-Varianz macht frühe Signale unlesbar. Was immer jetzt behauptet zu wissen, was das KI-Label mit der Klickrate macht, ist Spekulation &mdash; keine Messung.</p>
          <p>Zwei Szenarien sind gleichermaßen plausibel &mdash; und wahrscheinlich beide in unterschiedlichen Kontexten wahr. Das erste: Das Label verschwindet im visuellen Rauschen, so wie „Gesponsert" es getan hat. Wenn eine Kennzeichnung universell wird, hört sie auf, informativ zu sein. Relevante, KI-gekennzeichnete Anzeigen werden weiter besser klicken als irrelevante ohne Label. Wenn alle es tragen, hat niemand einen relativen Nachteil.</p>
          <p>Das zweite: In Branchen, in denen Vertrauen die Kaufentscheidung treibt &mdash; Gesundheit, Rechtsberatung, Finanzdienstleistungen &mdash; erzeugt „KI-erstellt" genau im falschen Moment eine Reibung. Die Apotheken-Screenshots illustrieren das am deutlichsten. Wer entscheidet, wo er sein Rezept einlöst, trifft eine Gesundheitsentscheidung. „KI-Offenlegung: Anzeige wurde mit KI erstellt oder bearbeitet" wirkt dort anders als unter einer Anzeige für Sportschuhe.</p>
          <p>Der wettbewerbsrelevante Aspekt: Wenn alle Mitbewerber auf einem SERP das Label tragen, stehen alle gleich. Wenn nur einer es hat &mdash; oder nur einer es nicht hat &mdash; wird das auf einer Seite sichtbar, auf der Nutzer aktiv vergleichen. Beobachten Sie Ihre konkreten SERPs auf Ihren wichtigsten Suchanfragen. Allgemeine Branchendaten sagen Ihnen nicht, was in Ihrem Konto passiert.</p>

          <h2>Was jetzt im Konto zu tun ist</h2>
          <p><strong>Herausfinden, was wirklich geschaltet wird.</strong> In Google Ads unter Assets &rarr; Alle Assets die Spalte „Quelle" filtern. Assets, die als „Automatisch erstellt" markiert sind, hat Google generiert. Wenn die seit Monaten laufen, ohne dass jemand sie angeschaut hat, ist das ein guter Moment &mdash; nicht nur wegen des Labels, sondern weil Anzeigentexte zu schalten, die man nie geprüft hat, eine eigene Content-Frage ist.</p>
          <p><strong>Den Schalter prüfen.</strong> Auf Kampagnenebene unter Einstellungen lassen sich automatisch erstellte Assets deaktivieren. Das stoppt die Generierung neuer KI-Assets für diese Kampagne. Bereits erstellte automatische Assets können weiter ausgeliefert werden, bis sie einzeln geprüft und verwaltet werden. Eine Massenentfernungs-Funktion gibt es nicht.</p>
          <p><strong>Jetzt eine CTR-Baseline aufbauen.</strong> Die zwei Wochen vor dem ersten Erscheinen des Labels auf Ihren SERPs in Ihrem Reporting-Tool festhalten. Nach Kampagnentyp segmentieren und innerhalb von Suche nach Anfragetyp &mdash; Markenbegriffe, Mitbewerberbegriffe, generische Suche. Nach vier Wochen Post-Label-Daten vergleichen. Das ist das früheste belastbare Signal, das verfügbar sein wird.</p>
          <p><strong>Keine bewährte Struktur auf Basis unbewiesener Risiken abbauen.</strong> Der Performance-Fall für KI-Asset-Generierung ist etabliert: mehr Kombinationen getestet, mehr Suchabsichten abgedeckt, in der Regel mehr Reichweite bei gleichem Budget. Der Performance-Schaden durch das Label ist es nicht. Kampagnenstruktur unter Ankündigungsdruck umzubauen, ohne eigene Daten als Grundlage, führt in der Regel zu schlechteren Ergebnissen als abzuwarten. Wenn Sie in einer Branche mit echten Vertrauensbedenken tätig sind, kann sich das verschieben &mdash; aber es sollte sich verschieben, wenn Ihre CTR-Daten das nahelegen, nicht wenn ein Artikel das tut.</p>

          <div className="prose-callout">
            <div className="prose-callout-kicker">Fazit</div>
            <p>Das Label ist real und da. Seine kommerzielle Wirkung auf Ihr konkretes Konto ist noch nicht belegt. Die richtige Reaktion ist saubere Messung: wissen, welche Assets KI-generiert sind, diese Woche eine CTR-Baseline aufbauen und strukturelle Kampagnenentscheidungen erst treffen, wenn die eigenen Daten eine Grundlage liefern.</p>
          </div>

          <p>Wenn Sie nicht sicher sind, welche Ihrer Kampagnen das Label trägt oder was in Ihrem Konto gerade passiert, <a href="/de/contact/?topic=google-ads-ai-label">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
          <p>Weiterlesen: <a href="/de/blog/performance-max-2026/">Performance Max 2026 &mdash; die Einstellungen, die wir zuerst ändern</a> &middot; <a href="/de/blog/performance-max-bidding-change-august-2026/">Die Gebotsänderung vom 17. August &mdash; was jetzt zu tun ist</a></p>
        </>
      ),
    },
    'what-is-a-geo-audit': {
      toc: ['Nicht einfach ein SEO-Audit', 'Was ein GEO-Audit umfasst', 'Die GEO-Audit-Checkliste', 'Tools', 'Wie oft ist sinnvoll?', 'Häufige Fragen'],
      faqs: [
        { q: 'Was ist ein GEO-Audit?', a: 'Ein GEO-Audit ist eine strukturierte Analyse der Art und Weise, wie KI-Plattformen Ihre Marke darstellen — was sie sagen, wenn man nach Ihnen fragt, wie genau sie Sie beschreiben, welche Quellen sie verwenden und wo Ihre Marke in KI-generierten Antworten erscheint oder eben nicht erscheint.' },
        { q: 'Was ist der Unterschied zwischen einem GEO-Audit und einem SEO-Audit?', a: 'Ein SEO-Audit prüft, ob Suchmaschinen Ihre Seiten finden, verstehen und ranken können. Ein GEO-Audit prüft, was KI-Plattformen über Ihre Marke glauben und wie genau sie sie darstellen. SEO-Audits sind primär technisch; GEO-Audits drehen sich primär um Autorität und Repräsentation.' },
        { q: 'Wie führe ich einen GEO-Audit durch?', a: 'Über fünf Ebenen: Crawlbarkeit (können KI-Bots Ihre Website erreichen), Content-Struktur (sind Ihre wichtigsten Fakten zitierbar), Entity-Abdeckung (sind Sie eine konsistente Entität im gesamten Web), KI-Repräsentation (was sagen ChatGPT, Perplexity und Gemini tatsächlich über Sie) und Wettbewerbspositionierung (wo erscheinen Mitbewerber, wo Sie es nicht tun).' },
        { q: 'Was umfasst eine GEO-Audit-Checkliste?', a: 'Eine GEO-Audit-Checkliste deckt technischen Zugang (robots.txt, strukturierte Daten, JS-Rendering), Content-Zitierbarkeit (Definitionsparagraphen, spezifische Aussagen, FAQ-Inhalte), Autoritätssignale (Drittquellen-Erwähnungen, konsistente NAP, Schema-Markup) und KI-Repräsentation ab — geprüft über ChatGPT, Perplexity, Claude und Gemini.' },
        { q: 'Wie oft sollte ich einen GEO-Audit durchführen?', a: 'Einen gründlichen Audit vierteljährlich, einen leichteren KI-Repräsentations-Check monatlich. Führen Sie sofort einen durch nach einem Rebranding, einer Marktexpansion oder wesentlichen Content-Änderungen.' },
        { q: 'Welche Tools brauche ich für einen GEO-Audit?', a: 'Die technische Ebene lässt sich mit gängigen SEO-Tools prüfen (Screaming Frog, Search Console) plus manuellen Checks. Die KI-Repräsentationsebene erfordert das manuelle Ausführen von Prompts über ChatGPT, Perplexity, Claude und Gemini. Für das laufende Monitoring trackt crunchjunkie (crunchjunkie.io) KI-Zitierungshäufigkeit und Brand-Sentiment automatisch.' },
        { q: 'Kann ich einen GEO-Audit selbst durchführen?', a: 'Ja. Den Audit selbst kann man ohne Agentur machen. Die Herausforderung liegt darin, zu wissen, wonach man auf der KI-Repräsentationsebene sucht, eine Vergleichsbasis zu haben und ein Programm, um auf die Befunde zu reagieren. Der Audit ist der einfache Teil; die Umsetzung ist die eigentliche Arbeit.' },
      ],
      prose: (
        <>
          <p>Die meisten Marken, mit denen wir sprechen, haben keine Ahnung, was ChatGPT über sie sagt. Manche haben nie gefragt. Manche haben einmal gefragt, eine vage Antwort bekommen und dann weitergemacht. Sehr wenige haben systematisch gefragt &mdash; plattformübergreifend, an verschiedenen Tagen, mit unterschiedlichen Fragetypen &mdash; und dokumentiert, was sie herausgefunden haben.</p>
          <p>Genau dieser systematische Prozess ist ein GEO-Audit. Er ist keine technische Checkliste. Er ist eine strukturierte Untersuchung, wie KI-Plattformen Ihre Marke darstellen &mdash; und was Sie konkret dagegen tun können.</p>

          <h2>Nicht einfach ein SEO-Audit &mdash; eine andere Frage</h2>
          <p>SEO-Audits beantworten: <em>Können Suchmaschinen Ihre Seiten finden und ranken?</em> Sie decken Crawlbarkeit, Seitenladezeit, Canonical-Tags und interne Verlinkung ab. Dieses Fundament spielt auch im GEO eine Rolle &mdash; eine Seite, die nicht gecrawlt werden kann, wird auch nicht zitiert &mdash; aber es ist der Boden, nicht die Decke.</p>
          <p>Ein GEO-Audit beantwortet eine andere Frage: <em>Was glauben KI-Plattformen über Ihre Marke &mdash; und stimmt davon irgendetwas?</em> Sie können eine technisch perfekt optimierte Website haben und trotzdem in der KI-Suche unsichtbar sein, weil KI-Modelle keine Seiten ranken. Sie synthetisieren Antworten aus Quellen, die sie für glaubwürdig und belastbar halten. Wenn diese Quellen nicht genug enthalten, das Sie erwähnt, sind Sie nicht in der Unterhaltung.</p>
          <p>Die Lücke zwischen SEO- und GEO-Performance kann erheblich sein. Marken mit hoher Domain-Autorität haben manchmal schwache KI-Zitierungsraten. Marken mit kleineren Websites, aber echter Drittquellen-Abdeckung, übertreffen ihren SEO-Rang in KI-Antworten manchmal deutlich. Es ist ein Autoritätsproblem, kein Optimierungsproblem.</p>

          <h2>Was ein GEO-Audit umfasst</h2>
          <p>Ein gründlicher GEO-Audit läuft über fünf Ebenen. Bei den meisten Marken gibt es auf mindestens zwei Ebenen Handlungsbedarf.</p>

          <h3>1. Crawlbarkeit und KI-Zugang</h3>
          <p>Zunächst: Können KI-Crawler Ihre Website überhaupt erreichen? Prüfen Sie <code>robots.txt</code> auf Sperren für die relevanten Agents &mdash; <code>GPTBot</code>, <code>ClaudeBot</code>, <code>OAI-SearchBot</code>, <code>Claude-SearchBot</code>, <code>PerplexityBot</code>, <code>Google-Extended</code>.</p>
          <p>Der entscheidende Unterschied: <em>Training-Crawler</em> (GPTBot, ClaudeBot, Google-Extended) füttern Modell-Trainingsdatensätze. <em>Retrieval-Bots</em> (OAI-SearchBot, PerplexityBot, Claude-SearchBot) ermöglichen Live-Zitate in Echtzeit-Antworten. Das Sperren von Retrieval-Bots unterdrückt aktive Zitate. Für die meisten Marken ist das Sperren beider Typen ein Fehler &mdash; Ihre Inhalte in den Trainingsdaten prägen, was Modelle über Sie denken.</p>

          <h3>2. Content-Struktur und Zitierbarkeit</h3>
          <p>KI-Modelle zitieren, was sich zitieren lässt. Vage Markensprache wird nicht zitiert, spezifische faktische Aussagen schon. &bdquo;Wir sind eine führende Digitalagentur&ldquo; ist ein Satz, den kein Modell wiederholen wird. &bdquo;pmax ist eine Performance-Marketing-Agentur in Calvi&agrave;, Mallorca, gegründet 2023&ldquo; schon.</p>
          <p>Prüfen Sie Ihre Inhalte auf: klare Definitionsparagraphen, die beschreiben, was Sie tun und für wen; spezifische, belegte Aussagen; FAQ-Inhalte zu Fragen, die Menschen tatsächlich stellen; und konsistente Sprache, die Ihre Marke eindeutig macht. Prüfen Sie außerdem: Wird kritischer Content JavaScript-abhängig gerendert? KI-Crawler führen JavaScript weitgehend nicht aus. Wenn Ihre wichtigsten Service-Beschreibungen in einer React-Komponente stecken, die den Browser zum Rendern braucht, sind sie möglicherweise für jeden KI-Crawler unsichtbar.</p>

          <h3>3. Entity-Abdeckung</h3>
          <p>Eine Entität ist ein klar identifizierbares Ding, über das KI-Modelle schlussfolgern können. Ihr Ziel ist es, eine gut definierte Entität zu werden &mdash; nicht nur eine Website &mdash; durch konsistente, bestätigte Präsenz im gesamten Web.</p>
          <p>Prüfen Sie: strukturierte Daten (schema.org) auf Ihrer Website &mdash; Organisation, LocalBusiness, Service, Person für Gründer; konsistente NAP (Name, Adresse, Telefon) in Verzeichnissen; Erwähnungen in Publikationen, denen Ihre Branche vertraut. Widersprüchliche Informationen über Kanäle hinweg &mdash; verschiedene Gründungsjahre, unterschiedliche Service-Beschreibungen auf verschiedenen Plattformen &mdash; stört die Entitätsauflösung und erhöht das Halluzinationsrisiko.</p>

          <h3>4. KI-Repräsentations-Audit</h3>
          <p>Die aufschlussreichste Ebene &mdash; und die, die die meisten Marken überspringen. Öffnen Sie ChatGPT, Perplexity, Claude und Gemini und führen Sie eine Reihe von Prompts aus:</p>
          <ul>
            <li>Ihren Markennamen direkt: <em>&bdquo;Was ist [Marke]?&ldquo;</em></li>
            <li>Kategorie-Anfragen: <em>&bdquo;Beste [Leistung] in [Ort]&ldquo;</em></li>
            <li>Wettbewerbsvergleiche: <em>&bdquo;Vergleiche [Marke] und [Mitbewerber]&ldquo;</em></li>
            <li>Problemorientierte Fragen, die Ihre Kunden tatsächlich stellen</li>
          </ul>
          <p>Dokumentieren Sie alles: ob Sie erscheinen, wie Sie beschrieben werden, welche Fakten zitiert werden, woher die Informationen stammen, ob Mitbewerber erscheinen, wo Sie es nicht tun. Das ist Ihre Ausgangslinie. Sie wiederholen das in drei Monaten, um Entwicklungen zu messen.</p>
          <p>Häufige Befunde: falsches Gründungsjahr; eine verworrene Beschreibung, die Ihre Marke mit einem anderen Unternehmen vermischt; ein Mitbewerber, der in jeder Antwort erscheint, wo Sie sein sollten; oder schlicht keine Erwähnung, auf keiner Plattform, in keinem Kontext.</p>

          <h3>5. Wettbewerbspositionierung</h3>
          <p>Wo erscheinen Mitbewerber in Antworten, wo Sie es nicht tun? Auf welche Quellen greift die KI zurück, wenn sie Ihre Kategorie beschreibt? Welche Marken vergleicht sie mit Ihnen &mdash; und wie charakterisiert sie den Unterschied?</p>
          <p>Das zeigt, wie die KI die Wettbewerbslandschaft sieht &mdash; was manchmal erheblich von Ihrer eigenen Wahrnehmung abweicht. Es zeigt auch, welche Inhaltstypen und Drittquellen das meiste Gewicht haben und wo Authority-Building-Maßnahmen zuerst ansetzen sollten.</p>

          <h2>Die GEO-Audit-Checkliste</h2>
          <p>Arbeiten Sie diese der Reihe nach durch. Die technische Ebene ist am schnellsten zu beheben; die Autoritätsebene braucht am längsten; auf der KI-Repräsentationsebene sehen Sie die Ergebnisse.</p>

          <h3>Technisch</h3>
          <ul>
            <li>robots.txt erlaubt die wichtigsten KI-Retrieval-Bots: OAI-SearchBot, PerplexityBot, Claude-SearchBot, ChatGPT-User, Claude-User</li>
            <li>Keine JavaScript-Abhängigkeit für kritische Inhalte (Service-Beschreibungen, Über-uns-Seite, wichtige Fakten)</li>
            <li>Strukturierte Daten vorhanden und gültig: Organisation oder LocalBusiness, Service, FAQPage, Person für Gründer</li>
            <li>Canonical-Tags korrekt implementiert; Sitemap eingereicht und aktuell</li>
          </ul>

          <h3>Content</h3>
          <ul>
            <li>Jede Kernleistung hat mindestens einen klaren, zitierbaren Definitionsparagraphen</li>
            <li>Die Markenbeschreibung ist konsistent in Name, Standort, Gründungsjahr und Leistungen über alle eigenen Seiten</li>
            <li>FAQ-Inhalte beantworten Fragen, die Menschen tatsächlich stellen &mdash; nicht Fragen, die Sie sich wünschen</li>
            <li>Aussagen sind spezifisch und nachprüfbar, nicht generisch (&bdquo;die beste&ldquo;, &bdquo;führend&ldquo;, &bdquo;innovativ&ldquo;)</li>
          </ul>

          <h3>Autorität</h3>
          <ul>
            <li>Marke in mindestens drei bis fünf seriösen Drittquellen in den letzten 12 Monaten erwähnt</li>
            <li>Konsistente Unternehmensdaten in Google Business Profile, LinkedIn, Branchenverzeichnissen</li>
            <li>Schema-Markup identifiziert Marke, Gründer, Gründungsjahr, Standort und Leistungen korrekt</li>
            <li>Keine widersprüchlichen Informationen über eigene und Drittkanäle hinweg</li>
          </ul>

          <h3>KI-Repräsentation</h3>
          <ul>
            <li>Marke erscheint in KI-Antworten auf direkte Markenname-Anfragen</li>
            <li>Marke wird korrekt beschrieben: richtiges Gründungsjahr, Leistungen, Standort, Team</li>
            <li>Marke erscheint in Kategorie-Anfragen, die für das Unternehmen relevant sind</li>
            <li>Keine signifikanten Halluzinationen oder Mitbewerber-Verwechslungen</li>
            <li>Alle Ergebnisse mit Datum dokumentiert für künftige Vergleiche</li>
          </ul>

          <h2>Tools</h2>
          <p>Die meiste technische Ebene lässt sich mit gängigen SEO-Tools prüfen &mdash; Screaming Frog für Crawlbarkeit, Search Console für Indexierung, Googles Rich Results Test für strukturierte Daten. Kein Spezial-Tool für das Fundament erforderlich.</p>
          <p>Die KI-Repräsentationsebene kennt keine Abkürzung. Sie müssen die Prompts selbst ausführen &mdash; über mehrere Plattformen, an mehreren Tagen. KI-Antworten variieren je nach Sitzung, Standort und Frageformulierung. Ein einzelner Snapshot kann in die Irre führen.</p>
          <p>Für das laufende Tracking nutzen wir <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">crunchjunkie</a> &mdash; eine KI-Sichtbarkeitsplattform, die Zitierungshäufigkeit, Share of Voice über Plattformen und Brand-Sentiment in KI-generierten Antworten überwacht. Es ist das nächste Äquivalent zu Search Console für die KI-Suche. Wir binden es in jeden <a href="/de/services/visibility-engineering/">Visibility-Engineering</a>-Retainer ein, den wir betreuen.</p>

          <h2>Wie oft ist sinnvoll?</h2>
          <p>KI-Suche ist kein stabiles Umfeld. Modelle werden aktualisiert, Zitierverhalten ändert sich, neue Plattformen entstehen. Für die meisten Unternehmen: ein gründlicher GEO-Audit vierteljährlich, ein leichterer KI-Repräsentations-Check monatlich.</p>
          <p>Führen Sie sofort einen durch, wenn Sie kürzlich rebranded haben, in einen neuen Markt expandiert sind, eine wesentliche neue Leistung gelauncht haben oder ein Mitbewerber zuletzt von sich reden gemacht hat. Die KI-Landschaft ist eine Momentaufnahme des Webs zu einem bestimmten Zeitpunkt. Hat sich das Web verändert, muss die Aufnahme aktualisiert werden.</p>

          <div className="prose-callout">
            <span className="prose-callout-kicker">Was ein Audit nicht tut</span>
            <p>Ein Audit zeigt, was falsch läuft. Er behebt es nicht von selbst. Für die meisten Marken liegt der Engpass nicht im Technischen &mdash; sondern in der Autorität. Es gibt nicht genug glaubwürdige externe Bestätigung dessen, was die Marke tut und wem sie dient. Das zu beheben braucht Zeit: digitale PR, strukturierten Content, konsistente Entity-Signale, verdiente Erwähnungen. Sie wirken langsam &mdash; und kumulieren sich.</p>
            <p>Deshalb sollte sich ein gut durchgeführter GEO-Audit ein wenig unangenehm anfühlen. Wenn alles gut aussieht, haben Sie wahrscheinlich nicht genau genug hingeschaut.</p>
          </div>

          <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=geo-audit">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespräch: 30 Minuten, auf unsere Rechnung.</p>
        </>
      ),
    },
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
      title: 'Perplexity-Sichtbarkeit verbessern — ein Praxisleitfaden',
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
          <p>Führen Sie dieselben 20 Prompts jeden Monat erneut aus. Verfolgen Sie, welche Antworten Sie nun nennen und welche noch nicht. <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">CrunchJunkie</a> automatisiert das über mehrere Maschinen hinweg &mdash; oder machen Sie es manuell in einer Tabelle. Was Sie nicht messen, können Sie nicht verbessern.</p>

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
          <li><strong>Menschen nutzen KI zum Recherchieren vor dem Kauf.</strong> Untersuchungen legen nahe, dass die Mehrheit der Kaufentscheidungen heute durch mindestens eine KI-Antwortoberfläche läuft.</li>
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
        <p>Führen Sie dieselben 20 Prompts jeden Monat erneut aus. <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">CrunchJunkie</a> kann das automatisieren — oder machen Sie es manuell. Was Sie nicht messen, können Sie nicht verbessern.</p>
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
        <p>Weiterführende Links: unsere <a href="/de/seo-agentur-mallorca/">SEO-Leistung</a>, unser <a href="/de/industries/ecommerce/">E-Commerce-Marketing-Playbook</a> — und <a href="/de/blog/how-to-get-mentioned-by-chatgpt/">wie strukturierte Daten auch ChatGPT-Nennungen erzeugen</a>.</p>
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
    'free-website-design': {
      title: 'Wir bauen Ihre Website kostenlos neu. Das ist unser Deal.',
      deck: 'Wir gestalten und bauen Websites ohne Vorabkosten – im Gegenzug übernehmen wir Ihre Paid-Media-Kampagnen. Der vollständige Deal: wie er funktioniert, für wen er passt und wie ein echter Neuaufbau in der Praxis aussieht.',
      toc: [
        'Warum wir das anbieten',
        'Wie der Deal konkret aussieht',
        'Wer infrage kommt',
        'Ein echter Neuaufbau: Portals Properties',
        'Was Sie behalten',
        'So starten Sie',
      ],
      faqs: [
        {
          q: 'Was ist im kostenlosen Webdesign von pmax enthalten?',
          a: 'Alles vom Konzept bis zum Launch: UX-Design, Informationsarchitektur, Textkonzept, Entwicklung, Conversion-Optimierung und Livegang. Die Website wird auf einem modernen, schnellen Stack mit Core-Web-Vitals-Konformität von Anfang an gebaut. Sie sind uneingeschränkter Eigentümer der fertigen Website – keine proprietäre Plattform, keine laufende Lizenzgebühr, kein Lock-in.',
        },
        {
          q: 'Gibt es ein Mindestwerbebudget, um für den kostenlosen Website-Aufbau infrage zu kommen?',
          a: 'Das besprechen wir von Fall zu Fall. Der Deal funktioniert typischerweise für Unternehmen, die monatlich mindestens 1.500 € für bezahlte Werbung ausgeben – auf einer beliebigen Plattform: Google Ads, Meta, TikTok, LinkedIn, Pinterest, Outbrain oder anderen – oder für Unternehmen mit einem konkreten, budgetierten Plan dafür. Darunter rechnet sich der Deal für keine Seite.',
        },
        {
          q: 'Wem gehört die Website, nachdem pmax sie gebaut hat?',
          a: 'Ihnen – uneingeschränkt. Domain, Quellcode, Hosting-Anbieter und alle Assets gehören Ihnen ab dem ersten Tag nach dem Launch. Wenn Sie das Werbemanagement beenden, geht die Website mit Ihnen. Wir bauen nicht auf proprietären Plattformen und nutzen den Website-Besitz nicht als Bindungsinstrument.',
        },
        {
          q: 'Wie lange dauert ein kostenloser Website-Neuaufbau?',
          a: 'Typischerweise sechs bis zehn Wochen vom Strategie-Kick-off bis zum Launch. Die wichtigste Variable ist die Bereitschaft Ihrer Inhalte – je schneller Sie Fotos, Texte und Produkt- oder Dienstleistungsinformationen liefern, desto schneller kommen wir voran.',
        },
        {
          q: 'Funktioniert der Deal auch, wenn wir derzeit keine Werbung schalten?',
          a: 'Manchmal. Wenn Sie einen konkreten Plan haben, mit bezahlter Werbung zu starten, und das Budget dafür bereitstellen, lohnt sich das Gespräch. Was nicht funktioniert: Anfragen von Unternehmen ohne aktuelles oder geplantes Werbebudget – der Deal ist auf eine Paid-Media-Management-Beziehung ausgelegt, nicht auf einen reinen Website-Auftrag.',
        },
      ],
      prose: (
        <>
          <p>Die meisten Angebote f&uuml;r Webdesign beginnen bei 3.000 &euro;. Einen bestehenden Auftritt neu aufzubauen &mdash; Plattform wechseln, Struktur &uuml;berarbeiten, Texte neu schreiben &mdash; kostet in der Regel mehr. Wir machen das kostenlos.</p>
          <p>Das ist kein Lockangebot mit einem Haken im Kleingedruckten. Der Deal ist einfach, und die Erkl&auml;rung auch.</p>

          <h2 id="why-we-offer-this">Warum wir das anbieten</h2>
          <p>Wir betreiben Paid-Media-Kampagnen f&uuml;r Unternehmen in ganz Europa &mdash; Google Ads, Meta, TikTok, LinkedIn, Pinterest, Outbrain und mehr. Der gr&ouml;&szlig;te Engpass f&uuml;r die Kampagnenleistung ist meistens nicht die Werbung selbst. Es ist die Website.</p>
          <p>Eine sauber strukturierte Kampagne, die kaufbereiten Traffic auf eine langsame, un&uuml;bersichtliche oder schlecht konvertierende Seite schickt, verbrennt den Gro&szlig;teil des Budgets, bevor sie wirken kann. Wir haben genug dieser Situationen geerbt, um zu wissen, was sie kosten: typischerweise 40&ndash;70 % des m&ouml;glichen Conversion-Volumens &mdash; weg, bevor ein Formular abgeschickt oder ein Produkt in den Warenkorb gelegt wurde.</p>
          <p>Wir k&ouml;nnen die Ergebnisse eines Kunden nicht verbessern, ohne die Seite zu optimieren, auf der die Anzeigen landen. Und einen neuen Kunden zu bitten, 5.000 &euro; f&uuml;r einen Website-Neuaufbau auszugeben, bevor er einen einzigen Monat mit einer neuen Agentur erlebt hat, ist ein schwieriges Gespr&auml;ch &mdash; verst&auml;ndlicherweise.</p>
          <p>Also haben wir die Struktur ge&auml;ndert. Wir &uuml;bernehmen den Website-Aufbau. Sie beauftragen uns mit der Verwaltung Ihrer Werbung.</p>

          <h2 id="what-the-deal-looks-like">Wie der Deal konkret aussieht</h2>
          <p>Keine propriet&auml;re Plattform. Keine Lock-in-Klausel. Kein &bdquo;kostenlos&ldquo;, das sich nach sechs Monaten in eine monatliche Geb&uuml;hr verwandelt. Die Mechanik:</p>
          <p><strong>Wir gestalten und bauen Ihre Website.</strong> Das umfasst UX-Strategie, Informationsarchitektur, conversion-optimiertes Seitendesign, Textkonzept, Entwicklung und Launch. Gebaut auf einem modernen, schnellen Stack &mdash; Core-Web-Vitals-Konformit&auml;t vom ersten Commit an. Sie erhalten die fertige Website und sind ab Tag eins uneingeschr&auml;nkter Eigent&uuml;mer.</p>
          <p><strong>Sie beauftragen uns mit der Verwaltung Ihrer Paid-Media-Kampagnen.</strong> Die Mindestlaufzeit besprechen wir von Fall zu Fall. Der Deal ist sinnvoll f&uuml;r Unternehmen mit einem bestehenden Werbebudget &mdash; typischerweise ab 1.500 &euro;/Monat aktiver Ausgaben, oder mit einem konkreten, budgetierten Plan. Wir &uuml;bernehmen die Kan&auml;le, die f&uuml;r Ihr Unternehmen Sinn ergeben: Google Ads, Meta, TikTok, LinkedIn, Pinterest, Outbrain oder eine Kombination davon.</p>
          <p><strong>Wir arbeiten an beidem gemeinsam.</strong> Werbung und Website sind keine getrennten Projekte. Creative-Briefings beeinflussen Landing-Page-Entscheidungen. Seitenperformance-Daten flie&szlig;en in die Bidding-Strategie ein. Texte, die in Search Ads getestet wurden, verbessern die Seitenheadlines. Beide Seiten n&auml;hren sich gegenseitig auf eine Art, die eine Web-Agentur und eine Media-Agentur, die separat arbeiten, nie replizieren k&ouml;nnen.</p>

          <h2 id="who-qualifies">Wer infrage kommt</h2>
          <p>Sie passen wahrscheinlich, wenn:</p>
          <ul>
            <li>Sie Paid Advertising intern oder &uuml;ber eine bestehende Agentur schalten und bei Cost per Lead oder ROAS schlechter abschneiden als erwartet &mdash; auf einer beliebigen Plattform: Google, Meta, TikTok, LinkedIn, Pinterest, Outbrain oder anderen</li>
            <li>Sie 1.500&ndash;25.000 &euro;/Monat f&uuml;r bezahlte Werbung ausgeben</li>
            <li>Ihre Website &auml;lter als drei Jahre ist oder nicht mit Conversion-Fokus gebaut wurde</li>
            <li>Sie in einem Bereich mit realen Transaktionswerten t&auml;tig sind: Immobilien, Hotellerie, professionelle Dienstleistungen, E-Commerce, Erneuerbare Energien, Marine</li>
          </ul>
          <p>Weniger wahrscheinlich passen Sie, wenn kein aktuelles oder geplantes Werbebudget vorhanden ist, wenn Sie ausschlie&szlig;lich nach einer Web-Agentur suchen oder wenn Ihr Unternehmen noch keine Ums&auml;tze erzielt. Der Deal f&uuml;r den kostenlosen <a href="/de/services/conversion-design/">Website-Neuaufbau</a> ist auf eine Paid-Media-Management-Beziehung ausgelegt &mdash; ohne diese ergibt er f&uuml;r keine Seite Sinn.</p>
          <p>Wir arbeiten mit Unternehmen in Deutschland, &Ouml;sterreich, der Schweiz, Spanien, dem Vereinigten K&ouml;nigreich und der gesamten EU.</p>

          <h2 id="portals-properties">Ein echter Neuaufbau: Portals Properties</h2>
          <p>Portals Properties ist eine Boutique-Immobilienagentur in Puerto Portals, Mallorca, spezialisiert auf Immobilienverkauf und Langzeitvermietungen f&uuml;r britische K&auml;ufer. Als sie zu uns kamen &mdash; Q4 2025 &mdash; gaben sie 6.200 &pound;/Monat f&uuml;r Google Ads aus und generierten rund 28 qualifizierte Anfragen pro Monat. Cost per qualifiziertem Lead: 221 &pound;.</p>
          <p>Die Kampagnen waren ordentlich strukturiert. Das Problem war die Website.</p>
          <p>Gebaut 2019. Core-Web-Vitals-Score: 42 auf Mobilger&auml;ten. Die Immobiliensuche erforderte vier Klicks, bevor ein Kontaktformular erschien. Das Titelbild der Startseite war ein Stockfoto. Das Anfrage-Formular hatte elf Felder, darunter drei, die dieselbe Frage auf verschiedene Weisen stellten.</p>
          <p>Wir haben die Website in acht Wochen neu aufgebaut &mdash; parallel zur &Uuml;bernahme des Ad-Accounts. Die neue Website l&auml;dt in unter 1,5 Sekunden auf Mobilger&auml;ten (Core Web Vitals: 91), zeigt auf der Startseite direkt eine Immobiliensuche und ein zweifeldiges Anfrage-Formular, ersetzt Stockfotos durch eigene Team-Aufnahmen und ein 90-Sekunden-Property-Tour-Video und zeigt echte Verkaufspreise sowie Kundenstimmen auf jeder Objektseite &mdash; weil Mallorca-Immobilienk&auml;ufer ihre Agentur genauso bewusst w&auml;hlen wie die Immobilie selbst.</p>
          <p>Nach 14 Wochen mit der neuen Website und unserem Google-Ads-Management:</p>
          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Kennzahl</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Vorher</th>
                  <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Nachher (14 Wochen)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Qualifizierte Leads / Monat', before: '28', after: '71 (+154 %)' },
                  { metric: 'Cost per qualifiziertem Lead', before: '£221', after: '£94' },
                  { metric: 'Google Ads ROAS', before: '1,9×', after: '4,6×' },
                  { metric: 'Core Web Vitals – Mobil', before: '42 / 100', after: '91 / 100' },
                  { metric: 'Organische Formular-Einsendungen / Monat', before: '11', after: '21' },
                ].map(row => (
                  <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.before}</td>
                    <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0', fontWeight: 700 }}>{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Das Werbebudget blieb unver&auml;ndert. Was sich &auml;nderte, war, wo der Traffic ankam &mdash; und was er dort vorfand.</p>

          <h2 id="what-you-keep">Was Sie behalten</h2>
          <p>Die Website geh&ouml;rt Ihnen. Uneingeschr&auml;nkt. Domain, Quellcode, Hosting-Entscheidungen, alle Assets &mdash; alles Ihres ab Tag eins. Wenn Sie das Werbeverh&auml;ltnis beenden, geht die Website mit Ihnen, intakt.</p>
          <p>Dasselbe gilt f&uuml;r Ihre Werbekonten. Ihr Google-Ads-Konto verbleibt unter Ihrer E-Mail-Adresse. Ihr Meta Business Manager geh&ouml;rt Ihnen. Wir arbeiten in beiden als Manager, nicht als Kontoinhaber. Kampagnenhistorie, Zielgruppendaten und Creative-Bibliotheken geh&ouml;ren Ihrem Unternehmen, nicht uns.</p>
          <p>Wir sprechen das so direkt an, weil das Gegenteil &mdash; Agenturen, die Ihre Konten und Websites in Eigenregie halten &mdash; keine Ausnahme ist und f&uuml;r Unternehmen, die sp&auml;ter wechseln oder nachverhandeln m&ouml;chten, ernsthafte Konsequenzen hat. Wir haben genug solcher Situationen geerbt, um den Schaden zu kennen. Wir haben es zum Grundsatz gemacht, es genau anders zu halten.</p>

          <h2 id="how-to-start">So starten Sie</h2>
          <p>Erz&auml;hlen Sie uns von Ihrem aktuellen Werbebudget, Ihrer Website und dem Ergebnis, das Sie anstreben. Das erste Gespr&auml;ch dauert 30 Minuten und geht auf uns.</p>
          <p>Wir sagen Ihnen klar, ob Ihre Situation f&uuml;r den kostenlosen Website-Aufbau passt &mdash; und wenn nicht, wie die ehrliche Alternative aussieht. Wir nehmen nicht jede Anfrage an, und wir werden Ihnen auch nichts anderes erz&auml;hlen.</p>
          <h2>Bereit f&uuml;r das Gespr&auml;ch?</h2>
          <p>Falls Ihnen das oben Genannte bekannt vorkommt, <a href="/de/contact/?topic=free-website-design">schildern Sie uns kurz Ihre Situation</a> und wir melden uns innerhalb eines Werktages. Das erste Gespr&auml;ch: 30 Minuten, auf unsere Rechnung.</p>
        </>
      ),
    },
  } as Record<string, LocalizedBlogDetail>,
}

export type DeTranslations = typeof de
