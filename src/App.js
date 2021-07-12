import React from 'react'

import './Styles/Global.css'
import Header from './components/Header/Header.js'
import Scrollbar from './components/Scrollbar/Scrollbar.js'


export default function App(){

  window.onbeforeunload = () => window.scrollTo(0,0)

  return (
    <>
      <span className='noise'></span>
      <Scrollbar/>
      <Header/>
    </>
  )
}
