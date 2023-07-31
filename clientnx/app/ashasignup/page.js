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
    <div className="container">
      <div className="signupcontainer">
        <h2 className="signup-heading">ASHA Sign Up</h2>
        <Form
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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

export default Signup;
