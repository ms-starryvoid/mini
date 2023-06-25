"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

// import React from 'react';
// import "./Viewreport.css";
// import { Button } from "antd";
// import { useNavigate } from "react-router-dom";


const Viewreport = () => {
    // const navigate = useNavigate();
    const router = useRouter();
    const OnclickNav = () => {
        router.push("/login");
    // const OnclickNav = () => {navigate("/login");
}

    return (
      <section>
      <h2 className="report">Report</h2>
  
      <div className='circle1'></div>
      <div className='circle2'></div>
      <div className='circle3'></div>

      <div className='rect'></div>
      <div className='rectcontainer'>
        <div className='reports'>
        <div className='reports7'>
            <Button onClick={OnclickNav} className="reportno">Report#7</Button>
        </div>
        <div className='reports6'>
            <Button onClick={OnclickNav} className="reportno">Report#6</Button>
        </div>
        <div className='reports5'>
            <Button onClick={OnclickNav} className="reportno">Report#5</Button>
        </div>
        <div className='reports4'>
            <Button onClick={OnclickNav} className="reportno">Report#4</Button>
        </div>
        <div className='reports3'>
            <Button onClick={OnclickNav} className="reportno">Report#3</Button>
        </div>
        <div className='reports2'>
            <Button onClick={OnclickNav} className="reportno">Report#2</Button>
        </div>
        <div className='reports1'>
            <Button onClick={OnclickNav} className="reportno">Report#1</Button>
        </div>
        </div>
        <div className='dates'>
        <p className='date7'>2023-18-07</p>
        <p className='date6'>2023-12-06</p>
        <p className='date5'>2023-11-05</p>
        <p className='date4'>2023-11-04</p>
        <p className='date3'>2023-13-03</p>
        <p className='date2'>2023-16-02</p>
        <p className='date1'>2023-10-01</p>
        </div>
       


      </div>
     
      <div className='line'></div>
      <div className='line1'></div>

        <div className='checkbox'></div>


      </section>
  
    );
  }
  
  export default Viewreport