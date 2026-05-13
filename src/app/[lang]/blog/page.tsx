import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { breadcrumb } from '@/lib/schema'
import { posts } from '@/lib/content/blog'
import { getT } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getT(lang)
  return {
    title: t.blog.metaTitle,
    description: t.blog.metaDesc,
    alternates: {
      canonical: `https://pmax.online/${lang}/blog/`,
      languages: { 'en': 'https://pmax.online/blog/', 'de': 'https://pmax.online/de/blog/', 'es': 'https://pmax.online/es/blog/', 'x-default': 'https://pmax.online/blog/' },
    },
  }
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getT(lang)
  const b = t.blog
  const p = `/${lang}`

  const blogLabel = lang === 'de' ? 'Journal' : 'Blog'
  const jsonLd = breadcrumb([{ name: 'Home', url: `https://pmax.online/${lang}/` }, { name: blogLabel, url: `https://pmax.online/${lang}/blog/` }])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Breadcrumb">
              <Link href={p}>Home</Link><span className="sep">/</span>
              <span>{blogLabel}</span>
            </nav>
            <span className="page-intro-eyebrow">{b.eyebrow}</span>
            <h1 className="page-intro-title">{b.title}</h1>
            <p className="page-intro-deck">{b.deck}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <ol className="stream reveal" style={{ listStyle: 'none' }}>
              {posts.map(post => {
                const locPost = b.posts.find(lp => lp.slug === post.slug)
                return (
                  <li key={post.slug} className="stream-item">
                    <span className="stream-stamp">{post.stamp}</span>
                    <Link href={`${p}/blog/${post.slug}`} className={`stream-card ${post.variant}`}>
                      <div>
                        <span className="stream-kicker">{post.category} · {post.readTime}</span>
                        <h2 className="stream-head">{locPost?.title ?? post.title}</h2>
                        <p className="stream-deck">{locPost?.deck ?? post.deck}</p>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        <section className="container" style={{ padding: '64px 0 96px' }}>
          <div className="promo reveal">
            <div>
              <span className="promo-eyebrow">{b.promoEyebrow}</span>
              <h2 className="promo-headline">{b.promoHeadline}</h2>
              <p className="promo-deck">{b.promoDeck}</p>
            </div>
            <Link href={`${p}/contact`} className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              {b.promoBtn} <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer locale={lang} />
    </>
  )
}
