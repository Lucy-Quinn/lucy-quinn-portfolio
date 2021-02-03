import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styled from 'styled-components';
import VideoStore from './../../images/the-video-store.png';
import SimpleSteps from './../../images/simple-steps.png';
import TravelGuru from './../../images/travel-guru.png';

import Slick from "react-slick";
import CarouselContainer from './../CarouselContainer/CarouselContainer'

const projects = [
    {
        image: { image: VideoStore },
        imageAlt: 'sample of the video store project',
        title: 'The Video Store',
        text: 'The Video Store will provide you with a selection of those most popular movies. You can favourite the movies, rent them or simply just browse for ideas...',
        deploy: 'https://lucy-quinn.github.io/The-Video-Store-m1-Project/',
        github: 'https://github.com/Lucy-Quinn/The-Video-Store-m1-Project',
        languages: 'HTML5 | CSS3 | JavaScript | Bootstrap | External API'
    },
    {
        image: { image: SimpleSteps },
        imageAlt: 'sample of the simple steps project',
        title: 'Simple Steps',
        text: 'A web app that connects volunteers and charities in Barcelona, which offers two types of users; one to volunteer and one to find volunteers.',
        deploy: 'https://simple-steps.herokuapp.com/',
        github: 'https://github.com/Lucy-Quinn/Simple-Steps',
        languages: 'Server Side Rendering | HTML5 | CSS3 | NodeJS | Express | MongoDB | Mongoose | JSX | Heroku'

    },
    {
        image: { image: TravelGuru },
        imageAlt: 'sample of the travel guru project',
        title: 'Travel Guru',
        text: 'A full stack web app with the intention for users to be able to log and keep a record of all of their travel memories and find travel inspiration.',
        deploy: 'https://travel-guru.herokuapp.com/',
        github: 'https://github.com/Lucy-Quinn/Client-Travel-Guru',
        languages: 'ReactJS | MongoDB | Mongoose | Express | CSS3 | HTML5 | Postman | Heroku'
    },
]



const Carousel = () => {
    return (
        <div className="carousel">
            <CarouselContainer projects={projects} />
        </div>
    );
}

export default Carousel;