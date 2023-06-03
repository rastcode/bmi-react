import React from 'react'
import "./Gender.css"
import GButton from './GButton'
import { useContext } from 'react'
import dataContext from '../../contexts/DataContext'


function Gender() {
  const CData = useContext(dataContext);
  return (
    <div className='gender-container'>
      <GButton gen="Male"  style={CData.gender?"Male":''}/>
      <GButton gen="Female" style={CData.gender?'':"Female"}/>
    </div>
  )
}

export default Gender