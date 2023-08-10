import React from 'react';
import PropTypes from 'prop-types';
import { MoviePoster } from '../MovieItem.jsx/MovieItem.styled';






const MovieItem = ({ movie }) => {
  const { title, poster_path, release_date, vote_average } = movie;
  const posterUrl =  poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/500x750';

  return (
    <div className="movie-item">
       
        <MoviePoster src={posterUrl} alt={title} />
      
      
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-release-date">Release Date: {release_date}</p>
        <p className="movie-rating">Rating: {vote_average}</p>
      </div>
    </div>
  );
};
MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieItem;
