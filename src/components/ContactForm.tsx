'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

type State = 'form' | 'sending' | 'success' | 'error'

const strings = {
  en: {
    name: 'Your name *', company: 'Company *', email: 'Email *', phone: 'Phone',
    topicLabel: 'What would you like to talk about?',
    topics: [
      "A new project — let's scope it",
      'Free AI search visibility audit',
      'Free Google Ads / Meta account audit',
      'A specific service question',
      'Careers',
      'Something else',
    ],
    messageLabel: 'Tell us a bit more',
    privacyPre: "I've read and agree to the ",
    privacyLink: 'privacy policy',
    privacyPost: '.',
    submit: 'Send message',
    sending: 'Sending…',
    successTitle: <>Message <em>received.</em></>,
    successDeck: <>Your note is in our inbox. A human (almost certainly Philipp) will read it and reply within <strong>24 hours</strong> — usually the same working day. If it&apos;s urgent, the fastest path is the phone.</>,
    successCall: 'Call +34 871 242 160 →',
    successJournal: 'Read the journal while you wait →',
    errorTitle: <>Something didn&apos;t <em>land.</em></>,
    errorDeck: "The message didn't reach our inbox. Could be the network, could be us — either way, we'd rather you didn't have to type all that again. The two paths below are faster than retrying the form.",
    errorEmail: 'Email hello@pmax.online →',
    errorCall: 'Call +34 871 242 160 →',
    errorRetry: 'Or try the form again →',
    receivedLabel: 'RECEIVED',
    notSentLabel: 'NOT SENT',
  },
  de: {
    name: 'Ihr Name *', company: 'Unternehmen *', email: 'E-Mail *', phone: 'Telefon',
    topicLabel: 'Worüber möchten Sie sprechen?',
    topics: [
      'Ein neues Projekt — lassen Sie es uns besprechen',
      'Kostenloser KI-Sichtbarkeits-Audit',
      'Kostenloser Google Ads / Meta-Account-Audit',
      'Eine Frage zu einem bestimmten Service',
      'Karriere',
      'Etwas anderes',
    ],
    messageLabel: 'Erzählen Sie uns ein bisschen mehr',
    privacyPre: 'Ich habe die ',
    privacyLink: 'Datenschutzerklärung',
    privacyPost: ' gelesen und stimme ihr zu.',
    submit: 'Nachricht senden',
    sending: 'Wird gesendet…',
    successTitle: <>Nachricht <em>erhalten.</em></>,
    successDeck: <>Ihre Nachricht ist in unserem Posteingang. Ein Mensch (höchstwahrscheinlich Philipp) wird sie lesen und innerhalb von <strong>24 Stunden</strong> antworten — meist noch am selben Werktag. Bei dringenden Anliegen ist das Telefon der schnellste Weg.</>,
    successCall: 'Anrufen +34 871 242 160 →',
    successJournal: 'Journal lesen →',
    errorTitle: <>Etwas ist <em>schiefgelaufen.</em></>,
    errorDeck: 'Die Nachricht hat unseren Posteingang nicht erreicht. Das kann an der Verbindung liegen — oder an uns. Die zwei Wege unten sind schneller als das Formular erneut auszufüllen.',
    errorEmail: 'E-Mail senden →',
    errorCall: 'Anrufen +34 871 242 160 →',
    errorRetry: 'Oder Formular erneut versuchen →',
    receivedLabel: 'ERHALTEN',
    notSentLabel: 'NICHT GESENDET',
  },
  es: {
    name: 'Tu nombre *', company: 'Empresa *', email: 'Email *', phone: 'Teléfono',
    topicLabel: '¿De qué quieres hablar?',
    topics: [
      'Un nuevo proyecto — vamos a verlo',
      'Auditoría gratuita de visibilidad en IA',
      'Auditoría gratuita de Google Ads / Meta',
      'Una pregunta sobre un servicio concreto',
      'Empleo',
      'Otra cosa',
    ],
    messageLabel: 'Cuéntanos un poco más',
    privacyPre: 'He leído y acepto la ',
    privacyLink: 'política de privacidad',
    privacyPost: '.',
    submit: 'Enviar mensaje',
    sending: 'Enviando…',
    successTitle: <>Mensaje <em>recibido.</em></>,
    successDeck: <>Tu mensaje está en nuestra bandeja de entrada. Una persona real (casi seguro Philipp) lo leerá y responderá en <strong>24 horas</strong> — normalmente el mismo día laborable. Si es urgente, el teléfono es más rápido.</>,
    successCall: 'Llamar +34 871 242 160 →',
    successJournal: 'Leer el journal →',
    errorTitle: <>Algo no <em>llegó.</em></>,
    errorDeck: "El mensaje no llegó a nuestra bandeja de entrada. Puede ser la red, puede ser nuestro lado — de cualquier forma, preferimos que no tengas que volver a escribirlo todo. Los dos caminos de abajo son más rápidos que reintentar el formulario.",
    errorEmail: 'Escribir a hello@pmax.online →',
    errorCall: 'Llamar +34 871 242 160 →',
    errorRetry: 'O intentar el formulario de nuevo →',
    receivedLabel: 'RECIBIDO',
    notSentLabel: 'NO ENVIADO',
  },
}

function timeNow() {
  const d = new Date()
  return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0') + ' CET'
}
function makeRef(prefix: string) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let s = ''
  for (let i = 0; i < 5; i++) s += chars[(Math.random() * chars.length) | 0]
  return prefix + '-' + s
}

type Locale = 'en' | 'de' | 'es'

function SuccessPanel({ t, blogHref }: { t: typeof strings.en; blogHref: string }) {
  return (
    <div className="cf-result" role="status" aria-live="polite">
      <div className="cf-mark" aria-hidden="true">
        <svg className="cf-svg" viewBox="0 0 240 200">
          <path className="cf-bracket" d="M 80 50 L 50 50 L 50 150 L 80 150"
            fill="none" stroke="#f6f4ef" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" />
          <circle className="cf-dot" cx="138" cy="100" r="20" fill="#3cffd0" />
          <circle className="cf-ring cf-ring--1" cx="138" cy="100" r="20" fill="none" stroke="#3cffd0" strokeWidth="2" />
          <circle className="cf-ring cf-ring--2" cx="138" cy="100" r="20" fill="none" stroke="#3cffd0" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="cf-meta">
        <span className="cf-stamp"><span className="cf-stamp-dot" />{t.receivedLabel} · <span>{timeNow()}</span></span>
        <span className="cf-ref">REF · <span>{makeRef('A')}</span></span>
      </div>
      <h2 className="cf-title">{t.successTitle}</h2>
      <p className="cf-deck">{t.successDeck}</p>
      <div className="cf-actions">
        <a href="tel:+34871242160" className="cf-link">{t.successCall}</a>
        <a href={blogHref} className="cf-link cf-link--ghost">{t.successJournal}</a>
      </div>
    </div>
  )
}

function ErrorPanel({ t, onRetry }: { t: typeof strings.en; onRetry: () => void }) {
  return (
    <div className="cf-result cf-result--error" role="alert" aria-live="assertive">
      <div className="cf-mark" aria-hidden="true">
        <svg className="cf-svg" viewBox="0 0 240 200">
          <path className="cf-bracket cf-bracket--broken" d="M 80 50 L 50 50 L 50 150 L 80 150"
            fill="none" stroke="#5200ff" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" />
          <circle className="cf-dot cf-dot--error" cx="138" cy="100" r="20" fill="#5200ff" />
          <line className="cf-glitch" x1="60" y1="100" x2="160" y2="100" stroke="#5200ff" strokeWidth="2" strokeDasharray="3 4" />
        </svg>
      </div>
      <div className="cf-meta">
        <span className="cf-stamp cf-stamp--error"><span className="cf-stamp-dot" />{t.notSentLabel} · <span>{timeNow()}</span></span>
        <span className="cf-ref">REF · <span>{makeRef('E')}</span></span>
      </div>
      <h2 className="cf-title">{t.errorTitle}</h2>
      <p className="cf-deck">{t.errorDeck}</p>
      <div className="cf-actions">
        <a href="mailto:hello@pmax.online" className="cf-link">{t.errorEmail}</a>
        <a href="tel:+34871242160" className="cf-link cf-link--ghost">{t.errorCall}</a>
      </div>
      <button type="button" className="cf-retry" onClick={onRetry}>{t.errorRetry}</button>
    </div>
  )
}

export default function ContactForm({ locale = 'en' }: { locale?: Locale }) {
  const [state, setState] = useState<State>('form')
  const [loadedAt, setLoadedAt] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => { setLoadedAt(String(Date.now())) }, [])
  const t = strings[locale] ?? strings.en
  const privacyHref = locale === 'en' ? '/legal/privacy' : `/${locale}/legal/privacy`
  const blogHref = locale === 'en' ? '/blog' : `/${locale}/blog`

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!e.currentTarget.checkValidity()) { e.currentTarget.reportValidity(); return }
    setState('sending')
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const res = await fetch('/send.php', {
        method: 'POST',
        body: new URLSearchParams(data as Record<string, string>),
      })
      const json = await res.json()
      setState(json.ok ? 'success' : 'error')
    } catch {
      setState('error')
    }
  }

  function retry() {
    setState('form')
    formRef.current?.reset()
  }

  if (state === 'success') return <SuccessPanel t={t} blogHref={blogHref} />
  if (state === 'error') return <ErrorPanel t={t} onRetry={retry} />

  const sending = state === 'sending'

  return (
    <form ref={formRef} className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 18 }} noValidate aria-label="Contact form" onSubmit={handleSubmit}>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span className="cf-label">{t.name}</span>
        <input name="name" required type="text" autoComplete="name" />
      </label>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span className="cf-label">{t.company}</span>
        <input name="company" required type="text" autoComplete="organization" />
      </label>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span className="cf-label">{t.email}</span>
          <input name="email" required type="email" autoComplete="email" />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span className="cf-label">{t.phone}</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span className="cf-label">{t.topicLabel}</span>
        <select name="topic" style={{ appearance: 'none', backgroundImage: 'linear-gradient(45deg,transparent 50%,#fff 50%),linear-gradient(135deg,#fff 50%,transparent 50%)', backgroundPosition: 'calc(100% - 18px) 50%, calc(100% - 12px) 50%', backgroundSize: '6px 6px', backgroundRepeat: 'no-repeat', paddingRight: 36 }}>
          {t.topics.map((opt) => <option key={opt}>{opt}</option>)}
        </select>
      </label>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span className="cf-label">{t.messageLabel}</span>
        <textarea name="message" rows={6} style={{ resize: 'vertical', minHeight: 140, fontFamily: 'var(--font-sans)' }} />
      </label>
      <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: 'var(--font-sans)', fontSize: 14, color: '#e9e9e9', lineHeight: '1.5' }}>
        <input name="privacy" type="checkbox" required style={{ marginTop: 4 }} />
        <span>
          {t.privacyPre}
          <Link href={privacyHref} style={{ color: 'var(--color-jelly-mint)', borderBottom: '1px solid' }}>{t.privacyLink}</Link>
          {t.privacyPost}
        </span>
      </label>

      {/* Spam signals — hidden from users */}
      <div style={{ position: 'absolute', left: -9999, top: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input name="_t" type="hidden" value={loadedAt} />

      <button className="btn-primary" type="submit" disabled={sending} style={{ alignSelf: 'flex-start', fontSize: 13, padding: '14px 24px' }}>
        {sending ? t.sending : <>{t.submit} <span className="arrow" aria-hidden="true">→</span></>}
      </button>
    </form>
  )
}
