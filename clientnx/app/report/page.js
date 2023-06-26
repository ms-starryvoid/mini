"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";


const Page3 = () => {
    return (
      <div>
        <div>
          <label>Blood Sugar:</label>
          <br />
          <input type="text" />
        </div>
  
        <div>
          <label>Blood Pressure:</label>
          <br />
          <input type="text" />
        </div>
  
        <div>
          <label>Remarks:</label>
          <br />
          <textarea rows="4" />
        </div>
      </div>
    );
  };

  export default Page3