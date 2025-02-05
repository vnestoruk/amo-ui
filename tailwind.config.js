/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./.storybook/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EBF5FE",
          100: "#D2E8FE",
          200: "#ABD4FD",
          300: "#7EBDFB",
          400: "#56A8FA",
          500: "#2B91F9",
          600: "#0675E4",
          700: "#0557A9",
          800: "#033B72",
          900: "#021C37",
          950: "#010F1E"
        },
        secondary: {
          50: "#EDEDF2",
          100: "#DEDEE8",
          200: "#BABACF",
          300: "#9898B8",
          400: "#74749F",
          500: "#595981",
          600: "#474767",
          700: "#36364E",
          800: "#232333",
          900: "#13131B",
          950: "#08080C"
        },
        success: {
          50: "#E6FAEC",
          100: "#D0F5DD",
          200: "#9EEBB7",
          300: "#6FE195",
          400: "#41D873",
          500: "#26B957",
          600: "#1E9446",
          700: "#176E34",
          800: "#0F4822",
          900: "#082612",
          950: "#031108"
        },
        warning: {
          50: "#FEF4EB",
          100: "#FEEAD8",
          200: "#FCD2AB",
          300: "#FBBD84",
          400: "#F9A657",
          500: "#F8912E",
          600: "#E37208",
          700: "#AD5606",
          800: "#713904",
          900: "#3B1E02",
          950: "#1E0F01"
        },
        danger: {
          50: "#FEECEC",
          100: "#FCD9D9",
          200: "#FAB3B3",
          300: "#F78C8C",
          400: "#F56666",
          500: "#F24141",
          600: "#E51010",
          700: "#AC0C0C",
          800: "#730808",
          900: "#390404",
          950: "#1D0202"
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
