import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled(motion.div)`
    padding: 12px;
    border-radius: 50% 50% 0 0  / 70px;
    @media (min-width: 1024px) {
      border-radius: 55% 55%  0 0  / 361px;
    }
`



const Div = styled(motion.p)`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  margin: 50px 0 0 0;
  @media (min-width: 1024px) {
    width: 61px;
    height: 29px;
    margin: 130px auto 16px auto;
  }

`

const Heading = styled(motion.h2)`
  color: ${({ theme }) => theme.primaryColor};
  margin: 8px 0 25px 0;
  @media (min-width: 1024px) {
    width: 727px;
    height: 84px;
    margin: 0 auto 57px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const ContactDetails = styled(motion.h2)`
  color: ${({ theme }) => theme.primaryColor};
  margin: 10px 0 0 0;
  font-weight: 300;
  @media (min-width: 1024px) {
    width: 727px;
    height: 84px;
    font-size: 2.9375rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
   
  }
`

const Tie = styled(motion.p)`
  color: ${({ theme }) => theme.primaryColor};
  @media (min-width: 1024px) {
    width: 727px;
    height: 84px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Socials = styled(motion.p)`
  color: ${({ theme }) => theme.primaryColor};
  margin: 50px 0 0 0;
  @media (min-width: 1024px) {
    width: 654px;
    height: 44px;
    margin: 68px auto 52px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const Icons = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    margin: 25px 0 20px 0;
    @media (min-width: 1024px) {
      justify-content: space-around;
      width: 40%;
      align-items: center;
      margin: auto auto 82px auto;
      & img{
        width: auto;
        height: 101px;
      }
    }
`

const ArrowUp = styled(motion.img)`
  @media(min-width: 1024px){
    width: auto;
    height: 123px;
  }
`

const Top = styled(motion.div)`
  margin: 0 0 75px 0;
  font-weight: 300;
  & > h4 {
        font-weight: 300;
        margin: 5px 0 0 0;
        color: ${({ theme }) => theme.primaryColor};
    }
    @media (min-width: 1024px) {
      display: none;
    }
`

const ReplacementDiv = styled.div`
  height: 24px;
  width: auto;
  @media (min-width: 1024px) {
    height: 29px;
  }
`
const ReplacementTitle = styled.div`
  height: 32px;
  width: auto;
  @media (min-width: 1024px) {
    height: 84px;
  }
`
const ReplacementContact = styled.div`
  height: 74px;
  width: auto;
  @media (min-width: 1024px) {
    height: 168px;
  }
`
const ReplacementSocial = styled.div`
  height: 68px;
  width: auto;
  @media (min-width: 1024px) {
    height: 84px;
  }
`
const ReplacementIcons = styled.div`
  height: 109px;
  width: auto;
  @media (min-width: 1024px) {
    height: 200px;
  }
`
const ReplacementArrow = styled.div`
  height: 115px;
  width: auto;
  @media (min-width: 1024px) {
    height: 126px;
  }
`

export {
  ContactContainer,
  Icons,
  Div,
  Heading,
  ContactDetails,
  Tie,
  Socials,
  ArrowUp,
  Top,
  ReplacementDiv,
  ReplacementTitle,
  ReplacementContact,
  ReplacementSocial,
  ReplacementIcons,
  ReplacementArrow
}