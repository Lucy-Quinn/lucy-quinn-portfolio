import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styled from 'styled-components';
import { motion } from "framer-motion";
import './../../App.css'
import GithubLight from './../../images/github-light.svg';
import GithubDark from './../../images/github-dark.svg';

//Styled components 
//Cards
const CardHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    /* height: 100px; */
`
const CardTitle = styled.h2`
    width: 59%;
    color: ${({ theme }) => theme.primaryColor};
`

const CardBody = styled.div`
    position: relative;
    display: inline-block;
    overflow: hidden;
    text-align: center;
    max-width: 335px;
    width: 100%;
`

const Description = styled.p`
    color: ${({ theme }) => theme.bodyCopy};
`
const Languages = styled.p`
    color: ${({ theme }) => theme.div};
`

const Background = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  will-change: opacity;
  z-index: 2;
`
const PopoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 3;
`

const PopoutCard = styled(motion.div)`
  /* background: #818181; */
  background: #fff;
  box-shadow: 2px 5px 2px rgba(0, 0, 0, 0.9);
  border-radius: 20px;
  border: 1px solid grey;
  width: 400px;
  /* height: 350px; */

    height: 300px;
    padding: 0 5px;

    justify-content: center;
    display: flex;
    flex-direction: column;
`
const CardLinks = styled.div`
    display: flex;
    left: 200px;
    bottom: 42px;
     & > a{
        margin: 10px;
        cursor: pointer;  
    }
    & > a:first-child{
        font-size: 1.5rem;
        color: ${({ theme }) => theme.primaryColor};
    }
    & > a > img{
        height: 28px;
        width: auto;
    }
`
//Framer motion
const background = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const popout = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5 } }
};

const PopOut = ({ close, activeProject }) => {
    const { title, deploy, github, languages, text } = activeProject;

    //Theme context
    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;

    return (
        <motion.div initial="hidden" animate="visible" exit="hidden">
            <Background
                variants={background}
            // transition={{ duration: 0.2 }}
            >
                <button onClick={close}>click</button>
            </Background>
            <PopoutContainer>
                <PopoutCard variants={popout} >
                    <CardHeader>
                        <CardTitle theme={theme}>{title}</CardTitle>
                        <CardLinks theme={theme}>
                            <a target="_blank" href={deploy}>
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                            {isLightTheme ?
                                <a target="_blank" href={github}>
                                    <img src={GithubLight} alt="of github" />
                                </a>
                                :
                                <a target="_blank" href={github}>
                                    <img src={GithubDark} alt="of github" />
                                </a>
                            }
                        </CardLinks>
                    </CardHeader>
                    <CardBody>
                        <Languages theme={theme}>{languages}</Languages>
                        <Description theme={theme}>{text}</Description>
                        <a target="_blank" href="http://www.example.com/" title="example">See detail</a>
                    </CardBody>
                </PopoutCard>
            </PopoutContainer>

        </motion.div>
    );
}

export default PopOut;
