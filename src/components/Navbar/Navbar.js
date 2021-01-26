import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ToggleButton from './../../images/button-hamburger.svg';
import LightBulb from './../../images/button-light-bulb.svg';
import Logo from './../../images/logo.svg';

import './Navbar.css';

const Navbar = () => {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
    }
    return (
        <div>
            <nav className="navbar">
                <div className="bulb-and-logo">
                    <div>
                        <img src={LightBulb} alt="icon of light bulb" />
                    </div>
                    <div className="brand-title">
                        <img src={Logo} alt="logo icon" />
                    </div>
                </div>
                {isActive ?
                    (<a href="#" className="toggle-button cross-toggle" onClick={handleToggle}>
                        <i className="fas fa-times"></i>
                    </a>) :
                    (<a href="#" className="toggle-button" onClick={handleToggle}>
                        <img src={ToggleButton} alt="toggle button icon" />
                    </a>)
                }
                <div className="navbar-links">
                    <ul className={isActive ? "active" : null}>
                        <Link to="about">About Lucy</Link>
                        <Link to="portfolio">Portfolio</Link>
                        <Link to="education">Education</Link>
                        <Link to="contact">Contact</Link>
                        <Link to="#">Resume</Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;