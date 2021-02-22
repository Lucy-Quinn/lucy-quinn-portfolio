const variantContainer = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        staggerChildren: 1,
    }
}
const variants = {
    hidden: {
        opacity: 0,
        x: 10
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.2 }
    }
}
const qualParentVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        staggerChildren: 1
    }
}

const qualChildVariants = {
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
    variantContainer,
    variants,
    qualParentVariants,
    qualChildVariants
}