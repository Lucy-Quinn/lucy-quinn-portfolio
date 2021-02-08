import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styled from 'styled-components';
import Carousel from './../Carousel/Carousel';
import { motion } from 'framer-motion';

//Styled components
const Container = styled(motion.div)`
    padding: 5px 12px 95px 12px;
  background: ${({ isLightTheme, theme }) => isLightTheme ? null : theme.background};
`

const Div = styled(motion.p)`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  margin: 40px 0 0 0;
`

const Heading = styled(motion.h2)`
  color: ${({ theme }) => theme.primaryColor};
`

const Description = styled(motion.p)`
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

const Portfolio = () => {

  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;

  const [scrollYValue, setscrollYValue] = useState(window.pageYOffset)
  const [isScrollDiv, setIsScrollDiv] = useState(false);
  const [isScrollTitle, setIsScrollTitle] = useState(false);
  const [isScrollDesc, setIsScrollDesc] = useState(false);
  const [isScrollCarousel, setIsScrollCarousel] = useState(false);

  function useScrollDistance() {
    useEffect(() => {
      function handleScroll() {
        setscrollYValue(window.pageYOffset)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return scrollYValue
  }

  useScrollDistance()

  const scrollPosition = {
    div: 563,
    title: 600,
    description: 638,
    carousel: 736,
  };

  const { div, title, description, carousel } = scrollPosition;

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

  useEffect(() => {
    scrollYValue >= carousel &&
      setIsScrollCarousel(true)
    return () => setIsScrollCarousel(false)
  }, [isScrollCarousel, scrollYValue])

  return (
    <Container isLightTheme={isLightTheme} theme={theme} id="portfolio"
      variants={variantContainer}
      initial="hidden"
      animate="visible"
    >
      {
        isScrollDiv ?
          <Div isLightTheme={isLightTheme} theme={theme} variants={variants}>&lt;div&gt;</Div>
          :
          <Replacement></Replacement>
      }
      {
        isScrollTitle ?
          <Heading theme={theme} variants={variants}>My Portfolio</Heading>
          :
          <Replacement></Replacement>
      }
      {
        isScrollDesc ?
          <Description theme={theme} variants={variants}>Here are a collection of my projects that I have created, where I have implemented the languages that I have learnt.
      <br />
      More projects in progress<Dots></Dots> </Description>
          :
          <Replacement></Replacement>
      }
      {
        isScrollCarousel ?
          <motion.div variants={variants}>
            <Carousel />
          </motion.div>
          :
          <Replacement></Replacement>
      }

    </Container>
  );
}

export default Portfolio;

