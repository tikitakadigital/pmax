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
  title: 'Agencia de Marketing Digital en Mallorca — Tarifa fija | pmax',
  description: 'pmax es la agencia de marketing digital en Calvià, Mallorca. Google Ads, Meta, SEO y búsqueda con IA para empresas en la isla y marcas europeas. Tarifa mensual fija, 93 % de retención de clientes a doce meses.',
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
    type: 'website',
    siteName: 'pmax',
    title: 'Agencia de Marketing Digital en Mallorca — pmax',
    description: 'Agencia de marketing digital en Calvià, Mallorca. Google Ads, Meta, SEO y búsqueda con IA. Tarifa fija, 93 % de retención.',
    url: 'https://pmax.online/es/agencia-de-marketing-mallorca/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pmaxonline',
    title: 'Agencia de Marketing Digital en Mallorca — pmax',
    description: 'Agencia de marketing digital en Calvià, Mallorca. Tarifa mensual fija, nunca un % de la inversión publicitaria.',
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
    q: '¿Cuánto cobra una agencia de marketing en Mallorca?',
    a: 'El rango es amplio — desde 500 €/mes para un freelance de un solo canal hasta más de 8.000 € para full-service. pmax trabaja con una tarifa mensual fija, normalmente 1.500–5.000 € según el alcance y el número de canales. Sin porcentaje de la inversión publicitaria — nuestro incentivo es hacer que el presupuesto funcione, no inflarlo.',
  },
  {
    q: '¿Cuánto tarda el marketing en dar resultados?',
    a: 'Los canales de pago se mueven en semanas — Google Ads y Meta pueden generar leads en días si la cuenta está bien configurada. El SEO se acumula desde el mes tres, con crecimiento orgánico visible hacia el mes seis. La visibilidad en búsqueda con IA (aparecer en ChatGPT, Perplexity, Gemini) se construye durante trimestres a medida que se acumulan señales de entidad y autoridad. El plazo honesto para tu categoría específica te lo decimos en la primera llamada.',
  },
  {
    q: '¿En qué os diferenciáis de una agencia de la península?',
    a: 'Estamos en la isla. Entendemos que la base de compradores de Mallorca busca en cuatro idiomas — español, alemán, inglés y catalán — y que un negocio de fontanería en Calvià y una marca de villas de lujo en Andratx son problemas de marketing completamente distintos. Llevamos campañas para negocios en Mallorca desde 2019 y conocemos las curvas de demanda estacional, las diferencias de CPC locales y qué canales convierten realmente en la isla.',
  },
  {
    q: '¿Trabajáis en alemán — campañas, reporting y comunicación?',
    a: 'Sí, completamente. Campañas, landing pages, reporting y comunicación diaria en alemán. La población compradora de habla alemana en Mallorca es el segmento de marketing más desatendido de la isla: alto poder adquisitivo, buscando activamente, ignorado casi por completo por las agencias locales que solo trabajan en español. Nosotros construimos para ese segmento desde el principio.',
  },
  {
    q: '¿Podéis gestionar todos nuestros canales de marketing bajo un solo retainer?',
    a: 'Sí. Gestionamos Google Ads, Meta, TikTok, LinkedIn, SEO, visibilidad en IA, diseño de conversión y analítica bajo un equipo integrado y una tarifa mensual fija. La mayoría de clientes empiezan con dos o tres canales y amplían cuando los datos de rendimiento muestran dónde invertir después.',
  },
  {
    q: '¿Cómo empezamos?',
    a: 'Una llamada de 30 minutos — sin presentación, sin discurso de ventas. Preguntamos sobre el negocio, dónde está atascado el crecimiento y qué se ha intentado. Te decimos con franqueza si somos la agencia adecuada para tu situación — y si no lo somos, también lo decimos. La mayoría de llamadas terminan con un siguiente paso claro.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://pmax.online/es/agencia-de-marketing-mallorca/#localbusiness',
  name: 'pmax — Agencia de Marketing Digital Mallorca',
  legalName: 'PMax Online S.L.',
  image: 'https://pmax.online/og-image.jpg',
  url: 'https://pmax.online/es/agencia-de-marketing-mallorca/',
  telephone: '+34871242160',
  email: 'hello@pmax.online',
  priceRange: '€€',
  vatID: 'ESB57948123',
  foundingDate: '2023',
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
    { '@type': 'Place', name: 'España' },
    { '@type': 'Place', name: 'Europa' },
  ],
  knowsLanguage: ['es', 'de', 'en', 'ca'],
  knowsAbout: [
    'Google Ads', 'Performance Max', 'Meta Ads', 'LinkedIn Ads', 'TikTok Ads',
    'SEO', 'AI Search Visibility', 'Generative Engine Optimisation', 'GEO',
    'Digital PR', 'Online Reputation Management', 'Conversion Rate Optimisation',
    'Analytics', 'Server-side Tracking', 'Creative Production',
  ],
  sameAs: [
    'https://www.linkedin.com/company/pmax-online-s-l/',
    'https://www.facebook.com/profile.php?id=61590296614624',
  ],
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
            <span className="page-intro-eyebrow">Agencia de marketing digital · Mallorca · Calvià · Desde 2023</span>
            <h1 className="page-intro-title">Agencia de marketing<br />digital en Mallorca.</h1>
            <p className="page-intro-deck">
              pmax (PMax Online S.L.) es una agencia de marketing digital con sede en Calvià, Mallorca.
              Gestionamos Google Ads, Meta, SEO y búsqueda con IA para empresas en la isla
              y para marcas europeas que quieren su marketing en manos de un equipo que coge el teléfono.
              Tarifa mensual fija, acordada por adelantado. Nunca un porcentaje de tu inversión publicitaria.
            </p>
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stat">
              <span className="stat-num">93&nbsp;%</span>
              <span className="stat-label">tasa de retención de clientes a doce meses</span>
            </li>
            <li className="stat">
              <span className="stat-num">8,4M&nbsp;€</span>
              <span className="stat-label">inversión publicitaria gestionada anualmente en cuentas activas</span>
            </li>
            <li className="stat">
              <span className="stat-num">Calvià</span>
              <span className="stat-label">nuestra base — 20 minutos de Palma, en la isla desde 2019</span>
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
              kicker="el mercado de Mallorca"
              title={<>El marketing digital en Mallorca es un problema<br />de ocho servicios, cuatro idiomas y doce meses.</>}
            />
            <div className="prose reveal">
              <h2>¿Qué es una agencia de marketing digital en Mallorca?</h2>
              <p>
                Una agencia de marketing digital en Mallorca gestiona los canales de pago y orgánicos — Google Ads, Meta, SEO, búsqueda con IA — que generan leads, reservas y ventas para negocios en la isla. pmax (PMax Online S.L.) es una agencia de marketing digital con sede en Calvià, Mallorca, especializada en Google Ads, Meta, SEO, visibilidad en IA (GEO) y analítica. Trabajamos en inglés, alemán y español — el trío de idiomas que domina el mercado comprador de la isla — con una tarifa mensual fija y sin porcentaje sobre la inversión publicitaria.
              </p>
              <p>
                Los resultados en activos: +365 % de ingresos orgánicos en ocho meses para LEDXpress, −93 % de coste por lead en el primer trimestre para Unísono, y una tasa de retención de clientes del 93 % a doce meses. No son cifras de un deck — están en nuestros casos de estudio con los números por delante.
              </p>
              <p>
                Mallorca no es un mercado de marketing sencillo. Hay cuatro poblaciones de
                compradores que se solapan — residentes españoles, expatriados alemanes y
                propietarios, turistas y jubilados anglófonos, y una base local catalanohablante
                — cada una busca de forma distinta, cada una responde a mensajes diferentes
                y cada una está activa en estaciones distintas.
              </p>
              <p>
                Una empresa de alquiler de villas en Andratx necesita Google Ads en alemán
                en enero (early bookers), Meta en inglés en marzo (pico de decisión) y SEO
                en español todo el año para la cuota de búsqueda local. Un restaurante en
                Palma necesita visibilidad en Google Maps en cuatro idiomas y una presencia
                en Meta que convierta durante los meses de turismo sin quemar presupuesto
                en enero. Una empresa de charter náutico necesita ventanas de remarketing
                de 60–90 días, no el estándar de Meta de 30.
              </p>
              <p>
                La mayoría de agencias de la isla eligen un canal, un idioma y lo llaman
                hecho. Los negocios que crecen aquí gestionan un programa integrado —
                paid, orgánico y búsqueda con IA — y lo hacen en los idiomas que sus
                clientes realmente usan.
              </p>

              <h2>Ocho servicios, un equipo integrado</h2>
              <ul>
                <li><Link href="/es/services/google-ads">Google Ads y Performance Max</Link> — Search, Shopping, PMax y YouTube sobre una configuración de conversión limpia. Exclusiones de marca en PMax, importaciones de conversiones offline correctas, revisiones semanales de cuenta.</li>
                <li><Link href="/es/services/paid-social">Paid social</Link> — Meta, TikTok y LinkedIn conectados a tu CRM. Orientado a creatividad y medido en ingresos, no en impresiones.</li>
                <li><Link href="/es/services/seo">SEO</Link> — SEO técnico, de contenidos y local en cuatro idiomas. Rankings que se acumulan y se trasladan a la búsqueda con IA.</li>
                <li><Link href="/es/services/ai-visibility">Visibilidad en búsqueda con IA (GEO)</Link> — ser la empresa que ChatGPT, Perplexity y las AI Overviews de Google citan cuando alguien pregunta por una agencia, villa, hotel o servicio en Mallorca.</li>
                <li><Link href="/es/services/conversion-design">Diseño de conversión (CRO)</Link> — más ingresos con el mismo tráfico. Reconstrucción de landing pages, optimización del flujo de reservas, tests A/B.</li>
                <li><Link href="/es/services/analytics">Analítica y tracking</Link> — GTM server-side, Consent Mode v2, GA4, conversiones offline alimentadas por CRM. La capa de medición de la que depende todo lo demás.</li>
                <li><Link href="/es/services/creative">Producción creativa</Link> — anuncios, landing pages y vídeo a ritmo semanal, briefados por datos de medios y construidos para testear.</li>
                <li><Link href="/es/services/visibility-engineering">Visibility Engineering</Link> — GEO, SEO, PR digital y reputación coordinados en una sola estrategia, porque los motores de búsqueda y las IAs juzgan tu marca de forma holística.</li>
              </ul>

              <h2>Con quién trabajamos en la isla</h2>
              <ul>
                <li><strong>Hostelería y alquiler de villas</strong> — hoteles, alquileres boutique y agencias de villas. Campañas multilingüe para un mercado que pica fuerte en verano y se silencia en enero.</li>
                <li><strong>Inmobiliaria</strong> — agencias que atienden a compradores de habla alemana e inglesa que buscan propiedades en la isla en su propio idioma. Más en nuestro <Link href="/es/industries/real-estate/">playbook de marketing inmobiliario</Link>.</li>
                <li><strong>Náutica y yachting</strong> — empresas de charter con ventanas de reserva largas y una base de clientes genuinamente global. Campañas en ocho idiomas, remarketing de 90 días.</li>
                <li><strong>Salud y estética</strong> — clínicas en Palma y Calvià que atienden a pacientes internacionales que investigan en varios idiomas antes de contactar.</li>
                <li><strong>Servicios profesionales</strong> — abogados, arquitectos, asesores fiscales y consultores para la comunidad expatriada de Mallorca en alemán e inglés.</li>
                <li><strong>E-commerce</strong> — marcas mallorquinas que venden a Alemania, Reino Unido y el resto de Europa. SEO multilingüe, Shopping y Performance Max.</li>
              </ul>

              <h2>Cómo cobramos</h2>
              <p>
                Una tarifa mensual fija, acordada antes de empezar — no un porcentaje de
                tu inversión en medios. Los retainers típicos van de 1.500 a 5.000 €/mes
                según el número de canales y el alcance. El presupuesto de medios lo pagas
                directamente a las plataformas; nosotros nunca lo gestionamos. Nuestro
                incentivo es hacer que la inversión funcione, no inflarla — que es el
                problema estructural de las agencias que cobran por porcentaje.
              </p>

              <h2>Cómo trabajamos — cuatro pasos</h2>
              <ol>
                <li><strong>Escuchar</strong> — primero el negocio, luego los datos, luego las plataformas. Dedicamos la primera semana a entender de dónde vienen realmente los ingresos antes de tocar una campaña.</li>
                <li><strong>Arreglar</strong> — tracking, feeds, schema, Perfil de Empresa de Google: los cimientos sobre los que se sostiene todo lo demás. La mayoría de cuentas nuevas tienen al menos un problema significativo de medición.</li>
                <li><strong>Crecer</strong> — las campañas escalan, la creatividad encuentra su ritmo, el SEO empieza a acumularse.</li>
                <li><strong>Defender</strong> — SEO, búsqueda con IA y protección de marca que compone durante años, no trimestres.</li>
              </ol>

              <div className="prose-callout">
                <div className="prose-callout-kicker">La versión honesta</div>
                <p>
                  El marketing no funciona de la noche a la mañana, y cualquier agencia que
                  diga lo contrario miente o te vende algo sin recorrido. Los canales de pago
                  se mueven en semanas. El SEO se acumula desde el mes tres. La visibilidad
                  en búsqueda con IA se construye durante trimestres. Los negocios con los que
                  trabajamos tres o cuatro años obtienen resultados dramáticamente mejores que
                  los que nos miden a los noventa días. Si ese plazo no te funciona, probablemente
                  no somos el partner adecuado — y lo decimos en la primera llamada.
                </p>
              </div>

              <p style={{ marginTop: 8 }}>
                Esta página también está disponible en{' '}
                <Link href="/marketing-agency-mallorca/">inglés (Marketing Agency Mallorca)</Link>
                {' '}y en{' '}
                <Link href="/de/marketing-agentur-mallorca/">alemán (Marketing Agentur Mallorca)</Link>.
              </p>
              <p>
                ¿Buscas Google Ads específicamente en toda España?{' '}
                <Link href="/es/agencia-google-ads-espana/">Nuestra agencia de Google Ads en España</Link>
                {' '}explica el paid search multilingüe en el mercado español — CPCs regionales,
                estructura de campañas y Performance Max.
              </p>
            </div>
          </div>
        </section>

        <section className="container reveal" style={{ padding: '0 0 48px' }}>
          <figure style={{ margin: 0 }}>
            <div className="card-outlined" style={{ padding: 0, overflow: 'hidden' }}>
              <Image
                src="/palma-cathedral.webp"
                alt="Catedral de Palma, Mallorca — pmax tiene su sede en Calvià, a 20 minutos"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>
            <figcaption style={{ marginTop: 10, fontSize: 13, color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
              Sede en Calvià, Mallorca (PMax Online S.L. · CIF ES B57948123) — a 20 minutos de la Catedral de Palma
            </figcaption>
          </figure>
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
