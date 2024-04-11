import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

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
    // if user is not logged in, show login modal
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const removeItemFromCart = async ({ item, cart }) => {
    // TODO
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const emptyCart = async ({ cart }) => {
    // TODO
    setCart([]);
  };

  const incrementItem = async ({ item, cart }) => {
    // TODO
    // item.quantity += 1;
    // setCart([...cart]);
    setCart(() => {
      const newCart = [...cart];
      const cartItem = newCart.find((cartItem) => cartItem.id === item.id);
      console.log({ cartItem, newCart });
      cartItem.quantity += 1;
      return newCart;
    });
  };

  const decrementItem = async ({ item, cart }) => {
    // TODO
    // item.quantity -= 1;
    // setCart([...cart]);
    setCart(() => {
      const newCart = [...cart];
      const cartItem = newCart.find((cartItem) => cartItem.id === item.id);
      cartItem.quantity -= 1;
      return newCart;
    });
  };

  const cartMethods = {
    addItemToCart,
    removeItemFromCart,
    emptyCart,
    incrementItem,
    decrementItem,
  };

  return (
    <AppContext.Provider value={{ user, setUser, cart, cartMethods }}>
      {children}
    </AppContext.Provider>
  );
};
