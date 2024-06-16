/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: [
    './src/stories/*.stories.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    path.join(__dirname, './src/**/*.(js|jsx|ts|tsx)'),
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
