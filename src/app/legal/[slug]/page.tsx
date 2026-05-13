import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { breadcrumb } from '@/lib/schema'

const pages: Record<string, { title: string; description: string; body: React.ReactNode }> = {
  imprint: {
    title: 'Legal notice',
    description: 'Legal notice for PMax Online S.L., Calle Cordova 5, 07184 Calvià, Mallorca, Spain.',
    body: (
      <div className="prose">
        <p><em>PMax Online S.L. · Registered in Palma de Mallorca · VAT ES B57948123</em></p>
        <h2>Company information</h2>
        <p>
          <strong>PMax Online S.L.</strong><br />
          Calle Cordova, 5<br />
          07184 Calvià, Mallorca<br />
          Spain
        </p>
        <p>
          VAT number: ES B57948123<br />
          Registered in the Mercantile Registry of Palma de Mallorca
        </p>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:hello@pmax.online">hello@pmax.online</a><br />
          Phone: <a href="tel:+34871242160">+34 871 242 160</a>
        </p>
        <h2>Director</h2>
        <p>Philipp Enders, Founder &amp; Director</p>
        <h2>Regulatory information</h2>
        <p>
          pmax Online S.L. is a limited liability company (Sociedad de Responsabilidad Limitada)
          incorporated under Spanish law. Activities are not subject to specific sectoral
          authorisation or registration beyond standard commercial registration.
        </p>
      </div>
    ),
  },
  privacy: {
    title: 'Privacy policy',
    description: 'How PMax Online S.L. collects, uses and protects personal data under GDPR and Spanish LOPDGDD.',
    body: (
      <div className="prose">
        <p><em>Last updated: April 1, 2026 · Effective from April 1, 2026</em></p>
        <p>
          This privacy policy explains how PMax Online S.L. (&ldquo;pmax&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects and
          processes personal data when you visit pmax.online or engage us as a service provider.
          It is written to comply with the EU General Data Protection Regulation (GDPR) and the
          Spanish Organic Law on the Protection of Personal Data and Guarantee of Digital Rights
          (LOPDGDD).
        </p>
        <h2>1. Data controller</h2>
        <p>PMax Online S.L., Calle Cordova 5, 07184 Calvià, Mallorca, Spain. Email: <a href="mailto:hello@pmax.online">hello@pmax.online</a>.</p>
        <h2>2. What data we collect</h2>
        <h3>When you visit our website</h3>
        <ul>
          <li>Server log files (IP address, user agent, referrer, timestamp)</li>
          <li>Cookies and similar technologies (see our <a href="/legal/cookies">cookie policy</a>)</li>
          <li>Aggregated, anonymised analytics data via Google Analytics 4 with IP anonymisation enabled and only after consent</li>
        </ul>
        <h3>When you fill out our contact form</h3>
        <ul>
          <li>Name, company, email address, phone number (optional), the message you send us</li>
        </ul>
        <h3>When you become a client</h3>
        <ul>
          <li>Business contact details of your team</li>
          <li>Billing and invoicing data</li>
          <li>Access to your marketing platforms granted to us solely for the purpose of providing our services</li>
        </ul>
        <h2>3. Legal basis for processing</h2>
        <ul>
          <li><strong>Art. 6(1)(a) GDPR — Consent</strong> for analytics and marketing cookies</li>
          <li><strong>Art. 6(1)(b) GDPR — Contract</strong> for processing client data to deliver our services</li>
          <li><strong>Art. 6(1)(f) GDPR — Legitimate interest</strong> for responding to inbound enquiries and securing our website</li>
          <li><strong>Art. 6(1)(c) GDPR — Legal obligation</strong> for retaining accounting records under Spanish tax law</li>
        </ul>
        <h2>4. How long we keep your data</h2>
        <p>
          Enquiry data: 24 months from your last contact, unless you become a client. Client data: duration of the engagement plus 10 years for invoicing records as required by Spanish tax law. Server logs: 14 days. Analytics data: 14 months.
        </p>
        <h2>5. Your rights</h2>
        <p>
          Under GDPR you have the right to access, rectification, erasure, restriction of processing,
          data portability, and to object to processing. To exercise any of these rights, contact{' '}
          <a href="mailto:hello@pmax.online">hello@pmax.online</a>. You also have the right to lodge
          a complaint with the Spanish Data Protection Agency (AEPD) at{' '}
          <a href="https://www.aepd.es" target="_blank" rel="noopener">aepd.es</a>.
        </p>
        <h2>6. Third-party processors</h2>
        <p>We use the following processors, each bound by Data Processing Agreements (Art. 28 GDPR):</p>
        <ul>
          <li>Google Ireland Ltd. — Google Workspace, Google Analytics (EU servers)</li>
          <li>HubSpot Ireland Ltd. — CRM</li>
          <li>Vercel Inc. — Website hosting (EU region)</li>
          <li>Sendgrid (Twilio Ireland Ltd.) — Transactional email</li>
        </ul>
        <p>Some of these providers may transfer data outside the EEA. Where this occurs, transfers are protected by Standard Contractual Clauses (SCCs).</p>
        <h2>7. Contact</h2>
        <p>
          For privacy questions: <a href="mailto:hello@pmax.online">hello@pmax.online</a>.
          We respond to all rights requests within 30 days as required by GDPR.
        </p>
      </div>
    ),
  },
  cookies: {
    title: 'Cookie policy',
    description: 'What cookies pmax.online uses, why, and how to control them. GDPR-compliant.',
    body: (
      <div className="prose">
        <p><em>Last updated: April 1, 2026</em></p>
        <p>
          This policy explains what cookies we use on pmax.online, why we use them, and how you
          can control them. Cookies are small text files stored on your device by your browser
          when you visit a website.
        </p>

        <h2>Strictly necessary cookies</h2>
        <p>
          These cookies are required for the website to function and cannot be turned off in our
          systems. They store no personally identifiable information.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>pmax_consent</td>
              <td>Stores your cookie consent choice</td>
              <td>12 months</td>
            </tr>
            <tr>
              <td>pmax_session</td>
              <td>Maintains your session state</td>
              <td>Session</td>
            </tr>
          </tbody>
        </table>

        <h2>Analytics cookies (set only with consent)</h2>
        <p>
          We use Google Analytics 4 to understand how visitors use our site. IP addresses are
          anonymised before processing. We do not share this data with advertisers.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ga</td>
              <td>Distinguishes unique users</td>
              <td>14 months</td>
            </tr>
            <tr>
              <td>_ga_*</td>
              <td>Persists session state (GA4)</td>
              <td>14 months</td>
            </tr>
          </tbody>
        </table>

        <h2>Marketing cookies (set only with consent)</h2>
        <p>
          We use Meta Pixel and LinkedIn Insight Tag for remarketing — exclusively to people
          who have already visited pmax.online. We do not run dynamic product remarketing.
        </p>

        <h2>Third-party embeds</h2>
        <p>
          The contact page embeds a Google Maps iframe. Google may set its own cookies when
          this loads. These are governed by{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google&apos;s privacy policy</a>.
        </p>

        <h2>Managing your preferences</h2>
        <p>
          You can change or withdraw your consent at any time by clicking the
          &ldquo;Cookie preferences&rdquo; link in our footer. You can also block cookies entirely
          through your browser settings; this may degrade some site functionality.
        </p>

        <h2>Contact</h2>
        <p>
          Questions: <a href="mailto:hello@pmax.online">hello@pmax.online</a>.
          See also our <a href="/legal/privacy">full privacy policy</a>.
        </p>
      </div>
    ),
  },
  terms: {
    title: 'Terms & conditions',
    description: 'Standard terms governing engagements between PMax Online S.L. and its clients.',
    body: (
      <div className="prose">
        <p><em>Effective from April 1, 2026 · Governs the relationship between PMax Online S.L. and its clients.</em></p>
        <h2>1. Definitions</h2>
        <p>"pmax", "we", "us" means PMax Online S.L., Calle Cordova 5, 07184 Calvià, Mallorca, Spain. "Client", "you" means the entity that enters into an engagement letter with us. "Services" means the digital marketing services described in the relevant engagement letter or statement of work.</p>
        <h2>2. Engagement</h2>
        <p>Each engagement is governed by an individual statement of work (SOW) which references and incorporates these terms. In the event of conflict, the SOW takes precedence.</p>
        <h2>3. Fees and payment</h2>
        <p>Fees are stated in the SOW, exclusive of VAT. Retainer fees are invoiced monthly in advance and payable within 14 days. Late payment incurs interest at the statutory Spanish rate. We reserve the right to suspend services for invoices more than 30 days overdue.</p>
        <h2>4. Media spend</h2>
        <p>Media spend (Google Ads, Meta, LinkedIn etc.) is paid by the Client directly to the platform. pmax does not handle Client media spend. We do not earn a percentage of media spend.</p>
        <h2>5. Intellectual property</h2>
        <p>All deliverables created under an engagement transfer to the Client on full payment of the relevant invoice. We retain the right to reference engagements in our marketing materials in non-confidential, anonymised form unless explicitly agreed otherwise in writing.</p>
        <h2>6. Confidentiality</h2>
        <p>Both parties agree to keep confidential all information disclosed during an engagement that is identified as confidential or that a reasonable person would consider confidential. This obligation survives termination of the engagement.</p>
        <h2>7. Data protection</h2>
        <p>Where pmax processes personal data on behalf of the Client, the parties will enter into a Data Processing Agreement (DPA) in line with Art. 28 GDPR. The DPA forms part of the engagement.</p>
        <h2>8. Termination</h2>
        <p>Retainer engagements may be terminated by either party with 30 days&apos; written notice. Project engagements may be terminated for material breach not cured within 14 days of notice.</p>
        <h2>9. Liability</h2>
        <p>Our aggregate liability under any engagement is limited to the fees paid in the 12 months preceding the event giving rise to the claim. Nothing in these terms limits liability for death, personal injury, fraud, or any liability that cannot be limited by Spanish law.</p>
        <h2>10. Governing law</h2>
        <p>These terms and any engagement are governed by Spanish law. The courts of Palma de Mallorca have exclusive jurisdiction.</p>
      </div>
    ),
  },
}

export function generateStaticParams() {
  return Object.keys(pages).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = pages[slug]
  if (!page) return {}
  return {
    title: `${page.title} — pmax`,
    description: page.description,
    robots: { index: false },
    alternates: { canonical: `https://pmax.online/legal/${slug}/` },
  }
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = pages[slug]
  if (!page) notFound()

  const jsonLd = breadcrumb([
    { name: 'Home', url: 'https://pmax.online/' },
    { name: 'Legal', url: 'https://pmax.online/legal/imprint/' },
    { name: page.title, url: `https://pmax.online/legal/${slug}/` },
  ])

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
              <Link href="/legal/imprint">Legal</Link>
              <span className="sep">/</span>
              <span>{page.title}</span>
            </nav>
            <span className="page-intro-eyebrow">Legal</span>
            <h1 className="page-intro-title" style={{ fontSize: 'clamp(48px, 8vw, 110px)' }}>
              {page.title}.
            </h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {page.body}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
