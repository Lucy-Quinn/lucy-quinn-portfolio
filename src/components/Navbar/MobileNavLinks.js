import React from 'react';
import { NavigationLinksMobile, NavLinkList, Link, Menu, ToggleButton, ToggleImage } from "./Navbar.styled";
import { toggleButtonVariants, variants } from './Navbar.variants';
import ToggleButtonCloseLight from "./../../images/button-close-light.svg";
import ToggleButtonCloseDark from "./../../images/button-close-dark.svg";
import Resume from "./../../images/open-cv.svg";

const MobileNavLinks = ({ isActive, isLightTheme, theme, handleToggle }) => {
    return (
        <NavigationLinksMobile
            theme={theme}
            isLightTheme={isLightTheme}
        >
            <NavLinkList className={isActive ? "active" : "not-active"}
                variants={variants}
            >
                <Menu>
                    <p style={{ color: theme.bodyCopy }}>Menu</p>
                </Menu>
                <Link theme={theme} href="#about">
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
                <Link
                    resumeLink
                    theme={theme}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://drive.google.com/file/d/1cpX7eMAHz4IMCncKHx-Ct4QdoTl-uGXz/view"
                >
                    <img src={Resume} alt="icon to open resume" />
                </Link>
            </NavLinkList>

            <ToggleButton crossToggle onClick={handleToggle}>
                <ToggleImage
                    variants={toggleButtonVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hiddenExit"
                    src={
                        isLightTheme
                            ? ToggleButtonCloseLight
                            : ToggleButtonCloseDark
                    }
                    alt="toggle button close icon"
                    isActive={isActive}
                    crossToggle
                    onClick={handleToggle}
                />
            </ToggleButton>
        </NavigationLinksMobile>
    );
}

export default MobileNavLinks;

