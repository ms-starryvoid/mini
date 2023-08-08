"use client";
import api from "@/api";
import {
  Form,
  Input,
  message,
  Button,
  Space,
  DatePicker,
  Select,
  Upload,
} from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import Layout from "../layout";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const ReportAdmin = () => {
  const router = useRouter();
  const [componentDisabled, setComponentDisabled] = useState(false);
  const onFinish = async (values) => {
    try {
      values.age = Number(values.age);
      values.phone = Number(values.phone);
      values.ward_number = Number(values.ward_number);
      const response = await api.post("/api/v1/user/addpatient", values);
      console.log(response.data);
      if (response.data.success) {
        message.success("added successfully"); // Optional: Display the response from the backend
      } // Perform any additional actions after successful submission
    } catch (error) {
      console.log(error);
      message.error("something went wrong"); // Handle error case
    }
  };
  return (
    <Layout>
      <div className="container-profile">
        <h2 className="heading-report-entry">Enter Report</h2>
        <div className="container-short">
          <div className="report-container">
            <Form
              layout="horizontal"
              disabled={componentDisabled}
              onFinish={onFinish}
              className="add-form"
            >
              <div className="content-report">
                <p>
                  <Form.Item label="Patient Name" name="name">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Patient ID" name="patient_id">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Visit Date" name="visit_date">
                    <DatePicker />
                  </Form.Item>
                  <Form.Item label="Blood Pressure" name="assignd_asha">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Sugar">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Remarks">
                    <Input />
                  </Form.Item>
                </p>
              </div>
              <Space wrap>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ backgroundColor: "#1b6871", borderColor: "#1b6871" }}
                >
                  Submit
                </Button>
              </Space>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ReportAdmin;
