module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
// npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch