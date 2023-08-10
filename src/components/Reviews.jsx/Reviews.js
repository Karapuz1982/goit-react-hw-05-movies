import React, { useEffect, useState } from 'react';
import { getMovieReviews } from '../../API/api';
import {ReviewsWrapper, ReviewList, ReviewItem} from './Reviews.styled';
import PropTypes from 'prop-types';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <ReviewsWrapper>
     
      <ReviewList>
        {reviews.length === 0 ? (
          <p>There are no reviews.</p>
        ) : (
          reviews.map((review) => (
            <ReviewItem key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </ReviewItem>
          ))
        )}      
      </ReviewList>
    </ReviewsWrapper>
  );
};
Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
  
};

export default Reviews;
