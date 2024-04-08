import React from "react";
import {
  Stack,
  Button,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

import { AddToCart } from "./AddToCart";

const mockItem = {
  name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};

const Item = ({ item, cartCount }) => {
  return (
    <Card raised variant="outlined">
      <CardContent>
        <Stack direction="row" sx={{ maxWidth: "600px", maxHeight: "300px" }}>
          <CardMedia sx={{ margin: "0 20px" }}>
            <img
              src={item.image}
              alt={item.name}
              width="200px"
              height="200px"
            />
          </CardMedia>
          <Stack direction="column" justifyContent="space-between">
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <AddToCart item={item} cartCount={cartCount} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export { Item, mockItem };
