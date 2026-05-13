import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const SUPPORTED = ['de', 'es'] as const
type Lang = typeof SUPPORTED[number]

export function generateStaticParams() {
  return SUPPORTED.map(lang => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return {
    other: {
      'geo.region': 'ES-PM',
      'geo.placename': 'Calvià, Mallorca, Spain',
      'geo.position': '39.5639;2.5070',
      'ICBM': '39.5639, 2.5070',
    },
    robots: { index: true, follow: true },
    openGraph: { type: 'website', siteName: 'pmax', locale: lang === 'de' ? 'de_DE' : 'es_ES' },
  }
}

// Root layout owns <html> and <body> — this layout only validates locale and
// patches the html[lang] attribute via a synchronous inline script.
export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!SUPPORTED.includes(lang as Lang)) notFound()

  const htmlLang = lang === 'de' ? 'de' : 'es'

  return (
    <>
      {/* Runs before hydration — overrides the root layout's lang="en" */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang='${htmlLang}'`,
        }}
      />
      {children}
    </>
  )
}
