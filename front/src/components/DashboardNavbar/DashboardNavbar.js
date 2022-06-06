import React from "react"
import { Link } from "react-router-dom"
import { FaChartPie, FaPowerOff } from "react-icons/fa"
import { BiLineChart, BiLineChartDown } from "react-icons/bi"
import { BsCashStack, BsFillGearFill } from "react-icons/bs"
// Styles
import "./DashboardNavbar.css"
import HomepageLogo from "../HomepageLogo/HomepageLogo"

function DashboardNavbar() {
  return (
    <nav className="dashboardNavbarContainer">
      <ul>
        <div className="dashboardNavbarLogoContainer">
          <HomepageLogo styles="dashboardNavbarLogo" />
        </div>
        <li className="dashboardNavbarElement active">
          <Link to="/dashboard">
            <FaChartPie className="dashboardNavbarIcon" />
            Dashboard
          </Link>
        </li>
        <li className="dashboardNavbarElement">
          <Link to="/earnings">
            <BiLineChart className="dashboardNavbarIcon" />
            Earnings
          </Link>
        </li>
        <li className="dashboardNavbarElement">
          <Link to="/expenses">
            <BiLineChartDown className="dashboardNavbarIcon" />
            Expenses
          </Link>
        </li>
        <li className="dashboardNavbarElement">
          <Link to="/investments">
            <BsCashStack className="dashboardNavbarIcon" />
            Investments
          </Link>
        </li>
        <li className="dashboardNavbarElement">
          <Link to="/settings">
            <BsFillGearFill className="dashboardNavbarIcon" />
            Settings
          </Link>
        </li>
        <li className="dashboardNavbarElement">
          <Link to="/signout">
            <FaPowerOff className="dashboardNavbarIcon" />
            Sign out
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default DashboardNavbar
