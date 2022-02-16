import { React, useEffect, useState, Fragment } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Stack, Typography, Box, IconButton, Divider } from "@material-ui/core";
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

  console.log(definitions);

  useEffect(() => {
    const fetchDefinition = async () => {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setDefinitions(response.data);
    };

    fetchDefinition();
  }, []);

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
