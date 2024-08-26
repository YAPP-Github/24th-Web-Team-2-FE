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
      transparent: 'transparent',
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
      borderRadius: {
        smaller: '0.25rem',
        '4xl': '2rem',
      },
      spacing: {
        25: '6.25rem',
        50: '12.5rem',
        inputBox: '30.375rem',
        emailSenderButton: '26.375rem',
        content: '75rem',
        articleCard: '43.3125rem',
        domainCard: '20.25rem',
        max_domainCard: '30.5rem',
        landingPageHeight: 'calc(100vh - 4rem)',
      },
      fontSize: {
        '21px': '1.3125rem',
        '15px': '0.9375rem',
      },
      borderImage: {
        rainbow:
          'linear-gradient(90deg, rgba(105, 176, 18, 1) 0%, rgba(247, 187, 19, 1) 19%, rgba(230, 131, 2, 1) 37%, rgba(198, 45, 50, 1) 57%, rgba(134, 40, 114, 1) 76%, rgba(0, 118, 178, 1) 100%)',
      },
      animationDelay: {
        200: '200ms',
        400: '400ms',
        600: '600ms',
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
        '.user-drag-none': {
          '-webkit-user-drag': 'none' /* Safari, Chrome */,
          '-moz-user-drag': 'none' /* Firefox */,
          '-o-user-drag': 'none' /* Opera */,
          'user-drag': 'none' /* Standard syntax */,
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
