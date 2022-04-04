import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './ReviewCard.css';

const ReviewCard = (props) => {

    const { name, review, rating, image } = props.review

    return (
        <div className='review-container'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p><q>{review}</q></p>
            <div className="ratings">
                <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: '#FFBF00' }} icon={faStar} />}
                    readonly
                ></Rating>

                <p><small>{rating}</small></p>
            </div>
        </div>
    );
};

export default ReviewCard;