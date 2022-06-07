import React from "react"
import { Link } from "react-router-dom"
import { FaChartPie, FaPowerOff } from "react-icons/fa"
import { BiLineChart, BiLineChartDown } from "react-icons/bi"
import { BsCashStack, BsFillGearFill } from "react-icons/bs"
// Styles
import "./DashboardNavbar.css"
import DashboardLogo from "../DashboardLogo/DashboardLogo"

function DashboardNavbar() {
  return (
    <nav className="dashboard-navbar-container">

      <DashboardLogo />

      <ul className="dashboard-navbar-list-container">

        <li className="dashboard-navbar-element active">
          <Link to="/dashboard">
            <FaChartPie className="dashboard-navbar-icon active" />
            Dashboard
          </Link>
        </li>

        <li className="dashboard-navbar-element">
          <Link to="/earnings">
            <BiLineChart className="dashboard-navbar-icon" />
            Earnings
          </Link>
        </li>

        <li className="dashboard-navbar-element">
          <Link to="/expenses">
            <BiLineChartDown className="dashboard-navbar-icon" />
            Expenses
          </Link>
        </li>

        <li className="dashboard-navbar-element">
          <Link to="/investments">
            <BsCashStack className="dashboard-navbar-icon" />
            Investments
          </Link>
        </li>

        <li className="dashboard-navbar-element">
          <Link to="/settings">
            <BsFillGearFill className="dashboard-navbar-icon" />
            Settings
          </Link>
        </li>

        <li className="dashboard-navbar-element">
          <Link to="/signout">
            <FaPowerOff className="dashboard-navbar-icon" />
            Sign out
          </Link>
        </li>

      </ul>

    </nav>
  )
}

export default DashboardNavbar
