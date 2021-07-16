import React from 'react'
import { motion } from 'framer-motion'

import { BoxContainer } from './style.js'

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
  }
}

export default function BoxMenssage(){
  return (
    <BoxContainer>
      <motion.div
        className='box'
        variants={boxVariants}
        initial='hidden'
        animate='show'
      ></motion.div>

      <motion.div
        className='text'
        variants={textVariants}
        initial='hidden'
        animate='show'
      >
        <p className="hi">Oi,</p>
        <p className="desc">
          me chamo <span>Alisson</span> e sou um fullstack developer
        </p>
      </motion.div>
    </BoxContainer>
  )
}