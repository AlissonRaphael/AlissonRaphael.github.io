import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SiGithub, SiMedium, SiLinkedin } from 'react-icons/si'

import { Container } from './style.js'
import MyContext from '../../MyContext.js'


const containerVariants = {
  show: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      delayChildren: 1.5,
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
    x: 200,
  },
  show: {
    x: 0,
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

export default function SocialNetwork(){
  const { firstSectionRender } = useContext(MyContext)

  return (
    <AnimatePresence>
      { firstSectionRender &&
        <Container
          variants={containerVariants}
          initial='hidden'
          animate='show'
          exit='exit'
          key='network'
        >

          <motion.a
            id="social-network"
            href="https://github.com/AlissonRaphael"
            target="_blank"
            variants={itemVariants}
            whileHover={{ scale: 1.3, transition: { type: 'spring', stiffness: 700 } }}
            whileTap={{ scale: 0.8, color: 'rgb(255, 99, 71)', transition: { type: 'spring', stiffness: 700 } }}
          >

            <motion.div id="social-network-title" variants={itemTitleVariants}>
              <SiGithub/><span>Github</span>
            </motion.div>

            <motion.div id="social-network-desc" variants={itemDescVariants}>
              Acesse meu Github para ver os meus projetos e o que ando estudando
            </motion.div>

          </motion.a>


          <motion.a
            id="social-network"
            href="https://alissonraphaeloliveira.medium.com/"
            target="_blank"
            variants={itemVariants}
            whileHover={{ scale: 1.3, transition: { type: 'spring', stiffness: 700 } }}
            whileTap={{ scale: 0.8, color: 'rgb(255, 99, 71)', transition: { type: 'spring', stiffness: 700 } }}
          >

            <motion.div id="social-network-title" variants={itemTitleVariants}>
              <SiGithub/><span>Medium</span>
            </motion.div>

            <motion.div id="social-network-desc" variants={itemDescVariants}>
              No meu perfil no Medium, você pode conferir o que ando escrevendo
            </motion.div>

          </motion.a>


          <motion.a
            id="social-network"
            href="https://www.linkedin.com/in/alisson-raphael-oliveira/"
            target="_blank"
            variants={itemVariants}
            whileHover={{ scale: 1.3, transition: { type: 'spring', stiffness: 700 } }}
            whileTap={{ scale: 0.8, color: 'rgb(255, 99, 71)', transition: { type: 'spring', stiffness: 700 } }}
          >

            <motion.div id="social-network-title" variants={itemTitleVariants}>
              <SiLinkedin/><span>Linkedin</span>
            </motion.div>

            <motion.div id="social-network-desc" variants={itemDescVariants}>
              Você pode se conectar comigo no meu perfil profissional no Linkedin
            </motion.div>

          </motion.a>

        </Container>
      }
    </AnimatePresence>
  )
}
