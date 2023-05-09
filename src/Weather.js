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
            <h1>9°C</h1>
            <h2>Karaj, Iran</h2>
            </div>
            <div className="col-5 " id="forecast">
          <row>
            <div className="col border border-primary">
              Hello
            </div>
            <div className="col border border-primary">
              hi
            </div>
          </row>
          <hr />
          <row>
            <div className="col border border-primary">
              Hello
            </div>
            <div className="col border border-primary">
              hi
            </div>
          </row>
          <hr />
          <row>
            <div className="col border border-primary">
              Hello
            </div>
            <div className="col border border-primary">
              hi
            </div>
          </row>
          <hr />
          <row>
            <div className="col border border-primary">
              Hello
            </div>
            <div className="col border border-primary">
              hi
            </div>
          </row>
          <hr />
          <row>
            <div className="col border border-primary">
              Hello
            </div>
            <div className="col border border-primary">
              hi
            </div>
          </row>
          </div>
          </div>
          </div>
        </div>
    )
}