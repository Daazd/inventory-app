import React, { useState, useEffect } from "react";
import { Card, IconButton, Typography, Button, Grid } from "@mui/material";
import MinusIcon from "@mui/icons-material/Remove";
import PlusIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { on } from "events";


export const AddToCart = ({ item, cart, cartCount, onAdd, onRemove, onUpdate }) => {
  const [quantity, setQuantity] = useState(cartCount);
  const [cartId, setCartId] = useState(null);

  const handleAdd = async (cartId) => {
    const response = await fetch(`/cart/${cartId}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: item.id, quantity: 1 }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    onUpdate(data);
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onUpdate(item.id, quantity - 1);
    }
  };

  const handleIncrement = () => {
    console.log('cart:', cart);
    console.log('item:', item);
    if (!cart || !item) {
      return;
    }

    if (quantity === 0) {
      handleAdd(cart.id);
    } else {
      onUpdate(item.id, quantity + 1);
    }
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    setQuantity(0);
    onRemove(item.id);
  };
  

  return (
    <>
      {quantity === 0 ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleIncrement()}
          sx={{ width: "150px" }}
        >
          Add to Cart
        </Button>
      ) : (
        <Grid container alignItems="center" spacing={0.5}>
          <Grid item>
            {quantity === 1 ? (
              <IconButton onClick={handleRemove}>
                <DeleteIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleDecrement}>
                <MinusIcon />
              </IconButton>
            )}
          </Grid>
          <Grid item>
            <Typography variant="body2">{quantity}</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={handleIncrement}>
              <PlusIcon />
            </IconButton>
          </Grid>
        </Grid>
      )}
    </>
  );
};
