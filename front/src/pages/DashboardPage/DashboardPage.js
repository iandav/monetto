import React from "react"
import "./DashboardPage.css"
import { DashboardLogo, DashboardNavbar } from "../../components"
import { DashboardHeader } from "../../components"
import { DashboardCard } from "../../components"
import { GeneralChart } from "../../components"
import { TransactionHistory } from "../../components"
import { ExpensesChart } from "../../components"

function DashboardPage() {
  return (
    <div className="dashboard-page-container">

      <DashboardNavbar />

      <DashboardHeader title="Dashboard" />

      <section className="dashboard-general-chart-section">
        <div className="dashboard-general-chart-box">
          <div className="dashboard-general-chart-container">
              <h2>Monthly income</h2>
              <GeneralChart />
          </div>
          <div className="dashboard-cards-container">
            <DashboardCard
              title="Balance"
              value="$302.000"
              name="dashboardPageCard balance"
              icon=""
            />
            <DashboardCard
              title="Income"
              value="$293.000"
              name="dashboardPageCard income"
              icon=""
            />
            <DashboardCard
              title="Expenses"
              value="$44.820"
              name="dashboardPageCard expenses"
              icon=""
            />
          </div>
        </div>
      </section>

      <section className="dashboard-transactions-section">
        <div className="dashboard-expenses-chart-container">
            <h2>Expenses by category</h2>
            <ExpensesChart />
        </div>
        <div className="dashboard-transactions-container">
          <TransactionHistory />
        </div>
      </section>
        
    </div>
  )
}

export default DashboardPage
