import React from "react";
import "./App.scss";

const TrigTable = () => {
  const angles = [0, 15, 30, 45, 60, 90, 180, 270, 360];

  // Calculate trigonometric values
  const sinValues = angles.map((angle) =>
    Math.sin((angle * Math.PI) / 180).toFixed(2)
  );
  const cosValues = angles.map((angle) =>
    Math.cos((angle * Math.PI) / 180).toFixed(2)
  );
  const tanValues = angles.map((angle) =>
    angle === 90 || angle === 270
      ? "undefined"
      : Math.tan((angle * Math.PI) / 180).toFixed(2)
  );
  const cotValues = angles.map((angle) =>
    angle === 0 || angle === 180 || angle === 360
      ? "undefined"
      : (1 / Math.tan((angle * Math.PI) / 180)).toFixed(2)
  );

  // Calculate radians
  const radianValues = angles.map((angle) => {
    const rad = (angle * Math.PI) / 180;
    return `${rad.toFixed(2)} rad`;
  });

  // Calculate fractional values
  const fractionalSinValues = angles.map((angle) => {
    switch (angle) {
      case 0:
        return "0";
      case 15:
        return "√6 - √2 / 4"; // sin(15°)
      case 30:
        return "1/2";
      case 45:
        return "√2/2";
      case 60:
        return "√3/2";
      case 90:
        return "1";
      case 180:
        return "0";
      case 270:
        return "undefined";
      case 360:
        return "0";
      default:
        return "";
    }
  });

  const fractionalCosValues = angles.map((angle) => {
    switch (angle) {
      case 0:
        return "1";
      case 15:
        return "√6 + √2 / 4"; // cos(15°)
      case 30:
        return "√3/2";
      case 45:
        return "√2/2";
      case 60:
        return "1/2";
      case 90:
        return "0";
      case 180:
        return "-1";
      case 270:
        return "undefined";
      case 360:
        return "1";
      default:
        return "";
    }
  });

  const fractionalTanValues = angles.map((angle) => {
    switch (angle) {
      case 0:
        return "undefined";
      case 15:
        return "√3 - 1 / √3 + 1"; // tan(15°)
      case 30:
        return "1/√3"; // or √3/3
      case 45:
        return "1";
      case 60:
        return "√3";
      case 90:
        return "undefined";
      case 180:
        return "0";
      case 270:
        return "undefined";
      case 360:
        return "0";
      default:
        return "";
    }
  });

  const fractionalCotValues = angles.map((angle) => {
    switch (angle) {
      case 0:
      case 180:
      case 360:
        return "undefined";
      case 15:
        return "√3 + 1 / √3 - 1"; // cot(15°)
      case 30:
        return "√3"; // cot(30°)
      case 45:
        return "1";
      case 60:
        return "1/√3"; // or √3/3
      case 90:
        return "0";
      case 270:
        return "undefined";
      default:
        return "";
    }
  });

  return (
    <div className="trig-table">
      <h2>Trigonometrik Qiymatlar Jadvali</h2>
      <table>
        <thead>
          <tr>
            <th>Burchak (°)</th>
            <th>Burchak (rad)</th>
            <th>sin(θ)</th>
            <th>sin(θ) (kasr ko'rinishi)</th>
            <th>cos(θ)</th>
            <th>cos(θ) (kasr ko'rinishi)</th>
            <th>tan(θ)</th>
            <th>tan(θ) (kasr ko'rinishi)</th>
            <th>cot(θ)</th>
            <th>cot(θ) (kasr ko'rinishi)</th>
          </tr>
        </thead>
        <tbody>
          {angles.map((angle, index) => (
            <tr key={index}>
              <td>{angle}</td>
              <td>{radianValues[index]}</td>
              <td>{sinValues[index]}</td>
              <td>{fractionalSinValues[index]}</td>
              <td>{cosValues[index]}</td>
              <td>{fractionalCosValues[index]}</td>
              <td>{tanValues[index]}</td>
              <td>{fractionalTanValues[index]}</td>
              <td>{cotValues[index]}</td>
              <td>{fractionalCotValues[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrigTable;
