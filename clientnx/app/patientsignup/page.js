'use client'

import api from '@/api'

import { Form, Input, message } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'
import Layout from "../layout"

const page = () => {
    const router = useRouter()
    const OnFinishHandler= async(values)=>{
        try {
            console.log(values)
            //dispatch(showloading())
            const res = await api.post('/api/v1/user/patientsignup',values)
           // dispatch(hideLoading())
            if(res.data.success){
             
             message.success("Registered successfully")
             router.push('/patientlogin')
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
    <Layout>
    <div className='container'>
      <div className='signupcontainer'>
      <Form layout="vertical"
      onFinish={OnFinishHandler}
      className='signup-form'>
        <h3> signup</h3>
        
        <Form.Item label= 'PATIENT Id' name ='patient_id'>
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
    </div>
    </Layout>
  )
}

export default page