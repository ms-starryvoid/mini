"use client"
import api from "@/api";
import { Button } from "antd";
import { useEffect, useState } from "react";

const StockRequest = () => {
  const [todaysVisits, setTodaysVisits] = useState([]);
  const [upcomingVisits, setUpcomingVisits] = useState([]);
  const [patient,setpatient]=useState([])
  const fetchpatient = async () => {
    try {
      console.log("req sending...");
      const res = await api.post("/api/v1/user/patient");
      console.log(res.data);
      setpatient(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTodaysVisits = async () => {
    try {
        const currentDate = new Date();
        console.log(currentDate)
      //const formattedDate = currentDate.toISOString().split("T")[0]; // Format: YYYY-MM-DD
      
      const response = await api.post("/api/v1/user/visitday",{day:currentDate})
      setTodaysVisits(response.data);
    } catch (error) {
      console.error("Error fetching today's visits:", error);
    }
  };

  const fetchUpcomingVisits = async () => {
    try {
      const response = await api.get("/api/v1/user/upcomingvisits");
      setUpcomingVisits(response.data);
    } catch (error) {
      console.error("Error fetching upcoming visits:", error);
    }
  };

  useEffect(() => {
    fetchTodaysVisits();
    fetchUpcomingVisits();
    fetchpatient()
  }, []);

  return (
    <section>
      <div className="visit-schedule">
        <h2 className="stockdetails1">Visit Schedule</h2>
        <Button className="visit-button" type="primary">
          Generate Visit
        </Button>

      </div>
      <div className="roundrect3"></div>
      <div className="roundrect">
      <ul className="patientList">
          {patient.map((patient) => (
            <li key={patient.patient_id} className="patientItem">
              <Button className="inside-button5">{patient.name}</Button>
            </li>
          ))}
        </ul>
          
        
      </div>
      <div className="roundrect3"></div>
      <div className="roundrect">
        <h2 className="stockdetails">Today's Visits</h2>
        <div className="list-checkbox">
          <ul className="patientList">
          {todaysVisits.length === 0 ? (
        <li className="patientItem">
          <p>No visits today</p>
        </li>
      ) : (
        todaysVisits.map((patient) => (
          <li key={patient.patient_id} className="patientItem">
            <Button className="inside-button5">{patient.name}</Button>
          </li>
        ))
      )}
          </ul>
        </div>
      </div>
      <div className="roundrect2">
        <h2 className="stockdetails">Upcoming Visits</h2>
        <div className="list-checkbox">
          <ul className="patientList">
          {upcomingVisits.length === 0 ? (
        <li className="patientItem">
          <p>No upcoming visits</p>
        </li>
      ) : (
        upcomingVisits.map((patient) => (
          <li key={patient.patient_id} className="patientItem">
            <Button className="inside-button5">{patient.name}</Button>
          </li>
        ))
      )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StockRequest;
