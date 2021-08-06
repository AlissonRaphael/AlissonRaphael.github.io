import React, { useState, useContext} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Button, ButtonAnimation } from './style.js'
import MyContext from '../../MyContext.js'

const spanVariants = {
  animation: {
    x: [-45,0,45],
    scaleX: [0,1.2,0],
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 0.5,
      repeatDelay: 0.5
    }
  }
}


export default function MenuButton({ handleClick, children }){
  const { isOpen, setIsOpen } = useContext(MyContext)
  const [isOver, setIsOver] = useState(false)

  return (
    <AnimatePresence>
      { isOpen &&
        <Button onClick={handleClick}
          onMouseOver={() => setIsOver(true)}
          onMouseOut={() => setIsOver(false)}
        >
        <span className='text'>{ children }</span>
        {
          isOver ?
          <ButtonAnimation
            variants={spanVariants}
            animate='animation'
          /> :
          null
        }
        </Button>
      }
    </AnimatePresence>
  )
}