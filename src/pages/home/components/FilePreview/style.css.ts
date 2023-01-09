import { styled } from "stitches.config";

export const Container = styled("div", {
  width: "100%",

  padding: "10px 8px",
  borderRadius: "5px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "18px",
  color: "$black-900",

  svg: {
    cursor: "pointer",
  },

  variants: {
    error: {
      true: {
        border: "0.5px solid $red-900 !important",
        svg: {
          color: "$red-900",
        },
      },
    },

    status: {
      await: {
        border: "0.5px solid $gray-400",
        svg: {
          color: "$gray-400",
        },
      },

      uploading: {
        border: "0.5px solid $gray-400",
        svg: {
          color: "$gray-400",
        },
      },

      uploaded: {
        border: "0.5px solid $green-900",
        svg: {
          color: "$gray-400",
        },
      },
    },
  },
});
