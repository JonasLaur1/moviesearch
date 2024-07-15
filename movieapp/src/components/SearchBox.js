// src/components/SearchBox.js
import React from 'react';
import '../App.css'; // Import the CSS file

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <input
      className='form-control search-box'
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
      placeholder='Type to search...'
    />
  );
};

export default SearchBox;
