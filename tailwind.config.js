/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#023047',
         'button': '#5b8291',
         'buttonhover': '#98dad9'
      }
    },
  },
  plugins: [],
}
