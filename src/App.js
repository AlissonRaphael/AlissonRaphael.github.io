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


export default function App(){
  const { scrollYProgress } = useViewportScroll()
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      setScrollPosition(latest)
    })
  }, [])

  const [ firstSectionRender, setFirstSectionRender ] = useState(true)
  const [ secondSectionRender, setSecondSectionRender ] = useState(false)
  const [ thirdSectionRender, setThirdSectionRender ] = useState(false)

  useEffect(() => {

    if(scrollPosition <= 0.1){
      setFirstSectionRender(true)
      setSecondSectionRender(false)
      setThirdSectionRender(false)
    } else if(scrollPosition > 0.1 && scrollPosition <= 0.2){
      setFirstSectionRender(false)
      setSecondSectionRender(true)
      setThirdSectionRender(false)
    } else if(scrollPosition > 0.2 && scrollPosition <= 0.3){
      setSecondSectionRender(false)
      setThirdSectionRender(true)
    }

  }, [scrollPosition])

  window.onbeforeunload = () => window.scrollTo(0,0)
  return (
    <MyContext.Provider value={{
      scrollPosition,
      firstSectionRender,
      secondSectionRender,
      thirdSectionRender
    }}>

      <span className='noise'></span>
      <Scrollbar/>

      <Header/>

      {/* First section */}
      <Photo/>
      <BoxMenssage/>
      <MiniboxText/>
      <ScrollAlert/>
      <SocialNetwork/>

      {/* Second section */}
      <WhiteFrame/>
      <AboutMe/>

    </MyContext.Provider>
  )
}
