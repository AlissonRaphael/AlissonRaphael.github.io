import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Bar = styled(motion.div)`
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgb(140,140,140);
  width: 5px;
  height: 300px;
`
