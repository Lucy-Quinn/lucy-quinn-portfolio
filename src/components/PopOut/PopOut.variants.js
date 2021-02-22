const background = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const popout = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
};

export { background, popout }