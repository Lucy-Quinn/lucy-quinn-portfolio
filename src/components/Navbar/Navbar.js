import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Nav,
  NavigationLinksMobile,
  NavigationLinksDesktop,
  NavLinkList,
  Link,
  Menu,
  ToggleButton,
  ToggleImage,
  ThemeToggleAndLogo,
  Background,
  NavNotActive,
  ThemeToggleAndCv,
} from "./Navbar.styled";

import ToggleButtonOpen from "./../../images/button-open.svg";
import ToggleButtonCloseLight from "./../../images/button-close-light.svg";
import ToggleButtonCloseDark from "./../../images/button-close-dark.svg";
import ThemeToggle from "./../../components/ThemeToggle/ThemeToggle";
import { ThemeContext } from "../../contexts/ThemeContext";
import Resume from "./../../images/open-cv.svg";

import Logo from "./../Logo/Logo";

const toggleButtonVariants = {
  // hidden: {
  //   rotate: 0
  // },
  // visible: {
  //   rotate: -360,
  // }
};
const variantContainer = {
  hidden: {
    opacity: 0,
    type: 'tween',
    // y: -400,
    transition: { duration: 0.5, delay: 0.5 }

  },
  visible: {
    opacity: 1,
    type: 'tween',
    y: 0,
    transition: { duration: 0.5 },

  },

  // hiddenExit: {
  //   // opacity: 0,
  //   type: 'tween',
  //   y: -400,
  //   transition: { duration: 0.5 }


  // }
};
const variants = {
  hidden: {
    // opacity: 0,
    y: -400,
    // y: 0
    transition: { duration: 0.5 }

  },
  visible: {
    // opacity: 1,
    y: 0,
    // transition: { duration: 1, delay: 0.5 }
    transition: { duration: 1 }
  },

  // hiddenExit: {
  //   y: -400,
  //   // y: 0
  //   transition: { duration: 0.5 }

  // }
};

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;

  //Scroll functionality to close navbar
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      prevScrollpos < currentScrollPos &&
        setTimeout(() => {
          setActive(false);
        }, 500);
      prevScrollpos = currentScrollPos;
    };
  }, []);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const screenWidth = window.innerWidth;
  return (
    <div id="navbar">
      {/* <AnimatePresence> */}

      {isActive && (
        <Background
          className={`overlay${isActive ? "-active" : "-not-active"}`}
          isActive={isActive}
        />
      )}
      {/* </AnimatePresence> */}


      <Nav theme={theme}>
        {screenWidth <= 768 && (
          <>
            {/* If isActive is true show nav links and close toggle button */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  style={{ width: "100%" }}
                  // exit="hiddenExit"
                  exit="hidden"
                  initial="hidden"
                  animate="visible"
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // exit={{ opacity: 0 }}
                  variants={variantContainer}
                >
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
                        href="https://drive.google.com/file/d/1nFLSELiQ6yCG8C1aW9e4CHg8dTh6vawa/view?usp=sharing"
                      >
                        <img src={Resume} alt="icon to open resume" />
                      </Link>
                    </NavLinkList>

                    <ToggleButton crossToggle onClick={handleToggle}>
                      <ToggleImage
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
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {!isActive && (
                <NavNotActive>
                  <ThemeToggleAndLogo>
                    <ThemeToggle />
                    <Logo screenWidth={screenWidth} />
                  </ThemeToggleAndLogo>
                  <ToggleButton onClick={handleToggle}>
                    <motion.img
                      src={ToggleButtonOpen}
                      alt="toggle button open icon"
                      isActive={isActive}

                    />
                  </ToggleButton>
                </NavNotActive>
              )}
            </AnimatePresence>
          </>
        )}

        {screenWidth > 768 && (
          <>
            <Logo screenWidth={screenWidth} />

            <NavigationLinksDesktop theme={theme} isLightTheme={isLightTheme}>
              {/* style={isActive ? { display: 'flex', animation: 'expandnav 2s' } : { display: 'none' }} */}
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

            <ThemeToggleAndCv>
              <ThemeToggle />
              <Link
                resumeLink
                theme={theme}
                rel="noopener noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/1nFLSELiQ6yCG8C1aW9e4CHg8dTh6vawa/view?usp=sharing"
              >
                <img src={Resume} alt="icon to open resume" />
              </Link>
            </ThemeToggleAndCv>
          </>
        )}
      </Nav>
    </div>
  );
};

export default Navbar;
