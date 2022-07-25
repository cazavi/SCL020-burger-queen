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
    }
  },
  plugins: [],
}