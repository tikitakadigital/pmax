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
        <a href="/es/agencia-seo-mallorca/">SEO</a>,{' '}
        <a href="/es/services/ai-visibility/">visibilidad en IA</a>,{' '}
        <a href="/es/services/analytics/">analítica</a>,{' '}
        <a href="/es/services/conversion-design/">diseño de conversión</a> y{' '}
        <a href="/es/services/creative/">producción creativa</a> y{' '}
        <a href="/es/services/visibility-engineering/">Visibility Engineering</a> — nueve servicios, un sistema.{' '}
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
    metaDesc: 'Google Ads, Meta, LinkedIn, SEO, visibilidad en IA, diseño de conversión, analítica y auditoría GEO — nueve servicios para un crecimiento medible y rentable.',
    eyebrow: '01 — Qué hacemos',
    title: <>Marketing de performance,<br />construido como <em>ingeniería</em>.</>,
    deck: 'Ocho servicios. Un sistema. No vendemos canales de forma aislada — gestionamos un sistema donde Google Ads, Meta, SEO, búsqueda con IA y analítica trabajan con los mismos datos y el mismo objetivo: crecimiento rentable que puedes medir.',
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
        a: 'pmax ofrece nueve servicios principales: Visibility Engineering (nuestro programa estrella de GEO, SEO, PR digital y reputación), auditoría GEO (análisis gratuito de qué dicen ChatGPT, Perplexity y Gemini sobre tu marca), visibilidad en IA (GEO), Google Ads (Search, Shopping, Performance Max, YouTube), paid social (Meta, TikTok, LinkedIn, Microsoft Ads), SEO (técnico, contenido, digital PR, local), diseño de conversión (CRO y A/B testing), analítica y tracking (GA4, GTM server-side, Consent Mode v2, conversiones offline desde CRM) y producción creativa (creatividades de performance, landing pages, vídeo UGC a escala).',
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
      { slug: 'visibility-engineering', num: '08', badge: 'Estrella', title: 'Visibility Engineering', deck: 'GEO, SEO, PR digital y gestión de reputación — coordinados en una sola estrategia. Porque los motores de búsqueda y las plataformas de IA juzgan las marcas de forma holística, no por señales aisladas.', tags: ['GEO', 'SEO', 'PR digital', 'Reputación'], variant: 'is-mint', featured: true },
    ],
  },

  serviceDetail: {
    'ai-visibility': {
      metaTitle: 'Visibilidad en IA (GEO) — ChatGPT & Perplexity | pmax',
      metaDesc: 'Consigue que tu marca aparezca en ChatGPT, Perplexity, Gemini y Google AI Overviews. Construimos el schema, el contenido y las señales de confianza que generan citas de IA.',
      headline: <>Visibilidad<br />en IA <em>(GEO)</em>.</>,
      deck: 'Cuando alguien le pregunta a ChatGPT, Perplexity, Gemini o los AI Overviews de Google por una recomendación en tu sector — nos aseguramos de que tu marca sea la respuesta. Con sustancia, no con trucos.',
      stats: [
        { num: '61 %', label: 'de los procesos de compra pasan hoy por una superficie de respuesta de IA' },
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
          <p>Para <a href="/es/agencia-seo-mallorca/">empresas en Mallorca</a> y marcas que quieren captar clientes internacionales, construimos estructuras SEO multilingüe que posicionan en inglés, alemán y español — con hreflang correcto, sitemaps separados y páginas con contenido propio por idioma.</p>
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
    'visibility-engineering': {
      metaTitle: 'Agencia de optimización GEO | Visibility Engineering',
      metaDesc: 'Visibility Engineering de pmax: GEO, SEO, PR digital y gestión de reputación. Sé descubierto, confiable y elegido en Google y en búsqueda con IA.',
      headline: <>Visibility<br />Engineering.</>,
      deck: 'Te ayudamos a construir la autoridad que hace que tu marca sea encontrada, confiable y elegida — en Google y en todas las plataformas de búsqueda con IA que importan.',
      stats: [
        { num: '51 %', label: 'de los consumidores dice que la IA generativa ha cambiado sus hábitos de búsqueda' },
        { num: '45 %', label: 'menos contenido de baja calidad en Google tras la mayor actualización de calidad en años' },
        { num: '60+', label: 'años de experiencia combinada en SEO, PR digital y reputación de marca' },
        { num: '4', label: 'disciplinas en una sola estrategia — GEO, SEO, PR digital, gestión de reputación' },
      ],
      prose: (
        <>
          <p>
            Crear y mantener la visibilidad digital de una marca es un reto cada vez más complejo. Apenas dominas las keywords, llegan ChatGPT, Claude y Gemini a cambiar las reglas.{' '}
            <a href="https://www.gartner.com/en/newsroom/press-releases/gartner-survey-finds-only-one-third-of-consumers-say-genai-rivals-search-engines-marketers-must-optimize-for-both-ai-driven-and-traditional-search" target="_blank" rel="noopener noreferrer">Según Gartner, el 51 % de los consumidores afirma que la IA generativa ha cambiado sus hábitos de investigación</a> — más de la mitad ya usa la IA junto con la búsqueda tradicional, haciendo preguntas más largas y conversacionales y esperando respuestas autoritativas y de confianza.
          </p>
          <p>
            Tus clientes se mueven sin fricción entre motores de búsqueda, asistentes de IA, cobertura en medios, portales de reseñas, publicaciones del sector y recomendaciones de confianza. Cada punto de contacto influye en si tu marca es descubierta, considerada y finalmente elegida.
          </p>
          <p>
            La búsqueda tradicional no está desapareciendo. Está evolucionando hacia el descubrimiento asistido por IA. Y ahí está la clave: tus clientes seguirán usando Google — la pregunta es si tu marca está presente cuando importa.
          </p>
          <h2>El SEO no está muerto — es la base del GEO</h2>
          <p>
            Pese a lo que se lee en LinkedIn, <a href="/es/agencia-seo-mallorca/">el SEO no está muerto</a>. Los clientes siguen usando Google, y un buen SEO es uno de los pilares fundamentales de la <a href="/es/services/ai-visibility/">Generative Engine Optimisation (GEO)</a> — no se puede hacer uno sin el otro y dominar digitalmente.
          </p>
          <p>
            Tras su mayor actualización de calidad en años, Google informa de que los usuarios ven un 45 % menos de contenido de baja calidad y sin originalidad en los resultados. El mensaje es claro: la visibilidad pertenece a las marcas que demuestran experiencia, autoridad y confianza genuinas.
          </p>
          <div className="prose-callout">
            <span className="prose-callout-kicker">El cambio en la búsqueda</span>
            <p>La pregunta ya no es: <em>«¿Para cuántas keywords posicionamos?»</em></p>
            <p>La mejor pregunta es: <strong>¿Por qué deberían elegir tu marca?</strong></p>
            <p>
              Si ChatGPT compara tu empresa con cinco competidores, si Google decide quién merece posicionar, si un periodista busca una opinión experta, si un cliente potencial investiga sus opciones — ¿tu expertise realmente destaca? ¿Tu reputación respalda tus afirmaciones? ¿Tus reseñas, cobertura mediática y presencia online refuerzan tu credibilidad?
            </p>
          </div>
          <h2>Presentamos Visibility Engineering</h2>
          <p>
            En pmax creemos que la visibilidad ya no se gana solo a través de la optimización. Se construye a través de la autoridad. Visibility Engineering reúne todo lo que influye en si tu marca es encontrada, confiable y recomendada — no solo SEO, no solo GEO, no solo PR, no solo reputación. Todo.
          </p>
          <p>
            Porque los clientes — y cada vez más los sistemas de IA — no juzgan tu web de forma aislada. Juzgan tu marca. Analizan tu web, tu cobertura mediática, tus reseñas, tu thought leadership, tus perfiles ejecutivos, tu presencia en redes sociales, las menciones de terceros y la consistencia de tu huella digital.
          </p>
          <p>Estas señales no existen en silos. Tu estrategia tampoco debería.</p>
          <h2>Nuestros servicios de Visibility Engineering</h2>
          <h3>Optimización de búsqueda y descubrimiento con IA</h3>
          <p>
            Como agencia especializada en <a href="/es/services/ai-visibility/">Generative Engine Optimisation</a>, ayudamos a las marcas a mejorar su visibilidad en plataformas de búsqueda con IA como ChatGPT, Google AI Overviews, Gemini, Claude y Perplexity.
            Lee nuestras guías sobre <a href="/es/blog/how-to-get-mentioned-by-chatgpt/">cómo conseguir que ChatGPT, Perplexity y Gemini citen tu marca</a> y <a href="/es/blog/perplexity-visibility/">cómo mejorar tu visibilidad en Perplexity específicamente</a>.
          </p>
          <ul>
            <li>Search Engine Optimisation (SEO)</li>
            <li>Generative Engine Optimisation (GEO)</li>
            <li>LLM marketing</li>
            <li>Optimización de entidades</li>
            <li>Estrategia de contenido estructurado</li>
            <li>Optimización del Knowledge Graph</li>
            <li>Análisis, tracking y reporting de citas de IA mediante <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">crunchjunkie</a></li>
            <li>Desarrollo de autoridad en búsqueda</li>
          </ul>
          <h3>Autoridad de marca y gestión de reputación online</h3>
          <p>Los sistemas de IA dependen cada vez más de fuentes de confianza. Combinamos la optimización técnica con las comunicaciones estratégicas para construir la credibilidad que influye en periodistas, clientes, analistas y modelos de IA por igual.</p>
          <ul>
            <li>PR digital</li>
            <li>Cobertura en noticias y medios</li>
            <li>Publicaciones del sector</li>
            <li>Thought leadership ejecutivo</li>
            <li>Reseñas y gestión de reputación</li>
            <li>Menciones de marca</li>
            <li>Construcción de autoridad digital</li>
          </ul>
          <h3>Búsqueda, autoridad y elección</h3>
          <p>Nuestro programa estrella de retainer integra todas las disciplinas en una estrategia coordinada — aumentando la descubribilidad, fortaleciendo la reputación y mejorando el rendimiento comercial.</p>
          <ul>
            <li>SEO</li>
            <li>GEO marketing</li>
            <li>LLM marketing</li>
            <li>PR digital</li>
            <li>Gestión de reputación de marca online</li>
            <li>Visibilidad ejecutiva</li>
            <li>Construcción de autoridad</li>
          </ul>
          <h2>¿Por qué pmax?</h2>
          <p>
            La mayoría de las agencias se especializan en una sola disciplina — SEO, PR, marketing digital o marca. No creemos que el panorama actual de búsqueda pueda resolverse en silos. Con más de 60 años de experiencia combinada en marketing de búsqueda, estrategia digital, relaciones públicas y reputación de marca, ayudamos a las organizaciones a construir una autoridad duradera — no solo rankings temporales.
          </p>
          <p>
            Porque la visibilidad ya no consiste únicamente en posicionar. Se trata de convertirse en la marca en la que Google confía, que la IA cita y que los clientes eligen.
          </p>
          <p>Eso es Visibility Engineering.</p>
        </>
      ),
      faqs: [
        { q: '¿Es pmax una agencia de Generative Engine Optimisation?', a: 'Sí — el GEO es una de las disciplinas principales que ofrecemos, dentro de nuestro enfoque más amplio de Visibility Engineering, junto con SEO, PR digital y gestión de reputación. Tratamos la visibilidad en IA como parte de una estrategia de autoridad más amplia, no como un servicio independiente.' },
        { q: '¿Cuál es la diferencia entre SEO y Generative Engine Optimisation (GEO)?', a: 'El SEO se centra en posicionar en motores de búsqueda tradicionales como Google, mientras que el GEO se centra en cómo las plataformas de IA como ChatGPT, Gemini y Perplexity descubren, citan y recomiendan marcas. No son rivales — un SEO sólido es una de las bases sobre las que se construye el GEO, ya que los modelos de IA siguen dependiendo en gran medida de contenido web bien optimizado y autoritativo.' },
        { q: '¿Sigo necesitando SEO si invierto en GEO?', a: 'Sí. Las plataformas de búsqueda con IA citan y resumen del mismo conjunto de contenido autoritativo y bien estructurado que posiciona bien en la búsqueda tradicional. Descuidar el SEO para centrarse únicamente en el GEO suele debilitar ambos.' },
        { q: '¿Cómo medís el éxito en Generative Engine Optimisation?', a: 'Usamos crunchjunkie (crunchjunkie.io) para rastrear la frecuencia de citas de IA, el share of voice entre plataformas de IA, el sentimiento en las respuestas generadas por IA y la frecuencia con la que una marca aparece cuando las herramientas de IA la comparan con competidores. crunchjunkie se especializa en tracking y reporting de visibilidad en IA, y sus análisis, datos e insights se ofrecen gratis como parte de cualquier retainer de Visibility Engineering contratado a través de pmax.' },
        { q: '¿Qué es Visibility Engineering?', a: 'Visibility Engineering es el enfoque integrado de pmax para la visibilidad en búsqueda moderna, que combina SEO, Generative Engine Optimisation (GEO), PR digital y gestión de reputación online. En lugar de tratar estos como servicios separados, los gestionamos como una estrategia coordinada, porque los motores de búsqueda y las plataformas de IA juzgan las marcas de forma holística, no por señales aisladas.' },
        { q: '¿Puede una empresa aparecer en ChatGPT o Google AI Overviews sin una base sólida de SEO?', a: 'Es poco probable que ocurra de forma consistente. Las plataformas de IA tienden a recurrir a fuentes que ya demuestran experiencia, autoridad y señales de confianza online — las mismas señales que el SEO tradicional y el PR digital están diseñados para establecer.' },
        { q: '¿Cuánto tiempo tarda el GEO en mostrar resultados?', a: 'Los plazos varían según el sector y el punto de partida, pero como el GEO se basa en las mismas señales de confianza y autoridad que el SEO y el PR digital, la mayoría de las marcas ven movimientos significativos en las citas y la visibilidad de IA en un plazo similar al de las ganancias orgánicas de SEO — en meses, no de la noche a la mañana.' },
      ],
    },
    'geo-audit': {
      metaTitle: 'Auditoría GEO — Visibilidad de tu marca en IA | pmax',
      metaDesc: 'pmax realiza auditorías GEO: te decimos qué dicen ChatGPT, Perplexity y Gemini sobre tu marca — y qué mejorar primero. Primera auditoría gratuita.',
      headline: <>Auditoría GEO.</>,
      deck: 'Descubre qué saben ChatGPT, Perplexity y Gemini sobre tu marca — y si algo de lo que dicen es correcto.',
      stats: [
        { num: '51 %', label: 'de los consumidores han cambiado sus hábitos de investigación por la IA generativa — Gartner' },
        { num: '4', label: 'plataformas de IA que auditamos: ChatGPT, Perplexity, Claude, Gemini' },
        { num: '23+', label: 'asistentes de IA y herramientas de búsqueda donde la presencia de marca importa hoy' },
        { num: '0', label: 'marcas que saben exactamente qué dice la IA sobre ellas — antes de preguntar' },
      ],
      prose: (
        <>
          <h2>Qué es una auditoría GEO</h2>
          <p>
            Una auditoría GEO es un análisis estructurado de cómo las plataformas de IA representan tu marca. No lo que tu web dice sobre ti &mdash; lo que <em>ChatGPT, Perplexity, Claude y Gemini</em> dicen sobre ti cuando alguien pregunta. No siempre es lo mismo, y la brecha entre ambos suele ser mayor de lo que las marcas esperan.
          </p>
          <p>
            A diferencia de una auditoría SEO, que comprueba si los motores de búsqueda pueden encontrar y posicionar tus páginas, una auditoría GEO comprueba si las plataformas de IA tienen una imagen precisa y coherente de quién eres, qué haces y por qué importas. Una web técnicamente perfecta puede seguir generando respuestas de IA erróneas, incompletas o inexistentes si las señales de autoridad subyacentes no están ahí.
          </p>
          <p>
            El resultado es concreto: un informe escrito con lo que dice la IA sobre ti, qué fuentes utiliza, dónde se equivoca, y una lista priorizada de mejoras. También incluimos dónde aparecen tus competidores donde tú no apareces &mdash; que suele ser el hallazgo que más impacta.
          </p>

          <h2>Qué analizamos</h2>

          <h3>Crawlabilidad de IA</h3>
          <p>
            ¿Pueden los bots de IA acceder realmente a tu contenido? Revisamos <code>robots.txt</code> para detectar bloqueos a los bots de recuperación que potencian las citas en vivo &mdash; <code>OAI-SearchBot</code>, <code>PerplexityBot</code>, <code>Claude-SearchBot</code> &mdash; y también a los crawlers de entrenamiento como <code>GPTBot</code> y <code>Google-Extended</code>. Bloquear cualquiera de estos suele ser un error, y es más habitual de lo que parece.
          </p>

          <h3>Estructura del contenido y citabilidad</h3>
          <p>
            Los modelos de IA citan lo que es citable. El copy de marca vago no llega a las respuestas de IA; el contenido específico, factual y bien estructurado, sí. Auditamos tu web en busca de párrafos de definición, datos de marca consistentes, contenido FAQ, y contenido crítico que se renderiza con JavaScript &mdash; y que por tanto es invisible para la mayoría de los crawlers de IA.
          </p>

          <h3>Cobertura de entidad</h3>
          <p>
            Revisamos el markup de schema.org (Organisation, Service, FAQPage, Person), la consistencia del NAP en directorios, y las menciones en fuentes de terceros en las que confían las plataformas de IA. La información contradictoria entre canales aumenta el riesgo de alucinaciones. Localizamos dónde ocurre.
          </p>

          <h3>Representación en IA</h3>
          <p>
            Ejecutamos un conjunto estructurado de prompts en ChatGPT, Perplexity, Claude y Gemini: consultas directas de marca, consultas de categoría, comparaciones con competidores y preguntas orientadas al problema que tus clientes hacen de verdad. Documentamos qué dice la IA, con qué precisión te describe y qué fuentes cita. Eso es tu línea base.
          </p>

          <h3>Posicionamiento competitivo</h3>
          <p>
            ¿Dónde aparecen tus competidores en las respuestas de IA donde tú no apareces? ¿Qué fuentes de terceros tienen más peso en tu sector? Mapeamos la brecha entre dónde estás y dónde deberías estar, e identificamos las acciones con mayor palanca para cerrarla.
          </p>

          <h2>crunchjunkie &mdash; la herramienta que usamos</h2>
          <p>
            Usamos <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">crunchjunkie</a> para el seguimiento de visibilidad en IA. Monitoriza la frecuencia de citas en plataformas de IA, rastrea el share of voice frente a competidores y mide el sentimiento de marca en las respuestas generadas por IA. Es lo más parecido a Search Console que existe para la búsqueda con IA &mdash; está disponible públicamente desde hace pocas semanas y lo usamos en el trabajo con clientes desde que se lanzó.
          </p>
          <p>
            En la auditoría inicial gratuita, pasamos tu dominio por crunchjunkie antes de hacer nada más. Eso nos da un snapshot de visibilidad que convierte el resto de la auditoría en algo basado en datos, no en impresiones.
          </p>
          <p>
            Para los clientes que pasan a un programa continuo, el tracking con crunchjunkie está incluido. Los informes mensuales muestran si las acciones están moviendo la aguja, qué plataformas responden primero y dónde aparecen nuevas brechas cuando los modelos de IA se actualizan.
          </p>
        </>
      ),
      faqs: [
        { q: '¿Qué incluye una auditoría GEO de pmax?', a: "Una auditoría GEO de pmax cubre cinco capas: crawlabilidad de IA (robots.txt, acceso de bots), citabilidad del contenido (contenido estructurado y citable, markup de schema), cobertura de entidad (presencia de marca consistente en directorios y fuentes de terceros), representación en IA (qué dicen ChatGPT, Perplexity, Claude y Gemini sobre ti) y posicionamiento competitivo (dónde aparecen los competidores donde tú no apareces). La auditoría inicial incluye un informe escrito y una llamada de 30 minutos para revisar los hallazgos." },
        { q: '¿Cuánto tiempo lleva una auditoría GEO?', a: 'La auditoría inicial tarda entre cinco y siete días laborables desde que tenemos acceso a tu dominio y los materiales necesarios. El informe escrito y la llamada se entregan dentro de la misma semana.' },
        { q: '¿La auditoría inicial es realmente gratuita?', a: 'Sí. Para cualquier marca que esté considerando trabajar con pmax, realizamos un snapshot inicial gratuito de visibilidad GEO usando crunchjunkie — nuestra herramienta de seguimiento de visibilidad en IA. Muestra tu tasa de cita actual en las principales plataformas de IA, qué fuentes usa la IA cuando te describe, y dónde están las mayores brechas. Sin compromiso, sin pitch de ventas.' },
        { q: '¿Qué necesitáis de nosotros para hacer la auditoría?', a: 'Tu nombre de dominio y las cinco a diez consultas que crees que hacen tus clientes antes de comprar. Todo lo demás lo buscamos nosotros.' },
        { q: '¿Qué pasa después de la auditoría?', a: 'Recibes un informe escrito con hallazgos específicos para cada capa, una lista priorizada de mejoras y una valoración honesta de cuánto tiempo llevará la mejora dado tu nivel actual de autoridad. Si quieres trabajar juntos en la remediación, lo hablamos. Si prefieres llevar los hallazgos internamente, también está bien.' },
        { q: '¿Necesito un retainer continuo o puedo hacer solo una auditoría?', a: 'Una auditoría puntual es posible. La mayoría de los clientes que encuentran problemas significativos pasan a un programa continuo — porque la auditoría diagnostica el problema y el retainer lo soluciona — pero no hay ninguna obligación asociada a la auditoría inicial gratuita.' },
        { q: '¿Es adecuada una auditoría GEO para una marca en etapa temprana?', a: "Depende. Si tienes muy poca presencia web, la auditoría lo confirmará — y la prioridad es construir esa presencia antes de preocuparte por la representación en IA. Si tienes una presencia web establecida pero no has comprobado tu visibilidad en IA, la auditoría suele ser reveladora. Te diremos con honestidad desde el principio si es el paso adecuado." },
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
      prose: (<><p>El mercado inmobiliario en Mallorca es un mercado de compradores con ciclos de decisión largos y clientes internacionales. Una pareja alemana buscando una casa de vacaciones se comporta de manera diferente a un inversor español buscando una propiedad de rentabilidad — ambos necesitan mensajes distintos, canales diferentes y seguimientos distintos en el CRM.</p><p>Construimos sistemas que se dirigen a cada tipo de comprador: campañas de Google en alemán orientadas a términos de intención de compra como «comprar finca Mallorca». Estructuras SEO que posicionan para búsquedas locales e internacionales. Secuencias de nurture basadas en CRM que mantienen el interés de los prospectos durante semanas. Y tracking que evalúa las solicitudes por calidad de lead, no solo por volumen.</p><p>Agencias inmobiliarias en Mallorca que quieran Google Ads, SEO y paid social bajo un mismo retainer encontrarán nuestro enfoque en nuestra <a href="/es/agencia-de-marketing-mallorca/">agencia de marketing en Mallorca</a>.</p></>),
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
      { slug: 'how-to-advertise-business-mallorca', title: 'Cómo anunciarse en Mallorca: la guía completa para negocios', deck: 'Mallorca tiene 900.000 habitantes y casi 10 millones de visitantes al año. Los turistas alemanes gastan una media de 1.200 € por estancia. La guía completa de publicidad digital en Mallorca — todos los canales clave, con presupuestos concretos y contexto específico de la isla.' },
      { slug: 'was-kostet-google-ads', title: 'Cuánto cuesta Google Ads en 2026: lo que pagas de verdad', deck: 'Una guía honesta y concreta sobre costes de Google Ads. CPCs medios por sector en Alemania, la ecuación de coste total, tres escenarios de presupuesto y una agencia inmobiliaria en Palma que redujo el coste por lead de 200 € a 83 €.' },
      { slug: 'conversion-rate-optimisation-checklist', title: 'Checklist de CRO 2026: 15 puntos que realmente mueven el resultado', deck: 'Una checklist CRO de 15 puntos para empresas y marketers. Benchmarks por sector, quick wins, mejoras estructurales — y un caso real: de 28 a 71 leads cualificados al mes sin tocar el presupuesto publicitario.' },
      { slug: 'what-is-generative-engine-optimisation', title: '¿Qué es la Generative Engine Optimisation (GEO)?', deck: 'GEO no es SEO con nuevo nombre. Es una disciplina distinta para un nuevo paradigma de búsqueda — y la investigación lo respalda: las intervenciones adecuadas mejoran tu tasa de citación hasta un 40 %. La guía definitiva con un framework de ocho pasos.' },
      { slug: 'performance-marketing-agency-vs-in-house', title: 'Agencia de performance marketing o equipo interno: nuestra valoración honesta', deck: 'La mayoría de agencias se recomiendan a sí mismas. Nosotros no siempre. Un análisis honesto del coste real, el punto de equilibrio y cuándo montar un equipo propio es la decisión correcta.' },
      { slug: 'linkedin-ads-b2b-spain', title: 'LinkedIn Ads para B2B en España: benchmarks de CPL, targeting y lo que funciona de verdad', deck: 'Benchmarks de CPL realistas por sector, la checklist de targeting de LinkedIn y una firma de abogados en Palma que redujo el coste por lead de 184 € a 67 € en 16 semanas.' },
      { slug: 'google-shopping-kampagne-leitfaden', title: 'Google Shopping 2026: guía de configuración paso a paso', deck: 'Standard Shopping vs. Performance Max, requisitos del feed de Merchant Center y benchmarks de ROAS por categoría — una guía práctica de configuración.' },
      { slug: 'tiktok-ads-mallorca-tourism', title: 'TikTok Ads para hostelería y turismo en Mallorca: lo que realmente funciona', deck: 'Benchmarks de CPM, formatos creativos y el análisis de audiencia que convierte el contenido turístico de Mallorca en reservas reales de charter y hotel en TikTok.' },
      { slug: 'ki-sichtbarkeit-ai-visibility', title: 'Visibilidad en IA: cómo los motores de IA citan tu marca', deck: 'La mayoría de marcas no saben qué dice ChatGPT sobre ellas &mdash; ni por qué. La guía basada en datos sobre visibilidad en IA: cómo funcionan las citas, qué palancas mueven la aguja y qué dicen nuestros propios datos sobre 10 motores.' },
      { slug: 'meta-ads-agency-vs-in-house', title: '¿Agencia de Meta Ads o in-house? Una comparación honesta.', deck: 'Retainer de agencia, contratación interna o freelancer &mdash; costes reales, benchmarks de ROAS y cuándo cada opción es la correcta.' },
      { slug: 'free-website-design', title: 'Rediseñamos tu web gratis. Esto es lo que recibimos a cambio.', deck: 'Diseñamos y construimos webs sin coste inicial. A cambio, gestionamos tu publicidad de pago. El trato completo: cómo funciona, a quién va dirigido y qué implica una reconstrucción real.' },
      { slug: 'ai-visibility-tracking-tools-2026', title: 'Herramientas de visibilidad en IA en 2026: qué revisar antes de suscribirte', deck: 'Cómo la mayoría de herramientas de visibilidad en IA limitan silenciosamente lo que puedes rastrear — y qué preguntar antes de pagar. Guía de compra con precios verificados.' },
      { slug: 'google-ads-ai-disclosure-label', title: 'El aviso de IA de Google está en tus anuncios. Probablemente no lo has decidido tú.', deck: 'Desde julio de 2026, las SERPs europeas muestran: "Divulgación de IA: anuncio creado o editado con IA". La mayoría de los anunciantes que lo llevan no lo eligieron — lo activó Performance Max.' },
      { slug: 'pinterest-ads-home-interiors-local-2026', title: 'Pinterest Ads 2026: para quién funcionan de verdad', deck: 'Para qué negocios funciona Pinterest Ads, cómo funciona el retargeting de verdad y por qué una tienda local de estores está más cerca de su punto óptimo que la mayoría del ecommerce.' },
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
'how-to-advertise-business-mallorca': {
      toc: [
        'El mercado de Mallorca: qué lo hace diferente',
        'Google Ads en Mallorca',
        'Meta Ads para negocios en Mallorca',
        'TikTok Ads para turismo y hostelería',
        'LinkedIn Ads para B2B y servicios profesionales',
        'Cómo construir una estrategia multicanal',
      ],
      faqs: [
        {
          q: '¿Cuál es la mejor forma de anunciarse en Mallorca?',
          a: 'No existe un único canal óptimo — la respuesta correcta depende de tu tipo de negocio, el perfil de tu cliente y la época del año. Para búsquedas con alta intención de compra (inmobiliaria, servicios profesionales), Google Ads rinde mejor. Para turismo y hostelería en fase de descubrimiento, Meta y TikTok durante la ventana pre-viaje (febrero-junio) ofrecen los mejores resultados. Para servicios B2B dirigidos a la comunidad profesional expatriada, LinkedIn es el único canal con la precisión de targeting necesaria. La mayoría de negocios con éxito en Mallorca utilizan al menos dos canales con funciones complementarias.',
        },
        {
          q: '¿Cuánto debería gastar un negocio de Mallorca en publicidad digital?',
          a: 'Presupuestos mínimos viables en el mercado de Mallorca: Google Ads 800 €/mes, Meta Ads 500 €/mes (estacional), TikTok Ads 400 €/mes (estacional, marzo-octubre), LinkedIn Ads 1.000 €/mes. Por debajo de estos umbrales no se genera suficiente dato para optimizar de forma significativa. La mayoría de nuestros clientes consolidados con negocios estacionales gastan entre 1.500 y 4.000 €/mes en temporada alta y reducen de forma importante —o pausan completamente— en invierno.',
        },
        {
          q: '¿Funcionan los Google Ads en Mallorca?',
          a: 'Sí, para las categorías adecuadas. Google Ads funciona muy bien para inmobiliaria, servicios jurídicos, medicina privada, asesorías y cualquier negocio en el que los clientes buscan con una intención de compra concreta. Rinde menos para negocios orientados al descubrimiento — nadie busca "buen restaurante en Mallorca" antes de llegar a la isla; los encuentran en Instagram o Google Maps el mismo día. El geo-targeting debe configurarse con precisión: un targeting amplio de España malgasta presupuesto en clics de la Península sin ninguna intención relacionada con Mallorca.',
        },
        {
          q: '¿Cuál es la mejor plataforma para llegar a turistas alemanes en Mallorca?',
          a: 'A los turistas alemanes se les alcanza mejor en origen — en Alemania, Austria o Suiza, antes de que reserven. Meta (Instagram y Facebook) con creatividades en alemán orientadas por intereses de viaje y señal geográfica es el canal de awareness más rentable. Google Search en alemán para búsquedas específicas de Mallorca ("Finca Mallorca mieten", "Hotel Mallorca buchen") captura búsquedas de alta intención en la fase de consideración. Las campañas en alemán requieren copy, creatividades y landing pages en alemán — aquí es donde la mayoría de anunciantes de Mallorca se quedan cortos.',
        },
        {
          q: '¿Es efectiva la publicidad en redes sociales para negocios estacionales en Mallorca?',
          a: 'Sí, pero el timing es la variable crítica. La publicidad en redes sociales para negocios estacionales en Mallorca funciona mejor como acción de awareness pre-temporada — corriendo de febrero a mayo para alcanzar a los turistas en su fase de consideración, antes de que confirmen sus reservas. Empezar anuncios en junio significa competir por atención contra marcas que ya han construido awareness a CPMs más bajos. Los negocios que más aprovechan Meta y TikTok en Mallorca planifican su calendario creativo en enero y arrancan en febrero.',
        },
      ],
      prose: (
        <>
          <p>Mallorca no es un mercado local normal. La población permanente es de aproximadamente 900.000 habitantes &mdash; pequeña para los estándares europeos. Pero sobre esa base se asienta una economía turística que representa en torno al 70 % del PIB de las Islas Baleares. Cerca de 10 millones de visitantes llegan cada año.</p>
          <p>Turistas alemanes: 3,7 millones al año, el 37 % del total de visitantes, con un gasto medio de &euro;1.200 por viaje según las estadísticas de turismo de las Islas Baleares. Turistas británicos: 1,6 millones al año, el 16 % del total. Estos dos grupos &mdash; más la población residente permanente de la isla &mdash; no tienen casi nada en común en términos de comportamiento de compra, idioma o uso de plataformas. Tu estrategia publicitaria debe abordarlos por separado.</p>
          <p>Esta guía cubre todos los canales de pago principales disponibles para negocios en Mallorca, con presupuestos específicos y contexto propio de la isla que las guías genéricas de agencias suelen omitir. Somos una <a href="/marketing-agency-mallorca">agencia de marketing con sede en Calvià</a>. Este es el mercado en el que trabajamos cada día.</p>

          <h2 id="mallorca-market">El mercado de Mallorca: qué lo hace diferente</h2>
          <p>Tres hechos definen el panorama publicitario en Mallorca.</p>
          <p><strong>Dos mercados, una isla.</strong> La población permanente ronda los 900.000 habitantes. La economía turística &mdash; aproximadamente el 70 % del PIB balear &mdash; trae cerca de 10 millones de visitantes al año. Los turistas alemanes son el grupo más numeroso: 3,7 millones al año, con un gasto medio de &euro;1.200 por viaje. Turistas británicos: 1,6 millones al año. Estos grupos tienen comportamientos de descubrimiento, preferencias de idioma y plazos de reserva fundamentalmente distintos. Una única estrategia rara vez sirve a ambos.</p>
          <p><strong>La temporada comprime la ventana.</strong> El turismo transcurre de abril a octubre. Julio y agosto son temporada alta. Un negocio orientado al turismo que empieza a anunciarse en junio ya ha perdido la ventana de consideración pre-viaje &mdash; los turistas alemanes y británicos investigan y reservan con 4&ndash;12 semanas de antelación. Las campañas que mejor rinden en nuestra cartera arrancan en febrero.</p>
          <p><strong>El alemán es una ventaja competitiva desaprovechada.</strong> El 37 % de los visitantes anuales de Mallorca son alemanes. La mayoría busca, navega y reserva en alemán. Sin embargo, la mayor parte de la publicidad digital en Mallorca está en español o inglés. Las campañas bien estructuradas en alemán &mdash; dirigidas a turistas alemanes en origen, antes de que reserven, en su propio idioma &mdash; son la oportunidad más infraexplotada de este mercado. La mayoría de agencias de habla inglesa no operan en alemán. La mayoría de agencias españolas tampoco.</p>

          <h2 id="google-ads-mallorca">Google Ads en Mallorca</h2>
          <p>Google Ads es el canal adecuado para las búsquedas de alta intención en Mallorca: inmobiliaria, servicios jurídicos, asesorías, medicina privada, servicios profesionales de cualquier tipo. Quien busca con intención concreta y dispuesto a actuar aparece primero en Google Search.</p>
          <p><strong>El geo-targeting requiere precisión.</strong> Targetear &ldquo;España&rdquo; de forma amplia atrae tráfico de Madrid y Barcelona sin ninguna intención de visitar tu negocio en Mallorca. Construimos campañas con geo-targeting específico de la isla más cobertura extendida para turistas que buscan desde Alemania y el Reino Unido antes de salir &mdash; dos configuraciones muy distintas que la mayoría de setups de un solo mercado pasan por alto.</p>
          <p><strong>El volumen de búsqueda en alemán está desatendido.</strong> &ldquo;Finca mieten Mallorca&rdquo;, &ldquo;Immobilien Mallorca kaufen&rdquo;, &ldquo;Zahnarzt Mallorca&rdquo; &mdash; las consultas en alemán para servicios específicos de Mallorca generan volumen real y afrontan mucha menos competencia que sus equivalentes en inglés. Anuncios en alemán apuntando a landing pages en alemán, servidos a usuarios en Alemania antes de su viaje, convierten a tasas que la mayoría de anunciantes de Mallorca no están capturando.</p>
          <p><strong>Estrategia de presupuesto: anual vs estacional.</strong> Los negocios de servicios profesionales e inmobiliaria anuncian todo el año con una estacionalidad relativamente plana. Los negocios dependientes del turismo concentran la inversión en el primer trimestre para captar la investigación pre-viaje y la mantienen durante el pico de temporada.</p>
          <p>Presupuesto mínimo viable: &euro;800/mes. Por debajo, el volumen de datos es demasiado escaso para optimizar de forma significativa. Lee nuestra guía completa: <a href="/blog/google-ads-mallorca/">Google Ads en Mallorca</a>. Nuestra página de <a href="/services/google-ads">servicio de Google Ads</a> explica cómo estructuramos las campañas. Para referencias de costes en alemán, ver nuestra guía sobre <a href="/blog/was-kostet-google-ads/">was kostet Google Ads</a>.</p>

          <h2 id="meta-ads-mallorca">Meta Ads para negocios en Mallorca</h2>
          <p>Meta es el canal de descubrimiento dominante para hostelería, turismo y negocios B2C en Mallorca. Es donde la gente encuentra restaurantes, experiencias y alojamiento vacacional antes de que cristalice la intención de compra.</p>
          <p><strong>La ventana pre-viaje del turista.</strong> Los usuarios alemanes de Instagram que van a viajar a Mallorca están activos en la plataforma 4&ndash;8 semanas antes de salir. Las Instagram Stories y Reels dirigidos a audiencias de habla alemana por interés de viaje y señal geográfica superan de forma consistente al targeting en ruta para nuestros clientes de hostelería. Un usuario en Múnich investigando beach clubs en Mallorca vale mucho más que uno que ya ha reservado y llegado.</p>
          <p><strong>El timing estacional lo es todo.</strong> Las campañas de Meta orientadas al turista deben arrancar en febrero-marzo, alcanzar el pico en mayo-junio para las reservas pre-viaje, y continuar hasta octubre. Los presupuestos planos durante todo el año en negocios estacionales malgastan dinero en invierno y pierden la ventana de consideración pre-viaje.</p>
          <p><strong>Campañas locales todo el año.</strong> Los negocios que atienden a residentes permanentes &mdash; dentistas, gimnasios, despachos jurídicos &mdash; siguen estrategias fundamentalmente distintas: targeting de radio local, presupuesto constante durante todo el año, sin rampa estacional.</p>
          <p>Presupuesto mínimo viable: &euro;500/mes en temporada. Para enfoques específicos de hostelería, ver nuestra <a href="/industries/hospitality">página de sector hostelero</a>. Para la cuestión agencia vs interno, lee nuestra guía: <a href="/blog/meta-ads-agency-vs-in-house/">Meta Ads: agencia vs in-house</a>. La página de <a href="/services/paid-social">servicio de paid social</a> explica cómo gestionamos campañas de Meta de principio a fin.</p>

          <h2 id="tiktok-ads-mallorca">TikTok Ads para turismo y hostelería</h2>
          <p>TikTok se ha convertido en un canal de pago serio para negocios de turismo y experiencias en Mallorca. El contenido orgánico que más vistas genera en la isla &mdash; excursiones en catamarán, beach clubs, restaurantes en la sierra, senderismo al amanecer &mdash; encaja directamente con los formatos de anuncio de TikTok que rinden.</p>
          <p>TikTok funciona para negocios de Mallorca cuando tienes un producto visualmente atractivo, una base de clientes de entre 18 y 34 años y capacidad para producir vídeo corto de forma constante. No funciona bien para servicios B2B, servicios profesionales con ciclos de venta largos, ni para inmobiliaria de alto ticket &mdash; distinto formato de contenido, distinta audiencia, distinta plataforma.</p>
          <p><strong>El creativo con conciencia de temporada es la mecánica de mayor rendimiento.</strong> &ldquo;Reserva ahora &mdash; quedan 3 plazas en julio.&rdquo; Los creativos basados en disponibilidad con sensación real de urgencia son algo que los anuncios de imagen estática no pueden replicar. Y es especialmente adecuado para el mercado estacional de Mallorca, donde la escasez es real y la urgencia temporal es alta.</p>
          <p>Presupuesto mínimo viable: &euro;400/mes, de marzo a octubre. Lee nuestra guía dedicada: <a href="/blog/tiktok-ads-mallorca-tourism/">TikTok Ads para turismo en Mallorca</a>.</p>

          <h2 id="linkedin-ads-mallorca">LinkedIn Ads para B2B y servicios profesionales</h2>
          <p>Los LinkedIn Ads son caros en todas partes, incluida Mallorca. Los CPCs típicos se mueven entre &euro;4 y &euro;8. Pero para casos de uso específicos son el único canal que alcanza a la audiencia correcta con la precisión de targeting necesaria.</p>
          <p>Casos de uso específicos de Mallorca donde la economía funciona:</p>
          <ul>
            <li><strong>Servicios B2B para la comunidad profesional expatriada</strong> &mdash; asesores fiscales, abogados, consultores corporativos que sirven a empresarios de origen alemán y británico residentes en la isla</li>
            <li><strong>Inmobiliaria dirigida a compradores DACH de alto poder adquisitivo</strong> &mdash; targeting por función y nivel de seniority de profesionales de alto cargo en Alemania, Austria y Suiza que son compradores activos en el mercado de lujo inmobiliario de Mallorca</li>
            <li><strong>Servicios profesionales para empresas con operaciones en Mallorca</strong> &mdash; servicios náuticos, logística, viajes corporativos, servicios lingüísticos</li>
          </ul>
          <p>El mercado B2B de Mallorca es pequeño en LinkedIn. Planifica para frecuencia antes que para alcance &mdash; la exposición repetida a una audiencia definida de 5.000&ndash;15.000 personas rinde mejor que extenderse en una lista más amplia con menor frecuencia.</p>
          <p>Presupuesto mínimo viable: &euro;1.000/mes. Lee nuestra <a href="/blog/linkedin-ads-b2b-spain/">guía de LinkedIn Ads B2B para España</a> y nuestra <a href="/industries/real-estate">página de sector inmobiliario</a>.</p>

          <h2 id="multi-channel">Cómo construir una estrategia multicanal</h2>
          <p>Ningún canal por sí solo cubre todo el recorrido del cliente en Mallorca. Los negocios que crecen más rápido combinan canales de forma deliberada &mdash; cada uno asignado a la fase y audiencia correctas.</p>
          <p>Un framework simplificado para la mayoría de negocios de turismo u hostelería en Mallorca:</p>
          <ul>
            <li><strong>Awareness (febrero-abril):</strong> Meta y TikTok dirigidos a audiencias alemanas y británicas por interés y señal geográfica &mdash; alcanza a los turistas en la fase de consideración pre-viaje</li>
            <li><strong>Consideración (marzo-junio):</strong> Google Search para consultas con intención; retargeting de Meta a visitantes de la web y visualizadores de vídeo</li>
            <li><strong>Conversión (mayo-agosto):</strong> Google Performance Max con datos reales de reserva alimentados como conversiones offline; inversión mínima en awareness, máximo foco en conversión</li>
            <li><strong>Retención (octubre-noviembre):</strong> Email a huéspedes anteriores; Meta Custom Audiences para reservas directas repetidas, evitando la comisión de las OTAs</li>
          </ul>
          <p>Comparativa de plataformas por tipo de negocio:</p>
          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Plataforma</th>
                  <th style={{ textAlign: 'left', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Ideal para</th>
                  <th style={{ textAlign: 'left', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Temporada</th>
                  <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Presupuesto mín.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { platform: 'Google Ads', best: 'Inmobiliaria, servicios profesionales', season: 'Todo el año', budget: '€800/mes' },
                  { platform: 'Meta Ads', best: 'Hostelería, restaurantes, B2C', season: 'Abr–Oct pico', budget: '€500/mes' },
                  { platform: 'TikTok Ads', best: 'Turismo, excursiones, experiencias', season: 'Mar–Oct', budget: '€400/mes' },
                  { platform: 'LinkedIn Ads', best: 'B2B, servicios profesionales, expats', season: 'Todo el año', budget: '€1.000/mes' },
                  { platform: 'Pinterest Ads', best: 'Decoración, bodas, lifestyle', season: 'Todo el año', budget: '€300/mes' },
                ].map(row => (
                  <tr key={row.platform} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8', fontWeight: 500 }}>{row.platform}</td>
                    <td style={{ padding: '10px 16px', color: '#949494', fontSize: 12 }}>{row.best}</td>
                    <td style={{ padding: '10px 16px', color: '#949494', fontSize: 12, whiteSpace: 'nowrap' }}>{row.season}</td>
                    <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Este es un punto de partida, no una prescripción. Un hotel boutique de 12 habitaciones sigue una estrategia muy diferente a la de un grupo de restaurantes con tres locales. El mix de canales que tiene sentido para una agencia inmobiliaria no se parece en nada al que funciona para una empresa de alquiler de barcos.</p>
          <p>Nuestro <a href="/services/paid-social">servicio de paid social</a> cubre Meta, TikTok, Pinterest y LinkedIn. Nuestro <a href="/services/google-ads">servicio de Google Ads</a> cubre Search, Shopping y Performance Max. Para SEO orgánico y SEO local, ver nuestra página de <a href="/seo-company-mallorca">empresa de SEO en Mallorca</a>. Para contexto específico de hostelería, nuestro caso de estudio sobre <a href="/blog/hotel-direct-bookings/">reservas directas de hotel</a> explica cómo Mar y Roca redujo su dependencia de las OTAs en 11 semanas. Y nuestro servicio de <a href="/services/ai-visibility">visibilidad en IA</a> es cada vez más relevante para negocios de Mallorca que quieren aparecer en las recomendaciones locales y de viajes generadas por IA.</p>
          <p>¿Esto encaja con tu negocio? <a href="/es/contact/?topic=how-to-advertise-business-mallorca">Cuéntanos brevemente tu situación</a> &mdash; te respondemos en menos de un día hábil. La primera conversación: 30 minutos, sin coste.</p>
        </>
      ),
    },
'was-kostet-google-ads': {
      title: 'Cuánto cuesta Google Ads en 2026: lo que pagas de verdad',
      deck: 'Una guía honesta y concreta sobre costes de Google Ads. CPCs medios por sector en Alemania, la ecuación de coste total, tres escenarios de presupuesto &mdash; y una agencia inmobiliaria en Palma que redujo el coste por lead de 200 € a 83 €.',
      toc: [
        'Cómo funciona el precio de Google Ads de verdad',
        'CPCs medios por sector en Alemania',
        'La ecuación de coste total',
        'Escenarios de presupuesto: qué consigues de verdad con 500 €, 2.000 € y 5.000 €',
        'Un caso inmobiliario en Palma',
        'Los clics baratos no son clics rentables',
      ],
      faqs: [
        {
          q: '¿Cuánto cuesta Google Ads al mes en Alemania?',
          a: 'No hay un coste mensual fijo: Google Ads funciona mediante subasta. Tu gasto mensual es CPC &times; clics, determinado por tu límite de presupuesto, la competencia por las palabras clave y el Quality Score. Un negocio local pequeño puede empezar con 500 €/mes en inversión publicitaria y generar leads relevantes. Una cuenta de e-commerce competitiva puede necesitar 5.000 €+/mes para alcanzar un volumen estadísticamente útil. La mayoría de pymes con las que trabajamos operan entre 1.500 y 8.000 €/mes en inversión, más una tarifa de gestión si utilizan una agencia.',
        },
        {
          q: '¿Cuál es el CPC medio de Google Ads en España?',
          a: 'Los CPCs en España son generalmente un 15&ndash;25 % inferiores a los alemanes en categorías equivalentes, debido a menor competencia entre anunciantes. En la práctica, una agencia inmobiliaria en Palma puede pagar entre 1,80 y 2,20 €/clic en términos de búsqueda de propiedades, frente a 2,40&ndash;3,00 € en una campaña similar en Múnich. Son rangos indicativos; tu CPC real depende del Quality Score, la especificidad de las palabras clave y la dinámica de subasta.',
        },
        {
          q: '¿Cuál es el presupuesto mínimo con el que merece la pena empezar en Google Ads?',
          a: '500 €/mes en inversión puede funcionar para un negocio de servicios local con targeting estrecho, una conversión de alto margen y una landing page bien optimizada. Por debajo de 500 €/mes rara vez se generan datos suficientes para que el algoritmo optimice de forma significativa, y los límites de gasto a nivel de campaña impiden hacer pruebas sistemáticas. En general recomendamos 1.000 €/mes como mínimo realista para una campaña que pueda aprender y mejorar.',
        },
        {
          q: '¿Cuánto cuesta la gestión de Google Ads?',
          a: 'Los honorarios de gestión de agencia varían mucho. El estándar del sector es o bien un porcentaje de la inversión publicitaria (habitualmente el 10&ndash;15 %) o una tarifa mensual fija. Los modelos de porcentaje crean un incentivo para aumentar tu presupuesto en lugar de mejorar la eficiencia &mdash; pmax cobra tarifas mensuales fijas para evitarlo. Las tarifas fijas para cuentas de pymes suelen rondar los 500&ndash;2.000 €/mes según la complejidad de la cuenta y el número de campañas y canales gestionados.',
        },
        {
          q: '¿Es Google Ads más barato que Meta Ads?',
          a: 'Depende de lo que entiendas por más barato. Meta Ads suele tener CPCs más bajos &mdash; a menudo 0,30&ndash;0,80 € en audiencias amplias &mdash; pero menor intención de conversión. Google Search Ads captura personas que buscan activamente lo que vendes; Meta Ads interrumpe a las personas mientras hacen scroll. En campañas de respuesta directa donde la intención de compra impulsa el rendimiento, Google Search suele generar un coste por lead más bajo pese al CPC más alto, porque la calidad del tráfico es mayor. Para awareness y retargeting, Meta suele ser más eficiente en coste.',
        },
      ],
      prose: (
        <>
          <p>La pregunta más habitual de los negocios que consideran Google Ads por primera vez es alguna versión de: &ldquo;¿cuánto cuesta?&rdquo; La respuesta honesta es: depende, y es más complicado de lo que la mayoría de guías reconoce.</p>
          <p>No hay una tarifa fija. Google Ads funciona con una subasta. Pagas cuando alguien hace clic en tu anuncio, a un precio determinado en tiempo real por la competencia, la relevancia y la calidad de tu propia cuenta. Esta guía explica cómo funciona esto de verdad, cómo son los costes medios por sector en Alemania y qué entregan de forma realista tres presupuestos mensuales distintos en 2026.</p>

          <h2 id="how-pricing-works">Cómo funciona el precio de Google Ads de verdad</h2>
          <p>Google Ads no es una compra de espacio publicitario. Cada vez que alguien realiza una búsqueda, se activa una subasta automatizada. Todos los anunciantes que pujan por palabras clave relevantes entran en la subasta. Google los evalúa a todos y decide quién aparece, en qué posición y a qué precio.</p>
          <p>El ganador no es quien más puja. Google utiliza el Ad Rank &mdash; una métrica compuesta por tu puja, tu Quality Score y varios otros factores, como el uso de extensiones de anuncio y el porcentaje de clics esperado. El Quality Score es una valoración del 1 al 10 de la relevancia de tu anuncio y tu landing page para la búsqueda. Un Quality Score de 8 significa que pagas menos por clic que un competidor con puntuación 4, aunque pujéis lo mismo. No es un detalle técnico. Afecta de forma material a lo que pagas.</p>
          <p>En cuanto a la facturación: la mayoría de campañas de Search para pymes funcionan en coste por clic (CPC). Estableces una puja máxima de CPC &mdash; el límite de lo que estás dispuesto a pagar por clic &mdash; y la subasta determina el importe real, que suele ser inferior. Las campañas de Display y YouTube también pueden funcionar en CPM (coste por mil impresiones), aunque para la mayoría de anunciantes nuevos en Google Ads, el CPC en Search es el mecanismo principal que hay que entender.</p>
          <p>Las estrategias de Smart Bidding &mdash; CPA objetivo, ROAS objetivo, Maximizar conversiones &mdash; automatizan la puja dentro de la subasta. Requieren datos de conversión para funcionar: una campaña necesita aproximadamente 30&ndash;50 conversiones en 30 días antes de que Smart Bidding pueda optimizar eficazmente. Por debajo de ese umbral, la puja manual o el CPC mejorado son más fiables.</p>

          <h2 id="cpc-by-industry">CPCs medios por sector en Alemania</h2>
          <p>Los CPCs medios varían significativamente por sector, porque la competencia varía. En un sector donde un solo cliente convertido vale decenas de miles de euros, los anunciantes pujan de forma agresiva. En sectores con alto volumen y márgenes estrechos, pujan de forma conservadora.</p>
          <p>Estos son los CPCs medios en ocho sectores en Alemania, basados en los benchmarks de WordStream 2024 de Google Ads:</p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <svg viewBox="0 0 560 280" style={{ width: '100%', maxWidth: 560, display: 'block' }} aria-label="Average Google Ads CPC by industry in Germany">
              {([['€4', 50], ['€3', 95], ['€2', 140], ['€1', 185]] as [string, number][]).map(([label, y]) => (
                <g key={label}>
                  <line x1={65} y1={y} x2={498} y2={y} stroke="#1e1e28" strokeWidth={1} />
                  <text x={58} y={y + 4} fontSize={9} fill="#6b6b6b" textAnchor="end" fontFamily="var(--font-mono)">{label}</text>
                </g>
              ))}
              {([
                ['Legal', 3.80, 65],
                ['Finance', 3.40, 121],
                ['B2B SaaS', 2.90, 177],
                ['Real estate', 2.60, 233],
                ['Healthcare', 2.10, 289],
                ['Home svcs', 1.70, 345],
                ['Hospitality', 1.30, 401],
                ['E-commerce', 0.90, 457],
              ] as [string, number, number][]).map(([industry, cpc, bx]) => {
                const h = Math.round(180 * cpc / 4)
                const by = 230 - h
                return (
                  <g key={industry}>
                    <rect x={bx} y={by} width={38} height={h} fill="#3cffd0" rx={2} />
                    <text x={bx + 19} y={by - 6} fontSize={10} fill="#3cffd0" textAnchor="middle" fontFamily="var(--font-mono)">&euro;{cpc.toFixed(2)}</text>
                    <text
                      x={bx + 19}
                      y={248}
                      fontSize={9}
                      fill="#6b6b6b"
                      textAnchor="end"
                      fontFamily="var(--font-mono)"
                      transform={`rotate(-42 ${bx + 19} 248)`}
                    >{industry}</text>
                  </g>
                )
              })}
              <line x1={65} y1={230} x2={498} y2={230} stroke="#2d2d2d" strokeWidth={1} />
            </svg>
            <p style={{ fontSize: 11, color: '#6b6b6b', fontFamily: 'var(--font-mono)', marginTop: 8 }}>Fuente: WordStream 2024 Google Ads benchmarks &middot; mercado alemán &middot; medias orientativas</p>
          </div>

          <p>Los servicios jurídicos y financieros tienen los CPCs más altos porque un solo cliente convertido vale miles de euros en honorarios. El e-commerce está en el extremo inferior &mdash; CPCs más bajos, pero también ticket medio más bajo, lo que hace que los números de las tasas de conversión sean proporcionalmente más ajustados. La hostelería está en el rango inferior, pero la estacionalidad genera picos de CPC significativos en los periodos punta de reservas que las medias anuales no recogen.</p>
          <p>Son benchmarks, no garantías. Tu CPC real depende del Quality Score, la selección concreta de palabras clave, el targeting geográfico y cuántos competidores están pujando activamente en tu subasta. Los CPCs reales pueden situarse un 30&ndash;40 % por encima o por debajo de estas cifras.</p>

          <h2 id="total-cost-equation">La ecuación de coste total</h2>
          <p>El CPC solo no te dice lo que cuesta Google Ads. La ecuación completa tiene más variables.</p>
          <p><strong>Inversión publicitaria</strong> = CPC &times; clics. Con un CPC medio de 2,10 € y 500 clics en un mes, tu inversión es de 1.050 €.</p>
          <p><strong>Los clics no son conversiones.</strong> Si tu landing page convierte al 4 % &mdash; 1 de cada 25 visitantes rellena un formulario, llama o compra &mdash; esos 500 clics producen 20 leads. Tu coste por lead es de 52,50 €.</p>
          <p><strong>El Quality Score afecta a cada paso.</strong> Un Quality Score bajo infla tu CPC, lo que infla tu coste por lead aunque la tasa de conversión se mantenga constante. Mejorar el Quality Score de 4/10 a 7/10 en una palabra clave competitiva puede reducir el CPC un 30&ndash;40 % &mdash; lo que significa un 30&ndash;40 % más de clics con el mismo presupuesto y, proporcionalmente, más leads.</p>
          <p><strong>Honorarios de gestión.</strong> Si gestionas Google Ads a través de una agencia, espera un honorario de gestión además de la inversión publicitaria. La mayoría de agencias cobran o bien un porcentaje de la inversión (10&ndash;15 %) o una tarifa mensual fija. Los modelos de porcentaje crean un incentivo para hacer crecer tu presupuesto en lugar de mejorar la eficiencia. pmax cobra tarifas mensuales fijas &mdash; nuestra <a href="/services/google-ads/">página de servicio de Google Ads</a> explica el razonamiento.</p>
          <p><strong>Coste total de Google Ads</strong> = inversión publicitaria + honorario de gestión. Un negocio que invierte 2.000 €/mes en publicidad y 700 €/mes en honorarios de gestión gasta 2.700 €/mes en total. Ese es el número que importa al calcular el retorno.</p>

          <h2 id="budget-scenarios">Escenarios de presupuesto: qué consigues de verdad con 500 €, 2.000 € y 5.000 €</h2>
          <p><strong>500 €/mes de inversión publicitaria.</strong> Con un CPC medio de 2,00 €, esto compra aproximadamente 250 clics al mes. Con un CVR de landing page del 4 %: 10 leads. Coste por lead: 50 €. Esto funciona para un negocio de servicios local con una conversión de alto margen, un targeting geográfico estrecho y una landing page bien optimizada. No funciona para categorías de e-commerce competitivas ni para ningún negocio que intente cubrir varias ciudades simultáneamente. Con 500 €/mes, el targeting y la landing page deben ser muy precisos. Las campañas limitadas por presupuesto a este nivel rara vez generan suficientes datos de conversión para Smart Bidding &mdash; el CPC manual o el CPC mejorado son la opción más fiable.</p>
          <p><strong>2.000 €/mes de inversión publicitaria.</strong> Con un CPC de 2,00 €: aproximadamente 1.000 clics al mes. Con un CVR del 4 %: 40 leads. Coste por lead: 50 €. La diferencia respecto a los 500 €/mes no es solo el volumen. Con 2.000 €/mes tienes datos suficientes para hacer tests A/B de copy de anuncio con significado, para identificar qué temas de palabras clave convierten y para construir audiencias de remarketing con un tamaño relevante. El algoritmo tiene señal suficiente para empezar a optimizar las pujas automáticamente. Las campañas limitadas por presupuesto empiezan a convertirse en campañas limitadas por puja, lo que significa que tus objetivos &mdash; y no tu límite diario &mdash; se convierten en la variable restrictiva. Smart Bidding se vuelve viable.</p>
          <p><strong>5.000 €/mes de inversión publicitaria.</strong> A este nivel, la mayoría de campañas dejan de estar limitadas por presupuesto. Tienes volumen suficiente para correr Performance Max junto a Search, para probar varias variantes de landing page simultáneamente y para construir remarketing segmentado en todo el inventario de Google. Con 5.000 €/mes, la estructura de campaña y la estrategia de puja importan más que el presupuesto &mdash; porque el presupuesto rara vez es el cuello de botella. Puedes añadir capas de señales de audiencia, lanzar campañas de competencia y usar el testing de asset groups en Performance Max con resultados estadísticamente útiles.</p>

          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Escenario</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Clics al mes</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Leads (4 % CVR)</th>
                  <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Coste / lead</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: '500 € / mes', clicks: '~250', leads: '~10', cpl: '€50' },
                  { label: '2.000 € / mes', clicks: '~1.000', leads: '~40', cpl: '€50' },
                  { label: '5.000 € / mes', clicks: '~2.500', leads: '~100', cpl: '€50' },
                ].map(row => (
                  <tr key={row.label} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.label}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.clicks}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.leads}</td>
                    <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.cpl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: '#6b6b6b', marginTop: -16, marginBottom: 24 }}>Solo orientativo. Basado en un CPC medio de 2,00 € y un CVR de landing page del 4 %. Las cifras reales dependen del sector, la competencia por palabras clave y la calidad de la cuenta.</p>

          <h2 id="palma-real-estate">Un caso inmobiliario en Palma</h2>
          <p>Uno de nuestros clientes es una agencia inmobiliaria en Palma. Cuando llegaron a nosotros, invertían 800 €/mes en Google Ads y generaban aproximadamente cuatro leads al mes. Coste por lead: 200 €.</p>
          <p>El problema no era el presupuesto. Era la estructura. La cuenta corría con palabras clave en concordancia amplia sin lista de palabras negativas, enviando tráfico a una página de inicio con once campos de formulario y sin un call to action claro. Los Quality Scores promediaban 3&ndash;4/10, lo que inflaba los CPCs muy por encima de lo que las palabras clave merecían en ese mercado.</p>
          <p>Reestructuramos: concordancia exacta y de frase en las palabras clave de mayor intención, una landing page simplificada con formulario de dos campos y un único CTA, una lista de palabras negativas con 240 términos y ajustes de puja por hora del día y dispositivo. También aumentamos el presupuesto a 1.500 €/mes &mdash; no porque más gasto fuera la solución principal, sino porque una cuenta bien estructurada necesita volumen suficiente para que funcione Smart Bidding. El algoritmo requiere datos de conversión. Con 800 €/mes y una estructura defectuosa, casi no recibía ninguno.</p>
          <p>Tras 60 días: 18 leads al mes a 83 € de coste por lead. El mismo mercado, la misma agencia, el mismo producto. La inversión publicitaria subió un 87,5 %. Los leads aumentaron un 350 %. El coste por lead bajó un 58,5 %.</p>
          <p>Esto es lo que hace una reestructuración. Más gasto en una estructura defectuosa produce proporcionalmente más desperdicio. Primero reestructura, luego escala. Más resultados en nuestra <a href="/cases">página de casos</a>.</p>

          <h2 id="cheap-clicks">Los clics baratos no son clics rentables</h2>
          <p>El CPC más barato que puedes conseguir es irrelevante si el tráfico no convierte. Hemos auditado cuentas con un CPC medio de 0,50 € y un coste por lead de 400 € &mdash; porque las palabras clave eran demasiado amplias, las landing pages no eran relevantes para la intención de búsqueda y nadie había establecido un objetivo de conversión hacia el que la campaña pudiera optimizar.</p>
          <p>La rentabilidad en Google Ads es una función: CPC &times; (1 &divide; CVR) = coste por lead. Luego: coste por lead &times; (1 &divide; tasa de cierre) = coste por cliente. Compara eso con el valor del ciclo de vida del cliente.</p>
          <p>Si tu cliente medio vale 5.000 € y cierras 1 de cada 5 leads, un coste por lead de 200 € te da un coste por cliente de 1.000 € &mdash; un retorno de 5:1 sobre la inversión publicitaria. Si tu cliente medio vale 500 € y cierras 1 de cada 10 leads, un coste por lead de 30 € da un coste por cliente de 300 € &mdash; un retorno de 1,7:1. El segundo escenario tiene clics más baratos. Es considerablemente menos rentable.</p>
          <p>La pregunta correcta no es &ldquo;¿cuánto cuesta Google Ads?&rdquo; Es &ldquo;¿cuánto cuesta un cliente y cuánto vale?&rdquo; Responde primero la segunda pregunta. Entonces la primera se responde sola.</p>
          <p>Para una guía completa de Google Ads para el mercado español y balear, consulta nuestra <a href="/blog/google-shopping-kampagne-leitfaden/">guía de campañas de Google Shopping</a> y nuestra <a href="/services/google-ads/">página de servicio de Google Ads</a>.</p>

          <p>¿Estás pagando por clics que no convierten? <a href="/es/contact/?topic=was-kostet-google-ads">Cuéntanos tu situación</a> &mdash; te respondemos en menos de un día hábil. La primera conversación: 30 minutos, sin coste.</p>
        </>
      ),
    },
'conversion-rate-optimisation-checklist': {
      toc: [
        'Qué significa realmente la optimización de la tasa de conversión',
        'Benchmarks por sector: ¿dónde estás?',
        'La checklist CRO de 15 puntos',
        'Quick wins frente a mejoras estructurales',
        'Un caso CRO: Portals Properties',
        'Cómo priorizar',
      ],
      faqs: [
        {
          q: '¿Cuál es una buena tasa de conversión para una web de empresa?',
          a: 'Depende del sector. Según el Conversion Benchmark Report 2024 de Unbounce, las tasas de conversión medianas por sector son: inmobiliario 1,4 %, e-commerce 2,9 %, sanidad 3,4 %, hostelería 3,6 %, servicios profesionales 4,8 % y finanzas 5,0 %. Son medianas: el cuartil de mayor rendimiento en cada sector suele doblar o triplicar esa cifra. Si estás significativamente por debajo de la mediana de tu sector, tienes un problema estructural que vale la pena investigar.',
        },
        {
          q: '¿Cómo mejoro la tasa de conversión de mi web sin un desarrollador?',
          a: 'Varios de los cambios CRO más impactantes no requieren código. Reescribe el texto del botón principal de "Enviar" a algo concreto como "Solicitar presupuesto gratis". Mueve un testimonio real de cliente junto al formulario de contacto. Elimina campos no esenciales del formulario: cada campo que quitas recupera aproximadamente el 11 % de las respuestas. Añade un número de teléfono real en la cabecera. Comprime imágenes de más de 200 KB con una herramienta gratuita como Squoosh. Estos cinco cambios suelen llevar menos de dos horas y resuelven los fallos de conversión más comunes.',
        },
        {
          q: '¿Cuánto cuesta la optimización de la tasa de conversión?',
          a: 'Depende mucho del alcance. El CRO de quick wins — cambios de copy, optimización de formularios, compresión de imágenes, posicionamiento del CTA — a menudo no cuesta nada más allá del tiempo de implementación. El CRO estructural — rediseño de página, reconstrucción de UX en móvil, infraestructura de A/B testing — suele costar entre 2.000 y 15.000 €, según el alcance y el desarrollo necesario. Los programas de CRO gestionados de forma continua, con A/B testing regular, análisis de mapas de calor y mejoras iterativas, rondan los 1.000–3.000 € al mes. Nuestro servicio de diseño de conversión se describe en /es/services/conversion-design/.',
        },
        {
          q: '¿Cuál es la causa más común de una tasa de conversión baja?',
          a: 'En nuestra experiencia con decenas de auditorías de sitios, la causa más frecuente es la fricción en los formularios: demasiados campos, copy vago en el CTA, sin confirmación de qué ocurre tras el envío. La segunda causa más habitual es la velocidad de página: un Largest Contentful Paint superior a 3 segundos pierde una parte medible de visitantes antes de que lean nada. La tercera es el déficit de confianza: sin número de teléfono visible, sin reseñas recientes, sin contacto identificado. Estos tres problemas explican la mayoría de los fallos de conversión que encontramos en las auditorías iniciales.',
        },
        {
          q: '¿Cuánto tarda en dar resultados la optimización de la tasa de conversión?',
          a: 'Los quick wins — simplificación de formularios, copy del CTA, señales de confianza — pueden mostrar resultados medibles en una o dos semanas si hay tráfico suficiente. Los cambios estructurales — rediseño de página, revisión de la UX en móvil — suelen tardar entre cuatro y ocho semanas en implementarse y otras dos a cuatro en medirse. El A/B testing requiere significación estadística: en sitios con poco tráfico, eso puede significar seis u ocho semanas por prueba. Las ganancias CRO más rápidas vienen de corregir primero los problemas estructurales obvios y luego pasar al testing iterativo una vez que la base es sólida.',
        },
      ],
      prose: (
        <>
          <p>La optimización de la tasa de conversión es la práctica de mejorar el porcentaje de visitantes que realizan una acción deseada &mdash; rellenar un formulario, completar una compra, reservar una llamada. No requiere más tráfico, más inversión publicitaria ni un rediseño completo de la web.</p>
          <p>Requiere eliminar fricción.</p>
          <p>Un sitio que convierte al 2 % manda a 98 de cada 100 visitantes sin que hagan nada. Mejorarlo al 4 % duplica el rendimiento del presupuesto publicitario sin cambiar lo que gastas. No es un escenario teórico. Es lo que produce el trabajo de CRO estructurado y metódico en webs de negocios reales. El <a href="/es/services/conversion-design/">trabajo de diseño de conversión</a> que hacemos para clientes se basa en los mismos 15 puntos de esta checklist. La publicamos porque la mayoría de los problemas de conversión son predecibles, y la mayoría de las empresas no han revisado los 15.</p>

          <h2 id="what-is-cro">Qué significa realmente la optimización de la tasa de conversión</h2>
          <p>Tu tasa de conversión es el número de conversiones dividido por el número de visitantes, expresado como porcentaje. Si 1.000 personas visitan tu web en un mes y 30 envían un formulario, tu tasa de conversión es del 3 %.</p>
          <p>El CRO es el trabajo que mueve ese número. No es adivinar. Es un proceso estructurado: medir lo que ocurre, identificar dónde abandonan los visitantes, hipotetizar el porqué, probar un cambio, volver a medir. Bien hecho, el CRO se acumula. Una mejora del 0,5 % un mes seguida de otro 0,5 % el siguiente no parece dramática. A lo largo de 12 meses es transformadora.</p>
          <p>Lo más importante que hay que entender sobre el CRO es que no requiere más tráfico. Si tu web convierte al 1,5 % y la mediana del sector está en el 4,8 %, no tienes un problema de tráfico. Tienes un problema de fricción. Y los problemas de fricción se resuelven.</p>

          <h2 id="cro-benchmarks">Benchmarks por sector: ¿dónde estás?</h2>
          <p>Antes de juzgar si tu tasa de conversión necesita trabajo, necesitas un punto de referencia. Estos datos provienen del Conversion Benchmark Report 2024 de Unbounce, que recoge las tasas de conversión medianas en landing pages de seis sectores.</p>
          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Sector</th>
                  <th style={{ textAlign: 'right', padding: '8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>CVR mediana (Unbounce 2024)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { sector: 'Inmobiliario', cvr: '1,4 %' },
                  { sector: 'E-commerce', cvr: '2,9 %' },
                  { sector: 'Sanidad', cvr: '3,4 %' },
                  { sector: 'Hostelería', cvr: '3,6 %' },
                  { sector: 'Servicios profesionales', cvr: '4,8 %' },
                  { sector: 'Finanzas', cvr: '5,0 %' },
                ].map(row => (
                  <tr key={row.sector} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.sector}</td>
                    <td style={{ padding: '10px 0', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.cvr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Si estás significativamente por debajo de la mediana de tu sector, tienes un problema estructural &mdash; velocidad de página, señales de confianza, longitud del formulario o posicionamiento del CTA. Si estás cerca de la mediana, mejoras puntuales moverán el número. Si estás por encima, estás en territorio de A/B testing: las ganancias son menores y requieren una metodología más rigurosa para encontrarlas.</p>

          <h2 id="cro-checklist">La checklist CRO de 15 puntos</h2>
          <p>Trabaja esta lista en orden. Los primeros puntos tienen el mayor impacto con el menor coste de implementación. Los puntos posteriores requieren más esfuerzo pero generan retornos que se acumulan una vez que la base es sólida.</p>
          <ol>
            <li><strong>Velocidad de página.</strong> Revisa tus Core Web Vitals en Google Search Console: Largest Contentful Paint (LCP) por debajo de 2,5 segundos, Interaction to Next Paint (INP) por debajo de 200 ms, Cumulative Layout Shift (CLS) por debajo de 0,1. Cada segundo adicional de carga reduce las conversiones aproximadamente un 7 %. El móvil es la prioridad &mdash; la mayor parte de tu tráfico llega desde teléfonos, no desde escritorios.</li>
            <li><strong>CTA por encima del pliegue.</strong> Tu llamada a la acción principal debe ser visible sin hacer scroll en un dispositivo móvil. Si un visitante tiene que buscar qué se supone que debe hacer, un porcentaje significativo no se molestará. Es uno de los fallos de conversión más comunes que encontramos en las auditorías iniciales de sitios.</li>
            <li><strong>Longitud del formulario.</strong> Datos de HubSpot muestran que los formularios de más de cinco campos pierden el 50 % de las respuestas. Cada campo adicional reduce la conversión aproximadamente un 11 %. Para la mayoría de casos de captación de leads, nombre, email y una pregunta de cualificación son suficientes para iniciar la conversación. El resto se puede recopilar en la primera llamada.</li>
            <li><strong>Claridad del titular.</strong> Tu titular debe comunicar qué haces en una frase. &ldquo;Soluciones digitales premiadas&rdquo; no le dice nada a un visitante. &ldquo;Gestión de Google Ads para empresas de Mallorca&rdquo; les dice exactamente qué haces, para quién lo haces, y les permite saber de inmediato si están en el lugar correcto.</li>
            <li><strong>Posicionamiento del social proof.</strong> Los testimonios y reseñas pertenecen junto a tu CTA, no enterrados en una página separada. Un nombre real, un resultado concreto y el nombre de la empresa &mdash; posicionados junto a tu formulario de contacto &mdash; reducen la incertidumbre en el momento de la decisión. Las valoraciones genéricas con estrellas sin contexto hacen muy poco.</li>
            <li><strong>UX en móvil.</strong> Prueba en dispositivos reales, no solo en Chrome DevTools. Los elementos táctiles deben tener al menos 44&times;44 px. El texto debe ser legible sin hacer pinch-to-zoom. La navegación no debe requerir toques precisos en elementos pequeños. Los visitantes en móvil no perseveran ante una UX deficiente &mdash; se irán y probarán con un competidor.</li>
            <li><strong>Señales de confianza.</strong> Certificado SSL (candado visible), un número de teléfono real en la cabecera, una dirección física y reseñas recientes con fecha. Cada señal de confianza elimina una razón para no convertir. Una empresa sin datos de contacto visibles ni reseñas está pidiendo un nivel de confianza que no se ha ganado.</li>
            <li><strong>Optimización de imágenes.</strong> Las imágenes grandes sin optimizar son una de las causas más comunes de puntuaciones LCP deficientes. Comprime imágenes de más de 200 KB, conviértelas a formato WebP donde sea compatible y añade texto alt descriptivo a cada imagen. El texto alt es tanto un requisito de accesibilidad como una señal SEO relevante en páginas con muchas imágenes.</li>
            <li><strong>Estructura de página.</strong> Usa una jerarquía clara H1&rarr;H2&rarr;H3. Un visitante que escanea tu página debería entender tu propuesta principal en diez segundos sin leer cada palabra. Si no puede, tienes un problema de estructura, no de copy. Reestructurar suele superar a reescribir.</li>
            <li><strong>Copy del CTA.</strong> &ldquo;Solicitar presupuesto gratis&rdquo; supera mediblemente a &ldquo;Enviar&rdquo;. &ldquo;Reservar una llamada de 30 minutos&rdquo; supera a &ldquo;Contáctanos&rdquo;. Sé específico sobre qué ocurre tras el clic. La especificidad reduce la ansiedad de no saber qué viene después, que es una de las razones principales por las que los visitantes abandonan los formularios.</li>
            <li><strong>Analytics y tracking.</strong> No puedes optimizar lo que no mides. Configura el tracking de eventos de GA4 en cada envío de formulario, clic en botón y profundidad de scroll relevante antes de empezar a probar nada. Nuestra <a href="/es/blog/tracking-setup-guide/">guía de configuración de tracking</a> cubre el proceso completo en lenguaje claro.</li>
            <li><strong>Mapas de calor y grabaciones de sesión.</strong> Herramientas como Microsoft Clarity (gratuita) muestran dónde hacen clic los usuarios, dónde dejan de hacer scroll y dónde abandonan. Aquí es donde nace el insight genuino de CRO &mdash; no en suposiciones ni en buenas prácticas, sino en la evidencia grabada de lo que los visitantes reales hacen en tus páginas concretas.</li>
            <li><strong>Enlazado interno.</strong> Enlaza desde las páginas de mayor tráfico hacia tus páginas de mayor conversión. Un visitante que llegó por un servicio debería poder descubrir servicios relacionados sin salir del sitio. Un solo enlace interno bien colocado desde un post de blog relevante puede aumentar de forma significativa las conversiones en una página objetivo.</li>
            <li><strong>Disciplina en el A/B testing.</strong> Prueba una variable a la vez. Cambiar el titular, el CTA y el diseño simultáneamente significa que no puedes atribuir ningún resultado a ningún cambio concreto. Ejecuta las pruebas hasta alcanzar significación estadística &mdash; generalmente al menos 100 conversiones por variante &mdash; no hasta que te sientas cómodo con la tendencia.</li>
            <li><strong>Exit intent y scroll triggers.</strong> Un CTA secundario bien cronometrado que se activa cuando un visitante está a punto de irse recupera entre el 3 y el 8 % de las sesiones que de otro modo se perderían. Úsalo con moderación &mdash; un CTA secundario por página como máximo &mdash; y que la oferta sea genuinamente útil, no una repetición de lo que ya aparece en la página.</li>
          </ol>

          <h2 id="quick-wins">Quick wins frente a mejoras estructurales</h2>
          <p>No todo cambio de CRO requiere un desarrollador o un rediseño. Algunos cambios llevan 15 minutos y mueven el número de inmediato.</p>
          <p><strong>Quick wins (sin desarrollador):</strong> Reescribe el copy del botón del formulario. Mueve un testimonio junto al formulario de contacto. Comprime imágenes de más de 200 KB con una herramienta gratuita como Squoosh. Añade tu número de teléfono a la cabecera. Elimina campos no esenciales del formulario de contacto.</p>
          <p><strong>Mejoras estructurales (requieren desarrollador):</strong> Reconstruir la página sobre un framework de renderizado más rápido. Rediseñar el flujo de checkout o de solicitud en móvil. Implementar server-side rendering para mejorar el LCP. Reestructurar la arquitectura de información para que el CTA principal esté por encima del pliegue en móvil. Llevan más tiempo y cuestan más, pero generan mejoras permanentes mayores que no pueden lograrse solo con cambios de copy.</p>
          <p>La secuencia práctica: haz los quick wins primero. Cuestan casi nada y a menudo producen una mejora medible en semanas. Usa esos datos para justificar la inversión en trabajo estructural. No gastes 10.000 € en rediseñar una página antes de saber si el titular es el problema real.</p>

          <h2 id="portals-properties">Un caso CRO: Portals Properties</h2>
          <p>Portals Properties es una agencia inmobiliaria boutique en Puerto Portals, Mallorca, especializada en venta de propiedades para compradores británicos. Cuando vinieron a trabajar con nosotros en el Q4 de 2025, gastaban 6.200 £/mes en Google Ads y generaban unas 28 consultas cualificadas al mes. Coste por lead cualificado: 221 £.</p>
          <p>Las campañas tenían una estructura razonablemente buena. El problema era la web.</p>
          <p>Construida en 2019. Puntuación de Core Web Vitals: 42 en móvil. La búsqueda de propiedades requería cuatro clics antes de que apareciera un formulario de contacto. La imagen hero de la homepage era un stock. El formulario de solicitud tenía once campos, incluyendo tres que preguntaban lo mismo de maneras distintas.</p>
          <p>Reconstruimos el sitio en ocho semanas. El nuevo sitio carga en menos de 1,5 segundos en móvil (Core Web Vitals: 91), muestra un formulario de dos campos en cada página y sustituye las fotos de stock por imágenes propias del equipo. Cada propiedad muestra precios de venta reales y testimonios de clientes, porque los compradores de propiedades en Mallorca eligen a su agente tanto como eligen la propiedad.</p>
          <p>Tras 14 semanas con el sitio reconstruido y nuestra gestión de Google Ads funcionando juntos: los leads cualificados pasaron de 28 a 71 al mes, y el coste por lead cualificado bajó de 221 £ a 94 £. El presupuesto publicitario no cambió. Puedes leer el relato completo de la reconstrucción en nuestro <a href="/es/blog/free-website-design/">artículo sobre diseño web gratis</a>.</p>
          <p>Todos los puntos de la checklist CRO anterior se aplicaron a esa reconstrucción. La mejora del LCP por sí sola recuperó a los visitantes que abandonaban antes de que la página cargara. La simplificación del formulario (de once campos a dos) recuperó a una gran parte de los visitantes que llegaban al formulario pero no lo completaban. El posicionamiento del social proof redujo la incertidumbre para los compradores que comparaban agencias.</p>

          <div className="prose-callout" style={{ marginTop: 32 }}>
            <span className="prose-callout-kicker">La conclusión</span>
            <p>El presupuesto publicitario no cambió. Lo que cambió fue lo que ocurrió cuando llegó el tráfico. Esa es toda la premisa del CRO.</p>
          </div>

          <h2 id="how-to-prioritise">Cómo priorizar</h2>
          <p>No todo el trabajo de CRO vale lo mismo. El framework estándar de priorización multiplica tres factores: impacto potencial (¿a cuántos visitantes afecta esta página o este paso?), confianza (¿cómo de sólida es la evidencia de que este cambio ayudará?) y facilidad (¿con qué rapidez puede implementarse y medirse?).</p>
          <p>En la práctica, la secuencia suele ser esta: arregla primero la página que genera más tráfico y conversiones. Empieza con los cambios que puedes hacer sin un desarrollador. Mide el resultado. Luego pasa a los cambios estructurales una vez que tengas datos que justifiquen la inversión.</p>
          <p>La mayoría de empresas tienen una o dos páginas que concentran el 70&ndash;80 % de todas las conversiones. Mejorar esas páginas un 1 % tiene más impacto que mejorar veinte páginas secundarias un 5 % cada una. Identifica primero la página con mayor palanca y trabaja desde ahí.</p>
          <p>El objetivo no es la perfección. Es un proceso sistemático de mejoras pequeñas y medidas que se acumulan con el tiempo. Una mejora del 10 % cada trimestre supone un 46 % de mejora anual. Ese tipo de resultado no viene de un gran rediseño. Viene de aplicar la checklist anterior, de forma metódica, mes a mes. Consulta nuestros <a href="/es/cases/">resultados con clientes</a> o <a href="/es/contact/">habla con nosotros</a> sobre cómo aplicar CRO en tu web.</p>
          <p>Si crees que aplica a tu empresa, <a href="/es/contact/?topic=conversion-rate-optimisation-checklist">cuéntanos tu situación</a> &mdash; te respondemos en menos de un día hábil. La primera conversación: 30 minutos, sin coste.</p>
        </>
      ),
    },
'what-is-generative-engine-optimisation': {
      toc: [
        'GEO no es SEO con nuevo nombre',
        'Qué muestra la investigación',
        'Cómo deciden los motores de IA qué citar',
        'El framework GEO de 8 pasos',
        'Cómo medir el progreso en GEO',
        'Qué hacemos en pmax',
      ],
      faqs: [
        {
          q: '¿Qué es la Generative Engine Optimisation (GEO)?',
          a: 'La Generative Engine Optimisation (GEO) es la práctica de optimizar el contenido de un sitio web para que sea citado con mayor frecuencia en respuestas de búsqueda generadas por IA — de motores como ChatGPT, Perplexity y Gemini. A diferencia del SEO tradicional, que optimiza para una posición en una lista de resultados, GEO optimiza para la inclusión en una respuesta sintetizada. Las intervenciones clave son distintas: estadísticas citadas, citas directas de expertos, contenido renderizado en servidor y acceso de crawlers de IA — en lugar de construcción de enlaces y densidad de palabras clave.',
        },
        {
          q: '¿En qué se diferencia GEO de SEO?',
          a: 'SEO optimiza para una posición en una lista de resultados de búsqueda. GEO optimiza para la inclusión en una respuesta sintetizada generada por IA — no hay lista, solo inclusión o exclusión. SEO recompensa los enlaces entrantes, la autoridad de dominio y la alineación de palabras clave. GEO recompensa las estadísticas citadas, las citas directas de expertos, el contenido estructurado y extraíble, y la accesibilidad técnica a los crawlers. Algunos inputs se solapan — un sitio rápido y bien estructurado ayuda a ambos — pero las intervenciones específicas que mueven la tasa de citación son distintas.',
        },
        {
          q: '¿Cómo optimizo mi web para ChatGPT y Perplexity?',
          a: 'Empieza por los fundamentos técnicos: asegúrate de que GPTBot y PerplexityBot no estén bloqueados en tu robots.txt ni en tu WAF, y de que tus páginas estén renderizadas en servidor en lugar de solo en JavaScript. Después, aborda el contenido: añade estadísticas citadas con fuentes nombradas a cada página clave, incluye citas directas de expertos, estructura el contenido con listas numeradas y tablas comparativas, e implementa FAQPage JSON-LD schema. Por último, crea un archivo llms.txt y empieza a monitorizar tu tasa de citación en los distintos motores.',
        },
        {
          q: '¿Cuál es la técnica GEO más efectiva según la investigación?',
          a: "Aggarwal et al. (2024), publicado en KDD '24, encontró que añadir citas directas de expertos mejoró las tasas de citación en IA un 27,8 % — el mayor incremento individual de entre todas las técnicas evaluadas. Añadir estadísticas citadas mejoró las tasas de citación un 25,9 %. Ambas superaron a los marcos de autoridad, la optimización de palabras clave y las mejoras de fluidez.",
        },
        {
          q: '¿Cómo sé si los motores de IA citan mi web?',
          a: 'Necesitas una herramienta de seguimiento de visibilidad en IA que ejecute prompts configurados en múltiples motores de IA y mida si tu marca o contenido aparece en las respuestas. Nosotros usamos CrunchJunkie, que rastrea 10 motores — ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews, Google AI Mode, Microsoft Copilot, Grok, Meta AI y DeepSeek — con escaneos automáticos semanales e intervalos de confianza estadística en cada métrica.',
        },
        {
          q: '¿Qué es un archivo llms.txt?',
          a: 'Un archivo llms.txt es un estándar emergente, análogo a robots.txt, que proporciona orientación a los crawlers de IA sobre el contenido de tu web, las páginas clave y los resúmenes preferidos. Vive en la raíz de tu dominio. Todavía no está adoptado de forma universal por todos los motores de IA, pero el soporte crece rápidamente. Crearlo ahora casi no cuesta nada y señala a los crawlers de IA que tu sitio está preparado para la indexación por IA.',
        },
      ],
      prose: (
        <>
          <p>Cuando escribes una pregunta en ChatGPT o Perplexity, no obtienes diez enlaces azules. Obtienes una respuesta directa. Esa respuesta se nutre de fuentes &mdash; algunas nombradas, otras no. Los sitios web citados no son necesariamente los que aparecen en la primera página de Google. Son los más fáciles de leer, extraer y considerar fiables para los sistemas de IA.</p>
          <p>Ese es el núcleo de la Generative Engine Optimisation. GEO es la práctica de hacer que tu contenido sea más citable en respuestas generadas por IA. No es un rebranding de SEO. Es una disciplina distinta construida para un tipo diferente de búsqueda.</p>
          <p>Esta guía explica qué es GEO, en qué difiere del SEO tradicional, qué muestra la investigación revisada por pares sobre las intervenciones que realmente funcionan, y el framework de 8 pasos que usamos con clientes. También compartimos nuestros propios datos &mdash; porque en pmax aplicamos todo lo de esta guía a <a href="/about">nuestra propia web</a> primero.</p>

          <h2 id="geo-is-not-seo">GEO no es SEO con nuevo nombre</h2>
          <p>El SEO tradicional se construye en torno a un mecanismo: posicionarse en una lista. Google puntúa tu página, le asigna una posición de relevancia y la muestra a los usuarios. El éxito se mide por posición &mdash; primero, segundo, décimo.</p>
          <p>GEO opera con un mecanismo completamente distinto. No hay lista. Un motor de IA sintetiza una única respuesta a partir de múltiples fuentes. Que tu contenido contribuya a esa respuesta no depende de la posición en el ranking sino de si la IA puede extraer, confiar y atribuir lo que has escrito.</p>
          <p>SEO recompensa los enlaces entrantes, la autoridad de dominio y la velocidad de página. GEO recompensa las estadísticas citadas, las citas directas de expertos y el contenido estructurado y extraíble. SEO optimiza para la posición. GEO optimiza para la inclusión.</p>
          <p>No son la misma disciplina. Comparten algunos inputs &mdash; un sitio web técnicamente sólido y rápido ayuda a ambos. Pero las intervenciones específicas que mueven la aguja son suficientemente distintas como para que tratar GEO como &ldquo;SEO con palabras clave de IA&rdquo; produzca malos resultados.</p>
          <p>Una página que está en el número uno de Google puede no aparecer nunca en una respuesta de Perplexity. Una página fuera del top 100 en Google puede ser citada por ChatGPT en respuesta a cada consulta relevante. Hemos visto ambas situaciones. La diferencia entre esos resultados es casi enteramente técnica y estructural &mdash; no una cuestión de quién tiene el mejor producto.</p>
          <p>pmax estima, basándose en la trayectoria actual y los datos de tráfico observados, que los motores de IA gestionarán el 30 % de las consultas de búsqueda para 2027. Construir visibilidad ahora cuesta significativamente menos que ponerse al día dentro de dos años frente a marcas que ya tienen historial de citación con sistemas de IA.</p>

          <h2 id="what-research-shows">Qué muestra la investigación</h2>
          <p>El artículo académico fundacional sobre GEO fue publicado en KDD 2024 por Aggarwal et al.: &ldquo;GEO: Generative Engine Optimization.&rdquo; Es el estudio más riguroso hasta la fecha sobre qué mueve realmente las tasas de citación en respuestas generadas por IA.</p>
          <p>El hallazgo principal: &ldquo;GEO puede aumentar la visibilidad de las fuentes hasta un 40 % en respuestas generadas por IA mediante métodos de optimización que incluyen citas, estadísticas y citas directas.&rdquo;</p>
          <p>Tres técnicas específicas produjeron las mejoras medibles más grandes:</p>
          <ul>
            <li>Añadir estadísticas citadas al contenido: <strong>+25,9 %</strong> tasa de citación</li>
            <li>Incluir citas directas de expertos: <strong>+27,8 %</strong> tasa de citación</li>
            <li>Mejorar la fluidez del contenido: <strong>+15,9 %</strong> tasa de citación</li>
          </ul>
          <p>Un 27,8 % de mejora en la tasa de citación al añadir citas directas no es un ajuste marginal. Y es también uno de los cambios más sencillos de implementar. El artículo también encontró que las señales de autoridad &mdash; enmarcar el contenido con referencias a fuentes nombradas, instituciones e investigaciones publicadas &mdash; funcionaron de forma consistente en todos los motores de IA evaluados.</p>
          <p>Lo que <em>no</em> mueve la aguja: la densidad de palabras clave, la longitud de la meta descripción, el número de enlaces internos. Los inputs que el SEO ha enseñado a optimizar a la mayoría de los marketers son, en el mejor de los casos, neutros para GEO. En el peor, centrarse en ellos distrae de las intervenciones que realmente funcionan.</p>
          <div className="prose-callout" style={{ marginTop: 32 }}>
            <span className="prose-callout-kicker">Conclusión clave</span>
            <p>Las técnicas que más mejoran la citabilidad en IA requieren experiencia genuina. Las estadísticas citadas y las citas directas de expertos no se pueden fabricar. GEO recompensa la sustancia &mdash; no la estructura optimizada para SEO. En la práctica, eso es un filtro de calidad sobre lo que la búsqueda con IA muestra.</p>
          </div>

          <h2 id="how-ai-decides">Cómo deciden los motores de IA qué citar</h2>
          <p>Los motores de IA se nutren de dos fuentes: datos de entrenamiento (contenido sobre el que el modelo fue entrenado antes de su fecha de corte de conocimiento) y recuperación web en tiempo real (páginas obtenidas en tiempo real para una consulta dada).</p>
          <p>La recuperación en tiempo real es donde GEO tiene su impacto más inmediato. Cuando ChatGPT, Perplexity o Gemini recupera resultados en vivo, ejecuta crawlers para obtener páginas relevantes para una consulta, extrae los pasajes más citables y los sintetiza en una respuesta.</p>
          <p>Para que tu página sea citada, deben cumplirse tres condiciones:</p>
          <ol>
            <li>El crawler de IA debe poder llegar a tu página &mdash; sin bloqueos en robots.txt, sin reglas WAF que bloqueen GPTBot, ClaudeBot o PerplexityBot</li>
            <li>El contenido debe estar renderizado en servidor &mdash; los crawlers de IA generalmente no ejecutan JavaScript</li>
            <li>El contenido debe contener afirmaciones atribuibles y citables &mdash; estadísticas con fuentes nombradas, citas directas, datos estructurados y extraíbles</li>
          </ol>
          <p>Si cualquiera de esas condiciones falla, la página queda excluida independientemente del resto de optimizaciones.</p>
          <p>La tercera condición es la que se pasa por alto con más frecuencia. La mayoría de páginas están llenas de afirmaciones no atribuibles: &ldquo;Somos líderes en nuestro sector.&rdquo; &ldquo;Servicio de primera clase.&rdquo; Estas no se pueden extraer, verificar ni atribuir. No contribuyen en nada a una respuesta de IA.</p>
          <p>Sustitúyelas por: &ldquo;Según el Instituto de Turismo de las Islas Baleares, los turistas alemanes gastan una media de &euro;1.200 por viaje en Mallorca.&rdquo; Eso es atribuible. Eso es citable. Eso es GEO.</p>

          <h2 id="geo-framework">El framework GEO de 8 pasos</h2>
          <p>Esta es la lista de comprobación de implementación que seguimos en cada sitio cliente. Por orden de prioridad:</p>
          <ol>
            <li><strong>Asegura el acceso de los crawlers de IA.</strong> Revisa tu robots.txt para detectar bloqueos generales (<code>User-agent: *</code> combinado con <code>Disallow: /</code>). Revisa tu WAF para detectar reglas que bloqueen GPTBot, ClaudeBot o PerplexityBot por cadena de user-agent. Los crawlers de IA se anuncian &mdash; si los estás bloqueando, aunque sea sin querer, eres invisible para la búsqueda con IA independientemente de todo lo demás.</li>
            <li><strong>Renderiza tu contenido en servidor.</strong> Los crawlers de IA no ejecutan JavaScript. Si tus páginas clave se renderizan en el lado del cliente &mdash; React SPAs sin SSR, frameworks pesados de cliente &mdash; los sistemas de IA no pueden leerlas. La solución: renderizado en servidor o generación estática para todas las páginas con contenido.</li>
            <li><strong>Añade estadísticas citadas a cada página clave.</strong> Cada afirmación importante necesita una fuente nombrada. &ldquo;La investigación de Aggarwal et al. encontró una mejora del 25,9 % en las tasas de citación en IA a partir de estadísticas citadas.&rdquo; &ldquo;Los turistas alemanes gastan una media de &euro;1.200 por viaje en Mallorca, según las estadísticas de turismo de las Islas Baleares.&rdquo; Las estadísticas nombradas y atribuidas son la intervención GEO de mayor valor.</li>
            <li><strong>Añade citas directas de expertos.</strong> Citas de personas nombradas &mdash; tu equipo, expertos del sector, clientes con consentimiento. &ldquo;Claire Enders, performance strategist en pmax: &lsquo;La mayoría de los sitios web son invisibles para los motores de IA no por tener mal contenido, sino por cómo está estructurado ese contenido.&rsquo;&rdquo; Eso es citable. Una página llena de &ldquo;creemos que&rdquo; no lo es.</li>
            <li><strong>Estructura el contenido con listas y tablas extraíbles.</strong> Los modelos de IA prefieren extraer contenido estructurado &mdash; listas numeradas, tablas comparativas, procesos paso a paso. Las páginas solo con texto son más difíciles de sintetizar. Cada concepto importante debería tener un acompañante estructurado: una tabla, una lista numerada o un bloque de definición claro.</li>
            <li><strong>Implementa FAQPage JSON-LD schema en el contenido de preguntas y respuestas.</strong> Los datos estructurados FAQPage ya los usa Google para los featured snippets. Los motores de IA utilizan las mismas señales. Cada página con una sección de preguntas y respuestas &mdash; páginas de servicio, posts de blog, páginas de recursos &mdash; debería llevar el schema FAQPage.</li>
            <li><strong>Crea un archivo llms.txt.</strong> Un estándar emergente, análogo a robots.txt, que proporciona orientación a los crawlers de IA sobre el contenido de tu sitio, las páginas clave y los resúmenes preferidos. Vive en la raíz de tu dominio. Todavía no está adoptado de forma universal &mdash; pero la adopción crece rápidamente. Crearlo ahora es una apuesta de bajo coste sobre un estándar que parece cada vez más inevitable. Ver nuestra <a href="/blog/what-is-a-geo-audit/">guía de auditoría GEO</a> para los detalles de implementación.</li>
            <li><strong>Monitoriza tu visibilidad en IA.</strong> Rastrea qué motores te citan, con qué frecuencia, en respuesta a qué prompts y cómo evoluciona el sentimiento con el tiempo. Sin medición estás operando a ciegas. Usamos <a href="https://crunchjunkie.io/" target="_blank" rel="noopener">CrunchJunkie</a> para rastrear pmax.online en 10 motores de IA y 35 prompts configurados. Ver nuestro <a href="/services/ai-visibility">servicio de visibilidad en IA</a> para saber cómo lo extendemos a clientes.</li>
          </ol>

          <h2 id="how-to-measure">Cómo medir el progreso en GEO</h2>
          <p>La medición de la visibilidad en IA todavía está madurando. Las herramientas mejoran rápidamente, pero los compradores necesitan entender qué están midiendo realmente antes de comprometerse con una plataforma.</p>
          <p>Las métricas principales que hay que rastrear:</p>
          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Métrica</th>
                  <th style={{ textAlign: 'left', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Qué mide</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Tasa de citación', what: 'Porcentaje de respuestas de IA en las que tu contenido o marca es citado' },
                  { metric: 'Share of voice', what: 'Con qué frecuencia eres citado en relación con competidores nombrados' },
                  { metric: 'Posición media', what: 'Dónde apareces en las respuestas que sí te citan' },
                  { metric: 'Sentimiento', what: 'Cómo te describen los motores de IA — positivo, neutro o con reservas' },
                ].map(row => (
                  <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8', fontFamily: 'var(--font-mono)', fontSize: 12, whiteSpace: 'nowrap' }}>{row.metric}</td>
                    <td style={{ padding: '10px 0 10px 16px', color: '#949494', fontSize: 13 }}>{row.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>La medición requiere ejecutar los mismos prompts repetidamente en múltiples motores de IA. Una única ejecución no es estadísticamente significativa. Hacemos benchmark con 35 prompts en 10 motores, con escaneos automáticos semanales.</p>
          <p>Una restricción práctica que merece nombrarse: la mayoría de herramientas de visibilidad en IA cobran por cuota de prompts, lo que crea un incentivo para rastrear menos consultas de las que deberías. Lo analizamos en profundidad en nuestra <a href="/blog/ai-visibility-tracking-tools-2026/">guía de herramientas de seguimiento de visibilidad en IA</a>.</p>
          <p>El artículo paralelo a este aborda la visibilidad en búsqueda con IA desde la perspectiva del mercado alemán: <a href="/blog/ki-sichtbarkeit-ai-visibility/">KI-Sichtbarkeit und AI Visibility</a>.</p>

          <h2 id="what-pmax-does">Qué hacemos en pmax</h2>
          <p>Rastreamos pmax.online en 10 motores de IA &mdash; ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews, Google AI Mode, Microsoft Copilot, Grok, Meta AI y DeepSeek &mdash; usando 35 prompts configurados a través de <a href="https://crunchjunkie.io/" target="_blank" rel="noopener">CrunchJunkie</a>. Datos actuales, septiembre de 2026:</p>
          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Métrica</th>
                  <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Valor</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Puntuación de auditoría GEO', value: '97 / 100' },
                  { metric: 'Banda', value: 'AI-ready' },
                  { metric: 'Runs citados — últimos 30 días', value: '1.107' },
                  { metric: 'Motores monitorizados', value: '10' },
                  { metric: 'Prompts rastreados', value: '35' },
                ].map(row => (
                  <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                    <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>El framework de este post es lo que usamos para llegar ahí. No hay nada propietario. La diferencia entre las marcas que aparecen en respuestas de IA y las que no casi siempre es técnica y estructural.</p>
          <p>Ofrecemos <a href="/services/ai-visibility">seguimiento y optimización de visibilidad en IA</a> como servicio &mdash; monitorización, interpretación y el trabajo de optimización que se deriva de los datos. Si quieres saber dónde está tu negocio ahora mismo, una <a href="/blog/what-is-a-geo-audit/">auditoría GEO</a> es el punto de partida adecuado.</p>
          <p>¿Esto encaja con tu situación? <a href="/es/contact/?topic=what-is-generative-engine-optimisation">Cuéntanos brevemente tu caso</a> &mdash; te respondemos en menos de un día hábil. La primera conversación: 30 minutos, sin coste.</p>
        </>
      ),
    },
'performance-marketing-agency-vs-in-house': {
      toc: [
        'La pregunta que nadie hace con honestidad',
        'El coste real del equipo interno',
        'El coste real de una agencia',
        'Cómo comparar de forma justa',
        'Cuándo el equipo interno es la opción correcta',
        'Nuestra recomendación honesta',
      ],
      faqs: [
        {
          q: '¿Cuándo debería un negocio contratar una agencia de performance marketing?',
          a: 'Una agencia de performance marketing suele tener más sentido financiero que una contratación interna cuando la inversión publicitaria mensual está por debajo de €20.000. Por debajo de ese umbral, el coste total de una contratación interna — salario, herramientas, selección, tiempo de adaptación y costes laborales — casi siempre supera el coste de un retainer de agencia. Las agencias también ganan cuando necesitas cubrir varios canales simultáneamente, cuando estás escalando rápido o cuando necesitas resultados antes de que una contratación a tiempo completo pueda estar operativa.',
        },
        {
          q: '¿Cuánto cuesta una agencia de performance marketing en Europa?',
          a: 'Los retainers de agencias de performance marketing para pymes en Europa oscilan típicamente entre €2.000 y €6.000 al mes en honorarios de gestión. La inversión publicitaria — lo que pagas a Google, Meta, TikTok o LinkedIn — se abona directamente a las plataformas y va por separado. En pmax cobramos una tarifa mensual fija, no un porcentaje de la inversión. La tarifa se acuerda de antemano y no cambia en función de cuánto gastes en publicidad.',
        },
        {
          q: '¿Cuál es el punto de equilibrio entre equipo interno y agencia?',
          a: 'El punto de equilibrio suele estar alrededor de €20.000 al mes en inversión publicitaria. Por debajo de esa cifra, una agencia casi siempre gana en eficiencia de costes cuando tienes en cuenta el coste total del equipo interno: salario (€45.000–75.000/año), costes de Seguridad Social (~30–35% sobre el bruto), herramientas (€8.000–15.000/año) y selección (1–2× el salario anual). Por encima de €50.000/mes, la ecuación cambia y un modelo híbrido — agencia más un responsable interno sólido — suele rendir mejor que cualquiera de las dos opciones por separado.',
        },
        {
          q: '¿Qué hace realmente una agencia de performance marketing?',
          a: 'Una agencia de performance marketing planifica, construye y gestiona campañas de publicidad de pago en canales digitales — típicamente Google Ads, Meta, TikTok, LinkedIn, Pinterest y Microsoft Ads. El trabajo diario incluye estructura de campañas, investigación de palabras clave, targeting de audiencias, briefing de copy y creatividades, gestión de pujas, análisis de landing pages, tracking de conversiones e informes periódicos. Las buenas agencias también trabajan la infraestructura de conversión — rendimiento web, setup de tracking, diseño de formularios — porque ahí es donde se concentra gran parte del impacto real en el rendimiento.',
        },
        {
          q: '¿Puede permitirse una agencia una pequeña empresa?',
          a: 'Sí, en la mayoría de los casos. Para negocios que invierten entre €1.500 y €20.000 al mes en publicidad, un retainer de agencia de €2.000–4.000 al mes suele ser más barato que el coste total de una contratación a tiempo completo. El matiz honesto: presupuestos muy pequeños — por debajo de €1.000/mes en inversión publicitaria — a menudo no generan suficientes datos para una optimización con sentido, y la economía es difícil de justificar en cualquiera de los dos lados. En esa etapa, un proyecto puntual de setup con un freelancer suele ser el punto de partida más adecuado.',
        },
      ],
      prose: (
        <>
          <p>La mayoría de agencias te dirán que contrates una agencia. Claro que lo harán. Nosotros también somos una. Pero no siempre pensamos que esa sea la respuesta correcta &mdash; y preferimos decírtelo desde el principio antes que firmar un cliente al que genuinamente no podemos ayudar.</p>
          <p>Esta es nuestra valoración honesta.</p>

          <h2 id="honest-question">La pregunta que nadie hace con honestidad</h2>
          <p>Cuando un empresario pregunta &ldquo;¿debería contratar una agencia de performance marketing o montar un equipo interno?&rdquo;, normalmente obtiene una de dos respuestas. La agencia dice: contrátanos. El recruiter dice: forma un equipo. Ninguno tiene incentivo económico para darte la respuesta directa.</p>
          <p>Hay un tercer grupo que vale la pena escuchar: empresarios que han pasado por ambas opciones. Hablamos con ellos regularmente. Algunos contrataron una agencia demasiado pronto, antes de que su inversión publicitaria fuera suficiente para justificar un retainer. Otros construyeron equipo interno y descubrieron que una persona no puede cubrir seis disciplinas a nivel profesional simultáneamente. Unos pocos probaron con un freelancer y acabaron invirtiendo más tiempo en gestión de cuenta que en su negocio real.</p>
          <p>La respuesta correcta no es universal. Depende de tu inversión publicitaria mensual, de la complejidad de tu producto y de en qué punto de tu curva de crecimiento estás. Así es como analizarlo sin que nadie intente venderte la conclusión.</p>

          <h2 id="cost-of-in-house">El coste real del equipo interno</h2>
          <p>El coste visible de una contratación interna de marketing es el salario. Un performance marketing manager de nivel medio en Europa gana entre €45.000 y €75.000 al año. Los especialistas senior &mdash; alguien con un sólido historial en Google Ads o Meta y experiencia gestionando presupuestos relevantes &mdash; tienden hacia la parte alta de ese rango. Las contrataciones junior cuestan menos, pero requieren significativamente más tiempo de gestión antes de operar de forma autónoma.</p>
          <p>Los costes invisibles suelen ser mayores que el salario.</p>
          <p><strong>Selección.</strong> Encontrar, evaluar e incorporar a un buen profesional de performance marketing lleva entre 8 y 16 semanas. Hacerlo a través de una empresa de selección cuesta entre el 15 y el 25% del salario del primer año en honorarios. La búsqueda directa supone entre 6 y 10 semanas de tiempo interno. Coste total de selección: aproximadamente 1&ndash;2&times; el salario anual, una vez incluido el coste de oportunidad del puesto vacante mientras se busca.</p>
          <p><strong>Herramientas.</strong> Un stack completo de performance marketing &mdash; Semrush, una herramienta de gestión de feeds, una suite de testing creativo, una capa de reporting &mdash; cuesta entre €8.000 y €15.000 al año para una empresa mediana. Las agencias comparten estas licencias entre clientes. Tu contratación interna necesitará las suyas propias.</p>
          <p><strong>Tiempo de adaptación.</strong> Una nueva incorporación no opera a pleno rendimiento desde el primer día. Un período de adaptación realista es de 3 a 6 meses, durante los cuales la inversión publicitaria se gestiona de forma subóptima. Con un presupuesto de €10.000/mes, una brecha de eficiencia del 20% durante ese período cuesta entre €6.000 y €12.000 antes de que la persona sea plenamente productiva. Ese coste no lleva factura, por eso se pasa por alto.</p>
          <p><strong>Costes laborales.</strong> Las cuotas empresariales a la Seguridad Social española, cotizaciones a la pensión y otros costes laborales suponen aproximadamente un 30&ndash;35% sobre el salario bruto.</p>
          <p><strong>Amplitud disciplinar.</strong> Un profesional de performance marketing domina unas pocas áreas. Tendrá un canal fuerte &mdash; normalmente el que más ha trabajado a lo largo de su carrera &mdash; y será genuinamente más débil en el resto. Una sola persona raramente cubre Google Ads, Meta, SEO, analítica y diseño de conversión a nivel profesional simultáneamente. Pagas un salario completo y obtienes una especialización.</p>

          <h2 id="cost-of-agency">El coste real de una agencia</h2>
          <p>Los costes de una agencia son más sencillos de calcular. Un retainer de performance marketing para una pyme en Europa oscila entre €2.000 y €6.000 al mes en honorarios de gestión. La inversión publicitaria &mdash; lo que pagas a Google, Meta, TikTok, LinkedIn &mdash; se abona directamente a las plataformas y va completamente separado del retainer.</p>
          <p>Nosotros cobramos tarifas mensuales fijas, no un porcentaje de la inversión publicitaria. <a href="/es/blog/agency-pricing-honest/">Explicamos el razonamiento en este artículo.</a> La versión corta: un modelo de porcentaje da a una agencia un incentivo financiero directo para recomendar más inversión de la que tu negocio realmente necesita. Nos hemos propuesto como principio no operar así.</p>
          <p>Lo que te cuesta una agencia más allá del retainer: no eres la prioridad absoluta del equipo cada hora del día. Compartes un equipo con otros clientes. La comunicación se produce en llamadas programadas y en documentos compartidos, no en conversaciones cara a cara. Un equipo externo nunca entenderá tu producto tan en profundidad como un empleado que está inmerso en él a diario.</p>
          <p>Lo que te ahorra una agencia: sin coste de selección, sin coste de herramientas, sin tiempo de adaptación, sin costes laborales, y acceso a un equipo que probablemente ya ha visto tu tipo de problema antes &mdash; en otro sector, en otra etapa &mdash; y sabe qué soluciones no funcionaron.</p>

          <h2 id="how-to-compare">Cómo comparar de forma justa</h2>
          <p>La comparación honesta no es salario frente a retainer. Es el coste total de propiedad, en las cuatro opciones realistas.</p>
          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 12px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Factor</th>
                  <th style={{ textAlign: 'right', padding: '8px 12px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Agencia</th>
                  <th style={{ textAlign: 'right', padding: '8px 12px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Interno</th>
                  <th style={{ textAlign: 'right', padding: '8px 12px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Freelancer</th>
                  <th style={{ textAlign: 'right', padding: '8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Híbrido</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Coste mensual', agency: '€2.000–6.000', inhouse: '€3.750–6.250 salario', freelancer: '€1.500–4.000', hybrid: '€2k–4k + salario' },
                  { label: 'Herramientas', agency: '€0 (incluido)', inhouse: '€670–1.250/mes extra', freelancer: '€0–500/mes', hybrid: 'Repartido' },
                  { label: 'Coste de selección', agency: '€0', inhouse: '1–2× salario anual', freelancer: 'Bajo', hybrid: 'Moderado' },
                  { label: 'Tiempo de adaptación', agency: '2–4 semanas', inhouse: '3–6 meses', freelancer: '2–6 semanas', hybrid: '4–8 semanas' },
                  { label: 'Canales cubiertos', agency: 'Varios', inhouse: '1–2 en profundidad', freelancer: '1 especialidad', hybrid: 'Varios' },
                  { label: 'Conocimiento del producto', agency: 'Medio', inhouse: 'Alto', freelancer: 'Bajo–medio', hybrid: 'Alto' },
                  { label: 'Mejor opción para', agency: '<€20k/mes', inhouse: '€50k+/mes', freelancer: 'Canal único', hybrid: '€25–50k/mes' },
                ].map(row => (
                  <tr key={row.label} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 12px 10px 0', color: '#c8c8c8' }}>{row.label}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.agency}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.inhouse}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.freelancer}</td>
                    <td style={{ padding: '10px 0', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.hybrid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="when-in-house">Cuándo el equipo interno es la opción correcta</h2>
          <p>Lo decimos en serio. Hay situaciones en las que montar un equipo interno es la decisión correcta, y lo diremos cuando creamos que aplica.</p>
          <p><strong>Tu inversión publicitaria supera los €50.000 al mes.</strong> A esa escala, probablemente necesitas una persona interna dedicada de todas formas &mdash; no en sustitución de una agencia, sino junto a ella. La complejidad de la cuenta, el volumen de decisiones creativas y la gestión de stakeholders internos justifican a alguien integrado en el negocio a tiempo completo.</p>
          <p><strong>Tu producto es muy técnico o está regulado.</strong> Dispositivos médicos, B2B industrial, servicios profesionales muy especializados. La publicidad efectiva requiere un conocimiento del producto que un equipo externo tarda meses en adquirir. Una contratación interna que ya lo tiene superará a una agencia generalista en esta dimensión, al menos al principio.</p>
          <p><strong>Ya tienes una función de marketing interna sólida.</strong> Si tienes un responsable de marketing con experiencia real en paid media, un especialista interno encaja sin fricción. La dificultad de coordinación que complica las relaciones con agencias desaparece cuando todos están en el mismo edificio trabajando hacia los mismos objetivos.</p>
          <p><strong>Tu plan a largo plazo es un equipo interno de todas formas.</strong> El coste de transición es real &mdash; selección, adaptación, caída temporal de eficiencia &mdash; pero la economía cambia con la escala. Iniciar la contratación a €30.000/mes de inversión te da tiempo para contratar bien en lugar de con urgencia.</p>

          <h2 id="honest-recommendation">Nuestra recomendación honesta</h2>
          <p>El punto de equilibrio entre equipo interno y agencia suele estar alrededor de €20.000 al mes en inversión publicitaria. Por debajo de esa cifra, las agencias ganan en eficiencia de costes casi siempre cuando tienes en cuenta el coste total del equipo interno. Por encima de €50.000 al mes, el cálculo cambia y un modelo híbrido a menudo supera a cualquiera de las dos opciones por separado.</p>
          <p>Trabajamos con una empresa de servicios profesionales en Calvi&agrave;, Mallorca, que aprendió esto en carne propia. Invertían €6.000 al mes en Google Ads. Contrataron a una responsable de marketing, le dieron los recursos necesarios y corrieron el experimento durante seis meses. Los resultados fueron decepcionantes. No porque la persona fuera inadecuada para el puesto &mdash; era experimentada y capaz. El problema era estructural: una sola persona no puede gestionar profesionalmente Google Ads, una cuenta de Meta, una web, un calendario de contenidos e informes mensuales de rendimiento de forma simultánea. Eso no es un fallo de contratación. Es un problema de alcance.</p>
          <p>Pasaron a <a href="/es/marketing-agency-mallorca/">pmax</a> en el primer trimestre de 2026. En 12 semanas, el coste por lead cualificado había caído un 38%. El presupuesto publicitario no cambió. Lo que cambió fue el foco en los canales, una estructura de cuenta correcta y personas dedicadas a cada componente en lugar de un generalista estirado por todo a la vez.</p>
          <p>Si inviertes €3.000 al mes en publicidad y te preguntas si contratar equipo interno: todavía no. Construye tus canales primero con una agencia. Aprende qué funciona realmente para tu negocio. Cuando la inversión publicitaria justifique una contratación a tiempo completo y entiendas la disciplina lo suficiente como para evaluar candidatos correctamente, contrata. Puede que eso sea dentro de 18 meses. Es la decisión correcta.</p>
          <p><a href="/es/about/">Philipp</a>, que fundó pmax, pasó años en el lado del cliente antes de crear la agencia. El punto de partida de este artículo fue su propia frustración al recibir consejos sesgados cuando era él quien tomaba la decisión de contratar. El sesgo de este artículo no es hacia las agencias. Es hacia la honestidad.</p>
          <p>Consulta nuestra <a href="/es/services/">lista completa de servicios</a> o <a href="/es/contact/">inicia una conversación</a> &mdash; te diremos directamente si contratarnos tiene sentido para donde estás ahora.</p>

          <div className="prose-callout" style={{ marginTop: 32 }}>
            <span className="prose-callout-kicker">En resumen</span>
            <p>Por debajo de €20.000/mes en inversión publicitaria, una agencia casi siempre gana en coste total de propiedad. Por encima de €50.000/mes, plantéate un modelo híbrido. En el tramo intermedio, la respuesta depende de tu producto, tu equipo y la velocidad a la que necesitas avanzar.</p>
          </div>

          <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=performance-marketing-agency-vs-in-house">cuéntanos brevemente tu situación</a> &mdash; te respondemos en menos de un día hábil. Primera conversación: 30 minutos, sin coste.</p>
        </>
      ),
    },
'linkedin-ads-b2b-spain': {
      title: 'LinkedIn Ads para B2B en España: lo que funciona de verdad',
      deck: 'Benchmarks de CPL realistas por sector, la checklist de targeting de LinkedIn y una firma de abogados en Palma que redujo el coste por lead de 184 € a 67 € en 16 semanas.',
      toc: [
        'LinkedIn vs. Meta para B2B: la diferencia real',
        'Qué CPLs se manejan en España',
        'La checklist de targeting de LinkedIn',
        'Por qué la mayoría de campañas de LinkedIn rinden por debajo',
        'Un caso en Palma: de 184 € a 67 € de CPL',
        'Antes de empezar',
      ],
      faqs: [
        {
          q: '¿Cuánto cuestan los LinkedIn Ads en España?',
          a: 'Los CPMs de LinkedIn en España se mueven habitualmente entre 25 y 65 € para audiencias B2B, con CPCs de entre 4 y 12 € según la precisión del targeting y el formato del anuncio. El Sponsored Content en el feed está en la parte alta del rango; los Message Ads y los Text Ads son más baratos, pero convierten menos. Tu coste total depende mucho del tamaño de la audiencia: un targeting más ajustado y con mayor intención cuesta más por impresión, pero menos por lead cualificado.',
        },
        {
          q: '¿Qué CPL puedo esperar de LinkedIn Ads para servicios profesionales en España?',
          a: 'Para negocios de servicios profesionales en España &mdash; despachos de abogados, consultoras, asesorías contables &mdash; pmax estima un CPL realista en LinkedIn de entre 45 y 120 €, una vez que las campañas están bien configuradas. Las campañas iniciales sin refinamiento de audiencia suelen aterrizar en 150&ndash;250 €. La diferencia está casi siempre en la disciplina de targeting y el formato creativo, no en el presupuesto.',
        },
        {
          q: '¿Vale la pena LinkedIn Ads para pequeños negocios B2B?',
          a: 'Depende del valor medio de tu operación. Si un nuevo cliente vale 5.000 € o más, el CPL de LinkedIn casi siempre está justificado. Si tus operaciones están por debajo de los 2.000 €, la economía rara vez funciona &mdash; incluso con un CPL bien gestionado de 80 €, necesitas una tasa de cierre suficientemente alta para que el canal sea rentable. Google Search suele ofrecer mejor economía para B2B de menor ticket con presupuestos más ajustados.',
        },
        {
          q: '¿Cuál es el presupuesto mínimo para LinkedIn Ads en España?',
          a: 'El mínimo propio de LinkedIn es 10 €/día por campaña, pero es demasiado poco para generar datos útiles. Un mínimo realista para una sola campaña en España es 2.500 €/mes en inversión publicitaria &mdash; suficiente para generar entre 20 y 40 leads al mes con CPLs realistas y dar al algoritmo señal suficiente para optimizar. Por debajo de eso, trátalo como un ejercicio de aprendizaje, no como un canal de performance.',
        },
        {
          q: '¿Cómo funciona el targeting de LinkedIn Ads para audiencias españolas?',
          a: 'El targeting de LinkedIn en España utiliza datos profesionales autodeclarados: cargo, tamaño de empresa, sector, seniority, geografía y habilidades. España tiene aproximadamente 17 millones de miembros en LinkedIn. Filtrar por nivel Director o superior en servicios profesionales da entre 280.000 y 350.000 perfiles alcanzables &mdash; suficiente para campañas relevantes sin agotar la audiencia en pocas semanas. Puedes añadir targeting por idioma para llegar específicamente a profesionales con perfil en español, inglés o alemán.',
        },
      ],
      prose: (
        <>
          <p>LinkedIn es la plataforma de publicidad más cara en B2B por CPM. También es, con el briefing adecuado, el lugar más barato para encontrar un comprador empresarial cualificado. La diferencia entre estas dos afirmaciones se llama disciplina de targeting y formato creativo &mdash; no presupuesto.</p>
          <p>Esta es una guía práctica para negocios B2B que operan en Mallorca y España. Cubrimos lo que LinkedIn cuesta realmente aquí, cómo son los CPLs realistas por sector y los errores estructurales que hacen que la mayoría de campañas rindan por debajo antes de recibir una oportunidad justa.</p>

          <h2 id="linkedin-vs-meta">LinkedIn vs. Meta para B2B: la diferencia real</h2>
          <p>La diferencia fundamental no es el formato ni el placement. Es la intención de la audiencia.</p>
          <p>En LinkedIn, un usuario que navega por su feed está en modo profesional. Lee noticias del sector, sigue a colegas, actualiza su perfil de carrera. Un anuncio de una solución de legal tech o una consultoría inmobiliaria comercial aterriza en un contexto que tiene sentido. En Meta, esa misma persona está haciendo scroll entre fotos de amigos, viendo vídeos, consumiendo contenido de ocio. El mismo anuncio aterriza como una interrupción.</p>
          <p>Más concretamente: el targeting de LinkedIn se basa en datos profesionales autodeclarados. Cargo, tamaño de empresa, sector, seniority, habilidades &mdash; todo declarado por el propio miembro. Cuando segmentas por &ldquo;Managing Partner + Derecho + España&rdquo; en LinkedIn, llegas exactamente a quien crees. Cuando segmentas el mismo perfil en Meta, llegas a personas cuyos intereses inferidos sugieren que podrían ser esa persona. La brecha de conversión es real y consistente.</p>
          <p>Los LinkedIn Lead Gen Forms amplifican esto aún más. Se rellenan automáticamente con los datos del perfil del miembro, no requieren redirigir a una landing page y convierten a 3&ndash;4 veces la tasa de formularios equivalentes en landing page para ofertas B2B. El trade-off es el coste: los CPMs de LinkedIn en España rondan los 25&ndash;65 €, frente a los 8&ndash;15 € de una audiencia B2B similar en Meta. Pero el CPM no es la métrica que importa &mdash; el CPL sí.</p>
          <p>Nuestra <a href="/services/paid-social/">gestión de LinkedIn Ads</a> cubre el funnel completo: awareness con Thought Leader Ads, captación de leads con Sponsored Content y Lead Gen Forms, y retargeting mediante Matched Audiences construidas a partir de tu CRM y los visitantes de tu web.</p>

          <h2 id="cpl-spain">Qué CPLs se manejan en España</h2>
          <p>Los rangos siguientes son estimaciones de pmax basadas en campañas gestionadas en España entre 2024 y 2026. Asumen campañas correctamente estructuradas &mdash; objetivo adecuado, audiencia segmentada de menos de 500.000 miembros, creativo relevante, inversión mínima de 2.500 €/mes. Las campañas iniciales sin estas condiciones aterrizan habitualmente el doble de alto.</p>

          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Sector (España)</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>LinkedIn CPL</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Google Search CPL</th>
                  <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Meta CPL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { sector: 'Servicios profesionales', li: '€45–120', gs: '€35–95', meta: '€25–65' },
                  { sector: 'SaaS / B2B tech', li: '€80–200', gs: '€60–150', meta: '€40–90' },
                  { sector: 'Inmobiliario comercial', li: '€60–150', gs: '€45–120', meta: '€30–75' },
                  { sector: 'Asesoría financiera', li: '€70–170', gs: '€55–130', meta: '€35–85' },
                ].map(row => (
                  <tr key={row.sector} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.sector}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.li}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.gs}</td>
                    <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.meta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: '#6a6a6a', marginTop: -8, marginBottom: 24 }}>Estimaciones de pmax basadas en campañas en España 2024&ndash;2026. Las cifras de Google Search y Meta corresponden a campañas configuradas para B2B, no a medias generales de mercado. Todos los CPLs asumen una definición de lead cualificado &mdash; no un envío de formulario sin más.</p>

          <p>La tabla no hace de LinkedIn la opción obvia. Google Search suele ofrecer mejores CPLs en sectores con términos de búsqueda claros y de alta intención &mdash; &ldquo;abogado inmobiliario comercial Palma&rdquo; es una señal de comprador distinta a una impresión en LinkedIn. Para negocios con demanda de búsqueda establecida, <a href="/services/google-ads/">Google Search</a> debería correr en paralelo a LinkedIn, no en lugar de él. La combinación adecuada depende de dónde están tus compradores en el ciclo de decisión cuando los alcanzas.</p>
          <p>Para negocios de <a href="/industries/">servicios profesionales e inmobiliario comercial</a> donde el ciclo de compra es largo y los tomadores de decisión no buscan activamente, LinkedIn suele superar a Google en pipeline cualificado incluso cuando el CPL bruto es más alto.</p>

          <h2 id="targeting-checklist">La checklist de targeting de LinkedIn</h2>
          <p>Esta es la checklist que revisamos en cada nueva cuenta de LinkedIn B2B en España. Es lo suficientemente específica para ser útil &mdash; no &ldquo;segmenta a las personas correctas&rdquo;, sino exactamente qué ajustes tocar y en qué orden.</p>
          <ul>
            <li><strong>Cargo:</strong> Sé específico. &ldquo;Managing Partner&rdquo; y &ldquo;Chief Legal Officer&rdquo; son personas distintas con mandatos distintos. No los juntes en el mismo ad set. Empieza con tres a cinco títulos precisos antes de añadir targeting por función general.</li>
            <li><strong>Tamaño de empresa:</strong> Ajusta a tu ICP. Si atiendes a empresas de 50&ndash;500 personas, establece ese rango. El targeting enterprise (&gt;10.000 empleados) cambia completamente los requisitos de mensaje y formato.</li>
            <li><strong>Sector:</strong> Usa la taxonomía propia de LinkedIn, no el proxy de intereses de Meta. &ldquo;Servicios jurídicos&rdquo; en LinkedIn es un sector autodeclarado; en Meta es un interés inferido.</li>
            <li><strong>Geografía:</strong> Para España, configura &ldquo;España&rdquo; a nivel de país y luego prueba un ad set separado filtrado a Madrid y Barcelona si tu servicio es específico de esas ciudades. Las audiencias de Mallorca son pequeñas (&lt;50.000 profesionales senior) &mdash; combina el targeting de la isla con España a nivel nacional para tener volumen.</li>
            <li><strong>Seniority:</strong> Director o superior para decisiones de compra. Manager y Senior para prescriptores. Campañas separadas &mdash; el creativo y el CTA difieren significativamente.</li>
            <li><strong>Idioma:</strong> LinkedIn permite segmentar por idioma de perfil. Úsalo para separar audiencias en español de las que tienen el perfil en inglés o alemán, especialmente en Mallorca donde los ejecutivos germanófonos son un segmento relevante.</li>
            <li><strong>Exclusiones:</strong> Sube tu lista de clientes actuales como audiencia de supresión. Excluye a estudiantes. Excluye perfiles de nivel de entrada. Cada impresión no cualificada cuesta el mismo CPM que una cualificada.</li>
            <li><strong>Test de Matched Audiences:</strong> Lanza un ad set contra tu targeting por atributos y otro en paralelo contra una Matched Audience (visitantes de tu web o subida de CRM). La señal ganadora informa todas las decisiones de escalado futuras.</li>
          </ul>

          <h2 id="why-campaigns-fail">Por qué la mayoría de campañas de LinkedIn rinden por debajo</h2>
          <p>Cuatro errores estructurales explican la gran mayoría de campañas de LinkedIn B2B que heredamos con mal rendimiento.</p>
          <p><strong>Objetivo de campaña incorrecto.</strong> El algoritmo de LinkedIn optimiza para la señal que le das. Seleccionar &ldquo;Visitas al sitio web&rdquo; lo entrena para encontrar personas que hacen clic en enlaces. Seleccionar &ldquo;Generación de leads&rdquo; lo entrena para encontrar personas que envían formularios. La mayoría de campañas que heredamos corren con objetivos de tráfico mientras se preguntan por qué el CPL es alto. La corrección lleva tres clics y lo cambia todo.</p>
          <p><strong>Audiencia demasiado amplia.</strong> El total de miembros de LinkedIn en España es de aproximadamente 17 millones. Una audiencia de &ldquo;todos los profesionales en España&rdquo; gastará tu presupuesto eficientemente según la señal de optimización de LinkedIn &mdash; que no es tu señal de ingresos. Las audiencias objetivo por encima del millón de miembros casi siempre rinden por debajo en CPL para B2B. Por debajo de 50.000, la frecuencia se convierte en un problema rápidamente. El rango de 80.000&ndash;400.000 tiende a dar los mejores resultados para B2B en España.</p>
          <p><strong>Sin diferenciación creativa por etapa del funnel.</strong> Un anuncio de awareness y uno de conversión no pueden ser el mismo activo. Las audiencias frías necesitan contexto y credibilidad. Las audiencias calientes (retargeting de visitantes de web, espectadores de vídeo) necesitan un CTA específico con poca fricción. Servir el mismo Sponsored Content a ambas es despilfarrar en las dos.</p>
          <p><strong>Presupuesto por debajo del umbral de aprendizaje.</strong> LinkedIn recomienda un mínimo de 50 €/día por campaña para salir de la fase de aprendizaje con datos utilizables. Por debajo de eso, el algoritmo nunca se estabiliza. Muchas campañas B2B en España corren con 20&ndash;30 €/día y pasan meses en un bucle sin datos. O te comprometes con el mínimo o no lances el canal.</p>
          <p><strong>Sin Conversions API.</strong> La atribución solo mediante pixel de LinkedIn pierde aproximadamente el 30&ndash;40 % de las conversiones en entornos con restricciones de consentimiento. Conectar la Conversions API da al algoritmo señal real &mdash; especialmente importante en España bajo la aplicación del GDPR. Sin ella, optimizas con datos parciales y lo pagas.</p>

          <h2 id="palma-case">Un caso en Palma: de 184 € a 67 € de CPL</h2>
          <p>Una firma de abogados internacional con oficina en Palma y clientes en toda la UE llegó a nosotros en el Q4 de 2025. Su campaña de LinkedIn llevaba siete meses activa. El CPL estaba en 184 € y no había cambiado de forma significativa desde el lanzamiento. El responsable de cuenta de su agencia anterior describía la campaña como &ldquo;en optimización&rdquo;.</p>
          <p>Los problemas eran estructurales, no estacionales. El objetivo de campaña estaba configurado como Visitas al sitio web. La audiencia era &ldquo;Profesionales jurídicos en España&rdquo; &mdash; 2,3 millones de miembros, demasiado amplia. Un único activo de Sponsored Content corría sin cambios sobre toda la audiencia. No había capa de retargeting, no había Lead Gen Form y no había Conversions API conectada. El pixel se disparaba al cargar la página, no en acciones cualificadas.</p>

          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Métrica</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Antes</th>
                  <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Después (16 semanas)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Cost per lead (CPL)', before: '€184', after: '€67' },
                  { metric: 'Objetivo de campaña', before: 'Visitas al sitio web', after: 'Generación de leads' },
                  { metric: 'Tamaño de audiencia', before: '2,3 M', after: '190 K' },
                  { metric: 'Leads cualificados al mes', before: '6', after: '21' },
                  { metric: 'Inversión publicitaria mensual', before: '€2.200', after: '€2.800' },
                ].map(row => (
                  <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.before}</td>
                    <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0', fontWeight: 700 }}>{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>Los cambios estructurales: objetivo cambiado a Generación de leads con el Lead Gen Form nativo de LinkedIn (prerrellenado con datos del perfil); audiencia reducida a Managing Directors, Partners y C-suite en despachos de abogados, consultoras y empresas de asesoría financiera en España con 10&ndash;500 empleados &mdash; 190.000 miembros; creativo dividido en tres variantes que probaban distintas señales de credibilidad (resultados de clientes, credenciales del equipo, áreas de práctica específicas); Conversions API conectada a su CRM para que las consultas cualificadas &mdash; no las visitas a páginas &mdash; retornaran como eventos de conversión.</p>
          <p>La inversión subió ligeramente, de 2.200 € a 2.800 €/mes. Los leads cualificados mensuales pasaron de 6 a 21. El CPL bajó de 184 € a 67 € en 16 semanas. La definición interna de la firma de &ldquo;cualificado&rdquo; se mantuvo constante durante todo el proceso &mdash; una consulta reservada con un prospecto que cumplía sus criterios de ICP, no un envío de formulario sin más.</p>

          <h2 id="before-you-start">Antes de empezar</h2>
          <p>Tres cosas que debes tener en orden antes de lanzar LinkedIn Ads para B2B en España:</p>
          <p><strong>Un ICP definido con atributos buscables en LinkedIn.</strong> &ldquo;Decisores senior en servicios profesionales&rdquo; no es suficientemente específico para segmentar. &ldquo;Managing Partners en despachos de abogados con 20&ndash;200 empleados en Madrid, Barcelona y Palma, con perfil en español o inglés&rdquo; sí. Necesitas la lista de cargos, la correspondencia con la taxonomía de sectores, el rango de tamaño de empresa y la geografía antes de abrir el Campaign Manager.</p>
          <p><strong>Un presupuesto de medios mínimo de 2.500 €/mes.</strong> Por debajo de eso, estás pagando el impuesto de fase de aprendizaje de LinkedIn sin generar datos suficientes para salir de ella. Recibirás impresiones. No recibirás una señal fiable. Si tu presupuesto es menor, empieza con Google Search y vuelve a LinkedIn cuando los valores de operación justifiquen el CPL.</p>
          <p><strong>Un plan de conversiones offline.</strong> El reporting nativo de LinkedIn mide los envíos de formulario y las visitas a la landing page. Tu métrica real de éxito es el pipeline cualificado y los ingresos cerrados. Conecta la Conversions API a tu CRM antes del lanzamiento de la campaña, no después de tres meses con resultados inframedidos.</p>

          <div className="prose-callout" style={{ marginTop: 32 }}>
            <span className="prose-callout-kicker">La conclusión</span>
            <p>LinkedIn para B2B en España funciona. Los CPMs son altos y la curva de aprendizaje es real, pero la calidad de audiencia para ventas profesionales y enterprise no tiene rival en ningún otro canal de pago. El modo de fallo es casi siempre estructural &mdash; objetivo incorrecto, audiencia demasiado amplia, sin Conversions API &mdash; no el presupuesto. Primero arregla la estructura.</p>
          </div>

          <p>Nuestro <a href="/services/paid-social/">servicio de paid social</a> incluye LinkedIn Ads para B2B &mdash; estrategia, construcción de campaña, creativo y optimización continua. También trabajamos en los verticales de <a href="/industries/">servicios profesionales e inmobiliario</a> en España. Si quieres valorar si LinkedIn tiene sentido para tu situación concreta, <a href="/cases/">revisa primero nuestro archivo de casos</a> y luego contacta.</p>

          <p>¿Tu campaña de LinkedIn no está generando el CPL que necesitas? <a href="/es/contact/?topic=linkedin-ads-b2b-spain">Cuéntanos tu situación</a> &mdash; te respondemos en menos de un día hábil. La primera conversación: 30 minutos, sin coste.</p>
        </>
      ),
    },
'google-shopping-kampagne-leitfaden': {
      toc: [
        'Standard Shopping vs. Performance Max',
        'Requisitos del feed de Merchant Center',
        'La configuración en 6 pasos',
        'Benchmarks de ROAS por categoría',
        'Un caso en Mallorca: Mallorca Artesanía',
        'Errores frecuentes',
      ],
      faqs: [
        {
          q: '¿Cuál es la diferencia entre Google Shopping y Performance Max?',
          a: 'Las campañas de Standard Shopping te dan control explícito: fijas pujas por producto o grupo de productos, ves los datos de términos de búsqueda individuales y puedes excluir consultas concretas. Performance Max es un tipo de campaña multicanal (Shopping, Display, YouTube, Gmail, Maps) optimizada por el machine learning de Google. Cedes el control granular a cambio de alcance multicanal y la capacidad de Google para descubrir demanda nueva. Standard Shopping es el mejor punto de partida para cuentas nuevas o productos con márgenes ajustados; Performance Max suele superar en cuentas consolidadas con más de 50 conversiones mensuales.',
        },
        {
          q: '¿Qué ROAS puedo esperar de Google Shopping?',
          a: 'Con base en benchmarks internos de pmax de cuentas gestionadas en Alemania y España, 2024–2026: Moda 2,8–4,2×, Hogar y Jardín 3,1–5,0×, Electrónica 1,8–3,2×, Deporte 2,5–3,8×. La electrónica parece baja porque los márgenes son estrechos y la competencia es intensa. Calcula tu ROAS de break-even antes de fijar un objetivo: con un margen bruto del 35 %, el break-even es 2,86×.',
        },
        {
          q: '¿Cuánto cuesta una campaña de Google Shopping en España?',
          a: 'Google Shopping funciona con un modelo de coste por clic. Los CPCs en e-commerce español rondan típicamente 0,15–0,80 € para retail general y 0,40–2,50 € para categorías de mayor valor. El gasto mensual total depende de tu estrategia de puja, el objetivo de ROAS y el tamaño del catálogo. Prueba mínima con sentido: 500–1.000 €/mes durante cuatro semanas para recopilar suficientes datos de conversión y que el algoritmo pueda optimizar.',
        },
        {
          q: '¿Cuánto tarda Google Shopping en mostrar resultados?',
          a: 'Técnicamente, los anuncios de Shopping pueden aparecer pocas horas después de que se apruebe la campaña. La optimización con sentido lleva 4–6 semanas: el Smart Bidding de Google necesita aproximadamente 50 conversiones en un período de 30 días para salir de la fase de aprendizaje y empezar a optimizar de forma eficiente. Performance Max suele tardar más que Standard Shopping en estabilizarse porque aprende en más canales simultáneamente.',
        },
        {
          q: '¿Necesito una cuenta de Google Merchant Center para publicar anuncios de Shopping?',
          a: 'Sí, sin excepción. Google Merchant Center es donde vive tu feed de productos: el archivo de datos estructurados que le dice a Google qué vendes, a qué precio y con qué disponibilidad. Sin un feed de Merchant Center aprobado, los anuncios de Shopping no pueden publicarse. Merchant Center es gratuito; el coste está en el tiempo necesario para conseguir que un feed de calidad se apruebe y se mantenga.',
        },
      ],
      prose: (
        <>
          <p>Google Shopping en 2026 no es lo que era en 2022. La introducción de Performance Max, la retirada de Smart Shopping y tres años de mejoras en machine learning han cambiado significativamente la estructura de decisión. La pregunta fundamental ya no es &ldquo;¿cómo configuro anuncios de Shopping?&rdquo; sino &ldquo;¿qué tipo de campaña, y por qué?&rdquo;</p>
          <p>Esta guía responde primero esa pregunta y luego recorre los requisitos del feed, la secuencia de configuración, los benchmarks de ROAS y los errores que corregimos con más frecuencia cuando heredamos cuentas de Shopping. Consulta nuestra guía sobre <a href="/blog/was-kostet-google-ads/">cuánto cuesta Google Ads</a> si la planificación del presupuesto es la pregunta previa.</p>

          <h2 id="standard-vs-pmax">Standard Shopping vs. Performance Max</h2>
          <p>Las campañas de Standard Shopping te dan control. Fijas pujas a nivel de producto o grupo de productos. Ves los términos de búsqueda que activaron tus anuncios. Puedes excluir consultas que desperdician presupuesto y construir estructuras de grupos de anuncios que reflejen la lógica de tu catálogo.</p>
          <p>Performance Max le da el control a Google. Sirve anuncios de Shopping, pero también Display, YouTube, Gmail y Maps &mdash; todo desde una campaña, optimizada por machine learning hacia la conversión que especifiques. No puedes ver datos de términos de búsqueda individuales. No puedes pujar por producto. Puedes influir en ella mediante la calidad de los activos y las señales de audiencia, pero no puedes dirigirla.</p>
          <p>La pregunta práctica: ¿cuándo ceder el control mejora los resultados?</p>
          <p><strong>Empieza con Standard Shopping si:</strong> tu cuenta tiene menos de 50 conversiones al mes (PMax necesita datos para optimizar y sin ellos se comportará de forma errática); tus márgenes difieren significativamente por producto y necesitas control granular de pujas para mantenerte rentable; o tu feed tiene problemas de calidad que aún no has resuelto del todo &mdash; PMax amplifica las señales del feed, buenas y malas.</p>
          <p><strong>Prueba Performance Max si:</strong> tu cuenta genera de forma consistente 50+ conversiones mensuales y tiene datos de compra limpios con valores de ingresos reales; tienes un catálogo amplio donde gestionar pujas por grupo de productos en Standard Shopping resulta operativamente insostenible; o estás expandiéndote a nuevos mercados donde aún no sabes qué consultas convierten.</p>
          <p>La transición de Standard a PMax no es automática. La calidad del feed y la calidad de la señal de conversión son lo que hace que funcione. Sin ambas, consolidar en Performance Max suele producir peores resultados, no mejores.</p>

          <h2 id="feed-requirements">Requisitos del feed de Merchant Center</h2>
          <p>El feed es el creativo en Shopping. Un feed bien estructurado en una campaña mediocre supera a una estructura de campaña brillante construida sobre un feed deficiente. Todos los campos siguientes deben estar presentes y ser precisos antes de que se lance una campaña:</p>
          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Campo</th>
                  <th style={{ textAlign: 'left', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Requisito</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { field: 'id', req: 'Único por producto, máx. 50 caracteres; no reutilizar tras eliminar' },
                  { field: 'title', req: 'Incluir marca y atributos clave (color, talla, material) — no solo el nombre del producto' },
                  { field: 'description', req: '500–1.000 caracteres; factual, rico en keywords, sin lenguaje promocional' },
                  { field: 'price', req: 'Debe coincidir exactamente con la landing page; usar sale_price para promociones' },
                  { field: 'availability', req: 'in_stock / out_of_stock / preorder — actualizar en tiempo real' },
                  { field: 'link', req: 'URL directa al producto, no a la homepage; debe cargar en menos de 3 segundos' },
                  { field: 'image_link', req: 'Mínimo 800×800 px; fondo blanco o neutro; el producto ocupa el 75 %+ del encuadre' },
                  { field: 'gtin', req: 'EAN, ISBN o UPC — obligatorio en la mayoría de categorías; sin GTIN se limita la cuota de impresiones' },
                ].map(row => (
                  <tr key={row.field} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#3cffd0', fontFamily: 'var(--font-mono)', fontSize: 12 }}>{row.field}</td>
                    <td style={{ padding: '10px 0 10px 16px', color: '#c8c8c8' }}>{row.req}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Campos opcionales pero de alto impacto: <code>brand</code>, <code>color</code>, <code>size</code>, <code>material</code>, <code>product_type</code>. Estos alimentan los filtros de Shopping y mejoran significativamente la capacidad de Google para relacionar tus productos con las consultas relevantes. Inclúyelos.</p>
          <p>El error de feed más habitual que provoca suspensiones de Merchant Center: precios que no coinciden entre el feed y la landing page. El precio en el feed debe coincidir exactamente con lo que el usuario ve al llegar, incluido el IVA donde corresponda. Es la razón más frecuente por la que se suspenden las cuentas &mdash; y la más evitable.</p>

          <h2 id="six-step-setup">La configuración en 6 pasos</h2>
          <p>La secuencia siguiente evita los fallos de lanzamiento más comunes. Los pasos 1 y 2 son requisitos previos &mdash; saltarse cualquiera de ellos produce una campaña que gasta presupuesto antes de poder aprender.</p>
          <ol>
            <li><strong>Auditar y limpiar el feed de Merchant Center.</strong> Todos los campos obligatorios presentes, precios que coincidan con las landing pages, GTIN completado donde sea posible. Pasa el feed por Merchant Center Diagnostics y resuelve todos los errores y advertencias antes de crear una campaña. Un feed con errores activos limitará la elegibilidad de impresiones desde el primer día.</li>
            <li><strong>Configurar el tracking de conversiones con valores de transacción.</strong> Los eventos de compra con valores de ingresos reales son imprescindibles para la optimización de ROAS. Si usas GA4, vincúlalo con Google Ads e importa el evento de compra con el parámetro <code>value</code>. Verifica que la importación esté registrando cifras de ingresos reales, no un placeholder fijo &mdash; el algoritmo optimiza contra el valor que recibe.</li>
            <li><strong>Elegir Standard Shopping o Performance Max.</strong> Aplica los criterios del apartado anterior. Para cuentas con menos de 50 conversiones al mes, Standard Shopping primero. Para cuentas consolidadas, ejecuta ambas en paralelo con un reparto de presupuesto claro y un período de evaluación de 6 semanas antes de comprometerte con una.</li>
            <li><strong>Estructurar las campañas de Standard Shopping por categoría de producto.</strong> Una campaña por categoría principal (Moda, Electrónica, Hogar y Jardín), con grupos de anuncios para subcategorías. Esto te da control de presupuesto y puja al nivel que importa &mdash; fundamental cuando los márgenes difieren significativamente en tu catálogo.</li>
            <li><strong>Fijar el objetivo de ROAS inicial de forma conservadora.</strong> Un objetivo fijado de forma demasiado agresiva priva a la campaña de tráfico durante la fase de aprendizaje. Empieza un 20&ndash;30 % por debajo de tu objetivo de ROAS real y ajústalo tras cuatro semanas de datos de conversión estables.</li>
            <li><strong>Aplicar keywords negativas y exclusiones de marca.</strong> En Standard Shopping, sube una lista de keywords negativas para excluir patrones de consulta irrelevantes y despilfarradores. En Performance Max, añade exclusiones de marca para evitar que la campaña canibalize tus campañas de Brand Search &mdash; sin esto, pagas dos veces por capturar demanda que ya tenías.</li>
          </ol>

          <h2 id="roas-benchmarks">Benchmarks de ROAS por categoría</h2>
          <p>Estos son benchmarks internos de pmax de cuentas gestionadas en Alemania y España, 2024&ndash;2026. Úsalos como orientación, no como objetivos &mdash; tu margen bruto, valor medio del pedido, tasa de devoluciones y densidad competitiva determinarán lo que es alcanzable en tu cuenta concreta.</p>
          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Categoría</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Rango ROAS</th>
                  <th style={{ textAlign: 'left', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Notas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: 'Moda', roas: '2,8–4,2×', note: 'Alta tasa de devoluciones; optimiza el ROAS neto tras devoluciones' },
                  { cat: 'Hogar y Jardín', roas: '3,1–5,0×', note: 'Ciclo de decisión más largo; el retargeting aporta 0,5–1,0× adicional' },
                  { cat: 'Electrónica', roas: '1,8–3,2×', note: 'Márgenes estrechos, alta competencia; calcula el break-even primero' },
                  { cat: 'Deporte', roas: '2,5–3,8×', note: 'Picos de demanda estacionales; precarga el presupuesto antes de los picos' },
                ].map(row => (
                  <tr key={row.cat} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.cat}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.roas}</td>
                    <td style={{ padding: '10px 0 10px 16px', color: '#949494', fontSize: 12 }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>El rango de electrónica parece bajo. Es correcto. Electrónica tiene los márgenes más estrechos y los compradores más sensibles al precio en el e-commerce europeo. Un ROAS de 2,5× en un producto con un 12 % de margen bruto es no rentable. Calcula tu ROAS de break-even antes de fijar un objetivo: divide 1 entre tu porcentaje de margen bruto. Con un margen del 35 %, el break-even es 2,86×. Fija tu objetivo por encima de esa cifra, no por debajo.</p>

          <h2 id="mallorca-artesania">Un caso en Mallorca: Mallorca Artesanía</h2>
          <p>Mallorca Artesanía es un negocio de e-commerce de productos artesanales con sede en Palma &mdash; cerámica, textiles y artículos de cuero hechos a mano, vendidos a clientes europeos online. Vinieron a trabajar con nosotros con Standard Shopping y un ROAS de cuenta de 2,2×. Técnicamente rentable, pero muy por debajo de lo que el catálogo y los márgenes permitían.</p>
          <p>El diagnóstico fue estructural. Su cuenta de Standard Shopping tenía 38 grupos de anuncios, la mayoría de ellos gravemente infrafinanciados. Google no recopilaba suficientes datos de conversión de ningún grupo de anuncios individual para optimizar de forma eficiente. Las campañas estaban tan fragmentadas que era imposible salir de la fase de aprendizaje &mdash; cada grupo tenía un presupuesto demasiado pequeño para lograrlo.</p>
          <p>Primero hicimos un repaso de calidad del feed: corregimos 23 GTINs ausentes, reescribimos 140 títulos de producto para incluir atributos clave (material, color, origen) y añadimos imágenes de lifestyle junto a las fotos de producto existentes. Solo entonces consolidamos en Performance Max.</p>
          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Métrica</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Antes</th>
                  <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Después (10 semanas)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'ROAS de cuenta', before: '2,2×', after: '4,1×' },
                  { metric: 'Tasa de conversión', before: '1,9 %', after: '3,4 %' },
                  { metric: 'Cuota de impresiones', before: '31 %', after: '58 %' },
                  { metric: 'Ingresos (media semanal)', before: '€4.100', after: '€8.800' },
                ].map(row => (
                  <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.before}</td>
                    <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0', fontWeight: 700 }}>{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>La transición a PMax no fue la intervención. El repaso de calidad del feed y la limpieza de la señal de conversión fueron la intervención. Sin ambas, consolidar 38 grupos de anuncios infrafinanciados en Performance Max habría producido una campaña PMax igualmente deficiente con menos palancas para diagnosticarla. Consulta nuestros <a href="/es/cases/">casos de cliente</a> para ver la metodología completa de análisis.</p>

          <h2 id="common-mistakes">Errores frecuentes</h2>
          <p><strong>Lanzar Performance Max en una cuenta nueva.</strong> PMax sin historial de conversiones optimiza para nada útil. Gastarás presupuesto en la fase de aprendizaje antes de que Google tenga ninguna señal de la que aprender. Standard Shopping primero &mdash; recoge 50 conversiones, luego evalúa PMax.</p>
          <p><strong>Ignorar la calidad del feed.</strong> El título del feed es la señal de relevancia principal en Shopping. &ldquo;Vestido Azul 123&rdquo; pierde frente a &ldquo;Vestido Maxi Floral de Mujer &mdash; Azul Marino &mdash; Tallas 36&ndash;48&rdquo; en cada consulta que importa. Las reescrituras de títulos y descripciones producen de forma consistente el mayor ROI de todas las tareas de optimización del feed &mdash; por encima de los cambios de puja y por encima de las capas de audiencia.</p>
          <p><strong>Fijar objetivos de ROAS sin conocer el break-even.</strong> El ROAS objetivo sin conocer tu margen bruto es adivinar. Calcula el break-even primero (1 dividido entre el margen bruto). Fija tu objetivo por encima de esa cifra con un margen para la tasa de devoluciones. Las agencias que se saltan este paso y fijan objetivos por intuición están optimizando tu cuenta para su dashboard, no para tu cuenta de resultados.</p>
          <p><strong>Vinculación rota de GA4.</strong> Las campañas de Shopping necesitan datos de compra limpios con valores de ingresos. Si tu importación de GA4 se dispara sin el parámetro <code>value</code>, Google optimiza por volumen de conversiones, no por beneficio. Revisa la importación en Google Ads en Conversiones: si los valores reportados son cero o idénticos en todas las transacciones, el vínculo está roto.</p>
          <p><strong>Exclusiones de marca ausentes en Performance Max.</strong> Sin exclusiones de marca, PMax competirá con tus propias campañas de Brand Search por las consultas de marca. Pagas dos veces por capturar demanda que ya tenías. Añade las exclusiones de marca en la configuración de la campaña PMax desde el primer día.</p>
          <p>Nuestro <a href="/es/services/google-ads/">servicio de Google Ads</a> cubre Shopping, Performance Max y Search. Si gestionas campañas orientadas al mercado alemán, consulta también nuestra página <a href="/de/google-ads-agentur-spanien/">Google Ads Agentur Spanien</a>.</p>
          <p>Si crees que aplica a tu negocio, <a href="/es/contact/?topic=google-shopping-kampagne-leitfaden">cuéntanos tu situación</a> &mdash; te respondemos en menos de un día hábil. La primera conversación: 30 minutos, sin coste.</p>
        </>
      ),
    },
'tiktok-ads-mallorca-tourism': {
      toc: [
        'Por qué TikTok funciona diferente para el turismo',
        'Los formatos que generan reservas',
        'Cuánto cuesta publicar TikTok Ads en Mallorca',
        'Quién no debería publicar TikTok Ads',
        'Un caso de charter: Boat Escape Mallorca',
        'Cómo empezar',
      ],
      faqs: [
        {
          q: '¿Cuánto cuestan los TikTok Ads para un negocio turístico en España?',
          a: 'Los In-Feed Ads para hostelería y turismo en las Baleares cuestan típicamente entre €4 y €12 de CPM y entre €0,02 y €0,08 de CPV. Un test de cuatro semanas con sentido requiere unos €50/día — aproximadamente €1.400 en total. Los costes suben en temporada alta (junio–agosto) en todos los canales de pago, TikTok incluido, así que arrancar en temporada baja con CPMs más bajos y reimpactar en verano es la estructura más eficiente.',
        },
        {
          q: '¿Qué formato de TikTok Ads funciona mejor para hostelería?',
          a: 'Los Spark Ads son el formato con mayor ROI para la mayoría de negocios de hostelería. Promocionan contenido orgánico que ya ha generado engagement — la prueba social (likes, comentarios, shares) se conserva en la distribución pagada, haciendo que el anuncio parezca contenido real y no publicidad. Los Branded Content Ads de creadores locales generan típicamente 3–5× la tasa de engagement del contenido de marca propio para turismo en Mallorca.',
        },
        {
          q: '¿Puede permitirse TikTok Ads un pequeño negocio turístico en Mallorca?',
          a: 'Sí. El presupuesto mínimo de campaña en TikTok es accesible. Una campaña de Spark Ads con €50/día sobre tres piezas de contenido orgánico es un punto de partida realista. El requisito previo es tener vídeo que merezca la pena promocionar — TikTok premia la calidad creativa más que el tamaño del presupuesto. Si no puedes producir vídeo, la economía no funciona independientemente de cuánto gastes.',
        },
        {
          q: '¿Cuál es el presupuesto mínimo para probar TikTok Ads?',
          a: '€1.400–1.800 para un test de cuatro semanas te dan una señal estadísticamente útil sobre el rendimiento creativo y de audiencia. Por debajo de €800, la muestra es demasiado pequeña para sacar conclusiones fiables. Por encima de €3.000/mes, deberías tener suficientes datos de conversión para optimizar directamente contra eventos de reserva en lugar de proxies de parte alta del funnel.',
        },
        {
          q: '¿Funcionan los TikTok Ads para negocios estacionales?',
          a: 'Los negocios estacionales pueden usar TikTok Ads de forma efectiva, pero la continuidad importa. Publicar solo durante la temporada alta (típicamente junio–septiembre en Mallorca) significa empezar desde cero cada año — el algoritmo de TikTok no tiene memoria de campañas anteriores. La estructura más eficiente es una campaña de awareness con presupuesto reducido desde febrero, construyendo audiencias que reimpactar en temporada alta con mayor intención.',
        },
      ],
      prose: (
        <>
          <p>TikTok no es una red social. Es un motor de recomendación de contenido que, de paso, tiene funciones sociales. Para un negocio de hostelería o turismo en Mallorca, esa distinción importa más de lo que parece.</p>
          <p>En Meta o Google, segmentas audiencias según quiénes son &mdash; demografía, intereses, comportamiento previo. El algoritmo de TikTok distribuye el contenido según lo que un usuario ha consumido antes, no según a quién sigue. Es un conjunto de señales fundamentalmente distinto. Para el turismo, eso cambia lo que significa &ldquo;buen targeting&rdquo;.</p>

          <h2 id="tiktok-tourism-difference">Por qué TikTok funciona diferente para el turismo</h2>
          <p>Google Search captura demanda que ya existe. Alguien busca &ldquo;charter de barco en Mallorca&rdquo; y tú compites por ese clic. TikTok crea demanda. Un vídeo de 22 segundos de un catamarán fondeado frente a Cala Figuera planta la idea de un viaje en alguien que no estaba buscando nada.</p>
          <p>Esa es la diferencia entre intent y descubrimiento. Ambos tienen valor. Para un negocio turístico &mdash; un hotel, un beach club, un restaurante, una empresa de charter &mdash; el descubrimiento es donde está el verdadero apalancamiento. Vendes una aspiración, no respondes a una búsqueda.</p>
          <p>El algoritmo de TikTok aprende de los tiempos de visualización, las repeticiones, los shares y los guardados. Un vídeo sobre un charter en Mallorca que consigue 30 segundos de atención de alguien que nunca ha buscado &ldquo;charter de barco&rdquo; se convierte en una señal de interés. Al siguiente usuario se le muestra ese mismo vídeo con mayor probabilidad de que sea un prospecto real. Para contenido inherentemente visual y aspiracional &mdash; exactamente lo que es el turismo &mdash; ese efecto compuesto es la razón por la que TikTok supera a Meta en alcance de fase de descubrimiento.</p>
          <p>Un dato que sorprende a la mayoría de clientes: el segmento de 18&ndash;35 años es el mayor en volumen para el contenido de Mallorca en TikTok, pero el de 25&ndash;44 años genera las mayores conversiones en reservas. Ese grupo tiene poder adquisitivo, ciclos de decisión más cortos y tiende hacia reservas de mayor valor. Si optimizas por ingresos y no por alcance, ese es tu segmento principal.</p>

          <div className="prose-callout" style={{ marginTop: 32 }}>
            <span className="prose-callout-kicker">Nota sobre atribución</span>
            <p>La ventana de atribución de TikTok es más corta que la de Meta. El tracking directo de conversiones para reservas de hotel o charter es más difícil de cerrar limpiamente. Con frecuencia optimizarás contra una mezcla de conversiones directas y comportamiento de view-through. Incorpora eso a tu modelo de medición desde el primer día &mdash; y no compares el recuento de conversiones bruto de TikTok con el de Meta sin ajustar por diferencias de ventana.</p>
          </div>

          <h2 id="formats-that-drive-bookings">Los formatos que generan reservas</h2>
          <p>Cinco formatos que conviene conocer, uno por uno &mdash; esta es la guía de formatos creativos que cubre el 90% de lo que necesita un negocio de hostelería en Mallorca al empezar:</p>
          <ol>
            <li><strong>Spark Ads</strong> &mdash; promociona contenido orgánico existente que ya ha generado engagement; conserva los likes, comentarios y shares, de modo que el anuncio parece contenido real, no publicidad.</li>
            <li><strong>In-Feed Ads</strong> &mdash; vídeos nativos en el feed For You; de 9 a 60 segundos, saltables tras 2 segundos; el formato de trabajo para alcance y awareness con el CPM más bajo.</li>
            <li><strong>TopView</strong> &mdash; pantalla completa al abrir la app; visibilidad máxima y CPM significativamente más alto; más adecuado para lanzamientos de temporada o momentos promocionales relevantes donde la eficiencia del CPM importa menos que el share of attention.</li>
            <li><strong>Branded Content Ads</strong> &mdash; contenido producido por creadores, autorizado y publicado como anuncio desde tu cuenta; típicamente 3&ndash;5&times; la tasa de engagement del contenido de marca propio para turismo en Mallorca.</li>
            <li><strong>Collection Ads</strong> &mdash; un vídeo combinado con fichas de producto deslizables debajo; más útil para negocios con varios productos reservables (tipos de habitación, paquetes de charter, experiencias gastronómicas) donde un solo anuncio puede mostrar toda la oferta.</li>
          </ol>
          <p>Para la mayoría de negocios de hostelería en Mallorca que empiezan en TikTok, los Spark Ads deben ir primero. Dedica cuatro semanas a construir contenido orgánico, identifica qué genera watch time genuino y luego pon presupuesto detrás de los ganadores. No lances pagado antes de tener una señal orgánica que merezca respaldo.</p>

          <h2 id="tiktok-ads-cost-mallorca">Cuánto cuesta publicar TikTok Ads en Mallorca</h2>
          <p>Benchmarks para campañas de hostelería y turismo en las Baleares, 2025&ndash;2026:</p>
          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Formato</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Rango CPM</th>
                  <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Rango CPV</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { format: 'In-Feed (awareness)', cpm: '€4–10', cpv: '€0,03–0,07' },
                  { format: 'In-Feed (conversión)', cpm: '€7–12', cpv: '€0,04–0,08' },
                  { format: 'Spark Ads', cpm: '€4–9', cpv: '€0,02–0,06' },
                  { format: 'TopView', cpm: '€18–35', cpv: 'n/d' },
                ].map(row => (
                  <tr key={row.format} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.format}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.cpm}</td>
                    <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.cpv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Presupuesto mínimo para un test con sentido: &euro;50/día durante cuatro semanas &mdash; unos &euro;1.400 en total para obtener una señal estadísticamente útil sobre creatividad y audiencia. Por debajo de esa cifra, estás quemando presupuesto con una muestra demasiado pequeña para aprender nada.</p>
          <p>Una nota sobre estacionalidad. El pico turístico de Mallorca (mayo&ndash;septiembre) sube los CPMs en todos los canales de pago, no solo en TikTok. Arrancar en febrero&ndash;abril, antes del pico, te permite construir audiencias a menor coste y reimpactarlas en temporada alta. Esa es la lógica de planificación de medios que separa las campañas estacionales eficientes de las caras &mdash; y la razón por la que una presencia continuada durante todo el año se paga sola, incluso con presupuestos reducidos en temporada baja.</p>

          <h2 id="who-should-not">Quién no debería publicar TikTok Ads</h2>
          <p>TikTok Ads no es la solución para todos. Tres casos en los que lo desaconsejaríamos:</p>
          <p><strong>Negocios B2B.</strong> El índice de audiencia de TikTok para intención de compra B2B es bajo. Los decisores están en la plataforma, pero no en modo de compra. LinkedIn es una asignación más eficiente para ese objetivo.</p>
          <p><strong>Negocios muy estacionales sin presupuesto durante todo el año.</strong> El algoritmo de TikTok necesita continuidad para aprender. Un negocio que publica anuncios 8 semanas en verano y desaparece durante nueve meses pierde todo el aprendizaje algorítmico cada temporada. La economía raramente se recupera sin esa continuidad. Una presencia mínima siempre activa desde febrero lo resuelve; una ráfaga solo en verano, no.</p>
          <p><strong>Negocios sin capacidad de producción de vídeo.</strong> TikTok es vídeo en primer lugar. Los anuncios con imágenes estáticas rinden significativamente peor. Si no puedes producir 2&ndash;4 nuevas piezas de vídeo al mes, el canal no funcionará independientemente del presupuesto. Consulta nuestro post hermano sobre <a href="/es/blog/meta-ads-agency-vs-in-house/">Meta Ads: agencia vs. equipo interno</a> para una discusión relacionada sobre adaptar los recursos creativos a los requisitos del canal.</p>
          <p>Si gestionas un restaurante, hotel, empresa de charter, beach club o proveedor de experiencias en Mallorca con un producto visual y una presencia operativa genuina durante todo el año &mdash; los TikTok Ads merecen una consideración seria. La plataforma está infravalorada para el turismo respecto a Meta, y esa brecha se cerrará.</p>

          <h2 id="boat-escape-mallorca">Un caso de charter: Boat Escape Mallorca</h2>
          <p>Boat Escape Mallorca es una empresa de charter con sede en Palma que opera una flota de 12 embarcaciones &mdash; excursiones de día, salidas al atardecer y alquiler privado. En febrero de 2026 no tenían presencia en TikTok &mdash; ni orgánica ni de pago &mdash; y ninguna experiencia previa con la plataforma.</p>
          <p>Construimos una estrategia organic-first: tres vídeos a la semana mostrando salidas reales, pasajeros reales y costa real. Sin imágenes de stock, sin drones sobre barcos vacíos. El briefing era sencillo: si alguien ve 20 segundos de esto, debería estar pensando en reservar.</p>
          <p>Tras cinco semanas de publicación orgánica, identificamos tres vídeos con una tasa de watch rate media superior al 35%. Publicamos Spark Ads solo sobre esos tres vídeos. Presupuesto: &euro;1.200/mes. La campaña se extendió de febrero a octubre &mdash; nueve meses de la temporada de charter en Mallorca.</p>
          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Métrica</th>
                  <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Resultado</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Reservas de charter / mes', result: '0 → 28' },
                  { metric: 'Coste por reserva (CPB)', result: '€38' },
                  { metric: 'Valor medio de reserva', result: '€620' },
                  { metric: 'Seguidores en TikTok (orgánico)', result: '0 → 4.100' },
                ].map(row => (
                  <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                    <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Un CPB de &euro;38 contra un valor medio de reserva de &euro;620 es un retorno de 16&times; a nivel de reserva &mdash; antes de reservas repetidas o referencias. La clave no fue el formato de anuncio ni el presupuesto. Fueron las cinco semanas de contenido orgánico que nos dijeron qué creatividad merecía respaldo. Sin esa señal, los Spark Ads sobre los vídeos equivocados habrían dado poco.</p>

          <h2 id="how-to-start">Cómo empezar</h2>
          <p>Cuatro pasos, en este orden. La secuencia importa &mdash; saltarse el paso uno da los resultados del paso cuatro:</p>
          <ol>
            <li><strong>Construye contenido orgánico durante cuatro semanas.</strong> Publica tres vídeos a la semana. Sin presupuesto de pago todavía. Deja que el algoritmo te diga qué genera watch time y completions, no qué acumula más likes.</li>
            <li><strong>Identifica tus tres mejores orgánicos.</strong> Abre TikTok Business Suite y filtra por watch time medio y tasa de completion. No por likes, no por seguidores ganados &mdash; watch time y completion son las señales que predicen el rendimiento en pagado.</li>
            <li><strong>Publica Spark Ads sobre esos tres vídeos.</strong> Empieza con un presupuesto de &euro;50/día repartido entre los tres. Deja correr tres semanas antes de hacer ningún cambio creativo o de targeting &mdash; la fase de aprendizaje necesita tiempo y volumen para estabilizarse.</li>
            <li><strong>Optimiza hacia reservas, no hacia tráfico.</strong> Instala el TikTok Pixel, configura el evento de reserva o consulta y dale al algoritmo una conversión sobre la que optimizar. Si tu flujo de reserva aún no admite eventos de pixel, optimiza hacia vistas de landing page como proxy mientras arreglas el setup técnico.</li>
          </ol>
          <p>Nuestro <a href="/es/services/paid-social/">servicio de paid social</a> cubre TikTok, Meta y LinkedIn en un único retainer. Nuestro <a href="/es/industries/hospitality/">playbook de hostelería</a> cubre el mix de canales completo para hoteles, restaurantes y negocios de experiencias en Mallorca. Si la producción creativa es el cuello de botella, nuestro <a href="/es/services/creative/">servicio de producción creativa</a> incluye búsqueda de creadores y briefing específico para contenido de hostelería en Mallorca.</p>
          <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=tiktok-ads-mallorca-tourism">cuéntanos brevemente tu situación</a> &mdash; te respondemos en menos de un día hábil. Primera conversación: 30 minutos, sin coste.</p>
        </>
      ),
    },
'ki-sichtbarkeit-ai-visibility': {
      title: 'Visibilidad en IA: cómo los motores de IA citan tu marca',
      deck: 'La mayoría de marcas no saben qué dice ChatGPT sobre ellas &mdash; ni por qué. La guía basada en datos sobre visibilidad en IA: cómo funcionan las citas, qué palancas mueven la aguja y qué dicen nuestros propios datos sobre 10 motores.',
      toc: [
        'Por qué la visibilidad en IA no es SEO',
        'Cómo los motores de IA deciden a quién citar',
        'La visibilidad de pmax en 10 motores',
        'Las siete palancas que mueven la aguja',
        'Qué comprueba una auditoría GEO técnica',
        'Cómo rastrear tu propia visibilidad en IA',
      ],
      faqs: [
        {
          q: '¿Qué es la visibilidad en búsqueda con IA y cómo se mide?',
          a: 'La visibilidad en búsqueda con IA es el porcentaje de respuestas generadas por IA &mdash; para un conjunto definido de consultas &mdash; en las que tu marca es citada o recomendada. Se mide ejecutando cada prompt rastreado varias veces en los motores objetivo &mdash; ChatGPT, Perplexity, Claude, Gemini y otros &mdash;, registrando qué marcas aparecen y calculando una tasa de citación con margen de error. De quince a veinte ejecuciones por prompt es el mínimo para una lectura estadísticamente significativa.',
        },
        {
          q: '¿Cómo consigo que ChatGPT mencione mi negocio?',
          a: 'Las palancas respaldadas por evidencia son: contenido concreto y citable con hechos verificables y estadísticas citadas; contenido de preguntas frecuentes que se ajuste a cómo la gente consulta los motores de IA; acceso de crawlers de IA (auditar reglas WAF para OAI-SearchBot y PerplexityBot); datos de entidad consistentes en todos los canales; y cobertura de terceros en fuentes que los motores de IA ya consideran autoritativas. El lenguaje de marca genérico no tiene ningún efecto medible en las tasas de citación. El estudio GEO de KDD 2024 encontró que las estadísticas citadas mejoraron las tasas de citación en un 25,9 % y las citas directas en un 27,8 %.',
        },
        {
          q: '¿Qué es una auditoría GEO y por qué importa?',
          a: 'Una auditoría GEO es un diagnóstico estructurado de cuán preparada está tu web para ser rastreada y citada por motores de búsqueda con IA. Cubre cinco categorías ponderadas por la solidez de la evidencia: acceso de crawlers de IA (30/100), accesibilidad del contenido (30/100), datos estructurados (20/100), higiene técnica de SEO (15/100) y llms.txt (5/100). Te indica dónde es más débil tu preparación para las citas y qué corregir primero.',
        },
        {
          q: '¿En qué se diferencia la visibilidad en IA del SEO tradicional?',
          a: 'El SEO optimiza para una posición en una lista de enlaces. La visibilidad en IA determina si tu marca aparece en una respuesta sintetizada &mdash; a menudo una lista corta de marcas recomendadas o una única opción nombrada. No hay lista de resultados que el usuario pueda desplazar; o estás en la respuesta o no estás. Una marca con SEO sólido puede estar completamente ausente de las respuestas de IA si le falta el contenido concreto y citable, y la corroboración de terceros, que los motores de IA usan para decidir a quién citar.',
        },
        {
          q: '¿En qué motores de IA debería centrarme para la visibilidad de mi marca?',
          a: 'Rastrea todos los motores principales &mdash; el comportamiento de citación difiere significativamente entre ellos. Nuestros propios datos muestran un 51,4 % de tasa de citación en GPT-4o Search pero solo un 11,4 % en Claude &mdash; misma marca, mismos prompts, resultados muy distintos. Si solo rastreas un motor, estás midiendo una fracción de un mercado cada vez más fragmentado.',
        },
      ],
      prose: (
        <>
          <p>La mayoría de marcas que auditamos no saben qué dice ChatGPT sobre ellas. Algunas nunca lo han consultado. Otras lo hicieron una vez, obtuvieron una respuesta vaga y pasaron página. Casi ninguna lo rastrea de forma sistemática &mdash; en múltiples motores, en distintos tipos de consulta, a lo largo del tiempo.</p>
          <p>Esa brecha importa. La búsqueda con IA &mdash; lo que en Europa se conoce también como KI-Sichtbarkeit, literalmente &laquo;visibilidad en IA&raquo; en alemán &mdash; no es un canal marginal. Perplexity gestiona más de 100 millones de consultas semanales. Google AI Mode es ya la interfaz principal para búsquedas comerciales en gran parte de Europa. ChatGPT es el punto de partida para investigar productos y servicios entre los menores de 45 años en varias categorías. Si eres invisible en estas respuestas, estás perdiendo compradores antes de que lleguen a tu web.</p>
          <p>Este artículo explica cómo los motores de IA deciden a quién citar, qué dice la evidencia sobre las palancas que mueven las tasas de citación, y cómo es nuestra propia visibilidad en los 10 motores que rastreamos. <a href="/es/about">Claire Enders</a>, que lidera la visibilidad en IA en pmax y trabaja en el producto de seguimiento <a href="https://crunchjunkie.io/" target="_blank" rel="noopener">CrunchJunkie</a>, escribió este artículo a partir de datos en tiempo real.</p>

          <h2 id="ai-visibility-vs-seo">Por qué la visibilidad en IA no es SEO</h2>
          <p>El reflejo es tratar la visibilidad en búsqueda con IA como SEO en un nuevo formato. Los dos comparten ciertos elementos &mdash; rastreabilidad, datos estructurados, calidad del contenido &mdash; pero el mecanismo es suficientemente distinto como para que intervenciones idénticas produzcan resultados muy diferentes.</p>
          <p>Google Search rankea páginas. Evalúa señales y devuelve una lista ordenada de enlaces. Tu trabajo en SEO es rankear por encima de los competidores en esa lista. El usuario elige de ella.</p>
          <p>Los motores de IA sintetizan respuestas. Extraen de fuentes que consideran creíbles y corroboradas, construyen una respuesta con sus propias palabras y emiten una recomendación &mdash; a menudo una lista corta, a veces una sola marca nombrada. No hay lista de resultados. O estás en la respuesta o no estás. Si no estás, el usuario nunca ve un enlace a ti.</p>
          <p>Una marca con alta autoridad de dominio y años de inversión en SEO puede estar completamente ausente de las respuestas de IA en su propia categoría. Lo vemos con regularidad. Un competidor más pequeño con contenido claro, específico y consistentemente corroborado aparece en cada respuesta. La diferencia no es el rendimiento en SEO. Es la claridad de entidad y la preparación para las citas.</p>
          <p>El SEO sigue siendo relevante &mdash; construye la base técnica que los crawlers de IA necesitan. Pero es necesario, no suficiente. Para profundizar en qué implica optimizar para la búsqueda generativa, consulta nuestra <a href="/es/blog/what-is-generative-engine-optimisation/">guía de optimización para motores generativos</a>.</p>

          <h2 id="how-ai-decides">Cómo los motores de IA deciden a quién citar</h2>
          <p>La investigación más útil al respecto es Aggarwal et al. (KDD 2024), que midió qué características del contenido mejoran de verdad las tasas de citación en IA. El paper probó nueve estrategias de optimización frente a un control. Dos hallazgos destacan.</p>
          <p>Las citas directas en el contenido mejoraron las tasas de citación en un 27,8 %. Las estadísticas citadas &mdash; cifras concretas y verificables en el cuerpo del texto &mdash; las mejoraron en un 25,9 %. Las citas externas de autoridad: +24,9 %. El lenguaje de marca genérico no produjo ningún efecto medible.</p>
          <p>El patrón es claro. Los motores de IA prefieren contenido que funciona como evidencia. No textos de marketing &mdash; afirmaciones referenciadas, cifras concretas, hechos verificables. &laquo;pmax gestiona más de 2 millones de euros de inversión anual en medios de pago en Google Ads y Meta&raquo; es citable. &laquo;Ofrecemos resultados excepcionales para marcas ambiciosas&raquo;, no.</p>
          <p>Tres factores estructurales acompañan a la calidad del contenido. Primero, los crawlers de IA necesitan poder llegar a tu sitio. Aproximadamente el 13 % de las solicitudes de crawlers de IA son bloqueadas por reglas de web application firewall (WAF) escritas para bloquear tráfico scraper, sin distinguir entre bots maliciosos y bots legítimos de recuperación de IA como OAI-SearchBot o PerplexityBot. Si tu WAF los bloquea, tu contenido es invisible independientemente de su calidad. Segundo, consistencia de entidad: nombre de marca, ubicación, año de fundación y servicios idénticos en tu web, Google Business Profile, LinkedIn y directorios del sector. La información contradictoria introduce riesgo de alucinaciones. Tercero, cobertura de terceros en fuentes que los motores de IA ya consideran autoritativas &mdash; publicaciones especializadas, plataformas de reseñas consolidadas, casos de estudio publicados conjuntamente.</p>

          <h2 id="pmax-visibility-data">La visibilidad de pmax en 10 motores</h2>
          <p>Rastreamos nuestra propia visibilidad en IA con <a href="https://crunchjunkie.io/" target="_blank" rel="noopener">CrunchJunkie</a> &mdash; 35 prompts en 10 motores de IA, en ejecución continua. En los 30 días hasta el 7 de septiembre de 2026, pmax fue citado en 1.107 de 3.198 ejecuciones totales: una tasa de citación global del 34,6 %.</p>
          <p>Este es el desglose por motor, junto con rex4media &mdash; nuestro competidor más cercano rastreado. Lideramos el recuento total de ejecuciones citadas 2,4:1 (1.107 frente a sus 470 ejecuciones citadas). Donde la barra de rex4media se vuelve ámbar, nos superan.</p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', marginBottom: 12, display: 'flex', gap: 20 }}>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 2, background: '#3cffd0', marginRight: 6, verticalAlign: 'middle' }}></span>pmax</span>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 2, background: '#6b6b8b', marginRight: 6, verticalAlign: 'middle' }}></span>rex4media</span>
            </div>
            <svg viewBox="0 0 520 300" style={{ width: '100%', maxWidth: 520, display: 'block' }} aria-label="Visibilidad por motor de IA: pmax vs rex4media">
              {[
                ['GPT-4o Search', 51.4, 24.3, false],
                ['DeepSeek', 45.7, 31.4, false],
                ['Perplexity', 42.9, 28.6, false],
                ['Meta AI', 37.1, 17.1, false],
                ['Grok-3', 31.4, 22.9, false],
                ['Gemini Flash', 25.7, 8.6, false],
                ['Google AI Mode', 17.1, 34.3, true],
                ['AI Overview', 14.3, 0, false],
                ['Claude', 11.4, 22.9, true],
                ['Bing Copilot', 2.9, 0, false],
              ].map(([engine, pmax, rex, rexWins], i) => {
                const y = (i as number) * 29 + 10
                const barW = 300
                const scale = barW / 55
                const pmaxW = Math.round((pmax as number) * scale)
                const rexW = Math.round((rex as number) * scale)
                const rexColor = rexWins ? '#f5a14a' : '#6b6b8b'
                return (
                  <g key={engine as string}>
                    <text x={0} y={y + 8} fontSize={10} fill="#6b6b6b" fontFamily="var(--font-mono)">{engine as string}</text>
                    <rect x={120} y={y} width={pmaxW} height={11} fill="#3cffd0" rx={2} />
                    <rect x={120} y={y + 13} width={rexW} height={11} fill={rexColor} rx={2} />
                    <text x={122 + pmaxW} y={y + 9} fontSize={9} fill="#3cffd0" fontFamily="var(--font-mono)">{(pmax as number).toFixed(1)}%</text>
                    {(rex as number) > 0 && <text x={122 + rexW} y={y + 22} fontSize={9} fill={rexColor} fontFamily="var(--font-mono)">{(rex as number).toFixed(1)}%</text>}
                  </g>
                )
              })}
            </svg>
            <p style={{ fontSize: 11, color: '#6b6b6b', fontFamily: 'var(--font-mono)', marginTop: 8 }}>Fuente: CrunchJunkie AI Visibility tracking &middot; 35 prompts &middot; 7 sep. 2026 &middot; <a href="https://crunchjunkie.io/" style={{ color: '#6b6b6b' }} target="_blank" rel="noopener">crunchjunkie.io</a></p>
          </div>

          <p>Nuestro motor más fuerte es GPT-4o Search con un 51,4 %. Eso refleja una presencia consistente en las fuentes de las que extrae la capa de recuperación de ChatGPT: nuestro blog, listados en directorios de terceros y canales sociales propios.</p>
          <p>Google AI Mode (17,1 %) y Claude (11,4 %) son nuestras posiciones más débiles. Rex4media nos supera en ambos &mdash; 34,3 % y 22,9 % respectivamente. Los pools de fuentes que ponderan estos motores divergen de los que nos favorecen en GPT-4o. Ahí es donde estamos concentrando el trabajo de mejora ahora mismo.</p>
          <p>La ventaja global de 2,4:1 no debería generar una falsa tranquilidad. La combinación de motores importa tanto como la tasa de citación agregada. Si Google AI Mode se convierte en la superficie de búsqueda comercial dominante en Europa &mdash; y la trayectoria apunta en esa dirección &mdash; nuestro rendimiento inferior ahí es el número más importante.</p>

          <h2 id="seven-levers">Las siete palancas que mueven la aguja</h2>
          <p>Basándonos en la investigación GEO y en lo que hemos observado en nuestros propios datos de seguimiento, estas son las intervenciones que producen una mejora medible en la tasa de citación.</p>
          <p><strong>1. Contenido concreto y citable.</strong> Sustituye las afirmaciones genéricas de marca por hechos exactos y verificables. Tu página de &laquo;sobre nosotros&raquo; y las descripciones de servicios deberían parecerse más a una entrada de Wikipedia que a un folleto. &laquo;pmax es una agencia de marketing de rendimiento en Calvi&agrave;, Mallorca, fundada en 2023&raquo; es citable. &laquo;Ofrecemos resultados excepcionales para marcas ambiciosas&raquo;, no.</p>
          <p><strong>2. Estadísticas citadas.</strong> Respalda cada afirmación significativa con un número. No &laquo;la mayoría de anunciantes&raquo; &mdash; &laquo;el 13 % de las solicitudes de crawlers de IA son bloqueadas por reglas WAF por defecto.&raquo; Las estadísticas citadas mejoran las tasas de citación en un 25,9 % según la investigación KDD 2024. Utilízalas en todas tus páginas de mayor tráfico.</p>
          <p><strong>3. Contenido de preguntas frecuentes.</strong> Los motores de IA sintetizan con frecuencia contenido de preguntas y respuestas porque encaja directamente con cómo la gente les hace consultas. Cada página de servicio debería tener una sección de preguntas frecuentes estructurada que cubra las preguntas reales de tus compradores. Acompáñala con el schema FAQPage.</p>
          <p><strong>4. Acceso de crawlers de IA.</strong> Audita robots.txt y &mdash; más importante aún &mdash; la configuración de tu WAF. OAI-SearchBot, PerplexityBot, Claude-SearchBot, ChatGPT-User y Google-Extended no deben estar bloqueados. Un cliente que auditamos tenía los cinco bloqueados inadvertidamente por una regla de gestión de bots de Cloudflare. Los desbloqueamos; la visibilidad de citaciones mejoró en 30 días.</p>
          <p><strong>5. Consistencia de entidad.</strong> El nombre de marca, el año de fundación, el equipo, la ubicación y los servicios deben ser idénticos en todos los canales. La información contradictoria entre plataformas &mdash; distintos años de fundación, distintas descripciones de servicios &mdash; introduce riesgo de alucinaciones y reduce la confianza de los motores de IA en tus datos de entidad.</p>
          <p><strong>6. Cobertura de terceros.</strong> Una sola mención en una publicación del sector de referencia hace más por las tasas de citación que diez posts publicados por cuenta propia. Los motores de IA ponderan las fuentes en las que ya confían. Las relaciones públicas digitales, las apariciones en podcasts y los casos de estudio de clientes publicados conjuntamente construyen la corroboración de terceros que sustenta tasas de citación duraderas.</p>
          <p><strong>7. Canales propios fuera del sitio.</strong> YouTube, LinkedIn, Substack &mdash; el contenido de tus canales propios fuera de tu dominio principal es rastreado y citado de forma independiente. Los datos de citaciones off-site de CrunchJunkie muestran de qué canales extrae cada motor según el cluster temático, y dónde tienes huecos. Eso se traduce directamente en decisiones de inversión en contenido.</p>

          <div className="prose-callout" style={{ marginTop: 32 }}>
            <span className="prose-callout-kicker">Acumulativo, no inmediato</span>
            <p>Ninguna de estas palancas produce resultados inmediatos. Se acumulan a lo largo de meses. Nuestra propia trayectoria &mdash; desde cero seguimiento hasta una puntuación de auditoría GEO de 97/100 y 1.107 ejecuciones citadas en 30 días &mdash; requirió aproximadamente nueve meses de trabajo consistente en las siete dimensiones.</p>
          </div>

          <h2 id="geo-audit">Qué comprueba una auditoría GEO técnica</h2>
          <p>Una auditoría GEO es el diagnóstico estructurado para los factores de acceso y contenido mencionados. La que ejecutamos a través de nuestro <a href="/es/services/ai-visibility/">servicio de visibilidad en IA</a> cubre cinco categorías, cada una ponderada por el volumen de evidencia que respalda su impacto en las tasas de citación.</p>
          <p><strong>Acceso de crawlers de IA (30/100).</strong> ¿Pueden los bots de recuperación llegar a tus páginas clave? Revisión de robots.txt, auditoría de WAF y reglas de gestión de bots, y verificación de rastreo en vivo con los user-agents de OAI-SearchBot, PerplexityBot y Claude-SearchBot. La tasa de bloqueo del 13 % es real y suele ser la corrección de mayor impacto.</p>
          <p><strong>Accesibilidad del contenido (30/100).</strong> ¿Está el contenido crítico renderizado en servidor? El contenido dependiente de JavaScript suele ser invisible para los crawlers de IA que no ejecutan JS. Si las descripciones de tus servicios se cargan mediante un componente React que requiere renderizado en el navegador, puede que no estén en el DOM rastreable.</p>
          <p><strong>Datos estructurados (20/100).</strong> Calidad y cobertura de JSON-LD: Organisation o LocalBusiness, Service, FAQPage, Person para miembros del equipo con nombre. El schema ayuda a los motores de IA a resolver tu marca como una entidad definida con atributos consistentes.</p>
          <p><strong>Higiene técnica de SEO (15/100).</strong> Etiquetas canonical, actualidad del sitemap, longitudes de título y descripción. Trabajo de base que evita que problemas de rastreo socaven un contenido que por lo demás es sólido.</p>
          <p><strong>llms.txt (5/100).</strong> Ponderado deliberadamente en 5 de 100. Google confirmó en agosto de 2026 que Google Search ignora llms.txt. Aproximadamente el 97 % de los archivos llms.txt publicados reciben cero solicitudes de crawlers de IA. Vale la pena tenerlo; no es una prioridad. Nuestra puntuación de auditoría GEO de pmax.online es 97/100 &mdash; la banda &laquo;AI-ready&raquo; de CrunchJunkie.</p>

          <h2 id="how-to-track">Cómo rastrear tu propia visibilidad en IA</h2>
          <p>El seguimiento manual &mdash; ejecutar prompts tú mismo en ChatGPT, Perplexity, Claude y Gemini &mdash; es donde empieza cualquier programa de visibilidad en IA. La limitación es la varianza. Las respuestas de IA son no deterministas: ejecuta el mismo prompt dos veces y puedes obtener marcas distintas, un enfoque diferente, listas de citación distintas. Una sola consulta es un dato, no una tendencia.</p>
          <p>Para rastrear la visibilidad en IA con significado estadístico necesitas tres cosas.</p>
          <p><strong>Múltiples ejecuciones por prompt.</strong> Un mínimo de quince a veinte para producir una tasa de citación con un margen de error fiable. La diferencia entre &laquo;34,5 % &plusmn; 3,3 % basado en 2.591 ejecuciones&raquo; y &laquo;34,5 %&raquo; es la diferencia entre una medición y un número. El primero te dice si una caída de cuatro puntos es una señal real o ruido. El segundo no.</p>
          <p><strong>Cobertura en múltiples motores.</strong> Cada motor tiene un comportamiento de citación distinto. GPT-4o y Perplexity citan agresivamente a partir de contenido web rastreado. Google AI Mode se nutre en gran medida del índice de Google y del Knowledge Graph. Claude pondera las fuentes autoritativas de forma diferente. Rastrear solo ChatGPT te da una imagen parcial de un mercado fragmentado.</p>
          <p><strong>Datos de tendencia a lo largo del tiempo.</strong> Una auditoría puntual te dice dónde estás hoy. El seguimiento sistemático durante semanas y meses te dice si tus intervenciones están funcionando de verdad &mdash; y si un competidor está ganando terreno en los motores donde eres débil.</p>
          <p>Usamos <a href="https://crunchjunkie.io/" target="_blank" rel="noopener">CrunchJunkie</a> para este trabajo: los 35 prompts, los 10 motores, seguimiento continuo con informes de margen de error y benchmarking competitivo frente a rex4media y otros. Nuestro <a href="/es/services/ai-visibility/">servicio de visibilidad en IA</a> incluye configuración del seguimiento, una auditoría GEO completa y una cadencia de informes mensuales. Para saber qué buscar en una herramienta de seguimiento de visibilidad en IA antes de pagar por una, consulta nuestra guía para compradores de herramientas de seguimiento de visibilidad en IA.</p>

          <p>¿Quieres saber cómo aparece tu marca en la búsqueda con IA? <a href="/es/contact/?topic=ki-sichtbarkeit-ai-visibility">Cuéntanos tu situación</a> &mdash; te respondemos en menos de un día hábil. La primera conversación: 30 minutos, sin coste.</p>
        </>
      ),
    },
'meta-ads-agency-vs-in-house': {
      title: '¿Agencia de Meta Ads o in-house? Una comparación honesta.',
      deck: 'Retainer de agencia, contratación interna o freelancer &mdash; costes reales, benchmarks de ROAS y cuándo cada opción es la correcta.',
      toc: [
        'La pregunta agencia frente a in-house',
        'Lo que cuesta de verdad',
        'Cuándo gana el in-house',
        'Cuándo gana la agencia',
        'Un cambio real: Finca Es Pinar',
        'Qué preguntar antes de decidir',
      ],
      faqs: [
        {
          q: '¿Cuánto cuesta una agencia de Meta Ads en España o el Reino Unido?',
          a: 'Una agencia de Meta Ads en España cobra habitualmente entre 1.800 y 4.500 €/mes en retainer, cubriendo estrategia, gestión de campañas, dirección creativa e informes. Las agencias del Reino Unido trabajan en un rango similar en libras: 1.500–4.500 £/mes. Los modelos de porcentaje sobre inversión siguen existiendo, pero generan incentivos perversos: la agencia gana más cuando gastas más, independientemente de los resultados.',
        },
        {
          q: '¿Qué ROAS puedo esperar de Meta Ads para un negocio de hostelería?',
          a: 'Las campañas de hostelería bien estructuradas en Meta suelen conseguir un ROAS de entre 2,5× y 5×. El informe de benchmarks de Facebook Ads 2024 de WordStream sitúa el ROAS medio en todos los sectores en torno a 2,87×. La hostelería tiende a superar esa cifra cuando el creativo es sólido y las páginas de destino están optimizadas para conversión.',
        },
        {
          q: '¿Puedo gestionar Meta Ads yo mismo sin una agencia?',
          a: 'Sí — y para algunos negocios tiene sentido. Si la inversión mensual en publicidad está por debajo de 1.500 €, la economía de un retainer de agencia raramente sale a cuenta para ninguna de las partes. Ads Manager es accesible y Meta Blueprint ofrece formación de certificación gratuita. El límite honesto es el tiempo: gestionar bien una cuenta de Meta lleva entre 8 y 12 horas semanales — probando creatividades, controlando la frecuencia, ajustando audiencias y revisando la atribución.',
        },
        {
          q: '¿Cuánto tarda Meta Ads en dar resultados?',
          a: 'La mayoría de cuentas generan datos significativos en 2 a 4 semanas — suficiente para evaluar si el targeting y el creativo funcionan. Una imagen completa del ROAS, el coste por adquisición y la saturación de audiencias suele llevar de 6 a 12 semanas, especialmente en sectores con ciclos de decisión más largos como la hostelería o los servicios profesionales de alto valor. El algoritmo de Meta necesita aproximadamente 50 conversiones por grupo de anuncios por semana para salir de la fase de aprendizaje; por debajo de ese umbral, los resultados siguen siendo ruidosos.',
        },
        {
          q: '¿Cuál es el presupuesto mínimo para que valga la pena gestionar Meta Ads?',
          a: 'Por debajo de 500 €/mes en inversión publicitaria, el volumen de datos es demasiado bajo para ejecutar tests significativos. La mayoría de agencias — incluida la nuestra — fija un mínimo de 1.000 a 1.500 €/mes en inversión en medios antes de asumir una cuenta gestionada. Por debajo de ese nivel, las campañas autogestionadas o una sesión de consultoría puntual suelen ofrecer mejor valor que un retainer continuado.',
        },
      ],
      prose: (
        <>
          <p>No existe una respuesta universalmente correcta. Es lo más honesto que podemos decir de entrada. Las agencias ganan en algunas situaciones. Los equipos in-house, en otras. Y los freelancers son la opción correcta de verdad para ciertos alcances de trabajo.</p>
          <p>Lo que sí podemos darte: los números reales, los trade-offs reales y un caso de estudio de un hotel en Mallorca que cambió del in-house a pmax &mdash; para que tengas algo concreto con lo que comparar, no la opinión de una agencia disfrazada de framework.</p>

          <h2 id="in-house-vs-agency">La pregunta agencia frente a in-house</h2>
          <p>La mayoría de negocios con los que hablamos ya han tomado una decisión provisional antes de contactarnos. O están frustrados con una agencia o lo están con su propio equipo. Ambas pueden ser lecturas válidas de la situación &mdash; y ambas pueden ser un diagnóstico erróneo.</p>
          <p>El modelo de agencia agrupa experiencia, herramientas y continuidad en un retainer mensual. Pagas por un equipo que gestiona decenas de cuentas en distintos sectores, ejecuta tests a una escala que tu cuenta individual no puede sostener y detecta patrones antes que cualquier marca por su cuenta. El trade-off es la atención: un gestor de agencia competente de mercado medio suele llevar entre 15&ndash;20 clientes. Tu cuenta recibe una fracción de la semana de una persona.</p>
          <p>El modelo in-house te da atención plena, conocimiento profundo de la marca y alineación interna estrecha. El trade-off es la curva de aprendizaje, la dificultad de contratación y el coste total. Un especialista en Meta Ads con experiencia cobra entre 35.000 y 55.000 € brutos al año. Añade la Seguridad Social a cargo de la empresa, herramientas y formación &mdash; y estás en 45.000&ndash;75.000 € antes de que nadie haya abierto Ads Manager.</p>
          <p>El modelo freelance se sitúa entre ambos: menor coste continuado, experiencia específica, pero habitualmente menos continuidad y un alcance más limitado que una relación de agencia completa.</p>

          <h2 id="real-costs">Lo que cuesta de verdad</h2>
          <p>Según el informe de benchmarks de Facebook Ads 2024 de WordStream, el CPM medio en Meta en todos los sectores fue de 9,40 €, con una tasa de clics media del 0,9 % y un CPC de 1,12 €. Estos son costes de publicidad. Lo que pagas por encima en concepto de gestión varía mucho según el modelo.</p>

          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Opción</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Coste anual de gestión</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Tiempo de inicio</th>
                  <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Mejor para</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { option: 'Agencia', cost: '18.000–54.000 €/año', time: '2–4 semanas', suits: 'Inversión 1.500–25.000 €/mes' },
                  { option: 'Contratación interna', cost: '45.000–75.000 €/año all-in', time: '3–6 meses', suits: '>50.000 €/mes de inversión' },
                  { option: 'Freelancer', cost: '8.400–24.000 €/año', time: '1–2 semanas', suits: 'Sprints cortos, canal único' },
                  { option: 'Autogestión', cost: '0 + herramientas ~200 €/mes', time: 'Inmediato', suits: '<1.500 €/mes de inversión' },
                ].map(row => (
                  <tr key={row.option} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.option}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.cost}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.time}</td>
                    <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontSize: 12, color: '#949494' }}>{row.suits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>Estos son solo costes de gestión &mdash; la inversión publicitaria va aparte. La cifra de in-house incluye salario, costes de empresa y presupuesto para herramientas. Las tarifas freelance corresponden a un especialista de nivel medio; los profesionales senior cobran considerablemente más.</p>
          <p>&laquo;La mayoría de negocios descubre el coste real de una contratación interna solo después de doce meses&raquo;, dice Philipp Enders, fundador de pmax. &laquo;El proceso de selección, el onboarding, la curva de aprendizaje y luego la constatación de que una persona no puede cubrir simultáneamente el creativo, la estrategia, los analytics y la gestión de plataforma &mdash; ahí es cuando cambia la economía.&raquo;</p>

          <h2 id="when-in-house-wins">Cuándo gana el in-house</h2>
          <p>No tomes esto de una agencia sin cuestionarlo. El in-house es la opción correcta de verdad en situaciones concretas.</p>
          <p><strong>Inviertes más de 50.000 €/mes solo en Meta.</strong> A ese volumen, la atención parcial de la agencia se convierte en el cuello de botella. Un equipo in-house dedicado itera más rápido, hace briefings creativos en ciclos más cortos y retiene más contexto de cuenta que cualquier gestor que divide su semana entre 15 clientes.</p>
          <p><strong>Los datos de tu producto son muy propietarios.</strong> Si tus mejores ángulos creativos dependen de conversaciones reales con clientes, datos de compra o investigación interna que no puedes o no quieres compartir externamente, el in-house gana por defecto. Una agencia solo puede trabajar con lo que le das.</p>
          <p><strong>Estás en un vertical DTC o de moda con ciclos rápidos.</strong> Las marcas que lanzan tres colecciones por temporada y producen contenido nuevo semanalmente necesitan operaciones creativas al mismo ritmo. Esa integración es genuinamente más difícil de sostener en una relación de agencia.</p>
          <p>Una salvedad honesta: construir un equipo in-house competente lleva de 6&ndash;12 meses desde la decisión de contratar. Hasta entonces, estás aprendiendo con presupuesto real. Muchos negocios que lo intentan vuelven a una agencia durante los primeros doce meses de todas formas &mdash; un camino caro hacia el mismo destino.</p>

          <h2 id="when-agency-wins">Cuándo gana la agencia</h2>
          <p>Para la mayoría de negocios que invierten entre 1.500 y 25.000 €/mes en Meta, una agencia ofrece mejores resultados que las alternativas. La aritmética es directa: la experiencia disponible en un retainer &mdash; estructura de cuenta, estrategia creativa, arquitectura de audiencias, configuración de atribución &mdash; cuesta más contratar individualmente que el propio retainer.</p>
          <p>Las agencias también aportan reconocimiento de patrones entre cuentas. Gestionamos Meta junto con Google Ads, TikTok, LinkedIn y Pinterest para clientes de distintos sectores. Cuando algo cambia en el algoritmo o la dinámica de subastas de Meta, lo vemos en el portfolio antes que cualquier marca individual.</p>
          <p>Si gestionas varios canales de pago, el beneficio de coordinación se multiplica. Un <a href="/es/services/paid-social/">especialista en social de pago</a> que también conoce tu cuenta de Google Ads puede secuenciar mensajes entre canales y evitar canibalizar tu propio tráfico de búsqueda de pago &mdash; algo que los especialistas in-house paralelos rara vez consiguen en la práctica.</p>
          <p>Consulta nuestro <a href="/es/cases/">archivo de casos</a> para resultados concretos &mdash; cifras de ROAS, mejoras en el coste por lead y los cambios estructurales que los impulsaron.</p>

          <h2 id="finca-es-pinar">Un cambio real: Finca Es Pinar</h2>
          <p>Finca Es Pinar es un hotel rural boutique en Calvi&agrave;, Mallorca. Once habitaciones, una base sólida de clientes habituales y picos estacionales en mayo&ndash;junio y septiembre&ndash;octubre. Cuando llegaron a nosotros en el primer trimestre de 2026, llevaban 18 meses gestionando Meta Ads internamente &mdash; a cargo de una coordinadora de marketing a media jornada que también llevaba sus redes sociales y el newsletter.</p>
          <p>Las campañas estaban funcionando. Los resultados no eran buenos. Un ROAS de 2,1&times; con un presupuesto de 2.400 €/mes suponía aproximadamente 68 € por lead de reserva. Sus mejores meses de reserva directa seguían dependiendo del tráfico de OTAs para cubrir los huecos de ocupación.</p>
          <p>Los problemas eran estructurales, no de falta de esfuerzo. Las audiencias eran amplias y nunca se refrescaban. El creativo se reutilizaba de posts de Instagram en lugar de construirse para intención de conversión. La atribución contabilizaba doble las conversiones asistidas por OTAs a través de un píxel mal configurado. La cuenta no tenía rotación creativa sistemática, ni caps de frecuencia ni lógica de retargeting más allá de una audiencia genérica de &laquo;visitó el sitio web&raquo;.</p>

          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Indicador</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Antes</th>
                  <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Después (12 semanas)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Meta Ads ROAS', before: '2,1×', after: '4,3×' },
                  { metric: 'Coste por lead de reserva', before: '68 €', after: '31 €' },
                  { metric: 'Inversión mensual', before: '2.400 €', after: '2.400 €' },
                  { metric: 'Reservas directas', before: '22 %', after: '38 %' },
                  { metric: 'Variantes creativas activas', before: '3', after: '14' },
                ].map(row => (
                  <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.before}</td>
                    <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0', fontWeight: 700 }}>{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>El presupuesto no cambió. Lo que cambió: segmentación de audiencias por fuente de lead y geografía, creativo enfocado en conversión construido desde cero para el funnel de reservas, caps de frecuencia por etapa del funnel y una secuencia de retargeting que adaptaba el mensaje a la fase del journey de reserva del huésped. La atribución se corrigió usando la Conversions API de Meta conectada directamente al sistema de gestión de la propiedad.</p>
          <p>&laquo;Asumíamos que los anuncios funcionaban porque los números del dashboard parecían razonables&raquo;, nos dijo el director del hotel. &laquo;Resultó que el dashboard estaba equivocado. Una vez corregida la atribución, pudimos ver qué estaba impulsando de verdad las reservas &mdash; y no era lo que habíamos asumido.&raquo;</p>

          <h2 id="what-to-ask">Qué preguntar antes de decidir</h2>
          <p>Seis preguntas que merece la pena responder con honestidad antes de comprometerte con un modelo:</p>
          <ol>
            <li><strong>¿Cuál es tu inversión mensual en publicidad?</strong> Por debajo de 1.500 € &mdash; autogestión o freelancer. Entre 1.500 y 25.000 € &mdash; la economía de agencia funciona claramente. Por encima de 50.000 € &mdash; el in-house empieza a tener sentido.</li>
            <li><strong>¿Tienes alguien internamente que pueda hacer briefings creativos?</strong> La estrategia la aporta la agencia. El briefing creativo requiere conocimiento de marca que vive dentro del negocio. Sin un briefer interno capaz, la campaña mejor estructurada sigue teniendo anuncios mediocres.</li>
            <li><strong>¿Cómo está configurada tu atribución actual?</strong> Si no puedes responder si tu ROAS se mide en base view-through o click-through, tus cifras actuales pueden ser poco fiables. Corrige la atribución antes de juzgar el rendimiento de cualquier modelo.</li>
            <li><strong>¿Estás en más de un canal de pago?</strong> Meta por sí solo raramente es todo el panorama. Si también gestionas Google Ads &mdash; o estás considerando TikTok (consulta nuestra <a href="/es/blog/tiktok-ads-mallorca-tourism/">guía de TikTok Ads para turismo en Mallorca</a>) &mdash; una agencia multicanal gestiona la secuenciación y la asignación de presupuesto de forma más eficaz que especialistas paralelos trabajando en silos.</li>
            <li><strong>¿Cuánto te costaría una contratación errónea?</strong> Una mala contratación interna cuesta entre 6 y 12 meses de salario más honorarios de selección &mdash; habitualmente entre 40.000 y 70.000 € de riesgo. Inclúyelo honestamente en el cálculo.</li>
            <li><strong>¿Tu negocio es estacional?</strong> Los negocios de hostelería, turismo y eventos necesitan escalar y reducir la inversión rápidamente. Las agencias se adaptan con poca antelación. El headcount no.</li>
          </ol>

          <div className="prose-callout" style={{ marginTop: 32 }}>
            <span className="prose-callout-kicker">En resumen</span>
            <p>Para la mayoría de negocios que invierten entre 1.500 y 25.000 €/mes en Meta, una agencia ofrece mejores resultados que las alternativas &mdash; no porque las agencias sean intrínsecamente superiores, sino porque la experiencia disponible en un retainer cuesta más contratarla individualmente que el propio retainer. La economía solo cambia cuando la inversión publicitaria es suficientemente alta como para justificar un especialista dedicado y las operaciones creativas internas pueden seguir el ritmo.</p>
          </div>

          <p>Nuestro <a href="/es/services/paid-social/">servicio de social de pago</a> cubre Meta, LinkedIn, TikTok y Pinterest &mdash; gestionados conjuntamente o por separado según tu situación. <a href="/es/contact/?topic=meta-ads-agency-vs-in-house">Cuéntanos tu situación</a> &mdash; te respondemos en menos de un día hábil. La primera conversación: 30 minutos, sin coste.
          </p>
        </>
      ),
    },
    'ai-visibility-tracking-tools-2026': {
      toc: [
        'El problema del medidor que ningún proveedor anuncia',
        'Lo que BYOK cambia en la práctica',
        'Por qué los porcentajes de visibilidad mienten sin tamaños de muestra',
        'Una métrica que ninguna otra herramienta rastrea: Follow-up Survival',
        'Auditorías GEO: por qué importa la base de evidencias',
        'Citas off-site propias',
        'Cuándo CrunchJunkie no es la opción correcta',
        'El resumen honesto',
      ],
      faqs: [
        {
          q: '¿Qué es BYOK en el seguimiento de visibilidad en IA?',
          a: 'BYOK significa Bring Your Own Key (trae tu propia clave). En lugar de envolver llamadas a la API en una cuota de prompts y cobrar una tarifa fija con margen, el modelo BYOK te permite conectar tus propias claves de API directamente a los proveedores de modelos (OpenAI, Google, Anthropic, etc.). Tú pagas a los proveedores a precio de coste; la plataforma cobra una suscripción basada en otra variable — en el caso de CrunchJunkie, el número de marcas que rastreas. La consecuencia práctica: sin límite de prompts y costes transparentes.',
        },
        {
          q: '¿Qué es Follow-up Survival en la búsqueda con IA?',
          a: 'Follow-up Survival es una métrica de visibilidad en IA multiturn que mide si una recomendación de marca se mantiene cuando un comprador acota su búsqueda en la misma conversación. El seguimiento estándar registra si una marca apareció en respuesta a un prompt amplio de descubrimiento (turno 1). Follow-up Survival envía una pregunta de seguimiento más concreta y configurada en la misma conversación (turno 2) y mide qué marcas sobreviven al refinamiento. CrunchJunkie es la única herramienta de visibilidad en IA que convierte esta métrica en un producto.',
        },
        {
          q: '¿Cuántos motores de IA rastrea CrunchJunkie?',
          a: 'CrunchJunkie rastrea diez motores de IA: ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews, Google AI Mode, Microsoft Copilot, Grok, Meta AI y DeepSeek. Los diez están incluidos en todos los planes — sin complementos por motor ni acceso escalonado.',
        },
        {
          q: '¿Qué comprueba una auditoría GEO?',
          a: 'Una auditoría GEO evalúa cuán preparada está una web para ser rastreada y citada por motores de búsqueda con IA. La auditoría de CrunchJunkie cubre cinco categorías: acceso de crawlers (si los bots de IA pueden llegar a tus páginas), accesibilidad del contenido (si el contenido está renderizado en servidor y estructurado para su extracción), datos estructurados (calidad y amplitud del JSON-LD), higiene técnica de SEO (canonical, sitemap, longitudes de título y descripción) y llms.txt (el formato de archivo emergente para la guía de crawlers de IA). A cada comprobación se le asigna una base de evidencias — investigación, documentado, convención o heurística — que determina cuánto pesa en la puntuación compuesta de 0 a 100.',
        },
        {
          q: '¿Qué herramientas de visibilidad en IA son más baratas para rastrear varias marcas?',
          a: 'Con una configuración de 50 prompts por marca, 5 motores y escaneo semanal, CrunchJunkie es la opción más barata que escala con varias marcas. A 5 marcas, el coste anual es de aproximadamente $2.873 (tarifa de plataforma más costes de API BYOK) frente a $3.229 de LLM Pulse, $4.884 de OtterlyAI y $9.636 de Peec AI. LLM Pulse es más barato en una sola marca (~$529/año frente a ~$601 de CrunchJunkie), pero impone límites de prompts y trata varios motores como complementos de pago. Precios verificados en agosto de 2026.',
        },
      ],
      prose: (
        <>
          <p>El mercado de herramientas de visibilidad en IA tiene un problema concreto: avanza lo suficientemente rápido como para que la mayoría de los compradores todavía no sepan qué preguntas hacer. Los proveedores lo saben, y algunos lo están aprovechando.</p>
          <p>He pasado los últimos meses probando estas plataformas &mdash; no viendo demos, sino ejecutándolas de verdad en cuentas de clientes, comprobando si los números cuadran y haciendo las preguntas que no salen en las llamadas de ventas. Esto es lo que he encontrado.</p>

          <h2 id="metering-problem">El problema del medidor que ningún proveedor anuncia</h2>
          <p>Antes de comparar funcionalidades, entiende cómo te cobra cada herramienta. El modelo de precios determina lo que puedes permitirte rastrear &mdash; y eso determina lo que sabes realmente sobre tu presencia en la búsqueda con IA.</p>
          <p>Tres modelos dominan el mercado.</p>
          <p><strong>Facturación basada en prompts.</strong> Compras un pool de prompts. 50 en el nivel de entrada, quizás 150 en el siguiente, 350 si estás dispuesto a pagar. Cada consulta que quieres monitorizar consume un prompt. ¿Quieres rastrear más preguntas del journey de compra? Más prompts. ¿Quieres actualizar la lista cuando cambia el comportamiento de búsqueda con IA? Estás gastando del mismo pool.</p>
          <p>La consecuencia práctica es que empiezas a racionar tu propio seguimiento. Eliges 50 prompts y esperas que sean los correctos. Te saltas las búsquedas long-tail. No actualizas la lista cuando algo cambia en el mercado. Al final tienes un dashboard ordenado que refleja lo que te podías permitir rastrear &mdash; no lo que está pasando de verdad.</p>
          <p><strong>Facturación basada en motores.</strong> Muchas herramientas incluyen 3&ndash;4 motores de IA en el plan base y cobran por el resto. Claude suele costar extra. Gemini puede estar limitado. Copilot a veces no está disponible en los planes estándar.</p>
          <p>OtterlyAI cobra $29&ndash;$439 adicionales al mes por el seguimiento de Claude, según el plan. Peec AI te da tres de sus seis motores compatibles por plan &mdash; cada motor adicional cuesta $30&ndash;$140 extra al mes por encima. Así que cuando ves un precio base, tienes que hacer los cálculos de los motores antes de aceptarlo.</p>
          <p><strong>Facturación por dominio o marca.</strong> El AI Visibility Toolkit de Semrush cobra $99 por dominio al mes. Transparente y predecible con una marca; brutal cuando lo multiplicas por una lista de clientes de agencia.</p>

          <h2 id="byok">Lo que BYOK cambia en la práctica</h2>
          <p>CrunchJunkie tiene un enfoque distinto para toda la cuestión de los precios. En lugar de envolver las llamadas a la API en una cuota de prompts y cobrar una tarifa fija con margen, te permite conectar tus propias claves de API. Tus consultas van directamente a OpenAI, Google, Anthropic y los demás proveedores &mdash; tú les pagas a precio de coste. La plataforma cobra una suscripción en función del número de marcas que rastreas, no de los prompts que ejecutas.</p>
          <p>El resultado: sin límite de prompts. Los diez motores &mdash; ChatGPT, Gemini, <a href="/es/blog/perplexity-visibility/">Perplexity</a>, Claude, Google AI Overviews, Google AI Mode, Microsoft Copilot, Grok, Meta AI y DeepSeek &mdash; están incluidos en todos los planes desde el nivel más bajo. Sin complementos por motor.</p>
          <p>Eso cambia la estructura de incentivos de forma concreta. Con un límite de prompts, tienes razones para rastrear menos consultas de las que deberías. Con BYOK y sin límite, rastreas lo que realmente es útil.</p>
          <p>Así quedan los costes anuales con una configuración consistente &mdash; 50 prompts por marca, 5 motores, escaneo semanal, facturación anual &mdash; en las herramientas con precios públicos disponibles:</p>

          <div style={{ overflowX: 'auto', margin: '24px 0 8px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>Herramienta</th>
                  <th style={{ textAlign: 'left', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>Facturación</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>1 marca / año</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>5 marcas / año</th>
                  <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>10 marcas / año</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tool: 'CrunchJunkie', href: 'https://crunchjunkie.io/pricing', meter: 'solo marcas', one: '$601', five: '$2,873', ten: '$6,105', highlight: true },
                  { tool: 'LLM Pulse', href: 'https://llmpulse.ai/pricing', meter: 'prompts + proyecto', one: '$529', five: '$3,229', ten: '$7,763', highlight: false },
                  { tool: 'Peec AI', href: 'https://peec.ai/pricing', meter: 'prompts + motor', one: '$1,932', five: '$9,636', ten: '—', highlight: false },
                  { tool: 'Semrush', href: 'https://www.semrush.com/prices/', meter: 'dominio', one: '$1,908 +sus.', five: '$9,540 +sus.', ten: '$19,080 +sus.', highlight: false },
                  { tool: 'OtterlyAI', href: 'https://otterly.ai/pricing', meter: 'prompts + motor', one: '$2,508', five: '$4,884', ten: '$7,260', highlight: false },
                  { tool: 'Scrunch *', href: 'https://scrunch.com', meter: 'espacio de marca', one: '~$3,000', five: '—', ten: '—', highlight: false },
                  { tool: 'Evertune', href: 'https://www.evertune.ai', meter: 'tarifa plana (vol.)', one: '$9,600', five: '$9,600', ten: '$9,600', highlight: false },
                  { tool: 'Ahrefs †', href: 'https://ahrefs.com/pricing', meter: 'base + complemento', one: '$9,936 +sus.', five: '$9,936 +sus.', ten: '$9,936 +sus.', highlight: false },
                  { tool: 'GEOly ‡', href: 'https://www.geoly.ai', meter: 'nivel + acceso motor', one: '$11,988', five: '$11,988', ten: '—', highlight: false },
                ].map(({ tool, href, meter, one, five, ten, highlight }) => (
                  <tr key={tool} style={{ borderBottom: '1px solid #1e1e1e' }}>
                    <td style={{ padding: '10px 16px 10px 0', fontWeight: highlight ? 600 : 400, color: highlight ? '#f6f4ef' : '#b4b4b4', whiteSpace: 'nowrap' }}><a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{tool}</a></td>
                    <td style={{ padding: '10px 16px', fontSize: 12, color: '#6a6a6a', whiteSpace: 'nowrap' }}>{meter}</td>
                    <td style={{ textAlign: 'right', padding: '10px 16px', fontFamily: 'var(--font-mono)', fontSize: 12, color: highlight ? '#3cffd0' : '#b4b4b4', whiteSpace: 'nowrap' }}>{one}</td>
                    <td style={{ textAlign: 'right', padding: '10px 16px', fontFamily: 'var(--font-mono)', fontSize: 12, color: highlight ? '#3cffd0' : '#b4b4b4', whiteSpace: 'nowrap' }}>{five}</td>
                    <td style={{ textAlign: 'right', padding: '10px 0 10px 16px', fontFamily: 'var(--font-mono)', fontSize: 12, color: highlight ? '#3cffd0' : '#b4b4b4', whiteSpace: 'nowrap' }}>{ten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ fontSize: 12, color: '#949494', lineHeight: 1.75, marginBottom: 24, borderTop: '1px solid #2d2d2d', paddingTop: 16 }}>
            <p style={{ margin: '0 0 8px', color: '#b4b4b4', fontWeight: 500 }}>Cómo leer esta tabla</p>
            <p style={{ margin: '0 0 6px' }}>Cada herramienta está valorada con la misma configuración para que los números sean directamente comparables: <strong style={{ color: '#f6f4ef' }}>50 prompts por marca, 5 motores de IA, escaneo semanal, facturación anual</strong>. Solo se muestra el coste del plan para esa configuración exacta &mdash; sin elegir el nivel más barato que no cubriría la carga de trabajo.</p>
            <p style={{ margin: '0 0 6px' }}>La cifra de CrunchJunkie es la suscripción de la plataforma <em>más</em> los costes estimados de API BYOK (lo que pagas directamente a OpenAI, Google, Anthropic, etc.). La estimación es conservadora &mdash; el coste real de la API a 50 prompts/semana suele ser menor, y puedes ver exactamente lo que gastas porque pagas a los proveedores directamente a precio de coste, sin margen.</p>
            <p style={{ margin: '0 0 12px' }}>Un guión (&mdash;) significa que ningún plan de autoservicio cubre esa configuración &mdash; necesitarías una cotización enterprise a medida.</p>
            <p style={{ margin: '0 0 4px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.5px' }}>* Los precios de Scrunch cambian con frecuencia; la cifra es de agosto de 2026 &mdash; verifica en scrunch.com antes de citarla.</p>
            <p style={{ margin: '0 0 4px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.5px' }}>&dagger; Ahrefs: plan base ($129/mes) + complemento Brand Radar con todos los motores ($699/mes). La cuota de prompts Brand Radar incluida solo cubre 5&ndash;20 prompts &mdash; el complemento es necesario para rastrear 50 o más.</p>
            <p style={{ margin: '0 0 4px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.5px' }}>&Dagger; GEOly: la cobertura de 5 motores requiere el nivel de $999/mes; máx. 5 marcas. La configuración de 10 marcas no está disponible en planes de autoservicio.</p>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.5px' }}>Precios de la competencia verificados en páginas de precios públicas cuando era posible; de fuentes secundarias en caso contrario. Los precios cambian con frecuencia &mdash; verifica antes de comprometerte.</p>
          </div>

          <p>Un aviso honesto que esta tabla no debería ocultar: <strong>LLM Pulse es más barato con una sola marca</strong> (&sim;$529/año frente a &sim;$601 de CrunchJunkie). Si gestionas un programa pequeño, no necesitas cobertura multi-motor y puedes vivir con un límite de prompts, merece la pena evaluarlo junto a CrunchJunkie. LLM Pulse sí aplica límites de prompts y trata Copilot y Claude como complementos de pago &mdash; pero con una marca, pocos prompts y algunos motores, esas limitaciones puede que no sean un problema.</p>
          <p>El cálculo cambia a partir de cinco marcas. A diez marcas, Peec AI ni siquiera puede cotizar la configuración sin una llamada enterprise a medida. Semrush supera los $19.000 al año antes de añadir la suscripción base obligatoria.</p>
          <p>Planes de CrunchJunkie (EUR, facturación anual): <strong>Solo &euro;9/mes</strong> (1 marca) &middot; <strong>Starter &euro;39/mes</strong> (5 marcas) &middot; <strong>Pro &euro;99/mes</strong> (20 marcas) &middot; <strong>Agency &euro;149/mes</strong> (40 marcas), más tus costes de API BYOK.</p>

          <h2 id="sample-sizes">Por qué los porcentajes de visibilidad mienten sin tamaños de muestra</h2>
          <p>El problema con los motores de respuesta con IA que la mayoría de dashboards de visibilidad pasan por alto en silencio: no son deterministas.</p>
          <p>Ejecuta el mismo prompt dos veces en ChatGPT, con la misma cuenta, con cinco minutos de diferencia. Puedes obtener marcas distintas en la respuesta, un enfoque diferente, listas de fuentes distintas. <a href="https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/" target="_blank" rel="noopener noreferrer">Un estudio de SparkToro</a> encontró menos de un 1&thinsp;% de coincidencia entre ChatGPT y Google AI dando la misma lista de marcas en dos respuestas separadas a la misma consulta.</p>
          <p>Esto no es un caso extremo. Así funcionan estos sistemas &mdash; muestrean distribuciones de probabilidad, se actualizan continuamente, personalizan según el contexto. Cada cifra de visibilidad en IA que ves está basada en una muestra de respuestas, no en un censo exhaustivo.</p>
          <p>Así que cuando una herramienta te muestra &laquo;34&thinsp;% de visibilidad&raquo;, ¿qué significa exactamente? ¿Ejecutaron el prompt una vez? ¿Tres veces? ¿Veinte? ¿Es el 34&thinsp;% una lectura estable con un margen de error estrecho, o un dato puntual que podría haber salido en cualquier punto entre el 10&thinsp;% y el 60&thinsp;%?</p>
          <p>La mayoría de herramientas no te lo dicen. Te muestran el número.</p>
          <p>CrunchJunkie ejecuta cada prompt varias veces e informa del tamaño de muestra y el margen de error junto a cada cifra de visibilidad. La posición del producto en este punto es explícita: una sola respuesta de IA es una muestra, no una tendencia. Cada cambio de métrica se evalúa frente a su margen de error antes de que se registre como un movimiento sobre el que actuar.</p>
          <p>Esto importa sobre todo para las agencias. Cuando informas a un cliente sobre su visibilidad en IA y el número baja cuatro puntos, necesitas saber si eso es una señal real o ruido. Sin tamaño de muestra y márgenes de error, le estás mostrando a un cliente un gráfico que puede no significar nada. Con ellos, puedes decir con confianza si algo se ha movido de verdad.</p>

          <h2 id="follow-up-survival">Una métrica que ninguna otra herramienta rastrea: Follow-up Survival</h2>
          <p>Piensa en cómo usan realmente la IA las personas para tomar decisiones comerciales.</p>
          <p>Alguien le pregunta a ChatGPT: <em>&laquo;¿Cuáles son las mejores herramientas de gestión de proyectos para equipos distribuidos?&raquo;</em> Tu marca aparece. Visibilidad: registrada. Victoria.</p>
          <p>Pero la conversación continúa. La pregunta de seguimiento: <em>&laquo;¿Cuál de esas es mejor para un equipo de menos de quince personas que no quiere pagar por usuario?&raquo;</em></p>
          <p>Tu marca desaparece.</p>
          <p>Ganaste la consulta amplia de descubrimiento y perdiste en el momento en que se aplicó una restricción real. El dashboard de visibilidad estándar nunca lo captó &mdash; midió el turno&nbsp;1 y paró.</p>
          <p>CrunchJunkie llama a esto <strong>Follow-up Survival</strong>: una métrica multiturn que mide si una recomendación se mantiene cuando un comprador acota su pregunta dentro de la misma conversación. La plataforma ejecuta el prompt de descubrimiento, registra qué marcas aparecen (turno&nbsp;1), envía una pregunta de seguimiento configurada en la misma conversación (turno&nbsp;2) y mide qué marcas sobreviven al refinamiento.</p>
          <p>Ninguna otra herramienta de la categoría convierte esto en un producto. Está disponible como funcionalidad piloto opcional en los planes de pago y cuesta aproximadamente el doble por prompt &mdash; porque requiere dos turnos de conversación en lugar de uno.</p>
          <p>Un detalle de diseño que importa: la pregunta de seguimiento se configura por prompt, no se aplica genéricamente. Un acotador que tiene sentido después de &laquo;mejores herramientas de gestión de proyectos para equipos distribuidos&raquo; no tiene sentido después de &laquo;mejores cafeteras espresso por menos de 200&thinsp;&euro;&raquo;. CrunchJunkie requiere una pregunta de seguimiento por prompt, ofrece una sugerencia redactada por IA que puedes revisar y editar, y registra el texto exacto utilizado en cada ejecución como evidencia &mdash; para que sepas exactamente qué se preguntó y puedas comparar resultados a lo largo del tiempo porque la pregunta se mantiene consistente.</p>
          <p>Si tus compradores investigan usando conversaciones de IA de varios turnos &mdash; y los compradores B2B lo hacen cada vez más &mdash; sobrevivir al turno&nbsp;2 es más predictivo comercialmente que la visibilidad en el turno&nbsp;1.</p>

          <h2 id="geo-audits">Auditorías GEO: por qué importa la base de evidencias</h2>
          <p>Cada herramienta de visibilidad en IA incluye algo llamado <a href="/es/blog/what-is-a-geo-audit/">auditoría GEO</a> &mdash; un diagnóstico de cuán preparada está tu web para ser rastreada y citada por motores de IA. La calidad de estas auditorías varía enormemente, por una razón que no es obvia hasta que profundizas.</p>
          <p>La verdad honesta sobre la optimización para búsqueda con IA es que todavía no tenemos décadas de evidencia controlada. Tenemos algo de investigación revisada por pares, documentación publicada por los proveedores de crawlers y mucha lógica de &laquo;esto parece que podría ayudar&raquo; que nadie ha medido realmente. Las herramientas de auditoría buenas son explícitas sobre en qué categoría cae cada una de sus comprobaciones. Las malas, no.</p>
          <p>CrunchJunkie estructura su auditoría en torno a una escalera formal de evidencias:</p>
          <ul>
            <li><strong>Research</strong> &mdash; respaldado por medición revisada por pares de efectos en tasas de citación</li>
            <li><strong>Documented</strong> &mdash; comportamiento de plataforma publicado por los propios proveedores de crawlers</li>
            <li><strong>Convention</strong> &mdash; práctica emergente, aún no demostrada como consumida por motores de IA</li>
            <li><strong>Heuristic</strong> &mdash; proxy razonable, sin evidencia directa</li>
          </ul>
          <p>El peso de cada comprobación en la puntuación compuesta escala con su nivel de evidencia. Las heurísticas no pueden dominar una categoría. Las comprobaciones de base Convention tienen menor peso por diseño.</p>
          <p>Un ejemplo concreto: llms.txt. Ha generado mucho hype. CrunchJunkie le da un peso de 5 sobre 100 en la puntuación de auditoría compuesta &mdash; deliberadamente bajo. Su revisión de investigación trimestral encontró que aproximadamente el 97&thinsp;% de los archivos llms.txt publicados reciben cero solicitudes de crawlers, y Claude Code es el único lector real confirmado del estándar a escala. <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">La propia guía de Google</a>, actualizada en agosto de 2026, establece explícitamente que Google Search ignora llms.txt.</p>
          <p>Una herramienta de auditoría que puntúa llms.txt con 15 o 20 puntos te está diciendo que importa más de lo que la evidencia respalda. Eso infla tu puntuación por hacer algo que probablemente aún no te ayuda, y entierra las comprobaciones que realmente importan.</p>
          <p>En el lado del contenido, las comprobaciones con peso real están respaldadas por el <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer">estudio KDD&nbsp;2024 &laquo;GEO: Generative Engine Optimization&raquo;</a> (Aggarwal et al., Princeton/IIT Delhi), que midió efectos reales en tasas de citación. Las citas en el contenido mejoraron las tasas de citación en un 27,8&thinsp;%. Estadísticas citadas: +25,9&thinsp;%. Citas externas autorizadas: +24,9&thinsp;%.</p>
          <p>La auditoría cubre cinco categorías &mdash; acceso de crawlers (peso 30), accesibilidad del contenido (30), datos estructurados (20), higiene técnica de SEO (15) y llms.txt (5) &mdash; y produce una puntuación compuesta de 0 a 100. Diagnóstica, no una garantía, y honesta sobre lo que no sabe.</p>

          <h2 id="off-site-citations">Citas off-site propias</h2>
          <p>Cuando un motor de IA cita tu marca, a menudo extrae de contenido que vive fuera de tu dominio principal: un canal de YouTube, una página de empresa en LinkedIn, un post de Substack, un hilo de Reddit en el que participas.</p>
          <p>Las herramientas de &laquo;brand radar&raquo; del SEO tradicional gestionan esto mediante coincidencia de índice web &mdash; rastrean la web abierta y buscan tu nombre de marca. Es una cobertura amplia pero ruidosa: te acredita menciones que no controlas, contenido que otros han escrito sobre ti y confusiones de nombre de marca.</p>
          <p>El seguimiento de citas off-site de CrunchJunkie funciona al revés. Tú declaras tus canales propios &mdash; <code>youtube.com/@tumarca</code>, <code>linkedin.com/company/tumarca</code>, tu Substack, tu handle de Medium. La plataforma solo atribuye una cita a tu marca si está en una URL que coincide con un canal que declaraste, con coincidencia precisa de handle. Un vídeo de YouTube de otro creador con tu nombre de marca en el título no cuenta.</p>
          <p>La consecuencia es una vista mucho más accionable. Ves exactamente qué canales propios usan los motores de IA, para qué temas, y dónde tienes huecos. Eso se traduce directamente en decisiones de inversión en contenido: no &laquo;crea una presencia en LinkedIn&raquo; (quizás ya la tienes y está funcionando), sino &laquo;refuerza tu cobertura en YouTube en este cluster de temas concreto&raquo;.</p>

          <h2 id="cj-limits">Cuándo CrunchJunkie no es la opción correcta</h2>
          <p>Una guía de herramientas que no diga esto es un discurso de ventas.</p>
          <p><strong>Con una sola marca y presupuesto ajustado:</strong> LLM Pulse es más barato que CrunchJunkie a nivel de marca única. Si gestionas un programa pequeño, no necesitas cobertura multi-motor y puedes vivir con un límite de prompts, merece la pena evaluarlo junto a CrunchJunkie.</p>
          <p><strong>Si necesitas SEO y visibilidad en IA en una sola plataforma:</strong> El AI Visibility Toolkit de Semrush está dentro de una suite completa de SEO &mdash; investigación de palabras clave, análisis de backlinks, seguimiento de posiciones, auditorías de sitio. Si tu equipo ya vive en Semrush y quieres visibilidad en IA sin gestionar una herramienta aparte, esa integración tiene valor real incluso al precio más alto por dominio. CrunchJunkie no hace seguimiento de posiciones tradicional. Está diseñado específicamente para la visibilidad en IA.</p>
          <p><strong>Si quieres todo completamente gestionado:</strong> El modelo BYOK requiere configurar claves de API con los proveedores individuales. Para equipos que prefieren una opción completamente gestionada, CrunchJunkie también la ofrece, pero la ventaja de precio es mayor con BYOK.</p>

          <h2 id="summary">El resumen honesto</h2>
          <p>La mayoría de herramientas de visibilidad en IA en 2026 se construyeron para el caso de una sola marca y están adaptando torpemente sus precios y arquitectura para el uso multi-marca. El acceso por niveles a los motores y los límites de prompts son la forma en que gestionan los costes que no pueden trasladarte de forma transparente.</p>
          <p>CrunchJunkie se construyó con el seguimiento multi-marca como caso de primer nivel. BYOK significa que tus costes escalan de forma lineal y transparente con el uso real. Sin racionamiento de prompts, sin complementos de motores, sin barrera de &laquo;contacta con ventas&raquo; a partir de cinco clientes.</p>
          <p>Lo que lo diferencia en la práctica tiene menos que ver con listas de funcionalidades y más con honestidad intelectual: Follow-up Survival porque la persistencia de una recomendación bajo refinamiento importa más comercialmente que la visibilidad titular; tamaños de muestra y márgenes de error porque las respuestas de IA son volátiles; una auditoría basada en evidencias porque no todo lo que los proveedores llaman &laquo;señal GEO&raquo; se ha medido realmente.</p>
          <p>Esas son las cosas que determinan si puedes construir una práctica de reporting sobre ella &mdash; y si lo que le muestras a los clientes significa algo.</p>
          <p style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6a6a6a' }}>Precios verificados en agosto de 2026 a partir de páginas de precios públicas y, en el caso de CrunchJunkie, directamente desde el código de producción. Precios de la competencia verificados en páginas de precios públicas cuando era accesible; de fuentes secundarias en caso contrario. Los precios en esta categoría cambian con frecuencia &mdash; verifica antes de comprometerte.</p>
          <p>¿Quieres saber cómo aparece tu marca en la búsqueda con IA? <a href="/es/contact/?topic=geo-audit">Cuéntanos tu situación</a> &mdash; te respondemos en menos de un día hábil. La primera conversación: 30 minutos, sin coste.</p>
          <p>Más sobre el tema: <a href="/es/blog/what-is-a-geo-audit/">¿Qué es una auditoría GEO?</a> &middot; <a href="/es/blog/perplexity-visibility/">Visibilidad en Perplexity</a> &middot; <a href="/es/services/ai-visibility/">Nuestro servicio de visibilidad en IA</a></p>
        </>
      ),
    },
    'google-ads-ai-disclosure-label': {
      title: 'El aviso de IA en Google Ads — causas y respuesta',
      toc: ['El aviso en la práctica', 'Cómo lo desencadenó Performance Max', 'Tres rutas hacia el aviso', 'La pregunta del CTR', 'Qué hacer en tu cuenta ahora', 'Preguntas frecuentes'],
      faqs: [
        {
          q: '¿Qué es el aviso "Divulgación de IA: anuncio creado o editado con IA" de Google Ads?',
          a: 'Una divulgación que Google añade a los anuncios donde la IA participó en la creación o edición del contenido. Desde el 9 de julio de 2026 aparece bajo la descripción del anuncio en Google Búsqueda, YouTube y Discover, visible sin ninguna interacción. El lanzamiento sigue al Artículo 50 del Reglamento de IA de la UE sobre transparencia en contenidos generados por IA, en vigor desde el 2 de agosto de 2026.',
        },
        {
          q: '¿Performance Max activa el aviso de divulgación de IA automáticamente?',
          a: 'Sí, en la mayoría de configuraciones estándar. Si tienes activados los "activos creados automáticamente" o usas AI Max for Search, la propia IA de Google genera variantes de anuncios que activan el aviso sin que hagas nada. El aviso en sí no se puede desactivar — solo el mecanismo de generación de activos que lo causa.',
        },
        {
          q: '¿Puedo desactivar el aviso de IA de Google Ads?',
          a: 'No directamente. Desactivar los activos creados automáticamente y evitar el uso de herramientas de IA para el contenido de los anuncios elimina el mecanismo que desencadena el aviso — pero no existe ningún ajuste que suprima el aviso mientras se siguen sirviendo contenidos generados por IA. Eliminar el contenido de IA es la única salida real.',
        },
        {
          q: '¿Afecta el aviso de IA al porcentaje de clics?',
          a: 'Todavía no hay datos estadísticamente significativos. La colocación visible parece estar en fase de prueba y el aviso es demasiado reciente para sacar conclusiones. El área más importante a vigilar son los sectores con alta necesidad de confianza — salud, finanzas, asesoría legal — donde "creado con IA" podría funcionar como señal de fricción. El paso práctico: segmentar el CTR por tipo de campaña y periodo desde la fecha en que el aviso apareció en tus SERPs.',
        },
        {
          q: '¿Cuál es la diferencia entre la divulgación automática y la autodeclarada en Google Ads?',
          a: 'La divulgación automática la aplica Google cuando sus propias herramientas de IA — activos creados automáticamente, generación de activos de Performance Max, AI Max for Search — han intervenido en tu contenido. La autodeclarada es un nuevo ajuste de cuenta para anunciantes que han usado herramientas de IA externas (ChatGPT, Claude, generadores de imagen) y subido los resultados a Google Ads. Google ha declarado que no verificará las autodeclaraciones.',
        },
      ],
      prose: (
        <>
          <p>Una búsqueda de <em>rezept online einlösen</em> &mdash; &ldquo;canjear receta por internet&rdquo; en alemán &mdash; la semana pasada. Dos resultados patrocinados. Dos farmacias online. Las dos con una línea que no existía hace un mes: <strong>&ldquo;Divulgación de IA: anuncio creado o editado con IA.&rdquo;</strong> No detrás del menú de tres puntos. Entre la descripción del anuncio y la valoración de estrellas, a la vista de cualquiera que esté decidiendo dónde canjear su receta.</p>
          <p>DoktorABC. Shop Apotheke. Entre las dos: más de 1,2 millones de valoraciones, ambas por encima de 4,7 estrellas. Y las dos con el sello público de &ldquo;creado con IA&rdquo; &mdash; precisamente en un sector donde cada señal de confianza que un anunciante ha construido durante años convive ahora con una frase sobre cómo se escribió el anuncio.</p>
          <p>Lo interesante no es que esas farmacias hayan hecho algo inusual. Lo interesante es que casi con toda seguridad no lo han hecho &mdash; al menos, no conscientemente. Están haciendo lo que Google lleva dos años recomendando: activar Performance Max, habilitar la generación de activos y dejar que el algoritmo optimice. No decidieron poner el aviso de IA en sus anuncios. Lo hizo Performance Max.</p>

          <h2>El aviso en la práctica</h2>
          <p>Google lanzó oficialmente el aviso de IA el 9 de julio de 2026, en Búsqueda, YouTube y Discover. El anuncio inicial sonaba bastante discreto: una nueva entrada en el panel de detalles del anuncio, visible para los usuarios que tocan el menú de tres puntos.</p>
          <p>Lo que muestra la captura de arriba va un paso más lejos: el aviso aparece directamente en el anuncio, sin ninguna interacción. Es más visible que lo anunciado en julio &mdash; y encaja exactamente con el tipo de experimento de posicionamiento que Google suele hacer antes de una implantación más amplia. Quien lo ve así hoy sabe a dónde va esto.</p>
          <p>El contexto regulatorio es directo. El Artículo 50 del Reglamento de IA de la UE &mdash; que exige transparencia en los contenidos generados por IA &mdash; entró en vigor el 2 de agosto de 2026. Tres semanas después aparecen avisos de IA bien visibles en las SERPs europeas. Google no suele esperar a la ejecución formal para moverse en materia de cumplimiento con la UE.</p>

          <h2>Cómo lo desencadenó Performance Max</h2>
          <p>La mayoría de los comentarios sobre este tema tratan la divulgación de IA como algo que los anunciantes eligieron al decidirse por herramientas de IA. Para la mayoría de las cuentas grandes de Google Ads, la descripción más precisa es: eligieron Performance Max, y Performance Max eligió la IA.</p>
          <p>La cadena de generación de activos funciona así: entregas titulares, descripciones, imágenes y una URL. Google los usa para construir combinaciones de anuncios. Lo que muchos no han notado es que Google también genera <em>activos adicionales</em> &mdash; variantes de titulares, formulaciones distintas de descripción &mdash; basándose en tu landing page, los prueba y los sirve sin pedirte aprobación explícita. Esa función se llama &ldquo;activos creados automáticamente&rdquo;: un interruptor separado, activado por defecto en muchas configuraciones.</p>
          <p>Si esos activos creados automáticamente han corrido en tus campañas, el aviso se aplica. Tú pusiste los ingredientes. Google escribió el anuncio. Google lo está haciendo transparente ahora.</p>
          <p>AI Max for Search va todavía más lejos: reescribe la URL final para que coincida con la intención de búsqueda, genera combinaciones de palabras clave más allá de tu lista enviada y crea variantes de anuncios que no has redactado tú. Puede dar ventajas reales de rendimiento en las cuentas correctas. Estructuralmente, es publicidad creada con IA.</p>

          <h2>Tres rutas hacia el aviso</h2>
          <p>No todos los anuncios con el aviso han llegado ahí por el mismo camino, y eso importa para saber cómo responder.</p>
          <p><strong>Ruta 1 &mdash; Las herramientas de IA propias de Google.</strong> Activos creados automáticamente, generación de activos de Performance Max, AI Max for Search. El aviso se aplica automáticamente, sin que el anunciante haga nada. Es la ruta principal para la mayoría de las cuentas que llevan el aviso &mdash; y la que la mayoría no eligió conscientemente.</p>
          <p><strong>Ruta 2 &mdash; IA externa, declaración propia.</strong> Si has usado ChatGPT, Claude, Midjourney u otras herramientas externas para redactar o editar textos de anuncios y luego los has subido a Google Ads, se supone que debes declararlo a través de un nuevo ajuste de cuenta. Google ha afirmado que no verificará las autodeclaraciones. Es cumplimiento por confianza.</p>
          <p><strong>Ruta 3 &mdash; Escrito íntegramente a mano.</strong> Cada titular y descripción redactado sin IA, activos creados automáticamente desactivados. Sin aviso. En cuentas grandes que trabajan Performance Max a escala, esta posición es cada vez más infrecuente.</p>
          <p>Hay una cuarta categoría sin línea clara todavía: anunciantes que han usado IA de forma informal &mdash; pasar textos por una herramienta gramatical, pedir ideas a una IA que luego han reescrito, o usar herramientas de imagen con IA para un redimensionado. Google no ha trazado esa línea aún.</p>

          <h2>La pregunta del CTR</h2>
          <p>Respuesta honesta: todavía no hay datos fiables. La colocación visible parece estar en fase de prueba, el aviso es demasiado reciente y la varianza normal del CTR hace que los primeros indicios sean difíciles de leer. Lo que afirme saber qué hace el aviso de IA al porcentaje de clics ahora mismo es especulación, no medición.</p>
          <p>Dos escenarios son igualmente plausibles &mdash; y probablemente los dos verdaderos en contextos distintos. El primero: el aviso se funde con el ruido visual, como ha hecho &ldquo;Patrocinado&rdquo;. Cuando una etiqueta se vuelve universal, deja de ser informativa. Los anuncios con IA muy relevantes seguirán teniendo más clics que los irrelevantes sin ella. Cuando el aviso está en todas partes, nadie tiene desventaja relativa.</p>
          <p>El segundo: en sectores donde la confianza guía la decisión de compra &mdash; salud, asesoría legal, servicios financieros &mdash; &ldquo;creado con IA&rdquo; introduce fricción justo en el momento equivocado. El caso de las farmacias es el ejemplo más claro. Quien decide dónde canjear una receta está tomando una decisión de salud. &ldquo;Divulgación de IA: anuncio creado o editado con IA&rdquo; hace algo distinto ahí que bajo un anuncio de zapatillas deportivas.</p>
          <p>El escenario competitivo que más importa es la asimetría. Si todos los competidores en tu SERP llevan el aviso, estáis todos igual. Si solo tú lo tienes &mdash; o el único que no lo tiene eres tú &mdash; eso se convierte en una señal visible en una página donde los usuarios están comparando activamente. Observa tus SERPs concretas en tus búsquedas clave. Los datos generales del sector no te dicen qué está pasando en tu cuenta específica.</p>

          <h2>Qué hacer en tu cuenta ahora</h2>
          <p><strong>Saber qué estás sirviendo realmente.</strong> En Google Ads, ve a Activos &rarr; Todos los activos y filtra la columna &ldquo;Fuente&rdquo;. Los activos marcados como &ldquo;Creados automáticamente&rdquo; son los que generó Google. Si llevan meses corriendo sin que nadie los haya revisado, este es un buen momento &mdash; no solo por el aviso, sino porque servir textos de anuncios que nunca has leído es en sí una cuestión de gobernanza de contenido.</p>
          <p><strong>Revisar el interruptor.</strong> A nivel de campaña, en Configuración, puedes desactivar los activos creados automáticamente. Eso detiene la generación de nuevos activos de IA para esa campaña. Los activos automáticos existentes pueden seguir sirviéndose hasta que los revises y gestiones uno a uno. No hay opción de eliminarlos en masa.</p>
          <p><strong>Crear una base de CTR ahora.</strong> Guarda las dos semanas anteriores a la aparición del aviso en tus SERPs en tu herramienta de informes. Segmenta por tipo de campaña y, dentro de Búsqueda, por tipo de consulta: términos de marca, términos de competidores, búsqueda genérica. Cuando tengas cuatro semanas de datos post-aviso, compara. Esa segmentación es la primera señal real que tendrás disponible.</p>
          <p><strong>No desmontes una estructura probada basándote en un riesgo no demostrado.</strong> El caso de rendimiento de la generación de activos con IA está establecido: más combinaciones probadas, más intención de búsqueda cubierta, habitualmente más alcance con el mismo presupuesto. El coste de rendimiento del aviso no lo está. Reconstruir la estructura de campaña bajo presión de un anuncio &mdash; sin datos propios que lo justifiquen &mdash; suele dar peores resultados que esperar. Si estás en un sector con preocupaciones reales de confianza, el cálculo puede cambiar &mdash; pero debería cambiar cuando tus datos de CTR te digan que actúes, no cuando lo haga un artículo.</p>

          <div className="prose-callout">
            <div className="prose-callout-kicker">En resumen</div>
            <p>El aviso es real y está aquí. Su efecto comercial en tus cuentas concretas no está demostrado aún. La respuesta correcta es una medición limpia: saber exactamente qué activos son de IA y cuáles no, crear una base de CTR esta semana y tomar decisiones estructurales de campaña solo cuando tus propios datos te den algo con qué actuar.</p>
          </div>

          <p>Si no estás seguro de si tus campañas llevan el aviso o qué está pasando en tu cuenta, <a href="/es/contact/?topic=google-ads-ai-label">cuéntanos brevemente tu situación</a> y te respondemos en un día laborable. La primera conversación: 30 minutos, sin coste.</p>
          <p>Más sobre esto: <a href="/es/blog/performance-max-2026/">Performance Max en 2026 &mdash; los ajustes que cambiamos primero</a> &middot; <a href="/es/blog/performance-max-bidding-change-august-2026/">El cambio de pujas de agosto &mdash; qué hacer antes</a></p>
        </>
      ),
    },
    'what-is-a-geo-audit': {
      toc: ['No es una auditoría SEO', 'Qué cubre una auditoría GEO', 'La checklist de auditoría GEO', 'Herramientas', 'Con qué frecuencia hacerla', 'Preguntas frecuentes'],
      faqs: [
        { q: '¿Qué es una auditoría GEO?', a: 'Una auditoría GEO es un análisis estructurado de cómo las plataformas de IA representan tu marca — qué dicen cuando les preguntan por ti, con qué precisión te describen, en qué fuentes se basan, y dónde aparece tu marca o deja de aparecer en las respuestas generadas por IA.' },
        { q: '¿Cuál es la diferencia entre una auditoría GEO y una auditoría SEO?', a: 'Una auditoría SEO comprueba si los motores de búsqueda pueden encontrar, entender y posicionar tus páginas. Una auditoría GEO comprueba qué creen las plataformas de IA sobre tu marca y con qué precisión la representan. Las auditorías SEO son principalmente técnicas; las GEO se centran principalmente en autoridad y representación.' },
        { q: '¿Cómo hago una auditoría GEO?', a: 'A través de cinco capas: crawlabilidad (¿pueden los bots de IA acceder a tu web?), estructura de contenido (¿son citables tus datos clave?), cobertura de entidad (¿eres una entidad consistente en todo el web?), representación en IA (¿qué dicen ChatGPT, Perplexity y Gemini sobre ti?), y posicionamiento competitivo (¿dónde aparecen los competidores donde tú no apareces?).' },
        { q: '¿Qué incluye una checklist de auditoría GEO?', a: 'Una checklist de auditoría GEO cubre acceso técnico (robots.txt, datos estructurados, renderizado JS), citabilidad del contenido (párrafos de definición, afirmaciones específicas, contenido FAQ), señales de autoridad (menciones en terceros, NAP consistente, markup de schema), y representación en IA comprobada en ChatGPT, Perplexity, Claude y Gemini.' },
        { q: '¿Con qué frecuencia debería hacer una auditoría GEO?', a: 'Una auditoría completa cada trimestre, un check más ligero de representación en IA mensualmente. Haz una de inmediato si has hecho un rebranding, te has expandido a un nuevo mercado o has hecho un cambio significativo de contenido.' },
        { q: '¿Qué herramientas necesito para una auditoría GEO?', a: 'La capa técnica se puede auditar con herramientas SEO estándar (Screaming Frog, Search Console) más checks manuales. La capa de representación en IA requiere ejecutar prompts en ChatGPT, Perplexity, Claude y Gemini. Para el seguimiento continuo, crunchjunkie (crunchjunkie.io) rastrea la frecuencia de citas de IA y el sentimiento de marca automáticamente.' },
        { q: '¿Puedo hacer una auditoría GEO por mi cuenta?', a: 'Sí. La auditoría en sí se puede hacer sin agencia. El reto está en saber qué buscar en la capa de representación en IA, tener una base con la que comparar, y tener un programa para actuar sobre lo que encuentres. La auditoría es la parte fácil; la remediación es el trabajo.' },
      ],
      prose: (
        <>
          <p>La mayoría de las marcas con las que hablamos no tienen ni idea de lo que dice ChatGPT sobre ellas. Algunas nunca han preguntado. Otras preguntaron una vez, recibieron una respuesta vaga y siguieron adelante. Muy pocas han preguntado de forma sistemática &mdash; en varias plataformas, en varios días, con distintos tipos de consulta &mdash; y han documentado lo que encontraron.</p>
          <p>Ese proceso sistemático es una auditoría GEO. No es una checklist técnica. Es una investigación estructurada sobre cómo representan tu marca las plataformas de IA &mdash; y qué puedes hacer realmente al respecto.</p>

          <h2>No es una auditoría SEO &mdash; es una pregunta diferente</h2>
          <p>Las auditorías SEO responden: <em>¿pueden los motores de búsqueda encontrar y posicionar tus páginas?</em> Cubren crawlabilidad, velocidad de carga, canonical tags, enlazado interno. Esa base sigue importando en GEO &mdash; una página que no se puede crawlear no se puede citar &mdash; pero es el suelo, no el techo.</p>
          <p>Una auditoría GEO responde una pregunta diferente: <em>¿qué creen las plataformas de IA sobre tu marca, y es algo de eso correcto?</em> Puedes tener una web perfectamente optimizada y seguir siendo invisible en la búsqueda con IA, porque los modelos de IA no posicionan páginas. Sintetizan respuestas a partir de fuentes que consideran creíbles y respaldadas. Si esas fuentes no incluyen suficiente sobre ti, no estás en la conversación.</p>
          <p>La brecha entre rendimiento SEO y GEO puede ser significativa. Marcas con alta autoridad de dominio a veces tienen tasas de cita en IA bajas. Marcas con webs más pequeñas pero con cobertura genuina en terceros a veces superan con creces su peso SEO en las respuestas de IA. Es un problema de autoridad, no de optimización.</p>

          <h2>Qué cubre una auditoría GEO</h2>
          <p>Una auditoría GEO completa corre por cinco capas. La mayoría de las marcas tienen problemas en al menos dos de ellas.</p>

          <h3>1. Crawlabilidad y acceso de IA</h3>
          <p>Antes de nada: ¿pueden los crawlers de IA llegar a tu web? Revisa <code>robots.txt</code> para detectar bloqueos a los agentes que importan &mdash; <code>GPTBot</code>, <code>ClaudeBot</code>, <code>OAI-SearchBot</code>, <code>Claude-SearchBot</code>, <code>PerplexityBot</code>, <code>Google-Extended</code>.</p>
          <p>La distinción clave: los <em>crawlers de entrenamiento</em> (GPTBot, ClaudeBot, Google-Extended) alimentan los datasets de entrenamiento de los modelos. Los <em>bots de recuperación</em> (OAI-SearchBot, PerplexityBot, Claude-SearchBot) potencian las citas en vivo en respuestas en tiempo real. Bloquear los bots de recuperación suprime las citas activas. Para la mayoría de las marcas, bloquear cualquier tipo es un error &mdash; tu contenido en los datos de entrenamiento es como los modelos desarrollan una opinión sobre ti.</p>

          <h3>2. Estructura del contenido y citabilidad</h3>
          <p>Los modelos de IA citan lo que es citable. El lenguaje de marca vago no se cita; las afirmaciones factuales específicas, sí. &laquo;Somos una agencia digital líder&raquo; no es una frase que ningún modelo repetirá. &laquo;pmax es una agencia de marketing de resultados en Calvi&agrave;, Mallorca, fundada en 2023&raquo; sí.</p>
          <p>Audita tu contenido en busca de: párrafos de definición claros que describan exactamente qué haces y para quién; afirmaciones específicas respaldadas por evidencia; contenido FAQ que aborde las preguntas que la gente realmente hace; y lenguaje consistente que diferencie tu marca. Comprueba también: ¿está el contenido crítico renderizado con JS? Los crawlers de IA en su mayor parte no ejecutan JavaScript. Si tus descripciones de servicio clave viven en un componente React que necesita el navegador para renderizarse, pueden ser invisibles para todos los crawlers de IA.</p>

          <h3>3. Cobertura de entidad</h3>
          <p>Una entidad es algo distinto e identificable sobre lo que los modelos de IA pueden razonar. Tu objetivo es convertirte en una entidad bien definida &mdash; no solo una web &mdash; mediante una presencia consistente y corroborada en todo el web.</p>
          <p>Comprueba: datos estructurados (schema.org) en tu web &mdash; Organisation, LocalBusiness, Service, Person para fundadores; NAP (nombre, dirección, teléfono) consistente en directorios; menciones en publicaciones en las que confía tu sector. La información contradictoria entre canales &mdash; distintos años de fundación, distintas descripciones de servicios en diferentes plataformas &mdash; confunde la resolución de entidades e introduce riesgo de alucinaciones.</p>

          <h3>4. Auditoría de representación en IA</h3>
          <p>La capa más reveladora, y la que la mayoría de las marcas omiten. Abre ChatGPT, Perplexity, Claude y Gemini y ejecuta una serie de prompts:</p>
          <ul>
            <li>Tu nombre de marca directamente: <em>&laquo;¿Qué es [Marca]?&raquo;</em></li>
            <li>Consultas de categoría: <em>&laquo;Mejor [servicio] en [ubicación]&raquo;</em></li>
            <li>Comparaciones competitivas: <em>&laquo;Compara [Marca] y [Competidor]&raquo;</em></li>
            <li>Preguntas orientadas al problema que tus clientes hacen de verdad</li>
          </ul>
          <p>Documenta todo: si apareces, cómo te describen, qué datos citan, de dónde viene la información, si los competidores aparecen donde tú no. Esta es tu línea base. La repites en tres meses para medir el movimiento.</p>
          <p>Hallazgos habituales: fecha de fundación incorrecta; una descripción confusa que mezcla tu marca con otra empresa; un competidor que aparece en todas las respuestas donde deberías aparecer tú; o simplemente ninguna mención, en ninguna plataforma, en ningún contexto.</p>

          <h3>5. Posicionamiento competitivo</h3>
          <p>¿Dónde aparecen los competidores en respuestas donde tú no apareces? ¿En qué fuentes se apoya la IA cuando describe tu categoría? ¿Qué marcas te compara y cómo caracteriza la diferencia?</p>
          <p>Esto te dice cómo cree la IA que es el panorama competitivo &mdash; que a veces es bastante diferente de tu propia visión. También te dice qué tipos de contenido y fuentes de terceros tienen más peso, y hacia dónde dirigir primero el esfuerzo de construcción de autoridad.</p>

          <h2>La checklist de auditoría GEO</h2>
          <p>Trabaja en este orden. La capa técnica es la más rápida de corregir; la de autoridad tarda más; la de representación en IA es donde ves los resultados.</p>

          <h3>Técnico</h3>
          <ul>
            <li>robots.txt permite los bots de recuperación clave de IA: OAI-SearchBot, PerplexityBot, Claude-SearchBot, ChatGPT-User, Claude-User</li>
            <li>Sin dependencia de JavaScript para contenido crítico (descripciones de servicios, página sobre nosotros, datos clave)</li>
            <li>Datos estructurados presentes y válidos: Organisation o LocalBusiness, Service, FAQPage, Person para fundadores</li>
            <li>Canonical tags implementados correctamente; sitemap enviado y actualizado</li>
          </ul>

          <h3>Contenido</h3>
          <ul>
            <li>Cada servicio principal tiene al menos un párrafo de definición claro y citable</li>
            <li>La descripción de marca es consistente en nombre, ubicación, año de fundación y servicios en todas las páginas propias</li>
            <li>El contenido FAQ responde las preguntas que la gente realmente hace &mdash; no las que desearías que hicieran</li>
            <li>Las afirmaciones son específicas y verificables, no genéricas (&laquo;el mejor&raquo;, &laquo;líder&raquo;, &laquo;innovador&raquo;)</li>
          </ul>

          <h3>Autoridad</h3>
          <ul>
            <li>Marca mencionada en al menos tres a cinco fuentes de terceros reputadas en los últimos 12 meses</li>
            <li>Información de negocio consistente en Google Business Profile, LinkedIn, directorios del sector</li>
            <li>El markup de schema identifica correctamente marca, fundador, fecha de fundación, ubicación y servicios</li>
            <li>Sin información contradictoria entre canales propios y de terceros</li>
          </ul>

          <h3>Representación en IA</h3>
          <ul>
            <li>La marca aparece en respuestas de IA para consultas directas del nombre de marca</li>
            <li>La marca se describe con precisión: fecha de fundación, servicios, ubicación y equipo correctos</li>
            <li>La marca aparece en consultas de categoría relevantes para el negocio</li>
            <li>Sin alucinaciones significativas ni atribuciones erróneas a competidores</li>
            <li>Todos los resultados documentados con fecha para comparación futura</li>
          </ul>

          <h2>Herramientas</h2>
          <p>La mayor parte de la capa técnica se puede auditar con herramientas SEO estándar &mdash; Screaming Frog para crawlabilidad, Search Console para indexación, el Rich Results Test de Google para datos estructurados. No se necesita ninguna herramienta especializada para la base.</p>
          <p>La capa de representación en IA no tiene atajos. Necesitas ejecutar los prompts tú mismo, en varias plataformas, en varios días. Las respuestas de IA varían según la sesión, la ubicación y la formulación de la consulta. Una sola instantánea puede engañar.</p>
          <p>Para el seguimiento continuo, usamos <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">crunchjunkie</a> &mdash; una plataforma de visibilidad en IA que monitoriza la frecuencia de citas, el share of voice entre plataformas y el sentimiento de marca en las respuestas generadas por IA. Es lo más parecido a Search Console para la búsqueda con IA. Lo incluimos en cada retainer de <a href="/es/services/visibility-engineering/">Visibility Engineering</a> que gestionamos.</p>

          <h2>Con qué frecuencia hacerla</h2>
          <p>La búsqueda con IA no es un entorno estable. Los modelos se actualizan, el comportamiento de cita cambia, surgen nuevas plataformas. Para la mayoría de los negocios: una auditoría GEO completa cada trimestre, un check más ligero de representación en IA mensualmente.</p>
          <p>Haz una de inmediato si has hecho un rebranding recientemente, te has expandido a un nuevo mercado, has lanzado un servicio nuevo significativo, o un competidor ha hecho ruido recientemente. El panorama de IA es una instantánea del web en un momento del tiempo. Si el web ha cambiado, la instantánea necesita actualizarse.</p>

          <div className="prose-callout">
            <span className="prose-callout-kicker">Lo que una auditoría no hace</span>
            <p>Una auditoría te dice qué está mal. No lo arregla por sí sola. Para la mayoría de las marcas el cuello de botella no es técnico &mdash; es de autoridad. No hay suficiente corroboración externa creíble de lo que hace la marca y a quién sirve. Arreglarlo lleva tiempo: PR digital, contenido estructurado, señales de entidad consistentes, menciones ganadas. Se acumulan despacio.</p>
            <p>Por eso una auditoría GEO bien hecha debería resultar un poco incómoda. Si todo parece estar bien, probablemente no has mirado con suficiente profundidad.</p>
          </div>

          <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=geo-audit">cuéntanos un poco tu situación</a> y te respondemos en un día laborable. La primera conversación son 30 minutos, invita la casa.</p>
        </>
      ),
    },
    'performance-max-bidding-change-august-2026': {
      toc: ['El cambio: Bidding Target Optimization', 'Tu ventana de seis semanas', 'Las dos betas', 'Lo que hacemos antes del 17 de agosto', 'Preguntas frecuentes'],
      faqs: [
        { q: '¿Cuándo entra en vigor el cambio de pujas de Performance Max?', a: 'El 17 de agosto de 2026. La Bid Target Adjustment Tool llega el 6 de julio, con una ventana de unas seis semanas para fijar tus objetivos antes de que el cambio se aplique automáticamente.' },
        { q: '¿Qué es Bidding Target Optimization?', a: 'Un cambio de pujas en el backend de Google. Las campañas limitadas por presupuesto que superaban su CPA objetivo o su ROAS objetivo se reconducen hacia el objetivo fijado.' },
        { q: '¿A qué campañas afecta?', a: 'A campañas limitadas por presupuesto de Búsqueda, Shopping, Performance Max, Demand Gen, Viajes y Display. Apps, alcance de vídeo y vídeo view quedan fuera; Hotel y Display ya funcionan así.' },
        { q: '¿Es opt-out o tengo que hacer algo?', a: 'No hay opt-out: se aplica automáticamente el 17 de agosto y Google no cambiará tus objetivos ni presupuestos por ti. No hacer nada suele significar un coste por conversión más alto.' },
        { q: '¿Subirá mi coste por conversión?', a: 'En las campañas que superaban el objetivo, muy probablemente, salvo que bajes el objetivo antes del 17 de agosto. La herramienta del 6 de julio te deja mantener, igualar o personalizar el objetivo.' },
      ],
      prose: (
        <>
          <p>El 15 de junio Google anunció tres cambios en pujas y presupuestos en una sola publicación. Dos son betas opcionales. El tercero no es opcional, se aplica automáticamente el <strong>17 de agosto</strong> y, para muchas cuentas, significa un coste por conversión más alto. Si usas Performance Max, este es el que tienes que leer.</p>
          <p>En resumen: las campañas que venían <em>superando</em> su CPA objetivo o su ROAS objetivo van a reconducirse hacia el objetivo que fijaste. Tienes una ventana de seis semanas para actuar a tu manera antes &mdash; y una herramienta que llega el <strong>6 de julio</strong> para ayudarte. Abajo: qué cambia, a quién afecta y la lista que estamos aplicando en las cuentas que gestionamos antes de la fecha límite.</p>

          <h2>El cambio que importa: Bidding Target Optimization</h2>
          <p>Ahora mismo, una campaña limitada por presupuesto puede entregar muy por debajo de su objetivo sin problema. El ejemplo que usa Google es una campaña con un CPA objetivo de 10&nbsp;$ que viene consiguiendo conversiones a unos 5&nbsp;$ &mdash; la mitad del objetivo. A partir del 17 de agosto, esa campaña intentará entregar más cerca de los 10&nbsp;$ que se fijaron, en lugar de seguir a 5&nbsp;$. (Esas cifras son la ilustración de Google, no un resultado medido &mdash; tus números reales saldrán de la herramienta.)</p>
          <p>Misma lógica con el valor: una campaña con un ROAS objetivo del 300&nbsp;% que venía rindiendo cerca del 400&nbsp;% se reconducirá hacia el 300&nbsp;%.</p>
          <p>Tres cosas que conviene tener claras, porque es donde las cuentas se llevan el susto:</p>
          <ul>
            <li><strong>Solo afecta a campañas limitadas por presupuesto</strong> &mdash; las que frena su presupuesto diario o total, no su objetivo. Si una campaña está limitada por el propio objetivo, no es el foco.</li>
            <li><strong>Es automático. No es opt-out.</strong> Google ha dicho que no cambiará tus objetivos ni presupuestos por ti. Si no haces nada, el cambio se aplica igual: tus campañas que superan el objetivo se acercarán a objetivos desactualizados y, para la mayoría de cuentas, eso es un coste por conversión más alto. Aquí no actuar es una decisión, no un valor por defecto.</li>
            <li><strong>Cubre casi todos los tipos de campaña</strong> &mdash; Performance Max, Búsqueda, Shopping, Demand Gen, Viajes y Display. Las campañas de Apps, de alcance de vídeo y de vídeo view quedan fuera. Hotel y Display ya funcionan así.</li>
          </ul>
          <p>Esto es lo de siempre, los fundamentos aburridos: el cambio premia a las cuentas con objetivos que reflejan la realidad y castiga a las que funcionan con números que nadie ha revisado en meses. Nuestra <a href="/es/blog/performance-max-2026/">guía de Performance Max 2026</a> explica la estructura que hace más fácil mantener los objetivos al día.</p>

          <h2>Tu ventana de seis semanas &mdash; y la herramienta del 6 de julio</h2>
          <p>Entre el <strong>6 de julio</strong> y el <strong>17 de agosto</strong> está el único tramo en el que decides tú, no el algoritmo.</p>
          <p>El 6 de julio Google lanza una herramienta de ajuste de objetivos (<strong>Bid Target Adjustment Tool</strong>), que aparece mediante avisos en la cuenta para quienes hayan tenido campañas limitadas por presupuesto basadas en objetivos en los últimos 12 meses. Muestra tu rendimiento histórico y da tres opciones por campaña:</p>
          <ol>
            <li><strong>Mantener tu objetivo actual</strong> &mdash; y aceptar el ajuste hacia él el 17 de agosto.</li>
            <li><strong>Igualar el objetivo al rendimiento reciente</strong> &mdash; formalizar el coste por conversión más bajo que ya venías consiguiendo.</li>
            <li><strong>Fijar un objetivo personalizado</strong> propio.</li>
          </ol>
          <p>La decisión de fondo es lo que llamamos la <em>brecha de intención</em>: <strong>¿tus objetivos conservadores eran deliberados o simplemente estaban desactualizados?</strong></p>
          <ul>
            <li>Si pusiste un CPA objetivo alto (o un ROAS objetivo bajo) <em>a propósito</em> para que una campaña siguiera escalando con fuerza, esa palanca está a punto de debilitarse. Baja el objetivo antes del 17 de agosto para mantener el volumen.</li>
            <li>Si los objetivos simplemente se quedaron atrás según mejoraba el rendimiento, puedes aceptar el cambio y vigilar &mdash; la cuenta se autocorrige hacia números que probablemente habrías fijado igualmente.</li>
          </ul>
          <p>Ninguna respuesta es incorrecta. No tener una respuesta por campaña, sí.</p>

          <h2>Las dos betas que conviene conocer</h2>
          <p><strong>Smart Bidding Exploration ya está activo para Performance Max.</strong> Disponible globalmente para campañas de Performance Max <em>sin</em> feed de productos. Para Shopping y Performance Max <em>con</em> feed, está en beta. La función permite al algoritmo pujar por búsquedas sin historial de conversiones probado, dentro de un rango de tolerancia de ROAS, para descubrir demanda nueva de verdad. Google reporta mejoras internas cercanas al 20&nbsp;%; trátalo como un dato del proveedor hasta que lo demuestres contra una base limpia en tu cuenta.</p>
          <p><strong>Promotion Mode</strong> es una nueva beta solo para <strong>Búsqueda y Performance Max</strong> (no Shopping ni Display de momento). Programa una relajación temporal de tu tolerancia de ROAS más presupuesto diario extra durante una ventana concreta &mdash; una promoción flash, un pico estacional, un lanzamiento. No es lo mismo que los ajustes de estacionalidad; no los mezcles.</p>
          <p>Un apunte de mantenimiento: Google también renombró en junio dos estrategias sin cambiar su comportamiento. &laquo;Maximizar conversiones con un CPA objetivo&raquo; pasa a llamarse simplemente <strong>CPA objetivo</strong>; &laquo;Maximizar el valor de conversión con un ROAS objetivo&raquo; pasa a <strong>ROAS objetivo</strong>. Solo cosmético &mdash; nada que hacer.</p>

          <h2>Lo que hacemos antes del 17 de agosto</h2>
          <p>Esta es la secuencia que estamos aplicando en las cuentas que gestionamos. Funciona igual de bien si llevas la tuya.</p>
          <ol>
            <li><strong>Antes del 6 de julio &mdash; fija una base.</strong> Saca 90 días de CPA/ROAS de cada campaña limitada por presupuesto y marca las que superan el objetivo de forma constante. Esas son las que toca el cambio de agosto.</li>
            <li><strong>Separa intención de inercia.</strong> Para cada campaña marcada, escribe una línea: ¿palanca de escalado deliberada u objetivo desactualizado? Esa decisión manda sobre todo lo demás.</li>
            <li><strong>Desde el 6 de julio &mdash; abre la Bid Target Adjustment Tool.</strong> Contrasta la visión de Google con la tuya. No aceptes la opción por defecto &mdash; elige mantener / igualar / personalizar a conciencia.</li>
            <li><strong>Baja objetivos donde importe el volumen.</strong> En las campañas de palanca deliberada, reajusta el objetivo antes del 17 de agosto para que el algoritmo siga empujando volumen.</li>
            <li><strong>Prueba Smart Bidding Exploration</strong> en una o dos campañas de Performance Max y mide las conversiones incrementales &mdash; no lo despliegues en toda la cuenta solo por una mejora reportada.</li>
            <li><strong>Prepara con antelación tus ventanas de Promotion Mode</strong> para los picos conocidos (rebajas de verano, Q4) y no las configures con prisas.</li>
            <li><strong>Apunta el 17 de agosto en la agenda.</strong> Vigila CPA/ROAS y gasto durante una o dos semanas después y corrige lo que se mueva en mala dirección.</li>
          </ol>

          <div className="prose-callout">
            <div className="prose-callout-kicker">En resumen</div>
            <p>Esto no es una función que actives. Es un cambio de comportamiento que llega solo el 17 de agosto y que, sin ruido, favorece a quien ha mantenido sus objetivos honestos. Entra con un plan por campaña y conservas eficiencia y volumen. Entra con objetivos que nadie ha mirado desde la primavera y probablemente verás subir tu coste por conversión hacia números que fijaste hace meses.</p>
          </div>

          <p>Si prefieres no auditar cada campaña a mano antes de la fecha límite, eso es justo lo que hacemos. Gestionamos <a href="/es/services/google-ads/">Google Ads y Performance Max</a> con una tarifa mensual fija &mdash; nunca un porcentaje de tu inversión &mdash; para no tener nunca el incentivo de recomendar más publicidad de la que la cuenta necesita. La primera llamada son 30 minutos, invita la casa: <a href="/es/contact/">cuéntanos qué quieres hacer crecer &rarr;</a></p>
          <p>Relacionado: <a href="/es/blog/performance-max-2026/">Performance Max en 2026 &mdash; los ajustes que cambiamos primero</a> &middot; <a href="/es/blog/cookieless-tracking/">Cookieless tracking: qué cambió y qué hacer</a></p>
        </>
      ),
    },
    'perplexity-visibility': {
      title: 'Cómo mejorar tu visibilidad en Perplexity (y por qué no es ChatGPT)',
      deck: 'Una guía clara sobre la visibilidad en Perplexity en 2026 — qué es, por qué se comporta distinto a ChatGPT y cinco acciones para este mes.',
      toc: ['¿Qué es la visibilidad en Perplexity?', 'Por qué Perplexity es un problema aparte', 'Cinco acciones para este mes', 'Cómo puede ayudarte pmax', 'Preguntas frecuentes'],
      faqs: [
        { q: '¿Cómo consigo que Perplexity cite mi negocio?', a: 'Asegúrate de que PerplexityBot puede rastrear tu web, publica contenido orientado a la respuesta y fácil de citar, y gánate menciones en las fuentes en las que Perplexity confía: Wikipedia, sitios de reseñas consolidados, publicaciones serias y hilos de Reddit relevantes. Después mide cada mes y sé constante.' },
        { q: '¿Por qué no aparece mi empresa en Perplexity aunque posiciona en Google?', a: 'Porque son sistemas distintos. Perplexity prioriza páginas que puede leer en vivo y citar con claridad, y se apoya en un círculo reducido de dominios de confianza para validar. Una página puede posicionar en Google y aun así ser difícil de rastrear, difícil de citar o carecer de las señales de terceros que Perplexity busca.' },
        { q: '¿La visibilidad en Perplexity es lo mismo que en ChatGPT?', a: 'No. Los dominios que cita cada motor coinciden sorprendentemente poco, así que cada uno necesita su propia línea de partida y, a menudo, sus propias tácticas. Aparecer en uno no se traslada al otro.' },
        { q: '¿Cuánto tarda en notarse la visibilidad en Perplexity?', a: 'Los arreglos técnicos y de estructura pueden notarse en semanas, porque Perplexity vuelve a rastrear y a responder de forma continua. Construir la confianza de terceros que hace fiables las citas suele llevar entre dos y tres meses de trabajo constante.' },
      ],
      prose: (
        <>
          <p>Hace poco un cliente nos dijo algo que se nos quedó grabado: «Por fin aparecemos en ChatGPT, pero mi socio usa Perplexity todo el día y ahí no estamos por ninguna parte». Esa brecha es real y sorprende a mucha gente. Que un motor de respuestas con IA te recomiende no garantiza casi nada en el siguiente.</p>
          <p>Esta es una guía breve y práctica &mdash; sin jerga, sin alarmismo. Al terminar sabrás qué es la visibilidad en Perplexity, por qué es un problema distinto al de ChatGPT y las cinco cosas que cualquier negocio puede empezar este mes para que te citen.</p>

          <h2>¿Qué es la visibilidad en Perplexity?</h2>
          <p>Cuando alguien le pregunta a Perplexity «¿cuál es la mejor agencia de marketing digital en Mallorca?» o «compara tres instaladores de placas solares en España», redacta una respuesta y la acompaña de citas numeradas: las páginas web concretas de las que ha tomado la información. La visibilidad en Perplexity consiste en lograr que tu negocio sea una de esas fuentes citadas y, a ser posible, uno de los nombres dentro de la propia respuesta.</p>
          <p>Forma parte de la misma familia que la optimización para motores generativos (GEO), pero la mecánica es propia de Perplexity. Las bases del SEO clásico siguen aplicando: son el suelo, no el techo.</p>

          <h2>Por qué Perplexity es un problema aparte</h2>
          <p>La tentación es tratar la «visibilidad en IA» como una sola tarea. No lo es. Perplexity se diferencia de ChatGPT en tres aspectos que cambian lo que haces en la práctica:</p>
          <ol>
            <li><strong>Funciona por recuperación.</strong> Perplexity hace una búsqueda web en vivo para casi cada pregunta y construye la respuesta con lo que encuentra en ese momento, con citas visibles. Se apoya menos en lo que un modelo «recuerda» y más en lo que es rastreable, actual y citable hoy. Las páginas frescas y bien estructuradas pesan aquí más que casi en cualquier otro sitio.</li>
            <li><strong>El solapamiento con ChatGPT es pequeño.</strong> En nuestras propias mediciones de partida, y en análisis independientes que comparan decenas de miles de prompts, el conjunto de dominios que cita Perplexity apenas coincide con el que cita ChatGPT, muchas veces solo uno de cada diez. Puedes dominar uno y ser invisible en el otro. Por eso «estamos en ChatGPT» no te dice nada sobre Perplexity.</li>
            <li><strong>Las citas tienen valor directo.</strong> Como Perplexity muestra sus fuentes de forma destacada y la gente hace clic en ellas, una cita no es una métrica de vanidad: es una recomendación con tráfico medible detrás.</li>
          </ol>

          <h2>Cinco acciones para este mes</h2>
          <h3>1. Mide tu punto de partida en Perplexity</h3>
          <p>Dedica una hora a lanzar 20 preguntas de compra reales en Perplexity en sí, no en ChatGPT ni en Gemini. Usa las preguntas que haría un cliente de verdad: «mejor X en Y para un presupuesto Z», «compara A y B». Anota qué competidores aparecen y qué páginas se citan. Esa lista es tu línea de salida, y será distinta de tu línea de partida en ChatGPT.</p>

          <h3>2. Deja que PerplexityBot te rastree</h3>
          <p>Como Perplexity funciona por recuperación, una página que no puede leer es una página que no puede citar. Comprueba que tu <code>robots.txt</code> no bloquea <code>PerplexityBot</code> ni <code>Perplexity-User</code>, que tus páginas clave responden con un 200 limpio y que tu contenido importante no queda oculto tras scripts que un rastreador no ejecuta. Es poco glamuroso y es el motivo más habitual por el que una buena página nunca llega a aparecer.</p>

          <h3>3. Escribe la respuesta primero, en bloques</h3>
          <p>Perplexity toma el contenido por trozos, así que estructura para eso. Pon la respuesta directa en las primeras una o dos frases bajo cada título, antes del contexto. Usa párrafos cortos, listas claras y una tabla comparativa donde encaje. Una página que abre con «las tres mejores opciones son…» se cita mucho más fácil que otra que calienta motores durante cuatro párrafos.</p>

          <h3>4. Consigue que te citen donde Perplexity ya confía</h3>
          <p>Perplexity da mucho peso a un círculo relativamente pequeño de fuentes: Wikipedia y Wikidata para los datos de entidad, plataformas de reseñas consolidadas (G2, Capterra, Trustpilot), publicaciones sectoriales serias y, en especial, Reddit, uno de sus dominios más citados. Ganarte menciones honestas en ese círculo hace más por tu visibilidad en Perplexity que otra página en tu propia web. El PR basado en afirmaciones verificables es lo que gana esas menciones.</p>

          <h3>5. Mide cada mes</h3>
          <p>Repite los mismos 20 prompts todos los meses. Controla qué respuestas ya te nombran y cuáles todavía no. <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">CrunchJunkie</a> automatiza esto entre motores, o hazlo a mano en una hoja de cálculo. Lo que no mides, no lo puedes mejorar.</p>

          <div className="prose-callout">
            <div className="prose-callout-kicker">La versión honesta</div>
            <p>La visibilidad en Perplexity se gana, no se hackea. Como el motor funciona por recuperación, a veces ves movimiento más rápido que en otras plataformas una vez arreglado el rastreo y la estructura, pero una presencia duradera sigue exigiendo un par de meses de trabajo constante en contenido, estructura y confianza de terceros. Quien te prometa citas instantáneas te está vendiendo algo.</p>
          </div>

          <h2>Cómo puede ayudarte pmax</h2>
          <p>Gestionamos programas de visibilidad en IA para empresas de toda Europa, y tratamos Perplexity, ChatGPT y los AI Overviews de Google como superficies distintas con marcadores distintos, porque lo son. Eso significa una auditoría por motor, las bases técnicas, contenido y PR, y una medición mensual que de verdad puedas leer. Si quieres una radiografía gratuita de una página sobre tu visibilidad en Perplexity, <a href="/es/contact/?topic=perplexity-audit">cuéntanos brevemente tu situación</a> y te la enviamos en una semana.</p>

          <h2>Preguntas frecuentes</h2>
          <h3>¿Cómo consigo que Perplexity cite mi negocio?</h3>
          <p>Asegúrate de que PerplexityBot puede rastrear tu web, publica contenido orientado a la respuesta y fácil de citar, y gánate menciones en las fuentes en las que Perplexity confías: Wikipedia, sitios de reseñas consolidados, publicaciones serias y hilos de Reddit relevantes. Después mide cada mes y sé constante.</p>

          <h3>¿Por qué no aparece mi empresa en Perplexity aunque posiciona en Google?</h3>
          <p>Porque son sistemas distintos. Perplexity prioriza páginas que puede leer en vivo y citar con claridad, y se apoya en un círculo reducido de dominios de confianza para validar. Una página puede posicionar en Google y aun así ser difícil de rastrear, difícil de citar o carecer de las señales de terceros que Perplexity busca.</p>

          <h3>¿La visibilidad en Perplexity es lo mismo que en ChatGPT?</h3>
          <p>No. Los dominios que cita cada motor coinciden sorprendentemente poco, así que cada uno necesita su propia línea de partida y, a menudo, sus propias tácticas. Aparecer en uno no se traslada al otro.</p>

          <h3>¿Cuánto tarda en notarse la visibilidad en Perplexity?</h3>
          <p>Los arreglos técnicos y de estructura pueden notarse en semanas, porque Perplexity vuelve a rastrear y a responder de forma continua. Construir la confianza de terceros que hace fiables las citas suele llevar entre dos y tres meses de trabajo constante.</p>

          <h2>Lecturas relacionadas</h2>
          <ul>
            <li><a href="/es/services/ai-visibility/">Nuestro servicio de visibilidad en IA</a> — qué incluye un programa completo</li>
            <li><a href="/es/blog/how-to-get-mentioned-by-chatgpt/">Cómo conseguir que ChatGPT recomiende tu negocio</a> — la guía hermana para el otro gran motor</li>
            <li><a href="/es/blog/gpt-shopping/">Qué significa «ChatGPT Shopping» para el e-commerce en 2026</a></li>
          </ul>
        </>
      ),
    },
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
          <li><strong>La gente usa IA para investigar antes de comprar.</strong> La investigación apunta a que la mayoría de los procesos de compra pasan hoy por al menos una superficie de respuesta de IA.</li>
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
        <p>Vuelve a ejecutar esas mismas 20 consultas cada mes. <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">CrunchJunkie</a> puede automatizarlo — o puedes hacerlo manualmente. De cualquier forma: si no lo mides, no puedes mejorarlo.</p>
        <div className="prose-callout">
          <div className="prose-callout-kicker">La versión honesta</div>
          <p>La visibilidad en IA no es un truco. Se gana. La mayoría de los negocios ven sus primeras citas fiables en 8–12 semanas de trabajo disciplinado.</p>
        </div>
        <h2>Cómo puede ayudar pmax</h2>
        <p>Ejecutamos programas de visibilidad en IA para empresas en toda Europa. Si quieres una auditoría gratuita de una página sobre dónde está tu negocio hoy en ChatGPT, Perplexity y Gemini, <a href="/es/contact/?topic=ai-audit">cuéntanos un poco sobre tu situación</a> y te la enviamos en una semana.</p>
        <h2>Lecturas recomendadas</h2>
        <ul>
          <li><a href="/es/services/ai-visibility/">Nuestra página de servicio de visibilidad en IA</a> — qué hay dentro de un programa</li>
          <li><a href="/es/blog/perplexity-visibility/">Cómo mejorar tu visibilidad en Perplexity</a> — Perplexity es retrieval-first y necesita tácticas propias</li>
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
        <p>Lecturas relacionadas: nuestro <a href="/es/services/google-ads/">servicio de Google Ads &amp; Performance Max</a> &mdash; y cómo encaja PMax en el <a href="/es/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/">mix de canales Google vs. Meta vs. TikTok</a>. También: <a href="/es/blog/performance-max-bidding-change-august-2026/">cambio de pujas del 17 de agosto</a> &mdash; qué hacer antes de la fecha límite.</p>
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
        <p>Nuestro <a href="/es/services/google-ads/">servicio de Google Ads &amp; Performance Max</a> — adaptado a la demanda multilingüe y estacional de Mallorca. ¿Campañas en España en general? Ver nuestra <a href="/es/agencia-google-ads-espana/">agencia de Google Ads en España</a>. ¿Full-service — paid, SEO y social bajo un retainer? Ver nuestra <a href="/es/agencia-de-marketing-mallorca/">agencia de marketing en Mallorca</a>.</p>
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
        <p>Lecturas relacionadas: nuestro <a href="/es/agencia-seo-mallorca/">servicio de SEO</a>, nuestro <a href="/es/industries/ecommerce/">playbook de marketing para e-commerce</a> — y <a href="/es/blog/how-to-get-mentioned-by-chatgpt/">cómo los datos estructurados también generan citas en ChatGPT</a>.</p>
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
        <p>Utilizamos <a href="/es/services/conversion-design/">diseño de conversión (CRO)</a>, <a href="/es/services/google-ads/">Google Ads</a> y <a href="/es/services/paid-social/">Meta Ads</a>. Más en nuestro <a href="/es/industries/hospitality/">playbook de marketing para hostelería</a> y en nuestros <a href="/es/cases/">resultados de clientes</a>. ¿Basado en Mallorca y buscas una agencia full-service? Ver nuestra <a href="/es/agencia-de-marketing-mallorca/">agencia de marketing en Mallorca</a>.</p>
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
        <p>Más en nuestro <a href="/es/industries/boating/">playbook de marketing para náutica y yachting</a>. Para empresas de charter en Mallorca que quieran paid search, SEO y paid social bajo un solo retainer, ver nuestra <a href="/es/agencia-de-marketing-mallorca/">agencia de marketing en Mallorca</a>.</p>
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
        <p>Una tasa de retención de clientes a doce meses del 93 %, y un pipeline de inbound formado casi en su totalidad por referencias. El camino lento funciona. Ver nuestros <a href="/es/cases/">resultados de clientes</a> — o nuestra <a href="/es/agencia-de-marketing-mallorca/">agencia de marketing en Mallorca</a> si quieres entender cómo estructuramos y presupuestamos un retainer full-service.</p>
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
          <Image
            src="/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/pmax-branded-search-absorbed-attribution-2026.webp"
            alt="Informe de términos de búsqueda en Google Ads mostrando cómo Performance Max absorbe búsquedas de marca y se atribuye las conversiones — causa frecuente de ROAS inflado en cuentas de ecommerce 2026"
            title="Performance Max absorbiendo búsquedas de marca — informe de términos de búsqueda Google Ads Q1 2026"
            width={1600}
            height={900}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            loading="lazy"
          />
          <figcaption>Fig. 1 — Cuenta real: búsquedas de marca absorbidas por Performance Max y acreditadas como conversiones PMax. El ROAS reportado parece sólido sobre el papel &mdash; la mayor parte es demanda de marca capturada, no nuevos clientes adquiridos a través de paid media.</figcaption>
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
        <p>Relacionado: nuestro <a href="/es/services/google-ads/">servicio de Google Ads &amp; Performance Max</a>, nuestro <a href="/es/services/paid-social/">servicio de paid social</a> (Meta &amp; TikTok), nuestra <a href="/es/services/analytics/">configuración de analítica y atribución</a>, nuestro <a href="/es/industries/ecommerce/">playbook de marketing para ecommerce</a> &mdash; y <a href="/es/blog/pinterest-ads-home-interiors-local-2026/">para quién funcionan realmente los Pinterest Ads</a>.</p>
        <p style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6a6a6a' }}>Actualizado 26 mayo 2026 &middot; Revisión mensual &middot; Base &euro;2,1M Q1 2026</p>
      </>),
    },
    'pinterest-ads-home-interiors-local-2026': {
      toc: ["¿Puede usarlo cualquiera?", "Para quién funciona", "Estores y decoración", "Retargeting", "Estrategia multiplataforma", "Creatividades", "Qué cuesta", "El veredicto", "Preguntas frecuentes"],
      faqs: [
        { q: '¿Puede cualquiera usar Pinterest Ads?', a: 'Casi. Necesitas una cuenta de empresa gratuita de Pinterest y un sitio verificable, y Ads Manager es self-serve — así que un propietario en solitario puede lanzar sin agencia. La única barrera real es geográfica: Pinterest Ads no están disponibles en todos los países, aunque sí en la mayor parte de Europa, incluyendo España, Alemania, Reino Unido y la UE.' },
        { q: '¿Para quién funcionan realmente los Pinterest Ads?', a: 'Compras visualmente planificadas y consideradas: decoración del hogar e interiores, estores y mobiliario, bodas, moda y belleza, alimentación y DIY, viajes. El hilo común es gente planificando una compra futura con semanas de antelación. Las categorías de impulso, commodity y orientadas al precio tienden a no rendir.' },
        { q: '¿Cómo funciona el retargeting de Pinterest?', a: 'Instala el Pinterest tag (o Conversions API) y podrás hacer retargeting de visitantes del sitio, subir una lista de clientes hasheada (mínimo ~100 coincidencias), hacer retargeting de personas que interactuaron con tus Pins orgánicos, crear audiencias actalike y ejecutar retargeting dinámico que muestre a las personas los productos exactos que vieron de un feed de catálogo.' },
        { q: '¿Puede un negocio local con un showroom usar Pinterest Ads?', a: 'Sí. Geolocaliza la entrega a la ciudad del showroom, códigos postales o un radio alrededor de la tienda, y usa creatividades específicas del lugar — idealmente con la dirección de la tienda. Para un showroom local, Pinterest funciona mejor como una capa de una estrategia de retargeting multiplataforma junto con vídeo de YouTube y display estático.' },
        { q: '¿Cuánto cuestan los Pinterest Ads en 2026?', a: 'Baratos en media: CPC típicamente €0,10–€1,50, CPM alrededor de €2–€5. El bajo coste es un arma de doble filo — es fácil gastar en alcance que nunca convierte, así que el coste por adquisición (o por visita cualificada al showroom) es el único número que importa.' },
      ],
      prose: (<>
        <p><strong>«¿Puede cualquiera usar Pinterest Ads?»</strong> es la pregunta que recibimos. La respuesta corta: sí &mdash; y por eso precisamente la mayoría que los usa no debería. La plataforma es self-serve, el media es barato y la barrera de entrada es casi nula. Nada de eso te dice si funcionará para <em>tu</em> negocio. Este artículo responde la pregunta que deberías hacerte: ¿para quién es Pinterest realmente bueno, y cómo se opera para que sea rentable?</p>

        <h2 id="can-anyone">¿Puede cualquiera usar Pinterest Ads? Técnicamente, casi.</h2>
        <p>Tres cosas separan un negocio de una campaña de Pinterest activa &mdash; y solo una es una barrera real.</p>
        <ul>
          <li><strong>Una cuenta de empresa de Pinterest gratuita.</strong> Cinco minutos. Cualquiera puede crearla.</li>
          <li><strong>Un sitio web verificado.</strong> Un pequeño paso de DNS o meta tag. No es una barrera.</li>
          <li><strong>Disponibilidad en tu país.</strong> Esta es la única barrera real. Pinterest Ads no están activos en todas las regiones &mdash; pero <em>sí</em> están disponibles en la mayor parte de Europa, incluidos España, Alemania, Austria, Reino Unido y la UE. Si abres Ads Manager y ves un mensaje de &ldquo;no disponible en tu región&rdquo;, ese es tu bloqueo. Si no, estás libre.</li>
        </ul>
        <p>Fíjate en lo que <em>no</em> aparece en esa lista: presupuestos mínimos, tamaño de empresa, agencia. Un fundador en solitario con &euro;300 al mes y un sitio verificado puede lanzar una campaña de Pinterest esta tarde.</p>

        <div className="cmp-takeaway">
          <span className="k">La conclusión</span>
          <p><strong>«¿Puedo usar Pinterest Ads?» es la pregunta equivocada.</strong> Cualquiera puede. La pregunta correcta es si las personas que compran lo que vendes usan Pinterest para planificar esa compra. Para algunas categorías la respuesta es un sí rotundo. Para otras, gastarás dinero barato en atención que nunca convierte.</p>
        </div>

        <h2 id="who-its-for">Para quién funciona realmente Pinterest</h2>
        <p>Pinterest es un motor de planificación visual. La gente acude a él para planificar un proyecto futuro &mdash; una reforma, una boda, un armario, una cena, un viaje &mdash; normalmente semanas antes de comprar. Ese único hecho de comportamiento decide quién gana en la plataforma y quién desperdicia dinero.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Categoría</th><th>Fit con Pinterest</th><th>Por qué</th></tr></thead>
            <tbody>
              <tr><th>Decoración del hogar e interiores</th><td><span className="pill pill-good">Excelente</span></td><td>La categoría nativa de Pinterest. Estores, mobiliario, iluminación, pintura &mdash; todo planificado visualmente, semanas antes.</td></tr>
              <tr><th>Bodas y eventos</th><td><span className="pill pill-good">Excelente</span></td><td>La ventana de planificación más larga de cualquier compra de consumidor. Pinterest es el moodboard por defecto.</td></tr>
              <tr><th>Moda, belleza y joyería</th><td><span className="pill pill-good">Fuerte</span></td><td>Muy visual, aspiracional, comportamiento de guardar-y-volver.</td></tr>
              <tr><th>Alimentación, recetas y DIY</th><td><span className="pill pill-good">Fuerte</span></td><td>Intención de guardar para después; genial para marcas basadas en contenido.</td></tr>
              <tr><th>Viajes y hostelería</th><td><span className="pill pill-mid">Bueno</span></td><td>Fuerte para inspiración, más débil en atribución de reservas directas.</td></tr>
              <tr><th>B2B y SaaS</th><td><span className="pill pill-mid">Nicho</span></td><td>Menor volumen, pero los usuarios B2B que están muestran intención real. Raramente canal primario.</td></tr>
              <tr><th>Impulso / commodity / orientado al precio</th><td><span className="pill pill-bad">Débil</span></td><td>Mentalidad equivocada. Los usuarios de Pinterest planifican, no compran por impulso.</td></tr>
            </tbody>
          </table>
        </div>

        <p>Si vendes algo en las dos primeras filas, Pinterest merece un presupuesto de prueba antes que casi cualquier otro canal &ldquo;secundario&rdquo;. Si estás en la última fila, pon el dinero en Google y Meta.</p>

        <h2 id="window-coverings">Por qué una tienda local de estores está más cerca del punto óptimo que la mayoría del ecommerce</h2>
        <p>Aquí está la parte que la mayoría de guías se pierden. La categoría más fuerte de Pinterest &mdash; interiores y decoración del hogar &mdash; está dominada exactamente por el tipo de compra considerada, de alto valor y planificada visualmente que vende un negocio de estores, persianas o toldos. Alguien que planifica nuevas soluciones para ventanas pasará semanas guardando habitaciones que le gustan antes de llamar jamás a un establecimiento.</p>
        <p>Lo que convierte al showroom local en un encaje inusualmente bueno: el comprador ya está en Pinterest, ya está en modo planificación, ya está guardando la estética que tú vendes. El trabajo no es crear demanda &mdash; es estar presente, localmente, mientras planifica, y traerlo de vuelta una vez que ha visitado tu web o tu tienda.</p>

        <div className="cmp-quote">&ldquo;Para interiores y estores, Pinterest no es un canal de generación de demanda. Es un canal de captura de demanda que casualmente parece inspiración.&rdquo;</div>

        <h2 id="retargeting">Cómo funciona el retargeting de Pinterest de verdad</h2>
        <p>El retargeting es donde Pinterest se gana el sueldo en compras consideradas, porque la ventana de planificación es tan larga que un solo contacto casi nunca es suficiente. Hay cinco mecanismos, y la mayoría de marcas usa uno e ignora el resto.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Tipo de audiencia</th><th>Qué hace</th><th>Requisito de configuración</th></tr></thead>
            <tbody>
              <tr><th>Retargeting de visitantes del sitio</th><td>Vuelve a impactar a personas que visitaron tu web o páginas específicas.</td><td>Pinterest tag (o Conversions API) instalado en todo el sitio.</td></tr>
              <tr><th>Targeting por lista de clientes</th><td>Sube emails hasheados o IDs de publicidad móvil para impactar &mdash; o excluir &mdash; clientes existentes.</td><td>CSV de contactos hasheados; mínimo ~100 coincidencias para activar.</td></tr>
              <tr><th>Audiencias de engagement</th><td>Impacta a personas que guardaron, hicieron clic o vieron tus Pins orgánicos o anuncios.</td><td>Dominio verificado y actividad de Pins orgánicos.</td></tr>
              <tr><th>Audiencias Actalike</th><td>El lookalike de Pinterest &mdash; encuentra nuevos usuarios similares a tus mejores clientes.</td><td>Una audiencia de origen (clientes, visitantes del sitio o engagers).</td></tr>
              <tr><th>Retargeting dinámico</th><td>Muestra a las personas los productos exactos que vieron, extraídos en tiempo real de un feed de catálogo.</td><td>Feed de catálogo + Pinterest tag rastreando eventos Checkout, AddToCart y PageVisit. Objetivo Catalog Sales. No disponible en placement de Búsqueda.</td></tr>
            </tbody>
          </table>
        </div>

        <p>Para un negocio con feed de productos, el retargeting dinámico es el de mayor ROI de los cinco &mdash; muestra a las personas exactamente el estor, el sofá o la lámpara que ya miraron, con precios en tiempo real. Para un showroom local sin catálogo de ecommerce, el retargeting de visitantes del sitio más las audiencias de engagement hacen el trabajo principal.</p>

        <div className="cmp-takeaway">
          <span className="k">La conclusión</span>
          <p><strong>Instala el Pinterest tag antes de gastar un euro.</strong> Sin él no tienes audiencias de visitantes del sitio, ni retargeting dinámico, ni datos de conversión, ni forma de saber si algo de esto funcionó. Las marcas que fracasan en Pinterest casi siempre se saltaron este paso y juzgaron la plataforma solo por prospección.</p>
        </div>

        <h2 id="cross-platform">La estrategia de retargeting multiplataforma &mdash; Pinterest, YouTube y display, juntos</h2>
        <p>Toma un distribuidor local de Luxaflex con un showroom. Ya hace retargeting con display estático a personas que visitaron la web. El siguiente paso &mdash; bueno &mdash; es añadir retargeting de <em>vídeo</em> en YouTube con nuevo material del showroom y branding que incluya la dirección real de la tienda. Pinterest es la tercera capa de esa misma idea.</p>
        <p>La lógica es simple: el retargeting de una plataforma es un toque. Tres plataformas coordinadas son una presencia. Una persona que visitó la web del showroom una vez verá, durante las semanas siguientes:</p>
        <ul>
          <li><strong>En YouTube</strong> &mdash; vídeo corto del showroom, los productos en una habitación real, la dirección de la tienda en pantalla.</li>
          <li><strong>En Pinterest</strong> &mdash; las mismas habitaciones como pins guardables y amigables para la planificación, geolocalizados al área de influencia del showroom.</li>
          <li><strong>En display estático</strong> &mdash; el recordatorio siempre activo que mantiene la marca presente entre los touchpoints mayores.</li>
        </ul>

        <div className="cmp-takeaway">
          <span className="k">El detalle local que importa</span>
          <p><strong>Geolocaliza todo al área de influencia del showroom.</strong> Pinterest permite restringir la entrega a ciudades, códigos postales o un radio alrededor de la tienda. No tiene sentido hacer retargeting a alguien a 400&nbsp;km con material de un showroom al que nunca va a ir.</p>
        </div>

        <h2 id="creative">Creatividades &mdash; qué premia Pinterest y qué se rechaza</h2>
        <p>Pinterest es la plataforma menos tolerante con los anuncios que &ldquo;parecen anuncios&rdquo;. Es un entorno de descubrimiento; la gente está ahí para planificar, no para que le vendan. Las creatividades que respetan eso se aprueban rápido y funcionan.</p>
        <ul>
          <li><strong>Vertical, 1000&times;1500px (2:3).</strong> La plataforma está construida para ello.</li>
          <li><strong>Texto superpuesto mínimo.</strong> Pinterest prefiere imágenes limpias. Solo frases cortas.</li>
          <li><strong>Iluminación cálida y natural; habitaciones reales.</strong> El contexto lifestyle supera el producto sobre fondo blanco en interiores.</li>
          <li><strong>Logo presente pero discreto.</strong> Con marca, pero sin agresividad.</li>
          <li><strong>Enfocado en ideas, no agresivo.</strong> &ldquo;Aquí hay una habitación que podrías tener&rdquo; supera a &ldquo;50% de descuento este fin de semana&rdquo;.</li>
          <li><strong>Una landing page que coincide con el pin.</strong> Pinterest revisa todo el recorrido. Una discrepancia entre anuncio y página es el motivo de rechazo más común.</li>
        </ul>

        <h2 id="what-it-costs">Qué cuesta &mdash; y la trampa que lo acompaña</h2>
        <p>Pinterest es barato en media &mdash; CPC típicamente alrededor de &euro;0,10&ndash;&euro;1,50, CPM alrededor de &euro;2&ndash;&euro;5. Es una fracción de Google Search y frecuentemente por debajo de Meta.</p>
        <p>El media barato es exactamente la trampa. El bajo coste hace peligrosamente fácil gastar en alcance que parece productivo y no convierte nada. <strong>Coste por adquisición &mdash; o para un showroom, coste por visita cualificada o consulta &mdash; es el único número que decide si Pinterest permanece en el mix.</strong></p>

        <h2 id="verdict">El veredicto honesto</h2>
        <p>Pinterest Ads en 2026 son genuinamente buenos para un conjunto específico e identificable de negocios: hogar e interiores, bodas, moda, alimentación, DIY &mdash; cualquier cosa comprada mediante planificación visual a lo largo de una ventana larga. Para estos, es uno de los canales más infravalorados del paid media. Para un showroom local de interiorismo o estores, no es un largo recorrido &mdash; está cerca del uso central de la plataforma, y encaja perfectamente en una estrategia de retargeting multiplataforma junto con vídeo de YouTube y display estático.</p>
        <p>Para todos los demás &mdash; ecommerce de commodity, productos de impulso, la mayoría del B2B, todo lo orientado al precio &mdash; es un canal de &ldquo;quizás más adelante&rdquo;. Primero haz bien Google y Meta.</p>

        <h2 id="faqs">Preguntas frecuentes</h2>
        <details className="cmp-faq" open>
          <summary>¿Puede cualquiera usar Pinterest Ads?</summary>
          <p>Casi. Necesitas una cuenta de empresa gratuita de Pinterest y un sitio verificable, y Ads Manager es self-serve &mdash; así que un propietario en solitario puede lanzar sin agencia. La única barrera real es geográfica: Pinterest Ads no están disponibles en todos los países, aunque sí en la mayor parte de Europa, incluyendo España, Alemania, Reino Unido y la UE.</p>
        </details>
        <details className="cmp-faq">
          <summary>¿Para quién funcionan realmente los Pinterest Ads?</summary>
          <p>Compras visualmente planificadas y consideradas: decoración del hogar e interiores, estores y mobiliario, bodas, moda y belleza, alimentación y DIY, viajes. El hilo común es gente planificando una compra futura con semanas de antelación. Las categorías de impulso, commodity y orientadas al precio tienden a no rendir.</p>
        </details>
        <details className="cmp-faq">
          <summary>¿Cómo funciona el retargeting de Pinterest?</summary>
          <p>Instala el Pinterest tag (o Conversions API) y podrás hacer retargeting de visitantes del sitio, subir una lista de clientes hasheada (mínimo ~100 coincidencias), hacer retargeting de personas que interactuaron con tus Pins orgánicos, crear audiencias actalike y ejecutar retargeting dinámico que muestre a las personas los productos exactos que vieron de un feed de catálogo.</p>
        </details>
        <details className="cmp-faq">
          <summary>¿Puede un negocio local con un showroom usar Pinterest Ads?</summary>
          <p>Sí. Geolocaliza la entrega a la ciudad del showroom, códigos postales o un radio alrededor de la tienda, y usa creatividades específicas del lugar &mdash; idealmente con la dirección de la tienda en ellas. Para un showroom local, Pinterest funciona mejor como una capa de una estrategia de retargeting multiplataforma junto con vídeo de YouTube y display estático.</p>
        </details>
        <details className="cmp-faq">
          <summary>¿Cuánto cuestan los Pinterest Ads en 2026?</summary>
          <p>Baratos en media: CPC típicamente &euro;0,10&ndash;&euro;1,50, CPM alrededor de &euro;2&ndash;&euro;5. El bajo coste es un arma de doble filo &mdash; es fácil gastar en alcance que nunca convierte, así que el coste por adquisición (o por visita cualificada al showroom) es el único número que importa.</p>
        </details>

        <h2 id="closing">¿Quieres saber si Pinterest encaja en tu negocio?</h2>
        <p>Gestionamos paid media &mdash; Google, Meta, Microsoft, TikTok y Pinterest &mdash; para marcas de toda Europa, y te diremos con honestidad si Pinterest pertenece a tu mix o si el presupuesto está mejor en otro lugar. <a href="/es/contact/?topic=pinterest-ads">Reserva una llamada gratuita de 30 minutos</a>. Sin slides, sin venta.</p>
        <p>Lectura relacionada: nuestra <a href="/es/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/">comparativa Google Ads vs. Meta vs. TikTok para ecommerce</a> y nuestro <a href="/es/services/paid-social/">servicio de paid social</a>.</p>
        <p style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6a6a6a' }}>Actualizado 1 junio 2026 &middot; Revisión mensual &middot; pmax &middot; Calvi&agrave;, Mallorca</p>
      </>),
    },
    'free-website-design': {
      title: 'Rediseñamos tu web gratis. Esto es lo que recibimos a cambio.',
      deck: 'Diseñamos y construimos webs sin coste inicial. A cambio, gestionamos tu publicidad de pago. El trato completo: cómo funciona, a quién va dirigido y qué implica una reconstrucción real.',
      toc: [
        'Por qué lo ofrecemos',
        'Cómo funciona el trato exactamente',
        'Quién cumple los requisitos',
        'Una reconstrucción real: Portals Properties',
        'Qué conservas tú',
        'Cómo empezar',
      ],
      faqs: [
        {
          q: '¿Qué incluye el diseño web gratuito de pmax?',
          a: 'Todo, desde la estrategia hasta el lanzamiento: diseño UX, arquitectura de la información, dirección de contenidos, desarrollo, optimización de conversión y puesta en marcha. La web se construye sobre una tecnología moderna y rápida, con las Core Web Vitals desde el primer commit. Eres el propietario del sitio sin condiciones — sin plataformas propietarias, sin licencias mensuales, sin ataduras.',
        },
        {
          q: '¿Hay una inversión mínima en publicidad para acceder al diseño web gratuito?',
          a: 'Lo hablamos caso por caso, pero el trato funciona habitualmente para empresas que invierten 1.500 €/mes o más en publicidad de pago — en cualquier plataforma: Google Ads, Meta, TikTok, LinkedIn, Pinterest, Outbrain u otras — o para empresas con un plan firme y presupuestado para empezar. Por debajo de ese nivel, los números no cuadran para ninguna de las dos partes.',
        },
        {
          q: '¿De quién es la web después de que pmax la construya?',
          a: 'Tuya, sin condiciones. El dominio, el código fuente, el proveedor de hosting y todos los activos son tuyos desde el día del lanzamiento. Si en algún momento terminas el acuerdo de gestión publicitaria, la web se queda contigo. No construimos en plataformas propietarias ni usamos la titularidad del sitio como mecanismo de retención.',
        },
        {
          q: '¿Cuánto tiempo tarda una reconstrucción web gratuita?',
          a: 'Normalmente entre seis y diez semanas desde el inicio de la estrategia hasta el lanzamiento. La variable principal es la disponibilidad de contenido por tu parte — cuanto antes puedas proporcionar fotografías, textos e información sobre productos o servicios, más rápido avanzamos.',
        },
        {
          q: '¿Funciona el trato si actualmente no hago publicidad?',
          a: 'A veces. Si tienes un plan firme para empezar con publicidad de pago y el presupuesto para comprometerte, merece la pena hablar. Lo que no funciona son las consultas de empresas sin inversión publicitaria actual o prevista — el trato está diseñado en torno a una relación de gestión de medios de pago, no a un encargo de diseño web independiente.',
        },
      ],
      prose: (
        <>
          <p>La mayor&iacute;a de presupuestos de dise&ntilde;o web arrancan en 3.000 &euro;. Reconstruir una web establecida &mdash;cambiar de plataforma, reorganizar la estructura, reescribir los textos&mdash; suele costar bastante m&aacute;s. Nosotros lo hacemos gratis.</p>
          <p>No es una oferta se&ntilde;uelo con trampa en la letra peque&ntilde;a. El trato es sencillo, y la explicaci&oacute;n tambi&eacute;n.</p>

          <h2 id="why-we-offer-this">Por qu&eacute; lo ofrecemos</h2>
          <p>Gestionamos publicidad de pago para empresas de toda Europa &mdash;Google Ads, Meta, TikTok, LinkedIn, Pinterest, Outbrain y m&aacute;s. El principal obst&aacute;culo para el rendimiento de las campa&ntilde;as casi nunca son los propios anuncios. Es la web.</p>
          <p>Una campa&ntilde;a bien estructurada que env&iacute;a tr&aacute;fico de alta intenci&oacute;n a un sitio lento, confuso o que convierte mal quema la mayor parte del presupuesto antes de poder funcionar. Hemos heredado suficientes situaciones as&iacute; como para saber exactamente cu&aacute;nto cuestan: normalmente entre el 40 % y el 70 % del volumen de conversi&oacute;n potencial, perdido antes de que se env&iacute;e un formulario o se a&ntilde;ada un producto al carrito.</p>
          <p>No podemos mejorar los resultados de un cliente sin arreglar la p&aacute;gina donde aterrizan los anuncios. Y pedirle a un nuevo cliente que gaste 5.000 &euro; en una reconstrucci&oacute;n web antes de haber visto un solo mes de resultados con una nueva agencia es una conversaci&oacute;n dif&iacute;cil &mdash;con raz&oacute;n.</p>
          <p>As&iacute; que cambiamos la estructura. Nosotros asumimos la construcci&oacute;n de la web. T&uacute; nos contratas para gestionar tu publicidad.</p>

          <h2 id="what-the-deal-looks-like">C&oacute;mo funciona el trato exactamente</h2>
          <p>Sin plataformas propietarias. Sin cl&aacute;usulas de permanencia. Sin &laquo;gratuito&raquo; que se convierte en una cuota mensual a los seis meses. La mec&aacute;nica:</p>
          <p><strong>Dise&ntilde;amos y construimos tu web.</strong> Esto incluye estrategia UX, arquitectura de la informaci&oacute;n, dise&ntilde;o de p&aacute;ginas orientado a la conversi&oacute;n, direcci&oacute;n de contenidos, desarrollo y lanzamiento. El sitio se construye sobre una tecnolog&iacute;a moderna y r&aacute;pida &mdash;Core Web Vitals desde el primer commit. Recibes el sitio terminado y eres el propietario absoluto desde el primer d&iacute;a.</p>
          <p><strong>Nos contratas para gestionar tu publicidad de pago.</strong> El compromiso m&iacute;nimo lo discutimos caso por caso. El trato tiene sentido para empresas con un presupuesto publicitario existente &mdash;habitualmente 1.500 &euro;/mes o m&aacute;s en inversi&oacute;n activa, o con un plan firme y presupuestado para empezar. Gestionamos los canales que tengan sentido para tu negocio: Google Ads, Meta, TikTok, LinkedIn, Pinterest, Outbrain o cualquier combinaci&oacute;n.</p>
          <p><strong>Trabajamos en las dos cosas juntos.</strong> Los anuncios y la web no son proyectos separados. Los briefings creativos influyen en las decisiones de las landing pages. Los datos de rendimiento del sitio informan la estrategia de pujas. Los textos probados en anuncios de b&uacute;squeda mejoran los titulares de las p&aacute;ginas. Ambos se retroalimentan de una manera que una agencia de dise&ntilde;o web y una de medios trabajando por separado nunca consiguen replicar.</p>

          <h2 id="who-qualifies">Qui&eacute;n cumple los requisitos</h2>
          <p>Probablemente encajas si:</p>
          <ul>
            <li>Haces publicidad de pago de forma interna o con una agencia actual y no est&aacute;s obteniendo el resultado esperado en coste por lead o ROAS &mdash;en cualquier plataforma: Google, Meta, TikTok, LinkedIn, Pinterest, Outbrain u otras</li>
            <li>Inviertes entre 1.500 &euro; y 25.000 &euro;/mes en publicidad de pago</li>
            <li>Tu web tiene m&aacute;s de tres a&ntilde;os o no se construy&oacute; pensando en la conversi&oacute;n</li>
            <li>Operas en un sector con transacciones de valor real: inmobiliaria, hosteler&iacute;a, servicios profesionales, e-commerce, energ&iacute;as renovables, n&aacute;utica</li>
          </ul>
          <p>Es menos probable que encajes si no tienes presupuesto publicitario actual ni planificado, si solo buscas una agencia de dise&ntilde;o web, o si tu negocio todav&iacute;a no genera ingresos. El trato de <a href="/es/services/conversion-design/">redise&ntilde;o web</a> gratuito est&aacute; dise&ntilde;ado en torno a una relaci&oacute;n de gesti&oacute;n de medios de pago &mdash;sin eso, no tiene sentido para ninguna de las partes.</p>
          <p>Trabajamos con empresas en Espa&ntilde;a, Alemania, el Reino Unido y la UE en general.</p>

          <h2 id="portals-properties">Una reconstrucci&oacute;n real: Portals Properties</h2>
          <p>Portals Properties es una agencia inmobiliaria boutique ubicada en Puerto Portals, Mallorca, especializada en la venta de propiedades y alquileres de larga duraci&oacute;n para compradores brit&aacute;nicos. Cuando llegaron a nosotros en el cuarto trimestre de 2025, invert&iacute;an 6.200 &pound;/mes en Google Ads y generaban unas 28 consultas cualificadas al mes &mdash;un coste por lead cualificado de 221 &pound;.</p>
          <p>Las campa&ntilde;as estaban razonablemente bien estructuradas. El problema era la web.</p>
          <p>Construida en 2019. Core Web Vitals: 42 en m&oacute;vil. El buscador de propiedades requer&iacute;a cuatro clics antes de que apareciera un formulario de contacto. La imagen principal era un stock. El formulario de consulta ten&iacute;a once campos, incluyendo tres que preguntaban lo mismo de formas distintas.</p>
          <p>Reconstruimos el sitio en ocho semanas, en paralelo a la transici&oacute;n de las cuentas publicitarias. La nueva web carga en menos de 1,5 segundos en m&oacute;vil (Core Web Vitals: 91), muestra un buscador de propiedades y un formulario de dos campos en la home, sustituye las fotos de stock por im&aacute;genes del propio equipo y un v&iacute;deo de tour de 90 segundos, y muestra precios de venta reales y testimonios de clientes en cada ficha &mdash;porque los compradores de inmuebles en Mallorca eligen a su agente tanto como eligen la propiedad.</p>
          <p>Tras 14 semanas con el sitio reconstruido y nuestra gesti&oacute;n de Google Ads funcionando juntos:</p>
          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>M&eacute;trica</th>
                  <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Antes</th>
                  <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Despu&eacute;s (14 semanas)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Leads cualificados / mes', before: '28', after: '71 (+154 %)' },
                  { metric: 'Coste por lead cualificado', before: '£221', after: '£94' },
                  { metric: 'ROAS Google Ads', before: '1,9×', after: '4,6×' },
                  { metric: 'Core Web Vitals — móvil', before: '42 / 100', after: '91 / 100' },
                  { metric: 'Formularios org&aacute;nicos / mes', before: '11', after: '21' },
                ].map(row => (
                  <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.before}</td>
                    <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0', fontWeight: 700 }}>{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>El presupuesto publicitario no cambi&oacute;. Lo que cambi&oacute; fue ad&oacute;nde llegaba el tr&aacute;fico &mdash;y qu&eacute; encontraba al llegar.</p>

          <h2 id="what-you-keep">Qu&eacute; conservas t&uacute;</h2>
          <p>La web es tuya. Sin condiciones. Dominio, c&oacute;digo fuente, decisiones de hosting, todos los activos &mdash;todo tuyo desde el primer d&iacute;a. Si terminas el acuerdo publicitario, la web se va contigo, intacta.</p>
          <p>Lo mismo aplica a tus cuentas publicitarias. Tu cuenta de Google Ads permanece bajo tu correo electr&oacute;nico. Tu Meta Business Manager es tuyo. Nosotros operamos dentro de ambas como gestores, no como propietarios. El historial de campa&ntilde;as, los datos de audiencia y las bibliotecas de creatividades pertenecen a tu empresa, no a la nuestra.</p>
          <p>Somos directos sobre esto porque lo contrario &mdash;agencias que se quedan con la propiedad de tus cuentas y tu web&mdash; no es ninguna rareza, y genera problemas serios para las empresas que quieren cambiar o renegociar m&aacute;s adelante. Hemos heredado suficientes de esas situaciones como para saber lo que cuestan. Lo hemos convertido en un principio fundamental hacer exactamente lo contrario.</p>

          <h2 id="how-to-start">C&oacute;mo empezar</h2>
          <p>Cu&eacute;ntanos tu inversi&oacute;n publicitaria actual, tu web y el resultado que buscas. La primera llamada es de 30 minutos y corre por nuestra cuenta.</p>
          <p>Te diremos con claridad si tu situaci&oacute;n encaja con el trato de dise&ntilde;o web gratuito y, si no, c&oacute;mo es la alternativa honesta. No aceptamos todos los proyectos &mdash;y no te diremos lo contrario.</p>
          <h2>&iquest;Listo para hablar?</h2>
          <p>Si algo de lo anterior te resulta familiar, <a href="/es/contact/?topic=free-website-design">cu&eacute;ntanos brevemente tu situaci&oacute;n</a> y te respondemos en un d&iacute;a laborable. Primera conversaci&oacute;n: 30 minutos, sin coste.</p>
        </>
      ),
    },
  } as Record<string, LocalizedBlogDetail>,
}

export type EsTranslations = typeof es
