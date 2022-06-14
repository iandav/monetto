import React from "react"
import { DashboardHeader, DashboardNavbar } from "../../components"
import EarningsList from "../../components/EarningsList/EarningsList"
import "./EarningsPage.css"

function EarningsPage() {
  return (
    <div className="dashboardContainer">
      <DashboardNavbar />
      <div className="dashboardContent">
        <DashboardHeader title="Earnings" />
        <EarningsList />
      </div>
    </div>
  )
}

export default EarningsPage
