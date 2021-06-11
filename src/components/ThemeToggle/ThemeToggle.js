import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import LightBulbLight from './../../images/light-bulb-light.svg';
import LightBulbDark from './../../images/light-bulb-dark.svg';
import ThemeToggleButton from './ThemeToggle.styled';
import toggleThemeVariants from './ThemeToggle.variants';

const ThemeToggle = () => {
    const { toggleTheme, isLightTheme } = useContext(ThemeContext);
    const [isToggled, setIsToggle] = useState(false);

    const handleToggleTheme = () => {
        toggleTheme()
        setIsToggle(!isToggled)
    }
    return (
        <div onClick={handleToggleTheme}
        >
            <ThemeToggleButton
                variants={toggleThemeVariants}
                whileHover="hover"
                animate={isToggled ? "visible" : "hidden"}
                src={isLightTheme ? LightBulbLight : LightBulbDark} alt="icon of light bulb"
            />
        </div>
    );
}

export default ThemeToggle;
