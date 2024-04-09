import React from 'react';

export const SearchTerm = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchTerm;