import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styled from 'styled-components';
import Carousel from './../Carousel/Carousel';

//Styled components

const Container = styled.div`
    padding: 5px 12px 95px 12px;
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
const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: ".";
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: ".";
    }
    33% {
      content: "..";
    }
    66% {
      content: "...";
    }
  }
`
const Portfolio = () => {

  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;

  return (
    <Container isLightTheme={isLightTheme} theme={theme} id="portfolio">
      <Div isLightTheme={isLightTheme} theme={theme}>&lt;div&gt;</Div>
      <Heading theme={theme}>My Portfolio</Heading>
      <Description theme={theme}>Here are a collection of my projects that I have created, where I have implemented the languages that I have learnt. There are more projects that I am working on <Dots></Dots> </Description>
      <Carousel />
    </Container>
  );
}

export default Portfolio;

