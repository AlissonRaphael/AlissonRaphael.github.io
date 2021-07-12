import React from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import { useViewportScroll, useTransform } from 'framer-motion'


import { HeaderComponent, Nav } from './style.js'
import HamburgerButton from '../HamburgerButton/HamburgerButton.js'
import LanguageButton from '../LanguageButton/LanguageButton.js'


export default function Header(){
  const { scrollYProgress } = useViewportScroll()
  const sizeMenu = useTransform(scrollYProgress, [0,0.03], [`32px 24px`,`8px 24px`])
  const transparentBgMenu = useTransform(scrollYProgress, [0,0.03], [`rgba(0, 0, 0, 0.15)`,`rgba(0, 0, 0, 0)`])
  const opacityMenu = useTransform(scrollYProgress, [0,0.03], [1,0.1])

  return (
    <HeaderComponent
      style={{ padding: sizeMenu, backgroundColor: transparentBgMenu }}
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
