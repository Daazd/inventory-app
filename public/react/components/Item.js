import React from 'react';

export const Item = ({item, handleItemClick}) => {

  return <>
    <h3 onClick={()=>{handleItemClick(item.id)}}>{item.name}</h3>
    <img src={item.image} alt={item.name} />
  </>
} 
	