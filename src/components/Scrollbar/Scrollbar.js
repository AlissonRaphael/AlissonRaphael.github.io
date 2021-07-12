import React from 'react'
import { useViewportScroll, useTransform } from 'framer-motion'

import { Bar } from './style.js'


export default function Scrollbar(){
  const { scrollYProgress } = useViewportScroll()
  const heightScroll = useTransform(scrollYProgress, [0,1], [`${0}vh`, `${100}vh`])

  return <Bar style={{ height: heightScroll }}/>
}
