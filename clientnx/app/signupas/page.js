"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Layout from "../layout";
const SignupAs = () => {
  const router = useRouter();
  const OnClickProfile = () => {
    router.push("/");
  };
  const OnclickNavAdmin = () => {
    router.push("/adminlogin");
    // to clear local storage on logout

    localStorage.clear();
  };
  const OnclickNavAsha = () => {
    router.push("/ashahome");
    // to clear local storage on logout

    localStorage.clear();
  };
  const OnclickNavPatient = () => {
    router.push("/patienthome");
    // to clear local storage on logout

    localStorage.clear();
  };
  
  return (
    <Layout>
      <section>
        <div className="circle"></div>
        <div className="container">
          <div className="rounded-rectangle-huge">
            <h2 className="heading3">Sign up as</h2>

            <div className="container">
              <div>
                <div className="rounded-rectangle-darker"></div>
                <Button onClick={OnclickNavAdmin} className="inside-button1">
                  Admin
                </Button>
              </div>

              <div>
                <div className="rounded-rectangle-darker"></div>
                <Button onClick={OnclickNavAsha} className="inside-button1">
                  Asha worker
                </Button>
              </div>

              <div>
                <div className="rounded-rectangle-darker"></div>
                <Button onClick={OnclickNavPatient} className="inside-button1">
                  Patient
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignupAs;
