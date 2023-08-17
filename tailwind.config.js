/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      backgroundImage : {
        "main": "url('https://static.vecteezy.com/system/resources/previews/004/770/479/original/black-and-gray-water-color-and-gradient-and-white-with-colorful-grunge-texture-and-abstract-vintage-dirty-free-photo.jpg')",
      },
      boxShadow: {
        card: "0px 35px 120px -15px black",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0)',
            '0 45px 65px rgba(999, 999, 999, 999)'
        ]
      }
    },
  },
  plugins: [],
}

