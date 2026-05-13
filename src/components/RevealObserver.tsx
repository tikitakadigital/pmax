'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    // Enable animations — content stays visible if this never runs
    document.documentElement.classList.add('js-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    )

    document.querySelectorAll<Element>('.reveal, .reveal-stagger').forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
