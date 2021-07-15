import React from 'react'

import './Styles/Global.css'
import Header from './components/Header'
import Scrollbar from './components/Scrollbar'
import SectionOne from './components/SectionOne'

export default function App(){

  window.onbeforeunload = () => window.scrollTo(0,0)

  return (
    <>
      <span className='noise'></span>
      <Scrollbar/>
      <Header/>
      <SectionOne/>
    </>
  )
}
