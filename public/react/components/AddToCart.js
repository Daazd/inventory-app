import React, { useState } from "react";
import { Card, IconButton, Typography, Button, Grid } from "@mui/material";
import MinusIcon from "@mui/icons-material/Remove";
import PlusIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

export const AddToCart = ({ item, cartCount }) => {
  const [quantity, setQuantity] = useState(cartCount);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    setQuantity(0);
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
