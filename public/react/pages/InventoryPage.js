import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import { ItemsList } from "../components/ItemsList";
import apiURL from "../api";

const InventoryPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${apiURL}/items`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Stack spacing={4}>
        <Grid container spacing={4}>
          <ItemsList items={items} />
        </Grid>
      </Stack>
    </Box>
  );
};

export { InventoryPage };
