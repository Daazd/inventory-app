import React from 'react';
import { Item } from './Item';

export const ItemsList = ({items, handleItemClick}) => {
	return <>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} handleItemClick={handleItemClick} />
			})
		}
	</>
} 
