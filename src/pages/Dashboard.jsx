import React from 'react';
import '../styles/dashboard.css';
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar';
import Workspace from '../components/Workspace';

function Dashboard() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <Navbar />
      <Workspace />
    </div>
  )
}

export default Dashboard;