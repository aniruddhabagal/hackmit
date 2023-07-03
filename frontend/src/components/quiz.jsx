import React, { useEffect, useState } from "react";
import axios from "axios";
import "./quiz.css";
import Chart from "./chart.jsx";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const [rowoptions, setrow] = useState([]);
  const [index, setindex] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [result, setresult] = useState([]);
  const [corr, setcorr] = useState(0);
  const [loaddata, setload] = useState(false);
  const [data2, setdata2] = useState([]);
  const [report, setReport] = useState(false);
  const [totalTime, setTotalTime] = useState();
  const [checkTime, setck] = useState(0);
  const [ele, setele] = useState(69);
  const navigate = useNavigate();

  const [getanswers, setanswers] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const navigateToDash = () => {
    // 👇️ navigate to /contacts
    navigate("/dashboard");
  };

  const ld = async () => {
    try {
      const res = await axios.get("http://192.168.137.149:8990/tutorial/20");
      console.log(res.data.data);
      setdata2(res.data.data);
      setload(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!loaddata) {
      ld();
    }
  }, []);

  var total;
  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };
  // Method to reset timer back to 0
  const reset = () => {
    console.log(seconds.toString());
    setTime(0);
  };

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const sdata = () => {
    let options = [];
    data2[index].pos.map((s) => options.push(s.tag));
    let op = shuffle(options);
    setrow(op);
  };
  useEffect(() => {
    if (loaddata) {
      sdata();
    }
    console.log(corr);
  }, [index, loaddata]);

  useEffect(() => {
    startAndStop();
  }, []);

  const analysis = (e) => {
    e.preventDefault();
    console.log(result);
    setTotalTime(Math.floor((time % 6000) / 100));
    startAndStop();
    setload(false);
    setReport(true);
  };

  const clearradios = () => {
    var ele = document.querySelectorAll("input[type=radio]");
    for (var i = 0; i < ele.length; i++) {
      ele[i].checked = false;
    }
  };

  const handleNext = (index) => {
    //  console.log(result);
    setele(ele + 1);
    if (index == 0) {
      setresult((prevState) => [...prevState, Math.floor((time % 6000) / 100)]);
      setck(Math.floor((time % 6000) / 100));
    } else {
      setresult((prevState) => [
        ...prevState,
        Math.floor((time % 6000) / 100) - checkTime,
      ]);

      setck(Math.floor((time % 6000) / 100));
      console.log(result);
    }
    console.log(data2[index]);
    setindex(index + 1);
    var ele = document.querySelectorAll("input[type=radio]");
    for (var i = 0; i < ele.length; i++) {
      ele[i].checked = false;
    }
  };
  // var tt = totalTim
  if (report == false) {
    // return <Chart corr={corr} totalTime={totalTime} time={result} />;

    return (
      <div>
        <div className="hero-cont">
          <p className="timer">
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
            {/* {milliseconds.toString().padStart(2, "0")} */}
          </p>
          <div>
            {loaddata && (
              <div>
                <div className="question">{data2[index].sentence}</div>
                {data2[index].pos.map((s, index) => (
                  <div className="flex-contain" key={index}>
                    <div className="quiz-word">{s.word} :</div>
                    {/* <div className="ans-ques">{s.tag}</div> */}
                    <ul>
                      {rowoptions.map((o, i2) => (
                        <li key={o}>
                          <input
                            className="rado"
                            type="radio"
                            onClick={(e) => {
                              if (e.target.value == s.tag) setcorr(corr + 1);
                            }}
                            id={s.word + o + ele.toString()}
                            name={s.word + o + s.tag + ele.toString()}
                            value={o}
                            required
                          />
                          <label
                            for={s.word + o + ele.toString()}
                            class="items-center justify-center w-fit p-5 text-gray-500 bg-white border border-gray-200 rounded-lg"
                          >
                            <div class="block">
                              <div class="w-full text-lg font-semibold">
                                {o}
                              </div>
                            </div>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {!(index == 19) && (
                  <button
                    className="quiz-nxt"
                    onClick={() => handleNext(index)}
                  >
                    Next{" "}
                  </button>
                )}
              </div>
            )}
            <button className="quiz-reset" onClick={() => clearradios()}>
              Reset Answers
            </button>
          </div>

          {index == 19 && (
            <button className="quiz-sub" onClick={(e) => analysis(e)}>
              Submit Quiz{" "}
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {/* <Testing/> */}
        <Chart corr2={corr} tTime={totalTime} time={result} data={data2} />;
        <button className="quiz-dash" onClick={navigateToDash}>
          Dashboard{" "}
        </button>
      </div>
    );
  }
  // if (report) {
  //   <Chart corr={corr} totalTime={totalTime} time={result} />;
  // }
}

export default Quiz;
