"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const StockRequest = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [appitems, setappItems] = useState([] || ["no approved"]);
  const [penditems, setpendItems] = useState([] || ["no pending"]);

  const fetchstockdetails = async () => {
    try {
      const response = await api.get("/api/v1/user/stock");
      setItems(response.data);
      console.log(items);
    } catch (error) {
      console.error("Error fetching stock items:", error);
    }
  };
  const OnclickNavReq = async (stock_name) => {
    try {
      const storedData = localStorage.getItem("userData");
      const userData = JSON.parse(storedData);
      console.log(stock_name);

      const patient_id = "1001";
      console.log(patient_id);
      const request_quantity = 1;
      const res = await api.post("api/v1/user/stockrequets", {
        stock_name: stock_name,
        patient_id: patient_id,
        request_quantity: request_quantity,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const fetchapprovedreq = async () => {
    try {
      const patient_id = "1001";
      const res = await api.post("api/v1/user/approvedreq", {
        patient_id: patient_id,
      });
      setappItems(res.data.approvedRequests);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchpendingreq = async () => {
    try {
      const patient_id = "1001";
      const res = await api.post("api/v1/user/pendingreq", {
        patient_id: patient_id,
      });
      setpendItems(res.data.pendingRequests);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchstockdetails();
    fetchapprovedreq();
    fetchpendingreq();
  }, []);
  return (
    <section>
      <h2 className="stockdetails1">Visit Schedule</h2>
      <div className="roundrect3"></div>
      <div className="roundrect">
        <ul className="patientList">
          <li className="patientItem">
            <Button className="inside-button5">Edna Jason</Button>
          </li>
          <li className="patientItem">
            <Button className="inside-button5">Dona Johnson</Button>
          </li>
          <li className="patientItem">
            <Button className="inside-button5">Megha Joy</Button>
          </li>
          <li className="patientItem">
            <Button className="inside-button5">Amalia Firoz</Button>
          </li>
          <li className="patientItem">
            <Button className="inside-button5">Arya KS</Button>
          </li>
          <li className="patientItem">
            <Button className="inside-button5">Vigil George</Button>
          </li>
        </ul>
      </div>
      <div className="roundrect2">
        <h2 className="stockdetails">Today's Visits</h2>
        <div className="list-checkbox">
          <ul className="patientList">
            <li className="patientItem">
              <Button className="inside-button5">Edna Jason</Button>
            </li>
            <li className="patientItem">
              <Button className="inside-button5">Dona Johnson</Button>
            </li>
            <li className="patientItem">
              <Button className="inside-button5">Megha Joy</Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="roundrect1">
        <h2 className="stockdetails">Upcoming Visits</h2>
        <div className="list-checkbox">
          <ul className="patientList">
            <li className="patientItem">
              <Button className="inside-button5">Aswathy S </Button>
            </li>
            <li className="patientItem">
              <Button className="inside-button5">Naveena Liz</Button>
            </li>
            <li className="patientItem">
              <Button className="inside-button5">Rebecca Susan</Button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default StockRequest;
