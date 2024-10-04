import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import TrigCalculator from "./TrigCalculator.jsx"; // Kalkulyator sahifasi
import TrigIdentities from "./TrigIdentities.jsx"; // Identifikatsiyalar sahifasi
import TrigTable from "./TrigTable.jsx"; // Trig jadval sahifasi
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Trigonometry Tools</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Calculator</Link>
              </li>
              <li>
                <Link to="/identities">Identities</Link>
              </li>
              <li>
                <Link to="/table">Table</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<TrigCalculator />} />
          <Route path="/identities" element={<TrigIdentities />} />
          <Route path="/table" element={<TrigTable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
