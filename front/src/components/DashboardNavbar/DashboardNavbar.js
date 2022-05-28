import React from "react";
// icons not used.
// import { icons } from "react-icons"
// React icons
import { FaChartPie } from "react-icons/fa"
import { BiLineChart } from "react-icons/bi"
import { BiLineChartDown } from "react-icons/bi"
import { BsCashStack } from "react-icons/bs"
import { BsFillGearFill } from "react-icons/bs"
import { FaPowerOff } from "react-icons/fa"


// Styles
import "./DashboardNavbar.css"
// Components
import MonettoLogo from "../MonettoLogo/MonettoLogo";
import { Link } from "react-router-dom";

function DashboardNavbar() {
    return (
        <nav className="dashboardNavbarContainer">

            <ul>

            <div className="dashboardNavbarLogoContainer">
                <MonettoLogo styles="dashboardNavbarLogo"/>
            </div>

                <li className="dashboardNavbarElement active">
                    <Link to=""><FaChartPie className="dashboardNavbarIcon" />Dashboard</Link>
                </li>

                <li className="dashboardNavbarElement">
                    <Link to=""><BiLineChart className="dashboardNavbarIcon" />Earnings</Link>
                </li>

                <li className="dashboardNavbarElement">
                    <Link to=""><BiLineChartDown className="dashboardNavbarIcon" />Expenses</Link>
                </li>

                <li className="dashboardNavbarElement">
                    <Link to=""><BsCashStack className="dashboardNavbarIcon" />Investments</Link>
                </li>

                <li className="dashboardNavbarElement">
                    <Link to=""><BsFillGearFill className="dashboardNavbarIcon" />Settings</Link>
                </li>

                <li className="dashboardNavbarElement">
                    <Link to=""><FaPowerOff className="dashboardNavbarIcon" />Sign out</Link>
                </li>

            </ul>

        </nav>
    );
}

export default DashboardNavbar;