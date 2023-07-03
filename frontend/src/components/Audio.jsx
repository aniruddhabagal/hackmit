import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Audio.css";

export default function Audio() {
  const recorderControls = useAudioRecorder();
  const [loadcall, setloadcall] = useState(false);
  const [apid, setapid] = useState();

  function blobToBase64(blob) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(blob);
    });
  }

  const addAudioElement = async (blob) => {
    blobToBase64(blob).then((base64) => {
      axios
        .post("http://192.168.42.14:8990/sentenceByVoice", {
          // description: words[curIndex],
          audio: base64,
        })
        .then((res) => {
          console.log(res.data);
          setapid(res.data);
          setloadcall(true);
        });
    });
    //   const measuredAccuracy = res.data;
    //   setAccuracy(measuredAccuracy);

    // const audio = document.createElement("audio");

    // audio.src = url;
    // audio.controls = true;
    // //document.body.appendChild(audio);
    // console.log(audio);
  };

  return (
    <div>
      <div className="record">
        <div className="recordComp">
          <AudioRecorder
            onRecordingComplete={(blob) => addAudioElement(blob)}
            recorderControls={recorderControls}
          />
        </div>
        <div className="recordComp">
          <button onClick={recorderControls.stopRecording}>
            Stop recording
          </button>
        </div>

        {loadcall && (
          <div className="audio-ques">
            <div>
              <div className="question">Q. {apid.sentence}</div>
              {apid.pos.map((s, index) => (
                <div className="word-ans" key={index}>
                  <span className="word-ques">{s.word}</span> :{" "}
                  <span className="ans-ques">{s.tag}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
