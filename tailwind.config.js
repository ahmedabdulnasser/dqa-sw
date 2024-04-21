/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: "Cairo",
        roboto: "Roboto",
        notoarab: "Noto Sans Arabic",
        geologica: "Geologica",
        lato: "Lato",
      },
    },
  },

  darkMode: "class",
  plugins: [
    nextui(),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
