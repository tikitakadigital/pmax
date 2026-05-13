import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { breadcrumb } from '@/lib/schema'
import { getT } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getT(lang)
  return {
    title: t.contact.metaTitle,
    description: t.contact.metaDesc,
    alternates: {
      canonical: `https://pmax.online/${lang}/contact/`,
      languages: { 'en': 'https://pmax.online/contact/', 'de': 'https://pmax.online/de/contact/', 'es': 'https://pmax.online/es/contact/', 'x-default': 'https://pmax.online/contact/' },
    },
  }
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getT(lang)
  const c = t.contact
  const p = `/${lang}`

  const crumbLabel = lang === 'de' ? 'Kontakt' : lang === 'es' ? 'Contacto' : 'Contact'
  const jsonLd = breadcrumb([
    { name: 'Home', url: `https://pmax.online/${lang}/` },
    { name: crumbLabel, url: `https://pmax.online/${lang}/contact/` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Breadcrumb">
              <Link href={p}>Home</Link><span className="sep">/</span>
              <span>{crumbLabel}</span>
            </nav>
            <span className="page-intro-eyebrow">{c.eyebrow}</span>
            <h1 className="page-intro-title">{c.title}</h1>
            <p className="page-intro-deck">{c.deck}</p>
          </div>
        </section>

        <section className="section">
          <div className="container contact-grid">
            <ContactForm locale={lang as 'de' | 'es'} />
            <aside style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="card-outlined" style={{ padding: 28 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-jelly-mint)', marginBottom: 14 }}>{c.directLabel}</div>
                <p style={{ margin: '0 0 8px' }}>
                  <a href="mailto:hello@pmax.online" style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 20, color: '#fff' }}>hello@pmax.online</a>
                </p>
                <p style={{ margin: 0 }}>
                  <a href="tel:+34871242160" style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 20, color: '#fff' }}>+34 871 242 160</a>
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#949494', margin: '14px 0 0' }}>{c.hoursLabel}</p>
              </div>
              <div className="card-slate" style={{ padding: 28 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-jelly-mint)', marginBottom: 14 }}>{c.officeLabel}</div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.55, color: '#fff', margin: 0 }}>Calle Cordova, 5<br />07184 Calvià<br />Mallorca, Spain</p>
              </div>
            </aside>
          </div>
        </section>

      </main>
      <Footer locale={lang} />
    </>
  )
}
