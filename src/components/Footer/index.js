import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SiGithub, SiMedium, SiLinkedin, SiGmail } from 'react-icons/si'

import { Container } from './style.js'
import MyContext from '../../MyContext'


const containerVariants = {
  hidden: {
    bottom: '-50vh',
  },
  show: {
    bottom: '0vh',
    transition: { duration: 2 }
  },
  exit: {
    bottom: '-50vh',
    transition: { duration: 2 }
  }
}

export default function Footer(){
  const { scrollPosition, menuClick } = useContext(MyContext)

  return (
    <AnimatePresence>
      { scrollPosition >= 0.9 &&
        <Container
          key='footer'
          variants={containerVariants}
          initial='hidden'
          animate='show'
          exit='exit'
        >
  
          <motion.div id='footer-menus'>

            <motion.ul>
              <h4>Menu</h4>
              <li>
                <a onClick={(event) => menuClick(event)}>
                  Home
                </a>
              </li>
              <li>
                <a onClick={(event) => menuClick(event)}>
                  About
                </a>
              </li>
              <li>
                <a onClick={(event) => menuClick(event)}>
                  Repos
                </a>
              </li>
            </motion.ul>

            <motion.ul>
              <h4>Contato</h4>
              <li>
                <a href="https://github.com/AlissonRaphael" target="_blank">
                  <SiGithub/><span>Github</span>
                </a>
              </li>
              <li>
                <a href="https://alissonraphaeloliveira.medium.com/" target="_blank">
                  <SiMedium/><span>Medium</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/alisson-raphael-oliveira/" target="_blank">
                  <SiLinkedin/><span>Linkedin</span>
                </a>
              </li>
            </motion.ul>

            <motion.ul>
              <li className="text-footer">
                Esta apresentação foi possível mediante Github pages. Você
                pode encontrar todo o projeto antes da build na minha lista
                de repositórios.
              </li>
              <li className="text-footer">
                <SiGmail/><span>alissonraphaeloliveira@gmail.com</span>
              </li>
            </motion.ul>

          </motion.div>


          <motion.div id='footer-bottom'>
            © 2021 | Alisson
          </motion.div>
  
        </Container>
      }
    </AnimatePresence>
  )
}