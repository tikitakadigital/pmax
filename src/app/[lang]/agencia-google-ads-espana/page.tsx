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
  return [{ lang: 'es' }]
}

export const metadata: Metadata = {
  title: 'Agencia Google Ads España — Performance Max | pmax',
  description: 'pmax es una agencia de Google Ads en España — sobre el terreno en Mallorca, no en remoto. Search, Shopping y Performance Max en cuatro idiomas. Tarifa fija, nunca un porcentaje de tu inversión.',
  robots: 'index,follow,max-image-preview:large',
  alternates: {
    canonical: 'https://pmax.online/es/agencia-google-ads-espana/',
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
    title: 'Agencia Google Ads España | pmax — sobre el terreno, multilingüe, tarifa fija',
    description: 'Agencia de Google Ads en España — sobre el terreno en Mallorca. Search, Shopping y Performance Max en cuatro idiomas. Tarifa fija, nunca un porcentaje de tu inversión.',
    url: 'https://pmax.online/es/agencia-google-ads-espana/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pmaxonline',
    title: 'Agencia Google Ads España | pmax',
    description: 'Agencia de Google Ads en España — sobre el terreno en Mallorca, cuatro idiomas, tarifa fija en vez de un porcentaje de la inversión.',
    images: ['/og-image.jpg'],
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
    q: '¿Qué hace diferente a una agencia de Google Ads con sede en España?',
    a: 'La diferencia es el conocimiento del mercado y la responsabilidad. España no es un mercado homogéneo — los CPC en Madrid y Barcelona son notablemente más altos que en Andalucía o las islas, la estacionalidad es extrema en categorías ligadas al turismo, y la realidad de cuatro idiomas (español, catalán, inglés, alemán) hace que una campaña en un solo idioma pierda grandes segmentos de compradores. Una agencia con sede aquí entiende qué ajustes de puja por zona importan y cómo gestionar la facturación y el IVA que hacen tropezar a las agencias en remoto.',
  },
  {
    q: 'Somos una empresa extranjera entrando en el mercado español, ¿podéis ayudar?',
    a: 'Es el encargo más habitual de nuestros nuevos clientes. Alemania y Reino Unido están enviando más empresas a España en 2025–2026, atraídas por costes más bajos, consumo fuerte y turismo récord. Montamos la cuenta desde cero en español, asesoramos sobre landing pages localizadas y damos orientación honesta sobre presupuesto antes de comprometerte. No trabajamos a porcentaje, así que nuestro consejo sobre aumentar el presupuesto nunca tiene conflicto.',
  },
  {
    q: '¿Cómo se comparan los CPC de España con Reino Unido o Alemania?',
    a: 'Generalmente entre un 30 y un 60% más bajos en la mayoría de categorías B2B y e-commerce — lo que hace a España muy atractiva para entrar ahora. Madrid y Barcelona son la excepción: ciertas keywords financieras, legales e inmobiliarias ya igualan o superan los CPC de Londres. La mayor oportunidad: la competencia en inglés por la intención comercial española sigue siendo escasa.',
  },
  {
    q: '¿Gestionáis Performance Max y Shopping para e-commerce español?',
    a: 'Sí. España es uno de los mercados de e-commerce de más rápido crecimiento de Europa Occidental. PMax es el vehículo dominante para la intención de compra, pero requiere límites: exclusiones de marca, grupos de recursos separados por margen y datos de CRM realimentados. También gestionamos la configuración de Merchant Center en España — IVA, reglas de envío de Correos y MRW, y los problemas de datos de producto que lastran a los vendedores extranjeros.',
  },
  {
    q: '¿Qué supone la estacionalidad turística para Google Ads en España?',
    a: 'España batió su récord de visitantes en 2024. Bueno para el turismo, pero un problema de CPC para los demás: hostelería, actividades, alquiler de villas y náutica disparan los precios de subasta en categorías adyacentes de abril a septiembre. Modelamos la curva de estacionalidad de cada cuenta, construimos antes de temporada y planificamos presupuestos según la demanda real, no por trimestre natural.',
  },
  {
    q: '¿Cobráis un porcentaje de la inversión en Google Ads?',
    a: 'No. Siempre una tarifa mensual fija. El precio a porcentaje crea un conflicto de interés estructural: la agencia gana más recomendando presupuestos mayores, independientemente de la eficiencia. Nuestra tarifa no cambia tanto si tu presupuesto es de 3.000 € como de 300.000 € al mes. Pagas a Google directamente, nosotros gestionamos la cuenta.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://pmax.online/es/agencia-google-ads-espana/#localbusiness',
  name: 'pmax — Agencia Google Ads España',
  image: 'https://pmax.online/og-image.jpg',
  url: 'https://pmax.online/es/agencia-google-ads-espana/',
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
    { '@type': 'Country', name: 'España' },
    { '@type': 'Place', name: 'Mallorca' },
    { '@type': 'Place', name: 'Madrid' },
    { '@type': 'Place', name: 'Barcelona' },
    { '@type': 'Place', name: 'Islas Baleares' },
  ],
  knowsLanguage: ['es', 'de', 'en', 'ca'],
  sameAs: ['https://www.linkedin.com/company/pmax-online-s-l/'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '2',
    bestRating: '5',
  },
}

const jsonLd = [
  breadcrumb([
    { name: 'Inicio', url: 'https://pmax.online/' },
    { name: 'Agencia Google Ads España', url: 'https://pmax.online/es/agencia-google-ads-espana/' },
  ]),
  localBusinessSchema,
  faqPage(faqs),
]

export default function AgenciaGoogleAdsEspanaPage() {
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
            <nav className="page-intro-crumbs" aria-label="Migas de pan">
              <Link href="/es">Inicio</Link><span className="sep">/</span>
              <span>Agencia Google Ads España</span>
            </nav>
            <span className="page-intro-eyebrow">Google Ads · España · Sede en Calvià</span>
            <h1 className="page-intro-title">Agencia de Google Ads<br />en España.</h1>
            <p className="page-intro-deck">
              La mayoría de agencias que dicen cubrir España son, o bien equipos remotos de
              Reino Unido o EE.&nbsp;UU. sin nadie sobre el terreno, o bien agencias locales
              españolas cuyo SEO en inglés es invisible para los compradores extranjeros. Nosotros
              estamos físicamente en España, gestionamos cuentas en español, alemán, inglés y
              catalán cada día, y cobramos tarifa fija — nunca un porcentaje de tu inversión.
            </p>
          </div>
        </section>

        <section className="container reveal" style={{ padding: '48px 0 0' }}>
          <div className="card-outlined" style={{ padding: 0, overflow: 'hidden' }}>
            <Image
              src="/palma-cathedral.webp"
              alt="Catedral de Palma, Mallorca — sede de pmax, agencia de Google Ads en España"
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
              <span className="stat-num">8,4M€</span>
              <span className="stat-label">inversión anual en Google Ads gestionada en cuentas activas</span>
            </li>
            <li className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">idiomas en los que lanzamos campañas — ES, DE, EN, CA</span>
            </li>
            <li className="stat">
              <span className="stat-num">España</span>
              <span className="stat-label">donde estamos — no gestionando en remoto desde Londres</span>
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
              kicker="el contexto España"
              title={<>España en 2026 es otro<br />mercado de Google Ads.</>}
            />
            <div className="prose reveal">
              <p>
                La economía española ha superado a la mayoría de Europa Occidental desde 2023. El
                turismo bate récords, la inversión extranjera directa sube, y una ola de empresas
                alemanas y británicas entra en el mercado — atraídas por costes operativos más
                bajos, un consumo interno fuerte y una población joven y nativa digital que compra
                online a uno de los ritmos más altos de la UE. ¿El resultado? Las subastas de
                Google Ads en España son cada vez más competitivas, los CPC suben en las grandes
                ciudades, y la ventana para entrar barato se estrecha.
              </p>
              <p>
                Al mismo tiempo, la oportunidad para empresas extranjeras que buscan en inglés
                sigue muy abierta. La mayor parte de la competencia por consultas como «Google Ads
                agency Spain» son pequeñas agencias locales o grandes redes globales que cobran un
                15–20&nbsp;% de la inversión. El mercado intermedio — un equipo realmente con sede
                en España que entiende el mercado y cobra tarifa fija — está prácticamente sin
                disputar.
              </p>

              <h2>Lo que de verdad exige gestionar Google Ads en España</h2>

              <h3>1. Cuatro idiomas, no uno</h3>
              <p>
                España tiene cuatro lenguas cooficiales y una población significativa de habla
                inglesa y alemana en las costas y las islas. Una campaña que solo se lanza en
                castellano ignora a los catalanohablantes de los mercados de Barcelona y Valencia,
                al mercado expatriado y turístico de habla inglesa de la Costa del Sol y las islas,
                y al mercado de habla alemana concentrado en Mallorca, Tenerife y Gran Canaria.
                Construimos y gestionamos en cada idioma con volumen comercial para tu categoría
                — como práctica estándar, no como un extra.
              </p>

              <h3>2. La estrategia de CPC por región no es opcional</h3>
              <p>
                Madrid y Barcelona pujan ya a niveles cercanos a los de las ciudades del norte de
                Europa en categorías premium — software B2B, legal, servicios financieros,
                inmobiliaria de alto nivel. El resto de España puja bastante más bajo. Si lanzas
                una única campaña nacional sin ajustes de puja geográficos, o estás pagando de
                más en las provincias o perdiendo en las ciudades. Lo modelamos por cuenta — no
                hay una fórmula que sirva para todos.
              </p>

              <h3>3. La estacionalidad turística distorsiona los CPC más allá de lo evidente</h3>
              <p>
                España batió su récord de visitantes internacionales en 2024. Buena noticia para
                el turismo, pero crea un problema de subasta para todos los demás: los anunciantes
                de hostelería, actividades, alquiler de villas y náutica disparan los CPC en
                categorías adyacentes de abril a septiembre. Los negocios de todo el año que no lo
                planifican acaban pagando tarifas de Q2–Q3 que no presupuestaron. Modelamos la
                curva de demanda de todo el año para cada cuenta española.
              </p>

              <h3>4. Performance Max para e-commerce español — con límites</h3>
              <p>
                España es uno de los mercados de e-commerce de más rápido crecimiento de Europa
                Occidental y Performance Max es el vehículo principal para la intención de compra.
                Pero PMax sin una configuración adecuada absorbe el tráfico de marca, mezcla
                niveles de margen y produce cifras de ROAS que parecen sólidas en la plataforma y
                no significan nada para tu cuenta de resultados. En cada cuenta española que
                gestionamos, el primer paso son las exclusiones de marca, los grupos de recursos
                separados por margen y — cuando el ciclo de venta supera la semana — datos de CRM
                realimentados en Smart Bidding. El Merchant Center español también exige una
                configuración específica: ajustes de IVA, reglas de envío por transportista y
                correcciones de calidad de datos que los vendedores extranjeros suelen pasar por
                alto.
              </p>
              <figure style={{ margin: '32px 0' }}>
                <div className="card-outlined" style={{ padding: 0, overflow: 'hidden' }}>
                  <Image
                    src="/google-ads-dashboard-spain.webp"
                    alt="Panel de Google Ads con términos de búsqueda en español — cuenta gestionada por pmax"
                    width={1400}
                    height={696}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <figcaption style={{ marginTop: 10, fontSize: 13, color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
                  Términos de búsqueda en español de una cuenta de Google Ads gestionada por pmax.
                </figcaption>
              </figure>

              <h3>5. El encargo de entrada al mercado</h3>
              <p>
                Una parte importante de las empresas que buscan una agencia de Google Ads en España
                en inglés todavía no operan aquí. Están evaluando España como mercado, o ya han
                tomado la decisión y necesitan a alguien que ejecute. Es un trabajo que hacemos a
                menudo — montar cuentas españolas desde cero, localizar bien los textos (no
                traducción automática), asesorar sobre estrategia de landing pages y dar orientación
                honesta sobre qué categorías y regiones tienen hueco para un nuevo entrante y cuáles
                están saturadas. Como cobramos tarifa fija, nuestro consejo sobre entrar de forma
                agresiva o cauta no tiene sesgo financiero.
              </p>

              <div className="prose-callout">
                <div className="prose-callout-kicker">Sobre las tarifas — la versión corta</div>
                <p>
                  Toda agencia que cobra un porcentaje de la inversión tiene un incentivo para hacer
                  crecer tu presupuesto, beneficie o no a tu negocio. Nosotros cobramos una tarifa
                  mensual fija. Pagas a Google directamente. No tenemos ningún interés financiero en
                  que tu nivel de inversión suba — solo en que tus resultados mejoren.
                </p>
              </div>

              <p style={{ marginTop: 8 }}>
                Esta página también está disponible en{' '}
                <Link href="/google-ads-agency-spain/">inglés (Google Ads Agency Spain)</Link>
                {' '}y en{' '}
                <Link href="/de/google-ads-agentur-spanien/">alemán (Google Ads Agentur Spanien)</Link>.
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
              <span className="stream-stamp">{imero.stamp}</span>
              <Link href={`/es/cases/${imero.slug}`} className={`stream-card ${imero.variant}`}>
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
              <Link href={`/es/cases/${gabiona.slug}`} className={`stream-card ${gabiona.variant}`}>
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
              <Link href={`/es/cases/${luxaflex.slug}`} className={`stream-card ${luxaflex.variant}`}>
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
          eyebrow="Auditoría gratuita de Google Ads"
          headline={<>¿Sabes lo que te cuestan de verdad<br />tus campañas en España?</>}
          deck="Danos acceso de lectura a tu cuenta de Google Ads y dinos qué quieres hacer crecer en España — te enviaremos un diagnóstico de una página con los tres mayores problemas estructurales y una estimación de cada uno. Sin presentación, sin pitch."
          ctaHref="/es/contact?topic=spain-google-ads-audit"
          ctaLabel="Solicitar auditoría"
          secondaryHref="/es/services/google-ads"
          secondaryLabel="Nuestro servicio completo de Google Ads →"
        />

      </main>
      <Footer locale="es" />
    </>
  )
}
