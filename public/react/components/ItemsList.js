import React, { useContext } from "react";
import { Item } from "./Item";
import { AppContext } from "../contexts/AppContext";

export const ItemsList = ({ items }) => {
  const { cart } = useContext(AppContext);
  return (
    <>
      {items.map((item, idx) => {
        const quantity =
          cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0;
        console.log(item.name, quantity);
        return <Item item={item} key={item.name} cartCount={quantity} />;
      })}
    </>
  );
};
