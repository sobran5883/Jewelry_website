/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'urbanist':'Urbanist',
        'cinzel' : 'Cinzel',
        'inter' : 'Inter',
        'lato' : 'Lato',
        'rubik' : 'Rubik',
        'krub': 'Krub',
        'roboto':'Roboto'
      },
      colors:{
        primary: "#789A89",
        secondary: "#9CAD88",
        light: "#046307",
        dark: "#333333",
        dark2: "#999999",
      }
    },
  },
  plugins: [],
}