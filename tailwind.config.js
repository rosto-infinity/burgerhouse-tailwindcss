/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors:{
      'primary': '#ffc045',
      'primary-hover': '#f5b029',
      'secondary': '#3d2514',
      'secondary-hover': '#231105',
      'red-primary': '#bf2222',
      'red-primary-hover': '#990e0e',
      'red-danger': '#990e00',
      'white-prof': '#fff',
      'white-prof-200': '#dcdcdc',
      'white-prof-400': '#bebebe',

    },
    fontFamily: {
      'secondary': ['"Alfa Slab One"'],
    },
  },
  plugins: [],
}
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
