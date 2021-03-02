const headerParentVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 2.5,
            type: 'tween',
            ease: 'easeIn',
            staggerChildren: 0.2
        }
    }
}

const headerChildVariants = {
    hidden: {
        opacity: 0,
        y: '50px',
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

const languageParentVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            type: 'tween',
            ease: 'easeIn',
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
}

const languageChildVariants = {
    hidden: {
        opacity: 0,
        y: '10px',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

const arrowVariants = {
    hover: {
        y: '10px'
    }
}

export {
    headerParentVariants,
    headerChildVariants,
    languageParentVariants,
    languageChildVariants,
    arrowVariants
}