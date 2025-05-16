/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cafeBrown: "#332411"
      },
      fontFamily: {
        cursive: ['"Brush Script MT"', 'cursive']
      }
    },
  },
  plugins: [],
}
