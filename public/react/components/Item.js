import React from "react";

export const Item = ({ item, handleItemClick }) => {
  const onClick = () => {
    handleItemClick(item.id);
  };

  return (
    <>
      <h3 onClick={onClick}>{item.name}</h3>
      <img onClick={onClick} src={item.image} alt={item.name} />
    </>
  );
};
