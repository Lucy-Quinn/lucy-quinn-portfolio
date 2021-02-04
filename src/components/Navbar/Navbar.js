import React, { useState, useContext } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import ToggleButtonOpen from './../../images/button-open.svg';
import ToggleButtonClose from './../../images/button-close.svg';
import LogoLight from './../../images/logo-light.svg';
import LogoDark from './../../images/logo-dark.svg';
import ThemeToggle from './../../components/ThemeToggle/ThemeToggle';
import { ThemeContext } from '../../contexts/ThemeContext';
import Resume from './../../images/cv.svg';
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

const NavContainer = styled.div`
  width: 100%;
  margin: 0;
  background: ${({ isLightTheme, theme }) => isLightTheme ? '#fff' : theme.languages};
  .active{ display: flex};
  @media (min-width: 1024px) {
    width: 100%;
    background: ${({ theme }) => theme.gradientOne};
  }
 
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
  }
`

const Menu = styled.li`
 text-decoration: none;
.navbar-links li {
  list-style: none;
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

const BulbAndLogo = styled.div`
display: flex;
  justify-content: space-between;
  width: 218px;
  align-items: center;
  margin: 5px 94px 0 0;
`
const BrandTitle = styled.div`
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
          (<ToggleButton crossToggle onClick={handleToggle}>
            <img src={ToggleButtonClose} alt="toggle button close icon" />
          </ToggleButton>) :
          (<div>
            <BulbAndLogo>
              <ThemeToggle />
              {isLightTheme ?
                <BrandTitle>
                  <img src={LogoLight} alt="logo icon" />
                </BrandTitle>
                :
                <BrandTitle className="brand-title">
                  <img src={LogoDark} alt="logo icon" />
                </BrandTitle>
              }
            </BulbAndLogo>
            <ToggleButton onClick={handleToggle}>
              <img src={ToggleButtonOpen} alt="toggle button open icon" />
            </ToggleButton>
          </div>)
        }
        <NavContainer theme={theme} isLightTheme={isLightTheme} className="navbar-links">
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
            <Link theme={theme} href="#contact">
              <h2>Contact</h2>
            </Link>
            <Link theme={theme} href="#">
              <h2>
                <img src={Resume} alt="icon to open resume" />
              </h2>
            </Link>
          </NavLinkList>
        </NavContainer>
      </Nav>
    </div>
  );
}

export default Navbar;
