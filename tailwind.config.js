/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          notoSerif : "Noto Serif"
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

