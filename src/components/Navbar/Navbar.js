import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ToggleButtonOpen from './../../images/button-open.svg';
import ToggleButtonClose from './../../images/button-close.svg';
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

                {isActive ?
                    (<a href="#" className="toggle-button cross-toggle" onClick={handleToggle}>
                        <img src={ToggleButtonClose} alt="toggle button close icon" />
                    </a>) :
                    (<div>
                        <div className="bulb-and-logo">
                            <div>
                                <img src={LightBulb} alt="icon of light bulb" />
                            </div>
                            <div className="brand-title">
                                <img src={Logo} alt="logo icon" />
                            </div>
                        </div>

                        <a href="#" className="toggle-button" onClick={handleToggle}>
                            <img src={ToggleButtonOpen} alt="toggle button open icon" />
                        </a>
                    </div>)
                }
                <div className="navbar-links">
                    <ul className={isActive ? "active" : null}>
                        <li>
                            <p>Menu</p>
                        </li>
                        <Link to="about">
                            <h2>About Lucy</h2>
                        </Link>
                        <Link to="portfolio">
                            <h2>Portfolio</h2>
                        </Link>
                        <Link to="education">
                            <h2>Education</h2>
                        </Link>
                        <Link to="contact">
                            <h2>Contact</h2>
                        </Link>
                        <Link to="#">
                            <h2>Resume</h2>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;