import React from 'react';
import styled from 'styled-components';

//Cards styling
const CardContainer = styled.figure`
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin: 0 auto;
    min-width: 230px;
    max-width: 338px;
    width: 100%;
    height: 100%;
`
const Card = styled.div`
    padding: 0;
    height: 100%;
`
const CardImage = styled.img`
    width: auto;
    height: 350px;
    margin: 0 auto;
`

const ProjectCard = ({ project }) => {
    const { imageAlt } = project;
    const { image } = project.image;
    return (
        <CardContainer>
            <Card>
                <CardImage src={image} alt={imageAlt}>
                </CardImage>
            </Card>
        </CardContainer>
    )
}

export default ProjectCard;

