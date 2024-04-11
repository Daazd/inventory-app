import React from "react";
import { Stack, Typography } from "@mui/material";
import { LottiePlayer } from "../components/LottiePlayer";
import animationData from "../../lottie-files/empty.json";

const MissingPage = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5rem",
      }}
    >
      <LottiePlayer animationData={animationData} height={400} width={400} />
      <Typography variant="h6">Oops! This page can't be found.</Typography>
    </Stack>
  );
};

export { MissingPage };
