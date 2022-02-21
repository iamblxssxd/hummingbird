import { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline, Grid } from "@material-ui/core";
import theme from "./theme";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./scenes/Home";
import Bookmarks from "./scenes/Bookmarks";
import Definition from "./scenes/Definition";

export const App = () => {
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || {}
  );

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

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
      <Grid
        container
        sx={{ p: 2, mt: { xs: 0, sm: 0 } }}
        justifyContent="center"
      >
        <Grid item xs={12} sm={8} md={5} lg={4}>
          <Router>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/bookmarks">
              <Bookmarks bookmarks={bookmarks} />
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
