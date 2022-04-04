module.exports = {
  mode: "jit",
  theme: {},
  plugins: [require("@tailwindcss/typography")],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`,
  ],
};
