import styled from 'styled-components'
import { motion } from 'framer-motion'


export const Container = styled(motion.div)`
  position: absolute;
  top: 25vw;
  right: 3vw;
  width: 5vw;
  height: 20px;

  div#scroll-alert {
    display:flex;
    align-items: center;

    div#scroll-alert-icon {
      display:flex;
      align-items: center;
    }

    div#scroll-alert-text {
      margin-left: 4px;
    }
  }
`
