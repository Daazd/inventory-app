import React from "react";
import {
  Stack,
  Button,
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";

const mockItem = {
  name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};

const Item = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActionsArea>
        <Button size="small">Learn More</Button>
      </CardActionsArea>
    </Card>
  );
};

export { Item };
