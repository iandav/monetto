import React from "react";
// Styles
import "../styles/component-styles/GeneralChart.css"
// ChartJS
import "chart.js"
import { Line } from "react-chartjs-2"

const income = [62120, 71340, 84382, 98120, 104100]
const labels = [1, 2, 3, 4, 5]
const options = {
    responsive: true,
    backgroundColor: "#2B2B2B",
    borderColor: "#E8BF59",
    color: "white",
};

function GeneralChart() {
    return (
        <div className="generalChartContainer">
        <Line
            data={{
                datasets: [
                    {
                        label: "Monthly income and expenses",
                        data: income,
                    }
                ],
                labels
            }}
            options={options}
        />
        </div>
    );
}

export default GeneralChart;