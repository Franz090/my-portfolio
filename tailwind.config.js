const formsPlugin = require('@tailwindcss/forms');

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#6c757d',
      'primary-450': '#fffafa',
      'secondary-450': '#181818'
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '0.8rem',
      wider: '.2em',
      widest: '.1em',
      widest: '.45em',
    },
    fontFamily: {
      'roboto': [ 'Roboto', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      textColor: {
        'primary': '#fffafa',      // Define primary text color
        'secondary': '#181818',    // Define secondary text color
        'tertiary': '#397fa7',
      },
      fontSize: {
        '6xl': '3.8rem', // Define a custom text size with the class name 'md:text-6xl'
        'sm': '13px',
        
      },
      
    },
  },
  plugins: [
    formsPlugin,
    // Add other plugins if needed
  ],
}; 