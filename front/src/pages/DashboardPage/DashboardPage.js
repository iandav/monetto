import React from 'react'
import "./DashboardPage.css"
import { DashboardNavbar } from '../../components'
import { DashboardHeader } from '../../components'
import { DashboardCard } from '../../components'
import { GeneralChart } from '../../components'
import { TransactionHistory } from '../../components'
import { ExpensesChart } from '../../components'

function DashboardPage() {
  
  return (
    <div className="dashboardContainer">

      <DashboardNavbar active={true} />

      <div className='dashboardContent'>

        <DashboardHeader title="Dashboard" />

        <div className='dashboardGeneralChartContainer'>
          <div className='dashboardGeneralChart'>
            <h2>Monthly income</h2>
            <GeneralChart />
          </div>

          <div className='dashboardCardsContainer'>
            <DashboardCard title="Balance" value="$302.000" name="dashboardPageCard balance" icon="" />
            <DashboardCard title="Income" value="$293.000" name="dashboardPageCard income" icon="" />
            <DashboardCard title="Expenses" value="$44.820" name="dashboardPageCard expenses" icon="" />
          </div>
        </div>

        <div className='dashboardTransactionsSection'>
          <div className='dashboardExpensesChartContainer'>
            <h2>Expenses by category</h2>
            <ExpensesChart />
          </div>

          <div className='dashboardTransactionHistoryContainer'>
            <TransactionHistory />
          </div>
        </div>

      </div>
    </div>
  );
}

export default DashboardPage;