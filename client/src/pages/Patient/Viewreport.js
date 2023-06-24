import React from 'react';
import "./Viewreport.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";


const Viewreport = () => {
    const navigate = useNavigate();
    const OnclickNav = () => {navigate("/login");}

    return (
      <section>
      <h2 className="report">Report</h2>
  
      <div className='circle1'></div>
      <div className='circle2'></div>
      <div className='circle3'></div>

      <div className='rect'></div>
      <div className='rectcontainer'>
        <li className='reportlist'>
            <div className='firstreport'>
            <Button onClick={OnclickNav} className="reportno">
             Report#1
        </Button>
        <p className='date'>2023-12-06</p>
            </div>

        </li>
        <li className='reportlist2'>
            <div className='secreport'>
            <Button onClick={OnclickNav} className="reportno2">
             Report#2
        </Button>
        <p className='date2'>2023-12-05</p>
            </div>

        </li>
      </div>
      <div className='line'></div>

        <div className='checkbox'></div>


      </section>
  
    );
  }
  
  export default Viewreport
  
  