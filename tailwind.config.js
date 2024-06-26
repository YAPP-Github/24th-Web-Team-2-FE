/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: [
    './src/stories/*.stories.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    path.join(__dirname, './src/**/*.(js|jsx|ts|tsx)'),
  ],
  theme: {
    colors: {
      black: '#000000',
      darkgrey: '#797979',
      lightgrey: '#DBDBDB',
      background_grey: '#F4F4F4',
      white: '#ffffff',
      blue: '#168FD0',
      green: '#69B012',
      violet: '#862872',
      red: '#C62D32',
      orange: '#E68302',
      yellow: '#F7BB13',
    },
    letterSpacing: {
      tightest: '-5%',
      tighter: '-4%',
    },
    extend: {
      fontSize: {
        '21px': '1.3125rem',
        '15px': '0.9375rem',
      },
    },
  },
  plugins: [],
};
