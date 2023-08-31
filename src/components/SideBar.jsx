import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Desk from '../assets/images/desk.png';
import Client from '../assets/images/customer.png';
import Schedule from '../assets/images/schedule.png';
import "../styles/sidebar.css";

function SideBar() {
  const navigate = useNavigate();

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
          <div className="text-blck">
            <img className='logo-blck' src={Desk} alt/>
            <h3>Workspace</h3>
          </div>
          <div className="text-blck">
          <img className='logo-blck' src={Client} alt/>
            <h3>Client</h3>
          </div>
          <div className="text-blck">
          <img className='logo-blck' src={Schedule} alt/>
            <h3>Appointment</h3>
          </div>
          <div className="text-blck">
          <img className='logo-blck' src={Client} alt/>
            <h3>Payment</h3>
          </div>
          <div className="text-blck">
          <img className='logo-blck' src={Client} alt/>
            <h3>Task</h3>
          </div>
          <div className="text-blck">
          <img className='logo-blck' src={Client} alt/>
            <h3>Messages</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
