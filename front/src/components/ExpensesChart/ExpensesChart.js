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
                        data: [100, 320, 450],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                        ]
                    }]
                }}
                options={{
                    responsive: true,
                    radius: "110"
                    
                }}
                
              />
            </div>
    );
}

export default ExpensesChart;