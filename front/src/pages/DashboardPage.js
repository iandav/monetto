import React from 'react'
import "../styles/page-styles/DashboardPage.css"
import DashboardNavbar from '../components/DashboardNavbar'
import DashboardHeader from '../components/DashboardHeader'

function DashboardPage() {
  
  return (
    <div className="dashboardContainer">
      <DashboardNavbar />
      <DashboardHeader title="Dashboard" />
    </div>
  );
}

export default DashboardPage;