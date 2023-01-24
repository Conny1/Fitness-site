import React from 'react'
import './Nav.scss'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav' >
      <div className='logo' >
        <NavLink to='/' ><h1>GIMIX</h1></NavLink>
      </div>
      <div className='links' >
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/exercises' >Exercises</NavLink>
        <NavLink to='/exercise/:id' >Exercise</NavLink>

      </div>
    </div>
  )
}

export default Nav
