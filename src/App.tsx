import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import './App.css';
import { Movie_Search_API } from './apiconfig';
import { Search_History_API } from './apiconfig';

import SearchResultDetailsPage from './components/SearchResultDetailsPage';
import SearchResult from './components/SearchResult';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';


function App() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false); 

  useEffect(() => {
    fetchSearchHistory();
  }, []);

  const fetchSearchHistory = () => {
    fetch(Search_History_API)
      .then((response) => response.json())
      .then((data) => setSearchHistory(data));
  };

  const handleSearch = (term: string) => {
    fetch(`${Movie_Search_API}${term}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
        fetchSearchHistory();
        setHasSearched(true);
      });
  };

  const handleHistoryClick = (term: string) => {
    setActiveItem(term); 
    handleSearch(term);
  };

  return (
    <Router>
      <div className="header">
        <h1 className="app-title">My Movie Search App</h1>
      </div>


      <div className="container">

        <div className="sidebar">
          <h2>Search History</h2>
          <ul>
            {searchHistory.map((term) => (
              <li
                key={term}
                onClick={() => handleHistoryClick(term)}
                className={activeItem === term ? "active" : ""}
                style={{ cursor: "pointer" }}
              >
                {term}
              </li>
            ))}
          </ul>
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<SearchBar onSearch={handleSearch} />} />
            { <Route path="/search/:term" element={<SearchResults results={[]} />} 
            /> }
            { <Route
              path="/details/:imdbId"
              element={<SearchResultDetailsPage />}
            /> }

          </Routes>
          {hasSearched ? (searchResults.length > 0 ? (
    <SearchResults results={searchResults} />
  ) : (
    <p>No results found.</p>
  )) : null}
          </div>  

      </div>


    </Router>
  );
}

export default App;

