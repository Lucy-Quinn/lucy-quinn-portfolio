import React, { useContext } from 'react';
import Uk from './../../images/uk.png';
import { ThemeContext } from '../../contexts/ThemeContext';
import ArrowDown from './../../images/button-arrow-down.svg';
import styled from 'styled-components';

//Styled Components
const Languages = styled.div`
  height: 32px;
  width: 72px;
  border-radius: 20.19px;
  display: flex; 
  align-items: center;
  justify-content: center;
  background: #fff;
  margin: 5px;
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.languages};
  & > h5 {
        font-weight: 300;
    }
`
const LanguageTabs = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const Div = styled.p`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  margin: 0;
`
const Lucy = styled.h3`
  color: ${({ theme }) => theme.primaryColor};
`
const Title = styled.h1`
  color: ${({ theme }) => theme.primaryColor};
  width: 100%;

`

const LanguageList = styled.p`
  color: ${({ theme }) => theme.primaryColor};
`

const Header = () => {
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;
  return (
    <header style={{
      padding: '10px',
      background: `linear-gradient(
            180deg
            , ${theme.gradientOne} 0%, ${theme.gradientTwo} 100%`
    }}>
      <div id="header">
        <Div isLightTheme={isLightTheme} theme={theme}>&lt;div&gt;</Div>
        <Lucy theme={theme}>I am Lucy.</Lucy>
        <Title theme={theme}>A full stack web developer based in sunny Barcelona</Title>
        <LanguageList theme={theme}>I speak JavaScript, React.js, MongoDB, Mongoose, Express.js, Node.js, HTML5, CSS3, English, Italian and Spanish. When I'm not coding, I'm probaby dreaming about it. :&#41;</LanguageList>
      </div>
      <LanguageTabs>
        <Languages isLightTheme={isLightTheme} theme={theme}><h5>JavaScript</h5></Languages>
        <Languages isLightTheme={isLightTheme} theme={theme}><h5>React</h5></Languages>
        <Languages isLightTheme={isLightTheme} theme={theme}><h5>MongoDB</h5></Languages>
        <Languages isLightTheme={isLightTheme} theme={theme}><h5>Mongoose</h5></Languages>
        <Languages isLightTheme={isLightTheme} theme={theme}><h5>Express.js</h5></Languages>
        <Languages isLightTheme={isLightTheme} theme={theme}><h5>Node.js</h5></Languages>
        <Languages isLightTheme={isLightTheme} theme={theme}><h5>HTML5</h5></Languages>
        <Languages isLightTheme={isLightTheme} theme={theme}><h5>CSS3</h5></Languages>
        <Languages isLightTheme={isLightTheme} theme={theme}><h5>Bootstrap</h5></Languages>
      </LanguageTabs>
      <a href="#about">
        <img src={ArrowDown} alt="" />
      </a>
    </header>
  );
}

export default Header;