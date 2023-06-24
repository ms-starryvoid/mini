'use client'

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AdminProfile = () => {
  const [userdetails,setuserdetails]=useState([])
  const [editing, setEditing] = useState(false);

  const getdata= async()=>{
    try {
      const storedData= localStorage.getItem('userData')
      const userData = JSON.parse(storedData);

  
     const name = userData.data.uid;
      console.log(name)
      
    const res =  await api.post(`/api/v1/user/ashadetail`,{name:name})
    setuserdetails(res.data)
    console.log(res.data)
      
    } catch (error) {
      console.log(error)
      
    }
   
  }

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSubmit = async (values) => {
    try {
      const storedData= localStorage.getItem('userData')
      const userData = JSON.parse(storedData);

  
     const name = userData.data.uid;
      console.log(name)
      const res = await api.post(`/api/v1/user/ashaprofileupdate`,{name:name}, values);
      // Handle success, show message or perform any additional actions
      message.success("Profile updated successfully");
      setEditing(false);
    } catch (error) {
      // Handle error, show error message or perform any additional actions
      console.log(error);
    }
  };
  useEffect(()=>{
    getdata()
  },[])
    const router = useRouter();
    return (
      <div className="container-profile">
        <h1 className="heading-profile">Admin's Profile</h1>
        <div className="circle-profile" />
        <div className="rectangle-profile">
        {editing ? (
          <Form onFinish={handleSubmit} initialValues={userdetails}>
            
            <Form.Item name="email" label="Email">
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone">
              <Input />
            </Form.Item>
            <Form.Item name="address" label="Address">
              <Input />
            </Form.Item>
            <div className="line-profile" />
            <Button type="primary" htmlType="submit">Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </Form>
        ) : (
          <>
            <p>Name: {userdetails.name}</p>
            <p>Age: {userdetails.age}</p>
            <p>Gender: {userdetails.gender}</p>
            <p>Email: {userdetails.email}</p>
            <p>Phone: {userdetails.phone}</p>
            <p>Address: {userdetails.address}</p>
            <div className="line-profile" />
            <Button className="smalltext-profile" onClick={handleEdit}>Edit profile</Button>
          </>
        )}</div>
      </div>
    );
  };

  export default AdminProfile;