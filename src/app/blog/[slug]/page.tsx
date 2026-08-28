import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { breadcrumb, article as articleSchema, faqPage } from '@/lib/schema'
import { posts, getPost } from '@/lib/content/blog'
import { getBlogDetail } from '@/lib/content/blog-detail'
import { getT, blogAlternates } from '@/lib/i18n'

const categoryKeywords: Record<string, string[]> = {
  'AI search':   ['AI search visibility', 'GEO', 'generative engine optimisation', 'ChatGPT citations', 'Perplexity'],
  'Google Ads':  ['Google Ads', 'Performance Max', 'PPC management', 'paid search'],
  'Analytics':   ['GA4', 'marketing analytics', 'server-side tracking', 'Consent Mode v2'],
  'Paid social': ['Meta Ads', 'TikTok Ads', 'LinkedIn Ads', 'paid social'],
  'LinkedIn':    ['LinkedIn Ads', 'B2B marketing', 'paid social'],
  'Privacy':     ['cookieless tracking', 'Consent Mode v2', 'server-side GTM'],
  'SEO':         ['SEO', 'organic search', 'technical SEO', 'content marketing'],
  'Local SEO':   ['local SEO', 'Google Ads Mallorca', 'geo-targeting'],
  'Creative':    ['ad creative', 'UGC', 'creative production', 'performance creative'],
  'Hospitality': ['hotel marketing', 'direct bookings', 'Mallorca hospitality'],
  'Real estate': ['real estate marketing', 'Mallorca property', 'lead generation'],
  'Renewables':  ['solar marketing', 'renewable energy marketing', 'EV marketing'],
  'Boating':     ['yacht charter marketing', 'Mediterranean boating', 'marina marketing'],
  'Op-ed':       ['digital marketing agency', 'flat fee agency', 'Mallorca agency'],
}

const categoryLinks: Record<string, { label: string; href: string }[]> = {
  'AI search':    [{ label: 'AI search visibility', href: '/services/ai-visibility' }],
  'Google Ads':   [{ label: 'Google Ads management', href: '/services/google-ads' }],
  'Analytics':    [{ label: 'Analytics & tracking', href: '/services/analytics' }],
  'Paid social':  [{ label: 'Paid social', href: '/services/paid-social' }],
  'LinkedIn':     [{ label: 'Paid social (LinkedIn)', href: '/services/paid-social' }],
  'Privacy':      [{ label: 'Analytics & tracking', href: '/services/analytics' }],
  'SEO':          [{ label: 'SEO', href: '/seo-company-mallorca' }],
  'Local SEO':    [{ label: 'SEO', href: '/seo-company-mallorca' }, { label: 'Google Ads', href: '/services/google-ads' }],
  'Creative':     [{ label: 'Creative production', href: '/services/creative' }],
  'Hospitality':  [{ label: 'Hospitality marketing', href: '/industries/hospitality' }, { label: 'Google Ads', href: '/services/google-ads' }],
  'Real estate':  [{ label: 'Real estate marketing', href: '/industries/real-estate' }, { label: 'SEO', href: '/seo-company-mallorca' }],
  'Renewables':   [{ label: 'Renewables marketing', href: '/industries/renewables' }, { label: 'Google Ads', href: '/services/google-ads' }],
  'Boating':      [{ label: 'Boating & yachting marketing', href: '/industries/boating' }, { label: 'Paid social', href: '/services/paid-social' }],
}

export function generateStaticParams() {
  return posts.filter(p => !p.external).map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const ogImage = post.ogImage ?? '/og-image.jpg'
  // Only the locales actually translated. This used to test German prose and
  // then advertise Spanish as well, which holds only while the two stay in
  // lockstep — the first German-only translation would have pointed hreflang at
  // a noindex Spanish page.
  const languages = blogAlternates(slug)
  return {
    title: post.seoTitle,
    description: post.deck,
    alternates: {
      canonical: `https://pmax.online/blog/${slug}/`,
      ...(languages && { languages }),
    },
    openGraph: {
      siteName: 'pmax',
      title: post.title,
      description: post.deck,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: `https://pmax.online${ogImage}`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`https://pmax.online${ogImage}`],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const detail = getBlogDetail(slug)

  const jsonLd = [
    breadcrumb([
      { name: 'Home', url: 'https://pmax.online/' },
      { name: 'Journal', url: 'https://pmax.online/blog/' },
      { name: post.category, url: `https://pmax.online/blog/${slug}/` },
    ]),
    articleSchema({
      headline: post.title,
      description: post.deck,
      url: `https://pmax.online/blog/${slug}/`,
      datePublished: post.date,
      dateModified: post.dateModified,
      keywords: categoryKeywords[post.category],
      image: post.ogImage,
      author: post.author,
    }),
    ...(detail?.faqs?.length ? [{ ...faqPage(detail.faqs), inLanguage: 'en' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">
        <article>

          {/* PAGE INTRO */}
          <section className="page-intro" style={{ borderBottom: '1px solid #2d2d2d' }}>
            <div className="container">
              <nav className="page-intro-crumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span className="sep">/</span>
                <Link href="/blog">Journal</Link><span className="sep">/</span>
                <span>{post.category}</span>
              </nav>
              <span className="page-intro-eyebrow">{post.category} · {post.readTime} read · {post.date}</span>
              <h1 className="page-intro-title" style={{ fontSize: 'clamp(40px, 7vw, 92px)' }}>{post.title}</h1>
              <p className="page-intro-deck">{post.deck}</p>
              <div style={{ marginTop: 32, display: 'flex', gap: 24, flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#949494' }}>
                <span>Written by {post.author ?? 'Philipp Enders'}</span>
                <span>Fact-checked {post.date}</span>
                <span>Updated quarterly</span>
              </div>
            </div>
          </section>

          {/* ARTICLE BODY */}
          <section className="section">
            <div className="container blog-layout">
              <div className="prose">
                {detail?.image && (
                  <Image
                    src={detail.image}
                    alt={detail.imageAlt ?? post.title}
                    width={1200}
                    height={630}
                    priority
                    sizes="(max-width: 768px) 100vw, 760px"
                    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4, marginBottom: 32 }}
                  />
                )}
                {detail?.prose ?? (
                  <p>{post.deck}</p>
                )}

                {categoryLinks[post.category] && (
                  <div className="prose-callout" style={{ marginTop: 48 }}>
                    <span className="prose-callout-kicker">Related from pmax</span>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 8 }}>
                      {categoryLinks[post.category].map(({ label, href }) => (
                        <Link key={href} href={href} className="btn-tertiary" style={{ fontSize: 11 }}>
                          {label} →
                        </Link>
                      ))}
                      <Link href="/cases" className="btn-tertiary" style={{ fontSize: 11 }}>
                        Client results →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <aside className="blog-aside">
                <div className="blog-aside-label">On this page</div>
                {(detail?.toc ?? []).map((item, i) => (
                  <a key={item} href={detail?.tocIds?.[i] ? `#${detail.tocIds[i]}` : '#'}>{item}</a>
                ))}
                <div style={{ marginTop: 24, borderTop: '1px solid #2d2d2d', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div className="blog-aside-label">More from pmax</div>
                  <Link href="/services">All services →</Link>
                  <Link href="/cases">Client results →</Link>
                  <Link href="/contact">Work with us →</Link>
                </div>
              </aside>
            </div>
          </section>

          {/* AUTHOR BIO */}
          <section style={{ borderTop: '1px solid #2d2d2d', marginTop: 0 }}>
            <div className="container" style={{ padding: '40px 0 56px' }}>
              {post.author === 'Claire Enders' ? (
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', maxWidth: 760 }}>
                  <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: '50%', background: '#131313', border: '1px solid #2d2d2d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 15, color: '#3cffd0', letterSpacing: 0 }}>CE</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', marginBottom: 6 }}>About the author</div>
                    <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>Claire Enders</div>
                    <p style={{ fontSize: 13, lineHeight: 1.65, color: '#b4b4b4', margin: '0 0 10px' }}>
                      Claire is a digital marketing strategist at pmax, a performance marketing and AI visibility agency in Calvi&agrave;, Mallorca. She leads content strategy and AI search optimisation for pmax clients, and contributes research on GEO and AI brand visibility. She also works on <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer" style={{ color: '#f6f4ef' }}>CrunchJunkie</a>, an AI visibility tracking platform for monitoring brand citation across ChatGPT, Perplexity, Claude, Gemini and six other engines.
                    </p>
                    <a href="https://www.linkedin.com/in/clairelouenders/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#949494' }}>LinkedIn →</a>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', maxWidth: 760 }}>
                  <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: '50%', background: '#131313', border: '1px solid #2d2d2d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 15, color: '#3cffd0', letterSpacing: 0 }}>PE</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', marginBottom: 6 }}>About the author</div>
                    <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>Philipp Enders</div>
                    <p style={{ fontSize: 13, lineHeight: 1.65, color: '#b4b4b4', margin: '0 0 10px' }}>
                      Philipp is the Founder and Director of pmax, a performance marketing and AI visibility agency in Calvi&agrave;, Mallorca. He is also the co-founder of <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer" style={{ color: '#f6f4ef' }}>crunchjunkie</a>, an AI visibility tracking platform for monitoring brand citation across ChatGPT, Perplexity, Claude and Gemini.
                    </p>
                    <a href="https://www.linkedin.com/in/philippenders/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#949494' }}>LinkedIn →</a>
                  </div>
                </div>
              )}
            </div>
          </section>

        </article>
      </main>
      <Footer />
    </>
  )
}
