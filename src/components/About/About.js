import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <h2>About Us</h2>
            <div>
                <img src="images/about.jpg" alt="" />
                <h3>The Most Popular Drone Review Website</h3>
                <p>The <span>Drone Squad</span> is the drone review website. Although you may not have a good reason to purchase one, you still have to admit drones are cool. While some are glorified tech toys, the models we showcase here are suitable for imaging and cinematic applications of all sizes. It's good news if you think you can use a flying camera for your next project-the technology has come a long way in a short amount of time. The newer models on the market are much better in terms of video quality and stabilization than the older models. <br /> <br /> But there's a downside. It's true that you get what you pay for, and if you want an aerial video platform that captures stunning footage, you'll need to pony up a few thousand dollars. Before buying a drone, you should do your research because they are so costly.</p>
            </div>
        </div>
    );
};

export default About;