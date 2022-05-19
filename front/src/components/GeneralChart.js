import React from "react";
// Styles
import "../styles/component-styles/GeneralChart.css"
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


function GeneralChart() {
    return (
        <>
            <div className="generalChartContainer">
              <Chart
                type="line"
                data={{
                    labels: ["1", "2", "3", "4"],
                    datasets: [{
                        type: "line",
                        label: 'Monthly Earnings',
                        data: [10, 20, 30, 40],
                        borderColor: "#009379",
                        backgroundColor: "#009379",
                    },{
                        type: "line",
                        label: 'Monthly Expenses',
                        data: [20, 13, 10, 5],
                        borderColor: "#FF6250",
                        backgroundColor: "#FF6250"
                    }]
                }}
                options={{
                    responsive: true,
                    
                }}
                
              />
            </div>
        </>
    );
}

export default GeneralChart;