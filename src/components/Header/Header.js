import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import ArrowDownLight from './../../images/button-arrow-down-light.svg';
import ArrowDownDark from './../../images/button-arrow-down-dark.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';

//Styled Components

const HeaderContainer = styled(motion.div)`
  padding: 8px 12px;
    border-radius: 0 0 50% 50% / 70px;
`
const Languages = styled(motion.div)`
  height: 32px;
  width: 72px;
  border-radius: 20.19px;
  display: flex; 
  align-items: center;
  justify-content: center;
  background: #fff;
  margin: 5px;
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.languages};
  & > h5 {
        font-weight: 300;
    }
`
const LanguageTabs = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
        margin: 24px 0 0 0;

`
const Div = styled(motion.p)`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  margin: 12px 0 0 0;
`
const Lucy = styled(motion.h3)`
  color: ${({ theme }) => theme.primaryColor};
  margin: 3px 0 0 0;
`
const Title = styled(motion.h1)`
  color: ${({ theme }) => theme.primaryColor};
  width: 100%;
  margin: 12px 0 0 0;
`

const LanguageList = styled(motion.p)`
  color: ${({ theme }) => theme.primaryColor};
  margin: 12px 0;
`
const ArrowDown = styled(motion.img)`
    margin: -10px 0 0 0;
    position: relative;
    top: 52px;

`

const headerParentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2.5,
      type: 'tween',
      ease: 'easeIn',
      // delayChildren: 0.5,
      // when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
}

const headerChildVariants = {
  hidden: {
    opacity: 0,
    y: '50px',
  },
  visible: {
    opacity: 1,
    y: 0,
  }
}

const languageParentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: 'tween',
      ease: 'easeIn',
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

const languageChildVariants = {
  hidden: {
    opacity: 0,
    y: '10px',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
}

const arrowVariants = {
  hover: {
    y: '10px'
  }
}

const Header = () => {
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;
  const [isLoad, setIsLoad] = useState(false);

  const languagesArray = [
    'JavaScript', 'React', 'MongoDB', 'Mongoose', 'Express.js', 'Node.js', 'HTML5', 'CSS3', 'Bootstrap'
  ]

  useEffect(() => {
    function onLoad() {
      setIsLoad(true)
    }
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [isLoad])

  return (

    <div style={{ background: theme.background }}
    >

      <HeaderContainer style={{
        background: `linear-gradient(
              180deg
              , ${theme.gradientOne} 0%, ${theme.gradientTwo} 100%`

      }}

      >
        <motion.div id="header"
          variants={headerParentVariants}
          initial="hidden"
          animate="visible">

          <Div isLightTheme={isLightTheme} theme={theme}
            variants={headerChildVariants}
          >&lt;div&gt;</Div>
          <Lucy theme={theme}
            variants={headerChildVariants}
          >I am Lucy.</Lucy>
          <Title theme={theme}
            variants={headerChildVariants}
          >A full stack web developer based in sunny Barcelona</Title>
          <LanguageList theme={theme}
            variants={headerChildVariants}
          >I speak JavaScript, React.js, MongoDB, Mongoose, Express.js, Node.js, HTML5, CSS3, English, Italian and Spanish. When I'm not coding, I'm probaby dreaming about it. :&#41;</LanguageList>
        </motion.div>


        {
          isLoad ?

            <LanguageTabs
              variants={languageParentVariants}
              initial="hidden"
              animate="visible"
            >
              {languagesArray.map((language, index) => {
                return <Languages key={index} isLightTheme={isLightTheme} theme={theme}
                  variants={languageChildVariants}
                >
                  <h5>{language}</h5>
                </Languages>
              })}
            </LanguageTabs>
            :
            null
        }

        <motion.a href="#about"

        >
          {isLightTheme ?
            <ArrowDown src={ArrowDownLight} alt="icon of arrow pointing down"
              whileHover="hover"
              variants={arrowVariants}
            ></ArrowDown>
            :
            <ArrowDown src={ArrowDownDark} alt="icon of arrow pointing down"
              whileHover="hover"
              variants={arrowVariants}
            ></ArrowDown>
          }
        </motion.a>



      </HeaderContainer>

    </div>

  );
}

export default Header;
