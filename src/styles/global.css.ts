import { globalCss } from "stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "$body",
  },

  body: {
    background: "$gray-200",
  },

  "button, input": {
    outline: "none",
    border: 0,
  },
});
