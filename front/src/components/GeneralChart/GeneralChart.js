import React, { useEffect, useState } from "react"
import "./GeneralChart.css"
import { Chart } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js"
import "chartjs-adapter-date-fns"
import getDaysInMonth from 'date-fns/getDaysInMonth'
import { getEarningsFromUser } from "../../api/services/earnings"
import { getExpensesFromUser } from "../../api/services/expenses"
ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
)


function GeneralChart() {

  const now = new Date()

  // Years
  const fromYear = now.getFullYear()
  const toYear = now.getFullYear() + 1
  // Months
  const fromMonth = `0${now.getMonth() + 1}`
  const toMonth = fromMonth
  // Last day
  const toDay = getDaysInMonth(now)

  // YYYY-MM-DD
  const fromCurrentYear = `${fromYear}-01-01`
  const toCurrentYear = `${toYear}-01-01`

  const fromCurrentMonth = `${fromYear}-${fromMonth}-01`
  const toCurrentMonth = `${fromYear}-${toMonth + 1}-01`

  const [earnings, setEarnings] = useState([])
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    ;(async () => {
      // Fetch user earnings of the current year
      const userEarnings = await getEarningsFromUser(dateFromDefault, dateToDefault)
      const filterEarnings = userEarnings.map(index => ({x: index.date, y: index.value}))
      setEarnings(filterEarnings)

       // Fetch user expenses of the current year
       const userExpenses = await getExpensesFromUser(dateFromDefault, dateToDefault)
       const filterExpenses = userExpenses.map(index => ({x: index.date, y: index.value}))
       setExpenses(filterExpenses)
    })()
  }, [])

  return (
    <Chart
      type="line"
      style={{
        width: 686,
        height: 380,
        marginTop: 0,
        marginRight: 62,
        marginBottom: 32,
        marginLeft: 32,
      }}
      data={{
        datasets: [
          {
            type: "line",
            label: "Earnings",
            data: earnings,
            /*
              [
                {x: "2021-11-01", y: 12000},
                {x: "2021-12-01", y: 24500},
                {x: "2022-01-01", y: 29300},
                {x: "2022-02-01", y: 43120},
                {x: "2022-03-01", y: 61000},
                {x: "2022-04-01", y: 118120},
                {x: "2022-05-01", y: 183312},
                {x: "2022-06-01", y: 202000},
                {x: "2022-07-01", y: 242000},
                {x: "2022-08-01", y: 293000},
              ],
              */
            borderColor: "#009379",
            backgroundColor: "#009379",
            tension: 0.4
          },
          {
            type: "line",
            label: "Expenses",
            data: expenses,
            /*
            [
              { x: "2022-03-01", y: 17200 },
              { x: "2022-04-01", y: 32000 },
              { x: "2022-05-01", y: 44820 },
              { x: "2022-06-01", y: 44200 },
              { x: "2022-07-01", y: 88400 },
              { x: "2022-08-01", y: 44820 },
            ]
            */
            borderColor: "#FF6250",
            backgroundColor: "#FF6250",
            tension: 0.4
          },
        ],
      }}
      options={{
        responsive: true,
        scales: {
          x: {
            type: "time",
            time: {
              unit: "month",
            },
            grid: {
              color: "#3b3b3b",
              tickColor: "#2b2b2b",
            },
            ticks: {
              color: "rgba(255, 255, 255, 0.4)",
              font: {
                family: "Poppins",
                size: 13,
              },
            },
          },
          y: {
            grid: {
              color: "#3b3b3b",
              tickColor: "#2b2b2b",
            },
            ticks: {
              color: "#E8BF59",
              font: {
                family: "Poppins",
                size: 13,
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  )
}

export default GeneralChart
