/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      "color-primitives-brand-100": "var(--color-primitives-brand-100)",
      "color-primitives-gray-500": "var(--color-primitives-gray-500)",
      "color-primitives-gray-900": "var(--color-primitives-gray-900)",
      "color-text-brand-on-brand": "var(--color-text-brand-on-brand)",
      "color-text-default-default": "var(--color-text-default-default)",
      "color-text-default-secondary": "var(--color-text-default-secondary)",
    },
    fontFamily: {
      "single-line-body-base": "var(--single-line-body-base-font-family)",
    },
  },
  },
  plugins: [],
};
