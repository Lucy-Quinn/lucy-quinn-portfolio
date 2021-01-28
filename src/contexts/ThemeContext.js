import React, { createContext, useState } from 'react';

const ThemeContextProvider = (props) => {
    const [isLightTheme, setLightTheme] = useState(true);
    const [themes, setThemes] = useState({
        light: { primaryColor: '#493d6e', div: '#cec8ff', bodyCopy: '#818181', gradientOne: '#91CCFF', gradientTwo: '#CEC8FF' },
        dark: { primaryColor: '#FFFFFF', div: '#9fcaff', bodyCopy: '#c6c1cf', gradientOne: '#7576E8', gradientTwo: '#463E84', background: '#181227' }
    });

    const toggleTheme = () => {
        setLightTheme(!isLightTheme);
    }

    return (
        <ThemeContext.Provider value={{ themes, isLightTheme, toggleTheme }}>
            {props.children}

        </ThemeContext.Provider>
    );
}

export const ThemeContext = createContext();
export default ThemeContextProvider;