import styled from 'styled-components';
import { motion } from 'framer-motion';

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