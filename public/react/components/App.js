import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  SingleItemPage,
  HomePage,
  InventoryPage,
  CartPage,
  MissingPage,
} from "../pages";
import { Button, Stack } from "@mui/material";
import { Header } from "./Header";
import { AppProvider } from "../contexts/AppContext";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);
  // const [user, setUser] = useState(null);
  // const [cart, setCart] = useState([]);

  // const getCart = async () => {
  //   // find cart by user id
  //   // if it doesnt exist, create one
  //   // const response = await fetch()...
  //   // const data = response.json();
  //   // setCart(data)
  //   setCart([]);
  // };

  // const addItemToCart = async ({ item }) => {
  //   // TODO
  //   setCart([...cart, item]);
  // };

  // const removeItemFromCart = async ({ item, cart }) => {
  //   // TODO
  // };

  // const emptyCart = async ({ cart }) => {
  //   // TODO
  //   setCart([]);
  // };

  // const incrementItem = async ({ id }) => {
  //   // TODO
  //   // const item = cart.find((cartItem) => cartItem.id === id);
  //   // item.quantity += 1;
  //   // setCart([...cart]);
  //   setCart((prev) => {
  //     const newCart = [...prev];
  //     const item = newCart.find((cartItem) => cartItem.id === id);
  //     item.quantity += 1;
  //     return newCart;
  //   });
  // };

  // useEffect(() => {
  //   if (user) {
  //     getCart();
  //   }
  // }, [user]);

  // const cartMethods = { addItemToCart, removeItemFromCart, emptyCart };

  // create router and routes: /, /items, /items/:id, /cart
  const routes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/items" element={<InventoryPage />} />
      <Route path="/items/:id" element={<SingleItemPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<MissingPage />} />
    </Routes>
  );

  return (
    <AppProvider>
      <Router>
        <Stack direction="column" style={{ width: "80%", margin: "0 auto" }}>
          <Header />
          {routes}
        </Stack>
      </Router>
    </AppProvider>
  );
};
