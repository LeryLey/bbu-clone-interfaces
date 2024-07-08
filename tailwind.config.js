/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#18196c",
      secondary: "#337ab7",
      gray: "#999999",
      black: "#000000",
      white: "#ffffff",
      whiteGray: "#f5f3ee",
      green: "#07BF51",
      transparent: "transparent",
      blueBlack: "#202c45 ",
    },
    backgroundImage: {
      school: "url('/src/assets/school.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
