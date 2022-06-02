import React, { useEffect, useState } from "react";
// Styles
import "./GeneralChart.css"
// API calls

// ChartJS dependencies
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
  SubTitle
} from 'chart.js';
// ChartJS date adapter
import "chartjs-adapter-date-fns"
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
);

const test = function() {
  fetch("http://localhost:3000/api/earning/user/test", {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
  }

  console.log(test())

function GeneralChart() {

  let [earnings, setEarnings] = useState([])

  // Store the username of the current user
  const username = sessionStorage.getItem("user")

  // Collect user earnings from the API to be displayed like this: {x: "date", y: int}
  function collectEarnings(earnings) {
    let result = [];
    for (let i = 0; i < earnings.length; i++) {
      result.push({x: earnings[i].date , y: earnings[i].value})
    }
    return result;
  }

  // Get user earnings
  /*
  const getEarnings = () => {
    fetch(`http://localhost:3000/api/earning/user/${username}`, {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .then(response => {
      setEarnings(collectEarnings(response))
      console.log(collectEarnings(response))
    })
  }

  useEffect(() => {
    getEarnings()
  },[])

  */


    return (
        <>
              <Chart
                type="line"
                style={{
                  width: 686,
                  height: 380,
                  marginTop: 0,
                  marginRight: 62,
                  marginBottom: 32,
                  marginLeft: 32
                }}
                data={{
                    datasets: [{
                        type: "line",
                        label: 'Earnings',
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
                    },{
                        type: "line",
                        label: 'Expenses',
                        data: [
                          {x: "2022-03-01", y: 17200},
                          {x: "2022-04-01", y: 32000},
                          {x: "2022-05-01", y: 44820},
                          {x: "2022-06-01", y: 44200},
                          {x: "2022-07-01", y: 88400},
                          {x: "2022-08-01", y: 44820},
                        ],
                        borderColor: "#FF6250",
                        backgroundColor: "#FF6250"
                    }]
                }}
                options={{
                    responsive: true,
                    scales: {
                      x: {
                        type: "time",
                        time: {
                          unit: "month"
                        },
                        grid: {
                          color: "#3b3b3b",
                          tickColor: "#2b2b2b",
                        },
                        ticks: {
                          color: "rgba(255, 255, 255, 0.4)",
                          font: {
                            family: "Poppins",
                            size: 13
                          }
                        }
                      },
                      y: {
                        grid: {
                          color: "#3b3b3b",
                          tickColor: "#2b2b2b"
                        },
                        ticks: {
                          color: "#E8BF59",
                          font: {
                            family: "Poppins",
                            size: 13
                          }
                        }
                      }
                    },
                    plugins: {
                      legend: {
                        display: false
                      }
                    }
                }}
              />
        </>
    );
}

export default GeneralChart;