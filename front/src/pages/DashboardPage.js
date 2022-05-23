import React from 'react'
import "../styles/page-styles/DashboardPage.css"
import DashboardNavbar from '../components/DashboardNavbar'
import DashboardHeader from '../components/DashboardHeader'
import DashboardCard from '../components/DashboardCard'
import GeneralChart from '../components/GeneralChart'

function DashboardPage() {
  
  return (
    <div className="dashboardContainer">

      <DashboardNavbar />

      <div className='dashboardContent'>

        <DashboardHeader title="Dashboard" />

        <div className='dashboardContentCards'>
          <DashboardCard title="Balance" value="$0.00" style="dashboardPageCard" icon="" />
          <DashboardCard title="Income" value="$0.00" style="dashboardPageCard" icon="" />
          <DashboardCard title="Expenses" value="$-0.00" style="dashboardPageCard" icon="" />
        </div>

        <div className='dashboardGeneralChartContainer'>
          <h2>Monthly income</h2>
          <GeneralChart />
        </div>
        

      </div>

    </div>
  );
}

export default DashboardPage;