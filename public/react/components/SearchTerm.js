import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export const SearchTerm = ({ searchTerm, setSearchTerm }) => {
  const [items, setItems] = useState([]);

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || item.category === selectedCategory) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  return (
    <TextField
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
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