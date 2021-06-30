module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'tecnico-capilar': "url('./resources/tecnico-capilar.jpg')",
        'academico': "url('./resources/academico.jpg')",
        'urbano': "url('./resources/urbano.jpg')",
        'hero': "url('./resources/other-hero.jpg')",
       }),
       height: {
        'vh': 'calc(100vh - 84px)',
      },
      colors: {
        primary: '#232227',
        secondary: '#bc8c4b',
        brown: '#9e8a78',
        gray: '#7a7a7c',
        text: '#777',
        background: '#fcf9f5'
      },
      fontFamily: {
        'prata': ['Prata', 'sans-serif'],
        'lato': ['Lato', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
