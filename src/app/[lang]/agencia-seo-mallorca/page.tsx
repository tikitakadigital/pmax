import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/FaqList'
import SectionHead from '@/components/SectionHead'
import PromoBlock from '@/components/PromoBlock'
import { breadcrumb, faqPage } from '@/lib/schema'
import { cases } from '@/lib/content/cases'

// Only build /es/agencia-seo-mallorca/ — not /de/agencia-seo-mallorca/
export function generateStaticParams() {
  return [{ lang: 'es' }]
}

export const metadata: Metadata = {
  title: 'Agencia SEO Mallorca | pmax — SEO local y multilingüe desde Calvià',
  description: 'pmax es una agencia SEO en Mallorca. Posicionamos negocios en cuatro idiomas — español, alemán, inglés y catalán — con SEO técnico, búsqueda local y visibilidad en IA. Con sede en Calvià.',
  alternates: {
    canonical: 'https://pmax.online/es/agencia-seo-mallorca/',
    languages: {
      en: 'https://pmax.online/seo-company-mallorca/',
      de: 'https://pmax.online/de/seo-agentur-mallorca/',
      es: 'https://pmax.online/es/agencia-seo-mallorca/',
      'x-default': 'https://pmax.online/seo-company-mallorca/',
    },
  },
  openGraph: {
    title: 'Agencia SEO Mallorca | pmax — SEO local y multilingüe desde Calvià',
    description: 'pmax es una agencia SEO en Mallorca. Posicionamos negocios en cuatro idiomas con SEO técnico, búsqueda local y visibilidad en IA.',
    url: 'https://pmax.online/es/agencia-seo-mallorca/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agencia SEO Mallorca | pmax — SEO local y multilingüe desde Calvià',
    description: 'pmax es una agencia SEO en Mallorca. Posicionamos negocios en cuatro idiomas con SEO técnico, búsqueda local y visibilidad en IA.',
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
    q: '¿Qué hace diferente a una agencia SEO en Mallorca frente a una de la península?',
    a: 'Mallorca es un mercado de cuatro idiomas — español, alemán, inglés y catalán — y un negocio que solo posiciona en uno es invisible para la mayoría de sus clientes. Una agencia SEO que entiende la isla crea y posiciona páginas en cada idioma relevante con hreflang correcto, planifica la estacionalidad turística y trata Palma, Calvià, Andratx y Pollença como mercados locales distintos, no como uno solo.',
  },
  {
    q: '¿Cuánto tarda el SEO en funcionar para un negocio en Mallorca?',
    a: 'Los arreglos técnicos pueden mover el posicionamiento local en pocas semanas. Un perfil de Google Business optimizado correctamente, con reseñas, puede entrar en el pack local en uno o dos meses. El crecimiento orgánico sostenido del contenido suele notarse a partir del mes seis. Quien garantice un primer puesto más rápido, o miente o está haciendo algo que acabará penalizado.',
  },
  {
    q: '¿Posicionáis también en alemán e inglés, no solo en español?',
    a: 'Sí. Trabajamos en español, alemán, inglés y catalán. Para la mayoría de negocios de Mallorca, el mercado de habla alemana es la oportunidad SEO más desaprovechada de la isla, porque casi ninguna agencia local crea páginas en alemán de verdad. Nosotros sí — traducidas y optimizadas, nunca con traducción automática.',
  },
  {
    q: '¿Qué importancia tiene el perfil de Google Business para posicionar en Mallorca?',
    a: 'Para las búsquedas locales, el perfil de Google Business y el pack local del mapa son aproximadamente la mitad de la batalla. Un perfil verificado y bien optimizado, con reseñas reales que mencionen tu servicio, suele subirte más rápido que cualquier cambio en la página. Lo configuramos y gestionamos como parte de cada proyecto de SEO local.',
  },
  {
    q: '¿Dónde está pmax en Mallorca?',
    a: 'Estamos en Calvià, en el suroeste de Mallorca, a veinte minutos de Palma. Trabajamos con clientes de toda la isla y en remoto con marcas de toda Europa.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://pmax.online/es/agencia-seo-mallorca/#localbusiness',
  name: 'pmax — Agencia SEO Mallorca',
  image: 'https://pmax.online/og-image.jpg',
  url: 'https://pmax.online/es/agencia-seo-mallorca/',
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
    { '@type': 'Place', name: 'Islas Baleares' },
  ],
  knowsLanguage: ['es', 'de', 'en', 'ca'],
  sameAs: ['https://www.linkedin.com/company/pmax-online-s-l/'],
}

const jsonLd = [
  breadcrumb([
    { name: 'Inicio', url: 'https://pmax.online/' },
    { name: 'Agencia SEO Mallorca', url: 'https://pmax.online/es/agencia-seo-mallorca/' },
  ]),
  localBusinessSchema,
  faqPage(faqs),
]

export default function AgenciaSeoMallorcaPage() {
  const ledxpress = cases.find(c => c.slug === 'ledxpress')!

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Migas de pan">
              <Link href="/es">Inicio</Link><span className="sep">/</span>
              <span>Agencia SEO Mallorca</span>
            </nav>
            <span className="page-intro-eyebrow">SEO · Mallorca · Calvià</span>
            <h1 className="page-intro-title">Agencia SEO<br />en Mallorca.</h1>
            <p className="page-intro-deck">
              La mayoría de tus clientes no buscan en un solo idioma. Posicionamos negocios de las
              Baleares en español, alemán, inglés y catalán — con SEO técnico, búsqueda local y
              visibilidad en IA. Con sede en Calvià, trabajando en toda la isla.
            </p>
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">idiomas en los que posicionamos negocios de Mallorca</span>
            </li>
            <li className="stat">
              <span className="stat-num">+218%</span>
              <span className="stat-label">mediana de clics orgánicos (no marca) en 12 meses</span>
            </li>
            <li className="stat">
              <span className="stat-num">Calvià</span>
              <span className="stat-label">nuestra base — a 20 minutos de Palma</span>
            </li>
            <li className="stat">
              <span className="stat-num">€€</span>
              <span className="stat-label">tarifa plana, nunca % de la inversión publicitaria</span>
            </li>
          </ul>
        </section>

        <section className="section">
          <div className="container">
            <SectionHead
              kicker="el problema de la isla"
              title={<>El SEO en Mallorca es un<br />problema de cuatro idiomas.</>}
            />
            <div className="prose reveal">
              <p>
                Esto es lo que la mayoría de agencias SEO en Mallorca hacen mal en silencio:
                optimizan en un idioma y dan el trabajo por hecho. Pero la clientela de esta isla
                no funciona así.
              </p>
              <p>
                A un fontanero de Palma lo buscan los locales como <em>&laquo;fontanero Palma&raquo;</em>,
                los residentes alemanes —que representan una enorme parte del poder adquisitivo de
                la isla— como <em>&laquo;Klempner Mallorca&raquo;</em>, los expatriados británicos y
                escandinavos como <em>&laquo;plumber Mallorca&raquo;</em>, y a veces también en
                catalán. Cuatro búsquedas, cuatro idiomas, cuatro grupos de competidores, para el
                mismo negocio. Si solo posicionas en español, eres invisible para la mayoría de la
                gente con dinero para gastar.
              </p>
              <p>
                Es la oportunidad SEO más grande y menos explotada de la isla, y casi nadie
                construye para ella correctamente. Nosotros sí.
              </p>

              <h2>Lo que hacemos de verdad</h2>

              <h3>1. Crear y posicionar en cada idioma que importa</h3>
              <p>
                Páginas reales, específicas por idioma, en español, alemán, inglés y catalán —
                escritas y optimizadas, nunca con traducción automática — con hreflang bien
                implementado para que Google sirva la página correcta al buscador correcto. El
                mercado de habla alemana, en particular, está abierto de par en par, porque muy
                pocas agencias locales construyen para él.
              </p>

              <h3>2. Ganar el perfil de Google Business y el pack local</h3>
              <p>
                Para una búsqueda como <em>&laquo;agencia SEO Mallorca&raquo;</em> o{' '}
                <em>&laquo;restaurante Port d&apos;Andratx&raquo;</em>, el pack del mapa es
                aproximadamente la mitad de la batalla. Verificamos y optimizamos por completo tu
                perfil de Google Business, construimos un programa de reseñas real y mantenemos tu
                NAP (nombre, dirección, teléfono) consistente en todos los directorios — las señales
                que de verdad mueven el posicionamiento local.
              </p>

              <h3>3. Tratar la isla como los muchos mercados locales que es</h3>
              <p>
                Palma, Calvià, Andratx, Pollença, Alcúdia — son mercados locales distintos con
                competencia distinta. Construimos relevancia local para los municipios que realmente
                atiendes, en lugar de una vaga página &laquo;Mallorca&raquo; que no posiciona en
                ningún sitio.
              </p>

              <h3>4. Planificar para la temporada</h3>
              <p>
                La demanda de búsqueda en Mallorca es brutalmente estacional. Un negocio de alquiler
                de villas y un asesor fiscal tienen curvas opuestas. Modelamos la estacionalidad de
                tu sector concreto y nos aseguramos de que tu posicionamiento y tu contenido estén
                listos <em>antes</em> del pico de demanda, no persiguiéndolo después.
              </p>

              <h3>5. Los cimientos técnicos, y luego visibilidad en IA</h3>
              <p>
                Rastreo, indexación, Core Web Vitals, schema, enlazado interno — la ingeniería poco
                glamurosa de la que depende todo lo demás. Después, el trabajo más nuevo de la{' '}
                <Link href="/es/services/ai-visibility">visibilidad en IA</Link>: lograr que
                ChatGPT, Perplexity y las vistas generadas por IA de Google recomienden tu negocio
                cuando alguien pregunta por una empresa en Mallorca.
              </p>

              <div className="prose-callout">
                <div className="prose-callout-kicker">La versión honesta</div>
                <p>
                  El SEO no es magia ni es instantáneo. Los arreglos técnicos se mueven en semanas;
                  un perfil de Google Business puede entrar en el pack local en uno o dos meses; el
                  contenido se capitaliza a partir del mes seis. Quien te prometa un primer puesto
                  garantizado para la semana que viene, o miente o está a punto de penalizarte.
                  Preferimos decirte la verdad y conservarte cinco años.
                </p>
              </div>

              <p>
                ¿Necesitas Google Ads además de SEO?{' '}
                <Link href="/es/agencia-google-ads-espana/">Nuestra agencia de Google Ads en España</Link>
                {' '}explica cómo gestionamos el paid search en Mallorca y el mercado español —
                diferencias de CPC por región, estructura de campañas multilingüe y Performance
                Max para el e-commerce español.
              </p>
              <p>
                ¿SEO, Google Ads y paid social en un solo retainer?{' '}
                <Link href="/es/agencia-de-marketing-mallorca/">Nuestra agencia de marketing en Mallorca</Link>
                {' '}explica cómo estructuramos y presupuestamos programas full-service desde Calvià.
              </p>

              <h2>Con quién trabajamos en la isla</h2>
              <p>
                Hostelería y alquiler de villas, inmobiliarias, restaurantes, clínicas y consultas
                dentales, comercio y servicios, empresas de cháter y náutica, y marcas locales de
                e-commerce que venden desde Mallorca al resto de Europa. Si tus clientes te
                encuentran a través de la búsqueda — en cualquier idioma — podemos ayudarte.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="faq-h">
          <div className="container">
            <SectionHead kicker="FAQ" title={<span id="faq-h">Preguntas frecuentes.</span>} />
            <FaqList items={faqs} />
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <SectionHead kicker="Referencia" title="Del archivo." />
          <ol className="stream reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stream-item">
              <span className="stream-stamp">{ledxpress.stamp}</span>
              <Link href={`/es/cases/${ledxpress.slug}`} className={`stream-card ${ledxpress.variant}`}>
                <div>
                  <span className="stream-kicker">Caso de éxito</span>
                  <h3 className="stream-head">LEDXpress — +365% de ingresos orgánicos en 14 meses</h3>
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
          eyebrow="Auditoría SEO gratis de 30 min"
          headline={<>¿Sabes dónde posicionas de verdad<br />en Mallorca?</>}
          deck="Danos acceso de lectura y dinos en qué idiomas buscan tus clientes — te enviaremos un diagnóstico de una página con tres cosas concretas que arreglar este trimestre. Sin presión comercial, sin presentación."
          ctaHref="/contact"
          ctaLabel="Solicitar auditoría"
          secondaryHref="/es/services/seo"
          secondaryLabel="Nuestro servicio SEO →"
        />

      </main>
      <Footer locale="es" />
    </>
  )
}
