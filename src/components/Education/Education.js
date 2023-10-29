import React, { useContext, useRef } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Resume from "./../../images/open-cv.svg";
import { motion } from "framer-motion";
import {
  Container,
  Div,
  Heading,
  CvHeading,
  Cv,
  ReplacementDiv,
  ReplacementTitle,
  ReplacementQualOne,
  ReplacementQualTwo,
  ReplacementQualThree,
  ReplacementQualFour,
  ReplacementCv,
} from "./Education.styled";
import {
  variantContainer,
  variants,
  qualParentVariants,
  qualChildVariants,
} from "./Education.variants";
import ExperienceCard from "./ExperienceCard";
import { LINKS, EDUCATION_DATA } from "../../const";
import { useScroll } from "../../hooks/useScroll";

const Education = () => {
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;

  const divRef = useRef(null);
  const titleRef = useRef(null);
  const qualOneRef = useRef(null);
  const qualTwoRef = useRef(null);
  const qualThreeRef = useRef(null);
  const qualFourRef = useRef(null);
  const cvRef = useRef(null);

  const divReplacementRef = useRef(null);
  const titleReplacementRef = useRef(null);
  const qualOneReplacementRef = useRef(null);
  const qualTwoReplacementRef = useRef(null);
  const qualThreeReplacementRef = useRef(null);
  const qualFourReplacementRef = useRef(null);
  const cvReplacementRef = useRef(null);

  return (
    <Container
      id="education"
      isLightTheme={isLightTheme}
      theme={theme}
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
        <ReplacementDiv ref={divReplacementRef} />
      )}

      {useScroll(titleRef, titleReplacementRef) ? (
        <Heading theme={theme} variants={variants} ref={titleRef}>
          Education
        </Heading>
      ) : (
        <ReplacementTitle ref={titleReplacementRef} />
      )}

      {useScroll(qualOneRef, qualOneReplacementRef) ? (
        <motion.div
          variants={qualParentVariants}
          initial="hidden"
          animate="visible"
          ref={qualOneRef}
          style={{ borderTop: "1px solid #e5e5e591" }}
        >
          <ExperienceCard
            data={EDUCATION_DATA[0]}
            qualChildVariants={qualChildVariants}
            isLightTheme={isLightTheme}
            theme={theme}
            className="topEducation"
          />
        </motion.div>
      ) : (
        <ReplacementQualOne ref={qualOneReplacementRef} />
      )}

      {useScroll(qualTwoRef, qualTwoReplacementRef) ? (
        <motion.div
          variants={qualParentVariants}
          initial="hidden"
          animate="visible"
          ref={qualTwoRef}
        >
          <ExperienceCard
            data={EDUCATION_DATA[1]}
            qualChildVariants={qualChildVariants}
            isLightTheme={isLightTheme}
            theme={theme}
          />
        </motion.div>
      ) : (
        <ReplacementQualTwo ref={qualTwoReplacementRef} />
      )}

      {useScroll(qualThreeRef, qualThreeReplacementRef) ? (
        <motion.div
          variants={qualParentVariants}
          initial="hidden"
          animate="visible"
          ref={qualThreeRef}
        >
          <ExperienceCard
            data={EDUCATION_DATA[2]}
            qualChildVariants={qualChildVariants}
            isLightTheme={isLightTheme}
            theme={theme}
          />
        </motion.div>
      ) : (
        <ReplacementQualThree ref={qualThreeReplacementRef} />
      )}

      {useScroll(qualFourRef, qualFourReplacementRef) ? (
        <motion.div
          variants={qualParentVariants}
          initial="hidden"
          animate="visible"
          ref={qualFourRef}
        >
          <ExperienceCard
            data={EDUCATION_DATA[3]}
            qualChildVariants={qualChildVariants}
            isLightTheme={isLightTheme}
            theme={theme}
          />
        </motion.div>
      ) : (
        <ReplacementQualFour ref={qualFourReplacementRef} />
      )}

      {useScroll(cvRef, cvReplacementRef) ? (
        <motion.div
          variants={variantContainer}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          ref={cvRef}
        >
          <CvHeading theme={theme}>Lucy's CV</CvHeading>
          <motion.a
            variants={variants}
            whileHover="hover"
            rel="noopener noreferrer"
            target="_blank"
            href={LINKS["cv"]}
          >
            <Cv src={Resume} variants={variants} alt="icon to open resume" />
          </motion.a>
        </motion.div>
      ) : (
        <ReplacementCv ref={cvReplacementRef} />
      )}
    </Container>
  );
};

export default Education;
