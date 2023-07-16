import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

function SearchBar({ onSearch }: { onSearch: (term: string) => void }) {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = () => {
      onSearch(searchTerm);
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  }
export default SearchBar;