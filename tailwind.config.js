/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './client/components/*.tsx',
    './public/index.html',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
    extend: {
      boxShadow: {
        '3xl': [
          '0px -25px 20px -20px rgba(0,0,0,0.45)',
          '0px 25px 20px -20px rgba(0,0,0,0.45)',
        ],
      },
      fontFamily: {
        inter: 'Inter var,ui-sans-serif !important',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('flowbite/plugin')],
}
