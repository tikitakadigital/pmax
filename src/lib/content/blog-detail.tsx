import type { ReactNode } from 'react'
import Image from 'next/image'

export interface BlogDetail {
  slug: string
  toc: string[]
  tocIds?: string[]
  prose: ReactNode
  faqs?: { q: string; a: string }[]
  image?: string
  imageAlt?: string
}

const NeedHelp = ({ topic }: { topic: string }) => (
  <>
    <h2>Need help with this?</h2>
    <p>If any of the above feels like a problem you have, <a href={`/contact/?topic=${topic}`}>tell us a bit about your situation</a> and we will come back within a working day. First conversation is 30 minutes, on us.</p>
  </>
)

export const blogDetails: BlogDetail[] = [
{
    slug: 'how-to-advertise-business-mallorca',
    toc: [
      'The Mallorca market: what makes it different',
      'Google Ads in Mallorca',
      'Meta Ads for Mallorca businesses',
      'TikTok Ads for tourism and hospitality',
      'LinkedIn Ads for B2B and professional services',
      'How to build a multi-channel strategy',
    ],
    tocIds: [
      'mallorca-market',
      'google-ads-mallorca',
      'meta-ads-mallorca',
      'tiktok-ads-mallorca',
      'linkedin-ads-mallorca',
      'multi-channel',
    ],
    faqs: [
      {
        q: 'What is the best way to advertise a business in Mallorca?',
        a: "There is no single best channel — the right answer depends on your business type, customer profile, and the time of year. For high-intent searches (real estate, professional services), Google Ads performs best. For discovery-phase tourism and hospitality, Meta and TikTok during the pre-trip window (February–June) deliver the strongest results. For B2B services targeting the expat professional community, LinkedIn is the only channel with the targeting precision required. Most successful Mallorca businesses use at least two channels with complementary functions.",
      },
      {
        q: 'How much should a Mallorca business spend on digital advertising?',
        a: 'Minimum viable budgets in the Mallorca market: Google Ads €800/month, Meta Ads €500/month (seasonal), TikTok Ads €400/month (seasonal, March–October), LinkedIn Ads €1,000/month. Below these thresholds, you do not generate enough data to optimise meaningfully. Most of our established clients with seasonal businesses spend €1,500–€4,000/month during peak season and reduce significantly — or pause entirely — in winter.',
      },
      {
        q: 'Do Google Ads work in Mallorca?',
        a: 'Yes, for the right categories. Google Ads performs strongly for real estate, legal services, private medical, accountants, and any business where customers search with specific purchase intent. It underperforms for discovery-driven businesses — nobody searches "nice restaurant in Mallorca" before they land on the island; they find restaurants on Instagram or Google Maps on the day. Geo-targeting must be carefully configured: broad Spain targeting wastes budget on mainland clicks with no Mallorca intent.',
      },
      {
        q: 'What is the best platform to reach German tourists in Mallorca?',
        a: 'German tourists are best reached at source — in Germany, Austria, or Switzerland, before they book. Meta (Instagram and Facebook) with German-language creative targeted by travel interest and geographic signal is the most cost-effective awareness channel. Google Search in German for Mallorca-specific queries ("Finca Mallorca mieten", "Hotel Mallorca buchen") captures high-intent searches at the consideration stage. Running German-language campaigns requires copy, creative, and landing pages in German — this is where most Mallorca advertisers fall short.',
      },
      {
        q: 'Is social media advertising effective for seasonal Mallorca businesses?',
        a: 'Yes, but timing is the critical variable. Social media advertising for seasonal Mallorca businesses works best as a pre-season awareness play — running February through May to reach tourists in their consideration phase, before they commit to bookings. Running social ads from June onwards means competing for attention against brands that have already established awareness at lower CPMs. The businesses that get the most from Meta and TikTok on Mallorca plan their creative calendar in January and go live in February.',
      },
    ],
    prose: (
      <>
        <p>Mallorca is not a normal local market. The permanent population is approximately 900,000 &mdash; small by European standards. But overlaid on that is a tourism economy that represents roughly 70% of the Balearic Islands&rsquo; GDP. Nearly 10 million visitors arrive each year.</p>
        <p>German tourists: 3.7 million annually, 37% of total visitors, spending an average of &euro;1,200 per trip according to Balearic Islands tourism statistics. UK tourists: 1.6 million annually, 16% of total. These two groups &mdash; plus the island&rsquo;s permanent resident population &mdash; have almost nothing in common in terms of buying behaviour, language, or platform usage. Your advertising strategy must address them separately.</p>
        <p>This guide covers every major paid channel available to Mallorca businesses, with specific budgets and Mallorca-specific context that generic agency guides skip. We are a <a href="/marketing-agency-mallorca">marketing agency based in Calvià</a>. This is the market we work in every day.</p>

        <h2 id="mallorca-market">The Mallorca market: what makes it different</h2>
        <p>Three facts define the Mallorca advertising landscape.</p>
        <p><strong>Two markets, one island.</strong> The permanent population is around 900,000. The tourism economy &mdash; roughly 70% of the Balearic Islands&rsquo; GDP &mdash; brings nearly 10 million visitors per year. German tourists are the single largest group: 3.7 million per year, &euro;1,200 average spend per trip. UK tourists: 1.6 million per year. These groups have fundamentally different discovery behaviours, language preferences, and booking timelines. A single strategy rarely serves both.</p>
        <p><strong>Season compresses the window.</strong> Tourism runs April to October. July and August are peak. A business targeting tourists that starts advertising in June has already missed the pre-trip consideration window &mdash; German and British tourists research and book 4&ndash;12 weeks in advance. The best-performing campaigns we manage ramp in February.</p>
        <p><strong>German language is an underserved competitive advantage.</strong> 37% of Mallorca&rsquo;s annual visitors are German. Most search, browse, and book in German. Yet the majority of Mallorca&rsquo;s digital advertising is in Spanish or English. Well-structured German-language campaigns &mdash; targeting German tourists at source, before they book, in their own language &mdash; is the most underexploited opportunity in this market. Most English-speaking agencies do not operate in German. Most Spanish agencies do not either.</p>

        <h2 id="google-ads-mallorca">Google Ads in Mallorca</h2>
        <p>Google Ads is the right channel for high-intent Mallorca searches: real estate, legal services, accountants, private medical, professional services of any kind. Anyone with specific intent and ready to act shows up in Google Search first.</p>
        <p><strong>Geo-targeting requires precision.</strong> Targeting &ldquo;Spain&rdquo; broadly pulls in traffic from Madrid and Barcelona with no intention of visiting your Mallorca business. We build campaigns with island-specific geo-targeting plus extended coverage for tourists searching from Germany and the UK before departure &mdash; two very different configurations that most single-market setups miss entirely.</p>
        <p><strong>German-language search volume is underserved.</strong> &ldquo;Finca mieten Mallorca&rdquo;, &ldquo;Immobilien Mallorca kaufen&rdquo;, &ldquo;Zahnarzt Mallorca&rdquo; &mdash; German-language queries for Mallorca-specific services generate meaningful volume and face materially less competition than their English equivalents. German-language ads pointing to German-language landing pages, served to users in Germany before their trip, convert at rates most Mallorca advertisers are not currently capturing.</p>
        <p><strong>Budget strategy: annual vs seasonal.</strong> Professional services and real estate businesses advertise year-round with relatively flat seasonality. Tourism-dependent businesses front-load spend in Q1 to capture pre-trip research, then maintain through peak.</p>
        <p>Minimum viable budget: &euro;800/month. Below that, the data volume is too thin for meaningful optimisation. Read our full guide: <a href="/blog/google-ads-mallorca/">Google Ads in Mallorca</a>. Our <a href="/services/google-ads">Google Ads service</a> page covers how we structure campaigns. For cost benchmarks in German, see our guide to <a href="/blog/was-kostet-google-ads/">was kostet Google Ads</a>.</p>

        <h2 id="meta-ads-mallorca">Meta Ads for Mallorca businesses</h2>
        <p>Meta is the dominant discovery-phase channel for hospitality, tourism, and B2C businesses in Mallorca. It is where people find restaurants, experiences, and holiday accommodation before purchase intent crystallises.</p>
        <p><strong>The tourist pre-trip window.</strong> German Instagram users travelling to Mallorca are active on the platform 4&ndash;8 weeks before departure. Instagram Stories and Reels targeting German-speaking audiences by travel interest and geographic signal consistently outperform en-route targeting for our hospitality clients. A user in Munich researching Mallorca beach clubs is worth far more than a user who has already booked and landed.</p>
        <p><strong>Season timing is everything.</strong> Tourist-facing Meta campaigns should ramp February&ndash;March, peak in May&ndash;June for pre-trip bookings, and continue through October. Flat year-round budgets on seasonal businesses waste money in winter and miss the pre-trip consideration window.</p>
        <p><strong>Year-round local campaigns.</strong> Businesses serving permanent residents &mdash; dentists, gyms, legal practices &mdash; run fundamentally different strategies: local radius targeting, consistent year-round budget, no seasonal ramp required.</p>
        <p>Minimum viable budget: &euro;500/month in season. For hospitality-specific approaches, see our <a href="/industries/hospitality">hospitality industry page</a>. For the agency vs in-house question, read our guide: <a href="/blog/meta-ads-agency-vs-in-house/">Meta Ads: agency vs in-house</a>. The <a href="/services/paid-social">paid social service</a> page covers how we manage Meta campaigns end-to-end.</p>

        <h2 id="tiktok-ads-mallorca">TikTok Ads for tourism and hospitality</h2>
        <p>TikTok has become a credible paid channel for tourism and experience businesses in Mallorca. The organic content that drives the most views on the island &mdash; catamaran day trips, beach clubs, hillside restaurants, sunrise hikes &mdash; maps directly onto the TikTok ad formats that perform.</p>
        <p>TikTok works for Mallorca businesses when you have a strong visual product, a customer base aged 18&ndash;34, and the capacity to produce short-form video at consistent volume. It does not work well for B2B services, professional services with long sales cycles, or high-ticket real estate &mdash; different content format, different audience, different platform.</p>
        <p><strong>Seasonality-aware creative is the highest-performing mechanic.</strong> &ldquo;Book now &mdash; 3 spots left in July.&rdquo; Availability-based creative with a live sense of urgency is something static image ads cannot replicate. It is also uniquely suited to the Mallorca seasonal market, where scarcity is real and time-sensitivity is high.</p>
        <p>Minimum viable budget: &euro;400/month, March&ndash;October. Read our dedicated guide: <a href="/blog/tiktok-ads-mallorca-tourism/">TikTok Ads for Mallorca tourism</a>.</p>

        <h2 id="linkedin-ads-mallorca">LinkedIn Ads for B2B and professional services</h2>
        <p>LinkedIn Ads are expensive everywhere, including Mallorca. Typical CPCs run &euro;4&ndash;&euro;8. But for specific use cases, they are the only channel that reaches the right audience with the right targeting precision.</p>
        <p>Mallorca-specific LinkedIn use cases where the economics work:</p>
        <ul>
          <li><strong>B2B services for the expat professional community</strong> &mdash; accountants, lawyers, corporate advisors serving German and UK-origin business owners resident on the island</li>
          <li><strong>Real estate targeting high-net-worth DACH buyers</strong> &mdash; job function and seniority targeting of senior professionals in Germany, Austria, and Switzerland who are active buyers in the Mallorca luxury property market</li>
          <li><strong>Professional services for businesses with Mallorca operations</strong> &mdash; maritime services, logistics, corporate travel, language services</li>
        </ul>
        <p>The Mallorca B2B market is small on LinkedIn. Plan for frequency over reach &mdash; repeated exposure to a defined audience of 5,000&ndash;15,000 performs better than spreading thin across a broader list at lower frequency.</p>
        <p>Minimum viable budget: &euro;1,000/month. Read our <a href="/blog/linkedin-ads-b2b-spain/">B2B LinkedIn Ads guide for Spain</a> and our <a href="/industries/real-estate">real estate industry page</a>.</p>

        <h2 id="multi-channel">How to build a multi-channel strategy</h2>
        <p>No single channel covers the full Mallorca customer journey. The businesses that grow fastest combine channels deliberately &mdash; each matched to the right stage and audience.</p>
        <p>A simplified framework for most Mallorca tourism or hospitality businesses:</p>
        <ul>
          <li><strong>Awareness (February&ndash;April):</strong> Meta and TikTok to German and UK audiences by interest and geographic signal &mdash; reach tourists in the pre-trip consideration phase</li>
          <li><strong>Consideration (March&ndash;June):</strong> Google Search for intent-led queries; Meta retargeting of website visitors and video viewers</li>
          <li><strong>Conversion (May&ndash;August):</strong> Google Performance Max with real booking data fed back as offline conversions; reduced awareness spend, maximum conversion focus</li>
          <li><strong>Retention (October&ndash;November):</strong> Email to past guests; Meta Custom Audiences for direct repeat bookings, bypassing OTA commission</li>
        </ul>
        <p>Platform comparison by business type:</p>
        <div style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Platform</th>
                <th style={{ textAlign: 'left', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Best for</th>
                <th style={{ textAlign: 'left', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Season</th>
                <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Min budget</th>
              </tr>
            </thead>
            <tbody>
              {[
                { platform: 'Google Ads', best: 'Real estate, professional services', season: 'Year-round', budget: '€800/mo' },
                { platform: 'Meta Ads', best: 'Hospitality, restaurants, B2C', season: 'Apr–Oct peak', budget: '€500/mo' },
                { platform: 'TikTok Ads', best: 'Tourism, boat charters, experiences', season: 'Mar–Oct', budget: '€400/mo' },
                { platform: 'LinkedIn Ads', best: 'B2B, professional services, expats', season: 'Year-round', budget: '€1,000/mo' },
                { platform: 'Pinterest Ads', best: 'Home interiors, weddings, lifestyle', season: 'Year-round', budget: '€300/mo' },
              ].map(row => (
                <tr key={row.platform} style={{ borderBottom: '1px solid #1a1a1a' }}>
                  <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8', fontWeight: 500 }}>{row.platform}</td>
                  <td style={{ padding: '10px 16px', color: '#949494', fontSize: 12 }}>{row.best}</td>
                  <td style={{ padding: '10px 16px', color: '#949494', fontSize: 12, whiteSpace: 'nowrap' }}>{row.season}</td>
                  <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>This is a starting point, not a prescription. A 12-room boutique hotel runs a very different strategy from a restaurant group with three locations. The channel mix that makes sense for a real estate agency bears no resemblance to the one that works for a boat charter company.</p>
        <p>Our <a href="/services/paid-social">paid social service</a> covers Meta, TikTok, Pinterest, and LinkedIn. Our <a href="/services/google-ads">Google Ads service</a> covers Search, Shopping, and Performance Max. For organic search and local SEO, see our <a href="/seo-company-mallorca">SEO company Mallorca</a> page. For hospitality-specific context, our case study on <a href="/blog/hotel-direct-bookings/">hotel direct bookings</a> covers how Mar y Roca reduced OTA dependency in 11 weeks. And our <a href="/services/ai-visibility">AI visibility</a> service is increasingly relevant for Mallorca businesses that want to appear in AI-generated local and travel recommendations.</p>
        <NeedHelp topic="how-to-advertise-business-mallorca" />
      </>
    ),
  },
{
    slug: 'was-kostet-google-ads',
    toc: [
      'How Google Ads pricing actually works',
      'Average CPCs by industry in Germany',
      'The total cost equation',
      'Budget scenarios: what €500, €2k, and €5k actually gets you',
      'A Palma real estate case',
      'Cheap clicks are not profitable clicks',
    ],
    tocIds: [
      'how-pricing-works',
      'cpc-by-industry',
      'total-cost-equation',
      'budget-scenarios',
      'palma-real-estate',
      'cheap-clicks',
    ],
    faqs: [
      {
        q: 'How much does Google Ads cost per month in Germany?',
        a: 'There is no fixed monthly cost — Google Ads runs on an auction. Your monthly spend is CPC × clicks, determined by your budget cap, keyword competition and Quality Score. A small local business can start at €500/month in ad spend and generate meaningful leads. A competitive e-commerce account might need €5,000+/month to reach statistically useful volume. Most SMEs we work with operate between €1,500 and €8,000/month in ad spend, plus a management fee if they use an agency.',
      },
      {
        q: 'What is the average cost per click on Google Ads in Spain?',
        a: 'Spanish CPCs are generally 15–25% lower than German CPCs in equivalent categories, due to lower advertiser competition. In practice, a real estate agency in Palma might pay €1.80–€2.20 per click on property search terms, versus €2.40–€3.00 for a similar campaign in Munich. These are indicative ranges; your actual CPC depends on Quality Score, keyword specificity and auction dynamics.',
      },
      {
        q: "What's the minimum Google Ads budget worth starting with?",
        a: "€500/month in ad spend can work for a narrowly targeted local service business with a high-margin conversion and a well-optimised landing page. Below €500/month you rarely generate enough data for the algorithm to optimise meaningfully, and campaign-level spend limits mean you cannot test systematically. We generally recommend €1,000/month as the realistic minimum for a campaign that can learn and improve.",
      },
      {
        q: 'How much does Google Ads management cost?',
        a: 'Agency management fees vary widely. The industry standard is either a percentage of ad spend (typically 10–15%) or a flat monthly fee. Percentage-of-spend models create an incentive to grow your budget rather than improve efficiency — pmax charges flat monthly fees to avoid this. Flat fees for SME accounts typically run £500–£2,000/month depending on account complexity and the number of campaigns and channels managed.',
      },
      {
        q: 'Is Google Ads cheaper than Meta Ads?',
        a: "It depends on what you mean by cheaper. Meta Ads typically have lower CPCs — often €0.30–€0.80 on broad audiences — but lower conversion intent. Google Search Ads capture people actively searching for what you sell; Meta Ads interrupt people while they scroll. For direct-response campaigns where purchase intent drives performance, Google Search usually generates lower cost per lead despite higher CPC, because the traffic quality is higher. For awareness and retargeting, Meta is often more cost-efficient.",
      },
    ],
    prose: (
      <>
        <p>The most common question from businesses considering Google Ads for the first time is some version of: &ldquo;how much does it cost?&rdquo; The honest answer is: it depends, and it is more complicated than most guides admit.</p>
        <p>There is no flat fee. Google Ads runs on an auction. You pay when someone clicks your ad, at a price determined in real time by competition, relevance and your own account quality. This guide breaks down how that actually works, what average costs look like by industry in Germany, and what three different monthly budgets realistically deliver in 2026.</p>

        <h2 id="how-pricing-works">How Google Ads pricing actually works</h2>
        <p>Google Ads is not a space-buying exercise. Every time someone runs a search, an automated auction fires. Every advertiser bidding on relevant keywords enters the auction. Google evaluates them all and decides who gets shown, in what position, at what price.</p>
        <p>The winner is not the highest bidder. Google uses Ad Rank &mdash; a composite of your bid, your Quality Score and several other factors including ad extension use and expected click-through rate. Quality Score is a 1&ndash;10 rating of how relevant your ad and landing page are to the query. A Quality Score of 8 means you pay less per click than a competitor with a Score of 4, even if you bid the same amount. This is not a technicality. It materially affects what you pay.</p>
        <p>On billing: most Search campaigns for SMEs run on cost-per-click (CPC). You set a maximum CPC bid &mdash; the ceiling of what you are willing to pay per click &mdash; and the auction determines the actual amount, which is often lower. Display and YouTube campaigns can also run on CPM (cost per thousand impressions), though for most advertisers new to Google Ads, CPC on Search is the primary mechanism to understand.</p>
        <p>Smart Bidding strategies &mdash; Target CPA, Target ROAS, Maximise Conversions &mdash; automate bidding within the auction. They require conversion data to function: a campaign needs roughly 30&ndash;50 conversions in 30 days before Smart Bidding can optimise effectively. Below that threshold, manual or enhanced CPC bidding is more reliable.</p>

        <h2 id="cpc-by-industry">Average CPCs by industry in Germany</h2>
        <p>CPC averages vary significantly by industry, because competition varies. In a sector where a single converted client is worth tens of thousands of euros, advertisers bid aggressively. In sectors with high volume and thin margins, they bid conservatively.</p>
        <p>Here are average CPCs across eight industries in Germany, based on WordStream 2024 Google Ads benchmarks:</p>

        <div style={{ margin: '32px 0', overflowX: 'auto' }}>
          <svg viewBox="0 0 560 280" style={{ width: '100%', maxWidth: 560, display: 'block' }} aria-label="Average Google Ads CPC by industry in Germany">
            {([['€4', 50], ['€3', 95], ['€2', 140], ['€1', 185]] as [string, number][]).map(([label, y]) => (
              <g key={label}>
                <line x1={65} y1={y} x2={498} y2={y} stroke="#1e1e28" strokeWidth={1} />
                <text x={58} y={y + 4} fontSize={9} fill="#6b6b6b" textAnchor="end" fontFamily="var(--font-mono)">{label}</text>
              </g>
            ))}
            {([
              ['Legal', 3.80, 65],
              ['Finance', 3.40, 121],
              ['B2B SaaS', 2.90, 177],
              ['Real estate', 2.60, 233],
              ['Healthcare', 2.10, 289],
              ['Home svcs', 1.70, 345],
              ['Hospitality', 1.30, 401],
              ['E-commerce', 0.90, 457],
            ] as [string, number, number][]).map(([industry, cpc, bx]) => {
              const h = Math.round(180 * cpc / 4)
              const by = 230 - h
              return (
                <g key={industry}>
                  <rect x={bx} y={by} width={38} height={h} fill="#3cffd0" rx={2} />
                  <text x={bx + 19} y={by - 6} fontSize={10} fill="#3cffd0" textAnchor="middle" fontFamily="var(--font-mono)">&euro;{cpc.toFixed(2)}</text>
                  <text
                    x={bx + 19}
                    y={248}
                    fontSize={9}
                    fill="#6b6b6b"
                    textAnchor="end"
                    fontFamily="var(--font-mono)"
                    transform={`rotate(-42 ${bx + 19} 248)`}
                  >{industry}</text>
                </g>
              )
            })}
            <line x1={65} y1={230} x2={498} y2={230} stroke="#2d2d2d" strokeWidth={1} />
          </svg>
          <p style={{ fontSize: 11, color: '#6b6b6b', fontFamily: 'var(--font-mono)', marginTop: 8 }}>Source: WordStream 2024 Google Ads benchmarks &middot; Germany market &middot; indicative averages</p>
        </div>

        <p>Legal and financial services command the highest CPCs because a single converted client is worth thousands of euros in fees. E-commerce sits at the low end &mdash; lower CPCs, but also lower average order values, meaning the maths on conversion rates is correspondingly tighter. Hospitality lies in the lower range, but seasonality creates significant CPC spikes in peak booking periods that annual averages do not capture.</p>
        <p>These are benchmarks, not guarantees. Your actual CPC depends on Quality Score, specific keyword selection, geographic targeting and how many competitors are actively bidding in your auction. Real CPCs can sit 30&ndash;40% above or below these figures.</p>

        <h2 id="total-cost-equation">The total cost equation</h2>
        <p>CPC alone does not tell you what Google Ads costs. The full equation has more moving parts.</p>
        <p><strong>Ad spend</strong> = CPC &times; clicks. At an average CPC of &euro;2.10 and 500 clicks in a month, your ad spend is &euro;1,050.</p>
        <p><strong>Clicks are not conversions.</strong> If your landing page converts at 4% &mdash; 1 in 25 visitors fills in a form, calls, or buys &mdash; those 500 clicks produce 20 leads. Your cost per lead is &euro;52.50.</p>
        <p><strong>Quality Score affects every step.</strong> A low Quality Score inflates your CPC, which inflates your cost per lead even if conversion rate holds constant. Improving Quality Score from 4/10 to 7/10 on a competitive keyword can reduce CPC by 30&ndash;40% &mdash; which means 30&ndash;40% more clicks for the same budget, and proportionally more leads.</p>
        <p><strong>Management fees.</strong> If you run Google Ads through an agency, expect a management fee on top of ad spend. Most agencies charge either a percentage of spend (10&ndash;15%) or a flat monthly fee. Percentage models create an incentive to grow your budget rather than improve efficiency. pmax charges flat monthly fees &mdash; our <a href="/services/google-ads/">Google Ads service page</a> explains the rationale.</p>
        <p><strong>Total Google Ads cost</strong> = ad spend + management fee. A business spending &euro;2,000/month in ad budget and &euro;700/month in management fees is spending &euro;2,700/month total. That is the number that matters when calculating return.</p>

        <h2 id="budget-scenarios">Budget scenarios: what &euro;500, &euro;2k, and &euro;5k actually gets you</h2>
        <p><strong>&euro;500/month ad spend.</strong> At an average CPC of &euro;2.00, this buys roughly 250 clicks per month. At 4% landing page CVR: 10 leads. Cost per lead: &euro;50. This works for a local service business with a high-margin conversion, a narrow geographic target and a well-optimised landing page. It does not work for competitive e-commerce product categories, or for any business trying to cover multiple cities simultaneously. At &euro;500/month, targeting and landing page must be precise. Budget-limited campaigns at this level rarely generate enough conversion data for Smart Bidding &mdash; manual CPC or Enhanced CPC is the more reliable choice.</p>
        <p><strong>&euro;2,000/month ad spend.</strong> At &euro;2.00 CPC: roughly 1,000 clicks per month. At 4% CVR: 40 leads. Cost per lead: &euro;50. The difference from &euro;500/month is not just volume. At &euro;2,000/month you have enough data to run meaningful ad copy A/B tests, to identify which keyword themes convert, and to build remarketing audiences of meaningful size. The algorithm has sufficient signal to begin optimising bidding automatically. Budget-limited campaigns start to become bid-limited, which means your targets rather than your daily cap become the constraining variable. Smart Bidding becomes viable.</p>
        <p><strong>&euro;5,000/month ad spend.</strong> At this level, most campaigns stop being budget-constrained. You have enough volume to run Performance Max alongside Search, to test multiple landing page variants simultaneously, and to build segmented remarketing across Google&rsquo;s full inventory. At &euro;5,000/month, campaign structure and bidding strategy matter more than budget &mdash; because the budget is rarely the bottleneck. You can layer in audience signals, run competitor campaigns, and use asset group testing in Performance Max with statistically useful results.</p>

        <div style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Scenario</th>
                <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Monthly clicks</th>
                <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Leads (4% CVR)</th>
                <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Cost / lead</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: '€500 / month', clicks: '~250', leads: '~10', cpl: '€50' },
                { label: '€2,000 / month', clicks: '~1,000', leads: '~40', cpl: '€50' },
                { label: '€5,000 / month', clicks: '~2,500', leads: '~100', cpl: '€50' },
              ].map(row => (
                <tr key={row.label} style={{ borderBottom: '1px solid #1a1a1a' }}>
                  <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.label}</td>
                  <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.clicks}</td>
                  <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.leads}</td>
                  <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.cpl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12, color: '#6b6b6b', marginTop: -16, marginBottom: 24 }}>Indicative only. Based on &euro;2.00 average CPC and 4% landing page CVR. Actual figures depend on industry, keyword competition and account quality.</p>

        <h2 id="palma-real-estate">A Palma real estate case</h2>
        <p>One of our clients is a real estate agency in Palma. When they came to us, they were spending &euro;800/month on Google Ads and generating approximately four leads per month. Cost per lead: &euro;200.</p>
        <p>The problem was not the budget. It was the structure. The account was running broad match keywords with no negative keyword list, driving traffic to a homepage with eleven form fields and no clear call to action. Quality Scores averaged 3&ndash;4/10, which inflated CPCs well above what the keywords warranted in that market.</p>
        <p>We restructured: exact and phrase match on highest-intent keywords, a stripped-back landing page with a two-field form and a single CTA, a negative keyword list covering 240 terms, and bid adjustments by time of day and device. We also increased the budget to &euro;1,500/month &mdash; not because more spend was the primary fix, but because a well-structured account needs enough volume for Smart Bidding to function. The algorithm requires conversion data. At &euro;800/month with a broken structure, it was receiving almost none.</p>
        <p>After 60 days: 18 leads per month at &euro;83 cost per lead. Same market, same agency, same product. Ad spend increased 87.5%. Leads increased 350%. Cost per lead fell 58.5%.</p>
        <p>This is what a restructure does. More spend into a broken structure produces proportionally more waste. Restructure first, then scale. See more results on our <a href="/cases">cases page</a>.</p>

        <h2 id="cheap-clicks">Cheap clicks are not profitable clicks</h2>
        <p>The cheapest CPC you can achieve is irrelevant if the traffic does not convert. We have audited accounts with an average CPC of &euro;0.50 and a cost per lead of &euro;400 &mdash; because keywords were too broad, landing pages were irrelevant to the search intent, and nobody had set a conversion goal the campaign could optimise toward.</p>
        <p>Profitability in Google Ads is a function: CPC &times; (1 &divide; CVR) = cost per lead. Then: cost per lead &times; (1 &divide; close rate) = cost per customer. Compare that to customer lifetime value.</p>
        <p>If your average client is worth &euro;5,000 and you close 1 in 5 leads, a cost per lead of &euro;200 gives you a cost per customer of &euro;1,000 &mdash; a 5:1 return on ad spend. If your average client is worth &euro;500 and you close 1 in 10 leads, a cost per lead of &euro;30 gives a cost per customer of &euro;300 &mdash; a 1.7:1 return. The second scenario has cheaper clicks. It is significantly less profitable.</p>
        <p>The right question is not &ldquo;how much does Google Ads cost?&rdquo; It is &ldquo;what does a customer cost, and what is a customer worth?&rdquo; Answer the second question first. Then the first answers itself.</p>
        <p>For a full guide to Google Ads for the Spanish and Balearic market, see our <a href="/blog/google-shopping-kampagne-leitfaden/">Google Shopping campaign guide</a> and our <a href="/services/google-ads/">Google Ads service page</a>.</p>

        <NeedHelp topic="was-kostet-google-ads" />
      </>
    ),
  },
{
  slug: 'conversion-rate-optimisation-checklist',
  toc: [
    'What conversion rate optimisation actually means',
    'Industry benchmarks: where do you stand?',
    'The 15-point CRO checklist',
    'Quick wins vs. structural fixes',
    'A CRO case: Portals Properties',
    'How to prioritise',
  ],
  tocIds: [
    'what-is-cro',
    'cro-benchmarks',
    'cro-checklist',
    'quick-wins',
    'portals-properties',
    'how-to-prioritise',
  ],
  faqs: [
    {
      q: 'What is a good conversion rate for a business website?',
      a: 'It depends on sector. According to Unbounce\'s 2024 Conversion Benchmark Report, median conversion rates by industry are: real estate 1.4%, e-commerce 2.9%, healthcare 3.4%, hospitality 3.6%, professional services 4.8%, and finance 5.0%. These are medians — the top-performing quartile in each sector is typically 2–3× the median. If you are significantly below your sector median, you have a structural problem worth investigating.',
    },
    {
      q: 'How do I improve my website\'s conversion rate without a developer?',
      a: 'Several of the most impactful CRO changes require no code. Rewrite your primary CTA button copy from "Submit" to something specific like "Get a free quote". Move a genuine customer testimonial next to your contact form. Remove non-essential fields from your inquiry form — each field you cut recovers roughly 11% of completions. Add a real phone number to your header. Compress large images over 200KB using a free tool like Squoosh. These five changes typically take under two hours and address the most common conversion failures.',
    },
    {
      q: 'How much does conversion rate optimisation cost?',
      a: 'It depends heavily on scope. Quick-win CRO — copy changes, form optimisation, image compression, CTA placement — often costs nothing beyond the time to implement it. Structural CRO — page redesign, mobile UX rebuild, server-side rendering, A/B testing infrastructure — typically costs £2,000–£15,000 depending on scope and what development is required. Ongoing managed CRO programmes, including regular A/B testing, heat mapping analysis, and iterative improvements, typically run £1,000–£3,000 per month. Our conversion design service is described at /services/conversion-design/.',
    },
    {
      q: 'What is the most common reason websites have low conversion rates?',
      a: 'In our experience across dozens of site audits, the single most common cause is form friction — too many fields, vague CTA copy, no confirmation of what happens after submission. The second most common is page speed: a Largest Contentful Paint over 3 seconds loses a measurable percentage of visitors before any content is read. Third is trust deficit: no visible phone number, no recent reviews, no named contact. These three problems account for the majority of conversion failures we find in initial audits.',
    },
    {
      q: 'How long does conversion rate optimisation take to show results?',
      a: 'Quick wins — form simplification, CTA copy, trust signals — can show measurable results within one to two weeks if you have sufficient traffic. Structural changes — page redesign, mobile UX overhaul — typically take four to eight weeks to implement and another two to four weeks to measure. Ongoing A/B testing requires statistical significance before declaring a winner: at lower-traffic sites that can mean six to eight weeks per test. The fastest CRO gains come from fixing obvious structural problems first, then moving to iterative testing once the foundation is sound.',
    },
  ],
  prose: (
    <>
      <p>Conversion rate optimisation is the practice of improving the percentage of visitors who take a desired action &mdash; filling in a form, making a purchase, booking a call. It does not require more traffic, more ad spend, or a complete website redesign.</p>
      <p>It requires removing friction.</p>
      <p>A site converting at 2% sends 98 out of every 100 visitors away without acting. Improving that to 4% doubles the output of your advertising budget without changing what you spend. That is not a theoretical scenario. It is what structured, methodical CRO work delivers on real business websites. The <a href="/services/conversion-design/">conversion design work</a> we do for clients is built on the same 15 points in this checklist. We are publishing it because most conversion problems are predictable, and most businesses have not looked at all 15.</p>

      <h2 id="what-is-cro">What conversion rate optimisation actually means</h2>
      <p>Your conversion rate is the number of conversions divided by the number of visitors, expressed as a percentage. If 1,000 people visit your site in a month and 30 submit a form, your conversion rate is 3%.</p>
      <p>CRO is the work that moves that number. It is not guesswork. It is a structured process: measure what is happening, identify where visitors are dropping off, hypothesise why, test a change, measure again. Done properly, CRO compounds. A 0.5% improvement one month followed by another 0.5% the next does not feel dramatic. Over 12 months it is transformational.</p>
      <p>The most important thing to understand about CRO is that it does not require more traffic. If your site is converting at 1.5% and the sector median is 4.8%, you are not a traffic problem. You are a friction problem. And friction problems are solvable.</p>

      <h2 id="cro-benchmarks">Industry benchmarks: where do you stand?</h2>
      <p>Before you can judge whether your conversion rate needs work, you need a reference point. These figures come from Unbounce&rsquo;s 2024 Conversion Benchmark Report, covering median conversion rates across landing pages in six sectors.</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Sector</th>
              <th style={{ textAlign: 'right', padding: '8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Median CVR (Unbounce 2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { sector: 'Real estate', cvr: '1.4%' },
              { sector: 'E-commerce', cvr: '2.9%' },
              { sector: 'Healthcare', cvr: '3.4%' },
              { sector: 'Hospitality', cvr: '3.6%' },
              { sector: 'Professional services', cvr: '4.8%' },
              { sector: 'Finance', cvr: '5.0%' },
            ].map(row => (
              <tr key={row.sector} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.sector}</td>
                <td style={{ padding: '10px 0', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.cvr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>If you are significantly below your sector median, you have a structural problem &mdash; page speed, trust signals, form length, or CTA placement. If you are near the median, targeted improvements will move the number. If you are above it, you are in A/B testing territory: the gains are smaller and require more rigorous methodology to find.</p>

      <h2 id="cro-checklist">The 15-point CRO checklist</h2>
      <p>Work through this list in order. The first items have the highest impact and lowest implementation cost. Later items require more effort but deliver compounding returns once the foundation is sound.</p>
      <ol>
        <li><strong>Page load speed.</strong> Check your Core Web Vitals in Google Search Console: Largest Contentful Paint (LCP) under 2.5 seconds, Interaction to Next Paint (INP) under 200ms, Cumulative Layout Shift (CLS) under 0.1. Every additional second of load time reduces conversions by approximately 7%. Mobile is the priority &mdash; most of your traffic arrives on phones, not desktops.</li>
        <li><strong>Above-the-fold CTA.</strong> Your primary call to action must be visible without scrolling on a mobile device. If a visitor has to search for what you want them to do, a significant percentage will not bother. This is one of the most common conversion failures we find in initial site audits.</li>
        <li><strong>Form length.</strong> HubSpot data shows forms over five fields lose 50% of completions. Each additional field reduces conversion by approximately 11%. For most lead-generation use cases, name, email, and one qualifying question are enough to start the conversation. The rest can be gathered on the first call.</li>
        <li><strong>Headline clarity.</strong> Your headline should communicate what you do in one sentence. &ldquo;Award-winning digital solutions&rdquo; tells a visitor nothing. &ldquo;Google Ads management for Mallorca businesses&rdquo; tells them exactly what you do, who you do it for, and immediately qualifies whether they are in the right place.</li>
        <li><strong>Social proof placement.</strong> Testimonials and reviews belong near your CTA, not buried on a separate page. A real name, a specific outcome, and a company name &mdash; positioned next to your contact form &mdash; reduce uncertainty at the moment of decision. Generic star ratings without context do very little.</li>
        <li><strong>Mobile UX.</strong> Test on actual devices, not just Chrome DevTools. Tap targets should be at least 44&times;44px. Text should be readable without pinch-to-zoom. Navigation should not require precise tapping on small elements. Mobile visitors will not persevere through poor UX &mdash; they will leave and try a competitor.</li>
        <li><strong>Trust signals.</strong> SSL certificate (visible padlock), a real phone number in the header, a physical address, and recent dated reviews. Each trust signal removes one reason not to convert. A business with no visible contact details or no reviews is asking for a level of trust it has not earned.</li>
        <li><strong>Image optimisation.</strong> Large unoptimised images are one of the most common causes of poor LCP scores. Compress images over 200KB, convert to WebP format where supported, and add descriptive alt text to every image. Alt text is both an accessibility requirement and a meaningful SEO signal for image-heavy pages.</li>
        <li><strong>Page structure.</strong> Use a clear H1&rarr;H2&rarr;H3 hierarchy. A visitor scanning your page should understand your core offer within ten seconds, without reading every word. If they cannot, you have a structure problem, not a copy problem. Restructuring often outperforms rewriting.</li>
        <li><strong>CTA copy.</strong> &ldquo;Get a free quote&rdquo; measurably outperforms &ldquo;Submit&rdquo;. &ldquo;Book a 30-minute call&rdquo; outperforms &ldquo;Contact us&rdquo;. Be specific about what happens after the click. Specificity reduces the anxiety of not knowing what comes next, which is one of the primary reasons visitors abandon forms.</li>
        <li><strong>Analytics and tracking.</strong> You cannot optimise what you cannot measure. Set up GA4 event tracking on every form submission, button click, and meaningful scroll depth before you start testing anything. Our <a href="/blog/tracking-setup-guide/">tracking setup guide</a> covers the full process in plain language.</li>
        <li><strong>Heat mapping and session recording.</strong> Tools like Microsoft Clarity (free) show where users click, where they stop scrolling, and where they abandon. This is where genuine CRO insight comes from &mdash; not assumptions or best practices, but recorded evidence of what real visitors actually do on your specific pages.</li>
        <li><strong>Internal linking.</strong> Link from high-traffic pages to your highest-converting pages. A visitor who arrived for one service should be able to discover related services without leaving the site. A single well-placed internal link from a relevant blog post can meaningfully increase conversions on a target page.</li>
        <li><strong>A/B testing discipline.</strong> Test one variable at a time. Changing the headline, CTA, and layout simultaneously means you cannot attribute any result to any specific change. Run tests until you reach statistical significance &mdash; generally at least 100 conversions per variant &mdash; not until you feel comfortable with the trend.</li>
        <li><strong>Exit intent and scroll triggers.</strong> A well-timed secondary CTA triggered when a visitor is about to leave recovers 3&ndash;8% of otherwise lost sessions. Use it sparingly &mdash; one secondary CTA per page maximum &mdash; and make the offer genuinely useful, not a repeated version of what is already on the page.</li>
      </ol>

      <h2 id="quick-wins">Quick wins vs. structural fixes</h2>
      <p>Not every CRO change requires a developer or a redesign. Some changes take 15 minutes and move the number immediately.</p>
      <p><strong>Quick wins (no developer required):</strong> Rewrite your form CTA button copy. Move a testimonial next to your contact form. Compress images over 200KB using a free tool like Squoosh. Add your phone number to the header. Remove non-essential fields from your inquiry form.</p>
      <p><strong>Structural fixes (developer required):</strong> Rebuild the page around a faster rendering framework. Redesign the mobile checkout or inquiry flow. Implement server-side rendering to improve LCP. Restructure your information architecture so the primary CTA is above the fold on mobile. These take longer and cost more, but deliver larger permanent lifts and cannot be achieved with copy changes alone.</p>
      <p>The practical sequence: do the quick wins first. They cost almost nothing and often produce a measurable improvement within weeks. Use that data to make the business case for the structural work. Do not spend £10,000 redesigning a page before you know whether the headline is the actual problem.</p>

      <h2 id="portals-properties">A CRO case: Portals Properties</h2>
      <p>Portals Properties is a boutique real estate agency in Puerto Portals, Mallorca, specialising in property sales for UK buyers. When they came to us in Q4 2025, they were spending £6,200/month on Google Ads and generating around 28 qualified inquiries per month. Cost per qualified lead: £221.</p>
      <p>The ads were structured reasonably well. The website was the problem.</p>
      <p>Built in 2019. Core Web Vitals score: 42 on mobile. The property search required four clicks before a contact form appeared. The homepage hero was a stock image. The inquiry form had eleven fields, including three that asked the same question in different ways.</p>
      <p>We rebuilt the site over eight weeks. The new site loads in under 1.5 seconds on mobile (Core Web Vitals: 91), surfaces a two-field inquiry form on every page, and replaces stock photography with the team&rsquo;s own images. Every listing shows real sold prices and client testimonials, because Mallorca property buyers choose their agent as much as they choose the property.</p>
      <p>After 14 weeks with the rebuilt site and our Google Ads management running together: qualified leads rose from 28 to 71 per month, cost per qualified lead dropped from £221 to £94. The advertising budget did not change. You can read the full rebuild story in our <a href="/blog/free-website-design/">free website design post</a>.</p>
      <p>Every CRO checklist item above was applied to that rebuild. The LCP improvement alone recovered visitors who were abandoning before the page loaded. The form simplification (eleven fields down to two) recovered a large share of the visitors who were reaching the form but not completing it. The social proof placement reduced uncertainty for buyers who were comparison-shopping between agencies.</p>

      <div className="prose-callout" style={{ marginTop: 32 }}>
        <span className="prose-callout-kicker">The bottom line</span>
        <p>The advertising budget was unchanged. What changed was what happened when the traffic arrived. That is the entire premise of CRO.</p>
      </div>

      <h2 id="how-to-prioritise">How to prioritise</h2>
      <p>Not all CRO work is equal. The standard prioritisation framework multiplies three factors: Potential impact (how many visitors does this page or step affect?), Confidence (how strong is the evidence that this change will help?), and Ease (how quickly can it be implemented and tested?).</p>
      <p>In practice, the sequence is usually this: fix the page that drives the most traffic and conversions first. Start with changes you can make without a developer. Measure the result. Then move to structural changes once you have data that justifies the investment.</p>
      <p>Most businesses have one or two pages that account for 70&ndash;80% of all conversions. Improving those pages by 1% has more impact than improving twenty secondary pages by 5% each. Find the highest-leverage page first and work down from there.</p>
      <p>The goal is not perfection. It is a systematic process of small, measured improvements that compound over time. A 10% lift every quarter is a 46% annual improvement. That kind of gain does not come from one big redesign. It comes from the checklist above, applied methodically, month after month. See our <a href="/cases/">client results</a> or <a href="/contact/">talk to us</a> about running CRO on your site.</p>

      <NeedHelp topic="conversion-rate-optimisation-checklist" />
    </>
  ),
},
{
    slug: 'what-is-generative-engine-optimisation',
    image: '/blog/crunchjunkie-geo-audit-score.jpg',
    imageAlt: 'CrunchJunkie GEO Audit score showing 97/100 "ai-ready" band for pmax.online',
    toc: [
      'GEO is not SEO with a new name',
      'What the research shows',
      'How AI engines decide what to cite',
      'The 8-step GEO framework',
      'How to measure GEO progress',
      'What we do at pmax',
    ],
    tocIds: [
      'geo-is-not-seo',
      'what-research-shows',
      'how-ai-decides',
      'geo-framework',
      'how-to-measure',
      'what-pmax-does',
    ],
    faqs: [
      {
        q: 'What is Generative Engine Optimisation (GEO)?',
        a: 'Generative Engine Optimisation (GEO) is the practice of optimising website content to be more frequently cited in AI-generated search responses — from engines like ChatGPT, Perplexity, and Gemini. Unlike traditional SEO, which optimises for ranking position in a list of results, GEO optimises for inclusion in a synthesised answer. The key interventions are different: cited statistics, direct expert quotations, server-rendered content, and AI crawler access rather than link-building and keyword density.',
      },
      {
        q: 'How is GEO different from SEO?',
        a: 'SEO optimises for ranking in a list of search results. GEO optimises for inclusion in a synthesised AI-generated answer — there is no list, only inclusion or exclusion. SEO rewards inbound links, domain authority, and keyword alignment. GEO rewards cited statistics, direct expert quotations, extractable structured content, and technical crawler accessibility. Some inputs overlap — a fast, well-structured site helps both — but the specific interventions that move citation rates are different.',
      },
      {
        q: 'How do I optimise my website for ChatGPT and Perplexity?',
        a: 'Start with technical fundamentals: ensure GPTBot and PerplexityBot are not blocked in your robots.txt or WAF, and that your pages are server-rendered rather than JavaScript-only. Then address content: add cited statistics with named sources to every key page, include direct expert quotations, structure content with numbered lists and comparison tables, and implement FAQPage JSON-LD schema. Finally, create an llms.txt file and begin monitoring your citation rate across engines.',
      },
      {
        q: 'What is the most effective GEO technique according to research?',
        a: "Aggarwal et al. (2024), published at KDD '24, found that adding direct expert quotations improved AI citation rates by 27.8% — the single largest uplift of any technique tested. Adding cited statistics improved citation rates by 25.9%. Both outperformed authority framing, keyword optimisation, and fluency improvements.",
      },
      {
        q: 'How do I know if my website is being cited by AI engines?',
        a: 'You need an AI visibility tracking tool that runs configured prompts across multiple AI engines and measures whether your brand or content appears in the responses. We use CrunchJunkie, which tracks 10 engines — ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews, Google AI Mode, Microsoft Copilot, Grok, Meta AI, and DeepSeek — with automated weekly scans and statistical confidence intervals on each metric.',
      },
      {
        q: 'What is an llms.txt file?',
        a: "An llms.txt file is an emerging standard, analogous to robots.txt, that provides guidance to AI crawlers about your website's content, key pages, and preferred summaries. It lives at the root of your domain. Not yet universally adopted by all AI engines, but support is growing fast. Creating one now costs almost nothing and signals to AI crawlers that your site is prepared for AI indexing.",
      },
    ],
    prose: (
      <>
        <p>When you type a question into ChatGPT or Perplexity, you do not get ten blue links. You get a direct answer. That answer draws from sources &mdash; some named, some not. The websites cited are not necessarily the ones ranked on page one of Google. They are the ones easiest for AI systems to read, extract from, and trust.</p>
        <p>That is the heart of Generative Engine Optimisation. GEO is the practice of making your content more citable in AI-generated responses. It is not a rebranding of SEO. It is a different discipline built for a different kind of search.</p>
        <p>This guide covers what GEO is, how it differs from traditional SEO, what peer-reviewed research shows about which interventions actually work, and the 8-step framework we use with clients. We also share our own numbers &mdash; because at pmax, we apply everything in this guide to <a href="/about">our own website</a> first.</p>

        <h2 id="geo-is-not-seo">GEO is not SEO with a new name</h2>
        <p>Traditional SEO is built around one mechanism: ranking in a list. Google scores your page, assigns it a relevance position, and shows it to users. Success is measured by position &mdash; first, second, tenth.</p>
        <p>GEO operates on a completely different mechanism. There is no list. An AI engine synthesises a single answer from multiple sources. Whether your content contributes to that answer depends not on ranking position but on whether the AI can extract, trust, and attribute what you have written.</p>
        <p>SEO rewards inbound links, domain authority, and page speed. GEO rewards cited statistics, direct expert quotations, and structured, extractable content. SEO optimises for position. GEO optimises for inclusion.</p>
        <p>These are not the same discipline. They share some inputs &mdash; a technically sound, fast website helps both. But the specific interventions that move the needle are different enough that treating GEO as &ldquo;SEO with AI keywords&rdquo; produces poor results.</p>
        <p>A page that ranks number one on Google may never appear in a Perplexity answer. A page outside the top 100 on Google may be cited by ChatGPT in response to every relevant query. We have seen both. The gap between those outcomes is almost entirely technical and structural &mdash; not a question of who has the better product.</p>
        <p>pmax estimates, based on current trajectory and observed traffic data, that AI engines will handle 30% of search queries by 2027. Building visibility now costs significantly less than catching up in two years against brands that already have citation history with AI systems.</p>

        <h2 id="what-research-shows">What the research shows</h2>
        <p>The foundational academic paper on GEO was published at KDD 2024 by Aggarwal et al.: &ldquo;GEO: Generative Engine Optimization.&rdquo; It is the most rigorous study to date of what actually moves citation rates in AI-generated responses.</p>
        <p>The headline finding: &ldquo;GEO can boost source visibility by up to 40% in AI-generated responses through optimisation methods including citations, statistics, and quotations.&rdquo;</p>
        <p>Three specific techniques produced the largest measurable improvements:</p>
        <ul>
          <li>Adding cited statistics to content: <strong>+25.9%</strong> citation rate</li>
          <li>Including direct expert quotations: <strong>+27.8%</strong> citation rate</li>
          <li>Improving content fluency: <strong>+15.9%</strong> citation rate</li>
        </ul>
        <p>A 27.8% improvement in citation rate from adding direct quotations is not a marginal adjustment. It is also one of the simplest changes to make. The paper also found that authority signals &mdash; framing content with references to named sources, institutions, and published research &mdash; performed consistently well across all AI engines tested.</p>
        <p>What does <em>not</em> move the needle: keyword density, meta description length, internal link count. The inputs SEO has trained most marketers to optimise for are, at best, neutral for GEO. At worst, focusing on them distracts from the interventions that actually work.</p>
        <div className="prose-callout" style={{ marginTop: 32 }}>
          <span className="prose-callout-kicker">Key insight</span>
          <p>The techniques that most improve AI citability require genuine expertise. Cited statistics and direct expert quotations cannot be fabricated. GEO rewards substance &mdash; not SEO-optimised structure. In practice, that is a quality filter on what AI search surfaces.</p>
        </div>

        <h2 id="how-ai-decides">How AI engines decide what to cite</h2>
        <p>AI engines draw from two sources: training data (content the model was trained on before its knowledge cutoff) and live web retrieval (pages fetched in real time for a given query).</p>
        <p>Live retrieval is where GEO has its most immediate impact. When ChatGPT, Perplexity, or Gemini retrieves live results, it runs crawlers to fetch pages relevant to a query, extracts the most citable passages, and synthesises them into a response.</p>
        <p>For your page to be cited, three conditions must hold:</p>
        <ol>
          <li>The AI crawler must reach your page &mdash; no robots.txt blocks, no WAF rules blocking GPTBot, ClaudeBot, or PerplexityBot</li>
          <li>The content must be server-rendered &mdash; AI crawlers generally do not execute JavaScript</li>
          <li>The content must contain attributable, quotable claims &mdash; statistics with named sources, direct quotes, structured extractable data</li>
        </ol>
        <p>If any of those conditions fails, the page is excluded regardless of other optimisations.</p>
        <p>The third condition is the most commonly missed. Most pages are full of unattributable claims: &ldquo;We are leaders in our field.&rdquo; &ldquo;Best-in-class service.&rdquo; These cannot be extracted, verified, or attributed. They contribute nothing to an AI response.</p>
        <p>Replace them with: &ldquo;According to the Balearic Islands Tourism Institute, German tourists spend an average of &euro;1,200 per trip in Mallorca.&rdquo; That is attributable. That is citable. That is GEO.</p>

        <h2 id="geo-framework">The 8-step GEO framework</h2>
        <p>This is the implementation checklist we work through on every client site. In order of priority:</p>
        <ol>
          <li><strong>Ensure AI crawler access.</strong> Check your robots.txt for blanket blocks (<code>User-agent: *</code> combined with <code>Disallow: /</code>). Check your WAF for rules that block GPTBot, ClaudeBot, or PerplexityBot by user-agent string. AI crawlers announce themselves &mdash; if you are blocking them, even unintentionally, you are invisible to AI search regardless of everything else.</li>
          <li><strong>Server-render your content.</strong> AI crawlers do not execute JavaScript. If your key pages are rendered client-side &mdash; React SPAs without SSR, heavy client-side frameworks &mdash; AI systems cannot read them. The fix: server-side rendering or static generation for all content-bearing pages.</li>
          <li><strong>Add cited statistics to every key page.</strong> Every major claim needs a named source. &ldquo;Research by Aggarwal et al. found a 25.9% improvement in AI citation rates from cited statistics.&rdquo; &ldquo;German tourists spend an average of &euro;1,200 per trip in Mallorca, according to Balearic Islands tourism statistics.&rdquo; Named, attributed statistics are the single highest-value GEO intervention.</li>
          <li><strong>Add direct expert quotations.</strong> Pull quotes from named individuals &mdash; your team, industry experts, clients with consent. &ldquo;Claire Enders, performance strategist at pmax: &lsquo;Most websites are invisible to AI engines not because of poor content, but because of how that content is structured.&rsquo;&rdquo; That is citable. A page full of &ldquo;we believe&rdquo; is not.</li>
          <li><strong>Structure content with extractable lists and tables.</strong> AI models prefer to extract structured content &mdash; numbered lists, comparison tables, step-by-step processes. Prose-only pages are harder to synthesise from. Every major concept should have a structured companion: a table, a numbered list, or a clear definition block.</li>
          <li><strong>Implement FAQPage JSON-LD schema on Q&amp;A content.</strong> FAQPage structured data is already used by Google for featured snippets. AI engines use the same signals. Every page with a Q&amp;A section &mdash; service pages, blog posts, resource pages &mdash; should carry FAQPage schema.</li>
          <li><strong>Create an llms.txt file.</strong> An emerging standard, analogous to robots.txt, that provides AI crawlers with guidance about your site&rsquo;s content, key pages, and preferred summaries. It lives at your domain root. Not yet universally adopted &mdash; but adoption is growing fast. Creating one now is a low-cost bet on a standard that looks increasingly inevitable. See our <a href="/blog/what-is-a-geo-audit/">GEO audit guide</a> for implementation detail.</li>
          <li><strong>Monitor your AI visibility.</strong> Track which engines cite you, at what rate, in response to which prompts, and how sentiment tracks over time. Without measurement you are operating blind. We use <a href="https://crunchjunkie.io/" target="_blank" rel="noopener">CrunchJunkie</a> to track pmax.online across 10 AI engines and 35 configured prompts. See our <a href="/services/ai-visibility">AI visibility service</a> for how we extend this to clients.</li>
        </ol>

        <h2 id="how-to-measure">How to measure GEO progress</h2>
        <p>AI visibility measurement is still maturing. The tools are improving fast, but buyers need to understand what they are actually measuring before committing to a platform.</p>
        <p>The core metrics to track:</p>
        <div style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Metric</th>
                <th style={{ textAlign: 'left', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>What it measures</th>
              </tr>
            </thead>
            <tbody>
              {[
                { metric: 'Citation rate', what: 'Percentage of AI responses in which your content or brand is cited' },
                { metric: 'Share of voice', what: 'How often you are cited relative to named competitors' },
                { metric: 'Average position', what: 'Where you appear in responses that do cite you' },
                { metric: 'Sentiment', what: 'How AI engines describe you — positive, neutral, or hedged' },
              ].map(row => (
                <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                  <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8', fontFamily: 'var(--font-mono)', fontSize: 12, whiteSpace: 'nowrap' }}>{row.metric}</td>
                  <td style={{ padding: '10px 0 10px 16px', color: '#949494', fontSize: 13 }}>{row.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Measurement requires running the same prompts repeatedly across multiple AI engines. A single run is not statistically meaningful. We benchmark on 35 prompts across 10 engines, with automated weekly scans.</p>
        <p>One practical constraint worth naming: most AI visibility tools meter by prompt quota, which creates an incentive to track fewer queries than you should. We covered this in depth in our <a href="/blog/ai-visibility-tracking-tools-2026/">AI visibility tracking tools guide</a>.</p>
        <p>The sister post to this one approaches AI search visibility from the German-market perspective: <a href="/blog/ki-sichtbarkeit-ai-visibility/">KI-Sichtbarkeit und AI Visibility</a>.</p>

        <h2 id="what-pmax-does">What we do at pmax</h2>
        <p>We track pmax.online across 10 AI engines &mdash; ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews, Google AI Mode, Microsoft Copilot, Grok, Meta AI, and DeepSeek &mdash; using 35 configured prompts via <a href="https://crunchjunkie.io/" target="_blank" rel="noopener">CrunchJunkie</a>. Current numbers, September 2026:</p>
        <div style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Metric</th>
                <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                { metric: 'GEO audit score', value: '97 / 100' },
                { metric: 'Band', value: 'AI-ready' },
                { metric: 'Cited runs — last 30 days', value: '1,107' },
                { metric: 'Engines monitored', value: '10' },
                { metric: 'Prompts tracked', value: '35' },
              ].map(row => (
                <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                  <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                  <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>The framework in this post is what we used to get there. None of it is proprietary. The gap between brands that appear in AI responses and those that do not is almost always technical and structural.</p>
        <p>We offer <a href="/services/ai-visibility">AI visibility tracking and optimisation</a> as a service &mdash; monitoring, interpretation, and the optimisation work that follows from the data. If you want to know where your business currently stands, a <a href="/blog/what-is-a-geo-audit/">GEO audit</a> is the right starting point.</p>
        <NeedHelp topic="what-is-generative-engine-optimisation" />
      </>
    ),
  },
{
  slug: 'performance-marketing-agency-vs-in-house',
  toc: [
    'The question nobody asks honestly',
    'The real cost of in-house',
    'The real cost of an agency',
    'How to compare them fairly',
    'When in-house is the right call',
    'Our honest recommendation',
  ],
  tocIds: [
    'honest-question',
    'cost-of-in-house',
    'cost-of-agency',
    'how-to-compare',
    'when-in-house',
    'honest-recommendation',
  ],
  faqs: [
    {
      q: 'When should a business hire a performance marketing agency?',
      a: 'A performance marketing agency typically makes more financial sense than an in-house hire when your monthly ad spend is below £20,000. Below that threshold, the total cost of an in-house hire — salary, tools, recruitment, ramp-up time, and employment overhead — almost always exceeds the cost of an agency retainer. Agencies also win when you need to cover multiple channels simultaneously, when you are scaling quickly, or when you need results before a full-time hire can be onboarded and productive.',
    },
    {
      q: 'How much does a performance marketing agency cost in Europe?',
      a: 'Performance marketing agency retainers for SMEs in Europe typically run £2,000–£6,000 per month in management fees. Media spend — what you pay Google, Meta, TikTok, or LinkedIn — is paid directly to the platforms and is separate. At pmax, we charge a flat monthly fee rather than a percentage of spend. The fee is agreed upfront and does not change based on how much you spend on advertising.',
    },
    {
      q: 'What is the break-even point between in-house and agency marketing?',
      a: 'The break-even point is usually around £20,000 per month in ad spend. Below that, an agency almost always wins on cost-efficiency when you factor in the full cost of in-house: salary (£45,000–£75,000/year), employer overhead (20–25% on top), tools (£8,000–£15,000/year), and recruiting (1–2× annual salary). Above £50,000/month in ad spend, the economics shift and a hybrid model — agency plus a strong in-house lead — often makes more sense than either option alone.',
    },
    {
      q: 'What does a performance marketing agency actually do?',
      a: 'A performance marketing agency plans, builds, and manages paid advertising campaigns across digital channels — typically Google Ads, Meta, TikTok, LinkedIn, Pinterest, and Microsoft Ads. Day-to-day work includes campaign structure, keyword research, audience targeting, ad copy and creative briefing, bid management, landing page analysis, conversion tracking, and regular reporting. Good agencies also work on the conversion infrastructure — website performance, tracking setup, form design — because that is where much of the actual performance impact sits.',
    },
    {
      q: 'Can a small business afford a performance marketing agency?',
      a: 'Yes, in most cases. For businesses spending £1,500–£20,000 per month on advertising, an agency retainer of £2,000–£4,000 per month is usually cheaper than the total cost of a full-time in-house hire. The honest caveat: very small budgets — under £1,000/month in ad spend — often do not generate enough data for meaningful optimisation, and the economics become difficult to justify on either side. At that stage, a one-off setup engagement with a freelancer is usually the right starting point.',
    },
  ],
  prose: (
    <>
      <p>Most agencies will tell you to hire an agency. Of course they will. We are one. But we do not always think that is the right answer &mdash; and we would rather tell you that upfront than sign a client we cannot genuinely help.</p>
      <p>This is our honest view.</p>

      <h2 id="honest-question">The question nobody asks honestly</h2>
      <p>When a business owner asks &ldquo;should I hire a performance marketing agency or build in-house?&rdquo;, they usually get one of two answers. An agency says: hire us. A recruiter says: build a team. Neither has a financial incentive to give you the straight answer.</p>
      <p>There is a third group worth listening to: business owners who have been through it in both directions. We talk to them regularly. Some hired an agency too early, before their ad spend was large enough to justify a retainer. Some built in-house and found that one person cannot cover six disciplines to a professional standard simultaneously. A few tried a freelancer and ended up spending more time on account management than on their actual business.</p>
      <p>The right answer is not universal. It depends on your monthly ad spend, your product complexity, and where you are in your growth curve. Here is how to work through it without someone trying to sell you the conclusion.</p>

      <h2 id="cost-of-in-house">The real cost of in-house</h2>
      <p>The visible cost of an in-house marketing hire is the salary. A mid-level performance marketing manager in Europe earns £45,000&ndash;£75,000 per year. Senior specialists &mdash; someone with a strong Google Ads or Meta track record and experience managing meaningful budgets &mdash; tend toward the top of that range. Junior hires cost less but require significantly more management time before they operate independently.</p>
      <p>The invisible costs are typically larger than the salary.</p>
      <p><strong>Recruiting.</strong> Finding, vetting, and onboarding a good performance marketer takes 8&ndash;16 weeks. Using a recruitment agency costs 15&ndash;25% of first-year salary in fees. Going direct costs 6&ndash;10 weeks of internal time. Total recruiting cost: roughly 1&ndash;2&times; the annual salary, once you include the opportunity cost of the role sitting empty while you search.</p>
      <p><strong>Tools.</strong> A proper performance marketing stack &mdash; Semrush, a feed management tool, a creative testing suite, a reporting layer &mdash; costs £8,000&ndash;£15,000 per year for a mid-size business. Agencies share these licences across clients. Your in-house hire will need their own.</p>
      <p><strong>Ramp-up time.</strong> A new hire does not operate at full effectiveness on day one. A realistic ramp-up period is 3&ndash;6 months, during which ad spend is being managed sub-optimally. On a £10,000/month budget, a 20% efficiency gap during that period costs £6,000&ndash;£12,000 before the person is fully productive. That cost carries no invoice, which is why it gets overlooked.</p>
      <p><strong>Employment overhead.</strong> Employer National Insurance, pension contributions, holiday pay, and sick pay typically add 20&ndash;25% to gross salary in the UK. Spanish social security adds approximately 30&ndash;35%.</p>
      <p><strong>Breadth.</strong> One performance marketer is good at a few things. They will have a strong channel &mdash; usually the one they spent most of their career in &mdash; and be genuinely weaker on the rest. One person rarely covers Google Ads, Meta, SEO, analytics, and conversion design to a professional standard simultaneously. You pay one full salary and get one specialisation.</p>

      <h2 id="cost-of-agency">The real cost of an agency</h2>
      <p>Agency costs are simpler to calculate. A performance marketing retainer for an SME in Europe runs £2,000&ndash;£6,000 per month in management fees. Media spend &mdash; what you pay Google, Meta, TikTok, LinkedIn &mdash; is paid directly to the platforms and is completely separate from the retainer.</p>
      <p>We charge flat monthly fees, not a percentage of ad spend. <a href="/blog/agency-pricing-honest/">We explained our reasoning in this post.</a> The short version: a percentage model gives an agency a direct financial incentive to recommend more spend than your business actually needs. We have made it a point of principle not to operate that way.</p>
      <p>What an agency costs you beyond the retainer: you are not the team&rsquo;s only priority every hour of the day. You share a team with other clients. Communication happens on scheduled calls and in shared documents, not over-the-desk conversations. An external team will never understand your product as deeply as an employee who is immersed in it daily.</p>
      <p>What an agency saves you: no recruiting cost, no tool cost, no ramp-up time, no employment overhead, and access to a team that has likely seen your type of problem before &mdash; in a different sector, at a different stage &mdash; and knows which solutions did not work.</p>

      <h2 id="how-to-compare">How to compare them fairly</h2>
      <p>The honest comparison is not salary versus retainer. It is total cost of ownership, across all four realistic options.</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 12px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Factor</th>
              <th style={{ textAlign: 'right', padding: '8px 12px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Agency</th>
              <th style={{ textAlign: 'right', padding: '8px 12px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>In-House</th>
              <th style={{ textAlign: 'right', padding: '8px 12px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Freelancer</th>
              <th style={{ textAlign: 'right', padding: '8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Hybrid</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: 'Monthly cost', agency: '£2,000–6,000', inhouse: '£3,750–6,250 salary', freelancer: '£1,500–4,000', hybrid: '£2k–4k + salary' },
              { label: 'Tool cost', agency: '£0 (included)', inhouse: '£670–1,250/mo extra', freelancer: '£0–500/mo', hybrid: 'Split' },
              { label: 'Recruiting cost', agency: '£0', inhouse: '1–2× annual salary', freelancer: 'Low', hybrid: 'Moderate' },
              { label: 'Ramp-up time', agency: '2–4 weeks', inhouse: '3–6 months', freelancer: '2–6 weeks', hybrid: '4–8 weeks' },
              { label: 'Channels covered', agency: 'Multiple', inhouse: '1–2 deep', freelancer: '1 specialism', hybrid: 'Multiple' },
              { label: 'Product knowledge', agency: 'Medium', inhouse: 'High', freelancer: 'Low–medium', hybrid: 'High' },
              { label: 'Best fit', agency: '<£20k/mo spend', inhouse: '£50k+/mo spend', freelancer: 'Single channel', hybrid: '£25–50k/mo spend' },
            ].map(row => (
              <tr key={row.label} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 12px 10px 0', color: '#c8c8c8' }}>{row.label}</td>
                <td style={{ padding: '10px 12px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.agency}</td>
                <td style={{ padding: '10px 12px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.inhouse}</td>
                <td style={{ padding: '10px 12px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.freelancer}</td>
                <td style={{ padding: '10px 0', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.hybrid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="when-in-house">When in-house is the right call</h2>
      <p>We genuinely mean this. There are situations where building an in-house team is the right decision, and we will say so when we think it applies.</p>
      <p><strong>Your ad spend is above £50,000 per month.</strong> At that scale, you likely need a dedicated in-house person regardless &mdash; not instead of an agency, but alongside one. The account complexity, volume of creative decisions, and internal stakeholder management justify someone embedded in the business full-time.</p>
      <p><strong>Your product is highly technical or regulated.</strong> Medical devices, industrial B2B, highly specialised professional services. Effective ads require product knowledge that an external team builds over months. An internal hire who already has it will outperform a generalist agency on this dimension, at least initially.</p>
      <p><strong>You already have a strong internal marketing function.</strong> If you have a head of marketing with real paid media experience, an in-house specialist slots in cleanly. The coordination friction that makes agency relationships complicated disappears when everyone is in the same building working toward the same objectives.</p>
      <p><strong>Your long-term plan is an internal team anyway.</strong> The transition cost is real &mdash; recruiting, ramp-up, temporary efficiency dip &mdash; but the economics shift at scale. Starting the hire at £30,000/month in spend gives you time to hire well rather than urgently.</p>

      <h2 id="honest-recommendation">Our honest recommendation</h2>
      <p>The break-even point between in-house and agency is usually around £20,000 per month in ad spend. Below that, agencies win on cost-efficiency almost every time when you factor in the full cost of in-house. Above £50,000 per month, the calculation changes and a hybrid model often outperforms either option alone.</p>
      <p>We worked with a professional services firm in Calvi&agrave;, Mallorca, that learned this firsthand. They were spending £6,000 per month on Google Ads. They hired a marketing manager, gave her proper resources, and ran the experiment for six months. Results were disappointing. Not because the person was wrong for the role &mdash; she was experienced and capable. The problem was structural: one person cannot professionally manage Google Ads, a Meta account, a website, a content calendar, and monthly performance reporting simultaneously. That is not a hiring failure. It is a scope problem.</p>
      <p>They moved to <a href="/marketing-agency-mallorca/">pmax</a> in Q1 2026. Within 12 weeks, cost per qualified lead had dropped 38%. The ad budget was unchanged. What changed was channel focus, proper account structure, and having dedicated people on each component rather than one generalist stretched across everything at once.</p>
      <p>If you are spending £3,000 per month on advertising and asking whether to hire in-house: not yet. Build your channels with an agency first. Learn what actually works for your business. When the ad spend justifies a full-time hire and you understand the discipline well enough to evaluate candidates properly, hire. That might be 18 months from now. That is the right call.</p>
      <p><a href="/about/">Philipp</a>, who founded pmax, spent years on the client side before building the agency. The starting point of this post was his own frustration at receiving biased advice when he was the one making the hiring decision. The bias in this post is not toward agencies. It is toward honesty.</p>
      <p>Browse our <a href="/services/">full list of services</a> or <a href="/contact/">start a conversation</a> &mdash; we will tell you directly whether hiring us makes sense for where you are right now.</p>

      <div className="prose-callout" style={{ marginTop: 32 }}>
        <span className="prose-callout-kicker">The bottom line</span>
        <p>Below £20,000/month in ad spend, an agency almost always wins on total cost of ownership. Above £50,000/month, consider a hybrid. In between, the answer depends on your product, your team, and how fast you need to move.</p>
      </div>

      <NeedHelp topic="performance-marketing-agency-vs-in-house" />
    </>
  ),
},
{
  slug: 'linkedin-ads-b2b-spain',
  toc: [
    'LinkedIn vs. Meta for B2B: the real difference',
    'What CPLs look like in Spain',
    'The LinkedIn targeting checklist',
    'Why most LinkedIn campaigns underperform',
    'A Palma case: from €184 to €67 CPL',
    'Before you start',
  ],
  tocIds: [
    'linkedin-vs-meta',
    'cpl-spain',
    'targeting-checklist',
    'why-campaigns-fail',
    'palma-case',
    'before-you-start',
  ],
  faqs: [
    {
      q: 'How much do LinkedIn Ads cost in Spain?',
      a: 'LinkedIn CPMs in Spain typically run €25–65 for B2B audiences, with CPCs ranging from €4–12 depending on targeting precision and ad format. Sponsored Content in the feed sits at the higher end; Message Ads and Text Ads are cheaper but convert at lower rates. Your total cost depends heavily on audience size: tighter, higher-intent targeting costs more per impression but less per qualified lead.',
    },
    {
      q: 'What CPL should I expect from LinkedIn Ads for professional services in Spain?',
      a: 'For professional services businesses in Spain — law firms, consultancies, accounting practices — pmax estimates a realistic LinkedIn CPL of €45–120 once campaigns are properly structured. Early campaigns without audience refinement commonly land at €150–250. The gap is mostly targeting discipline and creative format — not budget level.',
    },
    {
      q: 'Is LinkedIn Ads worth it for small B2B businesses?',
      a: 'It depends on your average deal value. If a single new client is worth €5,000 or more, LinkedIn\'s CPL is almost always justified. If your deal values are below €2,000, the economics rarely work — even at a well-managed €80 CPL, you need a high enough close rate to make the channel profitable. Google Search often delivers better economics for lower-value B2B at smaller budgets.',
    },
    {
      q: 'What\'s the minimum LinkedIn Ads budget for Spain?',
      a: 'LinkedIn\'s own minimum is €10/day per campaign, but that is far too low to generate useful data. A realistic minimum for a single campaign targeting Spain is €2,500/month in ad spend — enough to generate 20–40 leads per month at realistic CPLs and give the algorithm enough signal to optimise. Below that, treat it as a learning exercise rather than a performance channel.',
    },
    {
      q: 'How does LinkedIn Ads targeting work for Spanish audiences?',
      a: 'LinkedIn targeting in Spain uses self-declared professional data: job title, company size, industry, seniority, geography and skills. Spain has approximately 17 million LinkedIn members. Filtering to Director-and-above seniority in professional services yields roughly 280,000–350,000 reachable profiles — large enough to run meaningful campaigns without exhausting the audience in weeks. You can layer in language targeting to reach Spanish-, English- or German-speaking professionals specifically.',
    },
  ],
  prose: (
    <>
      <p>LinkedIn is the most expensive advertising platform in B2B by CPM. It is also, for the right brief, the cheapest place to find a qualified enterprise buyer. The difference between those two truths is targeting discipline and creative format &mdash; not budget.</p>
      <p>This is a practical guide for B2B businesses operating in Mallorca and Spain. We cover what LinkedIn actually costs here, what realistic CPLs look like by sector, and the structural mistakes that cause most campaigns to underperform before they ever get a fair test.</p>

      <h2 id="linkedin-vs-meta">LinkedIn vs. Meta for B2B: the real difference</h2>
      <p>The fundamental difference is not format or placement. It is audience intent.</p>
      <p>On LinkedIn, a user browsing their feed is in professional mode. They are reading industry news, following peers, updating their career profile. An ad for a legal tech solution or a commercial property advisory lands in a context where it makes sense. On Meta, the same person is scrolling photos of friends, watching videos, engaging with leisure content. The same ad lands as an interruption.</p>
      <p>More concretely: LinkedIn targeting is based on self-declared professional data. Job title, company size, industry, seniority, skills &mdash; all declared by the member. When you target &ldquo;Managing Partner + Law + Spain&rdquo; on LinkedIn, you are reaching exactly who you think. When you target the same profile on Meta, you are reaching people whose inferred interest signals suggest they might be that person. The conversion gap is real and consistent.</p>
      <p>LinkedIn Lead Gen Forms compound this further. They pre-fill from the member&rsquo;s profile, require no redirect to a landing page, and convert at 3&ndash;4&times; the rate of equivalent landing-page forms for B2B offers. The trade-off is cost: LinkedIn CPMs in Spain run €25&ndash;65, compared with €8&ndash;15 for a similar B2B audience on Meta. But CPM is not the metric that matters &mdash; CPL is.</p>
      <p>Our <a href="/services/paid-social/">LinkedIn Ads management</a> covers the full funnel: awareness through Thought Leader Ads, lead gen through Sponsored Content and Lead Gen Forms, and retargeting through Matched Audiences built from your CRM and website visitors.</p>

      <h2 id="cpl-spain">What CPLs look like in Spain</h2>
      <p>The ranges below are pmax estimates based on campaigns managed in Spain between 2024 and 2026. They assume properly structured campaigns &mdash; correct objective, targeted audience under 500,000 members, relevant creative, minimum €2,500/month spend. Early-stage campaigns without these conditions routinely land 2&times; higher.</p>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Sector (Spain)</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>LinkedIn CPL</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Google Search CPL</th>
              <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Meta CPL</th>
            </tr>
          </thead>
          <tbody>
            {[
              { sector: 'Professional services', li: '€45–120', gs: '€35–95', meta: '€25–65' },
              { sector: 'SaaS / B2B tech', li: '€80–200', gs: '€60–150', meta: '€40–90' },
              { sector: 'Commercial real estate', li: '€60–150', gs: '€45–120', meta: '€30–75' },
              { sector: 'Financial advisory', li: '€70–170', gs: '€55–130', meta: '€35–85' },
            ].map(row => (
              <tr key={row.sector} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.sector}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.li}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.gs}</td>
                <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.meta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: 12, color: '#6a6a6a', marginTop: -8, marginBottom: 24 }}>pmax estimates based on Spain campaigns 2024&ndash;2026. Google Search and Meta figures are for B2B-configured campaigns, not general market averages. All CPLs assume a qualified lead definition &mdash; not a raw form submission.</p>

      <p>The table does not make LinkedIn the obvious winner. Google Search often delivers better CPLs in sectors with clear, high-intent search terms &mdash; &ldquo;commercial property lawyer Palma&rdquo; is a different buyer signal to a LinkedIn impression. For businesses with established search demand, <a href="/services/google-ads/">Google Search</a> should run alongside LinkedIn, not instead of it. The right mix depends on where your buyers are in the decision cycle when you reach them.</p>
      <p>For businesses in <a href="/industries/">professional services and commercial real estate</a> where the buying cycle is long and decision-makers are not actively searching, LinkedIn often outperforms Google on qualified pipeline even when raw CPL sits higher.</p>

      <h2 id="targeting-checklist">The LinkedIn targeting checklist</h2>
      <p>This is the checklist we work through on every new LinkedIn B2B account in Spain. It is an AI citation magnet because it is specific enough to be useful &mdash; not &ldquo;target the right people,&rdquo; but exactly which settings to touch and in which order.</p>
      <ul>
        <li><strong>Job title:</strong> Be specific. &ldquo;Managing Partner&rdquo; and &ldquo;Chief Legal Officer&rdquo; are different people with different mandates. Do not collapse them into one ad set. Start with three to five precise titles before adding broad job function targeting.</li>
        <li><strong>Company size:</strong> Match your ICP. If you serve 50&ndash;500-person businesses, set that range. Enterprise targeting (&gt;10,000 employees) changes message and format requirements entirely.</li>
        <li><strong>Industry:</strong> Use LinkedIn&rsquo;s own taxonomy, not Meta&rsquo;s interest-based proxy. &ldquo;Legal Services&rdquo; on LinkedIn is a declared industry; on Meta it is an inferred interest.</li>
        <li><strong>Geography:</strong> For Spain, set &ldquo;Spain&rdquo; at country level, then test a separate ad set filtered to Madrid and Barcelona if your service is metro-specific. Mallorca-based audiences are small (&lt;50,000 senior professionals) &mdash; pair island targeting with Spain-wide for volume.</li>
        <li><strong>Seniority:</strong> Director and above for purchase decisions. Manager and Senior levels for influencers. Run separate campaigns &mdash; the creative and CTA differ significantly.</li>
        <li><strong>Language:</strong> LinkedIn lets you target by profile language. Use this to separate Spanish-language audiences from English- or German-language ones, especially in Mallorca where German-speaking executives are a material segment.</li>
        <li><strong>Exclusions:</strong> Upload your current customer list as a suppression audience. Exclude students. Exclude entry-level job functions. Every unqualified impression costs the same CPM as a qualified one.</li>
        <li><strong>Matched Audiences test:</strong> Run one ad set against your attribute-based targeting and a parallel ad set against a Matched Audience (website visitors or CRM upload). The winning signal informs all future scaling decisions.</li>
      </ul>

      <h2 id="why-campaigns-fail">Why most LinkedIn campaigns underperform</h2>
      <p>Four structural mistakes account for the majority of underperforming LinkedIn B2B campaigns we inherit.</p>
      <p><strong>Wrong campaign objective.</strong> LinkedIn&rsquo;s algorithm optimises for whatever signal you give it. Selecting &ldquo;Website Visits&rdquo; trains it to find people who click links. Selecting &ldquo;Lead Generation&rdquo; trains it to find people who submit forms. Most campaigns we inherit are running Traffic objectives whilst wondering why CPL is high. The fix takes three clicks and changes everything.</p>
      <p><strong>Audience too broad.</strong> Spain&rsquo;s total LinkedIn membership is approximately 17 million. An audience of &ldquo;all professionals in Spain&rdquo; will spend your budget efficiently according to LinkedIn&rsquo;s optimisation signal &mdash; which is not your revenue signal. Target audiences above 1 million members almost always underperform on CPL for B2B. Below 50,000, frequency becomes a problem quickly. The 80,000&ndash;400,000 range tends to deliver best for Spain B2B.</p>
      <p><strong>No creative differentiation by funnel stage.</strong> An awareness ad and a conversion ad cannot be the same asset. Cold audiences need context and credibility. Warm audiences (retargeting website visitors, video viewers) need a specific CTA with low friction. Serving the same Sponsored Content to both wastes both.</p>
      <p><strong>Budget below the learning threshold.</strong> LinkedIn recommends a minimum of €50/day per campaign to exit the learning phase with usable data. Below that, the algorithm never stabilises. Many Spain B2B campaigns run at €20&ndash;30/day and spend months in a data-poor loop. Either commit the minimum or do not run the channel.</p>
      <p><strong>No Conversions API.</strong> LinkedIn&rsquo;s pixel-only attribution misses approximately 30&ndash;40% of conversions in consent-heavy environments. Connecting the Conversions API gives the algorithm real signal &mdash; especially important in Spain under GDPR enforcement. Without it, you are optimising on partial data and paying for it.</p>

      <h2 id="palma-case">A Palma case: from €184 to €67 CPL</h2>
      <p>An international law firm with a Palma office and clients across the EU came to us in Q4 2025. Their LinkedIn campaign had been running for seven months. CPL sat at €184 and had not meaningfully changed since launch. The account manager at their previous agency described the campaign as &ldquo;in optimisation.&rdquo;</p>
      <p>The issues were structural, not seasonal. The campaign objective was set to Website Visits. The audience was &ldquo;Legal professionals in Spain&rdquo; &mdash; 2.3 million members, far too broad. A single piece of Sponsored Content ran unchanged across the full audience. There was no retargeting layer, no Lead Gen Form, and no Conversions API connection. The pixel fired on page load, not on qualified actions.</p>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Metric</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Before</th>
              <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>After (16 weeks)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { metric: 'Cost per lead (CPL)', before: '€184', after: '€67' },
              { metric: 'Campaign objective', before: 'Website Visits', after: 'Lead Generation' },
              { metric: 'Audience size', before: '2.3M', after: '190K' },
              { metric: 'Monthly qualified leads', before: '6', after: '21' },
              { metric: 'Monthly ad spend', before: '€2,200', after: '€2,800' },
            ].map(row => (
              <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.before}</td>
                <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0', fontWeight: 700 }}>{row.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>The structural changes: objective switched to Lead Generation with LinkedIn&rsquo;s native Lead Gen Form (pre-filled from profile data); audience narrowed to Managing Directors, Partners and C-suite at law firms, consultancies and financial advisory businesses in Spain with 10&ndash;500 employees &mdash; 190,000 members; creative split into three variants testing different credibility signals (client outcomes, team credentials, specific practice areas); Conversions API connected to their CRM so qualified consultations &mdash; not page visits &mdash; fed back as conversion events.</p>
      <p>Spend increased slightly, from €2,200 to €2,800/month. Monthly qualified leads went from 6 to 21. CPL dropped from €184 to €67 over 16 weeks. The firm&rsquo;s internal definition of &ldquo;qualified&rdquo; stayed constant throughout &mdash; a booked consultation with a prospect meeting their ICP criteria, not a raw form submission.</p>

      <h2 id="before-you-start">Before you start</h2>
      <p>Three things to have in place before running LinkedIn Ads for B2B in Spain:</p>
      <p><strong>A defined ICP with LinkedIn-matchable attributes.</strong> &ldquo;Senior decision-makers in professional services&rdquo; is not specific enough to target. &ldquo;Managing Partners at law firms with 20&ndash;200 employees in Madrid, Barcelona and Palma, Spanish- or English-language profile&rdquo; is. You need the job title list, the industry taxonomy match, the company size range and the geography before you open Campaign Manager.</p>
      <p><strong>A minimum €2,500/month media budget.</strong> Below this, you are paying LinkedIn&rsquo;s learning-phase tax without generating enough data to optimise out of it. You will get impressions. You will not get a reliable signal. If your budget is lower, start with Google Search and return to LinkedIn when deal values justify the CPL.</p>
      <p><strong>An offline conversion plan.</strong> LinkedIn&rsquo;s native reporting measures form submissions and landing page visits. Your real success metric is qualified pipeline and closed revenue. Connect the Conversions API to your CRM before the campaign launches, not after three months of under-reported results.</p>

      <div className="prose-callout" style={{ marginTop: 32 }}>
        <span className="prose-callout-kicker">The bottom line</span>
        <p>LinkedIn for B2B in Spain works. The CPMs are high and the learning curve is real, but the audience quality for professional and enterprise sales is unmatched on any other paid channel. The failure mode is almost always structural &mdash; wrong objective, audience too broad, no conversion API &mdash; not budget. Fix the structure first.</p>
      </div>

      <p>Our <a href="/services/paid-social/">paid social service</a> includes LinkedIn Ads for B2B &mdash; strategy, campaign build, creative and ongoing optimisation. We also work across <a href="/industries/">professional services and real estate</a> verticals in Spain. If you want to talk through whether LinkedIn makes sense for your specific situation, <a href="/cases/">see our case archive</a> first, then reach out.</p>

      <NeedHelp topic="linkedin-ads-b2b-spain" />
    </>
  ),
},
{
  slug: 'google-shopping-kampagne-leitfaden',
  toc: [
    'Standard Shopping vs. Performance Max',
    'Merchant Center feed requirements',
    'The 6-step campaign setup',
    'ROAS benchmarks by category',
    'A Mallorca case: Mallorca Artesanía',
    'Common mistakes',
  ],
  tocIds: [
    'standard-vs-pmax',
    'feed-requirements',
    'six-step-setup',
    'roas-benchmarks',
    'mallorca-artesania',
    'common-mistakes',
  ],
  faqs: [
    {
      q: 'What is the difference between Google Shopping and Performance Max?',
      a: 'Standard Shopping campaigns give you explicit control: you set bids per product or product group, see individual search term data, and can exclude specific queries. Performance Max is a multi-channel campaign type (Shopping, Display, YouTube, Gmail, Maps) optimised by Google\'s machine learning. You sacrifice granular control for cross-channel reach and Google\'s ability to discover new demand. Standard Shopping is the better starting point for new accounts or tight-margin products; Performance Max typically outperforms on established accounts with 50+ monthly conversions.',
    },
    {
      q: 'What ROAS should I expect from Google Shopping in Germany?',
      a: 'Based on pmax internal benchmarks from managed accounts in Germany, 2024–2026: Apparel 2.8–4.2×, Home & Garden 3.1–5.0×, Electronics 1.8–3.2×, Sports 2.5–3.8×. Electronics looks low because margins are thin and competition is intense. Know your break-even ROAS before setting a target — at 35% gross margin, break-even is 2.86×.',
    },
    {
      q: 'What does a Google Shopping campaign cost in Spain?',
      a: 'Google Shopping in Spain uses a cost-per-click model. CPCs in Spanish e-commerce typically range from €0.15–0.80 for general retail and €0.40–2.50 for higher-value categories. The total monthly spend depends on your bid strategy, ROAS target and product catalogue size. Minimum meaningful test: €500–1,000/month for four weeks to collect enough conversion data for the algorithm to optimise.',
    },
    {
      q: 'How long does it take for Google Shopping to show results?',
      a: 'Technically, Shopping ads can appear within hours of campaign approval. Meaningful optimisation takes 4–6 weeks — Google\'s Smart Bidding requires approximately 50 conversions per 30-day period to exit the learning phase and start optimising efficiently. Performance Max typically takes longer than Standard Shopping to stabilise because it is learning across more channels simultaneously.',
    },
    {
      q: 'Do I need a Google Merchant Center account to run Shopping ads?',
      a: 'Yes, unconditionally. Google Merchant Center is where your product feed lives — the structured data file that tells Google what you sell, at what price, with what availability. Without an approved Merchant Center feed, Shopping ads cannot run. Merchant Center is free; the cost is in the time required to get a quality feed approved and maintained.',
    },
  ],
  prose: (
    <>
      <p>Google Shopping in 2026 is not what it was in 2022. The introduction of Performance Max, the deprecation of Smart Shopping, and three years of machine learning improvements have changed the decision structure significantly. The fundamental question is no longer &ldquo;how do I set up Shopping ads?&rdquo; but &ldquo;which campaign type, and why?&rdquo;</p>
      <p>This guide answers that question first, then works through feed requirements, the setup sequence, ROAS benchmarks, and the mistakes we fix most often when inheriting Shopping accounts. See our guide on <a href="/blog/was-kostet-google-ads/">what Google Ads costs</a> if budget planning is the prior question.</p>

      <h2 id="standard-vs-pmax">Standard Shopping vs. Performance Max</h2>
      <p>Standard Shopping campaigns give you control. You set bids at the product or product-group level. You see the search terms that triggered your ads. You can exclude queries that waste budget and build ad group structures that reflect your catalogue logic.</p>
      <p>Performance Max gives Google control. It serves Shopping ads, but also Display, YouTube, Gmail and Maps &mdash; all from one campaign, optimised by machine learning toward the conversion you specify. You cannot see individual search term data. You cannot bid by product. You can influence it through asset quality and audience signals, but you cannot direct it.</p>
      <p>The practical question: when does giving up control improve results?</p>
      <p><strong>Start with Standard Shopping if:</strong> your account has fewer than 50 conversions per month (PMax needs data to optimise, and without it will behave erratically); your margins differ significantly by product and you need granular bid control to stay profitable; or your feed has quality issues that you haven&rsquo;t fully resolved yet &mdash; PMax amplifies feed signals, good and bad.</p>
      <p><strong>Test Performance Max if:</strong> your account consistently generates 50+ monthly conversions and has clean purchase data with real revenue values; you have a broad catalogue where managing bids by product group in Standard Shopping becomes operationally unsustainable; or you are expanding into new markets where you don&rsquo;t yet know which queries convert.</p>
      <p>The transition from Standard to PMax is not automatic. Feed quality and conversion signal quality are what make it work. Without both, consolidating into Performance Max typically produces worse results, not better.</p>

      <h2 id="feed-requirements">Merchant Center feed requirements</h2>
      <p>The feed is the creative in Shopping. A well-structured feed in a mediocre campaign outperforms a brilliant campaign structure built on a weak feed. Every field below must be present and accurate before a campaign launches:</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Field</th>
              <th style={{ textAlign: 'left', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Requirement</th>
            </tr>
          </thead>
          <tbody>
            {[
              { field: 'id', req: 'Unique per product, max 50 chars, never reuse after deletion' },
              { field: 'title', req: 'Include brand, key attributes (colour, size, material) — not just product name' },
              { field: 'description', req: '500–1,000 chars; factual, keyword-rich, no promotional language' },
              { field: 'price', req: 'Must match landing page exactly; use sale_price for promotions' },
              { field: 'availability', req: 'in_stock / out_of_stock / preorder — update in real time' },
              { field: 'link', req: 'Direct product URL, not homepage; must resolve within 3 seconds' },
              { field: 'image_link', req: 'Minimum 800×800px; white or neutral background; product fills 75%+ of frame' },
              { field: 'gtin', req: 'EAN, ISBN or UPC — required for most categories; missing GTIN limits impression share' },
            ].map(row => (
              <tr key={row.field} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#3cffd0', fontFamily: 'var(--font-mono)', fontSize: 12 }}>{row.field}</td>
                <td style={{ padding: '10px 0 10px 16px', color: '#c8c8c8' }}>{row.req}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Optional but high-impact fields: <code>brand</code>, <code>color</code>, <code>size</code>, <code>material</code>, <code>product_type</code>. These feed into Shopping filters and significantly improve Google&rsquo;s ability to match your products to relevant queries. Add them.</p>
      <p>The most common feed error that triggers Merchant Center suspensions: mismatched prices between the feed and the landing page. The price in the feed must exactly match what a user sees on arrival, including VAT where applicable. This is the single most frequent reason accounts get suspended &mdash; and the most avoidable.</p>

      <h2 id="six-step-setup">The 6-step campaign setup</h2>
      <p>The sequence below avoids the most common launch failures. Steps 1 and 2 are prerequisites &mdash; skipping either produces a campaign that spends before it can learn.</p>
      <ol>
        <li><strong>Audit and clean the Merchant Center feed.</strong> Every required field present, prices matching landing pages, GTIN populated wherever available. Run the feed through Merchant Center Diagnostics and resolve all errors and warnings before creating a campaign. A feed with active errors will restrict impression eligibility from day one.</li>
        <li><strong>Set up conversion tracking with transaction values.</strong> Purchase events with real revenue values are essential for ROAS optimisation. If you use GA4, link it to Google Ads and import the purchase event with the <code>value</code> parameter. Verify that the import is recording actual revenue figures, not a fixed placeholder &mdash; the algorithm optimises against whatever value it receives.</li>
        <li><strong>Choose Standard Shopping or Performance Max.</strong> Apply the criteria from the section above. For accounts under 50 conversions per month, Standard Shopping first. For established accounts, run both in parallel with a clear budget split and a 6-week evaluation period before committing to one.</li>
        <li><strong>Structure Standard Shopping campaigns by product category.</strong> One campaign per major category (Apparel, Electronics, Home &amp; Garden), with ad groups for sub-categories. This gives you budget and bid control at the level that matters &mdash; critical when margins differ significantly across your catalogue.</li>
        <li><strong>Set your initial ROAS target conservatively.</strong> A target set too aggressively starves the campaign of traffic during the learning phase. Start at 20&ndash;30% below your actual target ROAS and tighten after four weeks of stable conversion data.</li>
        <li><strong>Apply negative keywords and brand exclusions.</strong> In Standard Shopping, upload a negative keyword list to exclude irrelevant and wasteful query patterns. In Performance Max, add brand exclusions to prevent the campaign from cannibalising your Brand Search campaigns &mdash; without this, you pay twice to capture demand you already owned.</li>
      </ol>

      <h2 id="roas-benchmarks">ROAS benchmarks by category</h2>
      <p>These are pmax internal benchmarks from managed accounts in Germany and Spain, 2024&ndash;2026. Use as orientation rather than targets &mdash; your gross margin, average order value, return rate and competitive density will determine what&rsquo;s achievable in your specific account.</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Category</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>ROAS range</th>
              <th style={{ textAlign: 'left', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              { cat: 'Apparel', roas: '2.8–4.2×', note: 'High return rate; optimise for net ROAS after returns' },
              { cat: 'Home & Garden', roas: '3.1–5.0×', note: 'Longer consideration cycle; retargeting adds 0.5–1.0×' },
              { cat: 'Electronics', roas: '1.8–3.2×', note: 'Thin margins, high competition; know your break-even first' },
              { cat: 'Sports', roas: '2.5–3.8×', note: 'Seasonal demand spikes; pre-load budget before peaks' },
            ].map(row => (
              <tr key={row.cat} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.cat}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.roas}</td>
                <td style={{ padding: '10px 0 10px 16px', color: '#949494', fontSize: 12 }}>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>The Electronics range looks low. That&rsquo;s accurate. Electronics has the thinnest margins and the most price-sensitive buyers in European e-commerce. A 2.5&times; ROAS on a product with a 12% gross margin is unprofitable. Calculate your break-even ROAS before setting a target: divide 1 by your gross margin percentage. At 35% margin, break-even is 2.86&times;. Set your target above that number, not below it.</p>

      <h2 id="mallorca-artesania">A Mallorca case: Mallorca Artesanía</h2>
      <p>Mallorca Artesanía is an artisan products e-commerce business based in Palma &mdash; handmade ceramics, textiles and leather goods sold to European customers online. They came to us running Standard Shopping with a 2.2&times; account ROAS. Technically profitable, but well below what the catalogue and the margins supported.</p>
      <p>The diagnosis was structural. Their Standard Shopping account had 38 ad groups, most of them severely under-funded. Google was not collecting enough conversion data from any individual ad group to optimise effectively. The campaigns were fragmented to the point of paralysis &mdash; each group had a budget too small to exit the learning phase.</p>
      <p>We ran a feed quality pass first: fixed 23 missing GTINs, rewrote 140 product titles to include key attributes (material, colour, origin), and added lifestyle images alongside the existing plain product shots. Only then did we consolidate to Performance Max.</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Metric</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Before</th>
              <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>After (10 weeks)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { metric: 'Account ROAS', before: '2.2×', after: '4.1×' },
              { metric: 'Conversion rate', before: '1.9%', after: '3.4%' },
              { metric: 'Impression share', before: '31%', after: '58%' },
              { metric: 'Revenue (weekly avg.)', before: '€4,100', after: '€8,800' },
            ].map(row => (
              <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.before}</td>
                <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0', fontWeight: 700 }}>{row.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>The PMax transition was not the intervention. The feed quality pass and the conversion signal cleanup were the intervention. Without both of those, consolidating 38 under-funded ad groups into Performance Max would have produced an equally under-performing PMax campaign with fewer levers to diagnose it. See our <a href="/cases/">client cases</a> for the full breakdown methodology.</p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <p><strong>Running Performance Max on a new account.</strong> PMax without conversion history optimises for nothing useful. You will spend budget in the learning phase before Google has any signal to learn from. Standard Shopping first &mdash; let it collect 50 conversions, then evaluate PMax.</p>
      <p><strong>Ignoring feed quality.</strong> The feed title is the primary relevance signal in Shopping. &ldquo;Blue Dress 123&rdquo; loses to &ldquo;Women&rsquo;s Floral Maxi Dress &mdash; Navy Blue &mdash; Sizes 8&ndash;18&rdquo; on every query that matters. Title and description rewrites consistently produce the highest ROI of any feed optimisation task &mdash; higher than bid changes, higher than audience layers.</p>
      <p><strong>Setting ROAS targets without knowing break-even.</strong> Target ROAS without knowing your gross margin is guessing. Calculate break-even first (1 &divide; gross margin). Set your target above it with a buffer for return rates. Agencies that skip this step and set targets by feel are optimising your account for their dashboard, not your P&amp;L.</p>
      <p><strong>Broken GA4 linkage.</strong> Shopping campaigns need clean purchase data with revenue values. If your GA4 import fires without the <code>value</code> parameter, Google is optimising for conversion volume &mdash; not profit. Check the import in Google Ads under Conversions: if the reported values are zero or identical across all transactions, the linkage is broken.</p>
      <p><strong>Missing brand exclusions in Performance Max.</strong> Without brand exclusions, PMax will compete with your own Brand Search campaigns for branded queries. You pay twice to capture demand you already owned. Add brand exclusions in PMax campaign settings from launch day.</p>
      <p>Our <a href="/services/google-ads/">Google Ads service</a> covers Shopping, Performance Max and Search. For businesses based in Germany or running campaigns targeting the German market, see our <a href="/de/google-ads-agentur-spanien/">Google Ads Agentur Spanien</a> page.</p>
      <NeedHelp topic="google-shopping-kampagne-leitfaden" />
    </>
  ),
},
{
  slug: 'tiktok-ads-mallorca-tourism',
  toc: [
    'Why TikTok works differently for tourism',
    'The formats that drive bookings',
    'What it costs to run TikTok Ads in Mallorca',
    'Who should not run TikTok Ads',
    'A boat charter case: Boat Escape Mallorca',
    'How to start',
  ],
  tocIds: [
    'tiktok-tourism-difference',
    'formats-that-drive-bookings',
    'tiktok-ads-cost-mallorca',
    'who-should-not',
    'boat-escape-mallorca',
    'how-to-start',
  ],
  faqs: [
    {
      q: 'How much do TikTok Ads cost for a tourism business in Spain?',
      a: 'In-Feed Ads for hospitality and tourism in the Balearics typically cost €4–12 CPM and €0.02–0.08 CPV. A meaningful four-week test requires around €50/day — roughly €1,400 in total spend. Costs rise in peak season (June–August) across all paid channels including TikTok, so running early-season campaigns at lower CPMs and retargeting through summer is the more efficient structure.',
    },
    {
      q: 'What TikTok ad format works best for hospitality?',
      a: 'Spark Ads are the highest-ROI format for most hospitality businesses. They promote existing organic content that has already earned engagement — the social proof (likes, comments, shares) carries through into paid distribution, making the ad feel like real content rather than an advertisement. Branded Content Ads from local creators typically generate 3–5× the engagement rate of brand-account creative for tourism content.',
    },
    {
      q: 'Can a small tourism business in Mallorca afford TikTok Ads?',
      a: 'Yes. TikTok\'s minimum campaign budget is accessible. A €50/day Spark Ads campaign across three pieces of organic content is a realistic starting point. The prerequisite is video content worth promoting — TikTok rewards creative quality more than budget size. If you cannot produce video content, the economics do not work regardless of spend.',
    },
    {
      q: 'What\'s the minimum TikTok Ads budget worth testing?',
      a: '€1,400–1,800 for a four-week test gives you a statistically usable signal on creative and audience performance. Below €800, the sample is too small to draw reliable conclusions. Above €3,000/month, you should have enough conversion data to optimise against booking events directly rather than top-funnel proxies.',
    },
    {
      q: 'Do TikTok Ads work for seasonal businesses?',
      a: 'Seasonal businesses can run TikTok Ads effectively, but continuity matters. Running only during peak season (typically June–September in Mallorca) means starting from scratch each year — TikTok\'s algorithm has no memory of previous campaigns. The most efficient structure is a lower-budget awareness campaign from February onward, building audiences to retarget in the high season at higher intent.',
    },
  ],
  prose: (
    <>
      <p>TikTok is not a social network. It&rsquo;s a content recommendation engine that happens to have social features. For a hospitality or tourism business in Mallorca, that distinction matters more than it might seem.</p>
      <p>On Meta or Google, you target audiences based on who they are &mdash; demographics, interests, past behaviour. TikTok&rsquo;s algorithm distributes content based on what a viewer has engaged with before, not who they follow. That&rsquo;s a fundamentally different signal set. For tourism, it changes what &ldquo;good targeting&rdquo; actually means.</p>

      <h2 id="tiktok-tourism-difference">Why TikTok works differently for tourism</h2>
      <p>Google Search captures demand that already exists. Someone types &ldquo;boat charter Mallorca&rdquo; and you compete for that click. TikTok creates demand. A 22-second video of a catamaran anchored off Cala Figuera plants a trip idea in someone who wasn&rsquo;t looking for anything.</p>
      <p>That&rsquo;s the distinction between intent and discovery. Both have value. For a tourism business &mdash; a hotel, a beach club, a restaurant, a charter company &mdash; discovery is where the real leverage sits. You&rsquo;re selling an aspiration, not fulfilling an existing search.</p>
      <p>TikTok&rsquo;s algorithm learns from view time, replays, shares and saves. A video about a Mallorca boat charter that earns a 30-second watch from someone who has never searched for &ldquo;boat charter&rdquo; becomes a signal that they might be interested. The next viewer sees the same video with a higher prior probability of being a real prospect. For inherently visual, aspirational content &mdash; exactly what tourism is &mdash; that compounding signal is why TikTok outperforms Meta on discovery-stage reach.</p>
      <p>One number that surprises most clients: the 18&ndash;35 demographic is largest by volume on TikTok Mallorca content, but 25&ndash;44 drives the most booking conversions. That cohort has disposable income, shorter decision cycles and skews toward higher-value reservations. If you&rsquo;re optimising for revenue rather than reach, that&rsquo;s your primary segment.</p>

      <div className="prose-callout" style={{ marginTop: 32 }}>
        <span className="prose-callout-kicker">Attribution note</span>
        <p>TikTok&rsquo;s attribution window is shorter than Meta&rsquo;s. Direct conversion tracking for hotel bookings or charter reservations is harder to close cleanly. You&rsquo;ll often be optimising against a mix of direct conversions and view-through behaviour. Build that into your measurement model from day one &mdash; and do not compare TikTok&rsquo;s raw conversion count directly to Meta&rsquo;s without adjusting for window differences.</p>
      </div>

      <h2 id="formats-that-drive-bookings">The formats that drive bookings</h2>
      <p>Five formats worth knowing, one sentence each &mdash; this is the creative format guide that covers 90% of what a Mallorca hospitality business needs at the start:</p>
      <ol>
        <li><strong>Spark Ads</strong> &mdash; promotes existing organic content that has already earned engagement; preserves the likes, comments and shares, making the ad look and feel like real content rather than an advertisement.</li>
        <li><strong>In-Feed Ads</strong> &mdash; native-looking videos placed in the For You feed; 9&ndash;60 seconds long and skippable after 2 seconds; the workhorse format for reach and awareness at the lowest CPM entry point.</li>
        <li><strong>TopView</strong> &mdash; full-screen takeover when the app opens; maximum visibility and significantly higher CPM; best suited for seasonal launches or major promotional moments where CPM efficiency matters less than share of attention.</li>
        <li><strong>Branded Content Ads</strong> &mdash; creator-made content whitelisted and run as ads from your account; typically 3&ndash;5&times; the engagement rate of brand-account creative for Mallorca tourism content.</li>
        <li><strong>Collection Ads</strong> &mdash; a video paired with swipeable product tiles beneath it; most useful for businesses with multiple bookable products (room types, charter packages, dining experiences) where a single ad can surface the full range.</li>
      </ol>
      <p>For most Mallorca hospitality businesses starting on TikTok, Spark Ads should come first. Spend four weeks building organic content, identify what earns genuine watch time, then put budget behind the winners. Do not run paid before you have an organic signal worth backing.</p>

      <h2 id="tiktok-ads-cost-mallorca">What it costs to run TikTok Ads in Mallorca</h2>
      <p>Benchmarks for hospitality and tourism campaigns in the Balearics, 2025&ndash;2026:</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Format</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>CPM range</th>
              <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>CPV range</th>
            </tr>
          </thead>
          <tbody>
            {[
              { format: 'In-Feed (awareness)', cpm: '€4–10', cpv: '€0.03–0.07' },
              { format: 'In-Feed (conversion)', cpm: '€7–12', cpv: '€0.04–0.08' },
              { format: 'Spark Ads', cpm: '€4–9', cpv: '€0.02–0.06' },
              { format: 'TopView', cpm: '€18–35', cpv: 'n/a' },
            ].map(row => (
              <tr key={row.format} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.format}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.cpm}</td>
                <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.cpv}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Minimum meaningful test budget: &euro;50/day for four weeks &mdash; roughly &euro;1,400 to get a statistically usable signal on creative and audience. Below that, you are burning budget on a sample too small to learn from.</p>
      <p>A note on seasonality. Mallorca&rsquo;s tourism peak (May&ndash;September) drives higher CPMs across all paid channels, not just TikTok. Running in February&ndash;April, before the peak, lets you build audiences at lower cost and retarget them through the high season. That is the media planning logic that separates efficient from expensive seasonal campaigns &mdash; and the reason a year-round presence pays for itself even at reduced off-season budgets.</p>

      <h2 id="who-should-not">Who should not run TikTok Ads</h2>
      <p>TikTok Ads are not right for everyone. Three cases where we would advise against them:</p>
      <p><strong>B2B businesses.</strong> TikTok&rsquo;s audience index for B2B purchase intent is low. Decision-makers are on the platform, but not in buying mode. LinkedIn is a more efficient allocation for that objective.</p>
      <p><strong>Highly seasonal businesses with no year-round budget.</strong> TikTok&rsquo;s algorithm requires continuity to learn. A business that runs 8 weeks of ads in summer and goes dark for nine months loses all algorithmic learning each season. The economics rarely recover without that continuity. A minimal always-on presence from February solves this; a summer-only burst does not.</p>
      <p><strong>Businesses without video production capability.</strong> TikTok is video-first. Static image ads underperform significantly. If you cannot produce 2&ndash;4 new pieces of video content per month, the channel will not perform regardless of budget. See our sister post on <a href="/blog/meta-ads-agency-vs-in-house/">Meta Ads: agency vs in-house</a> for a related discussion on matching creative resource to channel requirements.</p>
      <p>If you run a restaurant, hotel, boat charter, beach club or experience provider in Mallorca with a visual product and a genuine year-round operational presence &mdash; TikTok Ads are worth serious consideration. The platform is underpriced for tourism relative to Meta, and that gap will narrow.</p>

      <h2 id="boat-escape-mallorca">A boat charter case: Boat Escape Mallorca</h2>
      <p>Boat Escape Mallorca is a charter company based in Palma operating a fleet of 12 vessels &mdash; day charters, sunset trips and private hire. In February 2026 they had no TikTok presence, paid or organic, and no prior experience with the platform.</p>
      <p>We built an organic-first strategy: three videos per week showing real departures, real passengers and real coastline. No stock footage, no drone shots of empty boats. The brief was simple: if someone watches 20 seconds of this, they should be thinking about booking.</p>
      <p>After five weeks of organic posting, we identified three videos with a 35%+ average watch rate. We ran Spark Ads on those three videos only. Budget: &euro;1,200/month. The campaign ran from February through October &mdash; nine months of the Mallorca charter season.</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Metric</th>
              <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Result</th>
            </tr>
          </thead>
          <tbody>
            {[
              { metric: 'Charter bookings / month', result: '0 → 28' },
              { metric: 'Cost per booking (CPB)', result: '€38' },
              { metric: 'Average booking value', result: '€620' },
              { metric: 'TikTok followers (organic)', result: '0 → 4,100' },
            ].map(row => (
              <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>A CPB of &euro;38 against an average booking value of &euro;620 is a 16&times; return at the booking level &mdash; before repeat bookings or referrals. The key was not the ad format or the budget. It was five weeks of organic content that told us which creative was worth backing. Without that signal, Spark Ads on the wrong videos would have returned little.</p>

      <h2 id="how-to-start">How to start</h2>
      <p>Four steps, in order. The sequence matters &mdash; skipping step one produces step four results:</p>
      <ol>
        <li><strong>Build organic for four weeks.</strong> Post three videos per week. Put no paid budget behind anything yet. Let the algorithm tell you what earns watch time and completions, not what gets the most likes.</li>
        <li><strong>Identify your top three organic performers.</strong> Open TikTok Business Suite and filter by average watch time and completion rate. Not likes, not follower gains &mdash; watch time and completion are the signals that predict paid performance.</li>
        <li><strong>Run Spark Ads on those three videos.</strong> Start with a &euro;50/day budget split across the three. Run for three weeks before making any creative or targeting changes &mdash; the learning phase needs time and volume to stabilise.</li>
        <li><strong>Optimise toward bookings, not traffic.</strong> Install the TikTok Pixel, configure the booking or enquiry event, and give the algorithm a conversion to optimise against. If your booking flow doesn&rsquo;t support pixel events yet, optimise for landing page views as a proxy whilst you fix the technical setup.</li>
      </ol>
      <p>Our <a href="/services/paid-social/">paid social service</a> covers TikTok, Meta and LinkedIn under one retainer. Our <a href="/industries/hospitality/">hospitality industry playbook</a> covers the full channel mix for hotels, restaurants and experience businesses in Mallorca. If creative production is the bottleneck, our <a href="/services/creative/">creative production service</a> includes creator sourcing and briefing specific to Mallorca hospitality content.</p>
      <NeedHelp topic="tiktok-ads-mallorca-tourism" />
    </>
  ),
},
{
    slug: 'ki-sichtbarkeit-ai-visibility',
    image: '/blog/crunchjunkie-dashboard-visibility-sample-size.jpg',
    imageAlt: 'CrunchJunkie AI Visibility dashboard showing brand citation rates across ChatGPT, Perplexity, Claude, Gemini and seven other AI engines',
    toc: [
      'Why AI visibility is not SEO',
      'How AI engines decide who to cite',
      'pmax\'s visibility across 10 engines',
      'The seven levers that move the needle',
      'What a technical GEO audit checks',
      'How to track your own AI visibility',
    ],
    tocIds: [
      'ai-visibility-vs-seo',
      'how-ai-decides',
      'pmax-visibility-data',
      'seven-levers',
      'geo-audit',
      'how-to-track',
    ],
    faqs: [
      {
        q: 'What is AI search visibility and how is it measured?',
        a: 'AI search visibility is the percentage of AI-generated responses, for a defined set of queries, in which your brand is cited or recommended. It is measured by running each tracked prompt multiple times across target engines — ChatGPT, Perplexity, Claude, Gemini and others — recording which brands appear, and calculating a citation rate with a margin of error. Fifteen to twenty runs per prompt is the minimum for a statistically meaningful reading.',
      },
      {
        q: 'How do I get my business mentioned by ChatGPT?',
        a: 'The evidence-backed levers are: specific, quotable content with verifiable facts and cited statistics; FAQ content mapping to how people query AI engines; AI crawler access (WAF rules audited for OAI-SearchBot and PerplexityBot); consistent entity data across all channels; and third-party coverage in sources AI engines already trust. Generic brand language has no measurable effect on citation rates. The KDD 2024 GEO study found cited statistics improved citation rates by 25.9% and direct quotations by 27.8%.',
      },
      {
        q: 'What is a GEO audit and why does it matter?',
        a: "A GEO audit is a structured diagnostic of how ready your website is to be crawled and cited by AI search engines. It covers five categories weighted by evidence strength: AI crawler access (30/100), content accessibility (30/100), structured data (20/100), technical SEO hygiene (15/100), and llms.txt (5/100). It tells you where your citation readiness is weakest and what to fix first.",
      },
      {
        q: 'How is AI visibility different from traditional SEO?',
        a: "SEO optimises for ranked position in a list of links. AI visibility determines whether your brand appears in a synthesised answer — often a short list of recommended brands or a single named option. There is no ranked list for the user to scroll; you are either in the response or not. A brand with strong SEO can be entirely absent from AI responses if it lacks the specific, quotable content and third-party corroboration that AI engines use to decide who to cite.",
      },
      {
        q: 'Which AI engines should I focus on for brand visibility?',
        a: "Track all the major engines — citation behaviour differs significantly between them. Our own data shows a 51.4% citation rate on GPT-4o Search but only 11.4% on Claude — same brand, same prompts, very different outcomes. If you track only one engine you are measuring a fraction of an increasingly fragmented market.",
      },
    ],
    prose: (
      <>
        <p>Most brands we audit have no idea what ChatGPT says about them. Some have never asked. Others asked once, received a vague response and moved on. Almost none track it systematically &mdash; across engines, across query types, over time.</p>
        <p>That gap matters. AI search is not a fringe channel. Perplexity handles over 100 million weekly queries. Google AI Mode is now the primary interface for commercial searches across much of Europe. ChatGPT is the starting point for product and service research among under-45s in several categories. If you are invisible in these responses, you are losing buyers before they reach your website.</p>
        <p>This post covers how AI engines decide who to cite, what the evidence says actually moves citation rates, and what our own visibility data looks like across 10 engines. <a href="/about">Claire Enders</a>, who leads AI visibility at pmax and works on the <a href="https://crunchjunkie.io/" target="_blank" rel="noopener">CrunchJunkie</a> tracking product, wrote this from live data.</p>

        <h2 id="ai-visibility-vs-seo">Why AI visibility is not SEO</h2>
        <p>The reflex is to treat AI search visibility as SEO in a new format. The two share some DNA &mdash; crawlability, structured data, content quality &mdash; but the mechanism is different enough that identical interventions produce very different outcomes.</p>
        <p>Google Search ranks pages. It evaluates signals and returns a ranked list of links. Your job in SEO is to rank above competitors on that list. The user chooses from it.</p>
        <p>AI engines synthesise answers. They draw from sources they consider credible and corroborated, construct a response in their own words, and surface a recommendation &mdash; often a short list, sometimes a single named brand. There is no ranked list. You are either in the response or you are not. If you are not, the user never sees a link to you.</p>
        <p>A brand with strong domain authority and years of SEO investment can be completely absent from AI responses in its own category. We see this regularly. A smaller competitor with clear, specific, consistently corroborated content appears in every response. The difference is not SEO performance. It is entity clarity and citation readiness.</p>
        <p>SEO still matters &mdash; it builds the technical foundation that AI crawlers need. But it is necessary, not sufficient. For a deeper look at what optimising for generative search involves, see our <a href="/blog/what-is-generative-engine-optimisation/">guide to generative engine optimisation</a>.</p>

        <h2 id="how-ai-decides">How AI engines decide who to cite</h2>
        <p>The most useful research on this is Aggarwal et al. (KDD 2024), which measured what content characteristics actually improve AI citation rates. The paper tested nine optimisation strategies against a control. Two findings stand out.</p>
        <p>Direct quotations in content improved citation rates by 27.8%. Cited statistics &mdash; specific, verifiable numbers in the body text &mdash; improved them by 25.9%. Authoritative external citations: +24.9%. Generic brand language produced no measurable effect.</p>
        <p>The pattern is clear. AI engines prefer content that functions like evidence. Not marketing copy &mdash; referenced claims, specific numbers, verifiable facts. &ldquo;pmax manages over &euro;2 million in annual paid media spend across Google Ads and Meta&rdquo; is citable. &ldquo;We deliver exceptional results for ambitious brands&rdquo; is not.</p>
        <p>Three structural factors sit alongside content quality. First, AI crawlers need to reach your site. Approximately 13% of AI crawler fetches are blocked by web application firewall (WAF) rules written to block scraper traffic, without distinguishing between malicious bots and legitimate AI retrieval bots like OAI-SearchBot or PerplexityBot. If your WAF blocks these, your content is invisible regardless of its quality. Second, entity consistency: identical brand name, location, founding year and services across your site, Google Business Profile, LinkedIn and industry directories. Contradictory information introduces hallucination risk. Third, third-party coverage in sources AI engines already treat as authoritative &mdash; specialist publications, established review platforms, co-published case studies.</p>

        <h2 id="pmax-visibility-data">pmax&rsquo;s visibility across 10 engines</h2>
        <p>We track our own AI visibility using <a href="https://crunchjunkie.io/" target="_blank" rel="noopener">CrunchJunkie</a> &mdash; 35 prompts across 10 AI engines, running continuously. Over the 30 days to 7 September 2026, pmax was cited in 1,107 out of 3,198 total runs: a 34.6% overall citation rate.</p>
        <p>Here is the engine-by-engine breakdown, alongside rex4media &mdash; our nearest tracked competitor. We lead the overall cited run count 2.4:1 (1,107 vs their 470 cited runs). Where rex4media&rsquo;s bar turns amber, they beat us.</p>

        <div style={{ margin: '32px 0', overflowX: 'auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', marginBottom: 12, display: 'flex', gap: 20 }}>
            <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 2, background: '#3cffd0', marginRight: 6, verticalAlign: 'middle' }}></span>pmax</span>
            <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 2, background: '#6b6b8b', marginRight: 6, verticalAlign: 'middle' }}></span>rex4media</span>
          </div>
          <svg viewBox="0 0 520 300" style={{ width: '100%', maxWidth: 520, display: 'block' }} aria-label="AI engine visibility: pmax vs rex4media">
            {[
              ['GPT-4o Search', 51.4, 24.3, false],
              ['DeepSeek', 45.7, 31.4, false],
              ['Perplexity', 42.9, 28.6, false],
              ['Meta AI', 37.1, 17.1, false],
              ['Grok-3', 31.4, 22.9, false],
              ['Gemini Flash', 25.7, 8.6, false],
              ['Google AI Mode', 17.1, 34.3, true],
              ['AI Overview', 14.3, 0, false],
              ['Claude', 11.4, 22.9, true],
              ['Bing Copilot', 2.9, 0, false],
            ].map(([engine, pmax, rex, rexWins], i) => {
              const y = (i as number) * 29 + 10
              const barW = 300
              const scale = barW / 55
              const pmaxW = Math.round((pmax as number) * scale)
              const rexW = Math.round((rex as number) * scale)
              const rexColor = rexWins ? '#f5a14a' : '#6b6b8b'
              return (
                <g key={engine as string}>
                  <text x={0} y={y + 8} fontSize={10} fill="#6b6b6b" fontFamily="var(--font-mono)">{engine as string}</text>
                  <rect x={120} y={y} width={pmaxW} height={11} fill="#3cffd0" rx={2} />
                  <rect x={120} y={y + 13} width={rexW} height={11} fill={rexColor} rx={2} />
                  <text x={122 + pmaxW} y={y + 9} fontSize={9} fill="#3cffd0" fontFamily="var(--font-mono)">{(pmax as number).toFixed(1)}%</text>
                  {(rex as number) > 0 && <text x={122 + rexW} y={y + 22} fontSize={9} fill={rexColor} fontFamily="var(--font-mono)">{(rex as number).toFixed(1)}%</text>}
                </g>
              )
            })}
          </svg>
          <p style={{ fontSize: 11, color: '#6b6b6b', fontFamily: 'var(--font-mono)', marginTop: 8 }}>Source: CrunchJunkie AI Visibility tracking &middot; 35 prompts &middot; Sep 7, 2026 &middot; <a href="https://crunchjunkie.io/" style={{ color: '#6b6b6b' }} target="_blank" rel="noopener">crunchjunkie.io</a></p>
        </div>

        <p>Our strongest engine is GPT-4o Search at 51.4%. That reflects consistent presence in the sources ChatGPT&rsquo;s retrieval layer pulls from: our blog, third-party directory listings, and owned social channels.</p>
        <p>Google AI Mode (17.1%) and Claude (11.4%) are our weakest positions. Rex4media outperforms us on both &mdash; 34.3% and 22.9% respectively. The source pools these engines weight diverge from the ones that favour us on GPT-4o. That is where we are focusing remediation work now.</p>
        <p>The 2.4:1 overall lead should not create false comfort. Engine mix matters as much as aggregate citation rate. If Google AI Mode becomes the dominant commercial search surface in Europe &mdash; and the trajectory points that way &mdash; our underperformance there is the more consequential number.</p>

        <h2 id="seven-levers">The seven levers that move the needle</h2>
        <p>Based on the GEO research and what we have observed in our own tracking data, these are the interventions that produce measurable citation rate improvement.</p>
        <p><strong>1. Specific, quotable content.</strong> Replace generic brand claims with exact, verifiable facts. Your about page and service descriptions should read more like a Wikipedia entry than a brochure. &ldquo;pmax is a performance marketing agency in Calvi&agrave;, Mallorca, founded in 2023&rdquo; is citable. &ldquo;We deliver exceptional results for ambitious brands&rdquo; is not.</p>
        <p><strong>2. Cited statistics.</strong> Back every significant claim with a number. Not &ldquo;most advertisers&rdquo; &mdash; &ldquo;13% of AI crawler fetches are blocked by WAF rules by default.&rdquo; Cited statistics improve citation rates by 25.9% in the KDD 2024 research. Use them throughout your highest-traffic pages.</p>
        <p><strong>3. FAQ content.</strong> AI engines regularly synthesise question-and-answer content because it maps directly to how people query them. Every service page should have a structured FAQ section covering the genuine questions your buyers ask. Pair it with FAQPage schema.</p>
        <p><strong>4. AI crawler access.</strong> Audit robots.txt and &mdash; more importantly &mdash; your WAF configuration. OAI-SearchBot, PerplexityBot, Claude-SearchBot, ChatGPT-User and Google-Extended should not be blocked. One client we audited had all five inadvertently blocked via a Cloudflare bot management rule. We unblocked them; citation visibility improved within 30 days.</p>
        <p><strong>5. Entity consistency.</strong> Brand name, founding year, team, location and services should be identical across every channel. Contradictory information across platforms &mdash; different founding years, different service descriptions &mdash; introduces hallucination risk and reduces AI confidence in your entity data.</p>
        <p><strong>6. Third-party coverage.</strong> A single mention in a respected industry publication does more for citation rates than ten self-published posts. AI engines weight sources they already trust. Digital PR, podcast appearances and co-published client case studies all build the third-party corroboration that underpins long-term citation rates.</p>
        <p><strong>7. Owned off-site channels.</strong> YouTube, LinkedIn, Substack &mdash; content on your owned channels outside your main domain is tracked and cited separately. CrunchJunkie&rsquo;s off-site citation data shows which channels each engine draws from per topic cluster, and where you have gaps. That maps directly to content investment decisions.</p>

        <div className="prose-callout" style={{ marginTop: 32 }}>
          <span className="prose-callout-kicker">Compounding, not overnight</span>
          <p>None of these levers produce immediate results. They compound over months. Our own trajectory &mdash; from no tracking to a 97/100 GEO audit score and 1,107 cited runs in 30 days &mdash; took roughly nine months of consistent work across all seven dimensions.</p>
        </div>

        <h2 id="geo-audit">What a technical GEO audit checks</h2>
        <p>A GEO audit is the structured diagnostic for the access and content factors above. The one we run through our <a href="/services/ai-visibility/">AI visibility service</a> covers five categories, each weighted by how much evidence supports its impact on citation rates.</p>
        <p><strong>AI crawler access (30/100).</strong> Can retrieval bots reach your key pages? Robots.txt review, WAF and bot management rule audit, and live crawl verification using user-agent strings from OAI-SearchBot, PerplexityBot and Claude-SearchBot. The 13% block rate is real and usually the highest-impact fix.</p>
        <p><strong>Content accessibility (30/100).</strong> Is critical content server-rendered? JavaScript-dependent content is often invisible to AI crawlers that do not execute JS. If your service descriptions load via a React component that requires browser rendering, they may not be in the crawlable DOM at all.</p>
        <p><strong>Structured data (20/100).</strong> JSON-LD quality and coverage: Organisation or LocalBusiness, Service, FAQPage, Person for named team members. Schema helps AI engines resolve your brand as a defined entity with consistent attributes.</p>
        <p><strong>Technical SEO hygiene (15/100).</strong> Canonical tags, sitemap currency, title and description lengths. Foundation work that prevents crawl issues from undermining otherwise solid content.</p>
        <p><strong>llms.txt (5/100).</strong> Weighted at 5 of 100 deliberately. Google confirmed in August 2026 that Google Search ignores llms.txt. Approximately 97% of published llms.txt files receive zero AI crawler requests. Worth having; not a priority. Our pmax.online GEO audit score is 97/100 &mdash; CrunchJunkie&rsquo;s &ldquo;AI-ready&rdquo; band.</p>

        <h2 id="how-to-track">How to track your own AI visibility</h2>
        <p>Manual tracking &mdash; running prompts yourself across ChatGPT, Perplexity, Claude and Gemini &mdash; is where every AI visibility programme starts. The limitation is variance. AI responses are non-deterministic: run the same prompt twice and you can get different brands, different framing, different citation lists. A single query is a data point, not a trend.</p>
        <p>To track AI visibility with statistical meaning you need three things.</p>
        <p><strong>Multiple runs per prompt.</strong> Fifteen to twenty minimum to produce a citation rate with a reliable margin of error. The difference between &ldquo;34.5% &plusmn; 3.3% based on 2,591 runs&rdquo; and &ldquo;34.5%&rdquo; is the difference between a measurement and a number. The former tells you whether a four-point drop is a real signal or noise. The latter does not.</p>
        <p><strong>Coverage across engines.</strong> Each engine has distinct citation behaviour. GPT-4o and Perplexity cite aggressively from crawled web content. Google AI Mode draws heavily from the Google index and Knowledge Graph. Claude weights authoritative sources differently. Tracking only ChatGPT gives you a partial picture of a fragmented market.</p>
        <p><strong>Trend data over time.</strong> A one-off audit tells you where you stand today. Systematic tracking over weeks and months tells you whether your interventions are actually working &mdash; and whether a competitor is gaining ground on engines where you are weak.</p>
        <p>We use <a href="https://crunchjunkie.io/" target="_blank" rel="noopener">CrunchJunkie</a> for this work: all 35 prompts, all 10 engines, continuous tracking with margin-of-error reporting and competitive benchmarking against rex4media and others. Our <a href="/services/ai-visibility/">AI visibility service</a> includes tracking setup, a full GEO audit and a monthly reporting cadence. For a breakdown of what to look for in an AI visibility tracking tool before you pay for one, see our buyer&rsquo;s guide to AI visibility tracking tools.</p>

        <NeedHelp topic="ki-sichtbarkeit-ai-visibility" />
      </>
    ),
  },
{
  slug: 'meta-ads-agency-vs-in-house',
  toc: [
    'The in-house vs. agency question',
    'What it actually costs',
    'When in-house wins',
    'When an agency wins',
    'A real switch: Finca Es Pinar',
    'What to ask before you decide',
  ],
  tocIds: [
    'in-house-vs-agency',
    'real-costs',
    'when-in-house-wins',
    'when-agency-wins',
    'finca-es-pinar',
    'what-to-ask',
  ],
  faqs: [
    {
      q: 'How much does a Meta Ads agency cost in the UK/Spain?',
      a: 'A Meta Ads agency in the UK typically charges £1,500–4,500/month on a retainer covering strategy, campaign management, creative direction and reporting. Spain-based agencies — including Mallorca-based ones like pmax — work in a similar range in euros: €1,800–4,500/month. Percentage-of-spend models still exist but create perverse incentives: the agency earns more when you spend more, regardless of returns.',
    },
    {
      q: 'What ROAS should I expect from Meta Ads for a hospitality business?',
      a: 'Hospitality businesses on Meta typically see ROAS between 2.5× and 5× when campaigns are properly structured — targeting past guests, travellers in key source markets, and lookalike audiences built from real bookers. WordStream\'s 2024 Facebook Ads benchmark report puts average ROAS across all industries at around 2.87×. Hospitality tends to sit above this when creative is strong and landing pages are conversion-optimised.',
    },
    {
      q: 'Can I manage Meta Ads myself without an agency?',
      a: 'Yes — and for some businesses it makes sense. If monthly ad spend is below £1,500, the economics of an agency retainer rarely hold up on either side. Meta\'s Ads Manager is accessible and Meta Blueprint offers free certification training. The honest constraint is time: running Meta Ads well takes 8–12 hours per week per account — testing creative, monitoring frequency, adjusting audiences, reviewing attribution.',
    },
    {
      q: 'How long does it take for Meta Ads to show results?',
      a: 'Most accounts produce meaningful data within 2–4 weeks — enough to assess whether targeting and creative are working. A full picture of ROAS, cost per acquisition and audience saturation typically takes 6–12 weeks, particularly in sectors with longer consideration cycles like hospitality or high-value professional services. Meta\'s algorithm needs roughly 50 conversions per ad set per week to exit the learning phase; below that, results remain noisy.',
    },
    {
      q: 'What is the minimum Meta Ads budget worth managing?',
      a: 'Below £500/month in ad spend, data volume is too low to run meaningful tests. Most agencies — including us — set a minimum of £1,000–1,500/month in media spend before taking on a managed account. Below that level, self-managed campaigns or a one-off consultancy session typically deliver better value than an ongoing retainer.',
    },
  ],
  prose: (
    <>
      <p>There is no universally right answer here. That is the most honest thing we can say upfront. Agencies win in some situations. In-house teams win in others. Freelancers are genuinely the right call for certain scopes of work.</p>
      <p>What we can give you: the actual numbers, the actual trade-offs, and a case study of a Mallorca hospitality business that switched from in-house to pmax &mdash; so you have something real to compare against rather than a vendor&rsquo;s opinion dressed up as a framework.</p>

      <h2 id="in-house-vs-agency">The in-house vs. agency question</h2>
      <p>Most businesses we talk to have already made a provisional decision before they reach us. They are either frustrated with an agency or frustrated with their own team. Both can be a valid read of the situation &mdash; and both can be a misdiagnosis.</p>
      <p>The agency model bundles expertise, tools and continuity into a monthly retainer. You are paying for a team that manages dozens of accounts across industries, runs tests at a scale your single account cannot support, and sees patterns before any one brand does. The trade-off is attention: a competent mid-market agency manager typically holds 15&ndash;20 clients. Your account gets a fraction of a person&rsquo;s week.</p>
      <p>The in-house model gives you full attention, deep brand knowledge and tight internal alignment. The trade-off is learning curve, recruitment difficulty and all-in cost. A competent Meta Ads manager in the UK earns £35,000&ndash;55,000/year. Add employer National Insurance, pension contributions, tools and training &mdash; you are at £45,000&ndash;75,000 before anyone has opened Ads Manager.</p>
      <p>The freelance model sits between the two: lower ongoing cost, specific expertise, but typically less continuity and a narrower scope than a full agency relationship.</p>

      <h2 id="real-costs">What it actually costs</h2>
      <p>According to WordStream&rsquo;s 2024 Facebook Ads benchmark report, the average CPM on Meta across industries was £8.10, with an average click-through rate of 0.9% and a CPC of £0.97. These are ad costs. What you pay for management on top varies significantly by model.</p>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Option</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Annual management cost</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Time to start</th>
              <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Best suited to</th>
            </tr>
          </thead>
          <tbody>
            {[
              { option: 'Agency', cost: '£18,000–54,000/yr', time: '2–4 weeks', suits: '£1.5K–25K/month spend' },
              { option: 'In-house hire', cost: '£45,000–75,000/yr all-in', time: '3–6 months', suits: '>£50K/month spend' },
              { option: 'Freelancer', cost: '£8,400–24,000/yr', time: '1–2 weeks', suits: 'Short sprints, single channel' },
              { option: 'Self-managed', cost: '£0 + tools ~£200/mo', time: 'Immediate', suits: '<£1,500/month spend' },
            ].map(row => (
              <tr key={row.option} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.option}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0' }}>{row.cost}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.time}</td>
                <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontSize: 12, color: '#949494' }}>{row.suits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>These are management costs only &mdash; ad spend sits on top. The in-house figure includes salary, employer on-costs and a tool budget. Freelance rates assume a mid-level specialist; senior practitioners charge considerably more.</p>
      <p>&ldquo;Most businesses discover the real cost of an in-house hire only after twelve months,&rdquo; says Philipp Enders, founder of pmax. &ldquo;Recruitment, onboarding, the learning curve, and then the realisation that one person cannot simultaneously cover creative, strategy, analytics and platform management &mdash; that is when the economics shift.&rdquo;</p>

      <h2 id="when-in-house-wins">When in-house wins</h2>
      <p>Do not take this from an agency at face value. In-house is genuinely the right call in specific situations.</p>
      <p><strong>You spend more than £50,000/month on Meta alone.</strong> At that scale, fractional agency attention becomes the bottleneck. A dedicated in-house team iterates faster, briefs creative on shorter cycles, and holds more account context than any manager dividing their week across 15 clients.</p>
      <p><strong>Your product data is deeply proprietary.</strong> If your best creative angles depend on real customer conversations, purchase data, or internal research you cannot or will not share externally, in-house wins by default. An agency can only work with what you give them.</p>
      <p><strong>You are in a fast-moving DTC or fashion vertical.</strong> Brands dropping three collections per season and shooting new content weekly need creative operations running on the same rhythm. That integration is genuinely harder to sustain across an agency relationship.</p>
      <p>One honest caveat: building a competent in-house team takes 6&ndash;12 months from the hire decision. Until then, you are learning on live budget. Many businesses that try in-house come back to an agency for the first twelve months anyway &mdash; an expensive route to the same destination.</p>

      <h2 id="when-agency-wins">When an agency wins</h2>
      <p>For most businesses spending £1,500&ndash;25,000/month on Meta, an agency delivers better returns than the alternatives. The arithmetic is direct: the expertise available in a retainer &mdash; account structure, creative strategy, audience architecture, attribution setup &mdash; costs more to hire individually than the retainer itself.</p>
      <p>Agencies also bring cross-account pattern recognition. We manage Meta alongside Google Ads, TikTok, LinkedIn and Pinterest for clients across sectors. When something changes in Meta&rsquo;s algorithm or auction dynamics, we see it across a portfolio before any single brand does.</p>
      <p>If you run multiple paid channels, the coordination benefit compounds further. A <a href="/services/paid-social/">paid social specialist</a> who also understands your Google Ads account can sequence messaging across channels and avoid cannibalising your own paid search traffic &mdash; something parallel in-house specialists rarely achieve in practice.</p>
      <p>See our <a href="/cases/">case archive</a> for specific results &mdash; ROAS figures, cost-per-lead improvements, and the structural changes that drove them.</p>

      <h2 id="finca-es-pinar">A real switch: Finca Es Pinar</h2>
      <p>Finca Es Pinar is a boutique rural hotel in Calvi&agrave;, Mallorca. Eleven rooms, a strong repeat-guest base and seasonal peaks in May&ndash;June and September&ndash;October. When they came to us in Q1 2026, they had been managing Meta Ads in-house for 18 months &mdash; handled by a part-time marketing coordinator who also ran their social channels and email newsletter.</p>
      <p>The campaigns were running. The results were not good. A ROAS of 2.1&times; on a £2,400/month budget meant roughly £68 per booking lead. Their best direct-booking months still relied on OTA traffic to fill occupancy gaps.</p>
      <p>The problems were structural, not effort-related. Audiences were broad and never refreshed. Creative was repurposed from Instagram posts rather than built for conversion intent. Attribution was double-counting OTA-assisted conversions through a misconfigured pixel. The account had no systematic creative rotation, no frequency caps and no retargeting logic beyond a generic &ldquo;visited the website&rdquo; audience.</p>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
              <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Metric</th>
              <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Before</th>
              <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>After (12 weeks)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { metric: 'Meta Ads ROAS', before: '2.1×', after: '4.3×' },
              { metric: 'Cost per booking lead', before: '£68', after: '£31' },
              { metric: 'Monthly ad spend', before: '£2,400', after: '£2,400' },
              { metric: 'Direct booking share', before: '22%', after: '38%' },
              { metric: 'Active creative variants', before: '3', after: '14' },
            ].map(row => (
              <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.before}</td>
                <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0', fontWeight: 700 }}>{row.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>The budget did not change. What changed: audience segmentation by lead source and geography, conversion-focused creative built from scratch for the booking funnel, frequency capping per funnel stage, and a retargeting sequence that matched messaging to where guests were in their booking journey. Attribution was fixed using Meta&rsquo;s Conversions API connected directly to the property management system.</p>
      <p>&ldquo;We assumed the ads were working because the numbers in the dashboard looked reasonable,&rdquo; the hotel manager told us. &ldquo;It turned out the dashboard was wrong. Once attribution was fixed, we could see what was actually driving bookings &mdash; and it was not what we had assumed.&rdquo;</p>

      <h2 id="what-to-ask">What to ask before you decide</h2>
      <p>Six questions worth answering honestly before you commit to a model:</p>
      <ol>
        <li><strong>What is your monthly ad spend?</strong> Below £1,500 &mdash; self-managed or freelance. £1,500&ndash;25,000 &mdash; agency economics work clearly. Above £50,000 &mdash; in-house begins to make sense.</li>
        <li><strong>Do you have someone who can brief creative internally?</strong> An agency provides strategy. Creative briefing requires brand knowledge that lives inside the business. Without a capable internal briefer, the best-structured campaign still runs mediocre ads.</li>
        <li><strong>How is your current attribution set up?</strong> If you cannot answer whether your ROAS is measured on a view-through or click-through basis, your current figures may be unreliable. Fix attribution before judging any model&rsquo;s performance.</li>
        <li><strong>Are you on more than one paid channel?</strong> Meta alone is rarely the full picture. If you also run Google Ads &mdash; or are considering TikTok (see our <a href="/blog/tiktok-ads-mallorca-tourism/">TikTok Ads guide for Mallorca tourism</a>) &mdash; a multi-channel agency handles sequencing and budget allocation more effectively than parallel specialists working in silos.</li>
        <li><strong>What is your cost of a bad hire?</strong> A wrong in-house appointment costs 6&ndash;12 months of salary plus recruitment fees &mdash; typically £40,000&ndash;70,000 of risk. Factor that in honestly.</li>
        <li><strong>Is your business seasonal?</strong> Hospitality, tourism and events businesses need to surge and taper spend quickly. Agencies flex on short notice. Headcount does not.</li>
      </ol>

      <div className="prose-callout" style={{ marginTop: 32 }}>
        <span className="prose-callout-kicker">The bottom line</span>
        <p>For most businesses spending £1,500&ndash;25,000/month on Meta, an agency delivers better returns than the alternatives &mdash; not because agencies are inherently superior, but because the expertise available in a retainer costs more to hire individually than the retainer itself. The economics only shift when ad spend is high enough to justify a dedicated specialist and internal creative operations can keep pace.</p>
      </div>

      <p>Our <a href="/services/paid-social/">paid social service</a> covers Meta, LinkedIn, TikTok and Pinterest &mdash; managed together or individually depending on your situation. If you want to talk through which model makes sense for your business, <a href="/contact/">start with a 30-minute call</a>.</p>

      <NeedHelp topic="meta-ads-agency-vs-in-house" />
    </>
  ),
},
  {
    slug: 'free-website-design',
    toc: [
      'Why we offer this',
      'What the deal actually looks like',
      'Who qualifies',
      'A real rebuild: Portals Properties',
      'What you keep',
      'How to start',
    ],
    tocIds: [
      'why-we-offer-this',
      'what-the-deal-looks-like',
      'who-qualifies',
      'portals-properties',
      'what-you-keep',
      'how-to-start',
    ],
    faqs: [
      {
        q: 'What does free website design from pmax include?',
        a: 'Everything from strategy through to launch: UX design, information architecture, copy direction, development, conversion optimisation and launch. The site is built on a fast, modern stack with Core Web Vitals compliance from day one. You own the completed site unconditionally — no proprietary platform, no ongoing licence fee, no lock-in.',
      },
      {
        q: 'Is there a minimum ad spend to qualify for free website design?',
        a: 'We discuss this case by case, but the deal typically works for businesses spending £1,500/month or more on paid advertising — on any platform: Google Ads, Meta, TikTok, LinkedIn, Pinterest, Outbrain, or others — or businesses with a firm and budgeted plan to begin. Below that level, the economics do not hold up on either side.',
      },
      {
        q: 'Who owns the website after pmax builds it?',
        a: 'You do, unconditionally. Domain, source code, hosting provider and all assets are yours from launch day. If you ever end the advertising management arrangement, the website goes with you. We do not build on proprietary platforms or use site ownership as a retention mechanism.',
      },
      {
        q: 'How long does a free website rebuild take?',
        a: 'Typically six to ten weeks from strategy kick-off to launch. The main variable is content readiness — the faster you can supply photography, copy, and product or service information, the faster we move.',
      },
      {
        q: 'Does the free website deal work if I do not currently run any advertising?',
        a: 'Sometimes. If you have a firm plan to start paid advertising and the budget to commit, the conversation is worth having. What does not work is enquiries from businesses with no current or planned ad spend — the deal is structured around a paid media management relationship, not a stand-alone web design commission.',
      },
    ],
    prose: (
      <>
        <p>Most website design quotes start at &pound;3,000. Rebuilding an established site &mdash; moving platforms, restructuring pages, rewriting copy &mdash; is typically more than that. We do it for free.</p>
        <p>This is not a loss leader with a catch buried in the small print. The deal is straightforward, and so is the explanation.</p>

        <h2 id="why-we-offer-this">Why we offer this</h2>
        <p>We run paid advertising for businesses across Europe &mdash; Google Ads, Meta, TikTok, LinkedIn, Pinterest, Outbrain and more. The single biggest constraint on paid media performance is usually not the ads. It is the website.</p>
        <p>A well-structured campaign driving high-intent traffic to a slow, confusing, or badly-converting site wastes most of its budget before it has a chance to work. We have inherited enough of those situations to know exactly what they cost: typically 40&ndash;70% of potential conversion volume, gone before a form is submitted or a product added to cart.</p>
        <p>We cannot fix a client&rsquo;s performance numbers without fixing the page the ads land on. And asking a new client to spend &pound;5,000 on a website rebuild before they have seen a single month of results from a new agency is a hard sell &mdash; reasonably so.</p>
        <p>So we changed the structure. We absorb the website build. You pay us to manage your advertising.</p>

        <h2 id="what-the-deal-looks-like">What the deal actually looks like</h2>
        <p>No proprietary platform, no lock-in clause, no &ldquo;free&rdquo; that converts to a monthly fee after six months. The mechanics:</p>
        <p><strong>We design and build your website.</strong> This includes UX strategy, information architecture, conversion-optimised page design, copy direction, development and launch. The site is built on a modern, fast stack &mdash; Core Web Vitals compliance from the first commit. You receive the completed site and hold full ownership from day one.</p>
        <p><strong>You engage us to manage your paid media.</strong> Minimum commitment is discussed case by case. The deal makes sense for businesses with an existing advertising budget &mdash; typically &pound;1,500/month or more in active spend, or a clear and budgeted plan to begin. We manage whichever paid channels make sense for your business: Google Ads, Meta, TikTok, LinkedIn, Pinterest, Outbrain, or any combination.</p>
        <p><strong>We work on both together.</strong> The ads and the website are not separate projects. Creative briefs inform landing page decisions. Page performance data informs bid strategy. Copy tested in search ads improves page headlines. The two feed each other in ways that a web agency and a media agency working separately never manage to replicate.</p>

        <h2 id="who-qualifies">Who qualifies</h2>
        <p>You are probably a fit if:</p>
        <ul>
          <li>You are running paid advertising in-house (or with an existing agency) and underperforming on cost per lead or ROAS &mdash; on any platform: Google, Meta, TikTok, LinkedIn, Pinterest, Outbrain, or others</li>
          <li>You are spending &pound;1,500&ndash;&pound;25,000/month on paid advertising</li>
          <li>Your website is more than three years old, or was not built with conversion in mind</li>
          <li>You operate in a sector with real transaction values: real estate, hospitality, professional services, e-commerce, renewables, marine</li>
        </ul>
        <p>You are less likely to be a fit if you have no current or planned ad spend, if you are looking for a web design agency only, or if your business is pre-revenue. The free <a href="/services/conversion-design/">website redesign</a> deal is structured around a paid media management relationship &mdash; without that, it does not make sense on either side.</p>
        <p>We work with businesses across the UK, Spain, Germany, and the wider EU.</p>

        <h2 id="portals-properties">A real rebuild: Portals Properties</h2>
        <p>Portals Properties is a boutique real estate agency based in Puerto Portals, Mallorca, specialising in property sales and long-term rentals for UK buyers. When they came to us in Q4 2025, they were spending &pound;6,200/month on Google Ads and generating around 28 qualified inquiries per month &mdash; a cost per qualified lead of &pound;221.</p>
        <p>The ads were reasonably structured. The website was the problem.</p>
        <p>Built in 2019. Core Web Vitals score: 42 on mobile. The property search required four clicks before a contact form appeared. The homepage hero was a stock image. The inquiry form had eleven fields, including three that asked the same question in different ways.</p>
        <p>We rebuilt the site over eight weeks alongside the ad account transition. The new site loads in under 1.5 seconds on mobile (Core Web Vitals: 91), surfaces a two-field inquiry form on every page, replaces stock photography with the team&rsquo;s own images and a 90-second property tour, and shows real sold prices and client testimonials on every listing &mdash; because Mallorca property buyers choose their agent as much as they choose the property.</p>
        <p>After 14 weeks of the rebuilt site and our Google Ads management running together:</p>
        <div style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Metric</th>
                <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>Before</th>
                <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b' }}>After (14 weeks)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { metric: 'Qualified leads / month', before: '28', after: '71  (+154%)' },
                { metric: 'Cost per qualified lead', before: '£221', after: '£94' },
                { metric: 'Google Ads ROAS', before: '1.9×', after: '4.6×' },
                { metric: 'Core Web Vitals — mobile', before: '42 / 100', after: '91 / 100' },
                { metric: 'Organic form submissions / month', before: '11', after: '21' },
              ].map(row => (
                <tr key={row.metric} style={{ borderBottom: '1px solid #1a1a1a' }}>
                  <td style={{ padding: '10px 16px 10px 0', color: '#c8c8c8' }}>{row.metric}</td>
                  <td style={{ padding: '10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#949494' }}>{row.before}</td>
                  <td style={{ padding: '10px 0 10px 16px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#3cffd0', fontWeight: 700 }}>{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>The advertising budget did not change. What changed was where the traffic arrived, and what it found when it got there.</p>

        <h2 id="what-you-keep">What you keep</h2>
        <p>The website is yours. Unconditionally. Domain, source code, hosting choices, all assets &mdash; yours from day one. If you end the advertising arrangement, the website goes with you, intact.</p>
        <p>The same applies to your ad accounts. Your Google Ads account stays under your email. Your Meta Business Manager is yours. We operate inside both as a manager, not as the account owner. Campaign history, audience data, and creative libraries belong to your business, not ours.</p>
        <p>We are direct about this because the opposite &mdash; agencies that own your accounts and websites &mdash; is not unusual, and it causes serious problems for businesses that want to move or renegotiate later. We have inherited enough of those situations to know what they cost. We made it a point of principle to do the opposite.</p>

        <h2 id="how-to-start">How to start</h2>
        <p>Tell us your current ad spend, your website, and the result you are trying to achieve. The first call is 30 minutes and on us.</p>
        <p>We will tell you clearly whether your situation is a fit for the free website design deal, and if not, what the honest alternative looks like. We don&rsquo;t take on every enquiry &mdash; and we won&rsquo;t tell you otherwise.</p>
        <NeedHelp topic="free-website-design" />
      </>
    ),
  },
  {
    slug: 'ai-visibility-tracking-tools-2026',
    image: '/blog/crunchjunkie-dashboard-visibility-sample-size.jpg',
    imageAlt: 'CrunchJunkie AI Visibility dashboard showing Visibility 34.5% ± 3.3% based on 2,591 runs, Average Position 1.7, Sentiment 69/100, and Share of Voice 47.7% — every metric shown with its sample size and margin of error',
    toc: [
      'The metering problem nobody puts in the brochure',
      'What BYOK actually changes',
      'Why visibility percentages lie without sample sizes',
      'A metric nobody else tracks: Follow-up Survival',
      'GEO audits: why the evidence basis matters',
      'Owned off-site citations',
      'Where CrunchJunkie isn\'t the right call',
      'The honest summary',
    ],
    tocIds: [
      'metering-problem',
      'byok',
      'sample-sizes',
      'follow-up-survival',
      'geo-audits',
      'off-site-citations',
      'cj-limits',
      'summary',
    ],
    faqs: [
      {
        q: 'What is BYOK in AI visibility tracking?',
        a: 'BYOK stands for Bring Your Own Key. Instead of a tool wrapping API calls inside a prompt quota and charging a marked-up flat fee, a BYOK model lets you connect your own API keys directly to the model providers (OpenAI, Google, Anthropic, etc.). You pay the providers at cost; the platform charges a subscription based on something else — in CrunchJunkie\'s case, how many brands you track. The practical consequence is no prompt cap and transparent costs.',
      },
      {
        q: 'What is Follow-up Survival in AI search?',
        a: 'Follow-up Survival is a multi-turn AI visibility metric that measures whether a brand recommendation holds up when a buyer narrows their query in the same conversation. Standard AI visibility tracking records whether a brand appeared in response to a broad discovery prompt (turn 1). Follow-up Survival sends a configured narrower follow-up question in the same conversation (turn 2) and measures which brands survive the refinement. A brand can be visible in the broad query and disappear the moment a real constraint is applied. CrunchJunkie is the only AI visibility tool that productizes this metric.',
      },
      {
        q: 'How many AI engines does CrunchJunkie track?',
        a: 'CrunchJunkie tracks ten AI engines: ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews, Google AI Mode, Microsoft Copilot, Grok, Meta AI, and DeepSeek. All ten are included on every plan — there are no per-engine add-ons or tiered engine access.',
      },
      {
        q: 'What does a GEO audit check?',
        a: 'A GEO audit evaluates how ready a website is to be crawled and cited by AI search engines. CrunchJunkie\'s audit covers five categories: crawler access (whether AI bots can reach your pages), content accessibility (whether content is server-rendered and structured for extraction), structured data (JSON-LD quality and breadth), technical SEO hygiene (canonical, sitemap, title/description lengths), and llms.txt (the emerging file format for AI crawler guidance). Each check is assigned an evidence basis — research, documented, convention, or heuristic — that determines how much it weighs in the composite 0–100 score.',
      },
      {
        q: 'What AI visibility tools are cheapest for tracking multiple brands?',
        a: 'At a configuration of 50 prompts per brand, 5 engines, and weekly scanning, CrunchJunkie is the cheapest option that scales across multiple brands. At 5 brands the annual cost is approximately $2,873 (platform fee plus BYOK API costs) versus $3,229 for LLM Pulse, $4,884 for OtterlyAI, and $9,636 for Peec AI. LLM Pulse is cheaper at a single brand (~$529/year vs CrunchJunkie\'s ~$601), but imposes prompt caps and treats several engines as paid add-ons. Pricing verified August 2026.',
      },
    ],
    prose: (
      <>
        <p>The AI visibility tool market has a specific kind of problem: it&rsquo;s moving fast enough that most buyers don&rsquo;t yet know what questions to ask. Vendors know this, and some of them are exploiting it.</p>
        <p>I&rsquo;ve spent the last several months testing these platforms &mdash; not watching demos, but actually running them on client accounts, checking whether the numbers add up, and asking the questions that don&rsquo;t come up in sales calls. This is what I found.</p>

        <h2 id="metering-problem">The metering problem nobody puts in the brochure</h2>
        <p>Before you compare features, understand how each tool charges you. The pricing model determines what you can actually afford to track &mdash; and that shapes what you actually know about your AI search presence.</p>
        <p>Three models dominate the market right now.</p>
        <p><strong>Prompt-based metering.</strong> You buy a pool of prompts. 50 at entry level, maybe 150 on the next tier, 350 if you&rsquo;re willing to pay for it. Every query you want to monitor uses a prompt. Want to track more purchase-journey questions? More prompts. Want to refresh your list as AI search behaviour shifts? You&rsquo;re spending from the same pool.</p>
        <p>The practical consequence is that you start rationing your own tracking. You pick 50 prompts and hope those are the right ones. You skip the long-tail queries. You don&rsquo;t update the list when something changes in the market. You end up with a tidy dashboard that reflects what you could afford to track, not what&rsquo;s actually happening.</p>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/peec-ai-pricing-plans.jpg" alt="Peec AI pricing page showing Starter at €70/month with 50 prompts and 3 models, Pro at €180/month with 150 prompts and 3 models, Advanced at €360/month with 350 prompts and 3 models" width={1520} height={1108} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #e8e8e8' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>Peec AI: 50 prompts at &euro;70/month, 150 at &euro;180, 350 at &euro;360. The prompt pool is baked into the plan tier. Running out means upgrading &mdash; or tracking less.</figcaption>
        </figure>
        <p><strong>Engine-based metering.</strong> Many tools include 3&ndash;4 AI engines at base and charge for the rest. Claude often costs extra. Gemini might be gated. Copilot is sometimes not available at all on standard plans.</p>
        <p>OtterlyAI charges an additional $29&ndash;$439 per month for Claude tracking, depending on your plan. Peec AI gives you any three of their six supported engines per plan, with each additional engine running $30&ndash;$140 extra per month on top. So when you see a headline price, you need to do the engine math before accepting it.</p>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/otterly-ai-engine-addons-pricing.jpg" alt="OtterlyAI Add-Ons pricing table showing Claude tracking costs €29/month on Lite, €109/month on Standard, and €439/month on Premium — paid on top of the base plan price" width={1520} height={976} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #e8e8e8' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>OtterlyAI engine add-ons. Claude: &euro;29/month (Lite), &euro;109 (Standard), &euro;439 (Premium) &mdash; on top of the base subscription. Google Gemini and AI Mode follow the same structure.</figcaption>
        </figure>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/peec-ai-engine-coverage.jpg" alt="Peec AI feature comparison table showing Starter, Pro and Advanced plans each include only 3 AI models from the list, while Enterprise gets unlimited. Available engines listed include ChatGPT, AI Mode, AI Overviews, Microsoft Copilot, Perplexity, Gemini, Claude Sonnet 4, GPT-5 Search, DeepSeek, Qwen and Mistral." width={1520} height={1688} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #e8e8e8' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>Peec AI engine coverage grid. Non-Enterprise plans include exactly 3 models. Claude Sonnet 4, GPT-5 Search, and the newer engines are Enterprise-only.</figcaption>
        </figure>
        <p><strong>Per-domain or per-brand metering.</strong> Semrush&rsquo;s AI Visibility Toolkit charges $99 per domain per month. Transparent and predictable at one brand; brutal when you multiply it across an agency client list.</p>

        <h2 id="byok">What BYOK actually changes</h2>
        <p>CrunchJunkie takes a different approach to the whole pricing question. Instead of wrapping API calls inside a prompt quota and charging a marked-up flat fee, it lets you connect your own API keys. Your queries go directly to OpenAI, Google, Anthropic, and the other providers &mdash; you pay them at cost. The platform charges a subscription based on how many brands you track, not how many prompts you run.</p>
        <p>The result: no prompt cap. All ten engines &mdash; ChatGPT, Gemini, <a href="/blog/perplexity-visibility/">Perplexity</a>, Claude, Google AI Overviews, Google AI Mode, Microsoft Copilot, Grok, Meta AI, and DeepSeek &mdash; are included on every plan from the lowest tier upward. No per-engine add-ons.</p>
        <p>That changes the incentive structure in a concrete way. With a prompt cap, you have a reason to track fewer queries than you should. With BYOK and no cap, you track what&rsquo;s actually useful.</p>
        <p>Here&rsquo;s what the annual cost looks like at a consistent configuration &mdash; 50 prompts per brand, 5 engines, weekly scanning, annual billing &mdash; across the tools where pricing is publicly available:</p>

        <div style={{ overflowX: 'auto', margin: '24px 0 8px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>Tool</th>
                <th style={{ textAlign: 'left', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>Metered by</th>
                <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>1 brand / yr</th>
                <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>5 brands / yr</th>
                <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>10 brands / yr</th>
              </tr>
            </thead>
            <tbody>
              {[
                { tool: 'CrunchJunkie', href: 'https://crunchjunkie.io/pricing', meter: 'brands only', one: '$601', five: '$2,873', ten: '$6,105', highlight: true },
                { tool: 'LLM Pulse', href: 'https://llmpulse.ai/pricing', meter: 'prompts + project', one: '$529', five: '$3,229', ten: '$7,763', highlight: false },
                { tool: 'Peec AI', href: 'https://peec.ai/pricing', meter: 'prompts + engine', one: '$1,932', five: '$9,636', ten: '—', highlight: false },
                { tool: 'Semrush', href: 'https://www.semrush.com/prices/', meter: 'domain', one: '$1,908 +sub', five: '$9,540 +sub', ten: '$19,080 +sub', highlight: false },
                { tool: 'OtterlyAI', href: 'https://otterly.ai/pricing', meter: 'prompts + engine', one: '$2,508', five: '$4,884', ten: '$7,260', highlight: false },
                { tool: 'Scrunch *', href: 'https://scrunch.com', meter: 'brand workspace', one: '~$3,000', five: '—', ten: '—', highlight: false },
                { tool: 'Evertune', href: 'https://www.evertune.ai', meter: 'flat (prompt vol.)', one: '$9,600', five: '$9,600', ten: '$9,600', highlight: false },
                { tool: 'Ahrefs †', href: 'https://ahrefs.com/pricing', meter: 'base + add-on', one: '$9,936 +sub', five: '$9,936 +sub', ten: '$9,936 +sub', highlight: false },
                { tool: 'GEOly ‡', href: 'https://www.geoly.ai', meter: 'tier + engine gate', one: '$11,988', five: '$11,988', ten: '—', highlight: false },
              ].map(({ tool, href, meter, one, five, ten, highlight }) => (
                <tr key={tool} style={{ borderBottom: '1px solid #1e1e1e' }}>
                  <td style={{ padding: '10px 16px 10px 0', fontWeight: highlight ? 600 : 400, color: highlight ? '#f6f4ef' : '#b4b4b4', whiteSpace: 'nowrap' }}><a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{tool}</a></td>
                  <td style={{ padding: '10px 16px', fontSize: 12, color: '#6a6a6a', whiteSpace: 'nowrap' }}>{meter}</td>
                  <td style={{ textAlign: 'right', padding: '10px 16px', fontFamily: 'var(--font-mono)', fontSize: 12, color: highlight ? '#3cffd0' : '#b4b4b4', whiteSpace: 'nowrap' }}>{one}</td>
                  <td style={{ textAlign: 'right', padding: '10px 16px', fontFamily: 'var(--font-mono)', fontSize: 12, color: highlight ? '#3cffd0' : '#b4b4b4', whiteSpace: 'nowrap' }}>{five}</td>
                  <td style={{ textAlign: 'right', padding: '10px 0 10px 16px', fontFamily: 'var(--font-mono)', fontSize: 12, color: highlight ? '#3cffd0' : '#b4b4b4', whiteSpace: 'nowrap' }}>{ten}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ fontSize: 12, color: '#949494', lineHeight: 1.75, marginBottom: 24, borderTop: '1px solid #2d2d2d', paddingTop: 16 }}>
          <p style={{ margin: '0 0 8px', color: '#b4b4b4', fontWeight: 500 }}>How to read this table</p>
          <p style={{ margin: '0 0 6px' }}>Every tool is priced at the same configuration so the numbers are directly comparable: <strong style={{ color: '#f6f4ef' }}>50 prompts per brand, 5 AI engines, weekly scanning, annual billing</strong>. Only the plan cost at that exact setup is shown &mdash; no cherry-picking a cheaper tier that wouldn&rsquo;t cover the workload.</p>
          <p style={{ margin: '0 0 6px' }}>CrunchJunkie&rsquo;s figure is the platform subscription <em>plus</em> estimated BYOK API costs (what you pay OpenAI, Google, Anthropic etc. directly). The estimate is conservative &mdash; real API cost at 50 prompts/week is typically lower, and you can see exactly what you&rsquo;re spending because you pay the providers directly at cost, with no markup.</p>
          <p style={{ margin: '0 0 12px' }}>A dash (&mdash;) means no self-serve plan covers that configuration &mdash; you&rsquo;d need a custom enterprise quote.</p>
          <p style={{ margin: '0 0 4px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.5px' }}>* Scrunch pricing changes frequently; figure is from August 2026 &mdash; verify at scrunch.com before citing.</p>
          <p style={{ margin: '0 0 4px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.5px' }}>&dagger; Ahrefs: base plan ($129/mo) + all-engines Brand Radar add-on ($699/mo). The &ldquo;included&rdquo; Brand Radar prompt allowance is 5&ndash;20 prompts only &mdash; the add-on is required to track 50+.</p>
          <p style={{ margin: '0 0 4px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.5px' }}>&Dagger; GEOly: 5-engine coverage requires the $999/mo tier; max 5 brands. 10-brand configuration not available on self-serve plans.</p>
          <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.5px' }}>Competitor prices verified from public pricing pages where accessible; secondary sources otherwise. Prices change frequently &mdash; verify before committing.</p>
        </div>

        <p>One honest caveat that this table shouldn&rsquo;t hide: <strong>LLM Pulse is cheaper at one brand</strong> (&sim;$529/year vs CrunchJunkie&rsquo;s &sim;$601). If you&rsquo;re tracking a single brand on a tight budget, it&rsquo;s worth evaluating. LLM Pulse does enforce prompt caps and treats Copilot and Claude as paid add-ons &mdash; but at one brand with limited prompts and a few engines, those constraints may not bite you.</p>
        <p>The calculus flips at five brands. At ten brands, Peec AI can&rsquo;t even quote the configuration without a custom enterprise call. Semrush is running at $19,000+ per year before you add the required base subscription.</p>
        <p>CrunchJunkie plans (EUR, annual billing): <strong>Solo &euro;9/month</strong> (1 brand) &middot; <strong>Starter &euro;39/month</strong> (5 brands) &middot; <strong>Pro &euro;99/month</strong> (20 brands) &middot; <strong>Agency &euro;149/month</strong> (40 brands), plus your BYOK API costs.</p>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/crunchjunkie-pricing-plans.jpg" alt="CrunchJunkie pricing page showing Solo at €12/month for 1 brand, Starter at €49/month for 5 brands, Pro at €124/month for 20 brands, and Agency at €186/month for 40 brands — all plans include all 10 AI engines with no per-engine fees and no prompt limits" width={1520} height={1213} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #2d2d2d' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>CrunchJunkie plans are metered by brand, not by prompt or engine. All 10 AI engines are included on every plan. The variable cost is your BYOK API usage, paid directly to the providers at cost &mdash; no markup.</figcaption>
        </figure>

        <h2 id="sample-sizes">Why visibility percentages lie without sample sizes</h2>
        <p>Here&rsquo;s the thing about AI answer engines that most visibility dashboards quietly paper over: they&rsquo;re non-deterministic.</p>
        <p>Run the same prompt twice on ChatGPT, with the same account, five minutes apart. You can get different brands in the answer, different framing, different citation lists. <a href="https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/" target="_blank" rel="noopener noreferrer">A SparkToro study</a> found less than 1% overlap between ChatGPT and Google AI giving the same list of brands in two separate answers to the same query.</p>
        <p>This isn&rsquo;t an edge case. It&rsquo;s how these systems work &mdash; they sample from probability distributions, they update continuously, they personalise based on context. Every AI visibility number you see is based on a sample of responses, not an exhaustive census.</p>
        <p>So when a tool shows you &ldquo;34% visibility,&rdquo; what does that actually mean? Did they run the prompt once? Three times? Twenty times? Is 34% a stable reading with a narrow margin of error, or a single data point that could have come out anywhere from 10% to 60%?</p>
        <p>Most tools don&rsquo;t tell you. They show the number.</p>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/crunchjunkie-source-metrics.jpg" alt="CrunchJunkie dashboard showing Visibility 22.4% ± 5.1% based on 67 runs, with source metrics each showing their own sample size: Retrieval Rate 64.3% ± 12.4% based on 14 runs, Citation Rate 55.6% ± 15.7% based on 14 runs, Source Appearances 20 based on 67 runs" width={1520} height={564} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #2d2d2d' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>Every metric carries its own sample size. The Retrieval Rate is based on 14 runs because retrieval only fires when the brand appears &mdash; a different n from the top-level visibility figure, and reported honestly. &ldquo;Based on n&thinsp;=&thinsp;67 runs&rdquo; is the line most dashboards don&rsquo;t show.</figcaption>
        </figure>
        <p>CrunchJunkie runs each prompt multiple times and reports the sample size and margin of error alongside every visibility figure. The product&rsquo;s position on this is explicit: a single AI answer is a sample, not a trend. Every metric change gets evaluated against its margin of error before it registers as a movement worth acting on.</p>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/crunchjunkie-dashboard-visibility-sample-size.jpg" alt="CrunchJunkie dashboard showing Visibility 34.5% ± 3.3% with the note 'Based on n = 2,591 runs over the last 30 days'" width={1520} height={957} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #2d2d2d' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>Every metric ships with its sample size and margin of error. &ldquo;34.5% &plusmn;&thinsp;3.3% based on 2,591 runs&rdquo; is a measurement. &ldquo;34.5%&rdquo; alone is a number.</figcaption>
        </figure>
        <p>This matters most for agencies. When you report AI visibility to a client and the number drops by four points, you need to know whether that&rsquo;s a real signal or noise. Without sample size and error bounds, you&rsquo;re showing a client a chart that might mean nothing. With them, you can say with confidence whether something actually moved.</p>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/crunchjunkie-competitive-overview.jpg" alt="CrunchJunkie Competitive Overview table showing ten competitors with columns for Visibility, Position, Sentiment, Share of Voice, and Runs — every row shows 67 in the Runs column, confirming each metric is based on the same 67 prompt runs" width={1520} height={865} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #2d2d2d' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>The Runs column isn&rsquo;t cosmetic. Every competitor in the table was measured against the same 67 runs &mdash; so a brand at 50.7% visibility and a brand at 0.0% are genuinely comparable figures, not estimates from different-sized samples.</figcaption>
        </figure>

        <h2 id="follow-up-survival">A metric nobody else tracks: Follow-up Survival</h2>
        <p>Consider how people actually use AI for commercial decisions.</p>
        <p>Someone asks ChatGPT: <em>&ldquo;What are the best project management tools for distributed teams?&rdquo;</em> Your brand appears. Visibility: recorded. Win.</p>
        <p>But the conversation continues. They follow up: <em>&ldquo;Which of those is best for a team under fifteen people that doesn&rsquo;t want to pay per seat?&rdquo;</em></p>
        <p>Your brand disappears.</p>
        <p>You won the broad discovery query and lost the moment a real constraint was applied. The standard visibility dashboard never caught this &mdash; it measured turn one and stopped.</p>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/crunchjunkie-follow-up-survival-setup.jpg" alt="CrunchJunkie Follow-up Survival configuration screen showing a list of prompts each with a narrowing follow-up question field. The description reads: when an engine recommends a set of brands and the buyer then narrows the ask in the same conversation, how many of your turn-1 recommendations survive?" width={1520} height={844} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #2d2d2d' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>Each prompt in CrunchJunkie gets its own turn-2 follow-up question. &ldquo;Of these, which specialises specifically in Google Ads and Performance Max?&rdquo; is a different narrower from &ldquo;Of these, which is best on a limited monthly budget?&rdquo; &mdash; and a generic question applied across both would measure neither accurately.</figcaption>
        </figure>
        <p>CrunchJunkie calls this <strong>Follow-up Survival</strong>: a multi-turn metric that measures whether a recommendation holds up when a buyer narrows their question within the same conversation. The platform runs the discovery prompt, records which brands appear (turn&nbsp;1), sends a configured follow-up question in the same conversation (turn&nbsp;2), and measures which brands survive the refinement.</p>
        <p>No other tool in the category productizes this. It&rsquo;s available as an opt-in pilot feature on paid plans and costs approximately twice as much per prompt to run &mdash; because it requires two conversation turns instead of one.</p>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/crunchjunkie-follow-up-survival-results.jpg" alt="CrunchJunkie Follow-up Survival results showing Overall survival 56% — 45 of 80 turn-1 recommendations survived the follow-up across 71 conversations. Survival by brand table shows Pmax Online SL at 63%, islanetworks.com at 89%, and Tiki-Taka Media at 0%. Survival by engine shows Claude 100%, Grok 100%, ChatGPT 64%, Meta AI 63%, Perplexity 44%." width={1520} height={885} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #2d2d2d' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>56% overall survival across 71 conversations &mdash; meaning 44% of turn-1 recommendations vanished when the follow-up constraint was applied. The per-engine breakdown reveals structural differences: Claude and Grok held 100% of recommendations through turn 2; Perplexity held only 44%. The same brand, on the same prompts, with a very different outcome depending on which engine is doing the answering.</figcaption>
        </figure>
        <p>One design detail that matters: the follow-up question is configured per prompt, not applied generically. A narrower that makes sense after &ldquo;best project management tools for distributed teams?&rdquo; is nonsense after &ldquo;best espresso machines under &euro;200.&rdquo; CrunchJunkie requires a per-prompt follow-up question, offers an AI-drafted suggestion you can review and edit, and records the exact text used on every run as evidence &mdash; so you know exactly what was asked, and you can compare results across time because the question stays consistent.</p>
        <p>If your buyers research using multi-turn AI conversations &mdash; and B2B buyers increasingly do &mdash; survival in turn&nbsp;2 is more commercially predictive than visibility in turn&nbsp;1.</p>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/crunchjunkie-top-rankings-by-engine.jpg" alt="CrunchJunkie Top Rankings table showing leading brands per AI model — rows for Google AI Overviews, Google AI Mode, ChatGPT, Perplexity, Claude, Microsoft Copilot, Gemini, Grok, DeepSeek, and Meta AI, with six brands ranked per engine" width={1520} height={1159} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #2d2d2d' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>Visibility broken down by engine. A brand ranked #1 on Perplexity may be invisible on Claude. Follow-up Survival adds a second dimension: does the rank hold when the query narrows?</figcaption>
        </figure>

        <h2 id="geo-audits">GEO audits: why the evidence basis matters</h2>
        <p>Every AI visibility tool includes something called a <a href="/blog/what-is-a-geo-audit/">GEO audit</a> &mdash; a diagnostic of how ready your site is to be crawled and cited by AI engines. The quality of these audits varies enormously, for a reason that isn&rsquo;t obvious until you dig in.</p>
        <p>The honest truth about AI search optimisation is that we don&rsquo;t yet have decades of controlled evidence. We have some peer-reviewed research, published documentation from crawler vendors, and a lot of &ldquo;this seems like it might help&rdquo; logic that nobody has actually measured. The good audit tools are explicit about which category each of their checks falls into. The bad ones aren&rsquo;t.</p>
        <p>CrunchJunkie structures its audit around a formal evidence ladder:</p>
        <ul>
          <li><strong>Research</strong> &mdash; backed by peer-reviewed measurement of citation-rate effects</li>
          <li><strong>Documented</strong> &mdash; published platform behaviour from the crawler vendors themselves</li>
          <li><strong>Convention</strong> &mdash; emerging practice, not yet proven to be consumed by AI engines</li>
          <li><strong>Heuristic</strong> &mdash; sensible proxy, no direct evidence</li>
        </ul>
        <p>Each check&rsquo;s weight in the composite score scales with its evidence level. Heuristics can&rsquo;t dominate a category. Convention-basis checks carry lower weight by design.</p>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/crunchjunkie-geo-audit-score.jpg" alt="CrunchJunkie GEO Audit showing a score of 97 for pmax.online, labelled AI-ready. Category breakdown: AI crawler access 100 out of 30 weight points, Content accessibility 93 out of 30 weight points, Structured data 98 out of 20 weight points, Technical SEO hygiene 100 out of 15 weight points, llms.txt 100 out of 5 weight points. Agent readiness is shown separately as 100 out of 100." width={1520} height={1477} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #2d2d2d' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>The category weights are shown inline: AI crawler access and content carry 30 points each; structured data 20; technical SEO hygiene 15; llms.txt 5. A perfect llms.txt score is worth 5 points out of 100 &mdash; which is exactly what the evidence for it supports.</figcaption>
        </figure>
        <p>One concrete example: llms.txt. It&rsquo;s been heavily hyped. CrunchJunkie gives it a weight of 5 out of 100 in the composite audit score &mdash; deliberately low. Their quarterly research review found that approximately 97% of published llms.txt files receive zero crawler requests, and Claude Code is the only confirmed real reader of the standard at scale. <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">Google&rsquo;s own guidance</a>, updated in August 2026, explicitly states that Google Search ignores llms.txt.</p>
        <p>An audit tool that scores llms.txt at 15 or 20 points is telling you it matters more than the evidence supports. That inflates your score for doing something that probably doesn&rsquo;t help you yet, and it buries the checks that actually do.</p>
        <p>On the content side, the checks that carry real weight are backed by the <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer">KDD&nbsp;2024 &ldquo;GEO: Generative Engine Optimization&rdquo; study</a> (Aggarwal et al., Princeton/IIT Delhi), which measured actual citation-rate effects. Quotations in content improved citation rates by 27.8%. Cited statistics: +25.9%. Authoritative external citations: +24.9%.</p>
        <p>The audit covers five categories &mdash; crawler access (weight 30), content accessibility (30), structured data (20), technical SEO hygiene (15), and llms.txt (5) &mdash; and produces a 0&ndash;100 composite. Diagnostic, not a guarantee, and honest about what it doesn&rsquo;t know.</p>

        <h2 id="off-site-citations">Owned off-site citations</h2>
        <p>When an AI engine cites your brand, it often pulls from content that lives off your main domain: a YouTube channel, a LinkedIn company page, a Substack post, a Reddit thread you participate in.</p>
        <p>&ldquo;Brand radar&rdquo; tools from traditional SEO handle this via web index matching &mdash; they crawl the open web and look for your brand name. That&rsquo;s broad coverage but noisy: it credits you for mentions you don&rsquo;t control, content other people wrote about you, and brand-name mismatches.</p>
        <p>CrunchJunkie&rsquo;s off-site citation tracking works the opposite way. You declare your owned channels &mdash; <code>youtube.com/@yourbrand</code>, <code>linkedin.com/company/yourbrand</code>, your Substack, your Medium handle. The platform only attributes a citation to your brand if it&rsquo;s on a URL that matches a channel you declared, with handle-precise matching. A YouTube video from a different creator with your brand name in the title doesn&rsquo;t count.</p>
        <p>The consequence is a much more actionable view. You see exactly which of your owned channels AI engines are pulling from, for which topics, and where you have gaps. That maps directly to content investment decisions: not &ldquo;build a LinkedIn presence&rdquo; (you might already have one and it&rsquo;s working) but &ldquo;reinforce your YouTube coverage on this specific topic cluster.&rdquo;</p>

        <h2 id="cj-limits">Where CrunchJunkie isn&rsquo;t the right call</h2>
        <p>A tool guide that doesn&rsquo;t say this is a sales pitch.</p>
        <p><strong>At one brand on a tight budget:</strong> LLM Pulse undercuts CrunchJunkie at the single-brand level. If you&rsquo;re running a small program, don&rsquo;t need multi-engine coverage, and are comfortable with a prompt cap, it&rsquo;s worth a look alongside CrunchJunkie.</p>
        <p><strong>If you need SEO and AI visibility in one platform:</strong> Semrush&rsquo;s AI Visibility Toolkit sits inside a full SEO suite &mdash; keyword research, backlink analysis, rank tracking, site audits. If your team already lives in Semrush and you want AI visibility without managing a separate tool, that integration has real value even at the higher per-domain price. CrunchJunkie doesn&rsquo;t do traditional rank tracking. It&rsquo;s purpose-built for AI visibility.</p>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/semrush-site-audit-ai-search-health.jpg" alt="Semrush Site Audit dashboard showing Site Health 95%, AI Search Health 100% with a note that the website is better optimised for AI search engines, and Blocked from AI Search section showing ChatGPT-User, OAI-SearchBot, Googlebot and Google-Extended all with green checkmarks. The left sidebar shows the full Semrush SEO suite including keyword research, backlink analysis and position tracking." width={1520} height={1108} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #e8e8e8' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>Semrush Site Audit with the AI Search Health panel. The integration argument is real: one platform, one login, SEO and AI crawler access in the same view. If your workflow already runs through Semrush, that has genuine value &mdash; even at the higher per-domain price.</figcaption>
        </figure>
        <p><strong>If you want everything fully managed:</strong> The BYOK model requires setting up API keys with individual providers. For teams that want a completely managed option, CrunchJunkie offers that too, but the pricing advantage is sharpest on BYOK.</p>

        <h2 id="summary">The honest summary</h2>
        <p>Most AI visibility tools in 2026 were built for the single-brand case and are awkwardly retrofitting their pricing and architecture for multi-brand use. Engine gating and prompt caps are how they manage the cost they can&rsquo;t transparently pass through to you.</p>
        <p>CrunchJunkie was built with multi-brand tracking as a first-class case. BYOK means your costs scale linearly and transparently with actual usage. No prompt rationing, no engine add-ons, no contact-sales wall at five clients.</p>
        <p>The things that differentiate it in practice are less about feature lists and more about intellectual honesty: Follow-up Survival because recommendation stickiness under refinement matters more than headline visibility; sample sizes and error bounds because AI answers are volatile; an evidence-based audit because not everything vendors call a &ldquo;GEO signal&rdquo; has actually been measured.</p>
        <p>Those are the things that determine whether you can build a reporting practice on it &mdash; and whether what you show clients means something.</p>
        <p style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6a6a6a' }}>Pricing verified August 2026 from public pricing pages and, for CrunchJunkie, directly from the production codebase. Competitor prices verified against public pricing pages where accessible; secondary sources otherwise. Prices in this category change frequently &mdash; verify before committing.</p>

        <NeedHelp topic="geo-audit" />
      </>
    ),
  },
  {
    slug: 'google-ads-ai-disclosure-label',
    image: '/og/google-ads-ai-disclosure-serp.jpg',
    imageAlt: 'Google search results for "rezept online einlösen" showing the AI disclosure label on two pharmacy ads — DoktorABC and Shop Apotheke — reading "AI disclosure: Ad created or edited with AI"',
    toc: [
      'The label in the wild',
      'How Performance Max triggered it',
      'Three routes to the label',
      'The CTR question',
      'What to do in your account now',
      'Common questions',
    ],
    faqs: [
      {
        q: 'What is the Google Ads "AI disclosure: Ad created or edited with AI" label?',
        a: "A disclosure Google adds to ads where AI was involved in creating or editing the content. Rolled out from 9 July 2026, it appears under the ad description in Google Search, YouTube and Discover — visible without clicking anything. The rollout follows EU AI Act Article 50 transparency obligations which came into force on 2 August 2026.",
      },
      {
        q: 'Does Performance Max automatically trigger the AI disclosure label?',
        a: "Yes, in most standard configurations. If 'Automatically created assets' is enabled, or if you use AI Max for Search, Google's own AI generates ad variations that trigger the label automatically. You cannot disable the label itself — only the asset generation that causes it.",
      },
      {
        q: 'Can I opt out of the Google Ads AI disclosure label?',
        a: "Not directly. Turning off automatically created assets and avoiding AI tools for ad content removes the mechanism that triggers the label — but there is no setting that suppresses the label while keeping AI-generated content in place. Removing the AI content is the only functional opt-out.",
      },
      {
        q: 'Does the AI disclosure label affect click-through rate?',
        a: "There is no statistically meaningful data yet. The prominent placement appears to be in test phase and the label is too new to draw conclusions from. The concern most worth monitoring is in high-trust categories — healthcare, finance, legal services — where 'AI-created' may function as a friction signal. The practical step is segmenting CTR by campaign type and time period from the date the label appeared on your SERPs.",
      },
      {
        q: "What's the difference between automatic and self-declared AI disclosure in Google Ads?",
        a: "Automatic disclosure is applied by Google when its own AI tools — auto-created assets, Performance Max asset generation, AI Max for Search — touched your content. Self-declared disclosure is a new account-level setting for advertisers who use external AI tools (ChatGPT, Claude, image generators) and upload the results to Google Ads. Google has stated it will not independently verify self-declarations.",
      },
    ],
    prose: (
      <>
        <p>A search for <em>rezept online einl&ouml;sen</em> &mdash; &ldquo;redeem prescription online&rdquo; in German &mdash; last week. Two sponsored results. Both online pharmacies. Both carrying a line that didn&rsquo;t exist a month ago: <strong>&ldquo;AI disclosure: Ad created or edited with AI.&rdquo;</strong> Not behind the three-dot menu. Sitting between the ad description and the star rating, visible to everyone searching for somewhere to fill their prescription.</p>
        <p>DoktorABC. Shop Apotheke. Between them: over 1.2 million reviews, both rated above 4.7 stars. And both now publicly labeled as AI-created &mdash; in a category where every trust signal an advertiser has built over years sits next to a four-word line about how the copy was written.</p>
        <p>This is interesting not because those pharmacies are doing something unusual. It&rsquo;s interesting because they almost certainly aren&rsquo;t. They&rsquo;re doing what Google has recommended for the past two years: run Performance Max, enable asset generation, let the algorithm find what works. They didn&rsquo;t decide to label their ads as AI-created. Performance Max did it for them.</p>

        <h2>The label in the wild</h2>
        <p>Google officially launched the AI disclosure label on 9 July 2026, rolling it out across Search, YouTube and Discover. The initial framing was fairly modest: a new entry in the ad details panel, visible when someone taps the three-dot menu, showing whether AI was involved in creating the ad.</p>
        <p>What the pharmacy screenshot above shows is something more visible: the label appearing directly in the ad listing without any user interaction. That&rsquo;s a step beyond what Google announced in July. It&rsquo;s also consistent with how Google runs placement experiments &mdash; test a more prominent version, measure the response, decide how far to take it. Consider this a likely preview of where the label ends up by default.</p>
        <p>The regulatory timing is direct. Article 50 of the EU AI Act &mdash; requiring transparency for AI-generated content &mdash; came into force on 2 August 2026. Three weeks later, visible AI labels appear on European SERPs. Google tends to make compliance-adjacent moves ahead of formal enforcement rather than after it.</p>

        <h2>How Performance Max triggered it</h2>
        <p>Most coverage of this frames the AI disclosure as something advertisers opted into by choosing AI tools. For the majority of large Google Ads accounts, the more accurate framing is: they opted into Performance Max, and Performance Max opted into AI.</p>
        <p>The asset generation chain works like this. You provide headlines, descriptions, images and a URL. Google uses them to build ad combinations. What many advertisers haven&rsquo;t fully noticed is that Google also generates <em>additional</em> assets &mdash; new headline variants, different description phrasing &mdash; based on your landing page content, tests them, and serves them without showing them to you for approval first. This feature is called &ldquo;Automatically created assets.&rdquo; It&rsquo;s a separate toggle, on by default in many configurations, that Google describes as generating assets to complement your existing ones.</p>
        <p>If those auto-generated assets ran on your campaigns, the label applies. You provided the inputs. Google wrote the copy. Google is now being transparent about that.</p>
        <p>AI Max for Search goes further: it rewrites the final URL to match search intent, generates keyword combinations beyond your submitted list, and creates ad variations you didn&rsquo;t author. It produces real performance gains in the right accounts. It is also, structurally, AI-created advertising.</p>

        <h2>Three routes to the label</h2>
        <p>Not all disclosed ads got there the same way, and the distinction matters for how you respond.</p>
        <p><strong>Route 1 &mdash; Google&rsquo;s own AI tools.</strong> Auto-created assets, Performance Max asset generation, AI Max for Search. The label is applied automatically. No action required from the advertiser. This is the primary mechanism for most accounts carrying the disclosure &mdash; and the one most advertisers didn&rsquo;t consciously choose.</p>
        <p><strong>Route 2 &mdash; External AI, self-declared.</strong> If you used ChatGPT, Claude, Midjourney or another external AI tool to draft or edit ad copy and then uploaded it to Google Ads, you&rsquo;re supposed to declare this via a new account-level setting. Google has stated explicitly it will not independently verify declarations. This is compliance by trust.</p>
        <p><strong>Route 3 &mdash; Entirely human-written.</strong> Every headline and description written without AI assistance, auto-created assets disabled. No label applies. On large accounts running Performance Max at scale, this position is increasingly uncommon.</p>
        <p>There&rsquo;s an undeclared fourth category &mdash; advertisers who used AI informally, ran copy through a grammar tool, asked an AI for rough ideas they then rewrote, or used AI image tools for a resize &mdash; and have no clear guidance on whether that counts. Google hasn&rsquo;t drawn that line yet.</p>

        <h2>The CTR question</h2>
        <p>Honest answer: there is no meaningful data yet. The visible placement appears to be in test phase, the label is too new, and normal CTR variance makes early signals uninterpretable. Any claim about what the AI disclosure label does to click-through rates right now is inference, not measurement.</p>
        <p>Two outcomes are genuinely plausible &mdash; and both probably true in different contexts. The first: the label blends into visual noise, the way &ldquo;Sponsored&rdquo; has. Once a disclosure becomes universal, it stops being informative. Highly relevant AI-labeled ads will still out-click irrelevant unlabeled ones. When the label is everywhere, no one carries a relative disadvantage from it.</p>
        <p>The second: in categories where trust drives the purchase decision &mdash; healthcare, legal advice, financial services &mdash; &ldquo;AI-created&rdquo; introduces friction at exactly the wrong moment. The pharmacy case is the clearest illustration. Someone deciding where to fill a prescription is making a health decision. &ldquo;AI disclosure: Ad created or edited with AI&rdquo; does something different in that context than it would under an ad for running shoes. Not wrong, necessarily &mdash; but doing work.</p>
        <p>The competitive scenario worth watching is asymmetry. If every competitor on your SERP carries the label, you&rsquo;re all even. If you&rsquo;re the only one who does &mdash; or the only one who doesn&rsquo;t &mdash; that becomes a visible differentiator on a page where users are actively comparing. Monitor your own key queries. General industry data won&rsquo;t tell you what&rsquo;s happening in your specific account.</p>

        <h2>What to do in your account now</h2>
        <p><strong>Find out what you&rsquo;re actually serving.</strong> In Google Ads, go to Assets, then All assets, and filter the Source column. Assets marked &ldquo;Auto-created&rdquo; are the ones Google generated. If those have been running for months without review, this is a reasonable moment to look at them &mdash; not only because of the label, but because running ad copy you&rsquo;ve never approved is its own governance question.</p>
        <p><strong>Check the toggle.</strong> At campaign level, under Settings, you can turn off Automatically created assets. That stops new AI asset generation for that campaign. Existing auto-created assets may continue serving until you review and manage them individually. There is no bulk-remove option.</p>
        <p><strong>Set a CTR baseline now.</strong> Pull the two weeks before the label appeared on your SERPs into your reporting tool. Segment by campaign type, and within Search by query theme &mdash; brand terms, competitor terms, generic intent. When you have four weeks of post-label data, compare. That segmentation is the earliest real signal you&rsquo;ll have on whether your specific account, in your specific category, is seeing any movement worth responding to.</p>
        <p><strong>Don&rsquo;t dismantle proven structure based on unproven risk.</strong> The performance case for AI asset generation is established: more combinations tested, more query intent matched, typically higher reach at the same budget. The performance case against the label has not been made yet. Rebuilding campaign structure under announcement pressure &mdash; without your own data to guide it &mdash; tends to produce worse outcomes than waiting for a signal. If you&rsquo;re in a category with genuine trust concerns, that calculus may shift. Let your CTR data make that call, not the announcement.</p>

        <div className="prose-callout">
          <div className="prose-callout-kicker">The bottom line</div>
          <p>The label is real and it&rsquo;s here. Its commercial effect on your specific accounts isn&rsquo;t established yet. The right response is clean measurement: know exactly which assets are AI-generated and which aren&rsquo;t, build a CTR baseline this week, and make structural changes only when your own data gives you something to act on.</p>
        </div>

        <p>Related: <a href="/blog/performance-max-2026/">Performance Max in 2026 &mdash; the settings we change first</a> &middot; <a href="/blog/performance-max-bidding-change-august-2026/">The August 2026 bidding change &mdash; what to do before it lands</a> &middot; <a href="/services/google-ads/">Our Google Ads management service</a></p>
        <NeedHelp topic="google-ads-ai-label" />
      </>
    ),
  },
  {
    slug: 'what-is-a-geo-audit',
    image: '/og/geo-audit.webp',
    imageAlt: 'crunchjunkie GEO Audit report for pmax.online — AI readiness score 93, showing AI crawler access 100/100, content accessibility 92/100, structured data 76/100 and technical SEO 100/100',
    toc: ['Not an SEO audit', 'What a GEO audit covers', 'The GEO audit checklist', 'Tools', 'How often to run one', 'Frequently asked questions'],
    faqs: [
      { q: 'What is a GEO audit?', a: 'A GEO audit is a structured review of how AI platforms represent your brand — what they say when asked about you, how accurately they describe you, which sources they draw on, and where your brand appears or fails to appear in AI-generated responses.' },
      { q: "What's the difference between a GEO audit and an SEO audit?", a: 'An SEO audit checks whether search engines can find, understand and rank your pages. A GEO audit checks what AI platforms believe about your brand and how accurately they represent it. SEO audits are primarily technical; GEO audits are primarily about authority and representation.' },
      { q: 'How do I conduct a GEO audit?', a: "Run it across five layers: crawlability (can AI bots access your site), content structure (are your key facts quotable), entity coverage (are you a consistent entity across the web), AI representation (what do ChatGPT, Perplexity and Gemini actually say about you), and competitive positioning (where do competitors appear where you don't)." },
      { q: 'What does a GEO audit checklist include?', a: 'A GEO audit checklist covers technical access (robots.txt, structured data, JS-rendering), content citability (definitional paragraphs, specific claims, FAQ content), authority signals (third-party mentions, consistent NAP, schema markup), and AI representation checked across ChatGPT, Perplexity, Claude and Gemini.' },
      { q: 'How often should I run a GEO audit?', a: 'A thorough audit quarterly, a lighter AI representation spot-check monthly. Run one immediately after a rebrand, market expansion or significant content change.' },
      { q: 'What tools do I need for a GEO audit?', a: 'The technical layer can be audited with standard SEO tools (Screaming Frog, Search Console) plus manual checks. The AI representation layer requires running prompts across ChatGPT, Perplexity, Claude and Gemini. For ongoing monitoring, crunchjunkie (crunchjunkie.io) tracks AI citation frequency and brand sentiment automatically.' },
      { q: 'Can I run a GEO audit myself?', a: "Yes. The audit itself can be done without an agency. The challenge is knowing what to look for in the AI representation layer, having a baseline to compare against, and having a programme to act on what you find. The audit is the easy part; the remediation is the work." },
    ],
    prose: (
      <>
        <p>Most brands we talk to have no idea what ChatGPT says about them. Some have never asked. Some have asked once, got a vague answer and moved on. Very few have asked systematically &mdash; across multiple platforms, on multiple days, with different query types &mdash; and documented what they found.</p>
        <p>That systematic process is a GEO audit. It&rsquo;s not a technical checklist. It&rsquo;s a structured investigation into how AI platforms represent your brand and what you can actually do about it.</p>
        <p>We run them at pmax, across sectors including hospitality, real estate, professional services and B2B software. What we find is almost always a surprise &mdash; and rarely reassuring.</p>

        <h2>Not an SEO audit &mdash; a different question</h2>
        <p>SEO audits answer: <em>can search engines find and rank your pages?</em> They cover crawlability, page speed, canonical tags, internal linking. That foundation still matters for GEO &mdash; a page that can&rsquo;t be crawled won&rsquo;t be cited &mdash; but it&rsquo;s a floor, not a ceiling.</p>
        <p>A GEO audit answers a different question: <em>what do AI platforms believe about your brand, and is any of it accurate?</em> You can have a perfectly optimised website and still be invisible in AI search, because AI models don&rsquo;t rank pages. They synthesise responses from sources they judge to be credible and corroborated. If those sources don&rsquo;t include enough that mentions you, you&rsquo;re not in the conversation.</p>
        <p>The gap between SEO and GEO performance can be significant. Brands with strong domain authority sometimes have weak AI citation rates. Brands with smaller websites but genuine third-party coverage sometimes punch well above their SEO weight in AI responses. It&rsquo;s an authority problem, not an optimisation problem.</p>

        <h2>What a GEO audit covers</h2>
        <p>A thorough GEO audit runs across five layers. Most brands have issues in at least two.</p>

        <h3>1. Crawlability and AI access</h3>
        <p>Before anything else: can AI crawlers reach your site? Check <code>robots.txt</code> for blocks on the agents that matter &mdash; <code>GPTBot</code>, <code>ClaudeBot</code>, <code>OAI-SearchBot</code>, <code>Claude-SearchBot</code>, <code>PerplexityBot</code>, <code>Google-Extended</code>.</p>
        <p>The distinction to get right: <em>training crawlers</em> (GPTBot, ClaudeBot, Google-Extended) feed model training datasets. <em>Retrieval bots</em> (OAI-SearchBot, PerplexityBot, Claude-SearchBot) power live citations in real-time answers. Blocking retrieval bots suppresses active citations. For most brands, blocking either type is a mistake &mdash; your content in the training data is how models develop an opinion about you.</p>

        <h3>2. Content structure and citability</h3>
        <p>AI models quote things that are quotable. Vague brand language doesn&rsquo;t get cited, specific factual statements do. &ldquo;We&rsquo;re a leading digital agency&rdquo; is not a sentence any model will repeat. &ldquo;pmax is a performance marketing agency in Calvi&agrave;, Mallorca, founded in 2023&rdquo; is.</p>
        <p>Audit your content for: clear definitional paragraphs describing exactly what you do and for whom; specific claims backed by evidence; FAQ content addressing questions people actually ask; and consistent language that disambiguates your brand. Also check: is critical content JS-rendered? AI crawlers largely don&rsquo;t execute JavaScript. If your key service descriptions live in a React component that needs the browser to render, they may be invisible to every AI crawler.</p>

        <h3>3. Entity coverage</h3>
        <p>An entity is a distinct, identifiable thing that AI models can reason about. Your goal is to become a well-defined entity &mdash; not just a website &mdash; through consistent, corroborated presence across the web.</p>
        <p>Check: structured data (schema.org) on your site &mdash; Organisation, LocalBusiness, Service, Person for founders; consistent NAP (name, address, phone) across directories; mentions in publications your sector trusts. Contradictory information across channels &mdash; different founding years, different service descriptions on different platforms &mdash; confuses entity resolution and introduces hallucination risk.</p>

        <h3>4. AI representation audit</h3>
        <p>The most revealing layer, and the one most brands skip. Open ChatGPT, Perplexity, Claude and Gemini and run a range of prompts:</p>
        <ul>
          <li>Your brand name directly: <em>&ldquo;What is [Brand]?&rdquo;</em></li>
          <li>Category queries: <em>&ldquo;Best [service] in [location]&rdquo;</em></li>
          <li>Competitive comparisons: <em>&ldquo;Compare [Brand] and [Competitor]&rdquo;</em></li>
          <li>Problem-first questions your customers actually ask</li>
        </ul>
        <p>Document everything: whether you appear, how you&rsquo;re described, what facts are cited, where the information comes from, whether competitors appear where you don&rsquo;t. This is your baseline. You&rsquo;ll run it again in three months to measure movement.</p>
        <p>Common findings: wrong founding date; a confused description that mixes your brand with a different company; a competitor appearing in every response where you should appear; or simply no mention at all, on any platform, in any context.</p>
        <p>We&rsquo;ve seen a hotel described as under different ownership. A B2B software company attributed capabilities it doesn&rsquo;t have, sourced from a competitor&rsquo;s press release. A well-known local brand with zero AI presence &mdash; not a single mention across four platforms &mdash; despite ten years in business. The consistency of these findings across categories is what makes a structured audit worthwhile rather than a one-off prompt.</p>

        <h3>5. Competitive positioning</h3>
        <p>Where do competitors appear in responses where you don&rsquo;t? Which sources does the AI draw on when describing your category? Which brands does it compare to you, and how does it characterise the difference?</p>
        <p>This tells you what the AI believes the competitive landscape looks like &mdash; which is sometimes quite different from your own view. It also tells you which content types and third-party sources carry the most weight, and where to direct authority-building effort first.</p>

        <h2>The GEO audit checklist</h2>
        <p>Work through these in order. The technical layer is fastest to fix; the authority layer takes longest; the AI representation layer is where you see results.</p>

        <h3>Technical</h3>
        <ul>
          <li>robots.txt allows key AI retrieval bots: OAI-SearchBot, PerplexityBot, Claude-SearchBot, ChatGPT-User, Claude-User</li>
          <li>No JavaScript dependency for critical content (service descriptions, about page, key facts)</li>
          <li>Structured data present and valid: Organisation or LocalBusiness, Service, FAQPage, Person for founders</li>
          <li>Canonical tags implemented correctly; sitemap submitted and current</li>
        </ul>

        <h3>Content</h3>
        <ul>
          <li>Each core service has at least one clear, quotable definitional paragraph</li>
          <li>Brand description is consistent in name, location, founding year and services across all owned pages</li>
          <li>FAQ content addresses questions people actually ask &mdash; not questions you wish they asked</li>
          <li>Claims are specific and verifiable, not generic (&ldquo;the best&rdquo;, &ldquo;leading&rdquo;, &ldquo;innovative&rdquo;)</li>
        </ul>

        <h3>Authority</h3>
        <ul>
          <li>Brand mentioned in at least three to five reputable third-party sources in the past 12 months</li>
          <li>Consistent business information across Google Business Profile, LinkedIn, industry directories</li>
          <li>Schema markup accurately identifies brand, founder, founding date, location, services</li>
          <li>No contradictory information across owned and third-party channels</li>
        </ul>

        <h3>AI representation</h3>
        <ul>
          <li>Brand appears in AI responses for direct brand name queries</li>
          <li>Brand described accurately: correct founding date, services, location, team</li>
          <li>Brand appears in category queries relevant to the business</li>
          <li>No significant hallucinations or competitor misattributions</li>
          <li>All results documented with date for future comparison</li>
        </ul>

        <h2>Tools</h2>
        <p>Most of the technical layer can be audited with standard SEO tools &mdash; Screaming Frog for crawlability, Search Console for indexing, Google&rsquo;s Rich Results Test for structured data. No specialist tool required for the foundation.</p>
        <p>The AI representation layer has no shortcut. You need to run the prompts yourself, across multiple platforms, on multiple days. AI responses vary by session, location and query phrasing. A single snapshot can mislead.</p>
        <p>For ongoing tracking, we use <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">crunchjunkie</a> &mdash; an AI visibility platform that monitors citation frequency, share of voice across platforms, and brand sentiment in AI-generated responses. It&rsquo;s the closest equivalent to Search Console for AI search. We include it in every <a href="/services/visibility-engineering/">Visibility Engineering</a> retainer we run.</p>

        <h2>How often to run one</h2>
        <p>AI search is not a stable environment. Models update, citation behaviour shifts, new platforms emerge. For most businesses: a thorough GEO audit quarterly, a lighter AI representation spot-check monthly.</p>
        <p>Run one immediately if you&rsquo;ve recently rebranded, expanded into a new market, launched a significant new service, or a competitor has recently made noise. The AI landscape is a snapshot of the web at a point in time. If the web has changed, the snapshot needs updating.</p>

        <div className="prose-callout">
          <span className="prose-callout-kicker">The one thing an audit doesn&rsquo;t do</span>
          <p>An audit tells you what&rsquo;s wrong. It doesn&rsquo;t fix anything by itself. For most brands the bottleneck isn&rsquo;t technical &mdash; it&rsquo;s authority. There isn&rsquo;t enough credible external corroboration of what the brand does and who it serves. Fixing that takes time: digital PR, structured content, consistent entity signals, earned mentions. They compound slowly.</p>
          <p>Which is why a well-run GEO audit should feel slightly uncomfortable. If everything looks fine, you probably haven&rsquo;t looked hard enough.</p>
        </div>

        <NeedHelp topic="geo-audit" />
      </>
    ),
  },

  {
    slug: 'performance-max-bidding-change-august-2026',
    image: '/og/performance-max-bidding-change-august-2026.webp',
    imageAlt: 'Google Ads Bidding Target Optimization timeline — 6 July tool, 17 August change',
    toc: ['The change: Bidding Target Optimization', 'Your six-week window', 'The two betas', 'What we\'re doing before August', 'Common questions'],
    faqs: [
      {
        q: 'When does the Performance Max bidding change take effect?',
        a: '17 August 2026. The Bid Target Adjustment Tool arrives on 6 July, giving a roughly six-week window to set targets deliberately before the change applies automatically.',
      },
      {
        q: 'What is Bidding Target Optimization?',
        a: 'A backend bidding change from Google. Budget-limited campaigns that have been beating their Target CPA or Target ROAS get steered back toward the target you set.',
      },
      {
        q: 'Which campaigns does it affect?',
        a: 'Budget-limited Search, Shopping, Performance Max, Demand Gen, Travel and Display. App, Video reach and Video view are out of scope; Hotel and Display already run this way.',
      },
      {
        q: 'Is it opt-out, or do I have to do anything?',
        a: "No opt-out — it applies automatically on 17 August, and Google will not change your targets or budgets for you. Doing nothing usually means a higher cost per conversion.",
      },
      {
        q: 'Will this increase my cost per conversion?',
        a: 'For campaigns beating target, very likely — unless you lower the target before 17 August. The 6 July tool lets you keep, match, or set a custom target.',
      },
    ],
    prose: (
      <>
        <p>On 15 June <a href="https://support.google.com/google-ads/answer/17061251" target="_blank" rel="noopener noreferrer">Google announced three bidding and budgeting changes</a> in a single post. Two are opt-in betas. The third isn&rsquo;t optional, lands automatically on <strong>17 August</strong>, and for a lot of accounts it means a higher cost per conversion. If you run Performance Max, this is the one to read.</p>
        <p>The short version: campaigns that have been <em>beating</em> their Target CPA or Target ROAS are about to be steered back toward the target you actually set. There&rsquo;s a six-week window to act on your own terms first &mdash; and a tool arriving on <strong>6 July</strong> to help you do it.</p>

        <h2>The change: Bidding Target Optimization</h2>
        <p>Right now, a budget-limited campaign can comfortably over-deliver. Google&rsquo;s own teaching example is a campaign set to a $10 Target CPA that&rsquo;s been bringing conversions in at around $5 &mdash; half the target. After 17 August, that campaign aims to deliver <em>closer to the $10 it was set to</em>, instead of carrying on at $5.</p>
        <p>Same logic on the value side: a campaign set to 300% Target ROAS that&rsquo;s been running closer to 400% gets pulled back toward 300%.</p>
        <p>Three things to be clear about, because this is where accounts get caught out:</p>
        <ul>
          <li><strong>It only touches budget-limited campaigns</strong> &mdash; the ones held back by their daily or total budget, not by their target. If a campaign is constrained by the target itself, it isn&rsquo;t the focus.</li>
          <li><strong>It is automatic. It is not opt-out.</strong> Google has said it won&rsquo;t change your targets or budgets for you. Do nothing and the change still lands &mdash; your over-performing campaigns drift toward stale targets, and for most accounts that means a higher cost per conversion.</li>
          <li><strong>It covers most campaign types</strong> &mdash; Performance Max, Search, Shopping, Demand Gen, Travel and Display. App, Video reach and Video view campaigns are out of scope. Hotel and Display already run this way.</li>
        </ul>
        <p>This is the boring-fundamentals stuff: the change rewards accounts whose targets reflect reality and punishes accounts running on numbers nobody has revisited in months. See our <a href="/blog/performance-max-2026/">Performance Max 2026 setup guide</a> for the structural changes that make targeting easier to maintain.</p>

        <h2>Your six-week window &mdash; and the 6 July tool</h2>
        <p>Between <strong>6 July</strong> and <strong>17 August</strong> is the only stretch where you, not the algorithm, decide what happens.</p>
        <p>On 6 July, Google rolls out a <strong>Bid Target Adjustment Tool</strong>, surfaced through account notifications for anyone who has had budget-limited, target-based campaigns in the past 12 months. It shows your historical performance and gives three choices per campaign:</p>
        <ol>
          <li><strong>Keep your current target</strong> &mdash; and accept the pullback toward it on 17 August.</li>
          <li><strong>Match the target to recent performance</strong> &mdash; formalise the lower cost-per-conversion you&rsquo;ve actually been hitting.</li>
          <li><strong>Set a custom target</strong> of your own.</li>
        </ol>
        <p>The real decision underneath all of it is what we call the <em>intention gap</em>: were your conservative targets deliberate, or just out of date?</p>
        <ul>
          <li>If you set a high Target CPA (or a low Target ROAS) <em>on purpose</em> to keep a campaign scaling hard, that lever is about to weaken. Lower the target before 17 August to keep the volume.</li>
          <li>If the targets simply drifted as performance quietly improved, you can accept the change and watch &mdash; the account self-corrects toward numbers you&rsquo;d probably have set anyway.</li>
        </ul>
        <p>Neither answer is wrong. Not having an answer per campaign is.</p>

        <h2>The two betas worth knowing about</h2>
        <p><strong>Smart Bidding Exploration is now live for Performance Max</strong> &mdash; globally, for PMax campaigns without a product feed. For Shopping and PMax with a feed, it&rsquo;s in beta. The feature lets the algorithm bid on queries with no proven conversion history, inside a ROAS-tolerance range, to surface genuinely new demand. Google reports internal lifts in the high teens; treat that as a vendor number until you&rsquo;ve proved it against a clean baseline in your own account.</p>
        <p><strong>Promotion Mode</strong> is a new beta for Search and Performance Max only (not Shopping or Display at launch). It schedules a temporary loosening of your ROAS tolerance plus extra daily budget across a defined window &mdash; a flash sale, a seasonal spike, a launch. It is not the same thing as seasonality adjustments. Don&rsquo;t treat them as interchangeable.</p>
        <p>One bit of housekeeping: Google also renamed two strategies in June with no change in behaviour. &ldquo;Maximize conversions with a Target CPA&rdquo; is now just <strong>Target CPA</strong>; &ldquo;Maximize conversion value with a Target ROAS&rdquo; is now <strong>Target ROAS</strong>. Cosmetic only &mdash; nothing to action.</p>

        <h2>What we&rsquo;re doing before 17 August</h2>
        <p>This is the sequence we&rsquo;re running on the accounts we manage.</p>
        <ol>
          <li><strong>Before 6 July &mdash; set a baseline.</strong> Pull 90 days of CPA/ROAS for every budget-limited campaign and flag the ones consistently beating target. Those are the campaigns the August change touches.</li>
          <li><strong>Separate intention from drift.</strong> For each flagged campaign, write one line: deliberate scaling lever, or stale target? That single call drives everything else.</li>
          <li><strong>From 6 July &mdash; open the Bid Target Adjustment Tool.</strong> Cross-check Google&rsquo;s view against your own. Don&rsquo;t accept the default &mdash; choose keep / match / custom on purpose.</li>
          <li><strong>Lower targets where scale matters.</strong> For the deliberate-lever campaigns, reset the target before 17 August so the algorithm keeps pushing volume.</li>
          <li><strong>Pilot Smart Bidding Exploration</strong> on one or two PMax campaigns and measure incremental conversions &mdash; don&rsquo;t roll it out account-wide on a reported lift alone.</li>
          <li><strong>Pre-build Promotion Mode windows</strong> for known peaks (summer sale, Q4) so you&rsquo;re not configuring under pressure later.</li>
          <li><strong>Diarise 17 August.</strong> Watch CPA/ROAS and spend for the following one to two weeks and correct anything that moved the wrong way.</li>
        </ol>

        <div className="prose-callout">
          <div className="prose-callout-kicker">The bottom line</div>
          <p>This isn&rsquo;t a feature you switch on. It&rsquo;s a behavioural change that arrives on its own on 17 August, and it quietly favours whoever has kept their targets honest. Walk in with a per-campaign plan and you keep both your efficiency and your scale. Walk in with targets nobody has looked at since spring and you&rsquo;ll likely watch your cost per conversion drift upward.</p>
        </div>

        <p>Related: <a href="/blog/performance-max-2026/">Performance Max in 2026 &mdash; the settings we change first</a> &middot; <a href="/blog/cookieless-tracking/">Cookieless tracking: what changed and what to do</a></p>
        <NeedHelp topic="performance-max-bidding-change-august-2026" />
      </>
    ),
  },

  {
    slug: 'perplexity-visibility',
    toc: ['What is Perplexity visibility?', 'Why Perplexity is its own problem', 'Five moves for this month', 'How pmax can help', 'Frequently asked questions'],
    faqs: [
      {
        q: 'How do I get my business cited by Perplexity?',
        a: 'Make sure PerplexityBot can crawl your site, publish answer-first content that\'s easy to quote, and earn mentions on the third-party sources Perplexity trusts — Wikipedia, established review sites, reputable publications and relevant Reddit threads. Then measure monthly and keep going.',
      },
      {
        q: 'Why doesn\'t my company appear in Perplexity even though it ranks on Google?',
        a: 'Because they\'re different systems. Perplexity favours pages it can fetch live and quote cleanly, and it leans on a narrow set of trusted domains for validation. A page can rank on Google yet still be hard to crawl, hard to quote, or unsupported by the third-party signals Perplexity looks for.',
      },
      {
        q: 'Is Perplexity visibility the same as ChatGPT visibility?',
        a: 'No. The domains each engine cites overlap surprisingly little, so the two need separate baselines and, often, separate tactics. Showing up in one doesn\'t carry over to the other.',
      },
      {
        q: 'How long does Perplexity visibility take?',
        a: 'Technical and structural fixes can show up within weeks because Perplexity re-crawls and re-answers continuously. Building the third-party trust that makes citations reliable typically takes around two to three months of steady work.',
      },
    ],
    prose: (
      <>
        <p>A client said something to us recently that stuck: &ldquo;We finally show up in ChatGPT &mdash; but my co-founder uses Perplexity all day and we&rsquo;re nowhere.&rdquo; That gap is real, and it surprises people. Being recommended by one AI answer engine does almost nothing to guarantee you&rsquo;ll be recommended by the next one.</p>
        <p>This is a short, practical guide &mdash; no jargon, no scaremongering. By the end you&rsquo;ll know what Perplexity visibility is, why it&rsquo;s a separate problem from ChatGPT, and the five things any business can start doing this month to get cited.</p>

        <h2>What is Perplexity visibility?</h2>
        <p>When someone asks Perplexity &ldquo;what&rsquo;s the best digital marketing agency in Mallorca?&rdquo; or &ldquo;compare three solar installers in Spain,&rdquo; it writes an answer and footnotes it with numbered citations &mdash; the specific web pages it pulled from. Perplexity visibility is the practice of making sure your business is one of those cited sources, and ideally one of the names in the answer itself.</p>
        <p>It sits under the same umbrella as generative engine optimisation (GEO), but the mechanics are Perplexity&rsquo;s own. The classic SEO foundations still apply &mdash; they&rsquo;re the floor, not the ceiling.</p>

        <h2>Why Perplexity is its own problem</h2>
        <p>The temptation is to treat &ldquo;AI visibility&rdquo; as one job. It isn&rsquo;t. Perplexity differs from ChatGPT in three ways that change what you actually do:</p>
        <ol>
          <li><strong>It&rsquo;s retrieval-first.</strong> Perplexity runs a live web search for almost every question and builds its answer from what it finds right now, with visible citations. It leans less on what a model &ldquo;remembers&rdquo; and more on what&rsquo;s crawlable, current, and quotable today. Fresh, well-structured pages matter more here than almost anywhere else.</li>
          <li><strong>The overlap with ChatGPT is small.</strong> In our own baselining, and in independent analyses comparing tens of thousands of prompts, the set of domains Perplexity cites barely overlaps with the set ChatGPT cites &mdash; often only around one in ten. You can dominate one and be invisible in the other. That&rsquo;s why &ldquo;we&rsquo;re in ChatGPT&rdquo; tells you nothing about Perplexity.</li>
          <li><strong>Citations carry direct value.</strong> Because Perplexity shows its sources prominently and people click them, a citation isn&rsquo;t a vanity metric &mdash; it&rsquo;s a referral with measurable traffic attached.</li>
        </ol>

        <h2>Five moves for this month</h2>
        <h3>1. Baseline in Perplexity specifically</h3>
        <p>Spend an hour running 20 real buying questions through Perplexity itself &mdash; not ChatGPT, not Gemini. Use the questions a real customer would type: &ldquo;best X in Y for budget Z,&rdquo; &ldquo;compare A and B.&rdquo; Write down which competitors get named and which pages get cited. That list is your starting line, and it will look different from your ChatGPT baseline.</p>
        <h3>2. Let PerplexityBot crawl you</h3>
        <p>Because Perplexity is retrieval-first, a page it can&rsquo;t fetch is a page it can&rsquo;t cite. Check that your <code>robots.txt</code> doesn&rsquo;t block <code>PerplexityBot</code> or <code>Perplexity-User</code>, that key pages return clean 200s, and that your important content isn&rsquo;t locked behind scripts a crawler won&rsquo;t run. This is unglamorous and it&rsquo;s the single most common reason a good page never gets surfaced.</p>
        <h3>3. Write answer-first, in chunks</h3>
        <p>Perplexity lifts content in pieces, so structure for that. Put the direct answer in the first one or two sentences under each heading, before the context. Use short paragraphs, clear lists, and a comparison table where one fits. A page that opens with &ldquo;The three best options are&hellip;&rdquo; is far easier to quote than one that warms up for four paragraphs first.</p>
        <h3>4. Get cited where Perplexity already trusts</h3>
        <p>Perplexity weights a relatively small circle of sources heavily &mdash; Wikipedia and Wikidata for entity facts, established review platforms (G2, Capterra, Trustpilot), reputable industry publications, and notably Reddit, which is one of its most-cited domains. Earning honest mentions in that circle does more for your Perplexity visibility than another page on your own site. PR built on verifiable claims is what wins these.</p>
        <h3>5. Measure monthly</h3>
        <p>Re-run the same 20 prompts every month. Track which answers now name you and which still don&rsquo;t. <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">CrunchJunkie</a> can automate this across engines &mdash; or do it by hand in a spreadsheet. What you don&rsquo;t measure, you can&rsquo;t move.</p>

        <div className="prose-callout">
          <div className="prose-callout-kicker">The honest version</div>
          <p>Perplexity visibility is earned, not hacked. Because the engine is retrieval-first, you sometimes see movement faster than with other platforms once the crawl and structure are fixed &mdash; but a durable presence still takes a couple of months of consistent work on content, structure and third-party trust. Anyone promising you instant citations is selling something.</p>
        </div>

        <h2>How pmax can help</h2>
        <p>We run AI visibility programmes for businesses across Europe, and we treat Perplexity, ChatGPT and Google&rsquo;s AI Overviews as separate surfaces with separate scorecards &mdash; because they are. That means a per-engine audit, the technical groundwork, content and PR, and monthly measurement you can actually read. If you&rsquo;d like a free one-page Perplexity visibility snapshot for your brand, <a href="/contact/?topic=perplexity-audit">tell us a bit about your situation</a> and we&rsquo;ll send it back within a week.</p>

        <h2>Frequently asked questions</h2>
        <h3>How do I get my business cited by Perplexity?</h3>
        <p>Make sure PerplexityBot can crawl your site, publish answer-first content that&rsquo;s easy to quote, and earn mentions on the third-party sources Perplexity trusts &mdash; Wikipedia, established review sites, reputable publications and relevant Reddit threads. Then measure monthly and keep going.</p>
        <h3>Why doesn&rsquo;t my company appear in Perplexity even though it ranks on Google?</h3>
        <p>Because they&rsquo;re different systems. Perplexity favours pages it can fetch live and quote cleanly, and it leans on a narrow set of trusted domains for validation. A page can rank on Google yet still be hard to crawl, hard to quote, or unsupported by the third-party signals Perplexity looks for.</p>
        <h3>Is Perplexity visibility the same as ChatGPT visibility?</h3>
        <p>No. The domains each engine cites overlap surprisingly little, so the two need separate baselines and, often, separate tactics. Showing up in one doesn&rsquo;t carry over to the other.</p>
        <h3>How long does Perplexity visibility take?</h3>
        <p>Technical and structural fixes can show up within weeks because Perplexity re-crawls and re-answers continuously. Building the third-party trust that makes citations reliable typically takes around two to three months of steady work.</p>

        <h2>Further reading</h2>
        <ul>
          <li><a href="/services/ai-visibility/">Our AI visibility service</a> &mdash; what a full programme includes</li>
          <li><a href="/blog/how-to-get-mentioned-by-chatgpt/">How to get your business recommended by ChatGPT</a> &mdash; the companion guide for the other big engine</li>
          <li><a href="/blog/gpt-shopping/">What &ldquo;ChatGPT shopping&rdquo; means for e-commerce in 2026</a></li>
        </ul>
      </>
    ),
  },

  {
    slug: 'how-to-get-mentioned-by-chatgpt',
    toc: ['What is AI search visibility', 'Why it matters now', '5 things to do this month', 'How pmax can help', 'Further reading'],
    prose: (
      <>
        <p>Every week another client asks us the same question: &ldquo;We&rsquo;re seeing fewer clicks from Google. Is it because of ChatGPT?&rdquo; The honest answer is: probably yes, partly. And it&rsquo;s going to keep happening. So instead of fighting it, the smart move is to make sure your business is the one ChatGPT, Perplexity and Gemini actually recommend.</p>
        <p>This is a short, practical guide. No jargon, no scare tactics. By the end you&rsquo;ll know what AI search visibility is, why it matters, and the five things any business &mdash; yours included &mdash; can start doing this month.</p>
        <h2>What is AI search visibility, exactly?</h2>
        <p>When someone asks ChatGPT &ldquo;what&rsquo;s the best digital marketing agency in Mallorca?&rdquo; or asks Perplexity &ldquo;compare three solar installers in Spain&rdquo;, the AI generates an answer that mentions specific businesses by name. Sometimes it links to them. Sometimes it summarises their offering. Sometimes it just recommends them.</p>
        <p>AI search visibility (also called Generative Engine Optimisation, or GEO) is the practice of making sure your business is in that answer.</p>
        <p>It&rsquo;s a new layer on top of classical SEO &mdash; the technical fundamentals are the same &mdash; but it adds work around structured data, content quality, and the trust signals AI models actually weigh when deciding who to mention.</p>
        <h2>Why does it matter now?</h2>
        <p>Three things changed in the last 18 months:</p>
        <ol>
          <li><strong>People use AI to research before they buy.</strong> Research suggests the majority of buyer journeys now pass through at least one AI answer surface before a purchase decision is made.</li>
          <li><strong>AI tools are getting source-honest.</strong> ChatGPT, Perplexity and Gemini now show their sources. So citations have direct, measurable value: they drive clicks, and they shape opinion.</li>
          <li><strong>Google itself is becoming an AI surface.</strong> AI Overviews now appear above the traditional results for most informational queries, and Gemini answers questions inside Gmail and Workspace without anyone visiting a search engine at all.</li>
        </ol>
        <p>If you sell something people research before they buy &mdash; B2B software, professional services, considered consumer purchases &mdash; AI search is already shaping who they consider. The brands that show up in those answers will own the next decade of organic acquisition.</p>
        <h2>Five things to start doing this month</h2>
        <h3>1. Audit where you stand today</h3>
        <p>Spend an hour running 20 questions about your category through ChatGPT, Perplexity and Gemini. Use questions a real buyer would ask: &ldquo;best X in Y for Z budget&rdquo;, &ldquo;compare A and B&rdquo;, &ldquo;what should I look for when buying X&rdquo;. Write down which competitors get mentioned, in what order, with what sentiment. That&rsquo;s your baseline.</p>
        <p>If you&rsquo;re not getting mentioned at all, don&rsquo;t panic. Most businesses aren&rsquo;t. That&rsquo;s the gap we&rsquo;re going to close.</p>
        <h3>2. Make your About page boringly factual</h3>
        <p>AI models cite businesses whose identity they can verify. Your About page should clearly state: what you do, where you&rsquo;re located, who founded the company, when, who runs it now, and who your typical customers are. Plain English, verifiable facts, no marketing fluff. Add a clear FAQ section answering the obvious questions about your business.</p>
        <h3>3. Add the right structured data</h3>
        <p>Schema.org markup is how you tell AI crawlers what each page is. At minimum: an <code>Organization</code> schema sitewide, a <code>Service</code> or <code>Product</code> schema on those pages, and an <code>FAQPage</code> schema on your FAQ. If your business is location-dependent (a hotel, a clinic, a real estate agency), add <code>LocalBusiness</code> with full address and geo coordinates.</p>
        <p>None of this is new. SEO professionals have done it for a decade. But many sites still don&rsquo;t, and the ones that do show up disproportionately in AI answers.</p>
        <h3>4. Get cited in places AI trusts</h3>
        <p>Large language models trust sources their training data trusts. That usually means: Wikipedia (if you&rsquo;re large enough to merit a page), trade publications, established review sites in your category (G2, Capterra, Trustpilot, Tripadvisor depending on your industry), and high-authority news mentions. PR built around verifiable claims and expert commentary tends to win those mentions.</p>
        <p>Beware: AI models penalise sources that read as promotional. The phrase &ldquo;sponsored content&rdquo; in your bylines does more harm than good.</p>
        <h3>5. Measure monthly</h3>
        <p>Re-run those same 20 prompts every month. Track which mentions appear, in what context, with what sentiment. <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">CrunchJunkie</a> can automate this &mdash; or you can do it manually for a few hours a month. Either way: if you don&rsquo;t measure it, you can&rsquo;t improve it.</p>
        <div className="prose-callout">
          <div className="prose-callout-kicker">The honest version</div>
          <p>AI search visibility isn&rsquo;t a hack. It&rsquo;s earned. Most businesses will see their first reliable citations in 8&ndash;12 weeks of disciplined work. Anyone promising you faster than that is selling you a story &mdash; or doing something that&rsquo;ll get you delisted later.</p>
        </div>
        <h2>What pmax can do, if you want help</h2>
        <p>We run AI visibility programmes for businesses across Europe &mdash; the full audit, the technical foundations, the content and PR support, and the monthly measurement. If you&rsquo;d like a free one-page audit of where your business stands in ChatGPT, Perplexity and Gemini today, <a href="/contact/?topic=ai-audit">tell us a bit about you</a> and we&rsquo;ll send it back within a week.</p>
        <h2>Further reading</h2>
        <ul>
          <li><a href="/services/ai-visibility/">Our AI visibility service page</a> &mdash; what&rsquo;s actually inside a programme</li>
          <li><a href="/blog/perplexity-visibility/">How to improve your Perplexity visibility</a> &mdash; Perplexity is retrieval-first and needs its own tactics</li>
          <li><a href="/blog/gpt-shopping/">What &ldquo;ChatGPT shopping&rdquo; means for e-commerce in 2026</a></li>
          <li><a href="/blog/tracking-setup-guide/">A no-jargon guide to setting up tracking properly</a></li>
        </ul>
      </>
    ),
  },

  {
    slug: 'performance-max-2026',
    toc: ['Brand exclusions are now table stakes', 'Campaign-level value rules', 'Asset group structure', 'Search themes', 'Profit-based tROAS targets', 'Listing groups for catalogue control', 'First-party audience signals'],
    prose: (
      <>
        <p>Performance Max started as a black box. In 2026, it is a slightly-less-black box with a lot more steering wheels. Here is what we actually change first.</p>
        <h2>Brand exclusions are now table stakes</h2>
        <p>The single biggest change since launch: you can finally exclude brand search terms from PMax. Use it. Set up a brand exclusion list on day one of every PMax campaign and route brand traffic to a properly-managed Search campaign with manual control. We see clients save 15&ndash;25% of their PMax budget within the first month just from this.</p>
        <h2>Campaign-level value rules</h2>
        <p>Value rules let you tell PMax that a customer in Germany is worth 1.3x what a customer in Italy is worth &mdash; or that a returning customer is worth 0.6x what a new customer is. Combined with first-party data segments, this is the most under-used lever in the platform.</p>
        <h2>Asset group structure</h2>
        <p>Do not put your whole catalogue in one asset group. Split by margin tier or product category &mdash; each group gets its own creative, its own audience signal, its own tROAS target. This alone usually moves blended ROAS 20&ndash;30%.</p>
        <h2>Search themes</h2>
        <p>Use them, but sparingly. PMax tends to over-trust search themes and waste budget on adjacent queries. Set themes only for clearly under-served queries you can prove are not being served by your existing Search campaigns.</p>
        <h2>Profit-based tROAS targets</h2>
        <p>Setting tROAS based on revenue is a category error. Calculate it on gross profit margin, feed gross profit values as your conversion value, and watch the algorithm finally chase the customers you actually want.</p>
        <h2>Listing groups for catalogue control</h2>
        <p>Listing groups in PMax let you control which products get prioritised. We use them to push high-margin, low-stock, seasonal products at specific times &mdash; a small lever, big impact on profit when used well.</p>
        <h2>First-party audience signals</h2>
        <p>Upload your customer match list, your high-LTV cohort, your recent purchaser segment. PMax does not use these as targeting &mdash; but it uses them as a strong signal for the algorithm. The lift is real.</p>
        <p>Related: <a href="/services/google-ads/">our Google Ads &amp; Performance Max service</a> &mdash; and how PMax fits into the wider <a href="/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/">Google vs Meta vs TikTok channel mix</a>. Also see the <a href="/blog/performance-max-bidding-change-august-2026/">August 2026 bidding change</a> &mdash; what to do before 17 August.</p>
        <NeedHelp topic="performance-max-2026" />
      </>
    ),
  },

  {
    slug: 'tracking-setup-guide',
    toc: ['Why dashboards lie', 'Server-side tagging', 'Consent Mode v2', 'Enhanced conversions', 'Offline conversion imports', 'Reconciliation'],
    prose: (
      <>
        <p>If you cannot trust your marketing data, you cannot make decisions with it. Here is a plain-English guide to building tracking that does not lie.</p>
        <h2>Why dashboards lie</h2>
        <p>Marketing tracking has three big enemies in 2026: iOS privacy restrictions, cookie consent, and the gap between when an ad is clicked and when revenue actually happens. The default tracking setup most websites have was designed for 2018. It does not work now.</p>
        <h2>Server-side tagging</h2>
        <p>Stop sending data directly from the user&rsquo;s browser to Google, Meta and the rest. Set up a server-side Google Tag Manager container &mdash; usually on a subdomain like <code>track.yourdomain.com</code> &mdash; and route everything through it. Performance improves, privacy improves, data quality improves.</p>
        <h2>Consent Mode v2</h2>
        <p>If you operate in the EU and you have not implemented Consent Mode v2, your Google Ads data is materially worse than it needs to be. Consent Mode lets Google fill in modelled conversions for users who do not consent &mdash; recovering 30&ndash;50% of the data you are losing.</p>
        <h2>Enhanced conversions</h2>
        <p>Pass hashed email addresses (with consent) to Google and Meta&rsquo;s <a href="/services/analytics/">conversion APIs</a>. This single change typically improves measured conversion volume by 15&ndash;25% in iOS-heavy categories.</p>
        <h2>Offline conversion imports</h2>
        <p>If you have a sales cycle longer than a week, you need offline conversion imports. Hook your CRM to Google Ads and Meta&rsquo;s offline events APIs and feed back actual closed-won revenue. The platforms will start optimising for the right humans.</p>
        <h2>Reconciliation</h2>
        <p>Once a month, compare your ad-platform reported revenue against your actual ledger. Aim for under 15% discrepancy. Anything more means something in the chain is broken.</p>
        <p>Related: <a href="/blog/cookieless-tracking/">cookieless tracking in 2026</a> &mdash; and <a href="/blog/crm-conversion-imports/">using CRM data to feed better offline conversions</a>.</p>
        <NeedHelp topic="tracking-setup-guide" />
      </>
    ),
  },

  {
    slug: 'meta-creative-volume',
    toc: ['The volume problem', 'Template the brand, not the asset', 'Hooks, hooks, hooks', 'UGC at scale', 'Performance creative briefing', 'Cull weekly, scale monthly'],
    prose: (
      <>
        <p><a href="https://www.facebook.com/business/news/insights/high-quality-creative-increases-ad-roi" target="_blank" rel="noopener noreferrer">Meta&rsquo;s own research</a> says creative is the single biggest driver of paid social performance. Most brands&rsquo; creative pipelines were built for a world where it was not. Here is how to build one that fits 2026.</p>
        <h2>The volume problem</h2>
        <p>Meta&rsquo;s creative library now needs 10&ndash;20 fresh assets a week to keep performance stable. Most brands ship 2&ndash;3. The gap shows up as rising frequency, falling CTR, and a CPM that drifts up every quarter.</p>
        <h2>Template the brand, not the asset</h2>
        <p>Build a tightly-templated brand system &mdash; fonts, colours, motion primitives, layouts &mdash; and then let creators work fast within it. The brand is enforced by the template; the creators bring the ideas. This is how you ship 15 assets a week without 15 brand reviews.</p>
        <h2>Hooks, hooks, hooks</h2>
        <p>The first three seconds of every video are the only ones that matter. We A/B test hooks more than anything else &mdash; same body, six different opening seconds. The winning hook is reused across the next week&rsquo;s creative.</p>
        <h2>UGC at scale</h2>
        <p>Run a small, ongoing <a href="/services/creative/">creator programme</a> &mdash; 5&ndash;10 creators on retainer, briefed weekly. Cheaper than agency creative, faster than internal creative, and Meta&rsquo;s algorithm tends to prefer it. Quality control is the only hard part.</p>
        <h2>Performance creative briefing</h2>
        <p>Briefs go from your media team to your creative team, not the other way around. The brief contains: which ad set this is for, what the hook should test, what the proof point is, what the CTA needs to drive. Brand input comes in after.</p>
        <h2>Cull weekly, scale monthly</h2>
        <p>Every Friday, kill anything below threshold performance. Once a month, identify the top three creative patterns and brief out next month&rsquo;s creative around them. Compound the learnings.</p>
        <p>Related: <a href="/blog/creative-testing-framework/">how to structure creative tests so the learnings actually compound</a>, our <a href="/services/paid-social/">paid social service</a> &mdash; and <a href="/blog/pinterest-ads-home-interiors-local-2026/">when Pinterest Ads are worth adding to the mix</a>.</p>
        <NeedHelp topic="meta-creative-volume" />
      </>
    ),
  },

  {
    slug: 'google-ads-mallorca',
    toc: ['The default geo settings are wrong', 'Language settings cut both ways', 'Local conversion tracking', 'Bidding for tourist seasonality', 'Local-pack and Maps'],
    prose: (
      <>
        <p>Running ads from Mallorca is different. Your customers Google in five languages, your competitors are based in Madrid, and Google&rsquo;s default geo-targeting is wrong for you. Here is what to fix.</p>
        <h2>The default geo settings are wrong</h2>
        <p>Google Ads ships with &ldquo;Presence or interest&rdquo; as the default location setting. For local Mallorca businesses, this means showing ads to anyone in Spain who has ever shown &ldquo;interest&rdquo; in Mallorca &mdash; which is millions of people who will never become customers. Switch to &ldquo;Presence only&rdquo; on day one.</p>
        <h2>Language settings cut both ways</h2>
        <p>Mallorca customers Google in Spanish, Catalan, German and English &mdash; sometimes all four in a single search session. Do not pick one language. Build separate campaigns per language, with translated keywords, translated ads, and translated landing pages. Auto-translate copies cost you 30&ndash;40% of performance.</p>
        <h2>Local conversion tracking</h2>
        <p>For physical-location businesses (restaurants, agencies, clinics), call tracking and in-person visit tracking matter more than form fills. Set them up. Google&rsquo;s &ldquo;Store visits&rdquo; conversion is free and underused.</p>
        <h2>Bidding for tourist seasonality</h2>
        <p>50% of Mallorca&rsquo;s commercial searches happen between April and September. Do not run flat bids year-round. Build day-parted, season-parted bidding strategies that match the actual demand curve.</p>
        <h2>Local-pack and Maps</h2>
        <p>If you are a service business, your Google Business Profile drives more revenue than your ads do. Optimise it properly: photos updated monthly, reviews requested every quarter, services properly categorised. The work compounds.</p>
        <p>See our <a href="/services/google-ads/">Google Ads &amp; Performance Max service</a> &mdash; built for Mallorca&rsquo;s multilingual, seasonal demand. Running campaigns across Spain more broadly? See our <a href="/google-ads-agency-spain/">Google Ads agency in Spain</a> page. Want paid search, SEO and paid social under one retainer? See our <a href="/marketing-agency-mallorca/">marketing agency in Mallorca</a> overview.</p>
        <NeedHelp topic="google-ads-mallorca" />
      </>
    ),
  },

  {
    slug: 'shopify-seo-2026',
    toc: ['Collection-page meta data', 'Faceted navigation', 'Product schema', 'Image alt text', 'Site speed', 'Blog content that actually ranks', 'Internal linking from collection pages', 'Hreflang for multilingual stores'],
    prose: (
      <>
        <p>Shopify is a great commerce platform with mediocre SEO defaults. Eight specific fixes that, in our experience, move organic traffic more than the rest combined.</p>
        <h2>Collection-page meta data</h2>
        <p>Shopify&rsquo;s default collection page meta titles are usually just the collection name. Bad. Rewrite every collection meta title to follow the pattern <code>{'{Collection name} | {USP} | {Brand}'}</code> &mdash; and write a real meta description, not a truncated description tag.</p>
        <h2>Faceted navigation</h2>
        <p>If your collections have filters (size, colour, price), the default Shopify setup generates infinite duplicate URLs that dilute crawl budget and confuse Google. Use canonical tags aggressively and noindex filter URLs that do not add SEO value.</p>
        <h2>Product schema</h2>
        <p>Most Shopify themes ship Product schema, but it is usually incomplete. Add aggregateRating, review count, brand, GTIN, condition, and availability fields to every product. AI shopping interfaces in particular weigh these heavily.</p>
        <h2>Image alt text</h2>
        <p>The single most-skipped thing on Shopify. Every product image should have descriptive alt text that includes the product name and a relevant attribute. Use Shopify&rsquo;s bulk editor &mdash; an hour&rsquo;s work, lasting SEO impact.</p>
        <h2>Site speed</h2>
        <p>Shopify themes have grown bloated. Run Lighthouse, identify the heaviest 3&ndash;5 apps and remove them. Use Shopify&rsquo;s native sections instead of app-based ones wherever possible. Aim for an LCP under 2.5 seconds on mobile.</p>
        <h2>Blog content that actually ranks</h2>
        <p>Do not use Shopify&rsquo;s blog for press releases. Build category-defining content &mdash; buyer guides, comparison content, expert how-tos &mdash; that links to relevant product collections. This is where Shopify SEO compounds.</p>
        <h2>Internal linking from collection pages</h2>
        <p>Add genuine editorial copy at the top of each collection page (300&ndash;500 words), and link from it to related collections. Most Shopify themes hide this &mdash; find the section, enable it, write real content.</p>
        <h2>Hreflang for multilingual stores</h2>
        <p>If you sell in multiple languages, get hreflang right. Shopify Markets handles this if configured correctly, but the defaults are usually wrong. Audit every market for proper hreflang tags.</p>
        <p>Related: our <a href="/seo-company-mallorca/">SEO service</a>, our <a href="/industries/ecommerce/">e-commerce marketing playbook</a> &mdash; and <a href="/blog/how-to-get-mentioned-by-chatgpt/">how to get mentioned by ChatGPT and Perplexity</a> (the structured data work here compounds into AI citations).</p>
        <NeedHelp topic="shopify-seo-2026" />
      </>
    ),
  },

  {
    slug: 'hotel-direct-bookings',
    toc: ['The starting point', 'The four-week diagnosis', 'The booking flow rebuild', 'The paid media shift', 'The numbers'],
    prose: (
      <>
        <p>Most independent hotels lose 17&ndash;22% of revenue to OTA commissions. Here is a real story of one Mallorca hotel that took most of that back in under three months.</p>
        <h2>The starting point</h2>
        <p>Mar y Roca is a 34-room boutique hotel in Port d&rsquo;Andratx. In 2024, 78% of their bookings came through Booking.com and Expedia &mdash; at an average 18% commission. Direct bookings were stuck at around 22%, despite the website looking modern enough.</p>
        <h2>The four-week diagnosis</h2>
        <p>The website looked modern but converted badly: a five-step booking flow, no rate-parity, slow on mobile, and a hero gallery that did not match what the hotel actually felt like. The Meta and Google ads were generic and did not mention price advantages over OTAs.</p>
        <h2>The booking flow rebuild</h2>
        <p>Five steps became three. Mobile-first. A clear &ldquo;Best rate guaranteed &mdash; book direct and save &euro;X&rdquo; message, tied to live OTA rate scraping so the saving was always real. Conversion rate from booking-engine entry to confirmed booking went from 2.1% to 8.4%.</p>
        <h2>The paid media shift</h2>
        <p><a href="/services/paid-social/">Meta</a> and <a href="/services/google-ads/">Google Hotel Ads</a>. The Meta creative focused on the rooms and views the hotel was actually known for, not generic travel imagery. Google Hotel Ads were bid aggressively only on date ranges where the hotel had availability &mdash; saving budget the rest of the year.</p>
        <h2>The numbers</h2>
        <p>11 weeks in, direct bookings had grown 52% and total bookings had grown 11% (so the direct shift was new revenue, not stolen from OTAs). At ~&euro;350,000 in monthly direct revenue versus the previous run-rate, the annual OTA commission saved was about &euro;184,000.</p>
        <p>We used <a href="/services/conversion-design/">conversion design (CRO)</a>, <a href="/services/google-ads/">Google Ads</a> and <a href="/services/paid-social/">Meta Ads</a> to get there. More in our <a href="/industries/hospitality/">hospitality marketing playbook</a> and <a href="/cases/">client cases</a>. Based in Mallorca and want the full package? See our <a href="/marketing-agency-mallorca/">marketing agency in Mallorca</a> page.</p>
        <NeedHelp topic="hotel-direct-bookings" />
      </>
    ),
  },

  {
    slug: 'b2b-linkedin-playbook',
    toc: ['Audience design', 'Three campaign objectives, three audiences', 'Thought Leader Ads are underused', 'Document Ads for the consideration stage', 'Conversation Ads for high-intent', 'CRM-fed offline conversions', 'Lead scoring before the platform sees the lead'],
    prose: (
      <>
        <p>LinkedIn is the most expensive ad platform on a CPM basis &mdash; and the cheapest place to find a B2B buyer when run properly. Here is the playbook we deploy on day one of every B2B SaaS retainer.</p>
        <h2>Audience design &mdash; first principles</h2>
        <p>&ldquo;Senior decision-makers in [industry]&rdquo; is not an audience. It is a job description. Build audiences from actual customer LTV data: who closes, who stays, who upgrades. Then build LinkedIn audiences that match those patterns &mdash; job function + seniority + company size + tech stack + geography.</p>
        <h2>Three campaign objectives, three audiences</h2>
        <p>One awareness campaign, one consideration campaign, one conversion campaign. Each gets a different audience size, a different creative format, a different bidding strategy. Do not collapse them into one &mdash; LinkedIn&rsquo;s algorithm needs the separation.</p>
        <h2>Thought Leader Ads are underused</h2>
        <p>If you have a founder or senior leader willing to post on LinkedIn, Thought Leader Ads (where you promote their organic post as a paid ad) outperform brand-account ads by 2&ndash;3x on engagement. Use them.</p>
        <h2>Document Ads for the consideration stage</h2>
        <p>A genuine industry report or guide, delivered as a Document Ad, is the best mid-funnel asset LinkedIn has ever shipped. Brief once, run for six months, watch leads compound.</p>
        <h2>Conversation Ads for high-intent</h2>
        <p>For events, demos and ABM, Conversation Ads (in LinkedIn Messaging) routinely cost 40&ndash;60% less per qualified meeting than form fills. They work best when written like a real person reaching out &mdash; not like a marketing email.</p>
        <h2>CRM-fed offline conversions</h2>
        <p>The biggest unlock. Wire LinkedIn&rsquo;s offline conversion API to your CRM. Pass back MQL, SQL, opportunity created, and closed-won events with their values. LinkedIn&rsquo;s algorithm starts optimising for actual revenue.</p>
        <h2>Lead scoring before the platform sees the lead</h2>
        <p>Use a tool like Clearbit / 6sense / your own enrichment to score leads before they fire as conversions in LinkedIn. Only fire &ldquo;qualified lead&rdquo; conversions for leads worth pursuing. The platform&rsquo;s algorithm gets dramatically more accurate.</p>
        <p>Related: our <a href="/services/paid-social/">paid social service</a> (LinkedIn, Meta, TikTok), our <a href="/industries/hr/">HR &amp; recruiting marketing playbook</a> &mdash; and <a href="/blog/crm-conversion-imports/">using CRM offline conversions to make the algorithm smarter</a>.</p>
        <NeedHelp topic="b2b-linkedin-playbook" />
      </>
    ),
  },

  {
    slug: 'cookieless-tracking',
    toc: ['What actually changed', 'Server-side tagging', 'Consent Mode v2', 'Conversion APIs', 'First-party data strategy', 'Modelled conversions'],
    prose: (
      <>
        <p>Third-party cookies are functionally dead. Apple killed them on iOS five years ago, Chrome is finishing the job now. Here is how to track conversions in 2026 without breaking the law or losing all your data.</p>
        <h2>What actually changed</h2>
        <p>Apple ITP, Chrome&rsquo;s Privacy Sandbox, and the GDPR/ePrivacy enforcement push have collectively reduced the lifespan of a tracking cookie from ~2 years to ~7 days on most browsers. The implication: any conversion that happens more than a week after the click is invisible to default tracking.</p>
        <h2>Server-side tagging</h2>
        <p>Move your tag manager off the user&rsquo;s browser and onto your own server. This restores cookie lifetime to whatever your domain allows (usually 30&ndash;90+ days), improves site speed, and gives you a privacy-respecting way to pass first-party data to ad platforms.</p>
        <h2>Consent Mode v2</h2>
        <p>Google&rsquo;s Consent Mode v2 lets you tell Google whether the user consented to ad and analytics cookies. If they did not, Google still receives &ldquo;consentless pings&rdquo; &mdash; anonymised signals it uses to model the conversion. Properly implemented, you recover 30&ndash;50% of the data you would otherwise lose.</p>
        <h2>Conversion APIs</h2>
        <p>Meta CAPI, TikTok Events API, LinkedIn Conversions API, <a href="/services/analytics/">Google Enhanced Conversions</a>. All of them let you send hashed first-party data from your server to the platform. All of them improve data quality. All of them are underused.</p>
        <h2>First-party data strategy</h2>
        <p>If you do not have a first-party data strategy, build one. Email captures, account creation, loyalty programmes, gated content &mdash; whatever fits your business. First-party data is now the foundation everything else depends on.</p>
        <h2>Modelled conversions</h2>
        <p>Expect 20&ndash;40% of your conversion data in 2026 to be modelled (statistically estimated) rather than directly observed. This is normal, and not a problem if the model is well-fed. It is a problem if you are trying to do precise day-on-day attribution &mdash; accept that those days are gone.</p>
        <p>Related: <a href="/blog/tracking-setup-guide/">setting up tracking that doesn&rsquo;t lie</a> &mdash; and our <a href="/services/analytics/">analytics &amp; tracking service</a>.</p>
        <NeedHelp topic="cookieless-tracking" />
      </>
    ),
  },

  {
    slug: 'real-estate-lead-gen',
    toc: ['The motivated-buyer problem', 'Multi-step beats single-step', 'Ask the easy questions first', 'Show progress', 'Pre-qualification reduces noise', 'Mobile keyboard hygiene'],
    prose: (
      <>
        <p>Real estate is one of the highest-intent search categories on the internet. So why do most agency websites convert below 1%? Usually, the form.</p>
        <h2>The motivated-buyer problem</h2>
        <p>A user who lands on a real estate agency&rsquo;s &ldquo;Free valuation&rdquo; page is high-intent. They have already decided they might want to sell. The form is the only thing standing between you and a qualified lead &mdash; and most forms are designed in a way that loses those people.</p>
        <h2>Multi-step beats single-step</h2>
        <p>An 8-field form on a single page converts at around 1.5%. The same 8 fields spread across 3 logical steps converts at 6&ndash;10%. Every step is a small commitment; once a user has answered the first question, they are more likely to finish.</p>
        <h2>Ask the easy questions first</h2>
        <p>&ldquo;What is the property type?&rdquo; before &ldquo;What is your email address?&rdquo;. The user is filling in <em>their</em> information last, after they have already invested effort. Reverse this and you will see conversion rates collapse.</p>
        <h2>Show progress</h2>
        <p>A progress bar at the top of the form (&ldquo;Step 2 of 4&rdquo;) materially improves completion. People are more willing to finish what they have started.</p>
        <h2>Pre-qualification reduces noise</h2>
        <p>Use the form to pre-qualify: budget range, timeline to sell, current property type. The 30% drop in leads is worth it &mdash; the 70% that finish are dramatically more useful to your agents.</p>
        <h2>Mobile keyboard hygiene</h2>
        <p>Email fields should trigger email keyboards. Phone fields should trigger numeric keyboards. Do not make a mobile user switch keyboards three times to fill in your form.</p>
        <p>This is core to our <a href="/services/conversion-design/">conversion design (CRO) service</a>. More in our <a href="/industries/real-estate/">real estate marketing playbook</a>.</p>
        <NeedHelp topic="real-estate-lead-gen" />
      </>
    ),
  },

  {
    slug: 'tiktok-organic-paid',
    toc: ['The content patterns that earn impressions', 'Spark Ads, not boosted posts', 'Creator-led, not brand-led', 'The compounding loop'],
    prose: (
      <>
        <p>TikTok is no longer a &ldquo;should we be there&rdquo; channel for most brands. It is a &ldquo;how do we be there efficiently&rdquo; one. Here is what is working in 2026.</p>
        <h2>The content patterns that earn impressions</h2>
        <p>Three patterns dominate organic in 2026: <strong>behind-the-scenes process</strong> (people watching things get made), <strong>founder-on-camera</strong> (genuine, unscripted, low-production), and <strong>product-in-context</strong> (showing how the product fits a real life, not a perfect one). Almost everything else underperforms.</p>
        <h2>Spark Ads, not boosted posts</h2>
        <p>Use Spark Ads to promote organic content that has already earned engagement. Do not boost posts &mdash; Spark Ads carry the full social proof of the original organic engagement, which makes them work dramatically better.</p>
        <h2>Creator-led, not brand-led</h2>
        <p>Most brand-account creative on TikTok dies. Get creators making content for you, get them on usage rights, and run those creatives as Spark Ads. The lift over brand-account creative is usually 3&ndash;5x.</p>
        <h2>The compounding loop</h2>
        <p>Identify your top 3 organic videos every month. Spark Ad them. Use the learnings to brief next month&rsquo;s creator content. Repeat. The brands that crack TikTok compound this loop month after month.</p>
        <p>Related: our <a href="/services/paid-social/">paid social service</a> and <a href="/services/creative/">creative production</a>, our <a href="/industries/ecommerce/">e-commerce marketing playbook</a>, <a href="/blog/meta-creative-volume/">how to build a creative pipeline for Meta</a> (the principles are identical on TikTok) &mdash; and <a href="/blog/pinterest-ads-home-interiors-local-2026/">who Pinterest Ads work for</a> if visual planning is in your mix.</p>
        <NeedHelp topic="tiktok-organic-paid" />
      </>
    ),
  },

  {
    slug: 'crm-conversion-imports',
    toc: ['The form-fill trap', 'Offline conversions, explained', 'Implementation', 'What changes', 'Common pitfalls'],
    prose: (
      <>
        <p>B2B marketing teams optimise for what they can measure. What they can measure is usually form fills. This is why so many B2B ad accounts produce hundreds of MQLs and no revenue.</p>
        <h2>The form-fill trap</h2>
        <p>If you optimise an ad platform for &ldquo;form fill&rdquo; conversions, it will find you the cheapest possible form fills. That usually means: the lowest-intent users, the smallest companies, the wrong job titles. Form fill volume goes up, pipeline value goes down. The ad platform is doing its job correctly &mdash; you are telling it the wrong job.</p>
        <h2>Offline conversions, explained</h2>
        <p>Every major ad platform now lets you import offline events: MQLs, SQLs, opportunity created, closed-won. Each event can have a value attached. The platform stops optimising for form fills and starts optimising for events that actually correlate with revenue.</p>
        <h2>Implementation</h2>
        <p>Three pieces: a click ID captured on form submission (gclid for Google, fbclid for Meta, li_fat_id for LinkedIn), a CRM field that stores it, and a daily export from CRM to ad platform with the click ID, event name and value.</p>
        <h2>What changes</h2>
        <p>Within 2&ndash;3 weeks of implementing offline conversions properly, most B2B accounts see: 30&ndash;50% lower MQL volume, but 2&ndash;3x more SQLs and dramatically higher pipeline values. The same ad spend, dramatically better business outcome.</p>
        <h2>Common pitfalls</h2>
        <p>Make sure the values you are passing back are economically meaningful. A &ldquo;closed-won&rdquo; event should carry the actual contract value, not a fixed &euro;100 placeholder. The platform optimises against the values you give it &mdash; bad values means bad optimisation.</p>
        <p>Related: <a href="/blog/tracking-setup-guide/">the full tracking setup guide</a> and our <a href="/services/analytics/">analytics &amp; tracking service</a>.</p>
        <NeedHelp topic="crm-conversion-imports" />
      </>
    ),
  },

  {
    slug: 'solar-marketing-spain',
    toc: ['The Meta problem', 'Pre-qualify on the landing page', 'Region-specific incentives', 'Long-cycle attribution', 'Google Ads is usually the higher-intent channel'],
    prose: (
      <>
        <p>Spain is one of the best solar markets in Europe &mdash; and one of the most competitive. Here is why most solar installers struggle on paid media, and what the ones that thrive are doing.</p>
        <h2>The Meta problem</h2>
        <p>Solar leads from Meta come cheap. They also come unqualified. The default solar Meta funnel &mdash; &ldquo;Get a free solar quote&rdquo; &rarr; form fill &rarr; call from sales team &mdash; wastes 70&ndash;80% of the sales team&rsquo;s time on people who were never going to buy.</p>
        <h2>Pre-qualify on the landing page</h2>
        <p>Add a 3-question quiz before the form: roof type, monthly electricity bill, ownership status. The user who finishes this is 4&ndash;5x more likely to buy. The user who does not finish saves your sales team a call.</p>
        <h2>Region-specific incentives</h2>
        <p>Spanish solar incentives differ by region &mdash; Andaluc&iacute;a, Catalu&ntilde;a, Madrid all have different schemes. Generic national landing pages waste budget. Build regional landing pages that lead with the specific incentive that applies.</p>
        <h2>Long-cycle attribution</h2>
        <p>The average Spanish solar install takes 4&ndash;6 months from first ad click to signed contract. If you are optimising for first-touch attribution, you are optimising for the wrong customers. Wire CRM-fed offline conversions and let the algorithm learn from actual installs.</p>
        <h2>Google Ads is usually the higher-intent channel</h2>
        <p>For solar, <a href="/services/google-ads/">Google Ads</a> captures higher-intent than <a href="/services/paid-social/">Meta</a>. Budget weighting most installers run (60% Meta, 40% Google) is usually backwards. Test the inverse.</p>
        <p>More in our <a href="/industries/renewables/">renewables &amp; cleantech marketing playbook</a>. For Spain-specific paid search strategy, see our <a href="/google-ads-agency-spain/">Google Ads agency in Spain</a> page.</p>
        <NeedHelp topic="solar-marketing-spain" />
      </>
    ),
  },

  {
    slug: 'creative-testing-framework',
    toc: ['Isolate one variable at a time', 'Hooks are the highest-leverage variable', 'Build a winner template', 'Statistical significance is a real thing', 'Cross-platform learnings'],
    prose: (
      <>
        <p>Most &ldquo;creative testing&rdquo; frameworks are just &ldquo;launch lots of stuff and see what works&rdquo;. That is not a framework &mdash; it is gambling. Here is how to test creative so the learnings compound.</p>
        <h2>Isolate one variable at a time</h2>
        <p>If you change the hook, the visual and the offer in the same test, you have learned nothing about which one moved the needle. Hold everything constant except the one variable you are testing. Slower, but the learnings are real.</p>
        <h2>Hooks are the highest-leverage variable</h2>
        <p>The first three seconds of a video, or the first headline of a static, determine 80% of performance. Test hooks more than anything else.</p>
        <h2>Build a winner template</h2>
        <p>When you find a winning hook + format combination, document it. Build the next month&rsquo;s creative around variations of that template. The library of winning patterns is the real asset.</p>
        <h2>Statistical significance is a real thing</h2>
        <p>Do not kill creative after a day. Do not scale winners after a day either. Wait for at least 200 conversions per variant before declaring a winner. Most creative tests are killed too early.</p>
        <h2>Cross-platform learnings</h2>
        <p>A hook that works on TikTok usually works on Meta. A visual that works on Meta usually works on Instagram. Test on the cheapest platform, deploy on the others.</p>
        <p>See our <a href="/services/creative/">creative production service</a> for the weekly cadence that makes this possible &mdash; and <a href="/blog/meta-creative-volume/">how to build a sustainable Meta creative pipeline</a>.</p>
        <NeedHelp topic="creative-testing-framework" />
      </>
    ),
  },

  {
    slug: 'gpt-shopping',
    toc: ['What ChatGPT shopping actually is', 'Product feed quality matters more than ever', 'Schema.org Product markup', 'Reviews as a ranking signal', 'Brand reputation matters'],
    prose: (
      <>
        <p>OpenAI rolled out shopping inside ChatGPT in late 2025. For e-commerce brands, it is a new acquisition channel &mdash; and one most have not prepared for.</p>
        <h2>What ChatGPT shopping actually is</h2>
        <p>When a user asks ChatGPT something like &ldquo;I am looking for a good wool sweater under &euro;200&rdquo;, ChatGPT now generates product recommendations with images, prices and direct merchant links. It is not advertising &mdash; it is organic. And it is growing fast.</p>
        <h2>Product feed quality matters more than ever</h2>
        <p>ChatGPT pulls product data from Google Shopping feeds, Bing Shopping feeds, and Schema.org Product markup on merchant pages. The brands with the cleanest product data show up. The brands with messy feeds do not.</p>
        <h2>Schema.org Product markup</h2>
        <p>Add comprehensive Product schema to every product page: name, brand, image, description, offers (price, currency, availability), aggregateRating, review count, GTIN. This is the data that AI shopping interfaces use to rank you.</p>
        <h2>Reviews as a ranking signal</h2>
        <p>AI shopping interfaces seem to heavily weight aggregate review scores and review counts. If your products do not have reviews, they do not rank in AI shopping. Get a review collection programme running.</p>
        <h2>Brand reputation matters</h2>
        <p>AI models cite brands their training data trusts. Building genuine brand recognition &mdash; through PR, content, social proof &mdash; pays back in AI shopping visibility, not just in classical brand metrics.</p>
        <p>Related: our <a href="/services/ai-visibility/">AI search visibility service</a>, our <a href="/industries/ecommerce/">e-commerce marketing playbook</a> &mdash; and <a href="/blog/how-to-get-mentioned-by-chatgpt/">how to get mentioned by ChatGPT and Perplexity</a>.</p>
        <NeedHelp topic="gpt-shopping" />
      </>
    ),
  },

  {
    slug: 'ga4-mistakes',
    toc: ['Cross-domain tracking', 'Internal traffic filters', 'Custom events for what actually matters', 'Conversion definitions', 'Channel grouping', 'Audience definitions', 'Data retention'],
    prose: (
      <>
        <p>Google Analytics 4 has been around for years now and most setups still get the same handful of things wrong. Here are the seven we fix on every new client.</p>
        <h2>Cross-domain tracking</h2>
        <p>If your site spans multiple domains (e.g. main site + booking subsystem), 70% of GA4 installations break cross-domain tracking. The fix is two settings in admin &mdash; but it is critical for accurate attribution.</p>
        <h2>Internal traffic filters</h2>
        <p>Your team browsing the site should not count as conversions. Set up internal traffic filters using IP-based or DEFINE-INTERNAL-TRAFFIC settings. Yes, it requires configuring your office IPs. Do it anyway.</p>
        <h2>Custom events for what actually matters</h2>
        <p>The default events GA4 fires (page_view, scroll, file_download) miss the events that actually matter for your business. Set up custom events for: form starts, form completions, video plays, search queries, add-to-cart, checkout steps. Use Google Tag Manager.</p>
        <h2>Conversion definitions</h2>
        <p>Mark only the events that genuinely indicate business value as conversions. &ldquo;Pageview of contact page&rdquo; is not a conversion. &ldquo;Submitted contact form&rdquo; is. Loose conversion definitions corrupt every downstream report.</p>
        <h2>Channel grouping</h2>
        <p>GA4 default channel grouping lumps things badly. Set up a Custom Channel Group that matches how you actually think about your channels.</p>
        <h2>Audience definitions</h2>
        <p>Build remarketing audiences in GA4 for the cohorts that matter &mdash; cart abandoners, blog readers, lead form starters. These can be shared to Google Ads automatically.</p>
        <h2>Data retention</h2>
        <p>GA4 defaults to 2 months of event-level data retention. Change it to 14 months in admin. You will thank yourself in a year.</p>
        <p>Related: our <a href="/services/analytics/">analytics &amp; tracking service</a> &mdash; and <a href="/blog/tracking-setup-guide/">the full tracking setup guide</a>.</p>
        <NeedHelp topic="ga4-mistakes" />
      </>
    ),
  },

  {
    slug: 'yachting-marketing',
    toc: ['The four-phase calendar', 'Eight languages, not one', 'Long-cycle remarketing', 'High-value lead handling', 'Brand vs performance'],
    prose: (
      <>
        <p>Yacht charter marketing is unlike any other category we work in. The booking window is long, the average ticket is huge, and the customer is genuinely global. Here is how the media plan actually works.</p>
        <h2>The four-phase calendar</h2>
        <p>A charter season has four distinct phases: <strong>early-bird</strong> (Sep&ndash;Dec, locking in next year), <strong>peak booking</strong> (Jan&ndash;Apr, when most people decide), <strong>late availability</strong> (May&ndash;Jul, last-minute), <strong>shoulder</strong> (Aug&ndash;Sep, off-peak weeks). Each phase needs different creative, different bidding, different audiences. Treating the year as one campaign costs 30&ndash;40% of efficiency.</p>
        <h2>Eight languages, not one</h2>
        <p>Charter customers Google in English, German, French, Italian, Spanish, Russian, Dutch and Polish. Running one English campaign and hoping for the best costs you the majority of European demand. Build separate, properly-localised accounts per language.</p>
        <h2>Long-cycle remarketing</h2>
        <p>The typical Med charter is researched 6&ndash;12 weeks before booking. The default 30-day Meta remarketing window misses the heart of the journey. Build 60&ndash;90 day remarketing windows with frequency caps to stay top-of-mind without burning out.</p>
        <h2>High-value lead handling</h2>
        <p>An inbound charter enquiry is worth &euro;38,000+ on average. The follow-up speed matters enormously. We typically wire booking systems (MMK, Booking Manager) directly into Slack so the sales team sees enquiries in seconds, not days.</p>
        <h2>Brand vs performance</h2>
        <p>Most charter businesses overspend on <a href="/services/google-ads/">Google search</a> and underspend on brand-building <a href="/services/paid-social/">Meta</a>. Charter is a high-consideration purchase &mdash; the customer needs to know your brand exists months before they search. Budget should reflect that.</p>
        <p>More in our <a href="/industries/boating/">boating &amp; yachting marketing playbook</a>. For charter businesses operating from Mallorca, see our <a href="/marketing-agency-mallorca/">marketing agency in Mallorca</a> page — multilingual campaigns across paid search, paid social and SEO from Calvià.</p>
        <NeedHelp topic="yachting-marketing" />
      </>
    ),
  },

  {
    slug: 'agency-pricing-honest',
    toc: ['The incentive problem', 'When this matters', 'Flat fees fix the problem', 'What this costs us', 'What this gets us'],
    prose: (
      <>
        <p>Most digital marketing agencies charge a percentage of media spend. Most digital marketing agencies have an incentive to recommend more media spend. The connection is not complicated.</p>
        <h2>The incentive problem</h2>
        <p>If an agency is paid 10% of your media spend, every additional &euro;100k of media you spend is &euro;10k more in their pocket. That fee is paid <em>regardless of whether the additional media was a good idea</em>. The structural incentive is to recommend more media &mdash; even when more is not the right answer.</p>
        <h2>When this matters</h2>
        <p>Often, the right thing to do for a client is to <em>reduce</em> media spend. Cut wasted PMax. Pause low-margin campaigns. Reallocate from paid to SEO. Each of these recommendations costs a percentage-fee agency real money. We have seen agencies sit on accounts they know are over-spending for years rather than make the call.</p>
        <h2>Flat fees fix the problem</h2>
        <p>When we charge a flat monthly fee, our incentive is to keep the client. Our incentive to keep the client is to deliver results. The right amount of media to spend is whatever delivers the best business outcome &mdash; and we have no financial stake in that being a bigger or smaller number.</p>
        <h2>What this costs us</h2>
        <p>Flat fees mean a smaller agency cannot scale revenue as fast as a percentage-fee one. A percentage-fee agency that grows a client from &euro;100k to &euro;1m in monthly spend grows their own revenue 10x. We do not. We are fine with that.</p>
        <h2>What this gets us</h2>
        <p>A 93% twelve-month client retention rate, and an inbound pipeline made almost entirely of referrals. The slow way works. See our <a href="/cases/">client cases</a>, or our <a href="/marketing-agency-mallorca/">marketing agency in Mallorca</a> page if you want to understand how we scope and price a full-service retainer.</p>
        <NeedHelp topic="agency-pricing-honest" />
      </>
    ),
  },
  {
    slug: 'pinterest-ads-home-interiors-local-2026',
    toc: ["Can anyone run them?", "Who it's for", "Window coverings fit", "Retargeting", "Cross-platform play", "Creative rules", "What it costs", "The verdict", "FAQs"],
    faqs: [
      { q: 'Can anyone run Pinterest Ads?', a: 'Almost. You need a free Pinterest business account and a verifiable website, and Ads Manager is self-serve — so a solo owner can launch without an agency. The one real gate is geography: Pinterest Ads aren\'t available in every country, though they are across most of Europe including Spain, Germany, the UK and the wider EU.' },
      { q: 'Who do Pinterest Ads actually work for?', a: 'Visually-planned, considered purchases: home decor and interiors, window coverings and furniture, weddings, fashion and beauty, food and DIY, travel. The common thread is people planning a future purchase weeks in advance. Impulse, commodity and price-led categories tend to underperform.' },
      { q: 'How does Pinterest retargeting work?', a: 'Install the Pinterest tag (or Conversions API) and you can retarget site visitors, upload a hashed customer list (minimum ~100 matches), retarget people who engaged with your organic Pins, build actalike audiences, and run dynamic retargeting that shows people the exact products they viewed from a catalog feed.' },
      { q: 'Can a local business with one showroom use Pinterest Ads?', a: 'Yes. Geo-target delivery to the showroom\'s city, postal codes or a radius around the store, and use location-specific creative — ideally with the store address on it. Pinterest works best as one layer of a cross-platform retargeting strategy alongside YouTube video and static display.' },
      { q: 'How much do Pinterest Ads cost in 2026?', a: 'Cheap on a media basis: CPC typically €0.10–€1.50, CPM around €2–€5. The low cost is a double-edged sword — it\'s easy to spend on reach that never converts, so cost per acquisition (or per qualified showroom visit) is the only number that matters.' },
    ],
    prose: (
      <>
        <p><strong>&ldquo;Can anybody run Pinterest Ads?&rdquo;</strong> is the question we get. The short answer is yes &mdash; and that&rsquo;s exactly why most people who run them shouldn&rsquo;t. The platform is self-serve, the media is cheap, and the barrier to entry is almost nothing. None of which tells you whether it&rsquo;ll work for <em>your</em> business. This post answers the question people should actually be asking: who is Pinterest genuinely good for, and how do you run it so it pays back?</p>

        <h2 id="can-anyone">Can anybody run Pinterest Ads? Technically, almost.</h2>
        <p>Three things stand between you and a live Pinterest campaign, and only one of them is a real gate.</p>
        <ul>
          <li><strong>A free Pinterest business account.</strong> Five minutes. Anyone can create one.</li>
          <li><strong>A verified website.</strong> A small DNS or meta-tag step. Not a barrier.</li>
          <li><strong>Availability in your country.</strong> This is the only real gate. Pinterest Ads aren&rsquo;t live in every region &mdash; but they <em>are</em> available across most of Europe, including Spain, Germany, Austria, the UK and the wider EU. If you open Ads Manager and see a &ldquo;not available in your region&rdquo; message, that&rsquo;s your blocker. Otherwise, you&rsquo;re clear.</li>
        </ul>
        <p>Notice what&rsquo;s <em>not</em> on that list: budget minimums, business size, an agency. A solo founder with &euro;300 a month and a verified site can launch a Pinterest campaign this afternoon. The platform&rsquo;s algorithm rewards good creative and tight targeting over raw spend, which is genuinely refreshing.</p>

        <div className="cmp-takeaway">
          <span className="k">The take</span>
          <p><strong>&ldquo;Can I run Pinterest Ads&rdquo; is the wrong question.</strong> Anyone can. The right question is whether the people who buy what you sell use Pinterest to plan that purchase. For some categories the answer is an emphatic yes. For others, you&rsquo;ll spend cheap money on attention that never converts.</p>
        </div>

        <h2 id="who-its-for">Who Pinterest actually works for</h2>
        <p>Pinterest is a visual planning engine. People come to it to plan a future project &mdash; a renovation, a wedding, a wardrobe, a dinner, a holiday &mdash; usually weeks before they buy. That single behavioural fact decides who wins on the platform and who wastes money.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Category</th><th>Pinterest fit</th><th>Why</th></tr></thead>
            <tbody>
              <tr><th>Home decor &amp; interiors</th><td><span className="pill pill-good">Excellent</span></td><td>The native Pinterest category. Window coverings, furniture, lighting, paint &mdash; all planned visually, weeks ahead.</td></tr>
              <tr><th>Weddings &amp; events</th><td><span className="pill pill-good">Excellent</span></td><td>The longest planning window of any consumer purchase. Pinterest is the default mood-board.</td></tr>
              <tr><th>Fashion, beauty &amp; jewellery</th><td><span className="pill pill-good">Strong</span></td><td>Highly visual, aspirational, save-and-return behaviour.</td></tr>
              <tr><th>Food, recipes &amp; DIY</th><td><span className="pill pill-good">Strong</span></td><td>Save-for-later intent; great for content-led brands.</td></tr>
              <tr><th>Travel &amp; hospitality</th><td><span className="pill pill-mid">Good</span></td><td>Strong for inspiration, weaker on direct booking attribution.</td></tr>
              <tr><th>B2B &amp; SaaS</th><td><span className="pill pill-mid">Niche</span></td><td>Lower volume, but the B2B users who are there show real intent. Rarely a primary channel.</td></tr>
              <tr><th>Impulse / commodity / price-led</th><td><span className="pill pill-bad">Weak</span></td><td>Wrong mindset. Pinterest users are planning, not impulse-buying.</td></tr>
            </tbody>
          </table>
        </div>

        <p>If you sell anything in the top two rows, Pinterest deserves a test budget before almost any other &ldquo;secondary&rdquo; channel. If you&rsquo;re in the bottom row, put the money into Google and Meta and come back to Pinterest later &mdash; or never.</p>

        <h2 id="window-coverings">Why a window-coverings showroom is closer to the sweet spot than most ecommerce</h2>
        <p>Here&rsquo;s the part most guides miss. Pinterest&rsquo;s single strongest category &mdash; interiors and home decor &mdash; is dominated by exactly the kind of considered, high-consideration, visually-planned purchase that a blinds, awnings or shutters business sells. Someone planning new window coverings will spend weeks saving rooms they like before they ever call a showroom. That&rsquo;s not an edge case for Pinterest; it&rsquo;s the core use of the platform.</p>
        <p>Which makes the local showroom an unusually good fit. The buyer is already on Pinterest, already in planning mode, already saving the aesthetic you sell. The job isn&rsquo;t to create demand &mdash; it&rsquo;s to be present, locally, while they plan, and to bring them back once they&rsquo;ve visited your site or showroom.</p>

        <div className="cmp-quote">&ldquo;For interiors and window coverings, Pinterest isn&rsquo;t a demand-generation channel. It&rsquo;s a demand-capture channel that happens to look like inspiration.&rdquo;</div>

        <h2 id="retargeting">How Pinterest retargeting actually works</h2>
        <p>Retargeting is where Pinterest earns its keep for considered purchases, because the planning window is so long that a single touch is almost never enough. There are five mechanisms, and most brands use one and ignore the rest.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Audience type</th><th>What it does</th><th>Setup requirement</th></tr></thead>
            <tbody>
              <tr><th>Site-visitor retargeting</th><td>Re-reach people who visited your website or specific product/landing pages.</td><td>Pinterest tag (or Conversions API) installed across the site.</td></tr>
              <tr><th>Customer-list targeting</th><td>Upload hashed emails or mobile ad IDs to target &mdash; or exclude &mdash; existing customers.</td><td>CSV of hashed contacts; minimum ~100 matches to activate.</td></tr>
              <tr><th>Engagement audiences</th><td>Reach people who saved, clicked or watched your organic Pins or ads.</td><td>A confirmed domain and organic Pin activity.</td></tr>
              <tr><th>Actalike audiences</th><td>Pinterest&rsquo;s lookalike &mdash; find new users similar to your best existing customers.</td><td>A source audience (customers, site visitors or engagers).</td></tr>
              <tr><th>Dynamic retargeting</th><td>Show people the exact products they viewed, pulled live from a catalog feed.</td><td>Catalog feed + Pinterest tag tracking Checkout, AddToCart and PageVisit events. Catalog Sales objective. Not available on Search placement.</td></tr>
            </tbody>
          </table>
        </div>

        <p>For a product-feed business, dynamic retargeting is the highest-ROI of the five &mdash; it shows people the precise blind, sofa or lamp they already looked at, with live pricing. For a local showroom without an ecommerce catalog, site-visitor retargeting plus engagement audiences do the heavy lifting, with actalike audiences layered on once you have enough source data.</p>

        <div className="cmp-takeaway">
          <span className="k">The take</span>
          <p><strong>Install the Pinterest tag before you spend a euro.</strong> Without it you have no site-visitor audiences, no dynamic retargeting, no conversion data, and no way to know whether any of this worked. The brands that fail on Pinterest almost always skipped this step and judged the platform on prospecting alone.</p>
        </div>

        <h2 id="cross-platform">The cross-platform retargeting play &mdash; Pinterest, YouTube and static, together</h2>
        <p>This is where it gets genuinely useful for a local business. Take a local Luxaflex dealer with a showroom. They already run static display retargeting to people who visited the website. The instinct &mdash; a good one &mdash; is to add <em>video</em> retargeting on YouTube using new showroom footage and brand imagery that carries the store&rsquo;s actual address. Pinterest is the third layer of that same idea.</p>
        <p>The logic is simple: one platform&rsquo;s retargeting is a poke. Three platforms, coordinated, is a presence. A person who visited the showroom site once will see, over the following weeks:</p>
        <ul>
          <li><strong>On YouTube</strong> &mdash; short showroom video footage, the products in a real room, the store&rsquo;s address on-screen. Video does what static can&rsquo;t: it shows the showroom as a place you&rsquo;d actually walk into.</li>
          <li><strong>On Pinterest</strong> &mdash; the same rooms as saveable, planning-friendly pins, geo-targeted to the showroom&rsquo;s catchment, while the buyer is actively planning.</li>
          <li><strong>On static display</strong> &mdash; the always-on reminder that keeps the brand present between the bigger touchpoints.</li>
        </ul>
        <p>The address on the creative is the quiet detail that makes this local. Putting the store address &mdash; and ideally a &ldquo;visit the showroom&rdquo; call to action &mdash; on the video and the pin turns a brand asset into a local one.</p>

        <div className="cmp-takeaway">
          <span className="k">The local detail that matters</span>
          <p><strong>Geo-target everything to the showroom&rsquo;s catchment.</strong> Pinterest lets you narrow delivery to cities, postal codes or a radius around the store. There&rsquo;s no point retargeting someone 400&nbsp;km away with footage of a showroom they&rsquo;ll never visit. Tight geo-targeting plus address-on-creative is what turns a brand campaign into a footfall campaign.</p>
        </div>

        <h2 id="creative">Creative &mdash; what Pinterest rewards, and what gets rejected</h2>
        <p>Pinterest is the least tolerant of the major platforms when it comes to &ldquo;ad-looking&rdquo; ads. It&rsquo;s a discovery environment; people are there to plan, not to be sold to. Creative that respects that gets approved fast and performs.</p>
        <ul>
          <li><strong>Vertical, 1000&times;1500px (2:3).</strong> The platform is built for it.</li>
          <li><strong>Minimal text overlay.</strong> Pinterest prefers clean images. Short phrases only; a crowded, sales-heavy image hurts both approval and performance.</li>
          <li><strong>Warm, natural lighting; real rooms.</strong> Lifestyle context beats product-on-white every time in interiors.</li>
          <li><strong>Logo present but quiet.</strong> Branded, not branded-shouty.</li>
          <li><strong>Idea-focused, not aggressive.</strong> &ldquo;Here&rsquo;s a room you could have&rdquo; outperforms &ldquo;50% off this weekend only&rdquo;.</li>
          <li><strong>A landing page that matches the pin.</strong> Pinterest reviews the whole journey. A mismatch between ad and page is the most common rejection reason.</li>
        </ul>

        <h2 id="what-it-costs">What it costs, and the trap that comes with it</h2>
        <p>Pinterest is cheap on a media basis &mdash; cost per click typically around &euro;0.10&ndash;&euro;1.50, CPM around &euro;2&ndash;&euro;5, depending on format, targeting and competition. That&rsquo;s a fraction of Google Search and often below Meta.</p>
        <p>The cheap media is exactly the trap. Low cost makes it dangerously easy to spend on reach that feels productive and converts nothing. <strong>Cost per acquisition &mdash; or for a showroom, cost per qualified visit or enquiry &mdash; is the only number that decides whether Pinterest stays in the mix.</strong> Track it from day one, which means the tag goes on before the budget goes live.</p>

        <h2 id="verdict">The honest verdict</h2>
        <p>Pinterest Ads in 2026 are genuinely good for a specific, identifiable set of businesses: home and interiors, weddings, fashion, food, DIY &mdash; anything bought through visual planning over a long window. For those, it&rsquo;s one of the most underpriced channels in paid media, and the retargeting tools are better than its &ldquo;inspiration platform&rdquo; reputation suggests. For a local interiors or window-coverings showroom, it&rsquo;s not a long shot at all &mdash; it&rsquo;s close to the platform&rsquo;s core use, and it slots neatly into a cross-platform retargeting strategy alongside YouTube video and static display.</p>
        <p>For everyone else &mdash; commodity ecommerce, impulse products, most B2B, anything price-led &mdash; it&rsquo;s a &ldquo;maybe later&rdquo; channel. Run Google and Meta properly first.</p>

        <h2 id="faqs">Frequently asked questions</h2>
        <details className="cmp-faq" open>
          <summary>Can anyone run Pinterest Ads?</summary>
          <p>Almost. You need a free Pinterest business account and a verifiable website, and Ads Manager is self-serve &mdash; so a solo owner can launch without an agency. The one real gate is geography: Pinterest Ads aren&rsquo;t available in every country, though they are across most of Europe including Spain, Germany, the UK and the wider EU.</p>
        </details>
        <details className="cmp-faq">
          <summary>Who do Pinterest Ads actually work for?</summary>
          <p>Visually-planned, considered purchases: home decor and interiors, window coverings and furniture, weddings, fashion and beauty, food and DIY, travel. The common thread is people planning a future purchase weeks in advance. Impulse, commodity and price-led categories tend to underperform.</p>
        </details>
        <details className="cmp-faq">
          <summary>How does Pinterest retargeting work?</summary>
          <p>Install the Pinterest tag (or Conversions API) and you can retarget site visitors, upload a hashed customer list (minimum ~100 matches), retarget people who engaged with your organic Pins, build actalike audiences, and run dynamic retargeting that shows people the exact products they viewed from a catalog feed.</p>
        </details>
        <details className="cmp-faq">
          <summary>Can a local business with one showroom use Pinterest Ads?</summary>
          <p>Yes. Geo-target delivery to the showroom&rsquo;s city, postal codes or a radius around the store, and use location-specific creative &mdash; ideally with the store address on it. For a local showroom, Pinterest works best as one layer of a cross-platform retargeting strategy alongside YouTube video and static display.</p>
        </details>
        <details className="cmp-faq">
          <summary>How much do Pinterest Ads cost in 2026?</summary>
          <p>Cheap on a media basis: CPC typically &euro;0.10&ndash;&euro;1.50, CPM around &euro;2&ndash;&euro;5. The low cost is a double-edged sword &mdash; it&rsquo;s easy to spend on reach that never converts, so cost per acquisition (or per qualified showroom visit) is the only number that matters.</p>
        </details>

        <h2 id="closing">Want help deciding if Pinterest fits your business?</h2>
        <p>We run paid media &mdash; Google, Meta, Microsoft, TikTok and Pinterest &mdash; for brands across Europe, and we&rsquo;ll tell you honestly whether Pinterest belongs in your mix or whether the budget is better spent elsewhere. <a href="/contact/?topic=pinterest-ads">Book a free 30-minute call</a>. No deck, no sales pitch.</p>
        <p>Related: our <a href="/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/">Google Ads vs Meta vs TikTok comparison for ecommerce</a> and our <a href="/services/paid-social/">paid social service</a>.</p>
        <p style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6a6a6a' }}>Last updated 1 June 2026 &middot; Reviewed monthly &middot; pmax &middot; Calvi&agrave;, Mallorca</p>
      </>
    ),
  },
  {
    slug: 'google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026',
    toc: ['TL;DR', 'CPC & CPM', 'High vs low AOV', 'Attribution', 'Creative load', 'Scaling difficulty', 'Remarketing', 'When PMax wins / loses', 'The honest mix', 'FAQs'],
    prose: (
      <>
        <p><strong>If you sell something online in 2026, you are running at least one of these three: Google Ads, Meta Ads, TikTok Ads.</strong> Most ecommerce brands run all three at once, with no honest framework for deciding which one deserves the next euro. This post is that framework &mdash; built from roughly &euro;2.1M of pmax-managed ecommerce spend in Q1 2026, across 14 active retainers in the EU and UK.</p>
        <p>It is opinionated. It will not flatter every platform. Skip to the comparison table if you want the answer in 30 seconds.</p>

        <h2 id="tldr">TL;DR &mdash; the one-line answer per platform</h2>
        <ul>
          <li><strong>Google Ads</strong> is the cheapest place to find someone who already wants what you sell.</li>
          <li><strong>Meta Ads</strong> is the cheapest place to create demand at scale, if you can ship the creative volume.</li>
          <li><strong>TikTok Ads</strong> is the cheapest CPM in the room &mdash; and the easiest place to lose money if your creative iteration speed is slow.</li>
        </ul>
        <p>Everything below is the longer version of those three sentences.</p>

        <h2 id="cpc-cpm">CPC and CPM in the wild &mdash; what we actually pay in 2026</h2>
        <p>Reported benchmarks are useless because the variance is enormous. What follows is the median range across our active EU ecommerce accounts in Q1 2026 &mdash; not theoretical, not platform-published, just what came out of the spend reports.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Metric (EU median, Q1 2026)</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>CPM (&euro;)</th><td>&euro;15&ndash;&euro;55 Shopping &middot; &euro;30&ndash;&euro;120 brand search</td><td>&euro;8&ndash;&euro;18 prospecting &middot; &euro;18&ndash;&euro;35 retargeting</td><td>&euro;3&ndash;&euro;8 prospecting</td></tr>
              <tr><th>CPC (&euro;)</th><td>&euro;0.40&ndash;&euro;2.20 Shopping &middot; &euro;1.20&ndash;&euro;6.50 brand search</td><td>&euro;0.35&ndash;&euro;1.10</td><td>&euro;0.18&ndash;&euro;0.55</td></tr>
              <tr><th>CTR</th><td>3.5%&ndash;9% Shopping</td><td>0.9%&ndash;2.2%</td><td>0.6%&ndash;1.5%</td></tr>
              <tr><th>Median conversion rate from click</th><td>2.4%&ndash;5.8%</td><td>0.9%&ndash;2.2%</td><td>0.4%&ndash;1.4%</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>What this actually means:</strong> a Google Shopping click is 4&ndash;8&times; more expensive than a TikTok click, but it is also 4&ndash;10&times; more likely to convert. CPM is the wrong unit for ecommerce. CPA (or, better, CAC payback) is the only honest one.</p>

        <div className="cmp-takeaway">
          <span className="k">The take</span>
          <p><strong>If you only judge channels on CPM, you will end up overspending on TikTok and underspending on Google.</strong> Reach is not the goal. Bought attention from people who can afford and want the product is the goal.</p>
        </div>

        <h2 id="aov">High AOV vs low AOV &mdash; the under-discussed lever</h2>
        <p>The platform that wins depends on your average order value almost as much as your category.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Average order value</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>&euro;20&ndash;&euro;60 (impulse)</th><td><span className="pill pill-mid">Mid</span> Margins eaten by CPC</td><td><span className="pill pill-good">Good</span> Sweet spot for Advantage+</td><td><span className="pill pill-good">Good</span> Native viral path</td></tr>
              <tr><th>&euro;60&ndash;&euro;200 (considered)</th><td><span className="pill pill-good">Good</span> Best fit overall</td><td><span className="pill pill-good">Good</span> Strong with creative</td><td><span className="pill pill-mid">Mid</span> Needs heavy iteration</td></tr>
              <tr><th>&euro;200&ndash;&euro;800 (deliberate)</th><td><span className="pill pill-good">Excellent</span> Brand search dominates</td><td><span className="pill pill-mid">Mid</span> Long consideration windows</td><td><span className="pill pill-bad">Weak</span> Wrong intent</td></tr>
              <tr><th>&euro;800+ (luxury / B2B-leaning)</th><td><span className="pill pill-good">Excellent</span> Microsoft Ads also relevant</td><td><span className="pill pill-mid">Mid</span> Long sales cycles</td><td><span className="pill pill-bad">Weak</span> Audience mismatch</td></tr>
            </tbody>
          </table>
        </div>

        <p>The pattern: the higher the AOV, the more the channel that captures intent (Google) beats the channel that creates demand (Meta, TikTok). Past about &euro;200 AOV, TikTok is almost never profitable unless the brand is a viral phenomenon already.</p>

        <h2 id="attribution">Attribution differences &mdash; what each platform over-claims</h2>
        <p>All three platforms over-attribute conversions to themselves. They differ in how much, and how easily you can correct.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Attribution attribute</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>Default click window</th><td>30-day click, 1-day view</td><td>7-day click, 1-day view</td><td>7-day click, 1-day view</td></tr>
              <tr><th>Server-side fix</th><td>Enhanced Conversions + offline import</td><td>CAPI + offline events</td><td>Events API (still maturing)</td></tr>
              <tr><th>Over-claim severity (our QoQ measurement)</th><td>~15&ndash;25%</td><td>~25&ndash;40%</td><td>~35&ndash;55%</td></tr>
              <tr><th>CRM-fed offline conversions</th><td><span className="pill pill-good">Mature</span> robust API, daily import</td><td><span className="pill pill-good">Mature</span> CAPI Gateway available</td><td><span className="pill pill-mid">Partial</span> Events API + offline beta</td></tr>
              <tr><th>Honesty score (subjective)</th><td>6/10</td><td>4/10</td><td>3/10</td></tr>
            </tbody>
          </table>
        </div>

        <p>If you only have time to fix one thing on each platform in 2026: enable <strong>Enhanced Conversions on Google</strong>, set up <strong>CAPI for Meta</strong>, and wire the <strong>Events API for TikTok</strong>. Without those three, every report you read is lying by a measurable percentage.</p>

        <p className="cmp-quote">&ldquo;In 2026, attribution is no longer a reporting problem. It is the entire performance gap.&rdquo;</p>

        <h2 id="creative">Creative requirements &mdash; what each platform actually consumes</h2>
        <p>This is the single biggest reason brands fail on Meta and TikTok. The platforms are creative-hungry; the brands are not.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Creative requirement</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>Production cadence to stay efficient</th><td>1&ndash;3 new assets per quarter</td><td>10&ndash;20 fresh assets per <em>week</em></td><td>15&ndash;30 fresh native assets per <em>week</em></td></tr>
              <tr><th>Format complexity</th><td>Mostly automated (PMax)</td><td>Mid &mdash; feed-native</td><td>High &mdash; full-screen vertical only</td></tr>
              <tr><th>Best-performing creative type</th><td>Product feed + responsive text</td><td>UGC-style video, founder-led</td><td>Native-language UGC, hook-led</td></tr>
              <tr><th>Cost per asset (production)</th><td>&euro;50&ndash;&euro;300</td><td>&euro;80&ndash;&euro;400</td><td>&euro;150&ndash;&euro;800 (or in-house)</td></tr>
              <tr><th>Creative fatigue window</th><td>3&ndash;6 months</td><td>2&ndash;4 weeks</td><td>5&ndash;14 days</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cmp-takeaway">
          <span className="k">The take</span>
          <p><strong>If your brand cannot ship 10 fresh Meta-format assets per week, do not start Meta Ads.</strong> If you cannot ship 15 native TikTok-format assets per week, do not start TikTok. We say this politely to clients and they almost never listen the first time. Then we have the conversation again at month three.</p>
        </div>

        <h2 id="scaling">Scaling difficulty &mdash; what breaks when you 10&times; the budget</h2>
        <p>Every platform looks great at &euro;5,000/month. The honest test is what happens when you push past &euro;50,000.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Behaviour at 10&times; budget</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>Performance decay at scale</th><td><span className="pill pill-good">Low</span> intent supply caps it</td><td><span className="pill pill-mid">Moderate</span> creative becomes the ceiling</td><td><span className="pill pill-bad">High</span> hits creative wall fast</td></tr>
              <tr><th>What breaks first</th><td>Brand-search saturation</td><td>Creative fatigue + frequency</td><td>Creative fatigue, then audience</td></tr>
              <tr><th>Realistic monthly ceiling for most EU SMBs</th><td>&euro;80k&ndash;&euro;250k</td><td>&euro;40k&ndash;&euro;120k</td><td>&euro;15k&ndash;&euro;60k</td></tr>
              <tr><th>Speed of scale-up</th><td>Slow but linear</td><td>Fast then plateaus</td><td>Volatile spikes</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>Google scales more predictably than the other two combined.</strong> Meta scales fast until creative fatigue, then plateaus hard. TikTok scales in unpredictable bursts driven entirely by which video the algorithm picks up that week.</p>

        <h2 id="remarketing">Remarketing strength &mdash; quietly the biggest delta</h2>
        <ul>
          <li><strong>Meta is still the strongest remarketing channel ecommerce has.</strong> Dynamic Product Ads with CAPI-fed first-party data, properly tuned, remains the highest-ROAS placement most brands can buy.</li>
          <li><strong>Google&rsquo;s remarketing has quietly improved.</strong> Customer Match + Demand Gen + branded search retargeting through PMax is now a credible alternative to Meta DPAs for high-AOV categories.</li>
          <li><strong>TikTok remarketing is functionally a placeholder.</strong> Audiences are small, the platform is built for prospecting at scale, and most brands waste budget trying to run TikTok like Meta.</li>
        </ul>

        <h2 id="pmax">When Performance Max wins &mdash; and when it loses</h2>
        <h3>PMax wins when&hellip;</h3>
        <ul>
          <li>The brand already has <strong>strong organic and branded search demand</strong>.</li>
          <li>The product catalogue has <strong>consistent margin across SKUs</strong> and a clean feed.</li>
          <li>You have <strong>deep conversion data</strong> &mdash; first-party signals, offline events, value-based bidding inputs.</li>
          <li>You are willing to <strong>exclude brand search</strong> from PMax and run brand separately on manual Search.</li>
        </ul>
        <h3>PMax loses when&hellip;</h3>
        <ul>
          <li>The catalogue contains products with <strong>wildly different margins</strong>.</li>
          <li>You need <strong>surgical control of specific keywords</strong>.</li>
          <li>Brand search is being <strong>absorbed and double-counted</strong> in the PMax ROAS number.</li>
          <li>Conversion data is shallow &mdash; <strong>form fills only, no offline events</strong>.</li>
        </ul>

        <figure className="cmp-screenshot">
          <Image
            src="/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/pmax-branded-search-absorbed-attribution-2026.webp"
            alt="Google Ads search terms report showing branded queries absorbed by a Performance Max campaign — brand keywords credited as PMax conversions, a common cause of inflated ROAS attribution in ecommerce accounts"
            title="Performance Max absorbing brand search — Google Ads search terms report, Q1 2026"
            width={1600}
            height={900}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            loading="lazy"
          />
          <figcaption>Fig. 1 — Real account: brand search terms absorbed by Performance Max and credited as PMax conversions. The campaign reports strong ROAS on paper — the majority is captured brand demand, not new customers acquired through paid media.</figcaption>
        </figure>

        <p className="cmp-quote">&ldquo;PMax usually outperforms Meta when branded search demand already exists. Where it does not, Meta usually wins &mdash; provided the creative volume is there.&rdquo;</p>

        <h2 id="the-honest-mix">The honest mix &mdash; what we typically recommend</h2>
        <p>If a new ecommerce client asked us today, with no other context, how to split a &euro;30,000 monthly media budget:</p>
        <ul>
          <li><strong>~55% Google Ads</strong> &mdash; Performance Max + properly-structured Search, Brand split out cleanly.</li>
          <li><strong>~35% Meta Ads</strong> &mdash; Advantage+ Shopping for prospecting, Dynamic Product Ads for retargeting, ten-plus new creatives per week.</li>
          <li><strong>~10% TikTok Ads</strong> &mdash; Spark Ads on creator-led content, only if the brand has a working creative pipeline.</li>
        </ul>
        <p>That mix shifts heavily by AOV and category. &euro;20 AOV impulse brands typically flip the ratio toward Meta + TikTok. &euro;500+ AOV considered-purchase brands push closer to 70% Google, 25% Meta, 5% TikTok.</p>

        <h2 id="faqs">Frequently asked questions</h2>
        <details className="cmp-faq" open>
          <summary>Which ad platform is cheapest for ecommerce in 2026?</summary>
          <p>On a raw CPM basis, TikTok. On a cost-per-acquisition basis, almost always Google &mdash; because Google captures buyers who are already searching for what you sell, not buyers you have to convince from scratch.</p>
        </details>
        <details className="cmp-faq">
          <summary>Is Performance Max better than Meta Advantage+ Shopping for ecommerce?</summary>
          <p>For brands with existing branded search demand and a clean product feed, PMax usually wins on blended ROAS. For brands building a category from scratch with strong creative output but thin search demand, Meta Advantage+ tends to win. The two buy fundamentally different attention.</p>
        </details>
        <details className="cmp-faq">
          <summary>Can TikTok Ads be profitable for a small ecommerce brand?</summary>
          <p>Yes, but only if the brand can produce three or more native-format creatives per week. TikTok ranks creative iteration speed above almost everything else. Small brands without an in-house creator or a creator-on-retainer model rarely make TikTok pay back.</p>
        </details>
        <details className="cmp-faq">
          <summary>Which ad platform has the most accurate attribution in 2026?</summary>
          <p>None of them in isolation. Google Ads has the most useful attribution model when paired with offline conversion imports from your CRM. Meta CAPI improves Meta significantly but still over-attributes within its own ecosystem. TikTok&rsquo;s Events API is the youngest of the three and over-claims most aggressively. A blended view via MMM or incrementality testing is the only honest answer.</p>
        </details>
        <details className="cmp-faq">
          <summary>When does Performance Max lose to a manually structured Search campaign?</summary>
          <p>When brand search is being absorbed into PMax and credited to it; when the product catalogue contains very different margins; when conversion data is shallow (form fills only, no offline events); or when you need surgical control over a small set of high-value keywords. Manual Search wins in those four scenarios.</p>
        </details>

        <h2 id="closing">Closing &mdash; pick what fits the business, not what&rsquo;s loudest</h2>
        <p>Most ecommerce brands do not have a &ldquo;Meta problem&rdquo; or a &ldquo;TikTok problem&rdquo;. They have a <strong>creative-throughput problem</strong>, an <strong>attribution problem</strong>, or a <strong>catalogue problem</strong>, and they blame the platform. Fix the underlying constraint and the channel mix usually sorts itself out within a quarter.</p>
        <p>If you want a one-page diagnosis of where your media is leaking across Google, Meta and TikTok, we run a free 30-minute version of that call every week. <a href="/contact/?topic=channel-mix-audit">Book it here</a> &mdash; no deck, no sales pitch.</p>
        <p>Related: our <a href="/services/google-ads/">Google Ads &amp; Performance Max service</a>, our <a href="/services/paid-social/">paid social service</a> (Meta &amp; TikTok), our <a href="/services/analytics/">analytics &amp; attribution setup</a>, our <a href="/industries/ecommerce/">e-commerce marketing playbook</a> &mdash; and <a href="/blog/pinterest-ads-home-interiors-local-2026/">who Pinterest Ads actually work for</a>.</p>
        <p style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6a6a6a' }}>Last updated 26 May 2026 &middot; Reviewed monthly &middot; Based on &euro;2.1M of ecommerce spend Q1 2026</p>
      </>
    ),
  },
]

export function getBlogDetail(slug: string) {
  return blogDetails.find(b => b.slug === slug)
}
