import React, { useContext, useState, useContext } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { LottiePlayer } from "../components/LottiePlayer";
import animationData from "../../lottie-files/emptyCart.json";

const CartPage = () => {
  const { cart, cartMethods } = useContext(AppContext);
  const { emptyCart } = cartMethods;

  const cartTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Stack direction="column" alignItems="center">
      <Typography variant="h3" component="div">
        Your Cart {cart.length ? "" : "Is Empty"}
      </Typography>
      {cart.length === 0 ? (
          <LottiePlayer
            animationData={animationData}
            width={500}
            height={500}
            />
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
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h5" component="div">
            Total: ${cartTotal.toFixed(2)}
          </Typography>
          <Button onClick={emptyCart} variant="contained" color="secondary">
            Empty Cart
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export { CartPage };
