import Link from 'next/link'
import CookieSettingsLink from './CookieSettingsLink'

function CrunchJunkieBadge() {
  return (
    <a
      href="https://crunchjunkie.io/?ref=ZV6XQX7E"
      target="_blank"
      rel="noopener"
      style={{ display:'inline-flex', alignItems:'center', textDecoration:'none', boxSizing:'border-box', gap:9, padding:'7px 14px 7px 8px', borderRadius:999, fontWeight:600, fontSize:13.5, lineHeight:1, fontFamily:'-apple-system,system-ui,sans-serif', background:'#fff', border:'1px solid #e6e6e9', boxShadow:'0 1px 3px rgba(0,0,0,.12)', color:'#1d1d1f', flexShrink:0 }}
    >
      <span style={{ display:'inline-flex' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 230" width="26" height="30" style={{ display:'block' }}>
          <g>
            <animateTransform attributeName="transform" type="translate" values="0 0;0 -6;0 0" dur="2.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" />
            <ellipse cx="76" cy="210" rx="22" ry="13" fill="#150f23" />
            <ellipse cx="124" cy="210" rx="22" ry="13" fill="#150f23" />
            <path d="M42 122 C42 80 66 56 100 56 C134 56 158 80 158 122 L158 170 C158 196 134 208 100 208 C66 208 42 196 42 170 Z" fill="#6a5fc1" stroke="#150f23" strokeWidth="5" />
            <path d="M70 150 C70 134 84 126 100 126 C116 126 130 134 130 150 C130 168 116 178 100 178 C84 178 70 168 70 150 Z" fill="#79628c" />
            <g>
              <animateTransform attributeName="transform" type="rotate" values="-4 44 128;13 44 128;-4 44 128" dur="1.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
              <path d="M44 128 C24 132 18 150 26 164" stroke="#150f23" strokeWidth="14" strokeLinecap="round" fill="none" />
              <path d="M44 128 C24 132 18 150 26 164" stroke="#6a5fc1" strokeWidth="8" strokeLinecap="round" fill="none" />
              <g transform="rotate(-12 26 168)">
                <rect x="6" y="150" width="40" height="30" rx="6" fill="#c2ef4e" stroke="#150f23" strokeWidth="4" />
                <rect x="13" y="160" width="6" height="12" rx="2" fill="#150f23" />
                <rect x="23" y="156" width="6" height="16" rx="2" fill="#150f23" />
                <rect x="33" y="163" width="6" height="9" rx="2" fill="#150f23" />
              </g>
            </g>
            <path d="M156 130 C176 134 182 150 176 166" stroke="#150f23" strokeWidth="14" strokeLinecap="round" fill="none" />
            <path d="M156 130 C176 134 182 150 176 166" stroke="#6a5fc1" strokeWidth="8" strokeLinecap="round" fill="none" />
            <circle cx="80" cy="58" r="24" fill="#fff" stroke="#150f23" strokeWidth="5" />
            <circle cx="122" cy="62" r="19" fill="#fff" stroke="#150f23" strokeWidth="5" />
            <g>
              <animateTransform attributeName="transform" type="translate" values="0 0;3 -1;1 3;-3 1;-1 -3;2 2;0 0" dur="3s" repeatCount="indefinite" />
              <circle cx="85" cy="62" r="9" fill="#150f23" />
              <circle cx="125" cy="66" r="7.5" fill="#150f23" />
            </g>
            <path d="M68 104 Q100 100 132 104 Q126 138 100 138 Q74 138 68 104 Z" fill="#150f23" />
            <rect x="76" y="104" width="11" height="11" rx="2" fill="#fff" />
            <rect x="90" y="104" width="11" height="11" rx="2" fill="#fff" />
            <rect x="104" y="104" width="11" height="11" rx="2" fill="#fff" />
            <rect x="118" y="104" width="9" height="11" rx="2" fill="#fff" />
            <path d="M88 130 Q100 142 112 130 Z" fill="#c2ef4e" />
          </g>
        </svg>
      </span>
      <span>AI visibility by CrunchJunkie</span>
    </a>
  )
}

const content = {
  en: {
    tag: 'Digital marketing from Mallorca, for brands across Europe.',
    services: 'Services', industries: 'Industries', company: 'Company', office: 'Mallorca office',
    copyright: '© 2026 pmax Online S.L. · VAT ES B57948123 · Calvià, Mallorca',
    links: { about: 'About pmax', cases: 'Work', blog: 'Journal', contact: 'Contact' },
  },
  de: {
    tag: 'Digitales Marketing von Mallorca, für Marken in ganz Europa.',
    services: 'Leistungen', industries: 'Branchen', company: 'Unternehmen', office: 'Büro Mallorca',
    copyright: '© 2026 pmax Online S.L. · USt-IdNr. ES B57948123 · Calvià, Mallorca',
    links: { about: 'Über pmax', cases: 'Referenzen', blog: 'Journal', contact: 'Kontakt' },
  },
  es: {
    tag: 'Marketing digital desde Mallorca, para marcas en toda Europa.',
    services: 'Servicios', industries: 'Sectores', company: 'Empresa', office: 'Oficina Mallorca',
    copyright: '© 2026 pmax Online S.L. · NIF ES B57948123 · Calvià, Mallorca',
    links: { about: 'Sobre pmax', cases: 'Trabajo', blog: 'Blog', contact: 'Contacto' },
  },
}

export default function Footer({ locale = 'en' }: { locale?: string }) {
  const t = content[locale as keyof typeof content] ?? content.en
  const p = locale === 'en' ? '' : `/${locale}`

  const serviceLinks = [
    { href: `${p}/services/ai-visibility`, label: locale === 'de' ? 'KI-Sichtbarkeit' : locale === 'es' ? 'Visibilidad en IA' : 'AI search visibility' },
    { href: `${p}/services/google-ads`, label: 'Google Ads' },
    { href: `${p}/services/paid-social`, label: 'Paid social' },
    { href: locale === 'de' ? '/de/seo-agentur-mallorca' : locale === 'es' ? '/es/agencia-seo-mallorca' : '/seo-company-mallorca', label: 'SEO' },
    { href: `${p}/services/conversion-design`, label: locale === 'de' ? 'Conversion Design' : locale === 'es' ? 'Diseño de conversión' : 'Conversion design' },
    { href: `${p}/services/analytics`, label: locale === 'de' ? 'Analytics & Tracking' : locale === 'es' ? 'Analítica y tracking' : 'Analytics & tracking' },
    { href: `${p}/services/creative`, label: locale === 'de' ? 'Creative Production' : locale === 'es' ? 'Producción creativa' : 'Creative production' },
  ]

  const industryLinks = [
    { href: `${p}/industries/ecommerce`, label: 'E-commerce' },
    { href: `${p}/industries/real-estate`, label: locale === 'de' ? 'Immobilien' : locale === 'es' ? 'Inmobiliaria' : 'Real estate' },
    { href: `${p}/industries/healthcare`, label: locale === 'de' ? 'Gesundheit' : locale === 'es' ? 'Sanidad' : 'Healthcare' },
    { href: `${p}/industries/hospitality`, label: locale === 'de' ? 'Hotellerie' : locale === 'es' ? 'Hostelería' : 'Hospitality' },
    { href: `${p}/industries/renewables`, label: locale === 'de' ? 'Erneuerbare Energien' : locale === 'es' ? 'Renovables' : 'Renewables' },
    { href: `${p}/industries/boating`, label: locale === 'de' ? 'Yachting' : locale === 'es' ? 'Náutica' : 'Boating & yachting' },
    { href: `${p}/industries`, label: locale === 'de' ? 'Alle Branchen →' : locale === 'es' ? 'Todos los sectores →' : 'All industries →' },
  ]

  const legalLinks = [
    { href: `${p}/legal/imprint`, label: locale === 'de' ? 'Impressum' : locale === 'es' ? 'Aviso legal' : 'Legal notice' },
    { href: `${p}/legal/privacy`, label: locale === 'de' ? 'Datenschutz' : locale === 'es' ? 'Privacidad' : 'Privacy policy' },
    { href: `${p}/legal/cookies`, label: 'Cookies' },
    { href: `${p}/legal/terms`, label: locale === 'de' ? 'AGB' : locale === 'es' ? 'Condiciones' : 'Terms & conditions' },
  ]

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-mast">
          <span className="footer-wordmark">pmax<span className="dot-mark" aria-hidden="true" /></span>
          <span className="footer-tag">{t.tag}</span>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <div className="footer-col-title">{t.services}</div>
            <ul>{serviceLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">{t.industries}</div>
            <ul>{industryLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">{t.company}</div>
            <ul>
              <li><Link href={`${p}/about`}>{t.links.about}</Link></li>
              <li><Link href={`${p}/cases`}>{t.links.cases}</Link></li>
              <li><Link href={`${p}/blog`}>{t.links.blog}</Link></li>
              <li><Link href={`${p}/contact`}>{t.links.contact}</Link></li>
              {legalLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">{t.office}</div>
            <p>pmax Online S.L.<br />Calle Cordova, 5<br />07184 Calvià, Mallorca<br />Spain</p>
            <p style={{ marginTop: 14 }}>
              <a href="mailto:hello@pmax.online">hello@pmax.online</a><br />
              <a href="tel:+34871242160">+34 871 242 160</a>
            </p>
          </div>
        </div>

        <div className="footer-base">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div>{t.copyright}</div>
            <CrunchJunkieBadge />
          </div>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/pmax-online-s-l/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/profile.php?viewas=100000686899395&amp;id=61590296614624" target="_blank" rel="noopener noreferrer">Facebook</a>
            {legalLinks.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}
            <CookieSettingsLink locale={locale} />
          </div>
        </div>
      </div>
    </footer>
  )
}
