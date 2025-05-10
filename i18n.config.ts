import en from './i18n/en.json'
import fr from './i18n/fr.json'
import nl from './i18n/nl.json'
import de from './i18n/de.json'
import ar from './i18n/ar.json'
import pt from './i18n/pt.json'
import it from './i18n/it.json'
import es from './i18n/es.json'
import hi from './i18n/hi.json'
import zh from './i18n/zh.json'

export default defineI18nConfig(() => ({
  legacy: false,
  // locales: ['en', 'fr'],
  locale: 'en',
  warnHtmlMessage: false, // disable warning HTML in message
  fallbackLocale: 'fr',
  messages: {
    en,
    fr,
    nl,
    de,
    ar,
    pt,
    it,
    es,
    hi,
    zh
  }
}))
