
import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";
import React, { useState, useEffect } from "react";
import { Item, mockItem } from "./ItemTest";
import { SingleItemPage } from "../pages/SingleItemPage";
import { UpdateItemForm } from './UpdateItemForm'
import { AddItemForm } from "./AddItemForm";
import { Button, Stack } from "@mui/material";



// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [openAddItem, setOpenAddItem] = useState(false);
	const [items, setItems] = useState([]);
	const [item, setItem] = useState({
		name: '',
		description: '',
		price: '',
		category: '',
		image: ''
	});

	 async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();
      console.log({ itemsData });
      setItems(itemsData);
      setCurrentItem({});
    } catch (err) {
      console.log("Could not find items list ", err);
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

	const handleUpdate = async (item) => {
		try {
			const response = await fetch(`${apiURL}/items/${item.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(item)
			});
			if (response.ok) {
				alert('Item updated');
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);
  
};

  async function handleItemClick(id) {
    //make it work
    try {
      const response = await fetch(`${apiURL}/items/${id}`);
      const data = await response.json();
      setCurrentItem(data);
      setItems([]);
    } catch (err) {
      console.log("Error getting the item", err);
    }
  }

  async function handleBackClick() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();
      setItems(itemsData);
      setCurrentItem({});
    } catch (err) {
      console.log("Could not find items ", err);
    }
  }

  async function handleAddItemClick() {
    setItems([]);
    setCurrentItem({});
    //create form to add Item.
  }

  return (
    <Stack direction="column">
      <h1>Inventory</h1>
      <h2>Items:</h2>
      <ItemsList items={items} handleItemClick={handleItemClick} />
      {currentItem.name && (
        <div>
          <h2>{currentItem.name}</h2>
          {currentItem.image && <p>Image: {currentItem.image}</p>}
          {currentItem.price && <p>Price: {currentItem.price}</p>}
          {currentItem.description && (
            <p>Description: {currentItem.description}</p>
          )}
          {currentItem.category && <p>Category: {currentItem.description}</p>}
        </div>
      )}
      {!currentItem.name && (
        <button onClick={() => handleAddItemClick()}>Add Item</button>
      )}
      {items.length === 0 && (
        <button onClick={() => handleBackClick()}> Back to Inventory</button>
      )}
      <Button variant="contained" onClick={() => setOpenAddItem(true)}>
        Add Item
      </Button>
      <AddItemForm open={openAddItem} setOpen={setOpenAddItem} />
      <SingleItemPage item={mockItem} cartCount={0} />
    </Stack>
  );
};
