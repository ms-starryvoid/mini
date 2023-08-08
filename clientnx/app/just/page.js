"use client";
import api from "@/api";
import { Button, message } from "antd";
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
      <div
        style={{
          color: "black",
          fontSize: "1.4rem",
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.2rem",
        }}
      >
        <div>
          <span>Name: </span>
          <span>{data.name}</span>
        </div>
        <div>
          <span>Age: </span>
          <span>{data.age}</span>
        </div>
        <div>
          <span>Gender: </span>
          <span>{data.gender}</span>
        </div>
        <div>
          <span>Email: </span>
          <span>{data.email}</span>
        </div>
        <div>
          <span>Phone: </span>
          <span>{data.phone}</span>
        </div>
        <div>
          <span>Ward number: </span>
          <span>{data.ward_number}</span>
        </div>
        <br></br>
        <Button className= "" onClick={handleDelete}>Delete Patient</Button>
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
