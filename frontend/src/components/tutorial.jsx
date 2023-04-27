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







function Tutorial() {

  const [index , setindex] = useState(0);

  const goquiz = async (e)=>{
   // e.preventdefault();
    window.alert("Click Ok to start the quiz");
    window.location.replace("/quiz")
  } 
  return <>
  <div>
      <div>
      {data[index].map((s) => (
        <div>
        <div> WORD :{s.word} </div>
        <div> PART : {s.part} </div>
        </div>
      ))}
    </div>
    { !(index==5) && 
    <button onClick={()=>
      setindex(index+1)}>NEXT </button> 
    } 
    {
      index == 5 &&
      <button onClick={(e)=>
        goquiz(e)
      }>Take Quiz </button> 
      }
      
  </div>
  
  </>;
}

export default Tutorial;
