import React, { createContext, useState } from 'react';

const ThemeContextProvider = (props) => {
    const [isLightTheme, setLightTheme] = useState(true);
    const [themes, setThemes] = useState({
        light: { primaryColor: '#493d6e', div: '#cec8ff', bodyCopy: '#818181' },
        dark: { primaryColor: '#FFFFFF', div: '#9fcaff', bodyCopy: '#c6c1cf' }
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