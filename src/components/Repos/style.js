import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FourthSection = styled(motion.div)`
  position: absolute;
  top: 250vh;
  left: 0;
  height: 200vh;
  width: 100vw;
`

export const Container = styled(motion.div)`
  margin-top: 5vw;
  margin-bottom: 10vw;
  padding-top: 5vw;
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`

export const Line = styled(motion.div)`
  position: absolute;
  top: 0vw;
  left: 50%;
  width: 1px;
  height: 100%;
  background-color: rgba(10,10,10,1);
`

export const MoreRepos = styled(motion.a)`
  margin-top: 10vw;
  max-width: 16vw;
  padding: 1.5vw 2vw;
  display: flex;
  align-items: center;
  background-color: rgba(20,20,20,1);
  border-radius: 0.3vw;
  z-index: 10;
  cursor: pointer;

  svg {
    font-size: 2vw;
  }

  span {
    margin-left: 1vw;
  }
`
