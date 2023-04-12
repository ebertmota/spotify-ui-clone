/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'black-400': '#121212',
        'black-350': '#181818',
        'black-320': '#232323',
        'black-300': '#282828',
      }
    },
  },
  plugins: [],
}
