/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Gothic A1', 'sans-serif'],
    },
    colors: {
      yellow: '#F8B64C',
      blue: '#4285F4',
      'blue-light': '#395998',
      white: '#FFFFFF',
      ice: '#E3E3E3',
      gray: '#868686',
      black: '#010F07',
    },
    screens:{
      'xs': {'max': '639px'},
      ...defaultTheme.screens,
    }
  },
}
