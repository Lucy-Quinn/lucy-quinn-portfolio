import React from "react";
import { Experience, School, Qualification } from "./Education.styled";
import useWindowSize from "../../hooks/useWindowSize";

const ExperienceCard = ({ data, qualChildVariants, isLightTheme, theme }) => {
    const { schoolArr, qualifications } = data;
    const { width } = useWindowSize();

    if (width > 768) {
        return (
            <Experience variants={qualChildVariants}>
                <School
                    isLightTheme={isLightTheme}
                    theme={theme}
                    variants={qualChildVariants}
                    style={{ width: '25%', textAlign: 'left' }}
                >
                    {schoolArr[0]}
                </School>
                <Qualification theme={theme} variants={qualChildVariants}>
                    {qualifications.length > 1 ?
                        <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                            {qualifications.map((qualification, index) => {
                                return <span key={index} >{qualification}</span>
                            })}
                        </span>
                        :
                        qualifications[0]
                    }
                </Qualification>
                <School
                    isLightTheme={isLightTheme}
                    theme={theme}
                    variants={qualChildVariants}
                    style={{ width: '25%' }}
                >
                    {schoolArr[1]}
                </School>
            </Experience>
        );
    }

    return (
        <Experience variants={qualChildVariants}>
            <School
                isLightTheme={isLightTheme}
                theme={theme}
                variants={qualChildVariants}
            >
                {schoolArr.map((school, index) => {
                    return <span key={index} >{school}</span>;
                })}
            </School>
            <Qualification theme={theme} variants={qualChildVariants}>
                {qualifications}
            </Qualification>
        </Experience>
    );
};


export default ExperienceCard;