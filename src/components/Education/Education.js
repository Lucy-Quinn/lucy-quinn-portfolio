import React, { useContext, useEffect, useState, useRef } from 'react';
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
const ReplacementDiv = styled.div`
  height: 24px;
  width: auto;
`
const ReplacementTitle = styled.div`
  height: 32px;
  width: auto;
`
const ReplacementQualOne = styled.div`
  height: 105px;
  width: auto;
`
const ReplacementQualTwo = styled.div`
  height: 105px;
  width: auto;
`
const ReplacementQualThree = styled.div`
  height: 177px;
  width: auto;
`
const ReplacementQualFour = styled.div`
  height: 106px;
  width: auto;
`
const ReplacementCv = styled.div`
  height: 140px;
  width: auto;
`

//Variants
const variantContainer = {
  hidden: {
    opacity: 0,
    // y: 30
  },
  visible: {
    opacity: 1,
    // y: 0,
    type: 'tween',
    staggerChildren: 1,
  }
}
const variants = {
  hidden: {
    opacity: 0,
    y: 30
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
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    type: 'tween',
    staggerChildren: 1
  }
}

const qualChildVariants = {
  hidden: {
    opacity: 0,
    y: 30
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

  useEffect(() => {
    const isOnScreen = (ref) => window.pageYOffset + window.innerHeight - 30 >= ref.current?.offsetTop

    function handleScroll() {
      if (isOnScreen(divRef)) setIsScrollDiv(true)
      if (isOnScreen(titleRef)) setIsScrollTitle(true)
      if (isOnScreen(qualOneRef)) setIsScrollQualOne(true)
      if (isOnScreen(qualTwoRef)) setIsScrollQualTwo(true)
      if (isOnScreen(qualThreeRef)) setIsScrollQualThree(true)
      if (isOnScreen(qualFourRef)) setIsScrollQualFour(true)
      if (isOnScreen(cvRef)) setIsScrollCv(true)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        <ReplacementDiv
          ref={divRef}
        />
      }
      {isScrollTitle ?
        <Heading theme={theme} variants={variants}>Education</Heading>
        :
        <ReplacementTitle
          ref={titleRef}
        />
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
        <ReplacementQualOne
          ref={qualOneRef}
        />
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
        <ReplacementQualTwo
          ref={qualTwoRef}
        />
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
        <ReplacementQualThree
          ref={qualThreeRef}
        />
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
        <ReplacementQualFour
          ref={qualFourRef}
        />
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
        <ReplacementCv
          ref={cvRef}
        />
      }
    </Container>
  );
}

export default Education;