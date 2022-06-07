import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./DashboardLogo.css"
// Images
import logo from "../../images/monetto-logo.png"

function DashboardLogo({styles}) {
    return(
        <Link to="/" className={`dashboard-logo-container ${styles}`}>
            <img src={logo} alt="Monetto Logo" className="dashboard-logo-image" />
        </Link>
    );
}

export default DashboardLogo;