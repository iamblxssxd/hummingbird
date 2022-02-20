import React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Search as SearchIcon,
  BookmarksRounded as BookmarksIcon,
} from "@material-ui/icons";
import {
  Box,
  Typography,
  FilledInput,
  IconButton,
  useTheme,
} from "@material-ui/core";

const Home = () => {
  const [word, setWord] = useState("");
  const theme = useTheme();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedWord = word.trim().toLowerCase();
    if (!formattedWord || formattedWord.split(" ").length > 1) return;

    history.push(`/search/${formattedWord}`);
  };

  return (
    <Box
      sx={{
        ...theme.mixins.alignCenter,
      }}
    >
      <img src="/assets/meditation.png" alt="boy-reading-a-book" />

      <Typography color="primary" sx={{ mb: 1 }} variant="h4">
        Hummingbird
      </Typography>
      <Typography color="GrayText">
        Look up definitions and save for quick reference
      </Typography>
      <Box sx={{ width: "360px" }}>
        <form onSubmit={handleSubmit}>
          <FilledInput
            value={word}
            onChange={(event) => setWord(event.target.value)}
            disableUnderline
            placeholder="search word"
            sx={{
              mt: 2,
              mb: 4,
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: "0px 10px 35px rgba(0, 0, 0, 0.05)",
              "& .MuiFilledInput-input": {
                p: 2,
              },
            }}
            startAdornment={<SearchIcon color="disabled" />}
            fullWidth
          />
        </form>
      </Box>

      <IconButton
        to="/bookmarks"
        component={Link}
        sx={{
          borderRadius: 2,
          p: 2,
          color: "#fff",
          // background: "linear-gradient(287deg, #f6d961 1%,#458d4f 56%);",
          background: "#EDAB43",
          boxShadow: "0px 10px 10px rgba(237, 171, 67, 0.2)",
          "&:hover": {
            backgroundColor: "#f6d961",
          },
        }}
      >
        <BookmarksIcon />
      </IconButton>
    </Box>
  );
};

export default Home;
