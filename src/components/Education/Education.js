import React, { useContext, useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Resume from './../../images/open-cv.svg';
import { motion } from 'framer-motion';
import { Container, Div, Heading, CvHeading, Cv, ReplacementDiv, ReplacementTitle, ReplacementQualOne, ReplacementQualTwo, ReplacementQualThree, ReplacementQualFour, ReplacementCv } from './Education.styled';
import { variantContainer, variants, qualParentVariants, qualChildVariants } from './Education.variants';
import ExperienceCard from './ExperienceCard';

const EDUCATION_DATA = [
  {
    schoolArr: ["Ironhack (Spain)", "Oct 2020 - Jan 2021"],
    qualifications: ["Full Stack Web Development Graduate"],
  },
  {
    schoolArr: ["Don Milani (Italy)", "Oct 2012 - Dec 2012"],
    qualifications: ["CIL Duo (B2 Higher Intermediate Italian)"],
  },
  {
    schoolArr: ["Leeds University (Spain)", "Sept 2008 - Jul 2012"],
    qualifications: ["Spanish & Latin American Studies (BA Hons)", "Web Dev Module (JavaScript, HTML, CSS)", "Erasmus (Oviedo, Spain): Sept 2010 - Jul 2011"]
  },
  {
    schoolArr: ["Cardiff Met University (UK)", "Sept 2006 - Jul 2007"],
    qualifications: ["Art & Design Foundation"]
  }
];

const Education = () => {
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;

  const [isScrollDiv, setIsScrollDiv] = useState(false);
  const [isScrollTitle, setIsScrollTitle] = useState(false);
  const [isScrollQualOne, setIsScrollQualOne] = useState(false);
  const [isScrollQualTwo, setIsScrollQualTwo] = useState(false);
  const [isScrollQualThree, setIsScrollQualThree] = useState(false);
  const [isScrollQualFour, setIsScrollQualFour] = useState(false);
  const [isScrollCv, setIsScrollCv] = useState(false);

  const divRef = useRef(null)
  const titleRef = useRef(null)
  const qualOneRef = useRef(null)
  const qualTwoRef = useRef(null)
  const qualThreeRef = useRef(null)
  const qualFourRef = useRef(null)
  const cvRef = useRef(null)

  const divReplacementRef = useRef(null);
  const titleReplacementRef = useRef(null);
  const qualOneReplacementRef = useRef(null);
  const qualTwoReplacementRef = useRef(null);
  const qualThreeReplacementRef = useRef(null);
  const qualFourReplacementRef = useRef(null);
  const cvReplacementRef = useRef(null);


  useEffect(() => {
    const isOnScreen = (ref) => {
      const isOffsetBottom = window.pageYOffset + window.innerHeight - 30 >= ref.current?.offsetTop;
      const isOffsetTop = window.pageYOffset < ref.current?.offsetTop + ref.current?.offsetHeight;

      return isOffsetBottom && isOffsetTop;
    };

    function handleScroll() {
      if (isOnScreen(divReplacementRef)) setIsScrollDiv(true)
      if (isOnScreen(titleReplacementRef)) setIsScrollTitle(true)
      if (isOnScreen(qualOneReplacementRef)) setIsScrollQualOne(true)
      if (isOnScreen(qualTwoReplacementRef)) setIsScrollQualTwo(true)
      if (isOnScreen(qualThreeReplacementRef)) setIsScrollQualThree(true)
      if (isOnScreen(qualFourReplacementRef)) setIsScrollQualFour(true)
      if (isOnScreen(cvReplacementRef)) setIsScrollCv(true)

      if (divReplacementRef && !isOnScreen(divRef)) setIsScrollDiv(false);
      if (titleReplacementRef && !isOnScreen(titleRef)) setIsScrollTitle(false);
      if (qualOneReplacementRef && !isOnScreen(qualOneRef)) setIsScrollQualOne(false);
      if (qualTwoReplacementRef && !isOnScreen(qualTwoRef)) setIsScrollQualTwo(false);
      if (qualThreeReplacementRef && !isOnScreen(qualThreeRef)) setIsScrollQualThree(false);
      if (qualFourReplacementRef && !isOnScreen(qualFourRef)) setIsScrollQualFour(false);
      if (cvReplacementRef && !isOnScreen(cvRef)) setIsScrollCv(false);

    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container
      id="education"
      isLightTheme={isLightTheme}
      theme={theme}
      variants={variantContainer}
      initial="hidden"
      animate="visible"
    >
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
          Education
        </Heading>
      ) : (
          <ReplacementTitle ref={titleReplacementRef} />
        )}

      {isScrollQualOne ? (
        <motion.div
          variants={qualParentVariants}
          initial="hidden"
          animate="visible"
          ref={qualOneRef}
          style={{ borderTop: '1px solid #e5e5e591' }}
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

      {isScrollQualTwo ? (
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
      {isScrollQualThree ? (
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

      {isScrollQualFour ? (
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
      {isScrollCv ? (
        <motion.div
          variants={variantContainer}
          initial="hidden"
          animate="visible"
          whileHover="hover"

          ref={cvRef}
        >
          <CvHeading theme={theme}>
            Lucy's CV
          </CvHeading>
          <motion.a
            variants={variants}
            whileHover="hover"
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1nFLSELiQ6yCG8C1aW9e4CHg8dTh6vawa/view?usp=sharing"
          >
            <Cv src={Resume} variants={variants} alt="icon to open resume" />
          </motion.a>
        </motion.div>
      ) : (
          <ReplacementCv ref={cvReplacementRef} />
        )}
    </Container>
  );

}

export default Education;