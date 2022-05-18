import React from "react";
// Styles
import "../styles/component-styles/GeneralChart.css"
// ChartJS components
import { Chart } from "react-chartjs-2"
// ChartJS dependencies
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

// Chart configuration (ignore the following variables)
const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']

const data = {
    labels: labels,
    datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30],
    }]
  };

const config = {
    data: data,
    options: {}
  };


function GeneralChart() {
    return (
        <>
            <div className="generalChartContainer">
              <Chart
                type="line"
                data={{
                    labels: ['1', '2', "3", "4", "5", "6" ],
                    datasets: [{
                        data: [9000, 13000, 18000, 24000, 32000, 59000],
                    }]
                }}
              />
            </div>
        </>
    );
}

export default GeneralChart;