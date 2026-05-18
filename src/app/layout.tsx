import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono, Newsreader, Anton } from 'next/font/google'
import Script from 'next/script'
import RevealObserver from '@/components/RevealObserver'
import CursorDot from '@/components/CursorDot'
import './globals.css'

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
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pmaxonline',
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
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WGNHGNTH"
            height="0" width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <RevealObserver />
        <CursorDot />
        {children}
      </body>
      <Script
        id="gtm"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WGNHGNTH');`,
        }}
      />
    </html>
  )
}
