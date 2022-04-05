import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div className='error-page'>
            <img src="images/404-img.png" alt="" />
            <div className='home-button'>
                <Link to='/home'>Go to Homepage</Link>
            </div>
        </div>
    );
};

export default PageNotFound;