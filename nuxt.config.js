export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cm-web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  i18n: {
    langDir: '~/locales/',
    strategy: 'prefix',
    locales: [
      {code: 'vi', iso: 'vi-VN', file: 'vi.js'},
      {code: 'en', iso: 'en-US', file: 'en.js'},
      {code: 'ja', iso: 'ja-JP', file: 'ja.js'},
    ],
    defaultLocale: 'vi',
    vueI18n: {
      fallbackLocale: 'vi',
    },
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
