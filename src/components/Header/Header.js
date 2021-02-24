import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { HeaderContainer, Languages, LanguageTabs, Div, Lucy, Title, LanguageList, ArrowDown, HeaderContainerDesktop } from './Header.styled';
import { headerParentVariants, headerChildVariants, languageParentVariants, languageChildVariants, arrowVariants } from './Header.variants'
import ArrowDownLight from './../../images/button-arrow-down-light.svg';
import ArrowDownDark from './../../images/button-arrow-down-dark.svg';

const languagesArray = [
  'JavaScript', 'React', 'MongoDB', 'Mongoose', 'Express.js', 'Node.js', 'HTML5', 'CSS3', 'Bootstrap'
]

const Header = () => {
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    function onLoad() {
      setIsLoad(true)
    }
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [isLoad])

  return (
    <div style={{ background: theme.background }}>
      <HeaderContainer style={{
        background: `linear-gradient(
              180deg
              , ${theme.gradientOne} 0%, ${theme.gradientTwo} 100%`

      }}>
        <HeaderContainerDesktop>
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
          {isLoad ?
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
        </HeaderContainerDesktop>
        <motion.a href="#about">
          <ArrowDown src={isLightTheme ? ArrowDownLight : ArrowDownDark} alt="icon of arrow pointing down"
            whileHover="hover"
            variants={arrowVariants}
          ></ArrowDown>
        </motion.a>
      </HeaderContainer>
    </div>
  );
}

export default Header;
