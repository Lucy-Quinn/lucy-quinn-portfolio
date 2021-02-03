import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

import ArrowLeft from './../../images/button-arrow-left.svg'
import ArrowRight from './../../images/button-arrow-right.svg'
import ProjectCard from './../ProjectCard/ProjectCard'
import PopOut from '../PopOut/PopOut'
import { AnimatePresence } from "framer-motion";
import GithubLight from './../../images/github-light.svg';


//Styled Components
//React Slick styling

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

    //States
    const [activeProject, setActiveProject] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    //Theme context
    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;

    //React Slick settings
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

    //HandleProject function to update states 
    const handleProject = (currentProject) => {
        //setting state to true so that popout component is visible
        setIsOpen(true)
        //setting state to current project
        setActiveProject({ title: currentProject.title, deploy: currentProject.deploy, github: currentProject.github, languages: currentProject.languages, text: currentProject.text })
    }

    return (
        <div>
            {/* Map through projects array */}
            <Projects {...settings} isLightTheme={isLightTheme} theme={theme}>
                {projects.map((project, index) => {
                    return (
                        <div key={index}>
                            <ProjectCard project={project} />
                            <div className='links'>
                                <button onClick={() => handleProject(project)} >Open me</button>
                                <div className="link-two">
                                    <i className="fas fa-external-link-alt"></i>
                                    <img style={{ width: '20px' }} src={GithubLight} alt="of github" />
                                </div>
                            </div>

                        </div>
                    );
                })}
            </Projects>

            {/* Animate the popout component out of the DOM and passing isOpen state and the activeProject state down */}
            <AnimatePresence>
                {isOpen && <PopOut close={() => setIsOpen(false)} activeProject={activeProject} />}
            </AnimatePresence>

        </div>
    );
}

export default CarouselContainer;

