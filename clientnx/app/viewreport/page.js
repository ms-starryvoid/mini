"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const Viewreport = () => {
  const router = useRouter();
  const OnclickNav = () => {
    router.push("/login");
  };

  return (
    <section>
      <h2 className="report-heading">Report</h2>
      <div className="report-view-container">
        <div className="roundrect-report">
          <div className="reports">
            <ul className="patientList">
              <li className="patientItem">
                <div className="report">
                  <Button
                    onClick={() => {
                      OnclickNav();
                    }}
                    className="reportno"
                  >
                    item.report_name
                  </Button>
                </div>
              </li>
            </ul>
          </div>
          <div className="dates">
            <ul className="patientList">
              <li className="patientItem">
                <div className="date">
                  <Button
                    onClick={() => {
                      OnclickNav();
                    }}
                    className="reportno"
                  >
                    item.date
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Viewreport;
