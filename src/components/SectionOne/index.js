import React, { useState, useEffect, useRef } from 'react'
import { motion, useViewportScroll, useTransform, useAnimation } from 'framer-motion'

import { Container } from './style.js'

import ScrollAlert from '../ScrollAlert'
import Photo from '../Photo'
import BoxMenssage from '../BoxMenssage'
import MiniboxText from '../MiniboxText'
import SocialNetwork from '../SocialNetwork'


export default function SectionOne(){

  return (
    <Container>
      <Photo/>
      <BoxMenssage/>
      <SocialNetwork/>
      <MiniboxText/>
      <ScrollAlert/>
    </Container>
  )
}
