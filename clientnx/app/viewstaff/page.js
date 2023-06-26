"use client";
import api from "@/api";

import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const StaffView = () => {
  const router = useRouter();
  const [asha,setasha]=useState([])

  const getasha=async()=>{
    try {
      const res = await api.post('/api/v1/user/ashaname')
      console.log(res.data)
      setasha(res.data)
    } catch (error) {
      console.log(error)
    }

  }  
  const OnclickNav = () => {
    router.push("/addahsa");
  };
  const OnclickNavProfile = () => {
    router.push("/profile");
  };
  useEffect(()=>{
    getasha()
  },[])
  return (
    <section>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>

      <h2 className="stockdetails1">Staff details</h2>
      <div className="roundrect3"></div>
      <div className="roundrect">
        <ul className="patientList">
        {asha.map((worker, index) => (
            <li className="patientItem" key={index}>
              <Button onClick={OnclickNavProfile} className="inside-button4">
                {worker.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="roundrect1">
        <div className="addbox-centre1">
          <Button onClick={OnclickNav} className="inside-button1">
            Add staff
          </Button>
        </div>
      </div>
      <div className="roundrect2">
        <div className="addbox-centre1">
          <h2 className="inside-button1">Total staffs </h2>
          <div className="inside-button6">{asha.length}</div>
        </div>
      </div>
    </section>
  );
};

export default StaffView;
