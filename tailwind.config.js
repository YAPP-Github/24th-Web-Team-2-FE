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
    extend: {
      width: {
        50: '12.5rem',
        inputBox: '30.375rem',
        emailSenderButton: '26.375rem',
      },
      fontSize: {
        '21px': '1.3125rem',
        '15px': '0.9375rem',
      },
      borderImage: {
        rainbow:
          'linear-gradient(90deg, rgba(105, 176, 18, 1) 0%, rgba(247, 187, 19, 1) 19%, rgba(230, 131, 2, 1) 37%, rgba(198, 45, 50, 1) 57%, rgba(134, 40, 114, 1) 76%, rgba(0, 118, 178, 1) 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.border-image-rainbow': {
          'border-width': '5px',
          'border-style': 'solid',
          'border-image':
            'linear-gradient(90deg, rgba(105, 176, 18, 1) 0%, rgba(247, 187, 19, 1) 19%, rgba(230, 131, 2, 1) 37%, rgba(198, 45, 50, 1) 57%, rgba(134, 40, 114, 1) 76%, rgba(0, 118, 178, 1) 100%)',
          'border-image-slice': 1,
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
