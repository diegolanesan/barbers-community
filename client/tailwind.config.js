module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'barber-types': "url('./resources/barberTypes.jpg')",
        'hero': "url('./resources/hero.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}