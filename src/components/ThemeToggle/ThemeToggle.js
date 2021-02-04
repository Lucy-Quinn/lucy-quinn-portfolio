import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import LightBulbLight from './../../images/light-bulb-light.svg';
import LightBulbDark from './../../images/light-bulb-dark.svg';
import styled from 'styled-components';

//Styled Components
const ThemeToggleButton = styled.img`
    cursor: pointer;
`

const ThemeToggle = () => {
    const { toggleTheme, isLightTheme } = useContext(ThemeContext);
    return (
        <div onClick={toggleTheme}>
            {isLightTheme ?
                <ThemeToggleButton src={LightBulbLight} alt="icon of light bulb" />
                :
                <ThemeToggleButton src={LightBulbDark} alt="icon of dark bulb" />
            }
        </div>
    );
}

export default ThemeToggle;

