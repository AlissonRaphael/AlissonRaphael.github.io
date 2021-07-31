import styled from 'styled-components'
import { motion } from 'framer-motion'


export const Frame = styled(motion.div)`
  position: fixed;
  top: 0px;
  left: 0px;

  border: 4px solid #fff;
  z-index: 10;
`

export const Title = styled(motion.h1)`
  position: fixed;
  top: 10vw;
  font-size: 2.7vw;
`

export const Quote = styled(motion.div)`
  position: fixed;
  top: 6vw;
  left: 75.5vw;
  z-index: 11;

  svg {
    color: rgb(255, 99, 71);
    width: 4.5vw;
    height: 4.5vw;
  }
`
