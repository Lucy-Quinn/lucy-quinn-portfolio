import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import LightBulbLight from './../../images/light-bulb-light.svg';
import LightBulbDark from './../../images/light-bulb-dark.svg';


const ThemeToggle = () => {
    const { toggleTheme, isLightTheme } = useContext(ThemeContext);
    return (
        <div onClick={toggleTheme}>
            {isLightTheme ?
                <img src={LightBulbLight} alt="icon of light bulb" />
                :
                <img src={LightBulbDark} alt="icon of dark bulb" />
            }
        </div>
    );
}

export default ThemeToggle;

