import styled from "styled-components";
import { motion } from "framer-motion";

//Styled components
const Container = styled(motion.div)`
  padding: 5px 12px;
  background: ${({ isLightTheme, theme }) =>
        isLightTheme ? null : theme.background};
`;

const Image = styled(motion.img)`
  height: 200px;
  width: auto;
  border-radius: 50%;
  margin-top: 32px;
`;

const Div = styled(motion.p)`
  color: ${({ isLightTheme, theme }) =>
        isLightTheme ? theme.primaryColor : theme.div};
  font-weight: 300;
  margin: 0;
`;

const Heading = styled(motion.h2)`
  color: ${({ theme }) => theme.primaryColor};
`;

const Description = styled(motion.p)`
  color: ${({ theme }) => theme.bodyCopy};
  margin-bottom: 30px;
`;

const ReplacementImg = styled.div`
  height: 200px;
  width: 200px;
`;

const ReplacementDiv = styled.div`
  height: 24px;
  width: auto;
`;

const ReplacementTitle = styled.div`
  height: 32px;
  width: auto;
`;

const ReplacementDescription = styled.div`
  height: 144px;
  width: auto;
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
    ReplacementDescription
}
