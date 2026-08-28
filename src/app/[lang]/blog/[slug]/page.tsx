import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { breadcrumb, faqPage } from '@/lib/schema'
import { posts, getPost } from '@/lib/content/blog'
import { getBlogDetail } from '@/lib/content/blog-detail'
import { getT, isPostTranslated, blogAlternates } from '@/lib/i18n'

export function generateStaticParams() {
  return ['de','es'].flatMap(lang =>
    posts.filter(p => !p.external && isPostTranslated(p.slug, lang)).map(p => ({ lang, slug: p.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const t = getT(lang)
  const post = getPost(slug)
  const loc = t.blogPostDetail[slug]
  const locPost = t.blog.posts.find(bp => bp.slug === slug)
  if (!post) return {}

  // Same predicate the English page and the sitemap use, so all three agree on
  // which locales exist. The cluster itself is built centrally too: reciprocity
  // is matched on exact URLs, so the two sides disagreeing about a trailing
  // slash would break it as surely as a missing tag.
  const isTranslated = isPostTranslated(slug, lang)
  const ogImage = post.ogImage ?? '/og-image.jpg'
  return {
    title: loc?.title ? `${loc.title} | pmax` : locPost?.title ? `${locPost.title} | pmax` : post.seoTitle,
    description: loc?.deck ?? locPost?.deck ?? post.deck,
    ...(isTranslated ? {} : { robots: { index: false } }),
    alternates: isTranslated ? {
      canonical: `https://pmax.online/${lang}/blog/${slug}/`,
      languages: blogAlternates(slug),
    } : {
      // Untranslated: this page consolidates into the English one, so it carries
      // NO hreflang. Google discards hreflang on a page whose canonical points
      // elsewhere, so the old en + x-default pair here was never read — it only
      // made the page look like part of a cluster it had deliberately left.
      canonical: `https://pmax.online/blog/${slug}/`,
    },
    openGraph: {
      siteName: 'pmax',
      title: loc?.title ?? locPost?.title ?? post.title,
      description: loc?.deck ?? locPost?.deck ?? post.deck,
      type: 'article',
      images: [{ url: `https://pmax.online${ogImage}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`https://pmax.online${ogImage}`],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const post = getPost(slug)
  if (!post || !isPostTranslated(slug, lang)) notFound()

  const t = getT(lang)
  const b = t.blog
  const detail = getBlogDetail(slug)
  const loc = t.blogPostDetail[slug]
  const p = `/${lang}`

  const locPost = b.posts.find(bp => bp.slug === slug)
  const blogLabel = lang === 'de' ? 'Journal' : 'Blog'
  const isTranslated = !!loc?.prose

  const categoryTranslations: Record<string, Record<string, string>> = {
    de: { 'AI search': 'KI-Suche', 'Privacy': 'Datenschutz', 'Hospitality': 'Hotellerie', 'Real estate': 'Immobilien', 'Renewables': 'Energie', 'Boating': 'Yachting', 'Op-ed': 'Meinung' },
    es: { 'AI search': 'IA & búsqueda', 'Privacy': 'Privacidad', 'Hospitality': 'Hostelería', 'Real estate': 'Inmobiliaria', 'Renewables': 'Energía solar', 'Boating': 'Náutica', 'Op-ed': 'Opinión' },
  }
  const localCategory = categoryTranslations[lang]?.[post.category] ?? post.category

  const title = loc?.title ?? locPost?.title ?? post.title
  const deck = loc?.deck ?? locPost?.deck ?? post.deck
  const prose = loc?.prose ?? detail?.prose ?? <p>{post.deck}</p>
  const toc = loc?.toc ?? detail?.toc ?? []
  const tocIds = detail?.tocIds

  const localFaqs = loc?.faqs ?? detail?.faqs
  const jsonLd = [
    breadcrumb([
      { name: 'Home', url: `https://pmax.online/${lang}/` },
      { name: blogLabel, url: `https://pmax.online/${lang}/blog/` },
      { name: localCategory, url: `https://pmax.online/${lang}/blog/${slug}/` },
    ]),
    ...(localFaqs?.length ? [{ ...faqPage(localFaqs), inLanguage: lang }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">
        <article>

          <section className="page-intro" style={{ borderBottom: '1px solid #2d2d2d' }}>
            <div className="container">
              <nav className="page-intro-crumbs" aria-label="Breadcrumb">
                <Link href={p}>Home</Link><span className="sep">/</span>
                <Link href={`${p}/blog`}>{blogLabel}</Link><span className="sep">/</span>
                <span>{localCategory}</span>
              </nav>
              <span className="page-intro-eyebrow">{localCategory} · {post.readTime} · {post.date}</span>
              <h1 className="page-intro-title" style={{ fontSize: 'clamp(40px, 7vw, 92px)' }}>
                {title}
              </h1>
              <p className="page-intro-deck">{deck}</p>

              {!isTranslated && (
                <div style={{ marginTop: 32, padding: '14px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid #2d2d2d', borderRadius: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#949494' }}>
                    {b.langNotice}
                  </span>
                  <Link href={`/blog/${slug}`} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-jelly-mint)' }}>
                    {b.readInEn}
                  </Link>
                </div>
              )}
            </div>
          </section>

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
                {prose}
              </div>
              <aside className="blog-aside">
                <div className="blog-aside-label">{lang === 'de' ? 'Auf dieser Seite' : 'En esta página'}</div>
                {toc.map((item, i) => <a key={item} href={tocIds?.[i] ? `#${tocIds[i]}` : '#'}>{item}</a>)}
                <div style={{ marginTop: 24, borderTop: '1px solid #2d2d2d', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div className="blog-aside-label">{lang === 'de' ? 'Mehr von pmax' : 'Más de pmax'}</div>
                  <Link href={`${p}/services`}>{lang === 'de' ? 'Alle Leistungen →' : 'Todos los servicios →'}</Link>
                  <Link href={`${p}/cases`}>{lang === 'de' ? 'Referenzen →' : 'Resultados →'}</Link>
                  <Link href={`${p}/contact`}>{lang === 'de' ? 'Kontakt →' : 'Contacto →'}</Link>
                </div>
              </aside>
            </div>
          </section>

        </article>
      </main>
      <Footer locale={lang} />
    </>
  )
}
