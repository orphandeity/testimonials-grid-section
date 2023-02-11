/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      colors: {
        '_moderate-violet':         '#7541c8',
        '_very-dark-grayish-blue':  '#48556a',
        '_very-dark-blackish-blue': '#19212e',
        '_light-gray':              '#cfcfcf',
        '_light-grayish-blue':      '#ecf2f8',
      },
      fontFamily: {
        'sans': '"Barlow Semi Condensed"'
      },
      screens: {
        'desktop': '1440px',
        'mobile': '375px'
      }
    },
  },
  plugins: [],
}