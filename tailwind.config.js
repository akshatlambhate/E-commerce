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
        xsm: '360px',
        sm: '412px',
        md: '820px',
        lg: '1024px',
        xl: '1280px',
        dxl: '1536px',
      },
    },
  },
  plugins: [],
}
