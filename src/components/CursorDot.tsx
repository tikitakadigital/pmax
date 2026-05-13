'use client'
import { useEffect, useRef } from 'react'

export default function CursorDot() {
  const ref = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const mouse = useRef({ x: -100, y: -100 })
  const targetScale = useRef(1)
  const scale = useRef(1)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) targetScale.current = 2.2
    }
    const onOut = (e: MouseEvent) => {
      if (!(e.relatedTarget as Element | null)?.closest('a, button')) targetScale.current = 1
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })

    let raf: number
    function loop() {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.13
      pos.current.y += (mouse.current.y - pos.current.y) * 0.13
      scale.current += (targetScale.current - scale.current) * 0.12
      if (ref.current) {
        ref.current.style.transform = `translate(${pos.current.x}px,${pos.current.y}px) scale(${scale.current})`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} aria-hidden="true" className="cursor-dot" />
}
