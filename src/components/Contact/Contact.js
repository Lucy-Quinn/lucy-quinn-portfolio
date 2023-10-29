import React, { useContext, useRef } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
  ContactContainer,
  Icons,
  Div,
  Heading,
  ContactDetails,
  Tie,
  Socials,
  ArrowUp,
  Top,
  ReplacementDiv,
  ReplacementTitle,
  ReplacementContact,
  ReplacementSocial,
  ReplacementIcons,
  ReplacementArrow,
} from "./Contact.styled.js";
import { motion } from "framer-motion";
import {
  arrowVariants,
  upVariants,
  contactParentVariants,
  contactChildVariants,
  socialParentVariants,
  socialChildVariants,
  socialIconVariants,
} from "./Contact.variants";
import { LINKS } from "../../const";

//Images
import ArrowUpLight from "./../../images/button-arrow-up-light.svg";
import ArrowUpDark from "./../../images/button-arrow-up-dark.svg";
import SkypeLight from "./../../images/skype-light.svg";
import SkypeDark from "./../../images/skype-dark.svg";
import LinkedinLight from "./../../images/linkedin-light.svg";
import LinkedinDark from "./../../images/linkedin-dark.svg";
import GithubLight from "./../../images/github-light.svg";
import GithubDark from "./../../images/github-dark.svg";
import { useScroll } from "../../hooks/useScroll";

const Contact = () => {
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;

  //Create a link so it is formatted to send an email
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  const divRef = useRef(null);
  const titleRef = useRef(null);
  const contactRef = useRef(null);
  const socialRef = useRef(null);
  const iconsRef = useRef(null);
  const arrowRef = useRef(null);

  const divReplacementRef = useRef(null);
  const titleReplacementRef = useRef(null);
  const contactRefReplacementRef = useRef(null);
  const socialRefReplacementRef = useRef(null);
  const iconsRefReplacementRef = useRef(null);
  const arrowRefReplacementRef = useRef(null);

  return (
    <div style={{ background: theme.background }}>
      <ContactContainer
        style={{
          padding: "10px",
          background: `linear-gradient(
                  180deg
                  , ${theme.gradientTwo} 0%, ${theme.gradientOne} 100%`,
        }}
        id="contact"
        variants={contactParentVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          {useScroll(divRef, divReplacementRef) ? (
            <Div
              isLightTheme={isLightTheme}
              theme={theme}
              variants={contactChildVariants}
              ref={divRef}
            >
              &lt;div&gt;
            </Div>
          ) : (
            <ReplacementDiv ref={divReplacementRef} />
          )}

          {useScroll(titleRef, titleReplacementRef) ? (
            <Heading
              theme={theme}
              variants={contactChildVariants}
              ref={titleRef}
            >
              Contact Lucy
            </Heading>
          ) : (
            <ReplacementTitle ref={titleReplacementRef} />
          )}

          {useScroll(contactRef, contactRefReplacementRef) ? (
            <motion.div
              variants={contactParentVariants}
              initial="hidden"
              animate="visible"
              ref={contactRef}
            >
              <ContactDetails theme={theme} variants={contactChildVariants}>
                +34 697 476 263
              </ContactDetails>
            </motion.div>
          ) : (
            <ReplacementContact ref={contactRefReplacementRef} />
          )}

          {useScroll(socialRef, socialRefReplacementRef) ? (
            <motion.div
              variants={socialParentVariants}
              initial="hidden"
              animate="visible"
            >
              <Mailto
                theme={theme}
                email="lucy.quinn.uk@gmail.com"
                subject="Let's Talk"
                body="Hello world!"
                variants={socialChildVariants}
              >
                <ContactDetails theme={theme} ref={socialRef}>
                  lucy.quinn.uk@gmail.com
                </ContactDetails>
              </Mailto>
              <Tie theme={theme} variants={socialChildVariants}>
                Spanish permanent residency (TIE)
              </Tie>
            </motion.div>
          ) : (
            <ReplacementSocial ref={socialRefReplacementRef} />
          )}
        </div>

        {useScroll(iconsRef, iconsRefReplacementRef) ? (
          <motion.div
            variants={contactParentVariants}
            initial="hidden"
            animate="visible"
            ref={iconsRef}
          >
            <Socials theme={theme} variants={contactChildVariants}>
              Follow me on socials and GitHub
            </Socials>
            <Icons variants={contactChildVariants}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={LINKS["linkedIn"]}
              >
                <motion.img
                  variants={socialIconVariants}
                  whileHover="hover"
                  src={isLightTheme ? LinkedinLight : LinkedinDark}
                  alt="icon of linkedin"
                />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={LINKS["gitHub"]}
              >
                <motion.img
                  variants={socialIconVariants}
                  whileHover="hover"
                  src={isLightTheme ? GithubLight : GithubDark}
                  alt="icon of github"
                />
              </a>
              <a href={LINKS["skype"]}>
                <motion.img
                  variants={socialIconVariants}
                  whileHover="hover"
                  src={isLightTheme ? SkypeLight : SkypeDark}
                  alt="icon of skype"
                />
              </a>
            </Icons>
          </motion.div>
        ) : (
          <ReplacementIcons ref={iconsRefReplacementRef} />
        )}

        {useScroll(arrowRef, arrowRefReplacementRef) ? (
          <motion.div
            variants={contactParentVariants}
            initial="hidden"
            animate="visible"
            ref={arrowRef}
          >
            <a href="#navbar">
              <ArrowUp
                src={isLightTheme ? ArrowUpLight : ArrowUpDark}
                alt="icon of arrow pointing up"
                whileHover="hover"
                variants={arrowVariants}
              ></ArrowUp>
              <Top theme={theme} href="#navbar">
                <motion.h4 whileHover="hover" variants={upVariants}>
                  Back to top
                </motion.h4>
              </Top>
            </a>
          </motion.div>
        ) : (
          <ReplacementArrow ref={arrowRefReplacementRef} />
        )}
      </ContactContainer>
    </div>
  );
};

export default Contact;
