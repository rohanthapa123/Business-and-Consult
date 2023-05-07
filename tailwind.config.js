/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'mulish': ['mulish','sans-serif'],
      'ubuntu':['ubuntu','serif']
    },
    extend: {
      listStyleImage: {
        Vector: 'url("./src/assets/Vector.png")',
      },
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
}

