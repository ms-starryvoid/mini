'use client'

import api from '@/api'

import { Form, Input, message ,Checkbox, Button} from 'antd'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
const AdminHome = () => {
    const router=useRouter()
    const OnclickNavViewAsha = () => {
        router.push("/viewasha");
        // to clear local storage on logout
        
        localStorage.clear()
      };
      const OnClickProfile=()=>{
        router.push('/')
      }
      const OnclickNav = () => {
        router.push("/viewasha");
        // to clear local storage on logout
        
        localStorage.clear()
      };
 const getUserData= async()=>{
    try {
        const res= await api.post('/api/v1/user/getUserData',{},{
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        })
        console.log(res)
        localStorage.setItem('userData', JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
 }
 
 useEffect(() => {
    getUserData()
 },[])
 
 
    return (
        <section>
        <div className="circle"></div>
        <h2 className="heading1">Welcome back, Admin</h2>
  
        <div className="container-short">
          <div className="rounded-rectangle">
            <div className="inside-button">
              <Button onClick={OnclickNav} className="inside-button">
                View patients
              </Button>
            </div>
          </div>
  
          <div className="rounded-rectangle">
            <Button onClick={OnclickNav} className="inside-button">
              Visit Schedules
            </Button>
          </div>
        </div>
        <div className="container-short">
          <div className="rounded-rectangle">
            <Button onClick={OnclickNav} className="inside-button">
              Stock Details
            </Button>
          </div>
  
          <div className="rounded-rectangle">
            <Button onClick={OnclickNavViewAsha} className="inside-button">
              Staff Details
            </Button>
            <Button onClick={OnClickProfile}>
                Profile
            </Button>
          </div>
        </div>
      </section>
  )
}

export default AdminHome