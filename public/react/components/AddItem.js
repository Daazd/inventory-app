import React, { useState } from 'react';
import apiURL from '../api';

export const AddItem = () => {
    const [item, setItem] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: ''
    });

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${apiURL}/items`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
            if (response.ok) {
                alert('Item added');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={item.name} onChange={handleChange} />
            <label>Description:</label>
            <input type="text" name="description" value={item.description} onChange={handleChange} />
            <label>Price:</label>
            <input type="text" name="price" value={item.price} onChange={handleChange} />
            <label>Category:</label>
            <input type="text" name="category" value={item.category} onChange={handleChange} />
            <label>Image URL:</label>
            <input type="text" name="image" value={item.image} onChange={handleChange} />
            <button type="submit">Add Item</button>
        </form>
        );
    };