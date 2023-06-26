"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Layout from "../layout";

const AdminHome = () => {
  const router = useRouter();
  const OnclickNavViewAsha = () => {
    router.push("/viewstaff");
    // to clear local storage on logout

    localStorage.clear();
  };
  const OnClickProfile = () => {
    router.push("/");
  };
  const Onclickstock = () => {
    router.push("/stockdetail");
    // to clear local storage on logout
  };
  const Onclickviewpatient = () => {
    router.push("/viewpatient");
  };

  const Onclickvisit = () => {
    router.push("/visitdetail");
  };
  const getUserData = async () => {
    try {
      const res = await api.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
      localStorage.setItem("userData", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <section>
        <div className="circle"></div>
        <h2 className="heading1">Welcome back, Admin</h2>

        <div className="container-short">
          <div className="rounded-rectangle">
            <div className="inside-button">
              <Button onClick={Onclickviewpatient} className="inside-button">
                View patients
              </Button>
            </div>
          </div>

          <div className="rounded-rectangle">
            <Button onClick={Onclickvisit} className="inside-button">
              Visit Schedules
            </Button>
          </div>
        </div>
        <div className="container-short">
          <div className="rounded-rectangle">
            <Button onClick={Onclickstock} className="inside-button">
              Stock Details
            </Button>
          </div>

          <div className="rounded-rectangle">
            <Button onClick={OnclickNavViewAsha} className="inside-button">
              Staff Details
            </Button>
            {/*<Button onClick={OnClickProfile} className='inside-button'>
                Profile
            </Button>*/}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminHome;
