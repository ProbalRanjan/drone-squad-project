import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../hooks/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Home.css';

const Home = () => {

    const [reviews, setReviews] = useReview()

    return (
        <div>
            <div className='hero-container'>
                <div className='hero-title'>
                    <h1>World's Most Favourite <br /> <span>Drone Reviewer</span></h1>
                    <p>This drone is a small folding drone with a premium sensor camera and a number of automated flight and safety features, making it a pro alternative to the more affordable Drone.</p>
                    <button>View More</button>
                </div>
                <div className='hero-image'>
                    <img src="./images/hero-image.png" alt="" />
                </div>
            </div>
            <div className='reviews-container'>
                <h2>Client's Reviews</h2>
                <div className='reviews-card'>
                    {
                        reviews.slice(0, 3).map(review => <ReviewCard
                            key={review._id}
                            review={review}
                        ></ReviewCard>)
                    }
                </div>
                <div className='review-button'>
                    <Link to='/reviews'>View all Reviews</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;