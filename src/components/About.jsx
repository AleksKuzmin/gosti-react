import { useLang } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section className="section section--dark" id="about">
      <div className="container">
        <div className="about__grid">
          <div>
            <span className="eyebrow">{a.eyebrow}</span>
            <h2 className="section-heading">{a.heading}</h2>
            <div className="about__accent-bar" />
          </div>
          <div>
            <p className="about__body">{a.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
