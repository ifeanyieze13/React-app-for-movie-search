import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import SearchResult from './SearchResult';

function SearchResults({ results }: { results: SearchResult[] }) {
    return (
      <div className="search-results">
        {results && results.length > 0 ? (
          results.map((result) => (
            <SearchResult key={result.imdbId} result={result} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    );}
export default SearchResults;