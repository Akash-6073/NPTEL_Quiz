import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeekSelection from "./components/WeekSelection";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WeekSelection />} />
          <Route path="/quiz/:week" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
