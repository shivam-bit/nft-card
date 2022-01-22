module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
            ...theme('colors'),
            'main': 'hsl(217, 54%, 11%)',
            'card': 'hsl(216, 50%, 16%)',
            'danger': '#e3342f',
            }),
    extend: {
      colors:{
        'cyan': 'hsl(178, 100%, 50%)',
      },
      borderColor:{
        'soft-blue': 'hsl(216, 40%, 16%)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}