import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='hero-container'>
            <div className='hero-title'>
                <h1>World's Most Favourite <br /> <span>Drone Reviewer</span></h1>
                <p>This drone is a small folding drone with a premium 1-inch sensor camera and a number of automated flight and safety features, making it a pro-minded alternative to the more affordable Drone.</p>
                <button>View More</button>
            </div>
            <div className='hero-image'>
                <img src="./images/img1.png" alt="" />
            </div>
        </div>
    );
};

export default Home;