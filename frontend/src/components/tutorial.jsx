import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./tutorial.css";
const data = {
  0: [
    {
      word: "dog",
      part: "verb",
    },
    {
      word: "cat",
      part: "verb",
    },
    {
      word: "fff",
      part: "verb",
    },
    {
      word: "ggg",
      part: "verb",
    },
    {
      word: "hh",
      part: "verb",
    },
  ],
  1: [
    {
      word: "do1g",
      part: "verb",
    },
    {
      word: "cat1",
      part: "verb",
    },
    {
      word: "fff1",
      part: "verb",
    },
    {
      word: "ggg1",
      part: "verb",
    },
    {
      word: "hh1",
      part: "verb",
    },
  ],
  2: [
    {
      word: "dog2",
      part: "verb",
    },
    {
      word: "cat2",
      part: "verb",
    },
    {
      word: "fff2",
      part: "verb",
    },
    {
      word: "gg2g",
      part: "verb",
    },
    {
      word: "hh2",
      part: "verb",
    },
  ],
  3: [
    {
      word: "dog2",
      part: "verb",
    },
    {
      word: "cat2",
      part: "verb",
    },
    {
      word: "fff2",
      part: "verb",
    },
    {
      word: "gg2g",
      part: "verb",
    },
    {
      word: "hh2",
      part: "verb",
    },
  ],
  4: [
    {
      word: "dog2",
      part: "verb",
    },
    {
      word: "cat2",
      part: "verb",
    },
    {
      word: "fff2",
      part: "verb",
    },
    {
      word: "gg2g",
      part: "verb",
    },
    {
      word: "hh2",
      part: "verb",
    },
  ],
  5: [
    {
      word: "dog2",
      part: "verb",
    },
    {
      word: "cat2",
      part: "verb",
    },
    {
      word: "fff2",
      part: "verb",
    },
    {
      word: "gg2g",
      part: "verb",
    },
    {
      word: "hh2",
      part: "verb",
    },
  ],
};

function Tutorial() {
  const [index, setindex] = useState(0);
  const [loaddata, setload] = useState(false);
  const [data2, setdata2] = useState([]);

  const goquiz = async (e) => {
    // e.preventdefault();
    window.alert("Click Ok to start the quiz");
    window.location.replace("/quiz");
  };

  const ld = async () => {
    try {
      const res = await axios.get("http://10.60.209.138:8990/tutorial");
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
  return (
    <>
      <div className="tut-container">
        <div class="logo-holder">
          <div class="bg"></div>
          <div class="bar"></div>
          <div class="bar fill1"></div>
          <div class="bar fill2"></div>
          <div class="bar fill3"></div>
          <div class="bar fill4"></div>
          <div class="bar fill1"></div>
          <div class="bar fill5"></div>
          <div class="bar fill6"></div>
          <div class="bar fill1"></div>
          <div class="bar fill2"></div>
          <div class="bar fill3"></div>
          <div class="bar fill4"></div>
          <div class="bar fill1"></div>
          <div class="bar fill5"></div>
          <div class="bar fill6"></div>
          <div class="bar fill1"></div>
          <div class="bar fill2"></div>
          <div class="bar fill3"></div>
          <div class="bar fill4"></div>
          <div class="bar fill1"></div>
          <div class="bar fill5"></div>
          <div class="bar fill6"></div>
          <div class="bar fill1"></div>
          <div class="bar fill2"></div>
          <div class="bar fill3"></div>
          <div class="bar fill4"></div>
          <div class="bar fill1"></div>
          <div class="bar fill5"></div>
          <div class="bar fill6"></div>
          <div class="bar fill1"></div>
          <div class="bar fill2"></div>
          <div class="bar fill3"></div>
          <div class="bar fill4"></div>
          <div class="bar fill1"></div>
          <div class="bar fill5"></div>
          <div class="bar fill6"></div>
          <div class="bar fill1"></div>
          <div class="bar fill2"></div>
          <div class="bar fill3"></div>
          <div class="bar fill4"></div>
          <div class="bar fill1"></div>
          <div class="bar fill5"></div>
          <div class="bar fill6"></div>
          <div class="bar fill1"></div>
          <div class="bar fill2"></div>
          <div class="bar fill3"></div>
          <div class="bar fill4"></div>
          <div class="bar fill1"></div>
          <div class="bar fill5"></div>
          <div class="bar fill6"></div>

          <div class="bar"></div>
        </div>
        {loaddata && (
          <div>
            <div className="question">Q. {data2[index].sentence}</div>
            {data2[index].pos.map((s, index) => (
              <div className="word-ans" key={index}>
                <span className="word-ques">{s.word}</span> :{" "}
                <span className="ans-ques">{s.tag}</span>
              </div>
            ))}
          </div>
        )}
        {!(index == 19) && (
          <button className="btn-nxt" onClick={() => setindex(index + 1)}>
            NEXT{" "}
          </button>
        )}
        {!(index == 19) && (
          <button className="btn-nxt" onClick={() => setindex(19)}>
            Skip to End{" "}
          </button>
        )}
        {index == 19 && (
          <button className="btn-test" onClick={(e) => goquiz(e)}>
            Take Quiz{" "}
          </button>
        )}
      </div>
    </>
  );
}

export default Tutorial;
