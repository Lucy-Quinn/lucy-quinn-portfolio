const variantContainer = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        staggerChildren: 1,
    },
};

const variants = {
    hidden: {
        opacity: 0,
        x: 10,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
    },
};

export {
    variantContainer,
    variants
};