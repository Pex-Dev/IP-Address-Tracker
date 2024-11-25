/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'], // 'MiFuente' debe coincidir con el nombre de font-family definido en @font-face
      },
    },
  },
  plugins: [],
}

