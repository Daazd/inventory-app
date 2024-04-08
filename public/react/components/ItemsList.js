import React from "react";
// import { Item } from "./Item";
import { Item } from "./ItemTest";

export const ItemsList = ({ items, handleItemClick }) => {
  return (
    <>
      {items.map((item, idx) => {
        // return <Item item={item} key={idx} handleItemClick={handleItemClick} />;
        return <Item item={item} key={item.name} cartCount={0} />;
      })}
    </>
  );
};
