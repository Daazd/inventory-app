import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { AddToCart } from "../components/AddToCart";

const SingleItemPage = ({ item, cartCount }) => {
  return (
    <Stack direction="row" justifyContent="space-between" width="1000px">
      <img width="400px" height="400px" src={item.image} alt={item.name} />
      <Stack direction="column" justifyContent="space-between" width="400px">
        <Typography variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="h6">Price: ${item.price}</Typography>
        <AddToCart item={item} cartCount={cartCount} />
      </Stack>
    </Stack>
  );
};

export { SingleItemPage };
