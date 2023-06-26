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
    <div><h1 className='heading1'> asha login
      </h1>
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={OnFinishHandler}
    className='adminloginbox'
   
  >
    <Form.Item
      label="Username"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default Ashalogin