import { useLang } from '../i18n/LanguageContext.jsx'
import { NAV_IDS } from '../site.js'

export default function Repertoire() {
  const { t } = useLang()
  const r = t.repertoire

  return (
    <section className="section section--dark" id={NAV_IDS.repertoire}>
      <div className="container">
        <span className="eyebrow">{r.eyebrow}</span>
        <h2 className="section-heading">{r.heading}</h2>
        <div className="repertoire__genres">
          {r.genres.map((genre, i) => (
            <span key={i} className="genre-chip">{genre}</span>
          ))}
        </div>
        <p className="repertoire__note">{r.note}</p>
      </div>
    </section>
  )
}
