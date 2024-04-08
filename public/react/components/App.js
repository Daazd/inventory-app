import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { AddItem } from './AddItem';
import { Link, Router, Routes } from 'react-router-dom';
import 
// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {

	const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([]);
	const [item, setItem] = useState({
		name: '',
		description: '',
		price: '',
		category: '',
		image: ''
	});

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchSauces(){
		try {
			const response = await fetch(`${apiURL}/sauces`);
			const saucesData = await response.json();
			
			setSauces(saucesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}


	const handleDelete = async () => {
		try {
			const response = await fetch(`${apiURL}/items/${item.id}`, {
				method: 'DELETE'
			});
			if (response.ok) {
				alert('Item deleted');
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	useEffect(() => {
		fetchSauces();
	}, []);

  return (
    <main>
      <h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			<AddItem />
			<SaucesList sauces={sauces} />
			<button onClick={handleDelete}>Delete</button>
      <h2>All things 🔥</h2>
        <AddItem />
      {/* <SingleItemPage item={mockItem} cartCount={0} /> */}
    </main>
  );
};
		</main>
	)
}