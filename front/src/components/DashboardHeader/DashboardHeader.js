import React from "react"
import "./DashboardHeader.css"
import image from "../../images/user.png"

function DashboardHeader({ title }) {
  return (
    <header className="dashboardHeaderContainer">
      <h1 className="dashboardHeaderTitle">{title}</h1>
      <div className="dashboardheaderUsernameContainer">
        <p className="dashboardHeaderUsername">Username</p>
        <img
          src={image}
          alt="Profile of the current user"
          className="dashboardheaderImage"
        />
      </div>
    </header>
  )
}

export default DashboardHeader
