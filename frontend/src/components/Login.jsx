import "./login.css";
import Log from "./log";

import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  // const navigateToDash = async (e) => {
  //   // 👇️ navigate to /contacts
  //   e.preventDefault();
  //   let det = {
  //     username: document.getElementById("usn").value,
  //     password: document.getElementById("pass").value,
  //   };

  //   try {
  //     const res = await axios.post("http://192.168.137.149:8990/login", det);
  //     if (res.status == 200) {
  //       navigate("/dashboard");
  //     } else {
  //       navigate("/dashboard");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const navigateToDash = () => {
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
        <input id="usn" type="text" placeholder=" Username*" required />
        <input id="pass" type="password" placeholder=" Password*" required />
        <input
          className="login-btn"
          type="submit"
          value="Login"
          onClick={(e) => navigateToDash(e)}
        />
      </div>
    </div>
  );
}

export default Login;
