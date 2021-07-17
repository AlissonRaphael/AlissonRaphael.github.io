import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ButtonMenu = styled(motion.div)`

  width: 28px;
  height: 28px;
  cursor: pointer;
  position: relative;
  z-index: 100;

  div {
    position: absolute;
    top: 0;
    left: 0;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`