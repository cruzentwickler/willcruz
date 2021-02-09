const { fontFamily, colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'class',

  theme: {
    colors: {
      brand: {
        500: '#EF4444'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...fontFamily.sans],
        handwriting: ['Indie Flower', ...fontFamily.sans]
      }
    }
  },

  variants: {
    extend: {}
  },

  plugins: [require('@tailwindcss/typography')]
};
