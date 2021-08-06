import styled from 'styled-components'
import { motion } from 'framer-motion'


export const Button = styled.a`
  margin-bottom: 0.5vw;
  font-size: 2vw;
  text-transform: lowercase;
  text-decoration: none;
  background-color: none;
  border: none;
  cursor: pointer;
  position: relative;

  span.text {
    z-index: 300;
  }
`

export const ButtonAnimation = styled(motion.div)`
  position: absolute;
  bottom: 0.4vw;
  left: 0;
  z-index: -1;
  height: 1.15vw;
  background-color: tomato;
  width: 5vw;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
