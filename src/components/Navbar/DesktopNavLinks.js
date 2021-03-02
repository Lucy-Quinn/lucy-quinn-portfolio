import React from 'react';
import { variants } from './Navbar.variants';
import { NavigationLinksDesktop, NavLinkList, Link, Menu } from "./Navbar.styled";

const DesktopNavLinks = ({ isActive, isLightTheme, theme }) => {
    return (
        <NavigationLinksDesktop theme={theme} isLightTheme={isLightTheme}>
            <NavLinkList className={isActive ? "active" : "not-active"}>
                <Menu>
                    <p style={{ color: theme.div }}>Menu</p>
                </Menu>
                <Link
                    variants={variants}
                    theme={theme}
                    href="#about"
                    className={isActive ? "links" : "not-active"}
                >
                    <h2>About Lucy</h2>
                </Link>
                <Link theme={theme} href="#portfolio">
                    <h2>Portfolio</h2>
                </Link>
                <Link theme={theme} href="#education">
                    <h2>Education</h2>
                </Link>
                <Link contactLink theme={theme} href="#contact">
                    <h2>Contact</h2>
                </Link>
            </NavLinkList>
        </NavigationLinksDesktop>
    );
}

export default DesktopNavLinks;