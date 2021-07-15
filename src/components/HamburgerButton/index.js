import React, { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'


import { ButtonMenu } from './style.js'


const ButtonMenuVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3, type: "spring", stiffness: 100 }
  },
  focus: {
    rotate: 180
  }
}

const ButtonIconsVariants = {
  hidden: { rotate: -180 },
  visible: { rotate: 0 },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 }
  }
}


export default function HamburgerButton(){
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ButtonMenu
      variants={ButtonMenuVariants}
      whileHover='hover'
      whileFocus='focus'
      onClick={() => setIsOpen(!isOpen)}
    >
      <AnimatePresence>
        {
          !isOpen ?
          <motion.div
            key='open'
            variants={ButtonIconsVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          > 
            <MdMenu/>
          </motion.div>
          :
          <motion.div
            key='close'
            variants={ButtonIconsVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          > 
            <MdClose/>
          </motion.div>
        }
      </AnimatePresence>
    </ButtonMenu>
  )
}
