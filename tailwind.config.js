export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    darkMode: "class",
    plugins: [require("tw-elements/dist/plugin.cjs")]
}