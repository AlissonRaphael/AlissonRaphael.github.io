import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 75vw;
  display: flex;
  flex-direction: column;

  div#left-item, div#right-item {
    position: relative;
    max-width: 30vw;
    min-width: 30vw;
    flex: 1;
    display: flex;

    span#line {
      position: absolute;
      top: 4.8vw;
      width: 7.5vw;
      height: 1px;
      background-color: rgba(10,10,10,1);
    }

    span#circle {
      position: absolute;
      top: 3.9vw;
      width: 2vw;
      height: 2vw;
      border: 0.5vw solid black;
      background-color: rgba(10,10,10,1);
      border-radius: 50%;
      z-index: -1;
    }
  }

  div#left-item {
    align-self: flex-start;
    span#line { right: -7.5vw; }
    span#circle { right: -8.5vw; }
  }

  div#right-item {
    align-self: flex-end;
    span#line { left: -7.5vw; }
    span#circle { left: -8.5vw; }
  }
`

export const Item = styled(motion.a)`
  flex: 1;
  font-size: 0.8vw;
  padding: 2vw 3vw;
  background-color: rgba(100,100,100,0.05);
  border-radius: 0.5vw;
  z-index: 10;
`

export const Title = styled(motion.h3)`
  margin-bottom: 0.5vw;
  font-size: 1vw;
  text-shadow: 1px 2px 2px black;
  color: rgba(120,120,120,1);
`

export const Description = styled(motion.p)`
  margin-bottom: 0.5vw;
  text-align: justify;
  color: rgba(80,80,80,1);
`

export const Footer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`

export const Language = styled(motion.span)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span {
    margin-right: 0.4vw;
  }
`

export const License = styled(motion.span)`

`
