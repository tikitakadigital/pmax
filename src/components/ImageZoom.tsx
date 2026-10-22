'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { createPortal } from 'react-dom'

/**
 * Click-to-enlarge for every screenshot in a blog post.
 *
 * Posts are server-rendered prose, so instead of wrapping each <Image> by hand
 * this enhances `.prose figure img` after load: an "Enlarge" button on each
 * image and a full-screen viewer at the image's real size. Without JavaScript
 * the images stay as they are (gallery images still link to the file).
 */
export default function ImageZoom({ label = 'Enlarge', closeLabel = 'Close' }: { label?: string; closeLabel?: string }) {
  const pathname = usePathname()
  const [open, setOpen] = useState<{ src: string; alt: string; width: number } | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const show = (img: HTMLImageElement) => {
      returnFocus.current = document.activeElement as HTMLElement
      setOpen({ src: img.currentSrc || img.src, alt: img.alt, width: img.naturalWidth || img.width })
    }
    const cleanups: (() => void)[] = []
    document.querySelectorAll<HTMLImageElement>('.prose figure img').forEach(img => {
      const figure = img.closest('figure')
      if (!figure || figure.dataset.zoom) return
      figure.dataset.zoom = '1'
      img.style.cursor = 'zoom-in'

      const button = document.createElement('button')
      button.type = 'button'
      button.className = 'image-zoom-button'
      button.setAttribute('aria-label', `${label}: ${img.alt}`)
      button.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M7 1h4v4M5 11H1V7M11 1 7 5M1 11l4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg><span>${label}</span>`
      // Below the image, never over it: screenshots have text right up to the edges.
      const holder = img.parentElement?.tagName === 'A' ? img.parentElement : img
      holder.after(button)

      const onClick = (e: Event) => { e.preventDefault(); show(img) }
      img.addEventListener('click', onClick)
      button.addEventListener('click', onClick)
      cleanups.push(() => {
        img.removeEventListener('click', onClick)
        img.style.cursor = ''
        button.remove()
        delete figure.dataset.zoom
      })
    })
    return () => cleanups.forEach(fn => fn())
  }, [pathname, label])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null) }
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKey)
      returnFocus.current?.focus()
    }
  }, [open])

  if (!open) return null
  // Portalled to <body>: an ancestor with a transform would otherwise trap the fixed overlay.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      data-image-zoom=""
      aria-label={open.alt}
      onClick={() => setOpen(null)}
      style={{ position: 'fixed', inset: 0, zIndex: 100000, background: 'rgba(8, 8, 8, 0.96)', overflow: 'auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '56px 16px 24px', cursor: 'zoom-out' }}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={() => setOpen(null)}
        aria-label={closeLabel}
        style={{ position: 'fixed', top: 12, right: 16, width: 36, height: 36, borderRadius: 18, border: '1px solid #3a3a3a', background: '#151515', color: '#f6f4ef', fontSize: 20, lineHeight: 1, cursor: 'pointer' }}
      >×</button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={open.src}
        alt={open.alt}
        style={{ display: 'block', margin: 'auto', width: `min(96vw, ${Math.round(open.width * 1.5)}px)`, height: 'auto', borderRadius: 4, background: '#fff' }}
      />
    </div>,
    document.body,
  )
}
