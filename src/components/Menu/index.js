import React, { useState, useContext} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Container, MenuDiv, AnimationDiv } from './style.js'
import MyContext from '../../MyContext.js'
import MenuButton from '../MenuButtton'

const containerVariants = {
  hidden: {
    x: "-100vw",
  },
  show: {
    x: "0vw",
    transition: { duration: 1, type: 'tween', ease: 'easeInOut' }
  },
  exit: {
    x: "-100vw",
    transition: { delay: 0.3, duration: 0.5, type: 'tween', ease: 'easeInOut' }
  }
}

const orangeVariants = {
  show: {
    width: ["0vw","100vw","0vw"],
    left: ["0vw","100vw"],
    transition: { duration: 1, type: 'tween', ease: 'easeInOut' }
  },
  exit: {
    width: ["0vw","100vw","0vw"],
    left: ["100vw","5vw","0vw"],
    transition: { duration: 0.3, type: 'tween', ease: 'easeInOut' }
  }
}



export default function Menu(){
  const { isOpen, setIsOpen, menuClick } = useContext(MyContext)

  return (
    <AnimatePresence>
      { isOpen &&
      <>
        <Container
          variants={containerVariants}
          initial='hidden'
          animate='show'
          exit='exit'
        >
          <MenuDiv>
            <MenuButton handleClick={(event) => menuClick(event)}>Home</MenuButton>
            <MenuButton handleClick={(event) => menuClick(event)}>About</MenuButton>
            <MenuButton handleClick={(event) => menuClick(event)}>Repos</MenuButton>
          </MenuDiv>

        </Container>

        <AnimationDiv
          variants={orangeVariants}
          animate='show'
          exit='exit'
        />
      </>
      }
    </AnimatePresence>
  )
}
