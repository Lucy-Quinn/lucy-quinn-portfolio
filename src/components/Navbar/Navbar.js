import React, { useState } from 'react';
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
                <a href="#" className="toggle-button" onClick={handleToggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <div className="navbar-links">
                    <ul className={isActive ? "active" : null}>
                        <a href="#about">About Lucy</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#education">Education</a>
                        <a href="#contact">Contact</a>
                        <a href="#">Resume</a>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;