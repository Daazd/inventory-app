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

const UpdatedItemForm = ({ item, onUpdate,open, setOpen }) => {
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
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Update Item</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <TextField
            label="Price"
            name="price"
            value={formData.price}
            />
            <TextField
            label="Category"
            name="category"
            value={formData.category}
            />
            <TextField
            label="Image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            />
            </form>

            <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            >
            Update
            </Button>
            </DialogContent>
            </Dialog>
           
  )
};

export { UpdatedItemForm };
