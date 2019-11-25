/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        green: '#60c07a',
        red: '#ed7144',
        blue: '#0f207c',
        gray: '#f0f2f7',
        lightgray: '#f8f9fb',
        purple: '#4f6de4',
        'orange-1': '#f7c34e',
        'orange-2': '#f4ae33',
        'orange-3': '#f29b36',
        'orange-4': '#ed733a'
      }
    }
  },
  variants: {},
  plugins: []
}
