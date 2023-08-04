"use client";
import api from "@/api";

import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import Image from "next/image";
import * as Ast from "/assets";

const StaffView = () => {
  const router = useRouter();
  const [asha, setasha] = useState([]);

  const getasha = async () => {
    try {
      const res = await api.post("/api/v1/user/ashaname");
      console.log(res.data);
      setasha(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const OnclickNav = () => {
    router.push("/addasha");
  };
  const OnclickNavProfile = (workerid) => {
    // router.push("/profile");
  };
  useEffect(() => {
    getasha();
  }, []);
  return (
    <section>
      <div className="patient-container">
        <Image className="small-icon2" src={Ast.userb} alt="patient" />
        <h2 className="patientdetails">Staff Details</h2>
      </div>
      <div className="roundrect3"></div>
      <div className="roundrect">
        <ul className="patientList">
          {asha.map((worker, index) => (
            <li className="patientItem" key={index}>
              <div className="patient-container">
                <Button
                  onClick={OnclickNavProfile(worker.asha_id)}
                  className="icon-button-list"
                >
                  <Image
                    className="tiny-icon"
                    src={Ast.smalluserb}
                    alt="patient"
                  />
                </Button>
                <Button
                  onClick={OnclickNavProfile(worker.asha_id)}
                  className="inside-button-patient"
                >
                  {worker.name}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="roundrect1">
        <div className="addbox-centre2">
          <Button onClick={OnclickNav} className="icon-button">
            <Image
              className="small-icon"
              src={Ast.addpatientb}
              alt="Add Staff"
            />
          </Button>

          <Button onClick={OnclickNav} className="inside-button1">
            Add Staff
          </Button>
        </div>
      </div>
      <div className="roundrect2">
        <div className="addbox-centre1">
          <h2 className="inside-button1">Total Staffs </h2>
          <div className="inside-button6">{asha.length}</div>
        </div>
      </div>
    </section>
  );
};

export default StaffView;
