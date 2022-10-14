/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        // 'shelduckBlue' : '#98DAD9',
        // 'AntiFlashWhite' : '#EAEBED',
        // 'AirBlue' : '#5B8291',
        // 'Charcoal' : '#2E424D',
        // 'white': '#ffffff',
        // 'black' : '#000000',
        // 'primary': '#023047',
        // 'button': '#5b8291',
        // 'buttonhover': '#98dad9',
           'background':'#fbfffe',
           'colortxt': '#1b1b1e',
           'buttoncolor':'#003049',
           'buttoncolorhover':'#fdf0d5',
           'buttontext':'#fdf0d5',
           'buttontexthover':"#003049"
      },
      width:{
       'signup':'30rem'
      },
      backgroundImage: {
        'sc01': "url('/src/assets/sc01.jpg')",
        'sc02': "url('/src/assets/sc02.jpg')",
      }
    },
  },
  plugins: [],
}
