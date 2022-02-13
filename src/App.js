import { ThemeProvider, CssBaseline, Grid } from "@material-ui/core";
import theme from "./theme";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./scenes/Home";
import Bookmarks from "./scenes/Bookmarks";
import Definition from "./scenes/Definition";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} sx={{ p: 2 }}>
          <Router>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route path="/search/:word">
              <Definition />
            </Route>
          </Router>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
