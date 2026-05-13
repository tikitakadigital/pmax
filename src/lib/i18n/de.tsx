import type { ReactNode } from 'react'

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
    metaTitle: 'Digitalagentur Mallorca — Google Ads, SEO & KI-Suchbarkeit | pmax',
    metaDesc: 'Google Ads, Meta, LinkedIn, SEO und KI-Suchbarkeit — von Mallorca aus für Marken in ganz Europa. Monatliche Festpreise, keine prozentualen Mediagebühren.',
    rotator: ['Wachstum.', 'Sichtbarkeit.', 'Kunden.', 'Performance.'],
    tagline: 'Eine Digitalagentur, die auf messbare Ergebnisse baut.',
    deckEyebrow: 'Was wir tun',
    deckText: (
      <>
        Wir helfen Marken beim Online-Wachstum. Paid Ads, SEO und die neue Welt der{' '}
        <em>KI-Suche</em> — aufeinander abgestimmt, sauber getrackt und auf Deutsch erklärt.
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
      { step: '01', word: 'Zuhören', time: '2 Wo.', desc: 'Zuerst verstehen wir das Geschäft. Dann die Daten, dann die Kanäle. Präsentationen kommen zuletzt.' },
      { step: '02', word: 'Aufräumen', time: '6 Wo.', desc: 'Tracking, Feeds, strukturierte Daten, Grundlagen. Die unspektakuläre Arbeit, von der alles andere abhängt.' },
      { step: '03', word: 'Wachsen', time: '12 Wo.+', desc: 'Kampagnen skalieren, Creatives finden ihren Rhythmus, das Dashboard beginnt die Wahrheit zu sagen.' },
      { step: '04', word: 'Absichern', time: '∞', desc: 'SEO, KI-Suche, Markenschutz. Stille Arbeit, die sich über Jahre hinweg auszahlt.' },
    ],
    journalKicker: '04 — Journal',
    journalTitle: 'Was wir gerade schreiben.',
    journalAside: 'Notizen aus der Praxis — geschrieben für Menschen, die Marketing machen, nicht für Suchroboter.',
    journalCta: 'Alle Artikel →',
    journalRead: 'Artikel lesen',
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
    metaDesc: 'Senior-Marketing-Team in Calvià, Mallorca. Google Ads, SEO und KI-Suchbarkeit für Marken in Europa. Festpreise, kein Agentur-Overhead.',
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
        Wir betreiben{' '}<a href="/de/services/google-ads">Google Ads</a>,{' '}
        <a href="/de/services/paid-social">Paid Social</a>,{' '}
        <a href="/de/services/seo">SEO</a>,{' '}
        <a href="/de/services/ai-visibility">KI-Suchbarkeit</a>,{' '}
        <a href="/de/services/analytics">Analytics</a>,{' '}
        <a href="/de/services/conversion-design">Conversion Design</a> und{' '}
        <a href="/de/services/creative">Creative Production</a> — sieben Leistungen, ein System.{' '}
        <a href="/de/services">Alle Leistungen ansehen →</a>
      </>
    ),
    casesText: <>Ausgewählte <a href="/de/cases">Referenzen</a> finden Sie in unserem Arbeitsarchiv — zehn Projekte mit echten Zahlen.</>,
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
        a: 'pmax bietet sieben Kernleistungen: KI-Suchbarkeit (GEO), Google Ads (Search, Shopping, Performance Max, YouTube), Paid Social (Meta, TikTok, LinkedIn, Microsoft Ads), SEO (technisch, inhaltlich, digital PR, lokal), Conversion Design (CRO und A/B-Tests), Analytics & Tracking (GA4, server-seitiges GTM, Consent Mode v2, CRM-basierte Offline-Conversions) und Creative Production (Performance-Creatives, Landingpages, UGC-Video in hoher Kadenz).',
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
      { slug: 'ai-visibility', num: '01', badge: 'Neu 2026', title: 'KI-Suchbarkeit (GEO)', deck: 'Immer mehr Menschen fragen ChatGPT, Perplexity oder Gemini, bevor sie Google öffnen. Wir sorgen dafür, dass Ihre Marke die Empfehlung ist — durch technische Grundlagen, strukturierte Daten und Inhalte, die KI-Modelle tatsächlich lesen können.', tags: ['Entities', 'Schema', 'llms.txt', 'Citation-Tracking'], variant: 'is-mint', featured: true },
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
      metaTitle: 'KI-Suchbarkeit (GEO) — ChatGPT & Perplexity | pmax',
      metaDesc: 'Zitiert werden von ChatGPT, Perplexity, Gemini und Google AI Overviews. Wir bauen Schema, Content und Trust-Signale, die KI-Zitate für Ihre Marke generieren.',
      headline: <>KI-Such&shy;barkeit <em>(GEO)</em>.</>,
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
          <p>Für Mallorca-Unternehmen und DACH-Marken, die internationale Kunden ansprechen wollen, bauen wir mehrsprachige SEO-Strukturen, die auf Englisch, Deutsch und Spanisch ranken — mit korrektem hreflang-Setup, getrennten Sitemaps und inhaltlich eigenständigen Seiten pro Sprache.</p>
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
      prose: (<><p>Der Immobilienmarkt auf Mallorca ist ein Käufermarkt mit langen Entscheidungszyklen und internationalen Kunden. Ein deutsches Paar, das ein Ferienhaus sucht, verhält sich anders als ein spanischer Investor, der ein Renditeobjekt sucht — beide brauchen andere Botschaften, andere Kanäle und andere Nachfolgeketten im CRM.</p><p>Wir bauen Systeme, die jeden dieser Käufertypen ansprechen: deutschsprachige Google-Kampagnen, die auf Kaufabsichtsbegriffe wie „Finca kaufen Mallorca" ausgerichtet sind. SEO-Strukturen, die für lokale und internationale Suchen ranken. CRM-basierte Nurture-Sequenzen, die Interessenten über Wochen warm halten. Und Tracking, das Anfragen nach Lead-Qualität bewertet, nicht nur nach Volumen.</p></>),
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
    metaDesc: '18 praxisnahe Leitfäden zu Google Ads, Meta, SEO, KI-Suchbarkeit und Analytics. Geschrieben von den Menschen, die die Kampagnen betreiben.',
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
      { slug: 'how-to-get-mentioned-by-chatgpt', title: 'So wird Ihr Unternehmen von ChatGPT, Perplexity und Gemini empfohlen', deck: 'Ein verständlicher Leitfaden zur KI-Suchbarkeit 2026 — was es ist, warum es wichtig ist und fünf Maßnahmen für diesen Monat.' },
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
}

export type DeTranslations = typeof de
