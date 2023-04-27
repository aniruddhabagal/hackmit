/* eslint-disable react/prop-types */
import { useState } from "react";
import BarChart from "./barChart";
import PieChart from "./piechart";
import { BarData } from "./Data";
import { PieData } from "./Data";

function Chart({ corr2, tTime, time }) {
  console.log(corr2, time, tTime);

  const [barData, setBarData] = useState({
    labels: BarData.map((data) => data.id),
    datasets: [
      {
        label: "Time Taken(s)",
        data: BarData.map((data) => data.time),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        color: "#FFFFFF",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [pieData, setPieData] = useState({
    labels: PieData.map((data) => data),
    datasets: [
      {
        label: "Ans Correct",
        data: PieData.map((data) => data),

        backgroundColor: [
          "rgba(75,192,192,1)",
          //   "#ecf0f1",
          //   "#50AF95",
          //   "#f3ba2f",
          //   "#2a71d0",
        ],
        color: "#FFFFFF",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div>
      <div style={{ width: 700 }}>
        <BarChart chartData={barData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={pieData} />
      </div>
    </div>
  );
}

export default Chart;
