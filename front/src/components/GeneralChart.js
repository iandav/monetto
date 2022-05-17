import React from "react";
// Styles
import "../styles/component-styles/GeneralChart.css"
// ChartJS
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend } from "chart.js"
import { Bar } from "react-chartjs-2"
// Adapter
import "chartjs-adapter-date-fns"

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

// User data
const data = {
    datasets: [{
        label: "Monthly income",
        data: [
            {x:"2022-06-16", y: 42220},
            {x:"2022-06-18", y: 5990},
            {x:"2022-06-20", y: 70090},
            {x:"2022-06-25", y: 84090}
        ],
        backgroundColor: "orange"
    }]
}

// options of the chart
const config = {
    data,
    options: {
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "day"
                }
            }
        }
    }
}


function GeneralChart() {
    return (
        <div className="generalChartContainer">
            <Bar data={{config}}
            />
        </div>
    );
}

export default GeneralChart;