import React, { useState, useEffect, useContext } from 'react'
import { useAnimation, AnimatePresence } from 'framer-motion'

import { PhotoContainer } from './style.js'
import MyContext from '../../MyContext'
import Foto from '../../assets/perfil.jpg'

const photoVariants = {
  hidden: {
    opacity: 0,
    left: "20vw",
  },
  show: {
    opacity: 1,
    left: "12vw",
    top: "7vw",
    height: "calc(350vw/9)",
    width: "calc(350vw/16)",
    transition: { duration: 2, type: 'tween', ease: 'easeInOut' }

  },
  center: {
    opacity: 1,
    top: "13vw",
    left: "60vw",
    height: "calc(250vw/9)",
    width: "calc(250vw/16)",
    transition: { duration: 2, type: 'tween', ease: 'easeInOut' }
  },
  exit: {
    opacity: 0,
  }
}

export default function Photo(){
  const controls = useAnimation()
  const { firstSectionRender, secondSectionRender } = useContext(MyContext)
  const [ photoCenter, setPhotoCenter ] = useState(false)


  useEffect(() => {
    if(firstSectionRender){
      controls.start('show')
    } else if(secondSectionRender) {
      controls.start('center')
    }
  }, [firstSectionRender, secondSectionRender])

  return (
    <AnimatePresence>
      { firstSectionRender | secondSectionRender &&
        <PhotoContainer
          style={{ backgroundImage: `url(${Foto})` }}
          variants={photoVariants}
          initial='hidden'
          animate={controls}
          exit='exit'
          key='photo'
        />
      }
    </AnimatePresence>
  )
}
