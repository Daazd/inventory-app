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
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <CardMedia>
          <img src={item.image} alt={item.name} width="200px" height="200px" />
        </CardMedia>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActionArea>
        <AddToCart item={item} cartCount={cartCount} />
      </CardActionArea>
    </Card>
  );
};

export { Item, mockItem };
