import React from "react";
import { Link } from "react-router-dom";
import { Stack, IconButton, Typography, Box } from "@material-ui/core";
import {
  ArrowBackIosNewRounded as BackIcon,
  AspectRatio,
} from "@material-ui/icons";

const Bookmarks = ({ bookmarks }) => {
  return (
    <>
      <Stack
        sx={{ mb: 2 }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <IconButton to="/" component={Link} sx={{ color: "black", mr: 1 }}>
          <BackIcon />
        </IconButton>

        <Typography variant="h6">Bookmarks</Typography>
        <Box
          component="img"
          sx={{
            height: 60,
            width: "auto",
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          alt="leaf arrow"
          src="/assets/bookmarks-arrow-leaf.png"
        />
      </Stack>

      {!!Object.keys(bookmarks).length ? (
        Object.keys(bookmarks).map((bookmark) => (
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
        ))
      ) : (
        <Typography sx={{ mt: 5, mr: 2 }} align="center">
          No added words
        </Typography>
      )}
    </>
  );
};

export default Bookmarks;
