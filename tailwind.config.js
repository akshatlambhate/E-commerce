/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        'shelduckBlue' : '#98DAD9',
        'AntiFlashWhite' : '#EAEBED',
        'AirBlue' : '#5B8291',
        'Charcoal' : '#2E424D',
        'white': '#ffffff',
        'black' : '#000000',
      },
      screens: {
        'xs': '360px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}
