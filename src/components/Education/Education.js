import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styled from 'styled-components';
import Resume from './../../images/open-cv.svg';
import { motion } from 'framer-motion';

//Styled components

const Container = styled(motion.div)`
  padding: 5px 16px;
  background: ${({ isLightTheme, theme }) => isLightTheme ? null : theme.background};

`
const Div = styled(motion.p)`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  margin: 16px 0 0 0;
`
const Heading = styled(motion.h2)`
  color: ${({ theme }) => theme.primaryColor};
`
const Experience = styled(motion.div)`
    border-top: 1px solid #E5E5E5;
    margin-top: ${props => props.topBorder && '20px'};
    padding: 10px;
    border-bottom: ${(props) => (props.lastChild && '1px solid #E5E5E5')}
`
const School = styled(motion.p)`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  font-weight: 700;
`

const Qualification = styled(motion.p)`
  color: ${({ theme }) => theme.bodyCopy};
`

const CvHeading = styled(motion.p)`
  color: ${({ theme }) => theme.bodyCopy};
  margin: 25px 0 0 0;
`

const Cv = styled(motion.img)`
    margin: 5px 0 44px 0;
`
const Replacement = styled.div`
  height: 50px;
  width: auto;
`

//Variants
const variantContainer = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    type: 'spring',
    mass: 0.4,
    staggerChildren: 1,
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
    transition: { duration: 0.2 }
  }
}
const qualParentVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    type: 'spring',
    mass: 0.4,
    staggerChildren: 1
  }
}

const qualChildVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

const Education = () => {
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;
  const [scrollYValue, setscrollYValue] = useState(window.pageYOffset)
  const [isScrollDiv, setIsScrollDiv] = useState(false);
  const [isScrollTitle, setIsScrollTitle] = useState(false);
  const [isScrollQualOne, setIsScrollQualOne] = useState(false);
  const [isScrollQualTwo, setIsScrollQualTwo] = useState(false);
  const [isScrollQualThree, setIsScrollQualThree] = useState(false);
  const [isScrollQualFour, setIsScrollQualFour] = useState(false);
  const [isScrollCv, setIsScrollCv] = useState(false);

  function useScrollDistance() {
    useEffect(() => {
      function handleScroll() {
        setscrollYValue(window.pageYOffset)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return scrollYValue
  }

  useScrollDistance()

  const scrollPosition = {
    div: 1338,
    title: 1378,
    qualOne: 1420,
    qualTwo: 1555,
    qualThree: 1661,
    qualFour: 1849,
    cv: 1929,
  };

  const { div, title, qualOne, qualTwo, qualThree, qualFour, cv } = scrollPosition;

  useEffect(() => {
    scrollYValue >= div &&
      setIsScrollDiv(true)
    return () => setIsScrollDiv(false)
  }, [isScrollDiv, scrollYValue])

  useEffect(() => {
    scrollYValue >= title &&
      setIsScrollTitle(true)
    return () => setIsScrollTitle(false)
  }, [isScrollTitle, scrollYValue])

  useEffect(() => {
    scrollYValue >= qualOne &&
      setIsScrollQualOne(true)
    return () => setIsScrollQualOne(false)
  }, [isScrollQualOne, scrollYValue])

  useEffect(() => {
    scrollYValue >= qualTwo &&
      setIsScrollQualTwo(true)
    return () => setIsScrollQualTwo(false)
  }, [isScrollQualTwo, scrollYValue])

  useEffect(() => {
    scrollYValue >= qualThree &&
      setIsScrollQualThree(true)
    return () => setIsScrollQualThree(false)
  }, [isScrollQualThree, scrollYValue])

  useEffect(() => {
    scrollYValue >= qualFour &&
      setIsScrollQualFour(true)
    return () => setIsScrollQualFour(false)
  }, [isScrollQualFour, scrollYValue])

  useEffect(() => {
    scrollYValue >= cv &&
      setIsScrollCv(true)
    return () => setIsScrollCv(false)
  }, [isScrollCv, scrollYValue])

  return (
    <Container id="education" isLightTheme={isLightTheme} theme={theme}
      variants={variantContainer}
      initial="hidden"
      animate="visible"
    >
      {isScrollDiv ?
        <Div isLightTheme={isLightTheme} theme={theme}
          variants={variants}>&lt;div&gt;</Div>
        :
        <Replacement></Replacement>
      }
      {isScrollTitle ?
        <Heading theme={theme} variants={variants}>Education</Heading>
        :
        <Replacement></Replacement>
      }
      {isScrollQualOne ?
        <motion.div variants={qualParentVariants} initial="hidden"
          animate="visible">
          <Experience topBorder variants={qualChildVariants}>
            <School isLightTheme={isLightTheme} theme={theme} variants={qualChildVariants}>Ironhack: Oct 2020 - Jan 2021 (Spain)</School>
            <Qualification theme={theme} variants={qualChildVariants}>Full Stack Web Development Graduate</Qualification>
          </Experience>
        </motion.div>
        :
        <Replacement></Replacement>
      }
      {isScrollQualTwo ?
        <motion.div variants={qualParentVariants} initial="hidden"
          animate="visible">
          <Experience variants={qualChildVariants}>
            <School isLightTheme={isLightTheme} theme={theme} variants={qualChildVariants}>Don Milani: Oct 2012 - Dec 2012 (Italy)</School>
            <Qualification theme={theme} variants={qualChildVariants}>CIL Duo (B2 Higher Intermediate Italian)</Qualification>
          </Experience>
        </motion.div>
        :
        <Replacement></Replacement>
      }
      {isScrollQualThree ?
        <motion.div variants={qualParentVariants} initial="hidden"
          animate="visible">
          <Experience variants={qualChildVariants}>
            <School isLightTheme={isLightTheme} theme={theme}>Leeds University: Sept 2008 - Jul 2012</School>
            <Qualification theme={theme}>Spanish & Latin American Studies (BA Hons)</Qualification>
            <Qualification theme={theme}>Web Dev Module (JavaScript, HTML, CSS)</Qualification>
            <Qualification theme={theme}>Erasmus (Oviedo, Spain): Sept 2010 - Jul 2011</Qualification>
          </Experience>
        </motion.div>
        :
        <Replacement></Replacement>
      }
      {isScrollQualFour ?
        <motion.div variants={qualParentVariants} initial="hidden"
          animate="visible">
          <Experience lastChild variants={qualChildVariants}>
            <School isLightTheme={isLightTheme} theme={theme}>Cardiff Met University: Sept 2006 - Jul 2007</School>
            <Qualification theme={theme}>Art & Design Foundation</Qualification>
          </Experience>
        </motion.div>
        :
        <Replacement></Replacement>
      }
      {isScrollCv ?
        <motion.div variants={variantContainer} initial="hidden"
          animate="visible">
          <CvHeading theme={theme} variants={variants}>Open my CV</CvHeading>
          <motion.a variants={variants} rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1nFLSELiQ6yCG8C1aW9e4CHg8dTh6vawa/view?usp=sharing">
            <Cv src={Resume} variants={variants} alt="icon to open resume" />
          </motion.a>
        </motion.div>
        :
        <Replacement></Replacement>
      }
    </Container>
  );
}

export default Education;