import Link from 'next/link'

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
    { href: `${p}/services/seo`, label: 'SEO' },
    ...(locale === 'en' ? [{ href: '/seo-company-mallorca', label: 'SEO Mallorca' }] : []),
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
          <div>{t.copyright}</div>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/pmax-online-s-l/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/profile.php?viewas=100000686899395&amp;id=61590296614624" target="_blank" rel="noopener noreferrer">Facebook</a>
            {legalLinks.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
