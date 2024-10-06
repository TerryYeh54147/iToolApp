/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary:"#38bdf8",
        light: {
          bgColor: '#ffffff',
          txtColor: '#000000',
        },
        dark: {
          bgColor: '#1e1e1e',
          txtColor: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}
