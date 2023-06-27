"use client";
import api from "@/api";
import { Button } from "antd";
import e from "cors";
import React, { useEffect, useState } from "react";

function Page({ params }) {
  console.log(params.slug);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.post("/api/v1/user/patientdetail", {
          patient_id: params.slug,
        });
        console.log(res);
        if(res.status==200)
        setData(res.data);
      } catch (err) {
        console.log(err);
        setData("err");
      }
    };
    fetchData();
  }, []);
  const handleDelete = async () => {
    try {
        const res = await api.post('/api/v1/user/deletepatient',{patient_id: params.slug })
      console.log(res);
      if(res.status==200)
      alert("Patient deleted successfully!")
    } catch (err) {
      console.log(err);
      alert("Patient could not be deleted due to an error!")
    }
  };
  if (data && data != null)
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
        <Button onClick={handleDelete}>Delete Patient</Button>
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
        loading...
      </div>
    );
}

export default Page;
