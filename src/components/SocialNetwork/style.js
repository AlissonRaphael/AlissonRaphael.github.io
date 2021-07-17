import styled from "styled-components"
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: fixed;
  top: 43vw;
  left: 25vw;
  width: 50vw;
  height: 80px;

  display: flex;

  a#social-network {
    color: #fff;
    text-decoration: none;
    position: initial;
    padding: 1vw;
    cursor: pointer;
    z-index: 100;

    #social-network-title {
      display: flex;
      align-items: center;
      color: tomato;
      font-size: 1vw;
    
      svg {
        margin-right: 6px;
      }
    }

    #social-network-desc {
      margin-top: 6px;
      font-size: 0.6vw;
    }
  }
`
