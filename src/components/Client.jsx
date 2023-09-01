import React, { useState } from "react";
import Data from "../Data";
import "../styles/client.css";

function Client() {
  const [contacts, setContacts] = useState(Data);
  return (
    <div className="class-container">
      <div className="client-text">
        <h1>Clients</h1>
        <p>Here's the client list</p>
      </div>
      <div className="table-box">
        <div style={{marginBottom: 64}}>
        <input
          className="input-box"
          type="text"
          placeholder="Search by name, and email..."
        />
        <button className="client-btn">Add New Client</button>
        </div>
        <table>
          <thead>
            <tr className="t-head">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((elem) => {
              return (
              <tr>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>{elem.phone}</td>
                <td>{elem.address}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Client;
