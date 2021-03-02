import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  padding: 5px 16px;
  background: ${({ isLightTheme, theme }) => isLightTheme ? null : theme.background};
`

const Div = styled(motion.p)`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  margin: 16px 0 0 0;
  @media(min-width: 1024px){
    width: 98px;
    height: 30px;
    margin: auto auto 22px auto;
  }
`

const Heading = styled(motion.h2)`
  color: ${({ theme }) => theme.primaryColor};
  margin: auto auto 20px auto;
  @media(min-width: 1024px){
    width: 727px;
    height: 84px;
    margin: auto auto 60px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Experience = styled(motion.div)`
    border-top: 1px solid #E5E5E5;
    margin-top: ${props => props.topBorder && '20px'};
    padding: 10px;
    border-bottom: 1px solid #E5E5E5;
    @media(min-width: 1024px){
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 150px;
    }
`

const School = styled(motion.p)`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  font-weight: 700;
`

const Qualification = styled(motion.p)`
  color: ${({ theme }) => theme.bodyCopy};
  @media(min-width: 1024px){
    width: 50%;
  }
`

const CvHeading = styled(motion.p)`
  color: ${({ theme }) => theme.bodyCopy};
  margin: 25px 0 0 0;
  @media(min-width: 1024px){
    margin: 47px 0 0 0;
  }
`

const Cv = styled(motion.img)`
  margin: 5px 0 44px 0;
  @media(min-width: 1024px){
    height: auto;
    width: 252px;
    margin: 12px 0 44px 0;
  }
`

const ReplacementDiv = styled.div`
  height: 24px;
  width: auto;
  @media(min-width: 1024px){
    height: 52px;
  }
`

const ReplacementTitle = styled.div`
  height: 32px;
  width: auto;
  @media(min-width: 1024px){
    height: 144px;
  }
`

const ReplacementQualOne = styled.div`
  height: 105px;
  width: auto;
  @media(min-width: 1024px){
    height: 172px;
  }
`

const ReplacementQualTwo = styled.div`
  height: 105px;
  width: auto;
  @media(min-width: 1024px){
    height: 172px;
  }
`

const ReplacementQualThree = styled.div`
  height: 177px;
  width: auto;
  @media(min-width: 1024px){
    height: 172px;
  }
`

const ReplacementQualFour = styled.div`
  height: 106px;
  width: auto;
  @media(min-width: 1024px){
    height: 172px;
  }
`

const ReplacementCv = styled.div`
  height: 140px;
  width: auto;
  @media(min-width: 1024px){
    height: 158.359px;
  }
`

export {
  Container,
  Div,
  Heading,
  Experience,
  School,
  Qualification,
  CvHeading,
  Cv,
  ReplacementDiv,
  ReplacementTitle,
  ReplacementQualOne,
  ReplacementQualTwo,
  ReplacementQualThree,
  ReplacementQualFour,
  ReplacementCv
}