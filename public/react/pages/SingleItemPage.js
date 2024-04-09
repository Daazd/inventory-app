import React, { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { AddToCart } from "../components/AddToCart";
import { useParams } from "react-router-dom";
import apiURL from "../api";

const SingleItemPage = ({}) => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${apiURL}/items/${id}`);
        console.log({ response });
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItem();
  }, []);

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
        <AddToCart item={item} cartCount={0} />
      </Stack>
    </Stack>
  );
};

export { SingleItemPage };
