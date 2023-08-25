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
        "main": "url('./src/assets/hero_pic.png')",
      },
      // boxShadow: {
      //   card: "0px 35px 120px -15px black",
      // },
      // dropShadow: {
      //   '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      //   '4xl': [
      //       '0 35px 35px rgba(0, 0, 0, 0)',
      //       '0 45px 65px rgba(999, 999, 999, 999)'
      //   ]
      // }
    },
  },
  plugins: [],
}

