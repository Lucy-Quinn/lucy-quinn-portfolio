import React, { useState, useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ToggleButtonOpen from './../../images/button-open.svg';
import ToggleButtonClose from './../../images/button-close.svg';
import LogoLight from './../../images/logo-light.svg';
import LogoDark from './../../images/logo-dark.svg';
import ThemeToggle from './../../components/ThemeToggle/ThemeToggle';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Navbar.css';

const Navbar = () => {
    const [isActive, setActive] = useState(false);
    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;
    const handleToggle = () => {
        setActive(!isActive);
    }
    return (
        <div>
            <nav className="navbar" style={{ background: theme.gradientOne }}>
                {isActive ?
                    (<a href="#" className="toggle-button cross-toggle" onClick={handleToggle}>
                        <img src={ToggleButtonClose} alt="toggle button close icon" />
                    </a>) :
                    (<div>
                        <div className="bulb-and-logo">
                            <ThemeToggle />
                            {isLightTheme ?
                                <div className="brand-title">
                                    <img src={LogoLight} alt="logo icon" />
                                </div>
                                :
                                <div className="brand-title">
                                    <img src={LogoDark} alt="logo icon" />
                                </div>
                            }

                        </div>

                        <a href="#" className="toggle-button" onClick={handleToggle}>
                            <img src={ToggleButtonOpen} alt="toggle button open icon" />
                        </a>
                    </div>)
                }
                <div className="navbar-links">
                    <ul className={isActive ? "active" : null}>
                        <li>
                            <p style={{ color: theme.div }}>Menu</p>
                        </li>
                        <Link to="about">
                            <h2 style={{ color: theme.primaryColor }}>About Lucy</h2>
                        </Link>
                        <Link to="portfolio">
                            <h2 style={{ color: theme.primaryColor }}>Portfolio</h2>
                        </Link>
                        <Link to="education">
                            <h2 style={{ color: theme.primaryColor }}>Education</h2>
                        </Link>
                        <Link to="contact">
                            <h2 style={{ color: theme.primaryColor }}>Contact</h2>
                        </Link>
                        <Link to="#">
                            <h2 style={{ color: theme.primaryColor }}>Resume</h2>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
