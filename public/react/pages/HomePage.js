import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="h2">Welcome to our Online Store</Typography>
        <Typography variant="body1">
          Browse our collection of amazing items
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Link to="items">
            <Typography variant="h6">Browse Items</Typography>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export { HomePage };
