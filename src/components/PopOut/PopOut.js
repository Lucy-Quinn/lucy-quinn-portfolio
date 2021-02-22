import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { CardHeader, CardTitle, CardBody, Description, Languages, Background, PopoutContainer, PopoutCard } from './PopOut.styled';
import { motion } from "framer-motion";
import { background, popout } from './PopOut.variants';

const PopOut = ({ close, activeProject }) => {
    const { title, languages, text } = activeProject;

    //Theme context
    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;

    return (
        <motion.div initial="hidden" animate="visible" exit="hidden">
            <Background
                variants={background}
                onClick={close}
                transition={{ duration: 0.2 }}
            >
            </Background>
            <PopoutContainer>
                <PopoutCard variants={popout} >
                    <CardHeader>
                        <CardTitle isLightTheme={isLightTheme} theme={theme}>{title}</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Languages theme={theme}>{languages}</Languages>
                        <Description theme={theme}>{text}</Description>
                    </CardBody>
                </PopoutCard>
            </PopoutContainer>

        </motion.div>
    );
}

export default PopOut;
