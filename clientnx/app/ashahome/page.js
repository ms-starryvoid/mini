"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as Ast from "/assets";

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
  const Onclickvisit = () => {
    router.push("/visit");
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
        <h2 className="heading1">Welcome back,{ashadata.name}</h2>

        <div className="container">
          <div className="rounded-rectangle-long-home">
            <div className="inside-button">
              <Button onClick={OnclickNavViewP} className="icon-button">
                <Image
                  className="medium-icon"
                  src={Ast.user}
                  alt="View Patient"
                />
              </Button>

              <Button onClick={OnclickNavViewP} className="inside-button">
                View Patient
              </Button>
            </div>
          </div>

          <div className="rounded-rectangle-long-home">
            <Button onClick={Onclickvisit} className="icon-button">
              <Image
                className="medium-icon"
                src={Ast.schedule}
                alt="Visit schedule"
              />
            </Button>

            <Button onClick={Onclickvisit} className="inside-button">
              Visit Schedule
            </Button>
          </div>

          <div className="rounded-rectangle-long-home">
            <Button onClick={OnclickNavAddP} className="icon-button">
              <Image
                className="medium-icon"
                src={Ast.addpatient}
                alt="Add Patient"
              />
            </Button>

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
