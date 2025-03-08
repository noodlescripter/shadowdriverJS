/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./docs/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  corePlugins: {
    preflight: false,
  },
}