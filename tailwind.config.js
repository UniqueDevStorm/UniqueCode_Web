module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        '11': 'repeat(11, minmax(0, 1fr))'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}