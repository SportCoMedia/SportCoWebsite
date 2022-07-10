/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        10: "0px 2px 32px -18px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
}
