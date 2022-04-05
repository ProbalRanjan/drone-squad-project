import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className='nav-bar'>
                <div className="nav">
                    <Link to='/'>
                        <h1>Drone <span>Squad</span></h1>
                    </Link>
                    <div className="nav-menu">
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/reviews'>Reviews</Link>
                            </li>
                            <li>
                                <Link to='/dashboard'>Dashboard</Link>
                            </li>
                            <li>
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                        </ul>
                    </div>

                    {
                        open && (
                            <div className="mob-menu">
                                <ul>
                                    <li>
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li>
                                        <Link to='/reviews'>Reviews</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard'>Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link to='/blog'>Blog</Link>
                                    </li>
                                    <li>
                                        <Link to='/about'>About</Link>
                                    </li>
                                </ul>
                            </div>
                        )
                    }

                    <div onClick={() => setOpen(!open)} className="hamburger">
                        {open ? <XIcon /> : <MenuIcon />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;