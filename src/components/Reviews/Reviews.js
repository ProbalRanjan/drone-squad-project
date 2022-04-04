import React from 'react';
import useReview from '../hooks/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css';

const Reviews = () => {

    const [reviews, setReviews] = useReview();

    return (
        <div>
            <h2>I am reviews</h2>
            <div className='reviews-container'>
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