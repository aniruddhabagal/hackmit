import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Audio.css";

export default function Audio() {
  const recorderControls = useAudioRecorder();

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
        .post("http://192.168.0.135:8990/sentenceByVoice", {
          // description: words[curIndex],
          audio: base64,
        })
        .then((res) => {
          console.log(res.data);
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
        {/* <TextToSpeech
            text={words[curIndex]}
            voiceList={[
              { name: "English (US) Male", value: "en-US-Wavenet-A" },
              { name: "English (US) Female", value: "en-US-Wavenet-E" },
            ]}
            defaultVoice="en-US-Wavenet-E"
            secretKey="AIzaSyCqQICOuuRMjN6wxv7SCWG6N2prMmd9GpY"
            showAudioControl={true}
            showSettings={false}
            type="Page"
          ></TextToSpeech> */}
      </div>
    </div>
  );
}
