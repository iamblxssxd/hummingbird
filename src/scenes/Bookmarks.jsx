import React from "react";
import { Link } from "react-router-dom";
import { Stack, IconButton, Typography, Box } from "@material-ui/core";
import { ArrowBackIosNewRounded as BackIcon } from "@material-ui/icons";

const Bookmarks = ({ bookmarks }) => {
  return (
    <>
      <Stack sx={{ mb: 2 }} direction="row" alignItems="center">
        <IconButton to="/" component={Link} sx={{ color: "black", mr: 1 }}>
          <BackIcon />
        </IconButton>
        <Typography variant="h6">Bookmarks</Typography>
      </Stack>
      {Object.keys(bookmarks).map((bookmark) => (
        <Box
          key={bookmark}
          to={`/search/${bookmark}`}
          component={Link}
          sx={{
            p: 2,
            cursor: "pointer",
            backgroundColor: "white",
            borderRadius: 1,
            textTransform: "capitalize",
            mb: 2,
            fontWeight: 800,
            display: "block",
            color: "black",
            textDecoration: "none",
          }}
        >
          {bookmark}
        </Box>
      ))}
    </>
  );
};

export default Bookmarks;
