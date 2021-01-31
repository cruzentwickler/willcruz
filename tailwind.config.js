const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...fontFamily.sans]
      }
    }
  },

  variants: {
    extend: {}
  },

  plugins: [require('@tailwindcss/typography')]
};
