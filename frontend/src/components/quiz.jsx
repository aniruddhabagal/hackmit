import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./chart.jsx";
import testing from "./testing.jsx";

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
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const ld = async () => {
    try {
      const res = await axios.get("http://192.168.0.135:8990/tutorial/20");
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
    setTotalTime(Math.floor((time % 6000) / 100));
    startAndStop();
    setload(false);
    setReport(true);
  };

  const handleNext = () => {
    console.log(result);
    console.log(data2[index]);
    if (index == 0) {
      setresult((prevState) => ({ ...prevState, index: seconds.toString() }));
    } else {
      setresult((prevState) => ({
        ...prevState,
        index: (seconds - result[index - 1]).toString(),
      }));
    }
    console.log(data2[index]);
    setindex(index + 1);
  };
  // var tt = totalTim
  if (report) {
    // return <Chart corr={corr} totalTime={totalTime} time={result} />;
    return <testing />;
  }
  return (
    <div>
      <div>
        <p>
          {hours}:{minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(2, "0")}
        </p>
        <div>
          {loaddata && (
            <div>
              {data2[index].sentence}
              {data2[index].pos.map((s, index) => (
                <div key={index}>
                  {s.word} : {s.tag}
                  <ul class="grid w-full gap-6 md:grid-cols-2">
                    {rowoptions.map((o, i2) => (
                      <li key={i2}>
                        <input
                          type="radio"
                          onClick={(e) => {
                            if (e.target.value == s.tag) setcorr(corr + 1);
                          }}
                          id={o + i2}
                          name={o + i2}
                          value={o}
                          required
                        />
                        <label
                          for={o + i2}
                          class="inline-flex items-center justify-between w-fit p-5 text-gray-500 bg-white border border-gray-200 rounded-lg    "
                        >
                          <div class="block">
                            <div class="w-full text-lg font-semibold">{o}</div>
                          </div>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {!(index == 19) && (
                <button onClick={() => handleNext(index)}>NEXT </button>
              )}
            </div>
          )}
        </div>

        {index == 19 && (
          <button onClick={(e) => analysis(e)}>Submit Quiz </button>
        )}
      </div>
    </div>
  );
  // if (report) {
  //   <Chart corr={corr} totalTime={totalTime} time={result} />;
  // }
}

export default Quiz;
