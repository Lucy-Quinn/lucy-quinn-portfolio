import React, { useState, useContext } from 'react';
import VideoStore from './../../images/the-video-store.png';
import SimpleSteps from './../../images/simple-steps.png';
import TravelGuru from './../../images/travel-guru.png';
import { ThemeContext } from '../../contexts/ThemeContext';
import styled from 'styled-components';

//Styled components

const Container = styled.div`
    padding: 5px;
  background: ${({ isLightTheme, theme }) => isLightTheme ? null : theme.background};
  padding-bottom: 50px;
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


    const [projects, useProjects] = useState([
        <img src={VideoStore} alt="sample of the video store project" />,
        <img src={SimpleSteps} alt="sample of the simple steps project" />,
        <img src={TravelGuru} alt="sample of the travel guru project" />
    ])

    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;

    return (
        <Container isLightTheme={isLightTheme} theme={theme} id="portfolio">

            <Div isLightTheme={isLightTheme} theme={theme}>&lt;div&gt;</Div>
            <Heading theme={theme}>My Portfolio</Heading>
            <Description theme={theme}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit neque, nobis illum quibusdam in sit odit asperiores aliquam sed aut, placeat magni repellendus non, vero dolores. Enim nemo neque quidem.</Description>
            {projects.map((project, i) => {
                return <div key={i}>{project}</div>
            })}
        </Container>
    );
}

export default Portfolio;
