import React from "react";
// Styles
import "./ExpensesChart.css"
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
import { GiHeartInside } from "react-icons/gi";
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

function ExpensesChart() {
    return (
        <div className="expensesChartContainer">
              <Chart
                style={{
                  
                    
                }}
                data={{
                    labels: ["Category 1", "Category 2", "Category 3"],
                    datasets: [{
                        label: "% of Expenses",
                        type: "doughnut",
                        data: [4, 32, 50, 14],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                        ],
                        borderColor: "#2b2b2b"
                    }]
                }}
                options={{
                    responsive: true,
                    radius: "110",
                    plugins: {
                      legend: {
                        display: false,
                      },
                    }
                }}
                
              />
            </div>
    );
}

export default ExpensesChart;