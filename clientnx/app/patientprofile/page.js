'use client'

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const PatientProfile = () => {
    const router = useRouter();
    return (
      <div className="container-profile">
        <h1 className="heading-profile">Patient's Profile</h1>
        <div className="circle-profile" />
        <div className="rectangle-profile">
          <p>Name        :</p>
          <p>Patient ID  :</p>
          <p>Age         :</p>
          <p>Gender      :</p>
          <p>email       :</p>
          <p>phone no.   :</p>
          <p>address     :</p>
          <div className="line-profile" />
          <Button className="smalltext-profile">Edit profile</Button> 
        </div>
      </div>
    );
  };

  export default PatientProfile;