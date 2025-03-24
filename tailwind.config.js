const colors = require('tailwindcss/colors')

delete colors?.lightBlue
delete colors?.warmGray
delete colors?.trueGray
delete colors?.coolGray
delete colors?.blueGray

module.exports = {
  content: ['./src/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  media: false,
  mode: 'jit',
  theme: {
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif']
    },
    colors: {
      // You may customize your own custom color here
      ...colors,
      primary: '#377DE0',
      secondary: '#FFC027',
      tertiary: '#1B1C31'
    }
  },
  plugins: [require('tailwind-filter-utilities')]
}
