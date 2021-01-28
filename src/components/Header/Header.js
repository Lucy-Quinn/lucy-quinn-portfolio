import React, { useContext } from 'react';
import Uk from './../../images/uk.png';
import { ThemeContext } from '../../contexts/ThemeContext';
import ArrowDown from './../../images/button-arrow-down.svg';
import styled from 'styled-components';

//Styled Components
const Languages = styled.h4`
     height: 32px;
  width: 72px;
  border-radius: 20.19px;
  border: 1px solid black;
  display: flex; 
  align-items: center;
  justify-content: center
`
const LanguageTabs = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const Header = () => {
    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;
    return (
        <header>
            <div id="header">
                <p style={{ color: theme.div }}>&lt;div&gt;</p>
                <h3 style={{ color: theme.primaryColor }}>I am Lucy.</h3>
                <h1 style={{ color: theme.primaryColor }}>A full stack web developer based in sunny Barcelona</h1>
                <p style={{ color: theme.primaryColor }}>I speak JavaScript, React.js, MongoDB, Mongoose, Express.js, Node.js, HTML5, CSS3, English, Italian and Spanish. When I'm not coding, I'm probaby dreaming about it. :&#41;</p>
            </div>
            <LanguageTabs>
                <Languages style={{ color: theme.primaryColor }}>JavaScript</Languages>
                <Languages style={{ color: theme.primaryColor }}>React</Languages>
                <Languages style={{ color: theme.primaryColor }}>MongoDB</Languages>
                <Languages style={{ color: theme.primaryColor }}>Mongoose</Languages>
                <Languages style={{ color: theme.primaryColor }}>Express.js</Languages>
                <Languages style={{ color: theme.primaryColor }}>Node.js</Languages>
                <Languages style={{ color: theme.primaryColor }}>HTML5</Languages>
                <Languages style={{ color: theme.primaryColor }}>CSS3</Languages>
                <Languages style={{ color: theme.primaryColor }}>Bootstrap</Languages>
a            </LanguageTabs>
            <a href="#about">
                <img src={ArrowDown} alt="" />
            </a>
        </header>
    );
}

export default Header;