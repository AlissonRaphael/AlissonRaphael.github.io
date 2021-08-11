import React, { useState, useEffect } from 'react'
import { useViewportScroll, useTransform, useAnimation } from 'framer-motion'

import './Styles/Global.css'
import MyContext from './MyContext'

import Header from './components/Header'
import Scrollbar from './components/Scrollbar'
import ScrollAlert from './components/ScrollAlert'
import Photo from './components/Photo'
import BoxMenssage from './components/BoxMenssage'
import MiniboxText from './components/MiniboxText'
import SocialNetwork from './components/SocialNetwork'
import WhiteFrame from './components/WhiteFrame'
import AboutMe from './components/AboutMe'
import TShape from './components/TShape'
import Repos from './components/Repos'
import Footer from './components/Footer'
import Menu from './components/Menu'
import HamburgerButton from './components/HamburgerButton'


export default function App(){
  window.onbeforeunload = () => window.scrollTo(0,0)
  const [isOpen, setIsOpen] = useState(false)

  const { scrollYProgress } = useViewportScroll()
  const [scrollPosition, setScrollPosition] = useState(0)

  const [ firstSectionRender, setFirstSectionRender ] = useState(true)
  const [ secondSectionRender, setSecondSectionRender ] = useState(false)
  const [ thirdSectionRender, setThirdSectionRender ] = useState(false)
  const [ fourthSectionRender, setFourthSectionRender ] = useState(false)

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      setScrollPosition(latest)
    })
  }, [])


  useEffect(() => {

    if(scrollPosition <= 0.2){
      setFirstSectionRender(true)
      setSecondSectionRender(false)
      setThirdSectionRender(false)
      setFourthSectionRender(false)
    } else if(scrollPosition > 0.2 && scrollPosition <= 0.4){
      setFirstSectionRender(false)
      setSecondSectionRender(true)
      setThirdSectionRender(false)
      setFourthSectionRender(false)
    } else if(scrollPosition > 0.4 && scrollPosition < 0.55){
      setFirstSectionRender(false)
      setSecondSectionRender(false)
      setThirdSectionRender(true)
      setFourthSectionRender(false)
    } else if(scrollPosition >= 0.55){
      setFirstSectionRender(false)
      setSecondSectionRender(false)
      setThirdSectionRender(false)
      setFourthSectionRender(true)
    }

  }, [scrollPosition])


  function menuClick(event){
    const button = `${event.target.innerText}`.toLowerCase()
    const sizeDoc = document.body.offsetHeight

    if(button === 'home'){
      window.scrollTo(0, 0*sizeDoc)
      scrollYProgress.set(0)

    } else if(button === 'about'){
      window.scrollTo(0, 0.21*sizeDoc)
      scrollYProgress.set(0.21)

    } else if(button === 'repos'){
      window.scrollTo(0, 0.55*sizeDoc)
      scrollYProgress.set(0.55)
    }

    setIsOpen(false)
  }

  return (
    <MyContext.Provider value={{
      isOpen,
      setIsOpen,
      menuClick,
      scrollPosition,
      firstSectionRender,
      secondSectionRender,
      thirdSectionRender,
      fourthSectionRender
    }}>

      <span className='noise'></span>
      <Scrollbar/>

      <Header><HamburgerButton/></Header>
      
      <Menu/>

      {/* First section */}
      <Photo/>
      <BoxMenssage/>
      <MiniboxText/>
      <ScrollAlert/>
      <SocialNetwork/>

      {/* Second section */}
      <WhiteFrame/>
      <AboutMe/>

      {/* Third section */}
      <TShape/>

      {/* fourth section */}
      <Repos/>
      <Footer/>

    </MyContext.Provider>
  )
}
