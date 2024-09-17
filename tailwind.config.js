/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
    extend: {
      colors: {
        "mainColor": '#1C1E53',
        "mainTextColor": '#282938'
      }
    },
  },
  plugins: [],
}

