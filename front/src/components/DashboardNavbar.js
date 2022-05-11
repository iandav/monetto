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
            <p>Hello world, this is an example to check the dashboard page</p>
        </div>
        
    );
}

export default DashboardNavbar;