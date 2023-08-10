
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../API/api';
import MovieItem from '../MovieItem.jsx/MovieItem';
import { HomeWrapper, HomeCard, HomeList, HomeGrid} from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then((data) => setTrendingMovies(data.results));
  }, []);

  return (
    <HomeWrapper>
       <HomeList>
         <HomeGrid> 
        {trendingMovies.map((movie) => (
          <HomeCard key={movie.id}>
            <div className='cardTitle'>
            <Link to={`/movies/${movie.id}`}>
             <MovieItem movie={movie} />
              </Link>
            </div>
          </HomeCard>
        ))}
        </HomeGrid>
        </HomeList>
    
    </HomeWrapper>
  );
};


export default Home;
