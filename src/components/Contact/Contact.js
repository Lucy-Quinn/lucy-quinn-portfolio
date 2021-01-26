import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import './Contact.css';

const Icon = styled.a`
    /* font-size: ${props => props.arrow ? '3rem' : '4rem'}; */
    font-size: 4rem;
    padding: 10px;
    /* &:visited,&:link { color: ${props => props.primary && 'red'}} */
`
const Arrow = styled.p`
    font-size: 1.6rem;
`
const ArrowBorder = styled.div`
  height: 54px;
  width: 56px;
  border: 1px solid black;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`



const Contact = () => {

    //Create a link so it is formatted to send an email
    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
        return <a href={`mailto:${email}${params}`}>{children}</a>;
    };

    return (
        <div id="contact">
            <div>
                <p>&lt;div&gt;</p>
                <h2>Contact Lucy</h2>
                <h3>+44(0)7894 274 470</h3>
                <h3>+34 634 328 672</h3>
                <h4>Spanish permanent residency (TIE)</h4>
                <h4>Follow me on socials and GitHub</h4>
            </div>

            <div>
                <Icon target="_blank" href="https://www.linkedin.com/in/lucy-quinn/">
                    <i class="fab fa-linkedin"></i>
                </Icon>
                <Icon target="_blank" href="https://github.com/Lucy-Quinn">
                    <i class="fab fa-github"></i>
                </Icon>
                <Icon target="_blank" href="https://www.linkedin.com/in/lucy-quinn/">
                    <i class="fab fa-skype"></i>
                </Icon>
                <Mailto email="lucy.quinn.uk@gmail.com" subject="Let's Talk" body="Hello world!">
                    <i class="fas fa-envelope"></i>
                </Mailto>
            </div>
            <div>
                <ArrowBorder>
                    <a href="#header">
                        <div className="arrow-up">
                            <Arrow>
                                &#8593;
                            </Arrow>
                        </div>
                    </a>
                </ArrowBorder>
                <a href="#header">
                    <h4>Back to top</h4>
                </a>
            </div>
        </div>

    );
}

export default Contact;