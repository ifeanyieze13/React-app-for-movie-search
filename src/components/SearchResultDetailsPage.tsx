import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie_Details_API } from '../apiconfig';

interface SearchResultDetails {
    imdbId: string;
    title: string;
    writer: string;
    plot: string;
    poster: string;
    year: string;
  }


function SearchResultDetailsPage() {
    const { imdbId } = useParams<{ imdbId: string }>();
    const [details, setDetails] = useState<SearchResultDetails | null>(null);
  
    useEffect(() => {
      // Fetch details using the details endpoint based on imdbId
      fetch(`${Movie_Details_API}${imdbId}`)
        .then((response) => response.json())
        .then((data) => setDetails(data));
    }, [imdbId]);
  
    return (
      <div className="details">
        {details ? (
          <>
            <img src={details.poster} alt="Poster" />
            <h2>{details.title}</h2>
            <p>Year: {details.year}</p>
            <p>Writer: {details.writer}</p>
            <p>Description: {details.plot}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
export default SearchResultDetailsPage;
