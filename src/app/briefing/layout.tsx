import type { Metadata } from 'next'
import { Fira_Sans, Fira_Sans_Condensed } from 'next/font/google'

// Client briefings are private documents behind a token: never indexed, never
// followed. The root layout says index: true, so this route overrides it.
export const metadata: Metadata = {
  title: 'Briefing — pmax',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

// Stand-ins for a client's brand typeface in the ad mock-ups, where the real one
// has no web licence. Self-hosted by next/font and loaded on this route only;
// the stored briefing CSS refers to them as --font-fira*.
const fira = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-fira',
  display: 'swap',
})
const firaCondensed = Fira_Sans_Condensed({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-fira-condensed',
  display: 'swap',
})

export default function BriefingLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${fira.variable} ${firaCondensed.variable}`}>{children}</div>
}
