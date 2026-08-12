import { useLang } from '../i18n/LanguageContext.jsx'
import { SOCIAL } from '../site.js'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">Гости из прошлого</span>

        <p className="footer__copy">{f.copy}</p>

        <nav className="footer__social" aria-label={f.followUs}>
          {Object.values(SOCIAL).map(s => (
            <a
              key={s.label}
              href={s.url}
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
