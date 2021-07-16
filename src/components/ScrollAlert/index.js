import React from 'react'
import { motion } from 'framer-motion'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { Container } from './style.js'


const showScrollButton = {
  hidden: {
    x: 200,
    opacity: 1,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 5,
      duration: 1,
      type: 'spring',
      ease: 400
    }
  }
}

const scrollAlertVariants = {
  button: {
    color: ['rgb(255, 255, 255)', 'rgb(255, 99, 71)'],
    transition: {
      duration: 1,
      type: 'tween',
      repeat: Infinity,
      repeatType: "mirror",
      ease: 'easeInOut'
    }
  }
}

const scrollArrowVariants = {
  arrow: {
    y: [-5,5],
    transition: {
      duration: 0.4,
      type: 'tween',
      repeat: Infinity,
      repeatType: "mirror",
      ease: 'circIn'
    }
  }
}

export default function ScrollAlert(){
  return (
    <Container
      id="scroll-alert"
      variants={showScrollButton}
      initial='hidden'
      animate='show'
    >

      <motion.div
        id="scroll-alert"
        variants={scrollAlertVariants}
        initial='hidden'
        animate='button'
      >
        <motion.div
          id='scroll-alert-icon'
          variants={scrollArrowVariants}
          animate='arrow'
        >
          <MdKeyboardArrowDown/>
        </motion.div>

        <motion.div id='scroll-alert-text'>
          scroll
        </motion.div>

      </motion.div>

    </Container>
  )
}
