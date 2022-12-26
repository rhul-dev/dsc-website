/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  trailingComma: "all",
  printWidth: 80,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
