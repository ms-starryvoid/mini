"use client";
import api from "@/api";

import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const PatientView = () => {
  const router = useRouter();
  const [patient,setpatient]=useState([])
  const OnclickNav = () => {
    router.push("/addpatient");
  };
  const onclickNavProfile = (uid) => {
    router.push(`/just/${uid}`);
    
  };
  const fetchpatient=async()=>{
   try {
    console.log("req sending...")
    const res = await api.post('/api/v1/user/patient')
    console.log(res.data)
    setpatient(res.data)
    
   } catch (error) {
    console.log(error)
   }
  }
  useEffect(()=>{
    fetchpatient()
  },[])
  return (
    <section>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>

      <h2 className="stockdetails1">Patients</h2>
      <div className="roundrect3"></div>
      <div className="roundrect">
        <ul className="patientList">
        {patient.map((p, index) => (
            <li className="patientItem" key={index}>
              <button onClick={()=>{
                console.log("adsad")
                onclickNavProfile(p.patient_id)
                }} className="inside-button4">
                {p.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="roundrect1">
        <div className="addbox-centre1">
          <Button onClick={OnclickNav} className="inside-button1">
            Add patient
          </Button>
        </div>
      </div>
      <div className="roundrect2">
        <div className="addbox-centre1">
          <h2 className="inside-button1">Total patients </h2>
          <div className="inside-button6">{patient.length}</div>
        </div>
      </div>
    </section>
  );
};

export default PatientView;
