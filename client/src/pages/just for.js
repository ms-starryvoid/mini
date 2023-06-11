


import React from "react";
import "../../styles.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Admin_home() {
  const navigate = useNavigate();
  const OnclickNav = () => {
    navigate("/");
  };
  return (
    <section>
      <div className="circle"></div>
      <h2 className="heading1">Welcome back, Admin</h2>

      <div className="container-short">
        <div className="rounded-rectangle">
          <div className="inside-button">
            <Button onClick={OnclickNav} className="inside-button">
              View patients
            </Button>
          </div>
        </div>

        <div className="rounded-rectangle">
          <Button onClick={OnclickNav} className="inside-button">
            Visit Schedules
          </Button>
        </div>
      </div>
      <div className="container-short">
        <div className="rounded-rectangle">
          <Button onClick={OnclickNav} className="inside-button">
            Stock Details
          </Button>
        </div>

        <div className="rounded-rectangle">
          <Button onClick={OnclickNav} className="inside-button">
            Staff Details
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Admin_home;