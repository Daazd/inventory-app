import React, { useState } from "react";
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
import Rating from "@mui/material/Rating";


const AddItemForm = ({ open, setOpen }) => {
  const navigate = useNavigate();
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${apiURL}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const newItem = await response.json();
        alert("Item added");
        navigate(`/items/${newItem.id}`);
        setOpen(false);
      } else {
        alert("Error adding item");
      }
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Add Item</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            label="Name"
            name="name"
            {...register("name", { required: "Name is required" })}
            error={errors.name}
            helperText={errors.name && errors.name.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            {...register("description", {
              required: "Description is required",
            })}
            error={errors.description}
            helperText={errors.description && errors.description.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            name="price"
            {...register("price", {
              validate: (value) => {
                // price should be a number with up to two decimal places
                const priceRegex = /^\d+(?:\.\d{0,2})?$/;
                return priceRegex.test(value) || "Invalid price";
              },
            })}
            fullWidth
            error={errors.price}
            helperText={errors.price && errors.price.message}
            margin="normal"
          />
          <TextField
            label="Category"
            name="category"
            {...register("category")}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Image URL"
            name="image"
            {...register("image", {
              validate: (value) => {
                // image should be a valid URL
                const imageRegex =
                  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
                return imageRegex.test(value) || "Invalid image URL";
              },
            })}
            error={errors.image}
            helperText={errors.image && errors.image.message}
            fullWidth
            margin="normal"
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="primary"
          >
            Add Item
          </Button>
          <Rating name="initial-rating" defaultValue={2} precision={0.5} />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { AddItemForm };
