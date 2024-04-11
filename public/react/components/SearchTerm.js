import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export const SearchTerm = ({ items, updateItems }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    const lowercase = searchTerm.toLowerCase();
    const filteredItems = items.filter(
      (item) => {
        const nameAndDesc = item.name + " " + item.description;
        return nameAndDesc.toLowerCase().includes(" " + lowercase);
      }
      // (!selectedCategory || item.category === selectedCategory) &&
      // item.price >= priceRange[0] &&
      // item.price <= priceRange[1]
    );
    updateItems(filteredItems);
  }, [searchTerm, selectedCategory, priceRange]);

  return (
    <TextField
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      sx={{ width: "300px" }}
      InputProps={{
        endAdornment: (
          <IconButton>
            <SearchIcon />
          </IconButton>
        ),
      }}
    />
  );
};

export default SearchTerm;
