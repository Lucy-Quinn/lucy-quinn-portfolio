import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
    padding: 5px 12px 95px 12px;
  background: ${({ isLightTheme, theme }) => isLightTheme ? null : theme.background};
`

const Div = styled(motion.p)`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  margin: 40px 0 0 0;
`

const Heading = styled(motion.h2)`
  color: ${({ theme }) => theme.primaryColor};
`

const Description = styled(motion.p)`
  color: ${({ theme }) => theme.bodyCopy};
  padding-bottom: 30px;
`

const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: ".";
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: ".";
    }
    33% {
      content: "..";
    }
    66% {
      content: "...";
    }
  }
`

const ReplacementDiv = styled.div`
  height: 24px;
  width: auto;
`

const ReplacementHeading = styled.div`
  height: 32px;
  width: auto;
`

const ReplacementDescription = styled.div`
  height: 126px;
  width: auto;
`

const ReplacementCarousel = styled.div`
  height: 460px;
  width: auto;
`

export {
    Container,
    Div,
    Heading,
    Description,
    Dots,
    ReplacementDiv,
    ReplacementHeading,
    ReplacementDescription,
    ReplacementCarousel
}