interface ScrollRevealProps {
  children: React.ReactNode
  stagger?: boolean
  className?: string
}

export default function ScrollReveal({ children, stagger = false, className = '' }: ScrollRevealProps) {
  const revealClass = stagger ? 'reveal-stagger' : 'reveal'
  const combined = [revealClass, className].filter(Boolean).join(' ')

  return (
    <div className={combined}>
      {children}
    </div>
  )
}
