"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const StockRequest = () => {
  const router = useRouter();
  const [items,setItems]=useState([])
  
  const fetchstockdetails = async () => {
    try {
      const response = await api.get("/api/v1/user/stock");
      setItems(response.data);
      console.log(items);
    } catch (error) {
      console.error("Error fetching stock items:", error);
    }
  };
  const OnclickNavReq = async () => {
   try {
    const storedData= localStorage.getItem('userData')
    const userData = JSON.parse(storedData);


   const patient_id = userData.data.uid;
    console.log(patient_id)
    patient_id='1000'
     const res = await api.post('api/v1/user/stockrequests',
      {stock_name:stock_name,patient_id:patient_id,request_quantity:request_quantity})
     
   } catch (error) {
    console.log(error)
   }
  };

  useEffect(()=>{
  fetchstockdetails()
  },[])
  return (
    <section>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>

      <h2 className="stockdetails1">Stock request</h2>
      <div className="roundrect3"></div>
      <div className="roundrect">
        <ul className="patientList">
        {items.map((item) => (
            <li className="patientItem" key={item.id}>
              {item.stock_name}
              <div className="addbox">
                <Button onClick={()=>{handleRequest} }className="inside-button5">
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
            <li className="patientItem">Walker</li>
          </ul>
        </div>
      </div>
      <div className="roundrect2">
        <h2 className="stockdetails">Pending Requests</h2>
        <div className="list-checkbox">
          <ul className="patientList">
            <li className="patientItem">Walker</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default StockRequest;
