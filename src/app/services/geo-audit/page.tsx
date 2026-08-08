import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/FaqList'
import { breadcrumb, serviceSchema, faqPage } from '@/lib/schema'
import { siteAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'GEO Audit Services | AI Search Visibility Audit | pmax',
  description: 'pmax runs GEO audits to show you exactly how AI platforms represent your brand — and what to fix first. Free initial audit available. Based in Mallorca, working worldwide.',
  alternates: siteAlternates('/services/geo-audit/'),
  openGraph: {
    type: 'website',
    siteName: 'pmax',
    title: 'GEO Audit Services | pmax',
    description: 'Find out what ChatGPT, Perplexity and Gemini say about your brand — and whether any of it is accurate. Free initial GEO audit from pmax.',
    url: 'https://pmax.online/services/geo-audit/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'pmax — GEO Audit Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pmaxonline',
    title: 'GEO Audit Services | pmax',
    description: 'Find out what ChatGPT, Perplexity and Gemini say about your brand — and whether any of it is accurate.',
    images: ['/og-image.jpg'],
  },
}

const faqs = [
  {
    q: 'What is included in a pmax GEO audit?',
    a: "A pmax GEO audit covers five layers: AI crawlability (robots.txt, bot access), content citability (structured, quotable content and schema markup), entity coverage (consistent brand presence across directories and third-party sources), AI representation (what ChatGPT, Perplexity, Claude and Gemini say about you), and competitive positioning (where competitors appear where you don't). The initial audit includes a written report and a 30-minute call to walk through findings.",
  },
  {
    q: 'How long does a GEO audit take?',
    a: 'The initial audit takes five to seven working days from the point we have access to your domain and any supporting materials. The written report and call follow within the same week.',
  },
  {
    q: 'Is the initial GEO audit really free?',
    a: 'Yes. We run a free initial GEO visibility snapshot using crunchjunkie — our AI visibility tracking tool — for any brand considering working with us. It shows your current citation rate across major AI platforms, which sources AI draws on when describing you, and where the biggest gaps are. No obligation, no sales pitch.',
  },
  {
    q: 'What do you need from us to run the audit?',
    a: 'Your domain name and the top five to ten queries you think your customers ask before buying. Everything else we source ourselves.',
  },
  {
    q: 'What happens after the audit?',
    a: 'You get a written report with specific findings across each layer, a prioritised list of fixes, and an honest view of how long improvement is likely to take given your current authority base. If you want to work together on the remediation, we can discuss that. If you want to take the findings in-house, that works too.',
  },
  {
    q: 'Do I need an ongoing retainer, or can I just get a one-off audit?',
    a: 'A one-off audit is available. Most clients who find significant issues do move into an ongoing programme — because the audit diagnoses the problem and the retainer fixes it — but there is no obligation attached to the free initial audit.',
  },
  {
    q: 'Is a GEO audit right for an early-stage brand?',
    a: "It depends. If you have very little web presence, the audit will confirm that — and the priority is building that presence before worrying about AI representation. If you have an established web presence but haven't checked AI visibility, the audit is usually revealing. We'll tell you honestly at the outset whether it's the right step.",
  },
]

const pageUrl = 'https://pmax.online/services/geo-audit/'

const jsonLd = [
  breadcrumb([
    { name: 'Home', url: 'https://pmax.online/' },
    { name: 'Services', url: 'https://pmax.online/services/' },
    { name: 'GEO Audit', url: pageUrl },
  ]),
  serviceSchema({
    name: 'GEO Audit',
    description: 'pmax GEO audits reveal how AI platforms represent your brand — what ChatGPT, Perplexity, Claude and Gemini say about you, which sources they draw on, and where competitors are beating you in AI-generated responses.',
    url: pageUrl,
    serviceType: 'Generative Engine Optimisation Audit',
  }),
  faqPage(faqs),
]

const stats = [
  { num: '51%', label: 'of consumers have changed research habits because of generative AI — Gartner' },
  { num: '4', label: 'AI platforms to audit across: ChatGPT, Perplexity, Claude, Gemini' },
  { num: '23+', label: 'AI assistants and search tools where brand representation now matters' },
  { num: '0', label: 'brands that know exactly what AI says about them, before they ask' },
]

export default function GeoAuditPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        {/* PAGE INTRO */}
        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span className="sep">/</span>
              <Link href="/services">Services</Link><span className="sep">/</span>
              <span>GEO Audit</span>
            </nav>
            <span className="page-intro-eyebrow">GEO &middot; SEO &middot; AI Search</span>
            <h1 className="page-intro-title">
              GEO Audit.
            </h1>
            <p className="page-intro-deck">
              Find out what ChatGPT, Perplexity and Gemini say about your brand &mdash; and whether any of it is accurate.
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="container" style={{ padding: '48px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            {stats.map(({ num, label }) => (
              <li key={label} className="stat">
                <span className="stat-num">{num}</span>
                <span className="stat-label">{label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* PROSE */}
        <section className="section">
          <div className="container">
            <header className="section-head reveal">
              <div style={{ flex: 1, minWidth: 280 }}>
                <div className="section-head-kicker">The audit</div>
                <h2 className="section-head-title">What we&nbsp;do.</h2>
              </div>
            </header>
            <div className="prose">

              <h2>What a GEO audit is</h2>
              <p>
                A GEO audit is a structured review of how AI platforms represent your brand. Not what your website says about you &mdash; what <em>ChatGPT, Perplexity, Claude and Gemini</em> say about you when someone asks. Those are not always the same thing, and the gap between them is often larger than brands expect.
              </p>
              <p>
                Unlike an SEO audit, which checks whether search engines can find and rank your pages, a GEO audit checks whether AI platforms have an accurate, coherent picture of who you are, what you do and why you matter. A technically perfect website can still produce wrong, incomplete or missing AI answers if the underlying authority signals aren&rsquo;t there.
              </p>
              <p>
                We run GEO audits for brands in hospitality, real estate, professional services and B2B software &mdash; ranging from local Mallorcan businesses to European brands operating in multiple markets. The finding that surprises people most is usually not that AI gets something wrong, but that it says nothing at all.
              </p>
              <p>
                The output is specific: a written report covering what the AI says about you, which sources it draws on, where it gets things wrong, and a prioritised list of fixes. We also include where competitors appear where you don&rsquo;t &mdash; which is usually the finding that lands hardest.
              </p>

              <h2>What we look at</h2>

              <h3>AI crawlability</h3>
              <p>
                Can AI bots actually reach your content? We check <code>robots.txt</code> for blocks on the retrieval bots that power live AI citations &mdash; <code>OAI-SearchBot</code>, <code>PerplexityBot</code>, <code>Claude-SearchBot</code> &mdash; as well as training crawlers like <code>GPTBot</code> and <code>Google-Extended</code>. Blocking any of these is usually a mistake, and it&rsquo;s common.
              </p>

              <h3>Content citability</h3>
              <p>
                AI models quote things that are quotable. Vague brand copy doesn&rsquo;t make it into AI responses; specific, factual, well-structured content does. We audit your site for definitional paragraphs, consistent brand facts, FAQ content, and any critical content that&rsquo;s JavaScript-rendered &mdash; and therefore invisible to most AI crawlers.
              </p>

              <h3>Entity coverage</h3>
              <p>
                We check schema.org markup (Organisation, Service, FAQPage, Person), NAP consistency across directories, and third-party mentions in sources AI platforms trust. Contradictory information across channels introduces hallucination risk. We find where it exists.
              </p>

              <h3>AI representation</h3>
              <p>
                We run a structured prompt set across ChatGPT, Perplexity, Claude and Gemini: direct brand queries, category queries, competitive comparisons, and problem-first questions your customers actually ask. We document what the AI says, how accurately it describes you, and what sources it cites. This becomes your baseline.
              </p>

              <h3>Competitive positioning</h3>
              <p>
                Where do your competitors appear in AI responses where you don&rsquo;t? Which third-party sources carry the most weight in your category? We map the gap between where you are and where you should be, and identify the highest-leverage moves to close it.
              </p>

              <h2>crunchjunkie &mdash; the tool we use</h2>
              <p>
                We use <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">crunchjunkie</a> for AI visibility tracking. It monitors citation frequency across AI platforms, tracks share of voice against competitors, and measures brand sentiment in AI-generated responses. It&rsquo;s the closest thing to Search Console that exists for AI search, and it launched publicly just recently &mdash; we&rsquo;ve been using it in client work since it became available.
              </p>
              <p>
                For the initial free audit, we run your domain through crunchjunkie to get a visibility snapshot before we do anything else. It shows where you currently stand in AI citation, which gives us a baseline that makes the rest of the audit meaningful rather than impressionistic.
              </p>
              <p>
                For clients who move into an ongoing programme, crunchjunkie tracking is included. Monthly reports show whether the remediation work is moving the needle, which platforms respond first, and where new gaps emerge as AI models update.
              </p>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq-section" aria-labelledby="faq-h">
          <div className="container">
            <header className="section-head reveal" style={{ marginBottom: 24 }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div className="section-head-kicker">FAQ</div>
                <h2 className="section-head-title" id="faq-h">Questions, answered.</h2>
              </div>
            </header>
            <FaqList items={faqs} />
          </div>
        </section>

        {/* PROMO */}
        <section className="container" style={{ padding: '24px 0 96px' }}>
          <div className="promo reveal">
            <div>
              <span className="promo-eyebrow">Start with a free audit</span>
              <h2 className="promo-headline">Find out where you stand.</h2>
              <p className="promo-deck">
                We run your domain through crunchjunkie, prompt four AI platforms with your key queries, and come back with specific findings &mdash; what AI says about you, which sources it draws on, and where competitors are beating you. No obligation.
              </p>
            </div>
            <Link href="/contact/?topic=geo-audit" className="btn-primary" style={{ whiteSpace: 'nowrap', fontSize: 13, padding: '14px 22px' }}>
              Request free audit <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
