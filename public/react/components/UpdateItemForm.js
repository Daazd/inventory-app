import React, { useState, useEffect } from "react";
import apiURL from "../api";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UpdatedItemForm = ({ item, onUpdate,open, setOpen, updateItem }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(item);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    setFormData(item);
  }, [item]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
   try {
    const response = await fetch(`${apiURL}/items/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      onUpdate(await response.json());
      setOpen(false);
      navigate(`/items`);
    } else {
      alert("Error updating item");
    }
   }
   catch (error) {
    console.error(error);
   }
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Update Item</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            <TextField
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            <TextField
            label="Image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </form>

            <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            >
            Update
            </Button>
            </DialogContent>
            </Dialog>
           
  )
};

export { UpdatedItemForm };

