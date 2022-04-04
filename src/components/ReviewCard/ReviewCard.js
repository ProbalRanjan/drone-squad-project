import React from 'react';
import './ReviewCard.css';

const ReviewCard = (props) => {

    const { name, review, rating, image } = props.review

    return (
        <div className='review-container'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>"{review}"</p>
            <p><small>{rating}</small></p>
        </div>
    );
};

export default ReviewCard;