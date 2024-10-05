/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#008cff',
        customBlueHover: '#36a4ff',
        buttonGithub: '#161b22',
        buttonGithubHover: '#313842',
      },
    },
  },
  plugins: [],
}