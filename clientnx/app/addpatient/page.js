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
const Addpatient = () => {
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
      <h2 className="heading-add">Add Patient</h2>
      <div className="container-short">
        <div className="huge-container">
          <Form
            layout="horizontal"
            disabled={componentDisabled}
            onFinish={onFinish}
            className="add-form"
          >
            <div className="left-content">
              <p>
                <Form.Item label="Name" name="name">
                  <Input />
                </Form.Item>
                <Form.Item label="Age" name="age">
                  <Input type="text"></Input>
                </Form.Item>
                <Form.Item label="Gender" name="gender">
                  <Select>
                    <Select.Option value="male">male</Select.Option>

                    <Select.Option value="female">female</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label="Phone" name="phone">
                  <Input />
                </Form.Item>
                <Form.Item label="Email" name="email">
                  <Input />
                </Form.Item>
              </p>
            </div>
            <div className="right-content">
              <p>
                <Form.Item label="Patient ID" name="patient_id">
                  <Input />
                </Form.Item>
                <Form.Item label="Date of Birth" name="visit_date">
                  <DatePicker />
                </Form.Item>
                <Form.Item label="Ward number" name="ward_number">
                  <Input />
                </Form.Item>
                <Form.Item label="Asha Worker" name="assignd_asha">
                  <Input />
                </Form.Item>
              </p>
            </div>
            <Space wrap>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: "#1b6871", borderColor: "#1b6871" }}>
                Submit
              </Button>
            </Space>
          </Form>
        </div>
      </div>
    </Layout>
  );
};
export default Addpatient;
