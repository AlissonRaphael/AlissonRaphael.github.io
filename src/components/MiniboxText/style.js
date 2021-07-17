import styled from "styled-components"
import { motion } from "framer-motion"


export const Container = styled(motion.div)`
  
  div#minibox {
    position: fixed;
    top: 16vw;

    height: 40px;
    width: 12vw;
    max-width: 240px;

    div {
      display: flex;
      align-items: center;
      
      #text {
        margin-right: 7px;
        white-space: nowrap;
        font-size: 0.7vw;
        font-weight: 700;
        flex-grow: 2;
        
      }

      #bar {
        flex-grow: 1;
        height: 1px;
        width: 100%;
        background-color: tomato;
      }
    }

    p {
      margin-top: 3px;
      font-size: 0.7vw;
      font-weight: 100;
      text-align: justify;

    }
  }

  div#minibox.firstbox {
    right: 27vw;
  }

  div#minibox.secondbox{
    right: 10vw;
  }

`
