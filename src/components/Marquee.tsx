interface MarqueeProps {
  items: { label: string; alt?: boolean }[]
  reverse?: boolean
}

export default function Marquee({ items, reverse = false }: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div className={`marquee${reverse ? ' marquee-reverse' : ''}`} aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className={`marquee-item${item.alt ? ' alt' : ''}`}>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
