import React, { useContext, useRef } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useScroll } from "../../hooks/useScroll";
import Lucy from "./../../images/lucy.png";
import {
  AboutContainerDesktop,
  Container,
  Description,
  Div,
  Heading,
  Image,
  ReplacementDescription,
  ReplacementDiv,
  ReplacementImg,
  ReplacementTitle,
} from "./About.styled";
import { variantContainer, variants } from "./About.variants";

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
            Hi! I'm Lucy, a full-stack web developer originally from Bristol,
            UK, now living in sunny Spain (but always dreaming of my next dive
            trip). 🌞
            <br />
            I’ve had the privilege of living in Italy, traveling across the
            world, and now I'm calling Spain home. When I'm not coding, you'll
            find me running 10kms, practicing yoga, making some epic fajitas, or
            binge-watching foreign films. 🎥 Oh, and scuba diving... did I
            mention that? 🐠
            <br />
            I’m a linguist at heart—whether it’s picking up a new language or
            learning the latest tech, I’m always adding something new to my
            list. Speaking of lists, they’re my thing! I love diving into
            projects, problem-solving, and bringing them to life with clean,
            effective solutions.
            <br />
            I’m a proud graduate of Ironhack's bootcamp, where I dove head-first
            into the world of development, and I haven’t looked back since. With
            a background in the travel industry and hands-on experience
            modernizing legacy platforms, I’m passionate about building
            scalable, high-performance web apps that not only look great but
            also work seamlessly—just like a well-planned trip!
            <br />
            Currently, I’m on the lookout for my next big challenge. If you're
            looking for someone who’s excited to learn, solve problems, and
            bring designs to life, I’m your gal! Let's chat about what I can do
            for you.
          </Description>
        ) : (
          <ReplacementDescription ref={descriptionReplacementRef} />
        )}
      </AboutContainerDesktop>
    </Container>
  );
};

export default About;
