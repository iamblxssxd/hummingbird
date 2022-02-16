import { React, useEffect, useState, Fragment } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Stack,
  Typography,
  Box,
  IconButton,
  Divider,
  CircularProgress,
  useTheme,
  Button,
} from "@material-ui/core";
import {
  ArrowBackIosNewRounded as BackIcon,
  BookmarkBorderRounded as BookmarkIcon,
  BookmarkAddedRounded as BookmarkAddedIcon,
  PlayArrowRounded as PlayIcon,
} from "@material-ui/icons";
import axios from "axios";

const Definition = () => {
  const { word } = useParams();
  const history = useHistory();
  const [definitions, setDefinitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exist, setExist] = useState(true);
  const theme = useTheme();

  console.log(definitions);

  useEffect(() => {
    const fetchDefinition = async () => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        setDefinitions(response.data);
        setLoading(false);
      } catch (err) {
        setExist(false);
      }
    };

    fetchDefinition();
  }, []);

  if (!exist)
    return (
      <Box sx={{ ...theme.mixins.alignCenter }}>
        <img src="/assets/deadline.png" alt="boy-reading-a-book" />
        <Typography>No Definitions Found</Typography>
        <Button variant="text" sx={{ mt: 2 }} onClick={history.goBack}>
          Back
        </Button>
      </Box>
    );

  if (loading)
    return (
      <Box sx={{ ...theme.mixins.alignCenter }}>
        <CircularProgress />
      </Box>
    );

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <IconButton onClick={history.goBack}>
          <BackIcon sx={{ color: "black" }} />
        </IconButton>
        <IconButton>
          <BookmarkIcon sx={{ color: "black" }} />
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
          boxShadow: "0px 10px 20px rgba(0, 52, 85, 0.25)",
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
            "&:hover": {
              backgroundColor: "#d0ebfc",
            },
          }}
        >
          <PlayIcon />
        </IconButton>
      </Stack>

      {definitions.map((definition, index) => (
        <Fragment key={index}>
          <Divider sx={{ display: index === 0 ? "none" : "block", my: 3 }} />
          {definition.meanings.map((meaning) => (
            <Box
              key={meaning.partOfSpeech}
              sx={{
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.05)",
                backgroundColor: "fff",
                p: 2,
                borderRadius: 2,
                mt: 3,
              }}
            >
              <Typography color="GrayText" variant="subtitle1">
                {meaning.partOfSpeech}
              </Typography>
              {meaning.definitions.map((definition, index) => (
                <Typography key={index} sx={{ my: 1 }} color="GrayText">
                  {meaning.definitions.length > 1 && `${index + 1}. `}
                  {definition.definition}
                </Typography>
              ))}
            </Box>
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default Definition;
