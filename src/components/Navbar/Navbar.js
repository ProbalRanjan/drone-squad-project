import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-title">
                <h1>Drone <span>Squad</span></h1>
            </div>
            <nav className="nav-menu">
                <Link to='/'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Navbar;