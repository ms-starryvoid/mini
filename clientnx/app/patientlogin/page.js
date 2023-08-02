"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();

  //on finish handler function
  const onFinishHandler = async (values) => {
    try {
      console.log(values);
      //dispatch(showloading())
      const res = await api.post("/api/v1/user/patientlogin", values);
      console.log(res);
      //dispatch(hideLoading())
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successful");
        router.push("/patienthome");
      } else {
        message.error("something went wrong");
        message.error(res.data.message);
      }
    } catch (error) {
      // dispatch(hideloading())
      console.log(error);
      message.error("something went wrong");
      message.error(res.data.message);
    }
  };
  return (
    <div className="container">
      <div className="signupcontainer">
        <h2 className="signup-heading">Patient Login</h2>
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="signup-form"
        >
          <Form.Item label="Username" name="email">
            <Input type="text" required />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <div className="centered-button-container">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
