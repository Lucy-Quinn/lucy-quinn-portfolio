import React, { useEffect } from "react";
import { Experience, School, Qualification } from "./Education.styled";
import useWindowSize from "../../hooks/useWindowSize";

const ExperienceCard = ({ data, qualChildVariants, isLightTheme, theme }) => {
    const { school, qualification } = data;
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
                    {school[0]}
                </School>
                <Qualification theme={theme} variants={qualChildVariants}>
                    {qualification.length > 1 ?
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                            {qualification.map(el => {
                                return <span>{el}</span>
                            })}
                        </div>
                        :
                        qualification[0]
                    }
                </Qualification>
                <School
                    isLightTheme={isLightTheme}
                    theme={theme}
                    variants={qualChildVariants}
                    style={{ width: '25%' }}
                >
                    {school[1]}
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
                {school.map((el, index) => {
                    return <span style={{ order: index }}>{el}</span>;
                })}
            </School>
            <Qualification theme={theme} variants={qualChildVariants}>
                {qualification}
            </Qualification>
        </Experience>
    );
};


export default ExperienceCard;