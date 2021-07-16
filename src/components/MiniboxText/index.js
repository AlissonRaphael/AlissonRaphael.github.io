import React from 'react'
import { motion } from 'framer-motion'

import { Container } from './style.js'

const miniboxContainerVariants = {
  show: {
    transition: {
      when: "beforeChildren",
      type: 'tween',
      ease: "backOut",
      staggerChildren: 0.5
    }
  }
}

const miniboxItemVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 3,
      duration: 2,
      type: 'tween',
      ease: "backOut"
    }
  }
}

const miniboxTitleVariants = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { delay: 3, duration: 2 } },
}

const miniboxDescVariants = {
  hidden: { y: -10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { delay: 3, duration: 2 } },
}

export default function MiniboxText(){
  return (
    <Container
      variants={miniboxContainerVariants}
      animate='show'
    >
      <motion.div
        id='minibox'
        className='firstbox'
        variants={miniboxItemVariants}
        initial='hidden'
        animate='show'
      >
        <motion.div
          id='minibox-title'
          variants={miniboxTitleVariants}
        >
          <span id='text'>Graduação em engenharia</span>
          <span id='bar'></span>
        </motion.div>

        <motion.p
          id='minibox-desc'
          variants={miniboxDescVariants}
        >
          Sou graduado em Ciência e Tecnologia e engenheiro de produção pela Universidade Federal Rural do Semiárido.
        </motion.p>
      </motion.div>

      <motion.div
        id='minibox'
        className='secondbox'
        variants={miniboxItemVariants}
        initial='hidden'
        animate='show'
      >
        <motion.div
          id='minibox-title'
          variants={miniboxTitleVariants}
        >
          <span id='text'>Iniciação como dev</span>
          <span id='bar'></span>
        </motion.div>

        <motion.p
          id='minibox-desc'
          variants={miniboxDescVariants}
        >
          Busquei soluções que permitissem inserir empresas no contexto da industrial 4.0 e fui completamente impactado pela programação.
        </motion.p>
      </motion.div>
    
    </Container>
  )
}
