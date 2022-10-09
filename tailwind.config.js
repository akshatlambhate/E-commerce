/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#3e424d",
        'secondry': "#5b8291",
        'light-primary': "#98dad9",
        'background': "#eaebed"
      }
    },
  },
  plugins: [],
}
