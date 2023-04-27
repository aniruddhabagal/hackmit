import React from "react";
import { useState , useEffect } from "react";
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
} ; 




function Tutorial() {
  const [index , setindex] = useState(0);
  return <>
  <div>


      <div>
      {data[index].map((s) => (
        <div>WORD :{s.word}
         PART : {s.part}
        </div>
        
      ))}
    </div>

      <button onClick={()=>setindex(index+1)}>NEXT </button>
  </div>
  
  </>;
}

export default Tutorial;
