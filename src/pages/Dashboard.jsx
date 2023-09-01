import React from 'react';
import '../styles/dashboard.css';
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar';
import Workspace from '../components/Workspace';
import Client from '../components/Client';

function Dashboard() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <Navbar />
      <Workspace />
      <Client />
    </div>
  )
}

export default Dashboard;