'use client'

import { Form,Button,Input,Checkbox, message } from 'antd'

import React from 'react'

import { useRouter } from 'next/navigation'
import api from '@/api'

const Ashalogin = () => {
  const router =useRouter()
  const OnFinishHandler= async (values) =>{
    try {
      //dispatch(showloading())
      const res = await api.post('/api/v1/user/login',values)
    //dispatch(hideLoading())
      if(res.data.success && res.data.isAsha){
    localStorage.setItem("token",res.data.token)
    message.success("Login Successful")
    router.push('/ashahome')
   }
   
   else{
    message.error("something went wrong")
    message.error(res.data.message)
   }
      
    } catch (error) {
     // dispatch(hideloading())
      console.log(error)
      message.error("something went wrong")
      message.error(res.data.message)
    }
  }
    //navigate('/ashahome')

  
  return (
    <div className="container">
    <div className="signupcontainer">
      <h2 className="signup-heading">ASHA Worker Login</h2>
      <Form
        layout="vertical"
        onFinish={OnFinishHandler}
        className="signup-form"
      >
        <Form.Item label="Username" name="email">
          <Input type="text" required />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <div className="centered-button-container">
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  </div>
  )
}

export default Ashalogin