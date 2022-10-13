/** @type {import('tailwindcss').Config} */
var defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'lightSkyBlue' : '#CAF0F8',
        'midSkyBlue' : '#90E0EF',
        'darkSkyBlue' : '#00B4D8',
        'blueShade' : '#0077B6',
        'darkBlue' : '#03045E',
        'white': '#ffffff',
        'black' : '#000000',
      },
    },
  },
  plugins: [],
}
