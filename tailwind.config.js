/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        newsCycle:['News Cycle', 'sans-serif'],
        roboto:['Roboto','sans-serif'],
        openSans:['Open Sans','sans-serif'],
        poppins:['Poppins','sans-serif'],
        garamond:['EB Garamond','sans-serif'],
        lato:['Lato','sans-serif']
      },
      colors:{
        'primary':'#FA7070',
        'secondary':'#C6EBC5',
        'tertiary':'#A1C398'
      }
    },
  },
  plugins: [],
}