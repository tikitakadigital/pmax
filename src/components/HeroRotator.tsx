const words = ['performance.', 'visibility.', 'customers.', 'growth.']

export default function HeroRotator() {
  return (
    <div className="hero-rotator" aria-hidden="true">
      <div className="hero-rotator-list">
        {words.map((word) => (
          <span key={word}>{word}</span>
        ))}
      </div>
    </div>
  )
}
