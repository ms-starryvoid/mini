"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import Layout from "../layout";


const Report = () => {
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
        //   onFinish={onFinish}
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