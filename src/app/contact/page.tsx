import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { siteAlternates } from '@/lib/hreflang'
import { breadcrumb } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact — digital marketing agency in Mallorca | pmax',
  description: 'Start a conversation about your marketing. Email hello@pmax.online or call +34 871 242 160. Based in Mallorca. First 30 minutes free.',
  alternates: siteAlternates('/contact/'),
}

const jsonLd = [
  breadcrumb([{ name: 'Home', url: 'https://pmax.online/' }, { name: 'Contact', url: 'https://pmax.online/contact/' }]),
  {
    '@context': 'https://schema.org',
    '@type': ['AdvertisingAgency', 'LocalBusiness'],
    '@id': 'https://pmax.online/#org',
    name: 'pmax',
    legalName: 'PMax Online S.L.',
    url: 'https://pmax.online/',
    telephone: '+34871242160',
    email: 'hello@pmax.online',
    address: { '@type': 'PostalAddress', streetAddress: 'Calle Cordova, 5', addressLocality: 'Calvià', addressRegion: 'Illes Balears', postalCode: '07184', addressCountry: 'ES' },
    geo: { '@type': 'GeoCoordinates', latitude: 39.5639, longitude: 2.5071 },
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' }],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34871242160',
      email: 'hello@pmax.online',
      contactType: 'sales',
      availableLanguage: ['English', 'German', 'Spanish'],
    },
  },
]

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span>Contact</span>
            </nav>
            <span className="page-intro-eyebrow">Talk to us</span>
            <h1 className="page-intro-title">Let&apos;s <em>chat</em>.</h1>
            <p className="page-intro-deck">
              First conversation is 30 minutes, on us. Tell us a bit about what you&apos;re trying
              to grow and we&apos;ll come back within one working day.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container contact-grid">
            <ContactForm />

            <aside style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="card-outlined" style={{ padding: 28 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-jelly-mint)', marginBottom: 14 }}>
                  Direct line
                </div>
                <p style={{ margin: '0 0 8px' }}>
                  <a href="mailto:hello@pmax.online" style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 20, color: '#fff' }}>
                    hello@pmax.online
                  </a>
                </p>
                <p style={{ margin: 0 }}>
                  <a href="tel:+34871242160" style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 20, color: '#fff' }}>
                    +34 871 242 160
                  </a>
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#949494', margin: '14px 0 0' }}>
                  Mon – Fri · 09:00 – 18:00 CET
                </p>
              </div>

              <div className="card-slate" style={{ padding: 28 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-jelly-mint)', marginBottom: 14 }}>
                  Mallorca office
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.55, color: '#fff', margin: 0 }}>
                  PMax Online S.L.<br />
                  Calle Cordova, 5<br />
                  07184 Calvià, Mallorca<br />
                  Spain
                </p>
                <a
                  href="https://maps.google.com/?q=Calle+Cordova+5+Calvia+Mallorca"
                  target="_blank"
                  rel="noopener"
                  style={{ display: 'inline-flex', gap: 8, marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-jelly-mint)' }}
                >
                  Open in maps →
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="section" aria-labelledby="find-us">
          <div className="container">
            <div className="map-head">
              <span className="map-eyebrow">/ 02 — Find the studio</span>
              <h2 className="map-title" id="find-us">Calvià, <em>Mallorca</em>.</h2>
              <p className="map-deck">
                Twenty minutes west of Palma. We have coffee, a sea view from the terrace,
                and meeting rooms that don&apos;t smell like agencies usually&nbsp;smell.
              </p>
            </div>

            <div className="map-frame reveal">
              <span className="map-corner map-corner--tl" aria-hidden="true" />
              <span className="map-corner map-corner--tr" aria-hidden="true" />
              <span className="map-corner map-corner--bl" aria-hidden="true" />
              <span className="map-corner map-corner--br" aria-hidden="true" />

              <div className="map-canvas">
                <iframe
                  title="pmax studio location — Calle Cordova 5, Calvià, Mallorca"
                  src="https://www.google.com/maps?q=Calle%20Cordova%205%2C%2007184%20Calvi%C3%A0%2C%20Mallorca%2C%20Spain&t=m&z=15&output=embed&iwloc=near"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <span className="map-pin" aria-hidden="true">
                  <span className="map-pin-dot" />
                  <span className="map-pin-pulse" />
                </span>
              </div>

              <aside className="map-panel">
                <div className="map-panel-row">
                  <span className="map-panel-key">Address</span>
                  <p className="map-panel-val">
                    PMax Online S.L.<br />
                    Calle Cordova, 5<br />
                    07184 Calvià<br />
                    Mallorca, Spain
                  </p>
                </div>
                <div className="map-panel-row">
                  <span className="map-panel-key">Coordinates</span>
                  <p className="map-panel-val map-panel-mono">39.5639° N<br />2.5071° E</p>
                </div>
                <div className="map-panel-row">
                  <span className="map-panel-key">Hours</span>
                  <p className="map-panel-val">
                    Mon – Fri<br />
                    09:00 – 18:00 CET<br />
                    <span className="map-panel-muted">Sat / Sun — by appointment</span>
                  </p>
                </div>
                <div className="map-panel-actions">
                  <a
                    className="map-cta"
                    href="https://www.google.com/maps/dir/?api=1&destination=Calle+Cordova+5,+07184+Calvi%C3%A0,+Mallorca,+Spain"
                    target="_blank"
                    rel="noopener"
                  >
                    Get directions <span className="arrow" aria-hidden="true">→</span>
                  </a>
                  <a
                    className="map-cta-ghost"
                    href="https://maps.apple.com/?address=Calle+Cordova+5,+07184+Calvi%C3%A0,+Mallorca,+Spain"
                    target="_blank"
                    rel="noopener"
                  >
                    Apple Maps
                  </a>
                </div>
              </aside>
            </div>

            <ul className="map-meta">
              <li><span className="map-meta-key">Airport</span><span className="map-meta-val">PMI — 22&nbsp;min by car</span></li>
              <li><span className="map-meta-key">Palma centre</span><span className="map-meta-val">18&nbsp;min · A1 motorway</span></li>
              <li><span className="map-meta-key">Bus</span><span className="map-meta-val">TIB 104 / 105 — stop &ldquo;Calvià Vila&rdquo;</span></li>
              <li><span className="map-meta-key">Parking</span><span className="map-meta-val">Free street parking outside</span></li>
            </ul>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
