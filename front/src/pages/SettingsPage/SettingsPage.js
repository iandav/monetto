import React from "react"
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar"
import { DashboardHeader } from "../../components"
import Settings from "../../components/Settings/Settings"
import "./SettingsPage.css"

function SettingsPage() {
  return (
    <div className="dashboardContainer">
      <DashboardNavbar />
      <div className="dashboardContent">
        <DashboardHeader title="Settings" />
        <Settings />
      </div>
    </div>
  )
}

export default SettingsPage
