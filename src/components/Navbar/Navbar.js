import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../../contexts/ThemeContext";
import useWindowSize from "../../hooks/useWindowSize";
import {
  Nav, Link, ToggleButton, ThemeToggleAndLogo, Background, NavNotActive, ThemeToggleAndCv,
} from "./Navbar.styled";
import { variantContainer, backgroundVariants, cvVariants } from './Navbar.variants';
import MobileNavLinks from './MobileNavLinks';
import DesktopNavLinks from "./DesktopNavLinks";
import ToggleButtonOpen from "./../../images/button-open.svg";
import ThemeToggle from "./../../components/ThemeToggle/ThemeToggle";
import Resume from "./../../images/open-cv.svg";
import Logo from "./../Logo/Logo";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;
  const { width } = useWindowSize();

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


  return (
    <div id="navbar">
      <AnimatePresence>
        {isActive && (
          <Background
            variants={backgroundVariants}
            initial="hidden"
            animate="visible"
            exit="hiddenExit"
          />
        )}
      </AnimatePresence>

      <Nav theme={theme}>
        {width <= 768 && (
          <>
            {/* If isActive is true show nav links and close toggle button */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  style={{ width: "100%" }}
                  exit="hidden"
                  initial="hidden"
                  animate="visible"
                  variants={variantContainer}
                >
                  <MobileNavLinks
                    isActive={isActive}
                    isLightTheme={isLightTheme}
                    theme={theme}
                    handleToggle={handleToggle}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {!isActive && (
                <NavNotActive>
                  <ThemeToggleAndLogo>
                    <ThemeToggle />
                    <Logo width={width} />
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

        {width > 768 && (
          <>
            <Logo width={width} />
            <DesktopNavLinks
              isActive={isActive}
              isLightTheme={isLightTheme}
              theme={theme}
            />
            <ThemeToggleAndCv>
              <ThemeToggle />
              <Link
                resumeLink
                theme={theme}
                rel="noopener noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/1cpX7eMAHz4IMCncKHx-Ct4QdoTl-uGXz/view"
              >
                <motion.img
                  variants={cvVariants}
                  whileHover="hover"
                  src={Resume}
                  alt="icon to open resume"
                />
              </Link>
            </ThemeToggleAndCv>
          </>
        )}
      </Nav>
    </div>
  );
};

export default Navbar;
