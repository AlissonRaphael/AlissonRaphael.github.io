import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import MyContext from '../../MyContext.js'
import { Container } from './style.js'

const containerVariants = {
  show: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      delayChildren: 3,
    }
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 1
    }
  }
}

const itemVariants = {
  hidden: {
    y: -100,
  },
  show: {
    y: 0,
    transition: {
      duration: 2,
      type: 'tween',
      ease: 'easeOut'
    }
  }
}

const itemTitleVariants = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 2 } },
}

const itemDescVariants = {
  hidden: { y: -10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 2 } },
}

export default function MiniboxText(){
  const { firstSectionRender } = useContext(MyContext)

  return (
    <AnimatePresence>
      { firstSectionRender &&
        <Container
          variants={containerVariants}
          initial='hidden'
          animate='show'
          exit='exit'
          key='minitext'
        >
          <motion.div
            id='minibox'
            className='firstbox'
            variants={itemVariants}
          >
            <motion.div
              id='minibox-title'
              variants={itemTitleVariants}
            >
              <span id='text'>Graduação em engenharia</span>
              <span id='bar'></span>
            </motion.div>
    
            <motion.p
              id='minibox-desc'
              variants={itemDescVariants}
            >
              Sou graduado em Ciência e Tecnologia e engenheiro de produção pela Universidade Federal Rural do Semiárido.
            </motion.p>
          </motion.div>

          <motion.div
            id='minibox'
            className='secondbox'
            variants={itemVariants}
          >
            <motion.div
              id='minibox-title'
              variants={itemTitleVariants}
            >
              <span id='text'>Iniciação como dev</span>
              <span id='bar'></span>
            </motion.div>
    
            <motion.p
              id='minibox-desc'
              variants={itemDescVariants}
            >
              Busquei soluções que permitissem inserir empresas no contexto da industrial 4.0 e fui completamente impactado pela programação.
            </motion.p>
          </motion.div>
        
        </Container>
      }
    </AnimatePresence>
  )
}
