import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Desk from "../assets/images/desk.png";
import Client from "../assets/images/customer.png";
import Schedule from "../assets/images/schedule.png";
import Pay from "../assets/images/payment-method.png";
import Message from "../assets/images/message.png";
import "../styles/sidebar.css";

function SideBar() {
  const [isActive, setIsActive] = useState(false);
  const [isClientActive, setIsClientActive] = useState(false);

  function toggleLink() {
    return setIsActive(!isActive);
  }

  function toggleLinks() {
    return setIsClientActive(!isClientActive);
  }

  return (
    <div className="side-container">
      <div className="final">
        <div className="logo">
          <Link to={"/login"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="92"
              height="92"
              viewBox="0 0 92 92"
              fill="none"
            >
              <circle cx="46" cy="46" r="46" fill="#DCA940" />
            </svg>
          </Link>
        </div>
        <div className="menu-text">
          <Link
            onClick={()=>{toggleLink();toggleLinks()}}
            to={"/workspace"}
            className="text-blck"
          >
            <img className="logo-blck" src={Desk} alt />
            <h3 className={`${isActive ? "" : "active"}`}>Workspace</h3>
          </Link>
          <Link
            onClick={() => {
              toggleLinks();
              toggleLink();
            }}
            to={"/client"}
            className={`text-blck`}
          >
            <img className="logo-blck" src={Client} alt />
            <h3 className={`${isClientActive ? "active" : ""}`}>Client</h3>
          </Link>
          <Link className="text-blck">
            <img className="logo-blck" src={Schedule} alt />
            <h3 className={`${isActive ? "" : ""}`}>Appointment</h3>
          </Link>
          <Link className="text-blck">
            <img className="logo-blck" src={Pay} alt />
            <h3>Payment</h3>
          </Link>
          <Link className="text-blck">
            <img className="logo-blck" src={Client} alt />
            <h3>Task</h3>
          </Link>
          <Link className="text-blck">
            <img className="logo-blck" src={Message} alt />
            <h3>Messages</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
