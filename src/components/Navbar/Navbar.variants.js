const toggleButtonVariants = {
    hidden: {
        rotate: 0,
        transition: {
            duration: 1,
        },
    },
    visible: {
        rotate: 90,
        transition: {
            duration: 1
        },
        delay: 2
    },
    hiddenExit: {
        rotate: 0,
        transition: {
            duration: 1
        }
    }
};

const cvVariants = {
    hover: {
        scale: 1.1,
        transition: { duration: 1 },
    }
}

const variantContainer = {
    hidden: {
        opacity: 0,
        type: 'tween',
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    },
    visible: {
        opacity: 1,
        type: 'tween',
        y: 0,
        transition: {
            duration: 0.5
        },
    }
};

const variants = {
    hidden: {
        y: -400,
        transition: {
            duration: 0.5
        }
    },
    visible: {
        y: 0,
        transition: {
            duration: 1
        }
    }
};

const backgroundVariants = {
    hidden: {
        opacity: 0,
        position: 'fixed'
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 2
        }
    },
    hiddenExit: {
        opacity: 0,
        transition: {
            duration: 2
        }
    }
}

export {
    toggleButtonVariants,
    cvVariants,
    variantContainer,
    variants,
    backgroundVariants
}