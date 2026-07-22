import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { breadcrumb, article as articleSchema, faqPage } from '@/lib/schema'
import { posts, getPost } from '@/lib/content/blog'
import { getBlogDetail } from '@/lib/content/blog-detail'
import { getT } from '@/lib/i18n'

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
  'SEO':          [{ label: 'SEO', href: '/services/seo' }],
  'Local SEO':    [{ label: 'SEO', href: '/services/seo' }, { label: 'Google Ads', href: '/services/google-ads' }],
  'Creative':     [{ label: 'Creative production', href: '/services/creative' }],
  'Hospitality':  [{ label: 'Hospitality marketing', href: '/industries/hospitality' }, { label: 'Google Ads', href: '/services/google-ads' }],
  'Real estate':  [{ label: 'Real estate marketing', href: '/industries/real-estate' }, { label: 'SEO', href: '/services/seo' }],
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
  return {
    title: post.seoTitle,
    description: post.deck,
    alternates: {
      canonical: `https://pmax.online/blog/${slug}/`,
      ...(!!getT('de').blogPostDetail[slug]?.prose && { languages: {
        en: `https://pmax.online/blog/${slug}/`,
        de: `https://pmax.online/de/blog/${slug}/`,
        es: `https://pmax.online/es/blog/${slug}/`,
        'x-default': `https://pmax.online/blog/${slug}/`,
      }}),
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
      keywords: categoryKeywords[post.category],
      image: post.ogImage,
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
                <span>Written by Philipp Enders</span>
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
                {(detail?.toc ?? []).map((item) => (
                  <a key={item} href="#">{item}</a>
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

        </article>
      </main>
      <Footer />
    </>
  )
}
