"use client";
import api from "@/api";
import { Button, message, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Page({ params }) {
  const router = useRouter();
  //console.log(params.slug);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setData("loading...");
      try {
        const res = await api.post("/api/v1/user/patientdetail", {
          patient_id: params.slug,
        });
        console.log(res);
        if (res.status == 200) setData(res.data);
      } catch (err) {
        console.log(err);
        setData("err");
      }
    };
    fetchData();
  }, []);
  const handleDelete = async () => {
    try {
      const res = await api.post("/api/v1/user/deletepatient", {
        patient_id: params.slug,
      });
      console.log(res);
      if (res.status == 204) setData("Patient deleted successfully!");
      message.success("deleted successfully");
      router.push("/viewpatient");
    } catch (err) {
      console.log(err);
      setData("Patient could not be deleted due to an error!");
      message.error("Patient could not be deleted due to an error!");
    }
  };
  if (data && data != null && typeof data !== "string")
    return (
      <div className="container-profile">
        <h1 className="heading-profile">Delete patient</h1>
        <div className="rectangle-profile-delete">
          <div className="patient-container">
            <div className="patientList">
              <p>Name: {data.name}</p>
              <p>Age: {data.age}</p>
              <p>Gender: {data.gender}</p>
              <p>Email: {data.email}</p>
              <p>Phone: {data.phone}</p>
              <p>Ward number: {data.ward_number}</p>
            </div>
          </div>
          <div className="center-button">
            <Space>
              <Button
                type="primary"
                onClick={handleDelete}
                style={{ backgroundColor: "#1b6871", borderColor: "#1b6871" }}
              >
                Delete
              </Button>
            </Space>
          </div>
        </div>
      </div>
    );
  else if (data === "err")
    return (
      <div
        style={{
          color: "white",
          fontSize: "1.4rem",
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.2rem",
        }}
      >
        Oops! erorr while loading data...
      </div>
    );
  else
    return (
      <div
        style={{
          color: "white",
          fontSize: "1.4rem",
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.2rem",
        }}
      >
        {typeof data === "string" && data}
      </div>
    );
}

export default Page;
