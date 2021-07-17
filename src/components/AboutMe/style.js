import styled from 'styled-components'
import { motion } from 'framer-motion'


export const Text = styled(motion.div)`
  position: fixed;
  top: 11.5vw;
  left: 23%;
  width: 33vw;

  p {
    font-size: 1.1vw;
    line-height: 1.45vw;
    text-align: justify;
    margin-bottom: 0.8vw;

    span {
      color: rgb(255, 99, 71);
    }
  }
`