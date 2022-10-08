/** @type {import('tailwindcss').Config} */
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
        'phone': '420px',
        'tablet': '640px',  
        'laptop': '1024px',
        'desktop': '1280px',
      },
      }
    },
  plugins: [],
}
