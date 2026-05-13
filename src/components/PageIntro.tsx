import Link from 'next/link'

interface Crumb { label: string; href?: string }

interface PageIntroProps {
  eyebrow: string
  title: React.ReactNode
  deck?: string
  crumbs?: Crumb[]
}

export default function PageIntro({ eyebrow, title, deck, crumbs }: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="container">
        {crumbs && crumbs.length > 0 && (
          <nav className="page-intro-crumbs" aria-label="Breadcrumb">
            {crumbs.map((crumb, i) => (
              <span key={i} style={{ display: 'contents' }}>
                {i > 0 && <span className="sep" aria-hidden="true">/</span>}
                {crumb.href
                  ? <Link href={crumb.href}>{crumb.label}</Link>
                  : <span aria-current="page">{crumb.label}</span>
                }
              </span>
            ))}
          </nav>
        )}
        <span className="page-intro-eyebrow">{eyebrow}</span>
        <h1 className="page-intro-title">{title}</h1>
        {deck && <p className="page-intro-deck">{deck}</p>}
      </div>
    </section>
  )
}
