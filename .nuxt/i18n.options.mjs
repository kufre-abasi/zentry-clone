
// @ts-nocheck


export const localeCodes =  [
  "en",
  "fr",
  "nl",
  "de",
  "ar",
  "it",
  "pt",
  "es",
  "hi",
  "zh"
]

export const localeLoaders = {
  "en": [],
  "fr": [],
  "nl": [],
  "de": [],
  "ar": [],
  "it": [],
  "pt": [],
  "es": [],
  "hi": [],
  "zh": []
}

export const vueI18nConfigs = [
  () => import("../i18n.config.ts?hash=bffaebcb&config=1" /* webpackChunkName: "__i18n_config_ts_bffaebcb" */)
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "./i18n.config.ts",
  "locales": [
    {
      "code": "en",
      "name": "English"
    },
    {
      "code": "fr",
      "name": "Français"
    },
    {
      "code": "nl",
      "name": "Dutch"
    },
    {
      "code": "de",
      "name": "German"
    },
    {
      "code": "ar",
      "name": "Arabic"
    },
    {
      "code": "it",
      "name": "Italian"
    },
    {
      "code": "pt",
      "name": "Portuguese"
    },
    {
      "code": "es",
      "name": "Spanish"
    },
    {
      "code": "hi",
      "name": "Hindi"
    },
    {
      "code": "zh",
      "name": "Chinese"
    }
  ],
  "defaultLocale": "",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": null,
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "name": "English",
    "files": []
  },
  {
    "code": "fr",
    "name": "Français",
    "files": []
  },
  {
    "code": "nl",
    "name": "Dutch",
    "files": []
  },
  {
    "code": "de",
    "name": "German",
    "files": []
  },
  {
    "code": "ar",
    "name": "Arabic",
    "files": []
  },
  {
    "code": "it",
    "name": "Italian",
    "files": []
  },
  {
    "code": "pt",
    "name": "Portuguese",
    "files": []
  },
  {
    "code": "es",
    "name": "Spanish",
    "files": []
  },
  {
    "code": "hi",
    "name": "Hindi",
    "files": []
  },
  {
    "code": "zh",
    "name": "Chinese",
    "files": []
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
