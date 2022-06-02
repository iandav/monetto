import React from "react";
import { DashboardHeader, DashboardNavbar } from "../../components";
import EarningsList from "../../components/EarningsList/EarningsList";
// Styles
import "./EarningsPage.css"
// React icons
import { BiSort } from "react-icons/bi"
import { FaFilter } from "react-icons/fa"

function EarningsPage() {
    return(
        <div className="dashboardContainer">

            <DashboardNavbar />

            <div className="dashboardContent">

                <DashboardHeader title="Earnings" />

                <div className="dashboardEarningsContainer">
                    <div className="dashboardEarningsHeader">
                        <h2>All earnings</h2>
                        <div>
                            <div className="dashboardEarningsSort">
                                <BiSort className="dashboardEarningsIcon"/>
                                <p>Sort</p>
                            </div>
                            <div className="dashboardEarningsFilter">
                                <FaFilter className="dashboardEarningsIcon"/>
                                <p>Filter</p>
                            </div>
                        </div>
                    </div>
                    
                    <EarningsList />
            
                </div>

            </div>

        </div>
    );
}

export default EarningsPage;