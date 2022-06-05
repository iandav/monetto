import React from "react"
import { Link } from "react-router-dom"
import { FaChartPie } from "react-icons/fa"
import { BiLineChart } from "react-icons/bi"
import { BiLineChartDown } from "react-icons/bi"
import { BsCashStack } from "react-icons/bs"
import { BsFillGearFill } from "react-icons/bs"
import { FaPowerOff } from "react-icons/fa"
import MonettoLogo from "../MonettoLogo/MonettoLogo"
import "./DashboardNavbar.css"

function DashboardNavbar() {
  return (
    <nav className="dashboardNavbarContainer">
      <ul>
        <div className="dashboardNavbarLogoContainer">
          <MonettoLogo styles="dashboardNavbarLogo" />
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
