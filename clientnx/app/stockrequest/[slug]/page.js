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

      const patient_id = params.slug;
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
      const patient_id = params.slug;
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
      const patient_id = params.slug;
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
      <h2 className="stockdetails1">Stock request</h2>
      <div className="roundrect3"></div>
      <div className="roundrect">
        <ul className="patientList">
          {items.map((item) => (
            <li className="patientItem" key={item.id}>
              {item.stock_name}
              <div className="addbox">
                <Button
                  onClick={() => {
                    OnclickNavReq(item.stock_name);
                  }}
                  className="inside-button5"
                >
                  Request
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="roundrect1">
        <h2 className="stockdetails">Accepted Requests</h2>
        <div className="list-checkbox">
          <ul className="patientList">
            {appitems.length > 0 ? (
              appitems.map((item) => (
                <li className="patientItem" key={item.id}>
                  {item.stock_name}
                </li>
              ))
            ) : (
              <li>No approved requests</li>
            )}
          </ul>
        </div>
      </div>
      <div className="roundrect2">
        <h2 className="stockdetails">Pending Requests</h2>
        <div className="list-checkbox">
          <ul className="patientList">
            {penditems.length > 0 ? (
              penditems.map((item) => (
                <li className="patientItem" key={item.id}>
                  {item.stock_name}
                </li>
              ))
            ) : (
              <li>No pending requests</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default StockRequest;
