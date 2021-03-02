import styled from 'styled-components';

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
    @media(min-width: 1024px){
        height: 510px;
    }
`

export {
    CardContainer,
    Card,
    CardImage
}