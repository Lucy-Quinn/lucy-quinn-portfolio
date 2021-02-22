import React, { useContext, useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Container, Div, Heading, Description, Dots, ReplacementDiv, ReplacementHeading, ReplacementDescription, ReplacementCarousel } from './Portfolio.styled';
import Carousel from './../Carousel/Carousel';
import { motion } from 'framer-motion';
import { variantContainer, variants, carouselVariants } from './Portfolio.variants';

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

