import { useLang } from '../i18n/LanguageContext.jsx'
import { NAV_IDS } from '../site.js'

const PLACEHOLDER_COUNT = 6

export default function Gallery() {
  const { t } = useLang()
  const g = t.gallery

  return (
    <section className="section" id={NAV_IDS.gallery}>
      <div className="container">
        <span className="eyebrow">{g.eyebrow}</span>
        <h2 className="section-heading">{g.heading}</h2>
        <div className="gallery__grid">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <div key={i} className="gallery__placeholder">
              {g.placeholder}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
