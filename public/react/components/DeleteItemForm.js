import React, { useState } from "react";

const DeleteItemForm = ({ deleteItem, open, setOpen, item }) => {
    const [id, setId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setId(item.id);
        deleteItem(id);
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Delete Item</DialogTitle>
            <DialogContent>
                <p>Are you sure you want to delete this item?</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit}>Delete</Button>
                <Button onClick={() => setId("")}>Cancel</Button>
            </DialogActions>

        </Dialog>
  
    );
};

export default DeleteItemForm;