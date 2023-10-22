import formsPlugin from '@tailwindcss/forms';


module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    fontFamily: {
      'roboto': [ 'Roboto', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'custom-gray': '#6c757d',
        'custom-gray-light': '#f1f1f1',
      },
     
      
    },
  },
  plugins: [
    formsPlugin,
    // Add other plugins if needed
  ],
}; 