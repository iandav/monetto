import React from "react";
import { icons } from "react-icons"
// React icons
import { FaChartPie } from "react-icons/fa"
import { BiLineChart } from "react-icons/bi"
import { BiLineChartDown } from "react-icons/bi"
import { BsCashStack } from "react-icons/bs"
import { BsFillGearFill } from "react-icons/bs"
import { FaPowerOff } from "react-icons/fa"


// Styles
import "../styles/component-styles/DashboardNavbar.css"
// Components
import MonettoLogo from "./MonettoLogo";

function DashboardNavbar() {
    return (
        <nav className="dashboardNavbarContainer">

            <MonettoLogo style="dashboardNavbarLogo"/>

            <ul>

                <li className="dashboardNavbarElement active">
                    <a href="#"><FaChartPie className="dashboardNavbarIcon" />Dashboard</a>
                </li>

                <li className="dashboardNavbarElement">
                    <a href="#"><BiLineChart className="dashboardNavbarIcon" />Earnings</a>
                </li>

                <li className="dashboardNavbarElement">
                    <a href="#"><BiLineChartDown className="dashboardNavbarIcon" />Expenses</a>
                </li>

                <li className="dashboardNavbarElement">
                    <a href="#"><BsCashStack className="dashboardNavbarIcon" />Investments</a>
                </li>

                <li className="dashboardNavbarElement">
                    <a href="#"><BsFillGearFill className="dashboardNavbarIcon" />Settings</a>
                </li>

                <li className="dashboardNavbarElement">
                    <a href="#"><FaPowerOff className="dashboardNavbarIcon" />Sign out</a>
                </li>

            </ul>

        </nav>
    );
}

export default DashboardNavbar;