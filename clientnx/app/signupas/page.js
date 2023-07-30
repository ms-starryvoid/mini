"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Layout from "../layout1";
import Image from "next/image";
import * as Ast from "/assets";

const SignupAs = () => {
  const router = useRouter();

  const OnclickNavAdmin = () => {
    router.push("/adminsignup");
    // to clear local storage on logout
  };
  const OnclickNavAsha = () => {
    router.push("/signup");
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
          <div className="container">
            <div className="rounded-rectangle-huge">
              <h2 className="heading3">Sign up as</h2>

              <div className="container">
                <div>
                  <div className="rounded-rectangle-darker">
                    <Button onClick={OnclickNavAsha} className="icon-button">
                      <Image className="small-icon" src={Ast.admin} alt="Admin" />
                    </Button>
                  </div>
                  <Button onClick={OnclickNavAsha} className="inside-button12">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignupAs;
