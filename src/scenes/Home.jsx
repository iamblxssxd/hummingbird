import React from "react";
import {
  Search as SearchIcon,
  Bookmark as BookmarkIcon,
} from "@material-ui/icons";

import { Box, Typography, FilledInput, IconButton } from "@material-ui/core";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
      }}
    >
      <img src="/assets/meditation.png" alt="boy-reading-a-book" />

      <Typography color="primary" sx={{ mb: 1 }} variant="h4">
        Dictionary
      </Typography>
      <Typography color="GrayText">
        Find meanings and save for quick reference
      </Typography>
      <Box sx={{ width: "360px" }}>
        <FilledInput
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
      </Box>
      <IconButton
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
        <BookmarkIcon />
      </IconButton>
    </Box>
  );
};

export default Home;
