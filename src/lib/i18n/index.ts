import { de } from './de'
import { es } from './es'

export type Lang = 'de' | 'es'
export type Translations = typeof de

export function getT(lang: string): Translations {
  if (lang === 'de') return de
  if (lang === 'es') return es as unknown as Translations
  return de
}

export { de, es }
