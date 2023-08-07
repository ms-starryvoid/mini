"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as Ast from "/assets";

const ReportDetails = ({ params }) => {
  const [userdetails, setuserdetails] = useState([]);
  const [report, setreport] = useState([]);
  const router = useRouter();

  const getdata = async () => {
    try {
      const storedData = localStorage.getItem("userData");
      const userData = JSON.parse(storedData);
      const day = params.slug;
      const patient_id = userData.data.uid;
      console.log(patient_id);

      const res = await api.post(`/api/v1/user/viewindi`, {
        params: { patient_id: patient_id, day: day },
      });
      setuserdetails(res.data);
      setreport(res.data.report);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const onClickNav = () => {
    router.push("/login");
  };

  const onclickreport = (day) => {
    router.push(`/viewreport`);
  };

  const onclickpdf = () => {
    router.push("/viewreport");
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="container-profile">
      <h1 className="heading-profile">Report</h1>
      <div className="circle-profile">
        <Image className="huge-icon" src={Ast.reportb} alt="report" />
      </div>
      <div className="rectangle-profile">
        <div className="patient-container">
          <div className="patientList">
            <p>Patient name: {userdetails.name}</p>
            <p>Patient ID: {userdetails.uid}</p>
            <p>Visit date: {userdetails.day}</p>
            <p>Blood Pressure: {report.bood_pressure}</p>
            <p>Blood sugar: {report.blood_sugar}</p>
            <p>Remarks: {report.remarks}</p>
          </div>
        </div>
        <div className="button-container-report">
          <Button
            type="submit"
            onClick={onclickpdf}
            className="inside-button-accept"
          >
            Generate PDF
          </Button>
          <Button
            type="submit"
            onClick={onclickreport}
            className="inside-button-reject"
          >
            Exit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;
