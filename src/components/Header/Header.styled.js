import styled from 'styled-components';
import { motion } from 'framer-motion';


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


export {
    HeaderContainer,
    Languages,
    LanguageTabs,
    Div,
    Lucy,
    Title,
    LanguageList,
    ArrowDown
}