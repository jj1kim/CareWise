/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "0px 0px 4px 3px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
