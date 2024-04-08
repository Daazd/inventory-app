import React, { useState, useEffect } from "react";
import { Item, mockItem } from "./ItemTest";
import { SingleItemPage } from "../pages/SingleItemPage";
import { AddItemForm } from "./AddItemForm";
import { Button } from "@mui/material";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [openAddItem, setOpenAddItem] = useState(false);

  return (
    <main>
      <h1>Sauce Store</h1>
      <h2>All things 🔥</h2>
      <Button variant="contained" onClick={() => setOpenAddItem(true)}>
        Add Item
      </Button>
      <AddItemForm open={openAddItem} setOpen={setOpenAddItem} />
      <SingleItemPage item={mockItem} cartCount={0} />
    </main>
  );
};
