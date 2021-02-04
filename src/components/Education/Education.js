import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styled from 'styled-components';
import Resume from './../../images/open-cv.svg';

//Styled components

const Container = styled.div`
  padding: 5px 16px;
  background: ${({ isLightTheme, theme }) => isLightTheme ? null : theme.background};

`
const Div = styled.p`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  margin: 20px 0 0 0;
`
const Heading = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
`
const Experience = styled.div`
    border-top: 1px solid #E5E5E5;
    margin-top: ${props => props.topBorder && '20px'};
    padding: 10px;
    border-bottom: ${(props) => (props.lastChild && '1px solid #E5E5E5')}
`
const School = styled.p`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  font-weight: 700;
`

const Qualification = styled.p`
  color: ${({ theme }) => theme.bodyCopy};
`

const CvHeading = styled.p`
  color: ${({ theme }) => theme.bodyCopy};
  margin: 25px 0 0 0;
`

const Cv = styled.img`
    margin: 5px 0 56px 0;
`


const Education = () => {
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;
  return (
    <Container isLightTheme={isLightTheme} theme={theme} id="education">
      <Div isLightTheme={isLightTheme} theme={theme}>&lt;div&gt;</Div>
      <Heading theme={theme}>Education</Heading>
      <Experience topBorder>
        <School isLightTheme={isLightTheme} theme={theme}>Ironhack: Oct 2020 - Jan 2021 (Spain)</School>
        <Qualification theme={theme}>Full Stack Web Development Graduate</Qualification>
      </Experience>
      <Experience>
        <School isLightTheme={isLightTheme} theme={theme}>Don Milani: Oct 2012 - Dec 2012 (Italy)</School>
        <Qualification theme={theme}>CIL Duo (B2 Higher Intermediate Italian)</Qualification>
      </Experience>
      <Experience>
        <School isLightTheme={isLightTheme} theme={theme}>Leeds University: Sept 2008 - Jul 2012</School>
        <Qualification theme={theme}>Spanish & Latin American Studies (BA Hons)</Qualification>
        <Qualification theme={theme}>Web Dev Module (JavaScript, HTML, CSS)</Qualification>
        <Qualification theme={theme}>Erasmus (Oviedo, Spain): Sept 2010 - Jul 2011</Qualification>
      </Experience>
      <Experience lastChild >
        <School isLightTheme={isLightTheme} theme={theme}>Cardiff Met University: Sept 2006 - Jul 2007</School>
        <Qualification theme={theme}>Art & Design Foundation</Qualification>
      </Experience>
      <CvHeading theme={theme}>Open my CV</CvHeading>
      <a rel="noopener noreferrer" target="_blank" href="https://media-exp1.licdn.com/dms/document/C4D2DAQFF6ezP_Xi_Nw/profile-treasury-document-pdf-analyzed/0/1612445751485?e=1612548000&v=beta&t=UFtPHO9umyR5oPlzb_wL0dSUCQ7ChTeQr_N_5H-kGTU">
        <Cv src={Resume} alt="icon to open resume" />
      </a>
    </Container>
  );
}

export default Education;