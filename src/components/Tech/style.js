import styled from 'styled-components'
import { motion } from 'framer-motion'


export const Item = styled(motion.div)`
  display: grid;
  grid-template-columns: 20% 80%;
  border-radius: 0.15vw;
  padding: 0.4vw;

  z-index: 100;

  min-width: 8.3vw;
  align-items: center;

  #item-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      filter: invert(1)
    }
  }

  #item-desc {
    margin-left: 0.4vw;
    display: flex;
    flex-direction: column;

    #item-name {
      font-size: 0.8vw;
    }

    #item-type {
      font-size: 0.5vw;
    }
  }

`