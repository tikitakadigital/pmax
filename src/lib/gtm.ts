type GtmEvent = Record<string, unknown> & { event: string }

export function push(payload: GtmEvent) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
}

export const gtm = {
  formStart: (locale: string) =>
    push({ event: 'form_start', form_id: 'contact', form_locale: locale }),

  formSubmit: (locale: string, topic: string) =>
    push({ event: 'form_submit', form_id: 'contact', form_locale: locale, form_topic: topic }),

  lead: (locale: string, topic: string, ref: string) =>
    push({ event: 'generate_lead', form_id: 'contact', form_locale: locale, form_topic: topic, lead_ref: ref }),

  scrollDepth: (pct: number) =>
    push({ event: 'scroll_depth', scroll_percent: pct }),
}
