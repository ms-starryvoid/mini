"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";

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
    <section>
      <div className="circle"></div>
      <div className="container">
        <div className="rounded-rectangle-login">
          <h2 className="heading3">Sign Up</h2>
          <Form
            onSubmit={handleSubmit}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
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
  );
};

export default Signup;
