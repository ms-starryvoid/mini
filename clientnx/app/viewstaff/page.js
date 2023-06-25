"use client";
import api from "@/api";

import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const StaffView = () => {
  const router = useRouter();
  const OnclickNav = () => {
    router.push("/login");
  };
  const OnclickNavProfile = () => {
    router.push("/profile");
  };
  return (
    <section>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>

      <h2 className="stockdetails1">Staff details</h2>
      <div className="roundrect3"></div>
      <div className="roundrect">
        <ul className="patientList">
          <li className="patientItem">
            <Button onClick={OnclickNavProfile} className="inside-button4">
              Edna Jason
            </Button>
          </li>
        </ul>
      </div>

      <div className="roundrect1">
        <div className="addbox-centre1">
          <Button onClick={OnclickNav} className="inside-button1">
            Add staff
          </Button>
        </div>
      </div>
      <div className="roundrect2">
        <div className="addbox-centre1">
          <h2 className="inside-button1">Total staffs </h2>
          <div className="inside-button6">25</div>
        </div>
      </div>
    </section>
  );
};

export default StaffView;
