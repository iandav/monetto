import React from "react";
import { icons } from "react-icons"

// Styles
import "../styles/component-styles/DashboardNavbar.css"
// Components
import MonettoLogo from "./MonettoLogo";

function DashboardNavbar() {
    return (
        <div className="dashboardNavbarContainer">
            <MonettoLogo />
        </div>
    );
}

export default DashboardNavbar;