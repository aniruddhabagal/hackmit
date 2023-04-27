import "./login.css";
import Log from "./log";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const navigateToDash = () => {
    // 👇️ navigate to /contacts
    navigate("/dashboard");
  };

  return (
    <div className="login-card">
      <div className="left">
        <div>
          <h1>Student Login</h1>
          <h2>Accelerate your Language Learning</h2>
        </div>
        <img
          src="https://img.freepik.com/premium-vector/man-with-laptop-education-working-concept_113065-223.jpg"
          alt="student-img"
        />
      </div>
      <div className="right">
        <div className="logo"></div>
        <input type="text" placeholder=" Username" />
        <input type="password" placeholder=" Password" />
        <input
          className="login-btn"
          type="submit"
          value="Login"
          onClick={navigateToDash}
        />
        <Log className="login-btn" onClick={navigateToDash} />
      </div>
    </div>
  );
}

export default Login;
