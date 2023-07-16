import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

interface SearchResult {
    imdbId: string;
    title: string;
    year: number;
    poster: string;
  }

function SearchResult({ result }: { result: SearchResult }) {
return (
    <div className="result-item">
    <Link to={`/details/${result.imdbId}`}>
        <h3>{result.title}</h3>
        <p>Year: {result.year}</p>
    </Link>
    </div>
);
}
export default SearchResult;