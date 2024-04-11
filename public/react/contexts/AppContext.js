import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  console.log({ cart });

  const getCart = async () => {
    // find cart by user id
    // if it doesnt exist, create one
    // const response = await fetch()...
    // const data = response.json();
    // setCart(data)
    setCart([]);
  };

  const addItemToCart = async ({ item }) => {
    // TODO
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const removeItemFromCart = async ({ item, cart }) => {
    // TODO
  };

  const emptyCart = async ({ cart }) => {
    // TODO
    setCart([]);
  };

  const incrementItem = async ({ id }) => {
    // TODO
    // const item = cart.find((cartItem) => cartItem.id === id);
    // item.quantity += 1;
    // setCart([...cart]);
    setCart((prev) => {
      const newCart = [...prev];
      const item = newCart.find((cartItem) => cartItem.id === id);
      item.quantity += 1;
      return newCart;
    });
  };

  const cartMethods = {
    addItemToCart,
    removeItemFromCart,
    emptyCart,
    incrementItem,
  };

  return (
    <AppContext.Provider value={{ user, setUser, cart, cartMethods }}>
      {children}
    </AppContext.Provider>
  );
};
