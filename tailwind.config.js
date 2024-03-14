/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBrown: '#910F37',
        customlightbrown: '#f2efdd',
        customDarkbrown: '#800125',
     },
      fontFamily :{
      poppin : "Poppins, sans-serif",
     }
      
    },
  },
  plugins: [],
}

