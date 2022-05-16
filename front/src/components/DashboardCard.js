import React from "react";
// Styles
import "../styles/component-styles/DashboardCard.css"

function DashboardCard({title, value, style}) {
    return (
        <div className={`dashboardCardContainer ${style}`}>
            <h2 className="dashboardCardTitle">
                {title}
            </h2>

            <p className="dashboardCardValue">
                {value}
            </p>
        </div>
    );
}

export default DashboardCard;