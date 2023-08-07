"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const StockDetails = () => {
  const router = useRouter();
  const [newStockItem, setNewStockItem] = useState("");
  const [newStockQuantity, setNewStockQuantity] = useState(0);
  const [StockRequests, setStockRequests] = useState([]);
  const approveStockRequest = async (request) => {
    console.log(request);
    try {
      await api.post('/api/v1/user/statusupdate', {
        patient_id:request.patient_id,
        stock_name:request.stock_name,
        status: "approved",
      });
      console.log("Stock request approved");
      fetchStockRequests();
    } catch (error) {
      console.error("Error approving stock request:", error);
    }
  };

  const fetchStockItems = async () => {
    try {
      const response = await api.get("/api/v1/user/stock");
      setStockItems(response.data);
    } catch (error) {
      console.error("Error fetching stock items:", error);
    }
  };

  const addStockItem = async () => {
    try {
      const response = await api.put(`/api/v1/user/stockupdate`, {
        stock_name: newStockItem,
        quantity: newStockQuantity,
      });
      console.log("Stock item added:", response.data);
      if (response.success) {
        message.success("added successfully");
      }
    } catch (error) {
      console.error("Error adding stock item:", error);
    }
  };

  const rejectStockRequest = async (request) => {
    console.log(request);
    try {
      await api.post('/api/v1/user/statusupdate', {
        patient_id:request.patient_id,
        stock_name:request.stock_name,
        status: "rejected",
      });
      console.log("Stock request rejected");
      fetchStockRequests();
    } catch (error) {
      console.error("Error approving stock request:", error);
    }
  };
  const fetchstockreqs = async () => {
    try {
      const response = await api.get("/api/v1/user/requests");
      setStockRequests(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching stock requests:", error);
    }
  };
  const OnclickNavInc = async (itemId) => {
    try {
      const response = await api.put(`/api/v1/user/stockupdate`, {
        stock_name: itemId,
        quantity: 1,
      });
      console.log("Stock item added:", response.data);

      fetchstockdetails();
      if (response.success) {
        message.success("added successfully");
      }
    } catch (error) {
      console.error("Error adding stock item:", error);
    }
  };
  const OnclickNavdec = async (itemId) => {
    try {
      const response = await api.put(`/api/v1/user/stockupdate`, {
        stock_name: itemId,
        quantity: -1,
      });
      console.log("Stock item added:", response.data);

      fetchstockdetails();
      if (response.success) {
        message.success("added successfully");
      }
    } catch (error) {
      console.error("Error adding stock item:", error);
    }
  };

  const [items, setItems] = useState(
    [
      {
        id: 1,
        name: "Item 1",
        comment: "Edna requested for a walker.",
        isChecked: false,
      },
    ] || null
  );
  const fetchstockdetails = async () => {
    try {
      const response = await api.get("/api/v1/user/stock");
      setItems(response.data);
      console.log(items);
    } catch (error) {
      console.error("Error fetching stock items:", error);
    }
  };
  useEffect(() => {
    fetchstockdetails();
    fetchstockreqs();
  }, []);
  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <section>
      <h2 className="stockdetails1">Stock details</h2>
      <div className="roundrect3"></div>
      <div className="roundrect">
        <ul className="patientList">
          {items.map((item) => (
            <li key={item.id} className="patientItem">
              {item.stock_name}
              <div className="addbox">
                <Button
                  onClick={() => {
                    OnclickNavInc(item.stock_name);
                  }}
                  className="inside-button3"
                >
                  +
                </Button>
                <Button
                  onClick={() => {
                    OnclickNavdec(item.stock_name);
                  }}
                  className="inside-button3"
                >
                  -
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <div className="form-container">
          <Input
            className="form-input"
            type="text"
            placeholder="Stock Item"
            name="stockname"
            value={newStockItem}
            onChange={(e) => setNewStockItem(e.target.value)}
          />

          <Input
            className="form-input"
            type="number"
            placeholder="Quantity"
            name="quantity"
            value={newStockQuantity}
            onChange={(e) => setNewStockQuantity(e.target.value)}
          />

          <div className="addbox2">
            <Button onClick={addStockItem} className="inside-button5">
              Add new stock
            </Button>
          </div>
        </div>
      </div>

      <div className="roundrect1">
        <h2 className="stockdetails">Stock required </h2>
        <ul className="list-checkbox">
          {StockRequests.map((item) => (
            <li key={item.id} className="listItem-checkbox">
              <Checkbox
                checked={item.isChecked}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <span className="comment-checkbox">
                {item.stock_name} quantity {item.request_quantity} requested by{" "}
                {item.patient_id}
                <Button
                  onClick={() => {
                    approveStockRequest(item);
                  }}
                  className="inside-button5"
                >
                  Accept
                </Button>
                <Button
                  onClick={() => {
                    rejectStockRequest(item);
                  }}
                  className="inside-button7"
                >
                  Reject
                </Button>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="roundrect2">
        <h2 className="stockdetails">This month's stock</h2>
        <div className="list-checkbox">
          <ul>
            {items.map((item) => (
              <li key={item.id} className="patientItem1">
                {item.stock_name}
                <div className="inside-button4">{item.quantity}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StockDetails;
