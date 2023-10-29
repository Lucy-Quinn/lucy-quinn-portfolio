import React, { useContext, useRef } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
  Container,
  Div,
  Heading,
  Description,
  Dots,
  ReplacementDiv,
  ReplacementHeading,
  ReplacementDescription,
  ReplacementCarousel,
} from "./Portfolio.styled";
import { motion } from "framer-motion";
import {
  variantContainer,
  variants,
  carouselVariants,
} from "./Portfolio.variants";
import { useScroll } from "../../hooks/useScroll";
import CarouselContainer from "../CarouselContainer";

const Portfolio = () => {
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;

  const divRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const carouselRef = useRef(null);

  const divReplacementRef = useRef(null);
  const titleReplacementRef = useRef(null);
  const descriptionReplacementRef = useRef(null);
  const carouselReplacementRef = useRef(null);

  return (
    <Container
      isLightTheme={isLightTheme}
      theme={theme}
      id="portfolio"
      variants={variantContainer}
      initial="hidden"
      animate="visible"
    >
      {useScroll(divRef, divReplacementRef) ? (
        <Div
          isLightTheme={isLightTheme}
          theme={theme}
          variants={variants}
          ref={divRef}
        >
          &lt;div&gt;
        </Div>
      ) : (
        <ReplacementDiv ref={divReplacementRef}></ReplacementDiv>
      )}

      {useScroll(titleRef, titleReplacementRef) ? (
        <Heading theme={theme} variants={variants} ref={titleRef}>
          My Portfolio
        </Heading>
      ) : (
        <ReplacementHeading ref={titleReplacementRef}></ReplacementHeading>
      )}

      {useScroll(descriptionRef, descriptionReplacementRef) ? (
        <Description theme={theme} variants={variants} ref={descriptionRef}>
          Here are a collection of my projects that I have created, where I have
          implemented the languages that I have learnt. More projects in
          progress<Dots></Dots>{" "}
        </Description>
      ) : (
        <ReplacementDescription
          ref={descriptionReplacementRef}
        ></ReplacementDescription>
      )}

      {useScroll(carouselRef, carouselReplacementRef) ? (
        <motion.div variants={carouselVariants} ref={carouselRef}>
          <CarouselContainer />
        </motion.div>
      ) : (
        <ReplacementCarousel ref={carouselReplacementRef}></ReplacementCarousel>
      )}
    </Container>
  );
};

export default Portfolio;
