import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { content, LANGUAGES, DEFAULT_LANGUAGE } from './content.js'

const STORAGE_KEY = 'gosti:lang'

const LanguageContext = createContext(null)

function readStoredLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (LANGUAGES.includes(saved)) return saved
  } catch {
    // private browsing / storage disabled — fall through to the default
  }
  return DEFAULT_LANGUAGE
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dataset.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore — remembering the choice is a nicety, not a requirement
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: content[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
