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
  const [isAppoint, setIsAppoint] = useState(false);

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
          <Link to={"/"}>
            <svg
              width="93"
              height="92"
              viewBox="0 0 93 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="46.5" cy="46" r="46" fill="#DCA940" />
              <path
                d="M23.9138 44.9655C23.3425 45.5654 23.3656 46.5149 23.9655 47.0862L33.7414 56.3966C34.3413 56.9679 35.2907 56.9447 35.8621 56.3448C36.4334 55.7449 36.4102 54.7955 35.8103 54.2241L27.1207 45.9483L35.3966 37.2586C35.9679 36.6587 35.9447 35.7093 35.3448 35.1379C34.7449 34.5666 33.7955 34.5898 33.2241 35.1897L23.9138 44.9655ZM65.9634 43.5004L24.9634 44.5004L25.0366 47.4996L66.0366 46.4996L65.9634 43.5004Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <div className="menu-text">
          <Link
            onClick={() => {
              toggleLink();
              toggleLinks();
            }}
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
            <h3>Appointment</h3>
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
      <span style={{ fontSize: 8, letterSpacing: 0.5 }}>
        DEVELOPED BY TOLUTOON
      </span>
    </div>
  );
}

export default SideBar;
