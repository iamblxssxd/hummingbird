import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Stack, Typography, Box, IconButton } from "@material-ui/core";
import {
  ArrowBackIosNewRounded as BackIcon,
  BookmarkBorderRounded as BookmarkIcon,
  BookmarkAddedRounded as BookmarkAddedIcon,
  PlayArrowRounded as PlayIcon,
} from "@material-ui/icons";

const Definition = () => {
  const { word } = useParams();
  const history = useHistory();

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <IconButton>
          <BackIcon onClick={history.goBack} />
        </IconButton>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          mt: 3,
          // background:
          //   "linear-gradient(333deg, rgba(0,106,173,1) 1%, rgba(69,141,79,1) 100%)",
          background:
            "linear-gradient(90deg, rgba(0,106,173,1) 1%, rgba(0,52,85,1) 100%)",
          boxShadow: "0px 10px 20px rgba(69, 141, 79, 0.25)",
          px: 4,
          py: 5,
          color: "white",
          borderRadius: 2,
        }}
      >
        <Typography sx={{ textTransform: "capitalize" }} variant="h5">
          {word}
        </Typography>
        <IconButton
          sx={{
            borderRadius: 3,
            p: 1,
            color: "#006AAD",
            background: "#AFD9F3",
          }}
        >
          <PlayIcon />
        </IconButton>
      </Stack>
    </>
  );
};

export default Definition;
