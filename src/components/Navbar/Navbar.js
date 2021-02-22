import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Nav, NavigationLinksMobile, NavigationLinksDesktop, NavLinkList, Link, Menu, ToggleButton, ToggleImage, ThemeToggleAndLogo, Background } from './Navbar.styled';

import ToggleButtonOpen from './../../images/button-open.svg';
import ToggleButtonCloseLight from './../../images/button-close-light.svg';
import ToggleButtonCloseDark from './../../images/button-close-dark.svg';
import ThemeToggle from './../../components/ThemeToggle/ThemeToggle';
import { ThemeContext } from '../../contexts/ThemeContext';
import Resume from './../../images/open-cv.svg';

import Logo from './../Logo/Logo';
import './Navbar.css'


const toggleButtonVariants = {
  // hidden: {
  //   rotate: 0
  // },
  // visible: {
  //   rotate: -360,

  // }
}
const variantContainer = {
  // hidden: {
  //   opacity: 0,
  // },
  // visible: {
  //   opacity: 1,
  //   type: 'tween',
  //   when: "beforeChildren",
  //   // staggerChildren: 4,
  //   // delayChildren: 1,

  // }
}
const variants = {
  // hidden: {
  //   opacity: 0,
  //   y: -400,
  //   // y: 0

  // },
  // visible: {
  //   opacity: 1,
  //   y: 0,
  //   // transition: { duration: 1, delay: 0.5 }
  //   transition: { duration: 1 }

  // }
}

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;

  //Scroll functionality to close navbar
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      prevScrollpos < currentScrollPos && setTimeout(() => { setActive(false) }, 500);
      prevScrollpos = currentScrollPos;
    }
  }, [])

  const handleToggle = () => {
    setActive(!isActive);
  }

  const screenWidth = window.innerWidth;
  return (
    <div id="navbar">
      {/* {isActive ?
        <Background
        ></Background>
        :
        null
      } */}
      <Background className={isActive ? 'background full' : "not-active"} isActive={isActive} />
      {/* <Background style={isActive ? { animation: 'showBackground', animationDelay: '4s', display: 'block' } : null} /> */}

      <Nav theme={theme}>
        {/* If isActive is true show nav links and close toggle button */}
        {isActive ?
          <div style={{ width: '100%' }}>
            <NavigationLinksMobile theme={theme} isLightTheme={isLightTheme}>
              <NavLinkList className={isActive ? "active" : "not-active"}>
                <Menu>
                  <p style={{ color: theme.div }}>Menu</p>
                </Menu>
                <Link theme={theme} href="#about" >
                  <h2>About Lucy</h2>
                </Link>
                <Link theme={theme} href="#portfolio" >
                  <h2>Portfolio</h2>
                </Link>
                <Link theme={theme} href="#education">
                  <h2>Education</h2>
                </Link>
                <Link contactLink theme={theme} href="#contact">
                  <h2>Contact</h2>
                </Link>
                <Link resumeLink theme={theme} rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1nFLSELiQ6yCG8C1aW9e4CHg8dTh6vawa/view?usp=sharing">
                  <img src={Resume} alt="icon to open resume" />
                </Link>
              </NavLinkList>
              {isLightTheme ?
                (<ToggleButton crossToggle onClick={handleToggle}>
                  <ToggleImage src={ToggleButtonCloseLight} alt="toggle button close icon"
                    style={isActive ? { animation: 'openNav 1s' } : { animation: 'closeNav 1s' }}
                    crossToggle onClick={handleToggle}
                  // animate={isActive ? "visible" : "hidden"}
                  // variants={toggleButtonVariants}
                  />
                </ToggleButton>)
                :
                (<ToggleButton crossToggle onClick={handleToggle}>
                  <motion.img src={ToggleButtonCloseDark} alt="toggle button close icon"
                    animate={isActive ? "visible" : "hidden"}
                    variants={toggleButtonVariants}
                  />
                </ToggleButton>
                )
              }
            </NavigationLinksMobile>

          </div>
          :
          //If isActive is false show open toggle button, themetoggle button and logo
          (<div>
            <ThemeToggleAndLogo>
              <ThemeToggle />
              <Logo />
            </ThemeToggleAndLogo>
            <ToggleButton onClick={handleToggle}>
              <motion.img src={ToggleButtonOpen} alt="toggle button open icon"
                variants={toggleButtonVariants}
                animate={isActive ? "visible" : "hidden"}
              />
            </ToggleButton>
          </div>)
        }

        {screenWidth > 768 &&
          (
            <NavigationLinksDesktop theme={theme} isLightTheme={isLightTheme}
            >
              {/* style={isActive ? { display: 'flex', animation: 'expandnav 2s' } : { display: 'none' }} */}
              <NavLinkList className={isActive ? "active" : "not-active"}
              >
                <Menu >
                  <p style={{ color: theme.div }}>Menu</p>
                </Menu>
                <Link variants={variants} theme={theme} href="#about" className={isActive ? "links" : "not-active"} >
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
                <Link resumeLink theme={theme} rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1nFLSELiQ6yCG8C1aW9e4CHg8dTh6vawa/view?usp=sharing">
                  <img src={Resume} alt="icon to open resume" />
                </Link>
              </NavLinkList>
            </NavigationLinksDesktop>
          )
        }
      </Nav>
    </div>
  );
}

export default Navbar;


