import React, { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


import { Container, Frame, TComponent, TLegend } from './style.js'

import MyContext from '../../MyContext.js'
import Data from '../../data/techs.json'
import Tech from '../Tech/index.js'

const titleVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
}

const bodyVariants = {
  show: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delayChildren: 0.5,
    }
  },
  exit: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  },
}

const techsVariants = {
  hidden: {
    y: 300,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      type: "spring",
      stiffness: 100,
      damping: 50
    }
  },
  exit: {
    y: 300,
    opacity: 0,
    transition: {
      duration: 0.1,
      type: "tween",
      ease: 'easeIn'
    }
  }
}


export default function TShape({ children }){
  const { thirdSectionRender } = useContext(MyContext)

  const { techs } = Data

  return (
    <AnimatePresence>
    { thirdSectionRender &&

      <Container>
        <TComponent
          variants={titleVariants}
          initial='hidden'
          animate='show'
          exit='exit'
        >
          <motion.div id="gen">
            Generalista
          </motion.div>

          <motion.div id="esp">
            Especialista
          </motion.div>
        </TComponent>

        <TLegend
          variants={titleVariants}
          initial='hidden'
          animate='show'
          exit='exit'
        >
          T-Shaped Developer
        </TLegend>

        <Frame>

          <motion.div
            className="header"
            id="mobile"
            variants={titleVariants}
            initial='hidden'
            animate='show'
            exit='exit'
          >
            Mobile
          </motion.div>

          <motion.div
            className="body"
            id="mobile"
            variants={bodyVariants}
            initial='hidden'
            animate='show'
            exit='exit'
          >
            {
              techs.map((item,index) => {
                if(item.tech === 'Mobile'){
                  return <Tech key={`mobile-${index}`} id={index} tech={item} variants={techsVariants}/>
                }
              })
            }
          </motion.div>


          <motion.div
            className="header" 
            id="front"
            variants={titleVariants}
            initial='hidden'
            animate='show'
            exit='exit'
          >
            Frontend
          </motion.div>

          <motion.div
            className="body"
            id="front"
            variants={bodyVariants}
            initial='hidden'
            animate='show'
            exit='exit'
          >
            {
              techs.map((item,index) => {
                if(item.tech === 'Frontend'){
                  return <Tech key={`frontend-${index}`} id={index} tech={item} variants={techsVariants}/>
                }
              })
            }
          </motion.div>


          <motion.div
            className="header" 
            id="back"
            variants={titleVariants}
            initial='hidden'
            animate='show'
            exit='exit'
          >
            Backend
          </motion.div>

          <motion.div
            className="body"
            id="back"
            variants={bodyVariants}
            initial='hidden'
            animate='show'
            exit='exit'
          >
            {
              techs.map((item,index) => {
                if(item.tech === 'Backend'){
                  return <Tech key={`backend-${index}`}  id={index} tech={item} variants={techsVariants}/>
                }
              })
            }
          </motion.div>


          <motion.div
            className="header" 
            id="devop"
            variants={titleVariants}
            initial='hidden'
            animate='show'
            exit='exit'
          >
            DevOps
          </motion.div>

          <motion.div
            className="body"
            id="devop"
            variants={bodyVariants}
            initial='hidden'
            animate='show'
            exit='exit'
          >
          {
              techs.map((item,index) => {
                if(item.tech === 'DevOps'){
                  return <Tech key={`devops-${index}`}  id={index} tech={item} variants={techsVariants}/>
                }
              })
            }
          </motion.div>


          <motion.div
            className="header" 
            id="others"
            variants={titleVariants}
            initial='hidden'
            animate='show'
            exit='exit'
          >
            Others
          </motion.div>

          <motion.div
            className="body"
            id="others"
            variants={bodyVariants}
            initial='hidden'
            animate='show'
            exit='exit'
          >
            {
              techs.map((item,index) => {
                if(item.tech === 'Other'){
                  return <Tech key={`other-${index}`}  id={index} tech={item} variants={techsVariants}/>
                }
              })
            }
          </motion.div>

        </Frame>

      </Container>
    }
    </AnimatePresence>
  )
}
