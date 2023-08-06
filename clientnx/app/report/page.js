"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import Layout from "../layout";


const Report = () => {
  const onFinishH=(values)=>{
     try {
         const res= api.post('/api/v1/user/report',values)
         message.success("report successfully entered")
     } catch (error) {
      message.error("something went wrong")
      console.log(error)
     }
  }
    return(
        <Layout>
      <div className="asd">
    <Form
        //   labelCol={{
        //     span: 10,
        //   }}
        //   wrapperCol={{
        //     span: 20,
        //   }}
          layout="horizontal"
        //   disabled={componentDisabled}
        //   style={{
        //     maxWidth: 1000,
        //   }}
         onFinish={onFinishH}
          >

          <p>
                  <Form.Item label="Blood Sugar" name="blood_sugar">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Blood Pressure" name="blood_pressure">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Remarks" name="remarks">
                    <Input />
                  </Form.Item>
          </p>       
          </Form>
      </div>
    </Layout>
    )
        }

  export default Report