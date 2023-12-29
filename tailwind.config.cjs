/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c",
        secondary: "#374151",
        accent: "#ff6b89",
      },
      fontFamily: {
        moserrat: ["Monserrat"],
        roboto: ["Roboto Slab"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
