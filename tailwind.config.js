/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "max-sm": { max: "640px" },
        "max-md": { max: "902px" },
        "max-lg": { max: "1024px" },
        "max-xl": { max: "1280px" },
      },
    },
  },
  plugins: [],
};
