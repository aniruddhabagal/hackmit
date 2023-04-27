import React from "react";
import "./dashboard.css";

function Dashboard() {
  return (
    <div>
      <div className="logo-1"></div>
      <div className="speech-head">Parts Of Speech</div>
      <div className="cards">
        <div className="card tut">
          <button className="btn-choose">Tutorial</button>
        </div>
        <div className="card quiz">
          <button className="btn-choose">Quiz</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
