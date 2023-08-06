"use client";
import api from "@/api";

import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import Image from "next/image";
import * as Ast from "/assets";

const PatientView = () => {
  const router = useRouter();
  const [patient, setpatient] = useState([]);
  const OnclickNav = () => {
    router.push("/addpatient");
  };
  const onclickNavProfile = (uid) => {
    router.push(`/just/${uid}`); //slug use pushing uid to next page
    //use params.slug to get it in new page
  };
  const fetchpatient = async () => {
    try {
      console.log("req sending...");
      const res = await api.post("/api/v1/user/patient");
      console.log(res.data);
      setpatient(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchpatient();
  }, []);
  return (
    <section>
      <div className="patient-container">
        <Image className="small-icon2" src={Ast.userb} alt="patient" />
        <h2 className="patientdetails">Patients</h2>
      </div>
      <div className="roundrect3"></div>
      <div className="roundrect">
        <ul className="patientList">
          {patient.map((p, index) => (
            <li className="patientItem" key={index}>
              <div className="patient-container">
                <Button
                  onClick={() => {
                    console.log("adsad");
                    onclickNavProfile(p.patient_id);
                  }}
                  className="icon-button-list"
                >
                  <Image
                    className="tiny-icon"
                    src={Ast.smalluserb}
                    alt="patient"
                  />
                </Button>
                <Button
                  onClick={() => {
                    console.log("adsad");
                    onclickNavProfile(p.patient_id);
                  }}
                  className="inside-button-patient"
                >
                  {p.name}
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
              alt="Add Patient"
            />
          </Button>

          <Button onClick={OnclickNav} className="inside-button1">
            Add Patient
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
