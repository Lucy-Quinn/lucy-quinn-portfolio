import React, { useState, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Lucy from "./../../images/lucy.png";
import styled from "styled-components";
import { motion } from "framer-motion";

//Styled components
const Container = styled(motion.div)`
  padding: 5px 12px;
  background: ${({ isLightTheme, theme }) =>
    isLightTheme ? null : theme.background};
`;

const Image = styled(motion.img)`
  height: 200px;
  width: auto;
  border-radius: 50%;
  margin-top: 32px;
`;

const Div = styled(motion.p)`
  color: ${({ isLightTheme, theme }) =>
    isLightTheme ? theme.primaryColor : theme.div};
  font-weight: 300;
  margin: 0;
`;

const Heading = styled(motion.h2)`
  color: ${({ theme }) => theme.primaryColor};
`;

const Description = styled(motion.p)`
  color: ${({ theme }) => theme.bodyCopy};
  margin-bottom: 30px;
`;

const ReplacementImg = styled.div`
  height: 200px;
  width: 200px;
`;

const ReplacementDiv = styled.div`
  height: 24px;
  width: auto;
`;

const ReplacementTitle = styled.div`
  height: 32px;
  width: auto;
`;

const ReplacementDescription = styled.div`
  height: 144px;
  width: auto;
`;

//Variants

const variantContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    // when: "beforeChildren",
    staggerChildren: 1,
  },
};

const variants = {
  hidden: {
    opacity: 0,
    x: 10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

const About = () => {
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;

  //Scroll functionality
  const [isScrollImage, setIsScrollImage] = useState(false);
  const [isScrollDiv, setIsScrollDiv] = useState(false);
  const [isScrollTitle, setIsScrollTitle] = useState(false);
  const [isScrollDesc, setIsScrollDesc] = useState(false);

  const imageRef = useRef(null);
  const divRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const imageReplacementRef = useRef(null);
  const divReplacementRef = useRef(null);
  const titleReplacementRef = useRef(null);
  const descriptionReplacementRef = useRef(null);

  useEffect(() => {
    const isOnScreen = (ref) => {
      //to check that the element is on the screen or you have past it
      const isOffsetBottom = window.pageYOffset + window.innerHeight - 30 >= ref.current?.offsetTop;

      //to check that you are at the bottom of the element or past this point
      const isOffsetTop = window.pageYOffset < ref.current?.offsetTop + ref.current?.offsetHeight;

      return isOffsetBottom && isOffsetTop;
      //when isOffsetBottom is true is when the image is on the screen. When this is true evaluate isOffsetTop. isOffsetTop will return true up until the bottom of the element. I.E. this function will return true when the image is on screen.
    };

    function handleScroll() {
      //if replacementRef is on screen set state to true
      if (isOnScreen(imageReplacementRef)) setIsScrollImage(true);
      if (isOnScreen(divReplacementRef)) setIsScrollDiv(true);
      if (isOnScreen(titleReplacementRef)) setIsScrollTitle(true);
      if (isOnScreen(descriptionReplacementRef)) setIsScrollDesc(true);

      //if replacementRef is true && the elementRef is NOT on screen set state to false
      if (imageReplacementRef && !isOnScreen(imageRef)) setIsScrollImage(false);
      if (divReplacementRef && !isOnScreen(divRef)) setIsScrollDiv(false);
      if (titleReplacementRef && !isOnScreen(titleRef)) setIsScrollTitle(false);
      if (descriptionReplacementRef && !isOnScreen(descriptionRef)) setIsScrollDesc(false);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container
      isLightTheme={isLightTheme}
      theme={theme}
      id="about"
      variants={variantContainer}
      initial="hidden"
      animate="visible"
    >

      {isScrollImage ? (
        <Image
          src={Lucy}
          alt="portrait photo of Lucy"
          variants={variants}
          ref={imageRef}
        />
      ) : (
          <ReplacementImg ref={imageReplacementRef} />
        )}

      {isScrollDiv ? (
        <Div
          isLightTheme={isLightTheme}
          theme={theme}
          variants={variants}
          ref={divRef}
        >
          &lt;div&gt;
        </Div>
      ) : (
          <ReplacementDiv ref={divReplacementRef} />
        )}

      {isScrollTitle ? (
        <Heading theme={theme} variants={variants} ref={titleRef}>
          About Lucy
        </Heading>
      ) : (
          <ReplacementTitle ref={titleReplacementRef} />
        )}

      {isScrollDesc ? (
        <Description theme={theme} variants={variants} ref={descriptionRef}>
          I am a web developer from Bristol in England, I have spent much time
          travelling abroad and have lived in Italy. I am an enthusiastic
          linguist, who is always learning and forever making lists. I love
          creating and making projects and seeing them to the end. My attention
          to detail is “spot on”!
        </Description>
      ) : (
          <ReplacementDescription ref={descriptionReplacementRef} />
        )}
    </Container>
  );
};

export default About;
