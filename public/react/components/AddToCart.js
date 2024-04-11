
import React, { useState, useContext } from "react";
import { Card, IconButton, Typography, Button, Grid } from "@mui/material";
import MinusIcon from "@mui/icons-material/Remove";
import PlusIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppContext } from "../contexts/AppContext";

export const AddToCart = ({ item }) => {
  const { cartMethods, cart, user } = useContext(AppContext);
  const {
    addItemToCart,
    removeItemFromCart,
    emptyCart,
    incrementItem,
    decrementItem,
  } = cartMethods;

  const quantity =
    cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0;

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
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addItemToCart({ item })}
            sx={{ width: "150px" }}
            disabled={!user}
          >
            Add to Cart
          </Button>
          {!user && (
            <Typography variant="body2" color="error">
              Please log in to add items to your cart.
            </Typography>
          )}
        </>
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
