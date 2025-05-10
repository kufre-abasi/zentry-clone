// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  spaLoadingTemplate: 'spa-loading-template.html',
  css: ['~/assets/main.css', "vue-toastification/dist/index.css"],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'fr',
        name: 'Français'
      },
      { code: 'nl', name: 'Dutch' },
      { code: 'de', name: 'German' },
      { code: 'ar', name: 'Arabic' },
      { code: 'it', name: 'Italian' },
      { code: 'pt', name: 'Portuguese' },
      { code: 'it', name: 'Italian' },
      { code: 'es', name: 'Spanish' },
      { code: 'hi', name: 'Hindi' },
      { code: 'zh', name: 'Chinese' }
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0
            }
          }
        }
      }
    }
  },
  // build: {
  //   transpile: ['vue-toastification']
  // },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@vueuse/motion/nuxt'],
  pinia: {
    storesDirs: ['./stores/*']
  },
  imports: {
    dirs: ['./stores']
  },
  ssr: false,
  app: {
    head: {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-16694980929',
          async: true
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16694980929');
          `
        }
      ]
    }
  }
})
