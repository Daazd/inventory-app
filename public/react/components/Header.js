import React, { useState } from "react";
import { Typography, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ActiveUserArea } from "./ActiveUserArea";

export const Header = ({ user, setUser }) => {
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
      <ActiveUserArea user={user} setUser={setUser} />
    </Stack>
  );
};
