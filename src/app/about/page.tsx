import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { siteAlternates } from '@/lib/hreflang'
import { breadcrumb, org } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About pmax — performance marketing from Mallorca | pmax',
  description: 'Senior digital marketing team in Calvià, Mallorca. Google Ads, SEO and AI search visibility for brands across Europe. Flat fees, no agency bloat.',
  alternates: siteAlternates('/about/'),
}

const jsonLd = [
  breadcrumb([{ name: 'Home', url: 'https://pmax.online/' }, { name: 'About', url: 'https://pmax.online/about/' }]),
  { '@context': 'https://schema.org', '@type': 'AboutPage', url: 'https://pmax.online/about/', name: 'About pmax', about: { '@id': 'https://pmax.online/#org' } },
  { '@context': 'https://schema.org', ...org },
]

export default function AboutPage() {
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
              <span>About</span>
            </nav>
            <span className="page-intro-eyebrow">About pmax</span>
            <h1 className="page-intro-title">
              Small team.<br /><em>Big agency</em> results.
            </h1>
            <p className="page-intro-deck">
              A small team of marketers, analysts and creatives based in Calvià, Mallorca — running
              performance and AI visibility programmes for brands across Europe since 2023.
            </p>
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stat">
              <span className="stat-num">2023</span>
              <span className="stat-label">Founded in Mallorca by Philipp Enders</span>
            </li>
            <li className="stat">
              <span className="stat-num">€18M</span>
              <span className="stat-label">Total client media spend managed since inception</span>
            </li>
            <li className="stat">
              <span className="stat-num">7</span>
              <span className="stat-label">Countries our clients operate in</span>
            </li>
            <li className="stat">
              <span className="stat-num">93%</span>
              <span className="stat-label">Client retention over 12 months</span>
            </li>
          </ul>
        </section>

        <section className="section">
          <div className="container about-layout">

            <div className="prose reveal">
              <h2>Why we exist</h2>
              <p>
                Most digital marketing agencies sell channels. We sell a system. Two years ago, our founder
                Philipp Enders was a client-side growth lead watching agencies pitch the same
                &ldquo;Google + Meta + a bit of SEO&rdquo; deck regardless of the business in front of them.
                He&apos;d left to build something different: a small team that does fewer things, deeper,
                with the technical chops to actually fix a tracking setup or rebuild a product feed —
                not just argue about it in meetings.
              </p>
              <p>
                Two years later, the principles haven&apos;t changed. We pick clients we think we can
                genuinely help. We tell them the truth, including the parts they don&apos;t want to hear.
                We bill flat fees, not percentages of media spend, because we never want a financial
                incentive to recommend more advertising than is actually warranted.
              </p>

              <h2>How we work</h2>
              <p>
                Every engagement starts with a two-week listening phase — we open up the data, talk to
                your team, understand the business. We won&apos;t suggest anything until we&apos;ve earned
                an opinion. After that: a written plan, a fixed scope, a flat monthly fee, and weekly
                working sessions where you see what&apos;s being built.
              </p>
              <p>
                We don&apos;t do &ldquo;discovery sprints&rdquo; or &ldquo;co-creation workshops&rdquo;.
                We do the work, share it as we go, and ship.
              </p>

              <h2>What we believe</h2>
              <ul>
                <li><strong>Boring fundamentals first.</strong> Tracking, feeds, structured data and conversion design make 80% of the difference. Everything else amplifies.</li>
                <li><strong>Profit, not revenue.</strong> A ROAS number that doesn&apos;t account for margin is marketing fiction.</li>
                <li><strong>Creative is a system, not a sideline.</strong> The algorithm decides which ad to show — but you decide which ads exist.</li>
                <li><strong>AI visibility is the new SEO.</strong> The brands that show up in ChatGPT and Perplexity in 2026 will own the next decade of organic acquisition.</li>
                <li><strong>Honesty compounds.</strong> Telling a client their account isn&apos;t broken — when it isn&apos;t — is how we keep them for five years.</li>
              </ul>

              <h2>Certifications &amp; partnerships</h2>
              <p>
                Google Partner. Meta Business Partner. Microsoft Advertising Partner.
                ISO 27001-aligned data handling for client information.
              </p>

              <h2>What we do</h2>
              <p>
                We run <Link href="/services/google-ads">Google Ads</Link>, <Link href="/services/paid-social">paid social</Link>, <Link href="/services/seo">SEO</Link>, <Link href="/services/ai-visibility">AI search visibility</Link>, <Link href="/services/analytics">analytics</Link>, <Link href="/services/conversion-design">conversion design</Link> and <Link href="/services/creative">creative production</Link> — seven services, one operating system. <Link href="/services">See all services →</Link>
              </p>
              <p>
                A selection of <Link href="/cases">client results</Link> is available in our work archive — ten projects with the actual numbers.
              </p>
            </div>

            <aside style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="card-outlined reveal" style={{ padding: 0, overflow: 'hidden' }}>
                <Image
                  src="/philipp-enders.webp"
                  alt="Philipp Enders, Founder &amp; Director of pmax"
                  width={720}
                  height={844}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{ padding: 28 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-jelly-mint)', marginBottom: 14 }}>
                    Leadership
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 36, lineHeight: 0.95, color: '#fff', marginBottom: 8 }}>
                    Philipp Enders
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#949494', marginBottom: 14 }}>
                    Founder &amp; Director
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: '#e9e9e9', margin: 0 }}>
                    20+ years in digital marketing. Founder of{' '}
                    <a href="https://tikitaka.digital" target="_blank" rel="noopener" style={{ color: 'var(--color-jelly-mint)', borderBottom: '1px solid' }}>tikitaka.digital</a>,
                    {' '}the Hamburg-based agency, before opening pmax in Mallorca. Writes most of our journal
                    and still runs accounts personally.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/philippenders/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', gap: 8, marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-jelly-mint)' }}
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>

              <div className="card-slate reveal" style={{ padding: 28 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-jelly-mint)', marginBottom: 14 }}>
                  Mallorca HQ
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.55, color: '#fff', margin: 0 }}>
                  Calle Cordova, 5<br />
                  07184 Calvià<br />
                  Mallorca, Spain
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.55, color: '#e9e9e9', margin: '14px 0 0' }}>
                  <a href="tel:+34871242160">+34 871 242 160</a><br />
                  <a href="mailto:hello@pmax.online">hello@pmax.online</a>
                </p>
              </div>

              <div className="reveal" style={{ border: '1px solid var(--color-ultraviolet)', borderRadius: 'var(--radius-card)', padding: 28 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-ultraviolet)', marginBottom: 14 }}>
                  Start a project
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: '#e9e9e9', margin: '0 0 18px' }}>
                  First call is 30 minutes, on us. Tell us what you&apos;re trying to grow.
                </p>
                <Link href="/contact" className="btn-primary" style={{ display: 'flex', justifyContent: 'center' }}>
                  Book a call <span className="arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </aside>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
