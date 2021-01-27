import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import LightBulb from './../../images/button-light-bulb.svg';

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div onClick={toggleTheme}>
            <img src={LightBulb} alt="icon of light bulb" />
        </div>
    );
}

export default ThemeToggle;

