import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { breadcrumb } from '@/lib/schema'
import { posts, getPost } from '@/lib/content/blog'
import { getBlogDetail } from '@/lib/content/blog-detail'
import { getT } from '@/lib/i18n'

export function generateStaticParams() {
  return ['de','es'].flatMap(lang => posts.map(p => ({ lang, slug: p.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.seoTitle,
    description: post.deck,
    // Canonical points to the English version — the blog prose is in English
    alternates: {
      canonical: `https://pmax.online/blog/${slug}/`,
      languages: { 'en': `https://pmax.online/blog/${slug}/`, 'x-default': `https://pmax.online/blog/${slug}/` },
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const t = getT(lang)
  const b = t.blog
  const detail = getBlogDetail(slug)
  const p = `/${lang}`

  const locPost = b.posts.find(bp => bp.slug === slug)
  const blogLabel = lang === 'de' ? 'Journal' : 'Blog'

  const jsonLd = breadcrumb([
    { name: 'Home', url: `https://pmax.online/${lang}/` },
    { name: blogLabel, url: `https://pmax.online/${lang}/blog/` },
    { name: post.category, url: `https://pmax.online/blog/${slug}/` },
  ])

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
                <span>{post.category}</span>
              </nav>
              <span className="page-intro-eyebrow">{post.category} · {post.readTime} · {post.date}</span>
              <h1 className="page-intro-title" style={{ fontSize: 'clamp(40px, 7vw, 92px)' }}>
                {locPost?.title ?? post.title}
              </h1>
              <p className="page-intro-deck">{locPost?.deck ?? post.deck}</p>

              {/* Language notice */}
              <div style={{ marginTop: 32, padding: '14px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid #2d2d2d', borderRadius: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#949494' }}>
                  {b.langNotice}
                </span>
                <Link href={`/blog/${slug}`} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-jelly-mint)' }}>
                  {b.readInEn}
                </Link>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container blog-layout">
              <div className="prose">
                {detail?.prose ?? <p>{post.deck}</p>}
              </div>
              <aside className="blog-aside">
                <div className="blog-aside-label">{lang === 'de' ? 'Auf dieser Seite' : 'En esta página'}</div>
                {(detail?.toc ?? []).map(item => <a key={item} href="#">{item}</a>)}
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
