"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import Layout from "../layout";

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
      if (res.data.success && res.data.isPatient) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successful");
        router.push("/patienthome");
      } else if (res.data.success && !res.data.isPatient) {
        message.error("YOu are not a registered patient");
        router.push("/");
      } else {
        message.error("something went wrong");
        message.error(res.data.message);
      }
    } catch (error) {
      // dispatch(hideloading())
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <Layout>
      <section>
        <div className="circle"></div>
        <div className="container-short">
          <h2 className="heading5">Hello!</h2>
        </div>
        <div className="container-short">
          <div className="rounded-rectangle-login">
            <h2 className="heading4"> Patient Login</h2>

            <div className="container">
              <div>
                <Form
                  className="form-container"
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                    maxHeight: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinishHandler}
                  autoComplete="off"
                >
                  <Form.Item
                    className="form-label"
                    label="Username"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                    style={{ color: "#ffffff" }}
                  >
                    <Input className="form-input" />
                  </Form.Item>

                  <Form.Item
                    className="form-label"
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password className="form-input" />
                  </Form.Item>

                  <Form.Item
                    className="form-label form-item-remember"
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

              <div></div>

              <div></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
