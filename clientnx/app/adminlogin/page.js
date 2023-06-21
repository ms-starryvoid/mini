'use client'

import api from '@/api'

import { Form, Input, message ,Checkbox, Button} from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'


const Login = () => {
  const router= useRouter()
  
  //on finish handler function
  const onFinishHandler = async(values)=>{
    try {
      //dispatch(showloading())
      const res = await api.post('/api/v1/user/login',values)
    //dispatch(hideLoading())
      if(res.data.success && res.data.isAdmin){
    localStorage.setItem("token",res.data.token)
    message.success("Login Successful")
    router.push('/adminhome')
   }
   else if(res.data.success && !(res.data.isAdmin))
   {
    message.error("YOu are not admin")
    router.push('/')
   }
   else{
    message.error("something went wrong")
    message.error(res.data.message)
   }
      
    } catch (error) {
     // dispatch(hideloading())
      console.log(error)
      message.error("something went wrong")
      
    }
  }
  return (
    <div className='adminlogin-form'><h1 align ="center" className='Adminlogin' font-color='white'> Admin login</h1>
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
    onFinish={onFinishHandler}
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

export default Login