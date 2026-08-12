import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { CONTACT, NAV_IDS } from '../site.js'

export default function Booking() {
  const { t } = useLang()
  const b = t.booking

  const [form, setForm] = useState({ name: '', email: '', eventType: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'success' | 'error'
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    try {
      const res = await fetch(CONTACT.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', eventType: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="section section--darker" id={NAV_IDS.booking}>
      <div className="container">
        <span className="eyebrow">{b.eyebrow}</span>
        <h2 className="section-heading">{b.heading}</h2>
        <p style={{ color: 'var(--grey)', marginTop: 12, marginBottom: 0 }}>{b.lead}</p>

        <div className="booking__grid">
          {/* Form */}
          <form className="booking__form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label className="form-label" htmlFor="booking-name">{b.name}</label>
              <input
                id="booking-name"
                className="form-input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="booking-email">{b.email}</label>
              <input
                id="booking-email"
                className="form-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="booking-event">{b.eventType}</label>
              <input
                id="booking-event"
                className="form-input"
                type="text"
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
                placeholder={b.eventTypePlaceholder}
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="booking-message">{b.message}</label>
              <textarea
                id="booking-message"
                className="form-textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={b.messagePlaceholder}
                required
              />
            </div>

            {status === 'success' && (
              <div className="form-message form-message--success">{b.success}</div>
            )}
            {status === 'error' && (
              <div className="form-message form-message--error">{b.error}</div>
            )}

            <button
              type="submit"
              className="btn btn--primary form-submit"
              disabled={submitting}
            >
              {submitting ? '...' : b.send}
            </button>
          </form>

          {/* Contact info */}
          <div className="booking__info">
            <p style={{ color: 'var(--grey)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
              {b.orContact}
            </p>

            <div className="booking__contact-item">
              <span className="booking__info-label">Email</span>
              <span className="booking__contact-value">
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </span>
            </div>

            <div className="booking__contact-item">
              <span className="booking__info-label">Telegram</span>
              <a
                href={CONTACT.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="booking__tg-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.67l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.958.889z"/>
                </svg>
                {b.telegram}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
