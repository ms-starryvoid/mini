"use client";

import api from "@/api";

import { Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const OnFinishHandler = async (values) => {
    try {
      console.log(values);
      //dispatch(showloading())
      const res = await api.post("/api/v1/user/signup", values);
      // dispatch(hideLoading())
      if (res.data.success) {
        message.success("Registered successfully");
        router.push("/ashalogin");
        //redirect('/login')
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);

      message.error("something went wrong");
    }
  };
  return (
    <div className="container">
      <div className="signupcontainer">
        <h2 className="signup-heading">Sign up</h2>
        <Form
          layout="vertical"
          onFinish={OnFinishHandler}
          className="signup-form"
        >
          <Form.Item label="ASHA Id" name="ashaid">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <div className="centered-button-container">
            <button type="submit">Register</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default page;
