import React, { useContext } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import './Contact.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import ArrowUpLight from './../../images/button-arrow-up-light.svg';
import ArrowUpDark from './../../images/button-arrow-down-dark.svg';

import SkypeLight from './../../images/skype-light.svg';
import SkypeDark from './../../images/skype-dark.svg';
import LinkedinLight from './../../images/linkedin-light.svg';
import LinkedinDark from './../../images/linkedin-dark.svg';
import GithubLight from './../../images/github-light.svg';
import GithubDark from './../../images/github-dark.svg';



//Styled components

const Icons = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 25px 0 20px 0;
`

const ArrowUp = styled.img`
`

const Div = styled.p`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  margin: 50px 0 0 0;
`

const Heading = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
`
const Number = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
`

const Tie = styled.p`
  color: ${({ theme }) => theme.primaryColor};
`

const Socials = styled.p`
  color: ${({ theme }) => theme.primaryColor};
  margin: 50px 0 0 0;
`

const Top = styled.p`
  color: ${({ theme }) => theme.primaryColor};
  margin: 0 0 75px 0;
  font-weight: 300;
  & > h4 {
        font-weight: 300;
        margin: 5px 0 0 0;
    }
`

const Contact = () => {
    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;

    //Create a link so it is formatted to send an email
    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
        return <a href={`mailto:${email}${params}`}>{children}</a>;
    };

    return (
        <div style={{
            padding: '10px',
            background: `linear-gradient(
                  180deg
                  , ${theme.gradientTwo} 0%, ${theme.gradientOne} 100%`
        }} id="contact">
            <div>
                <Div isLightTheme={isLightTheme} theme={theme}>&lt;div&gt;</Div>
                <Heading theme={theme}>Contact Lucy</Heading>
                <Number theme={theme}>+44(0)7894 274 470</Number>
                <Number theme={theme}>+34 634 328 672</Number>
                <Tie theme={theme}>Spanish permanent residency (TIE)</Tie>
                <Socials theme={theme}>Follow me on socials and GitHub</Socials>
            </div>

            <div>
                {isLightTheme ?
                    (
                        <Icons>
                            <a target="_blank" href="https://www.linkedin.com/in/lucy-quinn/">
                                <img src={LinkedinLight} alt="a> of linkedin" />
                            </a>
                            <a target="_blank" href="https://github.com/Lucy-Quinn">
                                <img src={GithubLight} alt="a> of github" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/lucy-quinn/">
                                <img src={SkypeLight} alt="a> of skype" />

                            </a>
                        </Icons>
                    ) :
                    (
                        <Icons>

                            <a target="_blank" href="https://www.linkedin.com/in/lucy-quinn/">
                                <img src={LinkedinDark} alt="a> of linkedin" />
                            </a>
                            <a target="_blank" href="https://github.com/Lucy-Quinn">
                                <img src={GithubDark} alt="a> of github" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/lucy-quinn/">
                                <img src={SkypeDark} alt="a> of skype" />
                            </a>
                        </Icons>
                    )
                }

            </div>
            <div>
                <a href="#header">
                    {isLightTheme ?
                        <ArrowUp src={ArrowUpLight} alt="a> of arrow pointing up"></ArrowUp>
                        :
                        <ArrowUp src={ArrowUpDark} alt="a> of arrow pointing up"></ArrowUp>
                    }
                </a>
                <Top theme={theme} href="#header">
                    <h4>Back to top</h4>
                </Top>
            </div>
        </div>

    );
}

export default Contact;