/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Replacing default sans-serif font
        serif: ["Georgia", "serif"], // Adding a serif font
        lobster: ["Lobster Two", "cursive"], // Adding your custom font
      },
    },
  },
  plugins: [],
};
