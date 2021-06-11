import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { ProjectLinks, Button, ProjectLinksContainer, Projects } from './CarouselContainer.styled';
import { cvVariants, deployVariants, githubVariants } from './CarouselContainer.variants';
import ProjectCard from './../ProjectCard/ProjectCard';
import PopOut from '../PopOut/PopOut';
import { AnimatePresence } from "framer-motion";
import GithubLight from './../../images/github-light.svg';
import GithubDark from './../../images/github-dark.svg';


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
                            <ProjectLinksContainer>
                                <Button variants={cvVariants} whileHover="hover" isLightTheme={isLightTheme} theme={theme} onClick={() => handleProject(project)}>View Project Details</Button>
                                <ProjectLinks theme={theme}>
                                    <a rel="noopener noreferrer" target="_blank" href={project.deploy}>
                                        <motion.i variants={deployVariants} whileHover="hover" className="fas fa-external-link-alt"></motion.i>
                                    </a>
                                    <a rel="noopener noreferrer" target="_blank" href={project.github}>
                                        <motion.img variants={githubVariants} whileHover="hover" src={isLightTheme ? GithubLight : GithubDark} alt="icon of github" />
                                    </a>
                                </ProjectLinks>
                            </ProjectLinksContainer>
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

