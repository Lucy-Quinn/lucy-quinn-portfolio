import React from 'react';
import { CardContainer, Card, CardImage } from './ProjectCard.styled'

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

