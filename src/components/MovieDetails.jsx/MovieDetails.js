
import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { getMovieDetails } from '../../API/api';
import Cast from '../Cast.jsx/Cast';
import Reviews from '../Reviews.jsx/Reviews';
import {MovieDetailsWrapper, MoviesPoster, MovieInformation, MovieTitle, MovieDescription, ButtonContainer, LinkButton } from './MovieDetails.styled';
import GoBackButton from '../GoBackbutton.jsx/GoBackButton';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
   const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

   const toggleCast = () => {
    setShowCast(!showCast);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };
  

  return (
    <MovieDetailsWrapper>

       {movie.poster_path && (
        <MoviesPoster
          width={170}
         src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <MovieInformation>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieDescription>{movie.overview}</MovieDescription>
       
       <ButtonContainer>
     <LinkButton onClick={toggleCast}> Cast</LinkButton>
      {showCast && <Cast movieId={movieId} />}
      <LinkButton onClick={toggleReviews}>Reviews</LinkButton>
      {showReviews && <Reviews movieId={movieId} />}
</ButtonContainer>
      </MovieInformation>
      <GoBackButton />
    </MovieDetailsWrapper>
  );
  
};

export default MovieDetails;
