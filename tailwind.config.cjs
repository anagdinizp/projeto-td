/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Nunito',
      },
      backgroundImage: {
        sorriso: 'url(/src/assets/background-doguinho.png)',
        doguinhos: 'url(/src/assets/background-amarelo-doguinhos.png)',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
          yellow: {
              300: '#FFF7AD',
              500: '#FCEC5D',
          },
          gray: {
            700: '#121214',
            800: '#1E1E1E',
            900: '#09090A',
          }
        },
    },
  },
  plugins: [],
}
