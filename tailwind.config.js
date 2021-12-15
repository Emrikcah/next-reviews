const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,css}'
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      sky: colors.sky,
      cyan: colors.cyan,
      white: colors.white,
    },
    extend: {
      spacing:{
        'min-width':'375px',
        'fixed-width': '675px',
        
      }
    },
  },
  plugins: [],
}
