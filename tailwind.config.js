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
      'gray-light': '#d3dce6',
      'primary-450': '#fffafa',
      'secondary-450': '#181818'


    },
    fontFamily: {
      'roboto': [ 'Roboto', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans'],
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
      
    },
  },
  plugins: [
    formsPlugin,
    // Add other plugins if needed
  ],
}; 