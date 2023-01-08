import { styled } from "stitches.config";

export const Main = styled("main", {
  height: "100vh",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Container = styled("section", {
  width: "100%",
  maxWidth: "540px",
  backgroundColor: "white",

  boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.05)",
  borderRadius: "4px",

  h1: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: "22px",
    lineHeight: "28px",
  },

  padding: "30px 48px",
});

export const Upload = styled("section", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  marginTop: "30px",

  button: {
    marginTop: "30px",

    width: "100%",
    backgroundColor: "$purple-900",

    color: "white",

    padding: "9px 14px",
    borderRadius: "5px",

    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "20px",

    "&:disabled": {
      opacity: "0.5",
    },
  },
});

export const UploadInput = styled("div", {
  position: "relative",
  display: "flex",
  width: "100%",

  backgroundColor: "$gray-300",
  border: "1px dashed rgba(56, 78, 183, 0.3)",
  borderRadius: "5px",

  textAlign: "center",

  input: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0,
  },

  label: {
    padding: "30px",

    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    span: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "24px",

      strong: {
        color: "$purple-900",
      },
    },

    p: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "18px",
    },

    img: {
      marginBottom: "20px",
    },
  },
});

export const Files = styled("div", {
  display: "flex",
  flexDirection: "column",
});
