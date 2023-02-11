/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.css"
  ],
  theme: {
    extend: {
      colors: {
        high:  "#9BEAF9",
        primary: "#151B28",
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily:{
        body: ['Nunito'],
        alfa: ['Alfa Slab One'],
        kalam: ['Kalam'],
        sofia: ['Sofia Sans Extra Condensed']
        
      },
      screen: {
        xs: 390,
        sl: 400
      }
    },
  },
  plugins: [],
}
