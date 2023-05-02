/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/components/*.tsx', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter var,ui-sans-serif !important',
      },
    },
  },
  plugins: [],
}
