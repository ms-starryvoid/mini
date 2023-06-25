"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const StockRequest = () => {
  const router = useRouter();
  const OnclickNavReq = async () => {
    router.push("/viewasha");
    // to clear local storage on logout

    localStorage.clear();
  };
  return (
    <section>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>

      <h2 className="stockdetails1">Stock request</h2>
      <div className="roundrect3"></div>
      <div className="roundrect">
        <ul className="patientList">
          <li className="patientItem">
            Walker
            <div className="addbox">
              <Button
                onClick={() => {
                  OnclickNavReq();
                }}
                className="inside-button5"
              >
                Request
              </Button>
            </div>
          </li>
        </ul>
      </div>

      <div className="roundrect1">
        <h2 className="stockdetails">Accepted Requests</h2>
        <div className="list-checkbox">
          <ul className="patientList">
            <li className="patientItem">Walker</li>
          </ul>
        </div>
      </div>
      <div className="roundrect2">
        <h2 className="stockdetails">Pending Requests</h2>
        <div className="list-checkbox">
          <ul className="patientList">
            <li className="patientItem">Walker</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default StockRequest;
