/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
    extend:{
      colors: {
           'background':'#fbfffe',
           'colortxt': '#1b1b1e',
           'buttoncolor':'#003049',
           'buttoncolorhover':'#fdf0d5',
           'buttontext':'#fdf0d5',
           'buttontexthover':"#003049",
           'childdiv':'#a5a5a5',
           'parentdiv':'#d1d5db',
      },
      width:{
       'signup':'30rem'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      backgroundImage: {
        'sc01': "url('/src/assets/sc01.jpg')",
        'sc02': "url('/src/assets/sc02.jpg')",
      }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
    },
  plugins: [], 
  } 
