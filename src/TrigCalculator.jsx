import React, { useState } from "react";
import "./App.scss";

const TrigCalculator = () => {
  const [angle, setAngle] = useState("");
  const [functionType, setFunctionType] = useState("sin");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const radian = (angle * Math.PI) / 180;
    let value = 0;

    switch (functionType) {
      case "sin":
        value = Math.sin(radian);
        break;
      case "cos":
        value = Math.cos(radian);
        break;
      case "tan":
        value = Math.tan(radian);
        break;
      case "cot":
        value = 1 / Math.tan(radian);
        break;
      default:
        break;
    }

    setResult(value.toFixed(2));
  };

  return (
    <div className="trig-calculator">
      <h2>Trigonometrik Kalkulyator</h2>
      <div className="calculator-form">
        <label htmlFor="angle">Burchakni kiriting (gradus):</label>
        <input
          type="number"
          id="angle"
          value={angle}
          onChange={(e) => setAngle(e.target.value)}
        />
        <label htmlFor="functionType">Funksiyani tanlang:</label>
        <select
          id="functionType"
          value={functionType}
          onChange={(e) => setFunctionType(e.target.value)}
        >
          <option value="sin">sin</option>
          <option value="cos">cos</option>
          <option value="tan">tan</option>
          <option value="cot">cot</option>
        </select>
        <button onClick={handleCalculate}>Hisoblash</button>
      </div>
      {result !== null && (
        <div className="result">
          <h3>Natija: {result}</h3>
        </div>
      )}
    </div>
  );
};

export default TrigCalculator;
