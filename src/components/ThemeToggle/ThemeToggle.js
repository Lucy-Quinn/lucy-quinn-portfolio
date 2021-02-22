import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import LightBulbLight from './../../images/light-bulb-light.svg';
import LightBulbDark from './../../images/light-bulb-dark.svg';
import styled from 'styled-components';
import './ThemeToggle.css'
import { motion } from 'framer-motion';

//Styled Components
const ThemeToggleButton = styled(motion.img)`
    cursor: pointer;

`

const toggleThemeVariants = {
    hidden: {
        rotate: 0
    },
    visible: {
        rotate: 45

    },
    hover: {
        scale: 1.2,
        transition: { duration: 1 },
    }
}

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
