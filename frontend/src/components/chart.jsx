/* eslint-disable react/prop-types */
import { useState } from "react";
import BarChart from "./barChart";
import PieChart from "./piechart";
import "./chart.css";

// import { BarData } from "./Data";
// import { PieData } from "./Data";

export var cor, tt, ts;

function Chart({ corr2, tTime, time , data }) {
  console.log(corr2, time, tTime);
  const [getanswers , setanswers] = useState(false);
  const [index, setindex] = useState(0);


  const BarData = [
    {
      id: 1,
      prob: 1,
      time: time[0],
    },
    {
      id: 2,
      prob: 2,
      time: time[1],
    },
    {
      id: 3,
      prob: 3,
      time: time[2],
    },
    {
      id: 4,
      prob: 4,
      time: time[3],
    },
    {
      id: 5,
      prob: 5,
      time: time[4],
    },
    {
      id: 6,
      prob: 6,
      time: time[5],
    },
    {
      id: 7,
      prob: 7,
      time: time[6],
    },
    {
      id: 8,
      prob: 8,
      time: time[7],
    },
    {
      id: 9,
      prob: 9,
      time: time[8],
    },
    {
      id: 10,
      prob: 10,
      time: time[9],
    },
    {
      id: 11,
      prob: 11,
      time: time[10],
    },
    {
      id: 12,
      prob: 12,
      time: time[11],
    },
    {
      id: 13,
      prob: 13,
      time: time[12],
    },
    {
      id: 14,
      prob: 14,
      time: time[13],
    },
    {
      id: 15,
      prob: 15,
      time: time[14],
    },
    {
      id: 16,
      prob: 16,
      time: time[15],
    },
    {
      id: 17,
      prob: 17,
      time: time[16],
    },
    {
      id: 18,
      prob: 18,
      time: time[17],
    },
    {
      id: 19,
      prob: 19,
      time: time[18],
    },
    {
      id: 20,
      prob: 20,
      time: time[19],
    },
  ];

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

  const PieData = [
    { id: 1, correctAns: corr2 },
    {
      id: 2,
      wrongAns: 20 - corr2,
    },
  ];

  const [pieData, setPieData] = useState({
    labels: PieData.map((data) => data.id),
    datasets: [
      {
        label: "Ans Correct",
        data: PieData.map((data) => data.correctAns),

        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          //   "#50AF95",
          //   "#f3ba2f",
          //   "#2a71d0",
        ],
        color: "#FFFFFF",
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Ans Wrong",
        data: PieData.map((data) => data.wrongAns),

        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
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

  cor = corr2;
  tt = tTime;
  ts = time;

  console.log("ts is ", ts[1]);
  const min = Math.floor(tt / 60);
  const sec = tt % 60;
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
  const result = `${padTo2Digits(min)}:${padTo2Digits(sec)}`;

  return (
    <div>
      <h1 className="chart-head">Analytics</h1>

      <h3 className="chart-time">Total time elapsed: {result}</h3>
      <div className="chart-contain">
        <div style={{ width: 700 }}>
          <BarChart chartData={barData} />
        </div>
        <div style={{ width: 700 }}>
          <PieChart chartData={pieData} />
        </div>
      </div>
      <div className="verify">
      {getanswers && (
          <div>
            <div className="question">Q. {data[index].sentence}</div>
            {data[index].pos.map((s, index) => (
              <div className="word-ans" key={index}>
                <span className="word-ques">{s.word}</span> :{" "}
                <span className="ans-ques">{s.tag}</span>
              </div>
            ))}
            {!(index == 19) && (
          <button className="btn-nxt" onClick={() => setindex(index + 1)}>
            NEXT{" "}
          </button>
        )}
          </div>
        )
        
        }
     </div>
    

  
     <button onClick={()=> setanswers(!getanswers)}  className="quiz-dash">Verify Answers</button>
    </div>
  );
}

export default Chart;
