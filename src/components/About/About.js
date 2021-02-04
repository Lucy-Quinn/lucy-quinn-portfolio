import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Lucy from './../../images/lucy.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';

//Styled components
const Container = styled(motion.div)`
  padding: 5px;
  background: ${({ isLightTheme, theme }) => isLightTheme ? null : theme.background};
`

const Image = styled(motion.img)`
  height: 200px;
  width: auto;
  border-radius: 50%;
  /* display: ${props => props.hidden ? 'none' : 'block'}; */
`

const Div = styled(motion.p)`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  font-weight: 300;
  margin: 0;
`

const Heading = styled(motion.h2)`
  color: ${({ theme }) => theme.primaryColor};
`

const Description = styled(motion.p)`
  color: ${({ theme }) => theme.bodyCopy};
  margin-bottom: 30px;
`
const Replacement = styled.div`
  height: 50px;
  width: auto;
`


//Variants

const variantContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    type: 'spring',
    mass: 0.4,
    damping: 8,
    when: "beforeChildren",
    staggerChildren: 1
  }
}
const variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 }
  }
}

const variantDesc = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 }
  }
}




const About = () => {
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;

  //Scroll functionality
  const [scrollYValue, setscrollYValue] = useState(window.pageYOffset)
  const [isScrollImage, setIsScrollImage] = useState(false);
  const [isScrollDiv, setIsScrollDiv] = useState(false);
  const [isScrollTitle, setIsScrollTitle] = useState(false);
  const [isScrollDesc, setIsScrollDesc] = useState(false);



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

  useWindowDistance()

  const scrollPosition = {
    image: 100,
    div: 240,
    title: 295,
    description: 312
  };
  const { image, div, title, description } = scrollPosition;

  useEffect(() => {
    scrollYValue >= image &&
      setIsScrollImage(true)
    return () => setIsScrollImage(false)
  }, [isScrollImage, scrollYValue])


  useEffect(() => {
    scrollYValue >= div &&
      setIsScrollDiv(true)
    return () => setIsScrollDiv(false)
  }, [isScrollDiv, scrollYValue])

  useEffect(() => {
    scrollYValue >= title &&
      setIsScrollTitle(true)
    return () => setIsScrollTitle(false)
  }, [isScrollTitle, scrollYValue])


  useEffect(() => {
    scrollYValue >= description &&
      setIsScrollDesc(true)
    return () => setIsScrollDesc(false)
  }, [isScrollDesc, scrollYValue])
  console.log(scrollYValue);


  return (
    <Container isLightTheme={isLightTheme} theme={theme} id="about"
      variants={variantContainer}
      initial="hidden"
      animate="visible"
    >
      {isScrollImage ?
        <Image src={Lucy} alt="portrait of Lucy"
          variants={variants}
        ></Image>
        :
        <Replacement></Replacement>
      }
      {isScrollDiv ?
        <Div isLightTheme={isLightTheme} theme={theme}
          variants={variants}
        >&lt;div&gt;</Div>
        :
        <Replacement></Replacement>
      }
      {isScrollTitle ?
        <Heading theme={theme}
          variants={variants}
        >About Lucy</Heading>
        :
        <Replacement></Replacement>
      }

      {isScrollDesc ?
        <Description theme={theme}
          variants={variantDesc}
        >I am a web developer from Bristol in England, I have spent much time travelling abroad and have lived in Italy. I am an enthusiastic linguist, who is always learning and forever making lists. I love creating and making projects and seeing them to the end. My attention to detail is “spot on”! </Description>
        :
        <Replacement></Replacement>
      }

    </Container>
  );
}

export default About;

