/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        closeMenuAnimationOut: "closeMenuAnimationOut 0.3s ease-in-out",
        menuAnimationIn: "menuAnimationIn 0.3s ease-in-out",
      },
      keyframes: {
        closeMenuAnimationOut: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        menuAnimationIn: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "50%": { opacity: ".15", transform: "translateX(0%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
