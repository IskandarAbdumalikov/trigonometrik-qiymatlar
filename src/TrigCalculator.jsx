import React, { useState } from "react";
import "./App.scss"; // SCSS faylimizni ulash

const TrigCalculator = () => {
  const [degree, setDegree] = useState("");
  const [operation, setOperation] = useState("sin");
  const [result, setResult] = useState(null);

  // Degree to Radian converter
  const toRadian = (deg) => (deg * Math.PI) / 180;

  // Function to calculate the result
  const calculate = () => {
    const radian = toRadian(parseFloat(degree));
    let calcResult = 0;

    switch (operation) {
      case "sin":
        calcResult = Math.sin(radian);
        break;
      case "cos":
        calcResult = Math.cos(radian);
        break;
      case "tan":
        calcResult = Math.tan(radian);
        break;
      case "ctg":
        calcResult = 1 / Math.tan(radian); // Ctg is 1/tan
        break;
      default:
        calcResult = 0;
    }

    setResult(calcResult);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Trig Function Calculator</h1>
      </header>
      <div className="calculator">
        <h2>Calculate Trigonometric Functions</h2>
        <div className="input-group">
          <label>
            Degree:
            <input
              type="number"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              placeholder="Enter degree"
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Select Operation:
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
            >
              <option value="sin">sin</option>
              <option value="cos">cos</option>
              <option value="tan">tan</option>
              <option value="ctg">ctg</option>
            </select>
          </label>
        </div>
        <button className="calculate-btn" onClick={calculate}>
          Calculate
        </button>
        {result !== null && (
          <div className="result">
            <h3>Result: {result.toFixed(4)}</h3>{" "}
            {/* Showing result up to 4 decimal places */}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrigCalculator;
