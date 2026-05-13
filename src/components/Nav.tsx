'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const labels = {
  en: { services: 'Services', industries: 'Industries', cases: 'Work', blog: 'Journal', about: 'About', cta: 'Start a project' },
  de: { services: 'Leistungen', industries: 'Branchen', cases: 'Referenzen', blog: 'Journal', about: 'Über uns', cta: 'Projekt starten' },
  es: { services: 'Servicios', industries: 'Sectores', cases: 'Trabajo', blog: 'Blog', about: 'Nosotros', cta: 'Iniciar proyecto' },
} as const

type Locale = keyof typeof labels

function detectLocale(pathname: string): Locale {
  if (pathname.startsWith('/de')) return 'de'
  if (pathname.startsWith('/es')) return 'es'
  return 'en'
}

function switchedPath(pathname: string, target: Locale): string {
  const stripped = pathname.replace(/^\/(de|es)/, '') || '/'
  if (target === 'en') return stripped
  return `/${target}${stripped === '/' ? '' : stripped}`
}

export default function Nav() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const locale = detectLocale(pathname)
  const prefix = locale === 'en' ? '' : `/${locale}`
  const t = labels[locale]

  const links = [
    { href: `${prefix}/services`, label: t.services },
    { href: `${prefix}/industries`, label: t.industries },
    { href: `${prefix}/cases`, label: t.cases },
    { href: `${prefix}/blog`, label: t.blog },
    { href: `${prefix}/about`, label: t.about },
  ]

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => { setOpen(false) }, [pathname])

  function isActive(href: string) {
    if (href === prefix + '/' || href === '/') return pathname === href
    return pathname.startsWith(href)
  }

  function handleLangSwitch(target: Locale) {
    router.push(switchedPath(pathname, target))
  }

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <header className="nav" role="banner">
        <div className="nav-inner">
          <Link href={prefix || '/'} className="nav-brand" aria-label="pmax — home">
            pmax<span className="dot" aria-hidden="true" />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className={`nav-link${isActive(href) ? ' active' : ''}`}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="nav-right">
            <div className="lang-switch" role="group" aria-label="Language">
              <button type="button" aria-pressed={locale === 'en'} onClick={() => handleLangSwitch('en')}>EN</button>
              <button type="button" aria-pressed={locale === 'de'} onClick={() => handleLangSwitch('de')}>DE</button>
              <button type="button" aria-pressed={locale === 'es'} onClick={() => handleLangSwitch('es')}>ES</button>
            </div>
            <Link href={`${prefix}/contact`} className="nav-cta">
              {t.cta} <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <button
              className="nav-burger"
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="nav-drawer"
              onClick={() => setOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <aside className={`nav-drawer${open ? ' is-open' : ''}`} id="nav-drawer" aria-label="Mobile menu" aria-hidden={!open}>
        <div className="nav-drawer-head">
          <Link href={prefix || '/'} className="nav-brand" onClick={() => setOpen(false)}>
            pmax<span className="dot" aria-hidden="true" />
          </Link>
          <button className="nav-burger" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
        <div className="nav-drawer-lang">
          {(['en', 'de', 'es'] as Locale[]).map(l => (
            <button
              key={l}
              type="button"
              onClick={() => handleLangSwitch(l)}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
                letterSpacing: '1.5px', textTransform: 'uppercase',
                padding: '8px 14px', border: '1px solid',
                borderColor: locale === l ? 'var(--color-jelly-mint)' : '#2d2d2d',
                color: locale === l ? 'var(--color-jelly-mint)' : '#949494',
                background: 'transparent', cursor: 'pointer', borderRadius: 20,
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <ul className="nav-drawer-links">
          {links.map(({ href, label }) => (
            <li key={href}><Link href={href}>{label}</Link></li>
          ))}
          <li><Link href={`${prefix}/contact`}>{t.cta} →</Link></li>
        </ul>
      </aside>
    </>
  )
}
