import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  padding: 5px 12px;
  background: ${({ isLightTheme, theme }) =>
    isLightTheme ? null : theme.background};
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    padding: 0 30px;
  }
`;

const Image = styled(motion.img)`
  height: 200px;
  width: auto;
  border-radius: 50%;
  margin-top: 32px;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    height: 100%;
    width: 35%;
  }
`;

const Div = styled(motion.p)`
  color: ${({ isLightTheme, theme }) =>
    isLightTheme ? theme.primaryColor : theme.div};
  font-weight: 300;
  margin: 0;
  @media (min-width: 1024px) {
    height: 43px;
    width: 100%;
    margin: 20px 0 0 0;
    text-align: left;
    font-size: 1.1rem;
  }
`;

const Heading = styled(motion.h2)`
  color: ${({ theme }) => theme.primaryColor};
  @media (min-width: 1024px) {
    height: 120px;
    margin: 0 0 24px 0;
    text-align: left;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

const Description = styled(motion.p)`
  color: ${({ theme }) => theme.bodyCopy};
  margin-bottom: 30px;
  @media (min-width: 1024px) {
    height: 100%;
    text-align: left;
    margin: auto auto 95px auto;
    width: 100%;
    line-height: 40px;
  }
`;

const AboutContainerDesktop = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%;
  }
`;

const ReplacementImg = styled.div`
  height: 200px;
  width: auto;
  @media (min-width: 1024px) {
    width: 35%;
    height: 369.391px;
  }
  @media (min-width: 1024px) {
    height: 501px;
  }
  @media (min-width: 1100px) {
    height: 394px;
  }
`;

const ReplacementDiv = styled.div`
  height: 24px;
  width: auto;
  @media (min-width: 1024px) {
    width: 100%;
    height: 68.625px;
  }
  @media (min-width: 1100px) {
    height: 71.375px;
  }
`;

const ReplacementTitle = styled.div`
  height: 32px;
  width: auto;
  @media (min-width: 1024px) {
    width: 100%;
    height: 93.266px;
  }
  @media (min-width: 1100px) {
    height: 108.891px;
  }
`;

const ReplacementDescription = styled.div`
  height: 296px;
  width: auto;
  @media (min-width: 1024px) {
    width: 564px;
    height: 728px;
  }
  @media (min-width: 1100px) {
    height: 500.734px;
  }
`;

export {
  AboutContainerDesktop,
  Container,
  Description,
  Div,
  Heading,
  Image,
  ReplacementDescription,
  ReplacementDiv,
  ReplacementImg,
  ReplacementTitle,
};
