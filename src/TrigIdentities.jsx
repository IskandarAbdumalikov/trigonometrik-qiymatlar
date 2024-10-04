import React from "react";
import "./App.scss";

const TrigIdentities = () => {
  return (
    <div className="trig-identities">
      <h2>Asosiy Trigonometrik Identifikatsiyalar</h2>
      <ul>
        <li>sin²(θ) + cos²(θ) = 1</li>
        <li>1 + tan²(θ) = sec²(θ)</li>
        <li>1 + cot²(θ) = csc²(θ)</li>
        <li>sin(2θ) = 2sin(θ)cos(θ)</li>
        <li>cos(2θ) = cos²(θ) - sin²(θ)</li>
        <li>tan(2θ) = 2tan(θ) / (1 - tan²(θ))</li>
      </ul>
    </div>
  );
};

export default TrigIdentities;
