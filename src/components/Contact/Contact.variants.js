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

export {
    arrowVariants,
    upVariants,
    contactParentVariants,
    contactChildVariants,
    socialParentVariants,
    socialChildVariants
}