import React from 'react'

import Foto from '../../assets/perfil.jpg'
import { PhotoContainer } from './style.js'

const photoVariants = {
  hidden: {
    x: 230,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 3
    }
  }
}

export default function Photo(){
  return (
    <PhotoContainer
      style={{ backgroundImage: `url(${Foto})` }}
      variants={photoVariants}
      initial='hidden'
      animate='show'
    ></PhotoContainer>
  )
}
