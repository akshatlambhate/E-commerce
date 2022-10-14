/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          'background':'#fbfffe',
           'colortxt': '#1b1b1e',
           'buttoncolor':'#003049',
           'buttoncolorhover':'#fdf0d5',
           'buttontext':'#fdf0d5',
           'buttontexthover':"#003049",
      }
    },
  },
  plugins: [],
}
