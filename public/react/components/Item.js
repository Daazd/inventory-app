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
import { Link } from "react-router-dom";

import { AddToCart } from "./AddToCart";

const Item = ({ item }) => {
  return (
    <Card raised>
      <CardContent>
        <Stack direction="row" sx={{ maxWidth: "600px", maxHeight: "300px" }}>
          <CardMedia sx={{ margin: "0 20px" }}>
            <Link to={`${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                width="200px"
                height="200px"
              />
            </Link>
          </CardMedia>
          <Stack direction="column" justifyContent="space-between">
            <Link to={`${item.id}`}>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <AddToCart item={item} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export { Item };
