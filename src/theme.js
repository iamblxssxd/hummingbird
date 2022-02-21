import { createTheme } from "@material-ui/core";

export default createTheme({
  palette: {
    background: {
      default: "#F1F3F4",
    },
    primary: {
      main: "#006AAD",
    },
    sunray: "#EDAB43",
  },
  typography: {
    fontFamily: "Mulish, sans-serif",
    h4: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 800,
    },
    h6: {
      fontWeight: 800,
    },
    subtitle1: {
      fontWeight: 800,
    },
  },
  mixins: {
    alignCenter: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "72vh",
    },
  },
});
