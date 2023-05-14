import React from "react"
import Weather from "./Weather.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="box">
<Weather />
      </div>
      <footer>
        <a
        href="https://github.com/ZeynabSherafat/react-final-project"
        target="_blank"
        rel="noreferrer">
          Open-source code
        </a> {" "}
by Zeynab Sherafat
      </footer>
      </div>
    </div>
  );
}

export default App;
