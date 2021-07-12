import React, { useState } from 'react'
import { motion } from 'framer-motion'


import { ButtonContainer, ButtonAnimation, OutlineButton } from './style.js'


const spanVariants = {
  animation: {
    x: [-10,15],
    scaleX: [0,1.6,0],
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 0.5,
      repeatDelay: 0.5
    }
  }
}


export default function LanguageButton({ children, isActive }){
  const [isOver, setIsOver] = useState(false)


  return (
    <ButtonContainer
      onMouseOver={() => setIsOver(true)}
      onMouseOut={() => setIsOver(false)}
    >
      <span className='text'>{children}</span>
      {
        isOver ?
        <ButtonAnimation
          variants={spanVariants}
          animate='animation'
        /> :
        null
      }
      { isActive ? <OutlineButton/> : null }

    </ButtonContainer>
  )
}