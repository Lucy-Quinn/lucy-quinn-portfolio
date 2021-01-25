import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Navbar.css';

const Navbar = () => {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
    }

    return (
        <div>
            <nav className="navbar">
                <div className="brand-title">
                    <p>LUCYQUINN DEVELOPER</p>
                </div>
                <i class="far fa-moon"></i>
                {isActive ?
                    <a href="#" className="toggle-button cross-toggle" onClick={handleToggle}>
                        <i class="fas fa-times"></i>
                    </a> :

                    <a href="#" className="toggle-button" onClick={handleToggle}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </a>
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


{/* <div>
<nav className="navbar">
    <div className="brand-title">
        <p>LUCYQUINN DEVELOPER</p>
    </div>
    <i class="far fa-moon"></i>
    <a href="#" className="toggle-button" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </a>
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
</div> */}