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
        'shelduckBlue' : '#98DAD9',
        'AntiFlashWhite' : '#EAEBED',
        'AirBlue' : '#5B8291',
        'Charcoal' : '#2E424D',
        'white': '#ffffff',
        'black' : '#000000',
      },
    },
  },
  plugins: [],
}
