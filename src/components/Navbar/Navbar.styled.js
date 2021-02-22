import styled from 'styled-components';
import { motion } from 'framer-motion';

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
    justify-content: space-around;
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
  & > h2{
      font-size: 1rem;
     margin: 0 0 0;

    }
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
  postion: ${(props) => (props.crossToggle && 'absolute')};
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
  width: 69%;
  align-items: center;
  margin: 5px 94px 0 0;
  @media (min-width: 375px) {
    width: 66%;

  }
  @media (min-width: 425px) {
    width: 65%;

  }
  @media (min-width: 728px) {
    width: 58%;

  }

`

const Background = styled.div`
opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  will-change: opacity;
  z-index: ${({ isActive }) => isActive && 1};
  position: ${({ isActive }) => isActive && 'fixed'};
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

const NavNotActive = styled.div`
display: flex;
    justify-content: space-between;
    width: 100%;
`

// width 1028px
const ThemeToggleAndCv = styled.div`
@media (min-width: 1024px) {
  display: flex;
    justify-content: center;
    align-items: center;
  }
`


export {
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
  ThemeToggleAndCv
}