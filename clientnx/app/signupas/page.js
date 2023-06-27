"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Layout from "../layout1";

const SignupAs = () => {
  const router = useRouter();

  const OnclickNavAdmin = () => {
    router.push("/adminsignup");
    // to clear local storage on logout
  };
  const OnclickNavAsha = () => {
    router.push("/ashasignup");
    // to clear local storage on logout
  };
  const OnclickNavPatient = () => {
    router.push("/patientsignup");
    // to clear local storage on logout
  };

  return (
    <Layout>
      <section className="zoom-out">
        <div className="page-container75">
          <div className="circle"></div>
          <div className="container">
            <div className="rounded-rectangle-huge">
              <h2 className="heading3">Sign up as</h2>

              <div className="container">
                <div>
                  <div className="rounded-rectangle-darker"></div>
                  <Button onClick={OnclickNavAsha} className="inside-button1">
                    Asha worker
                  </Button>
                </div>

                <div>
                  <div className="rounded-rectangle-darker"></div>
                  <Button
                    onClick={OnclickNavPatient}
                    className="inside-button1"
                  >
                    Patient
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignupAs;
