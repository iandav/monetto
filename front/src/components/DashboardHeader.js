import React from "react";
// Styles
import "../styles/component-styles/DashboardHeader.css"

function DashboardHeader({title}) {
    return (
        <header className="dashboardHeaderContainer">
            <h1 className="dashboardHeaderTitle">
                {title}
            </h1>

        <div className="dashboardheaderUsernameContainer">
            <p className="dashboardHeaderUsername">Username</p>
            <img src={require("../images/user.png")} alt="Image of the current user" className="dashboardheaderImage" />
        </div>
        </header>
    );
}

export default DashboardHeader;

