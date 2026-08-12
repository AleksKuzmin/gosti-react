import { useLang } from '../i18n/LanguageContext.jsx'
import { NAV_IDS } from '../site.js'

export default function Formats() {
  const { t } = useLang()
  const f = t.formats

  return (
    <section className="section" id={NAV_IDS.formats}>
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">{f.eyebrow}</span>
          <h2 className="section-heading">{f.heading}</h2>
        </div>
        <div className="formats__grid">
          {f.cards.map((card, i) => (
            <div key={i} className="format-card">
              <span className="format-card__icon" aria-hidden="true">{card.icon}</span>
              <h3 className="format-card__title">{card.title}</h3>
              <p className="format-card__text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
