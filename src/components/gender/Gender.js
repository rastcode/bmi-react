import React from 'react'
import "./Gender.css"
import GButton from './GButton'

function Gender() {
  return (
    <div className='gender-container'>
      <GButton gen="Male"/>
      <GButton gen="Female"/>
    </div>
  )
}

export default Gender