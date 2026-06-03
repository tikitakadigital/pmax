import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/FaqList'
import SectionHead from '@/components/SectionHead'
import PromoBlock from '@/components/PromoBlock'
import { breadcrumb, faqPage } from '@/lib/schema'
import { cases } from '@/lib/content/cases'

export const metadata: Metadata = {
  title: 'SEO Agentur Mallorca | pmax — Lokale & mehrsprachige SEO aus Calvià',
  description: 'pmax ist eine SEO Agentur auf Mallorca. Wir bringen Unternehmen in vier Sprachen nach oben — Deutsch, Spanisch, Englisch und Katalanisch — mit technischem SEO, lokaler Suche und KI-Sichtbarkeit. Sitz in Calvià.',
  alternates: {
    canonical: 'https://pmax.online/de/seo-agentur-mallorca/',
    languages: {
      en: 'https://pmax.online/seo-company-mallorca/',
      de: 'https://pmax.online/de/seo-agentur-mallorca/',
      es: 'https://pmax.online/es/agencia-seo-mallorca/',
      'x-default': 'https://pmax.online/seo-company-mallorca/',
    },
  },
  openGraph: {
    title: 'SEO Agentur Mallorca | pmax — Lokale & mehrsprachige SEO aus Calvià',
    description: 'pmax ist eine SEO Agentur auf Mallorca. Wir bringen Unternehmen in vier Sprachen nach oben — Deutsch, Spanisch, Englisch und Katalanisch. Sitz in Calvià.',
    url: 'https://pmax.online/de/seo-agentur-mallorca/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agentur Mallorca | pmax — Lokale & mehrsprachige SEO aus Calvià',
    description: 'pmax ist eine SEO Agentur auf Mallorca. Wir bringen Unternehmen in vier Sprachen nach oben — mit technischem SEO, lokaler Suche und KI-Sichtbarkeit.',
    site: '@pmaxonline',
  },
  other: {
    'geo.region': 'ES-PM',
    'geo.placename': 'Calvia, Mallorca, Spanien',
    'geo.position': '39.5639;2.5089',
    'ICBM': '39.5639, 2.5089',
  },
}

const faqs = [
  {
    q: 'Was macht eine SEO Agentur auf Mallorca anders als eine Agentur auf dem Festland?',
    a: 'Mallorca ist ein Vier-Sprachen-Markt — Deutsch, Spanisch, Englisch und Katalanisch. Ein Unternehmen, das nur in einer Sprache rankt, ist für die meisten seiner Kunden unsichtbar. Eine SEO Agentur, die die Insel versteht, baut und rankt Seiten in jeder relevanten Sprache mit korrektem hreflang, plant die Saisonalität des Tourismus ein und behandelt Palma, Calvià, Andratx und Pollença als getrennte lokale Märkte.',
  },
  {
    q: 'Wie lange dauert SEO für ein Unternehmen auf Mallorca?',
    a: 'Technische Korrekturen können lokale Rankings innerhalb weniger Wochen bewegen. Ein richtig optimiertes Google-Unternehmensprofil mit Bewertungen kann innerhalb von ein bis zwei Monaten ins Local Pack gelangen. Nachhaltiges organisches Wachstum durch Inhalte zeigt sich meist ab Monat sechs. Wer ein garantiertes Top-1-Ranking schneller verspricht, lügt entweder oder tut etwas, das später bestraft wird.',
  },
  {
    q: 'Bringt ihr Unternehmen auch auf Deutsch nach oben, nicht nur auf Spanisch?',
    a: 'Ja. Wir arbeiten auf Deutsch, Spanisch, Englisch und Katalanisch. Für die meisten Unternehmen auf Mallorca ist der deutschsprachige Markt die am stärksten unterschätzte SEO-Chance der Insel, weil kaum eine lokale Agentur richtige deutschsprachige Seiten baut. Wir tun es — übersetzt und optimiert, niemals maschinell übersetzt.',
  },
  {
    q: 'Wie wichtig ist ein Google-Unternehmensprofil für das Ranking auf Mallorca?',
    a: 'Für lokale Suchanfragen sind das Google-Unternehmensprofil und das lokale Kartenpaket etwa die halbe Miete. Ein verifiziertes, vollständig optimiertes Profil mit echten Bewertungen, die Ihre Leistung erwähnen, bringt Sie oft schneller nach oben als jede On-Page-Änderung. Wir richten es ein und betreuen es als Teil jeder lokalen SEO-Zusammenarbeit.',
  },
  {
    q: 'Wo auf Mallorca sitzt pmax?',
    a: 'Wir sitzen in Calvià im Südwesten Mallorcas, zwanzig Minuten von Palma entfernt. Wir betreuen Kunden auf der ganzen Insel und remote Marken in ganz Europa.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://pmax.online/de/seo-agentur-mallorca/#localbusiness',
  name: 'pmax — SEO Agentur Mallorca',
  image: 'https://pmax.online/og-image.jpg',
  url: 'https://pmax.online/de/seo-agentur-mallorca/',
  telephone: '+34871242160',
  email: 'hello@pmax.online',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Cordova, 5',
    addressLocality: 'Calvià',
    addressRegion: 'Illes Balears',
    postalCode: '07184',
    addressCountry: 'ES',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 39.5639, longitude: 2.5089 },
  areaServed: [
    { '@type': 'Place', name: 'Mallorca' },
    { '@type': 'Place', name: 'Palma de Mallorca' },
    { '@type': 'Place', name: 'Calvià' },
    { '@type': 'Place', name: 'Andratx' },
    { '@type': 'Place', name: 'Pollença' },
    { '@type': 'Place', name: 'Balearische Inseln' },
  ],
  knowsLanguage: ['de', 'es', 'en', 'ca'],
  serviceType: 'Suchmaschinenoptimierung',
  provider: { '@type': 'Organization', '@id': 'https://pmax.online/#org', name: 'pmax' },
  sameAs: ['https://www.linkedin.com/company/pmax-online-s-l/'],
}

const jsonLd = [
  breadcrumb([
    { name: 'Home', url: 'https://pmax.online/' },
    { name: 'SEO Agentur Mallorca', url: 'https://pmax.online/de/seo-agentur-mallorca/' },
  ]),
  localBusinessSchema,
  faqPage(faqs),
]

export default function SeoAgenturMallorcaPage() {
  const ledxpress = cases.find(c => c.slug === 'ledxpress')!

  return (
    <>
      {/* Patch html[lang] — root layout defaults to "en" */}
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang='de'` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Brotkrumen">
              <Link href="/de">Home</Link><span className="sep">/</span>
              <span>SEO Agentur Mallorca</span>
            </nav>
            <span className="page-intro-eyebrow">SEO · Mallorca · Calvià</span>
            <h1 className="page-intro-title">SEO Agentur<br />auf Mallorca.</h1>
            <p className="page-intro-deck">
              Die meisten Ihrer Kunden suchen nicht in einer Sprache. Wir bringen Unternehmen auf
              den Balearen in Deutsch, Spanisch, Englisch und Katalanisch nach oben — mit technischem
              SEO, lokaler Suche und KI-Sichtbarkeit. Sitz in Calvià, tätig auf der ganzen Insel.
            </p>
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">Sprachen, in denen wir Mallorca-Unternehmen ranken</span>
            </li>
            <li className="stat">
              <span className="stat-num">+218%</span>
              <span className="stat-label">Median organische Klicks (Nicht-Marke) in 12 Monaten</span>
            </li>
            <li className="stat">
              <span className="stat-num">Calvià</span>
              <span className="stat-label">unser Sitz — 20 Minuten von Palma</span>
            </li>
            <li className="stat">
              <span className="stat-num">€€</span>
              <span className="stat-label">Festpreis-Retainer, nie % vom Mediabudget</span>
            </li>
          </ul>
        </section>

        <section className="section">
          <div className="container">
            <SectionHead
              kicker="das Inselproblem"
              title={<>SEO auf Mallorca ist ein<br />Vier-Sprachen-Problem.</>}
            />
            <div className="prose reveal">
              <p>
                Das ist der Punkt, den die meisten SEO Agenturen auf Mallorca stillschweigend
                falsch machen: Sie optimieren in einer Sprache und halten die Sache für erledigt.
                Aber die Kundschaft auf dieser Insel funktioniert nicht so.
              </p>
              <p>
                Ein Klempner in Palma wird von Einheimischen als <em>&bdquo;fontanero Palma&ldquo;</em> gesucht,
                von den deutschen Residenten, die einen riesigen Teil der Kaufkraft der Insel
                ausmachen, als <em>&bdquo;Klempner Mallorca&ldquo;</em>, von britischen und
                skandinavischen Auswanderern als <em>&bdquo;plumber Mallorca&ldquo;</em> — und
                gelegentlich auch auf Katalanisch. Vier Suchanfragen, vier Sprachen, vier Sätze
                von Wettbewerbern, für dasselbe Unternehmen. Wer nur auf Spanisch rankt, ist für
                die meisten Menschen mit Kaufkraft unsichtbar.
              </p>
              <p>
                Für deutschsprachige Unternehmen und für alle, die den deutschen Markt auf Mallorca
                erreichen wollen, ist das die größte und am wenigsten genutzte Chance der Insel —
                und kaum jemand baut richtig dafür. Wir schon.
              </p>

              <h2>Was wir konkret tun</h2>

              <h3>1. In jeder relevanten Sprache bauen und ranken</h3>
              <p>
                Echte, sprachspezifische Seiten auf Deutsch, Spanisch, Englisch und Katalanisch —
                geschrieben und optimiert, niemals maschinell übersetzt — mit korrekt implementiertem
                hreflang, damit Google die richtige Seite an den richtigen Suchenden ausspielt.
                Besonders der deutschsprachige Markt ist weit offen, weil so wenige lokale Agenturen
                dafür bauen.
              </p>

              <h3>2. Das Google-Unternehmensprofil und das Local Pack gewinnen</h3>
              <p>
                Für eine Suche wie <em>&bdquo;SEO Agentur Mallorca&ldquo;</em> oder{' '}
                <em>&bdquo;Restaurant Port d&apos;Andratx&ldquo;</em> ist das Kartenpaket etwa die
                halbe Miete. Wir verifizieren und optimieren Ihr Google-Unternehmensprofil
                vollständig, bauen ein echtes Bewertungsprogramm auf und halten Ihre NAP-Daten
                (Name, Adresse, Telefon) über alle Verzeichnisse hinweg konsistent — die Signale,
                die lokale Rankings wirklich bewegen.
              </p>

              <h3>3. Die Insel als die vielen lokalen Märkte behandeln, die sie ist</h3>
              <p>
                Palma, Calvià, Andratx, Pollença, Alcúdia — das sind eigenständige lokale Märkte
                mit eigenständigem Wettbewerb. Wir bauen lokale Relevanz für die Orte auf, die Sie
                tatsächlich bedienen, statt einer vagen &bdquo;Mallorca&ldquo;-Seite, die nirgendwo
                rankt.
              </p>

              <h3>4. Für die Saison planen</h3>
              <p>
                Die Suchnachfrage auf Mallorca ist brutal saisonal. Ein Villa-Vermieter und ein
                Steuerberater haben gegenläufige Kurven. Wir modellieren die Saisonalität Ihrer
                Branche und sorgen dafür, dass Ihre Rankings und Inhalte <em>vor</em> dem
                Nachfragehoch stehen — nicht hinterher.
              </p>

              <h3>5. Die technischen Grundlagen, dann KI-Sichtbarkeit</h3>
              <p>
                Crawling, Indexierung, Core Web Vitals, Schema, interne Verlinkung — die
                unspektakuläre Technik, von der alles andere abhängt. Dann die neuere Arbeit der{' '}
                <Link href="/de/services/ai-visibility">KI-Sichtbarkeit</Link>: dafür sorgen, dass
                ChatGPT, Perplexity und Googles KI-Übersichten Ihr Unternehmen empfehlen, wenn
                jemand nach einer Firma auf Mallorca fragt.
              </p>

              <div className="prose-callout">
                <div className="prose-callout-kicker">Die ehrliche Version</div>
                <p>
                  SEO ist keine Zauberei und nicht sofort wirksam. Technische Korrekturen bewegen
                  sich in Wochen; ein Google-Unternehmensprofil kann in ein bis zwei Monaten ins
                  Local Pack; Inhalte verzinsen sich ab etwa Monat sechs. Wer Ihnen ein garantiertes
                  Top-1-Ranking für nächste Woche verspricht, lügt entweder oder bringt Sie in
                  Gefahr. Wir sagen lieber die Wahrheit und behalten Sie fünf Jahre.
                </p>
              </div>

              <h2>Mit wem wir auf der Insel arbeiten</h2>
              <p>
                Hotellerie und Villenvermietung, Immobilienbüros, Restaurants, Kliniken und
                Zahnarztpraxen, Einzelhandel und Dienstleister, Charter- und Marineunternehmen
                sowie lokale E-Commerce-Marken, die von Mallorca aus nach ganz Europa verkaufen.
                Wenn Ihre Kunden Sie über die Suche finden — in welcher Sprache auch immer —
                können wir helfen.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="faq-h">
          <div className="container">
            <SectionHead kicker="FAQ" title={<span id="faq-h">Häufige Fragen.</span>} />
            <FaqList items={faqs} />
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <SectionHead kicker="Referenz" title="Aus dem Archiv." />
          <ol className="stream reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stream-item">
              <span className="stream-stamp">{ledxpress.stamp}</span>
              <Link href={`/de/cases/${ledxpress.slug}`} className={`stream-card ${ledxpress.variant}`}>
                <div>
                  <span className="stream-kicker">Case Study</span>
                  <h3 className="stream-head">LEDXpress — +365% organischer Umsatz in 14 Monaten</h3>
                  <p className="stream-deck">{ledxpress.deck}</p>
                  <div className="stream-meta">
                    {ledxpress.meta.map(m => <span key={m}>{m}</span>)}
                  </div>
                </div>
                <div className="stream-result">
                  <span className="num">{ledxpress.result.num}</span>
                  <span className="label">{ledxpress.result.label}</span>
                </div>
              </Link>
            </li>
          </ol>
        </section>

        <PromoBlock
          eyebrow="Kostenloses 30-Min-SEO-Audit"
          headline={<>Wissen Sie, wo Sie auf Mallorca<br />wirklich ranken?</>}
          deck="Geben Sie uns Lesezugriff und sagen Sie uns, in welchen Sprachen Ihre Kunden suchen — wir senden Ihnen eine einseitige Diagnose mit drei konkreten Dingen, die Sie dieses Quartal beheben sollten. Kein Verkaufsdruck, keine Präsentation."
          ctaHref="/contact"
          ctaLabel="Audit anfragen"
          secondaryHref="/de/services/seo"
          secondaryLabel="Unser SEO-Angebot →"
        />

      </main>
      <Footer locale="de" />
    </>
  )
}
