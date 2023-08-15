// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate  } from 'react-router-dom';

// import { searchMovies } from '../../API/api';
// import MovieItem from '../MovieItem.jsx/MovieItem';
// import {MoviesWrapper, Input, Button, MoviesList} from './Movies.styled';

// const Movies = () => {

//  const location = useLocation();
//  const navigate = useNavigate();


//   const searchParams = new URLSearchParams(location.search);
//   const initialQuery = searchParams.get('query') || '';

//  const [searchQuery, setSearchQuery] = useState(initialQuery);
//   const [searchResults, setSearchResults] = useState([]);
  
//   const handleSearch = async () => {
//     try {
//       const data = await searchMovies(searchQuery);
//       setSearchResults(data.results);

//        searchParams.set('query', searchQuery);
//      navigate(`?${searchParams.toString()}`);
     
//     } catch (error) {
//       console.error('Error searching movies:', error);
//     }
//   };

//   return (
//     <MoviesWrapper>
//       <Input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
//       <Button onClick={handleSearch}>Search</Button>
//       <MoviesList>
//         {searchResults.map((movie) => (
//           <li key={movie.id}>
//             <Link to={`/movies/${movie.id}`}>
//             <MovieItem movie={movie} />
//             </Link>
//           </li>
//         ))}
//       </MoviesList>
//     </MoviesWrapper>
//   );
// };


// export default Movies;
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { searchMovies } from '../../API/api';
import MovieItem from '../MovieItem.jsx/MovieItem';
import { MoviesWrapper, Input, Button, MoviesList } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const initialQuery = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get('query') || '';
  }, [location.search]);

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback(async () => {
    try {
      setIsLoading(true);

      const data = await searchMovies(searchQuery);
      setSearchResults(data.results);

      const searchParams = new URLSearchParams(location.search);
      searchParams.set('query', searchQuery);
      navigate(`?${searchParams.toString()}`);
    } catch (error) {
      console.error('Error searching movies:', error);
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, navigate, location.search]);

  useEffect(() => {
    if (initialQuery) {
      handleSearch();
    }
  }, [initialQuery, handleSearch]);

  return (
    <MoviesWrapper>
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
      {isLoading && <div>Loading...</div>}
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
