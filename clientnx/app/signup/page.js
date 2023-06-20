'use client'

import api from '@/api'
import { Form, Input, message } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
    const OnFinishHandler= async(values)=>{
        try {
            console.log(values)
            //dispatch(showloading())
            const res = await api.post('/api/v1/user/signup',values)
           // dispatch(hideLoading())
            if(res.data.success){
             
             message.success("Registered successfully")
             router.push('/adminlogin')
            //redirect('/login')
            }
            else{
              message.error(res.data.message);
            }
           } catch (error) {
            console.log(error)
            
            message.error("something went wrong")
        
           }
     
    }
  return (
    <div>
      <Form layout="vertical"
      onFinish={OnFinishHandler}
      className='signup-form'>
        <h3> signup</h3>
        <Form.Item label ="name" name="name">
          <Input type="text" required/>
        </Form.Item>
        <Form.Item label= 'ASHA Id' name ='ashaid'>
        <Input type="text"  required/>
        </Form.Item>
        <Form.Item label ="email" name="email">
        <Input type="text" required/>
        </Form.Item>
        <Form.Item label ="password" name="password">
          <Input type="password" required/>
        </Form.Item>
        <button type="submit">register</button>
      </Form>
    </div>
  )
}

export default page