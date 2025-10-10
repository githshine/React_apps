import React from 'react';

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        name="search"
        placeholder="Enter city here..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(event) => (event.key === 'Enter' ? handleSearch() : null)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
