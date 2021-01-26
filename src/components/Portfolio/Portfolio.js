import React, { useState } from 'react';
import VideoStore from './../../images/the-video-store.png';
import SimpleSteps from './../../images/simple-steps.png';
import TravelGuru from './../../images/travel-guru.png';



const Portfolio = () => {

    const [projects, useProjects] = useState([
        <img src={VideoStore} alt="sample of the video store project" />,
        <img src={SimpleSteps} alt="sample of the simple steps project" />,
        <img src={TravelGuru} alt="sample of the travel guru project" />
    ])
    return (
        <div id="portfolio">
            <p>&lt;div&gt;</p>
            <h2>My Portfolio</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit neque, nobis illum quibusdam in sit odit asperiores aliquam sed aut, placeat magni repellendus non, vero dolores. Enim nemo neque quidem.</p>
            {projects.map((project) => {
                return <div>{project}</div>
            })}
        </div>
    );
}

export default Portfolio;
