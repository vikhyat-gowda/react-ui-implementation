/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        primary: {
          50: "#F9F5FF",
          200: "#E9D7FE",
          300: "#D6BBFB",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941C6",
        },
        cgrey: {
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          600: "#475467",
          700: "#344054",
          900: "#101828",
        }
      }
    },
  },
  plugins: [],
}

