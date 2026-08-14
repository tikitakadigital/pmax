import type { Metadata } from 'next'
import Image from 'next/image'
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
  title: 'Google Ads Agentur Spanien | pmax — Performance Max & mehrsprachig, vor Ort',
  description: 'pmax ist eine Google Ads Agentur in Spanien — vor Ort auf Mallorca, nicht aus der Ferne. Search, Shopping und Performance Max in vier Sprachen. Festpreis statt Prozent vom Mediabudget.',
  robots: 'index,follow,max-image-preview:large',
  alternates: {
    canonical: 'https://pmax.online/de/google-ads-agentur-spanien/',
    languages: {
      en: 'https://pmax.online/google-ads-agency-spain/',
      de: 'https://pmax.online/de/google-ads-agentur-spanien/',
      es: 'https://pmax.online/es/agencia-google-ads-espana/',
      'x-default': 'https://pmax.online/google-ads-agency-spain/',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'pmax',
    title: 'Google Ads Agentur Spanien | pmax — vor Ort, mehrsprachig, Festpreis',
    description: 'Google Ads Agentur in Spanien — vor Ort auf Mallorca. Search, Shopping und Performance Max in vier Sprachen. Festpreis statt Prozent vom Mediabudget.',
    url: 'https://pmax.online/de/google-ads-agentur-spanien/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pmaxonline',
    title: 'Google Ads Agentur Spanien | pmax',
    description: 'Google Ads Agentur in Spanien — vor Ort auf Mallorca, vier Sprachen, Festpreis statt Prozent vom Mediabudget.',
    images: ['/og-image.jpg'],
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
    q: 'Was macht eine Google Ads Agentur mit Sitz in Spanien anders?',
    a: 'Der Unterschied ist Marktkenntnis und Verantwortlichkeit. Spanien ist kein homogener Markt — die Klickpreise in Madrid und Barcelona liegen deutlich höher als in Andalusien oder auf den Inseln, die Saisonschwankungen sind in tourismusnahen Kategorien extrem, und die Vier-Sprachen-Realität (Spanisch, Katalanisch, Englisch, Deutsch) bedeutet, dass eine einsprachige Kampagne große Teile der Käufer verfehlt. Eine Agentur vor Ort versteht, welche Geo-Gebotsanpassungen zählen und wie man spanische Rechnungs- und IVA-Einstellungen handhabt, an denen ferngesteuerte Agenturen scheitern.',
  },
  {
    q: 'Wir sind ein ausländisches Unternehmen, das in den spanischen Markt eintritt — könnt ihr helfen?',
    a: 'Das ist unser häufigster Auftrag von Neukunden. Deutschland und Großbritannien schicken 2025–2026 mehr Unternehmen nach Spanien, angezogen von niedrigeren Kosten, starkem Konsum und Rekordtourismus. Wir richten das Konto von Grund auf auf Spanisch ein, beraten zu lokalisierten Landingpages und geben ehrliche Budget-Empfehlungen vor dem Commitment. Wir arbeiten nicht auf Prozentbasis, daher ist unsere Empfehlung zur Budgethöhe nie befangen.',
  },
  {
    q: 'Wie sind die Klickpreise in Spanien im Vergleich zu Deutschland?',
    a: 'In den meisten B2B- und E-Commerce-Kategorien 30–60% niedriger — was Spanien für den Markteintritt gerade jetzt attraktiv macht. Madrid und Barcelona sind die Ausnahme: bestimmte Finanz-, Rechts- und Immobilien-Keywords erreichen oder übersteigen Londoner Niveau. Die größere Chance: Der englischsprachige Wettbewerb um spanische Kaufabsicht ist noch dünn.',
  },
  {
    q: 'Betreut ihr Performance Max und Shopping für spanischen E-Commerce?',
    a: 'Ja. Spanien ist einer der am schnellsten wachsenden E-Commerce-Märkte Westeuropas. PMax ist das dominante Vehikel für Shopping-Absicht, braucht aber Leitplanken: Marken-Ausschlüsse, nach Marge getrennte Asset-Gruppen und zurückgespielte CRM-Daten. Wir übernehmen auch die spanische Merchant-Center-Konfiguration — IVA, Correos- und MRW-Versandregeln und Produktdaten-Themen, die ausländische Händler ausbremsen.',
  },
  {
    q: 'Was bedeutet die Tourismus-Saisonalität für Google Ads in Spanien?',
    a: 'Spanien hat 2024 seinen Besucherrekord gebrochen. Gut für den Tourismus, aber ein CPC-Problem für alle anderen: Hotellerie, Aktivitäten, Villenvermietung und Marine treiben die Auktionspreise in angrenzenden Kategorien von April bis September nach oben. Wir modellieren die Saisonkurve für jedes Konto, bauen vor der Saison auf und planen Budgets nach echter Nachfrage statt nach Kalenderquartal.',
  },
  {
    q: 'Berechnet ihr einen Prozentsatz des Google-Ads-Budgets?',
    a: 'Nein. Immer eine feste monatliche Pauschale. Prozent-vom-Budget erzeugt einen strukturellen Interessenkonflikt: Die Agentur verdient mehr, indem sie größere Budgets empfiehlt — unabhängig von der Effizienz. Unser Honorar ändert sich nicht, ob Ihr Budget 3.000 € oder 300.000 € pro Monat beträgt. Sie zahlen Google direkt, wir betreuen das Konto.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://pmax.online/de/google-ads-agentur-spanien/#localbusiness',
  name: 'pmax — Google Ads Agentur Spanien',
  image: 'https://pmax.online/og-image.jpg',
  url: 'https://pmax.online/de/google-ads-agentur-spanien/',
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
    { '@type': 'Country', name: 'Spanien' },
    { '@type': 'Place', name: 'Mallorca' },
    { '@type': 'Place', name: 'Madrid' },
    { '@type': 'Place', name: 'Barcelona' },
    { '@type': 'Place', name: 'Balearische Inseln' },
  ],
  knowsLanguage: ['de', 'es', 'en', 'ca'],
  sameAs: ['https://www.linkedin.com/company/pmax-online-s-l/'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '14',
    bestRating: '5',
  },
}

const jsonLd = [
  breadcrumb([
    { name: 'Home', url: 'https://pmax.online/' },
    { name: 'Google Ads Agentur Spanien', url: 'https://pmax.online/de/google-ads-agentur-spanien/' },
  ]),
  localBusinessSchema,
  faqPage(faqs),
]

export default function GoogleAdsAgenturSpanienPage() {
  const imero = cases.find(c => c.slug === 'imero')!
  const gabiona = cases.find(c => c.slug === 'gabionas')!
  const luxaflex = cases.find(c => c.slug === 'luxaflex')!

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Brotkrumen">
              <Link href="/de">Home</Link><span className="sep">/</span>
              <span>Google Ads Agentur Spanien</span>
            </nav>
            <span className="page-intro-eyebrow">Google Ads · Spanien · Sitz in Calvià</span>
            <h1 className="page-intro-title">Google Ads Agentur<br />in Spanien.</h1>
            <p className="page-intro-deck">
              Die meisten Agenturen, die Spanien angeblich abdecken, sind entweder Remote-Teams
              aus UK oder den USA ohne Präsenz vor Ort — oder lokale spanische Agenturen, deren
              englisches SEO für ausländische Kunden unsichtbar ist. Wir sitzen physisch in Spanien,
              betreuen Konten täglich auf Spanisch, Deutsch, Englisch und Katalanisch und berechnen
              Festpreise — nie einen Prozentsatz Ihres Budgets.
            </p>
          </div>
        </section>

        <section className="container reveal" style={{ padding: '48px 0 0' }}>
          <div className="card-outlined" style={{ padding: 0, overflow: 'hidden' }}>
            <Image
              src="/palma-cathedral.webp"
              alt="Kathedrale von Palma, Mallorca — pmax Google Ads Agentur mit Sitz in Spanien"
              width={1200}
              height={800}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stat">
              <span className="stat-num">€8,4M</span>
              <span className="stat-label">jährliches Google-Ads-Mediabudget über aktive Konten</span>
            </li>
            <li className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">Sprachen — Spanisch, Deutsch, Englisch, Katalanisch</span>
            </li>
            <li className="stat">
              <span className="stat-num">Spanien</span>
              <span className="stat-label">unser Sitz — nicht aus London ferngesteuert</span>
            </li>
            <li className="stat">
              <span className="stat-num">0&nbsp;%</span>
              <span className="stat-label">des Mediabudgets als Honorar — immer Festpreis</span>
            </li>
          </ul>
        </section>

        <section className="section">
          <div className="container">
            <SectionHead
              kicker="der Spanien-Auftrag"
              title={<>Spanien ist 2026 ein anderer<br />Google-Ads-Markt als früher.</>}
            />
            <div className="prose reveal">
              <p>
                Spaniens Wirtschaft hat seit 2023 die meisten westeuropäischen Länder übertroffen.
                Der Tourismus bricht Rekorde, ausländische Direktinvestitionen steigen, und eine
                Welle deutscher und britischer Unternehmen tritt in den Markt ein — angezogen von
                niedrigeren Betriebskosten, starkem Binnenkonsum und einer jungen, digital-affinen
                Bevölkerung, die zu den online-aktivsten der EU gehört. Die Folge: Spanische
                Google-Ads-Auktionen werden umkämpfter, die Klickpreise in den großen Städten
                steigen, und das Zeitfenster für einen günstigen Eintritt schließt sich.
              </p>
              <p>
                Gleichzeitig ist die Chance für ausländische Unternehmen, die auf Englisch suchen,
                noch weit offen. Der Wettbewerb um Anfragen wie „Google Ads agency Spain" besteht
                überwiegend aus kleinen lokalen Anbietern oder großen globalen Netzwerken, die
                15–20&nbsp;% des Mediabudgets berechnen. Der Mittelbau — ein wirklich in Spanien
                ansässiges Team mit Marktkenntnis und Festpreisen — ist nahezu unbesetzt.
              </p>

              <h2>Was Google Ads in Spanien wirklich verlangt</h2>

              <h3>1. Vier Sprachen, nicht eine</h3>
              <p>
                Spanien hat vier ko-offizielle Sprachen und eine bedeutende englisch- und
                deutschsprachige Bevölkerung an den Küsten und auf den Inseln. Eine Kampagne nur
                auf Kastilisch ignoriert die katalanischsprachigen Märkte um Barcelona und Valencia,
                den englischsprachigen Expat- und Touristenmarkt an der Costa del Sol und auf den
                Inseln sowie den deutschsprachigen Markt auf Mallorca, Teneriffa und Gran Canaria.
                Wir bauen und betreuen in jeder Sprache mit kommerziellem Volumen für Ihre Kategorie
                — als Standard, nicht als Aufpreis.
              </p>

              <h3>2. Regionale CPC-Strategie ist nicht optional</h3>
              <p>
                Madrid und Barcelona bieten in Premium-Kategorien inzwischen nahe an nordeuropäischem
                Niveau — B2B-Software, Recht, Finanzdienstleistungen, hochwertige Immobilien. Der
                Rest Spaniens bietet deutlich niedriger. Eine einzige nationale Kampagne ohne
                geografische Gebotsanpassungen zahlt entweder in den Provinzen zu viel oder
                verliert in den Städten. Wir modellieren das pro Konto — eine Formel für alle
                gibt es nicht.
              </p>

              <h3>3. Tourismus-Saisonalität verzerrt CPCs über das Offensichtliche hinaus</h3>
              <p>
                Spanien hat 2024 seinen Besucherrekord gebrochen. Gut für den Tourismus, aber ein
                Auktionsproblem für alle anderen: Werbetreibende in Hotellerie, Aktivitäten,
                Villenvermietung und Marine treiben die Klickpreise in angrenzenden Kategorien
                von April bis September nach oben. Ganzjahresunternehmen, die das nicht einplanen,
                zahlen am Ende Q2–Q3-Preise, die sie nicht budgetiert hatten. Wir modellieren die
                Ganzjahres-Nachfragekurve für jedes spanische Konto.
              </p>

              <h3>4. Performance Max für spanischen E-Commerce — mit Leitplanken</h3>
              <p>
                Spanien ist einer der am schnellsten wachsenden E-Commerce-Märkte Westeuropas, und
                Performance Max ist das primäre Vehikel für Shopping-Absicht. Aber PMax ohne
                saubere Einrichtung schluckt Markentraffic, vermischt Margenstufen und produziert
                ROAS-Zahlen, die in der Plattform stark aussehen und für Ihre GuV nichts bedeuten.
                In jedem spanischen Konto starten wir mit Marken-Ausschlüssen, nach Marge
                getrennten Asset-Gruppen und — bei längeren Verkaufszyklen — zurückgespielten
                CRM-Daten. Das spanische Merchant Center verlangt zudem spezifische Konfiguration:
                IVA-Einstellungen, anbieterspezifische Versandregeln und Produktdaten-Korrekturen,
                die ausländische Händler regelmäßig übersehen.
              </p>
              <figure style={{ margin: '32px 0' }}>
                <div className="card-outlined" style={{ padding: 0, overflow: 'hidden' }}>
                  <Image
                    src="/google-ads-dashboard-spain.webp"
                    alt="Google Ads Dashboard mit spanischsprachigen Suchbegriffen — von pmax verwaltetes Konto"
                    width={1400}
                    height={696}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <figcaption style={{ marginTop: 10, fontSize: 13, color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
                  Spanischsprachige Suchbegriffe aus einem von pmax verwalteten Google Ads Konto.
                </figcaption>
              </figure>

              <h3>5. Der Markteintritts-Auftrag</h3>
              <p>
                Ein erheblicher Teil der Unternehmen, die auf Englisch nach einer Google Ads
                Agentur in Spanien suchen, ist hier noch nicht aktiv. Sie prüfen Spanien als Markt
                oder haben die Entscheidung getroffen und brauchen jemanden für die Umsetzung.
                Diese Arbeit machen wir regelmäßig — spanische Konten von Grund auf aufsetzen,
                Anzeigentexte richtig lokalisieren (nicht maschinell übersetzt), zur
                Landingpage-Strategie beraten und ehrlich sagen, welche Kategorien und Regionen
                Platz für einen Neueinsteiger haben und welche gesättigt sind. Weil wir Festpreise
                berechnen, ist unser Rat zum aggressiven oder vorsichtigen Eintritt frei von
                finanzieller Voreingenommenheit.
              </p>

              <div className="prose-callout">
                <div className="prose-callout-kicker">Zum Honorar — die Kurzfassung</div>
                <p>
                  Jede Agentur, die einen Prozentsatz des Mediabudgets berechnet, hat einen Anreiz,
                  Ihr Budget zu vergrößern — unabhängig davon, ob es Ihnen nützt. Wir berechnen
                  eine feste monatliche Pauschale. Sie zahlen Google direkt. Wir haben kein
                  finanzielles Interesse daran, dass Ihr Budget steigt — nur daran, dass Ihre
                  Ergebnisse besser werden.
                </p>
              </div>

              <p style={{ marginTop: 8 }}>
                Diese Seite ist auch verfügbar auf{' '}
                <Link href="/google-ads-agency-spain/">Englisch (Google Ads Agency Spain)</Link>
                {' '}und{' '}
                <Link href="/es/agencia-google-ads-espana/">Spanisch (Agencia Google Ads España)</Link>.
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
              <span className="stream-stamp">{imero.stamp}</span>
              <Link href={`/de/cases/${imero.slug}`} className={`stream-card ${imero.variant}`}>
                <div>
                  <span className="stream-kicker">{imero.kicker}</span>
                  <h3 className="stream-head">{imero.title}</h3>
                  <p className="stream-deck">{imero.deck}</p>
                  <div className="stream-meta">
                    {imero.meta.map(m => <span key={m}>{m}</span>)}
                  </div>
                </div>
                <div className="stream-result">
                  <span className="num">{imero.result.num}</span>
                  <span className="label">{imero.result.label}</span>
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
                  <div className="stream-meta">
                    {gabiona.meta.map(m => <span key={m}>{m}</span>)}
                  </div>
                </div>
                <div className="stream-result">
                  <span className="num">{gabiona.result.num}</span>
                  <span className="label">{gabiona.result.label}</span>
                </div>
              </Link>
            </li>
            <li className="stream-item">
              <span className="stream-stamp">{luxaflex.stamp}</span>
              <Link href={`/de/cases/${luxaflex.slug}`} className={`stream-card ${luxaflex.variant}`}>
                <div>
                  <span className="stream-kicker">{luxaflex.kicker}</span>
                  <h3 className="stream-head">{luxaflex.title}</h3>
                  <p className="stream-deck">{luxaflex.deck}</p>
                  <div className="stream-meta">
                    {luxaflex.meta.map(m => <span key={m}>{m}</span>)}
                  </div>
                </div>
                <div className="stream-result">
                  <span className="num">{luxaflex.result.num}</span>
                  <span className="label">{luxaflex.result.label}</span>
                </div>
              </Link>
            </li>
          </ol>
        </section>

        <PromoBlock
          eyebrow="Kostenloses Google-Ads-Audit"
          headline={<>Wissen Sie, was Ihre spanischen<br />Kampagnen wirklich kosten?</>}
          deck="Geben Sie uns Lesezugriff auf Ihr Google-Ads-Konto und sagen Sie uns, was Sie in Spanien wachsen lassen wollen — wir senden eine einseitige Diagnose mit den drei größten strukturellen Problemen und einer groben Größenordnung. Keine Präsentation, kein Pitch."
          ctaHref="/de/contact?topic=spain-google-ads-audit"
          ctaLabel="Audit anfragen"
          secondaryHref="/de/services/google-ads"
          secondaryLabel="Unser komplettes Google-Ads-Angebot →"
        />

      </main>
      <Footer locale="de" />
    </>
  )
}
