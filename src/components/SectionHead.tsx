interface SectionHeadProps {
  kicker: string
  title: React.ReactNode
  aside?: React.ReactNode
  action?: React.ReactNode
}

export default function SectionHead({ kicker, title, aside, action }: SectionHeadProps) {
  return (
    <header className="section-head">
      <div style={{ flex: 1, minWidth: 280 }}>
        <div className="section-head-kicker">{kicker}</div>
        <h2 className="section-head-title">{title}</h2>
      </div>
      {aside && <p className="section-head-aside">{aside}</p>}
      {action && action}
    </header>
  )
}
