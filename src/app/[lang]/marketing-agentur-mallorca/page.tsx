import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/FaqList'
import SectionHead from '@/components/SectionHead'
import PromoBlock from '@/components/PromoBlock'
import { breadcrumb, faqPage } from '@/lib/schema'
import { cases } from '@/lib/content/cases'

export function generateStaticParams() {
  return [{ lang: 'de' }]
}

export const metadata: Metadata = {
  title: 'Marketing Agentur Mallorca | pmax',
  description: 'Performance-Marketing-Agentur in Calvià, Mallorca. Google Ads, Meta, SEO und KI-Suche für deutsch- und englischsprachige Unternehmen. Feste monatliche Pauschale, kein Prozentsatz des Werbebudgets.',
  robots: 'index,follow,max-image-preview:large',
  alternates: {
    canonical: 'https://pmax.online/de/marketing-agentur-mallorca/',
    languages: {
      en: 'https://pmax.online/marketing-agency-mallorca/',
      de: 'https://pmax.online/de/marketing-agentur-mallorca/',
      es: 'https://pmax.online/es/agencia-de-marketing-mallorca/',
      'x-default': 'https://pmax.online/marketing-agency-mallorca/',
    },
  },
  openGraph: {
    title: 'Marketing Agentur auf Mallorca — pmax',
    description: 'Performance-Marketing-Agentur in Calvià, Mallorca. Google Ads, Meta, SEO und KI-Suche für deutsch- und englischsprachige Unternehmen. Feste Pauschale.',
    url: 'https://pmax.online/de/marketing-agentur-mallorca/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Agentur Mallorca — pmax',
    description: 'Performance-Marketing-Agentur in Calvià, Mallorca. Google Ads, Meta, SEO und KI-Suche. Feste monatliche Pauschale.',
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
    q: 'Ist pmax eine Full-Service-Marketing-Agentur?',
    a: 'Wir decken den gesamten Stack ab — Paid Ads, SEO, KI-Suche, CRO, Analytics und Kreation — führen ihn aber performance-first, mit dem, was Umsatz bringt, voran.',
  },
  {
    q: 'Was kostet eine Marketing-Agentur auf Mallorca?',
    a: 'Retainer auf der Insel liegen je nach Umfang meist bei 500–3.000 € im Monat. pmax arbeitet mit einer festen monatlichen Pauschale, vorab vereinbart, nie als Prozentsatz des Werbebudgets.',
  },
  {
    q: 'Arbeiten Sie mit deutschsprachigen Unternehmen auf Mallorca?',
    a: 'Ja — Kampagnen, Reporting und Kommunikation auf Deutsch, von unserem Standort in Calvià aus.',
  },
  {
    q: 'Können Sie Marketing auch auf Englisch und Spanisch umsetzen?',
    a: 'Deutsch und Englisch standardmäßig, Spanisch dort, wo es Ihren Kunden hilft.',
  },
  {
    q: 'Wo auf Mallorca sind Sie ansässig?',
    a: 'In Calvià, Mallorca — für die Insel, die Balearen und Marken in ganz Europa.',
  },
  {
    q: 'Arbeiten Sie nur mit Unternehmen auf Mallorca?',
    a: 'Nein. Ansässig auf Mallorca, tätig für Marken in ganz Europa.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://pmax.online/de/marketing-agentur-mallorca/#localbusiness',
  name: 'pmax — Marketing Agentur Mallorca',
  image: 'https://pmax.online/og-image.jpg',
  url: 'https://pmax.online/de/marketing-agentur-mallorca/',
  telephone: '+34871242160',
  email: 'hello@pmax.online',
  priceRange: '€€',
  vatID: 'ESB57948123',
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
    { '@type': 'Place', name: 'Balearische Inseln' },
  ],
  knowsLanguage: ['de', 'en', 'es', 'ca'],
  sameAs: [
    'https://www.linkedin.com/company/pmax-online-s-l/',
    'https://www.facebook.com/profile.php?id=61590296614624',
  ],
}

const jsonLd = [
  breadcrumb([
    { name: 'Home', url: 'https://pmax.online/' },
    { name: 'Marketing Agentur Mallorca', url: 'https://pmax.online/de/marketing-agentur-mallorca/' },
  ]),
  localBusinessSchema,
  faqPage(faqs),
]

export default function MarketingAgenturMallorcaPage() {
  const unisono = cases.find(c => c.slug === 'unisono')!
  const ledxpress = cases.find(c => c.slug === 'ledxpress')!
  const gabiona = cases.find(c => c.slug === 'gabionas')!

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Brotkrumen">
              <Link href="/de">Home</Link><span className="sep">/</span>
              <span>Marketing Agentur Mallorca</span>
            </nav>
            <span className="page-intro-eyebrow">Marketing-Agentur · Mallorca · Calvià</span>
            <h1 className="page-intro-title">Marketing Agentur<br />Mallorca.</h1>
            <p className="page-intro-deck">
              pmax ist eine Marketing-Agentur in Calvià, Mallorca. Wir arbeiten mit deutsch- und
              englischsprachigen Unternehmern auf der Insel — und mit Marken in ganz Europa, die
              ihr Marketing von Menschen betreut haben wollen, die auch ans Telefon gehen. Feste
              monatliche Pauschale, vorab vereinbart. Nie ein Prozentsatz Ihres Werbebudgets.
            </p>
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stat">
              <span className="stat-num">7</span>
              <span className="stat-label">Leistungen — ein integriertes Team für alle</span>
            </li>
            <li className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">Sprachen, in denen wir Kampagnen und Reporting umsetzen</span>
            </li>
            <li className="stat">
              <span className="stat-num">Calvià</span>
              <span className="stat-label">unser Standort — 20 Minuten von Palma, auf der Insel</span>
            </li>
            <li className="stat">
              <span className="stat-num">0&nbsp;%</span>
              <span className="stat-label">des Mediabudgets als Honorar — immer Festpauschale</span>
            </li>
          </ul>
        </section>

        <section className="section">
          <div className="container">
            <SectionHead
              kicker="die Arbeitsweise"
              title={<>Was eine Marketing-Agentur auf<br />Mallorca wirklich leisten sollte.</>}
            />
            <div className="prose reveal">
              <p>
                Die meisten Agenturen auf der Insel verkaufen Ihnen ein Konzept. Wir liefern
                eine Lösung. Alles, was wir tun, beantwortet eine Frage —{' '}
                <em>wächst das Geschäft tatsächlich?</em> Wenn nicht, hören wir damit auf.
                Keine Schönwetter-Kennzahlen, kein Report voller Impressionen, von denen Sie
                nichts kaufen können. Wir sind performance-getrieben: Die Zahlen, die wir
                berichten, sind die, die auf Ihrem Konto ankommen.
              </p>

              <h2>Sieben Leistungen, eine Arbeitsweise</h2>
              <ul>
                <li><Link href="/de/services/google-ads">Google Ads &amp; Performance Max</Link> — Search, Shopping, PMax und YouTube auf einem sauberen Conversion-Setup.</li>
                <li><Link href="/de/services/paid-social">Paid Social</Link> — Meta, TikTok und LinkedIn, verbunden mit Ihrem CRM.</li>
                <li><Link href="/de/services/seo">SEO</Link> — technisches, Content- und lokales SEO, das sich auch in der KI-Suche auszahlt.</li>
                <li><Link href="/de/services/ai-visibility">Sichtbarkeit in der KI-Suche (GEO)</Link> — die Marke sein, die ChatGPT, Perplexity und Gemini empfehlen.</li>
                <li><Link href="/de/services/conversion-design">Conversion-Optimierung (CRO)</Link> — mehr Umsatz aus demselben Traffic.</li>
                <li><Link href="/de/services/analytics">Analytics &amp; Tracking</Link> — Server-side GTM, Consent-Mode v2, Dashboards, die nicht lügen.</li>
                <li><Link href="/de/services/creative">Kreativproduktion</Link> — ein stetiger Fluss aus Ads, Landingpages und Video, gebaut zum Testen.</li>
              </ul>

              <h2>Gemacht für den Markt auf Mallorca — in drei Sprachen</h2>
              <p>
                Marketing auf Mallorca ist zwangsläufig mehrsprachig. Wir setzen Kampagnen,
                Landingpages, SEO-Inhalte und Reporting auf <strong>Deutsch, Englisch und
                Spanisch</strong> um. Wir kennen die lokalen Kanäle und die Branchen, die die
                Insel antreiben: Immobilien, Hotellerie &amp; Gastronomie, E-Commerce, Gesundheit,
                Yachting sowie Dienstleister. Inhabergeführte Unternehmen vor Ort — und europäische
                Marken, die von der Insel aus geführt werden.
              </p>

              <h2>Wie wir abrechnen</h2>
              <p>
                Eine feste monatliche Pauschale, vorab vereinbart — kein Prozentsatz Ihres
                Mediabudgets. Planbar, egal ob Sie 2.000&nbsp;€ oder 200.000&nbsp;€ ausgeben.
                Unser Anreiz ist, das Budget arbeiten zu lassen — nicht, es aufzublähen.
              </p>

              <h2>So arbeiten wir — vier Schritte, keine Überraschungen</h2>
              <ol>
                <li><strong>Zuhören</strong> — erst das Geschäft, dann die Daten, dann die Plattformen.</li>
                <li><strong>Reparieren</strong> — Tracking, Feeds, Schema: das Fundament für alles Weitere.</li>
                <li><strong>Wachsen</strong> — Kampagnen skalieren, Kreation findet ihren Rhythmus.</li>
                <li><strong>Verteidigen</strong> — SEO, KI-Suche und Markenschutz, die über Jahre wirken.</li>
              </ol>

              <p style={{ marginTop: 8 }}>
                Diese Seite ist auch verfügbar auf{' '}
                <Link href="/marketing-agency-mallorca/">Englisch (Marketing Agency Mallorca)</Link>
                {' '}und{' '}
                <Link href="/es/agencia-de-marketing-mallorca/">Spanisch (Agencia de Marketing Mallorca)</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="container" style={{ padding: '0 0 48px' }}>
          <SectionHead kicker="Echte Ergebnisse" title="Mit den Zahlen vorneweg." />
          <ol className="stream reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stream-item">
              <span className="stream-stamp">{unisono.stamp}</span>
              <Link href={`/de/cases/${unisono.slug}`} className={`stream-card ${unisono.variant}`}>
                <div>
                  <span className="stream-kicker">{unisono.kicker}</span>
                  <h3 className="stream-head">{unisono.title}</h3>
                  <p className="stream-deck">{unisono.deck}</p>
                  <div className="stream-meta">{unisono.meta.map(m => <span key={m}>{m}</span>)}</div>
                </div>
                <div className="stream-result">
                  <span className="num">{unisono.result.num}</span>
                  <span className="label">{unisono.result.label}</span>
                </div>
              </Link>
            </li>
            <li className="stream-item">
              <span className="stream-stamp">{ledxpress.stamp}</span>
              <Link href={`/de/cases/${ledxpress.slug}`} className={`stream-card ${ledxpress.variant}`}>
                <div>
                  <span className="stream-kicker">{ledxpress.kicker}</span>
                  <h3 className="stream-head">{ledxpress.title}</h3>
                  <p className="stream-deck">{ledxpress.deck}</p>
                  <div className="stream-meta">{ledxpress.meta.map(m => <span key={m}>{m}</span>)}</div>
                </div>
                <div className="stream-result">
                  <span className="num">{ledxpress.result.num}</span>
                  <span className="label">{ledxpress.result.label}</span>
                </div>
              </Link>
            </li>
            <li className="stream-item">
              <span className="stream-stamp">{gabiona.stamp}</span>
              <Link href={`/de/cases/${gabiona.slug}`} className={`stream-card ${gabiona.variant}`}>
                <div>
                  <span className="stream-kicker">{gabiona.kicker}</span>
                  <h3 className="stream-head">{gabiona.title}</h3>
                  <p className="stream-deck">{gabiona.deck}</p>
                  <div className="stream-meta">{gabiona.meta.map(m => <span key={m}>{m}</span>)}</div>
                </div>
                <div className="stream-result">
                  <span className="num">{gabiona.result.num}</span>
                  <span className="label">{gabiona.result.label}</span>
                </div>
              </Link>
            </li>
          </ol>
        </section>

        <section className="section" aria-labelledby="faq-h">
          <div className="container">
            <SectionHead kicker="FAQ" title={<span id="faq-h">Häufige Fragen.</span>} />
            <FaqList items={faqs} />
          </div>
        </section>

        <PromoBlock
          eyebrow="Ein 30-Minuten-Gespräch. Kein Konzept. Kein Verkaufsgespräch."
          headline={<>Sagen Sie uns, wo es hakt.</>}
          deck="Wir sagen Ihnen ehrlich, ob wir die richtige Marketing-Agentur für Ihr Unternehmen auf Mallorca sind — die meisten Gespräche enden mit einem klaren nächsten Schritt, nicht immer mit uns."
          ctaHref="/de/contact"
          ctaLabel="Termin buchen"
          secondaryHref="/de/cases"
          secondaryLabel="Alle Case Studies ansehen →"
        />

      </main>
      <Footer locale="de" />
    </>
  )
}
