import React from 'react'
import * as Si  from 'simple-icons'


import { Item } from './style.js'


export default function Tech({ tech, variants, hover }){
  // const icon = require(`simple-icons/icons/${tech.icon}`)
  const icon = Si.Get(tech.icon)


  return (
    <Item
      key={tech.name}
      style={{ backgroundColor: `#2b2b2b` }}
      variants={variants}
      whileHover={{
        backgroundColor: `#${icon.hex}`,
        zIndex: '1000',
        scale: 1.3,
        transition: { duration: 1.3, type: 'spring', stiffness: 800 }
      }}
    >

      <div id="item-icon">
        <img src={`data:image/svg+xml;utf8,${icon.svg}`}/>
      </div>

      <div id="item-desc">
        <span id="item-name">{tech.name}</span>
        <span id="item-type">{tech.type}</span>
      </div>
  
    </Item>
  )
}