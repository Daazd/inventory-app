import React, { useState, useContext } from "react";
import { Card, IconButton, Typography, Button, Grid } from "@mui/material";
import MinusIcon from "@mui/icons-material/Remove";
import PlusIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppContext } from "../contexts/AppContext";

export const AddToCart = ({ item }) => {
  const { cartMethods, cart } = useContext(AppContext);
  const {
    addItemToCart,
    removeItemFromCart,
    emptyCart,
    incrementItem,
    decrementItem,
  } = cartMethods;
  const quantity =
    cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0;

  return (
    <>
      {quantity === 0 ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => addItemToCart({ item })}
          sx={{ width: "150px" }}
        >
          Add to Cart
        </Button>
      ) : (
        <Grid container alignItems="center" spacing={0.5}>
          <Grid item>
            {quantity === 1 ? (
              <IconButton onClick={() => removeItemFromCart({ item, cart })}>
                <DeleteIcon />
              </IconButton>
            ) : (
              <IconButton onClick={() => decrementItem({ item, cart })}>
                <MinusIcon />
              </IconButton>
            )}
          </Grid>
          <Grid item>
            <Typography variant="body2">{quantity}</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={() => incrementItem({ item, cart })}>
              <PlusIcon />
            </IconButton>
          </Grid>
        </Grid>
      )}
    </>
  );
};
