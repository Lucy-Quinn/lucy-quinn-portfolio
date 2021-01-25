import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="brand-title">
                    <p>LUCYQUINN DEVELOPER</p>
                </div>
                <a href="#" className="toggle-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>

                <div className="navbar-links">
                    <ul>
                        <li><a className="first-three-links" href="#">About Lucy</a></li>
                        <li><a className="first-three-links" href="#">Portfolio</a></li>
                        <li><a className="first-three-links" href="#">Education</a></li>
                        <li><a className="fourth-nav-link" href="#">Contact</a></li>
                        <li><a className="fourth-nav-link" href="#">Resume</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;