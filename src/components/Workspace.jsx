import React from "react";
import "../styles/workspace.css";

function Workspace() {
  return (
    <div className="work-container">
      <div className="work-text">
        <h1 style={{ fontSize: 28 }}>Your Workspace</h1>
        <p style={{ fontSize: 16 }}>Welcome Tolu,</p>
      </div>
      <br></br>
      <div className="run-box">
        <h3>Overview</h3>
        <div className="grid">
          <div className="box-model">
            <div className="top-box"></div>
            <div>
              <h3 style={{ fontSize: "14px" }} className="sec-box">
                Today's Agenda
              </h3>
              <div className="pri-box">
                <p>
                  You don't have any event schedule for today.{" "}
                  <span style={{ color: "#DCA940" }}>Add</span>
                </p>
              </div>
            </div>
          </div>
          <div className="box-model">
            <div className="top-box"></div>
            <div>
              <h3 style={{ fontSize: "14px" }} className="sec-box">
                Today's Agenda
              </h3>
              <div className="pri-box">
                <p>
                  You don't have any event schedule for today.{" "}
                  <span style={{ color: "#DCA940" }}>Add</span>
                </p>
              </div>
            </div>
          </div>
          <div className="box-model">
            <div className="top-box"></div>
            <div>
              <h3 style={{ fontSize: "14px" }} className="sec-box">
                Today's Agenda
              </h3>
              <div className="pri-box">
                <p>
                  You don't have any event schedule for today.{" "}
                  <span style={{ color: "#DCA940" }}>Add</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
