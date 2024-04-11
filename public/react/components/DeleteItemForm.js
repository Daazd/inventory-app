import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import apiURL from "../api";
import { useNavigate } from "react-router-dom";

const DeleteItemForm = ({ item, onDelete, open, setOpen }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    try {
      const response = await fetch(`${apiURL}/items/${item.id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        onDelete();
        setOpen(false);
        data = await response.json();
        console.log(data)
        alert("Item deleted");
        navigate("/items");
      } else {
        alert("Error deleting item");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Delete Item</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <p>Are you sure you want to delete {item.name}?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button type="submit" variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export { DeleteItemForm };

