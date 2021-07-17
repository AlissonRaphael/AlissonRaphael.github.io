import React, { useState, useEffect, useContext } from 'react'
import { motion, useAnimation, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion'
import { IoMdQuote } from 'react-icons/io'

import { Frame, Title, Quote } from './style.js'

import MyContext from '../../MyContext.js'


const FrameVariants = {
  hidden: {
    width: '100vw',
    height: '100vh'
  },
  show: {
    top: '8vw',
    left: `${(100-(550/9))/2}vw`,
    height: 'calc(550vw/16)',
    width: 'calc(550vw/9)',
    border: '4px solid rgba(255,255,255,1)',
    transition: {
      duration: 2,
      type: 'tween',
      ease: 'easeInOut'
    }
  },
  third: {
    top: `6vw`,
    left: `${(100-(620/9))/2}vw`,
    height: 'calc(620vw/16)',
    width: 'calc(620vw/9)',
    border: '1px solid rgba(255,99,71,1)',
    transition: {
      duration: 1.5,
      type: 'tween',
      ease: 'easeInOut'
    }
  },
  exit: {
    opacity: 0,
  }
}

const TitleVariants = {
  hidden: {
    left: "17%",
    opacity: 0
  },
  show: {
    top: '10vw',
    left: "14.5%",
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      type: 'tween',
      ease: 'easeInOut'
    }
  },
  third: {
    top: '8vw',
    left: `${(100-(620/9))/2-5}vw`,
    transition: {
      duration: 1.5,
      type: 'tween',
      ease: 'easeInOut'
    }
  },
  exit: {
    opacity: 0,
  }
}

const iconVariants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 2,
      type: 'tween',
      ease: 'easeOut'
    },
    exit: {
      y: -50,
      opacity: 0,
    }
  }
}

export default function WhiteFrame({ children }){
  const controls = useAnimation()
  const { firstSectionRender, secondSectionRender, thirdSectionRender } = useContext(MyContext)

  useEffect(() => {
    if(secondSectionRender){
      controls.start('show')
    } else {
      controls.start('third')
    }
  }, [secondSectionRender])

  return (
    <AnimatePresence>
    { secondSectionRender | thirdSectionRender &&
      <>
        <Frame
          variants={FrameVariants}
          initial='hidden'
          animate={controls}
          exit='exit'
          key='photo'
          >
        </Frame>

        <Title
          variants={TitleVariants}
          initial='hidden'
          animate={controls}
          exit='exit'
          key='titlesecondsection'
        >
          About
        </Title>

      </>
    }

    { secondSectionRender &&
        <Quote
          variants={iconVariants}
          initial='hidden'
          animate='show'
          exit='exit'
        >
          <IoMdQuote/>
        </Quote>
    }
    </AnimatePresence>
  )
}
