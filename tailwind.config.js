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
        'custom-gray': '#6d757d',
        'custom-gray-light': '#f1f1f1',
        'custom-gray-custom': '#343a40',
      },
      corePlugins: {
        preflight: false,
      }
     
      
    },
  },
  plugins: [
    formsPlugin,
    require('flowbite/plugin')

  ],
}; 