import React from "react"
import Weather from "./Weather.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="box">
        <div className="forecast-background">
        </div>
<Weather />
      </div>
      </div>
    </div>
  );
}

export default App;
