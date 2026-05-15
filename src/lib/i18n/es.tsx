import type { ReactNode } from 'react'
import type { ServiceDetail, IndustryDetail } from './de'
export type { ServiceDetail, IndustryDetail }

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
        Ayudamos a marcas a crecer en internet. Publicidad de pago, SEO y el nuevo mundo de la{' '}
        <em>búsqueda con IA</em> — conectados, bien medidos y explicados en castellano.
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
      { step: '01', word: 'Listen', time: '2 sem.', desc: 'Primero entendemos el negocio. Luego los datos, luego los canales. Las presentaciones vienen al final.' },
      { step: '02', word: 'Fix', time: '6 sem.', desc: 'Tracking, feeds, datos estructurados, fundamentos. El trabajo poco glamuroso del que depende todo lo demás.' },
      { step: '03', word: 'Grow', time: '12 sem.+', desc: 'Las campañas escalan, los creativos encuentran su ritmo, el dashboard empieza a decir la verdad.' },
      { step: '04', word: 'Defend', time: '∞', desc: 'SEO, visibilidad en IA, protección de marca. Un trabajo silencioso que se acumula durante años.' },
    ],
    journalKicker: '04 — Blog',
    journalTitle: 'Lo que estamos escribiendo.',
    journalAside: 'Notas de trabajo, playbooks y opinión. Escrito por quienes hacen el trabajo, para quienes hacen el trabajo.',
    journalCta: 'Todos los artículos →',
    journalRead: 'Leer artículo',
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
        Gestionamos{' '}<a href="/es/services/google-ads">Google Ads</a>,{' '}
        <a href="/es/services/paid-social">paid social</a>,{' '}
        <a href="/es/services/seo">SEO</a>,{' '}
        <a href="/es/services/ai-visibility">visibilidad en IA</a>,{' '}
        <a href="/es/services/analytics">analítica</a>,{' '}
        <a href="/es/services/conversion-design">diseño de conversión</a> y{' '}
        <a href="/es/services/creative">producción creativa</a> — siete servicios, un sistema.{' '}
        <a href="/es/services">Ver todos los servicios →</a>
      </>
    ),
    casesText: <>Una selección de <a href="/es/cases">casos de estudio</a> está disponible en nuestro archivo de trabajo — diez proyectos con los números reales.</>,
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
}

export type EsTranslations = typeof es
