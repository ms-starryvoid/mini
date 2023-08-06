"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as Ast from "/assets";

const AdminProfile = () => {
  const [userdetails, setuserdetails] = useState([]);
  const [editing, setEditing] = useState(false);

  const getdata = async () => {
    try {
      const storedData = localStorage.getItem("userData");
      const userData = JSON.parse(storedData);

      const name = userData.data.uid;
      console.log(name);

      const res = await api.post(`/api/v1/user/ashadetail`, { name: name });
      setuserdetails(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSubmit = async (values) => {
    try {
      const storedData = localStorage.getItem("userData");
      const userData = JSON.parse(storedData);

      const name = userData.data.uid;
      console.log(name);
      const res = await api.post(
        `/api/v1/user/ashaprofileupdate`,
        { name: name },
        values
      );
      // Handle success, show message or perform any additional actions
      message.success("Profile updated successfully");
      setEditing(false);
    } catch (error) {
      // Handle error, show error message or perform any additional actions
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  const router = useRouter();
  return (
    <div className="container-profile">
      <h1 className="heading-profile">Admin's Profile</h1>
      <div className="circle-profile">
        <Image className="huge-icon" src={Ast.adminb} alt="admin" />
      </div>
      <div className="rectangle-profile">
        {editing ? (
          <Form
            onFinish={handleSubmit}
            initialValues={userdetails}
            className="signup-form"
          >
            <Form.Item name="email" label="Email">
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone">
              <Input />
            </Form.Item>
            <Form.Item name="address" label="Address">
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </Form>
        ) : (
          <>
            <div className="patient-container">
              <div className="patientList">
                <p>Name: Amalia {userdetails.name}</p>
                <p>Age: 50{userdetails.age}</p>
                <p>Gender: Female{userdetails.gender}</p>
                <p>Email: amalia19@gmail.com{userdetails.email}</p>
                <p>Phone: 7835468212{userdetails.phone}</p>
              </div>
            </div>
            <Button
              type="submit"
              onClick={handleEdit}
              className="insid-button5"
            >
              Edit
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;
