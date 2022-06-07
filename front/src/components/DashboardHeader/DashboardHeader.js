import React from "react"
import "./DashboardHeader.css"

function DashboardHeader({ title }) {
  return (
    <header className="dashboard-header-container">
      <h1 className="dashboard-header-title">{title}</h1>
    </header>
  )
}

export default DashboardHeader
