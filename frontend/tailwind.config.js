module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        'ex-purple': '#7754F8',
        'ex-purple-300': '#b7a9f3',
        
      },
      textColor: {
        'regal-blue': '#233657',
      }
    },
  },
  plugins: [],
}
// npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch