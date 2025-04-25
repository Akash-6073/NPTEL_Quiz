import React from "react";
import { useNavigate } from "react-router-dom";
import "./WeekSelection.css";

const WeekSelection = () => {
  const navigate = useNavigate();
  const weeks = Array.from({ length: 4 }, (_, i) => i + 1); // Create array [1,2,3,4]

  return (
    <div className="wrapper">
      <div className="week-selection">
        <h1>Select Outside to Take Test</h1>
        <div className="weeks-grid">
          {weeks.map((week) => (
            <button
              key={week}
              className="week-button"
              onClick={() => navigate(`/quiz/${week}`)}
            >
              <span className="calendar-icon">📅</span>
              Outside {week}
              <span className="arrow">→</span>
            </button>
          ))}
          <button
            className="week-button all-weeks"
            onClick={() => navigate("/quiz/all")}
          >
            <span className="calendar-icon">📅</span>
            All Questions
            <span className="arrow">→</span>
          </button>
        </div>
        <div className="home-icon">🏠</div>
      </div>
      <footer className="footer">
        Made with <span>❤</span> by Akash Mahendrakar
      </footer>
    </div>
  );
};

export default WeekSelection;
