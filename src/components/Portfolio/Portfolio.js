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
  height: 460px;
  width: auto;
`
//Variants
const variantContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    // when: "beforeChildren",
    staggerChildren: 1
  }
}
const variants = {
  hidden: {
    opacity: 0,
    x: 10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 }
  }
}


const carouselVariants = {
  hidden: {
    opacity: 0,
    x: 10,
    transition: { duration: 2 }

  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 3 }
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

  const divReplacementRef = useRef(null);
  const titleReplacementRef = useRef(null);
  const descriptionReplacementRef = useRef(null);
  const carouselReplacementRef = useRef(null);


  useEffect(() => {

    const isOnScreen = (ref) => {
      const isOffsetBottom = window.pageYOffset + window.innerHeight - 30 >= ref.current?.offsetTop;
      const isOffsetTop = window.pageYOffset < ref.current?.offsetTop + ref.current?.offsetHeight;

      return isOffsetBottom && isOffsetTop;
    };


    function handleScroll() {
      if (isOnScreen(divReplacementRef)) setIsScrollDiv(true)
      if (isOnScreen(titleReplacementRef)) setIsScrollTitle(true)
      if (isOnScreen(descriptionReplacementRef)) setIsScrollDesc(true)
      if (isOnScreen(carouselReplacementRef)) setIsScrollCarousel(true)

      if (divReplacementRef && !isOnScreen(divRef)) setIsScrollDiv(false);
      if (titleReplacementRef && !isOnScreen(titleRef)) setIsScrollTitle(false);
      if (descriptionReplacementRef && !isOnScreen(descriptionRef)) setIsScrollDesc(false);
      if (carouselReplacementRef && !isOnScreen(carouselRef)) setIsScrollCarousel(false);

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
          <Div isLightTheme={isLightTheme} theme={theme} variants={variants}
            ref={divRef}
          >&lt;div&gt;</Div>
          :
          <ReplacementDiv
            ref={divReplacementRef}
          ></ReplacementDiv>
      }
      {
        isScrollTitle ?
          <Heading theme={theme} variants={variants}
            ref={titleRef}
          >My Portfolio</Heading>
          :
          <ReplacementHeading
            ref={titleReplacementRef}
          ></ReplacementHeading>
      }
      {
        isScrollDesc ?
          <Description theme={theme} variants={variants}
            ref={descriptionRef}

          >Here are a collection of my projects that I have created, where I have implemented the languages that I have learnt.
      <br />
      More projects in progress<Dots></Dots> </Description>
          :
          <ReplacementDescription
            ref={descriptionReplacementRef}
          ></ReplacementDescription>
      }
      {
        isScrollCarousel ?
          <motion.div variants={carouselVariants}
            ref={carouselRef}
          >
            <Carousel />
          </motion.div>
          :
          <ReplacementCarousel
            ref={carouselReplacementRef}
          ></ReplacementCarousel>
      }

    </Container>
  );
}

export default Portfolio;

