"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AshaHome = () => {
  const router = useRouter();
  const [ashadata, setashadata] = useState([]);
  const OnclickNavViewP = () => {
    router.push("/viewpatient");
  };
  const OnClickProfile = () => {
    router.push("/");
  };
  const OnclickNavAddP = () => {
    router.push("/addpatient");
  };
  const OnclickNavViewS = () => {
    router.push("/stockrequest");
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
      setashadata(res.data.data);
      console.log(ashadata);
      localStorage.setItem("userData", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <section className="zoom-out">
      <div className="page-container75">
        <div className="circle"></div>
        <h2 className="heading1">Welcome back, {ashadata.name}</h2>

        <div className="container">
          <div className="rounded-rectangle-long">
            <div className="inside-button">
              <Button onClick={OnclickNavViewP} className="inside-button">
                View Patient
              </Button>
            </div>
          </div>

          <div className="rounded-rectangle-long">
            <Button onClick={OnclickNavViewS} className="inside-button">
              Visit Schedule
            </Button>
          </div>

          <div className="rounded-rectangle-long">
            <Button onClick={OnclickNavAddP} className="inside-button">
              Add Patient
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AshaHome;
