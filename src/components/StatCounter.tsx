'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface StatCounterProps {
  prefix?: string
  value: number
  suffix?: string
  label: string
}

export default function StatCounter({ prefix = '', value, suffix = '', label }: StatCounterProps) {
  const numRef = useRef<HTMLSpanElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = numRef.current
    if (!el) return

    const counter = { val: 0 }

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        if (triggered.current) return
        triggered.current = true
        gsap.to(counter, {
          val: value,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(counter.val).toString()
          },
        })
      },
    })

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [value])

  return (
    <div className="hero-deck-stat">
      <span className="hero-deck-stat-num">
        {prefix}<span ref={numRef}>0</span>{suffix}
      </span>
      <span className="hero-deck-stat-label">{label}</span>
    </div>
  )
}
