"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as Ast from "/assets";
import withAuth from "../withAuth";

const PatientHome = () => {
  const router = useRouter();
  const [user,setuser]=useState([])
  const OnclickNavViewR = () => {
    router.push("/viewreport");
  };
  const OnClickProfile = () => {
    router.push("/");
  };
  const Onclickvisit = () => {
    router.push("/visit");
  };
  const OnclickNavStockR = (id) => {
    router.push(`/stockrequest/${id}`);
    // router.push("/stockrequest");
  };
  const getUserData = async () => {
    try {
      const res = await api.post(
        "/api/v1/user/getpatientdata",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
      setuser(res.data.data)
      console.log(user)
      localStorage.setItem("userData", JSON.stringify(res.data.data));
    } catch (error) {
      console.log(error);//take data from the local storage if it hasnt changed on back button
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <section className="zoom-out">
      <div className="page-container75">
        <h2 className="heading1">Welcome back, {user.name}</h2> 

        <div className="container">
          <div className="rounded-rectangle-long-home">
            <div className="inside-button">
              <Button onClick={OnclickNavViewR} className="icon-button">
                <Image
                  className="medium-icon"
                  src={Ast.report}
                  alt="View Report"
                />
              </Button>
              <Button onClick={OnclickNavViewR} className="inside-button">
                View Report
              </Button>
            </div>
          </div>

          <div className="rounded-rectangle-long-home">
            <Button onClick={Onclickvisit} className="icon-button">
              <Image
                className="medium-icon"
                src={Ast.schedule}
                alt="Visit Schedule"
              />
            </Button>
            <Button onClick={Onclickvisit} className="inside-button">
              Visit Schedule
            </Button>
          </div>

          <div className="rounded-rectangle-long-home">
            <Button onClick={()=> OnclickNavStockR(user.uid)} className="icon-button">
              <Image
                className="small-icon1"
                src={Ast.stock}
                alt="Stock Request"
              />
            </Button>
            <Button onClick={()=>OnclickNavStockR} className="inside-button">
              Stock Request
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withAuth(PatientHome);
