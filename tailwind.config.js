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
      colors: {
        'primary': '#023047',
         'button': '#5b8291',
         'buttonhover': '#98dad9'
      },
      backgroundImage: {
        'sc01': "url('/src/assests/sc01.jpg')",
        'sc02': "url('/src/assests/sc02.jpg')",
      }
    },
    
  },
  plugins: [],
}
