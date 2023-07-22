/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGrey: "#f6f6f8",
        black: "#090909",
        textGrey: "#bababa",
      },
    },
  },
  plugins: [],
};
