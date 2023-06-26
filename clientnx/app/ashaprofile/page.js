"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Layout from "../layout";

const AshaProfile = () => {
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
    <Layout>
      <div className="container-profile">
        <h1 className="heading-profile"> Asha's Profile</h1>
        <div className="circle-profile" />
        <div className="rectangle-profile">
          <p>Name :</p>
          <p>Asha ID :</p>
          <p>Age :</p>
          <p>Gender :</p>
          <p>email :</p>
          <p>phone no. :</p>
          <p>address :</p>
          <div className="line-profile" />
          <Button className="smalltext-profile">Edit profile</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AshaProfile;
