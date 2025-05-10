import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["motion"]?: typeof import("@vueuse/motion/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["@vueuse/motion/nuxt", Exclude<NuxtConfig["motion"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   motion: any,
  }
  interface PublicRuntimeConfig {
   motion: {
      directives: {
         "pop-bottom": {
            initial: {
               scale: number,

               opacity: number,

               y: number,
            },

            visible: {
               scale: number,

               opacity: number,

               y: number,
            },
         },
      },
   },

   i18n: {
      baseUrl: string,

      defaultLocale: string,

      defaultDirection: string,

      strategy: string,

      lazy: boolean,

      rootRedirect: any,

      routesNameSeparator: string,

      defaultLocaleRouteNameSuffix: string,

      skipSettingLocaleOnNavigate: boolean,

      differentDomains: boolean,

      trailingSlash: boolean,

      configLocales: Array<{

      }>,

      locales: {
         en: {
            domain: any,
         },

         fr: {
            domain: any,
         },

         nl: {
            domain: any,
         },

         de: {
            domain: any,
         },

         ar: {
            domain: any,
         },

         it: {
            domain: any,
         },

         pt: {
            domain: any,
         },

         es: {
            domain: any,
         },

         hi: {
            domain: any,
         },

         zh: {
            domain: any,
         },
      },

      detectBrowserLanguage: {
         alwaysRedirect: boolean,

         cookieCrossOrigin: boolean,

         cookieDomain: any,

         cookieKey: string,

         cookieSecure: boolean,

         fallbackLocale: string,

         redirectOn: string,

         useCookie: boolean,
      },

      experimental: {
         localeDetector: string,

         switchLocalePathLinkSSR: boolean,

         autoImportTranslationFunctions: boolean,
      },
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }