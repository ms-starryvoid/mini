"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const PatientProfile = () => {
  const [userdetails, setuserdetails] = useState([]);
  const router = useRouter();

  const getdata = async () => {
    try {
      const storedData = localStorage.getItem("userData");
      const userData = JSON.parse(storedData);

      
      const name = userData.data.uid;
      console.log(name);

      const res = await api.post(`/api/v1/user/patientdetail`, { name: name });
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

  return (
      <div className="container-profile">
        <h1 className="heading-profile">Patient's Profile</h1>
        <div className="circle-profile" />
        <div className="rectangle-profile">
          <p>Name :{userData.name}</p>
          <p>Patient ID :{userData.patient_id}</p>
          <p>Age :{userdetails.age}</p>
          <p>Gender :{userdetails.gender}</p>
          <p>email :{userData.email}</p>
          <p>phone no. :{userData.phone}</p>

          <div className="line-profile" />
          <Button className="smalltext-profile">Edit profile</Button>
        </div>
      </div>
  );
};

export default PatientProfile;
