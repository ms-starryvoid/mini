"use client";
import { format } from "sharp";
import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Viewreport = () => {
  const router = useRouter();
  const [reportItems, setReportItems] = useState([]);
  

  const fetchReportItems = async () => {
    try {
      const patient_id = "1001";
      const response = await api.get("/api/v1/user/viewreport", {
       params:{patient_id: patient_id} 
      }); // Adjust the API endpoint
      setReportItems(response.data.reports);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching report items:", error);
    }
  };

  const onClickNav = () => {
    router.push("/login");
  };

  const onClickReport = (date) => {
    router.push(`/patientreport/${date}`);
  };
  useEffect(() => {
    // Fetch report items from the backend here
    fetchReportItems();
  }, []);
  return (
    <section>
      <h2 className="report-heading">Report</h2>
      <div className="report-view-container">
        <div className="roundrect-report">
          <div className="reports">
            <ul className="patientList">
              {reportItems.map((item) => (
                <li key={item._id} className="patientItem">
                  <div className="report">
                    <Button
                      onClick={() => {
                        onClickReport(item.day);
                      }}
                      className="reportno"
                    >
                      1
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="dates">
            <ul className="patientList">
              {reportItems.map((item) => (
                <li key={item.id} className="patientItem">
                  <div className="date">
                    <p className="reportno">{item.day}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Viewreport;
