import React, { useState } from "react";
import { Typography, Stack, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { ActiveUserArea } from "./ActiveUserArea";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const Header = ({ user, setUser }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding="1rem"
    >
      <Link to="/">
        <Stack spacing={2} direction="row" alignItems="center">
          <HomeIcon fontSize="large" />
          <Typography variant="h4" component="div">
            Inventory App
          </Typography>
        </Stack>
      </Link>
      <Stack spacing={2} direction="row" alignItems="center">
        <Link to="cart">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon fontSize="large" />
          </Badge>
        </Link>
        <ActiveUserArea user={user} setUser={setUser} />
      </Stack>
    </Stack>
  );
};
