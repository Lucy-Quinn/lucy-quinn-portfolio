import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/ThemeContext';

import GithubLight from './../../images/github-light.svg';
import GithubDark from './../../images/github-dark.svg';
//Cards styling
const CardContainer = styled.figure`
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin: 0 auto;
    min-width: 230px;
    max-width: 338px;
    width: 100%;
    height: 100%;
    /* & > a{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
    } */
`
const Card = styled.div`
    padding: 0;
    height: 100%;
`
const CardImage = styled.img`
    width: auto;
    height: 350px;
    margin: 0 auto;
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
const ProjectCard = ({ project }) => {
    const { title, deploy, github, languages, text } = project;
    const { imageAlt } = project;
    const { image } = project.image;
    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;
    return (
        <CardContainer>
            <Card>

                <CardImage src={image} alt={imageAlt}>
                </CardImage>
            </Card>
            {/* <CardLinks theme={theme}>
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
            </CardLinks> */}
        </CardContainer>
    )
}

export default ProjectCard;

