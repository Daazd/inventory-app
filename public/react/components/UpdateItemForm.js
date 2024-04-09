import React, { useState, useEffect } from "react";

const UpdatedItemForm = ({ item, onUpdate }) => {
  const [formData, setFormData] = useState(item);

  useEffect(() => {
    setFormData(item);
  }, [item]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <main>
      <h2>{formData.name}</h2>
      {formData.image && <p>Image: {formData.image}</p>}
      {formData.price && <p>Price: {formData.price}</p>}
      {formData.description && <p>Description: {formData.description}</p>}
      {formData.category && <p>Category: {formData.category}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <button type="submit">Update Item</button>
      </form>
    </main>
  );
};

export { UpdatedItemForm };
