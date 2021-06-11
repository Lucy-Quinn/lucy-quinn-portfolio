import React, { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ContactContainer, Icons, Div, Heading, ContactDetails, Tie, Socials, ArrowUp, Top, ReplacementDiv, ReplacementTitle, ReplacementContact, ReplacementSocial, ReplacementIcons, ReplacementArrow } from './Contact.styled.js';
import { motion } from 'framer-motion';
import { arrowVariants, upVariants, contactParentVariants, contactChildVariants, socialParentVariants, socialChildVariants, socialIconVariants } from './Contact.variants';

//Images
import ArrowUpLight from './../../images/button-arrow-up-light.svg';
import ArrowUpDark from './../../images/button-arrow-up-dark.svg';
import SkypeLight from './../../images/skype-light.svg';
import SkypeDark from './../../images/skype-dark.svg';
import LinkedinLight from './../../images/linkedin-light.svg';
import LinkedinDark from './../../images/linkedin-dark.svg';
import GithubLight from './../../images/github-light.svg';
import GithubDark from './../../images/github-dark.svg';


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
                        <Icons variants={contactChildVariants}>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/lucy-quinn/">
                                <motion.img variants={socialIconVariants} whileHover="hover" src={isLightTheme ? LinkedinLight : LinkedinDark} alt="icon of linkedin" />
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/Lucy-Quinn">
                                <motion.img variants={socialIconVariants} whileHover="hover" src={isLightTheme ? GithubLight : GithubDark} alt="icon of github" />
                            </a>
                            <a href="skype:live:.cid.1d6573efe4ce3449?chat">
                                <motion.img variants={socialIconVariants} whileHover="hover" src={isLightTheme ? SkypeLight : SkypeDark} alt="icon of skype" />
                            </a>
                        </Icons>
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
                            <ArrowUp src={isLightTheme ? ArrowUpLight : ArrowUpDark} alt="icon of arrow pointing up"
                                whileHover="hover"
                                variants={arrowVariants}
                            ></ArrowUp>
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