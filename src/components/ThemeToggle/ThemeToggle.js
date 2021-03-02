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
            {isLightTheme ?
                <ThemeToggleButton
                    variants={toggleThemeVariants}
                    whileHover="hover"
                    animate={isToggled ? "visible" : "hidden"}
                    src={LightBulbLight} alt="icon of light bulb" />
                :
                <ThemeToggleButton
                    variants={toggleThemeVariants}
                    whileHover="hover"
                    animate={isToggled ? "visible" : "hidden"}

                    src={LightBulbDark} alt="icon of dark bulb" />
            }
        </div>
    );
}


export default ThemeToggle;
