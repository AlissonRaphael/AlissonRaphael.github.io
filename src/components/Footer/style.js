import styled from 'styled-components'
import { motion } from 'framer-motion'


export const Container = styled(motion.div)`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  background-color: rgba(0,0,0,0.2);
  z-index: 2;

  display: flex;
  flex-direction: column;
  padding: 6vw 6vw 3vw 6vw;
  align-items: center;
  justify-content: center;


  #footer-menus {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 4vw;

    h4 {
      margin-bottom: 0.4vw;
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;

      li.text-footer {
        max-width: 20vw;
        font-size: 0.8vw;
        text-align: justify;
        color: rgba(255,255,255,0.3);
        padding: 0.7vw 0.1vw;
        display: flex;
        align-items: center;

        span {
          margin-left: 0.6vw;
        }
      }

      li a {
        padding: 0.7vw 0.1vw;
        font-size: 1vw;
        display: flex;
        align-items: center;

        svg {
        font-size: 1.2vw;

        }
  
        span {
          margin-left: 0.6vw;
        }
      }
    }
  }

  #footer-bottom {
    padding-top: 0.8vw;
    font-size: 0.8vw;
    width: 100%;
    position: relative;
    
    ::before {
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: 1px;
      background-color: rgb(50,50,50);
    }
  }
`
