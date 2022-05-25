import React from 'react'
import "../styles/page-styles/DashboardPage.css"
import DashboardNavbar from '../components/DashboardNavbar'
import DashboardHeader from '../components/DashboardHeader'
import DashboardCard from '../components/DashboardCard'
import GeneralChart from '../components/GeneralChart'
import TransactionHistory from '../components/TransactionHistory'
import ExpensesChart from '../components/ExpensesChart'

function DashboardPage() {
  
  return (
    <div className="dashboardContainer">

      <DashboardNavbar />

      <div className='dashboardContent'>

        <DashboardHeader title="Dashboard" />

        <div className='dashboardGeneralChartContainer'>
          <div className='dashboardGeneralChart'>
            <h2>Monthly income</h2>
            <GeneralChart />
          </div>

          <div className='dashboardCardsContainer'>
            <DashboardCard title="Balance" value="$302000" name="dashboardPageCard balance" icon="" />
            <DashboardCard title="Income" value="$293000" name="dashboardPageCard income" icon="" />
            <DashboardCard title="Expenses" value="$44820" name="dashboardPageCard expenses" icon="" />
          </div>
        </div>

        <div className='dashboardTransactionsSection'>
          <div className='dashboardExpensesChartContainer'>
          <ExpensesChart />
          </div>

          <div className='transactionHistory'>
            <TransactionHistory />
          </div>
        </div>

      </div>
    </div>
  );
}

export default DashboardPage;