"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Image from "next/image";
import * as Ast from "/assets";

const AdminHome = () => {
  const router = useRouter();
  const OnclickNavViewAsha = () => {
    router.push("/viewstaff");
  };
  const OnClickProfile = () => {
    router.push("/adminprofile");
  };
  const Onclickstock = () => {
    router.push("/stockdetails");
    // to clear local storage on logout
  };
  const Onclickviewpatient = () => {
    router.push("/viewpatient");
  };

  const Onclickvisit = () => {
    router.push("/visitdetail");
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
    <section className="zoom-out">
      <div className="page-container75">
        <h2 className="heading1">Welcome back, Admin</h2>
        <div className="container-short">
          <div className="rounded-rectangle-home">
            <div className="rounded-rectangle-darker">
              <Button onClick={Onclickviewpatient} className="icon-button">
                <Image
                  className="medium-icon"
                  src={Ast.user}
                  alt="View Patient"
                />
              </Button>

              <Button onClick={Onclickviewpatient} className="inside-button">
                View Patient
              </Button>
            </div>
          </div>

          <div className="rounded-rectangle-home">
            <div className="rounded-rectangle-darker">
              <Button onClick={Onclickviewpatient} className="icon-button">
                <Image
                  className="small-icon1"
                  src={Ast.schedule}
                  alt="Visit Schedule"
                />
              </Button>

              <Button onClick={Onclickviewpatient} className="inside-button">
                Visit Schedule
              </Button>
            </div>
          </div>
        </div>
        <div className="container-short">
          <div className="rounded-rectangle-home">
            <div className="rounded-rectangle-darker">
              <Button onClick={Onclickviewpatient} className="icon-button">
                <Image
                  className="small-icon1"
                  src={Ast.stock}
                  alt="Stock Details"
                />
              </Button>

              <Button onClick={Onclickviewpatient} className="inside-button">
                Stock Details
              </Button>
            </div>
          </div>

          <div className="rounded-rectangle-home">
            <div className="rounded-rectangle-darker">
              <Button onClick={Onclickviewpatient} className="icon-button">
                <Image
                  className="small-icon1"
                  src={Ast.asha}
                  alt="Staff Details"
                />
              </Button>

              <Button onClick={Onclickviewpatient} className="inside-button">
                Staff Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHome;
