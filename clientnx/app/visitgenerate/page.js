"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const VisitGenerate = () => {
  const router = useRouter();
  const OnclickNav = () => {
    router.push("/login");
  };
  return (
    <section>
      <h2 className="stockdetails1">Stock details</h2>
      <div className="roundrect3"></div>
      <div className="roundrect">
        <ul className="patientList">
          <li className="patientItem">
            <div className="addbox">
              <Button
                onClick={() => {
                  OnclickNavInc();
                }}
                className="inside-button3"
              >
                +
              </Button>
              <Button
                onClick={() => {
                  OnclickNavdec();
                }}
                className="inside-button3"
              >
                -
              </Button>
            </div>
          </li>
        </ul>
        <div className="form-container">
          <Input
            className="form-input"
            type="text"
            placeholder="Stock Item"
            name="stockname"
          />

          <Input
            className="form-input"
            type="number"
            placeholder="Quantity"
            name="quantity"
          />

          <div className="addbox2">
            <Button className="inside-button5">Add new stock</Button>
          </div>
        </div>
      </div>

      <div className="roundrect1">
        <h2 className="stockdetails">Stock required </h2>

        <div className="roundrect1">
          <h2 className="stockdetails">Stock required </h2>
          <ul className="list-checkbox">
            <li>
              <span className="item-details">
                <div className="button-container">
                  <Button className="inside-button-accept">Delete</Button>
                </div>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="roundrect2">
        <h2 className="stockdetails">This month's stock</h2>
        <div className="list-checkbox">
          <ul>
            <li className="patientItem1">
              <div className="inside-button4"> gfhj</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisitGenerate;
