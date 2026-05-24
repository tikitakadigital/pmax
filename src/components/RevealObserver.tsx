'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const elements = document.querySelectorAll<Element>('.reveal, .reveal-stagger')

    // Mark viewport-visible elements before enabling animations to prevent a
    // frame where they flash invisible between js-reveal being added and the
    // IntersectionObserver firing.
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight + 100) {
        el.classList.add('is-visible')
      }
    })

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

    elements.forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
