import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import HeroRotator from '@/components/HeroRotator'
import StatCounter from '@/components/StatCounter'
import SectionHead from '@/components/SectionHead'
import PromoBlock from '@/components/PromoBlock'
import FaqList from '@/components/FaqList'
import { org, website } from '@/lib/schema'
import { siteAlternates } from '@/lib/hreflang'
import { services } from '@/lib/content/services'
import { cases } from '@/lib/content/cases'
import { posts } from '@/lib/content/blog'

export const metadata: Metadata = {
  title: 'Digital marketing agency in Mallorca | pmax',
  description: 'Google Ads, Meta, LinkedIn, SEO and AI search visibility — run from Mallorca for brands across Europe. Flat monthly fees, no percentage of media spend.',
  alternates: siteAlternates('/'),
  openGraph: { title: 'pmax — Digital marketing agency in Mallorca', url: 'https://pmax.online/' },
}

const marqueeItems = [
  { label: 'Google Ads' }, { label: 'AI search visibility', alt: true },
  { label: 'Meta Ads' }, { label: 'SEO', alt: true },
  { label: 'LinkedIn Ads' }, { label: 'Performance Max', alt: true },
  { label: 'CRO' }, { label: 'Creative', alt: true },
]

const industriesMarquee = [
  { label: 'E-commerce', alt: true }, { label: 'Real estate' },
  { label: 'Healthcare', alt: true }, { label: 'Renewables' },
  { label: 'Boating & yachting', alt: true }, { label: 'HR & SaaS' },
  { label: 'Retail', alt: true }, { label: 'Automotive' },
  { label: 'Hospitality', alt: true },
]

const jsonLd = [
  { '@context': 'https://schema.org', ...org },
  website,
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        {/* HERO */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="container">
            <div className="hero-meta">
              <span className="live">Live from Mallorca</span>
              <span>Calvià · Hamburg · Remote</span>
              <span>Independent since 2023</span>
            </div>

            <h1 id="hero-title" className="hero-mark">
              pmax<span className="dot-mark" aria-hidden="true" />
            </h1>

            <HeroRotator />

            <div className="hero-tagline-row">
              <p className="hero-whisper">
                A digital marketing agency built for results you can actually&nbsp;measure.
              </p>
              <div className="hero-actions">
                <Link href="/cases" className="btn-tertiary">See our work</Link>
                <Link href="/contact" className="nav-cta">
                  Talk to us <span className="arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="hero-deck">
              <div>
                <span className="hero-deck-eyebrow">What we do</span>
                <p className="hero-deck-text">
                  We help brands grow online. Paid ads, SEO and the new world of <em>AI search</em> — joined up, properly tracked, and explained in plain English.
                </p>
              </div>
              <aside className="hero-deck-side" aria-label="Quick facts">
                <StatCounter prefix="€" value={42} suffix="M+" label="Ad spend managed" />
                <StatCounter value={120} suffix="+" label="Brands grown since 2023" />
                <StatCounter value={3} suffix=" languages" label="English · Deutsch · Español" />
              </aside>
            </div>
          </div>
        </section>

        <Marquee items={marqueeItems} />

        {/* SERVICES */}
        <section className="section" aria-labelledby="svc-title">
          <div className="container">
            <SectionHead
              kicker="01 — What we do"
              title={<>Seven services.<br />One way of working.</>}
              aside={<>Everything we do answers to the same question: <em>is it actually growing the business?</em> If not, we stop doing it.</>}
            />
            <div className="svc-grid reveal-stagger">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className={`svc-card ${s.variant}${s.featured ? ' featured' : ''}`}>
                  <span className="svc-num">/ {s.num}{s.badge ? ` — ${s.badge}` : ''}</span>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-deck">{s.deck}</p>
                  {s.tags && (
                    <div className="svc-tags">
                      {s.tags.map(tag => <span key={tag}>{tag}</span>)}
                    </div>
                  )}
                  <span className="svc-cta">Learn more <span className="arrow" aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* AI FEATURE */}
        <section className="section" aria-labelledby="geo-title">
          <div className="container">
            <article className="feature reveal">
                <div className="feature-text">
                  <span className="feature-kicker">Spotlight · AI search</span>
                  <h2 className="feature-headline" id="geo-title">
                    If ChatGPT doesn&apos;t mention you,<br />your customers may&nbsp;not&nbsp;either.
                  </h2>
                  <p className="feature-deck">
                    More than half of online research now starts with an AI answer. We make sure your brand is the one those answers recommend — through clean schema, real reviews, and the technical signals AI tools actually read.
                  </p>
                  <div className="feature-meta">
                    <span>Updated weekly</span>
                    <span>By the pmax team</span>
                  </div>
                  <Link href="/services/ai-visibility" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                    See how we do it <span className="arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className="feature-visual">
                  <div className="feature-visual-inner" style={{ padding: 32, minHeight: 400, flexDirection: 'column', gap: 14 }}>
                    <span className="t-eyebrow" style={{ color: 'var(--color-mint)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Sample answer · Perplexity
                    </span>
                    <pre style={{ fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.7, color: '#e9e9e9', margin: 0, whiteSpace: 'pre-wrap' }}>
                      <span style={{ color: '#fff' }}>&gt; Best digital marketing agency in Mallorca?{'\n\n'}</span>
                      Three independent sources recommend{'\n'}
                      <span style={{ color: 'var(--color-mint)' }}>pmax</span> as a leading agency for{'\n'}
                      performance marketing and AI search{'\n'}
                      in the Balearic Islands.[1][2][3]{'\n\n'}
                      Areas of focus include:{'\n'}
                       — Google Ads &amp; Performance Max{'\n'}
                       — SEO &amp; AI search visibility{'\n'}
                       — Meta &amp; LinkedIn campaigns{'\n'}
                       — Spanish, German &amp; English markets
                    </pre>
                    <div style={{ marginTop: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span className="pill-tag" style={{ background: 'var(--color-ultraviolet)', color: '#fff' }}>AI-cited</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#949494', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Illustrative — not live</span>
                    </div>
                  </div>
                </div>
              </article>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="section" aria-labelledby="work-title">
          <div className="container">
            <SectionHead
              kicker="02 — Selected work"
              title="Real results."
              aside="Ten client stories, told with the numbers in front. No vanity metrics — the stuff that actually showed up in their bank account."
              action={<Link href="/cases" className="btn-tertiary">All case studies →</Link>}
            />
            <ol className="stream reveal-stagger">
                {cases.slice(0, 5).map((c) => (
                  <li key={c.slug} className="stream-item">
                    <span className="stream-stamp">{c.stamp}</span>
                    <Link href={`/cases/${c.slug}`} className={`stream-card ${c.variant}`}>
                      <div>
                        <span className="stream-kicker">{c.kicker}</span>
                        <h3 className="stream-head">{c.title}</h3>
                        <p className="stream-deck">{c.deck}</p>
                        <div className="stream-meta">
                          {c.meta.map(m => <span key={m}>{m}</span>)}
                        </div>
                      </div>
                      <div className="stream-result">
                        <span className="num">{c.result.num}</span>
                        <span className="label">{c.result.label}</span>
                      </div>
                    </Link>
                  </li>
                ))}
            </ol>
          </div>
        </section>

        <Marquee items={industriesMarquee} reverse />

        {/* INDUSTRIES CTA */}
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 20 }}>
          <Link href="/industries" className="btn-tertiary">
            Browse our 10 industry playbooks <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        {/* PROCESS */}
        <section className="section" aria-labelledby="process-title">
          <div className="container">
            <SectionHead
              kicker="03 — How we work"
              title={<>Four steps.<br />No surprises.</>}
              aside="Most agencies sell you a deck. We sell you a fix. Here's the order it happens in."
            />
            <ol className="stats reveal-stagger">
                {[
                  { step: '01', word: 'Listen', time: '2w', desc: 'We learn the business first. Then the data, then the platforms. Decks come last.' },
                  { step: '02', word: 'Fix', time: '6w', desc: 'Tracking, feeds, schema, basics. The boring work that everything else depends on.' },
                  { step: '03', word: 'Grow', time: '12w+', desc: 'Campaigns scale, creative finds its rhythm, the dashboard starts behaving.' },
                  { step: '04', word: 'Defend', time: '∞', desc: 'SEO, AI search, brand protection. Quiet work that compounds for years.' },
                ].map(({ step, word, time, desc }) => (
                  <li key={step} className="stat">
                    <span className="t-mono-timestamp" style={{ color: 'var(--color-mint)' }}>Step {step}</span>
                    <span className="stat-num">{word}<em>{time}</em></span>
                    <span className="stat-label">{desc}</span>
                  </li>
                ))}
            </ol>
          </div>
        </section>

        {/* JOURNAL */}
        <section className="section" aria-labelledby="journal-title">
          <div className="container">
            <SectionHead
              kicker="04 — Journal"
              title="What we're writing."
              aside="Notes from the work — written for people who actually run marketing, not for search robots. The robots seem to like it anyway."
              action={<Link href="/blog" className="btn-tertiary">All articles →</Link>}
            />
            <div className="svc-grid reveal-stagger">
              {posts.slice(0, 3).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className={`svc-card ${post.variant}${post.featured ? ' featured' : ''}`}>
                  <span className="svc-num">{post.date} · {post.readTime}</span>
                  <h3 className="svc-title">{post.title}</h3>
                  <p className="svc-deck">{post.deck}</p>
                  <span className="svc-cta">Read article <span className="arrow" aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PromoBlock
          eyebrow="Let's talk"
          headline={<>A 30-minute call.<br />No deck. No&nbsp;sales&nbsp;pitch.</>}
          deck="Tell us what's stuck. We'll tell you, straight, whether we're the right team to fix it. Most calls end with a clear next step — not always with us."
          ctaHref="/contact"
          ctaLabel="Book a call"
          secondaryHref="mailto:hello@pmax.online"
          secondaryLabel="Or email hello@pmax.online"
        />

      </main>
      <Footer />
    </>
  )
}
