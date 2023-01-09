import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      "black-900": "#0F0F0F",
      "green-900": "#11AF22",

      "purple-900": "#483EA8",
      "purple-800": "#384EB7",

      "red-900": "#E41D1D",
      "red-100": "#FFF3F3",

      "gray-600": "#333333",
      "gray-500": "#676767",
      "gray-400": "#E3E3E3",
      "gray-300": "#F8F8FF",
      "gray-200": "#F6F6F6",
      "gray-100": "#F9FFF9",
    },
    fonts: {
      body: "Mulish",
    },
  },
});
