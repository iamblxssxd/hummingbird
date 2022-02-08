import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";

import React from "react";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div></div>
    </ThemeProvider>
  );
};

export default App;
