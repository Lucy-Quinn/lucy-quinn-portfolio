const variantContainer = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        // when: "beforeChildren",
        staggerChildren: 1
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
        transition: { duration: 1 }
    }
}


const carouselVariants = {
    hidden: {
        opacity: 0,
        x: 10,
        transition: { duration: 2 }

    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 3 }
    }
}

export {
    variantContainer,
    variants,
    carouselVariants
};