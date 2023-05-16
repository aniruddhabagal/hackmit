import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// eslint-disable-next-line react/prop-types
function BarChart({ chartData }) {
  return <Bar data={chartData} />;
}

export default BarChart;
