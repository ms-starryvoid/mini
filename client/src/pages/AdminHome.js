import axios from 'axios'
import React, {useEffect} from 'react'

const AdminHome = () => {
 const getUserData= async()=>{
    try {
        const res= await axios.post('http://localhost:8080/api/v1/user/getUserData',{},{
            headers:{
                Authorization: 'Bearer' + localStorage.getItem('token'),
            },
        })
    } catch (error) {
        console.log(error)
    }
 }
 
 useEffect(() => {
    getUserData()
 },[])
 
 
    return (
    <div><h1> Admin home</h1></div>
  )
}

export default AdminHome