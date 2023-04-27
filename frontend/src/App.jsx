import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard";
import Quiz from "./components/quiz";
import Tutorial from "./components/tutorial";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="tutorial" element={<Tutorial />} />
      </Routes>
    </>
  );
}

export default App;
