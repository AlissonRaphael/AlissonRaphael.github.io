import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 290;
  background-color: rgba(0,0,0,1);

  display: flex;
  align-items: center;
  justify-content: center;


`

export const MenuDiv = styled(motion.div)`
  position: relative;
  max-width: 30vw;

  display: flex;
  flex-direction: column;
`

export const AnimationDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 290;
  background-color: tomato;
`
