import React, { useState, useContext } from 'react';
import ToggleButtonOpen from './../../images/button-open.svg';
import ToggleButtonCloseLight from './../../images/button-close-light.svg';
import ToggleButtonCloseDark from './../../images/button-close-dark.svg';
import ThemeToggle from './../../components/ThemeToggle/ThemeToggle';
import { ThemeContext } from '../../contexts/ThemeContext';
import Resume from './../../images/open-cv.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from './../Logo/Logo';
import './Navbar.css'

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

const NavigationLinksMobile = styled(motion.div)`
  width: 100%;
  margin: 0;
  position: fixed;
  overflow-x: hidden;
  z-index: 1;
  top: 0;
  background: ${({ isLightTheme, theme }) => isLightTheme ? theme.div : theme.languages};
  border-radius: 0 0 50% 50%  / 70px;
  .active{ 
    display: flex;  
    -webkit-animation: expandNav 1s alternate ease-in-out; /* Safari 4+ */
    -moz-animation:    expandNav 1s alternate ease-in-out; /* Fx 5+ */
    -o-animation:      expandNav 1s alternate ease-in-out; /* Opera 12+ */
    animation:         expandNav 1s alternate ease-in-out; /* IE 10+, Fx 29+ */
    /* animation: expandNav 1s alternate ease-in-out; */
  };
  @-webkit-keyframes expandNav {
    0% { max-height: 0px; }
      100% { max-height: 400px; }
  }
  @-moz-keyframes expandNav {
    0% { max-height: 0px; }
      100% { max-height: 400px; }
  }
  @-o-keyframes expandNav {
    0% { max-height: 0px; }
      100% { max-height: 400px; }
  }
  @keyframes expandNav {
    0% { max-height: 0px; }
      100% { max-height: 400px; }
  }
  
/* .not-active{
  animation: shrinkNav 1s alternate-reverse;
  };
@keyframes shrinkNav {
  0% { max-height: 400px; }
  100% { max-height: 0px; }
}; */
  @media (min-width: 1024px) {
    display: flex;
    opacity: 1;
    width: 50%;
    border-radius: 0;
    background: ${({ theme }) => theme.gradientOne};
  }
`

const NavigationLinksDesktop = styled(motion.div)`
  width: 100%;
  margin: 0;
  background: ${({ isLightTheme, theme }) => isLightTheme ? '#fff' : theme.languages};
  border-radius: 0 0 50% 50%  / 70px;
  @media (min-width: 1024px) {
    display: flex;
    opacity: 1;
    width: 50%;
    border-radius: 0;
    background: ${({ theme }) => theme.gradientOne};
  }
`

const NavLinkList = styled(motion.ul)`
flex-direction: column;
width: 100%;
  margin: 0;
border-radius: 0 0 50% 50%  / 70px;
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

const Link = styled(motion.a)`
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

const Menu = styled(motion.li)`
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
  z-index: 1;
  @media (min-width: 1024px) {
    display: none;
  }
`
const ToggleImage = styled(motion.img)`
/* closetoggle */
/* .not-active{
  animation: shrinkNav 1s alternate-reverse;
  }; */

  @-webkit-keyframes openNav {
    0% { transform: rotate(0deg)}
  100% { transform: rotate(90deg) }
}
@-moz-keyframes openNav {
    0% { transform: rotate(0deg)}
  100% { transform: rotate(90deg) }
}
@-o-keyframes openNav {
    0% { transform: rotate(0deg)}
  100% { transform: rotate(90deg) }
}
@keyframes openNav {
    0% { transform: rotate(0deg)}
  100% { transform: rotate(90deg) }
}


@keyframes closeNav {
  0% { transform: rotate(90deg)}
  100% { transform: rotate(0deg) }
};

`

const ThemeToggleAndLogo = styled.div`
display: flex;
  justify-content: space-between;
  width: 218px;
  align-items: center;
  margin: 5px 94px 0 0;
`

const Background = styled.div`
/* display: none;  */
opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  will-change: opacity;
  z-index: 1;
  /* animation: showBackground; */
  animation-delay: 2s;
  /* @-webkit-keyframes showBackground {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-moz-keyframes showBackground {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-o-keyframes showBackground {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes showBackground {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
.background{
  opacity: 1;
  background-color: red;
  /* display: block; */
  /* -webkit-animation: showBackground 1s; 
  -moz-animation:    showBackground 1s; 
  -o-animation:      showBackground 1s; 
  animation:         showBackground 1s; */
  /* animation-delay: 2s; */
/* };  */


`

const toggleButtonVariants = {
  hidden: {
    rotate: 0
  },
  visible: {
    rotate: -360,

  }
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

  const handleToggle = () => {
    setActive(!isActive);
  }


  //Scroll functionality to close navbar
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    prevScrollpos < currentScrollPos && setTimeout(() => { setActive(false) }, 500);
    prevScrollpos = currentScrollPos;
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
      <Background className={isActive ? 'background full' : "not-active"} />
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
              // variants={toggleButtonVariants}
              // animate={isActive ? "visible" : "hidden"} 
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

