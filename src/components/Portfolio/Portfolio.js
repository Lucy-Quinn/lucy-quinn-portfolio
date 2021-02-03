import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styled from 'styled-components';
import Carousel from './../Carousel/Carousel';

//Styled components

const Container = styled.div`
    padding: 5px 0 95px 0;
  background: ${({ isLightTheme, theme }) => isLightTheme ? null : theme.background};
  /* padding-bottom: 50px; */
`

const Div = styled.p`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  margin: 50px 0 0 0;
`

const Heading = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
`

const Description = styled.p`
  color: ${({ theme }) => theme.bodyCopy};
  padding-bottom: 30px;
`


const Portfolio = () => {

  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;

  return (
    <Container isLightTheme={isLightTheme} theme={theme} id="portfolio">

      <Div isLightTheme={isLightTheme} theme={theme}>&lt;div&gt;</Div>
      <Heading theme={theme}>My Portfolio</Heading>
      <Description theme={theme}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit neque, nobis illum quibusdam in sit odit asperiores aliquam sed aut, placeat magni repellendus non, vero dolores. Enim nemo neque quidem.</Description>
      <Carousel />

    </Container>
  );
}

export default Portfolio;
