
// import React, { useState, useEffect, useCallback } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { searchMovies } from '../../API/api';
// import MovieItem from '../MovieItem.jsx/MovieItem';
// import { MoviesWrapper, Input, Button, MoviesList } from './Movies.styled';

// const Movies = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const initialQuery = new URLSearchParams(location.search).get('query') || '';

//   const [searchQuery, setSearchQuery] = useState(initialQuery);
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSearch = useCallback(async () => {
//     try {
//       setIsLoading(true);

//       const data = await searchMovies(searchQuery);
//       setSearchResults(data.results);

//       const searchParams = new URLSearchParams(location.search);
//       searchParams.set('query', searchQuery);
//       navigate(`?${searchParams.toString()}`);
//     } catch (error) {
//       console.error('Error searching movies:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [searchQuery, navigate, location.search]);

//   // Ефект, який спрацьовує при зміні параметра 'query' в адресній стрічці
//   useEffect(() => {
//     if (initialQuery) {
//       handleSearch();
//     }
//   }, [initialQuery, handleSearch]);

//   // Ефект, який спрацьовує при першому рендері сторінки
//   useEffect(() => {
//     if (!initialQuery) {
//       handleSearch();
//     }
//   }, [handleSearch, initialQuery]);

//   return (
//     <MoviesWrapper>
//       <Input
//         type="text"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <Button onClick={handleSearch}>Search</Button>
//       {isLoading && <div>Loading...</div>}
//       <MoviesList>
//         {searchResults.map((movie) => (
//           <li key={movie.id}>
//             <Link to={`/movies/${movie.id}`}>
//               <MovieItem movie={movie} />
//             </Link>
//           </li>
//         ))}
//       </MoviesList>
//     </MoviesWrapper>
//   );
// };

// export default Movies;

// import React, { useState, useEffect, useCallback } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { searchMovies } from '../../API/api';
// import MovieItem from '../MovieItem.jsx/MovieItem';
// import { MoviesWrapper, Input, Button, MoviesList } from './Movies.styled';

// const Movies = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const initialQuery = new URLSearchParams(location.search).get('query') || '';

//   const [searchQuery, setSearchQuery] = useState(initialQuery);
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSearch = useCallback(async () => {
//     try {
//       setIsLoading(true);

//       const data = await searchMovies(searchQuery);
//       setSearchResults(data.results);

//       const searchParams = new URLSearchParams(location.search);
//       searchParams.set('query', searchQuery);
//       navigate(`?${searchParams.toString()}`);
//     } catch (error) {
//       console.error('Error searching movies:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [searchQuery, navigate, location.search]);
// useEffect(() => {
  
// }, []);
//   // Ефект, який спрацьовує при зміні параметра 'query' в адресній стрічці
//   useEffect(() => {
//     handleSearch();
//   }, [searchQuery, handleSearch]);

//   return (
//     <MoviesWrapper>
//       <Input
//         type="text"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <Button onClick={handleSearch}>Search</Button>
//       {isLoading && <div>Loading...</div>}
//       <MoviesList>
//         {searchResults.map((movie) => (
//           <li key={movie.id}>
//             <Link to={`/movies/${movie.id}`}>
//               <MovieItem movie={movie} />
//             </Link>
//           </li>
//         ))}
//       </MoviesList>
//     </MoviesWrapper>
//   );
// };

// export default Movies;
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { searchMovies } from '../../API/api';
import MovieItem from '../MovieItem.jsx/MovieItem';
import { MoviesWrapper, Input, Button, MoviesList } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialQuery = new URLSearchParams(location.search).get('query') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback(async (query) => {
    try {
      setIsLoading(true);

      const data = await searchMovies(query);
      setSearchResults(data.results);

      const searchParams = new URLSearchParams(location.search);
      searchParams.set('query', query);
      navigate(`?${searchParams.toString()}`);
    } catch (error) {
      console.error('Error searching movies:', error);
    } finally {
      setIsLoading(false);
    }
  }, [location.search, navigate]);

  useEffect(() => {
    if (initialQuery) {
      handleSearch(initialQuery);
    }
  }, [initialQuery, handleSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <MoviesWrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
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
