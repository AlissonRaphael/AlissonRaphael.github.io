import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { BoxContainer } from './style.js'
import MyContext from '../../MyContext.js'

const boxVariants = {
  hidden: {
    x: -230,
    opacity: 0,
    scaleX: 0
  },
  show: {
    x: 0,
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 2
    }
  },
  exit: {
    x: -230,
    opacity: 0,
    scaleX: 0,
    transition: {
      duration: 1,
      type: 'tween',
      ease: 'anticipate'
    }
  }
}

const textVariants = {
  hidden: {
    x: -320,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2.5
    }
  },
  exit: {
    x: -320,
    opacity: 0,
    transition: {
      duration: 1,
      type: 'tween',
      ease: 'anticipate'
    }
  }
}

export default function BoxMenssage(){
  const { firstSectionRender } = useContext(MyContext)

  return (
    <BoxContainer>
      <AnimatePresence>
        { firstSectionRender &&
          <motion.div
            className='box'
            variants={boxVariants}
            initial='hidden'
            animate='show'
            exit='exit'
            key='box'
          ></motion.div>
        }

        { firstSectionRender &&
          <motion.div
            className='text'
            variants={textVariants}
            initial='hidden'
            animate='show'
            exit='exit'
            key='text'
          >
            <p className="hi">Oi,</p>
            <p className="desc">me chamo <span>Alisson</span> e sou um fullstack developer</p>
          </motion.div>
        }
      </AnimatePresence>
    </BoxContainer>
  )
}