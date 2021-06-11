import styled from 'styled-components';
import { motion } from 'framer-motion';

const ThemeToggleButton = styled(motion.img)`
    cursor: pointer;
    @media(min-width: 1024px){
        height: 64px;
        width: 64px;
    }
`

export default ThemeToggleButton;