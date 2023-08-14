import React, { useEffect, useState } from 'react';
import { getMovieReviews } from '../../API/api';
import {ReviewsWrapper, ReviewList, ReviewItem} from './Reviews.styled';
import PropTypes from 'prop-types';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
const [showReviewsMessage, setShowReviewsMessage] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
    //   } catch (error) {
    //     console.error('Error fetching movie reviews:', error);
    //   }
    // };
         setShowReviewsMessage(data.results.length === 0);
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
  }
};

    fetchMovieReviews();
  }, [movieId]);

  return (
    <ReviewsWrapper>
     
      <ReviewList>
        {
          reviews.map((review) => (
            <ReviewItem key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </ReviewItem>
          ))
        }      
      </ReviewList>
      {showReviewsMessage && 
        <p> There are no reviews.</p>}
    </ReviewsWrapper>
  )
};
Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
  
};

export default Reviews;
