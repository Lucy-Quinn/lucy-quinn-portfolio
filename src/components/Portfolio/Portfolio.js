import React, { useContext, useEffect, useState, useRef } from 'react';
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
const ReplacementDiv = styled.div`
  height: 24px;
  width: auto;
`
const ReplacementHeading = styled.div`
  height: 32px;
  width: auto;
`
const ReplacementDescription = styled.div`
  height: 126px;
  width: auto;
`
const ReplacementCarousel = styled.div`
  height: 350px;
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

  // const [scrollYValue, setscrollYValue] = useState(window.pageYOffset)
  const [isScrollDiv, setIsScrollDiv] = useState(false);
  const [isScrollTitle, setIsScrollTitle] = useState(false);
  const [isScrollDesc, setIsScrollDesc] = useState(false);
  const [isScrollCarousel, setIsScrollCarousel] = useState(false);

  const divRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const carouselRef = useRef(null)

  useEffect(() => {
    const isOnScreen = (ref) => window.pageYOffset + window.innerHeight - 30 >= ref.current?.offsetTop

    function handleScroll() {
      if (isOnScreen(divRef)) setIsScrollDiv(true)
      if (isOnScreen(titleRef)) setIsScrollTitle(true)
      if (isOnScreen(descriptionRef)) setIsScrollDesc(true)
      if (isOnScreen(carouselRef)) setIsScrollCarousel(true)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <ReplacementDiv
            ref={divRef}
          ></ReplacementDiv>
      }
      {
        isScrollTitle ?
          <Heading theme={theme} variants={variants}>My Portfolio</Heading>
          :
          <ReplacementHeading
            ref={titleRef}
          ></ReplacementHeading>
      }
      {
        isScrollDesc ?
          <Description theme={theme} variants={variants}>Here are a collection of my projects that I have created, where I have implemented the languages that I have learnt.
      <br />
      More projects in progress<Dots></Dots> </Description>
          :
          <ReplacementDescription
            ref={descriptionRef}
          ></ReplacementDescription>
      }
      {
        isScrollCarousel ?
          <motion.div variants={variants}>
            <Carousel />
          </motion.div>
          :
          <ReplacementCarousel
            ref={carouselRef}
          ></ReplacementCarousel>
      }

    </Container>
  );
}

export default Portfolio;

