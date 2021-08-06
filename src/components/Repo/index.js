import React, { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


import { Container, Item, Title, Description, Footer, Language, License, Circle } from './style.js'

import MyContext from '../../MyContext.js'


export default function RepoItem({ time, repo, align }){
  const { fourthSectionRender } = useContext(MyContext)
  const [repositorio, setRepositorio] = useState(null)


  const circleVariants = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        delay: time,
        duration: 0.4,
        type: 'tween',
        ease: 'easeInOut'
      }
    },
    exit: {
      scale: 0,
      transition: {
        delay: time,
        duration: 0.4,
        type: 'tween',
        ease: 'easeInOut'
      }
    }
  }

  const spanVariants = {
    hidden: {
      scaleX: 0,
      originX: align === 'left' ? 1 : 0,
    },
    show: {
      scaleX: 1,
      transition: {
        delay: time+0.2,
        duration: 0.5,
        type: 'tween',
        ease: 'easeInOut'
      }
    },
    exit: {
      scaleX: 0,
      transition: {
        delay: time+0.2,
        duration: 0.5,
        type: 'tween',
        ease: 'easeInOut'
      }
    }
  }

  const itemVariants = {
    hidden: {
      scale: 0,
      originX: align === 'left' ? 1 : 0,
    },
    show: {
      scale: 1,
      transition: {
        delay: time+0.3,
        duration: 0.3,
        type: 'tween',
        ease: 'easeInOut'
      }
    },
    exit: {
      scale: 0,
      transition: {
        delay: time+0.3,
        duration: 0.3,
        type: 'tween',
        ease: 'easeInOut'
      }
    }
  }

  useEffect(() => {

    setRepositorio({
      url: repo.url,
      name: repo.name,
      description: repo.description ? repo.description : 'Without description',
      languages: repo.languages.length > 0 ? repo.languages : [''],
      license: repo.license ?  repo.license.name : 'Other'
    })

  }, [repo])

  return (
    <>
      { fourthSectionRender && repositorio &&
        <AnimatePresence>
          <Container>
            <motion.div id={`${align}-item`}>
              <Item
                href={repositorio.url}
                target="_blank"
                variants={itemVariants}
                initial='hidden'
                animate='show'
                exit='exit'
                whileHover={{ backgroundColor: 'rgba(100,100,100,0.2)', transition: { type: 'spring', stiffness: 1000 } }}
              >

                <Title>{repositorio.name}</Title>
                <Description>{repositorio.description}</Description>
                <Footer>
                  <Language>
                  { repositorio &&
                    repositorio.languages.map(l => (<span key={l}>{l}</span>))
                  }
                  </Language>
                  <License>
                    {repositorio.license}
                  </License>
                </Footer>
              </Item>

              <motion.span
                id='line'
                variants={spanVariants}
                initial='hidden'
                animate='show'
                exit='exit'
                ></motion.span>

              <motion.span
                id='circle'
                variants={circleVariants}
                initial='hidden'
                animate='show'
                exit='exit'
                ></motion.span>

            </motion.div>
          </Container>
        </AnimatePresence>
      }
    </>
  )
}
