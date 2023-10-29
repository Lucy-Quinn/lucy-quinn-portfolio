import React, { useContext, useRef } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Lucy from "./../../images/lucy.png";
import {
  Container,
  Image,
  Div,
  Heading,
  Description,
  ReplacementImg,
  ReplacementDiv,
  ReplacementTitle,
  ReplacementDescription,
  AboutContainerDesktop,
} from "./About.styled";
import { variantContainer, variants } from "./About.variants";
import { useScroll } from "../../hooks/useScroll";

const About = () => {
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;

  const imageRef = useRef(null);
  const divRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const imageReplacementRef = useRef(null);
  const divReplacementRef = useRef(null);
  const titleReplacementRef = useRef(null);
  const descriptionReplacementRef = useRef(null);

  return (
    <Container
      isLightTheme={isLightTheme}
      theme={theme}
      id="about"
      variants={variantContainer}
      initial="hidden"
      animate="visible"
    >
      {useScroll(imageRef, imageReplacementRef) ? (
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
          <ReplacementDiv ref={divReplacementRef} />
        )}

        {useScroll(titleRef, titleReplacementRef) ? (
          <Heading theme={theme} variants={variants} ref={titleRef}>
            About Lucy
          </Heading>
        ) : (
          <ReplacementTitle ref={titleReplacementRef} />
        )}

        {useScroll(descriptionRef, descriptionReplacementRef) ? (
          <Description theme={theme} variants={variants} ref={descriptionRef}>
            I am a full stack web developer from Bristol in England. I have
            spent much time travelling abroad both personally and professionaly
            and have lived in Italy and am now residing in Spain. My spare time
            consists of running 10kms, yoga, making fajitas, watching foreign
            films and planning my next scuba diving trip.
            <br />
            I am an enthusiastic linguist, who is always learning and forever
            making lists. I love creating projects and seeing them to the end.
            My attention to detail is “spot on”!
            <br />
            In October 2020 I completed a 9 week bootcamp course at Ironhack,
            following this I furthered my career as a frontend developer and I
            am currently working as a full stack developer.
            <br />I am enthusiastic about what I do and throw myself into every
            project. A technical language that I may lack in experience is
            nothing but a new and exciting challenge for me to learn it. For
            said reason, coding is the perfect profession for me, as I am
            constantly learning. I am currently looking for my next challenge as
            a full stack developer.
          </Description>
        ) : (
          <ReplacementDescription ref={descriptionReplacementRef} />
        )}
      </AboutContainerDesktop>
    </Container>
  );
};

export default About;
