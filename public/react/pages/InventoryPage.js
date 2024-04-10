import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { ItemsList } from "../components/ItemsList";
import { SearchTerm } from "../components/SearchTerm";
import { AddItemForm } from "../components/AddItemForm";
import apiURL from "../api";

const InventoryPage = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [openAddItem, setOpenAddItem] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${apiURL}/items`);
        const data = await response.json();
        setItems(data);
        setFilteredItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <SearchTerm items={items} updateItems={setFilteredItems} />
      <Stack spacing={4}>
        <Grid container spacing={4}>
          <ItemsList items={filteredItems} />
        </Grid>   
        <Fab sx={{
      position: "fixed",
      bottom: (theme) => theme.spacing(2),
      right: (theme) => theme.spacing(2)
    }} color="primary" aria-label="add" onClick={() => setOpenAddItem(!openAddItem)}>
          <AddIcon />
          </Fab>   
        <AddItemForm open={openAddItem} setOpen={setOpenAddItem} />
      </Stack>
    </Box>
    
  );
};

export { InventoryPage };
