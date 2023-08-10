
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getMovieCredits } from '../../API/api';
import { CastWrapper, CastList, CastPHoto, CastItem } from './Cast.styled';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <CastWrapper>
      
      <CastList>
        {cast.length === 0 ? (
          <p>There are no cast.</p>
        ) : (
          cast.map((actor) => (
            <CastItem key={actor.id}>
             
                <CastPHoto
                  width={170}
              src={
      actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : 'https://via.placeholder.com/500x750'
    }
              alt={actor.name}
  />
              <p>{actor.name}</p>
            </CastItem>
          ))
        )}    
      </CastList>
    </CastWrapper>
  );
};
Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
  
};

export default Cast;
