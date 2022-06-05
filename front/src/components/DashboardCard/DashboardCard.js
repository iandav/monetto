import React from "react"
import "./DashboardCard.css"

function DashboardCard({ title, value, name }) {
  return (
    <div className={`dashboardCardContainer ${name}`}>
      <h2 className="dashboardCardTitle">{title}</h2>

      <p className="dashboardCardValue">{value}</p>
    </div>
  )
}

export default DashboardCard
