import Testimonials from '@/components/Testimonials'
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
import { casePath } from '@/lib/content/case-slugs'
import { getT } from '@/lib/i18n'

export function generateStaticParams() {
  return [{ lang: 'de' }]
}

export const metadata: Metadata = {
  title: 'Marketing Agentur Mallorca — Festpreis, Calvià | pmax',
  description: 'pmax (PMax Online S.L.) ist eine Performance-Marketing-Agentur in Calvià, Mallorca. Google Ads, Meta, SEO und KI-Suche für deutsch- und englischsprachige Unternehmen. Feste monatliche Pauschale, nie Prozent vom Mediabudget. 93 % Kundenbindungsrate.',
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
    type: 'website',
    siteName: 'pmax',
    title: 'Marketing Agentur auf Mallorca — pmax',
    description: 'Performance-Marketing-Agentur in Calvià, Mallorca. Google Ads, Meta, SEO und KI-Suche. Festpreis, 93 % Kundenbindungsrate.',
    url: 'https://pmax.online/de/marketing-agentur-mallorca/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pmaxonline',
    title: 'Marketing Agentur Mallorca — pmax',
    description: 'Performance-Marketing-Agentur in Calvià, Mallorca. Festpreis, nie Prozent vom Mediabudget.',
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
    q: 'Was kostet eine Marketing-Agentur auf Mallorca?',
    a: 'Die Bandbreite ist groß — von 500 €/Monat für einen Ein-Kanal-Freelancer bis zu 8.000 €+ für Full-Service. pmax arbeitet mit einer festen monatlichen Pauschale, typischerweise 1.500–5.000 € je nach Umfang und Kanalanzahl. Kein Prozentsatz des Mediabudgets — unser Anreiz ist, das Budget arbeiten zu lassen, nicht es aufzublähen.',
  },
  {
    q: 'Wie lange dauert es, bis Marketing Ergebnisse zeigt?',
    a: 'Paid-Kanäle bewegen sich in Wochen — Google Ads und Meta können innerhalb von Tagen nach dem Launch Leads generieren, wenn das Account korrekt aufgebaut ist. SEO kompoundiert ab etwa Monat drei, mit messbarem organischem Wachstum ab Monat sechs. KI-Suchsichtbarkeit (Auftreten in ChatGPT, Perplexity, Gemini) baut sich über Quartale auf, da Entity- und Authority-Signale Zeit brauchen. Den ehrlichen Zeitplan für Ihre spezifische Branche nennen wir Ihnen im ersten Gespräch.',
  },
  {
    q: 'Was unterscheidet Sie von einer Agentur auf dem spanischen Festland?',
    a: 'Wir sind auf der Insel. Wir verstehen, dass Mallorcas Käuferpopulationen in vier Sprachen suchen — Spanisch, Deutsch, Englisch und Katalanisch — und dass ein Handwerksbetrieb in Calvià und eine Luxusvilla-Marke in Andratx völlig unterschiedliche Marketing-Probleme haben. Wir führen Kampagnen für Mallorca-Unternehmen seit 2019 und kennen die saisonalen Nachfragekurven, die lokalen CPC-Unterschiede und welche Kanäle auf der Insel wirklich konvertieren.',
  },
  {
    q: 'Arbeiten Sie wirklich auf Deutsch — Kampagnen, Reporting, Kommunikation?',
    a: 'Ja, vollständig. Kampagnen, Landingpages, Reporting und die tägliche Kommunikation laufen auf Deutsch. Die deutschsprachige Käuferpopulation auf Mallorca ist das am meisten unterversorgte Marketing-Segment der Insel: hohe Kaufkraft, aktiv suchend, von lokalen Agenturen fast vollständig ignoriert. Wir bauen für dieses Segment — von Anfang an.',
  },
  {
    q: 'Können Sie alle unsere Marketing-Kanäle in einem Retainer abdecken?',
    a: 'Ja. Wir betreiben Google Ads, Meta, TikTok, LinkedIn, SEO, KI-Sichtbarkeit, Conversion-Optimierung und Analytics unter einem integrierten Team und einer festen monatlichen Pauschale. Die meisten Kunden starten mit zwei oder drei Kanälen und erweitern, wenn die Performance-Daten zeigen, wo als nächstes investiert werden soll.',
  },
  {
    q: 'Wie fangen wir an?',
    a: 'Ein 30-minütiges Gespräch — kein Deck, kein Verkaufsgespräch. Wir fragen nach dem Unternehmen, wo Wachstum stockt und was bereits versucht wurde. Wir sagen Ihnen ehrlich, ob wir die richtige Agentur für Ihre Situation sind — und wenn nicht, sagen wir das auch. Die meisten Gespräche enden mit einem klaren nächsten Schritt.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://pmax.online/de/marketing-agentur-mallorca/#localbusiness',
  name: 'pmax — Marketing Agentur Mallorca',
  legalName: 'PMAX ONLINE SL',
  image: 'https://pmax.online/og-image.jpg',
  url: 'https://pmax.online/de/marketing-agentur-mallorca/',
  telephone: '+34871242160',
  email: 'hello@pmax.online',
  priceRange: '€€',
  vatID: 'ESB44964633',
  foundingDate: '2019',
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
    { '@type': 'Place', name: 'Spanien' },
    { '@type': 'Place', name: 'Europa' },
  ],
  knowsLanguage: ['de', 'en', 'es', 'ca'],
  sameAs: [
    'https://www.linkedin.com/company/pmax-online-s-l/',
    'https://www.facebook.com/profile.php?id=61590296614624',
    'https://www.sortlist.com/agency/pmax-online-sl',
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

// Case cards in this page's language: the localised kicker, title, deck and
// result from the i18n file, falling back to the English case where missing.
function localCase(slug: string) {
  const c = cases.find(x => x.slug === slug)!
  const loc = getT('de').cases.items.find((i: { slug: string }) => i.slug === slug) as Partial<typeof c> | undefined
  return { ...c, ...(loc ?? {}), result: loc?.result ?? c.result }
}

export default function MarketingAgenturMallorcaPage() {
  const unisono = localCase('unisono')
  const ledxpress = localCase('ledxpress')
  const gabiona = localCase('gabionas')

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
            <span className="page-intro-eyebrow">Marketing-Agentur · Mallorca · Calvià · Seit 2019</span>
            <h1 className="page-intro-title">Marketing Agentur<br />Mallorca.</h1>
            <p className="page-intro-deck">
              pmax (PMax Online S.L.) ist eine Performance-Marketing-Agentur in Calvià, Mallorca.
              Wir betreiben Google Ads, Meta, SEO und KI-Suche für deutsch- und englischsprachige
              Unternehmen auf der Insel — und für europäische Marken, die ihr Marketing von Menschen
              betreut haben wollen, die auch ans Telefon gehen. Feste monatliche Pauschale,
              vorab vereinbart. Nie ein Prozentsatz Ihres Werbebudgets.
            </p>
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stat">
              <span className="stat-num">93&nbsp;%</span>
              <span className="stat-label">Zwölf-Monats-Kundenbindungsrate</span>
            </li>
            <li className="stat">
              <span className="stat-num">€8,4M</span>
              <span className="stat-label">jährlich verwaltetes Paid-Media-Budget über aktive Accounts</span>
            </li>
            <li className="stat">
              <span className="stat-num">Calvià</span>
              <span className="stat-label">unser Standort — 20 Minuten von Palma, auf der Insel seit 2019</span>
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
              kicker="der Mallorca-Markt"
              title={<>Marketing auf Mallorca ist ein Sieben-Leistungen-,<br />Vier-Sprachen-, Zwölf-Monats-Problem.</>}
            />
            <div className="prose reveal">
              <p>
                Mallorca ist kein einfacher Marketing-Markt. Es gibt vier überlappende
                Käuferpopulationen — spanische Einheimische, deutsche Expats und
                Immobilieneigentümer, englischsprachige Touristen und Rentner sowie
                eine katalanischsprachige lokale Basis — jede sucht anders, jede
                reagiert auf andere Botschaften und ist in anderen Jahreszeiten aktiv.
              </p>
              <p>
                Eine Villenvermietung in Andratx braucht deutsche Google Ads im Januar
                (Frühbucher), englische Meta-Kampagnen im März (Hauptentscheidungsphase)
                und spanisches SEO ganzjährig für den lokalen Suchanteil. Ein Restaurant
                in Palma braucht Google-Maps-Sichtbarkeit in vier Sprachen und eine
                Meta-Präsenz, die in den Tourismusmonaten konvertiert, ohne im Januar
                Budget zu verbrennen. Ein Yacht-Charter-Unternehmen braucht
                Remarketing-Fenster von 60–90 Tagen, nicht den Meta-Standard von 30.
              </p>
              <p>
                Die meisten Agenturen auf der Insel wählen einen Kanal, eine Sprache
                und nennen das fertig. Die Unternehmen, die hier wachsen, betreiben
                ein integriertes Programm — Paid, Organic und KI-Suche — und das in
                den Sprachen, die ihre Kunden tatsächlich verwenden.
              </p>

              <h2>Sieben Leistungen, ein integriertes Team</h2>
              <ul>
                <li><Link href="/de/services/google-ads">Google Ads &amp; Performance Max</Link> — Search, Shopping, PMax und YouTube auf einem sauberen Conversion-Setup. Brand-Ausschlüsse auf PMax, korrekte Offline-Conversion-Importe, wöchentliche Account-Reviews.</li>
                <li><Link href="/de/services/paid-social">Paid Social</Link> — Meta, TikTok und LinkedIn verbunden mit Ihrem CRM. Creative-getrieben und gemessen an Umsatz, nicht an Impressionen.</li>
                <li><Link href="/de/seo-agentur-mallorca">SEO</Link> — technisches, Content- und lokales SEO in vier Sprachen. Rankings, die sich aufbauen und in die KI-Suche weiterwirken.</li>
                <li><Link href="/de/services/ai-visibility">KI-Sichtbarkeit (GEO)</Link> — das Unternehmen sein, das ChatGPT, Perplexity und Google AI Overviews empfehlen, wenn jemand nach einer Agentur, Villa, einem Hotel oder Dienstleister auf Mallorca fragt.</li>
                <li><Link href="/de/services/conversion-design">Conversion-Optimierung (CRO)</Link> — mehr Umsatz aus demselben Traffic. Landingpage-Neubauten, Buchungsfluss-Optimierung, A/B-Tests.</li>
                <li><Link href="/de/services/analytics">Analytics &amp; Tracking</Link> — Server-side GTM, Consent Mode v2, GA4, CRM-gespeiste Offline-Conversions. Das Fundament, auf dem alles andere steht.</li>
                <li><Link href="/de/services/creative">Kreativproduktion</Link> — Anzeigen, Landingpages und Video im Wochentakt, auf Basis der Kampagnendaten konzipiert und zum Testen gebaut.</li>
              </ul>

              <h2>Ihre Kunden suchen in Deutschland, bevor sie auf die Insel kommen</h2>
              <p>
                Ein Unternehmen auf Mallorca mit deutschsprachigen Kunden hat zwei Märkte. Der eine
                ist auf der Insel: Residenten und Urlauber, die vor Ort einen Arzt, einen Handwerker
                oder ein Restaurant suchen. Der andere sitzt in Deutschland, Österreich und der
                Schweiz und plant von dort aus. Wer eine Finca kaufen oder ein Ferienhaus mieten will,
                sucht zu Hause, Wochen oder Monate vor der Reise.
              </p>
              <p>
                Die Suchzahlen zeigen das. Aus Deutschland wird „Ferienhaus Mallorca“ rund
                5.400-mal im Monat gesucht, „Finca Mallorca kaufen“ rund 4.400-mal und
                „Immobilienmakler Mallorca“ rund 1.300-mal. Dazu kommen Suchen, die ausdrücklich
                nach Deutsch fragen: „deutscher Arzt Mallorca“ rund 210-mal, „deutscher Zahnarzt
                Mallorca“ rund 140-mal (Semrush, November 2026).
              </p>
              <p>
                Deshalb trennen wir die beiden Märkte. Für Kunden auf der Insel arbeiten wir mit
                Standort-Targeting und Ihrem Google-Unternehmensprofil. Für Kunden in Deutschland,
                Österreich und der Schweiz laufen eigene Kampagnen, auf Deutsch geschrieben und nicht
                aus dem Englischen übersetzt. Und wenn Ihre Kunden ausdrücklich nach Deutsch fragen,
                sagen Ihre Website und Ihr Profil es deutlich: Beratung auf Deutsch, Termine auf
                Deutsch, Ansprechpartner auf Deutsch.
              </p>

              <h2>Mit wem wir auf der Insel arbeiten</h2>
              <ul>
                <li><strong>Hotellerie und Villenvermietung</strong> — Hotels, Boutique-Vermietungen und Villa-Agenturen. Kampagnen in mehreren Sprachen für einen Markt, der im Sommer voll ist und im Januar fast stillsteht.</li>
                <li><strong>Immobilien</strong> — Makler mit deutsch- und englischsprachigen Käufern, die in ihrer eigenen Sprache nach Objekten auf der Insel suchen, meist von zu Hause aus. Mehr in unserem <Link href="/de/industries/real-estate/">Immobilien-Marketing-Playbook</Link>.</li>
                <li><strong>Yachting &amp; Marine</strong> — Charter-Unternehmen und Werften mit langen Buchungsfenstern und Kunden aus aller Welt. Kampagnen in mehreren Sprachen, Remarketing über 90 Tage.</li>
                <li><strong>Gesundheit &amp; Ästhetik</strong> — Kliniken und Praxen in Palma und Calvià, deren Patienten sich vor dem ersten Termin in ihrer Sprache informieren.</li>
                <li><strong>Beratung und Dienstleistung</strong> — Anwälte, Architekten, Steuerberater und Berater für die deutsch- und englischsprachigen Residenten der Insel.</li>
                <li><strong>E-Commerce</strong> — Marken von der Insel, die nach Deutschland, Großbritannien und in den Rest Europas verkaufen. Mehrsprachiges SEO, Shopping und Performance Max.</li>
              </ul>

              <h2>Wie wir abrechnen</h2>
              <p>
                Eine feste monatliche Pauschale, vorab vereinbart — kein Prozentsatz Ihres
                Mediabudgets. Typische Retainer liegen bei 1.500–5.000 €/Monat, je nach
                Kanalanzahl und Umfang. Das Mediabudget zahlen Sie direkt an die Plattformen;
                wir verwalten es nie. Unser Anreiz ist, dass das Budget arbeitet, nicht dass es
                wächst. Genau das ist das Problem von Agenturen, die einen Prozentsatz des
                Budgets berechnen.
              </p>

              <h2>Wie wir arbeiten — vier Schritte</h2>
              <ol>
                <li><strong>Zuhören</strong> — erst das Geschäft, dann die Daten, dann die Plattformen. Wir verbringen die erste Woche damit zu verstehen, woher Umsatz tatsächlich kommt, bevor wir eine Kampagne anfassen.</li>
                <li><strong>Reparieren</strong> — Tracking, Feeds, Schema, Google Unternehmensprofil: das Fundament, auf dem alles andere steht. Die meisten neuen Accounts haben mindestens ein wesentliches Messproblem.</li>
                <li><strong>Wachsen</strong> — Kampagnen skalieren, die Kreation findet ihren Rhythmus, SEO beginnt sich aufzubauen.</li>
                <li><strong>Verteidigen</strong> — SEO, KI-Suche und Markenschutz, die über Jahre wirken, nicht über Quartale.</li>
              </ol>

              <div className="prose-callout">
                <div className="prose-callout-kicker">Die ehrliche Version</div>
                <p>
                  Marketing funktioniert nicht über Nacht, und jede Agentur, die das behauptet,
                  lügt entweder oder verkauft Ihnen etwas mit kurzen Beinen. Paid-Kanäle bewegen
                  sich in Wochen. SEO baut sich ab dem dritten Monat auf. KI-Suchsichtbarkeit wächst
                  über Quartale. Die Unternehmen, mit denen wir drei oder vier Jahre
                  zusammenarbeiten, erzielen dramatisch bessere Ergebnisse als diejenigen, die
                  uns nach 90 Tagen messen. Wenn dieser Zeitrahmen für Sie nicht funktioniert,
                  sind wir wahrscheinlich nicht der richtige Partner — und wir sagen das im
                  ersten Gespräch.
                </p>
              </div>

              <p style={{ marginTop: 8 }}>
                Diese Seite ist auch verfügbar auf{' '}
                <Link href="/marketing-agency-mallorca/">Englisch (Marketing Agency Mallorca)</Link>
                {' '}und{' '}
                <Link href="/es/agencia-de-marketing-mallorca/">Spanisch (Agencia de Marketing Mallorca)</Link>.
              </p>
              <p>
                Suchen Sie speziell Google Ads in ganz Spanien?{' '}
                <Link href="/de/google-ads-agentur-spanien/">Unsere Google Ads Agentur Spanien</Link>
                {' '}erklärt mehrsprachiges Paid Search auf dem spanischen Markt — regionale CPCs,
                Kampagnenstruktur und Performance Max.
              </p>
            </div>
          </div>
        </section>

        <section className="container reveal" style={{ padding: '0 0 48px' }}>
          <figure style={{ margin: 0 }}>
            <div className="card-outlined" style={{ padding: 0, overflow: 'hidden' }}>
              <Image
                src="/palma-cathedral.webp"
                alt="Kathedrale von Palma, Mallorca — pmax sitzt in Calvià, 20 Minuten entfernt"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>
            <figcaption style={{ marginTop: 10, fontSize: 13, color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
              Standort Calvià, Mallorca (PMax Online S.L. · USt-IdNr. ES B44964633) — 20 Minuten von der Kathedrale in Palma
            </figcaption>
          </figure>
        </section>

        <section className="container" style={{ padding: '0 0 48px' }}>
          <SectionHead kicker="Echte Ergebnisse" title="Mit den Zahlen vorneweg." />
          <ol className="stream reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stream-item">
              <span className="stream-stamp">{unisono.stamp}</span>
              <Link href={casePath(unisono.slug, 'de')} className={`stream-card ${unisono.variant}`}>
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
              <Link href={casePath(ledxpress.slug, 'de')} className={`stream-card ${ledxpress.variant}`}>
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
              <Link href={casePath(gabiona.slug, 'de')} className={`stream-card ${gabiona.variant}`}>
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

        <Testimonials lang="de" max={5} />

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
