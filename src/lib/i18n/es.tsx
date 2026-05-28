import type { ReactNode } from 'react'
import Image from 'next/image'
import type { ServiceDetail, IndustryDetail, LocalizedCaseDetail, LocalizedBlogDetail } from './de'
export type { ServiceDetail, IndustryDetail, LocalizedCaseDetail, LocalizedBlogDetail }

export const es = {
  lang: 'es' as const,
  htmlLang: 'es',
  locale: 'es_ES',

  nav: {
    services: 'Servicios',
    industries: 'Sectores',
    cases: 'Trabajo',
    blog: 'Blog',
    about: 'Nosotros',
    cta: 'Iniciar proyecto',
  },

  footer: {
    tag: 'Marketing digital desde Mallorca, para marcas en toda Europa.',
    services: 'Servicios',
    industries: 'Sectores',
    company: 'Empresa',
    office: 'Oficina Mallorca',
    links: {
      about: 'Sobre pmax',
      cases: 'Trabajo',
      blog: 'Blog',
      contact: 'Contacto',
    },
    copyright: '© 2026 pmax Online S.L. · NIF ES B57948123 · Calvià, Mallorca',
  },

  home: {
    metaTitle: 'Agencia de marketing digital Mallorca — Google Ads, SEO & IA | pmax',
    metaDesc: 'Google Ads, Meta, LinkedIn, SEO y visibilidad en búsqueda con IA — desde Mallorca para marcas en toda Europa. Tarifas mensuales fijas, sin porcentaje sobre la inversión publicitaria.',
    rotator: ['crecimiento.', 'visibilidad.', 'clientes.', 'resultados.'],
    tagline: 'Una agencia de marketing digital construida para resultados que puedes medir.',
    deckEyebrow: 'Qué hacemos',
    deckText: (
      <>
        pmax es una agencia de marketing digital en Calvià, Mallorca. Trabajamos con empresas de toda la isla, locales e internacionales, y con marcas de toda Europa.
      </>
    ),
    statSpend: 'en inversión publicitaria gestionada',
    statBrands: 'marcas impulsadas desde 2023',
    statLangs: '3 idiomas — inglés, alemán, español',
    svcKicker: '01 — Qué hacemos',
    svcTitle: <>Siete servicios.<br />Una forma de trabajar.</>,
    svcAside: <>Todo lo que hacemos responde a la misma pregunta: <em>¿realmente está haciendo crecer el negocio?</em> Si no, lo dejamos.</>,
    svcCta: 'Ver metodología',
    workKicker: '02 — Trabajo seleccionado',
    workTitle: 'Resultados reales.',
    workAside: 'Diez proyectos con los números por delante. Sin métricas de vanidad — solo lo que apareció en la cuenta bancaria.',
    workCta: 'Todos los casos →',
    industriesCta: 'Ver los 10 sectores en detalle',
    processKicker: '03 — Cómo trabajamos',
    processTitle: <>Cuatro pasos.<br />Sin sorpresas.</>,
    processAside: 'La mayoría de agencias te venden presentaciones. Nosotros te vendemos soluciones. Así es el orden.',
    processSteps: [
      { step: '01', word: 'Listen', time: '2w', desc: 'Primero entendemos el negocio. Luego los datos, luego los canales. Las presentaciones vienen al final.' },
      { step: '02', word: 'Fix', time: '6w', desc: 'Tracking, feeds, datos estructurados, fundamentos. El trabajo poco glamuroso del que depende todo lo demás.' },
      { step: '03', word: 'Grow', time: '12w+', desc: 'Las campañas escalan, los creativos encuentran su ritmo, el dashboard empieza a decir la verdad.' },
      { step: '04', word: 'Defend', time: '∞', desc: 'SEO, visibilidad en IA, protección de marca. Un trabajo silencioso que se acumula durante años.' },
    ],
    journalKicker: '04 — Blog',
    journalTitle: 'Lo que estamos escribiendo.',
    journalAside: 'Notas de trabajo, playbooks y opinión. Escrito por quienes hacen el trabajo, para quienes hacen el trabajo.',
    journalCta: 'Todos los artículos →',
    journalRead: 'Leer artículo',
    faqKicker: '05 — FAQ',
    faqTitle: 'Preguntas frecuentes.',
    homeFaqs: [
      {
        q: '¿Con qué empresas trabajáis en Mallorca?',
        a: 'pmax trabaja con empresas de toda Mallorca, tanto locales como internacionales, gestionando campañas, informes y comunicación en el idioma de cada cliente. Nuestro equipo está en Calvià y atiende a clientes de toda la isla.',
      },
      {
        q: '¿En qué idiomas trabajáis?',
        a: 'Trabajamos en español, alemán e inglés de forma habitual. Los anuncios, las landing pages, el contenido SEO y los informes se producen en el idioma que realmente usan vuestros clientes.',
      },
      {
        q: '¿Dónde estáis ubicados en Mallorca?',
        a: 'pmax está ubicada en Calvià, Mallorca, y trabaja con clientes de toda la isla y del resto de Baleares, además de con marcas de toda Europa.',
      },
      {
        q: '¿Con qué tipo de empresas trabajáis normalmente en Mallorca?',
        a: 'Normalmente trabajamos con empresas de gestión propia en Mallorca —en inmobiliaria, hostelería, e-commerce, sanidad, náutica y yates, y servicios profesionales— ayudándolas a crecer mediante anuncios de pago, SEO y visibilidad en la búsqueda con IA.',
      },
      {
        q: '¿Cómo facturáis?',
        a: 'pmax trabaja con una tarifa mensual fija, no con un porcentaje de la inversión publicitaria. La tarifa se acuerda por adelantado, de modo que el coste es previsible independientemente de cuánto invirtáis en anuncios.',
      },
    ],
    promo: {
      eyebrow: 'Hablemos',
      headline: <>30 minutos.<br />Sin pitch. Sin deck.</>,
      deck: 'Cuéntanos qué está fallando. Te diremos directamente si somos el equipo adecuado para solucionarlo. La mayoría de llamadas terminan con un siguiente paso claro.',
      cta: 'Reservar llamada',
      secondary: 'O escríbenos: hello@pmax.online',
    },
  },

  about: {
    metaTitle: 'Sobre pmax — agencia de marketing digital en Mallorca | pmax',
    metaDesc: 'Equipo senior de marketing digital en Calvià, Mallorca. Google Ads, SEO y visibilidad en IA para marcas en Europa. Tarifas fijas, sin burocracia de agencia.',
    eyebrow: 'Sobre pmax',
    title: <>Un equipo pequeño.<br />Un método <em>con criterio</em>.</>,
    deck: 'Un equipo compacto de especialistas en marketing, analítica y creatividad con base en Calvià, Mallorca — desarrollamos programas de performance y visibilidad en IA para marcas en toda Europa.',
    whyTitle: 'Por qué existimos',
    whyText: (
      <>
        <p>
          La mayoría de agencias digitales venden canales. Nosotros vendemos un sistema. Hace dos años, nuestro fundador Philipp Enders era director de crecimiento en el lado del cliente, viendo cómo las agencias presentaban siempre el mismo deck de Google + Meta + algo de SEO, independientemente de la empresa que tenían delante. Decidió construir algo diferente: un equipo pequeño que hace menos cosas pero más en profundidad, con la capacidad técnica de arreglar un setup de tracking de verdad o reconstruir un product feed — no solo hablar de ello en reuniones.
        </p>
        <p>
          Dos años después, los principios no han cambiado. Elegimos clientes a los que creemos que podemos ayudar de verdad. Les decimos la verdad, incluidas las partes que no quieren escuchar. Cobramos tarifas fijas, no porcentajes de la inversión publicitaria, porque nunca queremos tener un incentivo económico para recomendar más publicidad de la que es realmente necesaria.
        </p>
        <p>
          Si en la primera llamada vemos que no somos el equipo adecuado para ti, te lo decimos. No aceptamos proyectos que no podemos mover.
        </p>
      </>
    ),
    howTitle: 'Cómo trabajamos',
    howText: (
      <>
        <p>
          Cada proyecto empieza con dos semanas de escucha activa: abrimos los datos, hablamos con tu equipo, entendemos el negocio. No sugerimos nada hasta que nos hemos ganado una opinión. Después: un plan escrito, un alcance definido, una tarifa mensual fija y sesiones de trabajo semanales donde ves lo que se está construyendo.
        </p>
        <p>Sin &ldquo;discovery sprints&rdquo; ni &ldquo;talleres de co-creación&rdquo;. Trabajamos, compartimos el avance y entregamos.</p>
      </>
    ),
    beliefsTitle: 'En qué creemos',
    beliefs: [
      { strong: 'Los fundamentos aburridos primero.', text: 'El tracking, los feeds, los datos estructurados y el diseño de conversión marcan el 80 % de la diferencia. Todo lo demás amplifica.' },
      { strong: 'Beneficio, no facturación.', text: 'Un número de ROAS que ignora el margen es ficción de marketing.' },
      { strong: 'El creativo es un sistema, no un accesorio.', text: 'El algoritmo decide qué anuncio mostrar — pero tú decides qué anuncios existen.' },
      { strong: 'La visibilidad en IA es el nuevo SEO.', text: 'Las marcas que aparecen en ChatGPT y Perplexity en 2026 dominarán la próxima década de adquisición orgánica.' },
      { strong: 'La honestidad se acumula.', text: 'Decirle a un cliente que su cuenta no está rota — cuando realmente no lo está — es lo que nos da relaciones de cinco años.' },
    ],
    certsTitle: 'Certificaciones y partnerships',
    certsText: 'Google Partner. Meta Business Partner. Microsoft Advertising Partner. Gestión de datos de clientes alineada con ISO 27001.',
    servicesTitle: 'Qué hacemos',
    servicesText: (
      <>
        Gestionamos{' '}<a href="/es/services/google-ads/">Google Ads</a>,{' '}
        <a href="/es/services/paid-social/">paid social</a>,{' '}
        <a href="/es/services/seo/">SEO</a>,{' '}
        <a href="/es/services/ai-visibility/">visibilidad en IA</a>,{' '}
        <a href="/es/services/analytics/">analítica</a>,{' '}
        <a href="/es/services/conversion-design/">diseño de conversión</a> y{' '}
        <a href="/es/services/creative/">producción creativa</a> — siete servicios, un sistema.{' '}
        <a href="/es/services/">Ver todos los servicios →</a>
      </>
    ),
    casesText: <>Una selección de <a href="/es/cases/">casos de estudio</a> está disponible en nuestro archivo de trabajo — diez proyectos con los números reales.</>,
    startTitle: 'Iniciar un proyecto',
    startDeck: 'La primera llamada dura 30 minutos — a nuestra costa. Cuéntanos qué quieres construir.',
    startCta: 'Reservar llamada',
    contactCta: 'Reservar llamada',
    leadershipLabel: 'Dirección',
    founderRole: 'Fundador y Director',
    founderBio: <>Más de 20 años en marketing digital. Fundador de <a href="https://tikitaka.digital" target="_blank" rel="noopener" style={{ color: 'var(--color-jelly-mint)', borderBottom: '1px solid' }}>tikitaka.digital</a> en Hamburgo antes de abrir pmax en Mallorca. Escribe la mayor parte de nuestro blog y gestiona cuentas personalmente.</>,
    officeLabel: 'Oficina Mallorca',
  },

  contact: {
    metaTitle: 'Contacto — agencia de marketing digital Mallorca | pmax',
    metaDesc: 'Inicia una conversación sobre tu marketing. Email hello@pmax.online o llama al +34 871 242 160. Basados en Mallorca. Primeros 30 minutos gratis.',
    eyebrow: 'Habla con nosotros',
    title: <>Hablemos<br /><em>sin rodeos</em>.</>,
    deck: 'La primera llamada dura 30 minutos — a nuestra costa. Cuéntanos qué quieres hacer crecer y te respondemos en un día laborable.',
    directLabel: 'Contacto directo',
    formTitle: 'Tu proyecto',
    officeLabel: 'Oficina Mallorca',
    hoursLabel: 'Lu–Vi, 9–18h CET',
  },

  services: {
    metaTitle: 'Servicios de marketing digital — Google Ads, SEO & IA | pmax',
    metaDesc: 'Google Ads, Meta, LinkedIn, SEO, visibilidad en IA, diseño de conversión y analítica — siete servicios para un crecimiento medible y rentable.',
    eyebrow: '01 — Qué hacemos',
    title: <>Marketing de performance,<br />construido como <em>ingeniería</em>.</>,
    deck: 'Siete servicios. Un sistema. No vendemos canales de forma aislada — gestionamos un sistema donde Google Ads, Meta, SEO, búsqueda con IA y analítica trabajan con los mismos datos y el mismo objetivo: crecimiento rentable que puedes medir.',
    allKicker: 'Todos los servicios',
    allTitle: '¿Por dónde quieres empezar?',
    allAside: 'La mayoría de clientes empiezan con uno o dos servicios y amplían el programa cuando llegan los números. Así está bien.',
    seeResults: 'Ver resultados →',
    learnMore: 'Ver la metodología',
    ctaTitle: '¿Quieres hablar sobre algún servicio?',
    ctaDeck: 'La primera llamada es de 30 minutos, a nuestra costa. Miramos dónde estás ahora y te decimos con honestidad qué uno o dos servicios moverían más la aguja para tu negocio.',
    ctaBtn: 'Reservar llamada',
    faqKicker: 'FAQ',
    faqTitle: 'Preguntas, respondidas.',
    faqs: [
      {
        q: '¿Qué servicios ofrece pmax?',
        a: 'pmax ofrece siete servicios principales: visibilidad en IA (GEO), Google Ads (Search, Shopping, Performance Max, YouTube), paid social (Meta, TikTok, LinkedIn, Microsoft Ads), SEO (técnico, contenido, digital PR, local), diseño de conversión (CRO y A/B testing), analítica y tracking (GA4, GTM server-side, Consent Mode v2, conversiones offline desde CRM) y producción creativa (creatividades de performance, landing pages, vídeo UGC a escala).',
      },
      {
        q: '¿Con qué tamaño de empresa trabaja pmax?',
        a: 'Con todos. Algunos de nuestros mejores trabajos han sido para pequeñas empresas de Mallorca con sus primeras campañas de Google o Meta. También gestionamos programas para marcas europeas con presupuestos de seis cifras mensuales. Lo que importa más que el presupuesto es si el trabajo puede mover realmente el negocio — eso te lo decimos con honestidad en la primera llamada.',
      },
      {
        q: '¿Por qué cobráis tarifas fijas y no un porcentaje de la inversión?',
        a: 'Porque los porcentajes crean incentivos perversos — las agencias acaban recomendando presupuestos mayores para aumentar sus propios ingresos. Una tarifa fija nos alinea con lo que es realmente correcto para tu negocio, aunque eso signifique recomendar gastar menos.',
      },
      {
        q: '¿Dónde está pmax y en qué mercados trabajáis?',
        a: 'Tenemos sede en Calvià, Mallorca, España. Trabajamos en inglés, alemán y español y atendemos clientes en la región DACH, la Península Ibérica, Reino Unido, Benelux y los países nórdicos. Alrededor del 15 % de nuestros clientes son hispanohablantes.',
      },
      {
        q: '¿Cuánto duran los contratos con pmax?',
        a: 'Los contratos iniciales son de 6 meses. Después se renuevan mensualmente con un período de preaviso de 60 días. Nuestra tasa de retención a 12 meses es del 93 %, pero nunca retenemos a nadie más de lo que es justo. Si no estamos entregando, deberías poder irte sin problema.',
      },
    ],
    serviceItems: [
      { slug: 'ai-visibility', num: '01', badge: 'Nuevo 2026', title: 'Visibilidad en IA (GEO)', deck: 'Cada vez más personas preguntan a ChatGPT, Perplexity o Gemini antes de abrir Google. Nos aseguramos de que tu marca sea la recomendación — a través de bases técnicas limpias, datos estructurados y contenido que los modelos de IA pueden leer.', tags: ['Entidades', 'Schema', 'llms.txt', 'Seguimiento de citas'], variant: 'is-mint', featured: true },
      { slug: 'google-ads', num: '02', title: 'Google Ads & Performance Max', deck: 'Search, Shopping, Performance Max y YouTube — construidos sobre un setup de conversión limpio y un feed de producto que realmente vende. Sin cajas negras.', tags: ['Search', 'PMax', 'Shopping', 'YouTube'], variant: 'is-slate' },
      { slug: 'paid-social', num: '03', title: 'Paid social', deck: 'Meta, TikTok y LinkedIn — conectados a tu CRM, alimentados por un pipeline creativo constante, medidos contra la métrica que paga las facturas.', tags: ['Meta', 'TikTok', 'LinkedIn', 'Microsoft'], variant: 'is-outlined' },
      { slug: 'seo', num: '04', title: 'SEO', deck: 'SEO técnico, contenido y relaciones públicas digitales. Ganamos posicionamiento de la forma lenta y honesta — y el mismo trabajo también suma en la búsqueda con IA.', tags: ['Técnico', 'Contenido', 'SEO local', 'Digital PR'], variant: 'is-violet' },
      { slug: 'conversion-design', num: '05', title: 'Diseño de conversión (CRO)', deck: 'Más ingresos del mismo tráfico. Diseñamos, probamos y publicamos los cambios que mueven la tasa de conversión — no los que ganan premios de diseño.', tags: ['A/B testing', 'UX research', 'Diseño de funnel'], variant: 'is-yellow' },
      { slug: 'analytics', num: '06', title: 'Analítica y tracking', deck: 'GTM server-side, Consent Mode v2, importación de conversiones desde CRM, dashboards que no mienten. La base sobre la que se apoya todo lo demás.', tags: ['GA4', 'Server-side', 'Consent Mode', 'Dashboards BI'], variant: 'is-outlined' },
      { slug: 'creative', num: '07', title: 'Producción creativa', deck: 'Un flujo constante de anuncios, landing pages y vídeo — construido para probar, no para ganar premios. Porque el creativo es la campaña.', tags: ['Estático', 'Motion', 'UGC', 'Landers'], variant: 'is-pink' },
    ],
  },

  serviceDetail: {
    'ai-visibility': {
      metaTitle: 'Visibilidad en IA (GEO) — ChatGPT & Perplexity | pmax',
      metaDesc: 'Consigue que tu marca aparezca en ChatGPT, Perplexity, Gemini y Google AI Overviews. Construimos el schema, el contenido y las señales de confianza que generan citas de IA.',
      headline: <>Visibilidad<br />en IA <em>(GEO)</em>.</>,
      deck: 'Cuando alguien le pregunta a ChatGPT, Perplexity, Gemini o los AI Overviews de Google por una recomendación en tu sector — nos aseguramos de que tu marca sea la respuesta. Con sustancia, no con trucos.',
      stats: [
        { num: '61 %', label: 'de los procesos de compra pasan hoy por una respuesta de IA (Gartner 2026)' },
        { num: '4/4', label: 'motores de IA donde medimos clientes — ChatGPT, Perplexity, Gemini, Google AI Overviews' },
        { num: '12 sem.', label: 'tiempo típico desde el inicio hasta las primeras citas fiables' },
        { num: '0', label: 'atajos. La visibilidad en IA se gana, no se fuerza.' },
      ],
      prose: (
        <>
          <h2>El cambio en la búsqueda</h2>
          <p>Durante veinte años, hacer SEO significaba posicionarse en Google. Eso sigue siendo válido — pero ya no es todo el juego. Una parte creciente de las búsquedas con intención de compra nunca llegan a una página de resultados de Google en 2026. La gente le pregunta a ChatGPT por una recomendación de software B2B. Le pregunta a Perplexity para comparar tres instaladores solares. Recibe una respuesta de Gemini directamente en su Gmail sin abrir Google en ningún momento.</p>
          <p>La pregunta clave ya no es «¿estamos posicionados?» — sino «¿nos citan?»</p>
          <p>La Optimización para Motores Generativos — GEO, visibilidad en IA, como quieras llamarlo — es la disciplina de asegurarte de que los grandes modelos de lenguaje puedan encontrar tu marca, entender lo que haces y recomendarte con confianza cuando alguien pregunta. Se superpone mucho con el SEO clásico, pero añade una capa de trabajo en torno a datos estructurados, desambiguación de entidades y las señales de confianza que los modelos de IA realmente ponderan.</p>
          <h2>Qué hacemos</h2>
          <p>Primero medimos tu visibilidad actual en IA: lanzamos cientos de prompts sobre tu categoría a través de los cuatro grandes motores y registramos qué competidores se mencionan, en qué contexto y con qué valoración. Esa es tu línea base. Luego corregimos los fundamentos técnicos — markup Schema.org, una página Sobre nosotros claramente legible, llms.txt, cobertura de entidades. Después construimos la evidencia en la que confían los modelos de IA: casos de estudio con números verificables, menciones en publicaciones relevantes, contenido experto con firma. Cada mes repetimos los mismos prompts y reportamos qué ha cambiado.</p>
        </>
      ),
      faqs: [
        { q: '¿Qué es la Optimización para Motores Generativos (GEO)?', a: 'GEO es la práctica de hacer que tu marca, productos y contenido sean descubribles dentro de los motores de búsqueda de IA — ChatGPT, Perplexity, Gemini y los AI Overviews de Google — cuando los compradores hacen preguntas relacionadas con tu categoría. Se superpone con el SEO clásico pero utiliza señales de posicionamiento diferentes: contenido factual estructurado, citas de fuentes autorizadas y markup de schema.' },
        { q: '¿Cuánto tiempo se tarda en conseguir que ChatGPT o Perplexity te citen?', a: 'Para la mayoría de categorías, las primeras citas aparecen entre 6 y 10 semanas después de iniciar un programa de GEO estructurado — siempre que tu dominio ya tenga una base de autoridad. Las categorías muy competitivas (servicios financieros, sanidad, software empresarial) suelen tardar 12-16 semanas. Hacemos seguimiento de la tasa de mención en los cuatro principales motores de IA cada mes para que puedas ver el progreso, no adivinarlo.' },
        { q: '¿Es diferente la visibilidad en IA del SEO?', a: 'Sí, pero comparten la misma base. El SEO clásico optimiza para los diez enlaces azules de Google. El GEO optimiza para ser la respuesta que genera un motor de IA — precisión factual, citas de fuentes, schema, reconocimiento de marca. Gestionamos ambos juntos porque el trabajo se potencia mutuamente.' },
        { q: '¿Para qué empresas tiene más sentido la visibilidad en IA?', a: 'El GEO da resultados más rápido en empresas donde los compradores investigan antes de comprar — software B2B, servicios profesionales, compras consideradas (inmobiliaria, solar, sanidad, hostelería, automoción). Si alguien googlea algo antes de comprarlo, ahora también se lo pregunta a la IA.' },
      ],
    },
    'google-ads': {
      metaTitle: 'Agencia Google Ads — Search, Shopping & PMax | pmax',
      metaDesc: 'Google Ads orientado a beneficio, no a ROAS. Performance Max, Search, Shopping — pujas conscientes del margen, conversiones offline desde CRM, estructura limpia.',
      headline: <>Google Ads.</>,
      deck: 'Performance Max, Search, Shopping y Demand Gen — gestionados para el beneficio, no para el dashboard de ROAS. Hacemos el trabajo que la mayoría de agencias se salta: ingeniería de feeds, exclusiones de marca, importación de conversiones offline y el mantenimiento semanal de la cuenta que se acumula con el tiempo.',
      stats: [
        { num: '€8,4 M', label: 'en inversión anual gestionada en Google Ads en cuentas activas' },
        { num: '+184 %', label: 'aumento mediano de ingresos en los primeros 12 meses' },
        { num: '−31 %', label: 'inversión desperdiciada mediana identificada en la auditoría inicial' },
        { num: 'semanal', label: 'revisión de cuenta — nunca configurar y olvidar' },
      ],
      prose: (
        <>
          <h2>Por qué la mayoría de cuentas de Google Ads no rinden</h2>
          <p>Casi todas las cuentas que auditamos tienen los mismos tres problemas. PMax está consumiendo búsquedas de marca y atribuyéndose ingresos que no ha generado. Los grupos de activos son demasiado amplios, con productos de margen alto y bajo compitiendo por el mismo presupuesto. Y el tracking está configurado para optimizar hacia formularios completados, no hacia negocio cerrado — así que el algoritmo busca a las personas más baratas posibles, no a las más valiosas.</p>
          <p>Ninguno de estos es un problema difícil. Solo requiere que alguien mire la cuenta cada semana y haga el trabajo poco glamuroso.</p>
          <h2>Qué hacemos</h2>
          <p>En la semana uno entregamos un diagnóstico honesto de las tres mayores fugas — sin presentación, solo hallazgos. Luego vienen las exclusiones de marca en PMax, grupos de activos separados por nivel de margen, search themes configurados deliberadamente, tracking migrado a server-side con Consent Mode v2 correctamente implementado, y conversiones offline desde tu CRM si tu ciclo de ventas dura más de una semana. Después: mantenimiento semanal, reportes mensuales escritos con lo que cambió, lo que aprendimos y lo que probamos a continuación.</p>
        </>
      ),
      faqs: [
        { q: '¿Cómo optimizáis Google Ads para beneficio en lugar de ROAS?', a: 'Calculamos los objetivos de tROAS basándonos en el margen bruto, no en los ingresos. Las listas de Customer Match se actualizan mensualmente con datos del CRM. La atribución a largo plazo se integra para B2B. Así la plataforma persigue a los clientes que realmente quieres, no a los más baratos.' },
        { q: '¿Funciona Performance Max o es una caja negra?', a: 'PMax funciona cuando está bien estructurado. La mayoría de cuentas tienen PMax demasiado amplio — todos los productos en un grupo de activos, sin exclusiones de marca. Separamos los grupos de activos por nivel de margen, excluimos el tráfico de marca y configuramos search themes deliberadamente. Así PMax se convierte en un canal calculable.' },
        { q: '¿Cuánto presupuesto necesito para Google Ads?', a: 'Depende del mercado, la competencia y tu margen por pedido. Te damos una valoración honesta en la primera llamada — y si tu presupuesto no es suficiente para el canal que buscas, te lo decimos.' },
        { q: '¿Cuánto tiempo hasta ver resultados?', a: 'Las primeras 4-6 semanas son de limpieza y estructura. Después empieza la optimización real. Tras 8-12 semanas normalmente ya vemos si vamos en la dirección correcta. Hay ganancias rápidas en muchas cuentas — pero el crecimiento sostenible requiere paciencia.' },
      ],
    },
    'paid-social': {
      metaTitle: 'Agencia paid social — Meta, TikTok & LinkedIn | pmax',
      metaDesc: 'Meta, TikTok y LinkedIn con volumen creativo semanal. Gestionamos la cadencia de producción que mantiene las cuentas activas y convirtiendo.',
      headline: <>Paid social.</>,
      deck: 'Meta, TikTok y LinkedIn — conectados a tu CRM, alimentados por un pipeline creativo constante, medidos contra la métrica que paga las facturas.',
      stats: [
        { num: '56 %', label: 'del rendimiento lo determina el creativo, según las propias investigaciones de Meta' },
        { num: 'semanal', label: 'nuevas variantes creativas — nunca cuentas estáticas' },
        { num: 'CAPI', label: 'integración de API de conversiones server-side en todas las cuentas' },
        { num: 'CRM', label: 'audiencias custom desde datos reales de clientes, no lookalikes a ciegas' },
      ],
      prose: (
        <>
          <h2>Por qué el volumen creativo lo decide todo</h2>
          <p>Los algoritmos de Meta y TikTok son mejores que nunca encontrando a las personas adecuadas — pero solo pueden elegir entre lo que les das. Si tu cuenta lleva semanas con los mismos cuatro creativos, no estás perdiendo por el targeting. Estás perdiendo porque el algoritmo no tiene nuevos ganadores que encontrar.</p>
          <p>Construimos sistemas de producción que entregan nuevos creativos cada semana — estilo UGC, anuncios estáticos, vídeos cortos — briefeados por las personas que compran los medios, no por departamentos creativos que quieren ganar premios. Los ganadores se escalan, los perdedores se descartan rápido.</p>
          <h2>LinkedIn para B2B</h2>
          <p>Para clientes B2B, LinkedIn suele ser el canal más importante. Gestionamos Conversation Ads, integraciones de lead scoring, conversiones offline desde CRM y el volumen creativo que mantiene una cuenta B2B activa a largo plazo. Los anuncios de thought leadership que vienen de expertos reales convierten mejor — y lo mostramos en los datos.</p>
        </>
      ),
      faqs: [
        { q: '¿Qué es la CAPI y por qué es importante?', a: 'CAPI (Conversions API) es la solución de tracking server-side de Meta. Envía eventos de conversión directamente desde tu servidor a Meta, sin depender de cookies del navegador. En un mundo con las restricciones de tracking de iOS y los requisitos de consentimiento, CAPI es la base para una medición precisa.' },
        { q: '¿Cuántos creativos necesito por semana?', a: 'Depende del presupuesto y la plataforma. Para cuentas de Meta con €5.000-€20.000 de presupuesto mensual recomendamos 3-5 creativos nuevos por semana. Para TikTok, más bien 5-8. Por debajo de eso, el algoritmo aprende demasiado despacio.' },
        { q: '¿Hacéis publicidad en TikTok para empresas B2B?', a: 'Para la mayoría de categorías B2B, TikTok todavía no es la primera opción — LinkedIn o YouTube funcionan mejor. Para B2C y e-commerce, TikTok es a menudo uno de los canales más eficientes. Te decimos honestamente qué tiene sentido para tu categoría.' },
        { q: '¿En qué se diferencia vuestro enfoque de LinkedIn del de otras agencias?', a: 'Conectamos los leads de LinkedIn con datos del CRM e importamos conversiones offline de vuelta a la plataforma. Así LinkedIn aprende a optimizar hacia operaciones cerradas, no hacia formularios completados. Además gestionamos el lead scoring y el thought leadership con impacto de negocio demostrable.' },
      ],
    },
    'seo': {
      metaTitle: 'Agencia SEO — técnico, local & contenido | pmax',
      metaDesc: 'SEO técnico, contenido orientado a intención de compra y expansión internacional. Búsqueda orgánica como canal de ingresos medible, sin métricas de vanidad.',
      headline: <>SEO.</>,
      deck: 'SEO técnico, contenido y relaciones públicas digitales. Ganamos posicionamiento de la forma lenta y honesta — y el mismo trabajo también suma en la búsqueda con IA.',
      stats: [
        { num: '+365 %', label: 'ingresos mensuales orgánicos para LEDXpress en 8 meses' },
        { num: '5,2x', label: 'más leads cualificados para una empresa energética alemana' },
        { num: 'ES+EN+DE', label: 'estructuras SEO multilingüe para clientes internacionales' },
        { num: '0', label: 'atajos. El SEO honesto requiere tiempo.' },
      ],
      prose: (
        <>
          <h2>SEO que realmente genera ingresos</h2>
          <p>La mayoría de programas SEO no fallan por la estrategia — fallan en la ejecución. Fundamentos técnicos que nunca se corrigen de verdad. Contenido escrito para Google, no para personas. Link building de programas masivos que hace más daño que bien. Siempre empezamos por lo técnico: indexación, Core Web Vitals, crawl budget, datos estructurados. Luego contenido orientado a la intención de compra — no porque le guste a Google, sino porque tus clientes buscan las respuestas.</p>
          <p>Para empresas en Mallorca y marcas que quieren captar clientes internacionales, construimos estructuras SEO multilingüe que posicionan en inglés, alemán y español — con hreflang correcto, sitemaps separados y páginas con contenido propio por idioma.</p>
          <h2>SEO y búsqueda con IA</h2>
          <p>El mismo trabajo técnico que mejora el posicionamiento en Google también mejora tu capacidad de ser citado en ChatGPT y Perplexity. Estructuras limpias, datos verificables, señales de entidad claras — eso es SEO y GEO al mismo tiempo. Gestionamos ambos como un único programa.</p>
        </>
      ),
      faqs: [
        { q: '¿Cuánto tiempo tarda el SEO en dar resultados?', a: 'Los primeros movimientos en los rankings suelen ser visibles a las 8-12 semanas cuando los fundamentos técnicos están en orden. El impacto significativo en tráfico e ingresos llega normalmente a los 4-6 meses. No es un defecto — es la naturaleza de un canal que se acumula con el tiempo.' },
        { q: '¿Hacéis también SEO local para empresas en Mallorca?', a: 'Sí. Para empresas locales en Mallorca — hoteles, inmobiliarias, servicios — optimizamos Google Business Profile, construimos páginas de aterrizaje locales y trabajamos con términos de búsqueda en alemán e inglés que usan los clientes reales.' },
        { q: '¿Cuál es la diferencia entre SEO técnico y SEO de contenido?', a: 'El SEO técnico garantiza que Google pueda rastrear e indexar tus páginas — tiempos de carga, Core Web Vitals, sitemaps, canonicals, datos estructurados. El SEO de contenido asegura que aparezcas para las búsquedas correctas — mediante páginas sólidas y orientadas a la intención de compra. Ambas son necesarias; ninguna por sí sola es suficiente.' },
        { q: '¿Hacéis link building?', a: 'Sí, pero de forma selectiva. Ganamos enlaces a través de calidad de contenido real, digital PR y menciones en publicaciones del sector relevantes — sin programas masivos, sin redes de blogs privados. La calidad supera a la cantidad, especialmente con las últimas actualizaciones de Google.' },
      ],
    },
    'conversion-design': {
      metaTitle: 'Diseño de conversión & CRO — Landing pages | pmax',
      metaDesc: 'Más ingresos del mismo tráfico. CRO y diseño de landing pages para flujos de reserva, formularios de solicitud y checkouts.',
      headline: <>Diseño de<br />conversión <em>(CRO)</em>.</>,
      deck: 'Más ingresos del mismo tráfico. Diseñamos, probamos y publicamos los cambios que mueven la tasa de conversión — no los que ganan premios de diseño.',
      stats: [
        { num: '+59 %', label: 'tasa de conversión para LEDXpress tras la optimización del checkout' },
        { num: '11,2 %', label: 'conversión de formulario para PRIMUNDUS tras el rediseño UX' },
        { num: 'A/B', label: 'tests estadísticamente válidos — sin decisiones basadas en instintos' },
        { num: 'Datos', label: 'cada cambio se basa en comportamiento real de usuarios, no en opiniones' },
      ],
      prose: (
        <>
          <h2>Dónde está el margen real</h2>
          <p>La mayoría del presupuesto de marketing se gasta en generar tráfico. Pero el tráfico que ya tienes suele ser más valioso — si optimizas el camino del clic a la compra. Un formulario de reserva con un paso de más. Una landing page que no coincide con el anuncio que lleva hasta ella. Un checkout que no funciona en móvil. Estos problemas cuestan más que cualquier tarifa de agencia.</p>
          <p>Empezamos con datos — mapas de calor, grabaciones de sesiones, análisis de funnel, encuestas a usuarios. Luego desarrollamos hipótesis, construimos variantes de test y medimos los resultados con validez estadística. Los ganadores se despliegan, los perdedores se analizan. Sin adivinar.</p>
        </>
      ),
      faqs: [
        { q: '¿Cuál es la diferencia entre CRO y diseño UX?', a: 'El diseño UX apunta a la usabilidad y la experiencia estética. El CRO apunta a resultados de negocio medibles — más compras, más reservas, más solicitudes. Ambos se superponen, pero las decisiones de CRO siempre se validan mediante datos y tests, no por preferencias de diseño.' },
        { q: '¿Qué herramientas usáis para los A/B tests?', a: 'Trabajamos con Optimizely, VWO y Google Optimize (así como Google Tag Manager para tests más sencillos). La elección depende del stack y el presupuesto. Más importante que la herramienta es la metodología de test — tamaño muestral suficiente, significancia estadística y métricas primarias claramente definidas.' },
        { q: '¿Cuánto tráfico necesito para el CRO?', a: 'Como regla general: para A/B tests significativos en una página necesitas al menos 100-200 conversiones al mes en esa página. Por debajo de eso, el CRO puede seguir teniendo sentido — mediante métodos cualitativos, auditorías heurísticas y correcciones técnicas que no requieren tests.' },
        { q: '¿Trabajáis también con tiendas existentes o solo con desarrollos nuevos?', a: 'Con ambos. Típicamente empezamos con una auditoría del setup existente — análisis de funnel, identificación de las mayores fugas. Luego vienen mejoras específicas. Solo recomendamos una reconstrucción si la estructura base es fundamentalmente incorrecta.' },
      ],
    },
    'analytics': {
      metaTitle: 'Analítica de marketing & tracking — GA4, GTM server-side | pmax',
      metaDesc: 'Tracking que sobrevive a iOS y RGPD. GTM server-side, Consent Mode v2, APIs de conversión e importaciones offline desde CRM — datos reales para cada decisión.',
      headline: <>Analítica y<br />tracking.</>,
      deck: 'GTM server-side, Consent Mode v2, importación de conversiones desde CRM, dashboards que no mienten. La base sobre la que se apoya todo lo demás.',
      stats: [
        { num: 'iOS', label: 'sin pérdida de datos por las restricciones de tracking de Apple' },
        { num: 'RGPD', label: 'medición con Consent Mode v2 sin pérdida de datos' },
        { num: 'CRM', label: 'conversiones offline desde el CRM de vuelta a las plataformas' },
        { num: 'Verdad', label: 'dashboards que muestran lo que realmente ocurre' },
      ],
      prose: (
        <>
          <h2>Por qué la mayoría de dashboards mienten</h2>
          <p>No intencionadamente — pero la instalación estándar de GA4 que tienen la mayoría de sitios web pierde entre el 30 y el 50 % de los datos reales por culpa de iOS, el rechazo del consentimiento y el tráfico de bots. Si tus decisiones de marketing se basan en esos números, estás optimizando hacia datos que no reflejan la realidad.</p>
          <p>Construimos la infraestructura de tracking que entrega datos reales: GTM server-side que no se ve afectado por bloqueadores de anuncios o las restricciones de iOS. Consent Mode v2 que, cumpliendo con el RGPD, incluye estimaciones para usuarios sin consentimiento. APIs de conversión para Meta, Google y LinkedIn que envían señales directamente desde el servidor. Y conversiones offline desde CRM que cierran el círculo desde el clic de marketing hasta el negocio cerrado.</p>
          <p>El resultado: tus plataformas optimizan hacia clientes reales, no hacia el ruido más barato del sistema.</p>
        </>
      ),
      faqs: [
        { q: '¿Cuál es la diferencia entre tracking client-side y server-side?', a: 'El tracking client-side (estándar) funciona mediante JavaScript en el navegador — vulnerable a bloqueadores de anuncios, las restricciones de iOS y el rechazo del consentimiento. El tracking server-side envía eventos directamente desde tu servidor a las plataformas — más robusto, más compatible con la privacidad y más preciso.' },
        { q: '¿Qué es el Consent Mode v2 y lo necesito?', a: 'El Consent Mode v2 es la respuesta de Google a los requisitos de privacidad europeos. Permite a Google incluir conversiones estadísticamente modeladas para usuarios que han rechazado el tracking — sin capturar sus datos. Para clientes en la UE, es de facto obligatorio para las campañas de performance desde marzo de 2024.' },
        { q: '¿Cómo funcionan las conversiones offline desde CRM?', a: 'Importas los acuerdos cerrados de tu CRM (HubSpot, Salesforce, etc.) de vuelta a Google Ads y Meta. Así la plataforma optimiza hacia ingresos reales en lugar de formularios completados. Para empresas B2B, suele ser la acción con mayor palanca.' },
        { q: '¿Trabajáis con cualquier CRM?', a: 'Con la mayoría de los sistemas habituales: HubSpot, Salesforce, Pipedrive, Zoho, y también con soluciones a medida. Necesitamos acceso de lectura a los acuerdos cerrados y un evento definido para la importación de conversiones.' },
      ],
    },
    'creative': {
      metaTitle: 'Producción creativa — vídeo, UGC & estático a escala | pmax',
      metaDesc: 'Creatividades de anuncio al ritmo del performance — UGC, vídeo y estático en volumen semanal. Briefeado por compradores de medios, construido para convertir.',
      headline: <>Producción<br />creativa.</>,
      deck: 'Un flujo constante de anuncios, landing pages y vídeo — construido para probar, no para ganar premios. Porque el creativo es la campaña.',
      stats: [
        { num: 'semanal', label: 'nuevas variantes creativas en producción' },
        { num: 'UGC', label: 'formatos de contenido de usuario auténtico para Meta y TikTok' },
        { num: 'Datos', label: 'cada brief creativo se basa en datos de rendimiento de medios' },
        { num: 'rápido', label: 'los perdedores se descartan, los ganadores se escalan' },
      ],
      prose: (
        <>
          <h2>Por qué el creativo es la palanca decisiva</h2>
          <p>El targeting es hoy en día en gran medida una commodity. Las grandes plataformas — Meta, TikTok, Google — son mejores que nunca encontrando a las personas correctas. Lo que no pueden hacer es producir los creativos correctos por sí solas. El creativo es la campaña. Y la mayoría de empresas producen muy poco, con demasiada poca frecuencia.</p>
          <p>Construimos sistemas de producción creativa que entregan semanalmente. No estéticamente impresionantes, sino con alta tasa de conversión — briefeados por las personas que compran los medios y conocen los números. Vídeos estilo UGC que parecen auténticos porque lo son. Anuncios estáticos que transmiten un mensaje en 1,5 segundos. Landing pages que forman una unidad coherente con el anuncio que lleva hasta ellas.</p>
          <p>Los ganadores se escalan. Los perdedores se descartan rápido — no en meses, sino en semanas. Ese es el ritmo que el marketing de performance exige hoy.</p>
        </>
      ),
      faqs: [
        { q: '¿Qué es el UGC y por qué funciona?', a: 'UGC significa User Generated Content — vídeos o imágenes que parecen creados por usuarios reales, no por agencias. Suelen funcionar mejor que la publicidad de alta producción en Meta y TikTok porque parecen más auténticos y se asemejan al contenido nativo del feed. Producimos contenido estilo UGC con creators reales o producciones propias basadas en briefing.' },
        { q: '¿Cuántos creativos necesito al mes?', a: 'Depende del presupuesto y la plataforma. Como referencia: para cuentas de Meta con €5.000-€20.000 de presupuesto mensual, recomendamos 10-20 variantes creativas nuevas al mes. Por debajo de eso, el algoritmo no tiene suficiente para aprender. Por encima, la producción empieza a crear cuellos de botella.' },
        { q: '¿Trabajáis con nuestros diseñadores internos?', a: 'Sí, con gusto. Podemos actuar como dirección creativa y creadores de briefing mientras tu equipo se encarga de la producción. O lo entregamos todo nosotros — estrategia, briefing, producción, análisis de datos. Ambas opciones funcionan; nos adaptamos a tu setup.' },
        { q: '¿Hay un volumen mínimo para la producción creativa?', a: 'No. Pero por debajo de cierto umbral, un programa de producción creativa continuo no tiene sentido económico. Para cuentas más pequeñas puede ser más sensato hacer un sprint creativo cada 4-6 semanas en lugar de producir semanalmente.' },
      ],
    },
  } as Record<string, ServiceDetail>,

  industries: {
    metaTitle: '10 sectores — marketing digital especializado | pmax',
    metaDesc: 'Marketing digital adaptado a 10 sectores: e-commerce, inmobiliaria, sanidad, hostelería, energías renovables, náutica, RRHH, retail, automoción y energía.',
    eyebrow: 'Sectores con los que trabajamos',
    title: <>El mismo método.<br />Diez <em>sectores</em>.</>,
    deck: 'No fingimos ser generalistas. En seis años hemos construido playbooks profundos para diez sectores — cada uno con su propio ciclo de compra, regulación, dinámica competitiva y definición de un buen lead.',
    items: [
      { slug: 'ecommerce', num: '01', badge: 'Más activo', title: 'E-commerce', deck: 'DTC, marketplace y retail omnicanal. Optimización de feeds, Performance Max, creatividades para paid social — el stack completo de ingresos.', variant: 'is-mint', featured: true },
      { slug: 'real-estate', num: '02', title: 'Inmobiliaria', deck: 'Lead gen de valoraciones, portales de listados, integración CRM. Agencias en Mallorca, Madrid, Berlín y Viena.', variant: 'is-slate' },
      { slug: 'healthcare', num: '03', title: 'Sanidad', deck: 'Clínicas DTC, telemedicina y medicina estética. Textos conscientes de la regulación, tracking compatible con RGPD, journeys multilingüe de pacientes.', variant: 'is-outlined' },
      { slug: 'renewables', num: '04', title: 'Energías renovables', deck: 'Solar, bombas de calor e infraestructura de VE. Ciclos de compra largos, compradores técnicos, valores de lead de seis cifras.', variant: 'is-violet' },
      { slug: 'boating', num: '05', title: 'Náutica & yachting', deck: 'Charter, brokerage y marinas en las Baleares y el Mediterráneo. Planificación de medios estacional en once idiomas.', variant: 'is-yellow' },
      { slug: 'hr', num: '06', title: 'RRHH & recruiting', deck: 'SaaS B2B, marketing de recruiting, employer branding. LinkedIn suele ser el canal principal; todo lo demás lo apoya.', variant: 'is-pink' },
      { slug: 'retail', num: '07', title: 'Retail', deck: 'Retail físico multilocación. Local Inventory Ads, tracking de conversiones en tienda, Meta y Google con targeting geográfico.', variant: 'is-blue' },
      { slug: 'automotive', num: '08', title: 'Automoción', deck: 'Nuevo, usado, VE. Grupos de concesionarios en tres países — más pruebas de conducción sin más personal.', variant: 'is-orange' },
      { slug: 'energy', num: '09', title: 'Energía', deck: 'Marketing de utilities, demand response, servicios energéticos B2B. Ciclos de venta largos, propuestas de valor complejas.', variant: 'is-slate' },
      { slug: 'hospitality', num: '10', title: 'Hostelería', deck: 'Hoteles, resorts y alquileres vacacionales. Crecimiento de reservas directas, reducción de dependencia de las OTA, creatividades multilingüe.', variant: 'is-outlined' },
    ],
  },

  industryDetail: {
    ecommerce: {
      metaTitle: 'Marketing e-commerce — Shopify, DTC & Performance Max | pmax',
      metaDesc: 'Sistema de crecimiento para retailers DTC, marketplace y omnicanal — optimización de feeds, Performance Max, paid social, SEO y visibilidad IA en shopping.',
      headline: <>E-commerce que<br /><em>realmente</em> escala.</>,
      deck: 'Un sistema de crecimiento para retailers DTC, marketplace y omnicanal — construido sobre datos de conversión limpios, pujas conscientes del margen y el volumen creativo que sigue el ritmo al algoritmo.',
      stats: [{ num: '42+', label: 'marcas de e-commerce impulsadas' }, { num: '€38 M', label: 'en inversión publicitaria gestionada en 2025' }, { num: '+365 %', label: 'ingresos mensuales orgánicos para LEDXpress en 8 meses' }, { num: 'DACH', label: 'mercado principal — pero escalamos a 14 países' }],
      prose: (<><p>La mayoría de cuentas de e-commerce pierden dinero sin saberlo. PMax optimiza hacia conversiones en lugar de margen. Los feeds tienen precios desactualizados o atributos que faltan. Los ciclos creativos son demasiado lentos para los algoritmos de las plataformas. El tracking captura pedidos pero no devoluciones. Cada uno de estos problemas tiene solución — pero solo si alguien lo revisa cada semana.</p><p>Construimos sistemas de crecimiento para e-commerce que actúan en todos los niveles: ingeniería de feeds que da a cada producto los atributos correctos. Performance Max separado por niveles de margen, no por categorías de producto. Paid social con el volumen creativo que Meta y TikTok necesitan para aprender de verdad. SEO que construye tráfico orgánico mientras el paid escala. Y tracking que tiene en cuenta las devoluciones y mide el beneficio real.</p></>),
      faqs: [
        { q: '¿Trabajáis con Shopify o también con otras plataformas?', a: 'Con Shopify, WooCommerce, Shopware, Magento y sistemas a medida. Para la optimización de feeds trabajamos directamente con el Merchant Center y DataFeedWatch u herramientas similares.' },
        { q: '¿Qué es la optimización de feeds y por qué es importante?', a: 'Tu feed de productos es la base de Google Shopping y Performance Max. Los atributos que faltan, los títulos de producto poco claros o los precios desactualizados reducen la visibilidad directamente. Optimizar el feed significa dar a cada producto los atributos que Google necesita para mostrarlo en el momento correcto.' },
        { q: '¿Cómo gestionáis las variaciones estacionales?', a: 'Mediante pacing de presupuesto, ajustes de puja estacionales y producción creativa a tiempo para los temas de temporada. Para clientes de e-commerce planificamos el año con antelación y ajustamos los presupuestos y la cadencia creativa a los picos de temporada conocidos.' },
      ],
    },
    'real-estate': {
      metaTitle: 'Marketing inmobiliario — leads de valoración & SEO | pmax',
      metaDesc: 'Marketing de performance para agencias inmobiliarias — lead gen de valoraciones, SEO de portales y CRM integrado. Especialistas en Mallorca y España.',
      headline: <>Marketing<br /><em>inmobiliario</em>.</>,
      deck: 'Lead gen de valoraciones, portales de listados, integración CRM. Entendemos el mercado inmobiliario de Mallorca y los compradores europeos que buscan en la isla.',
      stats: [{ num: '+183 %', label: 'leads de llamada para Unisono Luxury Homes' }, { num: 'DE+EN', label: 'Campañas bilingüe para compradores germanohablantes' }, { num: 'CRM', label: 'Lead scoring hasta la firma del contrato' }, { num: 'Local', label: 'Google Business + optimización de portales inmobiliarios' }],
      prose: (<><p>El mercado inmobiliario en Mallorca es un mercado de compradores con ciclos de decisión largos y clientes internacionales. Una pareja alemana buscando una casa de vacaciones se comporta de manera diferente a un inversor español buscando una propiedad de rentabilidad — ambos necesitan mensajes distintos, canales diferentes y seguimientos distintos en el CRM.</p><p>Construimos sistemas que se dirigen a cada tipo de comprador: campañas de Google en alemán orientadas a términos de intención de compra como «comprar finca Mallorca». Estructuras SEO que posicionan para búsquedas locales e internacionales. Secuencias de nurture basadas en CRM que mantienen el interés de los prospectos durante semanas. Y tracking que evalúa las solicitudes por calidad de lead, no solo por volumen.</p></>),
      faqs: [
        { q: '¿Tenéis experiencia en el mercado de Mallorca?', a: 'Sí. Unisono Luxury Homes es uno de nuestros clientes directos en Mallorca — con +183 % en leads de llamada y +138 % en tasa de clics orgánica tras nuestro programa. Entendemos el mercado local y los perfiles de compradores internacionales que lo caracterizan.' },
        { q: '¿Cómo funciona el lead gen de valoraciones para agencias inmobiliarias?', a: 'Construimos landing pages para solicitudes de valoración basadas en términos de búsqueda específicos y las conectamos con un sistema de nurture basado en CRM. Lo importante no es solo generar el lead, sino también cualificarlo — intención de venta, plazo, segmento de precio.' },
        { q: '¿Gestionáis también campañas para mercados fuera de Mallorca?', a: 'Sí. Atendemos agencias inmobiliarias en Alemania, Austria y Suiza con los mismos métodos — estructuras SEO regionales, integración CRM, campañas multilingüe.' },
      ],
    },
    healthcare: {
      metaTitle: 'Marketing sanitario — clínicas, telemedicina & DTC | pmax',
      metaDesc: 'Marketing de performance para marcas de salud — clínicas DTC, telemedicina, medicina estética. Tracking compatible con RGPD y journeys de pacientes multilingüe.',
      headline: <>Marketing<br /><em>sanitario</em>.</>,
      deck: 'Clínicas DTC, telemedicina y medicina estética. Textos conscientes de la regulación, tracking compatible con RGPD, journeys multilingüe de pacientes.',
      stats: [{ num: 'RGPD', label: 'infraestructura de tracking conforme en todas las cuentas de salud' }, { num: 'PRIMUNDUS', label: '4,2x más consultas de cuidados cualificadas en 9 meses' }, { num: 'ES+EN+DE', label: 'journeys de pacientes multilingüe' }, { num: '0', label: 'infracciones regulatorias — conocemos las normas' }],
      prose: (<><p>El marketing sanitario opera dentro de un marco regulatorio estricto — especialmente en España y Alemania. Lo que puedes y no puedes decir varía según la especialidad, el medio y el público objetivo. Conocemos estos límites y nos mantenemos del lado correcto — sin renunciar al rendimiento.</p><p>Para clínicas DTC construimos journeys de pacientes que van desde la primera búsqueda hasta la reserva. Para plataformas de telemedicina escalamos el paid social con una infraestructura de tracking compatible con el RGPD. Para la medicina estética producimos contenido que es honesto, preciso y atractivo — sin promesas exageradas, pero con mensajes claros.</p></>),
      faqs: [
        { q: '¿Cuáles son las principales restricciones legales para el marketing sanitario en España?', a: 'La Ley de Garantías y Uso Racional de los Medicamentos regula qué se puede mostrar y afirmar. Las fotos de antes y después están prohibidas en muchos casos, las promesas de éxito deben ser demostrables, y ciertas especialidades están sujetas a normas más estrictas. Siempre trabajamos con plantillas aprobadas legalmente.' },
        { q: '¿Cómo gestionáis la privacidad de los leads de pacientes?', a: 'De forma server-side. Todos los datos de pacientes se procesan a través de una infraestructura de servidor segura y conforme con el RGPD — sin transferencias basadas en píxeles a Meta o Google sin consentimiento explícito. Trabajamos con Data Clean Rooms y métodos de coincidencia agregados.' },
        { q: '¿Hacéis también marketing sanitario internacional?', a: 'Sí, especialmente para clínicas en Mallorca con pacientes internacionales — campañas multilingüe en alemán, inglés y español, SEO para términos médicos y journeys de pacientes en los tres idiomas.' },
      ],
    },
    renewables: {
      metaTitle: 'Marketing energías renovables — solar, VE & bomba de calor | pmax',
      metaDesc: 'Marketing digital para solar, bombas de calor y marcas de VE. Ciclos de compra largos, compradores técnicos, valores de lead de seis cifras — para el funnel completo.',
      headline: <>Energías<br /><em>renovables</em>.</>,
      deck: 'Solar, bombas de calor e infraestructura de VE. Ciclos de compra largos, compradores técnicos, valores de lead de seis cifras — construido para el camino completo.',
      stats: [{ num: '€40 K+', label: 'valor medio del lead en instalaciones solares' }, { num: '6-18 m.', label: 'ciclo de compra típico para sistemas de energía renovable' }, { num: 'DE+ES', label: 'experiencia en los mercados DACH e Iberia' }, { num: 'B2B+B2C', label: 'tanto particulares como instaladores comerciales' }],
      prose: (<><p>El mercado de las energías renovables tiene un problema de marketing: los ciclos de compra largos, los compradores escépticos y los valores de inversión elevados dificultan la definición de métricas de performance con sentido. Un lead solar generado hoy puede comprar en seis meses — o no hacerlo. ¿Cómo se mide eso?</p><p>Construimos sistemas de atribución que rastrean el camino completo: desde el primer clic en un anuncio de Google hasta la firma con el instalador. Las conversiones offline desde CRM fluyen de vuelta a las plataformas, para que los algoritmos optimicen hacia cierres reales, no hacia formularios completados. Para compradores técnicos producimos contenido que informa de verdad — no greenspeak, sino datos sobre períodos de amortización, tarifas de inyección y especificaciones técnicas.</p></>),
      faqs: [
        { q: '¿Cómo medís el éxito con ciclos de venta tan largos?', a: 'Mediante integración CRM e importación de conversiones offline. Definimos múltiples puntos de conversión — primera solicitud, reunión de consulta, oferta, cierre — y rastreamos todos de vuelta a la fuente de marketing original. Eso permite modelos de atribución reales incluso con ciclos de 6-18 meses.' },
        { q: '¿Qué canales funcionan mejor para el marketing solar?', a: 'Google Ads para búsquedas de alta intención como «instalar paneles solares [ciudad]». SEO para consultas informativas sobre costes y amortización. Meta y YouTube para awareness y remarketing. LinkedIn para instaladores B2B y clientes comerciales. La mezcla correcta depende del tamaño de tu ticket y tu mercado objetivo.' },
        { q: '¿Gestionáis también campañas de solar en Mallorca?', a: 'Sí. El mercado balear tiene características especiales — alta intensidad solar, precio de la electricidad en la isla y una audiencia internacional mixta. Gestionamos campañas multilingüe para empresas solares de Mallorca en alemán, inglés y español.' },
      ],
    },
    boating: {
      metaTitle: 'Marketing náutico & yachting | pmax',
      metaDesc: 'Marketing de performance multilingüe para charter de yates, brokerage y marinas. Planificación estacional de medios en el Mediterráneo en 11 idiomas.',
      headline: <>Náutica &<br /><em>yachting</em>.</>,
      deck: 'Charter, brokerage y marinas en las Baleares y el Mediterráneo. Planificación de medios estacional en once idiomas.',
      stats: [{ num: '11', label: 'idiomas en campañas náuticas activas' }, { num: 'Abr-Oct', label: 'temporada alta en el Mediterráneo — el período de reserva decisivo' }, { num: '€200 K+', label: 'valores medios de reserva en campañas de charter de lujo' }, { num: 'Mallorca', label: 'nuestro mercado local, con contactos directos en la isla' }],
      prose: (<><p>El negocio del yachting tiene un problema especial de timing: las reservas se concentran en un período estrecho, pero las decisiones se toman a menudo con meses de antelación. Quien no es visible en marzo pierde la temporada de verano. Al mismo tiempo, los clientes vienen de Alemania, Reino Unido, Rusia, Oriente Medio — todos con idiomas distintos y hábitos de reserva diferentes.</p><p>Planificamos campañas náuticas basándonos en el calendario de reservas, no en promedios anuales. Creatividades de awareness para early bookers en febrero. Campañas de performance para reservas de última hora en julio. Remarketing para clientes habituales que reservaron el año pasado. Landing pages multilingüe que convencen en el idioma del cliente.</p></>),
      faqs: [
        { q: '¿En cuántos idiomas podéis gestionar campañas de yachting?', a: 'De forma activa y efectiva en inglés, alemán, español, francés y ruso. Para otros idiomas trabajamos con redactores nativos. La traducción sola no es suficiente — el comportamiento de reserva y los canales preferidos varían según el mercado.' },
        { q: '¿Cuál es el mejor canal para las reservas de charter de yates?', a: 'Para reservas directas, Google Ads es el canal más potente. Para awareness e inspiración, Instagram y YouTube son especialmente efectivos. El email marketing para clientes habituales suele tener el mayor ROI. La mezcla correcta depende del tamaño de tu barco y el segmento de precio.' },
        { q: '¿Trabajáis también con plataformas de charter como Click & Boat o YachtCharterFleet?', a: 'Sí. Optimizamos tanto el canal de reservas directas como la presencia en los grandes portales de charter — listados, reseñas, estrategia de precios. Las reservas directas tienen márgenes más altos, pero los portales aportan volumen. Ambos forman parte de la estrategia.' },
      ],
    },
    hr: {
      metaTitle: 'Marketing RRHH & recruiting — LinkedIn & employer brand | pmax',
      metaDesc: 'Demand generation en LinkedIn para HR tech, plataformas de recruiting y grandes empleadores. Lead scoring desde CRM, conversiones offline y contenido de employer brand.',
      headline: <>RRHH &<br /><em>recruiting</em>.</>,
      deck: 'SaaS B2B, marketing de recruiting, employer branding. LinkedIn suele ser el canal principal; todo lo demás lo apoya.',
      stats: [{ num: 'LinkedIn', label: 'canal principal para HR tech y marketing de recruiting' }, { num: 'CRM', label: 'lead scoring hasta el SAL — no solo MQL' }, { num: 'B2B', label: 'ciclos de ventas complejos con múltiples tomadores de decisiones' }, { num: '+312 %', label: 'inscripciones cualificadas a eventos para un inversor VC vía LinkedIn' }],
      prose: (<><p>El HR tech y el marketing de recruiting son categorías B2B con ciclos de decisión largos y múltiples stakeholders. El responsable de RRHH quiere un mensaje diferente al del CFO que aprueba el presupuesto. Al mismo tiempo, el mercado está muy concurrido — muchos proveedores, promesas similares, poca diferenciación.</p><p>Construimos programas de LinkedIn que optimizan hacia una intención de compra real — no hacia métricas de LinkedIn como impresiones o crecimiento de seguidores. Conversation Ads para contacto directo. Anuncios de contenido para thought leadership. Integración CRM que conecta los MQL con el resultado SAL, para que LinkedIn aprenda de los acuerdos cerrados, no de los formularios completados.</p></>),
      faqs: [
        { q: '¿Por qué LinkedIn es mejor que otros canales para el marketing de RRHH?', a: 'LinkedIn tiene la opción de targeting profesional y empresarial más precisa de todas las plataformas. Puedes segmentar por cargo, tamaño de empresa, sector y nivel de seniority — llegando exactamente a los People Leaders, VP de RRHH o Talent Acquisition Managers que son tus tomadores de decisiones.' },
        { q: '¿Cuál es la diferencia entre MQL y SAL, y por qué importa?', a: 'MQL (Marketing Qualified Lead) es un lead que cumple los criterios de marketing — p.ej. un formulario completado. SAL (Sales Accepted Lead) es un lead que el equipo de ventas ha confirmado como cualificado. La mayoría de programas de marketing optimizan hacia MQLs; los mejores, hacia SALs o incluso Closed Won.' },
        { q: '¿Hacéis también employer branding?', a: 'Sí. El employer branding en LinkedIn significa: contenido auténtico de empleados reales, campañas de Sponsored Content dirigidas a segmentos de candidatos relevantes, y retargeting para personas que han visitado la página de carreras. Medimos el employer branding por la calidad de las solicitudes, no por los seguidores.' },
      ],
    },
    retail: {
      metaTitle: 'Marketing retail multilocación — Local Inventory Ads | pmax',
      metaDesc: 'Marketing de performance para retail físico multilocación. Local Inventory Ads, tracking de conversiones en tienda, Meta y Google con targeting geográfico.',
      headline: <>Retail<br /><em>multilocación</em>.</>,
      deck: 'Retail físico multilocación. Local Inventory Ads, tracking de conversiones en tienda, Meta y Google con targeting geográfico.',
      stats: [{ num: '60+', label: 'franquiciados coordinados en la red Luxaflex' }, { num: '+184 %', label: 'visitas a tiendas en toda la red' }, { num: 'LIA', label: 'Local Inventory Ads para disponibilidad de productos en tiempo real' }, { num: 'Geo', label: 'targeting por radio de influencia de cada tienda' }],
      prose: (<><p>El retail multilocación tiene problemas de marketing distintos al e-commerce: los clientes buscan localmente, compran en tienda, y el tracking a menudo se detiene en la puerta. Cerramos esa brecha con tracking de conversiones en tienda que conecta las visitas con las campañas.</p><p>Para redes de tiendas con 10+ ubicaciones construimos sistemas de performance marketing centralizados con segmentación local: Google Local Campaigns, Local Inventory Ads con datos de stock reales, y campañas de Meta separadas por áreas de influencia de cada tienda. Cada tienda recibe el presupuesto correcto en función de su potencial, no de hábitos históricos.</p></>),
      faqs: [
        { q: '¿Qué son los Local Inventory Ads y cómo funcionan?', a: 'Los Local Inventory Ads muestran la disponibilidad de productos en la tienda más cercana directamente en los resultados de búsqueda de Google. Los clientes ven si el producto que buscan está disponible en su zona — lo que incrementa significativamente las visitas a tienda. El requisito previo es un Local Inventory Feed actualizado.' },
        { q: '¿Cómo medís las visitas a tienda procedentes de campañas online?', a: 'A través de Store Visits de Google, modeladas a partir de datos de cuentas de Google y señales GPS. Para datos más precisos utilizamos integración con el punto de venta o códigos de canje dedicados que conectan las campañas directamente con las compras.' },
        { q: '¿Cómo gestionáis la distribución de presupuesto entre muchas tiendas?', a: 'Mediante reglas de puja basadas en la ubicación y datos de rendimiento por tienda. Las tiendas con mayor potencial de ventas reciben presupuesto proporcionalmente mayor. Recomendamos alejarse de la distribución uniforme — no todas las tiendas tienen el mismo potencial de mercado.' },
      ],
    },
    automotive: {
      metaTitle: 'Marketing automoción — nuevo, usado & VE | pmax',
      metaDesc: 'Marketing de performance para fabricantes de automóviles, grupos de concesionarios y marcas de VE. Brand lift studies, consolidación de red y lead gen de pruebas de conducción.',
      headline: <>Marketing<br /><em>automoción</em>.</>,
      deck: 'Nuevo, usado, VE. Grupos de concesionarios en tres países — más pruebas de conducción sin más personal.',
      stats: [{ num: '+38 %', label: 'intención de compra para un fabricante europeo de automóviles' }, { num: '+22 %', label: 'recuerdo de marca tras campaña de brand en Meta' }, { num: '3', label: 'países en una campaña coordinada de grupo de concesionarios' }, { num: 'VE', label: 'programas especializados para fabricantes y concesionarios de vehículos eléctricos' }],
      prose: (<><p>El marketing de automoción abarca desde el conocimiento de marca hasta el lead de prueba de conducción — un funnel que a menudo dura meses e incluye múltiples puntos de contacto. El desafío: cada canal mide de forma diferente, cada concesionario quiere sus propios números, y el fabricante quiere consistencia en toda la red.</p><p>Para grupos de concesionarios construimos sistemas centralizados con segmentación local: campañas específicas por modelo a nivel de concesionario, protección de keywords de marca en toda la red, y un sistema de atribución compartido que rastrea el camino desde la primera impresión hasta la reserva de prueba de conducción. Para fabricantes, diseñamos y medimos campañas de marca con brand lift studies — medición real, no impacto asumido.</p></>),
      faqs: [
        { q: '¿Cómo funcionan los brand lift studies?', a: 'Los brand lift studies miden el impacto de las campañas de marca mediante encuestas: los usuarios expuestos a la campaña se comparan con un grupo de control que no la ha visto. Se mide el conocimiento de marca, la intención de compra y el ad recall. Meta, YouTube y LinkedIn ofrecen mediciones nativas de brand lift.' },
        { q: '¿Cómo coordinéis el marketing a través de una red de concesionarios?', a: 'Mediante gestión centralizada de campañas a nivel de marca con presupuestos locales para concesionarios individuales. Plantillas creativas estandarizadas que se adaptan localmente. Reporting compartido que muestra tanto los KPI de la red como el rendimiento individual de cada concesionario.' },
        { q: '¿Tenéis experiencia en marketing de VE?', a: 'Sí. El marketing de VE tiene desafíos especiales: ansiedad por la autonomía, preguntas sobre infraestructura de carga, precios más altos y compradores que investigan intensamente. Hemos gestionado campañas para concesionarios y fabricantes de VE y conocemos los mensajes que convierten.' },
      ],
    },
    energy: {
      metaTitle: 'Marketing energía & utilities — SEO B2B & search | pmax',
      metaDesc: 'Marketing digital B2B para empresas energéticas. Ciclos de compra largos, atribución desde CRM, demand generation en LinkedIn y contenido técnico.',
      headline: <>Energía &<br /><em>utilities</em>.</>,
      deck: 'Marketing de utilities, demand response, servicios energéticos B2B. Ciclos de venta largos, propuestas de valor complejas.',
      stats: [{ num: '5,2x', label: 'más leads cualificados para venta para una utility alemana en 12 meses' }, { num: '−34 %', label: 'coste por SQL tras integración de conversiones offline desde CRM' }, { num: '12 m.', label: 'duración típica del programa' }, { num: 'B2B', label: 'enfocado en clientes empresariales e instalaciones industriales' }],
      prose: (<><p>Las utilities y los proveedores de servicios energéticos B2B tienen problemas de marketing que las soluciones estándar no resuelven. Los ciclos de compra de 12+ meses hacen que la atribución estándar sea irrelevante. Los tomadores de decisiones técnicas no quieren promesas brillantes, sino datos sólidos. Y la competencia a menudo se diferencia poco — todos ofrecen electricidad o gas.</p><p>Construimos programas SEO B2B orientados al camino de investigación real de los tomadores de decisiones en energía. Contenido que responde preguntas técnicas reales. Integración CRM que rastrea el camino desde el primer consumo de contenido hasta el cierre del contrato. Campañas de LinkedIn que se dirigen a los miembros del comité de compra técnico — no a individuos, sino a grupos de tomadores de decisiones.</p></>),
      faqs: [
        { q: '¿Cómo medís el impacto del marketing con ciclos de venta de 12+ meses?', a: 'Mediante integración CRM y atribución multietapa. Definimos micro-conversiones en el camino al cierre — p.ej. descargas de contenido, asistencia a webinars, solicitudes — y rastreamos cada paso de vuelta a la campaña. Así veis tempranamente qué canales generan oportunidades cualificadas.' },
        { q: '¿Qué papel juega el SEO en el marketing energético B2B?', a: 'Un papel importante. Los tomadores de decisiones en energía investigan intensamente antes de tomar decisiones de compra — whitepapers técnicos, comparativas, casos de estudio. El SEO orientado a consultas informativas en la fase temprana de investigación genera puntos de contacto cualificados mucho antes de la primera conversación comercial.' },
        { q: '¿Gestionáis también campañas energéticas internacionales?', a: 'Sí. Especialmente para el mercado DACH e Iberia tenemos programas activos. Conocemos las diferencias regulatorias entre mercados y adaptamos los mensajes y canales en consecuencia.' },
      ],
    },
    hospitality: {
      metaTitle: 'Marketing hotel & hostelería — reservas directas & OTA | pmax',
      metaDesc: 'Marketing de performance para hoteles y resorts orientado a reservas directas. Reducción de dependencia de OTA, Google Hotel Ads, Meta, creatividades multilingüe.',
      headline: <>Marketing<br /><em>hotelero</em>.</>,
      deck: 'Hoteles, resorts y alquileres vacacionales. Reservas directas, reducción de dependencia de las OTA, creatividades multilingüe.',
      stats: [{ num: '+52 %', label: 'reservas directas para un hotel de Mallorca en 11 semanas' }, { num: 'Google', label: 'Hotel Ads como canal de reservas directas junto a las OTA' }, { num: 'OTA', label: 'reducir la dependencia — ahorrar el 30 % de comisión de las OTA' }, { num: 'DE+EN+ES', label: 'captar huéspedes de tres mercados en tres idiomas' }],
      prose: (<><p>Booking.com y Expedia se llevan el 20-30 % de comisión por cada reserva. No es ningún secreto — pero la mayoría de hoteles no han construido una alternativa. Las reservas directas son más baratas, permiten la comunicación directa con el huésped y crean la fidelización de clientes habituales que las OTA nunca pueden ofrecer.</p><p>Construimos programas de reservas directas para hoteles: Google Hotel Ads que aparecen junto a los listados de las OTA y a menudo convierten más barato. Campañas de Meta con mensajes estacionales en el idioma del huésped. Remarketing para visitantes del sitio web que aún no han reservado. Programas de email para huéspedes existentes. Y tracking que compara reservas directas contra reservas de OTA — para que puedas comparar el coste real por reserva.</p></>),
      faqs: [
        { q: '¿Qué son los Google Hotel Ads y cómo funcionan?', a: 'Los Google Hotel Ads muestran tu hotel directamente en la búsqueda de Google con precios y disponibilidad — junto a las ofertas de las OTA. Pagas por clic o como porcentaje sobre las reservas completadas. Los hoteles con su propio sistema de reservas pueden competir directamente, a menudo con mejores precios que las OTA.' },
        { q: '¿En qué medida puedo reducir de forma realista la dependencia de las OTA?', a: 'En nuestra experiencia, los hoteles pueden aumentar su porcentaje de reservas directas del típico 20-30 % al 40-55 % en 6-12 meses. No es una salida de las OTA, pero sí una mejora significativa de los márgenes y la relación con el huésped.' },
        { q: '¿Tenéis experiencia con hoteles en Mallorca?', a: 'Sí. Uno de nuestros clientes, Mar y Roca en Mallorca, aumentó sus reservas directas un 52 % en 11 semanas. Conocemos el mercado hotelero de Mallorca, los patrones de reserva estacionales y los segmentos de huéspedes alemán, británico y español.' },
      ],
    },
  } as Record<string, IndustryDetail>,

  cases: {
    metaTitle: 'Casos de estudio — resultados de marketing digital | pmax',
    metaDesc: '10 casos de estudio: +365 % ingresos SEO, −93 % coste por lead, +307 % registros. Resultados reales de e-commerce, inmobiliaria, SaaS, retail y más.',
    eyebrow: 'Trabajo seleccionado · 2024–2026',
    title: <>Números reales<br />de clientes <em>reales</em>.</>,
    deck: 'Diez proyectos donde el cambio correcto movió el negocio. Compartimos lo que construimos, lo que funcionó y — donde es útil — lo que no.',
    allKicker: 'Todo el trabajo · 2024–2026',
    allTitle: 'Diez proyectos.',
    seeServices: 'Ver todos los servicios →',
    promoEyebrow: '¿Quieres un resultado similar?',
    promoHeadline: 'Cuéntanos qué estás intentando hacer crecer.',
    promoDeck: 'Miramos tus números, tus competidores y tu categoría — y te decimos con honestidad si somos el equipo adecuado para ayudarte.',
    promoBtn: 'Iniciar proyecto',
    items: [
      { slug: 'unisono', stamp: 'MAY 2026', kicker: 'Inmobiliaria de lujo · Alquiler de villas · Mallorca', title: 'Unisono Luxury Homes: +138 % CTR, +183 % leads telefónicos — un programa multicanal', deck: 'SEO, Google Ads, Microsoft Ads y desarrollo web como programa semanal — para una marca independiente de villas de lujo en una categoría dominada por portales internacionales.', result: { num: '+183 %', label: 'Leads de llamada YoY' }, variant: 'is-pink' },
      { slug: 'imero', stamp: 'ABR 2026', kicker: 'SaaS · Cumplimiento en vino & spirits', title: 'IMERO e-label: −60 % CPC y +307 % registros a través de una reconstrucción de Google Ads', deck: 'Smart Bidding, expansión a Display + YouTube y trabajo en landing pages — convirtiendo Google Ads en una máquina de registros para un SaaS regulado en 11 idiomas.', result: { num: '+307 %', label: 'Registros YoY' }, variant: 'is-yellow' },
      { slug: 'ledxpress', stamp: 'MAR 2026', kicker: 'E-commerce · Iluminación LED · DACH', title: 'LEDXpress: +365 % ingresos gracias al SEO en ocho meses', deck: 'Una reconstrucción completa de SEO para una tienda de iluminación LED europea — sacando el crecimiento de la rueda de los anuncios de pago y llevándolo al tráfico orgánico que se acumula.', result: { num: '+365 %', label: 'Ingresos mensuales, 8 meses' }, variant: 'is-mint' },
      { slug: 'gabionas', stamp: 'ENE 2026', kicker: 'E-commerce · Jardín & outdoor', title: 'Gabiona: valor medio del pedido +41 %, ROAS hasta 6,8x', deck: 'Google Shopping reconstruido por margen, combinado con remarketing que recupera los carritos que vale la pena recuperar — no todos.', result: { num: '+41 %', label: 'Valor medio del pedido' }, variant: 'is-violet' },
      { slug: 'primundus', stamp: 'DIC 2025', kicker: 'Sanidad · Cuidados regionales', title: 'PRIMUNDUS: el SEO regional multiplicó las consultas por 4,2x en nueve meses', deck: 'Una estrategia SEO local-first para un proveedor de cuidados alemán — páginas ciudad por ciudad, señales de confianza y contenido que realmente ayuda a las familias que buscan.', result: { num: '4,2x', label: 'Consultas de cuidados cualificadas' }, variant: 'is-pink' },
      { slug: 'preo', stamp: 'OCT 2025', kicker: 'SaaS B2B · Reventa de software', title: 'PREO Software AG: búsquedas de marca triplicadas en doce meses', deck: 'Un programa SEO B2B para un creador de categoría: no «posicionar para keywords», sino «convertirse en el nombre que los compradores escriben en el buscador».', result: { num: '3,1x', label: 'Volumen de búsqueda de marca' }, variant: 'is-yellow' },
      { slug: 'energy-utility', stamp: 'JUL 2025', kicker: 'Energía · Utilities B2B', title: 'Utility energética B2B: 5,2x más leads cualificados para venta desde búsqueda orgánica', deck: 'Un programa SEO técnico y paciente para una empresa energética alemana — construido para compradores que investigan durante doce meses antes de firmar nada.', result: { num: '5,2x', label: 'Leads cualificados para venta' }, variant: 'is-blue' },
      { slug: 'vc-investor', stamp: 'MAY 2025', kicker: 'Finanzas · Capital riesgo', title: 'Inversor de VC: 312 % más inscripciones cualificadas a eventos vía LinkedIn', deck: 'Marketing en LinkedIn para un fondo de capital riesgo — awareness, consideración y una única conversión de alto valor: founders inscribiéndose a eventos solo por invitación.', result: { num: '+312 %', label: 'Inscripciones cualificadas a eventos' }, variant: 'is-mint' },
      { slug: 'automotive', stamp: 'FEB 2025', kicker: 'Automoción · Marca', title: 'Fabricante de automóviles: los anuncios de brand awareness elevaron la intención de compra un 38 %', deck: 'Una campaña de marca en Meta + Instagram para un gran fabricante europeo de automóviles — con una metodología de brand lift study que demostró que funcionó.', result: { num: '+38 %', label: 'Elevación de intención de compra' }, variant: 'is-slate' },
      { slug: 'luxaflex', stamp: 'NOV 2024', kicker: 'Retail · Protección solar', title: 'Red de concesionarios Luxaflex: performance marketing escalado a través de 60+ franquiciados', deck: 'Un sistema de performance marketing multilocación para la red europea de concesionarios Luxaflex — control de calidad centralizado, relevancia local.', result: { num: '+184 %', label: 'Visitas a tiendas en toda la red' }, variant: 'is-orange' },
    ],
  },

  blog: {
    metaTitle: 'Blog — guías prácticas de marketing digital | pmax',
    metaDesc: '18 guías prácticas sobre Google Ads, Meta, SEO, visibilidad en IA y analítica. Escritas por quienes gestionan las campañas.',
    eyebrow: 'El blog',
    title: <>Sin rodeos sobre<br /><em>marketing digital</em>.</>,
    deck: 'Notas de trabajo, playbooks y opinión. Escrito por quienes hacen el trabajo, para quienes hacen el trabajo. Sin relleno de contenido.',
    langNotice: 'Este artículo está disponible en inglés.',
    readInEn: 'Leer en inglés →',
    promoEyebrow: 'Sugerir un tema',
    promoHeadline: <>Sin newsletter.<br />Pero pregunta.</>,
    promoDeck: 'No gestionamos una lista de email — pero si hay un tema sobre el que quieras que escribamos, cuéntanoslo.',
    promoBtn: 'Sugerir un tema',
    posts: [
      { slug: 'google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026', title: 'Google Ads vs. Meta Ads vs. TikTok Ads para ecommerce en 2026.', deck: 'Sin teoría de escuela de marketing. Sin slides de fabricante. Una comparación brutalmente práctica de dónde rinde cada plataforma en 2026 — y dónde quema presupuesto sin que nadie lo note.' },
      { slug: 'how-to-get-mentioned-by-chatgpt', title: 'Cómo conseguir que ChatGPT, Perplexity y Gemini mencionen tu negocio', deck: 'Una guía en castellano sobre visibilidad en búsqueda con IA en 2026 — qué es, por qué importa y cinco acciones para empezar este mes.' },
      { slug: 'performance-max-2026', title: 'Performance Max en 2026: qué ha cambiado y qué hacemos ahora', deck: 'Un recorrido práctico por los siete ajustes de Performance Max que cambiamos primero en cada nueva cuenta de cliente.' },
      { slug: 'tracking-setup-guide', title: 'Una guía sin jerga para configurar el tracking de marketing correctamente', deck: 'Por qué la mayoría de dashboards mienten un poco, de dónde viene la discrepancia y cómo hacer el tracking bien.' },
      { slug: 'meta-creative-volume', title: 'Meta dice que el creativo es el 56 % del rendimiento. Así es como se produce en realidad.', deck: 'Un sistema semanal de producción creativa que funciona sin quemar a los diseñadores.' },
      { slug: 'google-ads-mallorca', title: 'Cómo ganar con Google Ads cuando tus clientes viven en Mallorca y tus competidores no', deck: 'Geo-targeting, señales de idioma, tracking de conversiones local y los ajustes pequeños que marcan una gran diferencia.' },
      { slug: 'shopify-seo-2026', title: 'Shopify SEO en 2026: los ocho cambios que valen la pena este trimestre', deck: 'La mayoría de tiendas Shopify filtran valor SEO por defecto. Los pocos arreglos de tema y estructura que más mueven el tráfico orgánico.' },
      { slug: 'b2b-linkedin-playbook', title: 'El playbook de LinkedIn B2B que enviamos a cada nuevo cliente SaaS', deck: 'Conversation ads, lead scoring, conversiones offline desde CRM y la cadencia creativa que mantiene una cuenta B2B activa.' },
      { slug: 'cookieless-tracking', title: 'El tracking sin cookies ya está aquí. La mayoría de marketers no están preparados.', deck: 'Lo que Consent Mode v2, el tagging server-side y el fin de las cookies de terceros significan para tus datos de conversión.' },
      { slug: 'hotel-direct-bookings', title: 'Cómo un hotel de Mallorca aumentó las reservas directas un 52 % en 11 semanas', deck: 'Un breve caso sobre lo que hizo Mar y Roca para romper su dependencia de Booking.com.' },
      { slug: 'real-estate-lead-gen', title: 'Lead gen inmobiliario en 2026: por qué tu formulario es el problema', deck: 'La mayoría de webs inmobiliarias pierden el 80 % de los compradores motivados en el formulario. Cinco mejoras que funcionan.' },
      { slug: 'tiktok-organic-paid', title: 'El bucle orgánico-paid de TikTok: lo que realmente funciona en 2026', deck: 'Los tres patrones de contenido en TikTok que generan impresiones y el setup de paid que ponemos encima.' },
      { slug: 'solar-marketing-spain', title: 'Marketing solar en España: el trabajo poco glamuroso que mueve la aguja', deck: 'Por qué la mayoría de instaladores solares pierden dinero en Meta — y la estructura de funnel que convierte un clic de €40 en una instalación de €6.000.' },
      { slug: 'creative-testing-framework', title: 'Un framework de testing creativo que realmente se acumula', deck: 'Cómo probar creatividades publicitarias para construir una biblioteca de ganadores — no un cementerio de lanzamientos únicos.' },
      { slug: 'gpt-shopping', title: 'Qué significa «ChatGPT shopping» para las marcas de e-commerce en 2026', deck: 'OpenAI está construyendo silenciosamente una interfaz de compras dentro de ChatGPT. Así te aseguras de que tus productos aparezcan.' },
      { slug: 'ga4-mistakes', title: 'Los siete setups de GA4 que corregimos en cada nuevo cliente', deck: 'GA4 está bien. La mayoría de instalaciones de GA4 no lo están. Las siete cosas específicas que cambiamos en la semana uno, siempre.' },
      { slug: 'crm-conversion-imports', title: 'Deja de optimizar por formularios completados. Optimiza por ingresos.', deck: 'Por qué importar conversiones offline desde tu CRM es la acción con mayor palanca que un equipo de marketing B2B puede hacer este año.' },
      { slug: 'yachting-marketing', title: 'Comercializar un negocio de charter náutico: un problema de ocho idiomas y doce meses', deck: 'Cómo planificamos los medios para un negocio estacional con un valor medio de reserva de seis cifras y clientes en tres zonas horarias.' },
      { slug: 'agency-pricing-honest', title: 'Por qué cobramos tarifas fijas, no un porcentaje de la inversión publicitaria', deck: 'Una breve nota sobre los incentivos perversos bajo los que operan la mayoría de agencias — y por qué nosotros no lo hacemos.' },
    ],
  },

  caseDetail: {
    automotive: {
      metaTitle: 'Jaguar Land Rover — +9,4 % de recuerdo publicitario via Meta | pmax',
      metaDesc: 'Campaña de brand awareness para Jaguar Land Rover en Facebook e Instagram. +9,4 % de recuerdo publicitario estimado y −68 % en coste por visita a la landing page en 8 meses.',
      heroTitle: 'Cómo incrementamos el recuerdo publicitario de Jaguar Land Rover un 9,4 % — y redujimos el coste por visita a la landing page un 68 %.',
      stats: [
        { num: '+9,4 %', label: 'Incremento estimado del recuerdo publicitario' },
        { num: '−8,5 %', label: 'Coste por recuerdo publicitario estimado (por persona)' },
        { num: '−68 %', label: 'Coste por visita a la landing page' },
        { num: '2.380 M', label: 'Usuarios activos mensuales alcanzables en Meta' },
      ],
      prose: (<>
        <div className="case-brief"><p>Uno de los fabricantes originales de tracción a las cuatro ruedas — más de 65 años construyendo SUVs duraderos y de alto rendimiento — quería usar la escala de Meta para mantenerse en la mente de los compradores de coches con intención de compra a través de múltiples líneas de modelo. El briefing era de awareness, pero el CMO quería que se midiera correctamente: no impresiones y alcance, sino si los anuncios realmente cambiaron lo que la gente recordaba.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>El briefing — hacer la marca medible</h2><p>Con 2.380 millones de usuarios activos mensuales, Facebook e Instagram eran la opción obvia de escala para el lanzamiento de un SUV. La pregunta más difícil era cómo demostrar que el presupuesto funcionó. Elegimos el ad recall como KPI principal — una métrica de brand lift que mide lo memorable que es un anuncio para su audiencia — porque es el indicador anticipado más claro de que el creative está haciendo su trabajo en el feed.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>Hacer las preguntas correctas, luego testear</h2><p>El trabajo comenzó como un proceso, no como un plan de medios. Anotamos las preguntas que realmente importaban y luego diseñamos tests para responderlas:</p><ul><li>¿Con qué tipo de contenido ya interactúa esta audiencia en las páginas orgánicas de Jaguar Land Rover?</li><li>¿Qué formatos de anuncio funcionan mejor — vídeo, imagen única, carrusel, anuncios dinámicos?</li><li>¿Qué opción de puja ofrece el incremento de recuerdo publicitario más barato y fiable?</li><li>¿Cómo se comparan las audiencias basadas en intereses con las conductuales más amplias a escala?</li></ul><p>Una plataforma de testing de datos de terceros ejecutó los experimentos. Cada audiencia y formato corrió contra un grupo de control para que los números de lift fueran defendibles, no solo indicativos.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>El sistema creativo</h2><p>La agencia creativa de Jaguar Land Rover produjo el vídeo y la fotografía. Nosotros lo tradujimos en una biblioteca de anuncios funcional para Facebook feed, Instagram feed e Instagram Stories — construida para funcionar en los placements donde los compradores realmente hacen scroll.</p><p>Las campañas se dirigían a posibles compradores adultos de coches mayores de 25 años, luego ajustamos dentro de eso según las audiencias que se demostraban. El targeting por intereses se usó para añadir personas con pasiones adyacentes — deportes al aire libre, contenido de automoción premium, comunidades off-road.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>Placements automáticos, split deliberado</h2><p>Dejamos que los placements automáticos de Meta hicieran su trabajo para la eficiencia, pero el gasto acabó aproximadamente 60/40 a favor de Facebook — lo que coincidía con donde el recuerdo publicitario era más barato de comprar. Las campañas también encajaban en el lanzamiento integrado más amplio de Jaguar Land Rover junto a TV, prensa y exterior.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">05</span><h2>Resultados — abril a noviembre de 2020</h2><p>Ocho meses de campañas always-on de awareness en Facebook e Instagram, medidas correctamente:</p><ul><li><strong>+9,4 %</strong> de incremento estimado del recuerdo publicitario</li><li><strong>−8,5 %</strong> en coste por recuerdo publicitario (por persona)</li><li><strong>−68 %</strong> en coste por visita a la landing page</li></ul><p>El incremento del recuerdo publicitario fue lo más importante. Es la métrica que demuestra que un gasto de marca está haciendo trabajo de marca — no solo comprando alcance que desaparece en cuanto termina la campaña.</p></section>
        <div className="prose-callout"><div className="prose-callout-kicker">La conclusión</div><p>La brand en Meta solo funciona cuando alguien hace las preguntas correctas cada semana. La plataforma gastará con gusto un presupuesto mensual de seis cifras en impresiones que nadie recuerda. El trabajo que incrementa el recuerdo publicitario un 9,4 % es el trabajo que nadie ve: lecturas semanales de formatos, cortes de audiencia, tests de estrategia de puja, refresco de creatividades. Nada de eso es glamuroso. Todo ello se acumula.</p></div>
      </>),
    },
    'energy-utility': {
      metaTitle: 'Empresa energética B2B — caso de SEO y paid search | pmax',
      metaDesc: 'Cómo una estrategia B2B de búsqueda paciente aumentó las impresiones orgánicas un 31 % y las conversiones de paid un 52 % para una empresa energética alemana con clientes industriales.',
      heroTitle: '+31 % en impresiones orgánicas, +52 % en conversiones de paid — lo que ocurre cuando una agencia de SEO B2B se encuentra con un gigante energético cotizado.',
      stats: [
        { num: '+31 %', label: 'Impresiones orgánicas interanual' },
        { num: '+24,4 %', label: 'Mejora de la posición media de ranking' },
        { num: '−15 %', label: 'Tasa de rebote vs. año anterior' },
        { num: '+52 %', label: 'Conversiones de paid search' },
      ],
      prose: (<>
        <div className="case-brief"><p>Una empresa energética alemana cotizada que suministra electricidad y gas natural a clientes industriales, más un portfolio de socios energéticos B2B. El briefing abarcaba tanto búsqueda orgánica como pagada — la orgánica era la mitad más difícil, más lenta y más interesante del trabajo. Dentro de una categoría altamente regulada, con un enorme mapa de stakeholders internos y una arquitectura de sitio heredada de años de fusiones y rebranding.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>El punto de partida: no un problema técnico, sino de coordinación</h2><p>Las empresas energéticas que sirven a clientes industriales tienen exigencias muy específicas del performance marketing. Largos ciclos de deliberación, decisiones lideradas por procurement, lenguaje regulado, compra con contratos intensivos. Nos contrataron para aumentar el tráfico orgánico y los leads cualificados — pero aprendimos rápido que las correcciones técnicas eran la parte fácil. La restricción real era interna: conseguir que los cambios fueran aprobados e implementados dentro de una organización regulada y cotizada se mueve al ritmo del stakeholder más lento, no al de la recomendación SEO más rápida.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>El descubrimiento: «Roma no se construyó en un día»</h2><p>Una idea familiar dentro de cualquier gran empresa — menos familiar para las agencias más ágiles y pequeñas que se asocian con ellas. Mejorar el orgánico para esta empresa requería más que limpieza de metadatos, correcciones de compatibilidad móvil y remediación de Core Web Vitals. Requería paciencia y construcción de relaciones tanto como habilidad técnica en SEO.</p><p>No se nos contrató inicialmente para asesorar en cambios de contenido u optimización on-page. Pero cualquier buen socio de SEO B2B sabe que la corrección técnica por sí sola no mueve la gráfica — el buen contenido y una experiencia de usuario sólida sí lo hacen.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>La metodología: orgánico y paid funcionando como uno</h2><p>Junto al programa SEO ejecutamos una estrategia de performance marketing B2B que combinó paid search en Google Ads y Bing Ads con campañas pagadas de LinkedIn y Xing — los canales que los responsables de decisiones de procurement en la industria alemana realmente usan.</p><ul><li>SEO técnico (metadatos, compatibilidad móvil, Core Web Vitals, schema, enlazado interno)</li><li>Contenido y optimización on-page, incorporados al alcance según se desarrolló la relación</li><li>Paid search en Google Ads &amp; Bing Ads con estrategia de puja y audiencia específica para B2B</li><li>Campañas pagadas de LinkedIn y Xing dirigidas a procurement industrial y compradores de energía</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>El resultado: moviendo la gráfica, lentamente y luego de forma constante</h2><ul><li><strong>+31 % impresiones orgánicas interanual</strong> — visibilidad construida deliberadamente en las consultas que importan.</li><li><strong>+24,4 % posición media de ranking</strong> — una mejora estructural, no un pico.</li><li><strong>−15 % tasa de rebote</strong> — el trabajo on-page hacía coincidir las landing pages con la intención.</li><li><strong>+52 % conversiones de paid search</strong> — el programa de paid potenciando el orgánico, sin canibalizar.</li></ul></section>
        <div className="case-callout"><span className="case-callout-kicker">Testimonio del cliente</span><p>«Solo podemos hablar positivamente de trabajar con pmax. Asumieron Google Ads, Bing y LinkedIn Ads, y ejecutaron campañas combinadas multicanal junto a eso. Somos un proveedor de energía puramente B2B, así que no es un entorno sencillo. Philipp realizó un análisis de audiencia muy deliberado y pudimos generar algunos leads muy interesantes. La colaboración fue un placer.»</p><span className="case-callout-attr">— Responsable de marketing, proveedor de energía B2B (Alemania)</span></div>
        <div className="case-takeaway"><span className="case-takeaway-kicker">Lo que hizo que funcionara</span><p>Ser un buen socio significa llevar muchos sombreros — muchos que no encajan, muchos a los que no estás acostumbrado. Significa tomar la llamada a las 17:30 de un viernes, mantener una discusión de una hora sobre algo para lo que no tenías briefing, y entender que las personas dentro de grandes organizaciones a menudo necesitan superar muchos obstáculos para hacer avanzar cualquier cosa. Paciencia, comprensión y la construcción constante de buenas relaciones. Eso es lo que mueve la gráfica cuando el briefing es «posiciona este negocio regulado, cotizado y complejo».</p></div>
      </>),
    },
    gabionas: {
      metaTitle: 'Gabiona — +27 % de ingresos en Google Ads con el mismo presupuesto | pmax',
      metaDesc: 'Google Shopping y remarketing dinámico aumentaron los ingresos de Gabiona un 27 % y el ticket medio un 33 % — en cinco mercados europeos con el mismo presupuesto.',
      heroTitle: '+27 % de ingresos, +33 % de ticket medio — con el mismo presupuesto de Google Ads.',
      stats: [
        { num: '+33 %', label: 'Ticket medio interanual' },
        { num: '+27 %', label: 'Ingresos de Google Ads interanual (mismo presupuesto)' },
        { num: '+79 %', label: 'Clics interanual (mismo presupuesto)' },
        { num: '5', label: 'Mercados europeos, una estrategia' },
      ],
      prose: (<>
        <div className="case-brief"><p>Gabiona es un fabricante y minorista online alemán de productos de gavión — cestas, vallas, muros y accesorios para paisajismo, diseño de jardines, control de erosión y arquitectura. Venden en toda Europa, pero Alemania es el mercado local y absorbe la mayor parte de los recursos internos de la marca. Nuestro encargo cubría todo fuera del mercado local: los mercados con menor prioridad interna, la economía más difícil y el mismo presupuesto del año anterior.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>El punto de partida: economía más difícil fuera de Alemania</h2><p>Vender gaviones en toda Europa suena sencillo hasta que miras la realidad operativa. Los recursos del sitio web en varios idiomas eran limitados. El envío desde Alemania a otros países europeos era más lento y caro de lo que los compradores modernos esperan. Trusted Shops solo estaba implementado en el mercado local.</p><p>Nada de eso estaba en nuestra mano cambiar. El encargo era diferente: con el mismo presupuesto del año anterior, aumentar los ingresos y el ticket medio en los mercados que sí trabajábamos — usando solo la estrategia de Google Ads.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>Las dos palancas: Google Shopping y remarketing dinámico</h2><p>Tomamos una decisión temprana de concentrarnos en dos canales en lugar de repartir el presupuesto por todo el inventario de Google. Shopping para la demanda nueva. Remarketing dinámico para los compradores que Shopping ya había presentado a la marca.</p><h3>Google Shopping — el principal motor de ingresos</h3><p>Smart Shopping fue el caballo de batalla. Trabajamos estrechamente con la marca para identificar las líneas de producto y las oportunidades a nivel de categoría que justificaban la asignación presupuestaria más pesada — no por intuición, sino mediante investigación de mercado estructurada sobre dónde estaba realmente la demanda transfronteriza.</p><h3>Remarketing dinámico — cerrar la brecha</h3><p>Los gaviones no son una compra impulsiva. El ciclo de deliberación es largo, la cesta es grande y la mayoría de compradores vuelven al sitio múltiples veces antes de decidir. El remarketing dinámico nos dio los touchpoints para traer de vuelta a esos compradores exactamente a los productos que ya habían visto — no creatividades genéricas de marca, sino el SKU real. De ahí vino el incremento del ticket medio.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>Estrategia de audiencia: construida sobre comportamiento real del usuario</h2><p>Para que el remarketing de display realmente rentabilizara, construimos listas de clientes dentro de Google Analytics que mapeaban dónde estaba cada usuario en el ciclo de decisión — no solo «visitó el sitio en los últimos 30 días». Luego usamos la investigación de mercado para posicionar las creatividades de remarketing en los momentos del user journey donde la intención estaba aumentando.</p></section>
        <div className="case-quote"><blockquote>«Llevamos trabajando con el equipo un tiempo y estamos muy satisfechos con los resultados. Philipp es un socio reflexivo y experto en todo lo relacionado con el performance marketing — por eso continuamos la colaboración.»</blockquote><cite>Nelson Vollertsen · Ibendahl &amp; Thomsen GmbH</cite></div>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>El resultado: más compras, cestas más grandes, mismo gasto</h2><ul><li><strong>+79 % clics interanual</strong> — el trabajo estructural de Shopping y pujas hizo que cada euro llegara a notablemente más compradores.</li><li><strong>+27 % ingresos interanual</strong> — los clics adicionales no eran tráfico barato; convirtieron.</li><li><strong>+33 % ticket medio interanual</strong> — el remarketing hizo su trabajo. La gente volvió, compró más por pedido.</li></ul></section>
        <div className="case-takeaway"><span className="case-takeaway-kicker">Lo que hizo que funcionara</span><p>Disciplina sobre amplitud. Smart Shopping como motor principal de ingresos, alimentado con investigación sobre dónde estaba la oportunidad real transfronteriza. Remarketing dinámico ajustado al ciclo de deliberación de una categoría de alta consideración. Audiencias construidas desde el comportamiento real del usuario. Y una configuración multiidioma que funcionó en todos los mercados.</p></div>
      </>),
    },
    imero: {
      metaTitle: 'IMERO — −60 % CPC y +307 % registros via Google Ads | pmax',
      metaDesc: 'Reconstrucción de Google Ads — Smart Bidding, Display, YouTube y CRO de landing pages — redujo el CPC un 60 % y triplicó los registros para un SaaS regulado en 11 idiomas.',
      heroTitle: '−60 % CPC, +307 % registros — una reconstrucción de Google Ads para un SaaS regulado, en 11 idiomas.',
      stats: [
        { num: '−59,95 %', label: 'Coste por clic medio' },
        { num: '+306,75 %', label: 'Registros en la herramienta e-label' },
        { num: '−62,19 %', label: 'Coste por conversión (registro)' },
        { num: '11', label: 'Idiomas ejecutándose en paralelo' },
      ],
      prose: (<>
        <div className="case-brief"><p>IMERO Technologies construye e-label, una herramienta de etiquetado digital que genera etiquetas con código QR para datos nutricionales y de ingredientes en vino y otras bebidas alcohólicas — la capa regulatoria que la UE ahora exige a los productores. Un producto real que resuelve un problema real de compliance, en un mercado que aún no sabe que necesita la respuesta. Nuestro encargo: convertir Google Ads en una máquina de registros.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>El punto de partida: una cuenta optimizando hacia lo incorrecto</h2><p>Cuando tomamos la cuenta, las ineficiencias eran familiares pero costosas. Una configuración desestructurada. Objetivos de campaña poco claros. Investigación de palabras clave incompleta. Una estrategia de puja que perseguía el coste por clic en lugar de las conversiones. La plataforma hacía lo que se le decía — entregar clics baratos — no lo que el negocio realmente necesitaba: registros cualificados para una herramienta SaaS de nicho.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>La mecánica: una estrategia de Google Ads basada en datos</h2><p>Cinco líneas de trabajo paralelas, auditadas semanalmente:</p><ul><li><strong>Google Search priorizado.</strong> Lideramos con Search para capturar empresas buscando activamente soluciones de etiquetado digital. Campañas segmentadas por oferta principal y audiencia.</li><li><strong>Relevancia del anuncio y targeting reconstruidos.</strong> Textos de anuncio reescritos para hablar al comprador real de IMERO — productores ante el nuevo requisito de la UE.</li><li><strong>Smart Bidding (Target CPA).</strong> Pasamos de pujas CPC a Target CPA para que la plataforma optimizara hacia leads de alta calidad al coste correcto.</li><li><strong>Expansión a Display y YouTube.</strong> Añadimos Display y YouTube para alcanzar a compradores potenciales en las fases de awareness y consideración.</li><li><strong>Optimización continua.</strong> Pujas ajustadas semanalmente. Conjuntos de palabras clave ganadoras expandidos, perdedores eliminados. Landing pages iteradas.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>El resultado: clics más baratos, más registros, huella de categoría</h2><ul><li><strong>−59,95 % CPC medio</strong> — mismas pujas, señales de plataforma más inteligentes.</li><li><strong>+306,75 % registros</strong> en la herramienta e-label interanual.</li><li><strong>−62,19 % coste por conversión</strong> — la palanca que realmente le importa al CFO.</li><li><strong>~22 % tasa de clics</strong> en campañas de Search — muy por encima de los benchmarks de la categoría.</li><li><strong>11 idiomas</strong> ejecutándose en paralelo, reflejando la huella de mercado europea de IMERO.</li></ul></section>
        <div className="case-takeaway"><span className="case-takeaway-kicker">Lo que hizo que funcionara</span><p>Tratar Google Ads como un problema de ingeniería, no de compra de medios. Reconstruir la estructura. Hacer coincidir la estrategia de puja con el objetivo real del negocio. Añadir Display y YouTube para alcanzar a un comprador que aún no sabía que tenía el problema. Retargetear intensamente, optimizar semanalmente, arreglar las landing pages cada vez que surge una oportunidad de CRO.</p></div>
      </>),
    },
    ledxpress: {
      metaTitle: 'LEDXpress — +365 % de ingresos SEO en 8 meses | pmax',
      metaDesc: 'Un programa SEO estructurado aumentó los ingresos de LEDXpress un 365 % en 8 meses — bases técnicas, contenido orientado a la intención y validación con datos de paid.',
      heroTitle: <>+365 % de ingresos en 8 meses — cómo el SEO estructurado reconstruyó el mix de canales de LEDXpress.</>,
      stats: [
        { num: '+365 %', label: 'Crecimiento mensual de ingresos en 8 meses' },
        { num: '+230 %', label: 'Clics orgánicos (1.030 → 3.430 / mes)' },
        { num: '+59 %', label: 'Tasa de conversión (1,45 % → 2,30 %)' },
        { num: '+46 %', label: 'Posición media de ranking (41,6 → 22,3)' },
      ],
      prose: (<>
        <div className="case-brief"><p>LEDXpress es una tienda online europea de iluminación LED, lámparas y componentes eléctricos. Cuando llegaron a nosotros, el negocio crecía — pero el crecimiento se compraba, no se ganaba. La mayor parte de los ingresos se generaba mediante anuncios de pago, y el aumento de los costes publicitarios comenzaba a comprimir el margen. El encargo era sencillo: construir un programa SEO escalable que entregue crecimiento sostenible, independientemente del gasto en medios.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>El punto de partida: potencial SEO sin explotar</h2><p>El panorama en el kickoff era familiar para cualquiera que haya auditado una tienda de e-commerce de tamaño mediano. Las palabras clave comerciales importantes no tenían posiciones top. Las páginas de categoría y producto no estaban alineadas con la intención de búsqueda real. Los fundamentos técnicos de SEO solo estaban parcialmente en su lugar.</p></section>
        <div className="case-quote"><blockquote>«Estamos realmente satisfechos con la colaboración. Lo que destaca es que el equipo no solo ejecuta — piensa junto a nosotros y cuestiona nuestras suposiciones. Juntos hemos logrado un progreso real tanto en nuestro sitio web como en nuestra publicidad, siempre con el foco en el crecimiento sostenible y medible.»</blockquote><cite>Harrie Staps · LEDXpress</cite></div>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>SEO técnico como cimiento</h2><p>Ningún trabajo de contenido o posicionamiento se acumula sobre una base técnica rota. Así que empezamos ahí:</p><ul><li>Rastreo e indexación — URLs con parámetros limpias, fugas de navegación facetada, cadenas de canonicals y páginas que absorbían presupuesto de rastreo sin convertir jamás.</li><li>Velocidad de página — trabajo de Core Web Vitals en templates, pipeline de imágenes y etiquetas de terceros.</li><li>Enlazado interno — flujo de categoría a producto reestructurado para que la autoridad fluyera finalmente a las páginas que la necesitaban.</li><li>Datos estructurados — schema de Product, Offer, BreadcrumbList, Organization y Review en todo el catálogo.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>Investigación de palabras clave basada en la intención</h2><p>El error de la mayoría de programas de SEO para e-commerce es optimizar para el tráfico. Nosotros optimizamos para los ingresos. Cada palabra clave se puntuó contra tres cosas: intención comercial, potencial de tráfico y el margen de los productos que sacaría a la superficie.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>La palanca que la mayoría de agencias SEO pasa por alto: datos de paid</h2><p>La forma más rápida de saber qué palabras clave generan realmente ingresos es mirar las que ya convierten en Google Ads. Usamos la cuenta de paid como un test A/B permanente para el targeting orgánico:</p><ul><li>Valor comercial de las palabras clave validado con datos de conversión en directo, no con estimaciones.</li><li>Términos long-tail rentables identificados, sobre los que la estrategia orgánica luego dobló la apuesta.</li><li>Ciclo de aprendizaje acortado de trimestres a semanas.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">05</span><h2>Los resultados, 8 meses después</h2><p>El número titular son los ingresos: <strong>+365 % de crecimiento mensual de ingresos en 8 meses</strong>. Pero el desglose importa más, porque muestra que el crecimiento es estructural:</p><ul><li><strong>+230 % clics orgánicos</strong> — de 1.030 a 3.430 por mes.</li><li><strong>+59 % tasa de conversión</strong> — del 1,45 % al 2,30 %.</li><li><strong>+46 % mejora de la posición media de ranking</strong> — de 41,6 a 22,3.</li></ul></section>
        <div className="case-takeaway"><span className="case-takeaway-kicker">Lo que hizo que funcionara</span><p>Un programa SEO de stack completo — técnico, contenido y off-page ejecutados como un solo workstream. Priorización basada en datos que usó los datos de conversión de paid para desriesgar cada apuesta orgánica. Y un enfoque implacable en tráfico de calidad de conversión en lugar de volumen de vanidad.</p></div>
      </>),
    },
    luxaflex: {
      metaTitle: 'Luxaflex — −93 % coste por lead, +3.191 % solicitudes | pmax',
      metaDesc: 'Paid search local convirtió un programa fallido de Luxaflex en una máquina de crecimiento del 3.191 % — reduciendo el coste por lead un 93 % en tres años.',
      heroTitle: <>Un programa de paid search fallido, reconstruido en una máquina de crecimiento del 3.191 % — siendo <em>genuinamente</em> local.</>,
      heroDeck: 'Luxaflex® es el líder del mercado en persianas, toldos y cierres, y uno de los mayores minoristas de las marcas de cortinas más conocidas. Nos contrataron para arreglar un programa de paid search de franquicia donde el coste era demasiado alto y las ventas demasiado bajas.',
      stats: [
        { num: '−93 %', label: 'Coste por lead — formularios de contacto y llamadas combinados' },
        { num: '+3.191 %', label: 'Crecimiento en solicitudes de contacto mensuales en tres años' },
        { num: '+527 %', label: 'Incremento en valor de conversión en la red de franquicias' },
        { num: '+270 %', label: 'Mejora de la tasa de conversión pese a un aumento dramático del tráfico' },
      ],
      prose: (<>
        <div className="case-brief"><p>Los franquiciados de Luxaflex® ya habían utilizado paid media antes. No había funcionado — el coste por adquisición era demasiado alto y las ventas resultantes demasiado escasas para justificar la inversión. Nos pidieron que hiciéramos el trabajo correctamente: construir un programa de paid search que pudiera autofinanciarse y escalar en una red de franquicias nacional donde cada concesionario tenía diferente stock, diferentes plazos de entrega y diferente competencia local.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>Primero los datos, antes de tocar los anuncios</h2><p>Lo primero que hicimos fue nada visible. Nos sentamos con cada franquiciado y aprendimos su ecosistema comercial, operativo y de promociones desde dentro — proceso de fabricación, plazos de entrega, margen bruto por familia de producto, y lo que el cliente típico de Luxaflex realmente quiere cuando descuelga el teléfono.</p><p>Solo cuando entendíamos la economía unitaria de cada concesionario decidíamos en qué canales apoyarnos. La respuesta no era más canales; era paid search bien hecho, enfocado en leads de alto volumen y bajo coste que los concesionarios pudieran realmente atender.</p></section>
        <blockquote className="case-pullquote"><p>«Entender la importancia de la búsqueda local para esta operación de franquicia fue el principal desbloqueador — y lo que las agencias anteriores seguían pasando por alto.»</p><cite>— EQUIPO DE MARKETING DE FRANQUICIAS LUXAFLEX</cite></blockquote>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>El 46 % de las búsquedas de Google son locales. La mayor parte de nuestro presupuesto de palabras clave no lo era.</h2><p>Los términos de marca eran valiosos pero tenían techo. El volumen de búsqueda — y la demanda realmente incremental — estaba en consultas long-tail sin marca que seguían estando ancladas geográficamente: «Persianas Madrid», «Toldos Barcelona», «Estores cerca de mí».</p><p>Reconstruimos la estructura de la cuenta en torno a cuatro capas de palabras clave que se solapan:</p><ul><li><strong>Marca</strong> — defensivo, presupuesto con tope, alta intención</li><li><strong>Producto genérico</strong> — demanda a nivel de categoría, cualificada por targeting de landing page</li><li><strong>Hiper-local</strong> — modificadores geográficos long-tail mapeados al franquiciado más cercano</li><li><strong>Basado en ofertas</strong> — promociones estacionales sincronizadas con el stock y la capacidad del franquiciado</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>La estacionalidad y la coordinación con los concesionarios hicieron el resto</h2><p>Las protecciones solares son un negocio estacional. Modelamos la estacionalidad por familia de producto y territorio de franquiciado, luego construimos de antemano los calendarios de pacing de creatividades y presupuesto.</p><p>La otra mitad del trabajo era coordinación poco glamurosa: check-ins semanales con los franquiciados para mantener las promociones consistentes entre anuncios, landing pages y stock en el showroom.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>Lo que hicieron los números</h2><p>Tres años después, la misma red a través de la misma cuenta de Google Ads parecía un negocio diferente:</p><ul><li>Tasa de conversión <strong>+270 %</strong>, pese a que el tráfico subió bruscamente</li><li>Valor de conversión <strong>+527 %</strong></li><li>Conversiones mensuales <strong>+3.191 %</strong></li><li>Coste por conversión <strong>−93 %</strong></li></ul><p>Sin nuevo canal de medios. Sin producto milagroso. Solo una cuenta bien estructurada, targeting local honesto y la disciplina de mantener anuncios, landing pages y realidad del concesionario sincronizados.</p></section>
      </>),
    },
    preo: {
      metaTitle: 'PREO Software — +72 % clics orgánicos, +143 % página 1 | pmax',
      metaDesc: 'El SEO basado en contenido abrió la categoría de licencias de software de segunda mano para PREO — clics orgánicos +72 % y rankings en página 1 +143 % interanual.',
      heroTitle: '+72 % en clics orgánicos, +143 % en keywords en página 1 — cómo el SEO basado en contenido abrió una categoría B2B de nicho.',
      stats: [
        { num: '+72,2 %', label: 'Clics orgánicos interanual' },
        { num: '+17,7 %', label: 'Mejora de la posición media interanual' },
        { num: '+143 %', label: 'Rankings en página 1 vs. año anterior' },
        { num: '132', label: 'Keywords en página 1, 41 en top 5, 25 en top 3' },
      ],
      prose: (<>
        <div className="case-brief"><p>PREO Software AG es un trader especializado en licencias de software de segunda mano — una categoría que la mayoría de equipos de procurement no conoce hasta que alguien se la presenta. Los fundadores construyeron el negocio sobre la idea de que empresas de todo tamaño tienen licencias que ya no necesitan, y otras empresas necesitan licencias por las que no quieren pagar el precio completo. El mercado funciona. El problema era que casi nadie lo buscaba — porque casi nadie sabía que existía.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>El punto de partida: un negocio que funciona con un techo de brand awareness</h2><p>PREO había conseguido cuentas enterprise reales a través de outbound y ventas directas. El producto funcionaba, la economía funcionaba, las referencias eran sólidas. Lo que no funcionaba era el inbound: el problema del producto de nicho limitaba la demanda orgánica porque los equipos de procurement no buscaban «licencias de software de segunda mano». Nuestro encargo: convertir la búsqueda orgánica en un segundo motor de crecimiento, de forma sostenible, sin atajos.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>El descubrimiento: el contenido tiene que hacer la educación</h2><p>En una categoría donde el comprador aún no sabe que la categoría existe, el SEO no puede ser un juego de volumen de palabras clave. Tiene que ser un juego de educación. El contenido tiene que enseñar a los responsables de procurement e IT qué es una licencia usada, cuándo es legal, cómo funciona en la práctica, cómo son realmente los ahorros — y solo entonces se vuelve posible la búsqueda «comprar a PREO».</p></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>La mecánica: contenido + estructura de palabras clave, funcionando como uno</h2><ul><li>Investigación de palabras clave en profundidad que mapeó el recorrido real del comprador — desde «cómo funcionan las licencias de software usadas» hasta «¿es legal comprar Microsoft 365 de segunda mano?» hasta consultas comerciales en el fondo del funnel.</li><li>Un programa de contenido construido alrededor de ese mapa — piezas long-form, páginas de comparación, explicadores legales, calculadoras de ahorro — cada uno vinculado a una intención de búsqueda específica.</li><li>Texto del sitio web reescrito para usar las palabras clave objetivo deliberadamente, al servicio de la claridad para el lector.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>El resultado: clics, posiciones y huella de categoría</h2><ul><li><strong>+72,2 % clics orgánicos interanual</strong> — no impresiones de vanidad, visitas reales de personas que investigan la categoría.</li><li><strong>+17,7 % posición media</strong> — mejora estructural del ranking en el conjunto de palabras clave seguidas.</li><li><strong>+143 % keywords en página 1 vs. año anterior</strong> — la huella de categoría creció, no solo el ranking en términos existentes.</li><li><strong>132 keywords en página 1, 41 en el top 5, 25 en el top 3</strong> — posiciones defendibles en las consultas comerciales que generan realmente consultas.</li></ul></section>
        <div className="case-takeaway"><span className="case-takeaway-kicker">Lo que hizo que funcionara</span><p>Aceptar que una categoría B2B de nicho necesita contenido que educa antes de vender — y combinar eso con una estrategia de palabras clave que lleva al comprador de la awareness a la intención. Luego la disciplina poco glamurosa de SEO técnico mensual y trabajo off-page deliberado, cada mes, sin interrupciones.</p></div>
      </>),
    },
    primundus: {
      metaTitle: 'PRIMUNDUS — SEO regional, +535 % impresiones | pmax',
      metaDesc: 'SEO regional reorientado al comprador real aumentó las impresiones de PRIMUNDUS un 535 % y los clics un 182 % — para un proveedor alemán de cuidados domiciliarios 24 horas.',
      heroTitle: '+535 % en impresiones, +182 % en clics — mediante una estrategia de SEO regional construida sobre cómo buscan realmente las familias que necesitan cuidados.',
      stats: [
        { num: '+535 %', label: 'Impresiones, últimos 6 meses vs. período anterior' },
        { num: '+182 %', label: 'Clics, últimos 6 meses vs. período anterior' },
        { num: '−9,95', label: 'Mejora de la posición media de ranking' },
        { num: '193', label: 'Keywords posicionando en página 1' },
      ],
      prose: (<>
        <div className="case-brief"><p>PRIMUNDUS es un proveedor alemán de cuidados domiciliarios en el segmento de cuidados 24 horas, que coloca cuidadoras polacas con familias de toda Alemania. Las cuidadoras están formadas internamente, hablan alemán con fluidez y se ocupan del cuidado, el acompañamiento y las tareas del hogar. La empresa ha colocado más de 10.000 cuidadoras en más de una década — pero la mayor parte de ese crecimiento vino de referencias, no de ser encontrados online. Nuestro encargo: hacer de la búsqueda orgánica el segundo motor de crecimiento.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>El punto de partida: negocio sólido, huella digital escasa</h2><p>PRIMUNDUS es uno de los proveedores líderes en su segmento por volumen, pero la presencia orgánica del sitio web no lo reflejaba. Quien buscara fuera de consultas de marca no los habría encontrado. El objetivo era sostenible: aumentar el tráfico orgánico y, más importante, aumentar la proporción de consultas cualificadas provenientes de la búsqueda orgánica. Para hacerlo correctamente, necesitábamos una estrategia de SEO regional — una que alineara el sitio con cómo buscan realmente las familias en ciudades y regiones específicas cuando un padre o pareja necesita de repente cuidados continuos.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>El descubrimiento: el comprador no es el paciente</h2><p>Un trabajo temprano que reformó toda la estrategia. En esta categoría, quien busca casi nunca es quien recibe los cuidados. Es el hijo adulto, el cónyuge, la sobrina que gestiona la logística familiar. Buscan con un lenguaje diferente, en momentos diferentes, con objeciones diferentes a las del paciente. El sitio antiguo estaba escrito para el paciente. El nuevo tenía que estar escrito para el comprador.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>La mecánica: páginas regionales construidas sobre demanda real</h2><p>Una vez que mapeamos el panorama de palabras clave, emergió un patrón claro: la mejor práctica en esta categoría no es una página nacional única para «cuidados 24 horas». Es una red de páginas regionales, cada una dirigida a una ciudad o área de captación específica, cada una escrita para el comprador de esa región.</p><ul><li>Investigación de palabras clave en profundidad a nivel de ciudad — identificando qué regiones tenían demanda de búsqueda real que justificara una página dedicada.</li><li>Una nueva arquitectura de información — reconstruida alrededor de regiones, necesidades de cuidado y los momentos de decisión del comprador.</li><li>Contenido on-page reescrito con palabras clave objetivo usadas deliberadamente — escrito para que lea de forma natural para el familiar que busca.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>La capa técnica y off-page</h2><p>Ningún trabajo regional se acumula sin los cimientos debajo. SEO técnico habitual — rastreo, indexación, enlazado interno, datos estructurados, velocidad de página — complementado con un programa off-page deliberado y a largo plazo que construye backlinks de calidad de fuentes que importan en el panorama alemán de salud y cuidado de mayores. Las señales de confianza reforzaron las señales E-E-A-T que Google necesita para sentirse cómodo recomendando un sitio YMYL en una categoría sensible.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">05</span><h2>El resultado: visibilidad que se convirtió en consultas</h2><ul><li><strong>+535 % impresiones</strong> en los últimos seis meses vs. los seis anteriores.</li><li><strong>+182 % clics</strong> en el mismo período — visibilidad que se traduce en tráfico cualificado.</li><li><strong>Posición media de ranking mejorada en 9,95</strong> — el tipo de mejora estructural difícil de perder.</li><li><strong>193 keywords en página 1</strong>, <strong>79 en el top tres</strong>, <strong>22 en posición uno</strong>.</li></ul></section>
        <div className="case-takeaway"><span className="case-takeaway-kicker">Lo que hizo que funcionara</span><p>Una estrategia de SEO regional que respetó cómo se comporta realmente la categoría — un comprador, muchas áreas de captación, todas profundamente locales. Una arquitectura del sitio reconstruida alrededor del comprador, no del paciente. Y la disciplina de combinar los fundamentos técnicos poco glamurosos con un programa off-page deliberado.</p></div>
      </>),
    },
    unisono: {
      metaTitle: 'Unisono Luxury Homes — +183 % leads por teléfono, +138 % CTR | pmax',
      metaDesc: 'SEO, Google Ads, Microsoft Ads y reconstrucción web para una marca de villas de lujo en Mallorca. +183 % en clics al número de teléfono, +138 % CTR orgánico interanual.',
      heroTitle: 'Unisono Luxury Homes — un programa multicanal construido alrededor de cómo reserva realmente un cliente de lujo.',
      stats: [
        { num: '+138 %', label: 'CTR orgánico interanual (0,8 % → 1,9 %)' },
        { num: '+14,7', label: 'Posiciones medias de ranking ganadas (34,9 → 20,2)' },
        { num: '+183 %', label: 'Clics en el número de teléfono interanual' },
        { num: '+8,8 %', label: 'Solicitudes de contacto de alquiler interanual' },
      ],
      prose: (<>
        <div className="case-brief"><p>Unisono Luxury Homes es una marca de villas de lujo de Mallorca — ventas y alquiler vacacional premium, con una clientela que investiga en tres idiomas y reserva por teléfono. Nuestro encargo: tener visibilidad orgánica en una categoría dominada por portales internacionales, gestionar Google y Microsoft Ads como canal de beneficio en lugar de línea de coste, y reconstruir el sitio web para que el trabajo anterior diera frutos.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>El punto de partida: una categoría dominada por portales</h2><p>Las búsquedas de alquiler de lujo en Mallorca las dominan un puñado de plataformas internacionales con presupuestos publicitarios de ocho cifras. Para una marca independiente — un equipo pequeño, un portfolio curado, un número de teléfono que la gente usa de verdad — posicionarse orgánicamente frente a ellos parece imposible sobre el papel.</p><p>No lo es. Solo necesita reglas de juego diferentes: intención más precisa, páginas más rápidas, mejor contenido, schema real y la paciencia para jugar a 12 meses cuando los portales están jugando a 12 semanas.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>La mecánica: cuatro canales, un calendario</h2><p>Cuatro disciplinas, ejecutadas como un único programa, auditadas semanalmente:</p><ul><li><strong>SEO.</strong> Clusters de temas construidos alrededor de la intención del comprador. Páginas de propiedades rediseñadas con schema adecuado, fotografía real y copy que responde la pregunta que realmente tiene un arrendatario de alto patrimonio. Hreflang implementado correctamente en inglés, alemán y español.</li><li><strong>Google Ads.</strong> Protección de marca, más búsqueda non-brand segmentada alrededor de la intención de alquiler de larga estancia y compra. Importaciones de conversiones offline desde el CRM.</li><li><strong>Microsoft Ads.</strong> A menudo ignorado en el segmento de lujo, nunca debería serlo. La audiencia de Bing sobre-indexa exactamente en el perfil demográfico que esta marca vende. CPCs más bajos, AOV más alto, economía de conversión 30–40 % mejor que Google en varios segmentos de alquiler.</li><li><strong>Desarrollo web.</strong> Reconstrucción completa del sitio — mismo diseño visual, nuevo stack tecnológico — tras diagnosticar que la plataforma legacy era el mayor freno individual a la conversión.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>Los resultados orgánicos: mismo sitio, dramáticamente más eficiente</h2><ul><li><strong>CTR orgánico: 0,8 % → 1,9 %.</strong> Un incremento relativo del 138 %. La misma superficie en Google convierte ahora una proporción mucho mayor de impresiones en clics.</li><li><strong>Posición media: 34,9 → 20,2.</strong> De la página cuatro a la página dos de media.</li><li><strong>Impresiones normalizadas a 19.800</strong> — deliberadamente, al podar páginas escasas y de intención incorrecta.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>Los resultados de conversión: donde se muestra realmente</h2><ul><li><strong>Clics en el número de teléfono: +183,33 % interanual.</strong> El evento más predictivo para este negocio. Quien hace clic en el número de teléfono, reserva.</li><li><strong>Solicitudes de alquiler: +8,77 % interanual.</strong> El formulario principal, creciendo sobre una base ya sólida.</li><li><strong>Solicitudes de contacto en alemán: +25 % interanual.</strong> Un área de crecimiento deliberado — uno de los mercados de origen de mayor margen para la marca.</li></ul></section>
        <section className="case-chapter"><span className="case-chapter-num">05</span><h2>Por qué funcionó: las respuestas aburridas</h2><ul><li><strong>Un calendario.</strong> SEO, Google, Microsoft y web funcionaron desde un ritmo semanal compartido — no cuatro agencias, cuatro roadmaps, cuatro conjuntos de prioridades.</li><li><strong>Reconstruir antes de optimizar.</strong> Ningún SEO o gasto de paid iba a arreglar un sitio que se arrastraba bajo carga y perdía formularios en silencio.</li><li><strong>El teléfono es un canal.</strong> En el alquiler de lujo, la llamada es la conversión. Optimizar el camino hacia ella — visible, clicable, con conciencia del idioma — produjo el mayor incremento individual del programa.</li></ul></section>
        <div className="case-takeaway"><span className="case-takeaway-kicker">Lo que hizo que funcionara</span><p>Tratar a Unisono como una marca con cuatro superficies de crecimiento interconectadas en lugar de cuatro canales en fila. La visibilidad orgánica duplicó la tasa de clics de cada aparición en Google. El paid cubrió el long-tail sin marca. Microsoft Ads captó la audiencia de alto valor que Google tiene mal valorada. Y la reconstrucción del sitio hizo que las tres inversiones trabajaran más duro al aterrizar.</p></div>
      </>),
    },
    'vc-investor': {
      metaTitle: 'Inversor VC campaña LinkedIn — +50 % VTR, −48 % CPM | pmax',
      metaDesc: 'Campaña de LinkedIn por fases para un inversor VC de referencia en early-stage. +50 % view-through rate sobre el benchmark global de LinkedIn, −48 % CPM.',
      heroTitle: 'Cómo una campaña de LinkedIn por fases logró +50 % VTR y −48 % CPM para un inversor VC early-stage de referencia.',
      stats: [
        { num: '+50 %', label: 'Tasa de reproducción de vídeo sobre el benchmark global de LinkedIn' },
        { num: '−48 %', label: 'CPM por debajo del benchmark global de LinkedIn' },
        { num: '+45 %', label: 'CTR de vídeo en la fase de conversión sobre el estándar de sponsored content' },
        { num: '+250 %', label: 'CTR de conversión vs. fase de awareness' },
      ],
      prose: (<>
        <div className="case-brief"><p>Uno de los inversores de capital riesgo más grandes y activos en early-stage de Alemania — conocido por su trabajo con empresas tecnológicas — necesitaba trasladar sus eventos de networking presenciales de referencia al entorno digital durante la pandemia. El encargo: registros digitales eficientes en coste para un evento concebido para conectar startups, pensadores innovadores, operadores de primer nivel, expertos y visionarios. LinkedIn era la plataforma adecuada; la pregunta era cómo usarla correctamente.</p></div>
        <section className="case-chapter"><span className="case-chapter-num">01</span><h2>Estrategia por fases — awareness, consideración, conversión</h2><p>El Campaign Manager de LinkedIn es más sofisticado de lo que la mayoría le da crédito. Usamos su targeting avanzado para ejecutar una campaña por fases de seis semanas: construir visibilidad en la fase uno, reducir a audiencias comprometidas en la fase dos, empujar hacia registros de alta intención en la fase tres.</p></section>
        <section className="case-chapter"><span className="case-chapter-num">02</span><h2>Awareness — encontrar las salas relevantes</h2><p>La fase uno se dirigía a CTOs, CEOs, fundadores y personas senior en desarrollo de negocio, IT, operaciones y gestión de proyectos — más audiencias personalizadas construidas a partir de las listas propias del cliente. Les mostramos un vídeo de 30 segundos pulido presentando el evento con CTA directo de «registrarse».</p><div className="prose-callout"><div className="prose-callout-kicker">Una nota sobre la construcción de audiencias</div><p>¿No sabes a quién dirigirte? Pregunta a tu propio equipo. En lugar de especular en una sala de reuniones, habla con las personas de tu call center o equipo de ventas — los que realmente conocen a tus clientes.</p></div></section>
        <section className="case-chapter"><span className="case-chapter-num">03</span><h2>Consideración — donde se puso interesante</h2><p>Para la fase dos introdujimos un nuevo corte del vídeo para evitar la fatiga creativa y añadimos más «razones para creer». Nuevas variantes de copy añadieron un impulso basado en el tiempo para elevar la intención de registro. El corte de audiencia fue más preciso: retargeteamos a todos los que habían interactuado con el vídeo de awareness o la página de empresa del cliente, y dividimos a los espectadores de vídeo en dos cohortes — los que habían visto el 50 % y los que habían visto el 75 %.</p><div className="prose-callout"><div className="prose-callout-kicker">Incremento del CTR</div><p>El CTR de la fase dos fue un 200 % más alto que la fase uno. El objetivo de las fases es que evitas gastar la segunda mitad de tu presupuesto en personas que ya te dijeron que no les interesaba.</p></div></section>
        <section className="case-chapter"><span className="case-chapter-num">04</span><h2>Conversión — último impulso, audiencia más ajustada</h2><p>La fase tres lanzó un tercer vídeo contra la cohorte más ajustada — espectadores que habían visto el 75 % y el 97 % del asset anterior. Curiosamente, la cohorte del 75 % superó a la del 97 %. Todavía no tenemos una explicación completamente satisfactoria para ello y lo reportamos porque todo caso de estudio honesto debería tener al menos un resultado que no se puede explicar ordenadamente.</p><p>El CTR de la fase de conversión fue un +250 % más alto que la fase de awareness y un +17 % más alto que la de consideración — evidencia clara de que el estrechamiento progresivo de la audiencia estaba haciendo el trabajo que se suponía que debía hacer.</p></section>
        <div className="prose-callout"><div className="prose-callout-kicker">El resultado</div><p>Los objetivos de venta de entradas establecidos por el cliente se superaron. El coste por registro quedó sustancialmente por debajo del benchmark interno del cliente, y la campaña se convirtió en la plantilla para todos los eventos posteriores que la empresa realizó online durante los siguientes 18 meses. Lo que más importó fue la estructura por fases: el mismo presupuesto de medios, desplegado con audiencias progresivamente más ajustadas, produjo un CTR final un 250 % más alto que el equivalente de un único broadcast habría logrado.</p></div>
      </>),
    },
  } as Record<string, LocalizedCaseDetail>,

  blogPostDetail: {
    'how-to-get-mentioned-by-chatgpt': {
      toc: ['Qué es la visibilidad en IA', 'Por qué importa ahora', '5 acciones para este mes', 'Cómo puede ayudar pmax', 'Lecturas recomendadas'],
      prose: (<>
        <p>Cada semana un cliente nos hace la misma pregunta: «Estamos viendo menos clics de Google. ¿Es por ChatGPT?» La respuesta honesta es: probablemente sí, en parte. Y va a seguir pasando. En lugar de luchar contra ello, el movimiento inteligente es asegurarse de que tu negocio es el que ChatGPT, Perplexity y Gemini realmente recomiendan.</p>
        <p>Esta es una guía corta y práctica. Sin jerga, sin alarmismo. Al final sabrás qué es la visibilidad en IA, por qué importa y las cinco acciones que cualquier negocio — incluido el tuyo — puede empezar este mes.</p>
        <h2>¿Qué es exactamente la visibilidad en IA?</h2>
        <p>Cuando alguien le pregunta a ChatGPT «cuál es la mejor agencia de marketing digital en Mallorca» o le pregunta a Perplexity «compara tres instaladores solares en España», la IA genera una respuesta que menciona negocios específicos por nombre. A veces enlaza a ellos. A veces resume su oferta. A veces simplemente los recomienda.</p>
        <p>La visibilidad en IA (también llamada Generative Engine Optimisation o GEO) es la práctica de asegurarse de que tu negocio aparece en esa respuesta. Es una capa nueva sobre el SEO clásico — los fundamentos técnicos son los mismos — pero añade trabajo sobre datos estructurados, calidad de contenido y las señales de confianza que los modelos de IA realmente valoran.</p>
        <h2>Por qué importa ahora</h2>
        <ol>
          <li><strong>La gente usa IA para investigar antes de comprar.</strong> Gartner estima que el 61 % de los recorridos de compra en 2026 pasarán por al menos una superficie de respuesta de IA.</li>
          <li><strong>Las herramientas de IA son cada vez más transparentes con sus fuentes.</strong> ChatGPT, Perplexity y Gemini ya muestran sus fuentes. Las citas tienen valor directo y medible: generan clics y forman opiniones.</li>
          <li><strong>El propio Google se está convirtiendo en una superficie de IA.</strong> Las AI Overviews aparecen ahora sobre los resultados tradicionales para la mayoría de consultas informativas.</li>
        </ol>
        <h2>Cinco acciones para empezar este mes</h2>
        <h3>1. Audita dónde estás hoy</h3>
        <p>Dedica una hora a lanzar 20 preguntas sobre tu categoría a ChatGPT, Perplexity y Gemini. Usa preguntas que haría un comprador real: «mejor X en Y para presupuesto Z», «compara A y B». Anota qué competidores se mencionan, en qué orden, con qué sentimiento. Esa es tu línea base.</p>
        <h3>2. Haz tu página «Sobre nosotros» aburrida y factual</h3>
        <p>Los modelos de IA citan negocios cuya identidad pueden verificar. Tu página Sobre nosotros debe indicar claramente: qué haces, dónde estás, quién fundó la empresa, cuándo, quién la dirige ahora y quiénes son tus clientes típicos. Español claro, hechos verificables, sin relleno de marketing.</p>
        <h3>3. Añade los datos estructurados correctos</h3>
        <p>El marcado Schema.org es cómo le dices a los rastreadores de IA qué es cada página. Como mínimo: schema de <code>Organization</code> en todo el sitio, schema de <code>Service</code> o <code>Product</code> en esas páginas y schema de <code>FAQPage</code> en tu FAQ. Si tu negocio depende de la ubicación, añade <code>LocalBusiness</code> con dirección completa y coordenadas geográficas.</p>
        <h3>4. Consigue que te citen en lugares en los que la IA confía</h3>
        <p>Los grandes modelos de lenguaje confían en fuentes en las que confían sus datos de entrenamiento: Wikipedia, publicaciones del sector, sitios de reseñas establecidos en tu categoría (G2, Capterra, Trustpilot, Tripadvisor según tu industria), y menciones en medios de alta autoridad. Las relaciones públicas basadas en afirmaciones verificables y comentarios de expertos tienden a ganar esas menciones.</p>
        <h3>5. Mide mensualmente</h3>
        <p>Vuelve a ejecutar esas mismas 20 consultas cada mes. Hay herramientas para esto (AthenaHQ, Profound, Otterly) — o puedes hacerlo manualmente. De cualquier forma: si no lo mides, no puedes mejorarlo.</p>
        <div className="prose-callout">
          <div className="prose-callout-kicker">La versión honesta</div>
          <p>La visibilidad en IA no es un truco. Se gana. La mayoría de los negocios ven sus primeras citas fiables en 8–12 semanas de trabajo disciplinado.</p>
        </div>
        <h2>Cómo puede ayudar pmax</h2>
        <p>Ejecutamos programas de visibilidad en IA para empresas en toda Europa. Si quieres una auditoría gratuita de una página sobre dónde está tu negocio hoy en ChatGPT, Perplexity y Gemini, <a href="/es/contact/?topic=ai-audit">cuéntanos un poco sobre tu situación</a> y te la enviamos en una semana.</p>
        <h2>Lecturas recomendadas</h2>
        <ul>
          <li><a href="/es/services/ai-visibility/">Nuestra página de servicio de visibilidad en IA</a> — qué hay dentro de un programa</li>
          <li><a href="/es/blog/gpt-shopping/">Qué significa «ChatGPT shopping» para el e-commerce en 2026</a></li>
          <li><a href="/es/blog/tracking-setup-guide/">Una guía sin jerga para configurar el tracking correctamente</a></li>
        </ul>
      </>),
    },
    'performance-max-2026': {
      toc: ['Las exclusiones de marca son imprescindibles', 'Reglas de valor por campaña', 'Estructura de grupos de assets', 'Search themes', 'Objetivos tROAS basados en beneficio', 'Grupos de listado para control del catálogo', 'Señales de audiencia de primera parte'],
      prose: (<>
        <p>Performance Max empezó como una caja negra. En 2026 es una caja negra un poco más transparente con muchos más controles. Esto es lo que realmente cambiamos primero.</p>
        <h2>Las exclusiones de marca son ya imprescindibles</h2>
        <p>El cambio más importante desde el lanzamiento: ya puedes excluir términos de búsqueda de marca de PMax. Úsalo. Configura una lista de exclusión de marca el primer día de cada campaña PMax y dirige el tráfico de marca a una campaña de Search bien gestionada con control manual. Vemos clientes que ahorran el 15–25 % de su presupuesto de PMax solo con esto en el primer mes.</p>
        <h2>Reglas de valor por campaña</h2>
        <p>Las reglas de valor te permiten decirle a PMax que un cliente en Alemania vale 1,3 veces lo que vale uno en Italia — o que un cliente recurrente vale 0,6 veces lo que vale uno nuevo. Combinado con segmentos de datos de primera parte, es la palanca más infrautilizada de la plataforma.</p>
        <h2>Estructura de grupos de assets</h2>
        <p>No pongas todo tu catálogo en un solo grupo de assets. Divide por nivel de margen o categoría de producto — cada grupo recibe su propio creativo, su propia señal de audiencia, su propio objetivo tROAS. Solo esto suele mover el ROAS combinado un 20–30 %.</p>
        <h2>Search themes</h2>
        <p>Úsalos, pero con moderación. PMax tiende a confiar demasiado en los search themes y a desperdiciar presupuesto en consultas adyacentes. Establece themes solo para consultas claramente infraatendidas que puedas demostrar que no están siendo cubiertas por tus campañas de Search existentes.</p>
        <h2>Objetivos tROAS basados en beneficio</h2>
        <p>Establecer el tROAS basándose en los ingresos es un error categorial. Calcúlalo sobre el margen bruto, introduce los valores de beneficio bruto como valor de conversión y observa cómo el algoritmo finalmente persigue a los clientes que realmente quieres.</p>
        <h2>Grupos de listado para control del catálogo</h2>
        <p>Los grupos de listado en PMax te permiten controlar qué productos se priorizan. Los usamos para impulsar productos de alto margen, bajo stock y estacionales en momentos específicos — una palanca pequeña, gran impacto en el beneficio cuando se usa bien.</p>
        <h2>Señales de audiencia de primera parte</h2>
        <p>Sube tu lista de customer match, tu cohorte de alto LTV, tu segmento de compradores recientes. PMax no los usa como targeting — pero sí como una señal potente para el algoritmo. El incremento es real.</p>
        <p>Lecturas relacionadas: nuestro <a href="/es/services/google-ads/">servicio de Google Ads &amp; Performance Max</a> — y cómo encaja PMax en el <a href="/es/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/">mix de canales Google vs. Meta vs. TikTok</a>.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=performance-max-2026">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'tracking-setup-guide': {
      title: 'Guía de tracking de marketing sin jerga',
      toc: ['Por qué los dashboards mienten', 'Tagging server-side', 'Consent Mode v2', 'Enhanced conversions', 'Importación de conversiones offline', 'Reconciliación'],
      prose: (<>
        <p>Si no puedes confiar en tus datos de marketing, no puedes tomar decisiones con ellos. Esta es una guía en castellano para construir un tracking que no mienta.</p>
        <h2>Por qué los dashboards mienten</h2>
        <p>El tracking de marketing tiene tres grandes enemigos en 2026: las restricciones de privacidad de iOS, el consentimiento de cookies y la brecha entre cuándo se hace clic en un anuncio y cuándo llegan realmente los ingresos. La configuración estándar de tracking que tiene la mayoría de sitios web fue diseñada para 2018. Ya no funciona.</p>
        <h2>Tagging server-side</h2>
        <p>Deja de enviar datos directamente desde el navegador del usuario a Google, Meta y el resto. Configura un contenedor server-side de Google Tag Manager — normalmente en un subdominio como <code>track.tudominio.com</code> — y enruta todo a través de él. Mejora el rendimiento, mejora la privacidad, mejora la calidad de los datos.</p>
        <h2>Consent Mode v2</h2>
        <p>Si operas en la UE y no has implementado Consent Mode v2, tus datos de Google Ads son materialmente peores de lo que deberían ser. Consent Mode permite a Google rellenar conversiones modeladas para los usuarios que no dan su consentimiento — recuperando el 30–50 % de los datos que estás perdiendo.</p>
        <h2>Enhanced conversions</h2>
        <p>Pasa direcciones de email con hash (con consentimiento) a las <a href="/es/services/analytics/">APIs de conversión</a> de Google y Meta. Este único cambio suele mejorar el volumen de conversiones medidas en un 15–25 % en categorías con muchos usuarios de iOS.</p>
        <h2>Importación de conversiones offline</h2>
        <p>Si tienes un ciclo de ventas de más de una semana, necesitas importar conversiones offline. Conecta tu CRM a las APIs de eventos offline de Google Ads y Meta y devuelve los ingresos realmente cerrados. Las plataformas empezarán a optimizar para las personas correctas.</p>
        <h2>Reconciliación</h2>
        <p>Una vez al mes, compara los ingresos reportados por la plataforma publicitaria con tu contabilidad real. Apunta a una discrepancia inferior al 15 %. Cualquier cosa por encima significa que algo en la cadena está roto.</p>
        <p>Lecturas relacionadas: <a href="/es/blog/cookieless-tracking/">tracking sin cookies en 2026</a> — y <a href="/es/blog/crm-conversion-imports/">cómo usar datos del CRM para mejores conversiones offline</a>.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=tracking-setup-guide">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'meta-creative-volume': {
      title: 'Producir volumen creativo para Meta — el sistema',
      toc: ['El problema del volumen', 'Templatizar la marca no el asset', 'Hooks hooks hooks', 'UGC a escala', 'El briefing de creatividad de performance', 'Descartar semanalmente escalar mensualmente'],
      prose: (<>
        <p>La propia investigación de Meta dice que el creativo es el mayor motor del rendimiento en paid social. La mayoría de los pipelines creativos de las marcas se construyeron para un mundo en el que no era así. Aquí está cómo construir uno que encaje con 2026.</p>
        <h2>El problema del volumen</h2>
        <p>La biblioteca creativa de Meta ahora necesita 10–20 assets frescos a la semana para mantener el rendimiento estable. La mayoría de marcas publican 2–3. La brecha se muestra como frecuencia creciente, CTR cayendo y un CPM que deriva hacia arriba cada trimestre.</p>
        <h2>Templatizar la marca, no el asset</h2>
        <p>Construye un sistema de marca muy templado — tipografías, colores, primitivas de movimiento, layouts — y luego deja que los creadores trabajen rápido dentro de él. La marca la hace cumplir la plantilla; los creadores aportan las ideas. Así publicas 15 assets a la semana sin 15 revisiones de marca.</p>
        <h2>Hooks, hooks, hooks</h2>
        <p>Los primeros tres segundos de cada vídeo son los únicos que importan. Testeamos hooks más que cualquier otra cosa — mismo cuerpo, seis aperturas diferentes. El hook ganador se reutiliza en el creativo de la semana siguiente.</p>
        <h2>UGC a escala</h2>
        <p>Mantén un pequeño <a href="/es/services/creative/">programa de creadores</a> continuo — 5–10 creadores en retainer, con briefings semanales. Más barato que el creativo de agencia, más rápido que el creativo interno, y el algoritmo de Meta tiende a preferirlo.</p>
        <h2>El briefing de creatividad de performance</h2>
        <p>Los briefs van de tu equipo de medios a tu equipo creativo, no al revés. El brief contiene: para qué ad set es, qué debe testear el hook, cuál es el punto de prueba, qué debe impulsar el CTA. El input de marca llega después.</p>
        <h2>Descartar semanalmente, escalar mensualmente</h2>
        <p>Cada viernes, elimina todo lo que esté por debajo del umbral de rendimiento. Una vez al mes, identifica los tres mejores patrones creativos y briefea el creativo del mes siguiente en torno a ellos. Los aprendizajes se acumulan.</p>
        <p>Lecturas relacionadas: <a href="/es/blog/creative-testing-framework/">tests creativos que realmente se acumulan</a> — y nuestro <a href="/es/services/paid-social/">servicio de paid social</a>.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=meta-creative-volume">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'google-ads-mallorca': {
      title: 'Google Ads Mallorca — guía de targeting local',
      toc: ['La configuración geográfica predeterminada está mal', 'La configuración de idioma afecta en ambos sentidos', 'Tracking de conversiones local', 'Pujas para la estacionalidad turística', 'Local pack y Maps'],
      prose: (<>
        <p>Poner anuncios desde Mallorca es diferente. Tus clientes buscan en cinco idiomas, tus competidores están en Madrid, y la geolocalización predeterminada de Google está mal para ti. Esto es lo que hay que corregir.</p>
        <h2>La configuración geográfica predeterminada está mal</h2>
        <p>Google Ads viene con «Presencia o interés» como configuración de ubicación predeterminada. Para negocios locales en Mallorca, esto significa mostrar anuncios a cualquier persona en España que haya mostrado alguna vez «interés» en Mallorca — millones de personas que nunca serán clientes. Cambia a «Solo presencia» el primer día.</p>
        <h2>La configuración de idioma afecta en ambos sentidos</h2>
        <p>Los clientes de Mallorca buscan en español, catalán, alemán e inglés — a veces los cuatro en una misma sesión de búsqueda. No elijas un solo idioma. Construye campañas separadas por idioma, con palabras clave, anuncios y landing pages traducidos. Las copias autotraducidas te cuestan un 30–40 % del rendimiento.</p>
        <h2>Tracking de conversiones local</h2>
        <p>Para negocios con ubicación física (restaurantes, agencias, clínicas), el tracking de llamadas y el tracking de visitas en persona importan más que los formularios completados. Configúralos. La conversión «Store visits» de Google es gratuita e infrautilizada.</p>
        <h2>Pujas para la estacionalidad turística</h2>
        <p>El 50 % de las búsquedas comerciales en Mallorca ocurren entre abril y septiembre. No ejecutes pujas planas todo el año. Construye estrategias de puja por franja horaria y estación que coincidan con la curva real de demanda.</p>
        <h2>Local pack y Maps</h2>
        <p>Si eres un negocio de servicios, tu Perfil de Empresa de Google genera más ingresos que tus anuncios. Optimízalo correctamente: fotos actualizadas mensualmente, reseñas solicitadas cada trimestre, servicios correctamente categorizados. El trabajo se acumula.</p>
        <p>Nuestro <a href="/es/services/google-ads/">servicio de Google Ads &amp; Performance Max</a> — adaptado a la demanda multilingüe y estacional de Mallorca.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=google-ads-mallorca">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'shopify-seo-2026': {
      title: 'Shopify SEO 2026 — los ocho cambios que valen la pena',
      toc: ['Metadatos de páginas de colección', 'Navegación facetada', 'Schema de producto', 'Texto alternativo de imágenes', 'Velocidad del sitio', 'Contenido de blog que realmente posiciona', 'Enlazado interno desde páginas de colección', 'Hreflang para tiendas multiidioma'],
      prose: (<>
        <p>Shopify es una plataforma de comercio excelente con valores SEO predeterminados mediocres. Ocho correcciones específicas que, en nuestra experiencia, mueven el tráfico orgánico más que el resto combinadas.</p>
        <h2>Metadatos de páginas de colección</h2>
        <p>Los meta titles predeterminados de las páginas de colección de Shopify suelen ser solo el nombre de la colección. Malo. Reescribe cada meta title de colección siguiendo el patrón <code>{'{Nombre de colección} | {USP} | {Marca}'}</code> — y escribe una meta description real, no una etiqueta de descripción truncada.</p>
        <h2>Navegación facetada</h2>
        <p>Si tus colecciones tienen filtros (talla, color, precio), la configuración predeterminada de Shopify genera URLs duplicadas infinitas que diluyen el presupuesto de rastreo. Usa etiquetas canonical de forma agresiva e indexa como noindex las URLs de filtro que no añaden valor SEO.</p>
        <h2>Schema de producto</h2>
        <p>La mayoría de temas de Shopify incluyen schema de producto, pero suele estar incompleto. Añade los campos aggregateRating, número de reseñas, marca, GTIN, condición y disponibilidad a cada producto. Las interfaces de compras de IA en particular los ponderan mucho.</p>
        <h2>Texto alternativo de imágenes</h2>
        <p>Lo más omitido en Shopify. Cada imagen de producto debería tener texto alternativo descriptivo que incluya el nombre del producto y un atributo relevante. Usa el editor masivo de Shopify — una hora de trabajo, impacto SEO duradero.</p>
        <h2>Velocidad del sitio</h2>
        <p>Los temas de Shopify se han vuelto pesados. Ejecuta Lighthouse, identifica las 3–5 apps más pesadas y elimínalas. Usa las secciones nativas de Shopify en lugar de las basadas en apps siempre que sea posible. Objetivo: LCP por debajo de 2,5 segundos en móvil.</p>
        <h2>Contenido de blog que realmente posiciona</h2>
        <p>No uses el blog de Shopify para notas de prensa. Construye contenido que defina la categoría — guías de compra, comparativas, tutoriales de expertos — que enlace a colecciones de productos relevantes. Aquí es donde el SEO de Shopify se acumula.</p>
        <h2>Enlazado interno desde páginas de colección</h2>
        <p>Añade texto editorial genuino al inicio de cada página de colección (300–500 palabras) y enlaza desde él a colecciones relacionadas. La mayoría de temas de Shopify lo ocultan — encuentra la sección, actívala, escribe contenido real.</p>
        <h2>Hreflang para tiendas multiidioma</h2>
        <p>Si vendes en varios idiomas, configura hreflang correctamente. Shopify Markets lo gestiona si se configura correctamente, pero los valores predeterminados suelen estar mal. Audita cada mercado para verificar las etiquetas hreflang correctas.</p>
        <p>Lecturas relacionadas: nuestro <a href="/es/services/seo/">servicio de SEO</a>, nuestro <a href="/es/industries/ecommerce/">playbook de marketing para e-commerce</a> — y <a href="/es/blog/how-to-get-mentioned-by-chatgpt/">cómo los datos estructurados también generan citas en ChatGPT</a>.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=shopify-seo-2026">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'hotel-direct-bookings': {
      title: 'Hotel Mallorca: +52 % reservas directas en 11 semanas',
      toc: ['El punto de partida', 'El diagnóstico de cuatro semanas', 'La reconstrucción del flujo de reservas', 'El cambio en paid media', 'Los números'],
      prose: (<>
        <p>La mayoría de hoteles independientes pierden entre el 17 y el 22 % de sus ingresos en comisiones de OTA. Esta es la historia real de un hotel de Mallorca que recuperó la mayor parte de eso en menos de tres meses.</p>
        <h2>El punto de partida</h2>
        <p>Mar y Roca es un hotel boutique de 34 habitaciones en Port d&rsquo;Andratx. En 2024, el 78 % de sus reservas llegaban a través de Booking.com y Expedia — con una comisión media del 18 %. Las reservas directas se estancaron en torno al 22 %, a pesar de que la web parecía lo suficientemente moderna.</p>
        <h2>El diagnóstico de cuatro semanas</h2>
        <p>La web parecía moderna pero convertía mal: un flujo de reservas de cinco pasos, sin paridad de tarifas, lenta en móvil y una galería hero que no reflejaba cómo se sentía realmente el hotel. Los anuncios de Meta y Google eran genéricos y no mencionaban ventajas de precio frente a las OTAs.</p>
        <h2>La reconstrucción del flujo de reservas</h2>
        <p>Cinco pasos se convirtieron en tres. Mobile-first. Un mensaje claro de «Mejor tarifa garantizada — reserva directo y ahorra X€», vinculado a scraping de tarifas OTA en tiempo real para que el ahorro siempre fuera real. La tasa de conversión desde la entrada al motor de reservas hasta la reserva confirmada pasó del 2,1 % al 8,4 %.</p>
        <h2>El cambio en paid media</h2>
        <p><a href="/es/services/paid-social/">Meta</a> y <a href="/es/services/google-ads/">Google Hotel Ads</a>. El creativo de Meta se centró en las habitaciones y vistas por las que el hotel era realmente conocido, no en imágenes genéricas de viajes. Google Hotel Ads se pujó agresivamente solo en rangos de fechas donde el hotel tenía disponibilidad — ahorrando presupuesto el resto del año.</p>
        <h2>Los números</h2>
        <p>A las 11 semanas, las reservas directas habían crecido un 52 % y las reservas totales un 11 %. Con ~350.000 € en ingresos directos mensuales frente a la tendencia anterior, la comisión OTA anual ahorrada fue de unos 184.000 €.</p>
        <p>Utilizamos <a href="/es/services/conversion-design/">diseño de conversión (CRO)</a>, <a href="/es/services/google-ads/">Google Ads</a> y <a href="/es/services/paid-social/">Meta Ads</a>. Más en nuestro <a href="/es/industries/hospitality/">playbook de marketing para hostelería</a> y en nuestros <a href="/es/cases/">resultados de clientes</a>.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=hotel-direct-bookings">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'b2b-linkedin-playbook': {
      toc: ['Diseño de audiencia', 'Tres objetivos de campaña tres audiencias', 'Los Thought Leader Ads están infrautilizados', 'Document Ads para la etapa de consideración', 'Conversation Ads para alta intención', 'Conversiones offline alimentadas por CRM', 'Lead scoring antes de que la plataforma vea el lead'],
      prose: (<>
        <p>LinkedIn es la plataforma publicitaria más cara en términos de CPM — y el lugar más barato para encontrar a un comprador B2B cuando se gestiona correctamente. Este es el playbook que desplegamos el primer día de cada retainer B2B SaaS.</p>
        <h2>Diseño de audiencia — primeros principios</h2>
        <p>«Responsables senior en [sector]» no es una audiencia. Es una descripción de trabajo. Construye audiencias a partir de datos reales de LTV de clientes: quién cierra, quién se queda, quién hace upsell. Luego construye audiencias de LinkedIn que encajen con esos patrones — función laboral + antigüedad + tamaño de empresa + stack tecnológico + geografía.</p>
        <h2>Tres objetivos de campaña, tres audiencias</h2>
        <p>Una campaña de awareness, una de consideración, una de conversión. Cada una recibe un tamaño de audiencia diferente, un formato creativo diferente, una estrategia de puja diferente. No las colapses en una — el algoritmo de LinkedIn necesita esa separación.</p>
        <h2>Los Thought Leader Ads están infrautilizados</h2>
        <p>Si tienes un fundador o líder senior que publica en LinkedIn, los Thought Leader Ads (donde promocionas su publicación orgánica como anuncio de pago) superan a los anuncios de cuenta de marca en 2–3x en engagement. Úsalos.</p>
        <h2>Document Ads para la etapa de consideración</h2>
        <p>Un informe o guía sectorial genuina, entregada como Document Ad, es el mejor asset de mid-funnel que ha lanzado LinkedIn. Se briefea una vez, se ejecuta durante seis meses, se observa cómo los leads se acumulan.</p>
        <h2>Conversation Ads para alta intención</h2>
        <p>Para eventos, demos y ABM, los Conversation Ads (en LinkedIn Messaging) cuestan rutinariamente un 40–60 % menos por reunión cualificada que los formularios. Funcionan mejor cuando están escritos como una persona real que se pone en contacto — no como un email de marketing.</p>
        <h2>Conversiones offline alimentadas por CRM</h2>
        <p>El mayor desbloqueador. Conecta la API de conversiones offline de LinkedIn a tu CRM. Devuelve eventos de MQL, SQL, oportunidad creada y closed-won con sus valores. El algoritmo de LinkedIn empieza a optimizar para ingresos reales.</p>
        <h2>Lead scoring antes de que la plataforma vea el lead</h2>
        <p>Usa una herramienta como Clearbit / 6sense / tu propio enriquecimiento para puntuar los leads antes de que se disparen como conversiones en LinkedIn. Solo dispara conversiones de «lead cualificado» para leads que valga la pena perseguir. El algoritmo de la plataforma se vuelve dramáticamente más preciso.</p>
        <p>Lecturas relacionadas: nuestro <a href="/es/services/paid-social/">servicio de paid social</a> (LinkedIn, Meta, TikTok), nuestro <a href="/es/industries/hr/">playbook de marketing para RRHH y recruiting</a> — y <a href="/es/blog/crm-conversion-imports/">conversiones offline del CRM para un algoritmo más inteligente</a>.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=b2b-linkedin-playbook">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'cookieless-tracking': {
      title: 'Tracking sin cookies en 2026 — guía de adaptación',
      toc: ['Qué cambió realmente', 'Tagging server-side', 'Consent Mode v2', 'APIs de conversión', 'Estrategia de datos de primera parte', 'Conversiones modeladas'],
      prose: (<>
        <p>Las cookies de terceros están funcionalmente muertas. Apple las eliminó en iOS hace cinco años, Chrome está terminando el trabajo ahora. Así es como se rastrean las conversiones en 2026 sin infringir la ley ni perder todos los datos.</p>
        <h2>Qué cambió realmente</h2>
        <p>La ITP de Apple, el Privacy Sandbox de Chrome y la presión de cumplimiento del RGPD/ePrivacy han reducido colectivamente la vida útil de una cookie de seguimiento de ~2 años a ~7 días en la mayoría de navegadores. La implicación: cualquier conversión que ocurra más de una semana después del clic es invisible para el tracking estándar.</p>
        <h2>Tagging server-side</h2>
        <p>Mueve tu gestor de etiquetas fuera del navegador del usuario y a tu propio servidor. Esto restaura la vida útil de las cookies a lo que permita tu dominio (normalmente 30–90+ días), mejora la velocidad del sitio y te da una forma respetuosa con la privacidad de pasar datos de primera parte a las plataformas publicitarias.</p>
        <h2>Consent Mode v2</h2>
        <p>El Consent Mode v2 de Google te permite decirle a Google si el usuario ha consentido las cookies de anuncios y analítica. Si no lo hizo, Google recibe «pings sin consentimiento» — señales anonimizadas que usa para modelar la conversión. Correctamente implementado, recuperas el 30–50 % de los datos que de otro modo perderías.</p>
        <h2>APIs de conversión</h2>
        <p>Meta CAPI, TikTok Events API, LinkedIn Conversions API, <a href="/es/services/analytics/">Google Enhanced Conversions</a>. Todas te permiten enviar datos de primera parte con hash desde tu servidor a la plataforma. Todas mejoran la calidad de los datos. Todas están infrautilizadas.</p>
        <h2>Estrategia de datos de primera parte</h2>
        <p>Si no tienes una estrategia de datos de primera parte, constrúyela. Capturas de email, creación de cuentas, programas de fidelización, contenido cerrado — lo que encaje con tu negocio. Los datos de primera parte son ahora los cimientos de los que depende todo lo demás.</p>
        <h2>Conversiones modeladas</h2>
        <p>Espera que el 20–40 % de tus datos de conversión en 2026 sean modelados (estimados estadísticamente) en lugar de observados directamente. Esto es normal y no es un problema si el modelo está bien alimentado. La atribución día a día precisa ya es historia — acéptalo.</p>
        <p>Lecturas relacionadas: <a href="/es/blog/tracking-setup-guide/">configurar el tracking correctamente</a> — y nuestro <a href="/es/services/analytics/">servicio de analytics y tracking</a>.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=cookieless-tracking">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'real-estate-lead-gen': {
      toc: ['El problema del comprador motivado', 'Multistep supera al single-step', 'Preguntar primero lo fácil', 'Mostrar el progreso', 'La precalificación reduce el ruido', 'Higiene del teclado en móvil'],
      prose: (<>
        <p>El sector inmobiliario es una de las categorías de búsqueda con más intención de compra de Internet. Entonces, ¿por qué la mayoría de webs de agencias convierten por debajo del 1 %? Normalmente, el formulario.</p>
        <h2>El problema del comprador motivado</h2>
        <p>Un usuario que llega a la página «Valoración gratuita» de una agencia inmobiliaria tiene alta intención. Ya ha decidido que quizás quiere vender. El formulario es lo único que se interpone entre tú y un lead cualificado — y la mayoría de formularios están diseñados de una forma que hace perder a esas personas.</p>
        <h2>Multistep supera al single-step</h2>
        <p>Un formulario de 8 campos en una sola página convierte alrededor del 1,5 %. Los mismos 8 campos repartidos en 3 pasos lógicos convierten al 6–10 %. Cada paso es un pequeño compromiso; una vez que el usuario ha respondido la primera pregunta, es más probable que termine.</p>
        <h2>Preguntar primero lo fácil</h2>
        <p>«¿Cuál es el tipo de propiedad?» antes que «¿Cuál es tu dirección de email?». El usuario rellena su información personal al final, después de haber invertido ya esfuerzo. Dale la vuelta a esto y verás desplomarse las tasas de conversión.</p>
        <h2>Mostrar el progreso</h2>
        <p>Una barra de progreso en la parte superior del formulario («Paso 2 de 4») mejora notablemente la completitud. La gente está más dispuesta a terminar lo que ha empezado.</p>
        <h2>La precalificación reduce el ruido</h2>
        <p>Usa el formulario para precalificar: rango de presupuesto, plazo de venta, tipo de propiedad actual. La caída del 30 % en leads vale la pena — el 70 % que termina es dramáticamente más útil para tus agentes.</p>
        <h2>Higiene del teclado en móvil</h2>
        <p>Los campos de email deben activar teclados de email. Los campos de teléfono deben activar teclados numéricos. No hagas que un usuario en móvil cambie de teclado tres veces para rellenar tu formulario.</p>
        <p>Esto es central en nuestro <a href="/es/services/conversion-design/">servicio de diseño de conversión (CRO)</a>. Más en nuestro <a href="/es/industries/real-estate/">playbook de marketing inmobiliario</a>.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=real-estate-lead-gen">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'tiktok-organic-paid': {
      toc: ['Los patrones de contenido que ganan impresiones', 'Spark Ads no posts impulsados', 'Liderado por creadores no por la marca', 'El bucle de acumulación'],
      prose: (<>
        <p>TikTok ya no es un canal de «¿deberíamos estar ahí?» para la mayoría de marcas. Es de «¿cómo estamos ahí de forma eficiente?». Esto es lo que funciona en 2026.</p>
        <h2>Los patrones de contenido que ganan impresiones</h2>
        <p>Tres patrones dominan el orgánico en 2026: <strong>el proceso entre bastidores</strong> (gente viendo cómo se hacen las cosas), <strong>el fundador ante la cámara</strong> (genuino, sin guión, baja producción) y <strong>el producto en contexto</strong> (mostrando cómo el producto encaja en una vida real, no en una perfecta). Casi todo lo demás rinde por debajo de lo esperado.</p>
        <h2>Spark Ads, no posts impulsados</h2>
        <p>Usa Spark Ads para promocionar contenido orgánico que ya haya generado engagement. No impulses posts — los Spark Ads llevan toda la prueba social del engagement orgánico original, lo que los hace funcionar dramáticamente mejor.</p>
        <h2>Liderado por creadores, no por la marca</h2>
        <p>La mayoría del creativo de cuentas de marca en TikTok muere. Consigue que los creadores hagan contenido para ti, obtén derechos de uso y ejecuta esos creativos como Spark Ads. El incremento sobre el creativo de cuenta de marca suele ser de 3–5x.</p>
        <h2>El bucle de acumulación</h2>
        <p>Identifica tus 3 vídeos orgánicos principales cada mes. Ponles Spark Ads. Usa los aprendizajes para briefear el contenido de creadores del mes siguiente. Repite. Las marcas que descifran TikTok acumulan este bucle mes a mes.</p>
        <p>Lecturas relacionadas: nuestro <a href="/es/services/paid-social/">servicio de paid social</a> y <a href="/es/services/creative/">producción creativa</a>, nuestro <a href="/es/industries/ecommerce/">playbook de marketing para e-commerce</a> — y <a href="/es/blog/meta-creative-volume/">cómo construir un pipeline creativo para Meta</a> (los principios son idénticos en TikTok).</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=tiktok-organic-paid">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'crm-conversion-imports': {
      title: 'Optimiza por ingresos, no por formularios',
      toc: ['La trampa del formulario completado', 'Conversiones offline explicadas', 'Implementación', 'Qué cambia', 'Errores comunes'],
      prose: (<>
        <p>Los equipos de marketing B2B optimizan para lo que pueden medir. Lo que pueden medir suele ser formularios completados. Por eso tantas cuentas de anuncios B2B producen cientos de MQLs y ningún ingreso.</p>
        <h2>La trampa del formulario completado</h2>
        <p>Si optimizas una plataforma publicitaria para conversiones de «formulario completado», encontrará los formularios completados más baratos posibles. Eso suele significar: los usuarios de menor intención, las empresas más pequeñas, los títulos de trabajo incorrectos. La plataforma está haciendo su trabajo correctamente — tú le estás dando el trabajo equivocado.</p>
        <h2>Conversiones offline explicadas</h2>
        <p>Todas las grandes plataformas publicitarias permiten ahora importar eventos offline: MQLs, SQLs, oportunidad creada, closed-won. Cada evento puede tener un valor asociado. La plataforma deja de optimizar para formularios y empieza a optimizar para eventos que realmente se correlacionan con los ingresos.</p>
        <h2>Implementación</h2>
        <p>Tres piezas: un ID de clic capturado en el envío del formulario (gclid para Google, fbclid para Meta, li_fat_id para LinkedIn), un campo de CRM que lo almacena, y una exportación diaria del CRM a la plataforma publicitaria con el ID de clic, el nombre del evento y el valor.</p>
        <h2>Qué cambia</h2>
        <p>A las 2–3 semanas de implementar correctamente las conversiones offline, la mayoría de cuentas B2B ven: un 30–50 % menos de volumen de MQL, pero 2–3x más SQLs y valores de pipeline dramáticamente más altos. El mismo gasto publicitario, un resultado de negocio dramáticamente mejor.</p>
        <h2>Errores comunes</h2>
        <p>Asegúrate de que los valores que estás devolviendo son económicamente significativos. Un evento de «closed-won» debería llevar el valor real del contrato, no un marcador fijo de 100 €. La plataforma optimiza contra los valores que le das.</p>
        <p>Lecturas relacionadas: <a href="/es/blog/tracking-setup-guide/">la guía completa de configuración de tracking</a> y nuestro <a href="/es/services/analytics/">servicio de analytics y tracking</a>.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=crm-conversion-imports">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'solar-marketing-spain': {
      title: 'Marketing solar en España — qué funciona de verdad',
      toc: ['El problema de Meta', 'Precalificar en la landing page', 'Incentivos específicos por región', 'Atribución de ciclo largo', 'Google Ads suele ser el canal de mayor intención'],
      prose: (<>
        <p>España es uno de los mejores mercados solares de Europa — y uno de los más competitivos. Aquí está por qué la mayoría de instaladores solares luchan en paid media, y qué hacen los que prosperan.</p>
        <h2>El problema de Meta</h2>
        <p>Los leads solares de Meta llegan baratos. También llegan sin cualificar. El funnel solar estándar en Meta — «Consigue presupuesto solar gratis» → formulario → llamada del equipo de ventas — desperdicia el 70–80 % del tiempo del equipo de ventas con personas que nunca iban a comprar.</p>
        <h2>Precalificar en la landing page</h2>
        <p>Añade un cuestionario de 3 preguntas antes del formulario: tipo de tejado, factura mensual de electricidad, situación de propiedad. El usuario que lo completa tiene 4–5 veces más probabilidades de comprar. El usuario que no lo completa ahorra al equipo de ventas una llamada.</p>
        <h2>Incentivos específicos por región</h2>
        <p>Los incentivos solares españoles varían por región — Andalucía, Cataluña, Madrid tienen todos esquemas diferentes. Las landing pages nacionales genéricas desperdician presupuesto. Construye landing pages regionales que lideren con el incentivo específico que aplica.</p>
        <h2>Atribución de ciclo largo</h2>
        <p>La instalación solar española media tarda 4–6 meses desde el primer clic en el anuncio hasta el contrato firmado. Si estás optimizando para atribución de primer toque, estás optimizando para los clientes incorrectos. Conecta conversiones offline alimentadas por CRM y deja que el algoritmo aprenda de las instalaciones reales.</p>
        <h2>Google Ads suele ser el canal de mayor intención</h2>
        <p>Para solar, <a href="/es/services/google-ads/">Google Ads</a> capta mayor intención que <a href="/es/services/paid-social/">Meta</a>. La ponderación de presupuesto que ejecuta la mayoría de instaladores (60 % Meta, 40 % Google) suele estar al revés. Prueba lo contrario.</p>
        <p>Más en nuestro <a href="/es/industries/renewables/">playbook de marketing para energías renovables y cleantech</a>.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=solar-marketing-spain">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'creative-testing-framework': {
      toc: ['Aislar una variable a la vez', 'Los hooks son la variable de mayor apalancamiento', 'Construir una plantilla ganadora', 'La significancia estadística es real', 'Aprendizajes multiplataforma'],
      prose: (<>
        <p>La mayoría de «frameworks de testing creativo» son simplemente «lanzar mucho y ver qué funciona». Eso no es un framework — es jugar a la ruleta. Así es como testear creatividades para que los aprendizajes se acumulen.</p>
        <h2>Aislar una variable a la vez</h2>
        <p>Si cambias el hook, el visual y la oferta en el mismo test, no has aprendido nada sobre cuál fue lo que movió la aguja. Mantén todo constante excepto la única variable que estás testeando. Más lento, pero los aprendizajes son reales.</p>
        <h2>Los hooks son la variable de mayor apalancamiento</h2>
        <p>Los primeros tres segundos de un vídeo, o el primer titular de un estático, determinan el 80 % del rendimiento. Testea hooks más que cualquier otra cosa.</p>
        <h2>Construir una plantilla ganadora</h2>
        <p>Cuando encuentres una combinación ganadora de hook + formato, documéntala. Construye el creativo del mes siguiente en torno a variaciones de esa plantilla. La biblioteca de patrones ganadores es el activo real.</p>
        <h2>La significancia estadística es real</h2>
        <p>No elimines creatividades después de un día. Tampoco escales ganadores después de un día. Espera al menos 200 conversiones por variante antes de declarar un ganador. La mayoría de tests creativos se eliminan demasiado pronto.</p>
        <h2>Aprendizajes multiplataforma</h2>
        <p>Un hook que funciona en TikTok normalmente funciona en Meta. Un visual que funciona en Meta normalmente funciona en Instagram. Testea en la plataforma más barata, despliega en las demás.</p>
        <p>Nuestro <a href="/es/services/creative/">servicio de producción creativa</a> proporciona el ritmo semanal que hace esto posible — y <a href="/es/blog/meta-creative-volume/">cómo construir un pipeline creativo sostenible para Meta</a>.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=creative-testing-framework">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'gpt-shopping': {
      title: 'ChatGPT shopping para e-commerce en 2026',
      toc: ['Qué es realmente ChatGPT shopping', 'La calidad del feed de productos importa más que nunca', 'Marcado Schema.org de producto', 'Las reseñas como señal de ranking', 'La reputación de marca importa'],
      prose: (<>
        <p>OpenAI lanzó compras dentro de ChatGPT a finales de 2025. Para las marcas de e-commerce, es un nuevo canal de adquisición — y uno para el que la mayoría no se ha preparado.</p>
        <h2>Qué es realmente ChatGPT shopping</h2>
        <p>Cuando un usuario le pregunta a ChatGPT algo como «busco un buen jersey de lana por menos de 200 €», ChatGPT ahora genera recomendaciones de productos con imágenes, precios y enlaces directos al comerciante. No es publicidad — es orgánico. Y está creciendo rápido.</p>
        <h2>La calidad del feed de productos importa más que nunca</h2>
        <p>ChatGPT extrae datos de productos de los feeds de Google Shopping, los feeds de Bing Shopping y el marcado Schema.org de producto en las páginas del comerciante. Las marcas con los datos de producto más limpios aparecen. Las marcas con feeds desordenados no.</p>
        <h2>Marcado Schema.org de producto</h2>
        <p>Añade schema de Producto completo a cada página de producto: nombre, marca, imagen, descripción, ofertas (precio, moneda, disponibilidad), aggregateRating, número de reseñas, GTIN. Estos son los datos que las interfaces de compras de IA usan para posicionarte.</p>
        <h2>Las reseñas como señal de ranking</h2>
        <p>Las interfaces de compras de IA parecen ponderar fuertemente las puntuaciones agregadas de reseñas y los recuentos de reseñas. Si tus productos no tienen reseñas, no posicionan en las compras de IA. Pon en marcha un programa de recogida de reseñas.</p>
        <h2>La reputación de marca importa</h2>
        <p>Los modelos de IA citan marcas en las que confían sus datos de entrenamiento. Construir reconocimiento de marca genuino — a través de relaciones públicas, contenido, prueba social — se paga en visibilidad de compras de IA, no solo en métricas de marca clásicas.</p>
        <p>Lecturas relacionadas: nuestro <a href="/es/services/ai-visibility/">servicio de visibilidad en IA</a>, nuestro <a href="/es/industries/ecommerce/">playbook de marketing para e-commerce</a> — y <a href="/es/blog/how-to-get-mentioned-by-chatgpt/">cómo conseguir que ChatGPT y Perplexity te mencionen</a>.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=gpt-shopping">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'ga4-mistakes': {
      toc: ['Tracking cross-dominio', 'Filtros de tráfico interno', 'Eventos personalizados para lo que realmente importa', 'Definiciones de conversión', 'Agrupación de canales', 'Definiciones de audiencia', 'Retención de datos'],
      prose: (<>
        <p>Google Analytics 4 lleva años disponible y la mayoría de configuraciones siguen cometiendo los mismos errores. Estos son los siete que corregimos en cada nuevo cliente.</p>
        <h2>Tracking cross-dominio</h2>
        <p>Si tu sitio abarca varios dominios (p. ej., sitio principal + subsistema de reservas), el 70 % de las instalaciones de GA4 rompen el tracking cross-dominio. La corrección son dos ajustes en el panel de administración — pero es crítica para una atribución precisa.</p>
        <h2>Filtros de tráfico interno</h2>
        <p>Tu equipo navegando por el sitio no debería contar como conversiones. Configura filtros de tráfico interno usando ajustes de IP o DEFINE-INTERNAL-TRAFFIC. Sí, requiere configurar las IPs de tu oficina. Hazlo de todas formas.</p>
        <h2>Eventos personalizados para lo que realmente importa</h2>
        <p>Los eventos predeterminados que GA4 dispara (page_view, scroll, file_download) se pierden los eventos que realmente importan para tu negocio. Configura eventos personalizados para: inicios de formulario, completados de formulario, reproducciones de vídeo, consultas de búsqueda, añadir al carrito, pasos de checkout. Usa Google Tag Manager.</p>
        <h2>Definiciones de conversión</h2>
        <p>Marca como conversiones solo los eventos que genuinamente indican valor de negocio. «Vista de página de contacto» no es una conversión. «Formulario de contacto enviado» sí lo es. Las definiciones de conversión laxas corrompen todos los informes posteriores.</p>
        <h2>Agrupación de canales</h2>
        <p>La agrupación de canales predeterminada de GA4 agrupa mal. Configura un grupo de canales personalizado que refleje cómo realmente piensas en tus canales.</p>
        <h2>Definiciones de audiencia</h2>
        <p>Crea audiencias de remarketing en GA4 para las cohortes que importan — abandonadores de carrito, lectores de blog, iniciadores de formularios de leads. Estas se pueden compartir automáticamente con Google Ads.</p>
        <h2>Retención de datos</h2>
        <p>GA4 tiene por defecto 2 meses de retención de datos a nivel de evento. Cámbialo a 14 meses en la administración. Te lo agradecerás en un año.</p>
        <p>Lecturas relacionadas: nuestro <a href="/es/services/analytics/">servicio de analytics y tracking</a> — y <a href="/es/blog/tracking-setup-guide/">la guía completa de configuración de tracking</a>.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=ga4-mistakes">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'yachting-marketing': {
      title: 'Marketing de charter náutico — 8 idiomas, 12 meses',
      toc: ['El calendario de cuatro fases', 'Ocho idiomas no uno', 'Remarketing de ciclo largo', 'Gestión de leads de alto valor', 'Marca vs. performance'],
      prose: (<>
        <p>El marketing de charter náutico no se parece a ninguna otra categoría en la que trabajamos. La ventana de reserva es larga, el ticket medio es enorme y el cliente es genuinamente global. Así es como funciona realmente el plan de medios.</p>
        <h2>El calendario de cuatro fases</h2>
        <p>Una temporada de charter tiene cuatro fases distintas: <strong>early-bird</strong> (sep–dic, cerrando el año siguiente), <strong>reserva pico</strong> (ene–abr, cuando la mayoría decide), <strong>disponibilidad tardía</strong> (may–jul, last-minute), <strong>hombro</strong> (ago–sep, semanas de temporada baja). Cada fase necesita creatividades, pujas y audiencias diferentes. Tratar el año como una sola campaña cuesta un 30–40 % de eficiencia.</p>
        <h2>Ocho idiomas, no uno</h2>
        <p>Los clientes de charter buscan en inglés, alemán, francés, italiano, español, ruso, neerlandés y polaco. Ejecutar una campaña en inglés y esperar lo mejor te cuesta la mayoría de la demanda europea. Construye cuentas separadas, correctamente localizadas, por idioma.</p>
        <h2>Remarketing de ciclo largo</h2>
        <p>El charter mediterráneo típico se investiga 6–12 semanas antes de reservar. La ventana de remarketing estándar de Meta de 30 días se pierde el corazón del recorrido. Construye ventanas de remarketing de 60–90 días con límites de frecuencia para mantenerte en mente sin agotar.</p>
        <h2>Gestión de leads de alto valor</h2>
        <p>Una consulta entrante de charter vale de media más de 38.000 €. La velocidad de seguimiento importa enormemente. Normalmente conectamos los sistemas de reservas (MMK, Booking Manager) directamente a Slack para que el equipo de ventas vea las consultas en segundos, no en días.</p>
        <h2>Marca vs. performance</h2>
        <p>La mayoría de empresas de charter gastan demasiado en <a href="/es/services/google-ads/">Google Search</a> y muy poco en <a href="/es/services/paid-social/">Meta</a> de construcción de marca. El charter es una compra de alta consideración — el cliente necesita conocer tu marca meses antes de buscar. El presupuesto debería reflejarlo.</p>
        <p>Más en nuestro <a href="/es/industries/boating/">playbook de marketing para náutica y yachting</a>.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=yachting-marketing">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'agency-pricing-honest': {
      title: 'Tarifas fijas, no porcentaje del presupuesto',
      toc: ['El problema de los incentivos', 'Cuándo importa esto', 'Las tarifas fijas resuelven el problema', 'Qué nos cuesta esto', 'Qué nos aporta esto'],
      prose: (<>
        <p>La mayoría de agencias de marketing digital cobran un porcentaje del gasto en medios. La mayoría de agencias de marketing digital tienen un incentivo para recomendar más gasto en medios. La conexión no es complicada.</p>
        <h2>El problema de los incentivos</h2>
        <p>Si una agencia cobra el 10 % de tu gasto en medios, cada 100.000 € adicionales de medios que gastas son 10.000 € más en su bolsillo. Esa tarifa se paga <em>independientemente de si los medios adicionales eran una buena idea</em>. El incentivo estructural es recomendar más medios — incluso cuando más no es la respuesta correcta.</p>
        <h2>Cuándo importa esto</h2>
        <p>A menudo, lo correcto para un cliente es <em>reducir</em> el gasto en medios. Recortar PMax desperdiciador. Pausar campañas de bajo margen. Reasignar de paid a SEO. Cada una de estas recomendaciones le cuesta dinero real a una agencia que cobra por porcentaje. Hemos visto agencias sentadas en cuentas que sabían que estaban gastando de más durante años antes de hacer la llamada.</p>
        <h2>Las tarifas fijas resuelven el problema</h2>
        <p>Cuando cobramos una tarifa mensual fija, nuestro incentivo es mantener al cliente. Nuestro incentivo para mantener al cliente es entregar resultados. La cantidad correcta de medios a gastar es lo que ofrezca el mejor resultado de negocio — y no tenemos ningún interés financiero en que eso sea un número mayor o menor.</p>
        <h2>Qué nos cuesta esto</h2>
        <p>Las tarifas fijas significan que una agencia más pequeña no puede escalar los ingresos tan rápido como una de porcentaje. Una agencia de porcentaje que hace crecer a un cliente de 100.000 € a 1 millón de € en gasto mensual hace crecer sus propios ingresos 10x. Nosotros no. Estamos bien con eso.</p>
        <h2>Qué nos aporta esto</h2>
        <p>Una tasa de retención de clientes a doce meses del 93 %, y un pipeline de inbound formado casi en su totalidad por referencias. El camino lento funciona. Ver nuestros <a href="/es/cases/">resultados de clientes</a>.</p>
        <h2>¿Necesitas ayuda con esto?</h2>
        <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=agency-pricing-honest">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. Primera conversación: 30 minutos, sin coste.</p>
      </>),
    },
    'google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026': {
      title: 'Google Ads vs. Meta Ads vs. TikTok Ads para ecommerce en 2026.',
      deck: 'Sin teoría de escuela de marketing. Sin slides de fabricante. Una comparación brutalmente práctica de dónde rinde cada plataforma en 2026 — y dónde quema presupuesto sin que nadie lo note.',
      toc: ['Resumen', 'CPC y CPM', 'AOV alto vs. bajo', 'Atribución', 'Creatividad', 'Escalabilidad', 'Remarketing', 'Cuándo gana PMax', 'El mix honesto', 'FAQs'],
      prose: (<>
        <p><strong>Si vendes online en 2026, estás usando al menos una de estas tres: Google Ads, Meta Ads, TikTok Ads.</strong> La mayoría de las marcas de ecommerce usan las tres a la vez, sin un marco honesto para decidir cuál merece el próximo euro. Este artículo es ese marco &mdash; basado en aproximadamente &euro;2,1M de gasto ecommerce gestionado por pmax en Q1 2026, en 14 retainers activos entre la UE y el Reino Unido.</p>
        <p>Es opinionado. No va a halagar a todas las plataformas. Salta a la tabla comparativa si quieres la respuesta en 30 segundos.</p>

        <h2 id="tldr">Resumen &mdash; una línea por plataforma</h2>
        <ul>
          <li><strong>Google Ads</strong> es el sitio más barato para encontrar a alguien que ya quiere lo que vendes.</li>
          <li><strong>Meta Ads</strong> es el sitio más barato para crear demanda a escala &mdash; si puedes generar el volumen creativo.</li>
          <li><strong>TikTok Ads</strong> tiene el CPM más bajo de la sala &mdash; y es el lugar más fácil para perder dinero si tu velocidad de iteración creativa es lenta.</li>
        </ul>

        <h2 id="cpc-cpm">CPC y CPM en el mundo real &mdash; lo que pagamos en 2026</h2>
        <p>Los benchmarks publicados son inútiles porque la varianza es enorme. Lo siguiente es el rango mediano de nuestras cuentas activas de ecommerce en la UE durante Q1 2026 &mdash; no teórico, no oficial, simplemente lo que salió de los informes de gasto.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Métrica (mediana UE, Q1 2026)</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>CPM (&euro;)</th><td>&euro;15&ndash;&euro;55 Shopping &middot; &euro;30&ndash;&euro;120 marca</td><td>&euro;8&ndash;&euro;18 prospecting &middot; &euro;18&ndash;&euro;35 retargeting</td><td>&euro;3&ndash;&euro;8 prospecting</td></tr>
              <tr><th>CPC (&euro;)</th><td>&euro;0,40&ndash;&euro;2,20 Shopping &middot; &euro;1,20&ndash;&euro;6,50 marca</td><td>&euro;0,35&ndash;&euro;1,10</td><td>&euro;0,18&ndash;&euro;0,55</td></tr>
              <tr><th>CTR</th><td>3,5&ndash;9% Shopping</td><td>0,9&ndash;2,2%</td><td>0,6&ndash;1,5%</td></tr>
              <tr><th>Conversión mediana (desde el clic)</th><td>2,4&ndash;5,8%</td><td>0,9&ndash;2,2%</td><td>0,4&ndash;1,4%</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>Lo que esto significa:</strong> un clic de Google Shopping cuesta 4&ndash;8 veces más que uno de TikTok &mdash; pero también convierte 4&ndash;10 veces mejor. El CPM es la unidad equivocada para ecommerce. CPA (o mejor, payback del CAC) es la única honesta.</p>

        <div className="cmp-takeaway">
          <span className="k">La conclusión</span>
          <p><strong>Si juzgas canales solo por CPM, vas a gastar de más en TikTok y de menos en Google.</strong> El alcance no es el objetivo. La atención pagada de gente que quiere y puede pagar el producto sí lo es.</p>
        </div>

        <h2 id="aov">AOV alto vs. AOV bajo &mdash; la palanca infravalorada</h2>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>AOV</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>&euro;20&ndash;&euro;60 (impulso)</th><td><span className="pill pill-mid">Medio</span> Margen comido por el CPC</td><td><span className="pill pill-good">Bueno</span> Punto dulce de Advantage+</td><td><span className="pill pill-good">Bueno</span> Camino viral nativo</td></tr>
              <tr><th>&euro;60&ndash;&euro;200 (considerado)</th><td><span className="pill pill-good">Bueno</span> El mejor encaje</td><td><span className="pill pill-good">Bueno</span> Fuerte con creatividad</td><td><span className="pill pill-mid">Medio</span> Necesita iteración</td></tr>
              <tr><th>&euro;200&ndash;&euro;800 (deliberado)</th><td><span className="pill pill-good">Excelente</span> Brand search domina</td><td><span className="pill pill-mid">Medio</span> Ciclos largos</td><td><span className="pill pill-bad">Débil</span> Intent equivocada</td></tr>
              <tr><th>&euro;800+ (lujo / B2B-adyacente)</th><td><span className="pill pill-good">Excelente</span> Microsoft Ads también</td><td><span className="pill pill-mid">Medio</span> Largos ciclos</td><td><span className="pill pill-bad">Débil</span> Audiencia desalineada</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="attribution">Atribución &mdash; lo que cada plataforma sobre-reclama</h2>
        <p>Las tres plataformas se atribuyen conversiones que no son suyas. Se diferencian en cuánto, y en lo fácil que es corregirlo.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Atribución</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>Ventana de clic por defecto</th><td>30 días clic, 1 día view</td><td>7 días clic, 1 día view</td><td>7 días clic, 1 día view</td></tr>
              <tr><th>Fix server-side</th><td>Enhanced Conversions + import offline</td><td>CAPI + eventos offline</td><td>Events API (aún madurando)</td></tr>
              <tr><th>Severidad de sobre-reclamación</th><td>~15&ndash;25%</td><td>~25&ndash;40%</td><td>~35&ndash;55%</td></tr>
              <tr><th>Puntuación de honestidad (subjetiva)</th><td>6/10</td><td>4/10</td><td>3/10</td></tr>
            </tbody>
          </table>
        </div>

        <p className="cmp-quote">&ldquo;En 2026 la atribución ya no es un problema de reporte. Es toda la brecha de rendimiento.&rdquo;</p>

        <h2 id="creative">Requisitos creativos &mdash; lo que cada plataforma realmente consume</h2>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Requisito creativo</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>Frecuencia de producción para mantener rendimiento</th><td>1&ndash;3 nuevos assets por trimestre</td><td>10&ndash;20 nuevos por <em>semana</em></td><td>15&ndash;30 nativos por <em>semana</em></td></tr>
              <tr><th>Tipo de creatividad ganadora</th><td>Feed de producto + texto responsivo</td><td>UGC, fundador a cámara</td><td>UGC nativo, hook-led</td></tr>
              <tr><th>Ventana de fatiga creativa</th><td>3&ndash;6 meses</td><td>2&ndash;4 semanas</td><td>5&ndash;14 días</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cmp-takeaway">
          <span className="k">La conclusión</span>
          <p><strong>Si tu marca no puede producir 10 piezas frescas de Meta a la semana, no arranques Meta Ads.</strong> Lo mismo con 15 piezas nativas de TikTok. Lo decimos a los clientes con educación; pocas veces escuchan a la primera. La conversación se repite al mes tres.</p>
        </div>

        <h2 id="pmax">Cuándo gana Performance Max &mdash; y cuándo pierde</h2>
        <h3>PMax gana cuando&hellip;</h3>
        <ul>
          <li>la marca ya tiene <strong>fuerte demanda orgánica y de marca</strong>;</li>
          <li>el catálogo tiene <strong>margen consistente</strong> entre SKUs y el feed está limpio;</li>
          <li>existen <strong>datos de conversión profundos</strong> &mdash; señales first-party, eventos offline, value-based bidding;</li>
          <li>estás dispuesto a <strong>excluir brand search</strong> y gestionarla por separado.</li>
        </ul>
        <h3>PMax pierde cuando&hellip;</h3>
        <ul>
          <li>el catálogo tiene <strong>márgenes muy distintos</strong>;</li>
          <li>necesitas <strong>control quirúrgico</strong> sobre palabras clave concretas;</li>
          <li>brand search está siendo <strong>absorbido y contado dos veces</strong>;</li>
          <li>los datos de conversión son <strong>superficiales</strong> &mdash; sólo form fills.</li>
        </ul>

        <figure className="cmp-screenshot">
          <a href="/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/pmax-branded-search-absorbed-attribution-2026.webp" target="_blank" rel="noopener">
            <Image
              src="/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/pmax-branded-search-absorbed-attribution-2026.webp"
              alt="Informe de términos de búsqueda en Google Ads mostrando cómo Performance Max absorbe búsquedas de marca y se atribuye las conversiones — causa frecuente de ROAS inflado en cuentas de ecommerce 2026"
              title="Performance Max absorbiendo búsquedas de marca — informe de términos de búsqueda Google Ads Q1 2026"
              width={1600}
              height={900}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </a>
          <figcaption>Fig. 1 — Cuenta real: búsquedas de marca absorbidas por Performance Max y acreditadas como conversiones PMax. El ROAS reportado parece sólido sobre el papel &mdash; la mayor parte es demanda de marca capturada, no nuevos clientes adquiridos a través de paid media. Toca para ampliar.</figcaption>
        </figure>

        <p className="cmp-quote">&ldquo;PMax suele superar a Meta cuando ya existe demanda de búsqueda de marca. Cuando no existe, normalmente gana Meta &mdash; siempre que el volumen creativo esté ahí.&rdquo;</p>

        <h2 id="the-honest-mix">El mix honesto &mdash; lo que solemos recomendar</h2>
        <p>Si hoy nos pregunta un nuevo cliente de ecommerce cómo repartir un presupuesto mensual de &euro;30.000, sin más contexto:</p>
        <ul>
          <li><strong>~55% Google Ads</strong> &mdash; Performance Max + Search bien estructurada, Brand separado.</li>
          <li><strong>~35% Meta Ads</strong> &mdash; Advantage+ Shopping para prospección, DPA para retargeting, 10+ creatividades nuevas por semana.</li>
          <li><strong>~10% TikTok Ads</strong> &mdash; Spark Ads sobre contenido de creator, solo con pipeline creativa funcionando.</li>
        </ul>

        <h2 id="closing">Cierre &mdash; elige lo que encaja, no lo que grita más</h2>
        <p>La mayoría de marcas no tienen un &ldquo;problema con Meta&rdquo; ni un &ldquo;problema con TikTok&rdquo;. Tienen un <strong>problema de throughput creativo</strong>, un <strong>problema de atribución</strong> o un <strong>problema de catálogo</strong> &mdash; y culpan a la plataforma. Arregla la restricción real, y el mix de canales se ordena solo en un trimestre.</p>
        <p>Si quieres un diagnóstico de una página sobre dónde fuga tu inversión entre Google, Meta y TikTok, hacemos una llamada gratuita de 30 minutos cada semana. <a href="/es/contact/?topic=channel-mix-audit">Reserva aquí</a> &mdash; sin slides, sin venta.</p>
        <p>Relacionado: nuestro <a href="/es/services/google-ads/">servicio de Google Ads &amp; Performance Max</a>, nuestro <a href="/es/services/paid-social/">servicio de paid social</a> (Meta &amp; TikTok), nuestra <a href="/es/services/analytics/">configuración de analítica y atribución</a> &mdash; y nuestro <a href="/es/industries/ecommerce/">playbook de marketing para ecommerce</a>.</p>
        <p style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6a6a6a' }}>Actualizado 26 mayo 2026 &middot; Revisión mensual &middot; Base &euro;2,1M Q1 2026</p>
      </>),
    },
  } as Record<string, LocalizedBlogDetail>,
}

export type EsTranslations = typeof es
