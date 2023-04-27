import React, { useEffect, useState } from "react";
function Quiz() {

  const [rowoptions , setrow] = useState([]);
  const [index , setindex] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [result , setresult] = useState([]);
  const [corr , setcorr] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

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

  const data2 = 
    [
      {
          "lineId": 1,
          "sentence": "She ate an apple.",
          "pos": [
              {
                  "word": "She",
                  "tag": "PRP",
                  "_id": "644a7c1c7530edafff4e6c4a"
              },
              {
                  "word": "ate",
                  "tag": "VBD",
                  "_id": "644a7c1c7530edafff4e6c4b"
              },
              {
                  "word": "an",
                  "tag": "DT",
                  "_id": "644a7c1c7530edafff4e6c4c"
              },
              {
                  "word": "apple",
                  "tag": "NN",
                  "_id": "644a7c1c7530edafff4e6c4d"
              },
              {
                  "word": ".",
                  "tag": ".",
                  "_id": "644a7c1c7530edafff4e6c4e"
              }
          ],
          "__v": 0
      },
      {
          "lineId": 1,
          "sentence": "She ate an apple.",
          "pos": [
              {
                  "word": "She",
                  "tag": "PRP",
                  "_id": "644a7c6635d5b00fcf5dc764"
              },
              {
                  "word": "ate",
                  "tag": "VBD",
                  "_id": "644a7c6635d5b00fcf5dc765"
              },
              {
                  "word": "an",
                  "tag": "DT",
                  "_id": "644a7c6635d5b00fcf5dc766"
              },
              {
                  "word": "apple",
                  "tag": "NN",
                  "_id": "644a7c6635d5b00fcf5dc767"
              },
              {
                  "word": ".",
                  "tag": ".",
                  "_id": "644a7c6635d5b00fcf5dc768"
              }
          ],
          "__v": 0
      }
  ];
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
  } ;

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const sdata = async()=>{
    let options = [];
    data[index].map((s)=>(
      options.push(s.part)
    ))
   
    setrow( shuffle(options));

  }

  useEffect(()=>{
    sdata();
    console.log(corr);
  },[index]);

  useEffect(()=>{
    startAndStop();
  },[]);

  const analysis = async(e)=>{
    e.preventDefault();
    console.log(Math.floor((time % 6000) / 100));
    startAndStop();
  }

  const handleNext = ()=>{
    
    setindex(index+1);
  }

  return <div>
  <div >
  <p>
          {hours}:{minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(2, "0")}
        </p>
      <div >

      {data[index].map((s,index) => (
        <div key={index}>
        <div> WORD :{s.word}  Ans : {s.part} </div>

        <div> Options :
        <ul class="grid w-full gap-6 md:grid-cols-2">
          { rowoptions.map((o)=>(
    <li>
        <input type="radio" onClick={()=>{if(document.getElementById(o).value == s.part) setcorr(corr+1)  }} id={o} name={o} value={o} class="hidden peer" required/>
        <label for={o} class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100   ">                           
            <div class="block">
                <div class="w-full text-lg font-semibold">{o}</div>  
            </div>
        </label>
    </li>
    ))}
</ul>
        {/* <select id={s.word} class='bg-blue-300 m-6 p-2 rounded-lg'>
    <option value="">--Please choose an option--</option> 
          {
            rowoptions.map((o)=>(        
    <option value={o}>{o}</option>
            ))
          }
          </select> */}
           </div>
           { !(index==5) && 
    <button onClick={()=>
      handleNext(index ,  )}>NEXT </button> 
    } 
        </div>
      ))}
    </div>
    
    {
      index == 5 &&
      <button onClick={(e)=>
        analysis(e)
      }>Submit Quiz </button> 
      }
      
  </div>
  </div>;
}

export default Quiz;
