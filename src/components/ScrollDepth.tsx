'use client'

import { useEffect } from 'react'
import { gtm } from '@/lib/gtm'

const MILESTONES = [25, 50, 75, 90]

export default function ScrollDepth() {
  useEffect(() => {
    const fired = new Set<number>()

    function check() {
      const el = document.documentElement
      const pct = Math.round((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)
      for (const m of MILESTONES) {
        if (!fired.has(m) && pct >= m) {
          fired.add(m)
          gtm.scrollDepth(m)
        }
      }
    }

    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  return null
}
