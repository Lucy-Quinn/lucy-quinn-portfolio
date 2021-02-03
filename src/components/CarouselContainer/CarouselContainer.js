import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

import ArrowLeft from './../../images/button-arrow-left.svg'
import ArrowRight from './../../images/button-arrow-right.svg'
import ProjectCard from '../ProjectCard/ProjectCard'

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
    color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
}
`

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

export default CarouselContainer;
