import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  const user = {
    email: "3hQpU@example.com",
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding="1rem"
    >
      <Link to="/">
        <Typography variant="h4" component="div">
          Inventory App
        </Typography>
      </Link>
      <Box>
        <Typography variant="subtitle2" component="div">
          Logged in as: {user.email}
        </Typography>
      </Box>
    </Stack>
  );
};
