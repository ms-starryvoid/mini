import React from 'react'
import {NavLink} from 'react-router-dom'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
const Homepage = () => {
  const OnclickNav =() =>{
      const navigate= useNavigate();
      navigate('/login')

  }
  return (
    <div>
    <h1> Homepage </h1>
    <ul>
  <li><NavLink to='/signup'> signup </NavLink></li>
  <li><NavLink to='/login'> login </NavLink></li>
    
   <Button onClick={OnclickNav}>admin</Button>
  <Button onClick={OnclickNav}>ASHA worker</Button>
  <Button onClick={OnclickNav}>patient</Button> 
    </ul>
    </div>
  )
}

export default Homepage