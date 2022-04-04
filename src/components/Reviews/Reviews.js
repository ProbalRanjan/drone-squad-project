import React from 'react';
import useReview from '../hooks/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css';

const Reviews = () => {

    const [reviews, setReviews] = useReview();

    return (
        <div className='reviews-container'>
            <div className='review-title'>
                <p>Reviews</p>
                <h2>What People Says About Us!</h2>
            </div>
            <div className='reviews-card'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;