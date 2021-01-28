import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Lucy from './../../images/lucy.png';
import styled from 'styled-components';
// import './about.css';

//Styled components

const Container = styled.div`
    padding: 5px;
  background: ${({ isLightTheme, theme }) => isLightTheme ? null : theme.background};

`

const Image = styled.img`
height: 200px;
  width: auto;
  border-radius: 50%;
`

const Div = styled.p`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  font-weight: 300;
  margin: 0;
`

const Heading = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
`

const Description = styled.p`
  color: ${({ theme }) => theme.bodyCopy};
  margin-bottom: 100px;
`


const About = () => {
    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;
    return (
        <Container isLightTheme={isLightTheme} theme={theme} id="about">
            <Image className="lucy" src={Lucy} alt="portrait of Lucy" ></Image>
            <Div isLightTheme={isLightTheme} theme={theme}>&lt;div&gt;</Div>
            <Heading theme={theme}>About Lucy</Heading>
            <Description theme={theme}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut explicabo quasi consequuntur, eos recusandae magnam, temporibus itaque illum quo quibusdam fugit nobis quos animi, ut dolorem perspiciatis suscipit aliquid atque?</Description>
        </Container>
    );
}

export default About;