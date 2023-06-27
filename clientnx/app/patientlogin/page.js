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
    <section>
      <div className="circle"></div>
      <div className="patientsignup-container">
        <div className="patientsignup-rounded-rectangle">
          <h1 className="signup-heading">Patient login</h1>
          <Form
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
            onFinish={onFinishHandler}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
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
  );
};

export default Login;
