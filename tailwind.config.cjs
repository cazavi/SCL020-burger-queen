/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Comfortaa': ['Comfortaa', 'cursive'],
      'AmaticSC': ['"Amatic SC"', 'cursive']
    },
    extend: {},
    colors: {
      'green':'#B9C48B',
      'green-light':'#F4FDD0',
      'green-dark':'#414531',
    },
    boxShadow:{
      'full': '0 5px 5px rgba(0,0,0,0.5)',
      '3xl': '0 5px 5px rgba(0,0,0,0.3)'
    }
  },
  plugins: [],
}