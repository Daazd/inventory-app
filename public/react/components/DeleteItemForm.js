import React, { useState } from "react";

const DeleteItemForm = ({ deleteItem }) => {
    const [id, setId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        deleteItem(id);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input
                    type="text"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                />
            </label>
            <button type="submit">Delete Item</button>
        </form>
    );
};

export default DeleteItemForm;