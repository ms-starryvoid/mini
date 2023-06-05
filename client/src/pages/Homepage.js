import React from 'react'
import {NavLink} from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
    <h1> Homepage </h1>
    <ul>
  <li><NavLink to='/signup'> signup </NavLink></li>
  <li><NavLink to='/login'> login </NavLink></li>
    </ul>
    </div>
  )
}

export default Homepage