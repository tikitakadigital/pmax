interface FaqItem { q: string; a: string }

export default function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details key={i} className="faq-item" open={i === 0}>
          <summary>{item.q}</summary>
          <div className="faq-answer"><p>{item.a}</p></div>
        </details>
      ))}
    </div>
  )
}
