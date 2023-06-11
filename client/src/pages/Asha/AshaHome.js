import React from "react";
import "../../styles/homepagestyle.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Asha_home() {
  const navigate = useNavigate();
  const OnclickNav = () => {
    navigate("/login");
  };
  return (
    <section>
      <div className="circle"></div>
      <h2 className="heading1">Welcome back, Asha worker</h2>

      <div className="container">
        <div className="rounded-rectangle-long">
          <div className="inside-button">
            <Button onClick={OnclickNav} className="inside-button">
              Add Patients
            </Button>
          </div>
        </div>

        <div className="rounded-rectangle-long">
          <Button onClick={OnclickNav} className="inside-button">
            View Patient
          </Button>
        </div>

        <div className="rounded-rectangle-long">
          <Button onClick={OnclickNav} className="inside-button">
            Visit Schedule
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Asha_home;
