import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import { ItemsList } from "../components/ItemsList";
import { SearchTerm } from "../components/SearchTerm";
import apiURL from "../api";

const InventoryPage = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

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
      </Stack>
    </Box>
  );
};

export { InventoryPage };
