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
  return [{ lang: 'es' }]
}

export const metadata: Metadata = {
  title: 'Agencia de Marketing en Mallorca | pmax',
  description: 'Agencia de marketing orientada a resultados en Calvià, Mallorca. Google Ads, Meta, SEO y búsqueda con IA para empresas de habla alemana e inglesa. Tarifa mensual fija, nunca un % de tu inversión.',
  robots: 'index,follow,max-image-preview:large',
  alternates: {
    canonical: 'https://pmax.online/es/agencia-de-marketing-mallorca/',
    languages: {
      en: 'https://pmax.online/marketing-agency-mallorca/',
      de: 'https://pmax.online/de/marketing-agentur-mallorca/',
      es: 'https://pmax.online/es/agencia-de-marketing-mallorca/',
      'x-default': 'https://pmax.online/marketing-agency-mallorca/',
    },
  },
  openGraph: {
    title: 'Agencia de marketing en Mallorca — pmax',
    description: 'Agencia de marketing orientada a resultados en Calvià, Mallorca. Google Ads, Meta, SEO y búsqueda con IA. Tarifa mensual fija.',
    url: 'https://pmax.online/es/agencia-de-marketing-mallorca/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agencia de Marketing en Mallorca — pmax',
    description: 'Agencia de marketing en Calvià, Mallorca. Google Ads, Meta, SEO y búsqueda con IA. Tarifa mensual fija.',
    site: '@pmaxonline',
  },
  other: {
    'geo.region': 'ES-PM',
    'geo.placename': 'Calvià, Mallorca, España',
    'geo.position': '39.5639;2.5089',
    'ICBM': '39.5639, 2.5089',
  },
}

const faqs = [
  {
    q: '¿pmax es una agencia de marketing full-service?',
    a: 'Cubrimos todo el stack — paid ads, SEO, búsqueda con IA, CRO, analítica y creatividad — pero lo dirigimos con resultados primero, liderando con lo que genera ingresos.',
  },
  {
    q: '¿Cuánto cuesta una agencia de marketing en Mallorca?',
    a: 'Los retainers en la isla suelen ir de 500 a 3.000 € al mes según alcance. pmax trabaja con una tarifa mensual fija acordada por adelantado, nunca un porcentaje de la inversión.',
  },
  {
    q: '¿Trabajáis con empresas de habla alemana en Mallorca?',
    a: 'Sí — campañas, reporting y comunicación en alemán, desde nuestra base en Calvià.',
  },
  {
    q: '¿Podéis hacer marketing también en inglés y español?',
    a: 'Inglés y alemán de serie, español donde ayude a tus clientes.',
  },
  {
    q: '¿Dónde estáis en Mallorca?',
    a: 'En Calvià, Mallorca — para la isla, las Baleares y marcas de toda Europa.',
  },
  {
    q: '¿Solo trabajáis con empresas de Mallorca?',
    a: 'No. Con base en Mallorca, trabajamos con marcas de toda Europa.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://pmax.online/es/agencia-de-marketing-mallorca/#localbusiness',
  name: 'pmax — Agencia de Marketing Mallorca',
  image: 'https://pmax.online/og-image.jpg',
  url: 'https://pmax.online/es/agencia-de-marketing-mallorca/',
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
    { '@type': 'Place', name: 'Islas Baleares' },
  ],
  knowsLanguage: ['es', 'de', 'en', 'ca'],
  sameAs: [
    'https://www.linkedin.com/company/pmax-online-s-l/',
    'https://www.facebook.com/profile.php?id=61590296614624',
  ],
}

const jsonLd = [
  breadcrumb([
    { name: 'Inicio', url: 'https://pmax.online/' },
    { name: 'Agencia de Marketing Mallorca', url: 'https://pmax.online/es/agencia-de-marketing-mallorca/' },
  ]),
  localBusinessSchema,
  faqPage(faqs),
]

export default function AgenciaDeMarketingMallorcaPage() {
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
            <nav className="page-intro-crumbs" aria-label="Migas de pan">
              <Link href="/es">Inicio</Link><span className="sep">/</span>
              <span>Agencia de Marketing Mallorca</span>
            </nav>
            <span className="page-intro-eyebrow">Agencia de marketing · Mallorca · Calvià</span>
            <h1 className="page-intro-title">Agencia de marketing<br />en Mallorca.</h1>
            <p className="page-intro-deck">
              pmax es una agencia de marketing en Calvià, Mallorca. Trabajamos con empresarios
              de habla alemana e inglesa en la isla — y con marcas de toda Europa que quieren
              su marketing en manos de gente que coge el teléfono. Tarifa mensual fija, acordada
              por adelantado. Nunca un porcentaje de tu inversión publicitaria.
            </p>
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stat">
              <span className="stat-num">7</span>
              <span className="stat-label">servicios — un equipo integrado para todos ellos</span>
            </li>
            <li className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">idiomas en los que hacemos campañas y reporting</span>
            </li>
            <li className="stat">
              <span className="stat-num">Calvià</span>
              <span className="stat-label">nuestra base — 20 minutos de Palma, en la isla</span>
            </li>
            <li className="stat">
              <span className="stat-num">0&nbsp;%</span>
              <span className="stat-label">de la inversión cobrado como tarifa — siempre fija</span>
            </li>
          </ul>
        </section>

        <section className="section">
          <div className="container">
            <SectionHead
              kicker="el enfoque"
              title={<>Lo que una agencia de marketing<br />en Mallorca debería hacer de verdad.</>}
            />
            <div className="prose reveal">
              <p>
                La mayoría de las agencias de la isla te venden una presentación. Nosotros te
                resolvemos el problema. Todo lo que hacemos responde a una pregunta —{' '}
                <em>¿está creciendo el negocio de verdad?</em> Si no, lo dejamos. Sin métricas
                de vanidad, sin informes llenos de impresiones que no puedes gastar. Trabajamos
                orientados a resultados: los números que reportamos son los que llegan a tu cuenta.
              </p>

              <h2>Siete servicios, una forma de trabajar</h2>
              <ul>
                <li><Link href="/es/services/google-ads">Google Ads y Performance Max</Link> — Search, Shopping, PMax y YouTube sobre una configuración de conversión limpia.</li>
                <li><Link href="/es/services/paid-social">Paid social</Link> — Meta, TikTok y LinkedIn, conectados a tu CRM.</li>
                <li><Link href="/es/services/seo">SEO</Link> — SEO técnico, de contenidos y local, que también suma en la búsqueda con IA.</li>
                <li><Link href="/es/services/ai-visibility">Visibilidad en búsqueda con IA (GEO)</Link> — ser la marca que ChatGPT, Perplexity y Gemini recomiendan.</li>
                <li><Link href="/es/services/conversion-design">Diseño de conversión (CRO)</Link> — más ingresos con el mismo tráfico.</li>
                <li><Link href="/es/services/analytics">Analítica y medición</Link> — GTM server-side, Consent Mode v2, dashboards que no mienten.</li>
                <li><Link href="/es/services/creative">Producción creativa</Link> — un flujo constante de anuncios, landings y vídeo, hechos para testear.</li>
              </ul>

              <h2>Hecha para el mercado de Mallorca — en tres idiomas</h2>
              <p>
                El marketing en Mallorca es multilingüe por necesidad. Hacemos campañas, landing
                pages, contenidos SEO y reporting en <strong>español, alemán e inglés</strong>.
                Conocemos los canales locales y los sectores que mueven la isla: inmobiliaria,
                hostelería, e-commerce, salud, náutica y servicios profesionales. Negocios
                locales de gestión propia — y marcas europeas dirigidas desde la isla.
              </p>

              <h2>Cómo cobramos</h2>
              <p>
                Una tarifa mensual fija, acordada por adelantado — no un porcentaje de tu
                inversión en medios. Previsible tanto si inviertes 2.000&nbsp;€ como
                200.000&nbsp;€. Nuestro incentivo es que la inversión funcione, no inflarla.
              </p>

              <h2>Cómo trabajamos — cuatro pasos, sin sorpresas</h2>
              <ol>
                <li><strong>Escuchar</strong> — primero el negocio, luego los datos, luego las plataformas.</li>
                <li><strong>Arreglar</strong> — tracking, feeds, schema: la base sobre la que se sostiene todo.</li>
                <li><strong>Crecer</strong> — las campañas escalan, la creatividad encuentra su ritmo.</li>
                <li><strong>Defender</strong> — SEO, búsqueda con IA y protección de marca que compone durante años.</li>
              </ol>

              <p style={{ marginTop: 8 }}>
                Esta página también está disponible en{' '}
                <Link href="/marketing-agency-mallorca/">inglés (Marketing Agency Mallorca)</Link>
                {' '}y en{' '}
                <Link href="/de/marketing-agentur-mallorca/">alemán (Marketing Agentur Mallorca)</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="container" style={{ padding: '0 0 48px' }}>
          <SectionHead kicker="Resultados reales" title="Con los números por delante." />
          <ol className="stream reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stream-item">
              <span className="stream-stamp">{unisono.stamp}</span>
              <Link href={`/es/cases/${unisono.slug}`} className={`stream-card ${unisono.variant}`}>
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
              <Link href={`/es/cases/${ledxpress.slug}`} className={`stream-card ${ledxpress.variant}`}>
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
              <Link href={`/es/cases/${gabiona.slug}`} className={`stream-card ${gabiona.variant}`}>
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
            <SectionHead kicker="FAQ" title={<span id="faq-h">Preguntas frecuentes.</span>} />
            <FaqList items={faqs} />
          </div>
        </section>

        <PromoBlock
          eyebrow="Una llamada de 30 minutos. Sin presentación. Sin discurso de venta."
          headline={<>Cuéntanos qué está atascado.</>}
          deck="Te diremos, con franqueza, si somos la agencia de marketing adecuada para tu negocio en Mallorca — la mayoría de las llamadas terminan con un siguiente paso claro, no siempre con nosotros."
          ctaHref="/es/contact"
          ctaLabel="Reservar una llamada"
          secondaryHref="/es/cases"
          secondaryLabel="Ver todos los casos →"
        />

      </main>
      <Footer locale="es" />
    </>
  )
}
