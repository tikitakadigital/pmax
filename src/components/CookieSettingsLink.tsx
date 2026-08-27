'use client'

const label: Record<string, string> = {
  en: 'Cookie settings',
  de: 'Cookie-Einstellungen',
  es: 'Configuración de cookies',
}

export default function CookieSettingsLink({ locale = 'en' }: { locale?: string }) {
  return (
    <button
      onClick={() => window.openCookieSettings?.()}
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit', color: 'inherit' }}
    >
      {label[locale] ?? label.en}
    </button>
  )
}
