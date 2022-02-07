module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      textColor: {
        'regal-blue': '#233657',
      }
    },
  },
  plugins: [],
}
// npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch