import React, { useState } from "react";
import "./Task4.css";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJs.register(Tooltip, Title, ArcElement, Legend);
const Task4 = () => {
  const [percent, setPercent] = useState({
    correct: "",
    wrong: "",
  });
  const [err, setErr] = useState("");
  const [data, setData] = useState({
    datasets: [
      {
        data: [85, 15],
        backgroundColor: ["green", "red"],
      },
    ],
    labels: ["correct", "wrong"],
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (value <= 100 && value >= 0) {
      if (name === "correct") {
        setPercent({ correct: value, wrong: 100 - value });
        setErr("");
      } else {
        setPercent({ correct: 100 - value, wrong: value });
        setErr("");
      }
    } else {
      setErr("percentage value always less than 100 and greater than 0");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((percent.correct === "", percent.wrong === "")) {
      setErr("please enter percentage value");
    } else if (!err) {
      setData({
        datasets: [
          {
            data: [percent.correct, percent.wrong],
            backgroundColor: ["green", "red"],
          },
        ],
        labels: ["correct", "wrong"],
      });
    }
  };
  return (
    <div className="container">
      {err && <p style={{ color: "red" }}>{err}</p>}
      <div className="form">
        <div>
          <label htmlFor="correct">Correct %</label>
          <input
            type="number"
            id="correct"
            name="correct"
            value={percent.correct}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="wrong">wrong %</label>
          <input
            type="number"
            id="wrong"
            name="wrong"
            value={percent.wrong}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Add</button>
      </div>
      <div
        className="App"
        style={{ width: "40%", height: "40%", margin: "0 auto" }}
      >
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Task4;