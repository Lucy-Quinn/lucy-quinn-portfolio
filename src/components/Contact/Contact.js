import React, { useContext, useState, useEffect, useRef } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

//Images
import ArrowUpLight from './../../images/button-arrow-up-light.svg';
import ArrowUpDark from './../../images/button-arrow-up-dark.svg';
import SkypeLight from './../../images/skype-light.svg';
import SkypeDark from './../../images/skype-dark.svg';
import LinkedinLight from './../../images/linkedin-light.svg';
import LinkedinDark from './../../images/linkedin-dark.svg';
import GithubLight from './../../images/github-light.svg';
import GithubDark from './../../images/github-dark.svg';

//Styled components
const ContactContainer = styled(motion.div)`
    padding: 12px;
    border-radius: 50% 50% 0 0  / 70px;
`

const Icons = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    margin: 25px 0 20px 0;
`

const Div = styled(motion.p)`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  margin: 50px 0 0 0;
`

const Heading = styled(motion.h2)`
  color: ${({ theme }) => theme.primaryColor};
  margin: 8px 0 25px 0;
`

const ContactDetails = styled(motion.h2)`
  color: ${({ theme }) => theme.primaryColor};
  margin: 10px 0 0 0;
  font-weight: 300;
`

const Tie = styled(motion.p)`
  color: ${({ theme }) => theme.primaryColor};
`

const Socials = styled(motion.p)`
  color: ${({ theme }) => theme.primaryColor};
  margin: 50px 0 0 0;
`

const Top = styled(motion.div)`
  margin: 0 0 75px 0;
  font-weight: 300;
  & > h4 {
        font-weight: 300;
        margin: 5px 0 0 0;
        color: ${({ theme }) => theme.primaryColor};
    }
`

const ReplacementDiv = styled.div`
  height: 24px;
  width: auto;
`
const ReplacementTitle = styled.div`
  height: 32px;
  width: auto;
`
const ReplacementContact = styled.div`
  height: 74px;
  width: auto;
`
const ReplacementSocial = styled.div`
  height: 68px;
  width: auto;
`
const ReplacementIcons = styled.div`
  height: 109px;
  width: auto;
`
const ReplacementArrow = styled.div`
  height: 115px;
  width: auto;
`
//Variants
const arrowVariants = {
    hover: {
        y: '-10px'
    }
}

const upVariants = {
    hover: {
        scale: 1.2
    }
}

const contactParentVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        staggerChildren: 2
    }
}

const contactChildVariants = {
    hidden: {
        opacity: 0,
        x: 10
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 }
    }
}

const socialParentVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        staggerChildren: 3
    }
}

const socialChildVariants = {
    hidden: {
        opacity: 0,
        x: 10
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 }
    }
}


const Contact = () => {
    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;

    const [isScrollDiv, setIsScrollDiv] = useState(false);
    const [isScrollTitle, setIsScrollTitle] = useState(false);
    const [isScrollContact, setIsScrollContact] = useState(false);
    const [isScrollSocial, setIsScrollSocial] = useState(false);
    const [isScrollIcons, setIsScrollIcons] = useState(false);
    const [isScrollArrow, setIsScrollArrow] = useState(false);

    //Create a link so it is formatted to send an email
    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
        return <a href={`mailto:${email}${params}`}>{children}</a>;
    };

    const divRef = useRef(null)
    const titleRef = useRef(null)
    const contactRef = useRef(null)
    const socialRef = useRef(null)
    const iconsRef = useRef(null)
    const arrowRef = useRef(null)

    const divReplacementRef = useRef(null);
    const titleReplacementRef = useRef(null);
    const contactRefReplacementRef = useRef(null);
    const socialRefReplacementRef = useRef(null);
    const iconsRefReplacementRef = useRef(null);
    const arrowRefReplacementRef = useRef(null);

    useEffect(() => {
        const isOnScreen = (ref) => {
            const isOffsetBottom = window.pageYOffset + window.innerHeight - 30 >= ref.current?.offsetTop;
            const isOffsetTop = window.pageYOffset < ref.current?.offsetTop + ref.current?.offsetHeight;

            return isOffsetBottom && isOffsetTop;
        };

        function handleScroll() {
            if (isOnScreen(divReplacementRef)) setIsScrollDiv(true)
            if (isOnScreen(titleReplacementRef)) setIsScrollTitle(true)
            if (isOnScreen(contactRefReplacementRef)) setIsScrollContact(true)
            if (isOnScreen(socialRefReplacementRef)) setIsScrollSocial(true)
            if (isOnScreen(iconsRefReplacementRef)) setIsScrollIcons(true)
            if (isOnScreen(arrowRefReplacementRef)) setIsScrollArrow(true)

            if (divReplacementRef && !isOnScreen(divRef)) setIsScrollDiv(false);
            if (titleReplacementRef && !isOnScreen(titleRef)) setIsScrollTitle(false);
            if (contactRefReplacementRef && !isOnScreen(contactRef)) setIsScrollContact(false);
            if (socialRefReplacementRef && !isOnScreen(socialRef)) setIsScrollSocial(false);
            if (iconsRefReplacementRef && !isOnScreen(iconsRef)) setIsScrollIcons(false);
            if (arrowRefReplacementRef && !isOnScreen(arrowRef)) setIsScrollArrow(false);
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <div style={{ background: theme.background }}>
            <ContactContainer style={{
                padding: '10px',
                background: `linear-gradient(
                  180deg
                  , ${theme.gradientTwo} 0%, ${theme.gradientOne} 100%`
            }} id="contact"
                variants={contactParentVariants}
                initial="hidden"
                animate="visible">
                <div>

                    {isScrollDiv ?
                        <Div isLightTheme={isLightTheme} theme={theme} variants={contactChildVariants}
                            ref={divRef}
                        >&lt;div&gt;</Div>
                        :
                        <ReplacementDiv
                            ref={divReplacementRef}
                        />
                    }
                    {isScrollTitle ?
                        <Heading theme={theme} variants={contactChildVariants}
                            ref={titleRef}
                        >Contact Lucy</Heading>
                        :
                        <ReplacementTitle
                            ref={titleReplacementRef}
                        />
                    }
                    {isScrollContact ?
                        <motion.div variants={contactParentVariants} initial="hidden"
                            animate="visible"
                            ref={contactRef}
                        >
                            <ContactDetails theme={theme} variants={contactChildVariants}>+44(0)7894 274 470</ContactDetails>
                            <ContactDetails theme={theme} variants={contactChildVariants}>+34 634 328 672</ContactDetails>
                        </motion.div>
                        :
                        <ReplacementContact
                            ref={contactRefReplacementRef}
                        />
                    }
                    {isScrollSocial ?
                        <motion.div variants={socialParentVariants}
                            initial="hidden"
                            animate="visible"

                        >
                            <Mailto theme={theme} email="lucy.quinn.uk@gmail.com" subject="Let's Talk" body="Hello world!" variants={socialChildVariants}>
                                <ContactDetails theme={theme} ref={socialRef}>lucy.quinn.uk@gmail.com</ContactDetails>
                            </Mailto>
                            <Tie theme={theme} variants={socialChildVariants}>Spanish permanent residency (TIE)</Tie>

                        </motion.div>
                        :
                        <ReplacementSocial
                            ref={socialRefReplacementRef}
                        />
                    }
                </div>

                {isScrollIcons ?
                    <motion.div variants={contactParentVariants}
                        initial="hidden"
                        animate="visible"
                        ref={iconsRef}
                    >
                        <Socials theme={theme} variants={contactChildVariants}>Follow me on socials and GitHub</Socials>
                        {isLightTheme ?
                            (
                                <Icons variants={contactChildVariants}>
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/lucy-quinn/">
                                        <img src={LinkedinLight} alt="icon of linkedin" />
                                    </a>
                                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/Lucy-Quinn">
                                        <img src={GithubLight} alt="icon of github" />
                                    </a>
                                    <a href="skype:live:.cid.1d6573efe4ce3449?chat">
                                        <img src={SkypeLight} alt="icon of skype" />
                                    </a>
                                </Icons>
                            ) :
                            (
                                <Icons variants={contactChildVariants}>
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/lucy-quinn/">
                                        <img src={LinkedinDark} alt="icon of linkedin" />
                                    </a>
                                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/Lucy-Quinn">
                                        <img src={GithubDark} alt="icon of github" />
                                    </a>
                                    <a href="skype:live:.cid.1d6573efe4ce3449?chat">
                                        <img src={SkypeDark} alt="icon of skype" />
                                    </a>
                                </Icons>
                            )
                        }
                    </motion.div>
                    :
                    <ReplacementIcons
                        ref={iconsRefReplacementRef}
                    />
                }
                {isScrollArrow ?
                    <motion.div variants={contactParentVariants}
                        initial="hidden"
                        animate="visible"
                        ref={arrowRef}
                    >
                        <a href="#navbar">
                            {isLightTheme ?
                                <motion.img src={ArrowUpLight} alt="icon of arrow pointing up"
                                    whileHover="hover"
                                    variants={arrowVariants}
                                ></motion.img>
                                :
                                <motion.img src={ArrowUpDark} alt="icon of arrow pointing up"
                                    whileHover="hover"
                                    variants={arrowVariants}
                                ></motion.img>
                            }
                            <Top theme={theme} href="#navbar">
                                <motion.h4
                                    whileHover="hover"
                                    variants={upVariants}
                                >Back to top</motion.h4>
                            </Top>
                        </a>

                    </motion.div>
                    :
                    <ReplacementArrow
                        ref={arrowRefReplacementRef}
                    />
                }

            </ContactContainer>
        </div>
    );
}

export default Contact;