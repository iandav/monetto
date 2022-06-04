import React from "react";
import { DashboardHeader, DashboardNavbar } from "../../components";
import EarningsList from "../../components/EarningsList/EarningsList";
// Styles
import "./EarningsPage.css"

function EarningsPage() {
    return(
        <div className="dashboardContainer">
            <DashboardNavbar />
            <div className="dashboardContent">
                <DashboardHeader title="Earnings" />                  
                <EarningsList />
            </div>
        </div>
    );
}

export default EarningsPage;