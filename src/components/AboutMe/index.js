import React, { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Text } from './style.js'

import MyContext from '../../MyContext.js'


const TextContainerVariants = {
  show: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      delayChildren: 1.5
    }
  },
}

const TextItemVariants = {
  hidden: {
    y: 50,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      type: 'tween',
      ease: 'easeInOut'
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 1,
      type: 'tween',
      ease: 'easeInOut'
    }
  }
}

export default function OrangeFrame(){
  const { secondSectionRender } = useContext(MyContext)

  return (
    <AnimatePresence>
    { secondSectionRender &&
      <Text
        variants={TextContainerVariants}
        initial='hidden'
        animate='show'
        exit='exit'
        key='aboutText'
      >
        <motion.p
          variants={TextItemVariants}
        >
          Sou bacharel em <span>Ciência e Tecnologia</span> e graduado como
          <span> Engenheiro de Produção</span> pela Universidade Federal Rural
          do Semiárido.
        </motion.p>

        <motion.p
          variants={TextItemVariants}
        >
          Apaixonado por tecnologia, sempre busquei soluções que permitissem
          inserir as empresas no contexto da quarta revolução industrial, até
          que fui totalmente absorvido pelo universo da programação.
        </motion.p>

        <motion.p
          variants={TextItemVariants}
        >
          Minha stack principal é em JavaScript. Nesse meio tempo tenho trabalhado
          bastante com o ecossistema de bibliotecas e frameworks do <span>ReactJS
          (Next.js, React-Router, Redux, Styled-Components, Framer-Motion...)</span>
        </motion.p>

        <motion.p
          variants={TextItemVariants}
        >
          Apesar disso, o foco dos meus estudos é voltado ao <span>Node.js (Express,
          AdonisJS, NestJS...)</span> e outras tecnologias de backend como banco de dados
          SQL <span>(Postgress)</span> e NoSQL <span>(Mongo, Redis)</span>.
        </motion.p>

        <motion.p
          variants={TextItemVariants}
        >
          Ainda no backend tenho voltado minhas atenções para estudar padrões de
          projeto, arquiteturas, microserviços e outras linguagens de programação 
          como <span>Go</span> e <span>Elixir</span>.
        </motion.p>

      </Text>
    }
    </AnimatePresence>
  )
}