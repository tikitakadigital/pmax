import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/FaqList'
import { breadcrumb, serviceSchema, faqPage } from '@/lib/schema'
import { siteAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'Generative Engine Optimisation Agency | Visibility Engineering',
  description: 'Visibility Engineering by pmax: GEO, SEO, digital PR and reputation management. Get discovered, trusted and chosen across Google and AI search.',
  alternates: siteAlternates('/services/visibility-engineering/'),
  openGraph: {
    type: 'website',
    siteName: 'pmax',
    title: 'Generative Engine Optimisation Agency | Visibility Engineering',
    description: 'Visibility Engineering by pmax: GEO, SEO, digital PR and reputation management. Get discovered, trusted and chosen across Google and AI search.',
    url: 'https://pmax.online/services/visibility-engineering/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'pmax — Visibility Engineering' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pmaxonline',
    title: 'Generative Engine Optimisation Agency | Visibility Engineering',
    description: 'Visibility Engineering by pmax: GEO, SEO, digital PR and reputation management. Get discovered, trusted and chosen across Google and AI search.',
    images: ['/og-image.jpg'],
  },
}

const faqs = [
  {
    q: 'Is pmax a generative engine optimisation agency?',
    a: 'Yes — GEO is one of the core disciplines we offer, delivered as part of our wider Visibility Engineering approach, alongside SEO, digital PR and reputation management. We treat AI visibility as one part of a bigger authority strategy, not a standalone service.',
  },
  {
    q: "What's the difference between SEO and generative engine optimisation (GEO)?",
    a: 'SEO focuses on ranking in traditional search engines like Google, while GEO focuses on how AI platforms such as ChatGPT, Gemini and Perplexity discover, cite and recommend brands. The two aren\'t rivals — strong SEO is one of the foundations GEO builds on, since AI models still draw heavily on well-optimised, authoritative web content.',
  },
  {
    q: 'Do I still need SEO if I\'m investing in GEO?',
    a: 'Yes. AI search platforms cite and summarise from the same pool of authoritative, well-structured content that ranks well in traditional search. Neglecting SEO to focus solely on GEO typically weakens both.',
  },
  {
    q: 'How do you measure success in generative engine optimisation?',
    a: 'We use crunchjunkie (crunchjunkie.io) to track AI citation frequency, share-of-voice across AI platforms, sentiment in AI-generated responses, and how often a brand appears when AI tools compare it against competitors. crunchjunkie specialises in AI-visibility tracking and reporting, and its analysis, data and insights are offered free as part of any Visibility Engineering retainer booked through pmax.',
  },
  {
    q: 'What is Visibility Engineering?',
    a: "Visibility Engineering is pmax's integrated approach to modern search visibility, combining SEO, generative engine optimisation (GEO), digital PR and online reputation management. Rather than treating these as separate services, we manage them as one coordinated strategy, because search engines and AI platforms judge brands holistically, not by isolated signals.",
  },
  {
    q: 'Can a business appear in ChatGPT or Google AI Overviews without a strong SEO foundation?',
    a: "It's unlikely to happen consistently. AI platforms tend to draw on sources that already demonstrate expertise, authority and trust signals online — the same signals traditional SEO and digital PR are built to establish.",
  },
  {
    q: 'How long does generative engine optimisation take to show results?',
    a: 'Timelines vary by industry and starting point, but because GEO relies on the same trust and authority signals as SEO and digital PR, most brands see meaningful movement in AI citation and visibility over a similar multi-month timeframe to organic SEO gains, rather than overnight.',
  },
]

const pageUrl = 'https://pmax.online/services/visibility-engineering/'

const jsonLd = [
  breadcrumb([
    { name: 'Home', url: 'https://pmax.online/' },
    { name: 'Services', url: 'https://pmax.online/services/' },
    { name: 'Visibility Engineering', url: pageUrl },
  ]),
  serviceSchema({
    name: 'Visibility Engineering',
    description: 'Visibility Engineering by pmax combines Generative Engine Optimisation (GEO), SEO, digital PR and reputation management to help brands get discovered, trusted and chosen across Google and AI search.',
    url: pageUrl,
    serviceType: 'Visibility Engineering',
  }),
  {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://pmax.online/#service-ai-search',
        name: 'AI Search & Discovery Optimisation',
        serviceType: 'Generative Engine Optimisation (GEO)',
        provider: { '@id': 'https://pmax.online/#org' },
        description: 'As a specialist generative engine optimisation agency, pmax helps brands improve their visibility across AI-powered search platforms including ChatGPT, Google AI Overviews, Gemini, Claude and Perplexity. Services include SEO, GEO, LLM marketing, entity optimisation, structured content strategy, Knowledge Graph optimisation, and AI citation analysis and tracking.',
        areaServed: 'Worldwide',
      },
      {
        '@type': 'Service',
        '@id': 'https://pmax.online/#service-brand-authority',
        name: 'Brand Authority & Online Reputation Management',
        serviceType: 'Online Reputation Management',
        provider: { '@id': 'https://pmax.online/#org' },
        description: 'pmax combines technical optimisation with strategic communications to build the credibility that influences journalists, customers, analysts and AI models alike, strengthening authority signals across digital PR, news and media, industry publications, executive thought leadership, reviews and brand mentions.',
        areaServed: 'Worldwide',
      },
      {
        '@type': 'Service',
        '@id': 'https://pmax.online/#service-search-authority-choice',
        name: 'Search, Authority & Choice',
        serviceType: 'Integrated SEO, GEO & Digital PR Programme',
        provider: { '@id': 'https://pmax.online/#org' },
        description: "pmax's flagship retained programme integrating SEO, GEO marketing, LLM marketing, digital PR, online brand reputation management, executive visibility and authority building into one coordinated strategy.",
        areaServed: 'Worldwide',
      },
    ],
  },
  faqPage(faqs),
]

const stats = [
  { num: '51%', label: 'of consumers say their research habits have changed because of generative AI' },
  { num: '45%', label: 'less low-quality content in Google results after its largest quality update in years' },
  { num: '60+', label: 'years of combined experience across search, digital PR and brand reputation' },
  { num: '4', label: 'disciplines in one strategy — GEO, SEO, digital PR, reputation management' },
]

export default function VisibilityEngineeringPage() {
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
              <span>Visibility Engineering</span>
            </nav>
            <span className="page-intro-eyebrow">Generative Engine Optimisation · SEO · Digital PR · Reputation</span>
            <h1 className="page-intro-title">
              Visibility<br />Engineering.
            </h1>
            <p className="page-intro-deck">
              We help you build the authority that gets your brand found, trusted and chosen — across Google and every AI search platform that matters.
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
                <div className="section-head-kicker">The discipline</div>
                <h2 className="section-head-title">What we&nbsp;do.</h2>
              </div>
            </header>
            <div className="prose">
              <p>
                Creating and maintaining digital brand visibility is an ever-more complex challenge. Just when you have mastered keywords, along come ChatGPT, Claude and Gemini to change the rules. And that change is significant:{' '}
                <a href="https://www.gartner.com/en/newsroom/press-releases/gartner-survey-finds-only-one-third-of-consumers-say-genai-rivals-search-engines-marketers-must-optimize-for-both-ai-driven-and-traditional-search" target="_blank" rel="noopener noreferrer">research from Gartner finds 51% of consumers say their research habits have changed because of generative AI</a>,
                while more than half now use AI alongside traditional search — asking longer, more conversational questions and expecting authoritative, trustworthy answers.
              </p>
              <p>
                Today&apos;s customers move seamlessly between search engines, AI assistants, news coverage, review sites, industry publications and trusted recommendations. Every touchpoint influences whether your brand is discovered, trusted and ultimately chosen.
              </p>
              <p>
                Traditional search isn&apos;t disappearing. It&apos;s evolving into AI-assisted discovery. And AI-assisted is the word to focus on — your customer will still use Google, and depending on your target audience, Google remains their main discovery channel. The question is whether your brand shows up when it matters.
              </p>

              <h2>SEO isn&apos;t dead — it&apos;s the foundation of GEO</h2>
              <p>
                Despite what you may read on LinkedIn, <a href="/seo-company-mallorca/">SEO is not dead</a>. Customers still use Google, and good SEO is one of the core foundations of <a href="/services/ai-visibility/">Generative Engine Optimisation (GEO)</a> — you cannot do one without the other and expect to dominate digitally.
              </p>
              <p>
                Following its largest quality update in years, Google says search users now see 45% less low-quality, unoriginal content in results. The message is clear: visibility belongs to brands that demonstrate genuine expertise, experience, authority and trust.
              </p>
              <div className="prose-callout">
                <span className="prose-callout-kicker">The shift in search</span>
                <p>The question is no longer <em>&ldquo;How many keywords do we rank for?&rdquo;</em></p>
                <p>The better question is: <strong>Why should your brand be chosen?</strong></p>
                <p>
                  If ChatGPT is comparing your business with five competitors, if Google is deciding who deserves to rank, if a journalist is looking for an expert opinion, if a prospective customer is researching their options — does your expertise genuinely shine through? Does your reputation support your claims? Do your reviews, media coverage and online presence reinforce your credibility?
                </p>
              </div>

              <h2>Introducing Visibility Engineering</h2>
              <p>
                At pmax, we believe visibility is no longer earned through optimisation alone. It&apos;s engineered through authority. Visibility Engineering brings together everything that influences whether your brand is found, trusted and recommended — not just SEO, not just GEO, not just PR, not just reputation. All of it.
              </p>
              <p>
                Because customers — and increasingly AI systems — don&apos;t judge your website in isolation. They judge your brand. They look at your website, your media coverage, your reviews, your thought leadership, your executive profiles, your social presence, your third-party mentions and the consistency of your digital footprint.
              </p>
              <p>These signals don&apos;t exist in silos. Neither should your strategy.</p>

              <h2>Our Visibility Engineering services</h2>

              <h3>AI Search &amp; Discovery Optimisation</h3>
              <p>
                As a specialist <a href="/services/ai-visibility/">generative engine optimisation agency</a>, we help brands improve visibility across AI-powered search platforms including ChatGPT, Google AI Overviews, Gemini, Claude and Perplexity.
                Read our guides on <a href="/blog/how-to-get-mentioned-by-chatgpt/">how to get cited by ChatGPT, Perplexity and Gemini</a> and <a href="/blog/perplexity-visibility/">how to improve your Perplexity visibility specifically</a>.
                We run a <a href="/services/geo-audit/">free initial GEO audit</a> for every brand considering working with us.
              </p>
              <ul>
                <li>Search Engine Optimisation (SEO)</li>
                <li>Generative Engine Optimisation (GEO)</li>
                <li>LLM marketing</li>
                <li>Entity optimisation</li>
                <li>Structured content strategy</li>
                <li>Knowledge Graph optimisation</li>
                <li>AI citation analysis, tracking and reporting by <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">crunchjunkie</a></li>
                <li>Search authority development</li>
              </ul>

              <h3>Brand Authority &amp; Online Reputation Management</h3>
              <p>
                AI systems increasingly rely on trusted sources. We combine technical optimisation with strategic communications to build the credibility that influences journalists, customers, analysts and AI models alike — strengthening authority signals across:
              </p>
              <ul>
                <li>Digital PR</li>
                <li>News and media coverage</li>
                <li>Industry publications</li>
                <li>Executive thought leadership</li>
                <li>Reviews and reputation management</li>
                <li>Brand mentions</li>
                <li>Digital authority building</li>
              </ul>

              <h3>Search, Authority &amp; Choice</h3>
              <p>Our flagship retained programme integrates all disciplines into one coordinated strategy — increasing discoverability, strengthening reputation and improving commercial performance.</p>
              <ul>
                <li>SEO</li>
                <li>GEO marketing</li>
                <li>LLM marketing</li>
                <li>Digital PR</li>
                <li>Online brand reputation management</li>
                <li>Executive visibility</li>
                <li>Authority building</li>
              </ul>

              <h2>Why pmax?</h2>
              <p>
                Most agencies specialise in one discipline — SEO, PR, digital marketing, or brand. We don&apos;t believe today&apos;s search landscape can be solved in silos. With more than 60 years of combined experience spanning search marketing, digital strategy, public relations and brand reputation, we help organisations build lasting authority — not just temporary rankings.
              </p>
              <p>
                Because visibility is no longer about simply ranking. It&apos;s about becoming the brand that Google trusts, AI cites and customers choose.
              </p>
              <p>That&apos;s Visibility Engineering.</p>
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
              <span className="promo-eyebrow">Start with a visibility audit</span>
              <h2 className="promo-headline">See where your brand stands today.</h2>
              <p className="promo-deck">
                We&apos;ll audit your AI citation footprint, technical foundations and authority signals — and tell you, straight, where the biggest gaps are. No deck, no sales pitch.
              </p>
            </div>
            <Link href="/contact/?topic=visibility-engineering" className="btn-primary" style={{ whiteSpace: 'nowrap', fontSize: 13, padding: '14px 22px' }}>
              Request audit <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
