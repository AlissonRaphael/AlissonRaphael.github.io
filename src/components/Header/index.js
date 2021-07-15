import React from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import { useViewportScroll, useTransform } from 'framer-motion'


import { HeaderComponent, Nav } from './style.js'
import HamburgerButton from '../HamburgerButton'
import LanguageButton from '../LanguageButton'

const HeaderVariants = {
  hidden: {
    y: -150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 2, duration: 1.5 }
  }

}

export default function Header(){
  const { scrollYProgress } = useViewportScroll()
  const sizeMenu = useTransform(scrollYProgress, [0,0.03], [`32px 24px`,`8px 24px`])
  const opacityMenu = useTransform(scrollYProgress, [0,0.03], [1,0.1])
  const transparentBgMenu = useTransform(scrollYProgress, [0,0.03], [`rgba(0, 0, 0, 0.15)`,`rgba(0, 0, 0, 0)`])
  const shadowHeader = useTransform(scrollYProgress,[0, 0.03],[`0px 3px 10px rgba(0,0,0,0.3)`,`0px 0px 0px rgba(0,0,0,0)`])

  return (
    <HeaderComponent
      style={{ padding: sizeMenu, backgroundColor: transparentBgMenu, boxShadow: shadowHeader }}
      variants={HeaderVariants}
      initial='hidden'
      animate='visible'
    >
      <Nav style={{ opacity: opacityMenu }}>
        <div>
          <HamburgerButton/>
        </div>
        <div>
          <LanguageButton isActive={true}>pt</LanguageButton>
          <LanguageButton>en</LanguageButton>
        </div>
      </Nav>
    </HeaderComponent>
  )
}