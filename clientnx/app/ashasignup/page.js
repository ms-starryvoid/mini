"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import Layout from "../layout";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Signup = () => {
  const [ashaId, setAshaId] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    const isEmailValid = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      email
    );

    if (!isEmailValid) {
      alert("Please enter a valid email address.");
    }
    e.preventDefault();

    if (!ashaId.trim() || !email.trim()) {
      return;
    }

    router.push("/ashalogin");
  };

  useEffect(() => {
    if (!ashaId.trim() || !email.trim()) {
      return;
    }
  }, [ashaId, email]);

  return (
    <Layout>
      <section>
        <div className="circle"></div>
        <div className="patientsignup-container">
          <div className="patientsignup-rounded-rectangle">
          <h1 className="signup-heading">Sign Up</h1>
            <Form
              onSubmit={handleSubmit}
              name="basic"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 14,
              }}
              style={{
                maxWidth: 400,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Asha ID"
                name="ashaId"
                rules={[
                  {
                    required: true,
                    message: "Please input your Asha ID!",
                  },
                ]}
              >
                <Input onChange={(e) => setAshaId(e.target.value)} />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input onChange={(e) => setEmail(e.target.value)} />
              </Form.Item>

              {/* <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input onChange={(e) => setEmail(e.target.value)} />
              </Form.Item> */}

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
