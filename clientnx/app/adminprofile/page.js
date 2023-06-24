'use client'

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AdminProfile = () => {
  const [userdetails,setuserdetails]=useState([])
  const getdata= async()=>{
    try {
      const storedData= localStorage.getItem('userData')
      const userData = JSON.parse(storedData);

  
     const name = userData.data.uid;
      console.log(name)
      const encodedid= encodeURIComponent(name)
    const res =  await api.post(`/api/v1/user/ashaprofile`,name)
    setuserdetails(res.data)
    console.log(res.data)
      
    } catch (error) {
      console.log(error)
      
    }
   
  }

  const Editprofile= async()=>{
    const res = await api.post(`api/v1/user/ashaprofileupdate/:${userdetails.asha_id}`, values)
  }
  useEffect(()=>{
    getdata()
  },[])
    const router = useRouter();
    return (
      <div className="container-profile">
        <h1 className="heading-profile">Admin's Profile</h1>
        <div className="circle-profile" />
        <div className="rectangle-profile">
          <p>Name        : {userdetails.name}</p>
          <p>Age         :{userdetails.age} </p>
          <p>Gender      :{userdetails.gender}</p>
          <p>email       :{userdetails.email}</p>
          <p>phone no.   :{userdetails.email}</p>
          <p>address     : {userdetails.address} </p>
          <div className="line-profile" />
          <Button className="smalltext-profile" onClick={Editprofile}>Edit profile</Button>  
        </div>
      </div>
    );
  };

  export default AdminProfile;