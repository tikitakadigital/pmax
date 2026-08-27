import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono, Newsreader, Anton } from 'next/font/google'
import Script from 'next/script'
import RevealObserver from '@/components/RevealObserver'
import CursorDot from '@/components/CursorDot'
import CookieBanner from '@/components/CookieBanner'
import ScrollDepth from '@/components/ScrollDepth'
import { org, website } from '@/lib/schema'
import './globals.css'

// Runs synchronously in <head> before GTM — sets Consent Mode v2 defaults to denied,
// then upgrades immediately if the visitor has already consented.
const consentInitScript = `
(function(){
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent','default',{
    analytics_storage:'denied',
    ad_storage:'denied',
    ad_user_data:'denied',
    ad_personalization:'denied',
    wait_for_update:500,
    region:['AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI','FR','GR','HR','HU','IE','IT','LT','LU','LV','MT','NL','PL','PT','RO','SE','SI','SK','GB']
  });
  try{
    var c=document.cookie.split('; ').find(function(r){return r.startsWith('pmax_consent=')});
    if(c){var s=JSON.parse(decodeURIComponent(c.split('=')[1]));
      if(s.analytics)gtag('consent','update',{analytics_storage:'granted'});
      if(s.marketing)gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});
    }
  }catch(e){}
})();
`

const globalJsonLd = [{ '@context': 'https://schema.org', ...org }, website]

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pmax.online'),
  title: {
    default: 'pmax — Digital marketing agency in Mallorca | Google Ads, SEO & AI',
    template: '%s',
  },
  description: 'pmax is a digital marketing agency in Mallorca. We run Google Ads, Meta, LinkedIn, SEO and AI search for brands that want growth they can actually measure.',
  keywords: ['digital marketing agency Mallorca', 'performance marketing Mallorca', 'Google Ads agency Mallorca', 'SEO agency Mallorca', 'AI search optimisation', 'GEO agency', 'agencia de marketing digital Mallorca'],
  authors: [{ name: 'pmax Online S.L.' }],
  creator: 'pmax Online S.L.',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  other: {
    'geo.region': 'ES-PM',
    'geo.placename': 'Calvià, Mallorca, Spain',
    'geo.position': '39.5639;2.5070',
    'ICBM': '39.5639, 2.5070',
  },
  openGraph: {
    type: 'website',
    siteName: 'pmax',
    locale: 'en_GB',
    alternateLocale: ['de_DE', 'es_ES'],
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'pmax — Digital marketing agency in Mallorca' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pmaxonline',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-touch-icon.svg', type: 'image/svg+xml' },
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#131313' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${anton.variable} ${spaceGrotesk.variable} ${spaceMono.variable} ${newsreader.variable}`}>
      <head>
        {/* Consent Mode v2 defaults — must run before GTM */}
        <script dangerouslySetInnerHTML={{ __html: consentInitScript }} />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WGNHGNTH"
            height="0" width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }} />
        <RevealObserver />
        <CursorDot />
        <CookieBanner />
        <ScrollDepth />
        {children}
      </body>
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WGNHGNTH');`,
        }}
      />
    </html>
  )
}
