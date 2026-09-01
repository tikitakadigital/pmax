import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { siteAlternates } from '@/lib/hreflang'
import { breadcrumb, orgRef } from '@/lib/schema'
import { posts } from '@/lib/content/blog'

export const metadata: Metadata = {
  title: 'Journal — plain-English digital marketing guides | pmax',
  description: '18 practical guides on Google Ads, Meta, SEO, AI search visibility and analytics. Written by the people running the campaigns.',
  alternates: siteAlternates('/blog/'),
}

export default function BlogPage() {
  const jsonLd = [
    breadcrumb([
      { name: 'Home', url: 'https://pmax.online/' },
      { name: 'Journal', url: 'https://pmax.online/blog/' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'pmax Journal',
      description: 'Practical guides on Google Ads, Meta, SEO, analytics and AI search visibility — written by the people running the campaigns.',
      url: 'https://pmax.online/blog/',
      numberOfItems: posts.filter(p => !p.external).length,
      itemListElement: posts.filter(p => !p.external).map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://pmax.online/blog/${post.slug}/`,
        name: post.title,
      })),
    },
    orgRef,
  ]
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
              <span>Journal</span>
            </nav>
            <span className="page-intro-eyebrow">The journal</span>
            <h1 className="page-intro-title">
              Plain English<br />about <em>digital marketing</em>.
            </h1>
            <p className="page-intro-deck">
              Field notes, playbooks and opinion. Written by the people doing the work,
              for the people doing the work. No content marketing fluff.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <ol className="stream reveal" style={{ listStyle: 'none' }}>
              {posts.map((post) => (
                <li key={post.slug} className="stream-item">
                  <span className="stream-stamp">{post.stamp}</span>
                  <Link href={`/blog/${post.slug}`} className={`stream-card ${post.variant}`}>
                    <div>
                      <span className="stream-kicker">{post.category} · {post.readTime}</span>
                      <h2 className="stream-head">{post.title}</h2>
                      <p className="stream-deck">{post.deck}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="container" style={{ padding: '64px 0 96px' }}>
          <div className="promo reveal">
            <div>
              <span className="promo-eyebrow">Want this in your inbox?</span>
              <h2 className="promo-headline">No newsletter. Just&nbsp;ask.</h2>
              <p className="promo-deck">We don&apos;t run an email list — but if there&apos;s a topic you&apos;d like us to write about, tell us. We write what readers ask for.</p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              Suggest a topic <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
