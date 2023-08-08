"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

/*const VisitGenerate = () => {
  const router = useRouter();
  const [scheduleItems, setScheduleItems] = useState([]);
  const [patientList, setPatientList] = useState([]);
  const [showPatientList, setShowPatientList] = useState(false);

  useEffect(() => {
    // Fetch schedule items from the backend here
    fetchScheduleItems();
  }, []);

  const fetchScheduleItems = async () => {
    try {
      const date = "2023-04-05";
      const response = await api.post("/api/v1/user/visitdetail", {
        day: date,
      }); // Adjust the API endpoint
      setScheduleItems(response.data.visitDetails);
      console.log(scheduleItems);
    } catch (error) {
      console.error("Error fetching schedule items:", error);
    }
  };

  const fetchPatientList = async (date) => {
    try {
      const response = await api.get("/api/v1/user/patientlist", {
        date: date,
      });
      setPatientList(response.data);
      console.log(patientList);
    } catch (error) {
      console.error("Error fetching patient list:", error);
    }
  };

  const onClickNav = () => {
    router.push("/login");
  };

  return (
    <section>
      <h2 className="stockdetails1">Schedule Generate</h2>
      <div className="roundrect3"></div>
      <div className="roundrect">
        <ul className="patientList">
          <li className="patientItem">
            <div className="report">
              <Button
                className="reportno"
                onClick={() => fetchPatientList(item.date)}
              >
                date
              </Button>
            </div>
          </li>
        </ul>
      </div>

      <div className="roundrect1">
        <h2 className="stockdetails">Patients</h2>
      </div>
      {showPatientList && (
        <div className="roundrect1">
          <div className="list-checkbox">
            <ul>
              {patientList.map((patient, index) => (
                <li ke={index} className="patientItem1">
                  <div className="inside-button4">
                    {" "}
                    {patient.name}
                    <Button className="inside-button-accept">Delete</Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="roundrect2">
        <h2 className="stockdetails">Add new patient</h2>
        <div className="form-container">
          <Input
            className="form-input"
            type="text"
            placeholder="Patient name"
            name="patientname"
          />

          <div className="addbox2">
            <Button className="inside-button-accept">Add new patient</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitGenerate;*/


const page = () => {
  return (
    <div>page</div>
  )
}

export default page
