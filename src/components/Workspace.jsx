import React from 'react';
import '../styles/workspace.css';

function Workspace() {
  return (
    <div className='work-container'>
        <div className='work-text'>
        <h1>Your Workspace</h1>
        <p>Welcome Tolu,</p>
        </div>
        <br></br>
        <h3>Overview</h3>
        <div>
            <span></span>
            <div>
            <h3>Today's Agenda</h3>
            <div><p>You don't have any event schedule for today. Add</p></div>
            </div>
        </div>
    </div>
  )
}

export default Workspace