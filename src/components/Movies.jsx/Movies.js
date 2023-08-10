import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { searchMovies } from '../../API/api';
import MovieItem from '../MovieItem.jsx/MovieItem';
import {MoviesWrapper, Input, Button, MoviesList} from './Movies.styled';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = async () => {
    try {
      const data = await searchMovies(searchQuery);
      setSearchResults(data.results);
     
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <MoviesWrapper>
      <Input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <Button onClick={handleSearch}>Search</Button>
      <MoviesList>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
            <MovieItem movie={movie} />
            </Link>
          </li>
        ))}
      </MoviesList>
    </MoviesWrapper>
  );
};


export default Movies;
