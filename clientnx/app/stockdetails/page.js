"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const StockDetails = () => {
  const router = useRouter();
  const OnclickNav = () => {
    router.push("/login");
    localStorage.clear();
  };

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Item 1",
      comment: "Edna requested for a walker.",
      isChecked: false,
    },
    {
      id: 2,
      name: "Item 2",
      comment: "Dona requested for a bed.",
      isChecked: false,
    },
    {
      id: 3,
      name: "Item 3",
      comment: "Megha requested for a pair of gloves.",
      isChecked: false,
    },
    {
      id: 3,
      name: "Item 4",
      comment: "Megha requested for a pair of gloves.",
      isChecked: false,
    },
    {
      id: 3,
      name: "Item 5",
      comment: "Megha requested for a pair of gloves.",
      isChecked: false,
    },
    {
      id: 3,
      name: "Item 6",
      comment: "Megha requested for a pair of gloves.",
      isChecked: false,
    },
    {
      id: 3,
      name: "Item 7",
      comment: "Megha requested for a pair of gloves.",
      isChecked: false,
    },
  ]);

  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <section>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>

      <h2 className="stockdetails1">Stock details</h2>
      <div className="roundrect3"></div>
      <div className="roundrect">
        <ul className="patientList">
          <li className="patientItem">
            Walker
            <div className="addbox">
              <Button onClick={OnclickNav} className="inside-button3">
                +
              </Button>
              <Button onClick={OnclickNav} className="inside-button3">
                -
              </Button>
            </div>
          </li>
          <li className="patientItem">
            Wheel chair
            <div className="addbox">
              <Button onClick={OnclickNav} className="inside-button3">
                +
              </Button>
              <Button onClick={OnclickNav} className="inside-button3">
                -
              </Button>
            </div>
          </li>
          <li className="patientItem">
            Bed
            <div className="addbox">
              <Button onClick={OnclickNav} className="inside-button3">
                +
              </Button>
              <Button onClick={OnclickNav} className="inside-button3">
                -
              </Button>
            </div>
          </li>
          <li className="patientItem">
            Catheter
            <div className="addbox">
              <Button onClick={OnclickNav} className="inside-button3">
                +
              </Button>
              <Button onClick={OnclickNav} className="inside-button3">
                -
              </Button>
            </div>
          </li>
          <li className="patientItem">
            Gloves
            <div className="addbox">
              <Button onClick={OnclickNav} className="inside-button3">
                +
              </Button>
              <Button onClick={OnclickNav} className="inside-button3">
                -
              </Button>
            </div>
          </li>
          <li className="patientItem">
            Cloth
            <div className="addbox">
              <Button onClick={OnclickNav} className="inside-button3">
                +
              </Button>
              <Button onClick={OnclickNav} className="inside-button3">
                -
              </Button>
            </div>
          </li>
          <li className="patientItem">
            Oinment
            <div className="addbox">
              <Button onClick={OnclickNav} className="inside-button3">
                +
              </Button>
              <Button onClick={OnclickNav} className="inside-button3">
                -
              </Button>
            </div>
          </li>
        </ul>
      </div>

      <div className="roundrect1">
        <h2 className="stockdetails">Stock required today</h2>
        <ul className="list-checkbox">
          {items.map((item) => (
            <li key={item.id} className="listItem-checkbox">
              <Checkbox
                checked={item.isChecked}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <span className="comment-checkbox">{item.comment}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="roundrect2">
        <h2 className="stockdetails">This month's stock</h2>
        <div className="list-checkbox">
          <ul>
            <li className="patientItem1">
              Walker
              <div className="inside-button4">3</div>
            </li>
            <li className="patientItem1">
              Bed
              <div className="inside-button4">1</div>
            </li>
            <li className="patientItem1">
              Gloves
              <div className="inside-button4">5</div>
            </li>
            <li className="patientItem1">
              oinment
              <div className="inside-button4">7</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StockDetails;
