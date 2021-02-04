import React, { useState, useContext } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import ToggleButtonOpen from './../../images/button-open.svg';
import ToggleButtonCloseLight from './../../images/button-close-light.svg';
import ToggleButtonCloseDark from './../../images/button-close-dark.svg';
import LogoLight from './../../images/logo-light.svg';
import LogoDark from './../../images/logo-dark.svg';
import ThemeToggle from './../../components/ThemeToggle/ThemeToggle';
import { ThemeContext } from '../../contexts/ThemeContext';
import Resume from './../../images/open-cv.svg';
import styled from 'styled-components';

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

const NavigationLinks = styled.div`
  width: 100%;
  margin: 0;
  background: ${({ isLightTheme, theme }) => isLightTheme ? '#fff' : theme.languages};
  .active{ display: flex};
  @media (min-width: 1024px) {
    width: 100%;
    background: ${({ theme }) => theme.gradientOne};
  }
  border-radius: 0 0 50% 50%  / 70px;
`

const NavLinkList = styled.ul`
flex-direction: column;
  padding: 0;
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
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
const ToggleButton = styled.div`
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
const Logo = styled.div`
 @media (min-width: 1024px) {
    margin: 0 0 0 80px;
  }
`


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
              (<ToggleButton crossToggle onClick={handleToggle}>
                <img src={ToggleButtonCloseLight} alt="toggle button close icon" />
              </ToggleButton>)
              :
              (<ToggleButton crossToggle onClick={handleToggle}>
                <img src={ToggleButtonCloseDark} alt="toggle button close icon" />
              </ToggleButton>)
            }
          </div>
          :
          //If isActive is false show open toggle button, themetoggle button and logo
          (<div>
            <ThemeToggleAndLogo>
              <ThemeToggle />
              {isLightTheme ?
                <Logo>
                  <img src={LogoLight} alt="logo icon" />
                </Logo>
                :
                <Logo>
                  <img src={LogoDark} alt="logo icon" />
                </Logo>
              }
            </ThemeToggleAndLogo>
            <ToggleButton onClick={handleToggle}>
              <img src={ToggleButtonOpen} alt="toggle button open icon" />
            </ToggleButton>
          </div>)
        }
        <NavigationLinks theme={theme} isLightTheme={isLightTheme} className="navbar-links">
          <NavLinkList className={isActive ? "active" : null}>
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
            <Link resumeLink theme={theme} href="#">
              <a rel="noopener noreferrer" target="_blank" href="https://media-exp1.licdn.com/dms/document/C4D2DAQFF6ezP_Xi_Nw/profile-treasury-document-pdf-analyzed/0/1612445751485?e=1612548000&v=beta&t=UFtPHO9umyR5oPlzb_wL0dSUCQ7ChTeQr_N_5H-kGTU">
                <img src={Resume} alt="icon to open resume" />
              </a>
            </Link>
          </NavLinkList>
        </NavigationLinks>
      </Nav>
    </div>
  );
}

export default Navbar;
