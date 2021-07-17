import styled from "styled-components"
import { motion } from "framer-motion"

export const PhotoContainer = styled(motion.div)`
  position: fixed;
  top: 7vw;
  left: 12vw;

  height: calc(350vw/9);
  width: calc(350vw/16);
  background-size: cover;
  background-position: 50% 50%;
  z-index: -1;

  animation-name: brilho;
  animation-duration: .8s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes brilho {
    0%  { filter: brightness(100%) }
    10%  { filter: brightness(80%) }
    20%  { filter: brightness(110%) }
    30%  { filter: brightness(100%) }
    40%  { filter: brightness(140%) }
    50%  { filter: brightness(70%) }
    60%  { filter: brightness(120%) }
    70%  { filter: brightness(100%) }
    80%  { filter: brightness(100%) }
    90% { filter: brightness(100%) }
    100% { filter: brightness(120%) }
  }
`
