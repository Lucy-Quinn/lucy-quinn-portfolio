import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styled from 'styled-components';
import VideoStore from './../../images/the-video-store.png';
import SimpleSteps from './../../images/simple-steps.png';
import TravelGuru from './../../images/travel-guru.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick from "react-slick";
import ArrowLeft from './../../images/button-arrow-left.svg'
import ArrowRight from './../../images/button-arrow-right.svg'
import GithubLight from './../../images/github-light.svg';
import GithubDark from './../../images/github-dark.svg';

const Projects = styled(Slick)`
.slick-prev {
    left: 66px;
    top: 103%;
}
.slick-next {
  right: 66px;
  top: 103%;
}

.slick-prev:before{
width: 46px;
height: 46px;
left: -13px;
    top: 16%;
content: '' !important;
position: absolute;
background-image: url(${ArrowLeft});
background-repeat: no-repeat;
vertical-align: middle;
background-size: 46px;
opacity: 1 !important;
}

.slick-next:before{
width: 46px;
height: 46px;
right: -13px;
    top: 16%;
content: '' !important;
position: absolute;
background-image: url(${ArrowRight});
background-repeat: no-repeat;
vertical-align: middle;
background-size: 46px;
opacity: 1 !important;
}

.slick-dots{
    bottom: -40px;
}

.slick-dots li button:before {
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.bodyCopy};
}
.slick-dots li.slick-active button:before {
  /* color: red !important; */
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
}
`

//Cards
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
const CardTitle = styled.h3`
    width: 42%;
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


const projects = [
    {
        image: { image: VideoStore },
        imageAlt: 'sample of the video store project',
        title: 'The Video Store',
        text: 'The Video Store will provide you with a selection of those most popular movies. You can favourite the movies, rent them or simply just browse for ideas...',
        deploy: 'https://lucy-quinn.github.io/The-Video-Store-m1-Project/',
        github: 'https://github.com/Lucy-Quinn/The-Video-Store-m1-Project'
    },
    {
        image: { image: SimpleSteps },
        imageAlt: 'sample of the simple steps project',
        title: 'Simple Steps',
        text: 'A web app that connects volunteers and charities in Barcelona, which offers two types of users; one to volunteer and one to find volunteers.',
        deploy: 'https://simple-steps.herokuapp.com/',
        github: 'https://github.com/Lucy-Quinn/Simple-Steps'
    },
    {
        image: { image: TravelGuru },
        imageAlt: 'sample of the travel guru project',
        title: 'Travel Guru',
        text: 'A web app with the intention for users to be able to log and keep a record of all of their travel memories and find travel inspiration.',
        deploy: 'https://travel-guru.herokuapp.com/',
        github: 'https://github.com/Lucy-Quinn/Client-Travel-Guru'
    },
]

const ProjectCard = ({ project }) => {
    const { imageAlt, title, text, deploy, github } = project;
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
                    <Description theme={theme}>{text}</Description>
                </CardBody>
            </Card>
        </CardContainer>
    )
}

const CarouselContainer = ({ projects }) => {
    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;
    const settings = {
        dots: true,
        infinite: true,
        accessibility: true,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Projects {...settings} isLightTheme={isLightTheme} theme={theme}>
                {projects.map((project, index) => {
                    return (
                        <div key={index}>
                            <ProjectCard project={project} />
                        </div>
                    );
                })}
            </Projects>
        </div>
    );
}

const Carousel = () => {
    return (
        <div className="carousel">
            <CarouselContainer projects={projects} />
        </div>
    );
}

export default Carousel;