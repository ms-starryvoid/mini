"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Image from "next/image";
import * as Ast from "/assets";

const LoginAs = () => {
  const router = useRouter();

  const OnclickNavAdmin = () => {
    router.push("/adminlogin");
    // to clear local storage on logout
  };
  const OnclickNavAsha = () => {
    router.push("/ashalogin");
    // to clear local storage on logout
  };
  const OnclickNavPatient = () => {
    router.push("/patientlogin");
    // to clear local storage on logout
  };

  return (
    <section className="zoom-out">
      <div className="page-container75">
        <div className="container">
          <div className="rounded-rectangle-huge">
            <h2 className="heading3">Login as</h2>

            <div className="container">
              <div>
                <div className="rounded-rectangle-darker">
                  <Button onClick={OnclickNavAdmin} className="icon-button">
                    <Image className="small-icon" src={Ast.admin} alt="Admin" />
                  </Button>
                </div>
                <Button onClick={OnclickNavAdmin} className="inside-button12">
                  Admin
                </Button>
              </div>

              <div>
                <div className="rounded-rectangle-darker">
                  <Button onClick={OnclickNavAsha} className="icon-button">
                    <Image className="small-icon" src={Ast.asha} alt="Asha" />
                  </Button>
                </div>
                <Button onClick={OnclickNavAsha} className="inside-button12">
                  Asha Worker
                </Button>
              </div>
              <div>
                <div className="rounded-rectangle-darker">
                  <Button onClick={OnclickNavAsha} className="icon-button">
                    <Image
                      className="small-icon1"
                      src={Ast.user}
                      alt="Patient"
                    />
                  </Button>
                </div>
                <Button onClick={OnclickNavAsha} className="inside-button12">
                  Patient
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginAs;
