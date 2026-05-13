import Link from 'next/link'

interface PromoBlockProps {
  eyebrow?: string
  headline?: React.ReactNode
  deck?: string
  ctaHref?: string
  ctaLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export default function PromoBlock({
  eyebrow = "Let's talk",
  headline = <>A 30-minute call.<br />No deck. No&nbsp;pitch.</>,
  deck = "Tell us what's stuck. We'll tell you, straight, whether we're the right team to fix it.",
  ctaHref = '/contact',
  ctaLabel = 'Book a call',
  secondaryHref,
  secondaryLabel,
}: PromoBlockProps) {
  return (
    <section className="container" style={{ paddingBottom: 96 }}>
      <div className="promo reveal">
        <div>
          <span className="promo-eyebrow">{eyebrow}</span>
          <h2 className="promo-headline">{headline}</h2>
          <p className="promo-deck">{deck}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'stretch' }}>
          <Link href={ctaHref} className="btn-primary" style={{ justifyContent: 'center', padding: '18px 28px' }}>
            {ctaLabel} <span className="arrow" aria-hidden="true">→</span>
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link href={secondaryHref} className="btn-tertiary" style={{ justifyContent: 'center' }}>
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
