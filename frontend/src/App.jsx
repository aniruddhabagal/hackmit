import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard";
import Quiz from "./components/quiz";
import Tutorial from "./components/tutorial";
import Test from "./test";
import Login from "./components/login";
import Charts from "./components/chart";

function App() { 
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="tutorial" element={<Tutorial />} />
        <Route path="analytics" element={<Charts />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
