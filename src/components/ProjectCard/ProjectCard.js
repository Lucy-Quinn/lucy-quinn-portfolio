import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Slick from "react-slick";
import styled from 'styled-components';

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
    text-align: left;
    box-shadow: 0px 1px 1px 0px #ccc;
    & > a{
        position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    }
`
const Card = styled.div`
    padding: 0;
    box-shadow: 0px 1px 1px 0px #ccc;
    height: 100%;
`
const CardImage = styled.img`
    width: auto;
    height: 350px;
    margin: 0 auto;
`
const CardHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 100px;
`
const CardTitle = styled.h2`
    width: 59%;
    color: ${({ theme }) => theme.primaryColor};
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

const ProjectCard = ({ project }) => {
    const { imageAlt, title, text, deploy, github, languages } = project;
    const { image } = project.image;
    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;
    return (
        <CardContainer>
            <Card>
                <CardImage src={image} alt={imageAlt}>
                </CardImage>
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
                </CardBody>
            </Card>
        </CardContainer>
    )
}



export default ProjectCard;
