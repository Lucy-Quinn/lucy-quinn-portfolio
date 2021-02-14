import React, { useState, useContext } from 'react';
// import { HashLink } from 'react-router-hash-link';
import ToggleButtonOpen from './../../images/button-open.svg';
import ToggleButtonCloseLight from './../../images/button-close-light.svg';
import ToggleButtonCloseDark from './../../images/button-close-dark.svg';
// import LogoLight from './../../images/logo-light.svg';
// import LogoDark from './../../images/logo-dark.svg';
import ThemeToggle from './../../components/ThemeToggle/ThemeToggle';
import { ThemeContext } from '../../contexts/ThemeContext';
import Resume from './../../images/open-cv.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from './../Logo/Logo';


//Styled components
const Nav = styled.nav`
  background: ${({ theme }) => theme.gradientOne};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

const NavigationLinks = styled(motion.div)`
  width: 100%;
  margin: 0;
  background: ${({ isLightTheme, theme }) => isLightTheme ? '#fff' : theme.languages};
  border-radius: 0 0 50% 50%  / 70px;
  .active{ display: flex;};
  @media (min-width: 1024px) {
    width: 50%;
    border-radius: 0;
    background: ${({ theme }) => theme.gradientOne};
  }
`

const NavLinkList = styled(motion.ul)`
flex-direction: column;

  padding: 0;
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    width: 100%;
  }
`

const Link = styled.a`
  display: block;
  text-align: center;
  & > h2 {
    color: ${({ theme }) => theme.primaryColor};
     font-weight: 300;
     margin: 24px 0 0 0;
  }
  margin-bottom: ${props => props.contactLink && '36px'};
  margin-bottom: ${props => props.resumeLink && '36px'};
  @media (min-width: 1024px) {
    margin-bottom: ${props => props.contactLink && '0'};
  margin-bottom: ${props => props.resumeLink && '0'};
  }
`

const Menu = styled.li`
 text-decoration: none;
.navbar-links li {
  list-style: none;
}
& > p{
  margin: 16px 0 0 0;
}
@media (min-width: 1024px) {
    display: none;
  }
`
const ToggleButton = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  top: ${(props) => (props.crossToggle ? '0.7rem' : '0.2rem')};
  right: ${(props) => (props.crossToggle ? '0.7rem' : '0.2rem')};
  @media (min-width: 1024px) {
    display: none;
  }
`

const ThemeToggleAndLogo = styled.div`
display: flex;
  justify-content: space-between;
  width: 218px;
  align-items: center;
  margin: 5px 94px 0 0;
`


const toggleButtonVariants = {
  hidden: {
    rotate: 0
  },
  visible: {
    rotate: 45,

  }
}



const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;
  const handleToggle = () => {
    setActive(!isActive);
  }

  return (
    <div id="navbar">
      <Nav theme={theme}>
        {isActive ?
          //If isActive is true show close toggle button
          <div>
            {isLightTheme ?

              (<ToggleButton crossToggle onClick={handleToggle}
              >

                <motion.img src={ToggleButtonCloseLight} alt="toggle button close icon"
                  exit="hidden"

                  animate={isActive ? "visible" : "hidden"}
                  variants={toggleButtonVariants}
                />

              </ToggleButton>)

              :
              (<ToggleButton crossToggle onClick={handleToggle}
              >
                <motion.img src={ToggleButtonCloseDark} alt="toggle button close icon"
                  animate={isActive ? "visible" : "hidden"}
                  variants={toggleButtonVariants}
                />
              </ToggleButton>
              )
            }
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
                animate={isActive ? "visible" : "hidden"} />
            </ToggleButton>
          </div>)
        }
        <NavigationLinks theme={theme} isLightTheme={isLightTheme} className="navbar-links" className={isActive ? "active" : null}

        >
          <NavLinkList className={isActive ? "active" : null}

          >
            <Menu>
              <p style={{ color: theme.div }}>Menu</p>
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
            <Link resumeLink theme={theme} rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1nFLSELiQ6yCG8C1aW9e4CHg8dTh6vawa/view?usp=sharing">
              <img src={Resume} alt="icon to open resume" />
            </Link>
          </NavLinkList>
        </NavigationLinks>
      </Nav>
    </div>
  );
}

export default Navbar;

