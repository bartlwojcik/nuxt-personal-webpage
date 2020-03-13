// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  mode: 'universal',
  srcDir: 'src',
  buildDir: 'functions/.nuxt',
  /*
   ** Headers of the page
   */
  head: {
    title: 'bartłomiej wójcik',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/icons/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', href: '/icons/favicon-96x96.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700|Playfair+Display:400,700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/bus',
    '~plugins/vue-scrollto.js',
    {
      src: '~/plugins/v-waypoint.client.js',
      mode: 'client'
    },
    '~/plugins/vuelidate'
  ],
  serverMiddleware: [{ path: '/api/contact', handler: '~/api/contact' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // Disabled to avoid eslint configuration conflicts
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en.js'
          },
          {
            code: 'pl',
            file: 'pl.js'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en'
      }
    ],
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faLinkedinIn', 'faGithub']
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['faPaperPlane', 'faEnvelope']
          },
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faLongArrowAltLeft',
              'faLongArrowAltRight',
              'faBars',
              'faCoffee',
              'faHeart'
            ]
          }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
