import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// eslint-disable-next-line react/prop-types
function PieChart({ chartData }) {
  return <Pie data={chartData} />;
}

export default PieChart;
