import React from "react";
import "./Weather.css"

export default function Weather(){
    return (
        <div className="Weather">
            <div className="container"> 
            <div className="row">
                <div className="col-7">
            <form>
            <input
            type="text"
            className="form-control"
            placeholder="Enter the city"
            autocomplete="off"
            id="search-bar"
          />
          <input type="submit" className="btn btn-primary" value="Search" id="submit-button"/>
            </form>
            <h5><span>Saturday</span>,{" "}<span>5:30</span></h5>
            <h5>May 2023</h5>
            <h3>Mostly Cloudy</h3>
            <h1>9°C</h1>
            <h2>Karaj, Iran</h2>
            </div>
            <div className="col-5" id="forecast">
            <row>
            <div className="col">
                <span className="forecast-temp">17°/25°</span>
                <span className="forecast-date">Sun</span>
          <hr />
            </div>
          </row>
          <row>
            <div className="col">
                <span className="forecast-temp">12°/16°</span>
                <span className="forecast-date">Mon</span>
          <hr />
            </div>
          </row>
          <row>
            <div className="col">
                <span className="forecast-temp">9°/17°</span>
                <span className="forecast-date">Tue</span>
          <hr />
            </div>
          </row>
          <row>
            <div className="col">
                <span className="forecast-temp">11°/21°</span>
                <span className="forecast-date">Wed</span>
          <hr />
            </div>
          </row>
          <row>
            <div className="col">
                <span className="forecast-temp">13°/18°</span>
                <span className="forecast-date">Thu</span>
          <hr />
            </div>
          </row>
          </div>
          </div>
          </div>
        </div>
    )
}