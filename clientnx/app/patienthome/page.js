"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
const PatientHome = () => {
  const router = useRouter();
  const OnclickNavViewR = () => {
    router.push("/viewreport");
    // to clear local storage on logout

    localStorage.clear();
  };
  const OnClickProfile = () => {
    router.push("/");
  };
  const OnclickNavViewS = () => {
    router.push("/viewschedule");
    // to clear local storage on logout

    localStorage.clear();
  };
  const OnclickNavStockR = () => {
    router.push("/stockrequest");
    // to clear local storage on logout

    localStorage.clear();
  };
  const getUserData = async () => {
    try {
      const res = await api.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
      localStorage.setItem("userData", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <section>
      <div className="circle"></div>
      <h2 className="heading1">Welcome back, Edna</h2>

      <div className="container">
        <div className="rounded-rectangle-long">
          <div className="inside-button">
            <Button onClick={OnclickNavViewR} className="inside-button">
              View Report
            </Button>
          </div>
        </div>

        <div className="rounded-rectangle-long">
          <Button onClick={OnclickNavViewS} className="inside-button">
            Visit Schedule
          </Button>
        </div>

        <div className="rounded-rectangle-long">
          <Button onClick={OnclickNavStockR} className="inside-button">
            Stock Request
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PatientHome;
