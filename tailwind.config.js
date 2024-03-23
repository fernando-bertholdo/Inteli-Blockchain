/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
      backgroundImage: {
        "url('bg')": "url('../src/assets/background-ib.svg')",
      }

    },
  },
  plugins: [],
} 
}