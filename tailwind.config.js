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
        accent: '#ffdb00'
      }
    }
  },
  variants: {},
  plugins: []
}
