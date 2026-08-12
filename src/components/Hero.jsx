import { useLang } from '../i18n/LanguageContext.jsx'
import { NAV_IDS } from '../site.js'

export default function Hero() {
  const { t } = useLang()

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <h1 className="hero__name">
          Гости<br />из прошлого
        </h1>
        <p className="hero__tagline">{t.hero.tagline}</p>
        <div className="hero__ctas">
          <button
            className="btn btn--primary"
            onClick={() => scrollTo(NAV_IDS.booking)}
          >
            {t.hero.cta1}
          </button>
          <button
            className="btn btn--outline"
            onClick={() => scrollTo(NAV_IDS.repertoire)}
          >
            {t.hero.cta2}
          </button>
        </div>
      </div>
    </section>
  )
}
