module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'tecnico-capilar': "url('./resources/tecnico-capilar.jpg')",
        'academico': "url('./resources/academico.jpg')",
        'urbano': "url('./resources/urbano.jpg')",
        'hero': "url('./resources/hero.jpg')",
       }),
       height: {
        'vh': 'calc(100vh - 44px)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
