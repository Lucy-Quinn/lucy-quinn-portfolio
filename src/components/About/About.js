import React from 'react';
import Lucy from './../../images/lucy.jpg';
import './about.css';

const About = () => {
    return (
        <div id="#about">
            <img className="lucy" src={Lucy} alt="portrait of Lucy" />
            <p>div</p>
            <h2>About Lucy</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut explicabo quasi consequuntur, eos recusandae magnam, temporibus itaque illum quo quibusdam fugit nobis quos animi, ut dolorem perspiciatis suscipit aliquid atque?</p>
        </div>
    );
}

export default About;