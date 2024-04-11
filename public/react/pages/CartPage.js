import React, { useContext, useState } from "react";
import { Box, Typography, Stack, Link, Button } from "@mui/material";
// import { CartContext } from "../contexts/CartContext";

const CartPage = () => {
  //   const { cart, emptyCart } = useContext(CartContext);
  const [cart, setCart] = useContext(CartContext);
  const emptyCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" component="div">
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body2">Your cart is empty</Typography>
      ) : (
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          padding="1rem"
        >
          {cart.map((item) => (
            <Stack
              key={item.id}
              direction="row"
              justifyContent="space-between"
              padding="1rem"
              border="1px solid #CCCCCC"
              borderRadius="5px"
              sx={{ width: "400px" }}
            >
              <Link to={`/items/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  width="100px"
                  height="100px"
                />
              </Link>
              <Stack direction="column" justifyContent="space-between">
                <Typography variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity: {item.quantity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${item.price}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      )}
      {cart.length > 0 && (
        <Stack direction="row" justifyContent="space-between" padding="1rem">
          <Typography variant="h5" component="div">
            Total: ${cartTotal.toFixed(2)}
          </Typography>
          <Button
            onClick={() => emptyCart()}
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export { CartPage };
