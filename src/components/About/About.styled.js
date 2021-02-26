import styled from "styled-components";
import { motion } from "framer-motion";

//Styled components
const Container = styled(motion.div)`
  padding: 5px 12px;
  background: ${({ isLightTheme, theme }) =>
    isLightTheme ? null : theme.background};
@media(min-width: 1024px){
  display: flex;
  flex-direction: row-reverse;
  margin: 0 30px;
}
`;

const Image = styled(motion.img)`
  height: 200px;
  width: auto;
  border-radius: 50%;
  margin-top: 32px;
  @media(min-width: 1024px){
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
@media(min-width: 1024px){
  height: 30px;
  width: 100%;
  margin: 20px 0 16px 0;
  text-align: left;
}
`;

const Heading = styled(motion.h2)`
  color: ${({ theme }) => theme.primaryColor};
  @media(min-width: 1024px){
    height: 84px;
    /* width: 727px; */
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
  @media(min-width: 1024px){
    height: 100%;
    text-align: left;
    margin: 0;
    /* width: 540px; */
    width: 100%;
    line-height: 44px;
  }
`;

const AboutContainerDesktop = styled.div`
  @media(min-width: 1024px){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%;
  }
`

const ReplacementImg = styled.div`
  height: 200px;
  width: auto;
  @media(min-width: 1024px){
    width: 35%;
  }
`;

const ReplacementDiv = styled.div`
  height: 24px;
  width: auto;
  @media(min-width: 1024px){
    width: 100%;
  height: 24.734px;
    
  }
`;

const ReplacementTitle = styled.div`
  height: 32px;
  width: auto;
  @media(min-width: 1024px){
    width: 100%;
    height: 69.266px;

  }
`;

const ReplacementDescription = styled.div`
  height: 296px;
  width: auto;
  @media(min-width: 1024px){
    /* width: 100%; */
    width: 564px;
    height: 724px;
  }
`;


export {
  Container,
  Image,
  Div,
  Heading,
  Description,
  ReplacementImg,
  ReplacementDiv,
  ReplacementTitle,
  ReplacementDescription,
  AboutContainerDesktop
}
