import { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline, Grid } from "@material-ui/core";
import theme from "./theme";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./scenes/Home";
import Bookmarks from "./scenes/Bookmarks";
import Definition from "./scenes/Definition";

export const App = () => {
  const [bookmarks, setBookmarks] = useState({});

  console.log(bookmarks);

  const addBookmark = (word, definitions) =>
    setBookmarks((existingBookmarks) => ({
      ...existingBookmarks,
      [word]: definitions,
    }));

  const removeBookmark = (word) =>
    setBookmarks((existingBookmarks) => {
      const temp = { ...existingBookmarks };
      delete temp[word];
      return temp;
    });

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
              <Definition
                bookmarks={bookmarks}
                addBookmark={addBookmark}
                removeBookmark={removeBookmark}
              />
            </Route>
          </Router>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
