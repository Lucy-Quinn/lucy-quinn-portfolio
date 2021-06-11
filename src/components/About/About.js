import React, { useState, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Lucy from "./../../images/lucy.png";
import { Container, Image, Div, Heading, Description, ReplacementImg, ReplacementDiv, ReplacementTitle, ReplacementDescription, AboutContainerDesktop } from './About.styled';
import { variantContainer, variants } from './About.variants';

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

      <AboutContainerDesktop>
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
            I am a full stack web developer from Bristol in England. I have spent much time travelling abroad both personally and through work and have lived in Italy and am now residing in Spain. I am an enthusiastic linguist, who is always learning and forever making lists. I love creating projects and seeing them to the end. My attention to detail is “spot on”!
            <br />
            My spare time consists of running 10kms, making fajitas, watching foreign films and planning my next scuba diving trip.
            <br />
            In October 2020, I received a scholarship to take part in the Ironhack bootcamp course, from which I graduated in January 2021 and am currently in search of experience to grow further as a web developer.
          </Description>
        ) : (
          <ReplacementDescription ref={descriptionReplacementRef} />
        )}
      </AboutContainerDesktop>
    </Container>
  );
};

export default About;
