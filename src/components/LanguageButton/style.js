import styled from 'styled-components'
import { motion } from 'framer-motion'


export const ButtonContainer = styled.a`
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: lowercase;
  text-decoration: none;
  margin-right: 24px;
  background-color: none;
  border: none;
  cursor: pointer;
  position: relative;


  span.text {
    z-index: 1;
  }

`

export const ButtonAnimation = styled(motion.div)`
  position: absolute;
  bottom: -2px;
  left: 0;
  z-index: -1;
  height: 12px;
  background-color: tomato;
  width: 12px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const OutlineButton = styled.span`
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 1px;
  background-color: #fff;
  width: 90%;

`


