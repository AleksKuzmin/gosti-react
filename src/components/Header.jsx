import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { NAV_IDS } from '../site.js'
import { LANGUAGES } from '../i18n/content.js'

export default function Header() {
  const { t, lang, setLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { id: NAV_IDS.repertoire, label: t.nav.repertoire },
    { id: NAV_IDS.formats,    label: t.nav.formats },
    { id: NAV_IDS.gallery,    label: t.nav.gallery },
    { id: NAV_IDS.booking,    label: t.nav.book },
  ]

  function handleNavClick(id) {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="header" role="banner">
        <div className="container header__inner">
          <a
            href="#top"
            className="header__logo"
            aria-label={t.a11y.logo}
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            ГОСТИ ИЗ ПРОШЛОГО
          </a>

          <nav className="header__nav" aria-label={t.a11y.mainNav}>
            {navLinks.map(link => (
              <button
                key={link.id}
                className="header__nav-link"
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="header__right">
            <div className="lang-toggle" aria-label={t.a11y.langSwitch}>
              {LANGUAGES.map(l => (
                <button
                  key={l}
                  className={`lang-toggle__btn${lang === l ? ' lang-toggle__btn--active' : ''}`}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              className="header__menu-btn"
              aria-label={t.a11y.openMenu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay nav */}
      <div
        className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={t.a11y.mainNav}
      >
        <button
          className="mobile-nav__close"
          aria-label={t.a11y.closeMenu}
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        {navLinks.map(link => (
          <button
            key={link.id}
            className="mobile-nav__link"
            onClick={() => handleNavClick(link.id)}
          >
            {link.label}
          </button>
        ))}
        <div className="lang-toggle" style={{ marginTop: 16 }}>
          {LANGUAGES.map(l => (
            <button
              key={l}
              className={`lang-toggle__btn${lang === l ? ' lang-toggle__btn--active' : ''}`}
              onClick={() => { setLang(l); setMenuOpen(false) }}
              aria-pressed={lang === l}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
