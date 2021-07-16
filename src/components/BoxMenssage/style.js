import styled from "styled-components"
import { motion } from "framer-motion"

export const BoxContainer = styled(motion.div)`
  div.box {
    position: absolute;
    top: 11vw;
    left: 35vw;

    height: calc(260vw/9);
    width: calc(260vw/16);
    border: 4px solid tomato;
    border-right: none;

    ::before {
      content: '';
      position: absolute;
      top: -4px;
      right: -4px;
      height: 9vw;
      width: 4px;
      background-color: tomato;
    }

    ::after {
      content: '';
      position: absolute;
      bottom: -4px;
      right: -4px;
      height: 9vw;
      width: 4px;
      background-color: tomato;
    }
  }

  div.text {
    position: absolute;
    top: 20.6vw;
    right: 22vw;

    height: 12vw;
    width: 30vw;

    font-family: 'Poppins', sans-serif;

    p.hi {
      font-size: 6vw;
      line-height: 6vw;
      font-weight: 700;
      color: tomato;
    }

    p.desc {
      font-size: 1.5vw;
      font-weight: 100;
      margin-left: 10px;

      span {
        color: tomato;
      }
    }
  }
`