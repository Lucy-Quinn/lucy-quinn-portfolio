import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled(motion.div)`
    padding: 12px;
    border-radius: 50% 50% 0 0  / 70px;
`

const Icons = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    margin: 25px 0 20px 0;
`

const Div = styled(motion.p)`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  margin: 50px 0 0 0;
`

const Heading = styled(motion.h2)`
  color: ${({ theme }) => theme.primaryColor};
  margin: 8px 0 25px 0;
`

const ContactDetails = styled(motion.h2)`
  color: ${({ theme }) => theme.primaryColor};
  margin: 10px 0 0 0;
  font-weight: 300;
`

const Tie = styled(motion.p)`
  color: ${({ theme }) => theme.primaryColor};
`

const Socials = styled(motion.p)`
  color: ${({ theme }) => theme.primaryColor};
  margin: 50px 0 0 0;
`

const Top = styled(motion.div)`
  margin: 0 0 75px 0;
  font-weight: 300;
  & > h4 {
        font-weight: 300;
        margin: 5px 0 0 0;
        color: ${({ theme }) => theme.primaryColor};
    }
`

const ReplacementDiv = styled.div`
  height: 24px;
  width: auto;
`
const ReplacementTitle = styled.div`
  height: 32px;
  width: auto;
`
const ReplacementContact = styled.div`
  height: 74px;
  width: auto;
`
const ReplacementSocial = styled.div`
  height: 68px;
  width: auto;
`
const ReplacementIcons = styled.div`
  height: 109px;
  width: auto;
`
const ReplacementArrow = styled.div`
  height: 115px;
  width: auto;
`

export {
    ContactContainer,
    Icons,
    Div,
    Heading,
    ContactDetails,
    Tie,
    Socials,
    Top,
    ReplacementDiv,
    ReplacementTitle,
    ReplacementContact,
    ReplacementSocial,
    ReplacementIcons,
    ReplacementArrow
}