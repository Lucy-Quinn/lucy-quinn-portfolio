import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Lucy from './../../images/lucy.png';
import styled from 'styled-components';

//Styled components
const Container = styled.div`
  padding: 5px;
  background: ${({ isLightTheme, theme }) => isLightTheme ? null : theme.background};
`

const Image = styled.img`
  height: 200px;
  width: auto;
  border-radius: 50%;
  /* display: ${props => props.hidden ? 'none' : 'block'}; */
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
  margin-bottom: 30px;
`



const About = () => {
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;

  const [scrollYValue, setscrollYValue] = useState(window.pageYOffset)
  const [isScroll, setIsScroll] = useState(false);

  function useWindowDistance() {
    useEffect(() => {
      function handleScroll() {
        setscrollYValue(window.pageYOffset)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return scrollYValue
  }

  const currentScrollPosition = useWindowDistance()
  useEffect(() => {
    console.log(currentScrollPosition >= 200);
    scrollYValue >= 180 &&
      setIsScroll(true)
    return () => setIsScroll(false)
  }, [isScroll, scrollYValue])

  console.log(scrollYValue);

  return (
    <Container isLightTheme={isLightTheme} theme={theme} id="about">

      {isScroll ?
        <Image src={Lucy} alt="portrait of Lucy" ></Image>
        :
        null
      }

      <Div isLightTheme={isLightTheme} theme={theme}>&lt;div&gt;</Div>
      <Heading theme={theme}>About Lucy</Heading>
      <Description theme={theme}>I am a web developer from Bristol in England, I have spent much time travelling abroad and have lived in Italy. I am an enthusiastic linguist, who is always learning and forever making lists. I love creating and making projects and seeing them to the end. My attention to detail is “spot on”! </Description>
    </Container>
  );
}

export default About;

