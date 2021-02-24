import styled from 'styled-components';
import { motion } from 'framer-motion';


const HeaderContainer = styled(motion.div)`
  padding: 8px 12px;
  border-radius: 0 0 50% 50% / 70px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
    @media (min-width: 1024px) {
    border-radius: 0 0 55% 55% / 361px;
    height: 827px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 12px 8px 12px;
  }
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
  @media (min-width: 1024px) {
    margin: 0 15px 15px 0;
    width: 141px;
    height: 46px;
  }
  
`
const LanguageTabs = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 24px 0 0 0;
  @media (min-width: 1024px) {
    margin: 0 0 200px 0;
    justify-content: flex-start;
    align-items: flex-start;
    width: 833px;
    height: 115px;
  }
`
const Div = styled(motion.p)`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  margin: 12px 0 0 0;
  @media (min-width: 1024px) {
    margin: 0px 0 24px 0;
    width: 61px;
    height: 29px;
  }
`

const Lucy = styled(motion.h3)`
  color: ${({ theme }) => theme.primaryColor};
  margin: 3px 0 0 0;
  @media (min-width: 1024px) {
    margin: 0 0 23px 0;
    width: 150px;
    height: 38px;
  }
`
const Title = styled(motion.h1)`
  color: ${({ theme }) => theme.primaryColor};
  width: 100%;
  margin: 12px 0 0 0;
  @media (min-width: 1024px) {
    margin: 0 0 24px 0;
    width: 917px;
    height: 176px;
    line-height: 88px;
    font-weight: 400;
    font-size: 4.5rem;
  }
`

const LanguageList = styled(motion.p)`
  color: ${({ theme }) => theme.primaryColor};
  margin: 12px 0;
  @media (min-width: 1024px) {
    margin: 0 0 40px 0;
    width: 867px;
    height: 130px;
    line-height: 44px;
  }
`
const ArrowDown = styled(motion.img)`
  margin: -10px 0 0 0;
  position: relative;
  top: 52px;
  @media (min-width: 1024px) {
    margin: 0;
    left: 400px;
    bottom: 218px;
    top: -106px;
    width: 102px;
    height: 101px;
  }
  @media (min-width: 1100px) {
    top: -40px;
  }
`
const HeaderContainerDesktop = styled.div`
@media (min-width: 768px) {
  display: flex;
  width: 89%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media (min-width: 1024px) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 85%;
}
`

export {
  HeaderContainer,
  Languages,
  LanguageTabs,
  Div,
  Lucy,
  Title,
  LanguageList,
  ArrowDown,
  HeaderContainerDesktop
}