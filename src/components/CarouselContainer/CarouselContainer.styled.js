import styled from 'styled-components';
import Slick from "react-slick";
import ArrowLeft from './../../images/button-arrow-left.svg'
import ArrowRight from './../../images/button-arrow-right.svg'

//Styled Components
const ProjectLinks = styled.div`
    display: flex;
    left: 200px;
    bottom: 42px;
    & > a{
        margin: 10px;
        cursor: pointer;  
    }
    & > a:first-child{
        font-size: 1.5rem;
        color: ${({ theme }) => theme.primaryColor};
    }
    & > a > img{
        height: 28px;
        width: auto;
    }
`
const Button = styled.button`
    border-radius: 17px;
    box-shadow: ${({ isLightTheme, theme }) => isLightTheme ? '0 1px 6px #d5d5d5' : null};
    border: none;
    padding: 10px 11px;
    background: ${({ isLightTheme, theme }) => isLightTheme ? 'white' : theme.primaryColor};
    color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.languages};
    width: 153px;
    cursor: pointer;
    margin: 5px 0 8px 0;
    @media(min-width: 1024px){
        font-size: 1.2rem;
    }
`

const ProjectLinksContainer = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 107px;
`

//React Slick styling
const Projects = styled(Slick)`
.slick-prev {
    left: 66px;
    top: 103%;
}

.slick-next {
    right: 66px;
    top: 103%;
}

.slick-prev:before{
    width: 46px;
    height: 46px;
    left: -13px;
    top: 16%;
    content: '' !important;
    position: absolute;
    background-image: url(${ArrowLeft});
    background-repeat: no-repeat;
    vertical-align: middle;
    background-size: 46px;
    opacity: 1 !important;
}

.slick-next:before{
    width: 46px;
    height: 46px;
    right: -13px;
    top: 16%;
    content: '' !important;
    position: absolute;
    background-image: url(${ArrowRight});
    background-repeat: no-repeat;
    vertical-align: middle;
    background-size: 46px;
    opacity: 1 !important;
}

.slick-dots{
    bottom: -40px;
}

.slick-dots li button:before {
    color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.bodyCopy};
}

.slick-dots li.slick-active button:before {
    color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
}
`

export {
    ProjectLinks,
    Button,
    ProjectLinksContainer,
    Projects
}