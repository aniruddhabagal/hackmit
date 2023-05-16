import React from "react";
import "./dashboard.css";
import Audio from "./Audio";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const navigateToTut = () => {
    // 👇️ navigate to /contacts
    navigate("/tutorial");
  };

  const navigateToQuiz = () => {
    // 👇️ navigate to /contacts
    navigate("/quiz");
  };

  return (
    <div>
      <div className="logo-1"></div>
      <div className="speech-head">Parts Of Speech</div>
      <div className="cards">
        <div className="card tut">
          <button className="btn-choose" onClick={navigateToTut}>
            Tutorial
          </button>
        </div>
        <div className="card quiz">
          <button className="btn-choose" onClick={navigateToQuiz}>
            Quiz
          </button>
        </div>
      </div>
      <Audio />
    </div>
  );
}

export default Dashboard;
